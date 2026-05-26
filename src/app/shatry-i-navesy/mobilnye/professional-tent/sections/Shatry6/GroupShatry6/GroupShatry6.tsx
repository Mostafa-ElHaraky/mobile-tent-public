'use client';

import { Card, CardContent } from "../../../../../../../components/ui/card";
import { ReactElement } from 'react';
import Image from 'next/image';

export const GroupShatry6 = (): ReactElement => {
  // Define the feature data for mapping
  const features = [
    {
      id: 1,
      icon: "/grouppp-3.webp",
      title: "Разработаем проект шатра",
      description:
        "удобный для пользования всеми гостями и неприхотливого в обслуживании",
    },
    {
      id: 2,
      icon: "/grouppp-4.webp",
      title: "Уложимся в срок",
      description: "до мероприятия или сезона",
    },
    {
      id: 3,
      icon: "/grouppp-5.webp",
      title: "Поможем увеличить посадочные места",
      description:
        "или создать новые места для проведения мероприятий и приема гостей",
    },
    {
      id: 4,
      icon: "/grouppp-6.webp",
      title: "Выдадим сертификаты о пожарной безопасности,",
      description: "если нужно ввести в эксплуатацию",
    },
    {
      id: 5,
      icon: "/grouppp-7.webp",
      title: "Забрендируем шатер",
      description: "для повышения узнаваемости вашей компании",
    },
    {
      id: 6,
      icon: "/group-8.webp",
      title: "Разработаем сайт",
      description: "для постоянного прихода клиентов в ваш бизнес",
    },
  ];

  return (
    <>
      {/* ========== نسخة الديسكتوب (كما هي، تُعرض فقط على md فأكبر) ========== */}
      <Card className="w-full p-8 rounded-[20px] shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] border-0 md:block hidden">
        <CardContent className="p-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.id} className="flex items-start gap-[34px]">
                <div className="relative w-[60px] h-[60px]">
                  <div className="relative w-9 h-[38px] top-[11px] left-3">
                    <div className="relative h-[38px]">
                      <div className="absolute w-[23px] h-[23px] top-[7px] left-[7px] bg-white rounded-[11.63px]" />
                      <Image
                        className="absolute top-0 left-0"
                        alt="Feature icon"
                        src={feature.icon}
                        width={36}
                        height={38}
                      />
                    </div>
                  </div>
                </div>
                <div className="font-normal text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                  <span className="font-semibold">{feature.title} </span>
                  <span className="[font-family:'Raleway',Helvetica] font-normal text-[#394355] text-base tracking-[0] leading-6">
                    {feature.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* ========== نسخة الهاتف (مطابقة للمحتوى، متجاوبة، تُعرض فقط على الشاشات الصغيرة) ========== */}
      <Card className="w-full p-6 rounded-[20px] shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] border-0 sm:block md:hidden">
        <CardContent className="p-0">
          <div className="grid grid-cols-1 gap-6">
            {features.map((feature) => (
              <div key={feature.id} className="flex items-start gap-4">
                {/* الأيقونة */}
                <div className="relative w-[50px] h-[50px] flex-shrink-0">
                  <div className="relative w-8 h-[32px] top-[7px] left-2.5">
                    <div className="relative h-[32px]">
                      <div className="absolute w-[20px] h-[20px] top-[6px] left-[6px] bg-white rounded-[10px]" />
                      <Image
                        className="absolute top-0 left-0"
                        alt="Feature icon"
                        src={feature.icon}
                        width={32}
                        height={32}
                      />
                    </div>
                  </div>
                </div>

                {/* النص */}
                <div className="font-normal text-[#394355] text-sm leading-5 [font-family:'Raleway',Helvetica] tracking-[0]">
                  <span className="font-semibold block">{feature.title}</span>
                  <span className="block mt-1">{feature.description}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
};