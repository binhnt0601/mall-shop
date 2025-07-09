"use client";

import React from "react";

import MainLayout from "@/layouts/MainLayout";
import CallToActionSection from "@/modules/LandingPage/CallToActionSection";
import CourseRoadmap from "@/modules/LandingPage/CourseRoadmap";
import CoursesSection from "@/modules/LandingPage/CoursesSection";
import FeaturesSection from "@/modules/LandingPage/FeaturesSection";
import HeroSection from "@/modules/LandingPage/HeroSection";
import TestimonialsSection from "@/modules/LandingPage/TestimonialsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <CoursesSection />
      <CourseRoadmap />
      <TestimonialsSection />
      <CallToActionSection />
    </main>
  );
}

Home.getLayout = function getLayout(page: any) {
  return <MainLayout>{page}</MainLayout>;
};
