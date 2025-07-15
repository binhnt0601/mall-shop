import { CrudRepository } from "@/graphql/repo/crud";

import { assignmentSubmissionFields } from "./assignment-submission.field";
import { AssignmentSubmission } from "./assignment-submission.model";
import { assignmentFields } from "../assignment/assignment.field";
import { userFields } from "../user/user.field";

export class AssignmentSumissionRepository extends CrudRepository<AssignmentSubmission> {
  apiName = "Assignment";

  shortFragment = this.parseFragment(`
    ${assignmentSubmissionFields}
  `);

  fullFragment = this.parseFragment(`
    ${assignmentSubmissionFields}
    assignment {
      ${assignmentFields}
    }
    student {
      ${userFields}
    }
  `);
}

export const AssignmentSumissionService = new AssignmentSumissionRepository();
