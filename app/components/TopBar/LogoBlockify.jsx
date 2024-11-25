import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import Box from '@mui/material/Box';

import useViewPort from '@/hooks/useViewPort';
import LogoDesktop from '@/assets/logo-desktop.png';
import LogoMobile from '@/assets/logo-mobile.png';

export default function LogoBlockify() {
    const { isMobile } = useViewPort();

    return (
        <Box sx={{ mr: '0.5em' }}>
            <Link href="/">
                <Image
                    width="auto"
                    height="auto"
                    src={isMobile ? LogoMobile : LogoDesktop}
                    alt="Brand Logo"
                />
            </Link>
        </Box>
    );
}
