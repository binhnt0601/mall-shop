import React from 'react';

import Typography from '@mui/material/Typography';

export default function LicenseAcquired() {
    const headline = (
        <Typography
            style={{ fontWeight: 'bold', fontSize: 40, color: 'white' }}
        >
            License <span style={{ color: '#fc9a14' }}>Acquired</span>
        </Typography>
    );

    return (
        <div
            padding="5px"
            className="w-full flex flex-col items-center gap-5 py-10 bg-[#270f0b]"
        >
            {headline}
            <img src="https://dummyimage.com/300x500" alt="license acquired" />
        </div>
    );
}
