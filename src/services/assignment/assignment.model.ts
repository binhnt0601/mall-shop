import { BaseModel } from "@/helpers/base-model";

import { AssignmentSubmission } from "../assignment-submission/assignment-submission.model";
import { Class } from "../class/class.model";
import { User } from "../user/user.model";

export interface Assignment extends BaseModel {
  id: string;
  title: string;
  content: string;
  class: Class;
  teacher: User;
  deadline: string;
  attachmentUrl: string;
  submissions: [AssignmentSubmission];
}
