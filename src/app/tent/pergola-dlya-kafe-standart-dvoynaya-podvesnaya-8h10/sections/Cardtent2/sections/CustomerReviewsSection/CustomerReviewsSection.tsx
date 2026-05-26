'use client';

import React from "react";
import { Card, CardContent } from "../../../../../../../components/ui/card";
import { ReactElement } from 'react';
import Image from 'next/image';

type Props = {
  activeTabLabel: string; // e.g., "Описание и характеристики"
};

type Item = { id: number; icon?: string; title: string; description?: string };

export const CustomerReviewsSection = ({ activeTabLabel }: Props): ReactElement => {
  // Base icon (reuse your check icon)
  const ico = "/rightblue.png";

  // Content per tab
  const content: Record<string, Item[]> = {
    "Описание и характеристики": [
      { id: 1, icon: ico, title: "Быстрое возведение", description: "Легко собираются без спецоборудования; можно масштабировать соединением секций." },
      { id: 2, icon: ico, title: "Прочный материал", description: "Устойчивость к химии, УФ-излучению и морской воде." },
      { id: 3, icon: ico, title: "Круглогодичная эксплуатация", description: "Диапазон -55…+60 °C, ветер до 35 м/с, самосброс снега." },
      { id: 4, icon: ico, title: "Простой обогрев", description: "Хватает тепловых пушек небольшой мощности." },
      { id: 5, icon: ico, title: "Без фундамента", description: "Допустимы сваи или ровная площадка." },
      { id: 6, icon: ico, title: "Пожарная безопасность", description: "Сертификат №GDD35: горючесть П, РП2, В2." },
    ],
    "Комплектация": [
      { id: 1, icon: ico, title: "Каркас", description: "Оцинкованная сталь/алюминиевый профиль, крепёж." },
      { id: 2, icon: ico, title: "Тентовое покрытие", description: "ПВХ 650–900 г/м², швы проварены." },
      { id: 3, icon: ico, title: "Крепление к основанию", description: "Анкера / грунт-анкера / плиты." },
      { id: 4, icon: ico, title: "Проёмы", description: "Ворота/двери по проекту, ремкомплект." },
      { id: 5, icon: ico, title: "Документация", description: "Паспорт, руководство, гарантийный талон." },
    ],
    "Доп. опции": [
      { id: 1, icon: ico, title: "Утепление", description: "Сэндвич-вкладыши, дополнительный слой ПВХ." },
      { id: 2, icon: ico, title: "Окна и светопрозрачные вставки", description: "Дневное освещение, экономия на электричестве." },
      { id: 3, icon: ico, title: "Отопление и вентиляция", description: "Дизельные/газовые пушки, приточно-вытяжка." },
      { id: 4, icon: ico, title: "Электрика", description: "Щиты, освещение, розетки." },
      { id: 5, icon: ico, title: "Логотипы и брендирование", description: "Печать на тенте, баннеры." },
    ],
    "Тип стен": [
      { id: 1, icon: ico, title: "ПВХ тент", description: "Лёгкий, недорогой, быстро монтируется." },
      { id: 2, icon: ico, title: "Панели ПВХ/сэндвич", description: "Лучше теплоизоляция и жёсткость." },
      { id: 3, icon: ico, title: "Комбинированные решения", description: "Тент + панели в зонах нагрузки." },
      { id: 4, icon: ico, title: "Прозрачные вставки", description: "Витринные зоны/свет." },
    ],
    "Документы": [
      { id: 1, icon: ico, title: "Инструкция по сборке", description: "Пошаговые схемы и тех. требования." },
      { id: 2, icon: ico, title: "Сертификаты", description: "Материалы и пожарная безопасность." },
      { id: 3, icon: ico, title: "Паспорт изделия", description: "Основные характеристики и комплектация." },
      { id: 4, icon: ico, title: "Гарантийный талон", description: "Условия и сроки гарантии." },
    ],
    "Доставка": [
      { id: 1, icon: ico, title: "Сроки", description: "Отгрузка со склада или производство под заказ." },
      { id: 2, icon: ico, title: "Логистика", description: "Транспорт по РФ и ЕАЭС, страхование по запросу." },
      { id: 3, icon: ico, title: "Разгрузка", description: "Погрузочно-разгрузочные работы на площадке." },
    ],
    "Оплата": [
      { id: 1, icon: ico, title: "Безналичный расчёт", description: "По договору и счёту, НДС по запросу." },
      { id: 2, icon: ico, title: "Аванс / этапы", description: "Стандартно 50/50 или индивидуально." },
      { id: 3, icon: ico, title: "Лизинг", description: "Возможен через партнёрские программы." },
    ],
  };

  // If label is unknown, fall back to default features
  const items: Item[] = content[activeTabLabel] ?? content["Описание и характеристики"];

  // Split into columns for desktop (same visual as your original)
  const featureColumns: Item[][] = [
    items.slice(0, 2),
    items.slice(2, 4),
    items.slice(4, 6),
  ];

  return (
    <>
      {/* Desktop */}
      <div className="hidden md:block">
        <Card className="w-full p-8 rounded-[20px] border-0 shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] backdrop-blur-[79px]">
          <CardContent className="p-0">
            <div className="flex flex-wrap gap-10">
              {featureColumns.map((column, columnIndex) => (
                <div key={`column-${columnIndex}`} className="flex flex-col gap-[18px]">
                  {column.map((feature) => (
                    <div key={`feature-${feature.id}`} className="flex gap-[34px] w-96">
                      <div className="relative w-[60px] h-[60px] shadow-2 flex-shrink-0">
                        <div className="relative w-9 h-[38px] top-[11px] left-3">
                          <div className="relative h-[38px]">
                            <div className="absolute w-[23px] h-[23px] top-[7px] left-[7px] bg-white rounded-[11.63px]" />
                            {feature.icon && (
                              <Image
                                className="absolute w-9 h-[38px] top-0 left-0"
                                alt="Feature icon"
                                src={feature.icon}
                                width={36}
                                height={38}
                                style={{ objectFit: 'contain' }}
                              />
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2.5">
                        <div className="font-semibold text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]">
                          {feature.title}
                        </div>
                        {feature.description && (
                          <div className="font-normal text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]">
                            {feature.description}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Mobile */}
      <div className="block md:hidden">
        <Card className="w-full p-6 rounded-[20px] border-0 shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] backdrop-blur-[79px]">
          <CardContent className="p-0">
            <div className="flex flex-col gap-6">
              {items.map((feature) => (
                <div key={`feature-mobile-${feature.id}`} className="flex gap-4 w-full">
                  <div className="relative w-[50px] h-[50px] shadow-2 flex-shrink-0">
                    <div className="relative w-8 h-[32px] top-[9px] left-2.5">
                      <div className="relative h-[32px]">
                        <div className="absolute w-[20px] h-[20px] top-[6px] left-[6px] bg-white rounded-[10px]" />
                        {feature.icon && (
                          <Image
                            className="absolute w-8 h-[32px] top-0 left-0"
                            alt="Feature icon"
                            src={feature.icon}
                            width={32}
                            height={32}
                            style={{ objectFit: 'contain' }}
                          />
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 flex-1">
                    <div className="font-semibold text-[#394355] text-sm leading-5 [font-family:'Raleway',Helvetica]">
                      {feature.title}
                    </div>
                    {feature.description && (
                      <div className="font-normal text-[#394355] text-sm leading-5 [font-family:'Raleway',Helvetica]">
                        {feature.description}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
