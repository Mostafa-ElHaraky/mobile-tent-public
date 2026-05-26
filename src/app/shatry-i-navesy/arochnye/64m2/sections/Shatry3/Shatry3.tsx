'use client';

import FilterTent from "../../../../../../components/ui/FilterTent";
import { FrameShatry3 } from "./sections/FrameShatry3/FrameShatry3";
import { GroupWrapperShatry3 } from "./sections/GroupWrapperShatry3/GroupWrapperShatry3";
import { ReactElement } from 'react';

export const Shatry3 = (): ReactElement => {
  return (
    <>
      {/* نسخة الديسكتوب الأصلية - لم يتم تغيير أي شيء */}
      <main className="hidden md:flex flex-col w-full max-w-[1440px] mx-auto min-h-0 bg-white pb-[5px]">
        <section className="flex flex-col w-full max-w-[1440px] gap-[40px] mx-auto px-12 min-h-0">
          {/* <FilterTent /> */}
          
          <section className="w-full max-w-[1440px] min-h-[334px] relative top-[35px] rounded-[30px] relative">
            <FrameShatry3 />
          </section>

          <section className="flex flex-col w-full max-w-[1440px] gap-[45px] relative top-[370px] mx-auto">
            <GroupWrapperShatry3 />
          </section>
        </section>
      </main>

      {/* نسخة الهواتف المحمولة - بنفس تفاصيل الديسكتوب */}
      <main className="flex md:hidden flex-col w-full mx-auto min-h-0 bg-white pb-[5px]">
        <section className="flex flex-col w-full gap-[20px] mx-auto px-4 min-h-0">
          {/* <FilterTent /> */}
          
          <section className="w-full min-h-[200px] rounded-[20px] relative overflow-hidden bottom-[150px]">
            <FrameShatry3 />
          </section>

          <section className="flex flex-col w-full gap-[25px] relative bottom-[35px] mx-auto">
            <GroupWrapperShatry3 />
          </section>
        </section>
      </main>
    </>
  );
};