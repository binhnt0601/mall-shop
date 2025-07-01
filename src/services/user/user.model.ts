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
  name?: string;
  email?: string;
  phone?: string;
  role?: UserRoles;
  lastLoginAt?: Date;
  status?: UserStatuses;
  isFirstLogin?: boolean;
  address?: string;
  payment?: Payment;
  infoReferrence?: InforReferrence;
  referralCode?: string;
  referrenceId?: string;
  level?: number;
  countReferrence?: number;
  source?: string;

  sold?: number;
  total?: number;
  usdt?: number;
  usd?: number;
  vnd?: number;
}

export enum UserRoles {
  ADMIN = "ADMIN",
  MEMBER = "MEMBER",
  MERCHANT = "MERCHANT",
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
  CUSTOMER: "CUSTOMER",
  ADMIN_EDITOR: ["ADMIN", "EDITOR"],
  ADMIN_MEMBER: ["ADMIN", "MEMBER"],
  ADMIN_MEMBER_EDITOR: ["ADMIN", "EDITOR", "MEMBER"],
  ADMIN_MEMBER_CUSTOMER: ["ADMIN", "MEMBER", "CUSTOMER"],
};

export const setUserToken = (token: string, temp = false) => {
  // console.log('token',token);
  if (temp) {
    sessionStorage.setItem("user-token", token);
  } else {
    localStorage.setItem("user-token", token);
  }
};

export const clearUserToken = () => {
  localStorage.removeItem("user-token");
  sessionStorage.removeItem("user-token");
};

export const getUserToken = () => {
  return (
    localStorage.getItem("user-token") ||
    sessionStorage.getItem("user-token") ||
    ""
  );
};

export const userRoleData = [
  { name: UserRoles.ADMIN, value: UserRoles.ADMIN },
  { name: UserRoles.MERCHANT, value: UserRoles.MERCHANT },
];

export const merchantRoleData = [
  { name: UserRoles.MERCHANT, value: UserRoles.MERCHANT },
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
  role: UserRoles.MEMBER,
  email: "",
};
