import { useEffect, useState } from "react";

export const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < breakpoint;
    }
    return false;
  });

  useEffect(() => {
    const updateSize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [breakpoint]);

  return isMobile;
};
