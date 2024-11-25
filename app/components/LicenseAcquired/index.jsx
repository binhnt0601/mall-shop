import React from 'react';

import Typography from '@mui/material/Typography';
import Image from 'next/image';

import imageTest from '@/assets/about-us-2-1.png';

export default function LicenseAcquired() {
    const headline = (
        <Typography style={{ fontWeight: 'bold', fontSize: 40 }}>
            License <span style={{ color: '#fc9a14' }}>Acquired</span>
        </Typography>
    );

    return (
        <div
            padding="5px"
            className="w-full flex flex-col items-center gap-5 py-10"
        >
            {headline}
            <Image
                src={imageTest}
                loading="lazy"
                alt="license acquired"
                width={210}
                height={300}
            />
        </div>
    );
}
