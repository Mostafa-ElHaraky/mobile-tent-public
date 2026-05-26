'use client';

import React, { ReactElement, useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../../../../components/ui/tabs";

export const SizeSelectionSection = (): ReactElement => {
  // MARKETING / DESCRIPTION — UPDATED for Тентовый ангар 15×15
  const descriptionBlocks: { title?: string; text: string }[] = [
    {
      title: "Тентовый ангар 15×15 — надёжное и экономичное решение",
      text: `Быстровозводимые навесные конструкции составили достойную конкуренцию кирпичным сооружениям. Тентовый ангар 15×15 м значительно дешевле капитального здания — покупка или прокат помогут сэкономить на аренде стационарного помещения. 
      
Производитель предлагает навесные конструкции разного назначения. Качественные материалы и тщательное проектирование с учётом ветровых и снеговых нагрузок гарантируют безупречную эксплуатацию ангара до 20 лет.`,
    },
    {
      title: "Преимущества и характеристики",
      text: `• Устанавливается без фундамента; с завода поставляется в полной комплектации, готовой к монтажу.
• Пространство внутри защищено от дождя, ветра и солнечных лучей.
• Гарантирована надёжная эксплуатация: расчёты на прочность, нагрузка подвеса на арку — до 30 кг/п.м., ветровая нагрузка — до 30 м/сек.
• Форма крыши и конструкция спроектированы так, чтобы атмосферные осадки не отягощали ПВХ-покрытие.
• Технические параметры: площадь — 225 м², скатная крыша с максимальной высотой в коньке — 7,5 м, вес сооружения — 1238 кг.
• Состав: ПВХ-тентовое покрытие, алюминиевый каркас, крепёжные элементы.
• Доп. опции: входные группы, освещение, обогрев, полы, настилы.`,
    },
    {
      title: "Сфера применения",
      text: `• Торговля — павильоны, крытые рынки.
• Производство — цех, мастерская.
• Спорт — крытая площадка с возможностью круглогодичной эксплуатации.
• Автостоянка.
• Склад.`,
    },
    {
      title: "Особенности монтажа",
      text: `• Установка проводится без фундамента — нужны только крепления и утяжелители.
• Спецтехника не требуется.
• Перевозка выполняется в сложенном состоянии; возможны многократные циклы монтажа/разборки.
• Специалисты компании помогут с выбором, проконсультируют по характеристикам и оптимальному применению.`,
    },
  ];

  // TECH SPECS — UPDATED for Тентовый ангар 15×15
  const specs: { label: string; value: string }[] = [
    { label: "Модель", value: "Тентовый ангар 15×15" },
    { label: "Форма", value: "Квадратная" },
    { label: "Площадь", value: "225 м²" },
    { label: "Длина", value: "15 м" },
    { label: "Ширина", value: "15 м" },
    { label: "Высота стены (опоры)", value: "2,5 / 3 / 3,5 / 4 м" },
    { label: "Высота в коньке", value: "макс. 7,5 м" },
    { label: "Ветровая нагрузка", value: "30 м/сек" },
    { label: "Вес конструкции", value: "1238 кг" },
    { label: "Нагрузка подвеса на арку", value: "до 30 кг/п.м." },
    { label: "Основной рамный профиль", value: "166 × 89 × 3,00 мм, сертификат QUALANOD" },
    { label: "Дополнительный профиль", value: "100 × 48 × 3,00 мм, сертификат QUALANOD" },
    { label: "Профиль прогонов", value: "50 × 50 × 3,00 мм, сертификат QUALANOD" },
    { label: "Требования к основанию", value: "Не требует специального фундамента; устанавливается на любой земляной поверхности." },
    { label: "Монтаж/демонтаж", value: "Без применения спецтехники; в минимальные сроки; без потери качества; любое количество раз." },
    { label: "Возможность расширения", value: "Увеличение площади путём соединения нескольких конструкций." },
    { label: "Материал тента и стен", value: "ПВХ DICKSON (Франция) с системой LoWick, класс пожарной безопасности М2, Г1." },
    { label: "Тентовое покрытие", value: "Сертифицированное ПВХ-полотно с добавками, препятствующими горению (DIN 4102 B1), ≈ 20,3 кН/м²; устойчивость к гниению." },
    { label: "Каркас и сплав", value: "Анодированный алюминий, сплав 6063 DIN 573, QUALANOD." },
    { label: "Крепёж", value: "Оцинкованная сталь DIN 50976." },
    { label: "Особенности монтажа", value: "Обязательное крепление к поверхности или утяжеление бетонными блоками." },
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
