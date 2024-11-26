"use client";

import React from "react";

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
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}
