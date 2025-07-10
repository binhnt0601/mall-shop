import { BaseModel } from "@/helpers/base-model";

// import { Assignment } from "./assignment.model";
// import { Class } from "./class.model";
import { User } from "../user/user.model";

export interface Score extends BaseModel {
  id: string;
  student: string | User;
  // class: { id: string; name: string };
  // assignment: { id: string; title: string };
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
