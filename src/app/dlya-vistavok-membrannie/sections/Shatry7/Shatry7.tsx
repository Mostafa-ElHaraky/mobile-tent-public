'use client';

import { FrameShatry7 } from "./FrameShatry7/FrameShatry7";
import { FrameWrapperShatry7 } from "./FrameWrapperShatry7/FrameWrapperShatry7";
import { ReactElement } from 'react';

export const Shatry7 = (): ReactElement => {
  return (
    <main className="w-full bg-white flex flex-col items-center">
      
      {/* ============ نسخة الديسكتوب (تُعرض فقط من md فما فوق) ============ */}
      <div className="hidden md:flex w-full max-w-[1440px] h-[3478px] flex-col items-center gap-[25px]">
        <FrameShatry7 />
        <FrameWrapperShatry7 />
      </div>

      {/* ============ نسخة الموبايل (تُعرض فقط على الشاشات الصغيرة) ============ */}
      <div className="block md:hidden w-full px-4 py-8">
        <div className="flex flex-col gap-12 pb-12">
          {/* FrameShatry7 على الموبايل */}
          <div className="w-full flex flex-col items-center">
            <FrameShatry7 />
          </div>

          {/* FrameWrapperShatry7 على الموبايل */}
          <div className="w-full flex flex-col items-center">
            <FrameWrapperShatry7 />
          </div>
        </div>
      </div>
    </main>
  );
};