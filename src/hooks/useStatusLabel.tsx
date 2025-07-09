import { t } from "@lingui/macro";

export function useStatusLabel(status?: string) {
  switch (status) {
    case "ACTIVE":
      return {
        color: "#16a34a",
        text: "#fff",
        label: t`Active`,
      };
    case "INACTIVE":
      return {
        color: "#9ca3af",
        text: "#111",
        label: t`Inactive`,
      };
    case "PENDING":
      return {
        color: "#fbbf24",
        text: "#fff",
        label: t`Pending`,
      };
    case "BLOCKED":
      return {
        color: "#ef4444",
        text: "#fff",
        label: t`Blocked`,
      };
    default:
      return {
        color: "#9ca3af",
        text: "#111",
        label: t`Unknown`,
      };
  }
}
