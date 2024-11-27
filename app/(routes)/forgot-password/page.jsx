"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";
import { Stack, TextField } from "@mui/material";

import ForgetIcon from "@/assets/icons/success.svg";

export const dynamic = "force-dynamic";

const loginPage = () => {
  return (
    <Stack
      className="justify-center items-center text-center
    px-5 text-white bg-gradient-to-br from-[red] to-[orange] h-dvh"
    >
      <Image src={ForgetIcon} width={100} height={100} alt="icon" />
      <p className="text-[50px] pt-[30px]">Yo! Forgot Your Password?</p>
      <span className="text-[30px]">
        No worries! Enter your email and we will send you a reset
      </span>
      <Stack className="items-center gap-5 my-10 sm:w-[420px] w-full">
        <TextField
          variant="outlined"
          placeholder="Email"
          className="bg-white rounded-lg w-full"
        />
        <button className="uppercase bg-[#fc9a14] w-full py-3 rounded-full">
          SEND REQUEST
        </button>
      </Stack>

      <Link href="/login">BACK TO LOGIN</Link>
    </Stack>
  );
};

export default loginPage;
