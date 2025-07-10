import { gql, QueryOptions } from "@apollo/client/core";

import { CrudRepository } from "@/graphql/repo/crud";

import { scoreFields, scoreQuery } from "./score.field";
import { Score } from "./score.model";

export class ScoreRepository extends CrudRepository<Score> {
  apiName = "Score";

  shortFragment = this.parseFragment(`
    ${scoreFields}
  `);

  fullFragment = this.parseFragment(`
    ${scoreFields}
    student { id name }
    class { id name }
    assignment { id title }
  `);

  async getScoresByStudent(studentId: string) {
    const api = "getScoresByStudent";
    const option: QueryOptions = {
      query: gql`
        query {
          ${api}(studentId: "${studentId}") {
            ${scoreQuery}
          }
        }
      `,
      variables: {
        studentId,
      },
    };

    const result = await this.apollo.query(option);

    this.handleError(result);

    return result.data[api] as Score[];
  }
}

export const ScoreService = new ScoreRepository();
