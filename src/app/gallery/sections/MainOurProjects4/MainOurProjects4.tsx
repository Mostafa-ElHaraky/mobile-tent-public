'use client';

import { FrameMainOurProjects4 } from "./FrameMainOurProjects4/FrameMainOurProjects4";
import { OverlapWrapperMainOurProjects4 } from "./OverlapWrapperMainOurProjects4/OverlapWrapperMainOurProjects4";
import { ReactElement } from 'react';

// Define props for the main component
interface MainOurProjects4Props {
  // Data from parent page (gallery page)
  cmsData?: {
    contacts?: {
      phone1?: string;
      phone2?: string;
      email?: string;
      telegram?: string;
      whatsapp?: string;
      office?: {
        address?: string;
        hours?: string;
        appointment?: string;
        map_url?: string;
      };
      production?: {
        address?: string;
        hours?: string;
        appointment?: string;
      };
    };
    content?: {
      heading?: string;
      subheading?: string;
      invitationText?: string;
      descriptionText?: string;
      carouselImages?: string[];
      benefits?: Array<{
        icon: string;
        title: string;
        description: string;
      }>;
    };
  };
}

export const MainOurProjects4 = ({ cmsData }: MainOurProjects4Props): ReactElement => {
  return (
    <>
      {/* Desktop version */}
      <main className="relative w-full max-w-[1440px] h-[1600px] mx-auto bg-white hidden sm:block">
        <FrameMainOurProjects4 
          contacts={cmsData?.contacts}
          content={cmsData?.content}
        />
        <OverlapWrapperMainOurProjects4 />
      </main>

      {/* Mobile version */}
      <main className="relative w-full h-auto top-[20px] mx-auto bg-white block sm:hidden">
        <FrameMainOurProjects4 
          contacts={cmsData?.contacts}
          content={cmsData?.content}
        />
        <OverlapWrapperMainOurProjects4 />
      </main>
    </>
  );
};