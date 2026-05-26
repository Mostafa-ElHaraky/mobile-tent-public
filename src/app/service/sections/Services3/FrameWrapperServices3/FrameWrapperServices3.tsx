'use client';

import { Card, CardContent } from "../../../../../components/ui/card";
import { ReactElement } from 'react';
import Image from 'next/image';

interface FeatureCard {
  title: string;
  description: string;
  iconSrc?: string;
  iconBg?: string;
  position: string;
  width: string;
  height: string;
  isWhiteBg?: boolean;
}

export const FrameWrapperServices3 = (): ReactElement => {
  const featureCards: FeatureCard[] = [
    {
      title: "Планировка и удобство",
      description: "Учитываем потоки людей для удобного использования: расположение мебели, арки, окна, входы-выходы и прочее",
      iconSrc: "/group-11.png",
      position: "top-[120px] left-[1px]",
      width: "450px",
      height: "140px",
    },
    {
      title: "Климат и уют",
      description: "Продумаем расположение систем кондиционирования воздуха или отопления, чтобы обеспечить комфорт клиентам в различных погодных условиях",
      iconSrc: "/GroupServices3.png",
      position: "top-[100px] left-[900px]",
      width: "450px",
      height: "140px",
    },
    {
      title: "Брендирование",
      description: "Создаем уникальный шатер для выделения вашей компании с учетом бренд-стратегии. Логотипы, световые конструкции, флаги, занавески и другие элементы",
      iconBg: "bg-[url(/group-13.png)] bg-[100%_100%]",
      position: "top-[480px] left-[900px]",
      width: "450px",
      height: "140px",
    },
    {
      title: "Дизайн и эстетика",
      description: "Создаем такую визуальную атмосферу, чтобы каждый чувствовал себя уютно и спокойно. Используем правильное освещение, удобную мебель, разные тематические зоны и другие элементы декорирования",
      iconBg: "bg-[url(/Group1Services3.png)] bg-[100%_100%]",
      position: "top-[480px] left-[1px]",
      width: "450px",
      height: "140px",
    }
  ];

  return (
    <section className="relative w-full py-[10px] px-[10px]">
      <div className="w-full max-w-[841px] font-semibold text-4xl leading-normal font-['Raleway',Helvetica] tracking-[0] mb-12">
        <span className="text-[#527dc5]">Решаем все проблемы</span>
        <span className="text-[#232c42]">
          {" "}
          с которыми
          <br />
          сталкиваются клиенты при оснащении шатров
        </span>
      </div>
      <div className="relative h-[800px] w-full mx-auto">
<div className="absolute w-[800px] h-[600px] top-[100px] left-[200px]">
  <Image
    src="/tent-with-curtains-i08-1.png"
    alt="Tent with curtains"
    width={800}
    height={600}
    className="object-cover" // Maintains original sizing behavior
    priority // Optional: if it's above-the-fold
  />
</div>

        {featureCards.map((card, index) => (
          <Card
            key={index}
            className={`absolute ${card.position} ${card.isWhiteBg ? "bg-white" : "bg-[#ffffff99]"} border-0 rounded-[20px] overflow-hidden shadow-[0px_24px_38px_rgba(22,29,36,0.08)] backdrop-blur-[79px]`}
            style={{ width: card.width, height: card.height }}
          >
            <CardContent className="p-4 relative h-full">
              <div className="inline-flex items-center gap-4 h-full">
                <div className="relative w-[80px] h-[80px] rounded-full bg-[#3C6CEC] flex-shrink-0">
                  {card.iconSrc ? (
                    <div className="absolute w-[40px] h-[40px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
<div className="relative w-full h-full">
  <Image
    src={card.iconSrc}
    alt={card.title}
    fill // Fills the parent container
    className="object-cover" // Maintains aspect ratio while filling container
    sizes="(max-width: 768px) 100vw, 50vw" // Responsive sizing
  />
</div>                    </div>
                  ) : (
<div 
  className={`absolute w-11 h-11 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
  ${card.iconBg} rounded-lg flex items-center justify-center 
  shadow-sm hover:shadow-md transition-all duration-200`} 
/>      
            )}
                </div>

                <div className="flex flex-col justify-center gap-1">
                  <h3 className="font-semibold text-[#394355] text-lg leading-6 [font-family:'Raleway']">
                    {card.title}
                  </h3>
                  <p 
                    className="font-normal text-[#394355] text-sm leading-5 [font-family:'Raleway']"
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};