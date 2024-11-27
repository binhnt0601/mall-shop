"use client";

import React, { useState } from "react";

import {
  Checkbox,
  Divider,
  InputAdornment,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Lock";
import { Bounce, toast } from "react-toastify";
import GoogleIcon from "@mui/icons-material/Google";

import LogoCompany from "@/components/TopBar/LogoCompany";

export const dynamic = "force-dynamic";

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: 3,
  width: 22,
  height: 22,
  boxShadow:
    "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: "#f5f8fa",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: "#ebf1f5",
    ...theme.applyStyles("dark", {
      backgroundColor: "#30404d",
    }),
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background: "rgba(206,217,224,.5)",
    ...theme.applyStyles("dark", {
      background: "rgba(57,75,89,.5)",
    }),
  },
  ...theme.applyStyles("dark", {
    boxShadow: "0 0 0 1px rgb(16 22 26 / 40%)",
    backgroundColor: "#394b59",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))",
  }),
  borderRadius: 50,
  borderWidth: 2,
  borderColor: "#fc9a14",
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#fc9a14",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&::before": {
    display: "block",
    width: 20,
    height: 20,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#fc9a14",
  },
  borderRadius: 50,
});

const RegisterPage = () => {
  const [isChecked, setIsChecked] = useState({
    termsAndConditions: false,
    privacyPolicy: false,
  });

  return (
    <Stack className="!flex-row w-full h-dvh">
      <div className="md:w-[65%] w-full bg-black flex flex-col justify-center items-center px-10">
        <div className="md:hidden mb-10">
          <LogoCompany width={181} height={124} />
        </div>
        <Typography
          fontSize={40}
          fontWeight="bold"
          color="#fc9a14"
          textAlign="center"
        >
          Sign up to add an Account
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

          <div className="mt-5">
            <div className="flex items-center justify-center">
              <Checkbox
                sx={{ "&:hover": { bgcolor: "transparent" } }}
                disableRipple
                color="default"
                checkedIcon={<BpCheckedIcon />}
                icon={<BpIcon />}
                inputProps={{ "aria-label": "Checkbox demo" }}
                onChange={(event) => {
                  setIsChecked((prev) => ({
                    ...prev,
                    termsAndConditions: event.target.checked,
                  }));
                }}
              />
              <Typography className="text-white">
                I accept the{" "}
                <a
                  className="underline text-[#fc9a14]"
                  target="_blank"
                  href="https://aimalls.app/terms-and-conditions"
                >
                  Terms and Conditions
                </a>
              </Typography>
            </div>

            <div className="flex items-center justify-center">
              <Checkbox
                sx={{ "&:hover": { bgcolor: "transparent" } }}
                disableRipple
                color="default"
                checkedIcon={<BpCheckedIcon />}
                icon={<BpIcon />}
                inputProps={{ "aria-label": "Checkbox demo" }}
                onChange={(event) => {
                  setIsChecked((prev) => ({
                    ...prev,
                    privacyPolicy: event.target.checked,
                  }));
                }}
              />
              <Typography className="text-white">
                I agree to the{" "}
                <a
                  className="underline text-[#fc9a14]"
                  target="_blank"
                  href="https://aimalls.app/privacy-policy"
                >
                  Privacy Policy
                </a>
              </Typography>
            </div>
          </div>

          <button
            disabled={!isChecked.privacyPolicy || !isChecked.termsAndConditions}
            className={`
              ${!isChecked.privacyPolicy || !isChecked.termsAndConditions ? "opacity-50" : "opacity-1"}
              text-white bg-[#fc9a14] w-full py-3 rounded-full`}
            onClick={() => {
              toast("Account Register successfully!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
              });
            }}
          >
            Register
          </button>

          <Typography color="white" textAlign="center" className="md:hidden">
            Already Have an Account?{" "}
            <Link
              href="/login"
              className="text-[17px] text-[#fc9a14] ml-3 font-medium"
            >
              Login
            </Link>
          </Typography>
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
