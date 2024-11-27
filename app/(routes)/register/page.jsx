"use client";

import React from "react";

import { Stack, TextField, Typography } from "@mui/material";
import Link from "next/link";

import LogoCompany from "@/components/TopBar/LogoCompany";

export const dynamic = "force-dynamic";

const RegisterPage = () => {
  return (
    <Stack className="!flex-row w-full h-dvh">
      <div className="md:w-[65%] w-full bg-black flex flex-col justify-center items-center">
        <Typography fontSize={40} fontWeight="bold" color="#fc9a14">
          Sign up to add an Account
        </Typography>
        <div className="max-w-[460px]">
          <button className="bg-white w-full py-3 rounded-lg">
            Sign in With Google
          </button>

          <div>
            <TextField
              variant="outlined"
              label="Email"
              className="bg-white rounded-lg w-full"
            />
            <TextField
              variant="outlined"
              label="Password"
              className="bg-white rounded-lg w-full"
            />
            <TextField
              variant="outlined"
              label="Confirm Password"
              className="bg-white rounded-lg w-full"
            />
          </div>
        </div>
      </div>
      <div
        className="md:flex hidden flex-col gap-5 justify-center items-center text-center 
      p-5 w-[35%] bg-[#fc9a14] text-white"
      >
        <LogoCompany width={181} height={124} />
        <Typography fontSize={40} fontWeight="bold">
          Welcome Back!
        </Typography>
        <Typography>
          Rediscover the wonders of AI malls. Log in today and immerse yourself
          in a world of seamless shopping, intelligent recommendations, and
          delightful surprises. Your AI-powered retail adventure awaits!
        </Typography>
        <Link
          className="bg-[white] text-[black] text-[20px] w-full py-3 rounded-full mt-5"
          href="/login"
        >
          Login
        </Link>
      </div>
    </Stack>
  );
};

export default RegisterPage;
