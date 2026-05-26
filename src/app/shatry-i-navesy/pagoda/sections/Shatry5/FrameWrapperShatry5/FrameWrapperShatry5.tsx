'use client';

import { PlayIcon } from "lucide-react";
import { Button } from "../../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../../components/ui/card";
import { ReactElement, useState } from 'react';
import Image from 'next/image';

type ButtonCard = {
  icon: React.ReactNode;
  text: string;
  onClick?: () => void; // make optional so conditions are valid
};

export const FrameWrapperShatry5 = (): ReactElement => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showLowWickInfo, setShowLowWickInfo] = useState(false);

  const videoId = "ac34a17e3572ac3925c698e52ad2b429";
  const videoBgImage = "/bg-rutube.webp";
  const videoUrl = "https://rutube.ru/video/10bc97b3df79d9ac37967a39b1037a5f/";

  const featureData = [
    {
      text: "Не позволит влаге и грязи распространятся по полотну",
      icon: "/DOCgroup.webp",
    },
  ];

  const buttonCards: ButtonCard[] = [
    {
      icon: (
        <div className="relative w-[35px] h-[35px] top-2 left-2 bg-[url(/DOCgroup-1.webp)] bg-[100%_100%]" />
      ),
      text: "Как работает покрытие Low wick",
      onClick: () => setShowLowWickInfo(true),
    },
    {
      icon: (
        <div className="relative w-[47px] h-[33px] top-[9px] left-0.5">
          <div className="relative h-[33px]">
            <div className="absolute w-[23px] h-[23px] top-[5px] left-3 bg-white rounded-[11.5px]" />
            <Image
              className="absolute top-0 left-0"
              alt="Vector"
              src="/DOCvector.webp"
              width={47}
              height={33}
              loading="lazy"
            />
          </div>
        </div>
      ),
      text: "Видео\nо технологии",
      onClick: () => window.open(videoUrl, "_blank"),
    },
  ];

  const materialImages = [
    { src: "/DOCrectangle-44.webp", alt: "Rectangle" },
    { src: "/DOCrectangle-45.webp", alt: "Rectangle" },
    { src: "/DOCrectangle-46.webp", alt: "Rectangle" },
  ];

  const handlePlay = () => setIsPlaying(true);
  const handleClose = () => setIsPlaying(false);

  return (
    <>
      {/* Low Wick Info Modal */}
      {showLowWickInfo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="lowwick-title"
        >
          {/* Backdrop */}
          <button
            aria-label="Закрыть"
            className="absolute inset-0 bg-black/40"
            onClick={() => setShowLowWickInfo(false)}
          />
          {/* Panel */}
          <div className="relative w-[min(92vw,720px)] max-h-[85vh] overflow-auto rounded-2xl bg-white p-6 shadow-xl">
            <div className="flex items-start justify-between gap-4">
              <h3
                id="lowwick-title"
                className="text-xl font-semibold text-[#232c42] [font-family:'Raleway',Helvetica]"
              >
                Как работает покрытие Low wick
              </h3>
              <button
                onClick={() => setShowLowWickInfo(false)}
                className="rounded-full bg-white/80 w-9 h-9 flex items-center justify-center shadow hover:bg-white transition"
                aria-label="Закрыть модальное окно"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#527dc5]" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            <div className="mt-4 space-y-3 text-[#4f5d80] text-sm leading-6 [font-family:'Raleway',Helvetica]">
              <p><span className="font-bold text-[#232c42]">Low wick</span> — это специальная пропитка и конструкция нити, которая блокирует <span className="font-semibold">капиллярное подтягивание</span> влаги и грязи вдоль шва и через микропоры ткани.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><span className="font-semibold">Запайка/пропитка нитей</span>: волокна имеют пониженную смачиваемость, из-за чего вода не «ползёт» по нити.</li>
                <li><span className="font-semibold">Гидрофобный барьер</span>: капли собираются и скатываются, не затягивая грязь внутрь полотна.</li>
                <li><span className="font-semibold">Чистые швы</span>: на швах отсутствуют мокрые дорожки и разводы, внешний вид дольше остаётся «как новый».</li>
                <li><span className="font-semibold">Долговечность</span>: меньше замачивания — меньше рисков плесени и деградации ПВХ-покрытия.</li>
                <li><span className="font-semibold">Уход</span>: достаточно мягкой щётки/губки и тёплой воды с нейтральным средством; абразивы и растворители не требуются.</li>
              </ul>
              <p>Применяется в тентах и мембранах, где важны <span className="font-semibold">чистота фасада, герметичность</span> и ресурс при интенсивной эксплуатации.</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button onClick={() => setShowLowWickInfo(false)} className="rounded-full">
                Понятно
              </Button>
              <Button
                variant="secondary"
                className="rounded-full"
                onClick={() => setShowLowWickInfo(false)}
              >
                Закрыть
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Version */}
      <div className="hidden md:block w-full h-[659px] relative py-6">
        <div className="flex flex-col w-[654px] items-start gap-6">
          <h2 className="w-[530px] [font-family:'Raleway',Helvetica] font-semibold text-4xl tracking-[0] leading-[normal]">
            <span className="text-[#232c42]">Запатентованное </span>
            <span className="text-[#527dc5]">покрытие тента Low wick</span>
          </h2>

          {featureData.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="relative w-6 h-6">
                <Image
                  className="absolute top-0.5 left-1"
                  alt="Group"
                  src={feature.icon}
                  width={17}
                  height={20}
                  loading="lazy"
                />
              </div>
              <p className="font-medium text-[#4f5d80] text-lg leading-6 w-fit [font-family:'Raleway',Helvetica] tracking-[0] whitespace-nowrap">
                {feature.text}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-start gap-6 absolute top-1 left-[723px]">
          {buttonCards.map((card, index) => {
            const isInteractive = typeof card.onClick === 'function';
            return (
              <Card
                key={index}
                className={`flex flex-col items-start gap-2.5 px-6 py-3 bg-white rounded-[50px] border-solid shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] border-0 ${isInteractive ? 'cursor-pointer hover:shadow-md transition-shadow' : ''}`}
                onClick={card.onClick}
                role={isInteractive ? 'button' : undefined}
                tabIndex={isInteractive ? 0 : -1}
                onKeyDown={(e) => {
                  if (!isInteractive) return;
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    card.onClick?.();
                  }
                }}
                aria-label={card.text.replace('\n', ' ')}
              >
                <CardContent className="p-0">
                  <div className="flex items-center gap-[15px]">
                    <div className="relative w-[50px] h-[50px]">{card.icon}</div>
                    <div className="w-fit [font-family:'Raleway',Helvetica] font-bold text-[#232c42] text-base tracking-[0] leading-[normal] whitespace-pre-line">
                      {card.text}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="flex flex-col items-start gap-2.5 p-6 absolute top-[325px] left-0 rounded-2xl overflow-hidden shadow-[0px_24px_38px_#161d2414] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.7)_100%)] border-0 ">
          <CardContent className="p-0">
            <div className="flex flex-col items-start gap-6">
              <h3 className="w-[609px] [font-family:'Raleway',Helvetica] font-semibold text-xl tracking-[0] leading-6">
                <span className="text-[#242f57]">Для каркаса используем </span>
                <span className="text-[#527dc5]">
                  высокопрочный металл первого класса - анодированный алюминий
                </span>
              </h3>

              <p className="w-fit font-medium text-[#4f5d80] text-sm leading-6 whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                Обязательно с оцинковкой: холодной или горячей
              </p>

              <div className="flex flex-col w-[609px] items-center justify-center gap-2.5 px-3 py-1.5 bg-[#f5f6ff] rounded-[10px]">
                <div className="flex w-[577px] items-center gap-[22px]">
                  <div className="w-fit text-[#6FA7FF]  [text-fill-color:transparent] [font-family:'Raleway',Helvetica] font-bold text-[46px] tracking-[0] leading-[normal] whitespace-nowrap">
                    25 лет
                  </div>
                  <div className="w-fit font-normal text-[#4f5d80] text-base leading-5 whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                    <span className="font-bold">Гарантия от коррозии </span>
                    <span className="[font-family:'Raleway',Helvetica] font-normal text-[#4f5d80] text-base tracking-[0] leading-5">
                      при заказе горячей оцинковки
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="absolute w-[618px] h-[394px] top-[165px] left-[723px] rounded-[20px] overflow-hidden">
          {isPlaying ? (
            <div className="relative w-full h-full">
              <iframe
                className="w-full h-full"
                src={`https://rutube.ru/play/embed/${videoId}?autoplay=1`}
                title="Rutube Video"
                allow="autoplay; fullscreen"
                allowFullScreen
                loading="lazy"
              />
              <button 
                className="absolute top-4 right-4 bg-white/80 rounded-full w-8 h-8 flex items-center justify-center hover:bg-white transition-colors shadow-md z-20"
                onClick={handleClose}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#527dc5]">
                  <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          ) : (
            <div 
              className="relative w-full h-full cursor-pointer group" 
              onClick={handlePlay}
            >
              <div className="absolute inset-0">
                <Image
                  src={videoBgImage}
                  alt="Video background"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#232c42]/80 to-transparent z-10" />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#527dc5] rounded-full animate-ping opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <Button
                    className="w-[75px] h-[75px] rounded-full bg-white shadow-lg hover:bg-white/90"
                  >
                    <PlayIcon className="w-[25px] h-[29px] text-[#527dc5]" />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="absolute w-[226px] h-[125px] top-[180px] left-3">
          <div className="relative w-[266px] h-[169px] -left-5">
            {materialImages.map((image, index) => (
              <Image
                key={index}
                className="absolute top-0"
                loading="lazy"
                alt={image.alt}
                src={image.src}
                width={131}
                height={169}
                style={{ left: `${index * 68}px` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden w-full p-4 relative">
        {/* Title */}
        <div className="flex flex-col w-full items-start gap-4 mb-4">
          <h2 className="w-full [font-family:'Raleway',Helvetica] font-semibold text-2xl tracking-[0] leading-[normal]">
            <span className="text-[#232c42]">Запатентованное </span>
            <span className="text-[#527dc5]">покрытие тента Low wick</span>
          </h2>

          {featureData.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="relative w-6 h-6">
                <Image
                  className="absolute top-0.5 left-1"
                  alt="Group"
                  src={feature.icon}
                  width={17}
                  height={20}
                  loading="lazy"
                />
              </div>
              <p className="font-medium text-[#4f5d80] text-base leading-6 w-fit [font-family:'Raleway',Helvetica] tracking-[0]">
                {feature.text}
              </p>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className="relative w-full aspect-video rounded-[20px] overflow-hidden mb-4">
          {isPlaying ? (
            <div className="relative w-full h-full">
              <iframe
                className="w-full h-full"
                src={`https://rutube.ru/play/embed/${videoId}?autoplay=1`}
                title="Rutube Video"
                allow="autoplay; fullscreen"
                allowFullScreen
                loading="lazy"
              />
              <button 
                className="absolute top-2 right-2 bg-white/80 rounded-full w-8 h-8 flex items-center justify-center hover:bg-white transition-colors shadow-md z-20"
                onClick={handleClose}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#527dc5]">
                  <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          ) : (
            <div 
              className="relative w-full h-full cursor-pointer group" 
              onClick={handlePlay}
            >
              <div className="absolute inset-0">
                <Image
                  src={videoBgImage}
                  alt="Video background"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#232c42]/80 to-transparent z-10" />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#527dc5] rounded-full animate-ping opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <Button
                    className="w-[50px] h-[50px] rounded-full bg-white shadow-lg hover:bg-white/90"
                  >
                    <PlayIcon className="w-[20px] h-[20px] text-[#527dc5]" />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="flex flex-row gap-3 w-full mb-4">
          {buttonCards.map((card, index) => {
            const isInteractive = typeof card.onClick === 'function';
            return (
              <Card
                key={index}
                className={`flex-1 flex flex-col items-start gap-2.5 px-4 py-3 bg-white rounded-[50px] border-solid shadow-sm backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] border-0 ${isInteractive ? 'cursor-pointer hover:shadow-md transition-shadow' : ''}`}
                onClick={card.onClick}
                role={isInteractive ? 'button' : undefined}
                tabIndex={isInteractive ? 0 : -1}
                onKeyDown={(e) => {
                  if (!isInteractive) return;
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    card.onClick?.();
                  }
                }}
                aria-label={card.text.replace('\n', ' ')}
              >
                <CardContent className="p-0">
                  <div className="flex items-center gap-3">
                    <div className="relative w-[40px] h-[40px]">{card.icon}</div>
                    <div className="w-fit [font-family:'Raleway',Helvetica] font-bold text-[#232c42] text-sm tracking-[0] leading-[normal] whitespace-pre-line">
                      {card.text}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Info Card */}
        <Card className="flex flex-col items-start gap-2.5 p-4 w-full rounded-2xl overflow-hidden shadow-sm backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.7)_100%)] border-0 mb-4">
          <CardContent className="p-0">
            <div className="flex flex-col items-start gap-4">
              <h3 className="w-full [font-family:'Raleway',Helvetica] font-semibold text-lg tracking-[0] leading-6">
                <span className="text-[#242f57]">Для каркаса используем </span>
                <span className="text-[#527dc5]">
                  высокопрочный металл первого класса - анодированный алюминий
                </span>
              </h3>

              <p className="w-fit font-medium text-[#4f5d80] text-sm leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                Обязательно с оцинковкой: холодной или горячей
              </p>

              <div className="flex flex-col w-full items-center justify-center gap-2.5 px-3 py-1.5 bg-[#f5f6ff] rounded-[10px]">
                <div className="flex w-full items-center gap-3">
                  <div className="w-fit text-[#6FA7FF] [text-fill-color:transparent] [font-family:'Raleway',Helvetica] font-bold text-3xl tracking-[0] leading-[normal] whitespace-nowrap">
                    25 лет
                  </div>
                  <div className="w-fit font-normal text-[#4f5d80] text-sm leading-5 [font-family:'Raleway',Helvetica] tracking-[0]">
                    <span className="font-bold">Гарантия от коррозии </span>
                    <span className="[font-family:'Raleway',Helvetica] font-normal text-[#4f5d80] text-sm tracking-[0] leading-5">
                      при заказе горячей оцинковки
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Material Images */}
        <div className="flex justify-center w-full h-[100px]">
          <div className="relative w-full max-w-[500px] h-[130px]">
            {materialImages.map((image, index) => (
              <Image
                key={index}
                className="absolute top-0 transition-all duration-300 hover:scale-110"
                loading="lazy"
                alt={image.alt}
                src={image.src}
                width={120}
                height={156}
                style={{
                  left: `calc(50% + ${(index - materialImages.length / 2) * 70}px)`,
                  transform: 'translateX(-30%)'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
