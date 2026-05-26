'use client';

import React from "react";
import { Button } from "../../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  return (
    <>
      {/* === Desktop version === */}
      <section className="hidden md:block relative bottom-[90px]">
        <div className="flex flex-col items-start gap-9 max-w-4xl">
          <h2 className="w-fit font-semibold text-4xl [font-family:'Raleway',Helvetica] leading-tight">
            <span className="text-[#527dc5]">Доставка изделий</span>{" "}
            <span className="text-[#232c42]">клиентам</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] 
            text-white font-semibold text-lg"
          >
            Подробнее о доставке
          </Button>

          <div className="w-full font-medium text-lg leading-7 text-[#394355] space-y-6">
            <h3 className="font-semibold text-2xl">Доставка, установка и обучение</h3>
            <p>
              Мы ценим Ваше время и предлагаем <b>бесплатную и своевременную доставку</b> по адресу клиента
              (в пределах 50 км от МКАД). Перевозка в регионы РФ осуществляется по договорённости с клиентом
              на выгодных условиях.
            </p>
            <p>
              Наши специалисты <b>бесплатно установят шатёр</b> и проведут мастер-класс по обслуживанию и
              первичному монтажу оборудования.
            </p>
          </div>
        </div>
      </section>

      {/* === Mobile version === */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-center leading-tight">
            Доставка изделий клиентам
          </h2>

          <Button
            variant="link"
            className="px-6 py-2 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] 
            text-white font-semibold text-sm self-center"
          >
            Подробнее
          </Button>

          <div className="font-medium text-sm leading-5 text-[#394355] text-justify space-y-4">
            <h3 className="font-semibold">Доставка, установка и обучение</h3>
            <p>
              Бесплатная доставка по Москве и области (до 50 км от МКАД). В регионы РФ — на выгодных условиях
              по договорённости.
            </p>
            <p>
              Специалисты установят шатёр и проведут мастер-класс по обслуживанию и монтажу оборудования.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};