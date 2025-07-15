import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { Avatar, IconButton, Box } from "@mui/material";
import { useRef } from "react";

import { toast } from "@/helpers/toast";
import { User } from "@/services/user/user.model";
import { UserService } from "@/services/user/user.repo";

type Props = {
  user?: User;
  onUploaded?: (url: string) => void;
};

export default function AvatarUploader({ user, onUploaded }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  async function uploadImage(file: File): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(URL.createObjectURL(file)), 1200);
    });
  }

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file || !user?.id) return;
    try {
      const url = await uploadImage(file);
      await UserService.updateProfile({ avatar: url });
      toast.success("Avatar updated!");
      onUploaded?.(url);
    } catch (err: any) {
      toast.error(err?.message || "Update avatar failed!");
    }
  }

  return (
    <Box sx={{ position: "relative", display: "inline-block" }}>
      <Avatar
        src={user?.avatar}
        sx={{ width: 84, height: 84, boxShadow: 2, cursor: "pointer" }}
        onClick={() => fileInputRef.current?.click()}
      />
      <IconButton
        size="small"
        sx={{
          position: "absolute",
          right: 4,
          bottom: 4,
          bgcolor: "rgba(0,0,0,0.5)",
          color: "#fff",
          "&:hover": { bgcolor: "primary.main" },
        }}
        onClick={() => fileInputRef.current?.click()}
      >
        <PhotoCameraIcon fontSize="small" />
      </IconButton>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={handleFileChange}
      />
    </Box>
  );
}
