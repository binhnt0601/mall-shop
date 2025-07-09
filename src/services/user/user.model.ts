import { BaseModel } from "@/helpers/base-model";

type Payment = {
  bankName?: string;
  accountBankName?: string;
  bankNumber?: string;
  walletAddress?: string;
};

type InforReferrence = {
  id: string;
  email: string;
  name: string;
  phone: string;
};

export interface User extends BaseModel {
  googleId?: string;
  name?: string;
  email?: string;
  address?: string;
  district?: string;
  ward?: string;
  city?: string;
  phone?: string;
  password?: string;
  role?: UserRoles;
  userType?: UserTypes;
  avatar?: string;
  level?: number;
  lastLoginAt?: Date;
  status?: UserStatuses;
  isFirstLogin?: boolean;
  referralCode?: string;
  referrenceId?: string;
  payment?: Payment;
  infoReferrence?: InforReferrence;
}

export enum UserRoles {
  ADMIN = "ADMIN",
  USER = "USER",
}

export enum UserTypes {
  TEACHER = "TEACHER",
  STUDENT = "STUDENT",
}

export enum UserStatuses {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

export enum UserServiceStatus {
  FREE = "FREE",
  EXPIRED = "EXPIRED",
  PAID = "PAID",
}

export const ROLES = {
  ADMIN: "ADMIN",
  EDITOR: "EDITOR",
  MEMBER: "MEMBER",
  ADMIN_EDITOR: ["ADMIN", "EDITOR"],
  ADMIN_MEMBER: ["ADMIN", "MEMBER"],
  ADMIN_MEMBER_EDITOR: ["ADMIN", "EDITOR", "MEMBER"],
  ADMIN_MEMBER_CUSTOMER: ["ADMIN", "MEMBER"],
};

export const userRoleData = [
  { name: UserRoles.ADMIN, value: UserRoles.ADMIN },
  { name: UserRoles.USER, value: UserRoles.USER },
];

export const userStatusData = [
  { name: UserStatuses.ACTIVE, value: UserStatuses.ACTIVE },
  { name: UserStatuses.INACTIVE, value: UserStatuses.INACTIVE },
];

export type CreateUserInput = {
  name: string;
  email: string;
  password: string;
  role: UserRoles;
};

export type UpdateUserInput = {
  name: string;
  role: UserRoles;
  status: UserStatuses;
};

export const UserInitialValues = {
  name: "",
  role: UserRoles.USER,
  email: "",
};
