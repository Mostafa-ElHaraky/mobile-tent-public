'use client';

import { Card, CardContent } from "../../../../../../components/ui/card";
import { ReactElement } from 'react';

export const DivWrapperOurProjects1 = (): ReactElement => {
  // Equipment items (под проект)
const equipmentItems = [
  { title: "Устойчивый трапециевидный каркас с полимерным покрытием" },
  { title: "Надёжный тент для защиты от солнца и непогоды" },
  { title: "Верхний навесной козырек для дополнительной защиты" },
  { title: "Элегантные шторы-занавески на опорах" },
  { title: "Простая установка и долгий срок службы", wide: true },
  { title: "Привлекательный дизайн и цветовое решение" },
];
  // Done items
const doneItems = [
  {
    icon: "/group-9.webp",
    description:
      "Разработали прочный и привлекательный шатёр размером 3х3 с устойчивым трапециевидным каркасом.",
  },
  {
    icon: "/group-10.webp",
    description:
      "Оснастили конструкцию улучшенным полимерным покрытием для долгого срока службы.",
  },
  {
    icon: "/group-11.webp",
    description:
      "Установили надёжный тент для защиты от солнца и неблагоприятных погодных условий.",
  },
  {
    icon: "/group-9.webp",
    description:
      "Добавили верхний навесной козырек для дополнительной защиты и элегантные шторы-занавески.",
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
  Создать отличное место размещения для небольшого числа гостей при проведении развлекательного мероприятия или дегустации продукции. Обеспечить привлекательный внешний вид и простоту установки рядом с входом в офис.
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
  Модель сочетает в себе простоту установки и прочность, став отличным решением для размещения гостей на мероприятиях. Оригинальность шатру придают закреплённые к опорам элегантные шторы-занавески.
</p>
        </div>
      </div>
    </section>
  );
};