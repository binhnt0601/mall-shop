import { BaseModel } from "@/helpers/base-model";

import { User } from "../user/user.model";

type ClassScheduleItem = {
  dayOfWeek: number;
  startTime: string;
  endTime: string;
};

export interface Class extends BaseModel {
  id: string;
  name: string;
  description: string;
  type: string;
  level: string;
  schedule: ClassScheduleItem[];
  teacher: User;
  students: User[];
  status: string;
  fee: number;
}
