import './globals.css';

import React, { Fragment, useEffect } from 'react';
import { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';

import AppProviders from '@/providers/app-provider';
import { useAuthStore } from '@/stores/auth/useAuthStore';
import { GetAuthToken } from '@/graphql/auth';

import createEmotionCache from '@/utils/createEmotionCache';

type NextPageWithLayout = AppProps['Component'] & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
  Layout?: React.ComponentType<any>;
  LayoutProps?: Record<string, any>;
  emotionCache?: EmotionCache;
};

const clientSideEmotionCache = createEmotionCache();

function MyApp(props: AppProps & { emotionCache?: EmotionCache }) {
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;

  const { auth, loadProfile } = useAuthStore();
  const token = GetAuthToken();

  const Layout = (Component as NextPageWithLayout).Layout || Fragment;
  const layoutProps = (Component as NextPageWithLayout).LayoutProps || {};

  const getLayout =
    (Component as NextPageWithLayout).getLayout || ((page) => page);

  useEffect(() => {
    if (token && !auth) {
      loadProfile();
    }
  }, [auth, token, loadProfile]);

  return (
    <CacheProvider value={emotionCache}>
      <AppProviders>
        <Layout {...layoutProps}>
          {getLayout(<Component {...pageProps} />)}
        </Layout>
      </AppProviders>
    </CacheProvider>
  );
}

export default MyApp;
