import { t } from "@lingui/macro";

type StatusConfig = {
  color: string;
  text: string;
  label: string;
};

const STATUS_MAP: Record<string, StatusConfig> = {
  // ---- Xanh lá (Success/Passed/Active) ----
  ACTIVE: { color: "#22c55e", text: "#fff", label: t`Active` },
  PASSED: { color: "#22c55e", text: "#fff", label: t`Passed` },

  // ---- Xanh dương (Info/Completed/Graded) ----
  COMPLETED: { color: "#2563eb", text: "#fff", label: t`Completed` },
  GRADED: { color: "#0ea5e9", text: "#fff", label: t`Graded` },
  SUBMITTED: { color: "#06b6d4", text: "#fff", label: t`Submitted` },

  // ---- Vàng/Cam (Warning/Pending/Blocked) ----
  PENDING: { color: "#fbbf24", text: "#111", label: t`Pending` },
  BLOCKED: { color: "#d97706", text: "#fff", label: t`Blocked` },

  // ---- Đỏ (Error/Failed/Canceled/Late) ----
  CANCELED: { color: "#ef4444", text: "#fff", label: t`Canceled` },
  FAILED: { color: "#f43f5e", text: "#fff", label: t`Failed` },
  LATE: { color: "#f43f5e", text: "#fff", label: t`Late` },

  // ---- Xám (Draft/Inactive/Closed) ----
  DRAFT: { color: "#a3a3a3", text: "#fff", label: t`Draft` },
  INACTIVE: { color: "#a3a3a3", text: "#fff", label: t`Inactive` },
  CLOSED: { color: "#a3a3a3", text: "#fff", label: t`Closed` },
};

const DEFAULT_STATUS: StatusConfig = {
  color: "#cbd5e1",
  text: "#111",
  label: t`Unknown`,
};

export function useStatusLabel(status?: string): StatusConfig {
  return STATUS_MAP[status || ""] || DEFAULT_STATUS;
}
