import { CrudRepository } from "@/graphql/repo/crud";

import { assignmentFields } from "./assignment.field";
import { Assignment } from "./assignment.model";
import { assignmentSubmissionFields } from "../assignment-submission/assignment-submission.field";
import { classFields } from "../class/class.field";
import { userFields } from "../user/user.field";

export class AssignmentRepository extends CrudRepository<Assignment> {
  apiName = "Assignment";

  shortFragment = this.parseFragment(`
    ${assignmentFields}
  `);

  fullFragment = this.parseFragment(`
    ${assignmentFields}
    class {
      ${classFields}
    }
    teacher {
      ${userFields}
    }
    submissions {
      ${assignmentSubmissionFields}
    }
  `);
}

export const AssignmentService = new AssignmentRepository();
