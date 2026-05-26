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
            <span className="text-[#527dc5]">Шатры «Звезда» 14×14</span>{" "}
            <span className="text-[#232c42]">— величие и стиль для вашего события</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-lg"
          >
            Узнать цену и сроки
          </Button>

          <div className="w-full font-medium text-lg leading-7 text-[#394355] space-y-6">
            <p>
              Шатры «Звезда» 14×14 м — монументальные конструкции с уникальной формой звезды. Они создают атмосферу
              эксклюзивности и обеспечивают комфортное пространство под открытым небом для свадеб, корпоративов,
              выставок и культурных событий.
            </p>

            <h3 className="font-semibold text-2xl">Что из себя представляют шатры «Звезда»</h3>
            <p>
              Эти сооружения — архитектурный шедевр, сочетающий эстетику и практичность. Они не только украшают площадку,
              но и становятся её центральным элементом.
            </p>

            <h3 className="font-semibold text-2xl">Преимущества шатров 14×14 м</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><b>Великолепный дизайн:</b> форма звезды делает шатры эстетически выразительными.</li>
              <li><b>Большое пространство:</b> комфортное размещение множества гостей и декора.</li>
              <li><b>Защита от погоды:</b> надёжные материалы защищают от солнца, дождя и ветра.</li>
              <li><b>Универсальность:</b> свадьбы, выставки, корпоративные вечеринки, культурные события.</li>
              <li><b>Индивидуальность:</b> неповторимый характер мероприятия.</li>
            </ul>

            <h3 className="font-semibold text-2xl">Где заказать шатры «Звезда» 14×14</h3>
            <p>
              Ищете идеальный шатёр «Звезда» 14×14 м? Ваш выбор — <b>MOBILE TENT</b>. Мы предлагаем стильные и
              функциональные конструкции, созданные по последним тенденциям дизайна.
            </p>

            <h3 className="font-semibold text-2xl">Почему MOBILE TENT</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><b>Качество и надёжность:</b> соответствие высоким стандартам, долгий срок службы.</li>
              <li><b>Индивидуальный подход:</b> уникальные решения под ваши задачи.</li>
              <li><b>Ассортимент:</b> разнообразие дизайнов и размеров.</li>
              <li><b>Опыт:</b> многолетняя практика производства и сервиса.</li>
              <li><b>Комплексный сервис:</b> консультация, монтаж и сопровождение.</li>
            </ul>

            <div className="p-5 rounded-xl bg-[#f6f8ff] space-y-2">
              <p className="font-semibold">
                Шатры «Звезда» 14×14 от MOBILE TENT — это впечатляющее пространство для гостей.
              </p>
              <p className="text-[#527dc5] font-semibold">
                Оставьте заявку — мы поможем воплотить ваши идеи и сделать событие незабываемым.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Mobile version === */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4 [font-family:'Raleway',Helvetica]">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-center leading-tight">
            Шатры «Звезда» 14×14
          </h2>

          <Button
            variant="link"
            className="px-6 py-2 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-sm self-center"
          >
            Консультация и смета
          </Button>

          <div className="font-medium text-sm leading-5 text-[#394355] text-justify space-y-4">
            <p>
              Величественная конструкция в форме звезды: стильное решение для свадеб, корпоративов и выставок. Простор, защита и эксклюзивность.
            </p>

            <h3 className="font-semibold">Преимущества</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Уникальный дизайн</li>
              <li>Просторное внутреннее пространство</li>
              <li>Надёжная защита от погоды</li>
              <li>Универсальность применения</li>
              <li>Эксклюзивный характер</li>
            </ul>

            <h3 className="font-semibold">Почему MOBILE TENT</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Высокое качество</li>
              <li>Индивидуальные решения</li>
              <li>Разнообразие моделей</li>
              <li>Опыт и профессионализм</li>
              <li>Комплексный сервис</li>
            </ul>

            <div className="p-4 rounded-lg bg-[#f6f8ff] text-center">
              <p className="font-semibold">Оставьте заявку на шатёр «Звезда» 14×14.</p>
              <p className="text-[#527dc5] font-semibold">MOBILE TENT — создаём стильные пространства.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};