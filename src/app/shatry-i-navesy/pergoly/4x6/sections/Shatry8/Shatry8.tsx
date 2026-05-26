'use client';

import { FrameShatry8 } from "./FrameShatry8/FrameShatry8";
import { OverlapWrapperShatry8 } from "./OverlapWrapperShatry8/OverlapWrapperShatry8";
import { ReactElement } from 'react';

export const Shatry8 = (): ReactElement => {
  return (
    <main className="w-full bg-white flex flex-col items-center">
      
      {/* ============ نسخة الديسكتوب (تُعرض فقط من md فما فوق) ============ */}
      <div className="hidden md:flex w-full max-w-[1440px] h-[1833px] flex-col items-center gap-[25px]">
        <FrameShatry8 />
        <OverlapWrapperShatry8 />
      </div>

      {/* ============ نسخة الموبايل (تُعرض فقط على الهاتف) ============ */}
      <div className="block md:hidden w-full px-4 py-6 mt-[-135]">
        <div className="flex flex-col gap-12 pb-16">
          {/* FrameShatry8 على الموبايل */}
          <div className="w-full flex flex-col items-center">
            <FrameShatry8 />
          </div>

          {/* OverlapWrapperShatry8 على الموبايل */}
          <div className="w-full flex flex-col items-center">
            <OverlapWrapperShatry8 />
          </div>
        </div>
      </div>
    </main>
  );
};