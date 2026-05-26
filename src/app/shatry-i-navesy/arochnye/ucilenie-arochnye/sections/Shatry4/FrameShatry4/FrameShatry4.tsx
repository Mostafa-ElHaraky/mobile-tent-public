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
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-lg"
          >
            Информация об арочных шатрах
          </Button>

          <div className="w-full font-medium text-lg leading-7 text-[#394355] space-y-6">
            <p>
              Сборно-разборные арочные шатры представляют собой усовершенствованный и увеличенный вариант сводчатого строения. 
              Это временные сооружения для защиты от непогоды и создания комфортных условий.
            </p>

            <p>Любой шатер состоит из:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Каркаса из металлических опор (алюминиевых трубок) в форме арки;</li>
              <li>Натяжного тента из плотного ПВХ, защищающего от внешних условий.</li>
            </ul>
            <p>Устанавливаются быстро, не требуют фундамента или сложной подготовки.</p>

            <h3 className="font-semibold text-2xl">Сферы применения</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Летние площадки кафе и ресторанов;</li>
              <li>Выставочные галереи и торговые павильоны;</li>
              <li>Временные ангары для хранения товаров;</li>
              <li>Зоны отдыха: бассейны, фонтаны;</li>
            </ul>

            <h3 className="font-semibold text-2xl">Купить арочные шатры в Москве</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Не пропускают влагу и ветер;</li>
              <li>Защита от ультрафиолета и жары;</li>
              <li>Зимой создают тепло при установке обогревателей;</li>
              <li>Можно разместить мебель, сцену, аппаратуру, декор;</li>
              <li>Возможность монтажа пола.</li>
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
            <p>Совместимы между собой — можно увеличивать площадь в несколько раз.</p>

            <h3 className="font-semibold text-2xl">Требования к установке</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ровная площадка, больше по размеру шатра;</li>
              <li>Использование только штатных креплений;</li>
              <li>Не ставить рядом с огнём или дымящими трубами;</li>
              <li>Обязательные утяжелители на опорах;</li>
              <li>Зимой — при снегопаде поддерживать температуру внутри выше 12°C.</li>
            </ul>

            <h3 className="font-semibold text-2xl">Преимущества арочных шатров</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Круглогодичное использование;</li>
              <li>Износостойкие и долговечные материалы;</li>
              <li>Мобильные, помещаются в багажник;</li>
              <li>Простая и быстрая сборка;</li>
              <li>Экономичнее аренды зала;</li>
              <li>Возможность брендирования и рекламы.</li>
            </ul>

            <h3 className="font-semibold text-2xl">Выгодные условия сотрудничества</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Широкий выбор размеров, форм и цветов;</li>
              <li>Продукция «Вип Тент», «Ютеко» и других брендов;</li>
              <li>Рыночные цены за счёт прямых поставок;</li>
              <li>Покупка или аренда по всей России;</li>
              <li>Гарантия от производителей.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* === Mobile version === */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-lg font-semibold text-center leading-tight w-full">
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

          {/* В мобильной версии теперь полный текст */}
          <div className="w-full font-medium text-sm leading-5 text-[#394355] text-justify space-y-4">
            <p>
              Сборно-разборные арочные шатры представляют собой усовершенствованный и увеличенный вариант 
              сводчатого строения. Это временные сооружения для защиты от непогоды и создания комфортных условий.
            </p>

            <p>Любой шатер состоит из:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Каркаса из металлических арочных опор;</li>
              <li>Натяжного тента из плотного ПВХ.</li>
            </ul>
            <p>Быстро устанавливаются, не требуют фундамента.</p>

            <h3 className="font-semibold text-base">Сферы применения</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Кафе и рестораны</li>
              <li>Выставки и ярмарки</li>
              <li>Временные ангары и склады</li>
              <li>Зоны отдыха и бассейны</li>
            </ul>

            <h3 className="font-semibold text-base">Виды шатров</h3>
            <p>Размеры — от 18 до 600 м². Формы: полусфера, двух-/четырёхскатные, гексагональные, круглые, сложные.</p>

            <h3 className="font-semibold text-base">Требования к установке</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Ровная площадка и штатные крепления</li>
              <li>Не ставить рядом с огнём</li>
              <li>Использовать утяжелители</li>
              <li>Зимой — температура выше 12°C при снегопаде</li>
            </ul>

            <h3 className="font-semibold text-base">Преимущества</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Круглогодичное использование</li>
              <li>Прочные и износостойкие</li>
              <li>Мобильные и удобные</li>
              <li>Экономичнее аренды залов</li>
              <li>Можно брендировать</li>
            </ul>

            <h3 className="font-semibold text-base">Почему Mobile Tent</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Широкий выбор и прямые поставки</li>
              <li>Качественная продукция «Вип Тент», «Ютеко»</li>
              <li>Покупка или аренда в Москве и РФ</li>
              <li>Гарантия на всю продукцию</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};