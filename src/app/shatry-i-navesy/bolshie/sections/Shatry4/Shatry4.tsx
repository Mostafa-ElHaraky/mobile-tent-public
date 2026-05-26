'use client';

import { DivShatry4 } from "./DivShatry4/DivShatry4";
import { DivWrapperShatry4 } from "./DivWrapperShatry4/DivWrapperShatry4";
import { FrameShatry4 } from "./FrameShatry4/FrameShatry4";
import { FrameWrapperShatry4 } from "./FrameWrapperShatry4/FrameWrapperShatry4";
import { GroupShatry4 } from "./GroupShatry4/GroupShatry4";
import { GroupWrapperShatry4 } from "./GroupWrapperShatry4/GroupWrapperShatry4";
import { ReactElement } from 'react';

// Define props interface
interface Shatry4Props {
  desktopContent?: string;
  mobileContent?: string;
}

export const Shatry4 = ({ 
  desktopContent, 
  mobileContent 
}: Shatry4Props): ReactElement => {
  return (
    <main className="flex flex-col w-full max-w-[1440px] min-h-0 bg-white mx-auto overflow-visible">
      <section className="relative min-h-[4089px] rounded-[0px_0px_30px_30px] w-full">
        {/* Pass content to FrameShatry4 */}
        <FrameShatry4 
          desktopContent={desktopContent}
          mobileContent={mobileContent}
        />
        
        {/* You could pass content to other components too if needed */}
        <FrameWrapperShatry4 />
        <GroupShatry4 />
        <GroupWrapperShatry4 />
        <DivWrapperShatry4 />
        <DivShatry4 />
      </section>
    </main>
    
  );
};
