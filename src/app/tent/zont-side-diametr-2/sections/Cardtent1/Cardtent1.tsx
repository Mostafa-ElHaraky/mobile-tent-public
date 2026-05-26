'use client';

import { useRef, useEffect } from "react";
import { ReactElement } from 'react';
import { PricingSection } from "./sections/PricingSection";
import Header from '../../../../../components/ui/Header';

export const Cardtent1 = (): ReactElement => {
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
    <main className="relative w-full bg-white mx-auto">
      {/* ========== Desktop Version ========== */}
      <div className="hidden md:block">
        {/* Full-width section acts as positioning context for the BG */}
        <section className="relative w-full">
          {/* 🔷 FULL-WIDTH BACKGROUND (fills monitor width, matches section height) */}
          <div className="absolute inset-0 z-0 h-[1669px]">
            <div className="w-full h-full [background:linear-gradient(180deg,rgba(232,238,248,1)_0%,rgba(222,228,240,0)_100%)]" />
          </div>

          {/* 🔹 Centered content, capped at 1440, lifted above BG */}
          <div className="relative z-10 max-w-[1440px] mx-auto rounded-b-[30px]">
            <div className="relative h-[1669px]">
              {/* keep your original layout offsets */}
              <div className="relative w-full h-[1275px] top-[-194px]">
                <PricingSection />
                <div className="absolute w-[1440px] h-[689px] top-[586px] left-0 rounded-b-[20px] overflow-hidden" />
              </div>

              <div className="relative bottom-[196px]">
                <Header />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ========== Mobile Version ========== */}
      <div className="md:hidden w-full bg-white">
        <div className="relative">
          {/* Mobile Header */}
          <div className="w-full bg-white py-4 px-4 shadow-sm">
            <Header />
          </div>

          {/* Mobile Content */}
          <section className="flex flex-col gap-10 py-6 px-4 w-full max-w-full mx-0 box-border bg-[#f8fafc] min-h-screen">
            <PricingSection />
          </section>
        </div>
      </div>
    </main>
  );
};
