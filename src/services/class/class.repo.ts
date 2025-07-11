import { CrudRepository } from "@/graphql/repo/crud";

import { classFields } from "./class.field";
import { Class } from "./class.model";

export class ClassRepository extends CrudRepository<Class> {
  apiName = "Class";

  shortFragment = this.parseFragment(`
    ${classFields}
  `);

  fullFragment = this.parseFragment(`
    ${classFields}
  `);
}

export const ClassService = new ClassRepository();
