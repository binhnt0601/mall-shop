import React from "react";

import Typography from "@mui/material/Typography";

export default function ComprehensiveOverview() {
  const headline = (
    <Typography
      style={{ fontWeight: "bold", fontSize: 40, textAlign: "center" }}
    >
      <p className="text-[#fc9a14]">Why Choose AiMalls?</p>
      <span>A Comprehensive Overview</span>
    </Typography>
  );

  return (
    <div className="w-full flex flex-col items-center gap-5 py-10">
      <div className="mb-5">{headline}</div>
      <div className="max-w-full md:max-w-[565px] md:px-0 px-5 mb-40">
        <Section1 />
      </div>
      <Section2 />
    </div>
  );
}

const Section1 = () => {
  return (
    <div>
      <Typography>
        Al-powered online stores, or AiMalls, are the future of e-commerce. we
        offer a range of advantages over traditional online stores, including
        improved customer experience and increased efficiency.
      </Typography>
      <Typography>
        AiMalls use advanced Al technology to analyze sales and inventory data
        in real time, allowing them to make informed decisions about stock
        levels and product placement. This helps to improve overall security
        while also ensuring that customers get the best possible experience when
        shopping online.
      </Typography>
      <Typography>
        Furthermore, AiMalls are available 24/7, meaning customers can shop
        whenever they want without having to worry about store opening hours.
        This makes it easier for customers to find the products they need when
        they need them. All in all, AiMalls offer a range of advantages over
        classic online stores that make them an attractive option for businesses
        looking to improve their customer service and increase their profits.
      </Typography>
    </div>
  );
};

const missionData = [
  {
    img: "https://dummyimage.com/70",
    title: "Our Goal",
    description:
      "Aimalls short-term goal is to attract sellers and buyers to the platforms and establish a reputation for providing a high-quality shopping experience. Aimalls long-term goal is to become one of the leading online marketplaces worldwide.",
  },

  {
    img: "https://dummyimage.com/70",
    title: "Vision",
    description:
      "Our vision is to become the go-to destination for online shopping, where customers can find a wide range of high-quality products and services at competitive prices. We strive to build a community of buyers and sellers who trust and respect each other, and who share a commitment to excellence, innovation, and sustainability. We believe that by harnessing the power of AI and other cutting-edge technologies, we can create a better and more inclusive future for all.",
  },
  {
    img: "https://dummyimage.com/70",
    title: "Mission",
    description:
      "Our mission is to create a vibrant and inclusive online marketplace that connects buyers and sellers from around the world. We aim to leverage the power of AI and other advanced technologies to offer a personalized and seamless shopping experience that is tailored to the unique needs and preferences of our customers.",
  },
];

const Section2 = () => {
  return (
    <div className="flex md:flex-row flex-col mx-32 border-2 border-[#fc9a14] rounded-3xl">
      {missionData.map((item, index) => (
        <div
          key={`mission-item-${index}`}
          className={`flex flex-col items-center text-center w-fit px-5 py-7 gap-2 
                        ${index % 2 === 1 ? "bg-[#fc9a14]" : ""}
                        ${index % 2 === 1 ? "text-white" : ""}`}
        >
          <img src={item.img} alt="logo" width={70} height={70} />
          <Typography style={{ fontSize: 30, fontWeight: "bold" }}>
            {item.title}
          </Typography>
          <Typography style={{ fontSize: 15, lineHeight: "normal" }}>
            {item.description}
          </Typography>
        </div>
      ))}
    </div>
  );
};
