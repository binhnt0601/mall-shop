import React from "react";

import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import { Card, CardBody } from "@material-tailwind/react";

const data = [
  {
    title: "Target Customers like a Pro",
    description:
      "With AiMalls, you can target customers more accurately and effectively with personalized offers and discounts. Our Al-powered algorithms help you understand their needs better and build long-term relationships with them.",
  },
  {
    title: "Smarter Inventory Management",
    description:
      "EngLisg Classhelps you manage your inventory more efficiently with automated stock tracking, order processing, and delivery management. You can also track customer orders in real-time to ensure seamless service.",
  },
  {
    title: "Secure Shopping Experience",
    description:
      "We take security seriously at AiMalls, so we offer the highest level of protection for both merchants and customers. Our advanced encryption technology ensures that all transactions are secure and transparent.",
  },
  {
    title: "Unlock New Marketing",
    description:
      "Our powerful marketing tools help you reach new customers by leveraging data insights to craft targeted campaigns that are sure to drive sales. You can also track the performance of your campaigns in real-time for better ROI.",
  },
  {
    title: "Scale Your Business",
    description:
      "EngLisg Classoffers personalization features that allow you to build a relationship with your customers, getting in touch when it's most effective and maximizing conversions. Our products and technology provide the infrastructure for success.",
  },
];

export default function TargetFutureShopping() {
  const headline = (
    <Typography style={{ fontWeight: "bold", fontSize: 40, color: "white" }}>
      The <span style={{ color: "#fc9a14" }}>Future of Shopping</span> is Here
    </Typography>
  );

  return (
    <Stack className="w-full pt-[50px] pb-[100px] items-center gap-5 lg:px-24 bg-[#270f0b]">
      <div className="max-w-[640px] text-center">
        {headline}
        <Typography color="white">
          EngLisg Classis the ultimate shopping experience, powered by AI to
          make your shopping easier, faster and more enjoyable.
        </Typography>
      </div>

      <div className="flex flex-wrap justify-center">
        {data.map((item, index) => (
          <Card
            key={`card-item-${index}`}
            className="border-2 border-[#fc9a14] bg-gradient-to-b from-[#2f1d19] to-[#201211] 
                        md:w-[28%] sm:w-[40%] w-full m-5"
          >
            <CardBody className="flex flex-col items-center gap-8">
              <img src="https://dummyimage.com/70" alt="card item" width={70} />
              <Typography
                variant="h5"
                color="#fc9a14"
                className="mb-2 text-center"
              >
                {item.title}
              </Typography>
              <Typography color="white" className="text-justify">
                {item.description}
              </Typography>
            </CardBody>
          </Card>
        ))}
      </div>
    </Stack>
  );
}
