'use client';

import React from "react";
import { Button } from "../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  // Plain text renderer (no keyword highlighting needed)
  const renderParagraph = (text: string) => (
    <span className="text-[#394355]">{text}</span>
  );

  // === Desktop content ===
  const RussianContentDesktop = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-4">
      <h3 className="font-semibold text-2xl leading-7">Перголы от производителя!</h3>
      <p className="font-medium text-lg leading-6">
        Компания <span className="font-semibold">MOBILE TENT</span> рада предложить вам возможность
        заказать перголы в любых городах России и ближнего зарубежья. Наш опыт и производственные
        мощности позволяют предоставлять оптимальные условия продажи без участия посредников,
        гарантируя высокое качество и удовлетворение потребностей как частных, так и корпоративных
        клиентов.
      </p>

      <h4 className="font-semibold text-xl leading-6">Что такое пергола?</h4>
      <p className="font-medium text-lg leading-6">
        Пергола — это архитектурный элемент в виде открытой конструкции для создания тени и уюта
        в открытых пространствах. Она состоит из вертикальных стоек и перекрывающего элемента
        (каркаса, решётки или полотна). Перголы могут быть пристенными или автономными — в саду,
        на террасе, во дворе и других открытых местах.
      </p>

      <h4 className="font-semibold text-xl leading-6">Где применяют перголы?</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>
          <span className="font-semibold">Частные дома и коттеджи:</span> тень и уют на террасах,
          в садах и дворах — зона отдыха, обеденная группа, декоративный элемент ландшафта.
        </li>
        <li>
          <span className="font-semibold">Рестораны и кафе:</span> популярные открытые площадки
          с защитой от солнца и дождя для комфортного отдыха и приёма пищи.
        </li>
        <li>
          <span className="font-semibold">Террасы и бары:</span> оформление лаундж-зон и пул-баров,
          создание атмосферы отдыха на открытом воздухе.
        </li>
        <li>
          <span className="font-semibold">Коммерческие объекты:</span> укрытие клиентов на автомойках,
          СТО, шиномонтажах и т. п.; защита и комфорт от погодных условий.
        </li>
        <li>
          <span className="font-semibold">Выставочные площадки:</span> стенды и павильоны на ярмарках
          и событиях, защита от солнца и привлекательное пространство для презентаций.
        </li>
        <li>
          <span className="font-semibold">Гостиничные комплексы:</span> обустройство открытых зон отдыха,
          террас и беседок в загородных отелях и курортах.
        </li>
        <li>
          <span className="font-semibold">Ландшафтный дизайн:</span> структурирование частных участков,
          парков и садов — стиль, функция и гармония пространства.
        </li>
        <li>
          <span className="font-semibold">Мероприятия и свадьбы:</span> арки, аллеи и зоны церемоний
          для красивых событий на открытом воздухе.
        </li>
      </ul>
      <p className="font-medium text-lg leading-6">
        Обширная сфера применения пергол подчёркивает их универсальность и адаптивность под разные
        задачи и стили.
      </p>

      <h4 className="font-semibold text-xl leading-6">Где заказать перголы?</h4>
      <p className="font-medium text-lg leading-6">
        Для заказа пергол обращайтесь в <span className="font-semibold">MOBILE TENT</span>. Мы
        предлагаем выгодные условия и качественные изделия.
      </p>

      <h4 className="font-semibold text-xl leading-6">В чём преимущества заказа пергол у нас?</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>
          <span className="font-semibold">Производство без посредников:</span> собственные мощности
          обеспечивают лучшие условия покупки.
        </li>
        <li>
          <span className="font-semibold">Большой ассортимент:</span> одинарные и двойные формы,
          подвесные и на стойках; выбор размеров, цветов ткани и каркаса; комплектации с освещением,
          складным механизмом и автоматикой.
        </li>
        <li>
          <span className="font-semibold">Индивидуальные проекты:</span> разработаем перголу под ваши
          требования, если в каталоге нет подходящей модели.
        </li>
        <li>
          <span className="font-semibold">Надёжность и качество:</span> износостойкость, ветроустойчивость,
          пожаробезопасность; лучшие материалы и современные технологии производства.
        </li>
        <li>
          <span className="font-semibold">Удобство монтажа и транспортировки:</span> простая установка,
          возможность поставки в собранном виде.
        </li>
        <li>
          <span className="font-semibold">Гарантийные обязательства:</span> предоставляем гарантии на материалы
          и готовую продукцию.
        </li>
      </ul>
    </div>
  );

  // === Mobile content ===
  const RussianContentMobile = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-3">
      <h3 className="font-semibold text-lg leading-6">Перголы от производителя!</h3>
      <p className="font-medium text-sm leading-5">
        <span className="font-semibold">MOBILE TENT</span> — поставка пергол по всей России и СНГ.
        Прямое производство без посредников, высокое качество для частных и корпоративных клиентов.
      </p>

      <h4 className="font-semibold text-base leading-5">Что такое пергола?</h4>
      <p className="font-medium text-sm leading-5">
        Открытая конструкция на стойках с перекрывающим элементом (каркас, решётка или полотно) для
        тени и уюта. Может быть пристенной или автономной: сад, терраса, двор и др.
      </p>

      <h4 className="font-semibold text-base leading-5">Где применяют перголы?</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Частные дома: террасы, сады, зоны отдыха.</li>
        <li>Рестораны/кафе: открытые площадки с защитой от погоды.</li>
        <li>Террасы и бары: лаундж и пул-бары.</li>
        <li>Коммерция: автомойки, СТО, шиномонтажи.</li>
        <li>Выставки: стенды/павильоны.</li>
        <li>Отели: зоны отдыха, беседки.</li>
        <li>Ландшафт: парки и сады.</li>
        <li>События: свадьбы, церемонии.</li>
      </ul>
      <p className="font-medium text-sm leading-5">
        Перголы универсальны и легко адаптируются под стиль и задачи.
      </p>

      <h4 className="font-semibold text-base leading-5">Почему MOBILE TENT?</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Собственное производство, без посредников.</li>
        <li>Модели: одинарные/двойные, подвесные/на стойках; выбор размеров и цветов.</li>
        <li>Опции: освещение, складной механизм, автоматика.</li>
        <li>Индивидуальные проекты под задачу.</li>
        <li>Качество: износостойкость, ветер, пожаробезопасность.</li>
        <li>Удобный монтаж и транспортировка.</li>
        <li>Гарантия на материалы и изделия.</li>
      </ul>
    </div>
  );

  return (
    <>
      {/* Desktop version */}
      <section className="hidden md:block relative bottom-[90px]">
        <div className="flex flex-col items-start gap-9">
          <h2 className="w-fit relative [font-family:'Raleway',Helvetica] font-semibold text-4xl leading-[normal]">
            <span className="text-[#527dc5]">Перголы</span>{" "}
            <span className="text-[#232c42]">от MOBILE TENT</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-lg"
          >
            Узнать о перголах больше
          </Button>

          <div className="w-full font-medium text-lg leading-6">
            {renderParagraph("Перголы — стильное и функциональное решение для открытых пространств.")}
          </div>

          <RussianContentDesktop />
        </div>
      </section>

      {/* Mobile version */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-xl font-semibold text-center w-full">
            <span className="text-[#527dc5]">Перголы</span>{" "}
            <span className="text-[#232c42]">от MOBILE TENT</span>
          </h2>

          <div className="w-full text-center">
            <Button
              variant="link"
              className="px-6 py-2 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-sm"
            >
              Узнать о перголах больше
            </Button>
          </div>

          <div className="w-full font-medium text-sm leading-5 text-[#394355] text-justify">
            {renderParagraph("Перголы — универсальны, эстетичны и долговечны.")}
          </div>

          <RussianContentMobile />
        </div>
      </section>
    </>
  );
};
