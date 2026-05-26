'use client';

import React, { ReactElement, useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../../../../components/ui/tabs";

export const SizeSelectionSection = (): ReactElement => {
  // MARKETING CONTENT — UPDATED for Мобильный шатёр Slim Prof 3х4.5
  const descriptionBlocks: { title?: string; text: string }[] = [
    {
      title: "Мобильный шатёр Slim Prof 3х4.5",
      text: "Технические характеристики и параметры модели ниже.",
    },
    {
      text:
        "Небольшой шатёр размером 3х4,5 м можно без ограничений установить в любом месте — возле реки, в парковой зоне или за городом в лесу. Устойчивая конструкция быстро монтируется и надёжно крепится на грунте. Шатёр легкий и стоит недорого, поэтому станет идеальным вариантом площадки для праздника с небольшим количеством приглашённых или уличной торговли.",
    },
    {
      text:
        "Невысокие цены на каркасно-тентовые конструкции обусловлены тем, что компания MOBILE TENT является производителем. В отличие от розничной торговли мы не делаем больших наценок и можем предложить хороший выбор и консультационную поддержку нашим покупателям.",
    },
    {
      text:
        "Купить шатёр 3х4,5 м выгодно, ведь его можно устанавливать и демонтировать большое количество раз. Для установочных работ лучше приглашать квалифицированных специалистов.",
    },
  ];

  // TECH SPECS — UPDATED for Slim Prof 3х4.5
  const specs: { label: string; value: string }[] = [
    { label: "Серия/Модель", value: "Slim Prof 3х4.5" },
    { label: "Площадь", value: "13,5 м²" },
    { label: "Размер", value: "3х4,5 м" },
    { label: "Высота стенки", value: "2.15 м" },
    { label: "Высота в коньке", value: "330 см" },
    { label: "Профиль", value: "анодированный алюминий" },
    { label: "Размер профиля", value: "30х30*1,2 мм" },
    { label: "Размер упаковки", value: "163x38x27 см" },
    { label: "Вес", value: "35 кг" },
    {
      label: "Свойства покрытия",
      value:
        "• Двойные швы.\n" +
        "• Стойкость к воздействию микроорганизмов (например, гниению).\n" +
        "• Огнестоек.\n" +
        "• Не продувается, водонепроницаем, износостоек.\n" +
        "• Простота обслуживания.\n" +
        "• Прекрасно подходит для качественной печати.\n" +
        "• Всегда в наличии палатки стандартных цветов.\n" +
        "• Крыша может быть изготовлена из полиэстера или поливинилхлорида, по желанию заказчика.",
    },
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
