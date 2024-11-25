import React from 'react';

import Typography from '@mui/material/Typography';

export default function BenefitsShopping() {
    const headline = (
        <Typography style={{ fontWeight: 'bold', fontSize: 40 }}>
            Discover the{' '}
            <span style={{ color: '#fc9a14' }}>
                Benefits of Shopping with AIMalls
            </span>
        </Typography>
    );

    return (
        <div
            padding="5px"
            className="w-full flex flex-col items-center gap-5 py-10"
        >
            {headline}
            <Typography>
                AIMalls is the ultimate shopping experience, powered by AI to
                make your shopping easier, faster and more enjoyable.
            </Typography>
        </div>
    );
}
