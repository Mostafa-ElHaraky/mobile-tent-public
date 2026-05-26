'use client';

import { Card, CardContent } from "../../../../../../components/ui/card";
import { Button } from "../../../../../../components/ui/button";
import { Badge } from "../../../../../../components/ui/badge";
import ContactButton from "../../../../../../components/ui/ContactButton";
import { ReactElement } from 'react';
import Image from 'next/image';

export const FrameAbout1 = (): ReactElement => {
  // Data for service cards
  const features = [
    {
      id: 1,
      icon: "/grouppp-3.webp",
      title: "Разработаем проект шатра",
      description:
        "удобный для пользования всеми гостями и неприхотливого в обслуживании",
    },
    {
      id: 2,
      icon: "/grouppp-4.webp",
      title: "Уложимся в срок",
      description: "до мероприятия или сезона",
    },
    {
      id: 3,
      icon: "/grouppp-5.webp",
      title: "Поможем увеличить посадочные места",
      description:
        "или создать новые места для проведения мероприятий и приема гостей",
    },
    {
      id: 4,
      icon: "/grouppp-6.webp",
      title: "Выдадим сертификаты о пожарной безопасности,",
      description: "если нужно ввести в эксплуатацию",
    },
    {
      id: 5,
      icon: "/grouppp-7.webp",
      title: "Забрендируем шатер",
      description: "для повышения узнаваемости вашей компании",
    },
    {
      id: 6,
      icon: "/group-8.webp",
      title: "Разработаем сайт",
      description: "для постоянного прихода клиентов в ваш бизнес",
    },
  ];

  // Client logos data
  const clientLogos = [
    {
      src: "/image-19.webp",
      alt: "Sberbank logo",
      width: "300px",
      height: "42px",
      top: "30px",
      left: "-39px",
    },
    {
      src: "/image-20.webp",
      alt: "VTB logo",
      width: "223px",
      height: "50px",
      top: "150px",
      left: "275px",
    },
    {
      src: "/image-22.webp",
      alt: "Coca-Cola logo",
      width: "171px",
      height: "74px",
      top: "32px",
      left: "269px",
    },
    {
      src: "/image-21.webp",
      alt: "Burger King logo",
      width: "178px",
      height: "100px",
      top: "115px",
      left: "55px",
    },
  ];

  return (
    <>
      {/* Desktop Version - لم يتم تغيير أي شيء */}
      <div className="relative top-[350px] hidden md:block ">
        <div className="relative w-[1440px] h-[1345px] mx-auto bg-white">
          {/* First section */}
          <div className="w-full h-[195px]">
            <h2 className="text-4xl font-normal [font-family:'Raleway',Helvetica] tracking-[0]">
              <span className="font-medium text-[#232c42]">Делаем все, чтобы </span>
              <span className="font-bold text-[#527dc5]">
                ваша компания больше зарабатывала на аренде и приеме гостей
              </span>
            </h2>

            <Card className="relative top-[10px] w-full p-8 rounded-[20px] shadow-[var(--)] backdrop-blur-[79px] border-0 backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {features.map((feature) => (
                    <div key={feature.id} className="flex items-start gap-[34px]">
                      <div className="relative w-[60px] h-[60px]">
                        <div className="relative w-9 h-[38px] top-[11px] left-3">
                          <div className="relative h-[38px]">
                            <div className="absolute w-[23px] h-[23px] top-[7px] left-[7px] bg-white rounded-[11.63px]" />
                            <Image
                              className="absolute top-0 left-0"
                              src={feature.icon}
                              alt="Feature icon"
                              width={36}
                              height={38}
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="font-normal text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                        <span className="font-semibold">{feature.title} </span>
                        <span className="[font-family:'Raleway',Helvetica] font-normal text-[#394355] text-base tracking-[0] leading-6">
                          {feature.description}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Clients section */}
          <div className="relative top-[150px]">
            <div className="w-[1440px] h-[456px]">
              <Card className="w-full h-full rounded-[30px] border-0 shadow-[0px_24px_38px_#161D2414] backdrop-blur-[158px] [-webkit-backdrop-filter:blur(158px)]">
                <CardContent className="p-0">
                  <div className="flex flex-row h-full">
                    {/* Left content */}
                    <div className="flex flex-col items-start gap-9 pt-[123px] pl-12">
                      <h2 className="w-[567px] mt-[-1.00px] font-semibold text-4xl leading-[normal] [font-family:'Raleway',Helvetica] tracking-[0]">
                        <span className="text-[#527dc5]">Наши клиенты крупные </span>
                        <span className="text-[#232c42]">
                          частные и государственные компании по всей России и СНГ
                        </span>
                      </h2>

                      <div className="flex items-center gap-[5px]">
                        <div className="flex items-start gap-3">
                          <p className="w-fit mt-[-1.00px] font-normal text-[#232c42] text-lg leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                            Работаем по 44-ФЗ и 223-ФЗ. Можем заключить контракт,
                            <br />
                            как с единственным поставщиком в рамках этих законов
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Right content with logos */}
                    <div className="w-[684px] h-[391px]">
                      <div className="relative w-[684px] h-[391px]">
                        <div className="relative h-[812px] top-[-421px] rounded-[342px]">
                          <div className="absolute w-[481px] h-[234px] top-[456px] left-[88px]">
                            {clientLogos.map((logo, index) => (
                              <div
                                key={index}
                                style={{
                                  position: 'absolute',
                                  top: logo.top,
                                  left: logo.left,
                                  width: logo.width,
                                  height: logo.height,
                                }}
                              >
                                <Image
                                  src={logo.src}
                                  alt={logo.alt}
                                  width={parseInt(logo.width, 10)}
                                  height={parseInt(logo.height, 10)}
                                  style={{ objectFit: 'contain' }}
                                  loading="lazy"
                                />
                              </div>
                            ))}
                          </div>

                          <div className="flex items-start gap-3 absolute top-[710px] left-[214px]">
                            <p className="w-fit mt-[-1.00px] font-normal text-[#4f5d80] text-lg leading-6 whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                              <span className="font-medium">и </span>
                              <span className="font-extrabold">еще 100+</span>
                              <span className="font-medium"> известных компаний</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Tender section */}
          <div className="relative top-[200px]">
            <div className="w-[1440px] h-[604px] rounded-[30px] shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] backdrop-blur-[158px] bg-[url(/metal-structure-against-the-blue-sky-with-white-clouds-1.webp)] bg-cover bg-center overflow-hidden">
              {/* ✅ Create a new stacking context so z-index works predictably */}
              <div className="relative w-full h-full isolate">
                {/* Blue gradient circle (visual only) */}
                <div className="absolute w-[1440px] h-[604px] rounded-[30px] [background:linear-gradient(108.32deg,_#243057_19.48%,_rgba(34,_67,_124,_0.51)_107.93%)] pointer-events-none" /> {/* ✅ */}

                {/* ✅ Foreground: content+CTA sits on top and stays clickable */}
                <div className="flex flex-col items-start gap-9 absolute top-[54px] left-[50px] relative z-10"> {/* ✅ z-10 */}
                  <div className="flex flex-col items-end gap-10">
                    {/* Headline */}
                    <div className="flex flex-col w-[658px] items-start gap-6">
                      <h5 className="font-semibold text-4xl [font-family:'Raleway',Helvetica]">
                        <span className="text-[#639dff]">Работаем с тендерами</span>
                        <span className="text-white"> с бюджетами по 10 000 000 рублей</span>
                      </h5>
                    </div>

                    {/* Registry info card */}
                    <Card className="bg-[#73a7ff59] border-none rounded-[20px]">
                      <CardContent className="flex items-center gap-[30px] p-6">
                        <div className="w-fit [font-family:'Raleway',Helvetica] text-white text-xl">
                          <span className="font-semibold leading-6">
                            Входим в реестр МИНПРОМТОРГА
                            <br />
                          </span>
                          <span className="leading-6">
                            в качестве официального производителя
                          </span>
                        </div>

                        <Badge className="bg-white rounded-[20px] px-3 py-1.5 w-[185px] h-[66px] flex items-start">
                          <div className="flex flex-col gap-[6px] w-full">
                            <div className="flex items-center gap-3 w-full h-[54px]">
                              <div className="w-[79px] h-[54px] font-bold text-[46px] leading-[54px] text-[#6FA7FF] [font-family:'Raleway',Helvetica]">
                                30+
                              </div>
                              <div className="w-[70px] h-[40px] font-medium text-[#394355] text-sm leading-5 [font-family:'Raleway',Helvetica]">
                                Тендеров выиграли
                              </div>
                            </div>
                          </div>
                        </Badge>
                      </CardContent>
                    </Card>

                    {/* Bullet points */}
                    <div className="flex flex-col w-[650px] items-start gap-[21px]">
                      {[
                        {
                          text: (
                            <>
                              <span className="font-medium">С </span>
                              <span className="font-bold">2023 года нужно обязательно входить в реестр</span>
                              <span className="font-medium">, чтобы учавствовать в торгах</span>
                            </>
                          ),
                        },
                        {
                          text: (
                            <>
                              <span className="font-bold">Аккредитованы</span>
                              <span className="font-medium"> на большинстве тендерных площадках</span>
                            </>
                          ),
                        },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-[17px]">
                          <div className="w-3 h-3 rounded-md [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]" />
                          <div className="font-normal text-white text-base leading-6 [font-family:'Raleway',Helvetica]">
                            {item.text}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA section */}
                  <div className="flex flex-col items-start justify-center gap-3 relative z-20"> {/* ✅ ensure above everything */}
                    <ContactButton isOpen={false} onClose={() => {}} />
                    <p className="w-[412px] font-normal text-white text-xs text-center [font-family:'Raleway',Helvetica]">
                      Вы можете лично поговорить с клиентами и посетить их объекты,
                      чтобы узнать все подробности о нашей работе
                    </p>
                  </div>
                </div>

                {/* Background elements — make them ignore pointer events */}
                <div className="pointer-events-none"> {/* ✅ wrap once */}
                  <Image
                    className="absolute top-0 right-[131px] object-cover"
                    alt="Element clouds"
                    src="/element8-08-clouds-1.webp"
                    width={601}
                    height={430}
                    loading="lazy"
                  />

                  <div className="absolute w-[676px] h-[513px] bottom-[-243px] right-[-11px] rounded-[338px/256.5px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(7,12,30,1)_0%,rgba(17,27,63,0)_100%)]" />

                  <div className="absolute w-[725px] h-[101px] bottom-[-163px] right-[-43px] bg-[#232c42] rounded-[362.5px/50.5px] blur-[25px]" />

                  <Image
                    className="relative bottom-[350px] left-[560px] object-cover"
                    alt="Event tent"
                    src="/element8-event-tent-i02-2.webp"
                    width={999}
                    height={714}
                    loading="lazy"
                  />

                  <Image
                    className="absolute bottom-0 left-0"
                    alt="Vecteezy overgrown"
                    src="/element8-vecteezy-overgrown-green-grass-generative-ai-generated-24190129-.webp"
                    width={299}
                    height={190}
                    loading="lazy"
                  />

                  <Image
                    className="absolute bottom-0 right-0 blur-[15px] object-cover"
                    alt="Element clouds"
                    src="/08-clouds-1.webp"
                    width={464}
                    height={339}
                    loading="lazy"
                  />
                </div>
                {/* end Background elements */}
              </div>
            </div>
          </div>
        </div>
      </div>

      
<div>{/regex-pattern/.toString()}</div>
<div className="relative top-[100px] block md:hidden w-full px-4 -mt-20">
  <div className="relative w-full bg-white pb-8">
    {/* First section */}
    <div className="w-full mb-8">
      <h2 className="text-2xl font-normal [font-family:'Raleway',Helvetica] tracking-[0] text-center">
        <span className="font-medium text-[#232c42]">Делаем все, чтобы </span>
        <span className="font-bold text-[#527dc5]">
          ваша компания больше зарабатывала на аренде и приеме гостей
        </span>
      </h2>

      <Card className="relative top-[20px] w-full p-4 rounded-[20px] shadow-md border-0">
        <CardContent className="p-0">
          <div className="grid grid-cols-1 gap-6">
            {features.map((feature) => (
              <div key={feature.id} className="flex items-start gap-4">
                <div className="relative w-[50px] h-[50px] flex-shrink-0">
                  <div className="relative w-7 h-[30px] top-[10px] left-2">
                    <div className="relative h-[30px]">
                      <div className="absolute w-[18px] h-[18px] top-[6px] left-[5px] bg-white rounded-[9px]" />
                      <Image
                        className="absolute top-0 left-0"
                        src={feature.icon}
                        alt="Feature icon"
                        width={28}
                        height={30}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
                <div className="font-normal text-[#394355] text-sm leading-5 [font-family:'Raleway',Helvetica] tracking-[0]">
                  <span className="font-semibold">{feature.title} </span>
                  <span className="[font-family:'Raleway',Helvetica] font-normal text-[#394355] text-sm tracking-[0] leading-5">
                    {feature.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
    
    {/* Clients section */}
    <div className="relative mb-8">
      <Card className="w-full rounded-[20px] border-0 shadow-md">
        <CardContent className="p-4">
          <div className="flex flex-col">
            {/* Left content */}
            <div className="flex flex-col items-start gap-4 mb-6">
              <h2 className="w-full font-semibold text-xl leading-[normal] [font-family:'Raleway',Helvetica] tracking-[0] text-center">
                <span className="text-[#527dc5]">Наши клиенты крупные </span>
                <span className="text-[#232c42]">
                  частные и государственные компании по всей России и СНГ
                </span>
              </h2>

              <div className="flex items-center justify-center">
                <div className="flex items-start">
                  <p className="font-normal text-[#232c42] text-base leading-5 [font-family:'Raleway',Helvetica] tracking-[0] text-center">
                    Работаем по 44-ФЗ и 223-ФЗ. Можем заключить контракт,
                    как с единственным поставщиком в рамках этих законов
                  </p>
                </div>
              </div>
            </div>

            {/* Right content with logos */}
            <div className="w-full">
              <div className="relative w-full flex justify-center mb-4">
                <div className="grid grid-cols-2 gap-4">
                  {clientLogos.slice(0, 4).map((logo, index) => (
                    <div key={index} className="flex justify-center items-center h-16">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={120}
                        height={40}
                        style={{ objectFit: 'contain' }}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-start justify-center mb-4">
                <p className="font-normal text-[#4f5d80] text-base leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                  <span className="font-medium">и </span>
                  <span className="font-extrabold">еще 100+</span>
                  <span className="font-medium"> известных компаний</span>
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>

  {/* Tender section */}
<div className="relative">
  <div className="w-full rounded-[20px] shadow-md bg-[url(/metal-structure-against-the-blue-sky-with-white-clouds-1.webp)] bg-cover bg-center overflow-hidden">
    <div className="relative w-full p-4">
      {/* Blue gradient overlay */}
      <div className="absolute inset-0 rounded-[20px] [background:linear-gradient(108.32deg,_#243057_19.48%,_rgba(34,_67,_124,_0.51)_107.93%)]" />    
      
      {/* Clouds background */}
      <Image
        className="absolute top-[120px] right-40 w-1/2 h-[50px] opacity-70 z-0"
        alt="Element clouds"
        src="/element8-08-clouds-1.webp"
        width={200}
        height={143}
        loading="lazy"
      />
      
      {/* محتوى النص والعناصر الرئيسية */}
      <div className="flex flex-col items-start gap-6 relative z-10">
        <div className="flex flex-col items-end gap-6">
          {/* Headline */}
          <div className="flex flex-col w-full items-start gap-4">
            <h5 className="font-semibold text-xl [font-family:'Raleway',Helvetica] text-white">
              <span className="text-[#639dff]">Работаем с тендерами</span>
              <span className="text-white">
                {" "}
                с бюджетами по 10 000 000 рублей
              </span>
            </h5>
          </div>

          {/* Registry info card */}
          <Card className="bg-[#73a7ff59] border-none rounded-[15px] w-full">
            <CardContent className="flex flex-col md:flex-row items-center gap-4 p-4">
              <div className="w-full [font-family:'Raleway',Helvetica] text-white text-base text-center">
                <span className="font-semibold leading-5">
                  Входим в реестр МИНПРОМТОРГА
                  <br />
                </span>
                <span className="leading-5">
                  в качестве официального производителя
                </span>
              </div>

              <Badge className="bg-white rounded-[15px] px-3 py-2 w-full md:w-[140px] h-auto flex items-start">
                <div className="flex flex-col gap-2 w-full">
                  <div className="flex items-center gap-2 w-full justify-center">
                    <div className="font-bold text-3xl leading-10 text-[#6FA7FF] [font-family:'Raleway',Helvetica]">
                      30+
                    </div>
                    <div className="font-medium text-[#394355] text-xs leading-4 [font-family:'Raleway',Helvetica]">
                      Тендеров выиграли
                    </div>
                  </div>
                </div>
              </Badge>
            </CardContent>
          </Card>

          {/* Bullet points */}
          <div className="flex flex-col w-full items-start gap-4">
            {[
              {
                text: (
                  <>
                    <span className="font-medium">С </span>
                    <span className="font-bold">
                      2023 года нужно обязательно входить в реестр
                    </span>
                    <span className="font-medium">
                      , чтобы учавствовать в торгах
                    </span>
                  </>
                ),
              },
              {
                text: (
                  <>
                    <span className="font-bold">Аккредитованы</span>
                    <span className="font-medium">
                      {" "}
                      на большинстве тендерных площадках
                    </span>
                  </>
                ),
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-md [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] flex-shrink-0" />
                <div className="font-normal text-white text-sm leading-5 [font-family:'Raleway',Helvetica]">
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>

              {/* CTA section - تم إصلاح المشكلة здесь */}
        <div className="flex flex-col items-center justify-center gap-3 w-full mt-4">
          <ContactButton isOpen={false} onClose={() => {}} />
          <p className="w-full font-normal text-white text-xs text-center [font-family:'Raleway',Helvetica] px-2">
            Вы можете лично поговорить с клиентами и посетить их объекты,
            чтобы узнать все подробности о нашей работе
          </p>
        </div>
      </div>

      {/* Large tent image - корректный z-index и позиция */}
      <div className="relative z-[5] mt-6">
        <Image
          className="w-full h-auto mx-auto opacity-90"
          alt="Event tent"
          src="/element8-event-tent-i02-2.webp"
          width={300}
          height={214}
          loading="lazy"
        />
      </div>

      {/* Background elements at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden z-0">
        <Image
          className="absolute bottom-0 left-0 w-32 h-20 object-cover"
          alt="Vecteezy overgrown"
          src="/element8-vecteezy-overgrown-green-grass-generative-ai-generated-24190129-.webp"
          width={128}
          height={80}
        />
        <Image
          className="absolute bottom-0 right-0 w-32 h-20 object-cover blur-[5px]"
          alt="Element clouds"
          src="/08-clouds-1.webp"
          width={128}
          height={80}
          loading="lazy"
        />
      </div>
    </div>
  </div>
</div>
  </div>
</div>
    </>
  );
};
