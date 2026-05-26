'use client';

import { DivShatry4 } from "./DivShatry4/DivShatry4";
import { DivWrapperShatry4 } from "./DivWrapperShatry4/DivWrapperShatry4";
import { FrameShatry4 } from "./FrameShatry4/FrameShatry4";
import { FrameWrapperShatry4 } from "./FrameWrapperShatry4/FrameWrapperShatry4";
import { GroupShatry4 } from "./GroupShatry4/GroupShatry4";
import { GroupWrapperShatry4 } from "./GroupWrapperShatry4/GroupWrapperShatry4";
import { ReactElement } from 'react';

export const Shatry4 = (): ReactElement => {
  return (
    <main className="flex flex-col w-full max-w-[1440px] min-h-0 bg-white mx-auto overflow-visible"> {/* Changed overflow */}
      <section className="relative min-h-[4089px] rounded-[0px_0px_30px_30px] w-full"> {/* Fixed height syntax */}
        <FrameShatry4 />
        <FrameWrapperShatry4 />
        <GroupShatry4 />
        <GroupWrapperShatry4 />
        <DivWrapperShatry4 />
        <DivShatry4 />
      </section>
    </main>
  );
};