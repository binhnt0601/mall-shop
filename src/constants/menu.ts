import { t } from "@lingui/macro";

export const getAdminMenu = () => [
  {
    categoryCode: t`MANAGEMENT`,
    code: "user",
    icon: "user",
    title: t`User`,
    url: "/manage/user",
  },
  {
    categoryCode: t`SYSTEM`,
    code: "setting",
    icon: "setting",
    title: t`Setting`,
    url: "/setting/COMMON",
  },
];

export const getUserMenu = () => [
  {
    categoryCode: "MEMBER",
    code: "user",
    icon: "user",
    title: "User",
    url: "/manage/user",
  },
];

export const getDashboardOnlyMenu = () => [
  {
    categoryCode: "",
    code: "dashboard",
    icon: "dashboard",
    title: t`Dashboard`,
    url: "/manage/dashboard",
  },
];
