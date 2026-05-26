'use client';

import { useState } from 'react';
import { Badge } from "../../../components/ui/badge";
import { Card, CardContent } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { ReactElement } from 'react';
import Image from 'next/image';
import ContactButton from "../../../components/ui/ContactButton";

export const HeroSection1 = (): ReactElement => {
  // NEW: control modal visibility here
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      {/* Desktop Version (original unchanged) */}
      <section 
        className="hidden desktop:block relative w-[1440px] h-[604px] top-[21px] rounded-[30px] shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] backdrop-blur-[158px] bg-[url(/metal-structure-against-the-blue-sky-with-white-clouds-1.webp)] bg-cover bg-center overflow-hidden">
        <div className="relative w-full h-full">
        {/* Blue gradient circle */}
        <div 
            className="absolute w-[1440px] h-[604px] rounded-[30px] [background:linear-gradient(108.32deg,_#243057_19.48%,_rgba(34,_67,_124,_0.51)_107.93%)]"/>    
        <div className="flex flex-col items-start gap-9 absolute top-[54px] left-[50px]">
          <div className="flex flex-col items-end gap-10">
            {/* Headline */}
            <div className="flex flex-col w-[658px] items-start gap-6">
              <h5 className="font-semibold text-4xl [font-family:'Raleway',Helvetica]">
                <span className="text-[#639dff]">Работаем с тендерами</span>
                <span className="text-white">
                  {" "}
                  с бюджетами по 10 000 000 рублей
                </span>
              </h5>
            </div>

            {/* Registry info card */}
            <Card className="bg-[#73a7ff59] border-none rounded-[20px] ">
              <CardContent className="flex items-center gap-[30px] p-6">
                <div className="w-fit [font-family:'Raleway',Helvetica] text-white text-xl">
                  <span className="font-semibold leading-6">
                    Входим в реестр МИНПРОМТОРГА
                    <br />
                  </span>
                  <span className="leading-6">
                    в качестве официального производителя
                  </span>
                </div>

                <Badge className="bg-white rounded-[20px] px-3 py-1.5 w-[185px] h-[66px] flex items-start">
                  <div className="flex flex-col gap-[6px] w-full">
                    <div className="flex items-center gap-3 w-full h-[54px]">
                      <div className="w-[79px] h-[54px] font-bold text-[46px] leading-[54px] text-[#6FA7FF] [font-family:'Raleway',Helvetica]">
                        30+
                      </div>
                      <div className="w-[70px] h-[40px] font-medium text-[#394355] text-sm leading-5 [font-family:'Raleway',Helvetica]">
                        Тендеров выиграли
                      </div>
                    </div>
                  </div>
                </Badge>
              </CardContent>
            </Card>

            {/* Bullet points */}
            <div className="flex flex-col w-[650px] items-start gap-[21px]">
              {[
                {
                  text: (
                    <>
                      <span className="font-medium">С </span>
                      <span className="font-bold">
                        2023 года нужно обязательно входить в реестр
                      </span>
                      <span className="font-medium">
                        , чтобы учавствовать в торгах
                      </span>
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <span className="font-bold">Аккредитованы</span>
                      <span className="font-medium">
                        {" "}
                        на большинстве тендерных площадках
                      </span>
                    </>
                  ),
                },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-[17px]">
                  <div className="w-3 h-3 rounded-md [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]" />
                  <div className="font-normal text-white text-base leading-6 [font-family:'Raleway',Helvetica]">
                    {item.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

      {/* CTA section */}
      <div className="flex flex-col items-start justify-center gap-3">
        {/* ensure the whole blue button is clickable */}
        <div className="relative z-30 pointer-events-auto">
          {/* NEW: trigger button opens the modal */}
          <Button
            onClick={() => setIsContactOpen(true)}
            className="h-[56px] px-6 rounded-2xl shadow-[0px_22px_44px_rgba(32,124,254,0.4)] bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC] hover:opacity-90"
          >
            <span className="text-white text-base font-semibold">
              Запросить контакты представителей
            </span>
          </Button>
        </div>
        <p className="w-[412px] font-normal text-white text-xs text-center [font-family:'Raleway',Helvetica]">
          Вы можете лично поговорить с клиентами и посетить их объекты,
          чтобы узнать все подробности о нашей работе
        </p>
      </div>
    </div>

        {/* Background elements */}
        <Image
          className="absolute top-0 right-[131px] object-cover"
          alt="Element clouds"
          src="/element8-08-clouds-1.webp"
          width={601}
          height={430}
          loading="lazy"
        />

        <div className="absolute w-[676px] h-[513px] bottom-[-243px] right-[-11px] rounded-[338px/256.5px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(7,12,30,1)_0%,rgba(17,27,63,0)_100%)]" />

        <div className="absolute w-[725px] h-[101px] bottom-[-163px] right-[-43px] bg-[#232c42] rounded-[362.5px/50.5px] blur-[25px]" />

        <Image
          className="relative top-20 left-[560px] object-cover"
          alt="Event tent"
          src="/element8-event-tent-i02-2.webp"
          width={999}
          height={714}
          loading="lazy"
        />

        <Image
          className="absolute bottom-0 left-0"
          alt="Vecteezy overgrown"
          src="/element8-vecteezy-overgrown-green-grass-generative-ai-generated-24190129-.webp"
          width={299}
          height={190}
          loading="lazy"
        />

        <Image
          className="absolute bottom-0 right-0 blur-[15px] object-cover"
          alt="Element clouds"
          src="/08-clouds-1.webp"
          width={464}
          height={339}
          loading="lazy"
        />
      </div>
      </section>

{/* Mobile/Tablet Version */}
<section
  className="desktop:hidden relative w-full h-screen min-h-[760px] md:min-h-[800px] max-h-screen rounded-[20px] shadow-lg overflow-hidden mx-auto bg-cover bg-center"
  style={{
    backgroundImage: "url(/metal-structure-against-the-blue-sky-with-white-clouds-1.webp)",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
  <div className="relative w-full h-full">
    
    {/* Blue gradient overlay */}
    <div className="absolute inset-0 rounded-[20px] [background:linear-gradient(108.32deg,_#243057_19.48%,_rgba(34,67,124,0.51)_107.93%)]" />

    {/* Main content */}
    <div className="relative z-10 flex flex-col items-start md:items-center gap-6 sm:gap-8 pt-10 md:pt-20 px-6 md:px-16 pb-6 h-full text-left md:text-center">

      {/* Headline */}
      <div className="flex flex-col w-full items-start md:items-center gap-3">
        <h5 className="font-semibold text-2xl md:text-4xl [font-family:'Raleway',Helvetica] text-white leading-tight">
          <span className="text-[#639dff]">Работаем с тендерами</span>
          <span className="text-white"> с бюджетами по 10 000 000 рублей</span>
        </h5>
      </div>

      {/* Registry card */}
      <Card className="bg-[#73a7ff59] border-none rounded-[20px] w-full max-w-2xl">
        <CardContent className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-8">
          <div className="flex-1 text-center md:text-left [font-family:'Raleway',Helvetica] text-white text-base md:text-xl">
            <span className="font-semibold leading-tight">
              Входим в реестр МИНПРОМТОРГА
              <br />
            </span>
            <span className="leading-tight opacity-90">
              в качестве официального производителя
            </span>
          </div>

          <Badge className="bg-white rounded-2xl px-5 py-3 w-full md:w-auto h-auto flex items-center justify-center shadow-xl">
            <div className="flex flex-row md:flex-col items-center gap-3 md:gap-1">
              <span className="font-bold text-3xl md:text-5xl text-[#6FA7FF] [font-family:'Raleway',Helvetica]">
                30+
              </span>
              <span className="font-medium text-[#394355] text-xs md:text-sm leading-tight text-center md:max-w-[100px]">
                Тендеров выиграли
              </span>
            </div>
          </Badge>
        </CardContent>
      </Card>

      {/* Bullet points */}
      <div className="flex flex-col w-full max-w-xl items-start gap-4">
        {[
          {
            text: (
              <>
                <span className="font-medium">С </span>
                <span className="font-bold">2023 года нужно обязательно входить в реестр</span>
                <span className="font-medium">, чтобы учавствовать в торгах</span>
              </>
            ),
          },
          {
            text: (
              <>
                <span className="font-bold">Аккредитованы</span>
                <span className="font-medium"> на большинстве тендерных площадок</span>
              </>
            ),
          },
        ].map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="w-3 h-3 rounded-full [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] mt-1.5 flex-shrink-0 shadow-sm" />
            <div className="font-normal text-white text-base md:text-lg leading-relaxed [font-family:'Raleway',Helvetica] opacity-95">
              {item.text}
            </div>
          </div>
        ))}
      </div>

      {/* CTA section */}
      <div className="flex flex-col items-center justify-center gap-4 w-full mt-auto mb-10">
        <Button
          onClick={() => setIsContactOpen(true)}
          className="w-full md:w-fit h-[60px] md:h-[68px] px-8 rounded-2xl shadow-[0px_22px_44px_rgba(32,124,254,0.4)] bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC] hover:scale-[1.02] transition-transform"
        >
          <span className="text-white text-lg font-bold">
            Запросить контакты представителей
          </span>
        </Button>
        <p className="w-full max-w-md font-normal text-white text-xs md:text-sm text-center [font-family:'Raleway',Helvetica] px-2 leading-relaxed opacity-80">
          Вы можете лично поговорить с клиентами и посетить их объекты, чтобы узнать все подробности о нашей работе
        </p>
      </div>

      {/* Tent image */}
      <div className="absolute bottom-4 right-0 w-1/2 opacity-20 pointer-events-none md:hidden">
        <Image
          className="w-full h-auto"
          alt="Event tent"
          src="/element8-event-tent-i02-2.webp"
          width={300}
          height={214}
        />
      </div>
    </div>

    {/* Background clouds */}
    <div className="absolute top-0 right-0 w-1/2 opacity-30 z-0">
      <Image
        src="/element8-08-clouds-1.webp"
        alt="Clouds"
        width={400}
        height={300}
        className="w-full h-auto"
      />
    </div>
  </div>
</section>

      {/* NEW: Single modal instance mounted once per page */}
      <ContactButton
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
};
