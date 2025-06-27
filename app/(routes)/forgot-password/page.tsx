"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";
import { Stack } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { FormikHelpers, useFormik } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";

import { useLoader } from "@/providers/loading-provider";
import { UserService } from "@/services/user/user.repo";
import { toast } from "@/helpers/toast";
import FormikTextField from "@/components/FormikTextField";

export const dynamic = "force-dynamic";

interface FormikValues {
  email: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required(`Enter your email`),
});

const ForgotPasswordPage = () => {
  const router = useRouter();
  const { setLoading } = useLoader();

  const handleSubmit = async (
    values: FormikValues,
    { setSubmitting }: FormikHelpers<FormikValues>,
  ) => {
    try {
      setLoading(true);

      await UserService.resetPassword({
        email: values.email,
      });

      toast.success(`Email sent successfully!`);

      // Redirect to email verification page
      router.push(`/verify-email?email=${encodeURIComponent(values.email)}`);
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message || `Failed to send reset email`,
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
      className="justify-center items-center text-center
    px-5 text-white bg-gradient-to-br from-[red] to-[orange] h-dvh"
    >
      <Image src="/icons/success.svg" width={100} height={100} alt="icon" />
      <p className="text-[50px] pt-[30px]">Yo! Forgot Your Password?</p>
      <span className="text-[30px]">
        No worries! Enter your email and we will send you a reset
      </span>
      <form
        onSubmit={formik.handleSubmit}
        className="max-w-[460px] flex flex-col w-full gap-4 mt-10"
      >
        <Stack className="items-center gap-5 my-10 sm:w-[420px] w-full">
          <div className="w-full text-start">
            <FormikTextField
              formik={formik}
              name="email"
              label="Email"
              icon={<EmailIcon className="text-white" />}
            />
          </div>
          <button
            className="uppercase bg-[#fc9a14] w-full py-3 rounded-full"
            type="submit"
          >
            SEND REQUEST
          </button>
        </Stack>
      </form>

      <Link href="/login">BACK TO LOGIN</Link>
    </Stack>
  );
};

export default ForgotPasswordPage;
