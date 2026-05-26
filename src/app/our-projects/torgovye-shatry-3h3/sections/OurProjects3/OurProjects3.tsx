'use client';

import { DivWrapperOurProjects3 } from "./DivWrapperOurProjects3/DivWrapperOurProjects3";
import { FrameOurProjects3 } from "./FrameOurProjects3/FrameOurProjects3";
import { FrameWrapperOurProjects3 } from "./FrameWrapperOurProjects3/FrameWrapperOurProjects3";
import { GroupOurProjects3 } from "./GroupOurProjects3/GroupOurProjects3";
import { ReactElement } from 'react';

export const OurProjects3 = (): ReactElement => {
  return (
    <main className="relative w-full max-w-[1440px] min-h-[2575px] mx-auto bg-white">
      <header className="p-9">
        <h1 className="font-semibold text-4xl [font-family:'Raleway',Helvetica] tracking-[0] leading-normal">
          <span className="text-[#527dc5]">Отзыв</span>
          <span className="text-[#232c42]"> клиента</span>
        </h1>
      </header>

      <FrameOurProjects3 />
      <GroupOurProjects3 />
      <FrameWrapperOurProjects3 />
      <DivWrapperOurProjects3 />
    </main>
  );
};
 