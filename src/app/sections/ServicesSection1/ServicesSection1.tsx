'use client';

import { useState } from 'react';
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { ReactElement } from 'react';
import Image from 'next/image';

export const ServicesSection1 = (): ReactElement => {
  // Data for GOST standards
  const gostStandards = [
    "ГОСТ 31937-2011",
    "ГОСТ 12.1.012-2004",
    "ГОСТ 27751-2014",
  ];

  // Data for cities
  const cityData = [
    { count: "8 городов России", type: "представительства" },
    { count: "4 городах СНГ", type: "представительства" },
  ];

  // --- NEW: Modal state for "Список допусков"
  const [isPermitsOpen, setIsPermitsOpen] = useState(false);

  // --- NEW: Content for the modal
  const skolkovoUrl = "https://navigator.sk.ru/orn/1127932";
  const permitsText = [
    "С 22 сентября 2025 года наша компания",
    "ООО \"Завод Тентовых Конструкций\" стала резидентом СКОЛКОВО!",
    "",
    "Это новый уровень!",
    "Это крутые возможности и проекты!",
    "",
    "Мы единственная компания в РФ по каркасно - тентовому строительсу кто зашли в сколково как инновационная компания!",
    "",
    "За нами будущее, за нами новейшие разработки и технологии!!",
  ];

  // --- NEW: Lightweight modal (no extra deps)
  const PermitsModal = () => {
    if (!isPermitsOpen) return null;
    return (
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center"
        role="dialog"
        aria-modal="true"
      >
        {/* Backdrop */}
        <button
          aria-label="Закрыть"
          className="absolute inset-0 bg-black/40"
          onClick={() => setIsPermitsOpen(false)}
        />
        {/* Panel */}
        <div className="relative w-[min(92vw,720px)] max-h-[85vh] overflow-auto rounded-2xl bg-white shadow-xl">
          <div className="p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-[#232c42] [font-family:'Raleway',Helvetica]">
              Список допусков / Подтверждение статуса
            </h3>

            <div className="mt-4 space-y-2 text-[#232c42] [font-family:'Raleway',Helvetica]">
              {permitsText.map((t, i) => (
                <p key={i} className="text-sm md:text-base leading-6">
                  {t}
                </p>
              ))}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={skolkovoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Button className="w-full sm:w-auto">
                  Открыть подтверждение на сайте Сколково
                </Button>
              </a>
              <Button
                variant="outline"
                className="w-full sm:w-auto"
                onClick={() => setIsPermitsOpen(false)}
              >
                Закрыть
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Desktop Version (unchanged) */}
      <section className="hidden desktop:inline-flex flex-col items-start gap-9 relative top-[50px]">
        <header className="flex flex-col items-start gap-[36px] w-[663px] h-[84px] relative">
          <h5 className="w-[663px] mt-[-1.00px] font-semibold text-4xl leading-[normal] relative [font-family:'Raleway',Helvetica] tracking-[0]">
            <span className="text-[#527dc5]">С 2012 года </span>
            <span className="text-[#232c42]">
              изготавливаем тентовые конструкции: шатры, ангары и пр.
            </span>
          </h5>
        </header>

        <div className="relative w-[1348px] h-[381px] top-[40px] mr-[-4.00px]">
          <div className="relative w-[1426px] h-[465px] top-[-22px] left-[-38px]">
            {/* Background SVG elements */}
            <Image
              className="absolute top-0 left-[678px]"
              alt="Rectangle"
              src="/rectangle-61.webp"
              width={748}
              height={294}
              loading="lazy"
            />
            <Image
              className="absolute top-[234px] left-0"
              alt="Rectangle"
              src="/rectangle-62.webp"
              width={508}
              height={231}
              loading="lazy"
            />
            {/* Technical control card */}
            <Card className="absolute w-[432px] h-[155px] top-[246px] left-[490px] rounded-[20px] border border-solid border-[#dbdbdb] bg-white shadow-[0px_24px_38px_0px_rgba(22,_29,_36,_0.08)] backdrop-blur-[158px] [-webkit-backdrop-filter:blur(158px)]">
              <CardContent className="!p-6">
                <div className="flex flex-col items-start gap-2.5">
                  <p className="[font-family:'Raleway',Helvetica] font-normal text-[#232c42] text-xl tracking-[0] leading-6">
                    <span className="font-semibold">
                      Отдел технического контроля
                    </span>
                  </p>
                  <p className="[font-family:'Raleway',Helvetica] font-normal text-[#232c42] text-lg tracking-[0] leading-6">
                    (ОТК) для исключения брака проверяет каждый этап и сварные швы
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Cities representation card */}
            <Card className="absolute w-[432px] h-[155px] top-[246px] left-[950px] rounded-[20px] border border-solid border-[#dbdbdb] bg-white shadow-[0px_24px_38px_0px_rgba(22,_29,_36,_0.08)] backdrop-blur-[158px] [-webkit-backdrop-filter:blur(158px)] ">
              <CardContent className="!p-6 flex flex-col items-center justify-center h-full">
                <div className="flex flex-col items-center gap-[17px] w-full">
                  <div className="flex flex-wrap justify-center gap-4">
                    {cityData.map((city, index) => (
                      <Badge
                        key={index}
                        className="flex h-[49px] items-center gap-2.5 px-4 py-[7px] bg-[#527dc5] rounded-[10px]"
                      >
                        <span className="[text-shadow:0px_4px_4px_#00000040] [font-family:'Raleway',Helvetica] font-bold text-white text-lg tracking-[0] leading-[normal]">
                          {city.count}
                        </span>
                      </Badge>
                    ))}
                  </div>
                  <p className="font-semibold text-[#4f5d80] text-xl leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                    представительства
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 8000+ manufactured structures */}
            <div className="inline-flex flex-col items-start gap-3 absolute top-[276px] left-[70px]">
              <h2 className="w-fit mt-[-1.00px] [text-shadow:0px_4px_4px_#00000040] font-bold text-white text-[46px] leading-[normal] whitespace-nowrap relative [font-family:'Raleway',Helvetica] tracking-[0]">
                8000+
              </h2>
              <p className="w-fit font-semibold text-white text-xl leading-6 whitespace-nowrap relative [font-family:'Raleway',Helvetica] tracking-[0]">
                изготовленных конструкций
              </p>
            </div>

            {/* CPO membership */}
            <h2 className="absolute w-[449px] top-[52px] left-[758px] [font-family:'Raleway',Helvetica] font-semibold text-white text-4xl tracking-[0] leading-[normal]">
              Являемся членами CPO
            </h2>

            {/* GOST requirements card */}
            <Card className="absolute w-[660px] h-[206px] top-[22px] left-10 rounded-[20px] shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] border-0 ">
              <CardContent className="p-0">
                <div className="w-[449px] top-[29px] left-[30px] flex flex-col items-start gap-2.5 absolute h-[83px]">
                  <p className="relative self-stretch [font-family:'Raleway',Helvetica] font-normal text-[#232c42] text-xl tracking-[0] leading-6">
                    <span className="font-semibold">
                      Соблюдаем все 50+ требований
                      <br />
                    </span>
                  </p>
                  <p className="relative self-stretch [font-family:'Raleway',Helvetica] font-normal text-[#232c42] text-lg tracking-[0] leading-6">
                    ГОСТов и СНИПов к качеству материалов и сборке Это даже
                    больше, чем обычно нужно
                  </p>
                </div>

                <div className="inline-flex items-start gap-6 absolute top-[141px] left-[30px]">
                  {gostStandards.map((standard, index) => (
                    <Badge
                      key={index}
                      className="justify-center gap-2.5 px-3 py-1.5 bg-[#527dc5] rounded-lg inline-flex items-center relative flex-[0_0_auto]"
                    >
                      <span className="relative w-fit mt-[-1.00px] [font-family:'Raleway',Helvetica] font-semibold text-white text-base tracking-[0] leading-6 whitespace-nowrap">
                        {standard}
                      </span>
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Permissions list button */}
            <Button
              variant="outline"
              className="inline-flex flex-col items-start gap-2.5 px-6 py-3 absolute top-[119px] left-[758px] bg-white rounded-[50px] border-solid shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] border-0 "
              onClick={() => setIsPermitsOpen(true)}  
            >
              <div className="gap-[15px] inline-flex items-center relative flex-[0_0_auto]">
                <div className="relative w-[50px] h-[50px]">
                  <div className="relative w-[35px] h-[35px] top-2 left-2 overflow-hidden">
                    <div className="relative h-[35px] top-px">
                      <Image
                        className="absolute top-px left-px"
                        alt="Group"
                        src="/element8.webp"
                        width={32}
                        height={32}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
                <span className="w-fit font-bold text-[#232c42] text-base leading-[normal] whitespace-nowrap relative [font-family:'Raleway',Helvetica] tracking-[0]">
                  Список допусков
                </span>
              </div>
            </Button>
          </div>
        </div>
      </section>

   {/* Mobile/Tablet Version */}
<section className="desktop:hidden flex flex-col items-center gap-6 p-4 md:p-12 w-full max-w-5xl mx-auto">
  {/* Header - Centered */}
  <div className="w-full text-center mb-6">
    <h5 className="text-2xl md:text-4xl font-semibold [font-family:'Raleway',Helvetica] leading-tight max-w-3xl mx-auto">
      <span className="text-[#527dc5]">С 2012 года </span>
      <span className="text-[#232c42]">
        изготавливаем тентовые конструкции: шатры, ангары и пр.
      </span>
    </h5>
  </div>

  {/* Responsive Grid for Cards */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
    
    {/* GOST Requirements Card */}
    <div className="relative w-full min-h-[200px] rounded-[24px] overflow-hidden shadow-xl bg-white border border-[#dbdbdb] hover:shadow-2xl transition-shadow">
      <div className="p-6 md:p-8 flex flex-col justify-between h-full">
        <div className="mb-6">
          <p className="font-bold text-[#232c42] text-lg md:text-xl [font-family:'Raleway'] leading-tight">
            Соблюдаем все 50+ требований
          </p>
          <p className="text-[#232c42] text-sm md:text-base [font-family:'Raleway'] leading-relaxed mt-3 opacity-80">
            ГОСТов и СНИПов к качеству материалов и сборке. Это даже больше, чем обычно нужно.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {gostStandards.map((standard, index) => (
            <div
              key={index}
              className="bg-[#527dc5] text-white text-xs md:text-sm font-semibold px-4 py-2 rounded-lg shadow-sm"
            >
              {standard}
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* CPO Membership Card */}
    <div className="relative w-full min-h-[200px] rounded-[24px] overflow-hidden shadow-xl group">
      <div className="absolute inset-0 z-0">
        <Image
          src="/rectangle-61.webp"
          alt="CPO Background"
          fill
          className="object-cover brightness-75 transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy"
        />
      </div>
      
      <div className="relative z-10 p-6 md:p-8 flex flex-col justify-between h-full text-white bg-gradient-to-t from-black/60 to-transparent">
        <h2 className="text-xl md:text-2xl font-bold [font-family:'Raleway'] leading-tight drop-shadow-md">
          Являемся членами CPO
        </h2>
        <div className="flex justify-start mt-12 md:mt-16">
          <Button
            variant="outline"
            className="bg-white/95 text-[#232c42] rounded-full px-6 py-3 shadow-xl hover:bg-white text-sm font-bold border-0 backdrop-blur-sm transition-all"
            onClick={() => setIsPermitsOpen(true)}  
          >
            <div className="flex items-center gap-2">
              <Image
                src="/element8.webp"
                alt="List icon"
                width={20}
                height={20}
                className="brightness-0"
              />
              <span>Список допусков</span>
            </div>
          </Button>
        </div>
      </div>
    </div>

    {/* 8000+ Structures Card */}
    <div className="relative w-full min-h-[200px] rounded-[24px] overflow-hidden shadow-xl">
      <div className="absolute inset-0 z-0">
        <Image
          src="/rectangle-62.webp"
          alt="Decorative pattern"
          fill
          className="object-cover brightness-90"
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy"
        />
      </div>

      <div className="relative z-10 p-6 md:p-8 flex flex-col justify-center items-center h-full bg-black/10">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white leading-none [text-shadow:0px_4px_12px_rgba(0,0,0,0.5)] font-['Raleway']">
            8000+
          </h2>
          <p className="mt-2 font-bold text-white text-lg md:text-xl leading-tight font-['Raleway'] [text-shadow:0px_2px_8px_rgba(0,0,0,0.5)]">
            изготовленных конструкций
          </p>
        </div>
      </div>
    </div>

    {/* Cities Representation Card */}
    <div className="relative w-full min-h-[200px] rounded-[24px] overflow-hidden shadow-xl bg-white border border-[#dbdbdb]">
      <div className="p-6 md:p-8 flex flex-col justify-center h-full">
        <div className="flex flex-col gap-4 items-center justify-center mb-4">
          <div className="bg-[#527dc5] text-white text-base font-bold px-6 py-3 rounded-xl text-center w-full shadow-md">
            8 городов России
          </div>
          <div className="bg-[#527dc5] text-white text-base font-bold px-6 py-3 rounded-xl text-center w-full shadow-md">
            4 города СНГ
          </div>
        </div>
        <p className="text-[#4f5d80] text-lg font-bold [font-family:'Raleway'] text-center">
          представительства
        </p>
      </div>
    </div>

    {/* Technical Control Card */}
    <div className="relative w-full md:col-span-2 min-h-[160px] rounded-[24px] overflow-hidden shadow-xl bg-gradient-to-r from-[#f8fafc] to-white border border-[#dbdbdb]">
      <div className="p-6 md:p-10 flex flex-col justify-center h-full">
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-bold text-[#232c42] text-xl md:text-2xl [font-family:'Raleway'] leading-tight">
            Отдел технического контроля
          </p>
          <p className="text-[#232c42] text-base md:text-lg [font-family:'Raleway'] leading-relaxed mt-4 opacity-80">
            (ОТК) для исключения брака проверяет каждый этап и сварные швы
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* NEW: Modal mount */}
      <PermitsModal />
    </>
  );
};
