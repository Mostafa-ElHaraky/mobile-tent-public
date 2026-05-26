'use client';

import { useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { useRef, useEffect } from "react";
import { ReactElement } from 'react';
import Image from 'next/image';
import For3dproject from '../../../../components/ui/For3dproject';
import DownloadCata from '../../../../components/ui/DownloadCata';
import Header from '../../../../components/ui/Header'; // Import the Header component



export const Services1 = (): ReactElement => {
  
  // Your existing state and refs
  const catalogRef = useRef<HTMLDivElement | null>(null);

  // Your useEffect remains the same
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (catalogRef.current && !catalogRef.current.contains(event.target as Node)) {
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // State to control popup visibility
  const [showPopup, setShowPopup] = useState(false);

  // Handlers to show/hide popup
  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  return (
         <main className="relative w-full max-w-[1440px] h-[805px] bg-white mx-auto">
      <section className="relative h-[805px] rounded-[0px_0px_30px_30px]">
   {/* Background elements */}
        <div className="absolute w-full h-[805px] top-0 left-0 rounded-[0px_0px_30px_30px] overflow-hidden">
         <div className="relative w-[1734px] h-[1275px] top-[-194px]">
            <div className="absolute w-[1734px] h-[1196px] top-0 left-0 [background:linear-gradient(180deg,rgba(232,238,248,1)_0%,rgba(222,228,240,0)_100%)]" />

            <div className="absolute w-[1906px] h-[885px] top-[367px] left-0 rounded-[0px_0px_20px_20px] overflow-hidden">
            <div  className="bg-[url(/Tent.I03.2k.png)] bg-cover bg-center bg-no-repeat w-[1906px] h-[885px] relative top-[-167px] left-[643px] rounded-tl-[30px] rounded-tr-[30px] ">
  <div className="absolute w-[543px] h-[549px] top-[200px] left-[1007px]">
    <Image
      src="/vecteezy-overgrown-green-grass-generative-ai-generated-24190129--1.png"
      alt="Overgrown green grass"
      width={543}
      height={549}
      className="object-cover"
    />
  </div>
              </div>
            </div>

<div className="w-[604px] h-[819px] top-[220px] left-[836px] blur-[2px] absolute">
  <Image
    src="/08-clouds-2.png"
    alt="Clouds background"
    width={604}
    height={819}
    className="object-cover"
  />
</div>

<div className="w-[719px] h-[643px] top-[194px] left-0 absolute">
  <Image
    src="/08-clouds-2.png"
    alt="Clouds background"
    width={719}
    height={643}
    className="object-cover"
  />
</div>
            <div className="relative top-[1275px]">

                      <Header/>
              
            </div>



<div className="absolute w-[318px] h-[222px] top-[1053px] left-0">
  <Image
    src="/vecteezy-overgrown-green-grass-generative-ai-generated-24190129-.png"
    alt="Overgrown green grass"
    width={318}
    height={222}
    className="object-cover"
  />
</div>
          </div>
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
                      Оснащение шатров
                    </span>
                  </div>

                  <h1 className="w-[966px] font-medium text-[50px] leading-[normal] relative [font-family:'Raleway',Helvetica] tracking-[0]">
                    <span className="text-[#335dc2] mr-2">СДЕЛАЙТЕ ВАШ ШАТЕР</span>
                    <span className="text-[#232c42bf]">УЮТНЫМ И УЗНАВАЕМЫМ</span>
                  </h1>
                </div>

                <Badge className="inline-flex items-center justify-center gap-2.5 px-3 py-1.5 relative flex-[0_0_auto] bg-[#4f5d80] rounded-lg overflow-hidden backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)]">
                  <span className="mt-[-1.00px] font-semibold text-white text-[22px] leading-[normal] whitespace-nowrap relative [font-family:'Raleway',Helvetica] tracking-[0]">
                    а меропрития проводимые в нем незабываемыми
                  </span>
                </Badge>
              </div>

              {/* Feature highlight */}
              <div className="inline-flex items-start gap-1.5 relative flex-[0_0_auto]">
                <div className="relative w-6 h-6">
<Image
  className="absolute top-1 left-1"
  src="/group-6.png"
  alt="Checkmark icon"
  width={16}
  height={16}
/>
                </div>

                <div className="w-[538px] mt-[-1.00px] font-medium text-[#232c42] text-base leading-6 relative [font-family:'Raleway',Helvetica] tracking-[0]">
                  Подберем правильное оснащение, доставим и смонтируем в срок даже, если «нужно было еще вчера»
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
                  бизнес будет развиваться
                </span>

                <span className="[font-family:'Raleway',Helvetica] font-normal text-[#394355] text-xs tracking-[0]">
                 , а клиенты оставаться довольными
                </span>
              </div>

              <div className="relative w-[412px] h-[68px] rounded-2xl ">
                      <For3dproject />
              </div>
            </div>
          </div>
        </div>


  {/* Smaller frosted glass button */}
      {/* Your existing button */}
      <div className="relative top-[610px] left-[500px]">
        <Button
          variant="outline"
          onClick={openPopup} // Add click handler here
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

      </section>
    </main>
  );
};