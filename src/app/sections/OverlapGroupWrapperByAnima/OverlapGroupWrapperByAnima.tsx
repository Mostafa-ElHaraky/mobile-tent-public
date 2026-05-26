'use client';

import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { ReactElement, useState } from 'react';
import Image from 'next/image';
import Consultaionfor3d from "../../../components/ui/Consultaionfor3d";

export const OverlapGroupWrapperByAnima = (): ReactElement => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Desktop Version */}
      <section className="hidden md:block relative w-full h-[488px] top-[3px] my-3">
        <Card className="relative w-full h-[456px] rounded-[30px] overflow-hidden border-0">
          <CardContent className="p-0 h-full">
            <div className="absolute inset-0 rounded-[30px] [background:linear-gradient(159deg,rgba(36,48,87,1)_0%,rgba(55,66,85,1)_100%)]" />

            {/* Background images */}
            <div className="relative">
            <Image
              className="absolute w-[846px] h-[456px] top-0 right-0 rounded-[30px]"
              alt="Fields at mountain"
              src="/summer-landscape--1--------1.webp"
              width={846}
              height={456}
              loading="lazy"
            />
           <div 
              className="absolute w-[846px] h-[456px] top-0 right-0 rounded-[30px]"
              style={{
                background: 'linear-gradient(270deg, rgba(47, 58, 87, 0) 56.04%, rgba(47, 58, 87, 0.54) 76.44%, #2F3A57 100%)'
              }}
            />
            </div>

            {/* Content container */}
            <div className="flex flex-col items-start gap-[46px] absolute top-[45px] left-[84px]">
              {/* Text content */}
              <div className="flex flex-col items-start gap-6">
                <h2 className="w-[546px] mt-[-1.00px] [font-family:'Raleway',Helvetica] font-normal text-4xl tracking-[0] leading-normal">
                  <span className="font-medium text-white">
                    Получите 3D модель{" "}
                  </span>
                  <span className="font-bold text-[#9ec2ff]">
                    шатра
                    <br />
                  </span>
                  <span className="font-medium text-white">
                    по фотографии площадки
                  </span>
                </h2>

                <p className="w-[635px] font-medium text-lg leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                  <span className="text-white">
                    Сообщите точные размеры, пришлите фото местности,
                    <br />
                    где будет располагаться{" "}
                  </span>
                  <a href="/shatry">
                  <span className="text-[#9ec2ff] underline">шатер</span>
                  </a>
                  <span className="text-white">
                    . Мы бесплатно спроектируем и поставим его на фото. Увидете,
                    как он будет смотреться в реальности
                  </span>
                </p>
              </div>

              {/* Button and disclaimer */}
              <div>
                <div className="flex flex-col items-center gap-3">
                  <Button 
                    onClick={() => setShowModal(true)}
                    className="w-[412px] h-[68px] rounded-2xl shadow-2 [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] font-semibold text-white text-base hover:opacity-90 transition-opacity"
                  >
                    Получить 3D модель шатра
                  </Button>
                  
                  <p className="font-normal text-sm leading-5 [font-family:'Raleway',Helvetica]">
                    <span className="text-[#eb3c3c]">*</span>
                    <span className="text-[#e0e5f0]">
                      Заявка ни к чему не обязывает
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Tent image */}
            <Image
              className="absolute w-[709px] h-[709px] top-[-116px] left-[774px]"
              alt="Star tent"
              src="/close-up-man-holding-blank-smart-phone-screen-against-white-conc.webp"
              width={709}
              height={709}
              loading="lazy"
            />
          </CardContent>
        </Card>

        {/* Render the modal when showModal is true */}
        {showModal && <Consultaionfor3d onClose={() => setShowModal(false)} />}
      </section>

  {/* Mobile Version with Merged Image */}
<section className="md:hidden relative w-full my-8 px-4">
  <Card className="relative w-full rounded-[30px] overflow-hidden border-0">
    <CardContent className="p-0 h-full flex flex-col">
      {/* Background gradient */}
      <div className="absolute inset-0 rounded-[30px] bg-gradient-to-br from-[#243057] to-[#374255]" />

      {/* Text Content - تم إضافة mt-8 لتحريك النص لأسفل */}
      <div className="relative p-6 flex flex-col gap-6 z-10 mt-10"> {/* يمكنك تغيير القيمة هنا (mt-8 = 32px) */}
        {/* 
          إذا كنت تريد تحريك النص أكثر لأسفل:
          - استخدم mt-10 (40px) أو mt-12 (48px)
          - أو استخدم قيمة مخصصة مثل mt-[50px]
        */}
        <div className="flex flex-col gap-4">
          <h2 className="font-raleway font-normal text-2xl leading-normal">
            <span className="font-medium text-white">Получите 3D модель </span>
            <span className="font-bold text-[#9ec2ff]">шатра</span>
            <span className="font-medium text-white"> по фотографии площадки</span>
          </h2>

          <p className="font-raleway font-medium text-base leading-6 text-white">
            Сообщите точные размеры, пришлите фото местности, где будет располагаться{" "}
            <a href="/shatry"><span className="text-[#9ec2ff] underline">шатер</span></a>. Мы бесплатно спроектируем и поставим его на фото. Увидете, как он будет смотреться в реальности
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 mt-4">
          <Button 
            onClick={() => setShowModal(true)}
            className="w-full h-[60px] rounded-2xl shadow-lg bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] font-semibold text-white text-base hover:opacity-90 transition-opacity"
          >
            Получить 3D модель шатра
          </Button>
          
          <p className="font-raleway font-normal text-sm leading-5 text-[#e0e5f0]">
            <span className="text-[#eb3c3c]">*</span> Заявка ни к чему не обязывает
          </p>
        </div>
      </div>
<div className="relative w-full h-[460px] overflow-hidden rounded-b-[10px]">
  <div className="absolute inset-0">
    <Image
      className="object-cover w-full h-full"
      alt="Tent and phone preview"
      src="/newpho.webp"
      fill
      loading="lazy"
      style={{
        transform: 'scale(1)',
        transformOrigin: 'center center'
      }}
    />
  </div>
  
  {/* التدرج اللوني المحسن */}
  <div 
    className="absolute top-0 left-0 right-0 h-24 z-10"
    style={{
      background: `
        linear-gradient(to top, 
          transparent 0%, 
          rgba(47,58,87,0.1) 10%,
          rgba(47,58,87,0.3) 25%,
          rgba(47,58,87,0.7) 50%,
          rgba(47,58,87,0.9) 75%,
          rgba(47,58,87,1) 100%
        )`,
      boxShadow: 'inset 0 25px 25px -15px rgba(47,58,87,0.5)'
    }}
  />
</div>
    </CardContent>
  </Card>

  {/* Modal */}
  {showModal && <Consultaionfor3d onClose={() => setShowModal(false)} />}
</section>
    </>
  );
};