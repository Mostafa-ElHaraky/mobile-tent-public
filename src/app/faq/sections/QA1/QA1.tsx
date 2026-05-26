'use client';

import { useEffect, useRef } from 'react';
import { Button } from "../../../../components/ui/button";
import Image from 'next/image';
import Link from 'next/link';
import { FAQSection } from "../QA1/sections/FAQSection";
import { ContentSection } from "../QA1/sections/ContentSection";
import Header from '../../../../components/ui/Header';

const filterButtons = [
  { text: "Текстовые", active: true },
  { text: "Благодарственные письма", active: false },
  { text: "Отзовики", active: false },
];

// Add interface for props
interface QA1Props {
  h1Content?: string;
}

export const QA1 = ({ h1Content = "Часто задаваемые вопросы о шатрах и тентах - ответы на популярные вопросы клиентов MobilTent" }: QA1Props) => {
  const catalogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (catalogRef.current && !catalogRef.current.contains(event.target as Node)) {
        // Your existing click outside logic
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* SEO-optimized single H1 tag - visually hidden but accessible */}
      {/* Dynamic H1 content from Bitrix */}
      <h1 className="absolute w-[1px] h-[1px] p-0 -m-[1px] overflow-hidden whitespace-nowrap border-0 clip-[rect(0,0,0,0)]">
        {h1Content}
      </h1>

      {/* ===== Full-bleed unified background (applies to entire page) ===== */}
      <div className="relative w-full">
        <div
          className="absolute inset-x-0 top-0 h-[1196px] bg-gradient-to-b from-[#e8eef8] to-transparent z-0 pointer-events-none"
          aria-hidden
        />

        {/* ===== Desktop ===== */}
        <div className="relative z-10 w-full max-w-[1440px] h-[817px] mx-auto hidden md:block">
          <section className="relative h-[817px] rounded-[0px_0px_30px_30px]">
            <div className="relative h-[1058px] overflow-hidden">
              {/* Spacer to preserve original layout height that the old in-flow gradient provided */}
              <div className="h-[1196px]" aria-hidden />

              {/* Background elements */}
              <Image
                src="/reviews1-08-clouds-2.webp"
                alt="Clouds background"
                width={719}
                height={643}
                className="absolute top-[194px] left-0 object-cover"
                priority
              />

              <div className="relative bottom-[115px]">
                <Header />
              </div>

              <div className="relative bottom-[1400px] ">
                {/* Breadcrumb navigation */}
                <div className="relative top-[390px] left-[50px] mb-8">
                  <div className="inline-flex items-center justify-center gap-2.5 p-1 bg-[#4f5d801a] rounded">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Raleway',Helvetica] font-normal text-[#394355] text-xs tracking-[0] leading-[normal] whitespace-nowrap">
                      <Link href="/" className="[font-family:'Raleway',Helvetica] font-normal text-[#394355] text-xs tracking-[0] hover:underline">
                        Главная &gt;{"  "}
                      </Link>
                      <span className="font-medium underline">вопросы и ответы</span>
                    </div>
                  </div>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-4">
                  {filterButtons.map((button, index) => (
                    <Button
                      key={index}
                      className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full border-0 font-semibold text-base font-raleway ${
                        button.active
                          ? "bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white border-0"
                          : "bg-white text-[#394355] border-[#394355] hover:bg-gray-100 border-0"
                      }`}
                    >
                      {button.text}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <FAQSection />
            <ContentSection />
          </section>
        </div>

        {/* ===== Mobile ===== */}
        <div className="relative z-10 block md:hidden w-full">
          <section className="relative rounded-[0px_0px_20px_20px] overflow-hidden">
            {/* Header */}
            <div className="relative z-10">
              <Header />
            </div>

            {/* Breadcrumb navigation */}
            <div className="px-4 pt-24 pb-4 mt-12">
              <div className="inline-flex items-center justify-center gap-2 p-1 bg-[#4f5d801a] rounded">
                <div className="relative [font-family:'Raleway',Helvetica] font-normal text-[#394355] text-xs tracking-[0] leading-[normal]">
                  <Link href="/" className="[font-family:'Raleway',Helvetica] font-normal text-[#394355] text-xs tracking-[0] hover:underline">
                    Главная &gt;{"  "}
                  </Link>
                  <span className="font-medium underline">вопросы и ответы</span>
                </div>
              </div>
            </div>

            {/* Content Sections for mobile */}
            <div className="px-4">
              <FAQSection />
              <ContentSection />
            </div>

            {/* Grass foreground for mobile */}
            <div className="relative h-20 overflow-hidden">
              <Image
                src="/reviews1-vecteezy-overgrown-green-grass-generative-ai-generated-24190129-.webp"
                alt="Grass foreground"
                fill
                priority
                className="object-cover object-top"
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};