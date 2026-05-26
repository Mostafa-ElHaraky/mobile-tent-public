'use client';

import { useState } from 'react';
import { Button } from "../../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../../components/ui/card";
import { Separator } from "../../../../../../components/ui/separator";
import { ReactElement } from 'react';
import Image from 'next/image';

// Props interface
interface TestimonialsSectionProps {
  contactData?: {
    office_address?: string;
    office_hours?: string;
    office_appointment?: string;
    production_address?: string;
    production_hours?: string;
    production_appointment?: string;
    phone1?: string;
    phone2?: string;
    email?: string;
    telegram?: string;
    whatsapp?: string;
    office_map_url?: string;
  };
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ contactData }): ReactElement => {
  // 👉 Images for the carousel (ensure these paths exist in /public)
  const carouselImages = [
    '/rectangle-65.webp',
    '/rectangle-66.webp',
    '/collect4.webp', // add your 3rd image here (e.g. "Металлическая конструкция")
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () =>
    setCurrentIndex((idx) => (idx - 1 + carouselImages.length) % carouselImages.length);
  const nextSlide = () =>
    setCurrentIndex((idx) => (idx + 1) % carouselImages.length);

  // Default values
  const defaultData = {
    office_address: "Московская область, г. Красногорск, ул. Молодежная. д. 4",
    office_hours: "Пн-Пт с 09:00 -19:00",
    office_appointment: "По предварительной записи",
    production_address: "г. Калуга",
    production_hours: "",
    production_appointment: "",
    phone1: "+7 (499) 113-36-60",
    phone2: "8 (800) 302-46-31",
    email: "info@mobile-tent.ru",
    telegram: "https://t.me/+79770893996?start=14594990928",
    whatsapp: "https://api.whatsapp.com/send/?phone=79805109568",
    office_map_url: "https://yandex.ru/maps/?from=api-maps&text=Красногорск%2C%20Молодежная%2C%204"
  };

  // Merge CMS data with defaults
  const contacts = {
    office_address: contactData?.office_address || defaultData.office_address,
    office_hours: contactData?.office_hours || defaultData.office_hours,
    office_appointment: contactData?.office_appointment || defaultData.office_appointment,
    production_address: contactData?.production_address || defaultData.production_address,
    production_hours: contactData?.production_hours || defaultData.production_hours,
    production_appointment: contactData?.production_appointment || defaultData.production_appointment,
    phone1: contactData?.phone1 || defaultData.phone1,
    phone2: contactData?.phone2 || defaultData.phone2,
    email: contactData?.email || defaultData.email,
    telegram: contactData?.telegram || defaultData.telegram,
    whatsapp: contactData?.whatsapp || defaultData.whatsapp,
    office_map_url: contactData?.office_map_url || defaultData.office_map_url
  };

  // Helper function to format Telegram URL
  const formatTelegramUrl = (telegramData: string) => {
    if (telegramData.startsWith('http')) return telegramData;
    if (telegramData.startsWith('@')) {
      return `https://t.me/${telegramData.substring(1)}`;
    }
    if (/^[a-zA-Z0-9_]+$/.test(telegramData)) {
      return `https://t.me/${telegramData}`;
    }
    return telegramData;
  };

  // Helper function to format MAX URL (renamed from WhatsApp)
  const formatMAXUrl = (maxData: string) => {
    return maxData; // MAX URL is already formatted
  };

  const telegramUrl = formatTelegramUrl(contacts.telegram);
  const maxUrl = "https://max.ru/u/f9LHodD0cOK_6DAtIeOn3T51Xpzrkg2i4RB2ZEjtVfXOwvURhiW6gtGMLrA";

  // Contact information data
  const contactInfo = [
    {
      icon: "/element8-7.webp",
      text: contacts.office_address,
      linkText: "Построить маршрут на Яндекс картах",
      linkUrl: contacts.office_map_url,
      hasLink: true,
    },
    {
      icon: "/element8-8.webp",
      text: contacts.office_hours,
      subText: contacts.office_appointment,
      hasLink: false,
    },
    {
      icon: "/element8-11.webp",
      text: contacts.phone1,
      phoneLink: `tel:${contacts.phone1.replace(/\D/g, '')}`,
      hasLink: false,
    },
    {
      icon: "/element8-12.webp",
      text: contacts.phone2,
      phoneLink: `tel:${contacts.phone2.replace(/\D/g, '')}`,
      hasLink: false,
    },
    {
      icon: "/element8-13.webp",
      text: contacts.email,
      mailLink: `mailto:${contacts.email}`,
      hasClipboard: true,
    },
  ];

  // Benefits data
  const benefits = [
    {
      icon: "/element8-2.webp",
      title: "Посмотрите и потрогаете ткань вживую",
      description:
        "Оцените состояние металла каркаса на реальных объектах после нескольких лет воздействия осадков",
    },
    {
      icon: "/element8-3.webp",
      title: "Покажем последние тренды в дизайне и мировые наработки",
      description: "и технологии производства",
    },
    {
      icon: "/element8-4.webp",
      title: "Расскажем, как можно применить",
      description: "все самое современное для долгого срока службы",
    },
  ];

  return (
    <>
      {/* Desktop Version */}
      <section className="hidden md:block w-full py-16 px-12 relative top-[55px]">
        <div className="max-w-[1466px] mx-auto relative">
          {/* Heading */}
          <div className="font-normal text-4xl leading-normal font-['Raleway',Helvetica] tracking-[0] mb-10">
            <span className="font-semibold text-[#232c42]">
              Весь комплекс работ делаем
              <br />
              на своем производстве{" "}
            </span>
            <span className="font-bold text-[#527dc5]">в г. Калуга</span>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex flex-col gap-9 w-full md:w-1/2">
              {/* Visit invitation */}
              <div className="flex items-center gap-4 p-3 bg-[#f2f4f7] rounded-[10px]">
                <div className="relative w-[35px] h-[35px]">
                  <Image
                    className="absolute w-[30px] h-[29px] top-[3px] left-[3px]"
                    alt="Invitation icon"
                    src="/element8-1.webp"
                    width={30}
                    height={29}
                    loading="lazy"
                  />
                </div>
                <div className="font-medium text-[#4f5d80] text-lg leading-6 font-['Raleway',Helvetica] tracking-[0]">
                  Приезжайте на знакомство-экскурсию
                </div>
              </div>

              {/* Description */}
              <div className="font-normal text-[#394355] text-lg leading-6 font-['Raleway',Helvetica] tracking-[0]">
                Увидите разницу китайской и французской ткани
                <br />
                на примере 2 конструкций стоящих уже несколько лет на улице
              </div>

              {/* Benefits card */}
              <Card className="w-full max-w-[556px] rounded-2xl overflow-hidden shadow-[0px_24px_38px_#161d2414] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.7)_100%)] border-0 ">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-6">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="relative w-6 h-6">
                          <Image
                            className="absolute w-6 h-[17px] top-[3px] left-0"
                            alt="Benefit icon"
                            src={benefit.icon}
                            width={24}
                            height={17}
                           
                            loading="lazy"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-center gap-2">
                          <div className="font-semibold text-[#4f5d80] text-sm leading-5 font-['Raleway',Helvetica] tracking-[0]">
                            {benefit.title}
                          </div>
                          <div className="font-normal text-[#4f5d80] text-sm leading-5 font-['Raleway',Helvetica] tracking-[0]">
                            {benefit.description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="w-full md:w-1/2">
              {/* Image carousel */}
              <div className="relative flex mb-8">
                {/* Left image (current) */}
                <div className="relative w-[360px] h-[310px]">
                  <Image
                    alt="Factory image"
                    src={carouselImages[currentIndex]}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                  <Button
                    onClick={prevSlide}
                    variant="outline"
                    className="absolute top-1/2 left-[-28px] transform -translate-y-1/2 w-14 h-14 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 flex items-center justify-center border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
                  >
                    <div className="relative w-6 h-6 rotate-180">
                      <Image
                        className="absolute w-3.5 h-6 top-0 left-[5px] -rotate-180"
                        alt="Previous"
                        src="/element8-6.webp"
                        width={14}
                        height={24}
                        loading="lazy"
                      />
                    </div>
                  </Button>
                </div>

                {/* Right image (next) */}
                <div
                  className="relative w-[328px] h-[310px] bg-[url(/rectangle-66.webp)] bg-cover bg-[50%_50%]"
                  style={{
                    backgroundImage: `url(${carouselImages[(currentIndex + 1) % carouselImages.length]})`,
                  }}
                >
                  <Button
                    onClick={nextSlide}
                    variant="outline"
                    className="absolute top-1/2 left-[299px] transform -translate-y-1/2 w-14 h-14 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 flex items-center justify-center border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
                  >
                    <div className="relative w-6 h-6">
                      <Image
                        className="absolute w-3.5 h-6 top-0 left-[5px]"
                        alt="Next"
                        src="/element8-5.webp"
                        width={14}
                        height={24}
                        loading="lazy"
                      />
                    </div>
                  </Button>
                </div>
              </div>

              {/* Contact information card */}
              <Card className="w-full max-w-[660px] bg-white rounded-[20px] shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] border-0 ">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="flex w-[25px] h-[25px] items-center justify-center rounded-[50px] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
                          <div className="relative w-[21px] h-[21px]">
                            <Image
                              className="absolute w-3 h-3 top-1 left-1"
                              alt="Contact icon"
                              src={info.icon}
                              width={12}
                              height={12}
                             
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <div className="font-normal text-[#394355] text-sm leading-normal font-['Raleway',Helvetica] tracking-[0]">
                            {info.hasLink ? (
                              <>
                                <div>{info.text}</div>
                                <a
                                  href={info.linkUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="font-semibold text-[#527dc5] text-xs leading-normal underline font-['Raleway',Helvetica] tracking-[0]"
                                >
                                  {info.linkText}
                                </a>
                              </>
                            ) : info.phoneLink ? (
                              <a
                                href={info.phoneLink}
                                className="inline-block text-[#394355] text-sm no-underline"
                              >
                                {info.text}
                              </a>
                            ) : info.mailLink ? (
                              <a
                                href={info.mailLink}
                                className="inline-flex items-center gap-1 no-underline"
                              >
                                <span>{info.text}</span>
                                {info.hasClipboard && (
                                  <Image
                                    className="inline-block ml-2 w-4 h-4"
                                    alt="Copy"
                                    src="/element8-14.webp"
                                    width={16}
                                    height={16}
                                    loading="lazy"
                                  />
                                )}
                              </a>
                            ) : (
                              <>
                                {info.text}
                                {info.hasClipboard && (
                                  <Image
                                    className="inline-block ml-2 w-4 h-4"
                                    alt="Copy"
                                    src="/element8-14.webp"
                                    width={16}
                                    height={16}
                                    loading="lazy"
                                  />
                                )}
                              </>
                            )}
                          </div>
                          {info.subText && (
                            <div className="font-semibold text-[#232c42] text-xs leading-normal font-['Raleway',Helvetica] tracking-[0]">
                              {info.subText}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Separator className="my-4" />

                  <div className="flex items-center gap-4 mt-2">
                    <a
                      href={telegramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        className="w-6 h-5"
                        alt="Telegram"
                        src="/element8-9.webp"
                        width={24}
                        height={20}
                        loading="lazy"
                      />
                    </a>
                    <a
                      href={maxUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        xmlSpace="preserve" 
                        viewBox="0 0 1000 1000"
                        width={23}
                        height={23}
                        className="w-[23px] h-[23px]"
                      >
                        <defs>
                          <linearGradient id="b">
                            <stop offset="0" stopColor="#00f"/>
                            <stop offset="1" stopOpacity="0"/>
                            <stop offset="1" stopOpacity="0"/>
                          </linearGradient>
                          <linearGradient id="a">
                            <stop offset="0" stopColor="#4cf"/>
                            <stop offset=".662" stopColor="#53e"/>
                            <stop offset="1" stopColor="#93d"/>
                          </linearGradient>
                          <linearGradient id="c" x1="117.847" x2="1000" y1="760.536" y2="500" gradientUnits="userSpaceOnUse" href="#a"/>
                          <radialGradient id="d" cx="-87.392" cy="1166.116" r="500" fx="-87.392" fy="1166.116" gradientTransform="rotate(51.356 1551.478 559.3)scale(2.42703433 1)" gradientUnits="userSpaceOnUse" href="#b"/>
                        </defs>
                        <rect width="1000" height="1000" fill="url(#c)" ry="249.681"/>
                        <rect width="1000" height="1000" fill="url(#d)" ry="249.681"/>
                        <path fill="#fff" fillRule="evenodd" d="M508.211 878.328c-75.007 0-109.864-10.95-170.453-54.75-38.325 49.275-159.686 87.783-164.979 21.9 0-49.456-10.95-91.248-23.36-136.873-14.782-56.21-31.572-118.807-31.572-209.508 0-216.626 177.754-379.597 388.357-379.597 210.785 0 375.947 171.001 375.947 381.604.707 207.346-166.595 376.118-373.94 377.224m3.103-571.585c-102.564-5.292-182.499 65.7-200.201 177.024-14.6 92.162 11.315 204.398 33.397 210.238 10.585 2.555 37.23-18.98 53.837-35.587a189.8 189.8 0 0 0 92.71 33.032c106.273 5.112 197.08-75.794 204.215-181.95 4.154-106.382-77.67-196.486-183.958-202.574Z" clipRule="evenodd"/>
                      </svg>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Version */}
      <section className="md:hidden w-full py-8 px-4 relative top-[55px] mb-20">
        <div className="mx-auto relative">
          {/* Heading */}
          <div className="font-normal text-2xl leading-normal font-['Raleway',Helvetica] tracking-[0] mb-6 text-center">
            <span className="font-semibold text-[#232c42]">
              Весь комплекс работ делаем на своем производстве{" "}
            </span>
            <span className="font-bold text-[#527dc5]">в г. Калуга</span>
          </div>

          <div className="flex flex-col gap-6">
            {/* Visit invitation */}
            <div className="flex items-center gap-3 p-3 bg-[#f2f4f7] rounded-[10px]">
              <div className="relative w-[30px] h-[30px]">
                <Image
                  className="absolute w-[25px] h-[24px] top-[3px] left-[3px]"
                  alt="Invitation icon"
                  src="/element8-1.webp"
                  width={25}
                  height={24}
                  loading="lazy"
                />
              </div>
              <div className="font-medium text-[#4f5d80] text-base leading-5 font-['Raleway',Helvetica] tracking-[0]">
                Приезжайте на знакомство-экскурсию
              </div>
            </div>

            {/* Description */}
            <div className="font-normal text-[#394355] text-base leading-5 font-['Raleway',Helvetica] tracking-[0] text-center">
              Увидите разницу китайской и французской ткани на примере 2 конструкций стоящих уже несколько лет на улице
            </div>

            {/* Benefits card */}
            <Card className="w-full rounded-xl overflow-hidden shadow-[0px_24px_38px_#161d2414] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.7)_100%)] border-0">
              <CardContent className="p-4">
                <div className="flex flex-col gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="relative w-5 h-5">
                        <Image
                          className="absolute w-5 h-[14px] top-[3px] left-0"
                          alt="Benefit icon"
                          src={benefit.icon}
                          width={20}
                          height={14}
                         
                          loading="lazy"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-center gap-1">
                        <div className="font-semibold text-[#4f5d80] text-xs leading-4 font-['Raleway',Helvetica] tracking-[0]">
                          {benefit.title}
                        </div>
                        <div className="font-normal text-[#4f5d80] text-xs leading-4 font-['Raleway',Helvetica] tracking-[0]">
                          {benefit.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Image carousel (mobile) */}
            <div className="relative w-full h-[250px] mb-4">
              <Image
                alt="Factory image"
                src={carouselImages[currentIndex]}
                fill
                className="object-cover rounded-lg"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                <Button
                  onClick={prevSlide}
                  variant="outline"
                  className="w-12 h-12 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 flex items-center justify-center border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
                >
                  <div className="relative w-5 h-5 rotate-180">
                    <Image
                      className="absolute w-3 h-5 top-0 left-[4px] -rotate-180"
                      alt="Previous"
                      src="/element8-6.webp"
                      width={12}
                      height={20}
                      loading="lazy"
                    />
                  </div>
                </Button>
                <Button
                  onClick={nextSlide}
                  variant="outline"
                  className="w-12 h-12 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 flex items-center justify-center border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
                >
                  <div className="relative w-5 h-5">
                    <Image
                      className="absolute w-3 h-5 top-0 left-[4px]"
                      alt="Next"
                      src="/element8-5.webp"
                      width={12}
                      height={20}
                      loading="lazy"
                    />
                  </div>
                </Button>
              </div>
            </div>

            {/* Contact information card */}
            <Card className="w-full bg-white rounded-xl shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] border-0">
              <CardContent className="p-4">
                <div className="grid grid-cols-1 gap-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex w-[22px] h-[22px] items-center justify-center rounded-[50px] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
                        <div className="relative w-[18px] h-[18px]">
                          <Image
                            className="absolute w-2.5 h-2.5 top-1 left-1"
                            alt="Contact icon"
                            src={info.icon}
                            width={10}
                            height={10}
                           
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <div className="font-normal text-[#394355] text-xs leading-normal font-['Raleway',Helvetica] tracking-[0]">
                          {info.hasLink ? (
                            <>
                              <div>{info.text}</div>
                              <a
                                href={info.linkUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-[#527dc5] text-xs leading-normal underline font-['Raleway',Helvetica] tracking-[0]"
                              >
                                {info.linkText}
                              </a>
                            </>
                          ) : info.phoneLink ? (
                            <a
                              href={info.phoneLink}
                              className="inline-block text-[#394355] text-xs no-underline"
                            >
                              {info.text}
                            </a>
                          ) : info.mailLink ? (
                            <a
                              href={info.mailLink}
                              className="inline-flex items-center gap-1 no-underline"
                            >
                              <span>{info.text}</span>
                              {info.hasClipboard && (
                                <Image
                                  className="inline-block ml-1 w-3 h-3"
                                  alt="Copy"
                                  src="/element8-14.webp"
                                  width={12}
                                  height={12}
                                  loading="lazy"
                                />
                              )}
                            </a>
                          ) : (
                            <>
                              {info.text}
                              {info.hasClipboard && (
                                <Image
                                  className="inline-block ml-1 w-3 h-3"
                                  alt="Copy"
                                  src="/element8-14.webp"
                                  width={12}
                                  height={12}
                                  loading="lazy"
                                />
                              )}
                            </>
                          )}
                        </div>
                        {info.subText && (
                          <div className="font-semibold text-[#232c42] text-xs leading-normal font-['Raleway',Helvetica] tracking-[0]">
                            {info.subText}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="my-3" />

                <div className="flex items-center gap-4 mt-2">
                  <a
                    href={telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className="w-5 h-4"
                      alt="Telegram"
                      src="/element8-9.webp"
                      width={20}
                      height={16}
                      loading="lazy"
                    />
                  </a>
                  <a
                    href={maxUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      xmlSpace="preserve" 
                      viewBox="0 0 1000 1000"
                      width={20}
                      height={20}
                      className="w-[20px] h-[20px]"
                    >
                      <defs>
                        <linearGradient id="b">
                          <stop offset="0" stopColor="#00f"/>
                          <stop offset="1" stopOpacity="0"/>
                          <stop offset="1" stopOpacity="0"/>
                        </linearGradient>
                        <linearGradient id="a">
                          <stop offset="0" stopColor="#4cf"/>
                          <stop offset=".662" stopColor="#53e"/>
                          <stop offset="1" stopColor="#93d"/>
                        </linearGradient>
                        <linearGradient id="c" x1="117.847" x2="1000" y1="760.536" y2="500" gradientUnits="userSpaceOnUse" href="#a"/>
                        <radialGradient id="d" cx="-87.392" cy="1166.116" r="500" fx="-87.392" fy="1166.116" gradientTransform="rotate(51.356 1551.478 559.3)scale(2.42703433 1)" gradientUnits="userSpaceOnUse" href="#b"/>
                      </defs>
                      <rect width="1000" height="1000" fill="url(#c)" ry="249.681"/>
                      <rect width="1000" height="1000" fill="url(#d)" ry="249.681"/>
                      <path fill="#fff" fillRule="evenodd" d="M508.211 878.328c-75.007 0-109.864-10.95-170.453-54.75-38.325 49.275-159.686 87.783-164.979 21.9 0-49.456-10.95-91.248-23.36-136.873-14.782-56.21-31.572-118.807-31.572-209.508 0-216.626 177.754-379.597 388.357-379.597 210.785 0 375.947 171.001 375.947 381.604.707 207.346-166.595 376.118-373.94 377.224m3.103-571.585c-102.564-5.292-182.499 65.7-200.201 177.024-14.6 92.162 11.315 204.398 33.397 210.238 10.585 2.555 37.23-18.98 53.837-35.587a189.8 189.8 0 0 0 92.71 33.032c106.273 5.112 197.08-75.794 204.215-181.95 4.154-106.382-77.67-196.486-183.958-202.574Z" clipRule="evenodd"/>
                    </svg>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};