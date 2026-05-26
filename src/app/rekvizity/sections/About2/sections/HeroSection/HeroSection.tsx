'use client';

import React from "react";
import { Badge } from "../../../../../../components/ui/badge";
import { Card, CardContent } from "../../../../../../components/ui/card";
import { ReactElement } from "react";
import Image from "next/image";

export const HeroSection = (): ReactElement => {
  return (
    <section className="w-full flex justify-center lg:h-[488px] h-auto min-h-[400px] relative">
      {/* ✅ Centered Card with max-width 1440px */}
      <Card
        className="w-full max-w-[1440px] lg:h-[456px] h-auto min-h-[380px] 
        rounded-[20px] lg:rounded-[30px] 
        bg-[linear-gradient(159deg,rgba(36,48,87,1)_0%,rgba(55,66,85,1)_100%)] 
        border-0 overflow-hidden mx-auto"
      >
        <CardContent className="p-0 relative w-full h-full">
          {/* Background Image - Hidden on mobile, visible on desktop */}
          <div className="hidden desktop:block absolute top-0 right-0 w-[846px] h-[456px]">
            <Image
              src="/fields-at-mountain-valley-1.webp"
              alt="Fields at mountain"
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>

          {/* Mobile Background Image */}
          <div className="desktop:hidden absolute top-0 right-0 w-full h-full opacity-20">
            <Image
              src="/fields-at-mountain-valley-1.webp"
              alt="Fields at mountain mobile"
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>

          <div className="absolute inset-0 flex flex-col lg:flex-row">
            {/* Content Container */}
            <div className="flex-1 flex items-center justify-center lg:justify-start px-4 lg:pl-[45px] lg:pr-[61px] py-8 lg:py-0 z-20">
              <div className="flex flex-col items-center lg:items-start gap-4 lg:gap-6 w-full max-w-[675px] text-center lg:text-left">
                <h5 className="text-2xl lg:text-4xl font-semibold [font-family:'Raleway',Helvetica] tracking-[0] leading-tight lg:leading-normal">
                  <span className="text-[#7aacff]">Проектируем </span>
                  <span className="text-white">
                    все конструкции в самой крутой программе в РФ и СНГ
                  </span>
                </h5>

                <Badge className="inline-flex items-center gap-2.5 px-4 lg:px-5 py-3 lg:py-4 bg-[#73a7ff] hover:bg-[#73a7ff] rounded-[8px] lg:rounded-[10px] h-auto max-w-full">
                  <span className="[font-family:'Raleway',Helvetica] font-semibold text-white text-2xl lg:text-6xl tracking-[0] leading-tight lg:leading-normal break-words">
                    Dlubal RFEM + MPanel
                  </span>
                </Badge>
              </div>
            </div>

            {/* Gradient Effect - Adjusted for mobile */}
            <div className="hidden desktop:block absolute top-[-279px] right-0 w-[807px] h-[807px] rounded-[403.5px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(82,125,197,1)_0%,rgba(82,125,197,0)_100%)] pointer-events-none" />
            
            {/* Mobile Gradient Effect */}
            <div className="desktop:hidden absolute top-0 right-0 w-full h-full [background:radial-gradient(ellipse_at_center,rgba(82,125,197,0.3)_0%,rgba(82,125,197,0)_70%)] pointer-events-none" />
          </div>

          {/* Star Tent Image - Hidden on mobile, visible on desktop */}
          <div className="hidden desktop:block absolute top-[26px] right-[48px] w-[538px] h-[404px] z-10">
            <Image
              src="/star-tent-h02-1.webp"
              alt="Star tent"
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>

          {/* Mobile Star Tent Image - Smaller and repositioned */}
          <div className="desktop:hidden absolute bottom-4 right-4 w-[120px] h-[90px] z-10 opacity-70">
            <Image
              src="/star-tent-h02-1.webp"
              alt="Star tent mobile"
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
