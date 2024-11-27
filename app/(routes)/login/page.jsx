"use client";

import React, { useState } from "react";

import { Stack, Typography } from "@mui/material";
import Link from "next/link";

import LogoCompany from "@/components/TopBar/LogoCompany";

export const dynamic = "force-dynamic";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPasswordl] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      setError("Email and Password can not be empty");

      return;
    }
    if (email === "user@example.com" && password === "password123") {
      setError("");
      alert("Login successful!");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <Stack className="!flex-row w-full h-dvh">
      <div className="w-full">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            {error && <div className="error-message">{error}</div>}
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
      </div>
    </Stack>
  );
};

export default LoginPage;
