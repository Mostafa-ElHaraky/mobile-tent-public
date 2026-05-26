'use client';

import { ReactElement } from 'react';
import { useRef, useEffect } from "react";
import { DivMainOurProjects1 } from "./DivMainOurProjects1/DivMainOurProjects1";
import { FrameMainOurProjects1 } from "./FrameMainOurProjects1/FrameMainOurProjects1";
import Header from '../../../../components/ui/Header';

interface MainOurProjects1Props {
  seoH1?: string;
}

export const MainOurProjects1 = ({ seoH1 }: MainOurProjects1Props): ReactElement => {
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
      {/* ✅ Unified full-bleed gradient background */}
      <div
        className="absolute inset-x-0 top-0 min-h-[1352px] bg-gradient-to-b from-[#E8EEF8] to-transparent z-0 pointer-events-none"
        aria-hidden
      />

      {/* Centered content container without its own conflicting gradient */}
      <div className="relative z-10 w-full max-w-[1440px] min-h-[1352px] mx-auto">
        {/* ✅ SEO-optimized single H1 tag from Bitrix CMS */}
        <h1 className="absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0">
          {seoH1 || "Выполненные работы - Наши проекты и портфолио"}
        </h1>
        
        {/* Desktop version */}
        <section className="relative h-[1081px] rounded-[0px_0px_30px_30px] hidden sm:block">
          <div className="relative bottom-[195px]" />
          <Header />
          <div className="relative top-[152px]">
            <DivMainOurProjects1 />
            <FrameMainOurProjects1 />
          </div>
        </section>

        {/* Mobile version */}
        <section className="relative h-auto rounded-[0px_0px_30px_30px] block sm:hidden">
          <div className="relative bottom-[50px]" /> {/* تعديل المسافات للهاتف */}
          <Header />
          <div className="relative top-[-30px] px-4"> {/* padding للهاتف */}
            <DivMainOurProjects1 />
            <FrameMainOurProjects1 />
          </div>
        </section>
      </div>
    </div>
  );
};