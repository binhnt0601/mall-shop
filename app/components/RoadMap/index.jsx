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
    const data_1 = [

        { quarter: 'Q1', content: "Validity: Aimalls : Concept and Idea Research, Planning, and Design Proposal" },
        { quarter: 'Q2', content: "Community Building Social Media Marketing" },
        { quarter: 'Q3', content: "Design and Development of Aimalls Website Partnerships, Marketing Token Sale" },
        { quarter: 'Q4', content: "Exchange Listings, Token Audit (Safety) Marketing Development of Mobile app on iOS and Android AI Intergration" },
    ];

    const data_2 = [
        { quarter: 'Q1', content: "Testing AI Integration Quality Assurance" },
        { quarter: 'Q2', content: "Launching Marketing Partnership Scaling" },
        { quarter: 'Q3', content: "SEO optimization, digital advertising campaigns, Google ads, Youtube ads" },
        { quarter: 'Q4', content: "Maintenance and Support" }

    ];




    return (
        <div
            padding="5px"
            className="w-full flex flex-col items-center gap-5 py-10"
        >
            {headline}
            <Stack
                style={{
                    display: 'flex', flexDirection: 'row',
                    flexWrap: 'wrap', justifyContent: 'space-around'
                }}
            >


                <Box>

                    <Typography
                        style={{color: "#fc9a14", fontSize: '40px', fontFamily: 'Work Sans', fontWeight: 'Bold' }}>
                        2023
                    </Typography>
                    <Box>
                        {data_1.map((item, index) => (
                            <ul key={index} style={{ display: 'flex', flexDirection: 'column' }}>
                                <li style={{color: "#fc9a14", fontSize: '40px', fontFamily: 'Work Sans', fontWeight: 'Bold' }}>{item.quarter}</li>
                                <li>{item.content}</li>
                            </ul>
                        ))}
                    </Box>

                </Box>
                <Box>
                    <Typography style={{color: "#fc9a14", fontSize: '40px', fontFamily: 'Work Sans', fontWeight: 'Bold' }}>
                        2024
                    </Typography>

                    {data_2.map((item, index) => (
                        <Box>
                            <ul key={index} style={{ display: 'flex', flexDirection: 'column' }}>
                                <li style={{color: "#fc9a14", fontSize: '40px', fontFamily: 'Work Sans', fontWeight: 'Bold' }}>{item.quarter}</li>
                                <li>{item.content}</li>
                            </ul>
                        </Box>
                    ))}
                </Box>
            </Stack>
        </div>
    );
}
