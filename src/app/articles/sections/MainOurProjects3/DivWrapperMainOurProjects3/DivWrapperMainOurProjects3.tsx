'use client';

import React, { useState, useEffect } from 'react';
import { Button } from "../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../components/ui/card";
import Image from "next/image";
import { ReactElement } from 'react';

/* ---------- Compose both sections in one component ---------- */
export const DivWrapperMainOurProjects3 = (): ReactElement => {
  return (
    <>
      <TestimonialsSection />
      <FeaturesSection />
    </>
  );
};

/* =================== TestimonialsSection =================== */
export const TestimonialsSection = (): ReactElement => {
  // Data for testimonial cards
  const testimonialCards = [
    {
      id: 1,
      title: "Ветер",
      iconPath: "/Clip-path-group.webp",
      isImage: false,
      width: 90,
      height: 90,
    },
    {
      id: 2,
      title: "Дождь, снег, град",
      iconPath: "/GROP.webp",
      isImage: true,
      width: 50,
      height: 50,
    },
    {
      id: 3,
      title: "Огонь",
      iconPath: "/GROP-1.webp",
      isImage: true,
      width: 40,
      height: 40,
    },
  ];

  return (
    <>
      {/* Desktop Version (unchanged) */}
      <section className="hidden md:block relative top-[50px] w-full py-12 rounded-[30px] bg-[#394355]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-4xl leading-normal font-normal">
                <span className="font-normal text-white">Нашим </span>
                <span className="font-bold text-[#86b4ff]">шатрам<br /></span>
                <span className="font-bold text-[#86b4ff]">не страшны</span>
              </h2>
            </div>

            <div className="flex flex-wrap gap-8 md:gap-[35px] justify-center">
              {testimonialCards.map((card) => (
                <Card
                  key={card.id}
                  className="w-[260px] h-[116px] bg-white rounded-[20px] shadow-none border-0 "
                >
                  <CardContent className="p-0 flex items-center">
                    <div
                      className="w-[90px] h-[90px] rounded-[45px] flex items-center justify-center ml-[13px] my-[13px]"
                      style={{
                        background: "linear-gradient(180deg, #73A8FF 0%, #6FA7FF 36.5%, #3C6CEC 100%)",
                      }}
                    >
                      {card.isImage ? (
                        <Image
                          src={card.iconPath}
                          alt={card.title}
                          width={card.width}
                          height={card.height}
                          className="object-contain"
                          quality={100}
                          loading="lazy"
                        />
                      ) : (
                        <div 
                          className="w-12 h-12"
                          style={{
                            backgroundImage: "url(/Clip-path-group.webp)",
                            backgroundSize: "100% 100%",
                            backgroundRepeat: "no-repeat"
                          }}
                        />
                      )}
                    </div>
                    <div className="font-bold text-2l text-[#394355] leading-5 ml-6 font-['Raleway',Helvetica]">
                      {card.title}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Version */}
      <section className="md:hidden relative top-[50px] w-full py-8 rounded-[30px] bg-[#394355]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <div className="mb-6 text-center">
              <h2 className="text-3xl leading-normal font-normal">
                <span className="font-normal text-white">Нашим </span>
                <span className="font-bold text-[#86b4ff]">шатрам </span>
                <span className="font-bold text-[#86b4ff]">не страшны</span>
              </h2>
            </div>

            <Card className="w-full bg-white rounded-[20px] shadow-none border-0 p-4">
              <CardContent className="p-0">
                <div className="flex flex-row justify-between items-center">
                  {testimonialCards.map((card) => (
                    <div key={card.id} className="flex flex-col items-center mx-1">
                      <div
                        className="w-[60px] h-[60px] rounded-[30px] flex items-center justify-center"
                        style={{
                          background: "linear-gradient(180deg, #73A8FF 0%, #6FA7FF 36.5%, #3C6CEC 100%)",
                        }}
                      >
                        {card.isImage ? (
                          <Image
                            src={card.iconPath}
                            alt={card.title}
                            width={card.width * 0.7}
                            height={card.height * 0.7}
                            className="object-contain"
                            quality={100}
                            loading="lazy"
                          />
                        ) : (
                          <div 
                            className="w-8 h-8"
                            style={{
                              backgroundImage: "url(/Clip-path-group.webp)",
                              backgroundSize: "100% 100%",
                              backgroundRepeat: "no-repeat"
                            }}
                          />
                        )}
                      </div>
                      <div className="font-bold text-sm text-[#394355] leading-4 mt-2 text-center font-['Raleway',Helvetica]">
                        {card.title}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

/* ===================== FeaturesSection ===================== */
type VideoData = { id: string; bgImage: string }; // <-- string instead of StaticImageData

export const FeaturesSection = (): ReactElement => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);

  // Use absolute paths to files located in /public
  const videoData: VideoData[] = [
    { id: '77871ba30cfd4c611b1ef1c1582e9912', bgImage: '/rutube-thumbnail.webp' },
    { id: '10bc97b3df79d9ac37967a39b1037a5f', bgImage: '/bg-rutube3.webp' },
    { id: 'ac34a17e3572ac3925c698e52ad2b429', bgImage: '/bg-rutube4.webp' },
  ];

  const videoIds = videoData.map(video => video.id);

  const featureData = {
    subtitle: "Еще до производства протестируем шатер для самых сложных условий эксплуатации",
    title: {
      regular: "Шатры выдерживают колосальные ",
      highlighted: "ветровые нагрузки до 35м/c",
    },
    callout: "По запросу рассчитаем снеговую нагрузку от 60 до 380 кг/м2",
    description: {
      regular: "При проектировании макет шатра ",
      bold: "прогоняем через аэротрубу в специальной программе Dlubal rwind",
    },
  };

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? videoIds.length - 1 : prev - 1));
    setIsPlaying(false);
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev === videoIds.length - 1 ? 0 : prev + 1));
    setIsPlaying(false);
  };

  const handlePlay = () => {
    setIsPlaying(true);
    setIframeKey(prev => prev + 1);
  };

  useEffect(() => {
    setIsPlaying(false);
  }, [currentIndex]);

  return (
    <>
      {/* Desktop Version (hidden on mobile) */}
      <section className="hidden md:flex flex-col md:flex-row items-center relative top-[85px] gap-10 w-full py-12 px-4 md:px-12">
        <div className="flex flex-col items-start justify-center gap-10 w-full md:w-1/2">
          <div className="flex flex-col items-start gap-[30px]">
            <div className="flex flex-col w-full max-w-[621px] items-start gap-3">
              <div className="flex items-start gap-3">
                <p className="font-normal text-[#4f5d80] text-sm leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                  <span className="font-medium">
                    {featureData.subtitle.split("шатер")[0]}шатер
                  </span>
                  <span className="font-bold">
                    {featureData.subtitle.split("шатер")[1]}
                  </span>
                </p>
              </div>

              <h2 className="text-3xl md:text-4xl leading-[normal] [font-family:'Raleway',Helvetica] tracking-[0]">
                <span className="font-medium text-[#232c42]">
                  {featureData.title.regular}
                </span>
                <span className="font-bold text-[#527dc5]">
                  {featureData.title.highlighted}
                </span>
              </h2>
            </div>

            <Card className="bg-[#e8edf7] border-none rounded-[10px] w-full">
              <CardContent className="px-4 py-3">
                <p className="font-semibold text-[#394355] text-lg md:text-xl leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                  {featureData.callout}
                </p>
              </CardContent>
            </Card>

            <p className="text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica] tracking-[0] max-w-[643px]">
              <span className="font-normal">
                {featureData.description.regular}
              </span>
              <span className="font-semibold">
                {featureData.description.bold}
              </span>
            </p>
          </div>

          <div className="flex items-center gap-6 w-full justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                className="w-12 h-12 md:w-14 md:h-14 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC] hover:opacity-90 transition-opacity"
                onClick={handlePrev}
              >
                <div className="rotate-180">
                  <Image
                    className="-rotate-180"
                    alt="Previous slide"
                    src="/GROP-10.webp"
                    width={14}
                    height={24}
                    loading="lazy"
                  />
                </div>
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="w-12 h-12 md:w-14 md:h-14 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC] hover:opacity-90 transition-opacity"
                onClick={handleNext}
              >
                <Image
                  alt="Next slide"
                  src="/GROP-11.webp"
                  width={14}
                  height={24}
                  loading="lazy"
                />
              </Button>
            </div>
          </div>
        </div>

        <div className="relative w-full md:w-1/2 max-w-[656px]">
          <Card className="w-full h-[300px] md:h-[394px] bg-white rounded-[20px] border-0 shadow-[0_4px_20px_rgba(0,0,0,0.1)] backdrop-blur-[10px] backdrop-brightness-[100%] flex items-center justify-center overflow-hidden">
            <CardContent className="p-0 flex items-center justify-center w-full h-full">
              {isPlaying ? (
                <div className="w-full h-full relative">
                  <iframe
                    key={iframeKey}
                    className="w-full h-full rounded-[20px]"
                    src={`https://rutube.ru/play/embed/${videoData[currentIndex].id}?autoplay=1`}
                    title="Rutube Video"
                    loading="lazy"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  />
                  <button 
                    className="absolute top-4 right-4 bg-white/80 rounded-full w-8 h-8 flex items-center justify-center hover:bg-white transition-colors shadow-md"
                    onClick={() => setIsPlaying(false)}
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
                  <div className="absolute inset-0 rounded-[20px] overflow-hidden z-0">
                    <Image
                      src={videoData[currentIndex].bgImage}
                      alt={`Video ${currentIndex + 1} background`}
                      fill
                      className="object-cover"
                      /* Removed priority to stop <link rel="preload"> */
                      loading="lazy"
                      fetchPriority="low"
                    />
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#232c42]/80 to-transparent rounded-[20px] z-10" />
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-20 p-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#527dc5] rounded-full animate-ping opacity-20 group-hover:opacity-30 transition-opacity"></div>
                      <div className="w-[75px] h-[75px] bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Image
                          className="ml-1"
                          alt="PlayIcon video"
                          src="/Polygon-2.webp"
                          width={25}
                          height={29}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
          
          <div className="flex justify-center mt-4 gap-2">
            {videoIds.map((_, index) => (
              <button 
                key={index}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-[#527dc5]' : 'bg-[#c1d0e8]'}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Version (hidden on desktop) */}
      <section className="md:hidden flex flex-col items-center relative top-[85px] gap-6 w-full py-8 px-4">
        {/* Text Content */}
        <div className="flex flex-col items-start justify-center gap-6 w-full">
          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-col w-full items-start gap-3">
              <div className="flex items-start gap-3">
                <p className="font-normal text-[#4f5d80] text-sm leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                  <span className="font-medium">
                    {featureData.subtitle.split("шатер")[0]}шатер
                  </span>
                  <span className="font-bold">
                    {featureData.subtitle.split("шатер")[1]}
                  </span>
                </p>
              </div>

              <h2 className="text-2xl leading-[normal] [font-family:'Raleway',Helvetica] tracking-[0]">
                <span className="font-medium text-[#232c42]">
                  {featureData.title.regular}
                </span>
                <span className="font-bold text-[#527dc5]">
                  {featureData.title.highlighted}
                </span>
              </h2>
            </div>

            <Card className="bg-[#e8edf7] border-none rounded-[10px] w-full">
              <CardContent className="px-4 py-3">
                <p className="font-semibold text-[#394355] text-lg leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                  {featureData.callout}
                </p>
              </CardContent>
            </Card>

            <p className="text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica] tracking-[0] w-full">
              <span className="font-normal">
                {featureData.description.regular}
              </span>
              <span className="font-semibold">
                {featureData.description.bold}
              </span>
            </p>
          </div>
        </div>

        {/* Video Card */}
        <div className="relative w-full max-w:[656px]">
          <Card className="w-full h-[300px] bg-white rounded-[20px] border-0 shadow-[0_4px_20px_rgba(0,0,0,0.1)] backdrop-blur-[10px] backdrop-brightness-[100%] flex items-center justify-center overflow-hidden">
            <CardContent className="p-0 flex items-center justify-center w-full h-full">
              {isPlaying ? (
                <div className="w-full h-full relative">
                  <iframe
                    key={iframeKey}
                    className="w-full h-full rounded-[20px]"
                    src={`https://rutube.ru/play/embed/${videoData[currentIndex].id}?autoplay=1`}
                    title="Rutube Video"
                    loading="lazy"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  />
                  <button 
                    className="absolute top-4 right-4 bg-white/80 rounded-full w-8 h-8 flex items-center justify-center hover:bg-white transition-colors shadow-md"
                    onClick={() => setIsPlaying(false)}
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
                  <div className="absolute inset-0 rounded-[20px] overflow-hidden z-0">
                    <Image
                      src={videoData[currentIndex].bgImage}
                      alt={`Video ${currentIndex + 1} background`}
                      fill
                      className="object-cover"
                      /* Removed priority to stop <link rel="preload"> */
                      loading="lazy"
                      fetchPriority="low"
                    />
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#232c42]/80 to-transparent rounded-[20px] z-10" />
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-20 p-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#527dc5] rounded-full animate-ping opacity-20 group-hover:opacity-30 transition-opacity"></div>
                      <div className="w-[75px] h-[75px] bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Image
                          className="ml-1"
                          alt="PlayIcon video"
                          src="/Polygon-2.webp"
                          width={25}
                          height={29}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
          
          {/* Navigation buttons and dots */}
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                className="w-12 h-12 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC] hover:opacity-90 transition-opacity"
                onClick={handlePrev}
              >
                <div className="rotate-180">
                  <Image
                    className="-rotate-180"
                    alt="Previous slide"
                    src="/GROP-10.webp"
                    width={14}
                    height={24}
                  />
                </div>
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="w-12 h-12 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC] hover:opacity-90 transition-opacity"
                onClick={handleNext}
              >
                <Image
                  alt="Next slide"
                  src="/GROP-11.webp"
                  width={14}
                  height={24}
                />
              </Button>
            </div>
            
            <div className="flex gap-2">
              {videoIds.map((_, index) => (
                <button 
                  key={index}
                  className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-[#527dc5]' : 'bg-[#c1d0e8]'}`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DivWrapperMainOurProjects3;
