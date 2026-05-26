'use client';

import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../../../../components/ui/badge";
import { Button } from "../../../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../../../components/ui/card";
import { ReactElement } from 'react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Consultaionfor3d from '../../../../../../../components/ui/Consultaionfor3d';
import ProductFramePlayer from '../../../../../../../components/ui/ProductFramePlayer'; 

const ShareButton = () => {
  const [copied, setCopied] = useState(false);

  const handleShareClick = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
        const textArea = document.createElement('textarea');
        textArea.value = url;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
  };

  return (
    <div className="absolute top-3 right-3 z-10">
      <div 
        onClick={handleShareClick}
        className="relative flex w-[30px] h-[30px] items-center justify-center p-1.5 rounded-full bg-[linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] cursor-pointer hover:opacity-90 transition-opacity shadow-md"
      >
        <Image
          src="/share.png"
          alt="Share icon"
          width={14}
          height={15}
          className="w-3.5 h-[15px]"
        />

        {copied && (
          <div className="absolute top-full right-0 mt-2 px-3 py-1.5 text-xs font-medium bg-gray-800 text-white rounded-md shadow-lg z-20 whitespace-nowrap">
            Ссылка скопирована!
          </div>
        )}
      </div>
    </div>
  );
};

export const PricingSection = (): ReactElement => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

const tentSequences = [
  {
    basePath: "/frames/1_Interactive LightMix", // No trailing slash
    totalFrames: 180,
    frameRate: 24
  },
];


  const specifications = [
    { label: "Размер:", value: "5x8 м" },
    { label: "Площадь:", value: "40 м²" },
    { label: "Форма:", value: "Прямоугольник" },
    { label: "Вместимость:", value: "42 человек" },
    { label: "Ширина:", value: "5м" },
    { label: "Длина:", value: "8м" },
    { label: "Высота входной арки:", value: "5м" },
    { label: "Высота в коньке:", value: "5м" },
    { label: "В наличии:", value: "да/под заказ" },
  ];
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const closePopup = () => setIsPopupOpen(false);

const thumbnails = [
  { id: 1, src: "/pergoly1.png", alt: "Product 1" },
  { id: 2, src: "/pergoly2.png", alt: "Product 2" },
  { id: 3, src: "/pergoly3.png", alt: "Product 3" },
  { id: 6, label: "3D", is3D: true }, 
];

  const [selectedImage, setSelectedImage] = useState<string | null>(thumbnails[0].src ?? null);
  const [selectedMode, setSelectedMode] = useState<"image" | "3d">("image");
  
  const configOptions = [
    { name: "Базовая", isActive: true },
    { name: "Средняя", isActive: false },
    { name: "Максимальная", isActive: false },
  ];

  // ✅ States for config interaction
const [showConfigDetails, setShowConfigDetails] = useState(true); // was false
const [activeConfig, setActiveConfig] = useState<string | null>("Средняя"); // was "Базовая"

  // ✅ Handle config button click
  const handleConfigClick = (configName: string) => {
    setActiveConfig(configName);
    setShowConfigDetails(true);
  };

  // ✅ Toggle config details manually
  const toggleConfigDetails = () => {
    setShowConfigDetails(prev => !prev);
  };

  // ✅ Config details content (dummy data)
  const configDetails = {
    "Базовая": {
      title: "Базовая комплектация",
      items: [
        "Каркас из оцинкованной стали",
        "Тент из ПВХ 650 г/м²",
        "Комплект крепежей и анкеров",
        "Сумка для транспортировки",
        "Инструкция по сборке"
      ],
      note: "Подходит для сезонного использования на мероприятиях."
    },
    "Средняя": {
      title: "Средняя комплектация",
      items: [
        "Каркас усиленный, с защитой от коррозии",
        "Тент из ПВХ 750 г/м² с UV-защитой",
        "Дополнительные растяжки и грузы",
        "Сумка с колесами",
        "Гарантия 3 года",
        "Бесплатная доставка по МКАД"
      ],
      note: "Идеально для частого использования и аренды."
    },
    "Максимальная": {
      title: "Максимальная комплектация",
      items: [
        "Промышленный каркас с двойной защитой",
        "Тент 850 г/м², огнеупорный, зимний",
        "Система вентиляции и окна",
        "Электропроводка внутри (опция)",
        "Профессиональная сборка в подарок",
        "Гарантия 5 лет + сервисное обслуживание"
      ],
      note: "Премиум-решение для бизнеса и круглогодичного использования."
    }
  };

  const contactInfo = [
    { phone: "+7 (499) 113-36-60" },
    { phone: "8 (800) 302-46-31" },
  ];
  
  const productDetails = {
    warranty: {
      title: "Гарантия",
      value: "50 лет",
    },
    delivery: {
      title: "Доставка",
      description: "Отправляем во все регионы РФ и страны СНГ",
    },
    certifications: {
      title: "Сертификации",
      imageSrc: "/forcirtifcate.png",
    },
    madeInRussia: {
      imageSrc: "/eac.png",
      description: "Товар произведен в РФ и допущен к закупкам по программе «Импортозамещение»",
    },
  };

  // Desktop version
  if (!isMobile) {
    return (
      <section className="flex flex-col gap-[35px] py-6 px-12 relative top-[400px]">
        <div className="flex flex-col w-full max-w-[658px]">
          <h1 className="font-medium text-[#394355] text-4xl [font-family:'Raleway',Helvetica] tracking-[0]">
            Пергола Эконом 5х8
          </h1>
        </div>

        <div className="flex flex-col gap-9">
          <div className="flex flex-col gap-6">
            <dl className="flex flex-col gap-4">
              {specifications.map((spec, index) => (
                <div key={index} className="flex items-start gap-2">
                  <dt className="font-normal text-[#394355] text-lg leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                    {spec.label}
                  </dt>
                  <dd className="font-medium text-[#394355] text-lg leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

<Card className="bg-[#eef2fc] border-0 relative z-20 w-[580px] rounded-[10px] border-none">
          <CardContent className="flex flex-col gap-6 p-4">
            <div className="flex w-full max-w-[546px] items-start justify-between">
              <h3 className="font-semibold text-[#394355] text-lg leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                Комплектация:
              </h3>

            </div>

            <div className="flex items-start gap-[34px]">
              {/* ✅ Added onClick to each config button */}
              {configOptions.map((option, index) => (
                <Button
                  key={index}
                  onClick={() => handleConfigClick(option.name)}
                  variant={activeConfig === option.name ? "default" : "outline"}
                  className={`w-40 h-auto px-4 py-2 rounded-[50px] transition-all ${
                    activeConfig === option.name
                      ? "bg-[linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] shadow-[0px_22px_44px_0px_rgba(32,124,254,0.4)] border-0"
                      : "bg-white border border-[#394355] hover:bg-gray-50"
                  }`}
                >
<span
  className={`text-lg leading-6 [font-family:'Raleway',Helvetica] tracking-[0] ${
    activeConfig === option.name ? "font-semibold text-white" : "font-medium text-[#394355]"
  }`}
>
  {option.name}
</span>
                </Button>
              ))}
            </div>

            {/* ✅ Config details section */}
            {showConfigDetails && activeConfig && (
              <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                <h4 className="font-bold text-[#394355] text-lg mb-3">{configDetails[activeConfig as keyof typeof configDetails].title}</h4>
                <ul className="list-disc list-inside space-y-1 text-[#394355] text-sm">
                  {configDetails[activeConfig as keyof typeof configDetails].items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <p className="mt-3 text-xs text-[#6b7280] italic">
                  {configDetails[activeConfig as keyof typeof configDetails].note}
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="flex flex-col gap-[30px]">
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-[#394355] text-lg leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
              Цена:
            </h3>
            <div className="flex items-start gap-3">
              <div className="flex items-center gap-3">
                <div className="font-bold text-[#394355] text-4xl leading-[normal] [font-family:'Raleway',Helvetica] tracking-[0]">
                  от 639 100 ₽
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="font-medium text-[#4f5d80d9] text-base leading-6 line-through [font-family:'Raleway',Helvetica] tracking-[0]">
                    913 000 ₽
                  </span>
                  <Badge className="px-2 py-1 rounded-lg bg-[linear-gradient(180deg,rgba(255,115,115,1)_0%,rgba(255,111,111,1)_37%,rgba(236,60,60,1)_100%)]">
                    <span className="font-bold text-white text-sm leading-[normal] [font-family:'Raleway',Helvetica] tracking-[0]">
                      -30%
                    </span>
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-[5px] left-[750px] z-10">
            <div className="font-normal text-[#394355] text-base leading-[normal] whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0] mb-4">
              <span className="[font-family:'Raleway',Helvetica] font-normal text-[#394355] text-base tracking-[0]">
                Код товара:{" "}
              </span>
              <span className="font-semibold underline">7606</span>
            </div>

            <div className="w-[660px] h-[660px] rounded-[20px] overflow-hidden relative">
              {selectedMode === "3d" ? (
                <ProductFramePlayer sequences={tentSequences} />
              ) : (
                <Image
                  src={selectedImage || "/fallback.png"}
                  alt="Selected Product"
                  width={1280}
                  height={720}
                  className="object-contain w-full h-full"
                />
              )}
              <ShareButton />
            </div>

            <div className="flex flex-wrap gap-3 mt-4">
              {thumbnails.map((thumbnail) => (
                <button
                  key={thumbnail.id}
                  onClick={() => {
                    if (thumbnail.is3D) {
                      setSelectedMode("3d");
                      setSelectedImage(null);
                    } else if (thumbnail.src) {
                      setSelectedMode("image");
                      setSelectedImage(thumbnail.src);
                    }
                  }}
                  className={`w-[100px] h-[100px] rounded-xl flex items-center justify-center font-semibold text-lg text-black
                    ${selectedMode === "3d" && thumbnail.is3D ? "ring-4 ring-blue-500 scale-105" : ""}
                    ${!thumbnail.is3D && selectedImage === thumbnail.src ? "ring-4 ring-blue-500 scale-105" : ""}
                    bg-[#ffffff] transition-all duration-300 transform focus:outline-none hover:scale-105`}
                >
                  {thumbnail.is3D ? (
                    <span>3D</span>
                  ) : thumbnail.src && thumbnail.alt ? (
                    <Image
                      src={thumbnail.src}
                      alt={thumbnail.alt}
                      width={100}
                      height={100}
                      className="rounded-xl object-cover border-2 border-white shadow-md"
                    />
                  ) : null}
                </button>
              ))}
            </div>
          </div>





          <div className="flex items-start justify-between w-full max-w-[546px]">
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-[#394355] text-sm leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                Нашли дешевле?
              </h4>
              <p className="font-medium text-[#394355] text-sm leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                Сделаем скидку
              </p>
            </div>

            <Button
              variant="ghost"
              className="flex items-center gap-[7px] h-auto p-0"
            >
              <span className="font-medium text-[#394355] text-sm leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                Задать вопрос по товару
              </span>
              <div className="w-[15px] h-[15px] bg-[url(/forinfo.png)] bg-[100%_100%]" />
            </Button>
          </div>


          <Card className="relative w-full left-[700px] top-[50px] max-w-[658px] bg-[#fffffff2] rounded-[20px] border-[3px] border-solid border-white shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]">
            <CardContent className="flex flex-col items-start gap-7 p-[17px_27px]">
              <div className="flex items-start justify-between w-full">
                <div className="flex flex-col items-start gap-4">
                  <h3 className="mt-[-1px] font-['Raleway',Helvetica] font-semibold text-[#232c42] text-xl">
                    {productDetails.warranty.title}
                  </h3>
                  <div className="flex items-start gap-7">
                    <div className="flex flex-col items-start gap-1.5">
                      <p className="mt-[-1px] font-['Raleway',Helvetica] font-bold text-[#232c42] text-3xl">
                        {productDetails.warranty.value}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-4">
                  <h3 className="mt-[-1px] font-['Raleway',Helvetica] font-semibold text-[#232c42] text-xl">
                    {productDetails.delivery.title}
                  </h3>
                  <div className="flex items-start gap-7">
                    <div className="flex flex-col items-start gap-1.5">
                      <p className="mt-[-1px] font-['Raleway',Helvetica] font-normal text-[#232c42] text-base whitespace-pre-line">
                        {productDetails.delivery.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-end gap-7 w-full">
                <div className="flex flex-col items-start gap-4">
                  <h3 className="mt-[-1px] font-['Raleway',Helvetica] font-semibold text-[#232c42] text-xl">
                    {productDetails.certifications.title}
                  </h3>
                  <Image
                    className="w-[310px] h-14"
                    alt="Certification logos"
                    src={productDetails.certifications.imageSrc}
                    width={310}
                    height={56}
                    quality={80}
                  />
                </div>

                <div className="flex items-start gap-2">
                  <Image
                    className="w-[77px] h-[71px]"
                    alt="Made in Russia logo"
                    src={productDetails.madeInRussia.imageSrc}
                    width={77}
                    height={71}
                    quality={80}
                  />
                  <div className="flex flex-col items-start gap-2.5">
                    <div className="flex w-[157px] items-start gap-7">
                      <div className="flex flex-col w-[157px] items-start gap-1.5">
                        <p className="w-40 mt-[-1px] mr-[-3px] font-['Raleway',Helvetica] font-normal text-[#232c42] text-sm whitespace-pre-line">
                          {productDetails.madeInRussia.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="absolute bottom-[70px] w-[600px] h-[140px] border-0">
            <CardContent className="flex flex-col items-start gap-6 p-0 relative left-[15px]">
              <div className="relative bottom-[30px]">
                <h3 className="font-semibold text-[#394355] text-lg leading-6 [font-family:'Raleway',Helvetica]">
                  Или свяжитесь по контактам
                </h3>
              </div>

              <div className="flex items-start gap-[73px]">
                <div className="flex items-start gap-[18px]">
                  <div className="relative w-6 h-6">
                    <a href="https://t.me/+79770893996?start=14594990928" target="_blank" rel="noopener noreferrer">
                      <Image
                        className="absolute top-[3px] left-0.5"
                        src="/group.png"
                        alt="Telegram icon"
                        width={21}
                        height={18}
                      />
                    </a>
                  </div>
                  <div className="relative w-6 h-6">
                    <a href="https://api.whatsapp.com/send/?phone=79805109568" target="_blank" rel="noopener noreferrer">
                      <Image
                        className="absolute top-0.5 left-0.5"
                        src="/group-1.png"
                        alt="WhatsApp icon"
                        width={20}
                        height={20}
                      />
                    </a>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-3">
                  {contactInfo
                    .filter((contact) => contact.phone)
                    .map((contact, index) => (
                      <div key={index} className="flex items-center gap-[17px]">
                        <div className="flex w-[25px] h-[25px] items-center justify-center rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec]">
                          <Image
                            src={`/contact1-group-${index === 0 ? 9 : 10}.png`}
                            alt="Phone icon"
                            width={12}
                            height={12}
                            className="object-contain"
                          />
                        </div>
                        <a
                          href={`tel:${contact.phone.replace(/\s|\(|\)|-/g, '')}`}
                          className="text-sm text-[#394355] font-raleway hover:underline"
                        >
                          {contact.phone}
                        </a>
                      </div>
                    ))}
                </div>

                <div className="flex items-center gap-[18px]">
                  <div className="flex w-[25px] h-[25px] items-center justify-center rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec]">
                    <Image src="/contact1-group-11.png" alt="Email icon" width={15} height={11} />
                  </div>
                  <div className="flex items-center gap-1">
                    <a
                      href="mailto:info@mobile-tent.ru"
                      className="text-sm text-[#232c42] font-raleway hover:underline"
                    >
                      info@mobile-tent.ru
                    </a>
                    <Image src="/contact1-group-12.png" alt="Copy icon" width={16} height={16} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="relative flex flex-col w-[580px] bottom-[250px] right-[50px] items-center gap-3 mx-12">
            <Button 
              className="w-[579px] h-[68px] rounded-2xl shadow-2 bg-[linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]"
              onClick={() => setIsPopupOpen(true)}
            >
              <span className="font-semibold text-white text-base text-center leading-[normal] whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                Получить КП с ценой под ваши размеры
              </span>
            </Button>
          </div>
        </div>

        {isPopupOpen && (
          <div 
            className="fixed inset-0 flex items-center justify-center z-50 bg-black/30 backdrop-blur-sm"
            onClick={closePopup}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <Consultaionfor3d onClose={closePopup} />
            </div>
          </div>
        )}
      </section>
    );
  }

  // Mobile Version
  return (
    <section className="flex flex-col gap-10 py-10 px-4 w-full max-w-4xl mx-auto">
      <div className="font-normal text-[#394355] text-sm [font-family:'Raleway',Helvetica] tracking-[0] mb-4">
        <span className="[font-family:'Raleway',Helvetica] font-normal text-[#394355] text-sm tracking-[0]">
          Код товара:{" "}
        </span>
        <span className="font-semibold underline">7606</span>
      </div>

      {/* Product Images & 3D Viewer */}
      <div className="flex flex-col gap-4 w-full">
        <div className="w-full h-[400px] rounded-[16px] overflow-hidden relative bg-white shadow-md md px-18">
          {selectedMode === "3d" ? (
            <div className="w-full h-full flex items-center justify-center overflow-visible">
              <div className="w-[90%] h-[90%] flex items-center justify-center relative"> 
                <div className="w-full h-full scale-75 transform -translate-y-18 -translate-x-40">
                  <ProductFramePlayer sequences={tentSequences} />
                </div>
              </div>
            </div>
          ) : selectedImage ? (
            <Image
              src={selectedImage}
              alt="Selected Product"
              fill
              sizes="100vw"
              style={{ objectFit: 'contain' }}
              priority
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-100">
              <span className="text-gray-500 text-sm">Изображение не загружено</span>
            </div>
          )}
          <ShareButton />
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          {thumbnails.map((thumbnail) => (
            <button
              key={thumbnail.id}
              onClick={() => {
                if (thumbnail.is3D) {
                  setSelectedMode("3d");
                  setSelectedImage(null);
                } else if (thumbnail.src) {
                  setSelectedMode("image");
                  setSelectedImage(thumbnail.src);
                }
              }}
              className={`w-[70px] h-[70px] rounded-xl flex items-center justify-center font-semibold text-sm text-black transition-all duration-300 transform focus:outline-none hover:scale-105
                ${selectedMode === "3d" && thumbnail.is3D 
                  ? "ring-2 ring-blue-500 scale-105 bg-blue-50" 
                  : !thumbnail.is3D && selectedImage === thumbnail.src 
                  ? "ring-2 ring-blue-500 scale-105 bg-blue-50" 
                  : "bg-white border border-gray-200 shadow-sm"
                }`}
            >
              {thumbnail.is3D ? (
                <span className="text-blue-600 font-bold text-xs">3D</span>
              ) : thumbnail.src && thumbnail.alt ? (
                <Image
                  src={thumbnail.src}
                  alt={thumbnail.alt}
                  width={70}
                  height={70}
                  className="rounded-xl object-cover w-full h-full"
                />
              ) : null}
            </button>
          ))}
        </div>
      </div>

      {/* Product title */}
      <div className="flex flex-col w-full">
        <h1 className="font-medium text-[#394355] text-2xl [font-family:'Raleway',Helvetica] tracking-[0] leading-tight">
           Пергола Эконом 5х8
        </h1>
      </div>

      {/* Specifications */}
      <div className="flex flex-col gap-4">
        <h3 className="font-semibold text-[#394355] text-lg [font-family:'Raleway',Helvetica] tracking-[0]">
          Характеристики:
        </h3>
        <dl className="grid grid-cols-1 gap-2">
          {specifications.map((spec, index) => (
            <div key={index} className="flex items-start justify-between py-2 border-b border-gray-100 last:border-b-0">
              <dt className="font-normal text-[#394355] text-sm [font-family:'Raleway',Helvetica] tracking-[0]">
                {spec.label}
              </dt>
              <dd className="font-medium text-[#394355] text-sm [font-family:'Raleway',Helvetica] tracking-[0] text-right">
                {spec.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Configuration */}
      <Card className="bg-[#eef2fc] border-0 rounded-[12px] shadow-sm">
        <CardContent className="flex flex-col gap-4 p-4">
          <div className="flex w-full items-start justify-between">
            <h3 className="font-semibold text-[#394355] text-sm [font-family:'Raleway',Helvetica] tracking-[0]">
              Комплектация:
            </h3>
            {/* ✅ Added onClick to toggle details */}
            <Button
              variant="ghost"
              onClick={toggleConfigDetails}
              className="flex items-center gap-1 h-auto p-0"
            >
              <span className="font-medium text-[#394355] text-xs [font-family:'Raleway',Helvetica] tracking-[0]">
                Смотреть разницу
              </span>
              <ChevronDownIcon className={`h-3 w-3 transition-transform ${showConfigDetails ? "rotate-180" : ""}`} />
            </Button>
          </div>

          <div className="flex flex-col items-stretch gap-3">
            {/* ✅ Added onClick to each config button */}
            {configOptions.map((option, index) => (
              <Button
                key={index}
                onClick={() => handleConfigClick(option.name)}
                variant={activeConfig === option.name ? "default" : "outline"}
                className={`w-full h-12 px-4 py-2 rounded-full font-medium text-sm transition-all
                  ${activeConfig === option.name
                    ? "bg-[linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] shadow-md text-white border-0"
                    : "bg-white border border-[#cbd5e1] text-[#394355] hover:bg-gray-50"
                  }`}
              >
                {option.name}
              </Button>
            ))}
          </div>

          {/* ✅ Config details section */}
          {showConfigDetails && activeConfig && (
            <div className="mt-4 p-3 bg-white rounded-lg border border-gray-200 shadow-sm">
              <h4 className="font-bold text-[#394355] text-base mb-2">{configDetails[activeConfig as keyof typeof configDetails].title}</h4>
              <ul className="list-disc list-inside space-y-1 text-[#394355] text-xs">
                {configDetails[activeConfig as keyof typeof configDetails].items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p className="mt-2 text-xs text-[#6b7280] italic">
                {configDetails[activeConfig as keyof typeof configDetails].note}
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Price section */}
      <div className="flex flex-col gap-3">
        <h3 className="font-semibold text-[#394355] text-lg [font-family:'Raleway',Helvetica] tracking-[0]">
          Цена:
        </h3>
        <div className="flex flex-wrap items-center gap-2">
          <div className="font-bold text-[#394355] text-2xl [font-family:'Raleway',Helvetica] tracking-[0]">
            от 639 100 ₽
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-medium text-[#4f5d80d9] text-sm line-through [font-family:'Raleway',Helvetica] tracking-[0]">
              913 000 ₽
            </span>
            <Badge className="px-2 py-0.5 rounded-md text-xs bg-[linear-gradient(180deg,rgba(255,115,115,1)_0%,rgba(255,111,111,1)_37%,rgba(236,60,60,1)_100%)]">
              <span className="font-bold text-white">
                -30%
              </span>
            </Badge>
          </div>
        </div>
      </div>

      {/* Additional info */}
      <div className="flex items-start justify-between w-full">
        <div className="flex flex-col gap-1">
          <h4 className="font-semibold text-[#394355] text-xs [font-family:'Raleway',Helvetica] tracking-[0]">
            Нашли дешевле?
          </h4>
          <p className="font-medium text-[#394355] text-xs [font-family:'Raleway',Helvetica] tracking-[0]">
            Сделаем скидку
          </p>
        </div>

        <Button
          variant="ghost"
          className="flex items-center gap-1 h-auto p-0"
        >
          <span className="font-medium text-[#394355] text-xs [font-family:'Raleway',Helvetica] tracking-[0]">
            Задать вопрос
          </span>
          <div className="w-3 h-3 bg-[url(/forinfo.png)] bg-contain bg-no-repeat" />
        </Button>
      </div>

     {/* Product details */}
<Card className="w-full bg-white/90 backdrop-blur-sm rounded-[16px] border border-white/50 shadow-sm">
  <CardContent className="flex flex-col items-start gap-4 p-4">
    {/* الصف الأول: Гарантия + Доставка */}
    <div className="flex items-start justify-between w-full">
      {/* Гарантия */}
      <div className="flex flex-col gap-1 w-1/2">
        <h3 className="font-semibold text-[#232c42] text-sm">
          {productDetails.warranty.title}
        </h3>
        <p className="font-bold text-[#232c42] text-xl">
          {productDetails.warranty.value}
        </p>
      </div>

      {/* Доставка */}
      <div className="flex flex-col gap-1 w-1/2">
        <h3 className="font-semibold text-[#232c42] text-sm">
          {productDetails.delivery.title}
        </h3>
        <p className="font-normal text-[#232c42] text-xs whitespace-pre-line leading-tight">
          {productDetails.delivery.description}
        </p>
      </div>
    </div>

    <div className="w-full h-px bg-gray-200 my-2" />

    {/* الصف الثاني: Сертификации + Made in Russia */}
    <div className="flex items-start justify-between w-full">
      {/* Сертификации */}
      <div className="flex flex-col gap-1 w-1/2">
        <h3 className="font-semibold text-[#232c42] text-sm">
          {productDetails.certifications.title}
        </h3>
        <Image
          src={productDetails.certifications.imageSrc}
          alt="Certification logos"
          width={310}
          height={40}
          className="w-full h-auto max-h-10  object-contain"
          quality={80}
        />
      </div>
{/* Made in Russia */}
<div className="flex flex-col gap-2 w-1/2">
  <div className="flex flex-col items-start">
    <p className="font-normal text-[#232c42] text-xs leading-relaxed pl-4"> {/* 👈 أضف pl-4 هنا */}
      {productDetails.madeInRussia.description}
    </p>
    <Image
      src={productDetails.madeInRussia.imageSrc}
      alt="Made in Russia logo"
      width={64}
      height={56}
      className="w-10 h-auto object-contain mt-[-20] self-end"
      quality={80}
    />
  </div>
</div>
    </div>
  </CardContent>
</Card>

      {/* Contact info */}
      <Card className="w-full border-0 bg-transparent">
        <CardContent className="flex flex-col items-start gap-4 p-2">
          <h3 className="font-semibold text-[#394355] text-sm [font-family:'Raleway',Helvetica]">
            Или свяжитесь по контактам
          </h3>

          <div className="flex flex-col items-start gap-4 w-full pl-4">
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a href="https://t.me/+79770893996?start=14594990928" target="_blank" rel="noopener noreferrer" className="block">
                <Image
                  src="/group.png"
                  alt="Telegram icon"
                  width={24}
                  height={20}
                  className="w-6 h-auto"
                />
              </a>
              <a href="https://api.whatsapp.com/send/?phone=79805109568" target="_blank" rel="noopener noreferrer" className="block">
                <Image
                  src="/group-1.png"
                  alt="WhatsApp icon"
                  width={24}
                  height={24}
                  className="w-6 h-auto"
                />
              </a>
            </div>

            {/* Phone Numbers */}
            <div className="flex flex-col items-start gap-2 w-full">
              {contactInfo
                .filter((contact) => contact.phone)
                .map((contact, index) => (
                  <div key={index} className="flex items-center gap-3 w-full">
                    <div className="flex w-6 h-6 items-center justify-center rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec]">
                      <Image
                        src={`/contact1-group-${index === 0 ? 9 : 10}.png`}
                        alt="Phone icon"
                        width={12}
                        height={12}
                        className="object-contain"
                      />
                    </div>
                    <a
                      href={`tel:${contact.phone.replace(/\s|\(|\)|-/g, '')}`}
                      className="text-sm text-[#394355] font-medium hover:underline flex-1"
                    >
                      {contact.phone}
                    </a>
                  </div>
                ))}
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 w-full">
              <div className="flex w-6 h-6 items-center justify-center rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec]">
                <Image src="/contact1-group-11.png" alt="Email icon" width={14} height={10} className="object-contain" />
              </div>
              <div className="flex items-center gap-2 flex-1">
                <a
                  href="mailto:info@mobile-tent.ru"
                  className="text-sm text-[#232c42] font-medium hover:underline"
                >
                  info@mobile-tent.ru
                </a>
                <Image src="/contact1-group-12.png" alt="Copy icon" width={14} height={14} className="cursor-pointer" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CTA Button */}
<div className="flex flex-col w-full items-center gap-3 pt-4">
  <Button 
    className="w-full h-14 rounded-2xl text-base font-semibold shadow-lg 
               bg-[linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] 
               hover:shadow-xl transition-shadow text-white"   // ✅ added text-white
    onClick={() => setIsPopupOpen(true)}
  >
    Получить КП с ценой под ваши размеры
  </Button>
</div>

      {/* Popup */}
      {isPopupOpen && (
        <div 
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm p-4"
          onClick={closePopup}
        >
          <div onClick={(e) => e.stopPropagation()} className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            <Consultaionfor3d onClose={closePopup} />
          </div>
        </div>
      )}
    </section>
  );
};