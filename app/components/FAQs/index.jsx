import React from 'react';

import Typography from '@mui/material/Typography';

export default function FAQS() {
    const headline = (
        <Typography style={{ fontWeight: 'bold', fontSize: 40 }}>
            AiMalls FAQs:
        </Typography>
    );

    return (
        <div
            padding="5px"
            className="w-full flex flex-col items-center gap-5 py-10"
        >
            {headline}
            <Typography>
                Q: What is AiMalls?
                A: AiMalls is an AI powered online mall or store, a platform and an app that uses intelligent algorithms to provide personalized shopping experiences.
                Q: What are the benefits will AiMalls bring?
                A: Personalized product recommendations, Chatbots for Customer Service, Automated Product Categorization, Mobile-Friendly design, Secure payment processing, Integration with Quality brands and dispute resolution.
                Q: What advantages AiMalls has against its competitors?
                A: Security, fast and reliable shipping for customers, AiMalls algorithms can help online stores/apps manage their inventory more efficiently, with AI-powered chatbots and virtual assistants it can provide good customer service 24/7, AiMalls offers competitive pricing and affiliate programs.
                Q: When is AiMalls Launching live?
                A: AiMalls is Launching in October.
                Q: How can I participate in the AiMalls Launch?
                A: Please wait further announcement regarding Public Sale and Exchange Listing Schedule (TBA).
                Q: Do you have the project Whitepaper?
                A: Yes, here is the link : https://cdn.aimalls.app/whitepaper.pdf
                Q: What is the ticker for AiMalls token?
                A: It is $AIT
                Q: What is $AIT use cases?
                A: With AIT you can buy sponsored slots to promote your store and products in our marketplace , also means of accessing exclusive content or products on the app, offering added value for users who hold the token.
                Q: What is the Total Token Supply?
                A: 850,000
                Q: Where can I find the roadmap, token allocation, and token utility?
                A: All can be found in our Whitepaper link provided above.
            </Typography>
        </div>
    );
}
