'use client';

import { Card, CardContent } from "../../../components/ui/card";
import { ReactElement } from 'react';
import Image from 'next/image';

export const CompanyOverviewSection = (): ReactElement => {
  const serviceFeatures = [
    {
      icon: "/element7-10.webp",
      title: "Произведет замеры участка",
      description: "и соберет данные для создания бесплатного 3D проекта",
    },
    {
      icon: "/element7-11.webp",
      title: "Покажет разные ткани",
      description: "для сравнения качества",
    },
    {
      icon: "/element7-12.webp",
      title: "Расскажет о циклах",
      description: "и методах производства",
    },
    {
      icon: "/element7-13.webp",
      title: "Отвезет на реальные объекты",
      description: "смонтированные у клиентов",
    },
  ];

  const russianCities = [
    ["Новосибирск", "Самара", "Казань", "Иркутск"],
    ["Екатеринбург", "Сочи", "Краснодар", "Чебоксары"],
  ];

  const cisCountries = [
    { name: "Казахстан", flagSrc: "/ellipse-14.webp" },
    { name: "Узбекистан", flagSrc: "/ellipse-14-1.webp" },
    { name: "Азербайджан", flagSrc: "/ellipse-14-2.webp" },
    { name: "Республика Беларусь", flagSrc: "/ellipse-14-3.webp" },
  ];

  return (
    <>
      {/* Desktop Version - FIXED: Removed absolute positioning */}
      <section className="hidden desktop:block w-full py-16 px-4">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-semibold text-4xl font-['Raleway',Helvetica] mb-12">
            <span className="text-[#527dc5]">Организуем живую встречу </span>
            <span className="text-[#232c42]">
              с представителем компании в вашем городе
            </span>
          </h2>

          {/* Service features card - FIXED: Removed absolute */}
          <Card className="w-full rounded-[16px] shadow-[0px_24px_38px_#161D2414] backdrop-blur-[158px] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.7)_100%)] p-6 border-0 mb-12">
            <CardContent className="p-4">
              <div className="flex flex-wrap justify-between gap-8">
                {serviceFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-6 min-w-[280px]">
                    <div className="w-[74px] h-[74px] bg-[#F3F4F7] rounded-[87px] flex items-center justify-center flex-shrink-0">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={50}
                        height={50}
                        className="w-10 h-10"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-center gap-1.5">
                      <div className="font-semibold text-[#4f5d80] text-sm leading-5 font-['Raleway',Helvetica]">
                        {feature.title}
                      </div>
                      <div className="font-normal text-[#4f5d80] text-sm leading-5 font-['Raleway',Helvetica]">
                        {feature.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Main content - FIXED: Using flex layout instead of absolute */}
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left side - Image section */}
            <div className="relative w-full lg:w-1/2">
              <div className="relative w-full">
                <div className="relative w-full aspect-[4/5]">
                  {/* Background image */}
                  <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <Image
                      src="/rectangle-499.webp"
                      alt="Rectangle"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Person image */}
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="relative w-full h-full">
                      <Image
                        src="/element7_confident-young-businessman-in-blue-shirt-and-glasses-smiling-at.webp"
                        alt="Confident young businessman"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  
                  {/* Visual effects */}
                  <div className="absolute w-[211px] h-[211px] -bottom-10 -left-10 rounded-full blur-[25px] bg-gradient-to-b from-[#5a91ee8c] to-transparent" />
                  <div className="absolute w-[79px] h-[79px] top-1/3 -right-10 rounded-full blur-[15px] bg-gradient-to-b from-[#56a4ff] to-transparent" />
                  <div className="absolute w-[31px] h-[31px] top-1/4 left-1/4 rounded-full blur-[15px] bg-gradient-to-b from-[#527dc5] to-transparent" />
                </div>
              </div>
            </div>

            {/* Right side - Cities and countries card */}
            <Card className="w-full lg:w-1/2 rounded-[20px] border border-[#E3E3E3] shadow-[0px_22px_44px_#207CFE66] bg-gradient-to-br from-[#243057] to-[#374255] mt-8 lg:mt-0">
              <CardContent className="p-8 lg:p-14">
                <div className="flex flex-col gap-8">
                  <h3 className="font-semibold text-white text-2xl leading-6 font-['Raleway',Helvetica]">
                    Представительства в городах и странах СНГ
                  </h3>

                  {/* Russian cities */}
                  <div className="flex flex-col md:flex-row gap-12">
                    {russianCities.map((column, colIndex) => (
                      <div key={colIndex} className="flex flex-col gap-4">
                        {column.map((city, cityIndex) => (
                          <div
                            key={cityIndex}
                            className="flex items-center gap-2.5"
                          >
                            <Image
                              className="w-[10.5px] h-[9.53px]"
                              src="/polygon-3.webp"
                              alt="Polygon"
                              width={10}
                              height={10}
                              loading="lazy"
                            />
                            <div className="font-medium text-white text-base leading-5 font-['Raleway',Helvetica]">
                              {city}
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>

                  {/* CIS countries */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {cisCountries.map((country, index) => (
                      <Card
                        key={index}
                        className="bg-[#a9beef1a] rounded-[20px] border border-solid border-[#d3d3d31a] hover:scale-105 transition-transform"
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center gap-4">
                            <Image
                              className="w-[50px] h-[50px] object-cover rounded-full"
                              src={country.flagSrc}
                              alt={`Flag of ${country.name}`}
                              width={50}
                              height={50}
                              quality={100}
                              loading="lazy"
                            />
                            <div className="font-semibold text-white text-base leading-5 font-['Raleway',Helvetica]">
                              {country.name}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Mobile/Tablet Version */}
      <section className="block desktop:hidden w-full py-8 px-4 relative max-w-4xl mx-auto">
        <div className="relative">
          {/* Title - Center on tablet */}
          <h2 className="font-semibold text-2xl md:text-4xl text-left md:text-center font-['Raleway',Helvetica] mb-8 md:mb-12 leading-tight">
            <span className="text-[#527dc5]">Организуем живую встречу </span>
            <span className="text-[#232c42]">
              с представителем компании в вашем городе
            </span>
          </h2>

          {/* Features card - Grid adjustment */}
          <Card className="w-full rounded-[16px] shadow-[0px_24px_38px_#161D2414] backdrop-blur-[20px] bg-[rgba(255,255,255,0.7)] p-4 md:p-8 border-0 mb-8 md:mb-12">
            <CardContent className="p-2">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                {serviceFeatures.map((feature, index) => (
                  <div key={index} className="flex flex-col md:items-center gap-3">
                    <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-[#F3F4F7] rounded-full flex items-center justify-center flex-shrink-0">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={30}
                        height={30}
                        className="w-6 h-6 md:w-8 md:h-8"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-col gap-1 md:text-center">
                      <div className="font-semibold text-[#4f5d80] text-sm leading-5 font-['Raleway',Helvetica]">
                        {feature.title}
                      </div>
                      <div className="font-normal text-[#4f5d80] text-xs leading-4 font-['Raleway',Helvetica]">
                        {feature.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Person image and cities card */}
          <div className="relative w-full flex flex-col md:items-center">
            <div className="relative w-full md:w-3/4 aspect-[4/5] md:aspect-[16/9] mx-auto">
              {/* Background */}
              <div className="absolute inset-0 rounded-t-lg overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src="/rectangle-499.webp"
                    alt="Background"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    loading="lazy"
                  />
                </div>
              </div>
              
              {/* Visual effects */}
              <div className="absolute w-[100px] h-[100px] md:w-[150px] md:h-[150px] bottom-[20%] left-[-30px] rounded-full blur-[20px] bg-[#5a91ee8c]" />
              <div className="absolute w-[40px] h-[40px] top-[30%] right-[10px] rounded-full blur-[10px] bg-[#56a4ff]" />
              
              {/* Person image */}
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src="/element7_confident-young-businessman-in-blue-shirt-and-glasses-smiling-at.webp"
                    alt="Confident young businessman"
                    fill
                    className="object-contain p-4 md:p-0"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Cities and countries card */}
            <Card className="relative z-10 -mt-12 md:-mt-24 mx-2 md:mx-auto md:w-full max-w-3xl rounded-[20px] border border-[#E3E3E3] shadow-[0px_22px_44px_#207CFE66] bg-gradient-to-br from-[#243057] to-[#374255] p-6 md:p-10 animate-float">
              <h3 className="font-semibold text-white text-xl md:text-2xl text-left md:text-center leading-6 font-['Raleway',Helvetica] mb-6 md:mb-10">
                Представительства в городах и странах СНГ
              </h3>

              {/* Russian cities */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {russianCities.flat().map((city, cityIndex) => (
                  <div key={cityIndex} className="flex items-center gap-2">
                    <Image
                      className="w-[10px] h-[10px]"
                      src="/polygon-3.webp"
                      alt="Polygon"
                      width={10}
                      height={10}
                      loading="lazy"
                    />
                    <div className="font-medium text-white text-sm md:text-base font-['Raleway',Helvetica]">
                      {city}
                    </div>
                  </div>
                ))}
              </div>

              {/* CIS countries */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {cisCountries.map((country, index) => (
                  <Card
                    key={index}
                    className="bg-[#a9beef1a] rounded-[20px] border border-solid border-[#d3d3d31a] hover:scale-105 transition-transform"
                  >
                    <CardContent className="p-3">
                      <div className="flex items-center gap-3">
                        <Image
                          className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] object-cover rounded-full"
                          src={country.flagSrc}
                          alt={`Flag of ${country.name}`}
                          width={30}
                          height={30}
                          quality={100}
                          loading="lazy"
                        />
                        <div className="font-semibold text-white text-sm md:text-base font-['Raleway',Helvetica]">
                          {country.name}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};