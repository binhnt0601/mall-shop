import { Dialog } from "@mui/material";
import React, { useEffect, useState } from "react";

import ForgetPasswordForm from "./ForgotPasswordForm";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export type Screen = "login" | "register" | "forgot-password";

type LoginModalProps = {
  screenView?: Screen;
  open: boolean;
  onClose: () => void;
};

export default function LoginModal({
  open,
  onClose,
  screenView = "login",
}: LoginModalProps) {
  const apiUri = process.env.NEXT_PUBLIC_API_URI || "";

  const [screen, setScreen] = useState<Screen>(screenView);

  const handleClose = () => {
    setScreen("login");
    onClose?.();
  };

  useEffect(() => {
    if (open) setScreen(screenView);
  }, [screenView, open]);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        sx: {
          maxWidth: 830,
          borderRadius: 3,
          overflow: "hidden",
          p: 0,
          boxShadow: 12,
          background: "linear-gradient(135deg, #3b82f6 40%, #6366f1 100%)",
        },
      }}
      fullWidth
      scroll="body"
    >
      {screen === "login" && (
        <LoginForm
          apiUri={apiUri}
          onScreen={(e: Screen) => setScreen(e)}
          onClose={handleClose}
        />
      )}
      {screen === "register" && (
        <RegisterForm
          apiUri={apiUri}
          onLoginClick={() => setScreen("login")}
          onClose={handleClose}
        />
      )}
      {screen === "forgot-password" && (
        <ForgetPasswordForm
          onLoginClick={() => setScreen("login")}
          onClose={handleClose}
        />
      )}
    </Dialog>
  );
}
