'use client';

import React, { useEffect, useState } from "react";
import { Button } from "../../../../../../components/ui/button";
import { ReactElement } from "react";
import Link from "next/link";

// Define props interface for dynamic content
interface FrameShatry4Props {
  desktopContent?: string;
  mobileContent?: string;
  quickFilterLinks?: Array<{ title: string; path: string }>;
  sectionTitle?: string;
}

// Function to clean HTML and fix hydration issues
const cleanHtmlForHydration = (html: string): string => {
  if (!html) return '';
  
  return html
    .replace(/className=/gi, 'class=')
    .replace(/\r\n/g, '\n')
    .replace(/\s+/g, ' ')
    .trim();
};

export const FrameShatry4 = ({ 
  desktopContent, 
  mobileContent,
  quickFilterLinks = [],
  sectionTitle = ''
}: FrameShatry4Props): ReactElement => {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Convert section title to genitive case (родительный падеж)
  const getGenitiveTitle = (title: string): string => {
    if (title === "Арочные шатры") {
      return "арочных шатров";
    } else if (title === "Шатры-пагоды" || title === "Пагода") {
      return "шатров-пагод";
    } else if (title === "Мобильные шатры" || title === "Мобильные") {
      return "мобильных шатров";
    } else if (title === "Шестигранные шатры" || title === "Шестигранные") {
      return "шестигранных шатров";
    } else if (title === "Купольные шатры" || title === "Купольные") {
      return "купольных шатров";
    } else if (title === "Глэмпинг") {
      return "глэмпингов";
    } else if (title === "Надувные") {
      return "надувных шатров";
    } else {
      return title.toLowerCase();
    }
  };
  
  // Generate dynamic title text based on sectionTitle
  const getTitleText = () => {
    if (sectionTitle) {
      const genitive = getGenitiveTitle(sectionTitle);
      return `Быстрый выбор ${genitive} по размерам и типам`;
    }
    return "Быстрый выбор арочных шатров по размерам и типам";
  };
  
  const getMobileTitleText = () => {
    if (sectionTitle) {
      return `${sectionTitle} по размерам`;
    }
    return "Арочные шатры по размерам";
  };
  
  const getSubtitleText = () => {
    if (sectionTitle) {
      const genitive = getGenitiveTitle(sectionTitle);
      return `Выберите подкатегорию для просмотра конкретных моделей ${genitive}`;
    }
    return "Выберите подкатегорию для просмотра конкретных моделей и цен";
  };
  
  // Default quick filter links (fallback for Арочные шатры)
  const defaultQuickFilterLinks = [
    { title: "Арочные шатры 3.5x3.5", path: "/shatry-i-navesy/arochnye/3.5x3.5" },
    { title: "Арочные шатры 5x5", path: "/shatry-i-navesy/arochnye/5x5" },
    { title: "Арочные шатры 6x3", path: "/shatry-i-navesy/arochnye/6x3" },
    { title: "Арочные шатры 8x8", path: "/shatry-i-navesy/arochnye/8x8" },
    { title: "Арочные шатры 10x3", path: "/shatry-i-navesy/arochnye/10x3" },
    { title: "Арочные шатры 10x10", path: "/shatry-i-navesy/arochnye/10x10" },
    { title: "Арочные шатры 16x16", path: "/shatry-i-navesy/arochnye/16x16" },
    { title: "Арочные шатры 20x20", path: "/shatry-i-navesy/arochnye/20x20" },
    { title: "Арочные шатры 25m²", path: "/shatry-i-navesy/arochnye/25m2" },
    { title: "Арочные шатры 36m²", path: "/shatry-i-navesy/arochnye/36m2" },
    { title: "Арочные шатры 64m²", path: "/shatry-i-navesy/arochnye/64m2" },
    { title: "Арочные шатры 100m²", path: "/shatry-i-navesy/arochnye/100m2" },
    { title: "Актогональные арочные шатры", path: "/shatry-i-navesy/arochnye/aktogonal-arochnye" },
    { title: "Гексогональные арочные шатры", path: "/shatry-i-navesy/arochnye/geksogonal-arochnye" },
    { title: "Стандартные арочные шатры", path: "/shatry-i-navesy/arochnye/standart-arochnye" },
    { title: "Усиленные арочные шатры", path: "/shatry-i-navesy/arochnye/ucilenie-arochnye" }
  ];

  // Use provided links or fallback to defaults
  const links = quickFilterLinks.length > 0 ? quickFilterLinks : defaultQuickFilterLinks;

  // Clean HTML content to prevent hydration errors
  const cleanedDesktopContent = desktopContent ? cleanHtmlForHydration(desktopContent) : '';
  const cleanedMobileContent = mobileContent ? cleanHtmlForHydration(mobileContent) : '';

  // Don't render dynamic content on server to avoid hydration mismatch
  if (!isClient) {
    return (
      <>
        {/* Desktop Version - Skeleton */}
        <section className="hidden md:block relative bottom-[80px] w-full">
          <div className="mx-auto max-w-[1440px] flex flex-col items-start gap-9 px-10">
            <div className="w-full font-medium text-lg leading-7 text-[#394355] space-y-6">
              <div className="h-6 bg-gray-200 animate-pulse rounded"></div>
              <div className="h-6 bg-gray-200 animate-pulse rounded w-3/4"></div>
              <div className="h-6 bg-gray-200 animate-pulse rounded w-2/3"></div>
            </div>
          </div>
        </section>

        {/* Mobile Version - Skeleton */}
        <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4">
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold text-center leading-tight">
              {sectionTitle || "Арочные шатры"}
            </h2>

            <div className="font-medium text-sm leading-5 text-[#394355] text-justify space-y-4">
              <div className="h-4 bg-gray-200 animate-pulse rounded"></div>
              <div className="h-4 bg-gray-200 animate-pulse rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 animate-pulse rounded w-4/5"></div>
            </div>
          </div>
        </section>
      </>
    );
  }

  // Parse HTML content safely
  const parseHtmlContent = (content: string) => {
    return { __html: content };
  };

  // Client-side rendering - safe for dynamic HTML
  return (
    <>
      {/* === Desktop version === */}
      <section className="hidden md:block relative bottom-[80px] w-full">
        <div className="mx-auto max-w-[1440px] flex flex-col items-start gap-9 px-10">
          {/* Dynamic content from CMS */}
          {cleanedDesktopContent ? (
            <div 
              className="w-full font-medium text-lg leading-7 text-[#394355] space-y-6 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-1 [&_h3]:font-semibold [&_h3]:text-2xl [&_h3]:mt-8"
              dangerouslySetInnerHTML={parseHtmlContent(cleanedDesktopContent)}
              suppressHydrationWarning
            />
          ) : (
            <div className="w-full font-medium text-lg leading-7 text-[#394355] space-y-6">
              <p>
                Сборно-разборные арочные шатры — это усовершенствованный и увеличенный вариант
                сводчатого строения: временные сооружения, предназначенные для защиты от непогоды
                и создания комфортных условий для людей, отдыхающих или работающих вне капитальных зданий.
              </p>
            </div>
          )}

          {/* ✅ SEO QUICK FILTER LINKS SECTION - Desktop */}
          {links.length > 0 && (
            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200">
              <h3 className="font-bold text-2xl text-[#232c42] mb-6 text-center [font-family:'Raleway',Helvetica]">
                {getTitleText()}
              </h3>
              <p className="text-lg text-[#394355] mb-8 text-center">
                {getSubtitleText()}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {links.map((link, index) => (
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
            </div>
          )}
        </div>
      </section>

      {/* === Mobile version === */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-center leading-tight">
            {sectionTitle || "Арочные шатры"}
          </h2>
          {/* Dynamic content from CMS */}
          {cleanedMobileContent ? (
            <div 
              className="font-medium text-sm leading-5 text-[#394355] text-justify space-y-4 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mb-1"
              dangerouslySetInnerHTML={parseHtmlContent(cleanedMobileContent)}
              suppressHydrationWarning
            />
          ) : (
            <div className="font-medium text-sm leading-5 text-[#394355] text-justify space-y-4">
              <p>
                Временные сводчатые сооружения с арочным каркасом и ПВХ-тентом. Быстро собираются,
                не требуют фундамента и защищают от непогоды.
              </p>
            </div>
          )}

          {/* ✅ SEO QUICK FILTER LINKS SECTION - Mobile */}
          {links.length > 0 && (
            <div className="mt-6 p-4 rounded-xl bg-blue-50 border border-blue-200">
              <h3 className="font-bold text-base text-[#232c42] mb-4 text-center">
                {getMobileTitleText()}
              </h3>
              
              <div className="grid grid-cols-1 gap-3">
                {links.map((link, index) => (
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
          )}
        </div>
      </section>
    </>
  );
};