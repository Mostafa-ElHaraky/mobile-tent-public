'use client';

import React, { useEffect, useState } from "react";
import { Button } from "../../../../../components/ui/button";
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
            // Fallback content (сферические шатры)
            <div className="w-full font-medium text-lg leading-7 text-[#394355] space-y-6">
              <h3 className="font-semibold text-2xl">Сферические шатры для кафе и ресторанов</h3>
              <p>Купольные шатры – стильное и практичное решение для заведений общепита. Защита от непогоды, уникальный дизайн, круглогодичное использование.</p>
              <p>Производство в Москве, доставка по России. Гарантия 5 лет.</p>
            </div>
          )}
        </div>
      </section>

      {/* === MOBILE VERSION === */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-center leading-tight">
            Сферические шатры
          </h2>

          {cleanedMobileContent ? (
            <div 
              className="font-medium text-sm leading-5 text-[#394355] text-justify space-y-4 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mb-1"
              dangerouslySetInnerHTML={parseHtmlContent(cleanedMobileContent)}
              suppressHydrationWarning
            />
          ) : (
            <div className="font-medium text-sm leading-5 text-[#394355] text-justify space-y-4">
              <p>Купольные шатры – стильное решение для кафе, ресторанов и мероприятий. Защита от дождя, ветра и солнца.</p>
              <p>Доставка по Москве, МО и всей России. Звоните: +7 (495) 760-42-20.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};