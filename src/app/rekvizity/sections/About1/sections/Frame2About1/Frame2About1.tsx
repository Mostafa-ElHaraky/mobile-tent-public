'use client';

import { Card, CardContent } from "../../../../../../components/ui/card";
import { ReactElement } from 'react';

export const Frame2About1 = (): ReactElement => {
  // Warranty data for mapping
  const warrantyItems = [
    { years: "5 лет", description: "на конструкцию" },
    { years: "10 лет", description: "на ткань" },
    { years: "50 лет", description: "а сварные швы" },
    { years: "25 лет", description: "на отсутствие корозии" },
  ];

  return (
    <>
      {/* نسخة الديسكتوب الأصلية - لم يتم تغيير أي شيء */}
      <main className="relative top-[600px] hidden md:block" >
        <section className="w-full py-12 rounded-[30px]">
          <div className="container flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex flex-col gap-[22px] max-w-[574px]">
              <div className="flex flex-col gap-3">
                <h2 className="font-semibold text-4xl [font-family:'Raleway',Helvetica] tracking-[0]">
                  <span className="text-[#232c42]">Даем</span>
                  <span className="text-[#527dc5]"> честные гарантии</span>
                </h2>
              </div>

              <p className="text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica] tracking-[0] max-w-[510px]">
                <span className="font-bold">
                  99% клиентов ей не пользуются
                  <br />
                </span>
                <span className="font-medium">
                  но предоставляем для вашего спокойствия
                </span>
              </p>
            </div>

            <Card className="border-[3px] border-solid border-white shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] bg-[#fffffff2] rounded-[20px]">
              <CardContent className="p-[27px]">
                <div className="flex flex-wrap gap-7">
                  {warrantyItems.map((item, index) => (
                    <div key={index} className="flex flex-col gap-1.5">
                      <div className="text-[#232c42] text-3xl [font-family:'Raleway',Helvetica] font-bold tracking-[0] leading-[normal] whitespace-nowrap">
                        {item.years}
                      </div>
                      <div className="text-[#394355] text-sm leading-[normal] whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                        {item.description}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* نسخة الهاتف المحمول - تمت إضافتها أسفل نسخة الديسكتوب */}
<main className="desktop:hidden relative w-full bg-white px-4 py-0  ">
  <section className="w-full py-8 px-4 rounded-[20px]">
    <div className="container flex flex-col items-center justify-center gap-6">
      <div className="flex flex-col gap-4 max-w-full text-center">
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-3xl [font-family:'Raleway',Helvetica] tracking-[0]">
            <span className="text-[#232c42]">Даем</span>
            <span className="text-[#527dc5]"> честные гарантии</span>
          </h2>
        </div>

        <p className="text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica] tracking-[0] max-w-full px-2">
          <span className="font-bold">
            99% клиентов ей не пользуются
            <br />
          </span>
          <span className="font-medium">
            но предоставляем для вашего спокойствия
          </span>
        </p>
      </div>

      <Card className="border-[2px] border-solid border-white shadow-md backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)] bg-[#fffffff2] rounded-[15px] w-full max-w-md">
        <CardContent className="p-5">
          <div className="grid grid-cols-2 gap-5">
            {warrantyItems.map((item, index) => (
              <div key={index} className="flex flex-col gap-2 items-center text-center">
                <div className="text-[#232c42] text-2xl [font-family:'Raleway',Helvetica] font-bold tracking-[0] leading-[normal]">
                  {item.years}
                </div>
                <div className="text-[#394355] text-sm leading-[normal] [font-family:'Raleway',Helvetica] tracking-[0]">
                  {item.description}
                </div>
              </div>
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