import React, { Fragment } from 'react';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

import { ThemeProvider } from '@mui/material/styles';

import './globals.css';

import theme from '@/theme';
import LoadingProvider from '@/providers/loading-provider';
import AuthProvider from '@/providers/auth-provider';
import { AppProps } from 'next/app';
import Head from 'next/head';

type NextPageWithLayout = AppProps['Component'] & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

export default function RootLayout({ Component, pageProps }: any) {
  const Layout = Component.Layout ? Component.Layout : Fragment;
  const layoutProps = Component.LayoutProps ? Component.LayoutProps : {};

  const getLayout =
    (Component as NextPageWithLayout).getLayout || ((page) => page);

  return (
    <>
      <Head>
        <title>English Class</title>
        <meta name='description' content='English Class' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <LoadingProvider>
            <AuthProvider>
              <Layout {...layoutProps}>
                {getLayout(<Component {...pageProps} />)}
              </Layout>
            </AuthProvider>
          </LoadingProvider>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </>
  );
}
