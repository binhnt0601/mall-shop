"use client";
import { useRef } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const useAboutUsAnimations = () => {
  const animateBanner = (ref, triggerId, type) => {
    const direction = {
      left: { x: 500 },
      right: { x: -500 },
      top: { y: 500 },
      bottom: { y: -500 },
    }[type];

    if (ref.current) {
      gsap.from(ref.current, {
        scrollTrigger: {
          trigger: triggerId,
          start: "top bottom",
          end: "100% 70%",
          scrub: 0.5,
        },
        ...direction,
      });
    }
  };

  const banner1 = useRef();
  const banner2 = useRef();
  const banner3 = useRef();
  const banner4 = useRef();
  const banner5_1 = useRef();
  const banner5_2 = useRef();
  const banner5_3 = useRef();

  useGSAP(() => {
    animateBanner(banner1, "#card1", "left");
    animateBanner(banner2, "#card2", "right");
    animateBanner(banner3, "#card3", "left");
    animateBanner(banner4, "#card4", "right");
    animateBanner(banner5_1, "#card5", "right");
    animateBanner(banner5_2, "#card6", "bottom");
    animateBanner(banner5_3, "#card6", "top");
  }, []);

  return {
    banner1,
    banner2,
    banner3,
    banner4,
    banner5_1,
    banner5_2,
    banner5_3,
  };
};

export default useAboutUsAnimations;
