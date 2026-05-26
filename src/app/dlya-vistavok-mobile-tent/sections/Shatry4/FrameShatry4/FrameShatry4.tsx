'use client';

import React from "react";
import { Button } from "../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  const RussianContentDesktop = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-4">
      <h3 className="font-semibold text-2xl leading-7">
        Мобильные шатры для выставок
      </h3>
      <p className="font-medium text-lg leading-6">
        Современные выставки требуют не только качественной продукции, но и грамотной организации пространства. 
        Мобильные шатры для выставок создают комфорт для участников и посетителей, защищают от погоды и привлекают внимание своим дизайном. 
        Простота сборки и универсальность сделали их незаменимыми для мероприятий любого масштаба.
      </p>

      <p className="font-medium text-lg leading-6">
        Главное преимущество мобильных шатров — мобильность и гибкость. 
        Они быстро собираются и разбираются, подходят как для улицы, так и для помещений. 
        Дополнительно шатры легко брендируются: логотипы, слоганы и элементы фирменного стиля превращают конструкцию в маркетинговый инструмент.
      </p>

      <h4 className="font-semibold text-xl leading-6">Как выбрать и купить мобильный шатёр?</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li><span className="font-semibold">Материалы:</span> алюминий и ПВХ — лёгкие, прочные, долговечные.</li>
        <li><span className="font-semibold">Размер:</span> определите площадь под ваш стенд и оборудование.</li>
        <li><span className="font-semibold">Брендирование:</span> возможность персонализации под фирменный стиль.</li>
      </ul>

      <p className="font-medium text-lg leading-6">
        Цена зависит от размеров, материалов, комплектации и опций. 
        Качественные шатры — это инвестиция в успех: они обеспечат надёжность и создадут яркое впечатление у посетителей. 
        <span className="font-semibold"> MOBILE TENT</span> предлагает широкий выбор моделей по высоким стандартам качества.
      </p>

      <h4 className="font-semibold text-xl leading-6">Аренда или покупка?</h4>
      <p className="font-medium text-lg leading-6">
        Для регулярных мероприятий выгоднее покупка шатра.  
        Для разовых событий — аренда: меньше затрат и полное сопровождение. 
        <span className="font-semibold"> MOBILE TENT</span> предоставляет обе опции и помогает выбрать оптимальное решение.
      </p>

      <h4 className="font-semibold text-xl leading-6">Почему выбирают MOBILE TENT?</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Широкий выбор мобильных шатров разных размеров</li>
        <li>Покупка и аренда на выгодных условиях</li>
        <li>Доставка в любой регион России</li>
        <li>Профессиональная консультация и сопровождение</li>
      </ul>

      <p className="font-medium text-lg leading-6">
        Свяжитесь с нами любым удобным способом:
      </p>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Напишите нам: <span className="font-semibold">sale6@mobile-tent.ru</span></li>
        <li>Оставьте заявку на звонок через форму на сайте</li>
      </ul>

      <p className="font-medium text-lg leading-6 text-[#527dc5]">
        Купите или арендуйте мобильный шатёр в <span className="font-semibold">MOBILE TENT</span> и создайте успешное мероприятие!  
        Мы быстро доставим, установим и проконсультируем по всем вопросам.
      </p>
    </div>
  );

  const RussianContentMobile = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-3">
      <h3 className="font-semibold text-lg leading-6">
        Мобильные шатры для выставок
      </h3>
      <p className="font-medium text-sm leading-5">
        Лёгкие, прочные и брендируемые конструкции для выставок и промоакций. 
        Быстрая установка, защита от погоды и стильный дизайн.
      </p>

      <h4 className="font-semibold text-base leading-5">Преимущества:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Мобильность и гибкость</li>
        <li>Надёжные материалы</li>
        <li>Возможность брендирования</li>
        <li>Аренда и покупка</li>
      </ul>

      <p className="font-medium text-sm leading-5">
        В <span className="font-semibold">MOBILE TENT</span> доступны шатры разных размеров.  
        Доставка по всей России, покупка и аренда под ваши задачи.
      </p>

      <p className="font-medium text-sm leading-5 text-[#527dc5]">
        Закажите мобильный шатёр прямо сейчас — сделайте выставку успешной!
      </p>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <section className="hidden md:block relative bottom-[90px]">
        <div className="flex flex-col items-start gap-9">
          <h2 className="w-fit relative font-semibold text-4xl [font-family:'Raleway',Helvetica]">
            <span className="text-[#527dc5]">Мобильные шатры</span>
            <span className="text-[#232c42]"> для выставок</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] to-[#3c6cec] text-white font-semibold text-lg"
          >
            Подобрать шатёр
          </Button>

          <RussianContentDesktop />
        </div>
      </section>

      {/* Mobile */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-xl font-semibold text-center w-full">
            <span className="text-[#527dc5]">Мобильные шатры</span>
            <span className="text-[#232c42]"> для выставок</span>
          </h2>

          <div className="w-full text-center">
            <Button
              variant="link"
              className="px-6 py-2 rounded-full bg-gradient-to-b from-[#73a8ff] to-[#3c6cec] text-white font-semibold text-sm"
            >
              Подобрать шатёр
            </Button>
          </div>

          <RussianContentMobile />
        </div>
      </section>
    </>
  );
};