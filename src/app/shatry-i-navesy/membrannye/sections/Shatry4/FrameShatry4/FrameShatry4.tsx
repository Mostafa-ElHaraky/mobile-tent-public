'use client';

import React from "react";
import { Button } from "../../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  return (
    <>
      {/* === Desktop version === */}
      <section className="hidden md:block relative bottom-[90px] w-full">
        <div className="mx-auto max-w-[1440px] flex flex-col items-start gap-9 px-10">
          <h2 className="w-fit font-semibold text-4xl [font-family:'Raleway',Helvetica] leading-tight">
            <span className="text-[#527dc5]">Что такое</span>{" "}
            <span className="text-[#232c42]">мембранные шатры?</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-lg"
          >
            Узнать о мембранных шатрах
          </Button>

          <div className="w-full font-medium text-lg leading-7 text-[#394355] space-y-6">
            <p>
              Мембранные шатры — это современные конструкции, изготовленные из высококачественных мембранных материалов
              (полиэстеровые или ПВХ тенты), натянутых на металлические каркасы. Эти шатры отличаются прочностью,
              долговечностью и эстетикой, что делает их востребованными для мероприятий и коммерческих целей.
            </p>

            <h3 className="font-semibold text-2xl">Преимущества</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><b>Легкость и мобильность:</b> небольшой вес и простота транспортировки, быстрый монтаж и демонтаж.</li>
              <li><b>Эстетика:</b> уникальные формы и дизайн, украшение для любого мероприятия.</li>
              <li><b>Прочность:</b> устойчивость к ветру, дождю, снегу и УФ-излучению, долгий срок службы.</li>
              <li><b>Гибкость в дизайне:</b> разные формы и размеры, возможность комплексных композиций.</li>
              <li><b>Энергоэффективность:</b> теплоизоляция, снижение затрат на отопление/кондиционирование.</li>
              <li><b>Адаптивность:</b> использование в городе, на пляже, в горах и на открытых площадках.</li>
            </ul>

            <div className="p-5 rounded-xl bg-[#f6f8ff]">
              <p className="font-semibold">
                Их прочность, эстетика и функциональность делают мембранные шатры идеальным выбором для создания
                запоминающегося и комфортного пространства.
              </p>
            </div>

            <h3 className="font-semibold text-2xl">Где купить мембранные шатры?</h3>
            <p>
              Приобрести мембранные шатры можно в компании <b>MOBILE TENT</b>. Мы предлагаем широкий выбор качественных
              конструкций для различных целей.
            </p>

            <h3 className="font-semibold text-2xl">Преимущества сотрудничества с MOBILE TENT</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><b>Широкий ассортимент:</b> модели и размеры под разные задачи.</li>
              <li><b>Высокое качество:</b> материалы гарантируют прочность и долговечность.</li>
              <li><b>Профессиональный монтаж:</b> надежная и безопасная установка.</li>
              <li><b>Индивидуальный подход:</b> адаптация решений под клиента.</li>
              <li><b>Гибкие условия оплаты:</b> конкурентные цены и удобные варианты расчетов.</li>
              <li><b>Отличное обслуживание:</b> консультации и поддержка на всех этапах.</li>
              <li><b>Быстрая доставка:</b> оперативная доставка по адресу клиента.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* === Mobile version === */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-center leading-tight">
            Мембранные шатры
          </h2>

          <Button
            variant="link"
            className="px-6 py-2 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-sm self-center"
          >
            Подробнее
          </Button>

          <div className="font-medium text-sm leading-5 text-[#394355] text-justify space-y-4">
            <p>
              Современные конструкции из мембранных материалов на металлическом каркасе. Прочные, долговечные и
              эстетичные, идеально подходят для мероприятий и бизнеса.
            </p>

            <h3 className="font-semibold">Преимущества</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Легкие, мобильные и быстро монтируются</li>
              <li>Эффектный внешний вид и уникальный дизайн</li>
              <li>Прочные и устойчивые к погоде</li>
              <li>Разные формы и размеры</li>
              <li>Теплоизоляция и энергоэффективность</li>
              <li>Подходят для любых площадок</li>
            </ul>

            <h3 className="font-semibold">Почему MOBILE TENT</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Широкий ассортимент моделей</li>
              <li>Надежные материалы и монтаж</li>
              <li>Индивидуальные решения</li>
              <li>Гибкие цены и удобная оплата</li>
              <li>Быстрая доставка и поддержка</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
