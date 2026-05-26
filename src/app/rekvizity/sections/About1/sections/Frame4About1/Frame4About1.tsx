'use client';

import { TriangleIcon } from "lucide-react";
import { Card, CardContent } from "../../../../../../components/ui/card";
import { ReactElement } from 'react';
import Image from 'next/image';

export const Frame4About1 = (): ReactElement => {
  // Data for Russian cities
  const russianCities = [
    "Новосибирск",
    "Самара",
    "Казань",
    "Иркутск",
    "Екатеринбург",
    "Сочи",
    "Краснодар",
    "Чебоксары",
  ];

  // Data for CIS countries
  const cisCountries = [
    { name: "Казахстан", flagSrc: "/About1-ellipse-14.webp" },
    { name: "Узбекистан", flagSrc: "/About1-ellipse-14-1.webp" },
    { name: "Азербайджан", flagSrc: "/About1-ellipse-14-2.webp" },
    { name: "Республика Беларусь", flagSrc: "/About1-ellipse-14-3.webp" },
  ];

  return (
    <>
      {/* Desktop version - remains unchanged */}
      <main className="relative top-[600px] hidden desktop:block">
        <section className="flex flex-col items-center gap-[45px] w-full py-12">
          <div className="flex flex-col items-center gap-3 w-full max-w-[690px]">
            <h2 className="font-semibold text-[#232c42] text-4xl text-center [font-family:'Raleway',Helvetica]">
              Открыты представительства
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-7 w-full">
            {/* Russian Cities Card */}
            <Card className="w-full max-w-[660px] h-[323px] rounded-[20px] border-[#e2e2e2] shadow-2 bg-[linear-gradient(135.04deg,_#73A8FF_-64.84%,_#6FA7FF_6.47%,_#3C6CEC_130.52%)]">
              <CardContent className="p-0">
                <div className="p-[41px_57px]">
                  <h3 className="font-semibold text-white text-2xl leading-6 mb-9 [font-family:'Raleway',Helvetica]">
                    В 8 городах России
                  </h3>

                  <div className="flex justify-between">
                    {/* First column of cities */}
                    <div className="flex flex-col gap-6">
                      {russianCities.slice(0, 4).map((city, index) => (
                        <div key={index} className="flex items-center gap-2.5">
                          <TriangleIcon className="w-[10.5px] h-[9.53px] text-white fill-white" />
                          <span className="font-medium text-white text-lg leading-5 [font-family:'Raleway',Helvetica]">
                            {city}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Second column of cities */}
                    <div className="flex flex-col gap-6">
                      {russianCities.slice(4).map((city, index) => (
                        <div key={index} className="flex items-center gap-2.5">
                          <TriangleIcon className="w-[10.5px] h-[9.53px] text-white fill-white" />
                          <span className="font-medium text-white text-lg leading-5 [font-family:'Raleway',Helvetica]">
                            {city}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CIS Countries Card */}
            <Card className="w-full max-w-[660px] h-[323px] rounded-[20px] border-[#e2e2e2] shadow-2 bg-[#232C42]">
              <CardContent className="p-0">
                <div className="p-[41px_58px]">
                  <h3 className="font-semibold text-white text-2xl leading-6 mb-6 [font-family:'Raleway',Helvetica]">
                    в 4х странах СНГ
                  </h3>
                   
                  <div className="flex flex-wrap gap-[32px] w-[542px] h-[194px] relative left-[20px] ">
                    {cisCountries.map((country, index) => (
                      <Card
                        key={index}
                        className="w-[210px] h-[85px] rounded-[20px] border border-solid border-[#d3d3d31a] bg-[#a9beef1a] relative"
                      >
                        <CardContent className="p-0">
                          <div className="flex items-center gap-3 absolute top-[18px] left-6">
                            <Image
                              src={country.flagSrc}
                              alt={`Flag of ${country.name}`}
                              width={50}
                              height={50}
                              loading="lazy"
                              className="w-[50px] h-[50px] object-cover"
                            />
                            <span
                              className={`font-semibold text-white text-base leading-5 [font-family:'Raleway',Helvetica] ${country.name === "Республика Беларусь" ? "w-[156px]" : ""}`}
                            >
                              {country.name}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Mobile version */}
      <main className="relative desktop:hidden px-4 py-8 mt-12">
        <section className="flex flex-col items-center gap-8 w-full">
          <div className="flex flex-col items-center gap-3 w-full">
            <h2 className="font-semibold text-[#232c42] text-2xl md:text-3xl text-center [font-family:'Raleway',Helvetica]">
              Открыты представительства
            </h2>
          </div>

          <div className="flex flex-col items-center gap-6 w-full">
            {/* Russian Cities Card - Mobile */}
            <Card className="w-full max-w-md rounded-2xl border-[#e2e2e2] bg-[linear-gradient(135.04deg,_#73A8FF_-64.84%,_#6FA7FF_6.47%,_#3C6CEC_130.52%)]">
              <CardContent className="p-6">
                <h3 className="font-semibold text-white text-xl md:text-2xl text-center mb-6 [font-family:'Raleway',Helvetica]">
                  В 8 городах России
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {russianCities.map((city, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <TriangleIcon className="w-3 h-3 text-white fill-white flex-shrink-0" />
                      <span className="font-medium text-white text-base md:text-lg [font-family:'Raleway',Helvetica]">
                        {city}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CIS Countries Card - Mobile */}
            <Card className="w-full max-w-md rounded-2xl border-[#e2e2e2] bg-[#232C42]">
              <CardContent className="p-6">
                <h3 className="font-semibold text-white text-xl md:text-2xl text-center mb-6 [font-family:'Raleway',Helvetica]">
                  в 4х странах СНГ
                </h3>
                 
                <div className="grid grid-cols-1 gap-4">
                  {cisCountries.map((country, index) => (
                    <Card
                      key={index}
                      className="w-full rounded-2xl border border-solid border-[#d3d3d31a] bg-[#a9beef1a]"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <Image
                            src={country.flagSrc}
                            alt={`Flag of ${country.name}`}
                            width={40}
                            height={40}
                            loading="lazy"
                            className="w-10 h-10 md:w-12 md:h-12 object-cover flex-shrink-0"
                          />
                          <span className="font-semibold text-white text-sm md:text-base [font-family:'Raleway',Helvetica]">
                            {country.name}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </>
  );
};