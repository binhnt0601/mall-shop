import { Trans } from "@lingui/macro";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import { Card, Stack, Typography, Button, Divider, Box } from "@mui/material";
import React from "react";

export default function ProfileSection({
  title,
  editing,
  onEdit,
  onSave,
  onCancel,
  children,
}: {
  title: string;
  editing: boolean;
  onEdit: () => void;
  onSave: () => void;
  onCancel: () => void;
  children: React.ReactNode;
}) {
  return (
    <Card sx={{ p: 3, mb: 3, borderRadius: 3, bgcolor: "#fff" }}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={1.5}
      >
        <Typography fontWeight={700} fontSize={20} color="text.primary">
          {title}
        </Typography>
        {!editing ? (
          <Button
            onClick={onEdit}
            size="small"
            variant="outlined"
            color="primary"
            startIcon={<EditIcon />}
            sx={{
              textTransform: "none",
              fontWeight: 600,
              borderRadius: 2,
              borderColor: "#2196f3",
              color: "#2196f3",
              "&:hover": {
                bgcolor: "rgba(33, 150, 243, 0.1)",
                borderColor: "#1976d2",
              },
              transition: "all 0.3s ease",
            }}
          >
            <Trans>Edit</Trans>
          </Button>
        ) : (
          <Box>
            <Button
              onClick={onSave}
              size="small"
              variant="contained"
              color="primary"
              startIcon={<SaveIcon />}
              sx={{
                mr: 1,
                textTransform: "none",
                fontWeight: 700,
                borderRadius: 2,
                bgcolor: "#2196f3",
                boxShadow:
                  "0px 4px 12px rgba(33, 150, 243, 0.5), 0px 3px 6px rgba(33, 150, 243, 0.3)",
                "&:hover": {
                  bgcolor: "#1976d2",
                  boxShadow:
                    "0px 6px 16px rgba(25, 118, 210, 0.6), 0px 4px 8px rgba(25, 118, 210, 0.4)",
                },
                transition: "all 0.3s ease",
              }}
            >
              <Trans>Save</Trans>
            </Button>
            <Button
              onClick={onCancel}
              size="small"
              variant="outlined"
              color="primary"
              startIcon={<CloseIcon />}
              sx={{
                textTransform: "none",
                fontWeight: 600,
                borderRadius: 2,
                borderColor: "#2196f3",
                color: "#2196f3",
                "&:hover": {
                  bgcolor: "rgba(33, 150, 243, 0.1)",
                  borderColor: "#1976d2",
                },
                transition: "all 0.3s ease",
              }}
            >
              <Trans>Cancel</Trans>
            </Button>
          </Box>
        )}
      </Stack>
      <Divider sx={{ my: 1.5 }} />
      {children}
    </Card>
  );
}
