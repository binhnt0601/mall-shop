import React from "react";

import { ToastContainer } from "react-toastify";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";

import Footer from "../components/Footer";

import TopBar from "@/app/components/TopBar";
import theme from "@/app/theme";

import "./globals.css";

export const metadata = {
  title: "Blockify",
  description: "Blockify",
  icons: {
    icon: "/company-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <TopBar />
            {children}
            <ToastContainer
              position="bottom-right"
              autoClose={3000}
              closeOnClick
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
