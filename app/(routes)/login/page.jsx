"use client";

import React from "react";

import {
  Divider,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Lock";
import GoogleIcon from "@mui/icons-material/Google";

import LogoCompany from "@/components/TopBar/LogoCompany";

export const dynamic = "force-dynamic";
const LoginPage = () => {
  return (
    <Stack className="!flex-row w-full h-dvh">
      <div className="md:w-[65%] w-full bg-black flex flex-col justify-center items-center">
        <Typography fontSize={40} fontWeight="bold" color="#fc9a14">
          Login to your Account
        </Typography>
        <div className="max-w-[460px] flex flex-col w-full gap-4 mt-10">
          <button className="bg-white w-full py-3 rounded-md font-bold">
            <GoogleIcon width={20} height={20} alt="logo" /> Sign in With Google
          </button>

          <div className="flex justify-center">
            <div className="flex items-center justify-center w-[120px] gap-2">
              <Divider className="h-[1px] w-full bg-white" />
              <span className="text-white">or</span>
              <Divider className="h-[1px] w-full bg-white" />
            </div>
          </div>

          <TextField
            variant="outlined"
            label="Email"
            style={{
              background: "rgba(255, 252, 252, 0.349)",
            }}
            className="rounded-md w-full"
            InputLabelProps={{
              style: {
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
                width: "100%",
                color: "white",
              },
            }}
            InputProps={{
              style: {
                color: "white",
              },
              endAdornment: (
                <InputAdornment position="end">
                  <EmailIcon className="text-white" />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            variant="outlined"
            label="Password"
            style={{
              background: "rgba(255, 252, 252, 0.349)",
            }}
            className="rounded-md w-full"
            InputLabelProps={{
              style: {
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
                width: "100%",
                color: "white",
              },
            }}
            InputProps={{
              style: {
                color: "white",
              },
              endAdornment: (
                <InputAdornment position="end">
                  <PasswordIcon className="text-white" />
                </InputAdornment>
              ),
            }}
          />

          <Link
            className="bg-[transparent] text-[#fc9a14] text-[14px] flex flex-row-reverse "
            href="/forgot-password"
          >
            Forgot password?
          </Link>

          <button className="text-white bg-[#fc9a14] w-full py-3 rounded-full mt-5">
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
        </div>
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
