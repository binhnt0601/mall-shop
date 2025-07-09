import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import React from "react";

import { LanguageProvider } from "@/providers/language-provider";
import LoadingProvider from "@/providers/loading-provider";
import theme from "@/theme";

interface Props {
  children: React.ReactNode;
}

export default function AppProviders({ children }: Props) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <LoadingProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </LoadingProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
