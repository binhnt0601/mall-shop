import { BaseModel } from "@/helpers/base-model";

import { Assignment } from "../assignment/assignment.model";
import { Class } from "../class/class.model";
import { User } from "../user/user.model";

export interface Score extends BaseModel {
  id: string;
  student: string | User;
  class: Class;
  assignment: Assignment;
  subject: string;
  score: number;
  maxScore: number;
  status: ScoreStatus;
}

export enum ScoreStatus {
  PASSED = "PASSED",
  FAILED = "FAILED",
  ABSENT = "ABSENT",
}
