'use client';

import { DivShatry5 } from "./DivShatry5/DivShatry5";
import { DivWrapperShatry5 } from "./DivWrapperShatry5/DivWrapperShatry5";
import { FrameWrapperShatry5 } from "./FrameWrapperShatry5/FrameWrapperShatry5";
import { GroupShatry5 } from "./GroupShatry5/GroupShatry5";
import { GroupWrapperShatry5 } from "./GroupWrapperShatry5/GroupWrapperShatry5";
import { OverlapGroupWrapperShatry5 } from "./OverlapGroupWrapperShatry5/OverlapGroupWrapperShatry5";
import { OverlapWrapperShatry5 } from "./OverlapWrapperShatry5/OverlapWrapperShatry5";
import { ReactElement } from 'react';

// Define the props interface
interface Shatry5Props {
  previewImages?: string[]; // or whatever type your images are
}

export const Shatry5 = ({ previewImages }: Shatry5Props): ReactElement => {
  return (
    <main className="flex flex-col w-full max-w-[1440px] min-h-0 bg-white mx-auto overflow-visible">
      <section className="relative min-h-[4419] rounded-[0px_0px_30px_30px] w-full">
        <GroupShatry5 />
        <OverlapWrapperShatry5 />
        <OverlapGroupWrapperShatry5 />
        <FrameWrapperShatry5 />
        <GroupWrapperShatry5 />
        <DivWrapperShatry5 />
        <DivShatry5 />
      </section>
    </main>
  );
};