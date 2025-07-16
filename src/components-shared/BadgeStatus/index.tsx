import { Chip } from "@mui/material";

import { useStatusLabel } from "@/hooks/useStatusLabel";

export interface BadgeStatusProps {
  status?: string;
  sx?: any;
  className?: string;
}

export function BadgeStatus({ status, sx, className }: BadgeStatusProps) {
  const { color, text, label } = useStatusLabel(status);

  return (
    <Chip
      label={label}
      size="small"
      sx={{
        background: color,
        color: text || "#fff",
        fontWeight: 500,
        textTransform: "capitalize",
        px: 1.2,
        ...sx,
      }}
      variant="filled"
      className={className}
      title={label}
    />
  );
}

export default BadgeStatus;
