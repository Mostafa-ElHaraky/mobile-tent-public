'use client';

import { useState } from 'react';
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Separator } from "../../../components/ui/separator";
import { ReactElement } from 'react';
import Image from 'next/image';

// Define the contacts interface
interface ContactInfo {
  phone1?: string;
  phone2?: string;
  email?: string;
  telegram?: string;
  whatsapp?: string;
  office?: {
    name?: string;
    address?: string;
    map_url?: string;
    hours?: string;
    appointment?: string;
  };
  production?: {
    name?: string;
    address?: string;
    map_url?: string;
    hours?: string;
    appointment?: string;
  };
}

interface AboutUsSectionProps {
  contacts?: ContactInfo;
}

export const AboutUsSection = ({ contacts }: AboutUsSectionProps): ReactElement => {
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

  // Contact information data - now dynamic from props
  const contactInfo = [
    {
      icon: "/element8-7.webp",
      text: contacts?.office?.address || "Московская область, г. Красногорск, ул. Молодежная. д. 4",
      linkText: "Построить маршрут на Яндекс картах",
      linkUrl: contacts?.office?.map_url || "https://yandex.ru/maps/?from=api-maps&text=Красногорск%2C%20Молодежная%2C%204",
      hasLink: true,
    },
    {
      icon: "/element8-8.webp",
      text: contacts?.office?.hours || "Пн-Пт с 09:00 -19:00",
      subText: contacts?.office?.appointment || "По предварительной записи",
      hasLink: false,
    },
    {
      icon: "/element8-11.webp",
      text: contacts?.phone1 || "+7 (499) 113-36-60",
      phoneLink: `tel:${contacts?.phone1 ? contacts.phone1.replace(/\s|\(|\)|-/g, '') : '+74991133660'}`,
      hasLink: false,
    },
    {
      icon: "/element8-12.webp",
      text: contacts?.phone2 || "+7 (495) 487-43-53",
      phoneLink: `tel:${contacts?.phone2 ? contacts.phone2.replace(/\s|\(|\)|-/g, '') : '88003024631'}`,
      hasLink: false,
    },
    {
      icon: "/element8-13.webp",
      text: contacts?.email || "info@mobile-tent.ru",
      mailLink: `mailto:${contacts?.email || "info@mobile-tent.ru"}`,
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
      <section className="hidden desktop:block w-full py-16 px-12 relative top-[55px]">
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

                {/* Right image (next) — keep your original classes; override bg via inline style */}
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
                      href={contacts?.telegram || "https://t.me/+79770893996?start=14594990928"}
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
                      href="https://max.ru/u/f9LHodD0cOK_6DAtIeOn3T51Xpzrkg2i4RB2ZEjtVfXOwvURhiW6gtGMLrA"
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

      {/* Mobile/Tablet Version */}
      <section className="block desktop:hidden w-full py-12 px-4 relative top-[55px] mb-20 max-w-4xl mx-auto">
        <div className="mx-auto relative">
          {/* Heading */}
          <div className="font-normal text-2xl md:text-4xl leading-tight font-['Raleway',Helvetica] tracking-[0] mb-10 text-center max-w-3xl mx-auto">
            <span className="font-semibold text-[#232c42]">
              Весь комплекс работ делаем на своем производстве{" "}
            </span>
            <span className="font-bold text-[#527dc5]">в г. Калуга</span>
          </div>

          <div className="flex flex-col gap-10 md:items-center">
            {/* Visit invitation */}
            <div className="flex items-center justify-center gap-4 p-4 bg-[#f2f4f7] rounded-[15px] md:w-fit w-full">
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
              <div className="font-medium text-[#4f5d80] text-base md:text-lg leading-5 font-['Raleway',Helvetica] tracking-[0]">
                Приезжайте на знакомство-экскурсию
              </div>
            </div>

            {/* Description */}
            <div className="font-normal text-[#394355] text-base md:text-xl md:leading-8 font-['Raleway',Helvetica] tracking-[0] text-center max-w-2xl opacity-90">
              Увидите разницу китайской и французской ткани на примере 2 конструкций стоящих уже несколько лет на улице
            </div>

            {/* Benefits card */}
            <Card className="w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-[0px_24px_48px_rgba(22,29,36,0.12)] backdrop-blur-[79px] backdrop-brightness-[100%] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.7)_100%)] border-0">
              <CardContent className="p-6 md:p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="relative w-6 h-6 flex-shrink-0 mt-1">
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
                        <div className="font-semibold text-[#4f5d80] text-sm md:text-base leading-snug font-['Raleway',Helvetica] tracking-[0]">
                          {benefit.title}
                        </div>
                        <div className="font-normal text-[#4f5d80] text-xs md:text-sm leading-relaxed font-['Raleway',Helvetica] tracking-[0] opacity-80">
                          {benefit.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Image carousel (mobile/tablet) */}
            <div className="relative w-full max-w-3xl h-[280px] md:h-[480px] mb-6 mx-auto group">
              <Image
                alt="Factory image"
                src={carouselImages[currentIndex]}
                fill
                loading="lazy"
                className="object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl pointer-events-none" />
              
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-6 z-20">
                <Button
                  onClick={prevSlide}
                  variant="outline"
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full shadow-2xl p-0 flex items-center justify-center border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC] hover:scale-110 transition-transform"
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
                <Button
                  onClick={nextSlide}
                  variant="outline"
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full shadow-2xl p-0 flex items-center justify-center border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC] hover:scale-110 transition-transform"
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
            <Card className="w-full max-w-3xl mx-auto bg-white rounded-2xl shadow-[0px_24px_38px_rgba(0,0,0,0.06)] backdrop-blur-[79px] border-0">
              <CardContent className="p-6 md:p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-10 md:gap-y-8">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="flex w-[28px] h-[28px] md:w-[32px] md:h-[32px] items-center justify-center rounded-full [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] flex-shrink-0">
                        <div className="relative w-[22px] h-[22px]">
                          <Image
                            className="absolute w-3.5 h-3.5 top-1 left-1"
                            alt="Contact icon"
                            src={info.icon}
                            width={14}
                            height={14}
                           
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <div className="font-normal text-[#394355] text-sm md:text-base leading-tight font-['Raleway',Helvetica] tracking-[0]">
                          {info.hasLink ? (
                            <>
                              <div className="mb-1">{info.text}</div>
                              <a
                                href={info.linkUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-[#527dc5] text-xs md:text-sm underline hover:text-[#3C6CEC] transition-colors"
                              >
                                {info.linkText}
                              </a>
                            </>
                          ) : info.phoneLink ? (
                            <a
                              href={info.phoneLink}
                              className="inline-block text-[#394355] text-sm md:text-lg font-medium hover:text-[#527dc5] transition-colors"
                            >
                              {info.text}
                            </a>
                          ) : info.mailLink ? (
                            <a
                              href={info.mailLink}
                              className="inline-flex items-center gap-2 hover:text-[#527dc5] transition-colors"
                            >
                              <span className="text-sm md:text-base">{info.text}</span>
                              {info.hasClipboard && (
                                <Image
                                  className="w-4 h-4 opacity-60"
                                  alt="Copy"
                                  src="/element8-14.webp"
                                  width={16}
                                  height={16}
                                  loading="lazy"
                                />
                              )}
                            </a>
                          ) : (
                            <div className="flex items-center gap-2 text-sm md:text-base">
                              {info.text}
                              {info.hasClipboard && (
                                <Image
                                  className="w-4 h-4 opacity-60"
                                  alt="Copy"
                                  src="/element8-14.webp"
                                  width={16}
                                  height={16}
                                  loading="lazy"
                                />
                              )}
                            </div>
                          )}
                        </div>
                        {info.subText && (
                          <div className="font-semibold text-[#232c42] text-xs md:text-sm mt-1 opacity-80">
                            {info.subText}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="my-8 md:my-10 bg-gray-100" />

                <div className="flex items-center justify-center gap-8">
                  <a
                    href={contacts?.telegram || "https://t.me/+79770893996?start=14594990928"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                  >
                    <Image
                      className="w-6 h-5 md:w-10 md:h-8"
                      alt="Telegram"
                      src="/element8-9.webp"
                      width={24}
                      height={20}
                      loading="lazy"
                    />
                  </a>
                  <a
                    href="https://max.ru/u/f9LHodD0cOK_6DAtIeOn3T51Xpzrkg2i4RB2ZEjtVfXOwvURhiW6gtGMLrA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-[#4c9aff] to-[#6c4cff] rounded-full hover:shadow-lg transition-all"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 1000 1000"
                      width="24"
                      height="24"
                      className="w-6 h-6 md:w-8 md:h-8"
                    >
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