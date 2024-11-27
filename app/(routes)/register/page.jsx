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

import LogoCompany from "@/components/TopBar/LogoCompany";

export const dynamic = "force-dynamic";

const RegisterPage = () => {
  return (
    <Stack className="!flex-row w-full h-dvh">
      <div className="md:w-[65%] w-full bg-black flex flex-col justify-center items-center">
        <Typography fontSize={40} fontWeight="bold" color="#fc9a14">
          Sign up to add an Account
        </Typography>
        <div className="max-w-[460px] flex flex-col w-full gap-4 mt-10">
          <button className="bg-white w-full py-3 rounded-md font-bold">
            Sign in With Google
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
          <TextField
            variant="outlined"
            label="Confirm Password"
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

          <button className="text-white bg-[#fc9a14] w-full py-3 rounded-full mt-5">
            Register
          </button>
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
