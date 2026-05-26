'use client';

import { Card, CardContent } from "../../../components/ui/card";
import { ReactElement } from 'react';
import Image from 'next/image';

// Data for the intermediary problems
const intermediaryProblems = [
  {
    icon: "/element7-2.webp",
    title: "Срыв сроков",
    description:
      "Из-за «испорченного телефона» каждый этап придется долго согласовывать и постоянно уточнять детали",
  },
  {
    icon: "/element7-3.webp",
    title: "Плохое качество",
    description:
      "и несоответствие заказу. Общение происходит через людей не имеющих отношение к прямому производству, у них свое видение итогового качества",
  },
  {
    icon: "/element7-4.webp",
    title: "Дороже стоимость",
    description:
      "Каждый посредник накручивает свою маржу в цену или ухудшает качество материалов, чтобы получить свою выгоду",
  },
  {
    icon: "/element7-5.webp",
    title: "Сложности с гарантией и сервисным обслуживанием",
    description:
      "Посредникам главное продать, а потом можно и прикрыть фирму-однодневку",
  },
];

// Data for direct manufacturer benefits
const manufacturerBenefits = [
  {
    icon: "/element7-6.webp",
    title: "Общение ведется напрямую с личным менеджером",
    description:
      "Всегда на связи инженеры и дизайнеры. Недопонимания исключены",
  },
  {
    icon: "/element7-7.webp",
    title: "Работаем с соблюдением Гост, СНИП.",
    description:
      "С 2012 года сделано более 3000 тентовых конструкций (шатры, ангары и прочее)",
  },
  {
    icon: "/element7-8.webp",
    title: "Мы сами закупаем материалы и производим детали.",
    description: "Вы получаете цену без лишней накрутки",
  },
  {
    icon: "/element7-9.webp",
    title: "Мы на рынке более 10 лет, репутация доказана временем.",
    description: "Можете связаться с нашими клиентами и спросить сами",
  },
];

export const HeroImageSection = (): ReactElement => {
  return (
    <>
      {/* ============ DESKTOP VERSION (FIXED: Proper relative layout) ============ */}
      <section className="hidden desktop:block w-full py-16 px-4">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="w-full text-4xl font-semibold font-['Raleway',Helvetica] tracking-normal mb-12 text-left">
            <span className="text-[#527dc5]">Мы избавим вас от проблем</span>
            <span className="text-[#232c42]">
              {" "}
              возникающих
              <br />
              при работе с посредниками-перекупщиками
            </span>
          </h2>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Intermediaries Card */}
            <Card className="w-full lg:w-1/2 rounded-[20px] border border-[#D5D5D5] shadow-lg">
              <CardContent className="p-12">
                <h3 className="text-center text-2xl font-semibold text-[#242f57] font-['Raleway',Helvetica] mb-16">
                  Посредники
                </h3>

                <div className="space-y-10">
                  {intermediaryProblems.map((problem, index) => (
                    <div key={index} className="flex items-start gap-8">
                      <div className="w-[74px] h-[74px] bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Image
                          src={problem.icon}
                          alt={problem.title}
                          width={40}
                          height={40}
                          loading="lazy"
                        />
                      </div>
                      <div className="flex flex-col gap-3">
                        <h4 className="font-semibold text-[#394355] text-base leading-6 font-['Raleway',Helvetica]">
                          {problem.title}
                        </h4>
                        <p className="text-[#4f5d80] text-sm leading-5 font-normal font-['Raleway',Helvetica] max-w-[420px]">
                          {problem.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Direct Manufacturer Card */}
            <Card
              className="w-full lg:w-1/2 rounded-[20px] shadow-[0px_22px_44px_#207CFE66] bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC] border-0"
            >
              <CardContent className="p-12">
                <h3 className="text-center text-2xl font-semibold text-white font-['Raleway',Helvetica] mb-16">
                  Напрямую у нас -производителя Mobile tent
                </h3>

                <div className="space-y-10">
                  {manufacturerBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-6">
                      <div className="w-[74px] h-[74px] bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Image
                          className="object-contain"
                          alt={benefit.title}
                          src={benefit.icon}
                          width={48}
                          height={48}
                          loading="lazy"
                        />
                      </div>
                      <div className="flex flex-col gap-3">
                        <h4 className="font-semibold text-white text-lg leading-6 font-['Raleway',Helvetica]">
                          {benefit.title}
                        </h4>
                        <p className="text-white text-base leading-5 font-normal font-['Raleway',Helvetica] max-w-[420px]">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ============ MOBILE/TABLET VERSION ============ */}
      <section className="block desktop:hidden px-4 py-8 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-semibold font-['Raleway',Helvetica] md:text-center mb-8 md:mb-12 leading-tight">
          <span className="text-[#527dc5]">Мы избавим вас от проблем</span>{" "}
          <span className="text-[#232c42]">при работе с посредниками</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Intermediaries Card (Mobile/Tablet) */}
          <Card className="rounded-[20px] border border-[#D5D5D5] shadow-lg overflow-hidden">
            <CardContent className="p-6 md:p-10">
              <h3 className="text-xl md:text-2xl font-semibold text-[#242f57] text-center mb-6 md:mb-10 font-['Raleway',Helvetica]">
                Посредники
              </h3>
              <div className="space-y-6 md:space-y-8">
                {intermediaryProblems.map((problem, index) => (
                  <div key={index} className="flex items-start gap-4 md:gap-6">
                    <div className="w-10 h-10 md:w-14 md:h-14 flex-shrink-0 flex items-center justify-center bg-gray-100 rounded-full">
                      <Image
                        src={problem.icon}
                        alt={problem.title}
                        width={40}
                        height={40}
                        loading="lazy"
                        className="w-6 h-6 md:w-8 md:h-8"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-[#394355] text-sm md:text-base leading-5 mb-1">
                        {problem.title}
                      </h4>
                      <p className="text-[#4f5d80] text-xs md:text-sm leading-4 font-normal max-w-full">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Direct Manufacturer Card (Mobile/Tablet) */}
          <Card className="rounded-[20px] shadow-lg bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC] border-0 overflow-hidden">
            <CardContent className="p-6 md:p-10">
              <h3 className="text-xl md:text-2xl font-semibold text-white text-center mb-6 md:mb-10 font-['Raleway',Helvetica]">
                Напрямую у производителя
              </h3>
              <div className="space-y-6 md:space-y-8">
                {manufacturerBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 md:gap-6">
                    <div className="w-10 h-10 md:w-14 md:h-14 flex-shrink-0 flex items-center justify-center bg-white/20 rounded-full">
                      <Image
                        className="object-contain w-6 h-6 md:w-8 md:h-8"
                        alt={benefit.title}
                        src={benefit.icon}
                        width={48}
                        height={48}
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white text-sm md:text-base leading-5 mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-white text-xs md:text-sm leading-4 font-normal max-w-full">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};