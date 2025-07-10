// src/utils/iconMap.ts

import {
  FaUser,
  FaChalkboardTeacher,
  FaBell,
  FaMoneyBill,
} from "react-icons/fa";
import { HiOutlineUser } from "react-icons/hi";
import {
  MdDashboard,
  MdSchool,
  MdAssignment,
  MdClass,
  MdEvent,
  MdPayment,
  MdSettings,
  MdScore,
  MdMenuBook,
  MdLibraryBooks,
} from "react-icons/md";

export type IconType = React.ComponentType<{
  size?: number;
  className?: string;
}>;

export type IconKey =
  | "dashboard"
  | "user"
  | "teacher"
  | "student"
  | "class"
  | "course"
  | "assignment"
  | "score"
  | "payment"
  | "notification"
  | "event"
  | "setting"
  | "profile"
  | "materials"
  | "payments";

export const ICON_COMPONENTS: Record<IconKey, IconType> = {
  dashboard: MdDashboard,
  user: FaUser,
  teacher: FaChalkboardTeacher,
  student: MdSchool,
  class: MdClass,
  course: MdLibraryBooks,
  assignment: MdAssignment,
  score: MdScore,
  payment: MdPayment,
  notification: FaBell,
  event: MdEvent,
  setting: MdSettings,
  profile: HiOutlineUser,
  materials: MdMenuBook,
  payments: FaMoneyBill,
};
