'use client';

import React, { useState } from 'react';



import useViewPort from '@/hooks/useViewPort';
import HeroSection from '@/modules/LandingPage/HeroSection';
import FeaturesSection from '@/modules/LandingPage/FeaturesSection';
import CoursesSection from '@/modules/LandingPage/CoursesSection';
import TestimonialsSection from '@/modules/LandingPage/TestimonialsSection';
import CallToActionSection from '@/modules/LandingPage/CallToActionSection';
import MainLayout from '@/layouts/MainLayout';

export default function Home() {
  const { isTablet } = useViewPort();
  const [isShow, setIsShow] = useState(true);

  return ( <main>
  <HeroSection />     
  <FeaturesSection />   
  <CoursesSection />    
  <TestimonialsSection /> 
  <CallToActionSection /> 
</main>

    // <Stack
    //   sx={{
    //     marginTop: '4rem',
    //   }}
    // >
    //   <WelcomeScreen />
    //   <AboutUs />
    //   <LicenseAcquired />
    //   <AppOverview />
    //   <FutureShopping />
    //   <BenefitsShopping />
    //   <TargetFutureShopping />
    //   <AiMallsApp />
    //   <TechnologyAndTargetMarket />
    //   <ComprehensiveOverview />
    //   <Background imgSrc="background.png" textBackground={<RoadMap />} />
    //   <Background imgSrc="background.png" textBackground={<FAQS />} />
    //   <FeaturedIn />
    //   <Partnerships />
    //   {isShow && (
    //     <div className="fixed bottom-0 right-0 z-50 pr-5 text-right">
    //       <button className="text-white" onClick={() => setIsShow(false)}>
    //         [X]
    //       </button>
    //       {isTablet ? (
    //         <YouTubeEmbed
    //           videoid="aVv5aA8ZeDk"
    //           width={160}
    //           height={100}
    //           params="autoplay=1&mute=1&controls=0"
    //         />
    //       ) : (
    //         <YouTubeEmbed
    //           videoid="aVv5aA8ZeDk"
    //           width={300}
    //           height={185}
    //           params="autoplay=1&mute=1&controls=0"
    //         />
    //       )}
    //     </div>
    //   )}
    // </Stack>
  );
}

Home.getLayout = function getLayout(page: any) {
  return <MainLayout>{page}</MainLayout>;
};