import { BaseModel } from "@/helpers/base-model";

export type CreateMediaInput = {
  name?: string;
};

export type UpdateMediaInput = {
  name?: string;
};

export enum MediaArgNames {
  name = "Name",
  url = "Url",
}

export enum MediaArgs {
  name = "name",
  url = "url",
}

export interface Media extends BaseModel {
  name?: string;
  url?: string;
}

export const MediaInitialValues: CreateMediaInput = {
  name: "",
};
