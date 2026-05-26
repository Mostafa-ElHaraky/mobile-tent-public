'use client';

import React from "react";
import { Button } from "../../../../../../components/ui/button";
import type { ReactElement } from "react";
import Link from "next/link";

export const FrameShatry4 = (): ReactElement => {
  // Quick filter links data - all subcategories for zonty
  const quickFilterLinks = [
    { title: "Зонты 2x2", path: "/shatry-i-navesy/zonty/2x2" },
    { title: "Зонты 3m²", path: "/shatry-i-navesy/zonty/3m2" },
    { title: "Зонты 3x3", path: "/shatry-i-navesy/zonty/3x3" },
    { title: "Зонты 4x4", path: "/shatry-i-navesy/zonty/4x4" },
    { title: "Зонты 5x5", path: "/shatry-i-navesy/zonty/5x5" }
  ];

  return (
    <>
      {/* === Desktop version === */}
      <section className="hidden md:block relative bottom-[90px]">
        <div className="flex flex-col items-start gap-9 max-w-5xl [font-family:'Raleway',Helvetica]">
          <h2 className="w-fit font-semibold text-4xl leading-tight">
            <span className="text-[#527dc5]">Зонты для ресторанов и кафе</span>{" "}
            <span className="text-[#232c42]">— стиль, комфорт и защита на террасе</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-lg"
          >
            Узнать цену и сроки
          </Button>

          <div className="w-full font-medium text-lg leading-7 text-[#394355] space-y-6">
            <p>
              Зонты для ресторанов и кафе становятся неотъемлемой частью обстановки современных заведений. Эти стильные и
              функциональные конструкции не только защищают от внешних факторов, но и добавляют шарм и комфорт к
              обеденному или лаунж-пространству.
            </p>

            <h3 className="font-semibold text-2xl">Что это и зачем нужны уличные зонты?</h3>
            <p>
              Это специализированные конструкции для террас и внешних площадок, создающие уют и комфорт гостям. Они
              защищают от солнечных лучей, формируют приятный микроклимат и позволяют наслаждаться свежим воздухом в
              любую погоду.
            </p>

            <h3 className="font-semibold text-2xl">Размеры и конфигурации зонтов</h3>
            <p>
              Мы предлагаем зонты различных размеров для оптимального использования пространства:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><b>2x2 метра</b> - компактный вариант для небольших столиков или ограниченного пространства</li>
              <li><b>3m²</b> - стандартный размер для комфортного размещения 2-4 гостей</li>
              <li><b>3x3 метра</b> - просторный зонт для больших столов или групп гостей</li>
              <li><b>4x4 метра</b> - масштабное решение для просторных террас и ресторанных площадок</li>
              <li><b>5x5 метров</b> - максимальный размер для создания больших затененных зон</li>
            </ul>

            <h3 className="font-semibold text-2xl">Конструктивные особенности</h3>
            <p>
              Все зонты MOBILE TENT отличаются продуманной конструкцией и качественными материалами:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><b>Каркас:</b> прочный алюминиевый или стальной профиль с порошковым покрытием</li>
              <li><b>Ткань:</b> водоотталкивающая ПВХ-ткань с УФ-защитой</li>
              <li><b>Система открытия:</b> ручная, кривошипная или автоматическая</li>
              <li><b>Основание:</b> стационарное или мобильное с возможностью заполнения</li>
              <li><b>Дополнительные опции:</b> боковые стенки, освещение, подогрев</li>
            </ul>

            <h3 className="font-semibold text-2xl">Преимущества уличных зонтов</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><b>Стиль и эстетика:</b> подчёркивают атмосферу и визуальную привлекательность заведения.</li>
              <li><b>Защита от солнца и дождя:</b> надёжное укрытие для гостей.</li>
              <li><b>Комфортный микроклимат:</b> приятная температура даже в жаркие дни.</li>
              <li><b>Простая установка и обслуживание:</b> минимум времени и усилий.</li>
              <li><b>Мобильность и гибкость:</b> легко перемещать и перенастраивать под поток гостей.</li>
              <li><b>Притягательность для посетителей:</b> больше гостей выбирают открытую террасу.</li>
            </ul>

            <h3 className="font-semibold text-2xl">Сферы применения</h3>
            <p>
              Наши зонты идеально подходят для различных заведений и мероприятий:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><b>Рестораны и кафе</b> - создание комфортных летних террас</li>
              <li><b>Отели и курорты</b> - оборудование зон отдыха у бассейнов</li>
              <li><b>Частные резиденции</b> - организация уютных уголков в саду</li>
              <li><b>Пляжные клубы</b> - создание затененных зон для отдыха</li>
              <li><b>Корпоративные мероприятия</b> - временное оборудование открытых пространств</li>
            </ul>

            <h3 className="font-semibold text-2xl">Где заказать уличные зонты?</h3>
            <p>
              Ищете качество и профессионализм? Ваш выбор — <b>MOBILE TENT</b>. Мы предлагаем зонты для ресторанов и кафе,
              сочетающие элегантность и практичность.
            </p>

            <h3 className="font-semibold text-2xl">Почему MOBILE TENT</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><b>Инновационные технологии:</b> производство по современным стандартам.</li>
              <li><b>Широкий ассортимент:</b> дизайн, размеры и цвета на выбор.</li>
              <li><b>Гарантия качества:</b> строгий контроль и гарантийные обязательства.</li>
              <li><b>Индивидуальный подход:</b> решения под особенности площадки и бренда.</li>
              <li><b>Эко-материалы:</b> ориентир на устойчивое развитие.</li>
              <li><b>Комплексный сервис:</b> консультация, поставка, монтаж и сопровождение.</li>
            </ul>

            {/* ✅ NEW SEO QUICK FILTER LINKS SECTION - Desktop */}
            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200">
              <h3 className="font-bold text-2xl text-[#232c42] mb-6 text-center [font-family:'Raleway',Helvetica]">
                Быстрый выбор зонтов по размерам
              </h3>
              <p className="text-lg text-[#394355] mb-8 text-center">
                Выберите подкатегорию для просмотра конкретных моделей и характеристик
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                {quickFilterLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.path}
                    className="group flex items-center p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px] no-underline"
                    aria-label={`Перейти к ${link.title}`}
                    title={link.title}
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-blue-600 transition-colors"></div>
                    <span className="font-medium text-[#394355] text-sm group-hover:text-blue-600 transition-colors [font-family:'Raleway',Helvetica] leading-tight">
                      {link.title}
                    </span>
                  </Link>
                ))}
              </div>
              
              <div className="mt-6 text-center">
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#f6f8ff] space-y-2">
              <p className="font-semibold">
                Выбирая <b>MOBILE TENT</b>, вы инвестируете в функциональный и стильный элемент вашего пространства.
              </p>
              <p className="text-[#527dc5] font-semibold">
                Позвольте гостям наслаждаться атмосферой на открытом воздухе — мы поможем подобрать идеальные зонты.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Mobile version === */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4 [font-family:'Raleway',Helvetica]">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-center leading-tight">
            Зонты для ресторанов и кафе
          </h2>

          <Button
            variant="link"
            className="px-6 py-2 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-sm self-center"
          >
            Консультация и подбор
          </Button>

          <div className="font-medium text-sm leading-5 text-[#394355] text-justify space-y-4">
            <p>
              Стильные уличные зонты для террас: защита от солнца и дождя, комфортный микроклимат, мобильность и простое
              обслуживание.
            </p>

            <h3 className="font-semibold">Размеры</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>2x2 м - компактные</li>
              <li>3m² - стандартные</li>
              <li>3x3 м - просторные</li>
              <li>4x4 м - большие</li>
              <li>5x5 м - максимальные</li>
            </ul>

            <h3 className="font-semibold">Конструкция</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Алюминиевый/стальной каркас</li>
              <li>Водоотталкивающая ткань с УФ-защитой</li>
              <li>Разные системы открытия</li>
              <li>Стационарные или мобильные основания</li>
            </ul>

            <h3 className="font-semibold">Плюсы</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Эстетика и акцент на бренд</li>
              <li>Защита гостей от погоды</li>
              <li>Лёгкая установка и уход</li>
              <li>Гибкая расстановка на площадке</li>
            </ul>

            <h3 className="font-semibold">Где используются</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Рестораны и кафе</li>
              <li>Отели и курорты</li>
              <li>Частные резиденции</li>
              <li>Пляжные клубы</li>
              <li>Корпоративные мероприятия</li>
            </ul>

            <h3 className="font-semibold">Почему MOBILE TENT</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Современные технологии</li>
              <li>Большой выбор дизайнов</li>
              <li>Гарантия качества</li>
              <li>Индивидуальные решения</li>
              <li>Эко-материалы и комплексный сервис</li>
            </ul>

            {/* ✅ NEW SEO QUICK FILTER LINKS SECTION - Mobile */}
            <div className="mt-6 p-4 rounded-xl bg-blue-50 border border-blue-200">
              <h3 className="font-bold text-base text-[#232c42] mb-4 text-center">
                Зонты по размерам
              </h3>
              
              <div className="grid grid-cols-1 gap-3">
                {quickFilterLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.path}
                    className="flex items-center p-3 bg-white rounded-lg border border-gray-200 active:bg-blue-50 transition-colors no-underline"
                    aria-label={`Перейти к ${link.title}`}
                    title={link.title}
                  >
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                    <span className="font-medium text-[#394355] text-xs [font-family:'Raleway',Helvetica]">
                      {link.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-lg bg-[#f6f8ff] text-center">
              <p className="font-semibold">Оставьте заявку — подберём оптимальные зонты для вашей террасы.</p>
              <p className="text-[#527dc5] font-semibold">MOBILE TENT — стиль и практичность под ключ.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};