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

  // 🟢 QUICK FILTER LINKS FOR ПАГОДА ШАТРЫ (SEO + GEO)
  const quickFilterLinks = [
    { title: "Пагода шатры 3x3 м", path: "/shatry-i-navesy/pagoda/3x3" },
    { title: "Пагода шатры 4x4 м", path: "/shatry-i-navesy/pagoda/4x4" },
    { title: "Пагода шатры 5x5 м", path: "/shatry-i-navesy/pagoda/5x5" },
    { title: "Пагода шатры 6x6 м", path: "/shatry-i-navesy/pagoda/6x6" },
    { title: "Пагода шатры 10x10 м", path: "/shatry-i-navesy/pagoda/10x10" },
    { title: "Пагода шатры 25 м²", path: "/shatry-i-navesy/pagoda/25m2" },
    { title: "Пагода шатры 100 м²", path: "/shatry-i-navesy/pagoda/100m2" },
    { title: "London пагода шатры", path: "/shatry-i-navesy/pagoda/london-tent" },
    { title: "Стандартные пагода шатры", path: "/shatry-i-navesy/pagoda/standart-tent" },
    { title: "Пагода шатры с остеклением", path: "/shatry-i-navesy/pagoda/s-ostekleniem" },
    { title: "Утепленные пагода шатры", path: "/shatry-i-navesy/pagoda/uteplennye" },
    { title: "Аренда пагода шатра", path: "/arenda/pagoda" },
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
      <section className="hidden md:block relative bottom-[50px] w-full">
        <div className="mx-auto max-w-[1440px] flex flex-col items-start gap-9 px-10">
          
          {/* Заголовок H2 (остаётся всегда) */}
          <h2 className="w-fit font-semibold text-4xl [font-family:'Raleway',Helvetica] leading-tight">
            <span className="text-[#527dc5]">Что такое</span>{" "}
            <span className="text-[#232c42]">пагода шатры и как они устроены?</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-lg"
          >
            Узнать о пагода шатрах
          </Button>

          {/* Dynamic content from CMS */}
          {cleanedDesktopContent ? (
            <div 
              className="w-full font-medium text-lg leading-7 text-[#394355] space-y-6 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-1 [&_h3]:font-semibold [&_h3]:text-2xl [&_h3]:mt-8"
              dangerouslySetInnerHTML={parseHtmlContent(cleanedDesktopContent)}
              suppressHydrationWarning
            />
          ) : (
            // Fallback static content – detailed for пагода шатры
            <div className="w-full font-medium text-lg leading-7 text-[#394355] space-y-6">
              <p>
                Пагода шатры — это элегантные и стильные конструкции, вдохновленные традиционной восточной архитектурой. 
                Они сочетают в себе изысканный дизайн с практичностью современных временных сооружений.
              </p>
              <p>
                Особенности конструкции пагода шатров включают:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><b>Многоярусную крышу</b> характерной изогнутой формы, создающую узнаваемый силуэт пагоды</li>
                <li><b>Прочный каркас</b> из алюминиевых или стальных профилей, обеспечивающий устойчивость</li>
                <li><b>Качественный тент</b> из ПВХ или полиэстера с защитой от ультрафиолета и влаги</li>
              </ul>
              <p>Пагода шатры легко монтируются и демонтируются, сохраняя при этом презентабельный внешний вид.</p>

              <h3 className="font-semibold text-2xl">Сферы применения</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Свадебные церемонии и торжественные мероприятия</li>
                <li>Фестивали и культурные события в восточном стиле</li>
                <li>Премиальные рестораны и кафе для создания уникальных летних площадок</li>
                <li>Корпоративные мероприятия и презентации премиум-класса</li>
                <li>Выставочные пространства и арт-инсталляции</li>
                <li>Отели и курорты для организации зон отдыха</li>
              </ul>

              <h3 className="font-semibold text-2xl">Преимущества пагода шатров</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><b>Эстетичность:</b> изысканный дизайн премиум-класса</li>
                <li><b>Узнаваемость:</b> уникальный архитектурный стиль</li>
                <li><b>Функциональность:</b> просторное внутреннее пространство</li>
                <li><b>Устойчивость:</b> надежная конструкция против ветровых нагрузок</li>
                <li><b>Универсальность:</b> подходят для мероприятий любого масштаба</li>
                <li><b>Брендирование:</b> идеальная поверхность для нанесения логотипов</li>
              </ul>

              <div className="p-5 rounded-xl bg-[#f6f8ff]">
                <p className="font-semibold">
                  Пагода шатры — это идеальное сочетание восточной эстетики и современной функциональности, 
                  создающее неповторимую атмосферу для ваших мероприятий.
                </p>
              </div>
            </div>
          )}

          {/* ✅ SEO QUICK FILTER LINKS SECTION - Desktop */}
          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 w-full">
            <h3 className="font-bold text-2xl text-[#232c42] mb-6 text-center [font-family:'Raleway',Helvetica]">
              Быстрый выбор пагода шатров по размерам и типам
            </h3>
            <p className="text-lg text-[#394355] mb-8 text-center">
              Выберите подкатегорию для просмотра конкретных моделей и характеристик
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
            Пагода шатры
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
              <p>Элегантные конструкции в восточном стиле с многоярусной крышей. Идеальны для премиальных мероприятий и создания уникального пространства.</p>
              <p>Прочный алюминиевый каркас, качественный ПВХ-тент. Быстрый монтаж, доставка по Москве, МО и всей России.</p>
            </div>
          )}

          {/* Mobile quick filter links */}
          <div className="mt-6 p-4 rounded-xl bg-blue-50 border border-blue-200">
            <h3 className="font-bold text-base text-[#232c42] mb-4 text-center">
              Пагода шатры – по размерам и типам
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {quickFilterLinks.slice(0, 8).map((link, index) => (
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