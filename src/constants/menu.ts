import { t } from "@lingui/macro";

import { UserRoles, UserTypes } from "@/services/user/user.model";

// --- ADMIN MENU ---
export const getAdminMenu = () => [
  {
    categoryCode: t`MANAGEMENT`,
    code: "user",
    icon: "user",
    title: t`Users`,
    header: t`User Management`,
    url: "/manage/user",
  },
  // {
  //   categoryCode: t`MANAGEMENT`,
  //   code: "teacher",
  //   icon: "teacher",
  //   title: t`Teachers`,
  //   header: t`Teacher Management`,
  //   url: "/manage/teacher",
  // },
  // {
  //   categoryCode: t`MANAGEMENT`,
  //   code: "student",
  //   icon: "student",
  //   title: t`Students`,
  //   header: t`Student Management`,
  //   url: "/manage/student",
  // },
  {
    categoryCode: t`MANAGEMENT`,
    code: "class",
    icon: "class",
    title: t`Classes`,
    header: t`Class Management`,
    url: "/manage/classes",
  },
  {
    categoryCode: t`MANAGEMENT`,
    code: "course",
    icon: "course",
    title: t`Courses`,
    header: t`Course Management`,
    url: "/manage/course",
  },
  {
    categoryCode: t`MANAGEMENT`,
    code: "assignment",
    icon: "assignment",
    title: t`Assignments`,
    header: t`Assignment Management`,
    url: "/manage/assignments",
  },
  {
    categoryCode: t`MANAGEMENT`,
    code: "score",
    icon: "score",
    title: t`Scores`,
    header: t`Score Management`,
    url: "/manage/scores",
  },
  {
    categoryCode: t`MANAGEMENT`,
    code: "payment",
    icon: "payment",
    title: t`Payments`,
    header: t`Payment Management`,
    url: "/manage/payment",
  },
  {
    categoryCode: t`MANAGEMENT`,
    code: "event",
    icon: "event",
    title: t`Events`,
    header: t`Event Management`,
    url: "/manage/event",
  },
  {
    categoryCode: t`SYSTEM`,
    code: "setting",
    icon: "setting",
    title: t`Settings`,
    header: t`System Settings`,
    url: "/manage/setting/COMMON",
  },
];

// --- TEACHER MENU ---
export const getTeacherMenu = () => [
  {
    categoryCode: t`TEACHING`,
    code: "my-classes",
    icon: "class",
    title: t`My Classes`,
    header: t`My Classes`,
    url: "/manage/teacher/classes",
  },
  {
    categoryCode: t`TEACHING`,
    code: "assignments",
    icon: "assignment",
    title: t`Assignments`,
    header: t`Assignment Management`,
    url: "/manage/teacher/assignments",
  },
  {
    categoryCode: t`TEACHING`,
    code: "scores",
    icon: "score",
    title: t`Scores`,
    header: t`My Class Scores`,
    url: "/manage/teacher/scores",
  },
  {
    categoryCode: t`TEACHING`,
    code: "materials",
    icon: "course",
    title: t`Materials`,
    header: t`Teaching Materials`,
    url: "/manage/teacher/materials",
  },
];

// --- STUDENT MENU ---
export const getStudentMenu = () => [
  {
    categoryCode: t`LEARNING`,
    code: "my-classes",
    icon: "class",
    title: t`My Classes`,
    header: t`My Classes`,
    url: "/manage/classes",
  },
  {
    categoryCode: t`LEARNING`,
    code: "assignments",
    icon: "assignment",
    title: t`Assignments`,
    header: t`My Assignments`,
    url: "/manage/assignments",
  },
  {
    categoryCode: t`LEARNING`,
    code: "scores",
    icon: "score",
    title: t`Scores`,
    header: t`My Scores`,
    url: "/manage/scores",
  },
  {
    categoryCode: t`LEARNING`,
    code: "materials",
    icon: "course",
    title: t`Materials`,
    header: t`Course Materials`,
    url: "/manage/student/materials",
  },
  {
    categoryCode: t`PAYMENT`,
    code: "payment",
    icon: "payment",
    title: t`Payments`,
    header: t`Payment History`,
    url: "/manage/student/payment",
  },
];

// --- DASHBOARD ---
export const getDashboardOnlyMenu = () => [
  {
    categoryCode: "Dashboard",
    code: "dashboard",
    icon: "dashboard",
    title: t`Dashboard`,
    header: t`Overview Dashboard`,
    url: "/manage/dashboard",
  },
];

// --GET MENU BY ROLE--
export function getMenuByRoleAndType(role: UserRoles, userType?: UserTypes) {
  if (role === UserRoles.ADMIN) {
    return [...getDashboardOnlyMenu(), ...getAdminMenu()];
  }
  if (role === UserRoles.USER && userType === UserTypes.TEACHER) {
    return [...getDashboardOnlyMenu(), ...getTeacherMenu()];
  }
  if (role === UserRoles.USER && userType === UserTypes.STUDENT) {
    return [...getDashboardOnlyMenu(), ...getStudentMenu()];
  }
  return getDashboardOnlyMenu();
}
