'use client';

import React from "react";
import { Button } from "../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  const RussianContentDesktop = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-4">
      <h3 className="font-semibold text-2xl leading-7">
        Уличные зонты для праздников
      </h3>
      <p className="font-medium text-lg leading-6">
        Организация праздников на открытом воздухе – это всегда особое мероприятие, требующее тщательной подготовки. 
        Одним из ключевых элементов такого мероприятия является выбор <span className="font-semibold">уличных зонтов</span> для праздников.
      </p>

      <h4 className="font-semibold text-xl leading-6">Зонты уличные: устройство и предназначение</h4>
      <p className="font-medium text-lg leading-6">
        Зонты уличные предназначены для создания тени и защиты от непогоды на открытых площадках. 
        Они обеспечивают комфорт для гостей, защищая от солнца, дождя и ветра.
      </p>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li><span className="font-semibold">Купол:</span> из полиэстера или акрила, водонепроницаемый.</li>
        <li><span className="font-semibold">Каркас:</span> металлический или деревянный.</li>
        <li><span className="font-semibold">Подставка:</span> прочное основание для устойчивости.</li>
      </ul>

      <h4 className="font-semibold text-xl leading-6">Где используют уличные зонты</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Свадьбы – уютные теневые зоны и защита от солнца/дождя.</li>
        <li>Юбилеи и дни рождения – комфорт и зоны отдыха.</li>
        <li>Корпоративные мероприятия – переговорные и презентационные зоны.</li>
        <li>Выставки и презентации – защита экспонатов и участников.</li>
        <li>Пикники и барбекю – уют и комфорт на природе.</li>
      </ul>

      <h4 className="font-semibold text-xl leading-6">Виды зонтов</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li><span className="font-semibold">Стандартные:</span> классическая форма, простота эксплуатации.</li>
        <li><span className="font-semibold">Телескопические:</span> удобное открытие/закрытие без перемещения.</li>
        <li><span className="font-semibold">Консольные:</span> опора сбоку, максимум полезного пространства.</li>
      </ul>

      <h4 className="font-semibold text-xl leading-6">Преимущества уличных зонтов</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Защита от солнца и дождя</li>
        <li>Мобильность и лёгкость монтажа</li>
        <li>Разнообразие дизайнов</li>
        <li>Универсальность для любых мероприятий</li>
      </ul>

      <p className="font-medium text-lg leading-6">
        Продукция <span className="font-semibold">MOBILE TENT</span> изготавливается из качественных материалов: 
        плотная ткань ПВХ, каркас из стали или алюминия, возможность брендирования и декора. 
        Установка занимает всего 10 минут, конструкции можно легко перемещать.
      </p>

      <h4 className="font-semibold text-xl leading-6">Где купить уличные зонты для торжеств</h4>
      <p className="font-medium text-lg leading-6">
        На сайте <span className="font-semibold">MOBILE TENT</span> вы можете купить или арендовать уличные зонты. 
        Аренда — отличное решение для разовых мероприятий: экономия средств, отсутствие забот о хранении, гибкие условия и профессиональный монтаж. 
        Для регулярных событий — выгодна покупка: вы получаете собственное оборудование высокого качества.
      </p>

      <p className="font-medium text-lg leading-6 text-[#527dc5]">
        Сделайте ваш праздник комфортным и незабываемым — закажите уличные зонты в <span className="font-semibold">MOBILE TENT</span> прямо сейчас!
      </p>
    </div>
  );

  const RussianContentMobile = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-3">
      <h3 className="font-semibold text-lg leading-6">
        Уличные зонты для праздников
      </h3>
      <p className="font-medium text-sm leading-5">
        Удобные и стильные конструкции для защиты от солнца и дождя. 
        Подходят для свадеб, юбилеев, корпоративов и пикников.
      </p>

      <h4 className="font-semibold text-base leading-5">Преимущества:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Быстрая установка</li>
        <li>Защита в любую погоду</li>
        <li>Разные дизайны и размеры</li>
        <li>Покупка и аренда</li>
      </ul>

      <p className="font-medium text-sm leading-5">
        Компания <span className="font-semibold">MOBILE TENT</span> предлагает стандартные, телескопические и консольные зонты. 
        Доступна аренда и покупка под любые события.
      </p>

      <p className="font-medium text-sm leading-5 text-[#527dc5]">
        Закажите уличные зонты для праздника — комфорт и стиль гарантированы!
      </p>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <section className="hidden md:block relative bottom-[90px]">
        <div className="flex flex-col items-start gap-9">
          <h2 className="w-fit relative font-semibold text-4xl [font-family:'Raleway',Helvetica]">
            <span className="text-[#527dc5]">Уличные зонты</span>
            <span className="text-[#232c42]"> для праздников</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] to-[#3c6cec] text-white font-semibold text-lg"
          >
            Подобрать зонт
          </Button>

          <RussianContentDesktop />
        </div>
      </section>

      {/* Mobile */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-xl font-semibold text-center w-full">
            <span className="text-[#527dc5]">Уличные зонты</span>
            <span className="text-[#232c42]"> для праздников</span>
          </h2>

          <div className="w-full text-center">
            <Button
              variant="link"
              className="px-6 py-2 rounded-full bg-gradient-to-b from-[#73a8ff] to-[#3c6cec] text-white font-semibold text-sm"
            >
              Подобрать зонт
            </Button>
          </div>

          <RussianContentMobile />
        </div>
      </section>
    </>
  );
};