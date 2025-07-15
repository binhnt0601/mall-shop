import { t, Trans } from "@lingui/macro";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
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

import { ScreenView } from "..";

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

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    const emailParam = router.query.email as string;
    const codeParam = router.query.code as string;
    setEmail(emailParam);
    setCode(codeParam);
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
      onScreen("password-success");
      toast.success(t`Password updated successfully!`);
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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #3b82f6 40%, #6366f1 100%)",
        position: "relative",
        padding: 16,
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
        aria-label={t`Close`}
      >
        <CloseIcon />
      </IconButton>

      {/* Form container */}
      <Stack
        sx={{
          width: "100%",
          maxWidth: 420,
          bgcolor: "transparent",
          px: { xs: 2, sm: 4, md: 5 },
          py: { xs: 3, sm: 6, md: 7 },
          borderRadius: 2,
          backdropFilter: "blur(10px)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
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
          <Trans>Reset Password</Trans>
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
                display: "flex",
                flexDirection: "column",
                gap: 24,
              }}
            >
              <TextField
                variant="outlined"
                label={t`New Password`}
                type={showNewPassword ? "text" : "password"}
                name="newPassword"
                autoComplete="new-password"
                value={values.newPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.newPassword && Boolean(errors.newPassword)}
                helperText={touched.newPassword && errors.newPassword}
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: 1,
                  input: { color: "white" },
                  label: { color: "rgba(255,255,255,0.85)" },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowNewPassword(!showNewPassword)}
                        edge="end"
                        aria-label={
                          showNewPassword ? t`Hide password` : t`Show password`
                        }
                      >
                        {showNewPassword ? (
                          <VisibilityOffIcon sx={{ color: "white" }} />
                        ) : (
                          <VisibilityIcon sx={{ color: "white" }} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                variant="outlined"
                label={t`Confirm Password`}
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                autoComplete="new-password"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched.confirmPassword && Boolean(errors.confirmPassword)
                }
                helperText={touched.confirmPassword && errors.confirmPassword}
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: 1,
                  input: { color: "white" },
                  label: { color: "rgba(255,255,255,0.85)" },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        edge="end"
                        aria-label={
                          showConfirmPassword
                            ? t`Hide password`
                            : t`Show password`
                        }
                      >
                        {showConfirmPassword ? (
                          <VisibilityOffIcon sx={{ color: "white" }} />
                        ) : (
                          <VisibilityIcon sx={{ color: "white" }} />
                        )}
                      </IconButton>
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
                {isSubmitting ? t`Saving...` : t`Confirm`}
              </button>
            </Form>
          )}
        </Formik>
      </Stack>
    </div>
  );
};

export default ResetPasswordForm;
