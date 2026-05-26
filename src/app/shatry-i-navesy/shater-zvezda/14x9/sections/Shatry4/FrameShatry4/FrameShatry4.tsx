'use client';

import React from "react";
import { Button } from "../../../../../../../components/ui/button";
import type { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  return (
    <>
      {/* === Desktop version === */}
      <section className="hidden md:block relative bottom-[90px]">
        <div className="flex flex-col items-start gap-9 max-w-5xl [font-family:'Raleway',Helvetica]">
          <h2 className="w-fit font-semibold text-4xl leading-tight">
            <span className="text-[#527dc5]">Шатры «Звезда» 14×9</span>{" "}
            <span className="text-[#232c42]">— изысканный дизайн и функциональность</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-lg"
          >
            Узнать цену и сроки
          </Button>

          <div className="w-full font-medium text-lg leading-7 text-[#394355] space-y-6">
            <p>
              Шатры «Звезда» 14×9 м — это павильоны в форме звезды, сочетающие выразительный архитектурный стиль и
              практичность. Они создают неповторимую атмосферу open-air мероприятий и одновременно защищают гостей от
              непогоды.
            </p>

            <h3 className="font-semibold text-2xl">Что это и зачем нужны</h3>
            <p>
              Конструкция впечатляет визуально и организует комфортное пространство для разных форматов событий — от
              презентаций и фестивалей до частных торжеств. Это не просто укрытие, а яркий акцент площадки.
            </p>

            <h3 className="font-semibold text-2xl">Преимущества «Звезды» 14×9 м</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><b>Эстетика:</b> фирменная звездная форма — эффектный элемент декора.</li>
              <li><b>Простор:</b> продуманная планировка для комфортного размещения гостей и оборудования.</li>
              <li><b>Защита от погоды:</b> материалы и каркас выдерживают дождь, солнце и ветер.</li>
              <li><b>Быстрый монтаж:</b> сборка и разборка занимают минимум времени.</li>
              <li><b>Мобильность:</b> легко перемещать и адаптировать под разные площадки.</li>
            </ul>

            <h3 className="font-semibold text-2xl">Где заказать «Звезду» 14×9</h3>
            <p>
              Ищете идеальный шатёр «Звезда» 14×9 м? Ваш выбор — <b>MOBILE TENT</b>. Мы проектируем стильные и
              надёжные решения с учётом современных трендов.
            </p>

            <h3 className="font-semibold text-2xl">Почему MOBILE TENT</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><b>Индивидуальный подход:</b> под ваши задачи и бренд.</li>
              <li><b>Качество и надёжность:</b> строгий контроль и ресурс конструкции.</li>
              <li><b>Большой выбор:</b> размеры, цвета и конфигурации.</li>
              <li><b>Опыт и профессионализм:</b> многолетняя практика в производстве и сервисе.</li>
              <li><b>Комплексный сервис:</b> от консультации и монтажа до обслуживания.</li>
            </ul>

            <div className="p-5 rounded-xl bg-[#f6f8ff] space-y-2">
              <p className="font-semibold">
                Выбирая «Звезду» 14×9 от MOBILE TENT, вы инвестируете в стильное и функциональное пространство.
              </p>
              <p className="text-[#527dc5] font-semibold">
                Оставьте заявку — поможем создать атмосферу, которую гости запомнят.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Mobile version === */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4 [font-family:'Raleway',Helvetica]">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-center leading-tight">
            Шатры «Звезда» 14×9 — эффектный выбор
          </h2>

          <Button
            variant="link"
            className="px-6 py-2 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-sm self-center"
          >
            Консультация и смета
          </Button>

          <div className="font-medium text-sm leading-5 text-[#394355] text-justify space-y-4">
            <p>
              Изысканный дизайн в форме звезды + практичность: защита от дождя, солнца и ветра, быстрый монтаж и мобильность.
            </p>

            <h3 className="font-semibold">Преимущества</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Яркий архитектурный акцент</li>
              <li>Простор и комфорт</li>
              <li>Надёжные материалы</li>
              <li>Быстрый монтаж/демонтаж</li>
              <li>Гибкая конфигурация</li>
            </ul>

            <h3 className="font-semibold">Почему MOBILE TENT</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Индивидуальные решения</li>
              <li>Контроль качества</li>
              <li>Разнообразие дизайнов</li>
              <li>Опытная команда</li>
              <li>Комплексный сервис</li>
            </ul>

            <div className="p-4 rounded-lg bg-[#f6f8ff] text-center">
              <p className="font-semibold">Оставьте заявку — подберём «Звезду» 14×9 под ваш формат.</p>
              <p className="text-[#527dc5] font-semibold">MOBILE TENT — стиль и надёжность для мероприятий.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};