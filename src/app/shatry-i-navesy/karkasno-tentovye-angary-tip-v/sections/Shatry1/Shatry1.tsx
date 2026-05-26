'use client';

import { useRef, useEffect, useState } from "react";
import { Badge } from "../../../../../components/ui/badge";
import { Card, CardContent } from "../../../../../components/ui/card";
import { ReactElement } from 'react';
import Image from 'next/image';
import For3dproject from '../../../../../components/ui/For3dproject';
import Header from '../../../../../components/ui/Header';
import { Button } from "../../../../../components/ui/button";
import DownloadCata from '../../../../../components/ui/DownloadCata';

interface Shatry1Props {
  seoH1?: string;
}

export const Shatry1 = ({ seoH1 }: Shatry1Props): ReactElement => {
  const [showPopup, setShowPopup] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const catalogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (catalogRef.current && !catalogRef.current.contains(event.target as Node)) {
        // يمكنك إضافة أي منطق إضافي هنا إذا لزم الأمر
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
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

    const defaultH1 = "Каркасные ангары в Москве и Московской области — производство и монтаж под ключ";
    const h1Text = seoH1 || defaultH1;
  
    return (
    <>
      {/* Desktop Version */}
      <main className="relative w-full max-w-[1440px] h-[1081px] bg-white mx-auto hidden md:block">
    {/* Single SEO-optimized H1 tag - positioned for both desktop and mobile */}
      <h1 className="sr-only">{h1Text}</h1>
        <section className="relative isolate h-[1081px] rounded-[0px_0px_30px_30px]">
          
          {/* Background elements — full-bleed but scoped to Shatry1 */}
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-screen -z-10 rounded-b-[30px] overflow-hidden">
            {/* gradient */}
            <div className="absolute inset-0 [background:linear-gradient(180deg,rgba(232,238,248,1)_0%,rgba(222,228,240,0)_100%)]" />

            {/* bottom image area */}
            <div className="absolute inset-x-0 bottom-0 h-[789px] rounded-b-[20px] overflow-hidden">
              <div className="h-full bg-[url('/angar.webp')] bg-cover bg-center" />
            </div>

            {/* your decorative images (same positions as before) */}
            <Image
              className="w-[604px] h-[819px] top-[220px] left-[836px] blur-[2px] absolute object-cover"
              alt="Clouds background"
              src="/08-clouds-2.webp"
              width={604}
              height={819}
              priority
            />
            <Image
              className="w-[719px] h-[643px] top-[194px] left-0 absolute object-cover"
              alt="Clouds background"
              src="/08-clouds-2.webp"
              width={719}
              height={643}
              priority
            />
            <Image
              className="absolute w-[318px] h-[222px] top-[1053px] left-0"
              alt="Overgrown green grass"
              src="/vecteezy-overgrown-green-grass-generative-ai-generated-24190129-.webp"
              width={318}
              height={222}
              priority
            />
          </div>

          {/* Main content */}
          <div className="inline-flex flex-col items-start gap-[228px] absolute top-[230px] left-12">
            <div className="inline-flex flex-col items-start gap-[60px] relative flex-[0_0_auto]">
              {/* Hero section */}
              <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
                <div className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]">
                  <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
                    <div className="w-fit mt-[-1.00px] font-normal text-[#394355] text-base leading-[normal] whitespace-nowrap relative [font-family:'Raleway',Helvetica] tracking-[0]">
                      <span className="[font-family:'Raleway',Helvetica] font-normal text-[#394355] text-base tracking-[0]">
                        Реально{" "}
                      </span>

                      <span className="font-semibold">
                        договечные тентовые конструкции
                      </span>

                      <span className="[font-family:'Raleway',Helvetica] font-normal text-[#394355] text-base tracking-[0]">
                        {" "}
                        стали реальностью
                      </span>
                    </div>

                    {/* Desktop visual heading - now as div instead of h1 */}
                    <div className="w-[966px] font-medium text-[50px] leading-[normal] relative [font-family:'Raleway',Helvetica] tracking-[0]" role="heading" aria-level={2}>
                      <span className="text-[#335dc2] mr-2">АНГАРЫ ТИП-В  В МОСКВЕ</span>
                      <span className="text-[#232c42bf]"></span>
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

                {/* Feature highlight */}
                <div className="inline-flex items-start gap-1.5 relative flex-[0_0_auto]">
                  <div className="relative w-6 h-6">
                    <Image
                      className="absolute top-1 left-1"
                      src="/group-6.webp"
                      alt="Checkmark icon"
                      width={16}
                      height={16}
                    />
                  </div>
                  <div className="w-[538px] mt-[-1.00px] font-medium text-[#232c42] text-base leading-6 relative [font-family:'Raleway',Helvetica] tracking-[0]">
                    Отгрузим готовый со склада за 1 день или изготовим любую форму
                    и размер конструкции за 10-60 дней с фиксацией сроков в
                    договоре
                  </div>
                </div>
              </div>

              {/* CTA section */}
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
                  <For3dproject />
                </div>
              </div>
            </div>
          </div>

          {/* Guarantees card */}
          <div className="relative top-[220px] left-[30px]">
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
          <div className="relative top-[610px] left-[500px]">
            <Button
              variant="outline"
              onClick={openPopup}
              className="w-[203px] h-[68px] bg-[#ededed] rounded-2xl border-none shadow-[0px_22px_44px_rgba(77,77,77,0.4)] backdrop-blur-[10px]"
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

          {/* Video button */}
          <a 
            href="https://rutube.ru/video/51679662e77a22b3b4df5ba3e06d0bc0/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Card className="inline-flex flex-col items-start gap-2.5 px-6 py-3 absolute top-[414px] left-[1148px] bg-white rounded-[50px] border-0 shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] cursor-pointer hover:shadow-lg transition-shadow">
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
                  <div className="w-fit font-bold text-[#232c42] text-base leading-[normal] relative [font-family:'Raleway',Helvetica] tracking-[0]">
                    Видео
                    <br />о производстве
                  </div>
                </div>
              </CardContent>
            </Card>
          </a>
        </section>
        <Header />
      </main>

      {/* Mobile Version - Improved Responsiveness */}
      <main className="relative w-full bg-white mx-auto block md:hidden mt-30">
        <section className="relative rounded-[0px_0px_20px_20px] overflow-hidden min-h-screen">
          
          {/* Background elements */}
          <div className="block md:hidden absolute w-full h-[650px] top-0 left-0 rounded-b-[20px] overflow-hidden">
            <div className="relative w-full h-full">
              <div className="absolute w-full h-full top-0 left-0 [background:linear-gradient(180deg,rgba(232,238,248,1)_0%,rgba(222,228,240,0)_100%)]" />

              <div className="absolute w-full h-[300px] bottom-0 left-0 rounded-b-[20px] overflow-hidden">
                <div
                  className="relative h-full bg-[url(/angar.webp)]"
                  style={{ backgroundSize: "cover", backgroundPosition: "center" }}
                ></div>
              </div>

              <Image
                className="absolute w-[300px] h-[200px] top-[100px] right-0 blur-[1px] object-cover"
                alt="Clouds background"
                src="/08-clouds-2.webp"
                width={300}
                height={200}
                priority
              />

              <Image
                className="absolute w-[250px] h-[180px] top-[60px] left-0 object-cover"
                alt="Clouds background"
                src="/08-clouds-2.webp"
                width={250}
                height={180}
                priority
              />

              <Image
                className="absolute w-[200px] h-[140px] bottom-[-20px] left-0"
                alt="Overgrown green grass"
                src="/vecteezy-overgrown-green-grass-generative-ai-generated-24190129-.webp"
                width={200}
                height={140}
                priority
              />
            </div>
          </div>

          {/* Video button positioned on top of the image */}
          <a
            href="https://rutube.ru/video/51679662e77a22b3b4df5ba3e06d0bc0/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block absolute top-[40%] right-55 z-20"
          >
            <Card className="flex flex-col items-start gap-2 px-3 py-2 bg-white rounded-[40px] border-0 shadow-sm backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)] cursor-pointer hover:shadow-lg transition-shadow">
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

          {/* Main content */}
          <div className="relative pt-40 px-4 pb-20">
            <div className="flex flex-col items-start gap-6">
              {/* Hero section */}
              <div className="flex flex-col items-start gap-4 w-full">
                <div className="flex flex-col items-start gap-3 w-full">
                  <div className="font-normal text-[#394355] text-sm text-left w-full">
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

                  {/* Mobile visual heading - now as div instead of h1 */}
                  <div className="w-full font-medium text-xl sm:text-2xl text-left [font-family:'Raleway',Helvetica] leading-tight" role="heading" aria-level={2}>
                    <span className="text-[#335dc2]">АНГАРЫ ТИП-В В МОСКВЕ</span>
                    <span className="text-[#232c42bf]"> НАПРЯМУЮ</span>
                    <br />
                    <span className="text-[#232c42bf]">
                      ОТ ПРОИЗВОДИТЕЛЯ
                    </span>
                  </div>
                </div>

                <Badge className="w-full justify-center py-2 px-3 bg-[#4f5d80] rounded-lg overflow-hidden backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)]">
                  <span className="font-semibold text-white text-xs sm:text-sm text-center [font-family:'Raleway',Helvetica] leading-tight">
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
                <div className="font-medium text-[#232c42] text-xs sm:text-sm [font-family:'Raleway',Helvetica] leading-tight">
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

            <div className="w-full h-12 rounded-2xl">
              <For3dproject />
            </div>
          </div>

          {/* Catalog button */}
          <div className="relative px-4 mt-6 mb-8 flex justify-center">
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
          <div className="relative px-4 mt-6 mb-12">
            <Card className="w-full bg-[#fffffff2] rounded-[20px] overflow-hidden border-[2px] border-solid border-white shadow-[0px_12px_20px_#161d2414] backdrop-blur-[20px]">
              <CardContent className="p-4">
                <div className="flex flex-col items-center gap-3">
                  <div className="font-bold text-base text-center [font-family:'Raleway',Helvetica]">
                    <span className="text-[#527dc5]">Честные</span>
                    <span className="text-[#232c42]"> гарантии</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 w-full">
                    {guaranteeItems.map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center gap-1"
                      >
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
          </div>

          {/* Popup with overlay */}
          {/* (Moved outside of <section>/<main> so it can overlay the Header and avoid clipping) */}
        </section>
        <Header />
      </main>

      {/* Popup with overlay (now outside main so it stacks above Header) */}
      {showPopup && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/30 backdrop-blur-sm p-4">
          <div ref={catalogRef} className="w-full max-w-md">
            <DownloadCata onClose={closePopup} />
          </div>
        </div>
      )}
    </>
  );
};