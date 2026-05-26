'use client';

import React from "react";
import { Button } from "../../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  return (
    <>
      {/* === Desktop version === */}
      <section className="hidden md:block relative bottom-[200px]">
        <div className="flex flex-col items-start gap-9 max-w-5xl">
          <h2 className="w-fit font-semibold text-4xl [font-family:'Raleway',Helvetica] leading-tight">
            <span className="text-[#527dc5]">Готовые торговые павильоны</span>{" "}
            <span className="text-[#232c42]">от MOBILE TENT</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec]
            text-white font-semibold text-lg"
          >
            Подробнее о павильонах
          </Button>

          <div className="w-full font-medium text-lg leading-7 text-[#394355] space-y-6">
            <p>
              MOBILE TENT — это возможность выгодно вложить деньги и купить
              навесы в Москве, СПб и других городах РФ. Мы предлагаем только
              современные и надёжные изделия, соответствующие европейским
              стандартам качества, а также ряд сопутствующих услуг.
            </p>
            <p>
              Мы не просто предоставляем широчайший ассортимент накрытий, но и
              можем возвести павильон из стекла или сэндвич-панелей. Это
              быстровозводимые здания из металлокаркаса с утеплением, которые
              подходят не только как склады или ангары, но и как магазины,
              павильоны или технические пристройки.
            </p>

            <h3 className="font-semibold text-2xl">Ключевые преимущества</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <b>Экономичность:</b> низкая стоимость строительства по
                сравнению с капитальными зданиями.
              </li>
              <li>
                <b>Скорость:</b> за короткий срок получаете готовую площадь к
                использованию.
              </li>
              <li>
                <b>Изоляция:</b> отличные шумо- и теплоизоляционные свойства.
              </li>
              <li>
                <b>Гибкость:</b> возможность покраски, брендирования и
                оформления павильона.
              </li>
            </ul>

            <h3 className="font-semibold text-2xl">Пристенные павильоны</h3>
            <p>
              У нас можно найти тенты, шатры и навесы, которые устроят даже
              самых требовательных клиентов. Мы гордимся собственной продукцией
              и достижениями, предлагая европейский уровень качества и сервиса.
              Заходите в каталог, выбирайте большие шатры и тенты, а также
              узнайте о дополнительных возможностях и скидках.
            </p>
            <p>
              Приобрести мобильный павильон или заказать его изготовление проще,
              чем кажется. Обращайтесь — и убедитесь в этом лично.
            </p>
          </div>
        </div>
      </section>

      {/* === Mobile version === */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-center leading-tight">
            Готовые торговые павильоны
          </h2>

          <Button
            variant="link"
            className="px-6 py-2 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec]
            text-white font-semibold text-sm self-center"
          >
            Подробнее
          </Button>

          <div className="font-medium text-sm leading-5 text-[#394355] text-justify space-y-4">
            <p>
              MOBILE TENT предлагает современные павильоны и навесы в Москве,
              СПб и по всей России. Европейское качество, широкий ассортимент и
              полезные услуги.
            </p>
            <p>
              Павильоны из стекла или сэндвич-панелей — это быстровозводимые
              утеплённые конструкции, подходящие для магазинов, складов и
              павильонов.
            </p>

            <h3 className="font-semibold">Преимущества</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Низкая стоимость строительства</li>
              <li>Быстрая готовность к эксплуатации</li>
              <li>Шумо- и теплоизоляция</li>
              <li>Брендирование и оформление</li>
            </ul>

            <h3 className="font-semibold">Пристенные павильоны</h3>
            <p>
              Мы предлагаем шатры и навесы, которые соответствуют высоким
              стандартам. Купить мобильный павильон или заказать его изготовление
              легко — убедитесь сами!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};