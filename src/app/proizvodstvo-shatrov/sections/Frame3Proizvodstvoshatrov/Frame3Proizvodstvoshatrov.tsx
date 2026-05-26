'use client';

import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { ReactElement } from 'react';
import Image from 'next/image';

export const Frame3Proizvodstvoshatrov = (): ReactElement => {
  const features = [
    { id: 1, icon: "/factory1.webp", title: "Тент не сгниет и не будет попадать вода через швы", description: "благодаря запатентованному покрытию Low wick", titleWidth: "w-[307px]", descriptionWidth: "w-[380px]", cardWidth: "w-[544px]" },
    { id: 2, icon: "/factory2.webp", title: "Выдерживают самые суровые условия эксплуатации", description: "Ветер до 35м/c, снег от 60 до 380 кг/м2. Ваша компания не терпит убытки и упущенную прибыль из-за непогоды", titleWidth: "w-[606px]", descriptionWidth: "w-[585px]", cardWidth: "w-[772px]" },
    { id: 3, icon: "/factory3.webp", title: "Легкий монтаж", description: "Самостоятельно с пошаговой подробной инструкции или нашими силами за 1-3 часа", titleWidth: "w-fit", descriptionWidth: "w-[342px]", cardWidth: "w-[544px]" },
    { id: 4, icon: "/factory4.webp", title: "Быстрая окупаемость", description: "Не нужно тратиться на дорогой фундамент, можно использовать круглый год в любую погоду", titleWidth: "w-fit", descriptionWidth: "w-[593px]", cardWidth: "w-[768px]" },
  ];

  return (
    <>
      {/* ================= Desktop (unchanged) ================= */}
      <div className="hidden md:inline-flex flex-col items-start gap-[45px] relative top-[50px]">
        <h5 className="w-[774px] -mt-px font-semibold text-4xl leading-normal relative [font-family:'Raleway',Helvetica]">
          <span className="text-[#527dc5]">Самые важные </span>
          <span className="text-[#232c42]">качества нашей продукции</span>
        </h5>

        <div className="flex flex-col gap-6">
          <div className="flex gap-6">
            {/* Card 1 */}
            <Card className={`${features[0].cardWidth} h-[171px] rounded-[20px] border-0 shadow-[var(--)] backdrop-blur-[79px]`}>
              <CardContent className="p-0">
                <div className="flex items-center gap-[23px] p-[30px_25px] relative">
                  <div className="absolute w-[90px] h-[90px] rounded-full" style={{ background: 'linear-gradient(180deg, #73A8FF 0%, #6FA7FF 36.5%, #3C6CEC 100%)' }} />
                  <div className="relative z-10 w-[90px] h-[90px] flex items-center justify-center">
                    <Image className="w-[46px] h-[46px]" loading="lazy" alt="Feature icon" src={features[0].icon} width={80} height={80} />
                  </div>
                  <div className="flex flex-col gap-4">
                    <h3 className={`${features[0].titleWidth} -mt-px font-semibold text-[#394355] text-2xl leading-6 [font-family:'Raleway',Helvetica]`}>{features[0].title}</h3>
                    <p className={`${features[0].descriptionWidth} [font-family:'Raleway',Helvetica] font-normal text-black text-base leading-6`}>{features[0].description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className={`${features[1].cardWidth} h-[171px] rounded-[20px] border-0 shadow-[var(--)] backdrop-blur-[79px]`}>
              <CardContent className="p-0">
                <div className="flex items-center gap-[23px] p-[30px_25px] relative">
                  <div className="absolute w-[90px] h-[90px] rounded-full" style={{ background: 'linear-gradient(180deg, #73A8FF 0%, #6FA7FF 36.5%, #3C6CEC 100%)' }} />
                  <div className="relative z-10 w-[90px] h-[90px] flex items-center justify-center">
                    <Image className="w-[48px] h-[48px]" loading="lazy" alt="Feature icon" src={features[1].icon} width={80} height={80} />
                  </div>
                  <div className="flex flex-col gap-4">
                    <h3 className={`${features[1].titleWidth} -mt-px font-semibold text-[#394355] text-2xl leading-6 [font-family:'Raleway',Helvetica]`}>{features[1].title}</h3>
                    <p className={`${features[1].descriptionWidth} [font-family:'Raleway',Helvetica] font-normal text-black text-base leading-6`}>{features[1].description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex gap-[29px]">
            {/* Card 3 */}
            <Card className={`${features[2].cardWidth} h-[171px] rounded-[20px] border-0 shadow-[var(--)] backdrop-blur-[79px]`}>
              <CardContent className="p-0">
                <div className="flex items-center gap-[23px] p-[30px_25px] relative">
                  <div className="absolute w-[90px] h-[90px] rounded-full" style={{ background: 'linear-gradient(180deg, #73A8FF 0%, #6FA7FF 36.5%, #3C6CEC 100%)' }} />
                  <div className="relative z-10 w-[90px] h-[90px] flex items-center justify-center">
                    <Image className="w-[46px] h-[46px]" loading="lazy" alt="Feature icon" src={features[2].icon} width={80} height={80} />
                  </div>
                  <div className="flex flex-col gap-4">
                    <h3 className={`${features[2].titleWidth} -mt-px [font-family:'Raleway',Helvetica] font-semibold text-[#394355] text-2xl leading-5 whitespace-nowrap`}>{features[2].title}</h3>
                    <p className={`${features[2].descriptionWidth} font-normal text-black text-base leading-6 [font-family:'Raleway',Helvetica]`}>{features[2].description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Card 4 */}
            <div className="relative w-[481px] h-[171px]">
              <Card className={`${features[3].cardWidth} h-[171px] rounded-[20px] border-0 shadow-[var(--)] backdrop-blur-[79px]`}>
                <CardContent className="p-0">
                  <div className="flex items-center gap-[23px] p-[30px_25px] relative">
                    <div className="absolute w-[90px] h-[90px] rounded-full" style={{ background: 'linear-gradient(180deg, #73A8FF 0%, #6FA7FF 36.5%, #3C6CEC 100%)' }} />
                    <div className="relative z-10 w-[90px] h-[90px] flex items-center justify-center">
                      <Image className="w-[52px] h-[40.17px]" loading="lazy" alt="Feature icon" src={features[3].icon} width={80} height={80} />
                    </div>
                    <div className="flex flex-col gap-4">
                      <h3 className={`${features[3].titleWidth} -mt-px [font-family:'Raleway',Helvetica] font-semibold text-[#394355] text-2xl leading-5 whitespace-nowrap`}>{features[3].title}</h3>
                      <p className={`${features[3].descriptionWidth} font-normal text-black text-base leading-6 [font-family:'Raleway',Helvetica]`}>{features[3].description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* ================= Mobile (new) ================= */}
      <div className="md:hidden flex flex-col gap-5 px-4 py-6">
        <h5 className="text-2xl font-semibold [font-family:'Raleway',Helvetica]">
          <span className="text-[#527dc5]">Самые важные </span>
          <span className="text-[#232c42]">качества нашей продукции</span>
        </h5>

        {/* Stack each feature as a full-width card */}
        {features.map((f, i) => (
          <Card key={f.id} className="w-full rounded-2xl border-0 shadow-[0px_12px_24px_0px_rgba(22,29,36,0.08)]">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                {/* Gradient circle */}
                <div className="relative w-14 h-14 rounded-full" style={{ background: 'linear-gradient(180deg, #73A8FF 0%, #6FA7FF 36.5%, #3C6CEC 100%)' }} />
                {/* Icon overlayed */}
                <div className="-ml-10 w-14 h-14 flex items-center justify-center">
                  <Image src={f.icon} alt="ico" loading="lazy" width={28} height={28} className="object-contain" />
                </div>

                <div className="pl-2">
                  <h3 className="text-[#394355] font-semibold text-base leading-5">{f.title}</h3>
                  <p className="text-[#394355] text-sm leading-5 mt-1">{f.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};
