import { Stack, Typography, Button } from "@mui/material";
import React from "react";

import { ScreenView } from "..";

type Props = {
  onScreen: (screen: ScreenView) => void;
};

const PasswordSuccess: React.FC<Props> = ({ onScreen }) => {
  return (
    <Stack
      sx={{
        p: 6,
        textAlign: "center",
        color: "white",
        maxWidth: 480,
        mx: "auto",
      }}
      spacing={4}
    >
      <Typography variant="h3" fontWeight={700}>
        You&apos;ve updated the password
      </Typography>
      <Typography variant="h4" fontWeight={700} color="#0ea5e9">
        successfully
      </Typography>
      <Typography sx={{ fontSize: 16, color: "#e5e7eb" }}>
        You can now use it to login to your account. Remember, always keep your
        password confidential and complex.
      </Typography>

      <Button
        variant="contained"
        size="large"
        sx={{
          background: "#fff",
          color: "#3b82f6",
          fontWeight: "bold",
          boxShadow: "0 4px 10px rgba(59, 130, 246, 0.6)",
          "&:hover": {
            background: "#e0e7ff",
          },
        }}
        onClick={() => onScreen("login")}
      >
        Continue to login
      </Button>
    </Stack>
  );
};

export default PasswordSuccess;
