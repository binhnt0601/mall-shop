"use client";

import React from "react";

import { Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Lock";
import GoogleIcon from "@mui/icons-material/Google";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

import { useAuth } from "@/providers/auth-provider";
import FormikTextField from "@/components-shared/FormikTextField";
import Image from "next/image";

export const dynamic = "force-dynamic";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Enter your email"),
  password: Yup.string()
    .min(8, "Sorry, your password must be at least 8 characters")
    .required("Enter your password"),
});

const LoginPageClient = ({ apiUri }: { apiUri: string }) => {
  const { login } = useAuth();
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      await login(values.email, values.password);
    },
  });

  const onLoginWithGoogle = async () => {
    router.push(`${apiUri}/api/google`);
  };

  return (
    <Stack className="h-dvh w-full !flex-row">
      <div className="flex w-full flex-col items-center justify-center bg-black md:w-[65%]">
        <div className="mb-10 md:hidden">
          <Image width={181} height={124} src="/logo.png" alt="Brand Logo" />
        </div>
        <Typography
          fontSize={40}
          fontWeight="bold"
          color="#fc9a14"
          textAlign="center"
        >
          Login to your Account
        </Typography>
        <form
          onSubmit={formik.handleSubmit}
          className="mt-10 flex w-full max-w-[460px] flex-col gap-4"
        >
          <button
            className="w-full rounded-md bg-white py-3 font-bold"
            type="button"
            onClick={onLoginWithGoogle}
          >
            <GoogleIcon
              style={{ fontSize: 20 }}
              className="inline-block align-middle"
            />
            Sign in With Google
          </button>

          <div className="flex justify-center">
            <div className="flex w-[120px] items-center justify-center gap-2">
              <Divider className="h-px w-full bg-white" />
              <span className="text-white">or</span>
              <Divider className="h-px w-full bg-white" />
            </div>
          </div>

          <FormikTextField
            formik={formik}
            name="email"
            label="Email"
            icon={<EmailIcon className="text-white" />}
          />

          <FormikTextField
            formik={formik}
            name="password"
            label="Password"
            type="password"
            icon={<PasswordIcon className="text-white" />}
          />

          <Link
            className="flex flex-row-reverse bg-transparent text-[14px] text-[#fc9a14] "
            href="/forgot-password"
          >
            Forgot password?
          </Link>

          <button
            type="submit"
            className="mt-5 w-full rounded-full bg-[#fc9a14] py-3 text-white"
          >
            Login
          </button>

          <Typography color="white" textAlign="center" className="md:hidden">
            Don&apos;t have an account?
            <Link
              href="/register"
              className="ml-3 text-[17px] font-medium text-[#fc9a14]"
            >
              Register
            </Link>
          </Typography>
        </form>
      </div>
      <div
        className="hidden w-[50%] flex-col items-center justify-center gap-5 bg-[#fc9a14] 
      p-5 text-center text-white md:flex"
      >
        <Image width={181} height={124} src="/logo.png" alt="Brand Logo" />
        <Typography fontSize={40} fontWeight="bold">
          New Here?
        </Typography>
        <Typography>
          Welcome to the future of shopping, where AI takes you on a
          personalized retail journey like never before. Sign up today and
          discover the extraordinary convenience, tailored experiences, and
          endless possibilities of AI malls.
        </Typography>
        <Link
          className="mt-5 w-full rounded-full bg-[white] py-3 text-[20px] text-[black]"
          href="/register"
        >
          Register
        </Link>

        <Link
          className="mt-5 w-full rounded-full bg-transparent py-3 text-right text-[14px] text-[#fc9a14]"
          href="/register"
        >
          Register
        </Link>
      </div>
    </Stack>
  );
};

export default LoginPageClient;
