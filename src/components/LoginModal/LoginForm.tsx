import CloseIcon from "@mui/icons-material/Close";
import EmailIcon from "@mui/icons-material/Email";
import GoogleIcon from "@mui/icons-material/Google";
import PasswordIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  IconButton,
  Stack,
  Typography,
  Divider,
  InputAdornment,
  useMediaQuery,
} from "@mui/material";
import { useFormik } from "formik";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import * as Yup from "yup";

import FormikTextField from "@/components-shared/FormikTextField";
import { useAuthStore } from "@/stores/auth/useAuthStore";

import { ScreenView } from ".";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Enter your email"),
  password: Yup.string()
    .min(8, "Sorry, your password must be at least 8 characters")
    .required("Enter your password"),
});

type LoginFormProps = {
  apiUri: string;
  onScreen: (e: ScreenView) => void;
  onClose: () => void;
};

export default function LoginForm({
  apiUri,
  onScreen,
  onClose,
}: LoginFormProps) {
  const { login } = useAuthStore();
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width:900px)");
  const [showPassword, setShowPassword] = React.useState(false);

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema,
    onSubmit: async (values) => {
      await login(values.email, values.password);
      onClose?.();
    },
  });

  const onLoginWithGoogle = () => {
    router.push(`${apiUri}/api/google`);
  };

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      width="100%"
      sx={{
        position: "relative",
        maxWidth: 830,
        mx: "auto",
      }}
    >
      {/* Close button: always top-right */}
      <IconButton
        onClick={onClose}
        sx={{
          position: "absolute",
          top: 12,
          right: 12,
          color: "#fff",
          bgcolor: "rgba(255,255,255,0.08)",
          "&:hover": { bgcolor: "rgba(255,255,255,0.13)" },
          zIndex: 10,
        }}
        aria-label="Close"
      >
        <CloseIcon />
      </IconButton>
      {/* Left: Form */}
      <Stack
        sx={{
          px: { xs: 2, sm: 4, md: 5 },
          py: { xs: 2.5, sm: 6, md: 7 },
          width: { xs: "100%", md: "60%" },
          bgcolor: "transparent",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Logo mobile (and small tablet) */}
        <Stack display={{ xs: "flex", md: "none" }} alignItems="center" mb={2}>
          <Image
            width={120}
            height={80}
            src="/logo.png"
            alt="Brand Logo"
            style={{ marginBottom: 4 }}
          />
        </Stack>

        <Typography
          fontSize={{ xs: 26, sm: 32, md: 36 }}
          fontWeight={700}
          lineHeight={1.2}
          color="white"
          textAlign="center"
          mb={2}
          sx={{ textShadow: "0 2px 8px rgba(0,0,0,0.12)" }}
        >
          Login to your Account
        </Typography>

        <form
          onSubmit={formik.handleSubmit}
          style={{
            width: "100%",
            maxWidth: 420,
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <button
            className="w-full rounded-md bg-white py-3 font-bold text-indigo-600 flex items-center justify-center gap-2 hover:bg-indigo-50 transition"
            type="button"
            onClick={onLoginWithGoogle}
          >
            <GoogleIcon style={{ fontSize: 20 }} />
            Sign in With Google
          </button>

          <div
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <Divider
              sx={{
                flex: 1,
                borderColor: "rgba(255,255,255,0.6)",
                alignSelf: "center",
              }}
            />
            <Typography
              sx={{
                color: "#fff",
                px: 2,
                fontSize: 15,
                userSelect: "none",
                fontWeight: 500,
              }}
            >
              or
            </Typography>
            <Divider
              sx={{
                flex: 1,
                borderColor: "rgba(255,255,255,0.6)",
                alignSelf: "center",
              }}
            />
          </div>

          <FormikTextField
            formik={formik}
            name="email"
            label="Email"
            icon={<EmailIcon className="text-indigo-300" />}
            InputLabelProps={{ style: { color: "rgba(255,255,255,0.8)" } }}
            inputProps={{ className: "text-white" }}
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderRadius: 1,
                "& fieldset": { borderColor: "rgba(255,255,255,0.3)" },
                "&:hover fieldset": { borderColor: "rgba(255,255,255,0.6)" },
                "&.Mui-focused fieldset": {
                  borderColor: "#A78BFA",
                  borderWidth: 2,
                },
                color: "white",
              },
              "& input": { color: "white" },
            }}
          />

          <FormikTextField
            formik={formik}
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            icon={<PasswordIcon className="text-indigo-300" />}
            InputLabelProps={{ style: { color: "rgba(255,255,255,0.8)" } }}
            inputProps={{ className: "text-white" }}
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderRadius: 1,
                "& fieldset": { borderColor: "rgba(255,255,255,0.3)" },
                "&:hover fieldset": { borderColor: "rgba(255,255,255,0.6)" },
                "&.Mui-focused fieldset": {
                  borderColor: "#A78BFA",
                  borderWidth: 2,
                },
                color: "white",
              },
              "& input": { color: "white" },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword((s) => !s)}
                    edge="end"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    sx={{ color: "#7986cb" }}
                    tabIndex={-1}
                    type="button"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <button
            className="flex flex-row-reverse bg-transparent text-[14px] text-orange-400 hover:text-orange-500 transition mb-4"
            onClick={() => onScreen("forgot-password")}
          >
            Forgot password?
          </button>

          <button
            type="submit"
            className="w-full rounded-md bg-white py-3 font-bold text-indigo-600 flex items-center justify-center gap-2 hover:bg-indigo-50 transition"
          >
            Login
          </button>

          {/* Register link on mobile */}
          {isMobile && (
            <Typography color="white" textAlign="center" sx={{ mt: 2 }}>
              Don&apos;t have an account?{" "}
              <span
                className="ml-3 text-[17px] font-medium text-orange-400 hover:text-orange-500 transition cursor-pointer"
                onClick={() => onScreen("register")}
              >
                Register
              </span>
            </Typography>
          )}
        </form>
      </Stack>

      {/* Right: Welcome section, only show on md+ */}
      <Stack
        display={{ xs: "none", md: "flex" }}
        sx={{
          width: { md: "40%" },
          minHeight: 540,
          bgcolor: "transparent",
          color: "#fff",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          px: 4,
          py: 5,
          textAlign: "center",
          gap: 3,
        }}
      >
        <Image
          width={160}
          height={100}
          src="/logo.png"
          alt="Brand Logo"
          className="drop-shadow-[0_4px_8px_rgba(255,255,255,0.5)]"
        />
        <Typography fontSize={34} fontWeight="bold">
          New Here?
        </Typography>
        <Typography maxWidth={320}>
          Welcome to the future of shopping, where AI takes you on a
          personalized retail journey like never before. Sign up today and
          discover the extraordinary convenience, tailored experiences, and
          endless possibilities of AI malls.
        </Typography>
        <button
          className="w-full rounded-md bg-white py-3 font-bold text-indigo-600 flex items-center justify-center gap-2 hover:bg-indigo-50 transition"
          onClick={() => onScreen("register")}
        >
          Register
        </button>
      </Stack>
    </Stack>
  );
}
