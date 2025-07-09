"use client";

import EmailIcon from "@mui/icons-material/Email";
import { Stack } from "@mui/material";
import { FormikHelpers, useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import * as Yup from "yup";

import FormikTextField from "@/components-shared/FormikTextField";
import { toast } from "@/helpers/toast";
import MainLayout from "@/layouts/MainLayout";
import { UserService } from "@/services/user/user.repo";
import { useLoadingStore } from "@/stores/loadingStore";

export const dynamic = "force-dynamic";

interface FormikValues {
  email: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Enter your email"),
});

const gradientFrom = "from-blue-500";
const gradientTo = "to-indigo-600";

const ForgotPasswordPage = () => {
  const router = useRouter();
  const { setLoading } = useLoadingStore();

  const handleSubmit = async (
    values: FormikValues,
    { setSubmitting }: FormikHelpers<FormikValues>,
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
        error?.response?.data?.message || "Failed to send reset email",
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
      className={`h-dvh items-center justify-center bg-gradient-to-br ${gradientFrom} ${gradientTo} px-5 text-center`}
    >
      <p className="pt-[30px] text-[50px] text-white font-semibold">
        Yo! Forgot Your Password?
      </p>
      <span className="text-[30px] text-white max-w-md">
        No worries! Enter your email and we will send you a reset
      </span>
      <form
        onSubmit={formik.handleSubmit}
        className="mt-10 flex w-full max-w-[460px] flex-col gap-6 p-6 rounded-xl bg-white/10 backdrop-blur-sm shadow-lg"
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
                  "&:hover fieldset": { borderColor: "rgba(255,255,255,0.6)" }, // hover sáng hơn
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

      <Link
        href="/login"
        className="mt-4 text-white underline hover:text-gray-300"
      >
        Back to Login
      </Link>
    </Stack>
  );
};

export default ForgotPasswordPage;

ForgotPasswordPage.getLayout = function getLayout(page: any) {
  return <MainLayout>{page}</MainLayout>;
};
