'use client';

import React, { useState } from "react";
import { Card, CardContent } from "../../../../../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../../components/ui/tabs";
import { ReactElement } from 'react';
 
export const ContentSection = (): ReactElement => {
  // FAQ data for mapping
  const faqItems = [
    {
      id: "cost",
      question: "Сколько стоит?",
      answer: `Стоимость наших шатров и навесов зависит от размера, материалов и сложности конструкции. Мы предлагаем гибкую систему ценообразования и индивидуальный подход к каждому клиенту. Для расчета точной стоимости свяжитесь с нами, и наш менеджер подготовит для вас коммерческое предложение, учитывающее все ваши пожелания и требования.`,
    },
    {
      id: "order",
      question: "Как заказать?",
      answer: `Чтобы заказать шатер или тент, вы можете оставить заявку на нашем сайте или позвонить нам по телефону. Мы обсудим ваши пожелания, предложим варианты и подготовим дизайн-проект. После согласования всех деталей мы заключим договор и приступим к изготовлению. Мы сопровождаем вас на всех этапах - от разработки дизайна до монтажа и обслуживания.`,
    },
    {
      id: "constructions",
      question: "Какие конструкции вы делаете?",
      answer: `Мы изготавливаем шатры и тенты различных форм и размеров: от стандартных прямоугольных до сложных арочных и купольных конструкций. Также мы производим навесы для разных мероприятий: свадеб, корпоративов, выставок, рынков и уличных кафе. В нашем каталоге вы найдете широкий выбор моделей, а также мы можем создать конструкцию по вашему индивидуальному проекту.`,
    },
    {
      id: "production",
      question: "У вас свое производство?",
      answer: `Да, у нас собственное современное производство, оснащенное профессиональным оборудованием. Это позволяет нам контролировать качество на каждом этапе, соблюдать сроки изготовления и предлагать конкурентные цены. Мы работаем в соответствии с европейскими стандартами качества и гарантируем надежность наших конструкций.`,
    },
    {
      id: "timeframes",
      question: "Какие сроки изготовления?",
      answer: `Сроки изготовления зависят от сложности заказа и текущей загрузки производства. Обычно производство занимает от 5 до 14 рабочих дней. Для срочных заказов мы предлагаем услугу ускоренного производства. Точные сроки мы сообщим после обсуждения всех деталей вашего заказа.`,
    },
    {
      id: "stock",
      question: "Товар в наличии или надо ждать?",
      answer: `Мы изготавливаем шатры и тенты на заказ, поэтому товара в наличии, как правило, нет. Однако у нас есть возможность аренды готовых конструкций - это отличное решение для разовых мероприятий. Для постоянного использования мы рекомендуем индивидуальное изготовление, чтобы конструкция идеально соответствовала вашим потребностям.`,
    },
    {
      id: "payment",
      question: "Как оплачивать?",
      answer: `Мы предлагаем удобные способы оплаты: банковский перевод по счету, наличные в нашем офисе, а также возможность работать по безналичному расчету для юридических лиц. Для крупных заказов предусмотрена поэтапная оплата. Мы предоставляем все необходимые документы для бухгалтерии.`,
    },
    {
      id: "delivery",
      question: "Есть ли доставка и в какие города?",
      answer: `Да, мы осуществляем доставку и профессиональный монтаж наших конструкций. Мы работаем не только в Москве и Санкт-Петербурге, но и по всей России. Стоимость и сроки доставки зависят от удаленности вашего города. Наши специалисты приедут к вам, чтобы качественно установить конструкцию и провести инструктаж по эксплуатации.`,
    },
  ];

  const [activeTab, setActiveTab] = useState("cost");

  return (
    <>
      {/* Desktop version */}
      <div className="relative bottom-[800px] h-[433px] w-full py-12 px-12 hidden md:block">
        <Card className="w-full h-[433px] bg-white rounded-[20px] border-0 shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]">
          <CardContent className="p-0 h-full">
            <Tabs defaultValue="cost" className="h-full">
              <div className="flex h-full">
                <div className="w-[457px] border-r border-r-gray-200 p-9">
                  <TabsList className="flex flex-col items-start w-full h-auto bg-transparent space-y-6">
                    {faqItems.map((item) => (
                      <TabsTrigger
                        key={item.id}
                        value={item.id}
                        className="justify-start w-full data-[state=active]:text-[#527dc5] data-[state=active]:font-semibold text-[#394355] text-xl [font-family:'Raleway',Helvetica] tracking-[0] leading-6 h-auto p-0"
                      >
                        {item.question}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>

                <div className="flex-1 p-9">
                  {faqItems.map((item) => (
                    <TabsContent
                      key={item.id}
                      value={item.id}
                      className="mt-0 h-full [font-family:'Raleway',Helvetica] font-normal text-[#4f5d80] text-lg tracking-[0] leading-6 whitespace-pre-line"
                    >
                      {item.answer}
                    </TabsContent>
                  ))}
                </div>
              </div>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* Mobile version */}
      <div className="block md:hidden w-full py-6 px-4">
        <Card className="w-full bg-white rounded-[20px] border-0 shadow-lg">
          <CardContent className="p-0">
            <div className="flex flex-col">
                {/* Questions list */}
                <div className="p-4">
                  <div className="flex flex-col space-y-3">
                    {faqItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`px-4 py-3 rounded-lg text-left text-sm font-medium transition-colors ${
                          activeTab === item.id
                            ? "bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white"
                            : "bg-gray-100 text-[#394355] hover:bg-gray-200"
                        }`}
                      >
                        {item.question}
                      </button>
                    ))}
                  </div>
                </div>

              {/* Answer content */}
              <div className="p-6">
                <div className="[font-family:'Raleway',Helvetica] font-normal text-[#4f5d80] text-base tracking-[0] leading-6 whitespace-pre-line">
                  {faqItems.find(item => item.id === activeTab)?.answer}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};