'use client';

import { Button } from "../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../components/ui/card";
import { DivWrapperOurProjects1 } from "./DivWrapperOurProjects1/DivWrapperOurProjects1";
import { FrameOurProjects1 } from "./FrameOurProjects1/FrameOurProjects1";
import { ReactElement } from 'react';
import Header from '../../../../../components/ui/Header';
import { useState } from "react"; 
import Consultaionfor3d from "../../../../../components/ui/Consultaionfor3d"; 

export const OurProjects1 = (): ReactElement => {
  const [showPopup, setShowPopup] = useState(false);

  // === Updated specs ===
const hotelSpecs = [
  {
    label: "Услуга:",
    value:
      "Аренда, монтаж, демонтаж, отопление, освещение, меблирование, декорирование.",
  },
  { label: "Дата:", value: "вс, 06/05/2016" },
  { label: "Цена проекта:", value: "уточняйте у менеджера." },
  { label: "Тип проекта:", value: "Мобильные шатры" },
];

// 3) Right specs card (keep template, just change labels/values)
const additionalInfo = [
  { label: "Компания:", value: "MOBILE TENT" },
  { label: "Объект:", value: "Отель «Байкальская резиденция»" },
];

  return (
    <>
      {/* ===== Desktop ===== */}
      <div className="relative w-full min-h-[1539px] bg-[linear-gradient(180deg,#E8EEF8_0%,rgba(222,228,240,0)_100%)] hidden md:block">
        <div className="relative w-full max-w-[1440px] mx-auto">
          <section className="relative bottom-[135px] h-[1539px] rounded-[0px_0px_30px_30px]">
            <div className="w-full relative top-[85px]">
              <FrameOurProjects1 />

              {/* Title - MAIN H1 TAG */}
              <div className="inline-flex items-start gap-[335px] absolute top-[246px] left-12">
                <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
                  <div className="flex flex-col w-[658px] items-start gap-[228px] relative flex-[0_0_auto]">
                    <div className="inline-flex flex-col items-start gap-[55px] relative flex-[0_0_auto] mr-[-8.00px]">
                      <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
                        <div className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]">
                          <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
                            <h1 className="w-[996px] font-medium text-4xl relative mt-[-1.00px] font-['Raleway',Helvetica] text-[#394355] tracking-[0] leading-[normal]">
                              Шатёр для отеля «Байкальская резиденция»
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Specs */}
              <Card className="inline-flex flex-col items-start gap-9 absolute top=[825px] top-[825px] left-12 border-none shadow-none bg-transparent">
                <CardContent className="p-0">
                  <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
                    <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
                      {hotelSpecs.map((spec, index) => (
                        <div key={index} className="inline-flex items-start gap-2 relative flex-[0_0_auto]">
                          <div className="relative w-fit mt-[-1.00px] font-['Raleway',Helvetica] font-normal text-[#394355] text-lg leading-6">
                            {spec.label}
                          </div>
                          <div className="relative w-160 mt-[-1.00px] font-medium text-[#394355] text-lg leading-6">
                            {spec.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Info (renders only if provided) */}
              {additionalInfo.length > 0 && (
                <Card className="inline-flex flex-col items-start gap-9 absolute top-[825px] left-[733px] border-none shadow-none bg-transparent">
                  <CardContent className="p-0">
                    <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
                      <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
                        {additionalInfo.map((info, index) => (
                          <div key={index} className="inline-flex items-start gap-2 relative flex-[0_0_auto]">
                            <div className="relative w-fit mt-[-1.00px] font-['Raleway',Helvetica] font-normal text-[#394355] text-lg leading-6">
                              {info.label}
                            </div>
                            <div className="relative w-fit mt-[-1.00px] font-medium text-[#394355] text-lg leading-6">
                              {info.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            <DivWrapperOurProjects1 />

            {/* Button */}
            <div className="flex flex-col w-[659px] items-center gap-3 absolute top-[980px] left-[733px]">
              <Button
                onClick={() => setShowPopup(true)}
                className="relative w-[655px] h-[68px] rounded-2xl border-[none] shadow-2 [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]"
              >
                <span className="absolute top-[22px] left-[272px] font-semibold text-white text-base text-center leading-[normal] whitespace-nowrap font-['Raleway',Helvetica]">
                  Хочу похожий
                </span>
              </Button>
            </div>

            {showPopup && (
              <Consultaionfor3d onClose={() => setShowPopup(false)} />
            )}
            <div className="relative bottom-[225px]">
              <Header />
            </div>
          </section>
        </div>
      </div>

      {/* ===== Mobile ===== */}
      <div className="block md:hidden bg-[linear-gradient(180deg,#E8EEF8_0%,rgba(222,228,240,0)_100%)]">
        <div className="max-w-[440px] mx-auto w-full px-4 py-6">
          <div className="mb-20">
            <Header />
          </div>

          {/* Title - REGULAR DIV (NO H1) for mobile visual only */}
          <div className="text-xl font-medium text-[#394355] mb-4 [font-family:'Raleway',Helvetica]">
            Шатёр для отеля «Байкальская резиденция»
          </div>

          {/* Slider */}
          <div className="mb-5">
            <FrameOurProjects1 />
          </div>

          {/* Specs */}
          <Card className="bg-white border-0 rounded-2xl mb-6">
            <CardContent className="p-4">
              <div className="space-y-2">
                {hotelSpecs.map((s, i) => (
                  <div key={i} className="flex justify-between text-sm">
                    <span className="text-[#394355]">{s.label}</span>
                    <span className="font-semibold text-[#394355] text-right max-w-[220px]">{s.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Description */}
          <section className="space-y-6 mb-6">
            <p className="text-sm text-[#394355] [font-family:'Raleway',Helvetica]">
              Компания MOBILE TENT выполнила заказ для отеля «Байкальская резиденция». В рамках сотрудничества был изготовлен брендированный шатёр открытого типа.
            </p>
            <p className="text-sm text-[#394355] [font-family:'Raleway',Helvetica]">
              Мы изготовили и смонтировали мобильный тент площадью 18 м² без стен и напольного покрытия. Модуль включал в себя сборный каркас и крышу из ПВХ с нанесённым логотипом заказчика. Устойчивость конструкции обеспечивала особая подошва ножек и прочный трос, натянутый к основанию. Максимальная высота по стенке составила более 2 м. При этом телескопические ножки позволили регулировать этот показатель, а также обеспечить устойчивость сооружения даже на неровной поверхности.
            </p>

            <div>
              <h2 className="text-lg font-semibold text-[#394355] [font-family:'Raleway',Helvetica] mb-2">Особенности реализованного проекта</h2>
              <ul className="space-y-2 text-sm text-[#394355] [font-family:'Raleway',Helvetica]">
                <li>размер — 3×6 м, площадь — 18 м²;</li>
                <li>высота по стенке — 2,15 м;</li>
                <li>лёгкий и прочный алюминиевый каркас;</li>
                <li>телескопические ножки;</li>
                <li>крепление для грунта;</li>
                <li>долговечность нанесённого логотипа.</li>
              </ul>
            </div>
          </section>

          {/* CTA */}
          <Button
            onClick={() => setShowPopup(true)}
            className="w-full h-[56px] rounded-2xl border-0 [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] text-white font-semibold"
          >
            Хочу похожий
          </Button>

          {showPopup && <Consultaionfor3d onClose={() => setShowPopup(false)} />}
        </div>
      </div>
    </>
  );
};