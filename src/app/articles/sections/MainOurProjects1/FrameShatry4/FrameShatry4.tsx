'use client';

import React from "react";
import { Button } from "../../../../../components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "../../../../../components/ui/tabs";
import { ReactElement } from 'react';
import Link from "next/link";

export const FrameShatry4 = (): ReactElement => {
  // Data for tabs
  const tabOptions = [
    { id: "device", label: "Устройство" },
    { id: "events", label: "Для каких мероприятий" },
    { id: "types", label: "Виды и формы" },
  ];

  // Article links data with titles and paths
  const articleLinks = [
    { title: "Мембранные конструкции", path: "/articles/membrannye-konstrukcii" },
    { title: "Геодезический купол", path: "/articles/geodezicheskiy-kupol" },
    { title: "Вантовые конструкции", path: "/articles/vantovye-konstrukcii" },
    { title: "Тентовая архитектура", path: "/articles/tentovaya-arhitektura" },
    { title: "Воздухоопорные сооружения и конструкции", path: "/articles/vozduhoopornye-sooruzheniya-i-konstrukcii" },
    { title: "Виды шатров", path: "/vidy-shatrov" },
    { title: "Зимние шатры", path: "/articles/zimnie-shatry" },
    { title: "Как выбрать быстросборный шатёр", path: "/articles/kak-vybrat-bystrosbornyy-shatyor" },
    { title: "Преимущества и недостатки аренды шатра на свадьбу", path: "/articles/preimushchestva-i-nedostatki-arendy-shatra-na-svadbu" },
    { title: "Многогранные шатры", path: "/articles/mnogogrannye-shatry" },
    { title: "Летние шатры", path: "/articles/letnie-shatry" },
    { title: "Как выбрать шатёр для ресторана", path: "/articles/kak-vybrat-shatyor-dlya-restorana" },
    { title: "Правила установки больших шатров и тентов", path: "/articles/pravila-ustanovki-bolshih-shatrov-i-tentov" }
  ];

  // Additional links from your directory
  const additionalLinks = [
    { title: "Гарантия и возврат", path: "/warranty-and-refund" },
    { title: "Монтаж шатров", path: "/shatry-i-navesy/montag_shatrov" },
    { title: "Награды и достижения", path: "/honors" },
    { title: "Безкаркасные и каркасные ангары", path: "/shatry-i-navesy/bezkarkasnye_i_karkasnye" },
    { title: "Изготовление тентов навесов", path: "/izgotovlenie_tentov_navesov" }
  ];

  // Paragraph text with highlighted words
  const paragraphText =
    "Сообщите точные размеры, пришлите фото местности, где будет располагаться шатер. Мы бесплатно спроектируем и поставим его на фото. Увидете, как он будет смотреться в реальностиСообщите точные размеры, пришлите фото местности, где будет располагаться шатер. Мы бесплатно спроектируем и поставим его на фото. Увидете, как он будет смотреться в реальностиСообщите точные размеры, пришлите фото местности, где будет располагаться шатер. Мы бесплатно спроектируем и поставим его на фото. Увидете, как он будет смотреться в реальности";

  // Function to render paragraph with highlighted words
  const renderParagraph = (text: string) => {
    return text.split("шатер").map((part, index) => (
      <React.Fragment key={index}>
        <span className="text-[#394355]">{part}</span>
        {index < text.split("шатер").length - 1 && (
          <span className="text-[#527dc5] underline">шатер</span>
        )}
      </React.Fragment>
    ));
  };

  return (
    <section className="relative bottom-[200px]">
      <div className="flex flex-col items-start gap-9">
        <h2 className="w-fit relative [font-family:'Raleway',Helvetica] font-semibold text-4xl tracking-[0] leading-[normal] whitespace-nowrap">
          <span className="text-[#527dc5]">Как устроены</span>
          <span className="text-[#232c42]">
            , какие бывают и из чего состоят арочные шатры
          </span>
        </h2>

        <div className="w-full">
          <Tabs defaultValue="types" className="w-full">
            <TabsList className="h-auto bg-transparent p-0 gap-6">
              {tabOptions.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className={`h-[46px] px-4 py-[13px] rounded-[50px] [font-family:'Raleway',Helvetica] font-semibold text-lg data-[state=active]:shadow-2 data-[state=active]:[background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] data-[state=active]:text-white data-[state=inactive]:bg-white data-[state=inactive]:text-[#232c42]`}
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="w-full font-medium text-lg leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
          {renderParagraph(paragraphText)}
        </div>

        {/* Article Links Grid */}
        <div className="w-full">
          <h3 className="text-2xl font-semibold mb-4 text-[#232c42] [font-family:'Raleway',Helvetica]">
            Полезные статьи и разделы
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
            {articleLinks.map((link, index) => (
              <Link 
                key={index} 
                href={link.path}
                className="inline-flex items-center justify-center px-4 py-2 rounded-[50px] bg-white text-[#232c42] hover:bg-[#527dc5] hover:text-white transition-colors duration-200 [font-family:'Raleway',Helvetica] font-semibold text-sm border border-gray-200 hover:border-[#527dc5] text-center min-h-[40px]"
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Additional Links */}
          <h3 className="text-2xl font-semibold mb-4 text-[#232c42] [font-family:'Raleway',Helvetica]">
            Дополнительные разделы
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {additionalLinks.map((link, index) => (
              <Link 
                key={index} 
                href={link.path}
                className="inline-flex items-center justify-center px-4 py-2 rounded-[50px] bg-white text-[#232c42] hover:bg-[#527dc5] hover:text-white transition-colors duration-200 [font-family:'Raleway',Helvetica] font-semibold text-sm border border-gray-200 hover:border-[#527dc5] text-center min-h-[40px]"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};