'use client';

import { DivWrapperOurProjects3 } from "./DivWrapperOurProjects3/DivWrapperOurProjects3";
import { FrameOurProjects3 } from "./FrameOurProjects3/FrameOurProjects3";
import { FrameWrapperOurProjects3 } from "./FrameWrapperOurProjects3/FrameWrapperOurProjects3";
import { GroupOurProjects3 } from "./GroupOurProjects3/GroupOurProjects3";
import { ReactElement } from 'react';

export const OurProjects3 = (): ReactElement => {
  return (
    <>
      {/* ===== Desktop (ORIGINAL — UNCHANGED) ===== */}
<main className="relative w-full max-w-[1440px] min-h-[4200px] overflow-visible mx-auto bg-white hidden md:block">
        <header className="p-9">
          <h5 className="font-semibold text-4xl [font-family:'Raleway',Helvetica] tracking-[0] leading-normal">
            <span className="text-[#527dc5]">Отзыв</span>
            <span className="text-[#232c42]"> клиента</span>
          </h5>
        </header>

        <FrameOurProjects3 />
        <GroupOurProjects3 />
        <FrameWrapperOurProjects3 />
        <DivWrapperOurProjects3 />
      </main>

      {/* ===== Mobile (NEW) ===== */}
      <main className="block md:hidden w-full mx-auto bg-white px-4 py-6">
        <header className="mb-4">
          <h5 className="font-semibold text-2xl [font-family:'Raleway',Helvetica] leading-snug">
            <span className="text-[#527dc5]">Отзыв</span>
            <span className="text-[#232c42]"> клиента</span>
          </h5>
        </header>

        {/* Stack children naturally for mobile */}
        <div className="space-y-6">
          <FrameOurProjects3 />
          <GroupOurProjects3 />
          <FrameWrapperOurProjects3 />
          <DivWrapperOurProjects3 />
        </div>
      </main>
    </>
  );
};
