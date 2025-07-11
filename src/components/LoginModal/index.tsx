import { Dialog } from "@mui/material";
import React, { useEffect, useState } from "react";

import ForgetPasswordForm from "./ForgotPasswordForm";
import RegisterForm from "./RegisterForm";
import VerifyEmailForm from "./VerifyOtpForm";

export type ScreenView =
  | "login"
  | "register"
  | "forgot-password"
  | "verify-email";

type LoginModalProps = {
  screenView?: ScreenView;
  open: boolean;
  onClose: () => void;
};

export default function LoginModal({
  open,
  onClose,
  screenView = "login",
}: LoginModalProps) {
  const apiUri = process.env.NEXT_PUBLIC_API_URI || "";

  const [screen, setScreen] = useState<ScreenView>(screenView);

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
      {/* {screen === "login" && (
        <LoginForm
          apiUri={apiUri}
          onScreen={(e: ScreenView) => setScreen(e)}
          onClose={handleClose}
        />
      )} */}
      {screen === "register" && (
        <RegisterForm
          apiUri={apiUri}
          onLoginClick={() => setScreen("login")}
          onClose={handleClose}
        />
      )}
      {screen === "forgot-password" && (
        <ForgetPasswordForm
          onScreen={(e: ScreenView) => setScreen(e)}
          onClose={handleClose}
        />
      )}
      {screen === "login" && (
        <VerifyEmailForm
          onScreen={(e: ScreenView) => setScreen(e)}
          onClose={handleClose}
        />
      )}
    </Dialog>
  );
}
