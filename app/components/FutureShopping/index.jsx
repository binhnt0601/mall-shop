import React from "react";

import Typography from "@mui/material/Typography";
import { Card, CardBody } from "@material-tailwind/react";
import { Divider, Grid } from "@mui/material";

const data = [
  {
    title: "Experience personalized shopping",
    description:
      "AiMalls uses intelligent algorithms to provide you with a personalized shopping experience. Get tailored product recommendations, faster search results, and more accurate pricing strategies that are designed to help you save time and money.",
  },
  {
    title: "Secure your purchases",
    description:
      "We use advanced security measures to detect fraudulent activity and protect your data. AiMalls also offers efficient inventory management so you can rest assured that your purchases are safe.",
  },
  {
    title: "Gain real-time insights",
    description:
      "Our real-time analytics insights give you the power to make informed decisions quickly. You'll have access to data-drived insights so you can take advantage of every opportunity that comes your way.",
  },
  {
    title: "Benefit from our platform",
    description:
      "AiMalls offers benefits for both customers and merchants. Customers enjoy a secure online shopping experience while merchants benefit from access to powerful tools like market segmentation, pricing optimization, customer data tracking, customer loyalty programs.",
  },
];

export default function FutureShopping() {
  const headline = (
    <Typography style={{ fontWeight: "bold", fontSize: 40 }}>
      Welcome to the{" "}
      <span style={{ color: "#fc9a14" }}>future of shopping</span>
    </Typography>
  );

  return (
    <>
      <div className="w-full flex lg:flex-row flex-col gap-5 py-10 md:px-14 text-white bg-[#270f0b]">
        <div className="lg:w-[50%] w-full p-6">
          {headline}
          <Typography className="text-justify">
            AiMalls is an AI-powered online mall that offers a personalized,
            secure and hassle-free shopping experience. With intelligent
            algorithms, you get faster and more accurate search results and
            product recommendations, plus pricing strategy and 24/7 customer
            service for both customers and merchants.
          </Typography>
        </div>

        <Grid container>
          {data.map((item, index) => (
            <Grid key={`item-${index}`} item sm={6} xs={12}>
              <Card className="text-white bg-transparent shadow-none">
                <CardBody className="flex flex-col gap-5">
                  <img src="https://dummyimage.com/70" alt="item" width={70} />
                  <Typography variant="h5" fontWeight="bold" color="#fc9a14">
                    {item.title}
                  </Typography>
                  <Typography
                    className="text-justify"
                    style={{ lineHeight: 1.5 }}
                  >
                    {item.description}
                  </Typography>
                </CardBody>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
      <Divider className="h-[17px] bg-[#fc9a14]" />
    </>
  );
}
