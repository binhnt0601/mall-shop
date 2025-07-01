'use client';

import React, { useState } from 'react';

import useViewPort from '@/hooks/useViewPort';
import HeroSection from '@/modules/LandingPage/HeroSection';
import FeaturesSection from '@/modules/LandingPage/FeaturesSection';
import CoursesSection from '@/modules/LandingPage/CoursesSection';
import TestimonialsSection from '@/modules/LandingPage/TestimonialsSection';
import CallToActionSection from '@/modules/LandingPage/CallToActionSection';
import MainLayout from '@/layouts/MainLayout';
import CourseRoadmap from '@/modules/LandingPage/CourseRoadmap';

export default function Home() {
  const { isTablet } = useViewPort();
  const [isShow, setIsShow] = useState(true);

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
