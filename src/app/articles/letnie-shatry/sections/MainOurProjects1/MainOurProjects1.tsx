'use client';

import { ReactElement } from 'react';
import { useRef, useEffect } from "react";
import { FrameShatry4 } from "./FrameShatry4/FrameShatry4";
import Header from '../../../../../components/ui/Header';

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
      {/* SINGLE SEO-OPTIMIZED H1 - Placed at the VERY TOP */}
      <h1 className="sr-only">Летние шатры для кафе и ресторанов - производство и установка от MobileTent</h1>

      {/* Unified full-bleed gradient background - now with auto height */}
      <div
        className="absolute inset-x-0 top-0 h-auto bg-gradient-to-b from-[#E8EEF8] to-transparent z-0 pointer-events-none"
        style={{ height: '100%' }}
        aria-hidden
      />

      {/* Centered content container with auto height */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto">
        {/* Desktop Version */}
        <section className="relative rounded-[0px_0px_30px_30px] hidden sm:block">
          {/* Header component - moved up with negative margin */}
          <div className="pt-80 absolute top-[755px]">
            <Header />
          </div>
          
          {/* Text content moved down with more padding */}
          <div className="pt-40 pb-50 ">
            <FrameShatry4 />
          </div>
        </section>

        {/* Mobile Version */}
        <section className="relative rounded-[0px_0px_30px_30px] block sm:hidden">
          {/* Header component - moved up with negative margin */}
          <div className="relative -top-2">
            <Header />
          </div>
          
          {/* Text content moved down with more padding */}
          <div className="pt-32 pb-16 px-4">
            <FrameShatry4 />
          </div>
        </section>
      </div>
    </div>
  );
};