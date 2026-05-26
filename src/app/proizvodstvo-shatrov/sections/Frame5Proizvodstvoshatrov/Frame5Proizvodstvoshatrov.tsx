'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../../../components/ui/accordion';
import { Button } from '../../../../components/ui/button';
import { Card, CardContent } from '../../../../components/ui/card';
import { ReactElement } from 'react';

type FaqItem = {
  question: string;
  answer: React.ReactNode;
};

export const Frame5Proizvodstvoshatrov = (): ReactElement => {
  // FAQ content (concise, “product-like” answers)
  const faqItems: FaqItem[] = [
    {
      question:
        'Каковы материалы, используемые для производства тентовых шатров, и их характеристики?',
      answer: (
        <div className="space-y-3 text-[#394355]">
          <div>
            <div className="font-semibold">Тентовое полотно (ПВХ):</div>
            <ul className="list-disc pl-5 space-y-1">
              <li>Плотность: <span className="font-medium">650–900 г/м²</span>, двухстороннее лаковое покрытие (PVDF).</li>
              <li>Огнестойкость: <span className="font-medium">М2/Г1</span> (самозатухающее), швы ТВЧ/горячий воздух.</li>
              <li>Температура эксплуатации: <span className="font-medium">от −30 °С до +70 °С</span>, УФ-стойкость.</li>
              <li>Цвета/брендирование: полноцветная печать, окна ПВХ, прозрачные вставки.</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Каркас:</div>
            <ul className="list-disc pl-5 space-y-1">
              <li>Сталь <span className="font-medium">S235/S355</span>, горячее цинкование по ISO 1461 (или порошковая окраска).</li>
              <li>Алюминий (по проекту): <span className="font-medium">6061-T6/6082-T6</span> профили для облегчённых систем.</li>
              <li>Крепёж: нержавеющая сталь A2/A4, анкерные системы для разных оснований.</li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-2 pt-1">
            <span className="rounded-full bg-[#e8eef8] px-3 py-1 text-xs">PVDF</span>
            <span className="rounded-full bg-[#e8eef8] px-3 py-1 text-xs">FR M2/Г1</span>
            <span className="rounded-full bg-[#e8eef8] px-3 py-1 text-xs">650–900 г/м²</span>
            <span className="rounded-full bg-[#e8eef8] px-3 py-1 text-xs">−30…+70 °С</span>
          </div>
        </div>
      ),
    },
    {
      question:
        'Как долго занимает процесс производства тентового шатра от начала до конца?',
      answer: (
        <div className="space-y-2 text-[#394355]">
          <ul className="list-disc pl-5 space-y-1">
            <li><span className="font-semibold">Проектирование и согласование:</span> 2–5 рабочих дней.</li>
            <li><span className="font-semibold">Изготовление каркаса и тента:</span> 7–15 рабочих дней (зависит от объёма и комплектации).</li>
            <li><span className="font-semibold">ОТК, упаковка и логистика:</span> 2–4 рабочих дня.</li>
            <li><span className="font-semibold">Монтаж на площадке:</span> от 1 до 5 дней в зависимости от размеров и условий.</li>
          </ul>
          <p className="text-sm">Итоговый срок уточняется по ТЗ, загруженности и региону поставки.</p>
        </div>
      ),
    },
    {
      question:
        'Существует ли возможность заказа тентовых шатров с индивидуальными размерами и конфигурациями?',
      answer: (
        <div className="space-y-2 text-[#394355]">
          <p>Да. Мы работаем как с типовыми сериями, так и с персональными решениями:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Пролёты: <span className="font-medium">5–50 м</span> (шаг 5 м и индивидуальные варианты).</li>
            <li>Длина: модульная, <span className="font-medium">шаг 5 м</span>.</li>
            <li>Высота: боковая/коньковая по заданию; варианты с мансардой/мезонином.</li>
            <li>Конфигурации: ворота, окна, двойная мембрана, утепление, брендирование.</li>
          </ul>
        </div>
      ),
    },
    {
      question:
        'Какие технические характеристики обеспечивают ветроустойчивость тентовых шатров?',
      answer: (
        <div className="space-y-2 text-[#394355]">
          <ul className="list-disc pl-5 space-y-1">
            <li>Расчёт по ветровым районам (СП/Еврокод), распорки, диагональные связи, узлы жёсткости.</li>
            <li>Анкерование: химические/механические анкеры, балласт (ЖБ/металл) для безфундаментного монтажа.</li>
            <li>Расчётные скорости ветра: до <span className="font-medium">38–42 м/с</span> для стандартных серий (зависит от модели и региона).</li>
            <li>Тент: усиленные зоны, кромочные ленты, шаг крепежа по проекту.</li>
          </ul>
          <p className="text-sm">Конкретные значения подтверждаем расчётной запиской и паспортом изделия.</p>
        </div>
      ),
    },
    {
      question:
        'Какова гарантия на тентовые шатры, и как обеспечивается сервисная поддержка?',
      answer: (
        <div className="space-y-2 text-[#394355]">
          <ul className="list-disc pl-5 space-y-1">
            <li>Каркас: гарантия <span className="font-medium">до 5 лет</span> (антикор-защита согласно паспорту).</li>
            <li>Тентовое покрытие: <span className="font-medium">12–36 месяцев</span> — зависит от серии и интенсивности эксплуатации.</li>
            <li>Сервис: запасные панели, ремонт ПВХ, регламентное ТО, аварийные выезды.</li>
            <li>Поддержка: выделенная линия, SLA-реакция от <span className="font-medium">24–48 ч</span>.</li>
          </ul>
        </div>
      ),
    },
    {
      question:
        'Какие дополнительные опции и аксессуары могут быть добавлены к тентовым шатрам?',
      answer: (
        <div className="space-y-3 text-[#394355]">
          <ul className="list-disc pl-5 space-y-1">
            <li>Ворота/двери (распашные, рулонные), окна ПВХ/панорамные вставки.</li>
            <li>Утепление (минвата/сэндвич-вставки), антиконденсат, двойная мембрана.</li>
            <li>Инженерия: отопление/вентиляция/кондиционирование, освещение, электрика.</li>
            <li>Полы: настил, подиумы, анкерные корзины, водоотвод/жёлоба.</li>
            <li>Брендирование: печать логотипов, фирменные цвета, внутренний декор.</li>
          </ul>
          <div className="flex gap-8">
            <a href="/shatry">
              <Button size="sm">Каталог опций</Button>
            </a>
          </div>
        </div>
      ),
    },
  ];

  // Split into two columns
  const leftColumnItems = faqItems.slice(0, 3);
  const rightColumnItems = faqItems.slice(3);

  return (
    <section className="flex flex-col items-start gap-11 w-full py-8 relative top-[50px] left-[15px] ">
      <h2 className="font-semibold text-4xl [font-family:'Raleway',Helvetica]">
        <span className="text-[#527dc5]">Часто </span>
        <span className="text-[#232c42]">спрашивают</span>
      </h2>

      <div className="flex flex-col md:flex-row items-start gap-6 w-full">
        {/* Left column */}
        <div className="flex flex-col items-start gap-3 flex-1">
          {leftColumnItems.map((item, index) => (
            <Accordion key={index} type="single" collapsible className="w-full">
              <AccordionItem value={`item-${index}`} className="border-0">
                <AccordionTrigger className="bg-[#f2f4f7] rounded-[10px] px-3 py-4 font-medium text-[#4f5d80] text-lg leading-6 [font-family:'Raleway',Helvetica] hover:no-underline">
                  <div className="text-left">{item.question}</div>
                </AccordionTrigger>
                <AccordionContent className="px-3 py-3">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>

        {/* Right column */}
        <div className="flex flex-col items-start gap-3 flex-1">
          {rightColumnItems.map((item, index) => (
            <Accordion key={index} type="single" collapsible className="w-full">
              <AccordionItem
                value={`item-${index + leftColumnItems.length}`}
                className="border-0"
              >
                <AccordionTrigger className="bg-[#f2f4f7] rounded-[10px] px-3 py-4 font-medium text-[#4f5d80] text-lg leading-6 [font-family:'Raleway',Helvetica] hover:no-underline">
                  <div className="text-left">{item.question}</div>
                </AccordionTrigger>
                <AccordionContent className="px-3 py-3">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>

      {/* Helpful footer card */}
      <Card className="mt-2 border-[#e8eef8]">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="text-sm text-[#394355]">
              Не нашли ответ? Мы поможем с расчётом, подбором опций и сроками производства.
            </div>
            <div className="flex gap-2">
              <a href="/contacts">
                <Button size="sm" variant="outline">Задать вопрос</Button>
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
