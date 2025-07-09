import React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/theme';
import LoadingProvider from '@/providers/loading-provider';
import { LanguageProvider } from '@/providers/language-provider';

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
