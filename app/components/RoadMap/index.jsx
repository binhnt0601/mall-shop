import React from "react";

import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import { Box } from '@mui/material';


export default function RoadMap() {
    const headline = (
        <Typography style={{ fontWeight: 'bold', fontSize: 40 }}>
            Road Map
        </Typography>
    );
    const data = [
        {
            year: '2023',
            quarters: [
                { quarter: '1', content: "Validity: Aimalls : Concept and Idea Research, Planning, and Design Proposal" },
                { quarter: '2', content: "Community Building Social Media Marketing" },
                { quarter: '3', content: "Design and Development of Aimalls Website Partnerships, Marketing Token Sale" },
                { quarter: '4', content: "Exchange Listings, Token Audit (Safety) Marketing Development of Mobile app on iOS and Android AI Intergration" }
            ]

        },

        {
            year: '2024',
            quarters: [
                { quarter: '1', content: "Testing AI Integration Quality Assurance" },
                { quarter: '2', content: "Launching Marketing Partnership Scaling" },
                { quarter: '3', content: "SEO optimization, digital advertising campaigns, Google ads, Youtube ads" },
                { quarter: '4', content: "Maintenance and Support" }
            ]

        },
    ];
    return (
        <div
            padding="5px"
            className="w-full flex flex-col items-center gap-5 py-10"
        >
            {headline}
            <Stack>


                <Box>
                    <Typography style={{ fontSize: '40px', fontFamily: 'Work Sans', fontWeight: 'Bold' }}>
                        {data[0].year}
                    </Typography>
                    {data.map(() => (
                        <Typography>
                            {data[0].quarters.quarter}
                            <span>
                                {data[0].quarters.content}
                            </span>
                        </Typography>
                    ))}
                </Box>
                <Box>
                    <Typography style={{ fontSize: '40px', fontFamily: 'Work Sans', fontWeight: 'Bold' }}>
                        {data[1].year}
                    </Typography>
                </Box>
            </Stack>
        </div>
    );
}
