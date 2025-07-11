import { t } from "@lingui/macro";
import CloseIcon from "@mui/icons-material/Close";
import PasswordIcon from "@mui/icons-material/Lock";
import {
  IconButton,
  Stack,
  Typography,
  TextField,
  InputAdornment,
} from "@mui/material";
import { Formik, Form, FormikHelpers } from "formik";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";

import { toast } from "@/helpers/toast";
import { UserService } from "@/services/user/user.repo";
import { useLoadingStore } from "@/stores/loadingStore";

import { ScreenView } from ".";

interface FormikValues {
  newPassword: string;
  confirmPassword: string;
}

const validationSchema = Yup.object().shape({
  newPassword: Yup.string()
    .min(6, t`Password must be at least 6 characters`)
    .required(t`Password is required`),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword")], t`Passwords must match`)
    .required(t`Please confirm your password`),
});

const ResetPasswordForm = ({
  onScreen,
  onClose,
}: {
  onScreen: (e: ScreenView) => void;
  onClose: () => void;
}) => {
  const router = useRouter();
  const { setLoading } = useLoadingStore();

  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  useEffect(() => {
    const emailParam = router.query.email as string;
    const codeParam = router.query.code as string;
    if (emailParam && codeParam) {
      setEmail(emailParam);
      setCode(codeParam);
    } else {
      // Redirect back if no email or code
      onScreen("forgot-password");
    }
  }, [router.query, router]);

  const handleSubmit = async (
    values: FormikValues,
    { setSubmitting }: FormikHelpers<FormikValues>
  ) => {
    try {
      setLoading(true);
      await UserService.confirmPasswordReset({
        email,
        code,
        newPassword: values.newPassword,
      });

      toast.success(t`Password updated successfully!`);

      // Redirect to success screen or login
      //   onScreen("success");
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message || t`Failed to update password`
      );
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      width="100%"
      sx={{
        position: "relative",
        maxWidth: 830,
        mx: "auto",
      }}
    >
      {/* Close button */}
      <IconButton
        onClick={onClose}
        sx={{
          position: "absolute",
          top: 14,
          right: 14,
          color: "#fff",
          bgcolor: "rgba(255,255,255,0.08)",
          "&:hover": { bgcolor: "rgba(255,255,255,0.13)" },
          zIndex: 10,
        }}
        aria-label="Close"
      >
        <CloseIcon />
      </IconButton>

      {/* Left: Form */}
      <Stack
        sx={{
          px: { xs: 2, sm: 4, md: 5 },
          py: { xs: 2.5, sm: 6, md: 7 },
          width: { xs: "100%", md: "60%" },
          bgcolor: "transparent",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Typography
          fontSize={{ xs: 26, sm: 32, md: 36 }}
          fontWeight={700}
          lineHeight={1.2}
          color="white"
          textAlign="center"
          mb={2}
          sx={{ textShadow: "0 2px 8px rgba(0,0,0,0.12)" }}
        >
          Reset Password
        </Typography>

        <Formik
          initialValues={{ newPassword: "", confirmPassword: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isSubmitting,
          }) => (
            <Form
              style={{
                width: "100%",
                maxWidth: 420,
                display: "flex",
                flexDirection: "column",
                gap: 24,
              }}
            >
              <TextField
                variant="outlined"
                label="New Password"
                type="password"
                name="newPassword"
                autoComplete="new-password"
                value={values.newPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.newPassword && Boolean(errors.newPassword)}
                helperText={touched.newPassword && errors.newPassword}
                style={{ background: "rgba(255, 255, 255, 0.1)" }}
                className="w-full rounded-md"
                InputLabelProps={{ style: { color: "rgba(255,255,255,0.85)" } }}
                InputProps={{
                  style: { color: "white" },
                  endAdornment: (
                    <InputAdornment position="end">
                      <PasswordIcon className="text-white" />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                variant="outlined"
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                autoComplete="new-password"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched.confirmPassword && Boolean(errors.confirmPassword)
                }
                helperText={touched.confirmPassword && errors.confirmPassword}
                style={{ background: "rgba(255, 255, 255, 0.1)" }}
                className="w-full rounded-md"
                InputLabelProps={{ style: { color: "rgba(255,255,255,0.85)" } }}
                InputProps={{
                  style: { color: "white" },
                  endAdornment: (
                    <InputAdornment position="end">
                      <PasswordIcon className="text-white" />
                    </InputAdornment>
                  ),
                }}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full rounded-md bg-white py-3 font-bold text-indigo-600 flex items-center justify-center gap-2 transition ${
                  isSubmitting
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-indigo-50 cursor-pointer"
                }`}
              >
                {isSubmitting ? "Saving..." : "Confirm"}
              </button>
            </Form>
          )}
        </Formik>
      </Stack>
    </Stack>
  );
};

export default ResetPasswordForm;
