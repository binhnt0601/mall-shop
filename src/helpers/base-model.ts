export interface Pagination {
  limit?: number;
  offset?: number;
  page?: number;
  total?: number;
}

export class QueryInput<T> {
  limit?: number;
  page?: number;
  offset?: number;
  search?: string;
  order?: any;
  filter?: Partial<T>;
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
