import React from 'react';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

import { ThemeProvider } from '@mui/material/styles';

import './globals.css';

import theme from '@/theme';
import LoadingProvider from '@/providers/loading-provider';
import AuthProvider from '@/providers/auth-provider';
import { AppProps } from 'next/app';

type NextPageWithLayout = AppProps['Component'] & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}

export const metadata = {
  title: 'English Class',
  description: 'English Class',
  icons: {
    icon: '/favicon.png'
  }
};

export default function RootLayout({ Component, pageProps }: AppProps) {
  const getLayout =
    (Component as NextPageWithLayout).getLayout || ((page) => page);

  return (
    <>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <LoadingProvider>
            <AuthProvider>
              {getLayout(<Component {...pageProps} />)}
            </AuthProvider>
          </LoadingProvider>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </>
  );
}
