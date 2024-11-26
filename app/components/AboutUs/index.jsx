import React from 'react';

import Typography from '@mui/material/Typography';
import Image from 'next/image';

import imageTest from '@/assets/about-us-2-1.png';

const aboutContents = [
    {
        description:
            'AIMalls is an AI-powered online mall or store, a platform and an app that uses intelligent algorithms to provide personalized shopping experiences.',
    },
    {
        description:
            "It can recognize a consumer's preferences and past purchase history, enabling it to suggest products that are more likely to appeal to them.",
    },
    {
        description:
            'The AI technology can also analyze consumer behavior and provide insights into how to optimize the user experience. This innovative technology aims to make shopping easier, more efficient, and tailored to the individual customer.',
    },
];

const textProps = {
    sx: {
        fontSize: 40,
    },
};

export default function AboutUs() {
    const headline = (
        <Typography {...textProps} style={{ fontWeight: 'bold' }}>
            About <span style={{ color: '#fc9a14' }}>AiMalls</span>
        </Typography>
    );

    const bodyText = aboutContents.map((item, index) => (
        <Typography key={index} className={index > 0 ? 'mt-3' : ''}>
            {item.description}
        </Typography>
    ));

    return (
        <div
            padding="5px"
            className="md:p-14 p-8 flex md:flex-row flex-col items-center gap-5 bg-[#270f0b]"
        >
            <Image
                src={imageTest}
                loading="lazy"
                alt="about us"
                width={400}
                height={400}
            />
            <div className="md:w-1/2 w-full text-white">
                {headline}
                {bodyText}
            </div>
        </div>
    );
}
