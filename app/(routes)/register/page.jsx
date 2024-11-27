"use client";

import React from "react";

import { Stack, Typography } from "@mui/material";
import Link from "next/link";

import LogoCompany from "@/components/TopBar/LogoCompany";

export const dynamic = "force-dynamic";

const RegisterPage = () => {
  return (
    <Stack className="flex">
      <div className="login-container">
        <h2>Login</h2>
        <form className="login-form">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <button style={{ border: "1" }} type="submit">
            Login
          </button>
          <p>
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </form>
      </div>
      <div
        className="flex flex-col justify-center items-center text-center 
      p-5 w-[30%] bg-[#fc9a14] text-white"
      >
        <LogoCompany />
        <Typography>Welcome Back!</Typography>
        <Typography>
          Rediscover the wonders of AI malls. Log in today and immerse yourself
          in a world of seamless shopping, intelligent recommendations, and
          delightful surprises. Your AI-powered retail adventure awaits!
        </Typography>
        <Link
          className="bg-[white] text-[black] text-[20px] w-full py-3 rounded-full"
          href="/login"
        >
          Login
        </Link>
      </div>
    </Stack>
  );
};

export default RegisterPage;
