'use client';

import { ReactElement } from 'react';
import { useRef, useEffect } from "react";
import { DivMainOurProjects1 } from "./DivMainOurProjects1/DivMainOurProjects1";
import { FrameMainOurProjects1 } from "./FrameMainOurProjects1/FrameMainOurProjects1";
import { FrameShatry4 } from "./FrameShatry4/FrameShatry4";
import Header from '../../../../components/ui/Header';

export const MainOurProjects1 = (): ReactElement => {
  const catalogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (catalogRef.current && !catalogRef.current.contains(event.target as Node)) {
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full">
      {/* Unified full-bleed gradient background */}
      <div
        className="absolute inset-x-0 top-0 min-h-[1352px] bg-gradient-to-b from-[#E8EEF8] to-transparent z-0 pointer-events-none"
        aria-hidden
      />

      {/* Centered content container */}
      <div className="relative z-10 w-full max-w-[1440px] min-h-[1352px] mx-auto">
        {/* Desktop Version */}
        <section className="relative min-h-[1081px] top-[65px] rounded-[0px_0px_30px_30px] hidden sm:block">
          <div className="pt-32">
            <DivMainOurProjects1 />
            <FrameMainOurProjects1 />
            <FrameShatry4 />
          </div>
          <div className="relative bottom-[1440px]">
                    <Header />
          </div>
        </section>

        {/* Mobile Version */}
        <section className="relative min-h-screen rounded-[0px_0px_30px_30px] block sm:hidden">
          <Header />
          <div className="pt-24 px-4">
            <DivMainOurProjects1 />
            <FrameMainOurProjects1 />
            <FrameShatry4 />
          </div>
        </section>
      </div>
    </div>
  );
};