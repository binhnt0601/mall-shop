import React from 'react';

import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import Image from 'next/image';

import ResponsiveBanner from '../shared/ResponsiveBanner';

import imageTest from '@/assets/about-us-2-1.png';
// import { useAboutUsAnimations } from "@/app/hooks/useAboutUsAnimations";

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
    // const { banner1 } = useAboutUsAnimations();

    const image = (
        <Image
            // ref={banner1}
            src={imageTest}
            loading="lazy"
            alt="image-2-1"
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
        />
    );

    const headline = (
        <Typography {...textProps} style={{ fontWeight: 'bold' }}>
            About <span style={{ color: '#fc9a14' }}>AiMalls</span>
        </Typography>
    );

    const bodyText = aboutContents.map((item, index) => (
        <p key={index} className={index > 0 ? 'mt-3' : ''}>
            {item.description}
        </p>
    ));

    return (
        <Stack
            display="flex"
            flexDirection="column"
            color="white"
            padding="5px"
            className="md:w-1/2 w-full md:ml-14 ml-0"
        >
            <ResponsiveBanner
                id="card1"
                headline={headline}
                bodyText={bodyText}
                media={image}
                mediaWidth={60}
            />
        </Stack>
    );
}
