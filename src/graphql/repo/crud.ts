/* eslint-disable react/no-is-mounted */
import { MutationOptions, QueryOptions } from "@apollo/client/core";

import { BaseModel, GetListData, QueryInput } from "@/helpers/base-model";
import { queryParser } from "@/helpers/query-parser";

import { GraphRepository } from "./graph";

export abstract class CrudRepository<
  T extends BaseModel,
> extends GraphRepository {
  abstract apiName: string;
  abstract shortFragment: string;
  abstract fullFragment: string;

  getAllQuery(
    {
      query = { limit: 10 },
      fragment = this.shortFragment,
    }: {
      query: QueryInput<T> | string;
      fragment?: string;
    } = {
      query: { limit: 10 },
    }
  ): string {
    if ((query as QueryInput<T>).limit === 0) {
      (query as QueryInput<T>).limit = 1000;
    }

    const api = `getAll${this.apiName}`;

    return `${api}(
    q: ${queryParser(query, { hasBraces: true })}, 
    ) { data { ${fragment} } total pagination { limit page total } }`;
  }

  getMyQuery(
    {
      query = { limit: 10 },
      fragment = this.shortFragment,
    }: {
      query: QueryInput<T> | string;
      fragment?: string;
    } = {
      query: { limit: 10 },
    }
  ): string {
    if ((query as QueryInput<T>).limit === 0) {
      (query as QueryInput<T>).limit = 1000;
    }

    const api = `getMy${this.apiName}`;

    return `${api}(
    q: ${queryParser(query, { hasBraces: true })}, 
    ) { data { ${fragment} } total pagination { limit page total } }`;
  }

  getDataQuery(
    {
      apiName,
      query = { limit: 10 },
      fragment = this.shortFragment,
    }: {
      apiName?: string;
      query: QueryInput<T> | string;
      fragment?: string;
    } = {
      query: { limit: 10 },
    }
  ): string {
    if ((query as QueryInput<T>).limit === 0) {
      (query as QueryInput<T>).limit = 1000;
    }

    return `${apiName}(q: ${queryParser(query, {
      hasBraces: true,
    })}) { data { ${fragment} } total pagination { limit page total } }`;
  }

  async getAll({
    query = { limit: 10 },
    fragment = this.shortFragment,
    cache = false,
  }: {
    fragment?: string;
    query?: QueryInput<T>;
    cache?: boolean;
    projection?: string;
  } = {}): Promise<GetListData<T>> {
    if ((query as QueryInput<T>).limit === 0) {
      (query as QueryInput<T>).limit = 1000;
    }
    const queryData = {
      query: "$q",
      fragment,
    };

    const options = {
      query: this.gql(
        `${this.generateGQL(
          "query",
          `${this.getAllQuery(queryData)}`,
          "($q: QueryGetListInput!)"
        )}`
      ),
      variables: { q: query },
      fetchPolicy: cache ? "cache-first" : "network-only",
    } as QueryOptions;

    const result = await this.apollo.query<any>(options);

    this.handleError(result);

    return {
      data: result.data["g0"].data as T[],
      total: result.data["g0"].total,
      pagination: result.data["g0"].pagination,
    };
  }

  getOneQuery({
    id,
    fragment = this.fullFragment,
  }: {
    id: string;
    fragment?: string;
  }): string {
    const api = `getOne${this.apiName}`;

    return `${api}(id: "${id}") { ${fragment} }`;
  }

  async getOne({
    id,
    fragment = this.fullFragment,
    cache = true,
  }: {
    id: string;
    fragment?: string;
    cache?: boolean;
  }) {
    const options = {
      query: this.gql(
        `${this.generateGQL("query", `${this.getOneQuery({ id, fragment })}`)}`
      ),
      fetchPolicy: cache ? "cache-first" : "network-only",
    } as QueryOptions;

    const result = await this.apollo.query(options);

    this.handleError(result);
    // console.log("getOne" + this.apiName, result.data["g0"]);
    // eslint-disable-next-line newline-before-return
    return result.data["g0"] as T;
  }

  createQuery({
    data,
    fragment = this.fullFragment,
  }: {
    data: Partial<T> | string;
    fragment?: string;
  }): string {
    const api = `create${this.apiName}`;

    return `${api}(data: ${queryParser(data, { hasBraces: true })}) { ${fragment} }`;
  }

  async create({
    data,
    array,
    fragment = this.fullFragment,
  }: {
    data?: Partial<T>;
    array?: Partial<T>[];
    fragment?: string;
  }) {
    if (data) {
      const options = {
        mutation: this.gql(
          `${this.generateGQL(
            "mutation",
            `${this.createQuery({ data: "$data", fragment })}`,
            `($data: Create${this.apiName}Input!)`
          )}`
        ),
        fetchPolicy: "no-cache",
        variables: { data },
      } as MutationOptions;

      const result = await this.apollo.mutate(options);

      await this.clearStore();
      this.handleError(result);

      return result.data["g0"] as T;
    } else if (array && array.length > 0) {
      const gQLs = array.map((data) => {
        return `${this.createQuery({ data, fragment })}`;
      });

      const options = {
        mutation: this.gql(`${this.generateGQL("mutation", gQLs, "")}`),
        fetchPolicy: "no-cache",
      } as MutationOptions;

      const response = await this.apollo.mutate(options);

      await this.clearStore();
      this.handleError(response);

      const result = array.map((_, i) => {
        return response.data[`g${i}`];
      });
      // console.log('result', result);

      return result as T[];
    } else return;
  }

  updateQuery({
    id,
    data,
    fragment = this.fullFragment,
  }: {
    id: string;
    data: Partial<T> | string;
    fragment?: string;
  }): string {
    const api = `update${this.apiName}`;

    return `${api}(id: "${id}", data: ${queryParser(data, { hasBraces: true })}) { ${fragment} }`;
  }

  mutationById({
    api,
    id,
    data,
    fragment = this.fullFragment,
  }: {
    api: string;
    id: string;
    data: Partial<T> | string;
    fragment?: string;
  }): string {
    return `${api}(id: "${id}", data: ${queryParser(data, { hasBraces: true })}) { ${fragment} }`;
  }

  mutationData({
    api,
    data,
    fragment = this.fullFragment,
  }: {
    api: string;
    data?: Partial<T> | string;
    fragment?: string;
  }): string {
    if (data) {
      return `${api}(data: ${queryParser(data, { hasBraces: true })}) { ${fragment} }`;
    }

    return `${api} { ${fragment} }`;
  }

  async update({
    id,
    data,
    fragment = this.fullFragment,
  }: {
    id: string;
    data: Partial<T>;
    fragment?: string;
  }) {
    const options = {
      mutation: this.gql(
        `${this.generateGQL(
          "mutation",
          `${this.updateQuery({ id, data: "$data", fragment })}`,
          `($data: Update${this.apiName}Input!)`
        )}`
      ),
      variables: { data },
      fetchPolicy: "no-cache",
    } as MutationOptions;

    const result = await this.apollo.mutate(options);

    await this.clearStore();
    this.handleError(result);

    return result.data["g0"] as T;
  }

  createOrUpdate({
    id,
    data,
    fragment = this.shortFragment,
  }: {
    id?: string;
    data: Partial<T>;
    fragment?: string;
  }) {
    if (id) {
      return this.update({ id, data, fragment });
    } else {
      return this.create({ data, fragment });
    }
  }

  deleteQuery({
    id,
    fragment = "id",
  }: {
    id: string;
    fragment?: string;
  }): string {
    const api = `deleteOne${this.apiName}`;

    return `${api}(id: "${id}") { ${fragment} }`;
  }

  async delete({
    id,
    ids,
    fragment = this.shortFragment,
  }: {
    id?: string;
    ids?: string[];
    fragment?: string;
  }) {
    if (id) {
      const options = {
        mutation: this.gql(
          `${this.generateGQL(
            "mutation",
            `${this.deleteQuery({ id, fragment })}`
          )}`
        ),
        fetchPolicy: "no-cache",
      } as MutationOptions;

      const result = await this.apollo.mutate(options);

      await this.clearStore();
      // this.apollo.cache.removeOptimistic(id);
      this.handleError(result);

      return result.data["g0"] as T;
    } else if (ids && ids.length) {
      const options = {
        mutation: this.gql(
          `${this.generateGQL(
            "mutation",
            ids.map((id) => `${this.deleteQuery({ id, fragment })}`)
          )}`
        ),
        fetchPolicy: "no-cache",
      } as MutationOptions;

      const result = await this.apollo.mutate(options);

      await this.clearStore();
      // ids.map((id) => this.apollo.cache.removeOptimistic(id));
      this.handleError(result);

      return result.data;
    } else return;
  }
}
