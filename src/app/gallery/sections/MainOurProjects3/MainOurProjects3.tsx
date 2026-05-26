'use client';

import { DivWrapperMainOurProjects3 } from "./DivWrapperMainOurProjects3/DivWrapperMainOurProjects3";
import { ReactElement } from 'react';

export const MainOurProjects3 = (): ReactElement => {
  return (
    <>
      {/* نسخة الديسكتوب */}
<main className="relative w-full max-w-[1440px] min-h-[900px] top-[100px] overflow-visible mx-auto bg-white hidden md:block">
        <DivWrapperMainOurProjects3 />
      </main>

      {/* نسخة الهواتف */}
      <main className="relative w-full h-auto top-[50px] mx-auto bg-white block sm:hidden">
        <DivWrapperMainOurProjects3 />
      </main>
    </>
  );
};
