import React from 'react';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';

import Footer from '../components/Footer';

import './globals.css';

import theme from '@/theme';
import TopBar from '@/components/TopBar';
import LoadingProvider from '@/providers/loading-provider';
import AuthProvider from '@/providers/auth-provider';

export const metadata = {
  title: 'English Class',
  description: 'English Class',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <LoadingProvider>
              <AuthProvider>
                <TopBar />
                {children}
                <Footer />
              </AuthProvider>
            </LoadingProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
