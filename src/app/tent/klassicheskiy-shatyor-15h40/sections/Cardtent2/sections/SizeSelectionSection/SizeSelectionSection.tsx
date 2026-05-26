'use client';

import React, { ReactElement, useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../../../../components/ui/tabs";

export const SizeSelectionSection = (): ReactElement => {
  // MARKETING CONTENT — UPDATED for Классический шатёр 15х40
  const descriptionBlocks: { title?: string; text: string }[] = [
    {
      title: "Классический шатёр 15х40",
      text: `Большой шатёр 15х40 м в классическом стиле прекрасно подойдёт для организации культурных мероприятий, проведения торжеств и праздников, а также для обустройства летнего кафе.`,
    },
    {
      title: "Преимущества и размеры",
      text: `Размеры конструкции:
• длина — 40 м,
• ширина — 15 м,
• общая площадь — 600 м².

Огнеупорный тент французского производства отлично переносит неблагоприятные погодные явления и длительное время не теряет своих характеристик. Каркас изготовлен из алюминиевого профиля и обладает хорошей прочностью.`,
    },
    {
      title: "Особенности монтажа",
      text: `Несмотря на сравнительно большую общую массу (3 300 кг), в разобранном виде конструкция компактна и перевозится обычным грузовым транспортом.
Перед монтажом каркаса необходимо предварительно выровнять место установки.`,
    },
    {
      title: "Материалы и качество",
      text: `Тентовое полотно и стены изготовлены из ПВХ французского производства DICKSON с системой LoWick. Класс пожарной безопасности М2, Г1.
Тентовое покрытие — сертифицированное ПВХ-полотно с добавками, препятствующими горению DIN 4102 B1, M20,3 кН/м², стойкое к гниению.
Все элементы каркаса изготовлены из анодированного алюминия (сплав 6063 DIN 573), сертификат QUALANOD.
Крепёжные элементы — оцинкованная сталь DIN 50976.`,
    },
    {
      title: "Услуги компании",
      text: `Наша компания занимается:
• проектированием;
• изготовлением;
• ремонтом;
• обслуживанием;
• продажей и арендой шатров.`,
    },
    {
      title: "Дополнительно",
      text: `Особенности монтажа: обязательное крепление конструкции к поверхности, на которую ставится, или утяжеление конструкции бетонными блоками.
Оформить заказ на покупку или аренду каркасно-тентовой продукции можно на нашем сайте прямо сейчас.`,
    },
  ];

  // TECH SPECS — UPDATED with data for 15x40m tent
  const specs: { label: string; value: string }[] = [
    { label: "Форма", value: "Прямоугольная" },
    { label: "Площадь", value: "600 м²" },
    { label: "Длина", value: "40 м" },
    { label: "Ширина", value: "15 м" },
    { label: "Высота стены (опоры)", value: "2,5/3/3,5/4 м" },
    { label: "Высота в коньке", value: "макс. 7,5 м" },
    { label: "Ветровая нагрузка", value: "30 м/сек" },
    { label: "Вес конструкции", value: "3300 кг" },
    { label: "Нагрузка подвеса на арку", value: "до 30 кг/п.м." },
    { label: "Основной рамный профиль", value: "166 x 89 x 3,00 сертификат QUALANOD" },
    { label: "Дополнительный профиль", value: "100 x 48 x 3,00 сертификат QUALANOD" },
    { label: "Профиль прогонов", value: "50 x 50 x 3,00 сертификат QUALANOD" },
    { label: "Установка", value: "Не требует специального фундамента, на любой земляной поверхности" },
    { label: "Монтаж/демонтаж", value: "Без спецтехники, быстрый монтаж/демонтаж без потери качества" },
    { label: "Расширяемость", value: "Возможность увеличения площади путём соединения нескольких конструкций" },
    { label: "Материал тента", value: "ПВХ DICKSON (Франция) с системой LoWick. Класс М2, Г1" },
    { label: "Сертификация тента", value: "ПВХ-полотно DIN 4102 B1, M20,3 кН/м², стойкость к гниению" },
    { label: "Материал каркаса", value: "Анодированный алюминий (сплав 6063 DIN 573), сертификат QUALANOD" },
    { label: "Крепежные элементы", value: "Оцинкованная сталь DIN 50976" },
    { label: "Особенности монтажа", value: "Обязательное крепление к поверхности или утяжеление бетонными блоками" },
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
                  <span className="text-[#394355] text-lg font-semibold">
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
