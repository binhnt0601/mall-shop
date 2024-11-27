import React from "react";

import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import { Card, CardBody } from "@material-tailwind/react";

const data = [
  {
    title: "Personalized Product Recommendations",
    description:
      "AiMalls uses advanced Al algorithms to give you tailored product recommendations that are tailored to your individual needs. With this feature, you'll never have to worry about missing out on the perfect product for you.",
  },
  {
    title: "Advanced Search Capabilities",
    description:
      "Get exactly what you're looking for with our advanced search capabilities. Search by keyword, price range and more to find the perfect item for you in no time.",
  },
  {
    title: "24/7 Availability",
    description:
      "AiMalls is available 24/7, so you can shop when it's convenient for you. No matter where you are or what time it is, AiMalls has got your back!",
  },
  {
    title: "Discover new Products on the Market",
    description:
      "Stay up-to-date with the latest trends and products with AiMalls' constantly updated inventory of new products. With our Al-powered system, you'll never miss out on any hot new items!",
  },
  {
    title: "Faster and easier Checkout",
    description:
      "AiMalls can streamline the checkout process, allowing shoppers to complete their purchases faster and easier.",
  },
];

export default function BenefitsShopping() {
  const headline = (
    <Typography style={{ fontWeight: "bold", fontSize: 40 }}>
      Discover the{" "}
      <span style={{ color: "#fc9a14" }}>
        Benefits of Shopping with AIMalls
      </span>
    </Typography>
  );

  return (
    <Stack className="w-full pt-[50px] pb-[100px] items-center gap-5 lg:px-24">
      <div className="max-w-[640px] text-center">
        {headline}
        <Typography>
          AIMalls is the ultimate shopping experience, powered by AI to make
          your shopping easier, faster and more enjoyable.
        </Typography>
      </div>

      <div className="flex flex-wrap justify-center">
        {data.map((item, index) => (
          <Card
            key={`card-item-${index}`}
            className="border-2 border-[#fc9a14] md:w-[28%] sm:w-[40%] w-full m-5"
          >
            <img
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="card-image"
              height={150}
              className="rounded-t-lg"
            />
            <CardBody>
              <Typography
                variant="h5"
                color="#fc9a14"
                className="mb-2 text-center"
              >
                {item.title}
              </Typography>
              <Typography className="text-justify">
                {item.description}
              </Typography>
            </CardBody>
          </Card>
        ))}
      </div>
    </Stack>
  );
}
