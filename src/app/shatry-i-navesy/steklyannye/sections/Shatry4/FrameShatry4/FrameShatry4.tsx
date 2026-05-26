'use client';

import React from "react";
import { Button } from "../../../../../../components/ui/button";
import type { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  return (
    <>
      {/* === Desktop version === */}
      <section className="hidden md:block relative bottom-[200px]">
        <div className="flex flex-col items-start gap-9 max-w-5xl [font-family:'Raleway',Helvetica]">
          <h2 className="w-fit font-semibold text-4xl leading-tight">
            <span className="text-[#527dc5]">Стеклянные павильоны</span>{" "}
            <span className="text-[#232c42]">от MOBILE TENT</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-lg"
          >
            Получить консультацию и смету
          </Button>

          <div className="w-full font-medium text-lg leading-7 text-[#394355] space-y-6">
            <p>
              Где ещё вас может ждать такая выгодная цена на торговый павильон, как не на странице онлайн-ресурса{" "}
              <b>MOBILE TENT</b>? Мы предлагаем не просто купить шатёр (тент) в Москве, но и целый ряд сопутствующих услуг —
              на случай, если они понадобятся в будущем.
            </p>

            <p>
              В нашем магазине — только качественные, презентабельные изделия, а также возможность заказать стеклянный
              павильон по <b>уникальному проекту</b> (смотрите фото готовых работ в галерее сайта). Изделия изготавливаются на
              современном оборудовании, каждая деталь проходит тщательный контроль качества — поэтому мы уверены в
              надёжности продукции.
            </p>

            <h3 className="font-semibold text-2xl">Желаете купить стеклянные павильоны?</h3>
            <p>
              Современное производство — это широкий спектр материалов. Мы создаём павильоны из профиля и стекла. Несмотря
              на презентабельный вид, они <b>недороги</b> и рациональны для ТЦ, ресторанов, супермаркетов, вокзалов, аэропортов
              и др. Покупатель получает преимущества:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>доступная цена конструкции;</li>
              <li>открытый обзор внутри/снаружи (витрины, реклама товаров);</li>
              <li>визуальное расширение пространства и светлое помещение;</li>
              <li>надёжная защита от непогоды.</li>
            </ul>
            <p>
              Готовый стеклянный павильон можно <b>красить и брендировать</b> под фирменный стиль. Плюс вы можете купить
              навесы в интернет-магазине <b>MOBILE TENT</b> — для создания дополнительного пространства.
            </p>

            <h3 className="font-semibold text-2xl">Сборные павильоны</h3>
            <p>
              Вместо строительства стационарного здания выберите <b>сборный стеклянный павильон</b> любой конфигурации и
              масштаба. Это оригинально, быстро и красиво — и теперь вы знаете, где купить.
            </p>

            <div className="p-5 rounded-xl bg-[#f6f8ff] space-y-2">
              <p>
                Обращайтесь — поможем выбрать и <b>купить большой шатёр</b> или стеклянный павильон по выгодной цене и
                расскажем обо всех преимуществах сотрудничества с лидером тентовых накрытий — <b>MOBILE TENT</b>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Mobile version === */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4 [font-family:'Raleway',Helvetica]">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-center leading-tight">
            Стеклянные павильоны — под ключ
          </h2>

          <Button
            variant="link"
            className="px-6 py-2 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-sm self-center"
          >
            Узнать цену и сроки
          </Button>

          <div className="font-medium text-sm leading-5 text-[#394355] text-justify space-y-4">
            <p>
              Качественные изделия и проекты «под вас». Производство на современном оборудовании и контроль качества каждой
              детали.
            </p>

            <h3 className="font-semibold">Преимущества</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Доступная цена</li>
              <li>Панорамный обзор, витрины</li>
              <li>Визуальное расширение пространства</li>
              <li>Защита от непогоды</li>
              <li>Брендирование под фирстиль</li>
            </ul>

            <h3 className="font-semibold">Где уместны</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>ТЦ и супермаркеты</li>
              <li>Рестораны и фуд-зоны</li>
              <li>Вокзалы и аэропорты</li>
              <li>Выставки и ярмарки</li>
            </ul>

            <div className="p-4 rounded-lg bg-[#f6f8ff] text-center">
              <p className="font-semibold">Нужен сборный павильон?</p>
              <p className="text-[#527dc5] font-semibold">
                MOBILE TENT — проект, изготовление, монтаж и брендирование.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};