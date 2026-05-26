'use client';

import { DivWrapperByAnima } from "./sections/DivWrapperByAnima";
import { FrameByAnima1 } from "./sections/FrameByAnima1";
import { FrameWrapperByAnima1 } from "./sections/FrameWrapperByAnima1/FrameWrapperByAnima1";
import { GroupByAnima1 } from "./sections/GroupByAnima1";
import { GroupWrapperByAnima1 } from "./sections/GroupWrapperByAnima1/GroupWrapperByAnima1";
import { OverlapWrapperByAnima1 } from "./sections/OverlapWrapperByAnima1";
import { ReactElement } from 'react';

interface Element6Props {
  desktopContent?: string;
  mobileContent?: string;
}

export const Element6 = ({ desktopContent, mobileContent }: Element6Props): ReactElement => {
  return (
    <div className="flex justify-center items-center bg-white">
      {/* Desktop Version */}
      <section className="hidden desktop:block relative w-full max-w-[1440px] min-h-screen mt-[115px]">
        <div className="flex flex-col gap-16"> {/* Added gap for spacing */}
          <FrameByAnima1 />
          <GroupByAnima1 />
          <GroupWrapperByAnima1 />
          <FrameWrapperByAnima1 />
          <OverlapWrapperByAnima1 />
          <DivWrapperByAnima 
            desktopContent={desktopContent}
            mobileContent={mobileContent}
          />
        </div>
      </section>

      {/* Mobile Version - Responsive design */}
      <section className="desktop:hidden w-full min-h-screen relative mt-[60px] sm:mt-[80px] pb-20">
        <div className="flex flex-col gap-8 sm:gap-12">
          <FrameByAnima1 />
          <GroupByAnima1 />
          <GroupWrapperByAnima1 />
          <FrameWrapperByAnima1 />
          <OverlapWrapperByAnima1 />
          <DivWrapperByAnima 
            desktopContent={desktopContent}
            mobileContent={mobileContent}
          />
        </div>
      </section>
    </div>
  );
};