'use client';

import React, { ReactElement, useMemo, useState, useRef, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../../../../../../components/ui/tabs";
import Image from "next/image";
import { Card, CardContent } from "../../../../../../../components/ui/card";

type Service = {
  id: string;
  title: string;
  short?: string;
  desc: string;
};

type OptionTab = {
  id: string;
  title: string;
  highlight?: string; // <-- optional so TS is happy
};

export const ImageGallerySection = (): ReactElement => {
  const [activeTab, setActiveTab] = useState("external-design");
  const [selectedOptions, setSelectedOptions] = useState<Record<string, boolean>>({});
  const [activeOptionId, setActiveOptionId] = useState<string | null>(null);

  // --- Services data ---
  const services: Service[] = useMemo(
    () => [
      {
        id: "floors",
        title: "Полы, настилы, ковролин",
        short: "Продажа, аренда и монтаж полов, настилов, ковролина.",
        desc:
          "Полы, настилы, ковролины. Для вашего шатра мы установим наиболее подходящий вид покрытия, чтобы вы могли эффективно и безопасно использовать сооружение.",
      },
      {
        id: "entry-groups",
        title: "Входные группы",
        short: "Двери, шторы, занавесы для удобства и безопасности.",
        desc:
          "Входные группы. В эту категорию входят двери, шторы или занавесы — всё, что нужно для безопасности и удобства использования сооружения.",
      },
      {
        id: "heaters",
        title: "Калориферы",
        short: "Подберём обогреватели под ваши задачи.",
        desc:
          "Калориферы. Одним из важнейших показателей комфорта является тепло — для зимних сооружений мы установим специальные системы обогрева, которые сделают пребывание внутри уютным.",
      },
      {
        id: "ac",
        title: "Кондиционеры",
        short: "Комфортная температура летом.",
        desc:
          "Кондиционеры. Для летних мероприятий кондиционеры станут настоящим спасением — установите с их помощью внутри шатра оптимальную температуру.",
      },
      {
        id: "lighting",
        title: "Освещение",
        short: "Большой выбор света и подсветки.",
        desc:
          "Освещение. У нас есть большой выбор разных вариантов освещения, которое поможет вам проводить незабываемые мероприятия даже в тёмное время суток.",
      },
      {
        id: "branding",
        title: "Брендирование",
        short: "Печать на тенте, лого для мероприятий.",
        desc:
          "Брендирование. Украсьте ваш шатёр логотипом компании — это будет идеальным решением для проведения выставки, конференции или любого другого мероприятия.",
      },
      {
        id: "furniture",
        title: "Мебель",
        short: "Ресторанная, торговая и офисная мебель.",
        desc:
          "Мебель. Чтобы не договариваться отдельно с другими компаниями, закажите у нас всю необходимую мебель: как ресторанную, так и для проведения различных мероприятий.",
      },
      {
        id: "toilets",
        title: "Туалеты",
        short: "Аренда премиум-кабин.",
        desc:
          "Туалеты. Чтобы гости чувствовали себя комфортно, арендуйте у нас туалетные кабины премиум-класса.",
      },
      {
        id: "decor",
        title: "Декорирование",
        short: "Шторы, занавесы, атмосфера.",
        desc:
          "Декорирование. Наши шторы и занавесы помогут придать шатру неповторимый внешний вид и создать приятную атмосферу на любом мероприятии.",
      },
      {
        id: "delivery-install",
        title: "Доставка и установка",
        short: "Работаем по РФ и за рубежом.",
        desc:
          "Доставка и установка. В любом регионе РФ, а также ближнего и дальнего зарубежья мы готовы привезти и установить выбранное вами сооружение.",
      },
    ],
    []
  );

  const companyIntro =
    "Компания Mobile Tent — профессионал в изготовлении шатров, тентов и ангаров. Собственное производство позволяет создавать как типовые сооружения, так и конструкции на заказ. Мы работаем напрямую с поставщиками материалов и помогаем с установкой, консультируя по эксплуатации.";

  const optionTabs: OptionTab[] = [
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

  const tabOptions: Record<string, { id: string; label: string }[]> = {
    "internal-design": [
      { id: "lighting", label: "Осветительные приборы" },
      { id: "decor", label: "Декорирование" },
      { id: "furniture", label: "Мебель" },
      { id: "ac", label: "Кондиционеры" },
    ],
    "external-design": services.map((s) => ({ id: s.id, label: s.title })),
    "internal-arrangement": [
      { id: "furniture", label: "Мебель" },
      { id: "toilets", label: "Туалеты" },
      { id: "entry-groups", label: "Входные группы" },
      { id: "floors", label: "Полы / настилы / ковролин" },
    ],
    "additional-option": [
      { id: "branding", label: "Брендирование" },
      { id: "delivery-install", label: "Доставка и установка" },
      { id: "heaters", label: "Калориферы" },
    ],
  };

  const serviceById = useMemo(
    () => Object.fromEntries(services.map((s) => [s.id, s] as const)),
    [services]
  ) as Record<string, Service>;

  const handleOptionClick = (optionId: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [optionId]: !prev[optionId],
    }));
    setActiveOptionId((prev) => (prev === optionId ? null : optionId));
  };

  const activeService: Service | null = activeOptionId ? serviceById[activeOptionId] ?? null : null;

  const tabsListRef = useRef<HTMLDivElement | null>(null);
  const tabBtnRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  // Manual, clamped scrolling so the last tab doesn't yank the page
  useEffect(() => {
    const list = tabsListRef.current;
    const btn = tabBtnRefs.current[activeTab];
    if (!list || !btn) return;

    const padding = 16; // must match scrollPaddingInline
    const btnLeft = btn.offsetLeft;
    const btnRight = btnLeft + btn.offsetWidth;

    const viewLeft = list.scrollLeft;
    const viewRight = viewLeft + list.clientWidth;

    const targetLeft = btnLeft - padding;
    const targetRight = btnRight + padding;

    if (targetLeft < viewLeft) {
      list.scrollTo({ left: Math.max(0, targetLeft), behavior: "smooth" });
    } else if (targetRight > viewRight) {
      const delta = targetRight - viewRight;
      const maxLeft = list.scrollWidth - list.clientWidth;
      list.scrollTo({ left: Math.min(maxLeft, viewLeft + delta), behavior: "smooth" });
    }
  }, [activeTab]);

  return (
    <>
      {/* Desktop Version */}
      <section className="hidden md:flex flex-col items-center gap-9 w-full py-8">
        <div className="flex flex-col items-center gap-[13px] pt-[60px] px-6">
          <div className="flex flex-col items-center gap-9 w-full">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="flex items-start justify-center gap-9 bg-transparent h-auto p-0 flex-wrap">
                {optionTabs.map((tab) => {
                  const highlight = tab.highlight;
                  return (
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
                        {highlight ? (
                          <>
                            <span className={`${activeTab === tab.id ? "text-white" : "text-[#232c42]"}`}>
                              {tab.title.split(highlight)[0]}
                            </span>
                            <span className={`${activeTab === tab.id ? "text-white" : "text-[#527dc5]"}`}>
                              {highlight}
                            </span>
                          </>
                        ) : (
                          <span className={`${activeTab === tab.id ? "text-white" : "text-[#232c42]"}`}>
                            {tab.title}
                          </span>
                        )}
                      </span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>

              <div className="grid grid-cols-1 lg:grid-cols-[673px_1fr] items-start gap-[40px] mt-4 w-full">
                <div className="w-[673px] h-[553px] mx-auto">
                  <Image
                    src="/tent-with-curtains-i08-1.webp"
                    alt="Tent with curtains"
                    width={673}
                    height={553}
                    className="object-contain"
                    loading="lazy"
                  />
                </div>

                {optionTabs.map((tab) => (
                  <TabsContent key={tab.id} value={tab.id} className="m-0">
                    <div className="flex flex-col gap-6">
                      <Card className="bg-[#e8edf7] rounded-[20px] shadow-none border-none">
                        <CardContent className="flex flex-wrap gap-4 p-[24px]">
                          {(tabOptions[tab.id] ?? []).map(({ id, label }, index) => (
                            <button
                              key={id}
                              onClick={() => handleOptionClick(id)}
                              className={`text-left ${
                                index === 0 ? "w-[457px]" : "min-w-[200px]"
                              } [font-family:'Raleway',Helvetica] text-base lg:text-xl leading-6 underline rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#527dc5] ${
                                selectedOptions[id] ? "text-[#527dc5] font-semibold no-underline" : "text-[#394355]"
                              }`}
                              aria-pressed={!!selectedOptions[id]}
                            >
                              {label}
                            </button>
                          ))}
                        </CardContent>
                      </Card>

                      {/* Details card */}
                      <Card className="bg-white rounded-[20px] shadow-[0_10px_30px_rgba(22,29,36,0.08)] border border-[#e8edf7]">
                        <CardContent className="p-6 flex flex-col gap-2">
                          {activeService ? (
                            <>
                              <h3 className="text-xl font-semibold text-[#232c42]">{activeService.title}</h3>
                              {activeService.short ? (
                                <p className="text-sm text-[#56617a]">{activeService.short}</p>
                              ) : null}
                              <p className="text-base leading-7 text-[#232c42] mt-2">{activeService.desc}</p>
                            </>
                          ) : (
                            <>
                              <h3 className="text-xl font-semibold text-[#232c42]">Сопутствующие услуги Mobile Tent</h3>
                              <p className="text-base leading-7 text-[#232c42]">{companyIntro}</p>
                            </>
                          )}
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                ))}
              </div>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Mobile Version */}
      <section className="block md:hidden w-full py-6 px-4 overflow-x-hidden">
        {/* Center lock for iPhone 14 Pro Max */}
        <div className="w-full max-w-[430px] mx-auto flex flex-col items-center gap-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            {/* Edge-to-edge swipe rail; content remains centered by outer max-w */}
            <div className="-mx-4 px-4 w-[calc(100%+2rem)] relative left-1/2 right-1/2 -translate-x-1/2">
              <TabsList
                ref={tabsListRef}
                className="
                  w-full max-w-full
                  flex gap-3 overflow-x-auto bg-transparent h-auto p-0 pb-2 hide-scrollbar
                  snap-x snap-mandatory overscroll-x-contain pr-4
                "
                // breathing room so the last tab can align without pushing the page
                style={{ scrollPaddingInline: 16 }}
              >
                {optionTabs.map((tab) => {
                  const highlight = tab.highlight;
                  return (
                    <TabsTrigger
                      key={tab.id}
                      value={tab.id}
                      ref={(el) => {
                        tabBtnRefs.current[tab.id] = el as HTMLButtonElement | null;
                      }}
                      className={`
                        snap-start whitespace-nowrap
                        min-w-max h-12 px-4 py-2 rounded-[20px] shadow-sm
                        ${activeTab === tab.id
                          ? "bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white"
                          : "bg-white text-[#232c42]"
                        }
                      `}
                    >
                      <span className="font-semibold text-sm">
                        {highlight ? (
                          <>
                            <span className={activeTab === tab.id ? "text-white" : "text-[#232c42]"}>
                              {tab.title.split(highlight)[0]}
                            </span>
                            <span className={activeTab === tab.id ? "text-white" : "text-[#527dc5]"}>{highlight}</span>
                          </>
                        ) : (
                          tab.title
                        )}
                      </span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </div>

            {/* Main visual */}
            <div className="flex flex-col items-center gap-6 mt-4 w-full">
              <div className="w-full h-48 relative">
                <Image
                  src="/tent-with-curtains-i08-1.webp"
                  alt="Tent with curtains"
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>

              {/* Tab contents */}
              {optionTabs.map((tab) => (
                <TabsContent key={tab.id} value={tab.id} className="m-0 w-full">
                  <Card className="bg-[#e8edf7] rounded-[16px] shadow-none border-none">
                    <CardContent className="flex flex-col items-start gap-3 p-4">
                      {(tabOptions[tab.id] ?? []).map(({ id, label }) => (
                        <button
                          key={id}
                          onClick={() => handleOptionClick(id)}
                          className={`w-full text-left underline text-base leading-6 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#527dc5] ${
                            selectedOptions[id] ? "text-[#527dc5] font-semibold no-underline" : "text-[#394355]"
                          }`}
                          aria-pressed={!!selectedOptions[id]}
                        >
                          {label}
                        </button>
                      ))}
                    </CardContent>
                  </Card>

                  {/* Details card */}
                  <Card className="bg-white rounded-[16px] shadow-[0_8px_24px_rgba(22,29,36,0.08)] border border-[#e8edf7] mt-4">
                    <CardContent className="p-4">
                      {activeService ? (
                        <>
                          <h3 className="text-lg font-semibold text-[#232c42]">{activeService.title}</h3>
                          {activeService.short ? (
                            <p className="text-sm text-[#56617a] mt-1">{activeService.short}</p>
                          ) : null}
                          <p className="text-base leading-6 text-[#232c42] mt-2">{activeService.desc}</p>
                        </>
                      ) : (
                        <>
                          <h3 className="text-lg font-semibold text-[#232c42]">Сопутствующие услуги Mobile Tent</h3>
                          <p className="text-base leading-6 text-[#232c42] mt-1">{companyIntro}</p>
                        </>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>

        <style jsx>{`
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {/* Global guard to prevent any stray horizontal scroll */}
        <style jsx global>{`
          html, body, #__next { overflow-x: hidden; }
        `}</style>
      </section>
    </>
  );
};
