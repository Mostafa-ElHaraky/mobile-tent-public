'use client';

import React, { ReactElement, useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../../../../components/ui/tabs";

export const SizeSelectionSection = (): ReactElement => {
  // MARKETING / DESCRIPTION — UPDATED for Зонт для кафе Desert 2×2
  const descriptionBlocks: { title?: string; text: string }[] = [
    {
      title: "Зонт для кафе Desert 2×2",
      text: `Компактный уличный зонт 2×2 м для летних веранд, террас и мероприятий. Создаёт комфортную тень на 4 м² и выдержан в сдержанном универсальном дизайне серии Desert — лаконично смотрится рядом с любой мебелью и брендингом.`,
    },
    {
      title: "Конструкция и материалы",
      text: `• Каркас — анодированный алюминий, стойка центральная.\n• Соединительные и крепёжные элементы — оцинкованная сталь.\n• Спицы — алюминиевые, усиленный профиль.\n• Тентовое полотно — акриловая ткань с водоотталкивающей пропиткой и UV-защитой UPF 50+.\n• Износостойкие швы, усиления в узлах крепления спиц.`,
    },
    {
      title: "Механика и удобство",
      text: `Лёгкий и быстрый подъём купола благодаря надёжному механизму фиксации. Возможна регулировка высоты/наклона (опционально — в зависимости от комплектации). Съёмный чехол облегчает уход и замену полотна.`,
    },
    {
      title: "Области применения",
      text: `Идеален для кафе и ресторанов, частных террас, зон ожидания у входных групп, промо-стойк и выездных мероприятий. Формирует аккуратное теневое пятно, не загромождая пространство.`,
    },
    {
      title: "Производство и сервис",
      text: `Изготавливаем зонты серии Desert в типовых размерах и под заказ. Доступны опции брендинга (нанесение логотипа), подбор цвета полотна по палитре, поставка баз разных типов и масс.`,
    },
    {
      title: "Монтаж и уход",
      text: `Устанавливается на штатное основание — плитную или крестовую базу с утяжелителями. Для безопасности рекомендуем складывать зонт при сильном ветре и хранить в чехле вне сезона.`,
    },
  ];

  // TECH SPECS — UPDATED for 2×2 umbrella
  const specs: { label: string; value: string }[] = [
    { label: "Форма", value: "Квадрат" },
    { label: "Площадь тени", value: "≈ 4 м²" },
    { label: "Длина стороны купола", value: "2 м" },
    { label: "Габариты купола (Д×Ш)", value: "2 × 2 м" },
    { label: "Высота (макс.)", value: "до 2,6 м" },
    { label: "Стойка", value: "Центральная, анодированный алюминий" },
    { label: "Диаметр стойки", value: "⌀ 48–50 мм" },
    { label: "Спицы", value: "Алюминий, усиленный профиль (4–6 шт.)" },
    { label: "Материал полотна", value: "Акрил, водоотталкивающая пропитка, UPF 50+" },
    { label: "Плотность ткани", value: "≈ 300–320 г/м²" },
    { label: "Вес конструкции", value: "≈ 14–18 кг (без основания)" },
    { label: "Основание", value: "Крестовое/плитное, утяжелители 25–40 кг" },
    { label: "Ветровая устойчивость", value: "до 10–12 м/с при правильном креплении" },
    { label: "Опции", value: "Брендинг, чехол, наклон купола" },
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
