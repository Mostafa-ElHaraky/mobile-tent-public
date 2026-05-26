'use client';

import React, { useEffect, useState } from "react";
import { Button } from "../../../../../../components/ui/button";
import { ReactElement } from "react";
import Link from "next/link";

interface FrameShatry4Props {
  desktopContent?: string;
  mobileContent?: string;
}

const cleanHtmlForHydration = (html: string): string => {
  if (!html) return '';
  return html
    .replace(/className=/gi, 'class=')
    .replace(/\r\n/g, '\n')
    .replace(/\s+/g, ' ')
    .trim();
};

export const FrameShatry4 = ({ desktopContent, mobileContent }: FrameShatry4Props): ReactElement => {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const cleanedDesktopContent = desktopContent ? cleanHtmlForHydration(desktopContent) : '';
  const cleanedMobileContent = mobileContent ? cleanHtmlForHydration(mobileContent) : '';

  const quickFilterLinks = [
    { title: "Мобильные шатры 4x8", path: "/shatry-i-navesy/mobilnye/4x8" },
    { title: "Мобильные шатры 6x6", path: "/shatry-i-navesy/mobilnye/6x6" },
    { title: "Мобильные шатры 8x8", path: "/shatry-i-navesy/mobilnye/8x8" },
    { title: "Мобильные шатры 10x10", path: "/shatry-i-navesy/mobilnye/10x10" },
    { title: "Hard Tent мобильные шатры", path: "/shatry-i-navesy/mobilnye/hard-tent" },
    { title: "Premium мобильные шатры", path: "/shatry-i-navesy/mobilnye/premium-tent" },
    { title: "Professional мобильные шатры", path: "/shatry-i-navesy/mobilnye/professional-tent" },
    { title: "Slim Prof мобильные шатры", path: "/shatry-i-navesy/mobilnye/slim-prof" },
  ];

  if (!isClient) {
    // Skeleton loading
    return (
      <>
        <section className="hidden md:block relative bottom-[80px] w-full">
          <div className="mx-auto max-w-[1440px] flex flex-col items-start gap-9 px-10">
            <div className="w-full font-medium text-lg leading-7 text-[#394355] space-y-6">
              <div className="h-6 bg-gray-200 animate-pulse rounded"></div>
              <div className="h-6 bg-gray-200 animate-pulse rounded w-3/4"></div>
              <div className="h-6 bg-gray-200 animate-pulse rounded w-2/3"></div>
            </div>
          </div>
        </section>
        <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4">
          <div className="flex flex-col gap-4">
            <div className="h-5 bg-gray-200 animate-pulse rounded w-3/4 mx-auto"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 animate-pulse rounded"></div>
              <div className="h-4 bg-gray-200 animate-pulse rounded w-5/6"></div>
            </div>
          </div>
        </section>
      </>
    );
  }

  const parseHtmlContent = (content: string) => ({ __html: content });

  return (
    <>
      {/* === DESKTOP VERSION === */}
      <section className="hidden md:block relative bottom-[90px] w-full">
        <div className="mx-auto max-w-[1440px] flex flex-col items-start gap-9 px-10">
          
          {/* Заголовок H2 */}
          <h2 className="w-fit font-semibold text-4xl [font-family:'Raleway',Helvetica] leading-tight">
            <span className="text-[#527dc5]">Что такое</span>{" "}
            <span className="text-[#232c42]">мобильные шатры?</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-lg"
          >
            Узнать о мобильных шатрах
          </Button>

          {/* Dynamic content from CMS */}
          {cleanedDesktopContent ? (
            <div 
              className="w-full font-medium text-lg leading-7 text-[#394355] space-y-6 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-1 [&_h3]:font-semibold [&_h3]:text-2xl [&_h3]:mt-8"
              dangerouslySetInnerHTML={parseHtmlContent(cleanedDesktopContent)}
              suppressHydrationWarning
            />
          ) : (
            // Fallback static content – detailed for мобильные шатры
            <div className="w-full font-medium text-lg leading-7 text-[#394355] space-y-6">
              <p>
                Мобильные шатры — это портативные лёгкие конструкции, которые можно быстро собрать, разобрать и
                перемещать между площадками. Прочный каркас (алюминий, сталь и др.) и водонепроницаемое покрытие
                обеспечивают защиту от погодных условий.
              </p>

              <h3 className="font-semibold text-2xl">Где применяются мобильные шатры?</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Мероприятия и фестивали: стенды, сцены, точки продаж.</li>
                <li>Рестораны и кафе: расширение летних посадочных зон.</li>
                <li>Туризм и отдых: кемпинги, пикники, пляжи.</li>
                <li>Спорт: временные раздевалки и пункты обслуживания.</li>
                <li>Свадьбы и торжества: церемонии и приёмы гостей.</li>
                <li>Торговые точки: временные павильоны и бутики.</li>
                <li>Стройки: офисы, столовые, зоны отдыха рабочих.</li>
                <li>Санатории/отели: временные зоны отдыха и анимации.</li>
                <li>Яхт-клубы: барные/лаундж-зоны на берегу.</li>
                <li>Экстренные ситуации: штабы, пункты помощи, приюты.</li>
              </ul>

              <h3 className="font-semibold text-2xl">Преимущества продукции MOBILE TENT</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><b>Разнообразие размеров:</b> под любые задачи и сценарии.</li>
                <li><b>Три линейки:</b> Prof, Hard Prof, Slim Prof — под требования и бюджет.</li>
                <li><b>Индивидуальное проектирование:</b> раскладные тенты нужного размера, проекты «под ключ».</li>
                <li><b>Брендирование:</b> нанесение логотипов и фирменной графики.</li>
                <li><b>Европейские материалы:</b> Mehler, Dickson, Serge Ferrari — сертифицированное качество.</li>
                <li><b>Защита и безопасность:</b> устойчивость к микроорганизмам и плесени, негорючие ткани.</li>
                <li><b>Прочность и долговечность:</b> двойные швы, утяжелители, крепление оснований, ветроустойчивость до 24 м/с, гарантия 5 лет.</li>
                <li><b>Быстрый монтаж:</b> обучённые бригады обеспечивают оперативную установку.</li>
                <li><b>Собственное производство:</b> сроки и соответствие стандартам строительства.</li>
                <li><b>Широкая область применения:</b> HoReCa, ивенты, туризм, стройка и др.</li>
                <li><b>Допуслуги:</b> доставка, установка, брендирование, свет/звук/декор и др.</li>
              </ul>

              <div className="p-5 rounded-xl bg-[#f6f8ff]">
                <p className="font-semibold">
                  Совокупность этих преимуществ делает мобильные шатры MOBILE TENT надёжным выбором для любых
                  задач, где требуется быстрое и качественное решение.
                </p>
              </div>
            </div>
          )}

          {/* ✅ SEO QUICK FILTER LINKS SECTION - Desktop */}
          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 w-full">
            <h3 className="font-bold text-2xl text-[#232c42] mb-6 text-center [font-family:'Raleway',Helvetica]">
              Быстрый выбор мобильных шатров по типам и размерам
            </h3>
            <p className="text-lg text-[#394355] mb-8 text-center">
              Выберите подкатегорию для просмотра конкретных моделей и характеристик
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickFilterLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.path}
                  className="group flex items-center p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px] no-underline"
                  aria-label={`Перейти к ${link.title}`}
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-blue-600 transition-colors"></div>
                  <span className="font-medium text-[#394355] text-sm group-hover:text-blue-600 transition-colors [font-family:'Raleway',Helvetica] leading-tight">
                    {link.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === MOBILE VERSION === */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-center leading-tight">
            Мобильные шатры
          </h2>

          <Button
            variant="link"
            className="px-6 py-2 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-sm self-center"
          >
            Подробнее
          </Button>

          {cleanedMobileContent ? (
            <div 
              className="font-medium text-sm leading-5 text-[#394355] text-justify space-y-4 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mb-1"
              dangerouslySetInnerHTML={parseHtmlContent(cleanedMobileContent)}
              suppressHydrationWarning
            />
          ) : (
            <div className="font-medium text-sm leading-5 text-[#394355] text-justify space-y-4">
              <p>
                Портативные конструкции с прочным каркасом и водонепроницаемым тентом. Быстро собираются/разбираются и
                защищают от непогоды.
              </p>
              <p>Три линейки: Prof, Hard Prof, Slim Prof. Доставка по Москве, МО и всей России. Гарантия 5 лет.</p>
            </div>
          )}

          {/* Mobile quick filter links */}
          <div className="mt-6 p-4 rounded-xl bg-blue-50 border border-blue-200">
            <h3 className="font-bold text-base text-[#232c42] mb-4 text-center">
              Типы мобильных шатров
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {quickFilterLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.path}
                  className="flex items-center p-3 bg-white rounded-lg border border-gray-200 active:bg-blue-50 transition-colors no-underline"
                  aria-label={`Перейти к ${link.title}`}
                >
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                  <span className="font-medium text-[#394355] text-xs [font-family:'Raleway',Helvetica]">
                    {link.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};