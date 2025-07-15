import { BaseModel } from "@/helpers/base-model";

import { User } from "../user/user.model";

export interface Class extends BaseModel {
  id: string;
  name: string;
  teacher: User;
  student: User[];
}
