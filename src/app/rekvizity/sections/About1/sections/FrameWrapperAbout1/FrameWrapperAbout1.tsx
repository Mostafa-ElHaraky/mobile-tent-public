'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ReactElement } from 'react';
import { Badge } from "../../../../../../components/ui/badge";
import { Card, CardContent } from "../../../../../../components/ui/card";

export const FrameWrapperAbout1 = (): ReactElement => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  return (
    <>
      {/* Desktop Version */}
      <div className="relative top-[200px] left-[40px] hidden md:block">
        <div className="flex flex-col md:flex-row items-start gap-[170px] w-full py-8">
          <div className="flex flex-col gap-7 w-full md:w-[532px]">
            <div className="flex flex-col items-start gap-[22px]">
              <div className="flex flex-col items-start gap-3">
                {/* VISUAL HEADING - styled div for desktop */}
                <div className="font-['Raleway',Helvetica] font-semibold text-4xl tracking-[0]">
                  <span className="text-[#394355]">О компания</span>
                  <span className="text-[#527dc5]"> MobileTent</span>
                </div>
              </div>

              <div className="flex flex-col items-start gap-3">
                <div className="flex flex-col items-start gap-9">
                  <div className="flex flex-col items-start gap-1.5">
                    <div className="flex flex-col items-start gap-6">
                      <Badge className="px-3 py-1.5 bg-[#73a7ff] rounded-lg">
                        <span className="font-['Raleway',Helvetica] font-medium text-white text-lg leading-6">
                          Производство и продажа тентовых конструкций и шатров по
                          всей России и СНГ
                        </span>
                      </Badge>

                      <p className="text-[#394355] text-sm font-['Raleway',Helvetica] font-medium tracking-[0] leading-6 max-w-[447px]">
                        Ваши мероприятия будут яркими и уютными, а бизнес будет
                        развиваться с красивыми и надежными шатрами от MobilTent
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="rounded-[20px] overflow-hidden border-0 shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] [background:linear-gradient(159deg,rgba(36,48,87,1)_0%,rgba(55,66,85,1)_100%)]">
              <CardContent className="p-[26px] flex flex-col gap-4">
                <p className="font-normal text-white text-lg leading-6 font-['Raleway',Helvetica] tracking-[0]">
                  Проектируем и создаем с душой удобные, практичные
                  <br />
                  и красивые тентовые продукты для вашего бизнеса
                </p>

                <Image
                  src="/About1-line-2.webp"
                  alt="Line"
                  layout="fill"
                  objectFit="cover"
                  priority
                />

                <div className="flex flex-col gap-9">
                  <div className="flex flex-col gap-4">
                    <h2 className="font-semibold text-white text-2xl leading-6 whitespace-nowrap font-['Raleway',Helvetica] tracking-[0]">
                      Мировой опыт
                    </h2>

                    <div className="flex flex-col gap-[17px]">
                      <p className="text-white text-lg font-['Raleway',Helvetica] font-medium tracking-[0] leading-6">
                        В тесном контакте с лидером и основателем рынка
                        <br />
                        этой сферы компанией Vector Foiltec
                      </p>

                      <div className="relative left-[350px]">
                        <span
                          style={{
                            width: "155px",
                            height: "24px",
                            fontFamily: "Raleway",
                            fontWeight: 700,
                            fontStyle: "italic",
                            fontSize: "18px",
                            lineHeight: "24px",
                            letterSpacing: "0%",
                            fontVariantNumeric: "lining-nums proportional-nums",
                            background:
                              "linear-gradient(156.3deg, #73A8FF 15.25%, #6FA7FF 85.06%, #3C6CEC 206.51%)",
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Vector Foiltec
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="w-full md:w-[656px] h-[473px] bg-white rounded-[20px] border-0 shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] flex items-center justify-center overflow-hidden relative">
            <CardContent className="p-0 flex items-center justify-center w-full h-full">
              {isPlaying ? (
                <iframe
                  className="w-full h-full rounded-[20px]"
                  src="https://rutube.ru/play/embed/51679662e77a22b3b4df5ba3e06d0bc0"
                  title="Rutube Video"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="relative w-full h-full cursor-pointer" onClick={() => setIsPlaying(true)}>
                  <Image
                    src="/rutube-thumbnail.webp"
                    alt="Video thumbnail"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-[20px]"
                    priority
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[75px] h-[75px] bg-[#f5f6ff] rounded-full flex items-center justify-center shadow-lg">
                      <Image
                        src="/About1-polygon-2.webp"
                        alt="Play button"
                        width={25}
                        height={29}
                        priority
                      />
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="block md:hidden px-4 py-8">
        <div className="flex flex-col items-start gap-8 w-full">
          <div className="flex flex-col gap-7 w-full">
            <div className="flex flex-col items-start gap-[22px]">
              <div className="flex flex-col items-start gap-3">
                {/* VISUAL HEADING - styled div for mobile */}
                <div className="font-['Raleway',Helvetica] font-semibold text-3xl tracking-[0]">
                  <span className="text-[#394355]">О компания</span>
                  <span className="text-[#527dc5]"> MobileTent</span>
                </div>
              </div>

              <div className="flex flex-col items-start gap-3">
                <div className="flex flex-col items-start gap-6">
                  <div className="flex flex-col items-start gap-1.5">
                    <div className="flex flex-col items-start gap-6">
                      <Badge className="px-3 py-1.5 bg-[#73a7ff] rounded-lg w-full">
                        <span className="font-['Raleway',Helvetica] font-medium text-white text-base leading-6">
                          Производство и продажа тентовых конструкций и шатров по
                          всей России и СНГ
                        </span>
                      </Badge>

                      <p className="text-[#394355] text-sm font-['Raleway',Helvetica] font-medium tracking-[0] leading-6 w-full">
                        Ваши мероприятия будут яркими и уютными, а бизнес будет
                        развиваться с красивыми и надежными шатрами от MobilTent
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          <Card className="w-full h-[300px] bg-white rounded-[20px] border-0 shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] flex items-center justify-center overflow-hidden relative">
            <CardContent className="p-0 flex items-center justify-center w-full h-full">
              {isPlaying ? (
                <iframe
                  className="w-full h-full rounded-[20px]"
                  src="https://rutube.ru/play/embed/51679662e77a22b3b4df5ba3e06d0bc0"
                  title="Rutube Video"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="relative w-full h-full cursor-pointer" onClick={() => setIsPlaying(true)}>
                  <Image
                    src="/rutube-thumbnail.webp"
                    alt="Video thumbnail"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-[20px]"
                    priority
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[60px] h-[60px] bg-[#f5f6ff] rounded-full flex items-center justify-center shadow-lg">
                      <Image
                        src="/About1-polygon-2.webp"
                        alt="Play button"
                        width={20}
                        height={23}
                        priority
                      />
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
           <Card className="rounded-[20px] overflow-hidden border-0 shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] [background:linear-gradient(159deg,rgba(36,48,87,1)_0%,rgba(55,66,85,1)_100%)]">
              <CardContent className="p-5 flex flex-col gap-4">
                <p className="font-normal text-white text-base leading-6 font-['Raleway',Helvetica] tracking-[0]">
                  Проектируем и создаем с душой удобные, практичные
                  и красивые тентовые продукты для вашего бизнеса
                </p>

                <Image
                  src="/About1-line-2.webp"
                  alt="Line"
                  width={300}
                  height={2}
                  className="w-full"
                  priority
                />

                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-4">
                    <h2 className="font-semibold text-white text-xl leading-6 font-['Raleway',Helvetica] tracking-[0]">
                      Мировой опыт
                    </h2>

                    <div className="flex flex-col gap-4">
                      <p className="text-white text-base font-['Raleway',Helvetica] font-medium tracking-[0] leading-6">
                        В тесном контакте с лидером и основателем рынка
                        этой сферы компанией Vector Foiltec
                      </p>

                      <div className="flex justify-end">
                        <span
                          style={{
                            fontFamily: "Raleway",
                            fontWeight: 700,
                            fontStyle: "italic",
                            fontSize: "16px",
                            lineHeight: "24px",
                            letterSpacing: "0%",
                            fontVariantNumeric: "lining-nums proportional-nums",
                            background:
                              "linear-gradient(156.3deg, #73A8FF 15.25%, #6FA7FF 85.06%, #3C6CEC 206.51%)",
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                          }}
                        >
                          Vector Foiltec
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};