'use client';

import { Card, CardContent } from "../../../../components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../../../components/ui/tabs";
import { ReactElement, useState } from 'react';
import Image from 'next/image';

export const Services2 = (): ReactElement => {
  const [activeTab, setActiveTab] = useState("external-design");
  const [selectedOptions, setSelectedOptions] = useState<Record<string, boolean>>({});

  // Data for option tabs
  const optionTabs = [
    {
      id: "internal-design",
      title: "Внутреннее оформление",
      highlight: "оформление",
    },
    { id: "external-design", title: "Внешнее оформление" },
    {
      id: "internal-arrangement",
      title: "Внутреннее обустройство",
      highlight: "обустройство",
    },
    {
      id: "additional-option",
      title: "Дополнительная плашка",
      highlight: "плашка",
    },
  ];

  // Data for option lists per tab
  const tabOptions: Record<string, string[]> = {
    "internal-design": [
      "Напольные покрытия (настилы, ковролин и пр.)",
      "Дверные проемы",
      "Осветительные приборы",
      "Перегородки",
      "Системы вентиляции",
      "Электрические розетки",
      "Отделка стен",
      "Потолочные конструкции"
    ],
    "external-design": [
      "Напольные покрытия (настилы, ковролин и пр.)",
      "Название опции",
      "Название опции",
      "Название опции",
      "Название опции",
      "Название опции",
      "Название опции",
      "Название опции",
    ],
    "internal-arrangement": [
      "Мебель для переговорных",
      "Барные стойки",
      "Ресепшн зоны",
      "Зоны отдыха",
      "Кухонные модули",
      "Стеллажные системы",
      "Рабочие места",
      "Системы хранения"
    ],
    "additional-option": [
      "Дополнительное освещение",
      "Брендирование",
      "Отопление",
      "Системы безопасности",
      "IT инфраструктура",
      "Сантехнические решения",
      "Звукоизоляция",
      "Специальные покрытия"
    ]
  };

  const handleOptionClick = (option: string) => {
    setSelectedOptions(prev => ({
      ...prev,
      [option]: !prev[option]
    }));
    console.log("Selected option:", option);
  };

  return (
    <div className="relative bg-white ">
      <div className="flex flex-col items-center gap-[13px] pt-[60px] px-6">
        <div className="flex flex-col items-center gap-9">
          <h5 className="[font-family:'Raleway',Helvetica] font-semibold text-4xl tracking-[0]">
            <span className="text-[#232c42]">Выбирайте </span>
            <span className="text-[#527dc5]">любые</span>
            <span className="text-[#232c42]"> опции</span>
          </h5>

          <Tabs 
            value={activeTab} 
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="flex items-start justify-center gap-9 bg-transparent h-auto p-0">
              {optionTabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className={`w-auto h-[94px] px-[31px] py-[35px] rounded-[30px] shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] backdrop-blur-[79px] ${
                    activeTab === tab.id
                      ? "[background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]"
                      : "bg-white"
                  }`}
                >
                  <span
                    className={`[font-family:'Raleway',Helvetica] font-semibold text-xl tracking-[0] leading-6 ${
                      activeTab === tab.id ? "text-white" : ""
                    }`}
                  >
                    {tab.highlight ? (
                      <>
                        <span className={`${activeTab === tab.id ? "text-white" : "text-[#232c42]"}`}>
                          {tab.title.split(tab.highlight)[0]}
                        </span>
                        <span className={`${activeTab === tab.id ? "text-white" : "text-[#527dc5]"}`}>
                          {tab.highlight}
                        </span>
                      </>
                    ) : (
                      <span className={`${activeTab === tab.id ? "text-white" : "text-[#232c42]"}`}>
                        {tab.title}
                      </span>
                    )}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="flex items-center gap-[59px] mt-4">
              <div className="w-[673px] h-[553px]">
                <Image
                  src="/tent-with-curtains-i08-1.png"
                  alt="Tent with curtains"
                  width={673}
                  height={553}
                  className="object-contain"
                  priority={true}
                />
              </div>

              {optionTabs.map(tab => (
                <TabsContent key={tab.id} value={tab.id} className="m-0">
                  <Card className="bg-[#e8edf7] rounded-[20px] shadow-none border-none">
                    <CardContent className="flex flex-col w-[582px] items-start gap-6 p-[37px]">
                      {tabOptions[tab.id].map((option, index) => (
                        <div
                          key={index}
                          onClick={() => handleOptionClick(option)}
                          className={`${
                            index === 0 ? "w-[457px]" : "w-[169px]"
                          } font-normal ${
                            selectedOptions[option] 
                              ? "text-[#527dc5] font-semibold" 
                              : "text-[#394355] underline"
                          } [font-family:'Raleway',Helvetica] text-xl tracking-[0] leading-6 cursor-pointer`}
                        >
                          {option}
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};