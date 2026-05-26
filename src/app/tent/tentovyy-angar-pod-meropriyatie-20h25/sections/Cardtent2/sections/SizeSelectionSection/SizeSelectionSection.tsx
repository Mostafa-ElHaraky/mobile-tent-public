'use client';

import React, { ReactElement, useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../../../../components/ui/tabs";

export const SizeSelectionSection = (): ReactElement => {
  // MARKETING / DESCRIPTION — UPDATED for Тентовый ангар под мероприятие 20×25
  const descriptionBlocks: { title?: string; text: string }[] = [
    {
      title: "Тентовый ангар под мероприятие 20×25 — 500 м² функционального пространства",
      text: `Для современного бизнеса важен быстрый старт. Получить полноценное помещение для склада, производства или мероприятий по невысокой цене — реально!`,
    },
    {
      title: "Преимущества и характеристики",
      text: `Площадь — 500 м², длина — 25 м, максимальная высота — 8,5 м (в коньке).
Ангар сконструирован так, чтобы атмосферные осадки не накапливались на крыше — зимой нет необходимости чистить снег.
Каркас устойчив к ветровой нагрузке (до 30 м/сек), тентовое покрытие не пропускает влагу.`,
    },
    {
      title: "Сфера применения",
      text: `Тентовый ангар 20×25 м можно использовать как склад, спортивный комплекс, автостоянку, производственное помещение.
Каркас — анодированный алюминий и оцинкованная сталь; полотно ПВХ — не промокает и не горит.
Монтаж выполняется в кратчайшие сроки. При необходимости конструкцию можно демонтировать, перевезти и установить на новом месте.`,
    },
    {
      title: "Особенности монтажа",
      text: `Устанавливается без заливки фундамента — на любой ровной площадке.
Спецтехника не требуется.
Транспортируется в разобранном виде на грузовом автомобиле.`,
    },
  ];

  // TECH SPECS — UPDATED for Тентовый ангар 20×25
  const specs: { label: string; value: string }[] = [
    { label: "Модель", value: "Тентовый ангар под мероприятие 20×25" },
    { label: "Форма", value: "Прямоугольная" },
    { label: "Площадь", value: "500 м²" },
    { label: "Длина", value: "25 м" },
    { label: "Ширина", value: "20 м" },
    { label: "Высота стены (опоры)", value: "3 / 3,5 / 4 / 4,5 / 5 м" },
    { label: "Высота в коньке", value: "макс. 8,5 м" },
    { label: "Ветровая нагрузка", value: "30 м/сек" },
    { label: "Вес конструкции", value: "7 500 кг" },
    { label: "Нагрузка подвеса на арку", value: "до 30 кг/п.м." },
    { label: "Основной рамный профиль", value: "240 × 100 × 5,00 мм, сертификат QUALANOD" },
    { label: "Дополнительный профиль", value: "166 × 89 × 4,00 мм, сертификат QUALANOD" },
    { label: "Профиль прогонов", value: "60 × 60 × 4,00 мм, сертификат QUALANOD" },
    {
      label: "Требования к основанию",
      value: "Не требует специального фундамента; установка на любой земляной поверхности.",
    },
    {
      label: "Монтаж/демонтаж",
      value: "Монтируется/демонтируется без спецтехники в минимальные сроки, без потери качества, любое количество раз.",
    },
    {
      label: "Возможность расширения",
      value: "Увеличение площади путём соединения нескольких конструкций.",
    },
    {
      label: "Материал тента и стен",
      value: "ПВХ DICKSON (Франция) с системой LoWick. Класс пожарной безопасности М2, Г1.",
    },
    {
      label: "Тентовое покрытие",
      value: "Сертифицированное ПВХ-полотно с добавками, препятствующими горению (DIN 4102 B1), М2; ≈ 20,3 кН/м²; устойчивость к гниению.",
    },
    {
      label: "Каркас и сплав",
      value: "Анодированный алюминий (сплав 6063 DIN 573), сертификат QUALANOD.",
    },
    { label: "Крепёж", value: "Оцинкованная сталь DIN 50976." },
    {
      label: "Особенности монтажа",
      value: "Обязательное крепление к поверхности установки или утяжеление бетонными блоками.",
    },
  ];

  const [activeTab, setActiveTab] = useState("description");

  return (
    <>
      {/* Desktop Version */}
      <section className="hidden md:block w-full max-w-[1344px] mx-auto mt-12 mb-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
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
              <p className="text-[#4f5d80] text-lg">
                Характеристики будут добавлены позже.
              </p>
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
