import { Typography } from "@mui/material";
import Image from "next/image";

import TargetIcon from "@/assets/icons/target.svg";

const data = [
  {
    img: TargetIcon,
    description:
      "AiMalls incorporating AI technologies like personalized recommendations, chatbots, and image recognition. It offers a better user experience, lower fees for sellers, and unique AI-powered features.",
  },
  {
    img: TargetIcon,
    description:
      "Our target audience is broad, but we plan to focus on millennial and Gen Z shoppers who are tech-savvy and value convenience and personalization in their shopping experience.",
  },
  {
    img: TargetIcon,
    description:
      "AiMalls is to implement an AI powered verification process in place for sellers to ensure that only legitimate businesses or individuals are selling products on the platform. It also have a system for managing product listings to prevent duplicates or inaccurate listings.",
  },
  {
    img: TargetIcon,
    description:
      "AiMalls will use secure payment processing systems to handle transactions and implement SSL encryption to protect user data. We will also add options to shop and pay using cryptocurrency.",
  },
  {
    img: TargetIcon,
    description:
      "AiMalls will be using social media, influemcer marketing, and search engine optimization to attract and retain customers. It also offers incentives like loyalty programs and discounts to encourage repeat business.",
  },
];

const TechnologyAndTargetMarket = () => {
  const headline = (
    <Typography style={{ fontWeight: "bold", fontSize: 40 }}>
      <span style={{ color: "#fc9a14" }}>AiMalls Technology</span> & Target
      Market
    </Typography>
  );

  return (
    <div className="bg-[#270f0b]">
      <div>{headline}</div>
      {data.map((item, index) => (
        <div key={index}>
          <Image width={50} height={50} src={item.img} alt="target" />
          <Typography>{item.description}</Typography>
        </div>
      ))}
    </div>
  );
};

export default TechnologyAndTargetMarket;
