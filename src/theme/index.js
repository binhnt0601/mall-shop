"use client";

import { Urbanist } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const urbanist = Urbanist({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: urbanist.style.fontFamily,
  },
  palette: {
    primary: {
      main: "#fc9a14",
    },
    error: {
      main: "#d32f2f",
    },
  },
});

export default theme;
