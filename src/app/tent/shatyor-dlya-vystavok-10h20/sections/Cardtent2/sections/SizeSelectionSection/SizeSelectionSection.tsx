'use client';

import React, { ReactElement, useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../../../../components/ui/tabs";

export const SizeSelectionSection = (): ReactElement => {
  // MARKETING / DESCRIPTION — UPDATED for Шатёр для выставок 10×20
  const descriptionBlocks: { title?: string; text: string }[] = [
    {
      title: "Шатёр для выставок 10х20 м",
      text: `Приобретая в собственность или арендуя шатёр для выставок 10х20 м, вы существенно экономите бюджет мероприятия и получаете полную свободу в реализации идей по декору.

Проведение выставок и презентаций — это эффективные маркетинговые инструменты для продвижения продукции или бренда. Львиную долю бюджета в организации таких мероприятий занимает аренда помещений. Избежать ненужных расходов возможно, если приобрести или арендовать шатёр напрямую у производителя.`,
    },
    {
      title: "Конструкция и материалы",
      text: `• Не требует специального фундамента, устанавливаются на любой земляной поверхности.
• Монтируется и демонтируется без применения специальной техники в минимальный срок, без потери качества, любое количество раз.
• Возможность увеличения площади путём соединения нескольких конструкций.
• Тентовое полотно и стены изготовлены из ПВХ материала французского производства DICKSON с системой LoWick. Класс пожарной безопасности М2, Г1.
• Тентовое покрытие — сертифицированное ПВХ-полотно с добавками, препятствующими горению DIN 4102 B1, M2, 0,3 кН/м²; устойчиво к гниению.
• Все элементы каркаса конструкции изготовлены из анодированного алюминия (сплав 6063 DIN 573), сертификат QUALANOD.
• Крепёжные элементы — оцинкованная сталь DIN 50976.
• Особенности монтажа: обязательное крепление конструкции к поверхности, на которую ставится, или утяжеление конструкции бетонными блоками.`,
    },
    {
      title: "Преимущества и характеристики",
      text: `Закрытый тип конструкции позволяет использовать её круглый год.
Надёжная защита от ветра и дождя; при необходимости возможно дополнительно установить систему кондиционирования или отопления.
Каркас из анодированного алюминия шатра для выставок 10х20 м защищён от коррозии, плотное ПВХ — влагостойкое и не подвержено гниению. У конструкции длительный срок службы.`,
    },
    {
      title: "Особенности монтажа",
      text: `Возможна установка на любой ровной земляной или асфальтовой поверхности, заливать фундамент не требуется.
Предназначен для многократного монтажа/демонтажа — повторная установка и разборка не сказываются на внешнем виде конструкции.
При установке обязательно закрепить шатёр для выставок 10х20 м на поверхности; рекомендуется дополнительно утяжелить каркас бетонными блоками.

Компания предлагает достойный выбор навесных конструкций разного назначения. Наши специалисты помогут подобрать оптимальный вариант, купить или арендовать шатёр по доступной стоимости с доставкой.`,
    },
  ];

  // TECH SPECS — UPDATED for 10×20
  const specs: { label: string; value: string }[] = [
    { label: "Форма", value: "Прямоугольная" },
    { label: "Площадь", value: "100 м²" }, // значение согласно переданным данным
    { label: "Длина", value: "20 м" },
    { label: "Ширина", value: "10 м" },
    { label: "Высота стены (опоры)", value: "2,5 / 3 / 3,5 / 4 м" },
    { label: "Высота в коньке", value: "макс. 7,5 м" },
    { label: "Ветровая нагрузка", value: "30 м/сек" },
    { label: "Вес конструкции", value: "1100 кг" },
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
