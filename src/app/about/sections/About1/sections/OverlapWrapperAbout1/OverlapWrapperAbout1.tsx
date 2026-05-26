'use client';

import { Badge } from "../../../../../../components/ui/badge";
import { Card, CardContent } from "../../../../../../components/ui/card";
import { ReactElement } from 'react';
import Image from 'next/image';

export const OverlapWrapperAbout1 = (): ReactElement => {
  return (
    <>
      {/* Desktop Version - لم يتم تغيير أي شيء */}
      <section className="relative w-full h-[562px] rounded-[30px] top-[450px] overflow-hidden hidden md:block">
        <div className="relative h-[562px]">
          {/* Background gradient */}
          <div className="absolute w-full h-[465px] top-[97px] left-0 rounded-[30px] [background:linear-gradient(180deg,rgba(245,246,255,1)_0%,rgba(245,246,255,0)_100%)]" />

          {/* Left grass decoration */}
          <Image
            className="absolute w-[302px] h-[270px] top-[340px] left-[-50px]"
            alt="Decorative grass"
            src="/Vecteezy-overgrown-green-grass.webp"
            width={302}
            height={270}
            loading="lazy"
          />

          {/* Tent image */}
          <Image
            className="absolute w-[505px] h-[562px] top-0 left-[935px]"
            alt="Event tent"
            src="/Event-Tent-i02.webp"
            width={505}
            height={562}
            loading="lazy"
          />

          {/* Main content container */}
          <div className="flex flex-col items-start gap-[55px] absolute top-[151px] left-[65px]">
            {/* Text content */}
            <div className="flex flex-col items-start gap-6">
              <h2 className="w-[401px] mt-[-1.00px] font-semibold text-4xl leading-[normal] [font-family:'Raleway',Helvetica] tracking-[0]">
                <span className="text-[#232c42]">Уже </span>
                <span className="text-[#4377cd]">12 лет</span>
                <span className="text-[#232c42]">
                  {" "}
                  в сфере тентовых конструкций
                </span>
              </h2>

              <p className="font-medium text-[#394355] text-lg leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                Прошел путь от просто продажи шатров из Китая
                <br />
                до создания предприятия в РФ с полным циклом производства
              </p>

              <Card className="bg-white rounded-[10px] p-0 border-none">
                <CardContent className="p-5">
                  <p className="font-medium text-[#394355] text-sm leading-5 [font-family:'Raleway',Helvetica] tracking-[0] w-[520px]">
                    Делаю все, чтобы вы, ваши сотрудники и клиенты чувствовали
                    себя комфортно, а ваш бизнес развивался без издержек на
                    постоянные ремонты
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Features section */}
            <div className="flex w-[560px] items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-6 h-6">
                  <Image
                    className="absolute w-6 h-[17px] top-[3px] left-0"
                    alt="Check icon"
                    src="/GROP-2.webp"
                    width={24}
                    height={17}
                    loading="lazy"
                  />
                </div>

                <p className="w-[260px] text-[#394355] text-sm leading-5 [font-family:'Raleway',Helvetica] tracking-[0]">
                  <span className="font-semibold">
                    Контролирую соблюдение единых стандартов работы
                  </span>
                  <span className="font-medium"> всех сотрудников</span>
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="relative w-6 h-6">
                  <Image
                    className="absolute w-6 h-[17px] top-[3px] left-0"
                    alt="Check icon"
                    src="/GROP-3.webp"
                    width={24}
                    height={17}
                    loading="lazy"
                  />
                </div>

                <p className="w-[143px] text-[#394355] text-sm leading-5 [font-family:'Raleway',Helvetica] tracking-[0]">
                  <span className="font-semibold">Лично веду</span>
                  <span className="font-medium"> ключевых клиентов</span>
                </p>
              </div>
            </div>
          </div>

          {/* Person image */}
          <Image
            className="absolute w-[875px] h-[554px] top-2 left-[629px]"
            alt="Company leader portrait"
            src="/Confident-young-businessman-in-blue-shirt-and-glasses-smiling-at.webp"
            width={475}
            height={554}
            quality={100}
            loading="lazy"
          />

          {/* Introduction badge */}
          <Badge className="absolute w-[440px] top-[458px] left-[853px] px-6 py-3 rounded-[10px] text-lg text-center leading-6 [font-family:'Raleway',Helvetica] tracking-[0] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] border-none">
            <span className="font-medium text-white">
              Здравствуйте, меня зовут Бородин Андрей Я руководитель компании
            </span>
          </Badge>

          {/* Video button */}
          <a 
            href="https://rutube.ru/video/b458e41ca07abee20c0052a9cb63a0b7/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Card className="absolute top-[273px] left-[1120px] px-6 py-3 bg-white rounded-[50px] border-0 border-solid shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]">
              <CardContent className="p-0">
                <div className="flex items-center gap-[15px]">
                  <div className="relative w-[50px] h-[50px]">
                    <div className="relative w-[47px] h-[33px] top-[9px] left-0.5">
                      <div className="relative h-[33px]">
                        <div className="absolute w-[23px] h-[23px] top-[5px] left-3 bg-white rounded-[11.5px]" />
                        <Image
                          className="absolute top-0 left-0"
                          alt="Play icon"
                          src="/Vector-1.webp"
                          width={47}
                          height={33}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="font-bold text-[#232c42] text-base leading-[normal] [font-family:'Raleway',Helvetica] tracking-[0]">
                    Видео
                    <br />о компании
                  </div>
                </div>
              </CardContent>
            </Card>
          </a>
        </div>
      </section>

        {/* Mobile Version - نسخة الهاتف المعدلة حسب الطلب */}
      <section className="relative w-full min-h-screen rounded-[20px] overflow-hidden block md:hidden p-4 mt-15">
        <div className="relative w-full min-h-[800px] max-w-[500px] mx-auto">
          {/* Background gradient - enlarged */}
          <div className="absolute w-full h-[400px] top-[100px] left-0 rounded-[20px] [background:linear-gradient(180deg,rgba(245,246,255,1)_0%,rgba(245,246,255,0)_100%)]" />

          {/* Left grass decoration - enlarged */}
          <Image
            className="absolute w-[200px] h-[200px] top-[400px] left-[-30px]"
            alt="Decorative grass"
            src="/Vecteezy-overgrown-green-grass.webp"
            width={200}
            height={200}
            loading="lazy"
          />

          {/* Tent image - enlarged */}
          <Image
            className="absolute w-[280px] h-[320px] top-[450px] left-[70%] transform -translate-x-1/2"
            alt="Event tent"
            src="/Event-Tent-i02.webp"
            width={280}
            height={320}
            loading="lazy"
          />

          {/* Main content container - moved up by changing top from 50px to 20px */}
          <div className="flex flex-col items-start gap-8 absolute top-[20px] left-0 w-full px-4">
            {/* Text content */}
            <div className="flex flex-col items-start gap-4 w-full">
              <h2 className="w-full mt-[-1.00px] font-semibold text-2xl leading-[normal] [font-family:'Raleway',Helvetica] tracking-[0] text-center">
                <span className="text-[#232c42]">Уже </span>
                <span className="text-[#4377cd]">12 лет</span>
                <span className="text-[#232c42]">
                  {" "}
                  в сфере тентовых конструкций
                </span>
              </h2>

              <p className="font-medium text-[#394355] text-base leading-5 [font-family:'Raleway',Helvetica] tracking-[0] text-center w-full">
                Прошел путь от просто продажи шатров из Китая
                <br />
                до создания предприятия в РФ с полным циклом производства
              </p>

              <Card className="bg-white rounded-[10px] p-0 border-none w-full">
                <CardContent className="p-4">
                  <p className="font-medium text-[#394355] text-sm leading-5 [font-family:'Raleway',Helvetica] tracking-[0] w-full">
                    Делаю все, чтобы вы, ваши сотрудники и клиенты чувствовали
                    себя комфортно, а ваш бизнес развивался без издержек на
                    постоянные ремонты
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Features section - modified layout */}
            <div className="flex flex-row w-full items-start gap-4">
              {/* First feature */}
              <div className="flex items-start gap-3 flex-1">
                <div className="relative w-6 h-6">
                  <Image
                    className="absolute w-6 h-[17px] top-[3px] left-0"
                    alt="Check icon"
                    src="/GROP-2.webp"
                    width={24}
                    height={17}
                    loading="lazy"
                  />
                </div>

                <p className="text-[#394355] text-sm leading-5 [font-family:'Raleway',Helvetica] tracking-[0]">
                  <span className="font-semibold">Контролирую соблюдение</span>
                  <br />
                  <span className="font-semibold">единых стандартов работы</span>
                  <br />
                  <span className="font-medium">всех сотрудников</span>
                </p>
              </div>

              {/* Second feature */}
              <div className="flex items-start gap-3 flex-1">
                <div className="relative w-6 h-6">
                  <Image
                    className="absolute w-6 h-[17px] top-[3px] left-0"
                    alt="Check icon"
                    src="/GROP-3.webp"
                    width={24}
                    height={17}
                    loading="lazy"
                  />
                </div>

                <p className="text-[#394355] text-sm leading-5 [font-family:'Raleway',Helvetica] tracking-[0]">
                  <span className="font-semibold">Лично веду ключевых</span>
                  <br />
                  <span className="font-medium"> клиентов</span>
                </p>
              </div>
            </div>
          </div>

          {/* Person image - fixed position with responsive sizing */}
          <div className="absolute w-[90%] max-w-[400px] h-[40vh] min-h-[300px] max-h-[350px] top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden">
            <div className="relative w-full h-full">
              <Image
                alt="Company leader portrait"
                src="/Confident-young-businessman-in-blue-shirt-and-glasses-smiling-at.webp"
                fill
                className="object-cover object-top"
                quality={100}
                loading="lazy"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
                }}
              />
            </div>
          </div>

          {/* Introduction badge - adjusted position */}
          <Badge className="absolute w-[90%] max-w-[350px] top-[680px] left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-[10px] text-base text-center leading-5 [font-family:'Raleway',Helvetica] tracking-[0] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] border-none">
            <span className="font-medium text-white">
              Здравствуйте, меня зовут Бородин Андрей Я руководитель компании
            </span>
          </Badge>

          {/* Video button - adjusted position */}
          <a 
            href="https://rutube.ru/video/b458e41ca07abee20c0052a9cb63a0b7/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-[520px] left-[80%] transform -translate-x-1/2"
          >
            <Card className="px-4 py-2 bg-white rounded-[50px] border-0 border-solid shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]">
              <CardContent className="p-0">
                <div className="flex items-center gap-3">
                  <div className="relative w-[40px] h-[40px]">
                    <div className="relative w-[37px] h-[25px] top-[7px] left-0.5">
                      <div className="relative h-[25px]">
                        <div className="absolute w-[18px] h-[18px] top-[3px] left-2 bg-white rounded-[9px]" />
                        <Image
                          className="absolute top-0 left-0"
                          alt="Play icon"
                          src="/Vector-1.webp"
                          width={37}
                          height={25}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="font-bold text-[#232c42] text-sm leading-[normal] [font-family:'Raleway',Helvetica] tracking-[0]">
                    Видео
                    <br />о компании
                  </div>
                </div>
              </CardContent>
            </Card>
          </a>
        </div>
      </section>
    </>
  );
};