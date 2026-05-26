'use client';

import { useState, useRef, useEffect } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { ReactElement } from "react";
import Image from "next/image";
import For3dproject from "../../../../components/ui/For3dproject";
import DownloadCata from "../../../../components/ui/DownloadCata";
import Header from "../../../../components/ui/Header";

export const Services1 = (): ReactElement => {
  const catalogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        catalogRef.current &&
        !catalogRef.current.contains(event.target as Node)
      ) {
        // Optional: close popup here if desired
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  return (
    <>
      {/* === Desktop Version === */}
      <div className="hidden md:block">
        <main className="relative w-full max-w-[1440px] h-[805px] mx-auto bg-white">
          <section className="relative h-[805px] rounded-[0px_0px_30px_30px] overflow-visible">
            {/* ===== FULL-BLEED BACKGROUND ===== */}
            <div className="pointer-events-none absolute inset-0 overflow-visible">
              {/* Gradient strip spans FULL viewport width */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-[1196px] [background:linear-gradient(180deg,rgba(232,238,248,1)_0%,rgba(222,228,240,0)_100%)] rounded-[0px_0px_30px_30px]" />

              {/* --- RIGHT-ANCHORED, RESPONSIVE HERO IMAGE --- */}
              <div className="absolute left-175 top-[120px] h-[685px] w-[clamp(720px,60vw,1316px)] rounded-tl-[30px] rounded-tr-[30px] overflow-hidden">
                <div className="w-full h-full bg-[url('/services.webp')] bg-no-repeat bg-right bg-cover">
                  <div className="absolute w-[543px] h-[549px] top-[200px] right-[60px]">
                    <Image
                      src="/vecteezy-overgrown-green-grass-generative-ai-generated-24190129--1.webp"
                      alt="Overgrown green grass"
                      width={543}
                      height={549}
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Clouds */}
              <div className="absolute top-[220px] right-[220px] blur-[2px]">
                <Image
                  src="/08-clouds-2.webp"
                  alt="Clouds background"
                  width={604}
                  height={819}
                  className="object-cover"
                  priority
                />
              </div>

              <div className="absolute top-[194px] left-0">
                <Image
                  src="/08-clouds-2.webp"
                  alt="Clouds background"
                  width={719}
                  height={643}
                  className="object-cover"
                  priority
                />
              </div>

              {/* Grass bottom-left */}
              <div className="absolute w-[318px] h-[222px] top-[1053px] left-0">
                <Image
                  src="/vecteezy-overgrown-green-grass-generative-ai-generated-24190129-.webp"
                      alt="Overgrown green grass"
                      width={318}
                      height={222}
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
                {/* ===== END FULL-BLEED BACKGROUND ===== */}

                {/* Main content — centered inside 1440 container */}
                <div className="inline-flex flex-col items-start gap-[228px] absolute top-[230px] left-12">
                  <div className="inline-flex flex-col items-start gap-[60px] relative flex-[0_0_auto]">
                    {/* Hero section */}
                    <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
                      <div className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]">
                        <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
                          <div className="w-fit font-normal text-[#394355] text-base leading-[normal] whitespace-nowrap relative [font-family:'Raleway',Helvetica] tracking-[0]">
                            Оснащение шатров
                          </div>
                          {/* SINGLE H1 TAG FOR DESKTOP */}
                          <h1 className="w-[966px] font-medium text-[50px] leading-[normal] relative [font-family:'Raleway',Helvetica] tracking-[0]">
                            <span className="text-[#335dc2] mr-2">
                              ПРИВЛЕКАЙТЕ БОЛЬШЕ
                            </span>
                            <br />
                            <span className="text-[#232c42bf]">
                              КЛИЕНТОВ В БИЗНЕС
                            </span>
                          </h1>
                        </div>
                        <Badge className="inline-flex items-center justify-center gap-2.5 px-3 py-1.5 relative bg-[#4f5d80] rounded-lg overflow-hidden backdrop-blur-[10px]">
                          <span className="font-semibold text-white text-[22px] leading-[normal] text-center [font-family:'Raleway',Helvetica]">
                            СДЕЛАВ ВАШУ КОМПАНИЮ УЗНАВАЕМОЙ СРЕДИ СОТНИ ДРУГИХ
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
                            priority
                          />
                        </div>
                        <div className="w-[538px] font-medium text-[#232c42] text-base leading-6 relative [font-family:'Raleway',Helvetica]">
                          Логотипы, световые конструкции, флаги, занавески и другие
                          элементы
                        </div>
                      </div>
                    </div>

                    {/* CTA section */}
                    <div className="inline-flex flex-col items-center gap-3 relative flex-[0_0_auto]">
                      <div className="relative w-[412px] h-[68px] top-[65px] rounded-2xl">
                        <For3dproject />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Catalog button */}
                <div className="relative top-[630px] left-[500px]">
                  <Button
                    variant="outline"
                    onClick={openPopup}
                    className="w-[203px] h-[68px] bg-[#ededed] rounded-2xl border-none shadow-[0px_22px_44px_rgba(77,77,77,0.4)] backdrop-blur-[10px]"
                  >
                    <span className="[font-family:'Raleway',Helvetica] font-semibold text-[16px] text-center bg-gradient-to-r from-[#243057] to-[#374255] bg-clip-text text-transparent">
                      Смотреть каталог
                      <br />
                      готовых шатров
                    </span>
                  </Button>
                </div>

                {/* Popup */}
                {showPopup && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                    <DownloadCata onClose={closePopup} />
                  </div>
                )}
                {/* Header (still visible on top) */}
                <div className="relative top-[1008px]">
                  <Header />
                </div>
              </section>
            </main>
          </div>

      {/* === Mobile Version === */}
      <div className="block md:hidden mt-20">
        <main className="relative w-full bg-white mx-auto">
          <section className="relative rounded-[0px_0px_20px_20px] overflow-hidden min-h-screen">
            {/* Header */}
            <div className="absolute top-0 left-0 w-full z-50">
              <Header />
            </div>

            {/* Background */}
            <div className="absolute w-full h-full top-0 left-0 rounded-[0px_0px_20px_20px] overflow-hidden">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full top-0 left-0 [background:linear-gradient(180deg,rgba(232,238,248,1)_0%,rgba(222,228,240,0)_100%)]" />

                {/* Main image */}
                <div className="absolute w-full h-[40vh] top-[55vh] left-0 overflow-hidden">
                  <div
                    className="bg-[url(/services.webp)] bg-cover bg-center bg-no-repeat w-full h-full relative"
                    style={{
                      maskImage:
                        "linear-gradient(to bottom, black 70%, transparent 100%)",
                      WebkitMaskImage:
                        "linear-gradient(to bottom, black 70%, transparent 100%)",
                    }}
                  >
                    <div className="absolute w-[40%] h-[40%] top-[50%] right-0">
                      <Image
                        src="/vecteezy-overgrown-green-grass-generative-ai-generated-24190129--1.webp"
                        alt="Overgrown green grass"
                        layout="fill"
                        objectFit="cover"
                        priority
                      />
                    </div>
                  </div>
                </div>

                {/* Clouds */}
                <Image
                  className="top-[15%] right-[5%] blur-[2px] absolute object-contain w-[35%] h-auto max-w-[200px]"
                  src="/08-clouds-2.webp"
                  alt="Clouds background"
                  width={604}
                  height={819}
                  priority
                />
                <Image
                  className="top-[10%] left-0 absolute object-contain w-[45%] h-auto max-w-[250px]"
                  src="/08-clouds-2.webp"
                  alt="Clouds background"
                  width={719}
                  height={643}
                  priority
                />

                {/* Grass */}
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
                <div className="flex flex-col items-start gap-4 w-full">
                  <div className="flex flex-col items-start gap-3 w-full">
                    <div className="font-normal text-[#394355] text-sm w-full">
                      Оснащение шатров
                    </div>
                    {/* MOBILE VERSION - NO H1 HERE (H1 IS ONLY IN DESKTOP VERSION) */}
                    <div className="w-full font-medium text-2xl text-left [font-family:'Raleway',Helvetica] leading-tight">
                      <span className="text-[#335dc2]">
                        ПРИВЛЕКАЙТЕ БОЛЬШЕ
                      </span>
                      <br />
                      <span className="text-[#232c42bf]">
                        КЛИЕНТОВ В БИЗНЕС
                      </span>
                    </div>
                  </div>

                  <Badge className="w-full justify-center py-2 px-3 bg-[#4f5d80] rounded-lg overflow-hidden backdrop-blur-[10px]">
                    <span className="font-semibold text-white text-xs text-center [font-family:'Raleway',Helvetica] leading-tight">
                      СДЕЛАВ ВАШУ КОМПАНИЮ УЗНАВАЕМОЙ СРЕДИ СОТНИ ДРУГИХ
                    </span>
                  </Badge>
                </div>

                <div className="flex items-start gap-2 w-full">
                  <div className="min-w-[20px] min-h-[20px] mt-0.5">
                    <Image
                      src="/group-6.webp"
                      alt="Checkmark icon"
                      width={16}
                      height={16}
                      className="w-4 h-4"
                      priority
                    />
                  </div>
                  <div className="font-medium text-[#232c42] text-xs [font-family:'Raleway',Helvetica] leading-tight">
                    Логотипы, световые конструкции, флаги, занавески и другие
                    элементы
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="relative z-10 px-4 mt-[40vh] mb-8">
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
                  Смотреть каталог
                  <br />
                  готовых шатров
                </span>
              </Button>
            </div>

            {/* Popup */}
            {showPopup && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4">
                <div ref={catalogRef} className="w-full max-w-md">
                  <DownloadCata onClose={closePopup} />
                </div>
              </div>
            )}
          </section>
        </main>
      </div>
    </>
  );
};