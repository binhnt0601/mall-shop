import React from 'react';

import Typography from '@mui/material/Typography';
import { Stack, Box } from '@mui/material';

export default function FAQS() {
  const headline = (
    <Typography style={{ fontWeight: 'bold', fontSize: 40 }}>
      EngLish ClassFAQs:
    </Typography>
  );

  const data = [
    {
      question: 'Q: What is AiMalls?',
      answer:
        'A: EngLish Classis an AI powered online mall or store, a platform and an app that uses intelligent algorithms to provide personalized shopping experiences.',
    },
    {
      question: 'Q: What are the benefits will EngLish Classbring?',
      answer:
        'A: Personalized product recommendations, Chatbots for Customer Service, Automated Product Categorization, Mobile-Friendly design, Secure payment processing, Integration with Quality brands and dispute resolution.',
    },
    {
      question: 'Q: What advantages EngLish Classhas against its competitors?',
      answer:
        'A: Security, fast and reliable shipping for customers, EngLish Classalgorithms can help online stores/apps manage their inventory more efficiently, with AI-powered chatbots and virtual assistants it can provide good customer service 24/7, EngLish Classoffers competitive pricing and affiliate programs.',
    },
    {
      question: 'Q: When is EngLish ClassLaunching live?',
      answer: 'A: EngLish Classis Launching in October.',
    },
    {
      question: 'Q: How can I participate in the EngLish ClassLaunch?',
      answer:
        'A: Please wait further announcement regarding Public Sale and Exchange Listing Schedule (TBA).',
    },
    {
      question: 'Q: Do you have the project Whitepaper?',
      answer:
        'A: Yes, here is the link : https://cdn.aimalls.app/whitepaper.pdf',
    },
    {
      question: 'Q: What is the ticker for EngLish Classtoken?',
      answer: 'A: It is $AIT',
    },
    {
      question: 'Q: What is $AIT use cases?',
      answer:
        'A: With AIT you can buy sponsored slots to promote your store and products in our marketplace , also means of accessing exclusive content or products on the app, offering added value for users who hold the token.',
    },
    {
      question: 'Q: What is the Total Token Supply?',
      answer: 'A: 850,000',
    },
    {
      question:
        'Q: Where can I find the roadmap, token allocation, and token utility?',
      answer: 'A: All can be found in our Whitepaper link provided above.',
    },
  ];

  return (
    <Stack
      id="faqs"
      className="bg-[#270f0b] px-5 pb-10 text-white md:px-20 lg:px-40"
    >
      <div className="flex w-full flex-col items-center gap-5 py-10">
        {headline}
      </div>

      <div>
        {data.map((item, index) => (
          <Box key={index}>
            <Typography
              style={{
                color: '#fc9a14',
                fontFamily: 'Work Sans',
                fontWeight: 'bold',
              }}
            >
              {item.question}
            </Typography>
            <Typography>{item.answer}</Typography>
          </Box>
        ))}
      </div>
    </Stack>
  );
}
