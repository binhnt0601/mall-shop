import { CrudRepository } from "@/graphql/repo/crud";

import { scoreFields } from "./score.field";
import { Score } from "./score.model";
import { assignmentFields } from "../assignment/assignment.field";
import { classFields } from "../class/class.field";
import { userFields } from "../user/user.field";

export class ScoreRepository extends CrudRepository<Score> {
  apiName = "Score";

  shortFragment = this.parseFragment(`
    ${scoreFields}
  `);

  fullFragment = this.parseFragment(`
    ${scoreFields}
    student {
      ${userFields}
    }
    class {
      ${classFields}
      teacher {
        ${userFields}
      }
    }
    assignment {
      ${assignmentFields}
    }
  `);
}

export const ScoreService = new ScoreRepository();
