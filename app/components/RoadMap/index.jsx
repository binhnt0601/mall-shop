import React from 'react';

import Typography from '@mui/material/Typography';

export default function RoadMap() {
    const headline = (
        <Typography style={{ fontWeight: 'bold', fontSize: 40 }}>
            Road Map
        </Typography>
    );

    return (
        <div
            padding="5px"
            className="w-full flex flex-col items-center gap-5 py-10"
        >
            {headline}
            <Typography>
                2023
                Q1
                Validity: Aimalls : Concept and Idea Research, Planning, and Design Proposal
                Q2
                Community Building Social Media Marketing
                Q3
                Design and Development of Aimalls Website Partnerships, Marketing Token Sale
                Q4
                Exchange Listings, Token Audit (Safety) Marketing Development of Mobile app on iOS and Android AI Intergration
                2024
                Q1
                Testing AI Integration Quality Assurance
                Q2
                Launching Marketing Partnership Scaling
                Q3
                SEO optimization, digital advertising campaigns, Google ads, Youtube ads
                Q4
                Maintenance and Support
            </Typography>
        </div>
    );
}




