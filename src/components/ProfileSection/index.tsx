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
        mb={1.2}
      >
        <Typography fontWeight={700} fontSize={18}>
          {title}
        </Typography>
        {!editing ? (
          <Button onClick={onEdit} size="small" startIcon={<EditIcon />}>
            Edit
          </Button>
        ) : (
          <Box>
            <Button
              onClick={onSave}
              size="small"
              variant="contained"
              color="primary"
              startIcon={<SaveIcon />}
              sx={{ mr: 1 }}
            >
              Save
            </Button>
            <Button
              onClick={onCancel}
              size="small"
              variant="outlined"
              color="inherit"
              startIcon={<CloseIcon />}
            >
              Cancel
            </Button>
          </Box>
        )}
      </Stack>
      <Divider sx={{ my: 1.3 }} />
      {children}
    </Card>
  );
}
