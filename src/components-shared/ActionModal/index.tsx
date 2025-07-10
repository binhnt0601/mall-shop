import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
} from "@mui/material";
import { ReactNode } from "react";

type ActionModalProps = {
  open: boolean;
  onClose: () => void;
  title?: ReactNode;
  children?: ReactNode;
  actions?: ReactNode; // custom actions
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
};

export default function ActionModal({
  open,
  onClose,
  title,
  children,
  actions,
  maxWidth = "xs",
}: ActionModalProps) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth={maxWidth} fullWidth>
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>
        <Box>{children}</Box>
      </DialogContent>
      {actions && <DialogActions>{actions}</DialogActions>}
    </Dialog>
  );
}
