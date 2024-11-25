'use client';

import React from 'react';

import Image from 'next/image';
import { Box, Typography } from '@mui/material';

function Footer() {
    return (
        <div className="bg-[#01161B]">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { md: 'row', xs: 'column' },
                }}
            >
                <Image
                    width={80}
                    height={80}
                    src={'/logo-vertical.png'}
                    alt="logo"
                />

                <Typography className="text-white">
                    © AIMalls All Rights Reserve
                </Typography>
            </Box>
        </div>
    );
}
export default Footer;
