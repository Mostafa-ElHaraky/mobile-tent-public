'use client';
import { Card, CardContent } from "../../../../../components/ui/card";
import { ReactElement } from 'react';

export const DivMainOurProjects1 = (): ReactElement => {
  return (
    <main className="relative w-full mx-auto top-[50px]">
      {/* Desktop version */}
      <section className="hidden md:flex justify-between w-full gap-8 py-8">
        <div className="relative left-[50px]">
          <div className="flex flex-col gap-9">
            <div className="flex flex-col gap-3">
              {/* ✅ Changed from H2 to H2 (main H1 is now in parent) */}
              <h2 className="font-medium text-4xl text-[#394355] font-['Raleway',Helvetica]">
                Выполненные работы
              </h2>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-6">
                <div className="inline-flex flex-col gap-2.5 px-3 py-1.5 rounded-lg [background:linear-gradient(159deg,rgba(36,48,87,1)_0%,rgba(55,66,85,1)_100%)]">
                  <div className="flex items-center gap-2">
                    <p className="font-normal text-white text-lg leading-6 font-['Raleway',Helvetica]">
                      Для наших инженеров нет сложных задач
                    </p>
                  </div>
                </div>

                <p className="font-normal text-[#394355] text-lg leading-6 font-['Raleway',Helvetica]">
                  Посмотрите, как мы решаем задачи клиентов
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative right-[50px]">
          <Card
            className="w-[351px] h-[139px] rounded-[20px] border-0 shadow-2 bg-transparent"
            style={{
              background:
                "linear-gradient(165.06deg, #73A8FF 10.53%, #6FA7FF 47.69%, #3C6CEC 112.35%)",
            }}
          >
            <CardContent className="p-0">
              <div className="flex flex-col gap-3 p-6">
                <h3 className="font-bold text-4xl text-white font-['Raleway',Helvetica] whitespace-nowrap">
                  1 500 000+ м2
                </h3>
                <p className="font-medium text-white text-base font-['Raleway',Helvetica] max-w-[275px]">
                  площадь произведенных тентовых конструкций
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

     {/* Mobile version */}
      <section className="flex flex-col gap-6 py-8 px-4 md:hidden">
        {/* Breadcrumb للموبايل - تم إضافته هنا */}
        <div className="mb-2 self-start ">
          <div className="inline-flex items-center gap-2 p-1 bg-[#4f5d801a] rounded relative top-[15px] ">
            <div className="text-[#394355] text-xs">
              <a href="/" className="hover:underline">Главная &gt;{" "}</a>
              <span className="font-medium underline">Портфолио</span>
            </div>
          </div>
        </div>
        
        <div>
          <div className="flex flex-col gap-9">
            <div className="flex flex-col gap-3">
              {/* ✅ Changed from H2 to H2 (main H1 is now in parent) */}
              <h2 className="font-medium text-2xl text-[#394355] font-['Raleway',Helvetica] text-left">
                Выполненные работы
              </h2>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-6">
                <div className="inline-flex flex-col gap-2.5 px-3 py-1.5 rounded-lg [background:linear-gradient(159deg,rgba(36,48,87,1)_0%,rgba(55,66,85,1)_100%)]">
                  <div className="flex items-center gap-2">
                    <p className="font-normal text-white text-base leading-6 font-['Raleway',Helvetica] text-center">
                      Для наших инженеров нет сложных задач
                    </p>
                  </div>
                </div>

                <p className="font-normal text-[#394355] text-base leading-6 font-['Raleway',Helvetica] text-left">
                  Посмотрите, как мы решаем задачи клиентов
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Card
            className="w-full max-w-[320px] rounded-[20px] border-0 shadow-2 bg-transparent"
            style={{
              background:
                "linear-gradient(165.06deg, #73A8FF 10.53%, #6FA7FF 47.69%, #3C6CEC 112.35%)",
            }}
          >
            <CardContent className="p-0">
              <div className="flex flex-col gap-3 p-6 items-center text-center">
                <h3 className="font-bold text-3xl text-white font-['Raleway',Helvetica]">
                  1 500 000+ м2
                </h3>
                <p className="font-medium text-white text-sm font-['Raleway',Helvetica]">
                  площадь произведенных тентовых конструкций
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
};