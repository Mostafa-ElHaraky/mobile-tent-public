'use client';

import React from "react";
import { Button } from "../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  const RussianContentDesktop = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-4">
      <h3 className="font-semibold text-2xl leading-7">
        Классические шатры для выставок: гид по выбору и покупке
      </h3>
      <p className="font-medium text-lg leading-6">
        В мире деловых мероприятий и корпоративных праздников важно создать атмосферу, которая подчеркнет значимость события. 
        Классические шатры для выставок – отличный способ выделить ваше мероприятие, будь то презентация, корпоратив или частное торжество.
      </p>

      <p className="font-medium text-lg leading-6">
        Классические шатры – это временные конструкции из каркаса и тентового покрытия (ПВХ или полиэстер), 
        предназначенные для проведения мероприятий на открытом воздухе. Их основное назначение – создание защищённого и комфортного пространства.
      </p>

      <h4 className="font-semibold text-xl leading-6">Основные задачи шатров</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Защита от погодных условий – дождя, ветра и солнца.</li>
        <li>Создание функциональных зон для общения, демонстраций и отдыха.</li>
        <li>Привлечение внимания – стильный и элегантный внешний вид.</li>
      </ul>

      <h4 className="font-semibold text-xl leading-6">Где применяются классические шатры</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li><span className="font-semibold">Корпоративные мероприятия:</span> конференции, семинары, тимбилдинги, вечеринки.</li>
        <li><span className="font-semibold">Презентации и выставки:</span> размещение экспонатов, благоприятные условия для общения.</li>
        <li><span className="font-semibold">Частные торжества:</span> свадьбы, юбилеи, дни рождения.</li>
      </ul>

      <h4 className="font-semibold text-xl leading-6">Преимущества классических шатров</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Мобильность и простота установки</li>
        <li>Прочность и устойчивость</li>
        <li>Надёжная защита от непогоды</li>
        <li>Возможность персонализации и декора</li>
      </ul>

      <h4 className="font-semibold text-xl leading-6">Как выбрать шатёр</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li><span className="font-semibold">Размер:</span> в зависимости от масштаба и числа участников.</li>
        <li><span className="font-semibold">Материалы:</span> прочный каркас, водонепроницаемое покрытие.</li>
        <li><span className="font-semibold">Дополнительные элементы:</span> окна, двери, освещение, полы, обогреватели.</li>
      </ul>

      <p className="font-medium text-lg leading-6">
        На <span className="font-semibold">MOBILE TENT</span> вы найдёте широкий ассортимент классических шатров для выставок. 
        Доступны варианты аренды и покупки: аренда – экономична для разовых мероприятий, покупка – выгодна при регулярном использовании.
      </p>

      <p className="font-medium text-lg leading-6 text-[#527dc5]">
        Сделайте ваше мероприятие запоминающимся — купите или арендуйте классические шатры для выставок в 
        <span className="font-semibold"> MOBILE TENT</span>. Мы обеспечим защиту от непогоды, уют и стильную атмосферу!
      </p>
    </div>
  );

  const RussianContentMobile = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-3">
      <h3 className="font-semibold text-lg leading-6">
        Классические шатры для выставок
      </h3>
      <p className="font-medium text-sm leading-5">
        Универсальные конструкции для выставок, презентаций, корпоративов и частных торжеств. 
        Обеспечивают защиту от непогоды и создают стильное пространство.
      </p>

      <h4 className="font-semibold text-base leading-5">Преимущества:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Мобильность и простая установка</li>
        <li>Прочность и устойчивость</li>
        <li>Надёжная защита</li>
        <li>Покупка и аренда</li>
      </ul>

      <p className="font-medium text-sm leading-5">
        В <span className="font-semibold">MOBILE TENT</span> вы можете купить или арендовать классические шатры разных размеров и конфигураций. 
        Отличное решение для вашего мероприятия!
      </p>

      <p className="font-medium text-sm leading-5 text-[#527dc5]">
        Закажите классический шатёр уже сегодня — подчеркните значимость вашего события!
      </p>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <section className="hidden md:block relative bottom-[90px]">
        <div className="flex flex-col items-start gap-9">
          <h2 className="w-fit relative font-semibold text-4xl [font-family:'Raleway',Helvetica]">
            <span className="text-[#527dc5]">Классические шатры</span>
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
            <span className="text-[#527dc5]">Классические шатры</span>
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