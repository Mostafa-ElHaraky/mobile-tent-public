'use client';

import React, { ReactElement, useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../../../../components/ui/tabs";

export const SizeSelectionSection = (): ReactElement => {
  // MARKETING / DESCRIPTION — UPDATED for Тентовый ангар 20×40
  const descriptionBlocks: { title?: string; text: string }[] = [
    {
      title: "Тентовые ангары 20×40 от Мобайл-Тент — пространство, которое работает на ваш бизнес",
      text: `Представьте, как изменится логистика вашего бизнеса, когда вы получите просторный, надёжный и мобильный склад всего за несколько дней. Мобайл-Тент предлагает оптимальное решение для хранения, производства и сезонных задач — тентовый ангар 20×40, проверенный временем и практикой.`,
    },
    {
      title: "Почему выбирают тентовые ангары?",
      text: `Быстровозводимые конструкции стали выбором №1 в логистике, АПК и строительстве. Особенно востребованы ангары из тента и складские шатры — это мобильность, надёжность и экономическая эффективность.`,
    },
    {
      title: "Мобайл-Тент — факты о компании",
      text: `• 12 лет на рынке.\n• Более 1400 установленных объектов по России и СНГ.\n• Сертификаты соответствия и заводская гарантия.\n• Собственное производство и монтаж «под ключ».\nМы не просто продаём конструкцию — мы решаем вашу задачу: хранение урожая, сезонное производство, укрытие техники, создание логистического центра и др.`,
    },
    {
      title: "Конструкция, проверенная временем",
      text: `Большой ангар 20×40 м — это 800 м² полезной площади с возможностью адаптации под задачи заказчика. Эксплуатация в широком диапазоне температур: от −45°С до +60°С.`,
    },
    {
      title: "Преимущества",
      text: `• Гарантированный срок службы от 10 лет.\n• Высота до 6 м — комфортная работа складской техники.\n• Устойчивость к ветровым и снеговым нагрузкам.\n• Варианты утепления, вентиляции и освещения.\n• Возможность демонтажа и переноса без потерь.\nКаждый проект учитывает географию и нагрузки — от Камчатки до Калининграда.`,
    },
    {
      title: "Для кого это решение?",
      text: `B2B-сегмент: агрофирмы, логистические центры, строительные и производственные компании, арендаторы временных площадей.`,
    },
    {
      title: "Где применяют",
      text: `• Хранение техники, материалов, урожая.\n• Сезонные логистические и торговые площадки.\n• Мобильные цеха и мастерские.\n• Укрытия для спецтехники и транспорта.`,
    },
    {
      title: "Почему именно Мобайл-Тент?",
      text: `• Комплексный подход — от проектирования до пусконаладки.\n• Юридическая чистота — прозрачный договор, сертифицированные материалы.\n• Скорость — установка за 3–7 дней.\n• Поддержка — гарантийное и постгарантийное обслуживание.\n78% клиентов возвращаются к нам с новыми задачами — это показатель доверия.`,
    },
    {
      title: "Часто задаваемые вопросы",
      text: `• Можно ли использовать круглый год? — Да. При правильной комплектации ангар выдерживает зимние и летние нагрузки и может работать в условиях Крайнего Севера.\n• Сколько времени занимает установка? — От 3 до 7 дней, в зависимости от проекта и логистики. Работают сертифицированные бригады.`,
    },
    {
      title: "Закажите решение уже сегодня",
      text: `Не откладывайте расширение — Мобайл-Тент готов разработать и реализовать проект под ключ в кратчайшие сроки. Получите бесплатную консультацию, расчёт и технический чертёж — оставьте заявку на сайте или свяжитесь с нами по телефону.\nМобайл-Тент — ваш надёжный партнёр в мире мобильных конструкций. Предварительный расчёт — в течение 1 рабочего дня.`,
    },
  ];

  // TECH SPECS — UPDATED for Тентовый ангар 20×40
  const specs: { label: string; value: string }[] = [
    { label: "Модель", value: "Тентовый ангар 20×40" },
    { label: "Форма", value: "Прямоугольная" },
    { label: "Площадь", value: "800 м²" },
    { label: "Длина", value: "40 м" },
    { label: "Ширина", value: "20 м" },
    { label: "Высота стены (опоры)", value: "3 / 3,5 / 4 / 4,5 / 5 м" },
    { label: "Высота в коньке", value: "макс. 8,5 м" },
    { label: "Ветровая нагрузка", value: "30 м/сек" },
    { label: "Вес конструкции", value: "12000 кг" },
    { label: "Нагрузка подвеса на арку", value: "до 30 кг/п.м." },
    { label: "Основной рамный профиль", value: "240 × 100 × 5,00 мм, сертификат QUALANOD" },
    { label: "Дополнительный профиль", value: "166 × 89 × 4,00 мм, сертификат QUALANOD" },
    { label: "Профиль прогонов", value: "60 × 60 × 4,00 мм, сертификат QUALANOD" },
    {
      label: "Требования к основанию",
      value: "Не требует специального фундамента; установка на любой ровной земляной поверхности."
    },
    {
      label: "Монтаж/демонтаж",
      value: "Монтируется/демонтируется без спецтехники в минимальные сроки, без потери качества, любое количество раз."
    },
    {
      label: "Возможность расширения",
      value: "Увеличение площади путём соединения нескольких конструкций."
    },
    {
      label: "Материал тента и стен",
      value: "ПВХ DICKSON (Франция) с системой LoWick. Класс пожарной безопасности М2, Г1."
    },
    {
      label: "Тентовое покрытие",
      value: "Сертифицированное ПВХ-полотно с добавками, препятствующими горению (DIN 4102 B1), М2; ≈ 20,3 кН/м²; устойчивость к гниению."
    },
    {
      label: "Каркас и сплав",
      value: "Анодированный алюминий (сплав 6063 DIN 573), сертификат QUALANOD."
    },
    { label: "Крепёж", value: "Оцинкованная сталь DIN 50976." },
    {
      label: "Особенности монтажа",
      value: "Обязательное крепление к поверхности или утяжеление бетонными блоками."
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
