'use client';

import { PlayIcon } from "lucide-react";
import { Card, CardContent } from "../../../components/ui/card";
import { ReactElement, useState } from 'react';
import Image from 'next/image';

export const GroupByAnima1 = (): ReactElement => {
  // State for video playback
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "ac34a17e3572ac3925c698e52ad2b429"; // Example video ID
  const videoBgImage = "/bg-rutube4.webp"; // Background image path

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleClose = () => {
    setIsPlaying(false);
  };

  return (
    <>
      {/* Desktop Version - remains unchanged */}
      <section className="relative w-full py-16 bg-[url(/rectangle-27.webp)] bg-cover hidden md:block">
        <div className="relative w-full max-w-[1440px] mx-auto">
          {/* Background gradient */}
          <div className="absolute right-0 top-0 w-[807px] h-full overflow-hidden">
            <div className="relative h-[807px] -top-24 rounded-[403.5px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(82,125,197,1)_0%,rgba(82,125,197,0)_100%)]" />
          </div>

          {/* Content container */}
          <div className="relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-[358px] px-12 py-10">
            {/* Text content */}
            <div className="flex flex-col w-full md:w-[362px] items-start gap-6">
              <h2 className="font-semibold text-4xl [font-family:'Raleway',Helvetica] tracking-[0]">
                <span className="text-[#74a8ff]">Реальный</span>
                <span className="text-white"> пример</span>
              </h2>

              <p className="font-normal text-white text-lg leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                <span>Наш каркас лежит</span>
                <span className="font-semibold">&nbsp;</span>
                <span className="font-semibold underline">
                  всю зиму под слоем снега и ничего с ним не происходит
                </span>
              </p>
            </div>

            {/* Video card */}
            <Card className="w-full md:w-[618px] h-[394px] rounded-[20px] overflow-hidden border-0 p-0">
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
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <div className="relative">
                        <div className="absolute inset-0 bg-[#527dc5] rounded-full animate-ping opacity-20 group-hover:opacity-30 transition-opacity"></div>
                        <div className="relative w-[75px] h-[75px] bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-white/90 transition-colors">
                          <PlayIcon className="h-7 w-7 ml-1 text-[#527dc5]" />
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

      {/* Mobile Version */}
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