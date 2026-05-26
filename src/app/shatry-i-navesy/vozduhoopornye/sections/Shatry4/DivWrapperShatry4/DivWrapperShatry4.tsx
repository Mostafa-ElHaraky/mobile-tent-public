'use client';

import { Card, CardContent } from "../../../../../../components/ui/card";
import { ReactElement } from 'react';
import Image from 'next/image';

export const DivWrapperShatry4 = (): ReactElement => {
  // Feature items data
  const featureItems = [
    {
      id: 1,
      icon: "/tent5647818-------1.webp",
      title: "Выдаем документы:",
      description:
        "договор, акт доставки и выполненных работ, паспорт, инструкция, сертификаты и еще более 10 документов",
      hasCircle: true,
    },
    {
      id: 2,
      icon: "/M011t0367-d-gold-coin-06july22-------1.webp",
      title: "Работаем с любыми видами бизнеса и методами оплаты:",
      description: "ИП, ООО, НДС, счета, безнал, карты и пр.",
      hasCircle: true,
    },
    {
      id: 3,
      icon: "/Lock--1-------1.webp",
      title: "Не разглашаем",
      description: "конфиденциальные данные",
      hasCircle: false,
    },
  ];

  // Guarantee cards data
  const guaranteeCards = [
    { id: 1, years: "5 лет", description: "на конструкцию" },
    { id: 2, years: "10 лет", description: "на ткань" },
    { id: 3, years: "50 лет", description: "на сварные швы" },
    { id: 4, years: "25 лет", description: "на отстутствие корозии" },
  ];

  return (
    <>
      {/* =============== نسخة الديسكتوب (كما هي، بدون تغيير =============== */}
      <section className="hidden md:block relative bottom-[30px] w-full max-w-[1344px] h-[491px] mx-auto px-12 pt-[-85px]">
        <div className="relative w-[620px] font-semibold text-4xl leading-normal [font-family:'Raleway',Helvetica] tracking-[0]">
          <span className="text-[#527dc5]">Заключаем договор</span>
          <span className="text-[#232c42]">
            {" "}
            с гарантиями сроков, цены и качества
          </span>
        </div>

        <div className="flex items-start gap-3 mt-[10px]">
          <div className="relative w-fit font-medium text-[#4f5d80] text-lg leading-6 whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
            Фиксируем их и не меняем
          </div>
        </div>

        <Card className="absolute top-[45px] left-[684px] bg-white rounded-[20px] shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] border-0 ">
          <CardContent className="px-[27px] py-[17px]">
            <div className="flex flex-col items-start gap-2.5">
              <div className="relative w-fit mt-[-1.00px] font-bold text-xl leading-normal whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0] ">
                <span className="text-[#527dc5]">Честные</span>
                <span className="text-[#232c42]"> гарантии</span>
              </div>
              <div className="flex items-start gap-7">
                <div className="flex flex-col items-start gap-1.5">
                  <div className="relative w-[604px] mt-[-1.00px] font-normal text-[#394355] text-sm leading-normal [font-family:'Raleway',Helvetica] tracking-[0]">
                    99% клиентов не воспользовались, но даем для вашего
                    спокойствия
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col items-start gap-[30px] absolute top-[175px] left-0">
          {featureItems.map((item) => (
            <div key={item.id} className="flex items-center gap-[29px]">
              <div className="relative w-[75px] h-[75px]">
                {item.hasCircle ? (
                  <div className="relative w-[141px] h-[150px] top-[-7px] left-[-38px]">
                    <div className="absolute w-[75px] h-[75px] top-[18px] left-[38px] rounded-[52px] shadow-2 [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]" />
                    <Image
                      className="absolute top-0 left-0"
                      alt="Feature icon"
                      src={item.icon}
                      width={141}
                      height={150}
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <>
                    <div className="absolute w-[75px] h-[75px] rounded-[52px] shadow-2 [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]" />
                    <Image
                      className="absolute top-0 left-[17px]"
                      alt="Lock"
                      src={item.icon}
                      width={42}
                      height={68}
                      loading="lazy"
                    />
                  </>
                )}
              </div>

              <div className="relative w-[345px] font-normal text-[#394355] text-base leading-5 [font-family:'Raleway',Helvetica] tracking-[0]">
                <span className="font-semibold">{item.title}</span>
                <span className="[font-family:'Raleway',Helvetica] font-normal text-[#394355] text-base tracking-[0] leading-5">
                  {" "}
                  {item.description}
                </span>
              </div>
            </div>
          ))}
        </div>

        {guaranteeCards.map((card, index) => {
          const positions = [
            "top-[149px] left-[684px]",
            "top-[149px] left-[1026px]",
            "top-[332px] left-[684px]",
            "top-[332px] left-[1026px]",
          ];
          return (
            <Card
              key={card.id}
              className={`absolute w-[318px] h-[159px] ${positions[index]} bg-white rounded-[20px] shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] border-0 `}
            >
              <CardContent className="p-0">
                <div className="flex flex-col items-start gap-1.5 relative top-12 left-[27px]">
                  <div
                    className="text-[46px] font-bold leading-none whitespace-nowrap text-transparent"
                    style={{
                      backgroundImage: "linear-gradient(180deg, #73a8ff, #3c6cec)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                    }}
                  >
                    {card.years}
                  </div>
                  <div className="text-lg text-[#394355] font-normal">
                    {card.description}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </section>

      {/* =============== نسخة الهاتف (تم تعديل ترتيب "Честные гарантии") =============== */}
      <section className="block md:hidden px-6 py-8 bg-gray-50 rounded-2xl mx-4 my-6 mt-[-10] shadow-sm">
        <h2 className="text-2xl font-semibold text-[#527dc5] leading-tight">
          Заключаем договор{" "}
          <span className="text-[#232c42]">с гарантиями сроков, цены и качества</span>
        </h2>
        <p className="text-[#4f5d80] text-lg mt-2">Фиксируем их и не меняем</p>

        {/* Feature Items */}
        <div className="mt-6 space-y-6">
          {featureItems.map((item) => (
            <div key={item.id} className="flex items-start gap-4">
              <div className="relative w-12 h-12 flex-shrink-0">
                {item.hasCircle ? (
                  <div className="relative w-16 h-16 -left-1 -top-1">
                    <div className="absolute w-12 h-12 rounded-full bg-gradient-to-b from-[#73a8ff] to-[#3c6cec]" />
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={64}
                      height={64}
                      className="absolute top-0 left-0 w-16 h-16 object-contain"
                    />
                  </div>
                ) : (
                  <>
                    <div className="absolute w-12 h-12 rounded-full bg-gradient-to-b from-[#73a8ff] to-[#3c6cec]" />
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={42}
                      height={68}
                      className="absolute top-1 left-2 w-8 h-10 object-contain"
                      loading="lazy"
                    />
                  </>
                )}
              </div>
              <div className="text-base text-[#394355] leading-5">
                <span className="font-semibold">{item.title}</span>{" "}
                {item.description}
              </div>
            </div>
          ))}
        </div>

        {/* ✅ تم نقل "Честные гарантии" هنا (بعد العناصر الثلاثة) */}
        <div className="mt-6 bg-white rounded-2xl shadow-md p-5 backdrop-blur-sm border border-gray-100">
          <h3 className="text-xl font-bold text-[#527dc5]">
            Честные <span className="text-[#232c42]">гарантии</span>
          </h3>
          <p className="text-sm text-[#394355] mt-2">
            99% клиентов не воспользовались, но даем для вашего спокойствия
          </p>
        </div>

        {/* Guarantee Cards - عرض في صفين (2×2) */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          {guaranteeCards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-xl shadow-md p-4 text-center"
            >
              <div
                className="text-3xl font-bold text-transparent leading-tight"
                style={{
                  backgroundImage: "linear-gradient(180deg, #73a8ff, #3c6cec)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                }}
              >
                {card.years}
              </div>
              <div className="text-sm text-[#394355] mt-1">{card.description}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};