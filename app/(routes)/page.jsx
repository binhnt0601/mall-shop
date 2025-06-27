import React, { useState } from "react";

import { Stack } from "@mui/material";
import { YouTubeEmbed } from "@next/third-parties/google";

import WelcomeScreen from "../components/WelcomeScreen";
import Background from "../components/Background";
import AboutUs from "../components/AboutUs";

import LicenseAcquired from "@/components/LicenseAcquired";
import AppOverview from "@/components/AppOverview";
import FutureShopping from "@/components/FutureShopping";
import BenefitsShopping from "@/components/BenefitsShopping";
import Partnerships from "@/components/Partnerships";
import FeaturedIn from "@/components/FeaturedIn";
import FAQS from "@/components/FAQs";
import RoadMap from "@/components/RoadMap";
import ComprehensiveOverview from "@/components/ComprehensiveOverview";
import TargetFutureShopping from "@/components/TargetFutureShopping";
import AiMallsApp from "@/components/AiMallsApp";
import TechnologyAndTargetMarket from "@/components/TechnologyAndTargetMarket";
import useViewPort from "@/hooks/useViewPort";

export default function Home() {
  const { isTablet } = useViewPort();
  const [isShow, setIsShow] = useState(true);

  return (
    <Stack
      sx={{
        marginTop: "4rem",
      }}
    >
      <WelcomeScreen />
      <AboutUs />
      <LicenseAcquired />
      <AppOverview />
      <FutureShopping />
      <BenefitsShopping />
      <TargetFutureShopping />
      <AiMallsApp />
      <TechnologyAndTargetMarket />
      <ComprehensiveOverview />
      <Background imgSrc="background.png" textBackground={<RoadMap />} />
      <Background imgSrc="background.png" textBackground={<FAQS />} />
      <FeaturedIn />
      <Partnerships />
      {isShow && (
        <div className="fixed bottom-0 right-0 pr-5 z-50 text-right">
          <button className="text-white" onClick={() => setIsShow(false)}>
            [X]
          </button>
          {isTablet ? (
            <YouTubeEmbed
              videoid="aVv5aA8ZeDk"
              width={160}
              height={100}
              params="autoplay=1&mute=1&controls=0"
            />
          ) : (
            <YouTubeEmbed
              videoid="aVv5aA8ZeDk"
              width={300}
              height={185}
              params="autoplay=1&mute=1&controls=0"
            />
          )}
        </div>
      )}
    </Stack>
  );
}
