'use client';

import { Card, CardContent } from "../../../../components/ui/card";
import { ReactElement } from 'react';

export const DivProizvodstvoshatrov = (): ReactElement => {
  return (
    <>
      {/* Desktop layout (unchanged) */}
      <div className="hidden md:flex flex-col md:flex-row items-start justify-between gap-8 md:gap-[129px] w-full py-12 relative left-[20px] top-[65px]">
        <div className="flex flex-col w-full md:w-[553px] items-start gap-6">
          <h2 className="font-semibold text-4xl leading-normal [font-family:'Raleway',Helvetica]">
            <span className="text-[#232c42]">Внедрен </span>
            <span className="text-[#527dc5]">многоуровневый контроль качества ОТК</span>
            <span className="text-[#232c42]"> исключающий брак</span>
          </h2>
        </div>

        <Card className="w-full md:w-[660px] rounded-[20px] border-0 shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] backdrop-blur-[79px]">
          <CardContent className="p-[30px]">
            <div className="flex flex-col items-start gap-2.5">
              <p className="font-normal text-[#232c42] text-xl leading-6 [font-family:'Raleway',Helvetica]">
                <span className="font-semibold">Соблюдаем все 50+ требований<br /></span>
              </p>
              <p className="font-normal text-[#232c42] text-lg leading-6 [font-family:'Raleway',Helvetica]">
                ГОСТов и СНИПов к качеству материалов и сборке Это даже больше,
                чем обычно нужно
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Mobile layout (new) */}
      <div className="block md:hidden flex flex-col items-start gap-6 w-full py-8 px-4">
        <h2 className="text-2xl font-semibold leading-snug [font-family:'Raleway',Helvetica]">
          <span className="text-[#232c42]">Внедрен </span>
          <span className="text-[#527dc5]">многоуровневый контроль качества ОТК</span>
          <span className="text-[#232c42]"> исключающий брак</span>
        </h2>

        <Card className="w-full rounded-2xl border-0 shadow-md">
          <CardContent className="p-5">
            <div className="flex flex-col items-start gap-2">
              <p className="text-base font-medium text-[#232c42]">
                <span className="font-semibold">Соблюдаем все 50+ требований</span>
              </p>
              <p className="text-sm text-[#232c42] leading-5">
                ГОСТов и СНИПов к качеству материалов и сборке. Это даже больше,
                чем обычно нужно.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
