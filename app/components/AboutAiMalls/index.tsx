import React from "react";

import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

const aboutContents = [
  {
    description:
      "AIMalls is an AI-powered online mall or store, a platform and an app that uses intelligent algorithms to provide personalized shopping experiences.",
  },
  {
    description:
      "It can recognize a consumer's preferences and past purchase history, enabling it to suggest products that are more likely to appeal to them.",
  },
  {
    description:
      "The AI technology can also analyze consumer behavior and provide insights into how to optimize the user experience. This innovative technology aims to make shopping easier, more efficient, and tailored to the individual customer.",
  },
];

const textProps = {
  sx: {
    fontSize: 40,
  },
};

export default function AboutUs() {
  return (
    <Stack
      display="flex"
      flexDirection="column"
      color="white"
      padding="5px"
      className="md:w-1/2 w-full md:ml-14 ml-0"
    >
      <Typography {...textProps} style={{ fontWeight: "bold" }}>
        About <span style={{ color: "#fc9a14" }}>AiMalls</span>
      </Typography>
      {aboutContents.map((item, index) => (
        <p key={index} className={index > 0 ? "mt-3" : ""}>
          {item.description}
        </p>
      ))}
    </Stack>
  );
}
