'use client';

import { useRef, useEffect, useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";
import { ReactElement } from 'react';
import Image from 'next/image';
import For3dproject from '../../../../components/ui/For3dproject';
import Header from '../../../../components/ui/Header';
import { Button } from "../../../../components/ui/button";
import DownloadCata from '../../../../components/ui/DownloadCata';

export const Shatry1 = (): ReactElement => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const catalogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    const handleClickOutside = (event: MouseEvent) => {
      if (catalogRef.current && !catalogRef.current.contains(event.target as Node)) {
        // Handle click outside if needed
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  const guaranteeItems = [
    { years: "5 лет", description: "на конструкцию" },
    { years: "10 лет", description: "на ткань" },
    { years: "50 лет", description: "а сварные швы" },
    { years: "25 лет", description: "на отсутствие корозии" },
  ];

  return (
    <main className="relative w-full max-w-[1440px] bg-white mx-auto">
      {/* Single SEO-optimized H1 tag - visually hidden but accessible */}
      <h1 className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden">
        Для выставок, рекламных и промоакций — мембранные шатры напрямую от производителя
      </h1>

      {/* Desktop Layout */}
      <div className="hidden desktop:block">
        <section className="relative h-[1081px] rounded-[0px_0px_30px_30px]">
          {/* ===== Full-bleed background layer (spans entire viewport width) ===== */}
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-screen z-0">
            {/* Gradient fills the whole screen width */}
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(232,238,248,1)] to-[rgba(222,228,240,0)]" />

            {/* Bottom background image area (kept same height) */}
            <div className="absolute inset-x-0 bottom-0 h-[889px] overflow-hidden">
              <div className="relative h-full">
              <Image
                src="/fc3740fa54440e5eaefe94690ddc2643-3.webp"
                alt="Background"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
                quality={85}
              />
                {/* Foreground grass inside the bg area (kept) */}
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
                      <span className="font-semibold">договечные тентовые конструкции</span>
                      <span className="[font-family:'Raleway',Helvetica] font-normal text-[#394355] text-base tracking-[0]">
                        {" "}стали реальностью
                      </span>
                    </div>

                    <div className="w-[966px] font-medium text-[50px] leading-[normal] relative [font-family:'Raleway',Helvetica] tracking-[0]">
                      <span className="text-[#335dc2]">
                        ДЛЯ ВЫСТАВОК, РЕКЛАМНЫХ И ПРОМОАКЦИЙ — МЕМБРАННЫЕ ШАТРЫ
                      </span>
                      <span className="text-[#232c42]">&nbsp;</span>
                      <br></br>
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
                      sizes="16px"
                      aria-hidden="true"
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


          {/* Guarantees card */}
          <div className="relative top-[200px] left-[30px]">
            <Card className="absolute w-[585px] h-[124px] top-[625px] left-[5px] bg-[#fffffff2] rounded-[20px] overflow-hidden border-[3px] border-solid border-white shadow-[0px_24px_38px_#161d2414] backdrop-blur-[79px]">
              <CardContent className="p-0">
                <div className="inline-flex flex-col items-start gap-4 relative w-[541px] h-[90px] top-[9px] left-[18px]">
                  <div className="relative w-fit mt-[-5.00px] font-bold text-transparent text-l leading-[normal] whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                    <span className="text-[#527dc5]">Честные</span>
                    <span className="text-[#232c42]"> гарантии</span>
                  </div>
                  <div className="inline-flex items-start gap-[31px] w-[541px] h-[90px] relative flex-[0_0_auto]">
                    {guaranteeItems.map((item, index) => (
                      <div
                        key={index}
                        className="inline-flex flex-col items-start gap-1.5 relative flex-[0_0_auto]"
                      >
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Raleway',Helvetica] font-bold text-[#232c42] text-3xl tracking-[0] leading-[normal] whitespace-nowrap">
                          {item.years}
                        </div>
                        <div className="relative w-fit font-normal text-[#394355] text-sm leading-[normal] whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                          {item.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

                    {/* Smaller frosted glass button */}
{/* Smaller frosted glass button - MOVE THIS HIGHER IN THE Z-INDEX ORDER */}
<div className="relative top-[730px] left-[500px] z-30">
  <Button
    variant="outline"
    onClick={openPopup}
    className="w-[203px] h-[68px] bg-[#ededed] rounded-2xl border-none shadow-[0px_22px_44px_rgba(77,77,77,0.4)] backdrop-blur-[10px] hover:bg-[#e0e0e0] transition-colors cursor-pointer"
  >
    <span className="[font-family:'Raleway',Helvetica] font-semibold text-[16px] text-center bg-gradient-to-r from-[#243057] to-[#374255] bg-clip-text text-transparent">
      Смотреть каталог<br />готовых шатров
    </span>
  </Button>
</div>

          {/* Popup with overlay */}
          {showPopup && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
              <DownloadCata onClose={closePopup} />
            </div>
          )}
          
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
                            sizes="47px"
                            aria-hidden="true"
                            priority
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-fit font-bold text-[#232c42] text-base leading-[normal] relative [font-family:'Raleway',Helvetica] tracking-[0]">
                      Видео
                      <br />о производстве
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>
          )}

          <Header/>
        </section>
      </div>

      {/* Mobile Version - Improved Responsiveness */}
      <div className="relative w-full bg-white mx-auto block md:hidden mt-20">
        <section className="relative rounded-[0px_0px_20px_20px] overflow-hidden min-h-screen">
          
          {/* Background elements */}
          <div className="absolute w-full h-full top-0 left-0 rounded-[0px_0px_20px_20px] overflow-hidden">
            <div className="relative w-full h-full">
              <div className="absolute w-full h-full top-0 left-0 [background:linear-gradient(180deg,rgba(232,238,248,1)_0%,rgba(222,228,240,0)_100%)]" />

              {/* Main image with gradient */}
              <div className="absolute w-full h-[40vh] top-[60vh] left-0 overflow-hidden">
                <div className="relative h-full w-full">
                  <Image
                    src="/fc3740fa54440e5eaefe94690ddc2643-3.webp"
                    alt="Background"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                    style={{
                      maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                      WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                    }}
                  />
                </div>
              </div>

              {/* Right cloud */}
              <Image
                className="top-[15%] right-[5%] blur-[2px] absolute object-contain w-[35%] h-auto max-w-[200px]"
                src="/08-clouds-2.webp"
                alt="Clouds background"
                width={604}
                height={819}
                priority
              />

              {/* Left cloud */}
              <Image
                className="top-[10%] left-0 absolute object-contain w-[45%] h-auto max-w-[250px]"
                src="/08-clouds-2.webp"
                alt="Clouds background"
                width={719}
                height={643}
                priority
              />

              {/* Grass at bottom */}
              <Image
                className="absolute bottom-0 left-0 w-[25%] h-auto max-w-[120px]"
                src="/vecteezy-overgrown-green-grass-generative-ai-generated-24190129-.webp"
                alt="Overgrown green grass"
                width={318}
                height={222}
                priority
              />
            </div>
          </div>

          {/* Main content */}
          <div className="relative pt-40 px-4 pb-20">
            <div className="flex flex-col items-start gap-6">
              {/* Hero section */}
              <div className="flex flex-col items-start gap-4 w-full">
                <div className="flex flex-col items-start gap-3 w-full">
                  <div className="font-normal text-[#394355] text-l text-left w-full">
                    <span className="[font-family:'Raleway',Helvetica] font-normal text-[#394355] text-sm">
                      Реально{" "}
                    </span>
                    <span className="font-semibold">
                      договечные тентовые конструкции
                    </span>
                    <span className="[font-family:'Raleway',Helvetica] font-normal text-[#394355] text-sm">
                      {" "}
                      стали реальностью
                    </span>
                  </div>

                  <div className="w-full font-medium text-2xl sm:text-2xl text-left [font-family:'Raleway',Helvetica] leading-tight">
                    <span className="text-[#335dc2]">ДЛЯ ВЫСТАВОК, РЕКЛАМНЫХ И ПРОМОАКЦИЙ — МЕМБРАННЫЕ ШАТРЫ</span>
                    <span className="text-[#232c42bf]"> НАПРЯМУЮ</span>
                    <br />
                    <span className="text-[#232c42bf]">
                      ОТ ПРОИЗВОДИТЕЛЯ
                    </span>
                  </div>
                </div>

                <Badge className="w-full justify-center py-2 px-3 bg-[#4f5d80] rounded-lg overflow-hidden backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)]">
                  <span className="font-semibold text-white text-l sm:text-sm text-center [font-family:'Raleway',Helvetica] leading-tight">
                    с гарантией сохранения внешнего вида в течении 15 лет при любой погоде
                  </span>
                </Badge>
              </div>

              {/* Feature highlight */}
              <div className="flex items-start gap-2 w-full">
                <div className="min-w-[20px] min-h-[20px] mt-0.5 flex-shrink-0">
                  <Image
                    src="/group-6.webp"
                    alt="Checkmark icon"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                    priority
                  />
                </div>
                <div className="font-medium text-[#232c42] text-l sm:text-sm [font-family:'Raleway',Helvetica] leading-tight">
                  Отгрузим готовый со склада за 1 день или изготовим любую форму
                  и размер конструкции за 10-60 дней с фиксацией сроков в
                  договоре
                </div>
              </div>
            </div>
          </div>

          {/* CTA section - positioned above the background image */}
          <div className="relative z-10 px-4 mt-[45vh] mb-8">
            <div className="w-full font-normal text-[#394355] text-xs [font-family:'Raleway',Helvetica] text-center mb-3">
              <span className="[font-family:'Raleway',Helvetica] font-normal text-[#394355] text-xs">
                Ваши{" "}
              </span>
              <span className="font-semibold">мероприятия будут яркими и уютными</span>
              <span className="[font-family:'Raleway',Helvetica] font-normal text-[#394355] text-xs">
                , а бизнес будет развиваться с красивыми и{" "}
              </span>
              <span className="font-bold">надежными решениями от MobilTent</span>
            </div>
          </div>

          {/* CTA group: For3dproject, Catalog, Guarantees */}
          <div className="relative z-10 px-4 mt-6 flex flex-col gap-6">
            {/* Catalog button */}
            <div className="flex justify-center mt-20">
              <Button
                variant="outline"
                onClick={openPopup}
                className="w-full max-w-md h-14 bg-[#ededed] rounded-2xl border-none shadow-[0px_12px_24px_rgba(77,77,77,0.3)] backdrop-blur-[10px]"
              >
                <span className="[font-family:'Raleway',Helvetica] font-semibold text-xs text-center bg-gradient-to-r from-[#243057] to-[#374255] bg-clip-text text-transparent">
                  Смотреть каталог<br />готовых шатров
                </span>
              </Button>
            </div>

            {/* Guarantees card */}
            <Card className="w-full bg-[#fffffff2] rounded-[20px] overflow-hidden border-[2px] border-solid border-white shadow-[0px_12px_20px_#161d2414] backdrop-blur-[20px]">
              <CardContent className="p-4">
                <div className="flex flex-col items-center gap-3">
                  <div className="font-bold text-base text-center [font-family:'Raleway',Helvetica]">
                    <span className="text-[#527dc5]">Честные</span>
                    <span className="text-[#232c42]"> гарантии</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 w-full">
                    {guaranteeItems.map((item, index) => (
                      <div key={index} className="flex flex-col items-center gap-1">
                        <div className="[font-family:'Raleway',Helvetica] font-bold text-[#232c42] text-lg text-center">
                          {item.years}
                        </div>
                        <div className="font-normal text-[#394355] text-xs text-center [font-family:'Raleway',Helvetica] leading-tight">
                          {item.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Video button positioned on top of the image */}
            <a
              href="https://rutube.ru/video/51679662e77a22b3b4df5ba3e06d0bc0/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block absolute top-[40%] right-4 z-20"
            >
              <Card className="flex flex-col relative bottom-[550px] items-start gap-2 px-3 py-2 bg-white rounded-[40px] border-0 shadow-sm backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)] cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-center gap-2">
                    <div className="relative w-6 h-6">
                      <div className="relative w-5 h-4 top-1 left-0.5">
                        <div className="relative h-4">
                          <div className="absolute w-3 h-3 top-[2px] left-1.5 bg-white rounded-full" />
                          <Image
                            className="absolute top-0 left-0"
                            src="/vector.webp"
                            alt="Video play icon"
                            width={20}
                            height={13}
                            priority
                          />
                        </div>
                      </div>
                    </div>
                    <div className="font-bold text-[#232c42] text-xs leading-tight [font-family:'Raleway',Helvetica]">
                      Видео
                      <br />о производстве
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>
          </div>

          <div className="relative z-50 bottom-[350px]">
            <For3dproject
              onModalOpen={() => setIsModalOpen(true)}
              onModalClose={() => setIsModalOpen(false)}
            />
          </div>

          <Header />

          {/* Popup with overlay */}
          {showPopup && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4">
              <div ref={catalogRef} className="w-full max-w-md">
                <DownloadCata onClose={closePopup} />
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};