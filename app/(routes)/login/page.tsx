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

import LogoCompany from "@/components/TopBar/LogoCompany";
import { useAuth } from "@/providers/auth-provider";
import FormikTextField from "@/components/FormikTextField";

export const dynamic = "force-dynamic";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required(`Enter your email`),
  password: Yup.string()
    .min(8, `Sorry, your password must be at least 8 characters`)
    .required(`Enter your password`),
});

const LoginPage = () => {
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
    router.push(`${process.env.NEXT_PUBLIC_API_URI}/api/google`);
  };

  return (
    <Stack className="!flex-row w-full h-dvh">
      <div className="md:w-[65%] w-full bg-black flex flex-col justify-center items-center">
        <div className="md:hidden mb-10">
          <LogoCompany width={181} height={124} />
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
          className="max-w-[460px] flex flex-col w-full gap-4 mt-10"
        >
          <button
            className="bg-white w-full py-3 rounded-md font-bold"
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
            <div className="flex items-center justify-center w-[120px] gap-2">
              <Divider className="h-[1px] w-full bg-white" />
              <span className="text-white">or</span>
              <Divider className="h-[1px] w-full bg-white" />
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
            className="bg-[transparent] text-[#fc9a14] text-[14px] flex flex-row-reverse "
            href="/forgot-password"
          >
            Forgot password?
          </Link>

          <button
            type="submit"
            className="text-white bg-[#fc9a14] w-full py-3 rounded-full mt-5"
          >
            Login
          </button>

          <Typography color="white" textAlign="center" className="md:hidden">
            Don&apos;t have an account?
            <Link
              href="/register"
              className="text-[17px] text-[#fc9a14] ml-3 font-medium"
            >
              Register
            </Link>
          </Typography>
        </form>
      </div>
      <div
        className="md:flex hidden flex-col gap-5 justify-center items-center text-center 
      p-5 w-[50%] bg-[#fc9a14] text-white"
      >
        <LogoCompany width={181} height={124} />
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
          className="bg-[white] text-[black] text-[20px] w-full py-3 rounded-full mt-5"
          href="/register"
        >
          Register
        </Link>

        <Link
          className="bg-[transparent] text-[#fc9a14] text-[14px] w-full py-3 rounded-full mt-5 text-right"
          href="/register"
        >
          Register
        </Link>
      </div>
    </Stack>
  );
};

export default LoginPage;
