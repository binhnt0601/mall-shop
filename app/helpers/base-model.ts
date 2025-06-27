export interface Pagination {
  limit?: number;
  offset?: number;
  page?: number;
  total?: number;
}

// eslint-disable-next-line unused-imports/no-unused-vars
export class QueryInput<T> {
  limit?: number;
  page?: number;
  offset?: number;
  search?: string;
  order?: any;
  filter?: any;
}

export interface GetListData<T> {
  data: T[];
  total: number;
  pagination: Pagination;
}

export interface BaseModel {
  id?: string;
  updatedAt?: string;
  createdAt?: string;
  [x: string]: any;
}

