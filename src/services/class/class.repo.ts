import { CrudRepository } from "@/graphql/repo/crud";

import { classFields } from "./class.field";
import { Class } from "./class.model";
import { userFields } from "../user/user.field";

export class ClassRepository extends CrudRepository<Class> {
  apiName = "Class";

  shortFragment = this.parseFragment(`
    ${classFields}
  `);

  fullFragment = this.parseFragment(`
    ${classFields}
    teacher {
      ${userFields}
    }
    students {
      ${userFields}
    }
    schedule {
      dayOfWeek
      startTime
      endTime
    }
  `);
}

export const ClassService = new ClassRepository();
