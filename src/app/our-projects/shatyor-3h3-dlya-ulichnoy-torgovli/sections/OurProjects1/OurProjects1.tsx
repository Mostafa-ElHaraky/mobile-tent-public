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

const hotelSpecs = [
  {
    label: "Услуга:",
    value:
      "Аренда, монтаж, демонтаж, отопление, освещение, меблирование, декорирование.",
  },
  { label: "Дата:", value: "пн, 06/06/2016" },
  { label: "Цена проекта:", value: "уточняйте у менеджера." },
  { label: "Число гостей:", value: "6 мая 2016" },
  { label: "Тип проекта:", value: "Мобильные шатры" },
];

  return (
    <>
      {/* ===== Desktop (original, unchanged) ===== */}
<div className="relative w-full min-h-[1539px] overflow-visible bg-[linear-gradient(180deg,#E8EEF8_0%,rgba(222,228,240,0)_100%)] hidden md:block">
        <div className="relative w-full max-w-[1440px] mx-auto">
<section className="relative bottom-[135px] min-h-[1539px] overflow-visible rounded-[0px_0px_30px_30px]">
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
                            <h1 className="w-[966px] font-medium text-4xl relative mt-[-1.00px] font-['Raleway',Helvetica] text-[#394355] tracking-[0] leading-[normal]">
                              Шатёр 3х3 для уличной торговли
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Specs */}
              <Card className="inline-flex flex-col items-start gap-9 absolute top-[825px] left-12 border-none shadow-none bg-transparent">
                <CardContent className="p-0">
                  <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
                    <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
                      {hotelSpecs.map((spec, index) => (
                        <div key={index} className="inline-flex items-start gap-2 relative flex-[0_0_auto]">
                          <div className="relative w-fit mt-[-1.00px] font-['Raleway',Helvetica] font-normal text-[#394355] text-lg leading-6 whitespace-nowrap">
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

              {/* Additional Info */}
              <Card className="inline-flex flex-col items-start gap-9 absolute top-[825px] left-[733px] border-none shadow-none bg-transparent">
                <CardContent className="p-0">
                  <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
                    <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">

                    </div>
                  </div>
                </CardContent>
              </Card>
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
            <div className="relative bottom-[350px]">
              <Header />
            </div>
          </section>
        </div>
      </div>

      {/* ===== Mobile (new, separate) ===== */}
      <div className="block md:hidden bg-[linear-gradient(180deg,#E8EEF8_0%,rgba(222,228,240,0)_100%)]">
        <div className="max-w-[440px] mx-auto w-full px-4 py-6">
          {/* Simple sticky-ish header spacing */}
          <div className="mb-20">
            <Header />
          </div>

          {/* Title - REGULAR DIV (NO H1) for mobile visual only */}
          <div className="text-xl font-medium text-[#394355] mb-4 [font-family:'Raleway',Helvetica]">
            Шатёр 3х3 для уличной торговли
          </div>

          {/* Mobile slider (renders inside Frame component's mobile section) */}
          <div className="mb-5">
            <FrameOurProjects1 />
          </div>

          {/* Specs stacked */}
          <Card className="bg-white border-0 rounded-2xl mb-4">
            <CardContent className="p-4">
              <div className="space-y-2">
                {hotelSpecs.map((s, i) => (
                  <div key={i} className="flex justify-between text-sm">
                    <span className="text-[#394355]">{s.label}</span>
                    <span className="font-semibold text-[#394355]">{s.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 rounded-2xl mb-6">
            <CardContent className="p-4">
              <div className="space-y-2">
              </div>
            </CardContent>
          </Card>

          {/* "Комплектация / Задача / Сделали / Итог" simplified for mobile (we don't touch the desktop component) */}
          <section className="space-y-6 mb-6">
            <h2 className="text-lg font-semibold text-[#394355] [font-family:'Raleway',Helvetica]">Комплектация</h2>
            <ul className="grid grid-cols-1 gap-2">
              {[
  "Устойчивый трапециевидный каркас с полимерным покрытием",
  "Надёжный тент для защиты от солнца и непогоды",
  "Верхний навесной козырек для дополнительной защиты",
  "Элегантные шторы-занавески на опорах",
  "Простая установка и долгий срок службы",
  "Привлекательный дизайн и цветовое решение",
].map((t) => (
                <li key={t} className="px-3 py-2 rounded-lg bg-[#f5f6ff] text-[#527dc5] font-semibold text-sm">
                  {t}
                </li>
              ))}
            </ul>

            <div>
              <h2 className="text-lg font-semibold text-[#394355] [font-family:'Raleway',Helvetica] mb-2">Задача</h2>
              <p className="text-sm text-[#394355] [font-family:'Raleway',Helvetica]">
                Создать отличное место размещения для небольшого числа гостей при проведении развлекательного мероприятия или дегустации продукции. Обеспечить привлекательный внешний вид и простоту установки рядом с входом в офис.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[#394355] [font-family:'Raleway',Helvetica] mb-2">Сделали</h2>
              <ul className="space-y-2 text-sm text-[#394355] [font-family:'Raleway',Helvetica]">
                <li>Разработали прочный и привлекательный шатёр размером 3х3 с устойчивым трапециевидным каркасом.</li>
                <li>Оснастили конструкцию улучшенным полимерным покрытием для долгого срока службы.</li>
                <li>Установили надёжный тент для защиты от солнца и неблагоприятных погодных условий.</li>
                <li>Добавили верхний навесной козырек для дополнительной защиты и элегантные шторы-занавески.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#394355] [font-family:'Raleway',Helvetica] mb-2">Итог</h2>
              <p className="text-sm text-[#394355] [font-family:'Raleway',Helvetica]">
                Модель сочетает в себе простоту установки и прочность, став отличным решением для размещения гостей на мероприятиях. Оригинальность шатру придают закреплённые к опорам элегантные шторы-занавески.
              </p>
            </div>
          </section>

          {/* Button */}
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