'use client';

import { useRef, useEffect, useState } from "react";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { ReactElement } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import For3dproject from '../components/ui/For3dproject';
import Header from '../components/ui/Header';

// Define props interface
interface ElementProps {
  seoH1?: string;
}

export const Element = ({ seoH1 }: ElementProps): ReactElement => {
  const catalogRef = useRef<HTMLDivElement | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Default H1 if no data from API
  const defaultH1 = "Тентовые конструкции в Москве напрямую от производителя";
  const h1Text = seoH1 || defaultH1;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (catalogRef.current && !catalogRef.current.contains(event.target as Node)) {
        // no-op per your original code
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
  }, [isModalOpen]);

  // Catalog data with images and clickable links
  const catalogItems = [
    { title: "Арочные шатры", link: "/shatry-i-navesy/arochnye", image: "/1.webp" },
    { title: "Сферические шатры", link: "/dlya-cafe-sfera-tent", image: "/krugly2.webp" },
    { title: "Шатры пагода", link: "/shatry-i-navesy/pagoda", image: "/pagda1.webp" },
    { title: "Мобильные шатры", link: "/shatry-i-navesy/mobilnye", image: "/mobilny3x6,1.webp" },
    { title: "Глэмпинги", link: "/shatry-i-navesy/glehmping", image: "/glemping2.webp" },
    { title: "Надувные шатры", link: "/shatry-i-navesy/naduvnye", image: "/nadovne1.webp" },
    { title: "Шестигранные шатры", link: "/shatry-i-navesy/shestigrannye_shatry_", image: "/shesteg2.webp" },
    { title: "Натяжные шатры", link: "/shatry-i-navesy/natyagnye", image: "/natyag.webp" },
    { title: "Шатры «Звезда»", link: "/shatry-i-navesy/shater-zvezda", image: "/zvezda.webp" },
    { title: "Мембранные шатры", link: "/shatry-i-navesy/membrannye", image: "/membranysh.webp" },
    { title: "Каркасно-тентовые ангары Тип В", link: "/shatry-i-navesy/karkasno-tentovye-angary-tip-v", image: "/B_20x30_1.webp" },
    { title: "Каркасно-тентовые ангары Тип Д", link: "/shatry-i-navesy/karkasno-tentovye-angary-tip-d", image: "/D_25x40_1.webp" }
  ];

  return (
    <main className="relative w-full max-w-[1440px] bg-white mx-auto">
      {/* SINGLE H1 - SEO optimized and accessible to all users - NOW DYNAMIC */}
      <h1 className="sr-only">{h1Text}</h1>

      {/* Desktop Layout */}
      <div className="hidden desktop:block">
        <section className="relative h-[1093px] rounded-[0px_0px_30px_30px]">
          <Header />
          {/* ===== Full-bleed background layer (spans entire viewport width) ===== */}
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-screen z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(232,238,248,1)] to-[rgba(222,228,240,0)]" />
            <div className="absolute inset-x-0 bottom-0 h-[889px] overflow-hidden">
              <div className="relative h-full bg-[url('/fc3740fa54440e5eaefe94690ddc2643-3.webp')] bg-cover bg-center">
                <Image
                  className="absolute top-[800px] left-[1007px]"
                  src="/vecteezy-overgrown-green-grass-generative-ai-generated-24190129--1.webp"
                  alt="Overgrown green grass"
                  width={543}
                  height={549}
                  priority
                />
              </div>
            </div>
          </div>

          {/* ===== Foreground decorative images (above bg) ===== */}
          <Image
            className="top-[220px] left-[836px] blur-[2px] absolute object-cover z-10"
            src="/08-clouds-2.webp"
            alt="Clouds background"
            width={604}
            height={819}
            priority
          />

          <Image
            className="top-[194px] left-0 absolute object-cover z-10"
            src="/08-clouds-2.webp"
            alt="Clouds background"
            width={719}
            height={643}
            priority
          />

          <Image
            className="absolute top-[853px] left-0 z-10"
            src="/vecteezy-overgrown-green-grass-generative-ai-generated-24190129-.webp"
            alt="Overgrown green grass"
            width={318}
            height={222}
            priority
          />

          {/* ===== Your content (unchanged, above bg) ===== */}
          <div className="inline-flex flex-col items-start gap-[228px] absolute top-[230px] left-12 z-10">
            <div className="inline-flex flex-col items-start gap-[60px] relative flex-[0_0_auto]">
              <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
                <div className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]">
                  <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
                    <div className="w-fit mt-[-1.00px] font-normal text-[#394355] text-base leading-[normal] whitespace-nowrap relative [font-family:'Raleway',Helvetica] tracking-[0]">
                      <span className="[font-family:'Raleway',Helvetica] font-normal text-[#394355] text-base tracking-[0]">
                        Реально{" "}
                      </span>
                      <span className="font-semibold">долговечные тентовые конструкции</span>
                      <span className="[font-family:'Raleway',Helvetica] font-normal text-[#394355] text-base tracking-[0]">
                        {" "}стали реальностью
                      </span>
                    </div>

                    <div className="w-[966px] font-medium text-[50px] leading-[normal] relative [font-family:'Raleway',Helvetica] tracking-[0]">
                      <span className="text-[#335dc2]">
                        ТЕНТОВЫЕ КОНСТРУКЦИИ В МОСКВЕ
                      </span>
                      <span className="text-[#232c42]"> </span>
                      <br />
                      <span className="text-[#232c42bf]">
                        НАПРЯМУЮ ОТ ПРОИЗВОДИТЕЛЯ
                      </span>
                    </div>
                  </div>

                  <Badge className="inline-flex items-center justify-center gap-2.5 px-3 py-1.5 relative flex-[0_0_auto] bg-[#4f5d80] rounded-lg overflow-hidden backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)]">
                    <span className="mt-[-1.00px] font-semibold text-white text-[22px] leading-[normal] whitespace-nowrap relative [font-family:'Raleway',Helvetica] tracking-[0]">
                      с гарантией сохранения внешнего вида в течении 15 лет при
                      любой погоде
                    </span>
                  </Badge>
                </div>

                <div className="inline-flex items-start gap-1.5 relative flex-[0_0_auto]">
                  <div className="relative w-6 h-6">
                    <Image
                      className="absolute top-1 left-1"
                      src="/group-6.webp"
                      alt="Checkmark icon"
                      width={16}
                      height={16}
                      priority
                    />
                  </div>

                  <div className="w-[538px] mt-[-1.00px] font-medium text-[#232c42] text-base leading-6 relative [font-family:'Raleway',Helvetica] tracking-[0]">
                    Отгрузим готовый со склада за 1 день или изготовим любую форму
                    и размер конструкции за 10-60 дней с фиксацией сроков в
                    договоре
                  </div>
                </div>
              </div>

              <div className="inline-flex flex-col items-center gap-3 relative flex-[0_0_auto]">
                <div className="relative w-[383px] mt-[-1.00px] font-normal text-[#394355] text-xs [font-family:'Raleway',Helvetica] text-center tracking-[0] leading-[normal]">
                  <span className="[font-family:'Raleway',Helvetica] font-normal text-[#394355] text-xs tracking-[0]">
                    Ваши{" "}
                  </span>
                  <span className="font-semibold">
                    мероприятия будут яркими и уютными
                  </span>
                  <span className="[font-family:'Raleway',Helvetica] font-normal text-[#394355] text-xs tracking-[0]">
                    , а бизнес будет развиваться с красивыми и{" "}
                  </span>
                  <span className="font-bold">
                    надежными решениями от MobilTent
                  </span>
                </div>

                <div className="relative w-[412px] h-[68px] rounded-2xl ">
                  <For3dproject
                    onModalOpen={() => setIsModalOpen(true)}
                    onModalClose={() => setIsModalOpen(false)}
                  />
                </div>
              </div>
            </div>
          </div>

          {!isModalOpen && (
            <a
              href="https://rutube.ru/video/51679662e77a22b3b4df5ba3e06d0bc0/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Card className="inline-flex flex-col items-start gap-2.5 px-6 py-3 absolute top-[414px] left-[1148px] bg-white rounded-[50px] border-0 shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] cursor-pointer hover:shadow-lg transition-shadow z-10">
                <CardContent className="p-0">
                  <div className="inline-flex items-center gap-[15px] relative top-[2px] flex-[0_0_auto]">
                    <div className="relative w-[50px] h-[50px]">
                      <div className="relative w-[47px] h-[33px] top-[9px] left-0.5">
                        <div className="relative h-[33px]">
                          <div className="absolute w-[23px] h-[23px] top-[5px] left-3 bg-white rounded-[11.5px]" />
                          <Image
                            className="absolute top-0 left-0"
                            src="/vector.webp"
                            alt="Video play icon"
                            width={47}
                            height={33}
                            priority
                          />
                        </div>
                      </div>
                    </div>
                    <div className="font-bold text-[#232c42] text-sm leading-normal [font-family:'Raleway',Helvetica] tracking-[0]">
                      Видео о производстве
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>
          )}
        </section>
      </div>

      {/* Mobile/Tablet Layout */}
      <div className="block desktop:hidden">
        <section className="relative min-h-[90vh] md:min-h-screen rounded-[0px_0px_40px_40px] overflow-hidden flex flex-col">
          {/* Background Layer */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(232,238,248,0.9)] to-[rgba(222,228,240,0.4)]" />

            <div className="absolute inset-0 top-[30%] md:top-[20%] overflow-hidden">
              <div
                className="relative h-full w-full bg-[url(/fc3740fa54440e5eaefe94690ddc2643-3.webp)] bg-cover bg-center md:bg-top opacity-60 md:opacity-80"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
                }}
              />
            </div>

            <Image
              className="top-[15%] right-[-5%] blur-[2px] absolute object-cover w-[50%] md:w-[40%] h-auto opacity-70"
              src="/08-clouds-2.webp"
              alt="Clouds background"
              width={604}
              height={819}
              sizes="(max-width: 1024px) 50vw, 604px"
              priority
            />
            <Image
              className="top-[10%] left-[-10%] absolute object-cover w-[60%] md:w-[45%] h-auto opacity-70"
              src="/08-clouds-2.webp"
              alt="Clouds background"
              width={719}
              height={643}
              sizes="(max-width: 1024px) 60vw, 719px"
              priority
            />

            <Image
              className="absolute bottom-0 left-0 w-[30%] md:w-[20%] h-auto z-10"
              src="/vecteezy-overgrown-green-grass-generative-ai-generated-24190129-.webp"
              alt="Overgrown green grass"
              width={318}
              height={222}
              priority
              sizes="(max-width: 1024px) 30vw, 318px"
            />
          </div>

          <div className="relative z-10 flex-1 flex flex-col justify-between pt-[140px] md:pt-[180px] pb-12 px-6 md:px-12 max-w-5xl mx-auto w-full">
            <div className="flex flex-col items-center md:items-center gap-8 text-center">
              {!isModalOpen && (
                <div className="mb-4">
                  <a
                    href="https://rutube.ru/video/51679662e77a22b3b4df5ba3e06d0bc0/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Card className="flex items-center gap-3 px-6 py-3 bg-white/90 rounded-full border-0 shadow-xl backdrop-blur-md cursor-pointer hover:scale-105 transition-transform">
                      <div className="relative w-10 h-10 flex items-center justify-center">
                        <div className="absolute w-6 h-6 bg-[#335dc2] rounded-full animate-pulse opacity-20" />
                        <Image
                          src="/vector.webp"
                          alt="Video play icon"
                          width={32}
                          height={22}
                          priority
                        />
                      </div>
                      <div className="font-bold text-[#232c42] text-sm md:text-base [font-family:'Raleway',Helvetica]">
                        Видео о производстве
                      </div>
                    </Card>
                  </a>
                </div>
              )}

              <div className="flex flex-col items-center gap-6 w-full">
                <div className="w-full font-normal text-[#394355] text-base md:text-xl leading-normal [font-family:'Raleway',Helvetica] tracking-wide">
                  <span className="opacity-80">Реально </span>
                  <span className="font-bold text-[#232c42]">долговечные тентовые конструкции</span>
                  <span className="opacity-80"> стали реальностью</span>
                </div>

                <div className="font-bold text-3xl md:text-5xl lg:text-6xl leading-tight [font-family:'Raleway',Helvetica] text-center max-w-4xl">
                  <span className="text-[#335dc2] block md:inline">ТЕНТОВЫЕ КОНСТРУКЦИИ </span>
                  <span className="text-[#335dc2] block md:inline">В МОСКВЕ </span>
                  <span className="text-[#232c42bf] block md:inline">НАПРЯМУЮ ОТ ПРОИЗВОДИТЕЛЯ</span>
                </div>

                <Badge className="flex items-center justify-center px-6 py-3 bg-[#4f5d80] rounded-xl shadow-lg border-0">
                  <span className="font-semibold text-white text-base md:text-xl leading-normal [font-family:'Raleway',Helvetica] text-center">
                    с гарантией сохранения внешнего вида в течение 15 лет при любой погоде
                  </span>
                </Badge>
              </div>

              <div className="flex items-center justify-center gap-3 w-full max-w-2xl bg-white/40 backdrop-blur-sm p-4 rounded-2xl border border-white/50">
                <div className="relative w-8 h-8 flex-shrink-0">
                  <Image
                    className="absolute top-1 left-1"
                    src="/group-6.webp"
                    alt="Checkmark icon"
                    width={20}
                    height={20}
                    priority
                  />
                </div>
                <div className="font-medium text-[#232c42] text-sm md:text-lg leading-relaxed [font-family:'Raleway',Helvetica] text-center md:text-left">
                  Отгрузим готовый со склада за 1 день или изготовим любую форму и размер за 10-60 дней с фиксацией сроков
                </div>
              </div>
            </div>

            <div className="mt-12 md:mt-20 w-full max-w-2xl mx-auto flex flex-col items-center gap-6">
              <div className="text-[#394355] text-xs md:text-sm font-medium text-center opacity-90 [font-family:'Raleway',Helvetica] max-w-md">
                Ваши <span className="font-bold">мероприятия будут яркими и уютными</span>, а бизнес будет развиваться с надежными решениями от MobilTent
              </div>

              <div className="w-full h-[70px] md:h-[80px] rounded-2xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform">
                <For3dproject
                  onModalOpen={() => setIsModalOpen(true)}
                  onModalClose={() => setIsModalOpen(false)}
                />
              </div>
            </div>
          </div>

          <Header />
        </section>
      </div>

      {/* NEW CATALOG SECTION */}
      <div className="w-full py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#232c42] mb-3 [font-family:'Raleway',Helvetica]">
              Каталог тентовых конструкций
            </h2>
            <div className="w-24 h-1 bg-[#335dc2] mx-auto rounded-full"></div>
            <p className="text-[#394355] mt-4 text-base [font-family:'Raleway',Helvetica]">
              Профессиональные решения для любых задач
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 auto-rows-fr">
            {catalogItems.map((item, index) => (
              <Link
                key={`${item.link}-${index}`}
                href={item.link}
                className="group block transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-transparent rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col">
                  <div className="relative w-full h-64 md:h-72 lg:h-80 flex-shrink-0 overflow-hidden flex items-center justify-center p-4 bg-transparent">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      quality={95}
                      priority={index < 4}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-5 text-center flex-grow flex items-center justify-center">
                    <h3 className="text-xl font-semibold text-[#232c42] [font-family:'Raleway',Helvetica] group-hover:text-[#335dc2] transition-colors duration-300 leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};