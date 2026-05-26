'use client';

import React from "react";
import { Button } from "../../../../../../components/ui/button";
import type { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  return (
    <>
      {/* === Desktop version === */}
      <section className="hidden md:block relative bottom-[90px]">
        <div className="flex flex-col items-start gap-9 max-w-5xl [font-family:'Raleway',Helvetica]">
          <h2 className="w-fit font-semibold text-4xl leading-tight">
            <span className="text-[#527dc5]">Восточные шатры</span>{" "}
            <span className="text-[#232c42]">— колорит и респектабельность</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-lg"
          >
            Узнать цену и сроки
          </Button>

          <div className="w-full font-medium text-lg leading-7 text-[#394355] space-y-6">
            <p>
              Восточный шатёр идеально подойдёт для кальянной, летней площадки ресторана или проведения торжества. 
              Роскошный и просторный, он придаёт мероприятию особый колорит.
            </p>

            <p>
              Изящная форма купола гармонично смотрится на природе. Восточные шатры ломают стереотипы о том, что 
              праздники в шатре — это непрестижно. Лёгкая мобильная конструкция устанавливается быстро, а выглядит 
              респектабельно. Тематический декор поможет создать атмосферу Востока. 
              <b> MOBILE TENT</b> производит не только практичные, но и эстетически впечатляющие конструкции.
            </p>

            <h3 className="font-semibold text-2xl">Желаете купить восточные шатры?</h3>
            <p>
              Несмотря на внешнюю лёгкость, конструкция выполнена из прочных, стойких к повреждениям материалов. 
              Тент, обтянутый тканью, защищает от палящего солнца и создаёт уютную атмосферу отдыха и релакса.
            </p>

            <h3 className="font-semibold text-2xl">Фото и ассортимент</h3>
            <p>
              На складе доступно большинство позиций из каталога, включая восточные шатры. Фото лишь частично 
              передают их изящество — представьте атмосферные посиделки с семьёй или друзьями под таким шатром.
            </p>

            <p>
              При выборе уточните у менеджера варианты тканевых покрытий и цветовых решений. Вы сможете подобрать 
              подходящий стиль и производителя.
            </p>

            <div className="p-5 rounded-xl bg-[#f6f8ff] space-y-2">
              <p>
                Если возникнут вопросы, консультанты <b>MOBILE TENT</b> помогут с выбором и покупкой восточного шатра, 
                соответствующего по характеристикам и цене.
              </p>
              <p className="text-[#527dc5] font-semibold">
                MOBILE TENT — восточная эстетика и европейское качество.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Mobile version === */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4 [font-family:'Raleway',Helvetica]">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-center leading-tight">
            Восточные шатры — стиль и колорит
          </h2>

          <Button
            variant="link"
            className="px-6 py-2 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-sm self-center"
          >
            Консультация и подбор
          </Button>

          <div className="font-medium text-sm leading-5 text-[#394355] text-justify space-y-4">
            <p>
              Купольная форма, лёгкость и простор делают восточные шатры идеальными для ресторанов, кальянных и торжеств. 
              Они выглядят респектабельно и создают атмосферу Востока.
            </p>

            <h3 className="font-semibold">Преимущества</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Эстетичный дизайн и колорит</li>
              <li>Прочные материалы</li>
              <li>Защита от солнца</li>
              <li>Создание атмосферы Востока</li>
            </ul>

            <h3 className="font-semibold">Почему MOBILE TENT</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>ГОСТ и европейские стандарты</li>
              <li>Большой ассортимент на складе</li>
              <li>Фото и индивидуальные решения</li>
              <li>Поддержка и консультации</li>
            </ul>

            <div className="p-4 rounded-lg bg-[#f6f8ff] text-center">
              <p className="font-semibold">Хотите восточный шатёр?</p>
              <p className="text-[#527dc5] font-semibold">
                MOBILE TENT поможет выбрать модель и оформить заказ быстро.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};