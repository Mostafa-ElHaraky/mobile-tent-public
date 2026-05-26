'use client';

import { Card, CardContent } from "../../../../../../components/ui/card";
import { ReactElement } from 'react';

export const DivWrapperOurProjects1 = (): ReactElement => {
  // Equipment items (под проект)
const equipmentItems = [
  { title: "Большая вместительность и респектабельный внешний вид" },
  { title: "Оригинальные тенты с корпоративной символикой" },
  { title: "Ряд высоких оконных проемов по периметру" },
  { title: "Двустворчатая пластиковая входная дверь со стеклопакетами" },
  { title: "Деревянный подиум с покрытием из искусственного газона", wide: true },
  { title: "Прочный металлический каркас с высокой жёсткостью" },
];
  // Done items
const doneItems = [
  {
    icon: "/group-9.webp",
    description:
      "Смонтировали два закрытых шатра представительского класса с прямоугольной формой и большим внутренним пространством.",
  },
  {
    icon: "/group-10.webp",
    description:
      "Соорудили деревянный подиум с покрытием из искусственного газона под основание шатров.",
  },
  {
    icon: "/group-11.webp",
    description:
      "Установили конструкции с прочным металлическим каркасом, обеспечив идеальное натяжение тентового полотна.",
  },
  {
    icon: "/group-9.webp",
    description:
      "Смонтировали пластиковые двустворчатые двери и окна по периметру, создав комфортную атмосферу и презентабельный внешний вид.",
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
  Установить два закрытых шатра представительского класса для мероприятий в Архангельске, обеспечив комфорт, эстетичный внешний вид и функциональность, не уступающие капитальным сооружениям.
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
  Получился комплекс шатров представительского класса с высокой функциональностью и эстетикой, полностью соответствующий уровню официальных мероприятий.
</p>
        </div>
      </div>
    </section>
  );
};
