import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { IconButton, Snackbar, Alert, Tooltip } from "@mui/material";
import { useState } from "react";

type Props = {
  value: string;
  label?: string;
  iconSize?: "small" | "medium" | "large";
};

export default function CopyValue({ value, label, iconSize = "small" }: Props) {
  const [open, setOpen] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setOpen(true);
  };

  return (
    <>
      <Tooltip title={`Copy ${label || ""}`.trim()}>
        <IconButton size={iconSize} onClick={handleCopy}>
          <ContentCopyIcon fontSize={iconSize} />
        </IconButton>
      </Tooltip>
      <Snackbar
        open={open}
        autoHideDuration={1500}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="success" onClose={() => setOpen(false)}>
          {label ? `${label} copied!` : "Copied!"}
        </Alert>
      </Snackbar>
    </>
  );
}
