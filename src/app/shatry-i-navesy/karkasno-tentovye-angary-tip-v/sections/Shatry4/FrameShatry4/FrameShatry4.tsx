'use client';

import React, { useEffect, useState } from "react";
import { ReactElement } from "react";

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

export const FrameShatry4 = ({ 
  desktopContent, 
  mobileContent 
}: FrameShatry4Props): ReactElement => {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const cleanedDesktopContent = desktopContent ? cleanHtmlForHydration(desktopContent) : '';
  const cleanedMobileContent = mobileContent ? cleanHtmlForHydration(mobileContent) : '';

  // Server-side skeleton (no hydration errors)
  if (!isClient) {
    return (
      <>
        {/* Desktop Skeleton */}
        <section className="hidden md:block relative bottom-[90px] w-full">
          <div className="mx-auto max-w-[1440px] flex flex-col items-start gap-9 px-10">
            <h2 className="w-fit font-semibold text-4xl [font-family:'Raleway',Helvetica] leading-tight text-[#232c42]">
              Каркасные тентовые ангары тип В <span className="text-[#527dc5]">MOBILE TENT</span>
            </h2>
            <div className="w-full font-medium text-lg leading-7 text-[#394355] space-y-6">
              <div className="h-6 bg-gray-200 animate-pulse rounded"></div>
              <div className="h-6 bg-gray-200 animate-pulse rounded w-3/4"></div>
              <div className="h-6 bg-gray-200 animate-pulse rounded w-2/3"></div>
            </div>
          </div>
        </section>

        {/* Mobile Skeleton */}
        <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4">
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold text-center leading-tight">
              Каркасные тентовые ангары тип В
            </h2>
            <div className="px-6 py-2 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-sm self-center">
              Подробнее
            </div>
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

  const parseHtmlContent = (content: string) => ({ __html: content });

  // Client-side rendering
  return (
    <>
      {/* Desktop version */}
      <section className="hidden md:block relative bottom-[90px] w-full">
        <div className="mx-auto max-w-[1440px] flex flex-col items-start gap-9 px-10">
          <h2 className="w-fit font-semibold text-4xl [font-family:'Raleway',Helvetica] leading-tight text-[#232c42]">
            Каркасные тентовые ангары тип В <span className="text-[#527dc5]">MOBILE TENT</span>
          </h2>

          {cleanedDesktopContent ? (
            <div 
              className="w-full font-medium text-lg leading-7 text-[#394355] space-y-6 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-1 [&_h3]:font-semibold [&_h3]:text-2xl [&_h3]:mt-8"
              dangerouslySetInnerHTML={parseHtmlContent(cleanedDesktopContent)}
              suppressHydrationWarning
            />
          ) : (
            <div className="w-full font-medium text-lg leading-7 text-[#394355] space-y-6">
              <p>
                <strong>Каркасные тентовые ангары тип В</strong> от производителя MOBILE TENT — 
                идеальное решение для складов, производственных цехов, сельского хозяйства и СТО.  
                Ширина от 6 до 40 метров, любая длина. Каркас из алюминия или стали, ПВХ‑тент 
                650–900 г/м². Быстрый монтаж без фундамента, гарантия 10 лет.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Mobile version */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-center leading-tight">
            Каркасные тентовые ангары тип В
          </h2>

          {cleanedMobileContent ? (
            <div 
              className="font-medium text-sm leading-5 text-[#394355] text-justify space-y-4 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mb-1"
              dangerouslySetInnerHTML={parseHtmlContent(cleanedMobileContent)}
              suppressHydrationWarning
            />
          ) : (
            <div className="font-medium text-sm leading-5 text-[#394355] text-justify space-y-4">
              <p>
                Каркасные тентовые ангары тип В — надёжные и быстровозводимые сооружения.  
                Ширина до 40 м, ПВХ‑тент с УФ‑защитой, монтаж за 1‑2 дня.  
                Звоните: +7 (495) 760-42-20.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};