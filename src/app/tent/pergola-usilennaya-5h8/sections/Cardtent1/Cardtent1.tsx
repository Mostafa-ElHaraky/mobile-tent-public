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
        <section className="relative h-[1669px] rounded-[0px_0px_30px_30px] max-w-[1440px] mx-auto">
          <div className="absolute w-full h-[1769px] top-0 left-0 rounded-[0px_0px_30px_30px] overflow-hidden">
            <div className="relative w-[1734px] h-[1275px] top-[-194px]">
              <div className="absolute w-[1734px] h-[1196px] top-0 left-0 [background:linear-gradient(180deg,rgba(232,238,248,1)_0%,rgba(222,228,240,0)_100%)]" />
                <PricingSection />
              <div className="absolute w-[1440px] h-[689px] top-[586px] left-0 rounded-[0px_0px_20px_20px] overflow-hidden">
              </div>
            </div>
            <div className="relative bottom-[196px]">
              <Header />
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

          {/* Mobile Content — مصمم ليكون متجاوبًا وآمنًا على الموبايل */}
          <section className="flex flex-col gap-10 py-6 px-4 w-full max-w-full mx-0 box-border bg-[#f8fafc] min-h-screen">
            <PricingSection />
          </section>
        </div>
      </div>

    </main>
  );
};