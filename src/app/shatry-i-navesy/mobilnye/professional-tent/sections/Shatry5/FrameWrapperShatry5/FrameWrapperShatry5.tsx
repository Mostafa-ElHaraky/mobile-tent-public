'use client';

import { PlayIcon } from "lucide-react";
import { Card, CardContent } from "../../../../../../../components/ui/card";
import { ReactElement } from 'react';
import Image from 'next/image';

export const FrameWrapperShatry5 = (): ReactElement => {
  // Feature data for the checkmark item
  const featureData = [
    {
      text: "Не позволит влаге и грязи распространятся по полотну",
      icon: "/DOCgroup.webp",
    },
  ];

  // Button card data
  const buttonCards = [
    {
      icon: (
        <div className="relative w-[35px] h-[35px] top-2 left-2 bg-[url(/DOCgroup-1.webp)] bg-[100%_100%]" />
      ),
      text: "Как работает покрытие Low wick",
    },
    {
      icon: (
        <div className="relative w-[47px] h-[33px] top-[9px] left-0.5">
          <div className="relative h-[33px]">
            <div className="absolute w-[23px] h-[23px] top-[5px] left-3 bg-white rounded-[11.5px]" />
            <Image
              className="absolute top-0 left-0"
              alt="Vector"
              src="/DOCvector.svg"
              width={47}
              height={33}
            />
          </div>
        </div>
      ),
      text: "Видео о \n технологии",
    },
  ];

  // Material images
  const materialImages = [
    { src: "/DOCrectangle-44.webp", alt: "Rectangle" },
    { src: "/DOCrectangle-45.webp", alt: "Rectangle" },
    { src: "/DOCrectangle-46.webp", alt: "Rectangle" },
  ];

  // Fabric issues data
  const fabricIssues = [
    {
      icon: "/FORgroup-5.webp",
      title: "Будет постоянно пахнуть пластмассой",
      description: "при нагреве на солнце",
    },
    {
      icon: "/FORgroup-6.webp",
      title: "Покроется плесенью",
      description: "и начнутся процессы гниения",
    },
    {
      icon: "/FORgroup-7.webp",
      title: "Тент выцветет",
      description: "и станет серым, блеклым и не красивым",
    },
    {
      icon: "/FORgroup-8.webp",
      title: "Будет невозможно отмыть",
      description: "от въевшихся пятен грязи",
    },
    {
      icon: "/FORgroup-9.webp",
      title: "Потрескается",
      description: "и начнет протекать прямо на головы людям",
    },
  ];

  return (
    <>
      {/* Desktop Version */}
      <div className="hidden md:block w-full max-w-[1440px] mx-auto relative py-12 px-18">
        {/* Third Section - Fabric Warning */}
        <section className="relative max-w[1440px] max-h-[4108px] px-12 py-8">
          <div className="max-w-[1392px] mx-auto">
            <div className="flex flex-col gap-9">
              <div className="flex flex-col gap-6">
                <h2 className="font-['Raleway',Helvetica] font-semibold text-4xl max-w-[798px]">
                  <span className="text-[#527dc5]">Не экономьте на ткани, </span>
                  <span className="text-[#232c42]">
                    чтобы через 2-3 года не пришлось заказывать новый тент
                  </span>
                </h2>

                <p className="font-['Raleway',Helvetica] font-medium text-[#4f5d80] text-lg leading-6">
                  А это на минуточку 50% от цены всего шатра
                </p>
              </div>

              <Card className="max-w-[1345px] max-h-[288px] p-6 rounded-2xl shadow-lg backdrop-blur-[79px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.7)_100%)] border-0 ">
                <CardContent className="p-0">
                  <h3 className="font-['Raleway',Helvetica] font-semibold text-[#242f57] text-2xl leading-6 mb-9">
                    Что вас ожидает через 1-3 года от плохой ткани
                  </h3>

                  <div className="flex flex-wrap gap-[55px]">
                    {fabricIssues.map((issue, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center gap-3 max-w-[180px]"
                      >
                        <div className="w-[174px] h-[108px] relative">
                          <div className="w-[108px] h-[108px] bg-[#f2f4f7] rounded-[87px] absolute left-[33px] flex items-center justify-center">
                            <Image
                              className="w-[50px] h-[50px] object-contain"
                              alt={`Issue ${index + 1}`}
                              src={issue.icon}
                              width={50}
                              height={50}
                            />
                          </div>
                        </div>

                        <p className="font-['Raleway',Helvetica] text-[#4f5d80] text-sm leading-5 text-center">
                          <span className="font-semibold">{issue.title} </span>
                          {issue.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <div className="w-full h-[659px] relative py-6">
          <div className="flex flex-col w-[654px] items-start gap-6">
            <h2 className="w-[530px] [font-family:'Raleway',Helvetica] font-semibold text-4xl tracking-[0] leading-[normal]">
              <span className="text-[#232c42]">Запатентованное </span>
              <span className="text-[#527dc5]">покрытие тента Low wick</span>
            </h2>

            {featureData.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="relative w-6 h-6">
                  <Image
                    className="absolute top-0.5 left-1"
                    alt="Group"
                    src={feature.icon}
                    width={17}
                    height={20}
                  />
                </div>
                <p className="font-medium text-[#4f5d80] text-lg leading-6 w-fit [font-family:'Raleway',Helvetica] tracking-[0] whitespace-nowrap">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-start gap-6 absolute top-1 left-[723px]">
            {buttonCards.map((card, index) => {
              const isVideoCard = index === 1;
              const Wrapper = isVideoCard ? 'a' : 'div';
              const wrapperProps = isVideoCard
                ? {
                    href: 'https://rutube.ru/video/77871ba30cfd4c611b1ef1c1582e9912',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    className: 'no-underline',
                  }
                : {};

              return (
                <Wrapper key={index} {...wrapperProps}>
                  <Card className="flex flex-col items-start gap-2.5 px-6 py-3 bg-white rounded-[50px] border-solid shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] border-0">
                    <CardContent className="p-0">
                      <div className="flex items-center gap-[15px]">
                        <div className="relative w-[50px] h-[50px]">{card.icon}</div>
                        <div className="w-fit [font-family:'Raleway',Helvetica] font-bold text-[#232c42] text-base tracking-[0] leading-[normal] whitespace-pre-line">
                          {card.text}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Wrapper>
              );
            })}
          </div>

          <Card className="flex flex-col items-start gap-2.5 p-6 absolute top-[325px] left-0 rounded-2xl overflow-hidden shadow-[0px_24px_38px_#161d2414] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.7)_100%)] border-0 ">
            <CardContent className="p-0">
              <div className="flex flex-col items-start gap-6">
                <h3 className="w-[609px] [font-family:'Raleway',Helvetica] font-semibold text-xl tracking-[0] leading-6">
                  <span className="text-[#242f57]">Для каркаса используем </span>
                  <span className="text-[#527dc5]">
                    высокопрочный металл первого класса - анодированный алюминий
                  </span>
                </h3>

                <p className="w-fit font-medium text-[#4f5d80] text-sm leading-6 whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                  Обязательно с оцинковкой: холодной или горячей
                </p>

                <div className="flex flex-col w-[609px] items-center justify-center gap-2.5 px-3 py-1.5 bg-[#f5f6ff] rounded-[10px]">
                  <div className="flex w-[577px] items-center gap-[22px]">
                    <div className="w-fit text-[#6FA7FF]  [text-fill-color:transparent] [font-family:'Raleway',Helvetica] font-bold text-[46px] tracking-[0] leading-[normal] whitespace-nowrap">
                      25 лет
                    </div>
                    <div className="w-fit font-normal text-[#4f5d80] text-base leading-5 whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                      <span className="font-bold">Гарантия от коррозии </span>
                      <span className="[font-family:'Raleway',Helvetica] font-normal text-[#4f5d80] text-base tracking-[0] leading-5">
                        при заказе горячей оцинковки
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <a
            href="https://rutube.ru/video/77871ba30cfd4c611b1ef1c1582e9912"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute w-[618px] h-[394px] top-[165px] left-[723px] rounded-[20px] overflow-hidden flex items-center justify-center z-10 group transition hover:brightness-95"
            style={{
              backgroundImage: "url('/bg-rutube.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "#e8edf7",
            }}
          >
            <div className="w-[75px] h-[75px] bg-white rounded-full flex items-center justify-center shadow-md group-hover:scale-105 transition">
              <PlayIcon className="w-[25px] h-[29px] text-[#527dc5]" />
            </div>
          </a>
        </div>

        <div className="absolute w-[226px] h-[125px] top-[750px] left-25">
          <div className="relative w-[266px] h-[169px] -left-5">
            {materialImages.map((image, index) => (
              <Image
                key={index}
                className="absolute top-0"
                alt={image.alt}
                src={image.src}
                width={131}
                height={169}
                style={{ left: `${index * 68}px` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden w-full mx-auto relative py-8 px-4">
        {/* Third Section - Fabric Warning */}
        <section className="relative py-6">
          <div className="mx-auto">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h2 className="font-['Raleway',Helvetica] font-semibold text-2xl">
                  <span className="text-[#527dc5]">Не экономьте на ткани, </span>
                  <span className="text-[#232c42]">
                    чтобы через 2-3 года не пришлось заказывать новый тент
                  </span>
                </h2>

                <p className="font-['Raleway',Helvetica] font-medium text-[#4f5d80] text-base leading-6">
                  А это на минуточку 50% от цены всего шатра
                </p>
              </div>

              <Card className="w-full p-4 rounded-2xl shadow-lg backdrop-blur-[79px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.7)_100%)] border-0">
                <CardContent className="p-0">
                  <h3 className="font-['Raleway',Helvetica] font-semibold text-[#242f57] text-xl leading-6 mb-6">
                    Что вас ожидает через 1-3 года от плохой ткани
                  </h3>

                  <div className="grid grid-cols-2 gap-x-6 gap-y-8">
                    {fabricIssues.map((issue, index) => (
                      <div key={index} className="flex flex-col items-center gap-3">
                        <div className="w-[80px] h-[80px] bg-[#f2f4f7] rounded-full flex items-center justify-center">
                          <Image
                            className="w-[35px] h-[35px] object-contain"
                            alt={`Issue ${index + 1}`}
                            src={issue.icon}
                            width={35}
                            height={35}
                          />
                        </div>
                        
                        <div className="text-center px-1">
                          <p className="font-['Raleway',Helvetica] text-[#4f5d80] text-xs leading-4">
                            <span className="font-semibold">{issue.title}</span>
                            <br />
                            {issue.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

           <div className="w-full p-4 relative">
  {/* Title */}
  <div className="flex flex-col w-full items-start gap-4 mb-6">
    <h2 className="w-full [font-family:'Raleway',Helvetica] font-semibold text-2xl tracking-[0] leading-[normal]">
      <span className="text-[#232c42]">Запатентованное </span>
      <span className="text-[#527dc5]">покрытие тента Low wick</span>
    </h2>

    {featureData.map((feature, index) => (
      <div key={index} className="flex items-start gap-3">
        <div className="relative w-6 h-6">
          <Image
            className="absolute top-0.5 left-1"
            alt="Group"
            src={feature.icon}
            width={17}
            height={20}
          />
        </div>
        <p className="font-medium text-[#4f5d80] text-base leading-6 w-fit [font-family:'Raleway',Helvetica] tracking-[0]">
          {feature.text}
        </p>
      </div>
    ))}
  </div>

  {/* Video Section */}
  <a
    href="https://rutube.ru/video/77871ba30cfd4c611b1ef1c1582e9912"
    target="_blank"
    rel="noopener noreferrer"
    className="relative w-full aspect-video rounded-[15px] overflow-hidden mb-6 flex items-center justify-center group cursor-pointer"
    style={{
      backgroundColor: "#e8edf7",
      backgroundImage: "url('/bg-rutube-mobile.webp')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
    <div className="absolute bottom-3 left-3 text-white text-xs font-medium [font-family:'Raleway',Helvetica] z-10">
      Арочный шатер ARCH DUNE — Grand Tent
    </div>
    <div className="w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform z-10">
      <PlayIcon className="w-[22px] h-[25px] text-[#527dc5]" />
    </div>
  </a>

{/* Buttons - Now placed side by side */}
<div className="flex flex-row gap-4 w-full mb-6">
  {buttonCards.map((card, index) => {
    const isVideoCard = index === 1;
    const Wrapper = isVideoCard ? 'a' : 'div';
    const wrapperProps = isVideoCard
      ? {
          href: 'https://rutube.ru/video/77871ba30cfd4c611b1ef1c1582e9912',
          target: '_blank',
          rel: 'noopener noreferrer',
          className: 'no-underline',
        }
      : {};

    return (
      <Wrapper key={index} {...wrapperProps}>
        <Card
          className="flex-1 flex flex-col p-4 bg-white rounded-[30px] border-solid shadow-md 
                     backdrop-blur-[79px] border-0 cursor-pointer hover:shadow-lg 
                     transition-shadow min-h-[72px]"
        >
          <CardContent className="p-0 flex items-center gap-4"> {/* ← تم نقل gap هنا */}
            <div className="relative w-[36px] h-[36px] flex-shrink-0">
              {card.icon}
            </div>
            <div
              className="font-['Raleway',Helvetica] font-bold text-[#232c42] text-sm leading-tight
                         text-left max-w-[180px] truncate"
              style={{
                whiteSpace: 'normal',
                wordBreak: 'break-word',
                overflow: 'hidden',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                lineHeight: '1.4',
              }}
            >
              {card.text}
            </div>
          </CardContent>
        </Card>
      </Wrapper>
    );
  })}
</div>

  {/* Info Card */}
  <Card className="flex flex-col items-start gap-2.5 p-4 w-full rounded-2xl overflow-hidden shadow-sm backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.7)_100%)] border-0 mb-6">
    <CardContent className="p-0">
      <div className="flex flex-col items-start gap-4">
        <h3 className="w-full [font-family:'Raleway',Helvetica] font-semibold text-lg tracking-[0] leading-6">
          <span className="text-[#242f57]">Для каркаса используем </span>
          <span className="text-[#527dc5]">
            высокопрочный металл первого класса - анодированный алюминий
          </span>
        </h3>

        <p className="w-fit font-medium text-[#4f5d80] text-sm leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
          Обязательно с оцинковкой: холодной или горячей
        </p>

        <div className="flex flex-col w-full items-center justify-center gap-2.5 px-3 py-1.5 bg-[#f5f6ff] rounded-[10px]">
          <div className="flex w-full items-center gap-3">
            <div className="w-fit text-[#6FA7FF] [text-fill-color:transparent] [font-family:'Raleway',Helvetica] font-bold text-3xl tracking-[0] leading-[normal] whitespace-nowrap">
              25 лет
            </div>
            <div className="w-fit font-normal text-[#4f5d80] text-sm leading-5 [font-family:'Raleway',Helvetica] tracking-[0]">
              <span className="font-bold">Гарантия от коррозии </span>
              <span className="[font-family:'Raleway',Helvetica] font-normal text-[#4f5d80] text-sm tracking-[0] leading-5">
                при заказе горячей оцинковки
              </span>
            </div>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>

  {/* Material Images - Now placed at the very end */}
  <div className="flex justify-center w-full h-[140px] mt-2">
    <div className="relative w-full max-w-[400px] h-[140px]">
      {materialImages.map((image, index) => (
        <Image
          key={index}
          className="absolute top-0 transition-all duration-300 hover:scale-110"
          alt={image.alt}
          src={image.src}
          width={110}
          height={143}
          style={{
            left: `calc(50% + ${(index - materialImages.length / 2) * 80}px)`,
            transform: 'translateX(-50%)',
          }}
        />
      ))}
    </div>
  </div>
</div>
      </div>
    </>
  );
};