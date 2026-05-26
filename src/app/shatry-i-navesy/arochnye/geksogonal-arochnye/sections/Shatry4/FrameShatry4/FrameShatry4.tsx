'use client';

import React from "react";
import { Button } from "../../../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  return (
    <>
      {/* === Desktop version === */}
      <section className="hidden md:block relative bottom-[90px]">
        <div className="flex flex-col items-start gap-9">
          <h2 className="w-fit relative [font-family:'Raleway',Helvetica] font-semibold text-4xl leading-[normal]">
            <span className="text-[#527dc5]">Что такое</span>
            <span className="text-[#232c42]"> арочные шатры и как они устроены?</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-lg [font-family:'Raleway',Helvetica]"
          >
            Информация об арочных шатрах
          </Button>

          <div className="w-full font-medium text-lg leading-7 text-[#394355] [font-family:'Raleway',Helvetica] space-y-6">
            <p>
              Сборно-разборные арочные шатры представляют собой усовершенствованный и увеличенный вариант сводчатого строения, т. е. это временные сооружения, которые предназначены для защиты от непогоды и создания комфортных условий.
            </p>

            <p>Любой шатер состоит из:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Каркаса из металлических опор (алюминиевых трубок) в форме арки;</li>
              <li>Натяжного тента из плотного ПВХ, защищающего от внешних условий.</li>
            </ul>
            <p>Быстро устанавливаются и снимаются, без фундамента и сложной подготовки.</p>

            <h3 className="font-semibold text-2xl">Сферы применения</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Летние площадки кафе и ресторанов;</li>
              <li>Выставочные галереи и торговые павильоны;</li>
              <li>Временные ангары для хранения товаров;</li>
              <li>Зоны отдыха: бассейны, фонтаны.</li>
            </ul>

            <h3 className="font-semibold text-2xl">Купить арочные шатры в Москве</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Не пропускают влагу и ветер;</li>
              <li>Защита от УФ и жара летом;</li>
              <li>Зимой обогреваются переносными нагревателями;</li>
              <li>Можно разместить мебель, сцену, аппаратуру, декор.</li>
            </ul>

            <h3 className="font-semibold text-2xl">Виды арочных шатров</h3>
            <p>Размеры — от 18 до 600 м². Формы:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Полусфера</li>
              <li>Двухскатные и четырёхскатные</li>
              <li>Гексагональные</li>
              <li>Круглые</li>
              <li>Сложные геометрические</li>
            </ul>
            <p>Совместимы между собой: можно стыковать и увеличивать площадь.</p>

            <h3 className="font-semibold text-2xl">Требования к установке</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ровная площадка и запас свободного пространства;</li>
              <li>Только штатные крепления;</li>
              <li>Без острых предметов поблизости;</li>
              <li>Не ставить у огня и дымящих труб;</li>
              <li>Обязательное утяжеление опор;</li>
              <li>Зимой — температура внутри выше 12°C при снегопаде.</li>
            </ul>

            <h3 className="font-semibold text-2xl">Преимущества арочных шатров</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Круглогодичное использование;</li>
              <li>Износостойкость и долговечность;</li>
              <li>Мобильность, помещаются в багажник;</li>
              <li>Быстрая сборка;</li>
              <li>Экономичнее аренды зала;</li>
              <li>Возможность брендирования.</li>
            </ul>

            <h3 className="font-semibold text-2xl">Выгодные условия сотрудничества</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Широкий выбор размеров, форм и цветов;</li>
              <li>Продукция «Вип Тент», «Ютеко» и др.;</li>
              <li>Среднерыночные цены за счёт прямых поставок;</li>
              <li>Покупка или аренда в Москве, МО и РФ;</li>
              <li>Гарантия на продукцию.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* === Mobile version === */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-lg font-semibold text-center [font-family:'Raleway',Helvetica] leading-tight w-full">
            Что такое арочные шатры и как они устроены?
          </h2>

          <div className="w-full text-center">
            <Button
              variant="link"
              className="px-6 py-2 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-sm"
            >
              Информация об арочных шатрах
            </Button>
          </div>

          <div className="w-full font-medium text-sm leading-5 text-[#394355] text-justify space-y-4">
            <p>Арочные шатры — сборно-разборные конструкции из арочного каркаса и ПВХ-тента. Быстро ставятся и не требуют фундамента.</p>

            <h3 className="font-semibold text-base">Применение</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Кафе и рестораны</li>
              <li>Выставки и ярмарки</li>
              <li>Ангары и склады</li>
              <li>Зоны отдыха</li>
            </ul>

            <h3 className="font-semibold text-base">Плюсы</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Защита от дождя, ветра и солнца</li>
              <li>Мобильность и простота сборки</li>
              <li>Экономия и брендирование</li>
            </ul>

            <h3 className="font-semibold text-base">Формы</h3>
            <p>Полусфера, скатные, гексагональные, круглые, сложные геометрии.</p>

            <h3 className="font-semibold text-base">Почему Mobile Tent</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Широкий ассортимент</li>
              <li>Рыночные цены</li>
              <li>Гарантия и аренда по РФ</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};