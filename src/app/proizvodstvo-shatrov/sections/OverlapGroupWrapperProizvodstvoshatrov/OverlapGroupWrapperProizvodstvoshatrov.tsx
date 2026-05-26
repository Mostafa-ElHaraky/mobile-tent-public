'use client';

import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";
import { ReactElement, useState } from 'react';
import Image from 'next/image';
import Consultaionfor3d from "../../../../components/ui/Consultaionfor3d";

export const OverlapGroupWrapperProizvodstvoshatrov = (): ReactElement => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* ====================== DESKTOP (unchanged) ====================== */}
      <section className="hidden md:block w-full h-[535px] relative">
        <div className="relative h-[574px] top-[-39px]">
          <Card className="w-full h-[486px] top-[88px] left-0 rounded-[30px] border-0 [background:linear-gradient(180deg,rgba(245,246,255,1)_0%,rgba(245,246,255,0)_100%)]">
            <div className="flex flex-row">
              <div className="flex flex-col items-start gap-[45px] pt-[71px] pl-[84px] max-w-[550px]">
                <h2 className="w-[508px] [font-family:'Raleway',Helvetica] font-semibold text-4xl tracking-[0] leading-normal">
                  <span className="text-[#527dc5]">Получите 3D модель</span>
                  <span className="text-[#232c42]"> шатра<br/>по фотографии площадки</span>
                </h2>

                <div className="flex flex-col w-[496px] items-start gap-9">
                  <div className="flex items-center gap-3">
                    <p className="w-[486px] font-normal text-[#394355] text-lg leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                      Сообщите точные размеры, пришлите фото местности,<br/>
                      где будет располагаться шатер. Мы бесплатно спроектируем и
                      поставим его на фото. Увидете, как он будет смотреться в
                      реальности
                    </p>
                  </div>
                </div>

                <div className="flex flex-col w-[496px] items-start justify-center gap-3">
                  <Button onClick={() => setShowModal(true)} className="w-[496px] h-[68px] rounded-2xl shadow-[0px_22px_44px_0px_rgba(32,124,254,0.4)] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] [font-family:'Raleway',Helvetica] font-semibold text-white text-base">
                    Получите 3D модель
                  </Button>
                </div>
              </div>

              <div className="flex-1">
                <Image className="w-[735px] h-[556px] ml-auto" loading="lazy" alt="Tent" src="/tent-i02-1.webp" width={735} height={556} />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* ====================== MOBILE (new) ====================== */}
      <section className="md:hidden w-full px-4 py-8">
        <Card className="w-full rounded-3xl border-0 [background:linear-gradient(180deg,rgba(245,246,255,1)_0%,rgba(245,246,255,0)_100%)] overflow-hidden">
          {/* Image first for natural scroll */}
          <div className="relative w-full h-56 sm:h-64">
            <Image src="/tent-i02-1.webp" loading="lazy" alt="Tent" fill className="object-cover" />
          </div>

          {/* Text & CTA */}
          <div className="p-5 flex flex-col gap-4">
            <h2 className="text-2xl font-semibold leading-snug [font-family:'Raleway',Helvetica]">
              <span className="text-[#527dc5]">Получите 3D модель</span>
              <span className="text-[#232c42]"> шатра по фотографии площадки</span>
            </h2>

            <p className="text-sm text-[#394355] leading-5 [font-family:'Raleway',Helvetica]">
              Сообщите точные размеры и пришлите фото местности, где будет располагаться шатер. Мы бесплатно спроектируем и поставим его на фото — увидите, как он будет смотреться в реальности.
            </p>

            <Button onClick={() => setShowModal(true)} className="w-full h-12 rounded-2xl shadow-[0px_16px_32px_0px_rgba(32,124,254,0.35)] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] [font-family:'Raleway',Helvetica] font-semibold text-white text-base">
              Получите 3D модель
            </Button>
          </div>
        </Card>
      </section>

      {showModal && <Consultaionfor3d onClose={() => setShowModal(false)} />}
    </>
  );
};