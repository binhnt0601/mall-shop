"use client";

import React, { useState } from "react";

import { Stack, Typography, TextField } from "@mui/material";
import Link from "next/link";

import LogoCompany from "@/components/TopBar/LogoCompany";

export const dynamic = "force-dynamic";

const LoginPage = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPasswordl] = useState("");
  // const [error, setError] = useState("");

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (!email || !password) {
  //     setError("Email and Password can not be empty");

  //     return;
  //   }
  //   if (email === "user@example.com" && password === "password123") {
  //     setError("");
  //     alert("Login successful!");
  //   } else {
  //     setError("Invalid email or password.");
  //   }
  // };

  return (
    <Stack className="!flex-row w-full h-dvh">
      <div className="md:w-[65%] w-full bg-black flex flex-col justify-center items-center ">
        <Typography fontSize={40} fontWeight="bold" color="#fc9a14">
          Welcome back
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
            <button className="bg-white rounded-lg w-full">
              Login
            </button>
          </div>
        </div>
      </div>
      <div className="md:flex hidden flex-col gap-5 justify-center items-center text-center 
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
      </div>

    </Stack>
  );
};

export default LoginPage;
