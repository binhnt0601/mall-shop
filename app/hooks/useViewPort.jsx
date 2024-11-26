"use client";
import { useEffect, useState } from "react";

const useViewPort = () => {
  const [device, setDevice] = useState();

  useEffect(() => {
    if (global?.window && window !== undefined) {
      setDevice({
        isMediumScreenWidth: window.matchMedia("(max-width: 1200px)").matches,
        isTablet: window.matchMedia("(max-width: 768px)").matches,
        isMobile: window.matchMedia("(max-width: 576px)").matches,
      });
    }
  }, []);

  return { ...device };
};

export default useViewPort;
