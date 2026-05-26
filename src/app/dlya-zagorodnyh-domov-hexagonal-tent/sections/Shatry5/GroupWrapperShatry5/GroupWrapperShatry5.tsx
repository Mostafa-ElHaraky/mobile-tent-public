'use client';

import { useState } from 'react';
import { PlayIcon } from "lucide-react";
import { Card, CardContent } from "../../../../../components/ui/card";
import { ReactElement } from 'react';
import Image from 'next/image';

export const GroupWrapperShatry5 = (): ReactElement => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoId] = useState("096ff1a08687212b781d8917b24c751b");
  const [videoBgImage] = useState("/bg-rutube2.webp");

  const openVideo = () => {
    window.open(
      "https://rutube.ru/video/096ff1a08687212b781d8917b24c751b/", 
      '_blank',
      'noopener,noreferrer'
    );
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleClose = () => {
    setIsPlaying(false);
  };

  return (
    <>
      {/* ========== نسخة الديسكتوب (كما هي، تُعرض فقط على md فأكبر) ========== */}
      <section className="relative w-full h-[516px] bottom-10 md:block hidden">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url(/rectangle-27.webp)" }}
        />
        
        <div className="relative h-full">
          <div className="w-full h-full">
            <div className="relative w-[807px] h-full mx-auto overflow-hidden">
              <div className="relative h-[807px] -top-24 rounded-[403.5px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(82,125,197,1)_0%,rgba(82,125,197,0)_100%)]" />
            </div>
          </div>

          <div className="flex justify-between items-center absolute top-[60px] left-12 right-12">
            <div className="flex flex-col w-[362px] items-start gap-6">
              <h2 className="font-semibold text-4xl [font-family:'Raleway',Helvetica] tracking-[0]">
                <span className="text-[#74a8ff]">Реальный</span>
                <span className="text-white"> пример</span>
              </h2>

              <div className="flex items-start gap-3">
                <p className="font-normal text-white text-lg leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                  <span className="[font-family:'Raleway',Helvetica] font-normal text-white text-lg tracking-[0] leading-6">
                    Наш каркас лежит
                  </span>
                  <span className="font-semibold">&nbsp;</span>
                  <span className="font-semibold underline">
                    всю зиму под слоем снега и ничего с ним не происходит
                  </span>
                </p>
              </div>
            </div>

            <Card className="relative w-[618px] h-[394px] rounded-[20px] overflow-hidden z-10">
              <div 
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{ 
                  backgroundImage: "url(/bg-rutube2.webp)" 
                }}
              />
              <div className="absolute inset-0 bg-black/20" />
              <CardContent className="p-0 h-full flex items-center justify-center relative z-10">
                <button
                  onClick={openVideo}
                  className="group w-[75px] h-[75px] bg-white rounded-[37.5px] flex items-center justify-center hover:bg-blue-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg hover:shadow-xl"
                  aria-label="Смотреть видео"
                >
                  <PlayIcon className="w-[25px] h-[29px] ml-1 text-blue-600 group-hover:text-blue-800 group-hover:scale-110 transition-transform" />
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ========== نسخة الهاتف المحمول ========== */}
      <section className="relative w-full py-12 bg-[url(/rectangle-27.webp)] bg-cover md:hidden">
        <div className="relative w-full mx-auto px-4">
          {/* Background gradient - adjusted for mobile */}
          <div className="absolute right-0 top-0 w-full h-full overflow-hidden">
            <div className="relative h-[400px] w-[400px] -top-24 -right-24 rounded-[200px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(82,125,197,1)_0%,rgba(82,125,197,0)_100%)]" />
          </div>

          {/* Content container - stacked vertically for mobile */}
          <div className="relative flex flex-col items-center gap-8 py-6">
            {/* Text content - centered for mobile */}
            <div className="flex flex-col w-full items-center text-center gap-4 z-10">
              <h2 className="font-semibold text-3xl [font-family:'Raleway',Helvetica] tracking-[0]">
                <span className="text-[#74a8ff]">Реальный</span>
                <span className="text-white"> пример</span>
              </h2>

              <p className="font-normal text-white text-base leading-5 [font-family:'Raleway',Helvetica] tracking-[0] px-4">
                <span>Наш каркас лежит</span>
                <span className="font-semibold">&nbsp;</span>
                <span className="font-semibold underline">
                  всю зиму под слоем снега и ничего с ним не происходит
                </span>
              </p>
            </div>

            {/* Video card - adjusted size for mobile */}
            <Card className="w-full h-[250px] rounded-[20px] overflow-hidden border-0 p-0 z-10">
              <CardContent className="p-0 h-full">
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
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <Image
                        src={videoBgImage}
                        alt="Video background"
                        fill
                        className="object-cover"
                        loading="lazy"
                      />
                    </div>
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#232c42]/80 to-transparent z-10" />
                    
                    {/* Play Button - slightly smaller for mobile */}
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <div className="relative">
                        <div className="absolute inset-0 bg-[#527dc5] rounded-full animate-ping opacity-20 group-hover:opacity-30 transition-opacity"></div>
                        <div className="relative w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-white/90 transition-colors">
                          <PlayIcon className="h-5 w-5 ml-1 text-[#527dc5]" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};