import React from "react";

import Frame1 from "../components/AboutUs/Frame1";
import Frame1Banner from "@/public/background.png";
import Frame2_1 from "@/app/components/AboutUs/Frame2/Frame2_1";
import Frame2_2 from "@/app/components/AboutUs/Frame2/Frame2_2";
import Frame2_3 from "@/app/components/AboutUs/Frame2/Frame2_3";
import Frame3 from "@/app/components/AboutUs/Frame3";
import Frame4 from "@/app/components/AboutUs/Frame4";
import Background from "../components/Background";
import { Box } from "@mui/material";
import AboutUs from "../components/AboutAiMalls";

export const dynamic = "force-dynamic";

export default function Home() {
  const frames = [Frame2_1, Frame2_2, Frame2_3, Frame3, Frame4];

  return (
    <React.Fragment>
      <Background
        imgSrc={Frame1Banner}
        textBackground={<Frame1 />}
        minHeight="calc(100vh - 64px)"
      />
      <Background imgSrc={Frame1Banner} textBackground={<AboutUs />} />

      {frames.map((Frame, index) => (
        <Box key={index} mb={{ xs: 4, md: 15 }}>
          <Frame />
        </Box>
      ))}
    </React.Fragment>
  );
}
