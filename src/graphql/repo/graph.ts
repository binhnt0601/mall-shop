/* eslint-disable import/named */
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import {
  ApolloQueryResult,
  FetchResult,
  gql,
  MutationOptions,
  QueryOptions,
} from "@apollo/client/core";

import { initializeApollo } from "@/graphql/apollo-client";

export class GraphRepository {
  static instance: GraphRepository | null = null;
  static getInstance() {
    if (GraphRepository.instance === null) {
      GraphRepository.instance = new GraphRepository();
    }

    return GraphRepository.instance;
  }

  private _apollo?: ApolloClient<NormalizedCacheObject>;
  get apollo() {
    if (!this._apollo) {
      this._apollo = initializeApollo();
    }

    return this._apollo;
  }

  gql: any = gql;

  query({
    query,
    options,
    variablesParams,
  }: {
    query: string[] | string;
    options?: Partial<QueryOptions>;
    variablesParams?: string;
  }) {
    return this.apollo.query<any>({
      query: gql`
        ${this.generateGQL("query", query, variablesParams)}
      `,
      variables: options?.variables,
      fetchPolicy: options?.fetchPolicy,
    });
  }

  watchQuery({
    query,
    options,
    variablesParams,
  }: {
    query: string[] | string;
    options?: Partial<QueryOptions>;
    variablesParams?: string;
  }) {
    return this.apollo.watchQuery<any>({
      query: gql`
        ${this.generateGQL("query", query, variablesParams)}
      `,
      variables: options?.variables,
      fetchPolicy: options?.fetchPolicy,
    });
  }

  async mutate({
    mutation,
    options,
    variablesParams,
  }: {
    mutation: string[] | string;
    options?: Partial<MutationOptions>;
    variablesParams?: string;
  }) {
    const result = await this.apollo.mutate<any>({
      mutation: gql`
        ${this.generateGQL("mutation", mutation, variablesParams)}
      `,
      variables: options?.variables,
      fetchPolicy: options?.fetchPolicy,
      context: options?.context,
    });

    let clearStoreFlag = false;
    let mutationList = [];

    if (typeof mutation === "string") {
      mutationList.push(mutation.trim());
    } else {
      mutationList = mutation.map((x) => x.trim());
    }
    for (const m of mutationList) {
      if (
        m.indexOf("create") === 0 ||
        m.indexOf("delete") === 0 ||
        m.indexOf("update") === 0
      ) {
        clearStoreFlag = true;
        break;
      }
    }
    if (clearStoreFlag) {
      await this.clearStore();
    }

    return result.data;
  }

  generateGQL(
    type: "query" | "mutation",
    list: string[] | string,
    variableParams: string = ""
  ) {
    let gql = `${type}${variableParams || ""} {
        `;

    if (typeof list === "string") {
      gql += `g0: ${list}
        `;
    } else {
      for (let i = 0; i < list.length; i++) {
        gql += `\ng${i}: ${list[i]}`;
      }
    }
    gql += `
      }`;
    gql = gql.replace(/\s{2,}/g, " ");
    // console.log(gql);

    return gql;
  }

  async clearStore() {
    await this.apollo.clearStore();
  }

  handleError(result: ApolloQueryResult<any> | FetchResult) {
    if ((result as ApolloQueryResult<any>).error) {
      throw Error(
        (result as ApolloQueryResult<any>).error?.message ?? "Unknown error"
      );
    }
    if (result.errors && result.errors.length > 0) {
      throw Error(result.errors[0].message);
    }
  }

  parseFragment = (fragment: string) => {
    const fragments = [];
    const lines = fragment.trim().split("\n");

    for (const line of lines) {
      const parts = line.split(":");
      const key = parts[0];

      fragments.push(key);
    }

    return fragments.join(" ").trim();
  };
}

export const GraphService = new GraphRepository();
