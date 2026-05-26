'use client';

import { FrameMainOurProjects4 } from "./FrameMainOurProjects4/FrameMainOurProjects4";
import { OverlapWrapperMainOurProjects4 } from "./OverlapWrapperMainOurProjects4/OverlapWrapperMainOurProjects4";
import { ReactElement } from 'react';

export const MainOurProjects4 = (): ReactElement => {
  return (
    <section className="w-full max-w-[1440px] min-h-[1683px] mx-auto bg-white py-16">
      <FrameMainOurProjects4 />
      <OverlapWrapperMainOurProjects4 />
    </section>
  );
};