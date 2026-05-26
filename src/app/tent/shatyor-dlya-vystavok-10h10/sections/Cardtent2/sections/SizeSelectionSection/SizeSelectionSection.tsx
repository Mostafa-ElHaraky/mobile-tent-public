'use client';

import React, { ReactElement, useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../../../../components/ui/tabs";

export const SizeSelectionSection = (): ReactElement => {
  // MARKETING / DESCRIPTION — UPDATED for Шатёр для выставок 10х10
  const descriptionBlocks: { title?: string; text: string }[] = [
    {
      title: "Шатёр для выставок 10х10 м",
      text: `Шатёр 10х10 м — мобильный тент квадратной формы. Он не требует много места, поэтому компактно разместится на выделенной территории. Может использоваться для увеличения площади выставки за счёт соединения нескольких конструкций. Полезная площадь шатра — 100 м². Высота опор — 2,5/3/3,5/4 м.

Компания предлагает надёжные мобильные конструкции разных размеров. Мы осуществляем полный спектр работ:
• проектирование и изготовление навесов и шатров;
• продажу мобильных тентовых конструкций и их сдачу в аренду;
• обслуживание и ремонт.`,
    },
    {
      title: "Конструкция и материалы",
      text: `• Не требует специального фундамента, устанавливается на любой земляной поверхности.
• Монтируется и демонтируется без применения специальной техники в минимальный срок, без потери качества, любое количество раз.
• Возможность увеличения площади путём соединения нескольких конструкций.
• Тентовое полотно и стены изготовлены из ПВХ французского производства DICKSON с системой LoWick. Класс пожарной безопасности М2, Г1.
• Тентовое покрытие — сертифицированное ПВХ-полотно с добавками, препятствующими горению (DIN 4102 B1), М2, 0,3 кН/м²; устойчиво к гниению.
• Все элементы каркаса изготовлены из анодированного алюминия (сплав 6063 DIN 573), сертификат QUALANOD.
• Крепёжные элементы — оцинкованная сталь DIN 50976.
• Особенности монтажа: обязательное крепление конструкции к поверхности, на которую ставится, или утяжеление бетонными блоками.`,
    },
    {
      title: "Преимущества и характеристики",
      text: `Шатёр для выставки 10х10 м надёжно защищает от ветра, прямых лучей солнца и природных осадков. Мобильная конструкция используется для организации на открытом воздухе выставочных мероприятий. Тент и стены изготовлены из прочного ПВХ материала DICKSON. Специальные добавки к материалу ПВХ тента препятствуют его гниению и горению. Параметры: DIN 4102 B1, М2, 0,3 кН/м². Каркас изготовлен из анодированного алюминия (сплав 6063 DIN 573).`,
    },
    {
      title: "Особенности монтажа",
      text: `Конструкция устанавливается на ровной поверхности без фундамента. Быстро и легко монтируется и демонтируется, процесс не требует использования специальной техники. Следует обеспечить надёжное крепление конструкции к поверхности или дополнительно утяжелить её бетонными блоками.`,
    },
    {
      title: "Покупка или аренда",
      text: `Компания предлагает купить или арендовать по невысокой цене качественный шатёр для выставок 10х10 и конструкции других размеров.`,
    },
  ];

  // TECH SPECS — UPDATED for 10х10
  const specs: { label: string; value: string }[] = [
    { label: "Форма", value: "Квадратная" },
    { label: "Площадь", value: "100 м²" },
    { label: "Длина", value: "10 м" },
    { label: "Ширина", value: "10 м" },
    { label: "Высота стены (опоры)", value: "2,5 / 3 / 3,5 / 4 м" },
    { label: "Высота в коньке", value: "макс. 7,5 м" },
    { label: "Ветровая нагрузка", value: "30 м/сек" },
    { label: "Вес конструкции", value: "550 кг" },
    { label: "Нагрузка подвеса на арку", value: "до 30 кг/п.м." },
    { label: "Основной рамный профиль", value: "166 × 89 × 3,00, сертификат QUALANOD" },
    { label: "Дополнительный профиль", value: "100 × 48 × 3,00, сертификат QUALANOD" },
    { label: "Профиль прогонов", value: "50 × 50 × 3,00, сертификат QUALANOD" },
  ];

  const [activeTab, setActiveTab] = useState("description");

  return (
    <>
      {/* Desktop Version */}
      <section className="hidden md:block w-full max-w-[1344px] mx-auto mt-12 mb-12">
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="border-b-0 bg-transparent p-0 h-auto mb-7 relative">
            <TabsTrigger
              value="description"
              className="px-0 py-0 mr-10 h-auto font-semibold text-2xl leading-6 [font-family:'Raleway',Helvetica] 
                data-[state=active]:text-[#394355] data-[state=inactive]:text-[#4f5d8094] 
                data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              Описание
            </TabsTrigger>
            <TabsTrigger
              value="characteristics"
              className="px-0 py-0 h-auto font-semibold text-2xl leading-6 [font-family:'Raleway',Helvetica] 
                data-[state=active]:text-[#394355] data-[state=inactive]:text-[#4f5d8094] 
                data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              Характеристики
            </TabsTrigger>

            {/* Moving underline */}
            <span
              className="pointer-events-none absolute bottom-[-6px] h-0.5 bg-[#394355] transition-all duration-300"
              style={{
                left: activeTab === "description" ? "0px" : "150px",
                width: activeTab === "description" ? "117px" : "185px",
              }}
            />
          </TabsList>

          <TabsContent value="description" className="mt-6">
            <div className="flex flex-col gap-10">
              {descriptionBlocks.map((block, idx) => (
                <div key={idx} className="flex flex-col gap-4">
                  {block.title && (
                    <h3 className="font-semibold text-2xl leading-6 text-[#394355] [font-family:'Raleway',Helvetica]">
                      {block.title}
                    </h3>
                  )}
                  <p className="font-normal text-lg leading-6 text-[#394355] [font-family:'Raleway',Helvetica] whitespace-pre-line">
                    {block.text}
                  </p>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="characteristics">
            {specs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
                {specs.map((item, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-[#4f5d80] text-lg font-normal">
                      {item.label}
                    </span>
                    <span className="text-[#394355] text-lg font-semibold whitespace-pre-line">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-[#4f5d80] text-lg">Характеристики будут добавлены позже.</p>
            )}
          </TabsContent>
        </Tabs>
      </section>

       {/* Mobile Version */}
      <section className="block md:hidden w-full mx-auto mt-8 mb-8 px-4">
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="w-full grid grid-cols-2 gap-2 mb-6 bg-gray-120 p-1 rounded-lg">
            <TabsTrigger
              value="description"
              className="data-[state=active]:bg-white data-[state=active]:shadow-sm py-2 font-semibold text-base text-[#394355] data-[state=active]:text-[#394355] data-[state=inactive]:text-[#4f5d8094] rounded-md"
            >
              Описание
            </TabsTrigger>
            <TabsTrigger
              value="characteristics"
              className="data-[state=active]:bg-white data-[state=active]:shadow-sm py-2 font-semibold text-base text-[#4f5d8094] data-[state=active]:text-[#394355] rounded-md"
            >
              Характеристики
            </TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-4">
            <div className="flex flex-col gap-6">
              {descriptionBlocks.map((block, idx) => (
                <div key={idx} className="flex flex-col gap-3">
                  {block.title && (
                    <h3 className="font-semibold text-lg leading-6 text-[#394355]">
                      {block.title}
                    </h3>
                  )}
                  <p className="font-normal text-base leading-6 text-[#394355] whitespace-pre-line">
                    {block.text}
                  </p>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="characteristics">
            <div className="grid grid-cols-1 gap-4">
              {specs.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col p-3 bg-gray-50 rounded-lg"
                >
                  <span className="text-[#4f5d80] text-base font-normal">
                    {item.label}
                  </span>
                  <span className="text-[#394355] text-base font-semibold">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
};
