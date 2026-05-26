'use client';

import React from "react";
import { Button } from "../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  const RussianContentDesktop = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-4">
      <h3 className="font-semibold text-2xl leading-7">
        Надувные шатры для спорта: быстро, надёжно, функционально
      </h3>

      <p className="font-medium text-lg leading-6">
        Надувные спортивные шатры стремительно набирают популярность благодаря сочетанию
        мобильности, прочности и лёгкости установки. За минуты вы получаете готовое
        временное спортивное пространство — на открытом воздухе или в помещении.
      </p>

      <h4 className="font-semibold text-xl leading-6">Ключевые преимущества:</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li><span className="font-semibold">Мобильность и скорость:</span> установка за считанные минуты, оперативный демонтаж и перенос.</li>
        <li><span className="font-semibold">Прочность и всепогодность:</span> материалы выдерживают ветер, дождь и снег, защищая людей и оборудование.</li>
        <li><span className="font-semibold">Гибкость применения:</span> разные размеры, опции вентиляции, освещения, отопления и кондиционирования.</li>
        <li><span className="font-semibold">Экономичность:</span> альтернатива капитальному строительству; легко перевозится и переустанавливается.</li>
        <li><span className="font-semibold">Маркетинг:</span> место под логотипы и баннеры — дополнительная реклама для спонсоров.</li>
      </ul>

      <p className="font-medium text-lg leading-6">
        Итог: надувные шатры — практичное решение для тренировок, соревнований и фестивалей,
        обеспечивающее быстрое развертывание и комфорт круглый год.
      </p>

      <h4 className="font-semibold text-xl leading-6">Почему MOBILE TENT:</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li><span className="font-semibold">Высокое качество материалов:</span> долговечные ткани и ПВХ-композиты для суровой погоды.</li>
        <li><span className="font-semibold">Быстрая и простая установка:</span> минимум времени и ресурсов на сборку.</li>
        <li><span className="font-semibold">Широкий выбор и кастомизация:</span> размеры, дизайн, вентиляция, освещение, отопление.</li>
        <li><span className="font-semibold">Конкурентные цены:</span> лучшее соотношение цены и качества.</li>
        <li><span className="font-semibold">Профессиональная поддержка:</span> консультации, помощь с выбором и постпродажный сервис.</li>
        <li><span className="font-semibold">Гарантия и безопасность:</span> соответствие стандартам, официальная гарантия.</li>
      </ul>

      <p className="font-medium text-lg leading-6 text-[#527dc5]">
        Ищете надувной спортивный шатёр? Оставьте заявку — подберём конфигурацию под ваш формат мероприятий и сроки.
      </p>
    </div>
  );

  const RussianContentMobile = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-3">
      <h3 className="font-semibold text-lg leading-6">
        Надувные шатры для спорта
      </h3>
      <p className="font-medium text-sm leading-5">
        Быстрая установка, прочность и комфорт — решение для тренировок и соревнований в любую погоду.
      </p>

      <h4 className="font-semibold text-base leading-5">Плюсы:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Монтаж за минуты</li>
        <li>Всепогодная защита</li>
        <li>Размеры и опции под задачу</li>
        <li>Экономичнее капитального строительства</li>
        <li>Брендирование и реклама</li>
      </ul>

      <h4 className="font-semibold text-base leading-5">Почему MOBILE TENT:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Качественные материалы</li>
        <li>Простой монтаж/демонтаж</li>
        <li>Кастомные решения</li>
        <li>Выгодные цены</li>
        <li>Сервис и гарантия</li>
      </ul>

      <p className="font-medium text-sm leading-5 text-[#527dc5]">
        Оставьте заявку — соберём решение под ваш спорт и площадку.
      </p>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <section className="hidden md:block relative bottom-[90px]">
        <div className="flex flex-col items-start gap-9">
          <h2 className="w-fit relative font-semibold text-4xl [font-family:'Raleway',Helvetica]">
            <span className="text-[#527dc5]">Надувные шатры</span>
            <span className="text-[#232c42]"> для спорта</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] to-[#3c6cec] text-white font-semibold text-lg"
          >
            Узнать подробнее
          </Button>

          <RussianContentDesktop />
        </div>
      </section>

      {/* Mobile */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-xl font-semibold text-center w-full">
            <span className="text-[#527dc5]">Надувные шатры</span>
            <span className="text-[#232c42]"> для спорта</span>
          </h2>

          <div className="w-full text-center">
            <Button
              variant="link"
              className="px-6 py-2 rounded-full bg-gradient-to-b from-[#73a8ff] to-[#3c6cec] text-white font-semibold text-sm"
            >
              Узнать подробнее
            </Button>
          </div>

          <RussianContentMobile />
        </div>
      </section>
    </>
  );
};