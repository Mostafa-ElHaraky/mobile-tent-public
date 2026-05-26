'use client';

import { Badge } from "../../../../../../components/ui/badge";
import { Button } from "../../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../../components/ui/card";
import { ReactElement } from 'react';
import Image from 'next/image';

export const DivWrapperShatry5 = (): ReactElement => {
  // Navigation handlers
  const handleTelegramClick = () => {
    window.open('https://t.me/+79770893996?start=14594990928', '_blank');
  };

  const handleMAXClick = () => {
    window.open('https://max.ru/u/f9LHodD0cOK_6DAtIeOn3T51Xpzrkg2i4RB2ZEjtVfXOwvURhiW6gtGMLrA', '_blank');
  };

  return (
    <>
      {/* Desktop Version - remains unchanged */}
      <section className="w-full py-12 px-12 hidden md:block">
        <div className="flex flex-col gap-10 max-w-[1346px] mx-auto">
          <div className="flex justify-between items-start">
            <h2 className="text-4xl font-semibold font-['Raleway',Helvetica] max-w-[655px]">
              <span className="text-[#232c42]">На все элементы шатра </span>
              <span className="text-[#527dc5]">
                есть документы качества и надежности
              </span>
            </h2>

            <div className="flex items-center gap-7 px-6 py-3 rounded-[10px] border border-solid border-[#e4e4e4]">
              <p className="text-sm leading-5 font-['Raleway',Helvetica]">
                <span className="italic text-[#eb3c3c]">*</span>
                <span className="italic text-[#4f5d80]">
                  Дополнительно проводим испытания
                  <br />в своей аккредитованной лаборатории
                </span>
              </p>

              <Badge className="px-2 py-1 rounded text-white text-sm font-semibold font-['Raleway',Helvetica] leading-6 whitespace-nowrap [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
                Аттестат № RA.RU.10HA2100
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Certificates Card */}
            <Card className="rounded-[20px] shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] backdrop-blur-[79px] h-[364px] border-0 ">
              <CardContent className="p-0 h-full">
                <div className="relative h-full pt-12 pl-8">
                  <div className="flex flex-col gap-6">
                    <h3 className="text-xl font-bold font-['Raleway',Helvetica] leading-6">
                      <span className="text-[#527dc5]">Сертификаты</span>
                      <span className="text-[#232c42]"> на комплектующие</span>
                    </h3>

                    <p className="text-lg text-[#394355] font-normal font-['Raleway',Helvetica] leading-9">
                         • Сертификаты соответствия
                       <br />
                         • Сертификаты качества
                        <br />
                         • Сертификат пожарной безопасности
                        <br />
                         • Протоколы испытания
                         </p>
                  </div>

                  <Image
                    className="absolute bottom-0 right-0"
                    alt="Certificate document"
                    src="/15-9bf6ff67-------1.webp"
                    width={318}
                    height={276}
                    loading="lazy"
                  />

                  <div className="absolute bottom-[-3px] left-[689px]">
                    <Button 
                      className="w-[319px] h-[68px] rounded-2xl shadow-[0px_22px_44px_0px_rgba(32,124,254,0.4)] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]"
                      onClick={handleTelegramClick}
                    >
                      <div className="flex items-center gap-[15px]">
                        <span className="font-bold text-white text-base font-['Raleway',Helvetica]">
                          Запросить документы
                        </span>
                        <div className="w-6 h-6">
                          <Image
                            className="mt-[3px] ml-0.5"
                            alt="Download icon"
                            src="/DOCgroup-2.webp"
                            width={21}
                            height={18}
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Technical Passport Card */}
            <Card className="rounded-[20px] shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] backdrop-blur-[79px] h-[270px] border-0 ">
              <CardContent className="p-0 h-full">
                <div className="relative h-full pt-12 pl-8">
                  <div className="flex flex-col gap-6 max-w-[310px]">
                    <h3 className="text-xl font-bold font-['Raleway',Helvetica] leading-6">
                      <span className="text-[#527dc5]">Технический паспорт </span>
                      <span className="text-[#232c42]">на шатер</span>
                    </h3>

                    <p className="text-lg text-[#394355] font-normal font-['Raleway',Helvetica] leading-6">
                      на 30-40 листов с описанием сборки каждого этапа
                    </p>
                  </div>

                  <Image
                    className="absolute top-[-5px] right-0"
                    alt="Technical passport document"
                    src="/paper-a4-10-ps-------1.webp"
                    width={284}
                    height={323}
                    loading="lazy"
                  />
                  <div className="absolute bottom-[-97px] right-0">
                    <Button 
                      className="w-[319px] h-[68px] rounded-2xl shadow-[0px_22px_44px_0px_rgba(32,124,254,0.4)] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]"
                      onClick={handleMAXClick}
                    >
                      <div className="flex items-center gap-[15px]">
                        <span className="font-bold text-white text-base font-['Raleway',Helvetica]">
                          Запросить документы
                        </span>
                        <div className="w-6 h-6">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 1000 1000"
                            width={20}
                            height={20}
                            className="mt-0.5 ml-0.5"
                            fill="white"
                          >
                            <path d="M508.211 878.328c-75.007 0-109.864-10.95-170.453-54.75-38.325 49.275-159.686 87.783-164.979 21.9 0-49.456-10.95-91.248-23.36-136.873-14.782-56.21-31.572-118.807-31.572-209.508 0-216.626 177.754-379.597 388.357-379.597 210.785 0 375.947 171.001 375.947 381.604.707 207.346-166.595 376.118-373.94 377.224m3.103-571.585c-102.564-5.292-182.499 65.7-200.201 177.024-14.6 92.162 11.315 204.398 33.397 210.238 10.585 2.555 37.23-18.98 53.837-35.587a189.8 189.8 0 0 0 92.71 33.032c106.273 5.112 197.08-75.794 204.215-181.95 4.154-106.382-77.67-196.486-183.958-202.574Z" fill="white"/>
                          </svg>
                        </div>
                      </div>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    {/* Mobile Version */}
<section className="w-full py-8 px-4 md:hidden">
  <div className="flex flex-col gap-6 mx-auto">
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold font-['Raleway',Helvetica] text-left leading-tight">
        <span className="text-[#232c42]">На все элементы шатра </span>
        <span className="text-[#527dc5]">есть документы качества и надежности</span>
      </h2>

      <div className="flex flex-col items-center gap-4 px-4 py-3 rounded-[10px] border border-solid border-[#e4e4e4]">
        <p className="text-sm leading-5 font-['Raleway',Helvetica] text-center">
          <span className="italic text-[#eb3c3c]">*</span>
          <span className="italic text-[#4f5d80]">
            Дополнительно проводим испытания
            в своей аккредитованной лаборатории
          </span>
        </p>

        <Badge className="px-2 py-1 rounded text-white text-sm font-semibold font-['Raleway',Helvetica] leading-6 whitespace-nowrap [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
          Аттестат № RA.RU.10HA2100
        </Badge>
      </div>
    </div>

    <div className="flex flex-col gap-4">
      {/* Certificates Card */}
      <Card className="rounded-[20px] shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] backdrop-blur-[79px] border-0">
        <CardContent className="p-6">
          <div className="relative">
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-bold font-['Raleway',Helvetica] leading-6">
                <span className="text-[#527dc5]">Сертификаты</span>
                <span className="text-[#232c42]"> на комплектующие</span>
              </h3>

              <p className="text-base text-[#394355] font-normal font-['Raleway',Helvetica] leading-6">
                   • Сертификаты соответствия
                 <br />
                   • Сертификаты качества
                  <br />
                   • Сертификат пожарной безопасности
                  <br />
                   • Протоколы испытания
              </p>
            </div>
<div className="mt-4 relative h-[250px]">
  <Image
    className="absolute rounded-br-[10px] transform scale-125"
    alt="Certificate document"
    src="/15-9bf6ff67-------1.webp"
    width={200}
    height={174}
    style={{
      maxWidth: 'none',
      right: '48px',
      bottom: '48px',
      transform: 'scale(1.25) translateX(10px) translateY(15px)'
    }}
    loading="lazy"
  />
</div>
          </div>
        </CardContent>
      </Card>

      {/* Technical Passport Card */}
      <Card className="rounded-[20px] shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] backdrop-blur-[79px] border-0">
        <CardContent className="p-6">
          <div className="relative">
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-bold font-['Raleway',Helvetica] leading-6">
                <span className="text-[#527dc5]">Технический паспорт </span>
                <span className="text-[#232c42]">на шатер</span>
              </h3>

              <p className="text-base text-[#394355] font-normal font-['Raleway',Helvetica] leading-6">
                на 30-40 листов с описанием сборки каждого этапа
              </p>
            </div>

            <div className="mt-4 flex justify-center">
              <Image
                className="mr-2"
                alt="Technical passport document"
                src="/paper-a4-10-ps-------1.webp"
                width={180}
                height={140}
                loading="lazy"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Buttons moved outside cards */}
      <div className="flex flex-col gap-4 mt-4">
        <Button 
          className="w-full h-[50px] rounded-2xl shadow-[0px_22px_44px_0px_rgba(32,124,254,0.4)] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]"
          onClick={handleTelegramClick}
        >
          <div className="flex items-center justify-center gap-[10px]">
            <span className="font-bold text-white text-sm font-['Raleway',Helvetica]">
              Запросить документы
            </span>
            <div className="w-5 h-5">
              <Image
                className="mt-[2px] ml-0.5"
                alt="Download icon"
                src="/DOCgroup-2.webp"
                width={16}
                height={14}
                loading="lazy"
              />
            </div>
          </div>
        </Button>

        <Button 
          className="w-full h-[50px] rounded-2xl shadow-[0px_22px_44px_0px_rgba(32,124,254,0.4)] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]"
          onClick={handleMAXClick}
        >
          <div className="flex items-center justify-center gap-[10px]">
            <span className="font-bold text-white text-sm font-['Raleway',Helvetica]">
              Запросить документы
            </span>
            <div className="w-5 h-5">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 1000 1000"
                width={16}
                height={16}
                className="mt-[1px] ml-0.5"
                fill="white"
              >
                <path d="M508.211 878.328c-75.007 0-109.864-10.95-170.453-54.75-38.325 49.275-159.686 87.783-164.979 21.9 0-49.456-10.95-91.248-23.36-136.873-14.782-56.21-31.572-118.807-31.572-209.508 0-216.626 177.754-379.597 388.357-379.597 210.785 0 375.947 171.001 375.947 381.604.707 207.346-166.595 376.118-373.94 377.224m3.103-571.585c-102.564-5.292-182.499 65.7-200.201 177.024-14.6 92.162 11.315 204.398 33.397 210.238 10.585 2.555 37.23-18.98 53.837-35.587a189.8 189.8 0 0 0 92.71 33.032c106.273 5.112 197.08-75.794 204.215-181.95 4.154-106.382-77.67-196.486-183.958-202.574Z" fill="white"/>
              </svg>
            </div>
          </div>
        </Button>
      </div>
    </div>
  </div>
</section>
    </>
  );
};