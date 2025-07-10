import CloseIcon from "@mui/icons-material/Close";
import EmailIcon from "@mui/icons-material/Email";
import { IconButton, Stack } from "@mui/material";
import { FormikHelpers, useFormik } from "formik";
import { useRouter } from "next/navigation";
import React from "react";
import * as Yup from "yup";

import FormikTextField from "@/components-shared/FormikTextField";
import { toast } from "@/helpers/toast";
import { UserService } from "@/services/user/user.repo";
import { useLoadingStore } from "@/stores/loadingStore";

export const dynamic = "force-dynamic";

interface FormikValues {
  email: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Enter your email"),
});

type Props = {
  onLoginClick: () => void;
  onClose: () => void;
};

const ForgotPasswordForm: React.FC<Props> = ({ onLoginClick, onClose }) => {
  const router = useRouter();
  const { setLoading } = useLoadingStore();

  const handleSubmit = async (
    values: FormikValues,
    { setSubmitting }: FormikHelpers<FormikValues>
  ) => {
    try {
      setLoading(true);

      await UserService.resetPassword({
        email: values.email,
      });

      toast.success("Email sent successfully!");

      // Redirect to email verification page
      router.push(`/verify-email?email=${encodeURIComponent(values.email)}`);
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message || "Failed to send reset email"
      );
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <Stack
      width="100%"
      sx={{
        position: "relative",
        maxWidth: 830,
        mx: "auto",
        padding: 5,
      }}
    >
      {/* Close button: always top-right */}
      <IconButton
        onClick={onClose}
        sx={{
          position: "absolute",
          top: 12,
          right: 12,
          color: "#fff",
          bgcolor: "rgba(255,255,255,0.08)",
          "&:hover": { bgcolor: "rgba(255,255,255,0.13)" },
          zIndex: 10,
        }}
        aria-label="Close"
      >
        <CloseIcon />
      </IconButton>
      <div className="flex flex-col items-center justify-center w-full text-center">
        <p className="pt-[30px] text-2xl sm:text-4xl md:text-[50px] text-white font-semibold">
          Yo! Forgot Your Password?
        </p>
        <span className="text-md sm:text-xl md:text-[30px] text-white max-w-md mt-4">
          No worries! Enter your email and we will send you a reset
        </span>
        <form
          onSubmit={formik.handleSubmit}
          className="mt-5 md:mt-10 flex w-full max-w-[460px] flex-col gap-6 p-6 rounded-xl bg-white/10 backdrop-blur-sm shadow-lg"
        >
          <Stack className="w-full items-center gap-6 sm:w-[420px]">
            <div className="w-full text-start">
              <FormikTextField
                formik={formik}
                name="email"
                label="Email"
                icon={<EmailIcon className="text-white/70" />}
                InputLabelProps={{ style: { color: "rgba(255,255,255,0.8)" } }}
                inputProps={{ className: "text-white" }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)", // nền input trong suốt nhẹ
                    "& fieldset": { borderColor: "rgba(255,255,255,0.3)" }, // viền mờ
                    "&:hover fieldset": {
                      borderColor: "rgba(255,255,255,0.6)",
                    }, // hover sáng hơn
                    "&.Mui-focused fieldset": {
                      borderColor: "#A78BFA",
                      borderWidth: 2,
                    },
                    color: "white",
                  },
                  "& input": {
                    color: "white",
                  },
                }}
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 py-3 text-white font-semibold shadow-md transition hover:from-blue-700 hover:to-indigo-800"
            >
              Send Request
            </button>
          </Stack>
        </form>

        <button
          className="mt-4 text-white underline hover:text-gray-300"
          onClick={onLoginClick}
        >
          Back to Login
        </button>
      </div>
    </Stack>
  );
};

export default ForgotPasswordForm;
