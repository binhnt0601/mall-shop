import React from "react";

import Typography from "@mui/material/Typography";

export default function RoadMap() {
  const headline = (
    <Typography style={{ fontWeight: "bold", fontSize: 40 }}>
      Road Map
    </Typography>
  );
  const data_1 = [
    {
      quarter: "Q1",
      content:
        "Validity: Aimalls : Concept and Idea Research, Planning, and Design Proposal",
    },
    { quarter: "Q2", content: "Community Building Social Media Marketing" },
    {
      quarter: "Q3",
      content:
        "Design and Development of Aimalls Website Partnerships, Marketing Token Sale",
    },
    {
      quarter: "Q4",
      content:
        "Exchange Listings, Token Audit (Safety) Marketing Development of Mobile app on iOS and Android AI Intergration",
    },
  ];

  const data_2 = [
    { quarter: "Q1", content: "Testing AI Integration Quality Assurance" },
    { quarter: "Q2", content: "Launching Marketing Partnership Scaling" },
    {
      quarter: "Q3",
      content:
        "SEO optimization, digital advertising campaigns, Google ads, Youtube ads",
    },
    { quarter: "Q4", content: "Maintenance and Support" },
  ];

  return (
    <div
      className="w-full flex flex-col items-center gap-5
     pb-10 lg:px-52 md:px-20 px-5 text-white bg-[#270f0b]"
    >
      {headline}
      <div className="flex md:flex-row flex-col gap-5">
        <div className="mt-10 flex-1">
          <Typography
            style={{
              color: "#fc9a14",
              fontSize: "40px",
              fontFamily: "Work Sans",
              fontWeight: "Bold",
            }}
          >
            2023
          </Typography>
          {data_1.map((item, index) => (
            <ul key={index} className="flex gap-3 items-center ml-5">
              <li
                style={{
                  color: "#fc9a14",
                  fontSize: "40px",
                  fontFamily: "Work Sans",
                  fontWeight: "Bold",
                }}
              >
                <span>{item.quarter}</span>
              </li>
              <li>
                <span>{item.content}</span>
              </li>
            </ul>
          ))}
        </div>

        <div className="md:mt-10 mt-0 flex-1">
          <Typography
            style={{
              color: "#fc9a14",
              fontSize: "40px",
              fontFamily: "Work Sans",
              fontWeight: "Bold",
            }}
          >
            2024
          </Typography>

          {data_2.map((item, index) => (
            <ul key={index} className="flex gap-3 items-center ml-5">
              <li
                style={{
                  color: "#fc9a14",
                  fontSize: "40px",
                  fontFamily: "Work Sans",
                  fontWeight: "Bold",
                }}
              >
                <span>{item.quarter}</span>
              </li>
              <li>
                <span>{item.content}</span>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
