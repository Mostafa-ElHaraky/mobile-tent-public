'use client';

import { Card, CardContent } from "../../../../components/ui/card";
import { useRef, useEffect } from "react";
import { FrameWrapperAbout1 } from "./sections/FrameWrapperAbout1/FrameWrapperAbout1";
import { DivWrapperAbout1 } from "./sections/DivWrapperAbout1";
import { FrameAbout1 } from "./sections/FrameAbout1";
import { OverlapWrapperAbout1 } from "./sections/OverlapWrapperAbout1/OverlapWrapperAbout1";
import { Frame1About1 } from "./sections/Frame1About1/Frame1About1";
import { OverlapGroupWrapperAbout1 } from "./sections/OverlapGroupWrapperAbout1/OverlapGroupWrapperAbout1";
import { Frame2About1 } from "./sections/Frame2About1/Frame2About1";
import { GroupAbout1 } from "./sections/GroupAbout1/GroupAbout1";
import { SectionComponentNodeAbout1 } from "./sections/SectionComponentNodeAbout1/SectionComponentNodeAbout1";
import { Frame3About1 } from "./sections/Frame3About1/Frame3About1";
import { Frame4About1 } from "./sections/Frame4About1/Frame4About1";
import { ReactElement } from 'react';
import Link from 'next/link';
import Header from '../../../../components/ui/Header';

interface About1Props {
  h1Content?: string;
}

export const About1: React.FC<About1Props> = ({ h1Content }): ReactElement => {
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

  // Use the provided h1Content or default
  const seoH1 = h1Content || "О компании MobileTent - Производство и продажа тентовых конструкций и шатров по всей России и СНГ";

  return (
    <>
      {/* SINGLE SEO-OPTIMIZED H1 - Placed at the VERY TOP of the component */}
      <h1 className="sr-only">{seoH1}</h1>

      {/* Desktop Version */}
      <div className="hidden md:block relative w-full max-w-[1440px] h-[8115px] mx-auto bg-transparent">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[1196px] bg-gradient-to-b from-[#E8EEF8] to-transparent -z-10" />
        {/* Header shape wrapper (kept) */}
        <div className="absolute w-full h-[1081px] top-0 left-0 rounded-b-[30px] overflow-hidden">
        </div>
        {/* Logo, Catalog & Search */}
        <div className="absolute w-[1344px] h-[58px] top-[92px] left-12"></div>

        <div className="relative top-[180px] left-[40px] text-xs text-[#394355] font-raleway whitespace-nowrap">
          <div className="inline-flex items-center justify-center gap-2.5 p-1 bg-[#4f5d801a] rounded">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Raleway',Helvetica] font-normal text-[#394355] text-xs tracking-[0] leading-[normal] whitespace-nowrap">
              <Link href="/" className="[font-family:'Raleway',Helvetica] font-normal text-[#394355] text-xs tracking-[0] hover:underline">
                Главная &gt;{"  "}
              </Link>
              <span className="font-medium underline">О компании</span>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <FrameWrapperAbout1 />
        <DivWrapperAbout1 />
        <FrameAbout1 />
        <OverlapWrapperAbout1 />
        <Frame1About1 />

        {/* Info Banner */}
        <div className="relative w-[900px] top-[600px] left-[250px]">
          <Card className="bg-[#232c42] rounded-[10px] border-none flex justify-center items-center">
            <CardContent className="px-4 py-2.5">
              <p className="w-[855px] text-base leading-6 tracking-[0] font-raleway text-white">
                <strong>До заключения договора у вас будет 3д макет </strong>
                <span className="font-medium">шатра с визуализацией и подробным планом всех элементов</span>
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Additional Content Blocks */}
        <OverlapGroupWrapperAbout1 />
        <Frame2About1 />
        <GroupAbout1 />
        <SectionComponentNodeAbout1 />
        <Frame3About1 />
        <Frame4About1 />

        <div className="relative bottom-[6453px]">
          <Header/>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="block md:hidden relative w-full bg-white">
        {/* Background Gradient and Header Shape */}
        <div className="absolute w-full h-[500px] top-0 left-0 rounded-b-[20px] overflow-hidden">
          <div className="relative w-full h-[600px] -top-[100px]">
            <div className="absolute w-full h-[500px] top-0 left-0 bg-gradient-to-b from-[#E8EEF8] to-transparent" />
          </div>
        </div>

        {/* Header */}
        <div className="relative top-4 left-4">
          <Header />
        </div>

        {/* Breadcrumb */}
        <div className="relative top-20 left-4 text-xs text-[#394355] font-raleway">
          <div className="inline-flex items-center justify-center gap-2.5 p-1 bg-[#4f5d801a] rounded">
            <div className="relative w-fit [font-family:'Raleway',Helvetica] font-normal text-[#394355] text-xs tracking-[0]">
              <Link href="/" className="hover:underline">
                Главная &gt;{"  "}
              </Link>
              <span className="font-medium underline">О компании</span>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="mt-24 px-4">
          <FrameWrapperAbout1 />
          <DivWrapperAbout1 />
          <FrameAbout1 />
          <OverlapWrapperAbout1 />
          <Frame1About1 />

          {/* Info Banner - Mobile */}
          <div className="relative w-full mt-8">
            <Card className="bg-[#232c42] rounded-[10px] border-none">
              <CardContent className="p-3">
                <p className="text-sm leading-5 tracking-[0] font-raleway text-white">
                  <strong>До заключения договора у вас будет 3д макет </strong>
                  <span className="font-medium">шатра с визуализацией и подробным планом всех элементов</span>
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Additional Content Blocks */}
          <OverlapGroupWrapperAbout1 />
          <Frame2About1 />
          <GroupAbout1 />
          <SectionComponentNodeAbout1 />
          <Frame3About1 />
          <Frame4About1 />
        </div>
      </div>
    </>
  );
};