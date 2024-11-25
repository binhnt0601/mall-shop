import React from 'react';

import Typography from '@mui/material/Typography';

export default function FutureShopping() {
    const headline = (
        <Typography style={{ fontWeight: 'bold', fontSize: 40 }}>
            Welcome to the{' '}
            <span style={{ color: '#fc9a14' }}>future of shopping</span>
        </Typography>
    );

    return (
        <div
            padding="5px"
            className="w-full flex flex-col items-center gap-5 py-10"
        >
            {headline}
            <Typography>
                AiMalls is an AI-powered online mall that offers a personalized,
                secure and hassle-free shopping experience. With intelligent
                algorithms, you get faster and more accurate search results and
                product recommendations, plus pricing strategy and 24/7 customer
                service for both customers and merchants.
            </Typography>
        </div>
    );
}
