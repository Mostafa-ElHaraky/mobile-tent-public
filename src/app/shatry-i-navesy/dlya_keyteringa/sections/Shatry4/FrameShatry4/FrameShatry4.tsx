'use client';

import React from "react";
import { Button } from "../../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  return (
    <>
      {/* === Desktop version === */}
      <section className="hidden md:block relative bottom-[90px]">
        <div className="flex flex-col items-start gap-9 max-w-5xl">
          <h2 className="w-fit font-semibold text-4xl [font-family:'Raleway',Helvetica] leading-tight">
            <span className="text-[#527dc5]">Шатры</span>{" "}
            <span className="text-[#232c42]">для кейтеринга</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-lg"
          >
            Купить шатёр для кейтеринга
          </Button>

          <div className="w-full font-medium text-lg leading-7 text-[#394355] space-y-6">
            <h3 className="font-semibold text-2xl">Желаете купить шатры для кейтеринга?</h3>
            <p>
              Привыкли пользоваться лучшим и выполнять поставленные задачи на все 100%? <span className="font-semibold">MOBILE TENT</span> — тоже, именно поэтому драгоценным клиентам здесь предлагают широчайший ассортимент товаров, среди которых каждый отыскивает именно тот быстросборный тент (шатёр), который полностью удовлетворит его запросы.
            </p>
            <p>
              Заходите, знакомьтесь с предложениями на сайте и выбирайте тенты для кейтеринга по выгодным тарифам. Зачем тратить средства на возведение или отказываться от живописного места отдыха на природе, когда можно купить шатёр для кейтеринга и проводить мероприятие там, где будет душе угодно?
            </p>
            <p>
              Защитите Ваших гостей и клиентов под нашим накрытием от палящего солнца или неожиданных осадков, продолжайте наслаждаться приятной компанией семьи, друзей, коллег или посетителей. Будьте уверены: приобрести конструкцию в <span className="font-semibold">MOBILE TENT</span> — сделать выгодное денежное вложение, более выгодного предложения в соотношении цена/качество не отыскать нигде.
            </p>
            <p>
              Обращайтесь, специалисты магазина помогут купить недорогой шатёр в Москве, СПб и других городах России, а также доставят его к Вам в максимально короткие сроки. Фото и цены навесов смотрите на сайте, в подробном описании к каждому лоту.
            </p>
          </div>
        </div>
      </section>

      {/* === Mobile version === */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-center leading-tight">
            Шатры для кейтеринга
          </h2>

          <Button
            variant="link"
            className="px-6 py-2 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-sm self-center"
          >
            Купить шатёр
          </Button>

          <div className="font-medium text-sm leading-5 text-[#394355] text-justify space-y-4">
            <p>
              В <span className="font-semibold">MOBILE TENT</span> — широкий выбор быстросборных шатров для кейтеринга по выгодным тарифам. Подойдут для любых площадок и форматов мероприятий.
            </p>
            <p>
              Защитите гостей от солнца и осадков и проводите мероприятие там, где хотите. Покупка в <span className="font-semibold">MOBILE TENT</span> — выгодное вложение с лучшим соотношением цена/качество.
            </p>
            <p>
              Поможем купить недорогой шатёр в Москве, СПб и по всей России с быстрой доставкой. Фото и цены — на сайте в описаниях лотов.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};