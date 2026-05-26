'use client';

import { DivServices3 } from "./DivServices3/DivServices3";
import { DivWrapperServices3 } from "./DivWrapperServices3/DivWrapperServices3";
import { FrameServices3 } from "./FrameServices3/FrameServices3";
import { FrameWrapperServices3 } from "./FrameWrapperServices3/FrameWrapperServices3";
import { GroupServices3 } from "./GroupServices3/GroupServices3";
import { GroupWrapperServices3 } from "./GroupWrapperServices3/GroupWrapperServices3";
import { ReactElement } from 'react';

export const Services3 = (): ReactElement => {
  return (
    <main className="flex flex-col w-full-[1440px] h-[3741px] mx-auto bg-white">

            <GroupServices3 />
            <GroupWrapperServices3 />
            <DivServices3 />
            <FrameWrapperServices3 />
            <DivWrapperServices3 />
            <FrameServices3 />

    </main>
  );
};
