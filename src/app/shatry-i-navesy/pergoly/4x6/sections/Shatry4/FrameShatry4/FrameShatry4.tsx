'use client';

import React from "react";
import { Button } from "../../../../../../../components/ui/button";
import type { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  return (
    <>
      {/* === Desktop version === */}
      <section className="hidden md:block relative bottom-[200px]">
        <div className="flex flex-col items-start gap-9 max-w-5xl [font-family:'Raleway',Helvetica]">
          <h2 className="w-fit font-semibold text-4xl leading-tight">
            <span className="text-[#527dc5]">Перголы 4×6 м</span>{" "}
            <span className="text-[#232c42]">в широком ассортименте</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-lg"
          >
            Узнать цену и сроки
          </Button>

          <div className="w-full font-medium text-lg leading-7 text-[#394355] space-y-6">
            <p>
              Пергола <b>4×6 м</b> — прочная и эстетичная тентовая конструкция для создания затенённого пространства на
              открытых площадках. Благодаря алюминиевому или оцинкованному каркасу и влагостойкому покрытию она защищает от солнца и дождя.
            </p>
            <p>
              Каркас устойчив к коррозии, тентовое полотно из ПВХ не выцветает и не рвётся. Пергола может использоваться
              отдельно или быть частью модульного комплекса — соединять шатры, оформлять переходы.
            </p>
            <p>
              Размер 4×6 м позволяет разместить мебель, оборудование или зону отдыха. Срок службы конструкции —
              <b>15–20 лет</b>. Пергола легко транспортируется и монтируется без спецтехники.
            </p>

            <h3 className="font-semibold text-2xl">Выбор перголы 4×6</h3>
            <p>Покупатель получает функциональную конструкцию с рядом преимуществ:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Защита от дождя и солнца круглый год;</li>
              <li>Лёгкий и прочный каркас, устойчивый к ветру;</li>
              <li>Мобильность — простая сборка и демонтаж;</li>
              <li>Индивидуальное оформление: цвет, шторы, декор.</li>
            </ul>
            <p>
              Перголы используют на дачах, в зонах барбекю, на террасах. Это удачное решение для кафе и ресторанов, выставок и торжеств.
            </p>

            <h3 className="font-semibold text-2xl">Преимущества покупки в MOBILE TENT</h3>
            <p>
              Компания <b>MOBILE TENT</b> предлагает купить перголу 4×6 м напрямую от производителя. Контроль качества,
              сертифицированные материалы и индивидуальная комплектация.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Продукция собственного производства без наценок;</li>
              <li>Гарантированное качество и сертифицированные ткани;</li>
              <li>Консультации и подбор под задачу;</li>
              <li>Быстрая доставка, монтаж и постпродажная поддержка.</li>
            </ul>

            <div className="p-5 rounded-xl bg-[#f6f8ff] space-y-2">
              <p className="font-semibold">
                Пергола 4×6 м — это не просто навес, а инвестиция в комфорт и привлекательность пространства.
              </p>
              <p className="text-[#527dc5] font-semibold">
                Закажите в MOBILE TENT — надёжном производителе тентовых конструкций.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Mobile version === */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4 [font-family:'Raleway',Helvetica]">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-center leading-tight">
            Пергола 4×6 м — практичное решение
          </h2>

          <Button
            variant="link"
            className="px-6 py-2 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-sm self-center"
          >
            Узнать стоимость
          </Button>

          <div className="font-medium text-sm leading-5 text-[#394355] text-justify space-y-4">
            <p>
              Прочная и эстетичная конструкция для дачи, кафе, выставки или свадьбы. Лёгкий каркас, ПВХ-покрытие,
              срок службы до 20 лет.
            </p>

            <h3 className="font-semibold">Преимущества</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Защита от солнца и дождя</li>
              <li>Устойчивость к ветру</li>
              <li>Быстрый монтаж и мобильность</li>
              <li>Возможность брендирования и декора</li>
            </ul>

            <h3 className="font-semibold">Где применяют</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Загородные участки</li>
              <li>Кафе и рестораны</li>
              <li>Выставки и ярмарки</li>
              <li>Свадьбы и корпоративы</li>
            </ul>

            <h3 className="font-semibold">Покупка в MOBILE TENT</h3>
            <p>
              Собственное производство, сертифицированные материалы, доставка по России и поддержка после установки.
            </p>

            <div className="p-4 rounded-lg bg-[#f6f8ff] text-center">
              <p className="font-semibold">Пергола 4×6 м — надёжный выбор.</p>
              <p className="text-[#527dc5] font-semibold">Оставьте заявку — мы всё организуем.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
