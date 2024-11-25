import React from 'react';

import { ToastContainer } from 'react-toastify';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Stack } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import Footer from '../components/Footer';

import './globals.css';

import theme from '@/theme';
import TopBar from '@/components/TopBar';

export const metadata = {
    title: 'Blockify',
    description: 'Blockify',
    icons: {
        icon: '/company-logo.png',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body suppressHydrationWarning>
                <AppRouterCacheProvider>
                    <ThemeProvider theme={theme}>
                        <TopBar />
                        <Stack
                            sx={{
                                marginTop: { xs: '4rem', sm: '5.5rem' },
                            }}
                        >
                            {children}
                        </Stack>
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
