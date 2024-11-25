"use client";
import React from "react";

import Image from "next/image";

import image from "@/public/about-us-2-1.png";
import ResponsiveBanner from "@/app/components/shared/ResponsiveBanner";
import CustomSpan from "@/app/components/shared/CustomSpan";
import { useAboutUsAnimations } from "@/app/hooks/useAboutUsAnimations";

export default function Frame2_1() {
  const { banner1 } = useAboutUsAnimations();

  const image21 = (
    <Image
      ref={banner1}
      src={image}
      loading="lazy"
      alt="image-2-1"
      sizes="100vw"
      style={{ width: "100%", height: "auto" }}
    />
  );

  const headline = <CustomSpan>Introduction</CustomSpan>;
  const bodyText = (
    <span>
      <CustomSpan fontSize="1.2em">Blockify</CustomSpan> is pioneering the
      future of digital innovation with cutting-edge blockchain solutions
      tailored for the Web 3.0 era.
    </span>
  );
  return (
    <div className="mt-[100px]">
      <ResponsiveBanner
        id="card1"
        headline={headline}
        bodyText={bodyText}
        media={image21}
        mediaWidth={60}
      />
    </div>
  );
}
