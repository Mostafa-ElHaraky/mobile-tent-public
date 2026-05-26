'use client';

import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { ReactElement } from 'react';

export const Frame2Proizvodstvoshatrov = (): ReactElement => {
  const guaranteePeriods = [
    { years: "5 лет", description: "на конструкцию" },
    { years: "10 лет", description: "на ткань" },
    { years: "50 лет", description: "а сварные швы" },
    { years: "25 лет", description: "на отсутствие корозии" },
  ];

  return (
    <>
      {/* ================= Desktop (unchanged) ================= */}
      <section className="hidden md:flex w-[1440px] h-[211px] rounded-[30px] bg-[#232c42]">
        <div className="flex w-[1274px] items-center justify-between relative bottom-[12px] left-[88px]">
          <div className="flex flex-col w-[574px] items-start gap-[22px] relative">
            <div className="flex flex-col w-[690px] items-start gap-3 relative flex-[0_0_auto] mr-[-116.00px]">
              <h2 className="w-[674px] mt-[-1.00px] font-semibold text-4xl leading-[normal] relative [font-family:'Raleway',Helvetica] tracking-[0]">
                <span className="text-white">Даем</span>
                <span className="text-[#98beff]"> честные гарантии</span>
              </h2>
            </div>
            <p className="w-[510px] text-white text-base leading-6 relative [font-family:'Raleway',Helvetica] tracking-[0]">
              <span className="font-bold">99% клиентов ей не пользуются<br /></span>
              <span className="font-medium">но предоставляем для вашего спокойствия</span>
            </p>
          </div>

          <Card className="border-[3px] border-solid border-white shadow-[var(--)] backdrop-blur-[79px] bg-[#fffffff2] rounded-[20px]">
            <CardContent className="p-[27px] py-[17px]">
              <div className="flex items-start gap-7">
                {guaranteePeriods.map((period, index) => (
                  <div key={index} className="flex flex-col items-start gap-1.5">
                    <div className="[font-family:'Raleway',Helvetica] font-bold text-[#232c42] text-3xl whitespace-nowrap">
                      {period.years}
                    </div>
                    <div className="[font-family:'Raleway',Helvetica] font-normal text-[#394355] text-sm whitespace-nowrap">
                      {period.description}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ================= Mobile (new) ================= */}
      <section className="md:hidden w-full bg-[#232c42] rounded-3xl py-8 px-5 flex flex-col items-center gap-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold [font-family:'Raleway',Helvetica] leading-snug">
            <span className="text-white">Даем</span>
            <span className="text-[#98beff]"> честные гарантии</span>
          </h2>
          <p className="text-white text-sm mt-3 leading-5">
            <span className="font-bold">99% клиентов ей не пользуются,</span><br />
            <span className="font-medium">но предоставляем для вашего спокойствия</span>
          </p>
        </div>

        <Card className="w-full border-2 border-white bg-white/95 rounded-2xl shadow-md">
          <CardContent className="p-4">
            <div className="grid grid-cols-2 gap-4 text-center">
              {guaranteePeriods.map((period, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="text-[#232c42] font-bold text-xl [font-family:'Raleway',Helvetica]">
                    {period.years}
                  </div>
                  <div className="text-[#394355] text-sm [font-family:'Raleway',Helvetica]">
                    {period.description}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  );
};