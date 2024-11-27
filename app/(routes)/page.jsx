"use client";

import React, { useState } from "react";

import { Stack } from "@mui/material";

import WelcomeScreen from "../components/WelcomeScreen";
import Background from "../components/Background";
import AboutUs from "../components/AboutUs";

import Frame1Banner from "@/assets/background.png";
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

export default function Home() {
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
      <Background imgSrc={Frame1Banner} textBackground={<RoadMap />} />
      <Background imgSrc={Frame1Banner} textBackground={<FAQS />} />
      <FeaturedIn />
      <Partnerships />
      {isShow && (
        <div
          className="sticky bottom-0 p-5 z-50"
          style={{ justifyItems: "right" }}
        >
          <button className="text-white" onClick={() => setIsShow(false)}>
            [X]
          </button>
          <iframe
            width="300"
            height="185"
            src="https://www.youtube.com/embed/aVv5aA8ZeDk?autoplay=1&mute=1&controls=0"
          ></iframe>
        </div>
      )}
    </Stack>
  );
}
