'use client';

import { Card, CardContent } from "../../../../../../components/ui/card";
import { ReactElement } from 'react';

export const DivWrapperOurProjects1 = (): ReactElement => {
  // Equipment items (под проект)
const equipmentItems = [
  { title: "Размер — 3×6 м, площадь — 18 м²" },
  { title: "Высота по стенке — 2,15 м" },
  { title: "Лёгкий и прочный алюминиевый каркас" },
  { title: "Телескопические ножки" },
  { title: "Крепление для грунта" },
  { title: "Долговечность нанесённого логотипа", wide: true },
];


  // Done items
const doneItems = [
  {
    icon: "/group-9.webp",
    description:
      "Изготовили и смонтировали мобильный тент 3×6 м (18 м²) без стен и пола.",
  },
  {
    icon: "/group-10.webp",
    description:
      "Выполнили брендинг: нанесли логотип на ПВХ-крышу по требованиям заказчика.",
  },
  {
    icon: "/group-11.webp",
    description:
      "Обеспечили устойчивость: специальная подошва ножек и трос к основанию.",
  },
  {
    icon: "/group-9.webp",
    description:
      "Отрегулировали высоту по стенке (2,15 м) телескопическими ножками для неровной поверхности.",
  },
];

  return (
    <section className="flex flex-col md:flex-row gap-[22px] w-full py-8 px-6 md:px-12 relative md:top-[80px]">
      {/* Equipment Section */}
      <div className="flex flex-col gap-4 relative md:top-[80px]">
        <h2 className="font-semibold text-[#394355] text-2xl leading-6 [font-family:'Raleway',Helvetica]">
          Комплектация
        </h2>

        <Card className="w-full bg-white md:w-[662px] border-0 shadow-[var(--)] rounded-[20px] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]">
          <CardContent className="p-6">
            {/* Mobile: single column; Desktop still wraps as before */}
            <div className="flex flex-wrap md:gap-[24px] gap-3">
              {equipmentItems.map((item, index) => (
                <div key={index} className="flex flex-col gap-3 w-full md:w-auto">
                  <div className="flex flex-col gap-2.5 px-4 py-2.5 bg-[#f5f6ff] rounded-[10px]">
                    <div
                      className={`flex flex-col gap-2 w-full ${
                        item.wide ? "md:w-[393px]" : "md:w-[222px]"
                      }`}
                    >
                      <div
                        className={`font-bold text-[#527dc5] text-base md:text-xl leading-6 [font-family:'Raleway',Helvetica] w-full ${
                          item.wide ? "md:w-[455px]" : "md:w-[198px]"
                        }`}
                      >
                        {item.title}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-9 relative md:top-[80px]">
        {/* Task Section */}
        <div className="flex flex-col gap-4">
          <h2 className="font-semibold text-[#394355] text-2xl leading-6 [font-family:'Raleway',Helvetica]">
            Задача
          </h2>
<p className="w-full md:w-[660px] [font-family:'Raleway',Helvetica] font-normal text-[#394355] text-sm leading-5">
  Изготовить и смонтировать брендированный шатёр открытого типа 3×6 м (18 м²) без стен и напольного покрытия, с алюминиевым каркасом и ПВХ-кровлей с логотипом. Обеспечить устойчивость на площадке и регулировку высоты телескопическими ножками для работы на неровной поверхности.
</p>

        </div>

        {/* Done Section */}
        <div className="flex flex-col gap-5">
          <h2 className="font-semibold text-[#394355] text-2xl leading-6 [font-family:'Raleway',Helvetica]">
            Сделали
          </h2>
          <div className="flex flex-col gap-4">
            {doneItems.map((item, index) => (
              <div key={index} className="flex items-start gap-4 md:gap-6">
                <div className="relative w-6 h-6 shrink-0">
                  <img
                    className="absolute w-6 h-[17px] top-[3px] left-0"
                    alt="Bullet icon"
                    src={item.icon}
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col w-full md:w-[612px]">
                  <p className="[font-family:'Raleway',Helvetica] font-normal text-[#394355] text-sm leading-5">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Result Section */}
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-[#394355] text-2xl leading-6 [font-family:'Raleway',Helvetica]">
            Итог
          </h2>
<p className="w-full md:w-[660px] [font-family:'Raleway',Helvetica] font-normal text-[#394355] text-sm leading-5">
  Реализован лёгкий, устойчивый и брендированный мобильный шатёр для отеля «Байкальская резиденция» с долговечным логотипом и возможностью регулировки высоты.
</p>

        </div>
      </div>
    </section>
  );
};
