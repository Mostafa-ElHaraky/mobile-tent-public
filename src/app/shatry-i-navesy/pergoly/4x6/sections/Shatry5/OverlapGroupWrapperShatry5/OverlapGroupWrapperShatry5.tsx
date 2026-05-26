'use client';

import { Badge } from "../../../../../../../components/ui/badge";
import { Button } from "../../../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../../../components/ui/card";
import { ReactElement } from 'react';
import Image from 'next/image';

export const OverlapGroupWrapperShatry5 = (): ReactElement => {
    // Fabric benefits data
    const fabricBenefits = [
      {
        icon: "/FORgroup-2.png",
        text: "Компания DICKSON\nоснована в 1969 году",
      },
      {
        icon: "/FORgroup-3.png",
        text: "Выпускает 25 000 000+ м2 ткани в год",
      },
    ];
  
  return (
    <>
      {/* Desktop Version */}
      <section className="hidden md:block px-12 py-">
        <div className="max-w-[1392px] mx-auto relative">
          <h2 className="font-['Raleway',Helvetica] font-semibold text-4xl mb-8">
            <span className="text-[#232c42]">
              Ткань тента приспособлена для работы{" "}
            </span>
            <span className="text-[#527dc5]">
              в самых жестких условиях эксплуатации. Даже в суровом климате
              России
            </span>
          </h2>

          <div className="flex items-center gap-4 p-3 bg-[#f2f4f7] rounded-[10px] mb-8 max-w-fit">
            <p className="font-['Raleway',Helvetica] font-medium text-[#4f5d80] text-lg leading-6">
              Используем профессиональный французский бренд
            </p>
            <Badge className="p-3 rounded-[10px] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
              <span className="font-['Raleway',Helvetica] font-extrabold text-white text-3xl">
                DICKSON
              </span>
            </Badge>
          </div>

          <div className="flex flex-col gap-4 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-[13px] h-[13px] rounded-[6.5px] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]" />
              <p className="font-['Raleway',Helvetica] font-normal text-[#394355] text-lg leading-5 max-w-[774px]">
                Закупаем оптовые объемы и даем вам цену ниже, чем другие
                компании
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-[13px] h-7 pt-[5px]">
                <div className="h-[13px] rounded-[6.5px] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]" />
              </div>
              <p className="font-['Raleway',Helvetica] font-semibold text-[#394355] text-lg leading-6 max-w-[634px]">
                С нами вы купите официальную продукцию, а не получаете китайскую
                под видом европейской
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-8">
            <Card className="p-6 rounded-2xl shadow-lg backdrop-blur-[79px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.7)_100%)] max-w-[509px] max-h-[166px] radius-[16px] border-0 ">
              <CardContent className="p-0">
                <h3 className="font-['Raleway',Helvetica] font-semibold text-[#242f57] text-2xl leading-6 mb-6">
                  Лучшая ткань в мире по цене-качеству
                </h3>

                <div className="flex justify-between flex-wrap gap-4 w-full">
                  {fabricBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 flex items-center justify-center">
                        <Image
                          className="w-6 h-[17px]"
                          alt="Checkmark"
                          src={benefit.icon}
                          width={24}
                          height={17}
                        />
                      </div>
                      <p className="font-['Raleway',Helvetica] font-semibold text-[#4f5d80] text-sm leading-5 max-w-[184px] whitespace-pre-line">
                        {benefit.text}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="flex-1 relative min-h-[500px]">
              <Image
                className="w-full h-auto max-w-[926px]"
                alt="Fabric sample"
                src="/rectangle-43.png"
                width={926}
                height={100}
              />

              <div className="absolute top-[136px] right-[376px] w-[408px] h-[275px]">
                <div className="relative">
                  <Image
                    className="absolute w-[220px] h-[275px] top-[-130px] left-[395px]"
                    alt="Fabric document"
                    src="/rectangle-44.png"
                    width={220}
                    height={275}
                  />
                  <Image
                    className="absolute w-[220px] h-[275px] top-[-130px] left-[494px]"
                    alt="Fabric document"
                    src="/rectangle-45.png"
                    width={220}
                    height={275}
                  />
                  <Image
                    className="absolute w-[220px] h-[275px] top-[-130px] left-[588px]"
                    alt="Fabric document"
                    src="/rectangle-46.png"
                    width={220}
                    height={275}
                  />
                </div>
              </div>

              <Badge className="absolute top-[436px] right-[107px] flex items-center gap-[15px] px-6 py-3 bg-white rounded-[50px] border-[3px] border-solid shadow-md">
                <div className="w-[50px] h-[50px] flex items-center justify-center">
                  <div className="w-[43px] h-[43px]">
                    <Image
                      className="w-10 h-[43px]"
                      alt="Certificate"
                      src="/FORgroup-4.png"
                      width={40}
                      height={43}
                    />
                  </div>
                </div>
                <span className="font-['Raleway',Helvetica] font-bold text-[#232c42] text-base">
                  Официальные партнеры компании
                </span>
              </Badge>
            </div>
          </div>

          <Button className="relative top-[-170px] gap-[15px] h-[68px] rounded-2xl shadow-2 [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] max-w-[499px]">
            <div className="w-[50px] h-[50px] top-[500px] flex items-center justify-center">
              <div className="w-[35px] h-[35px] bg-[url(/FORgroup-1.png)] bg-[100%_100%]" />
            </div>
            <span className="font-['Raleway',Helvetica] font-bold text-white text-base">
              Скачать документы на ткань
            </span>
          </Button>
        </div>
      </section>

      {/* Mobile Version */}
      <section className="md:hidden px-4 py-8">
        <div className="max-w-[1392px] mx-auto relative">
          <div className="flex flex-col gap-8">
            <h2 className="font-['Raleway',Helvetica] font-semibold text-2xl">
              <span className="text-[#232c42]">
                Ткань тента приспособлена для работы{" "}
              </span>
              <span className="text-[#527dc5]">
                в самых жестких условиях эксплуатации. Даже в суровом климате России
              </span>
            </h2>

            <div className="flex flex-col gap-4 p-3 bg-[#f2f4f7] rounded-[10px] w-full">
              <p className="font-['Raleway',Helvetica] font-medium text-[#4f5d80] text-base leading-6">
                Используем профессиональный французский бренд
              </p>
              <Badge className="p-3 rounded-[5px] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] self-start">
                <span className="font-['Raleway',Helvetica] font-extrabold text-white text-xl">
                  DICKSON
                </span>
              </Badge>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] flex-shrink-0" />
                <p className="font-['Raleway',Helvetica] font-normal text-[#394355] text-base leading-5">
                  Закупаем оптовые объемы и даем вам цену ниже, чем другие компании
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-4 h-4 rounded-full [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] flex-shrink-0 mt-1" />
                <p className="font-['Raleway',Helvetica] font-semibold text-[#394355] text-base leading-6">
                  С нами вы купите официальную продукцию, а не получаете китайскую
                  под видом европейской
                </p>
              </div>
            </div>

            <Card className="w-full p-6 rounded-2xl shadow-lg backdrop-blur-[79px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.7)_100%)] radius-[16px] border-0">
              <CardContent className="p-0">
                <h3 className="font-['Raleway',Helvetica] font-semibold text-[#242f57] text-xl leading-6 mb-6">
                  Лучшая ткань в мире по цене-качеству
                </h3>

                <div className="flex flex-col gap-4 w-full">
                  {fabricBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 flex items-center justify-center">
                        <Image
                          className="w-6 h-[17px]"
                          alt="Checkmark"
                          src={benefit.icon}
                          width={24}
                          height={17}
                        />
                      </div>
                      <p className="font-['Raleway',Helvetica] font-semibold text-[#4f5d80] text-sm leading-5 whitespace-pre-line">
                        {benefit.text}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="relative min-h-[300px]">
              {/* الصورة الرئيسية */}
              <Image
                className="w-full h-auto rounded-lg"
                alt="Fabric sample"
                src="/rectangle-43.png"
                width={926}
                height={200}
              />

       {/* مجموعة الصور المتداخلة - بدون حواف بيضاء */}
  <div className="absolute top-[30px] right-[50%] w-[220px] h-[275px]">
    <div className="relative">
      {/* الصورة الثالثة (الأبعد) */}
      <div className="absolute z-[1] w-[150px] h-[190px] top-[-30px] left-[100px] transform -translate-x-[80px] overflow-hidden">
        <Image
          className="w-full h-full object-cover rounded-lg shadow-lg"
          alt="Fabric document"
          src="/rectangle-46.png"
          width={150}
          height={190}
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
        />
      </div>
      
      {/* الصورة الثانية */}
      <div className="absolute z-[2] w-[150px] h-[190px] top-[-30px] left-[100px] transform -translate-x-[40px] overflow-hidden">
        <Image
          className="w-full h-full object-cover rounded-lg shadow-lg"
          alt="Fabric document"
          src="/rectangle-45.png"
          width={150}
          height={190}
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
        />
      </div>
      
      {/* الصورة الأولى (الأقرب) */}
      <div className="absolute z-[3] w-[150px] h-[190px] top-[-30px] left-[100px] overflow-hidden">
        <Image
          className="w-full h-full object-cover rounded-lg shadow-lg"
          alt="Fabric document"
          src="/rectangle-44.png"
          width={150}
          height={190}
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
        />
      </div>
    </div>
  </div>

  {/* شارة الشركاء الرسميين */}
  <Badge className="absolute bottom-[-20px] right-4 flex items-center gap-[15px] px-6 py-3 bg-white rounded-[50px] border-[3px] border-solid shadow-md">
    <div className="w-[50px] h-[50px] flex items-center justify-center">
      <div className="w-[43px] h-[43px]">
        <Image
          className="w-10 h-[43px]"
          alt="Certificate"
          src="/FORgroup-4.png"
          width={40}
          height={43}
        />
      </div>
    </div>
    <span className="font-['Raleway',Helvetica] font-bold text-[#232c42] text-base">
      Официальные партнеры компании
    </span>
  </Badge>
</div>


            <Button className="gap-[15px] h-[60px] rounded-2xl shadow-2 [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] w-full mt-8">
              <div className="w-[40px] h-[40px] flex items-center justify-center">
                <div className="w-[30px] h-[30px] bg-[url(/FORgroup-1.png)] bg-[100%_100%] bg-contain bg-no-repeat" />
              </div>
              <span className="font-['Raleway',Helvetica] font-bold text-white text-sm">
                Скачать документы на ткань
              </span>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};