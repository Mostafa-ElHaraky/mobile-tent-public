'use client';

import { Card, CardContent } from "../../../../../../components/ui/card";
import { Button } from "../../../../../../components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../../../../../components/ui/tabs";
import { ReactElement, useState, useMemo, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Testimonial = {
  text: string;
  author: string;
  images: string[];
};

type Letter = {
  title: string;
  fileUrl: string;      // image/pdf path in /public
  date?: string;
  imageUrl?: string;    // thumbnail / full image
  signer?: string;      // who signed it
  excerpt?: string;     // short visible text
};

type ReviewSite = {
  name: string;
  url: string;
  rating?: number; // 0..5
  votes?: number;
};

export const FrameShatry7 = (): ReactElement => {
  // Data for service features
  const serviceFeatures = [
    { icon: "/element7-10.webp", title: "Произведет замеры участка", description: "и соберет данные для создания бесплатного 3D проекта" },
    { icon: "/element7-11.webp", title: "Покажет разные ткани", description: "для сравнения качества" },
    { icon: "/element7-12.webp", title: "Расскажет о циклах", description: "и методах производства" },
    { icon: "/element7-13.webp", title: "Отвезет на реальные объекты", description: "смонтированные у клиентов" },
  ];

  // Data for Russian cities
  const russianCities = [
    ["Новосибирск", "Самара", "Казань", "Иркутск"],
    ["Екатеринбург", "Сочи", "Краснодар", "Чебоксары"],
  ];

  // Data for CIS countries
  const cisCountries = [
    { name: "Казахстан", flagSrc: "/ellipse-14.webp" },
    { name: "Узбекистан", flagSrc: "/ellipse-14-1.webp" },
    { name: "Азербайджан", flagSrc: "/ellipse-14-2.webp" },
    { name: "Республика Беларусь", flagSrc: "/ellipse-14-3.webp" },
  ];

  // Data for the intermediary problems
  const intermediaryProblems = [
    {
      icon: "/element7-2.webp",
      title: "Срыв сроков",
      description: "Из-за «испорченного телефона» каждый этап придется долго согласовывать и постоянно уточнять детали",
    },
    {
      icon: "/element7-3.webp",
      title: "Плохое качество",
      description: "и несоответствие заказу. Общение происходит через людей не имеющих отношение к прямому производству, у них свое видение итогового качества",
    },
    {
      icon: "/element7-4.webp",
      title: "Дороже стоимость",
      description: "Каждый посредник накручивает свою маржу в цену или ухудшает качество материалов, чтобы получить свою выгоду",
    },
    {
      icon: "/element7-5.webp",
      title: "Сложности с гарантией и сервисным обслуживанием",
      description: "Посредникам главное продать, а потом можно и прикрыть фирму-однодневку",
    },
  ];

  // Data for direct manufacturer benefits
  const manufacturerBenefits = [
    {
      icon: "/element7-6.webp",
      title: "Общение ведется напрямую с личным менеджером",
      description: "Всегда на связи инженеры и дизайнеры. Недопонимания исключены",
    },
    {
      icon: "/element7-7.webp",
      title: "Работаем с соблюдением Гост, СНИП.",
      description: "С 2012 года сделано более 3000 тентовых конструкций (шатры, ангары и прочее)",
    },
    {
      icon: "/element7-8.webp",
      title: "Мы сами закупаем материалы и производим детали.",
      description: "Вы получаете цену без лишней накрутки",
    },
    {
      icon: "/element7-9.webp",
      title: "Мы на рынке более 10 лет, репутация доказана временем.",
      description: "Можете связаться с нашими клиентами и спросить сами",
    },
  ];

  const cardData = [
    {
      id: 1,
      titlePart1: "Пыль ",
      titlePart2: "не оседает на ткань",
      description: "Достаточно мыть 1 раз в год. Грязь смывается под дождем",
      imageSrc: "/FrameShatry7-------1-1500x-1.webp",
      imageAlt: "Element",
      imageClassName: "w-[337px] h-[254px] object-cover",
    },
    {
      id: 2,
      titlePart1: "Возможность ",
      titlePart2: "увеличения площади",
      description: "путем соединения нескольких шатров",
      imageSrc: "/FrameShatry7-------1-1500x-1-1.webp",
      imageAlt: "Element",
      imageClassName: "w-[337px] h-[271px] mb-[-23.00px]",
    },
    {
      id: 3,
      titlePart1: "Создаем ",
      titlePart2: "сайт для привлечения ",
      titlePart3: "клиентов в ваш бизнес",
      description: "Будет еще один источник прибыли",
      hasSpecialImages: true,
    },
  ];

  // Tab options
  const tabOptions = [
    { id: "text", label: "Текстовые" },
    { id: "letters", label: "Благодарственные письма" },
    { id: "reviews", label: "Отзовики" },
  ];

  // ✅ Your datasets
  const testimonials: Testimonial[] = useMemo(
    () => [
      {
        text:
          'Покупка не бюджетного шатра стоило того. Шатер выдерживает нагрузки ветра и не пахнет на солнце, как предыдущий',
        author: 'Максимова Н.В. генеральный директор',
        images: ['/17-shater-dlya-meropriyatiya-mercedes-benz.webp', '/17-shater-dlya-meropriyatiya-mercedes-benz_0.webp'],
      },
      {
        text:
          'Заказ был выполнен в срок. Конструкция прочная, монтаж быстрый, а внешний вид отлично подходит под стиль нашего мероприятия.',
        author: 'Кузнецов А.Г., руководитель проекта',
        images: ['/18-shatry-predstavitelskogo-klassa-v-arhangelske_3.webp', '/18-shatry-predstavitelskogo-klassa-v-arhangelske_5.webp'],
      },
      {
        text:
          'Отличное соотношение цены и качества. Команда помогла подобрать оптимальный размер, тент уверенно пережил сильный дождь.',
        author: 'ИП Соколова, владелец',
        images: ['/2017-05-19 13-19-02.webp', '/2017-05-19 13-18-44.webp'],
      },
    ],
    []
  );

  const letters: Letter[] = useMemo(
    () => [
      {
        title: 'Благодарственное письмо — ООО «Агротех-Гарант»',
        fileUrl: '/litter1.webp',
        imageUrl: '/litter1.webp',
        signer: 'Евсеев Александр Васильевич, директор ООО «Агротех-Гарант»',
        excerpt:
          'ООО «Агротех-Гарант», в лице директора Евсеева Александра Васильевича, благодарит компанию MOBILE TENT за производство качественных шатров, благодаря которым мероприятия нашей компании выглядели более презентабельно и качественно. Надеемся на дальнейшее плодотворное и взаимовыгодное сотрудничество.',
        date: '2024-06-12',
      },
      {
        title: 'Благодарственное письмо — «Форум ЭКСПО»',
        fileUrl: '/litter1.webp',
        imageUrl: '/litter1.webp',
        signer: 'Директор выставочных проектов, «Форум ЭКСПО»',
        excerpt:
          'Отмечаем профессионализм команды и точное соблюдение сроков при подготовке выставочной площадки. Конструкции показали высокую устойчивость и презентабельный внешний вид.',
        date: '2024-04-04',
      },
      {
        title: 'Рекомендательное письмо — ООО «Сервис Групп»',
        fileUrl: '/litter1.webp',
        imageUrl: '/litter1.webp',
        signer: 'Генеральный директор ООО «Сервис Групп»',
        excerpt:
          'Рекомендуем MOBILE TENT как надежного поставщика тентовых решений. Качество материалов и оперативность монтажа соответствуют высоким требованиям наших проектов.',
        date: '2023-11-21',
      },
    ],
    []
  );

  const reviewSites: ReviewSite[] = useMemo(
    () => [
      { name: 'Яндекс Карты', url: 'https://yandex.ru/maps/org/mobile_tent', rating: 4.9, votes: 127 },
      { name: '2ГИС', url: 'https://2gis.ru/moscow/search/mobile%20tent', rating: 4.8, votes: 64 },
      { name: 'Отзовик', url: 'https://otzovik.com/reviews/mobile_tent', rating: 4.7, votes: 89 },
    ],
    []
  );

  // State for tabs + testimonials carousel
  const [activeTab, setActiveTab] = useState<string>('text');
  const [current, setCurrent] = useState<number>(0);
  const total = testimonials.length;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  const testimonial = testimonials[current];

  return (
    <>
      {/* Desktop Version */}
      <section className="hidden md:flex flex-col w-[1344px] h-[1819px] gap-[75px] py-[30px] px-12">
        {/* First section - Problems with intermediaries */}
        <h2 className="w-full max-w-[888px] text-4xl font-semibold font-['Raleway',Helvetica] tracking-normal">
          <span className="text-[#527dc5]">Мы избавим вас от проблем</span>
          <span className="text-[#232c42]">
            {" "}
            возникающих
            <br />
            при работе с посредниками-перекупщиками
          </span>
        </h2>

        <div className="flex items-start gap-6 relative">
          {/* Intermediaries Card */}
          <Card className="w-[660px] h-[693px] rounded-[20px] border border-[#D5D5D5] shadow-[var(--)] backdrop-blur-[79px] ">
            <CardContent className="p-12 pt-12">
              <h3 className="text-center text-2xl font-semibold text-[#242f57] font-['Raleway',Helvetica] mb-16">
                Посредники
              </h3>

              <div className="space-y-10">
                {intermediaryProblems.map((problem, index) => (
                  <div key={index} className="flex items-start gap-8">
                    {/* Fixed icon implementation */}
                    <div className="w-[74px] h-[74px]  rounded-full flex items-center justify-center">
                      <Image
                        src={problem.icon}
                        alt={problem.title}
                        width={40}
                        height={40}
                        className=""
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <h4 className="font-semibold text-[#394355] text-base leading-6 font-['Raleway',Helvetica]">
                        {problem.title}
                      </h4>
                      <p className="text-[#4f5d80] text-sm leading-5 font-normal font-['Raleway',Helvetica] max-w-[420px]">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Direct Manufacturer Card */}
          <Card 
            className="w-[660px] h-[693px] absolute left-[684px] rounded-[20px] shadow-[0px_22px_44px_#207CFE66] bg-[linear-gradient(180deg,#73A8FF_0%,#6FA7FF_36.5%,#3C6CEC_100%)] border-0 "
          >
            <CardContent className="p-12 pt-12">
              <h3 className="text-center text-2xl font-semibold text-white font-['Raleway',Helvetica] mb-16">
                Напрямую у нас -производителя Mobile tent
              </h3>

              <div className="space-y-10">
                {manufacturerBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-6">
                    {/* Simplified icon container - no background */}
                    <div className="flex-shrink-0">
                      <Image
                        className="object-contain"
                        alt={benefit.title}
                        src={benefit.icon}
                        width={48}
                        height={48}
                        loading="lazy"
                      />
                    </div>
                    
                    <div className="flex flex-col gap-3">
                      <h4 className="font-semibold text-white text-lg leading-6 font-['Raleway',Helvetica]">
                        {benefit.title}
                      </h4>
                      <p className="text-white text-base leading-5 font-normal font-['Raleway',Helvetica] max-w-[420px]">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Second section - Live meeting with representative */}
        <div className="relative top-[-30px]">
          <h2 className="font-semibold text-4xl font-['Raleway',Helvetica] mb-20">
            <span className="text-[#527dc5]">Организуем живую встречу </span>
            <span className="text-[#232c42]">
              с представителем компании в вашем городе
            </span>
          </h2>
          
          <div className="flex flex-col gap-6">
            {/* Service features card */}
            <Card className="w-[1343px] h-[137px] absolute top-[94px] left-[-1px] rounded-[16px] shadow-[0px_24px_38px_#161D2414] backdrop-blur-[158px] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.7)_100%)] p-[24px] border-0 ">
              <CardContent className="p-6">
                <div className="flex flex-wrap items-start gap-[60px] h-full">
                  {serviceFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-6">
                      <div className="relative w-[25px] h-[25px] left-[-35px] top-[-10px]">
                        <div className="w-[74px] h-[74px] bg-[#F3F4F7] rounded-[87px] flex items-center justify-center">
                          <Image
                            src={feature.icon}
                            alt={feature.title}
                            width={50}
                            height={50}
                            className="w-10 h-10"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col w-[217px] items-start justify-center gap-1.5">
                        <div className="font-semibold text-[#4f5d80] text-sm leading-5 font-['Raleway',Helvetica]">
                          {feature.title}
                        </div>
                        <div className="font-normal text-[#4f5d80] text-sm leading-5 font-['Raleway',Helvetica]">
                          {feature.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Main content area with image and representatives */}
            <div className="w-[1390px] h-[752px] absolute top-[179px] left-[-48px] flex flex-wrap gap-8">
              {/* Left side with businessman image */}
              <div className="relative w-full md:w-[635px]">
                <Image
                  className="relative w-[707px] h-[628px]"
                  src="/rectangle-499.webp"
                  alt="Rectangle"
                  width={507}
                  height={628}
                  loading="lazy"
                />
                <Image
                  className="absolute w-[527px] h-[610px] top-16 left-24"
                  src="/element7_confident-young-businessman-in-blue-shirt-and-glasses-smiling-at.webp"
                  alt="Confident young businessman"
                  width={527}
                  height={610}
                  loading="lazy"
                />
                <div className="absolute w-[463px] h-[109px] top-[565px] left-[143px] -rotate-180 [background:linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_100%)]" />
                <div className="absolute w-[211px] h-[211px] top-[508px] left-[79px] rounded-[105.39px] rotate-[46.81deg] blur-[25px] backdrop-blur-[25px] [background:linear-gradient(180deg,rgba(90,145,238,0.55)_0%,rgba(82,125,197,0)_100%)]" />
                <div className="absolute w-[79px] h-[79px] top-[333px] left-[544px] rounded-[39.66px] rotate-[-158.76deg] blur-[15px] [background:linear-gradient(180deg,rgba(86,164,255,1)_0%,rgba(82,125,197,0)_100%)]" />
                <div className="absolute w-[31px] h-[31px] top-[107px] left-[216px] rounded-[15.49px] rotate-[-158.76deg] blur-[15px] [background:linear-gradient(180deg,rgba(82,125,197,1)_0%,rgba(82,125,197,0)_100%)]" />
              </div>

              <Card className="w-[658px] h-[572px] absolute top-[250px] left-[732px] rounded-[20px] border border-[#E3E3E3] shadow-[0px_22px_44px_#207CFE66] bg-gradient-to-br from-[#243057] to-[#374255]">
                <CardContent className="p-14 pt-[51px]">
                  <div className="flex flex-col gap-[60px]">
                    <h3 className="font-semibold text-white text-2xl leading-6 font-['Raleway',Helvetica]">
                      Представительства в городах и странах СНГ
                    </h3>

                    <div className="flex gap-[156px]">
                      {russianCities.map((column, colIndex) => (
                        <div key={colIndex} className="flex flex-col gap-4">
                          {column.map((city, cityIndex) => (
                            <div
                              key={cityIndex}
                              className="flex items-center gap-2.5"
                            >
                              <Image
                                className="w-[10.5px] h-[9.53px]"
                                src="/polygon-3.webp"
                                alt="Polygon"
                                width={10}
                                height={10}
                                loading="lazy"
                              />
                              <div className="font-medium text-white text-base leading-5 font-['Raleway',Helvetica]">
                                {city}
                              </div>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-6">
                      {cisCountries.map((country, index) => (
                        <Card
                          key={index}
                          className="w-[259px] h-[85px] bg-[#a9beef1a] rounded-[20px] border border-solid border-[#d3d3d31a]"
                        >
                          <CardContent className="p-0">
                            <div className="flex items-center gap-3 p-6">
                              <Image
                                className="w-[50px] h-[50px] object-cover rounded-full"
                                src={country.flagSrc}
                                alt={`Flag of ${country.name}`}
                                width={50}
                                height={50}
                                quality={100}
                                loading="lazy"
                              />
                              <div className="font-semibold text-white text-base leading-5 font-['Raleway',Helvetica]">
                                {country.name}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-start gap-[23px] mt-[770px]">  
          {cardData.map((card) => (
            <Card
              key={card.id}
              className="flex flex-col w-[432px] h-[386px] border-0 items-center gap-2.5 p-6 rounded-2xl overflow-hidden shadow-[0px_24px_38px_#161d2414] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.7)_100%)]"
            >
              <CardContent className="p-0 w-full flex flex-col items-center">
                <div className="flex w-full items-start justify-center gap-3">
                  <div className="inline-flex flex-col items-center justify-center gap-2">
                    <div className="relative mt-[-1.00px] [font-family:'Raleway',Helvetica] font-semibold text-[22px] text-center tracking-[0] leading-[normal]">
                      <span className="text-[#4f5d80]">{card.titlePart1}</span>
                      <span className="text-[#527dc5]">{card.titlePart2}</span>
                      {card.titlePart3 && (
                        <span className="text-[#4f5d80]">{card.titlePart3}</span>
                      )}
                    </div>

                    <div className="relative w-[310px] [font-family:'Raleway',Helvetica] font-normal text-[#4f5d80] text-sm text-center tracking-[0] leading-5">
                      {card.description}
                    </div>
                  </div>
                </div>

                {!card.hasSpecialImages ? (
                  <Image
                    src={card.imageSrc || '/fallback.webp'}
                    alt={card.imageAlt || 'Descriptive image'}
                    className={card.imageClassName}
                    width={400}
                    height={300}
                    loading="lazy"
                  />
                ) : (
                  <div className="relative w-[357px] h-[246px]">
                    <div className="relative w-[363px] h-64 top-1 -left-0.5">
                      <div className="absolute w-[280px] h-[216px] top-0 left-0">
                        <Image
                          src="/FrameShatry7-------1-1500x-1-2.webp"
                          alt="Element"
                          fill
                          className="object-contain"
                          loading="lazy"
                        />
                      </div>

                      <div className="absolute w-[186px] h-[219px] top-[37px] left-[177px]">
                        <Image
                          src="/FrameShatry7-------1-1500x-2.webp"
                          alt="Element"
                          fill
                          className="object-contain"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="absolute w-[186px] h-[219px] top-[37px] left-[177px]">
                      <Image
                        src="/FrameShatry7-------1-1500x-2.webp"
                        alt="Element"
                        fill
                        className="object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* ======= REVIEWS: Tabs + Contents (DESKTOP) ======= */}
        <div className="w-[1344px] h-[81px] flex items-center gap-[62px] mb-17 relative bottom-[50px]">
          <div className="flex flex-col items-start gap-3 ">
            <h2 className="font-semibold text-4xl font-['Raleway',Helvetica]">
              <span className="text-[#232c42]">Уже </span>
              <span className="text-[#527dc5]">800+ компаний купили</span>
              <span className="text-[#232c42]"> наши шатры</span>
            </h2>

            <div className="flex items-center gap-[5px]">
              <div className="relative w-[27px] h-[27px]">
                <Image
                  className="absolute top-px left-px"
                  alt="Group"
                  src="/group-14.webp"
                  width={25}
                  height={25}
                  loading="lazy"
                />
              </div>
              <p className="font-medium text-[#4f5d80] text-lg leading-6 font-['Raleway',Helvetica]">
                Пишут реальные отзывы
              </p>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="flex items-start gap-6">
            <TabsList className="bg-transparent p-0 gap-6">
              {tabOptions.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="px-6 py-3 bg-[#e1ecff] rounded-[50px] backdrop-blur-[79px] text-[#394355] text-base font-semibold font-['Raleway',Helvetica] data-[state=active]:bg-[#e1ecff]"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* DESKTOP tab contents */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full relative top-[40px]">
          {/* Text testimonials */}
          <TabsContent value="text" className="m-0">
            <Card className="w-[1343px] h-[326px] bg-white relative bottom-[85px] rounded-[20px] shadow-[0px_24px_38px_#161D2414] backdrop-blur-[158px] border-0">
              <CardContent className="p-0">
                <div className="flex items-start gap-6 absolute top-[43px] left-10">
                  <div className="relative w-[59px] h-[59px] -rotate-180">
                    <Image
                      className="absolute w-11 h-[33px] top-[18px] left-[7px] rotate-180"
                      alt="Group"
                      src="/group-15.webp"
                      width={44}
                      height={33}
                      loading="lazy"
                    />
                  </div>

                  <div className="flex flex-col items-start gap-9">
                    <p className="w-[570px] font-normal text-[#4f5d80] text-lg leading-6 font-['Raleway',Helvetica]">
                      {testimonial.text}
                    </p>
                    <p className="font-semibold text-[#4f5d80] text-lg leading-6 font-['Raleway',Helvetica]">
                      {testimonial.author}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-[26px] absolute top-10 left-[785px]">
                  {testimonial.images.map((image, index) => (
                    <Image
                      key={index}
                      className="object-cover"
                      alt={`Testimonial image ${index + 1}`}
                      src={image}
                      width={246}
                      height={246}
                      loading="lazy"
                    />
                  ))}
                </div>

                <div className="flex items-start gap-[45px] absolute top-[233px] left-12">
                  <Button
                    onClick={prev}
                    variant="outline"
                    className="w-14 h-14 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
                    aria-label="Previous testimonial"
                  >
                    <div className="relative w-6 h-6 rotate-180">
                      <Image
                        className="absolute w-3.5 h-6 top-0 left-[5px] -rotate-180"
                        alt="Previous"
                        src="/group-16.webp"
                        width={14}
                        height={24}
                        loading="lazy"
                      />
                    </div>
                  </Button>

                  <Button
                    onClick={next}
                    variant="outline"
                    className="w-14 h-14 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
                    aria-label="Next testimonial"
                  >
                    <div className="relative w-6 h-6">
                      <Image
                        className="absolute w-3.5 h-6 top-0 left-[5px]"
                        alt="Next"
                        src="/group-17.webp"
                        width={14}
                        height={24}
                        loading="lazy"
                      />
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Letters */}
          <TabsContent value="letters" className="m-0 relative bottom-[40px]">
            <Card className="w-[1343px] bg-white relative bottom-[105px] rounded-[20px] shadow-[0px_24px_38px_#161D2414] border-0">
              <CardContent className="p-8">
                <div className="grid grid-cols-3 gap-6">
                  {letters.map((letter, idx) => (
                    <Card key={idx} className="rounded-2xl border border-[#E3E3E3] overflow-hidden">
                      <CardContent className="p-0">
                        <div className="w-full h-[220px] relative">
                          <Image
                            src={letter.imageUrl || letter.fileUrl}
                            alt={letter.title}
                            fill
                            className="object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-4 flex flex-col gap-2">
                          <div className="font-semibold text-[#232c42]">{letter.title}</div>
                          {letter.signer && <div className="text-sm text-[#4f5d80]">{letter.signer}</div>}
                          {letter.date && <div className="text-xs text-[#4f5d80]">Дата: {letter.date}</div>}
                          {letter.excerpt && (
                            <p className="text-sm text-[#4f5d80] line-clamp-3">{letter.excerpt}</p>
                          )}
                          <Link href={letter.fileUrl} target="_blank" className="mt-2">
                            <Button className="w-full rounded-xl">Открыть письмо</Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* External review sites */}
          <TabsContent value="reviews" className="m-0">
            <Card className="w-[1343px] bg-white relative bottom-[85px] rounded-[20px] shadow-[0px_24px_38px_#161D2414] border-0">
              <CardContent className="p-8">
                <div className="grid grid-cols-3 gap-6">
                  {reviewSites.map((site, idx) => (
                    <Card key={idx} className="rounded-2xl border border-[#E3E3E3]">
                      <CardContent className="p-6 flex flex-col gap-3">
                        <div className="font-semibold text-[#232c42] text-lg">{site.name}</div>
                        {(site.rating || site.votes) && (
                          <div className="text-sm text-[#4f5d80]">
                            {site.rating && <>Рейтинг: {site.rating.toFixed(1)}</>}
                            {site.votes && <> • Голосов: {site.votes}</>}
                          </div>
                        )}
                        <Link href={site.url} target="_blank">
                          <Button className="rounded-xl">Перейти к отзывам</Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* ============ MOBILE VERSION ============ */}
      <section className="block md:hidden px-4 py-8">
        {/* Modified heading - now left-aligned */}
        <h2 className="text-2xl font-semibold font-['Raleway',Helvetica] text-left mb-8 leading-tight">
          <span className="text-[#527dc5]">Мы избавим вас от проблем</span>{" "}
          <span className="text-[#232c42]">при работе с посредниками</span>
        </h2>

        {/* Intermediaries Card (Mobile) */}
        <Card className="rounded-[20px] border border-[#D5D5D5] shadow-lg mb-6 overflow-hidden">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-[#242f57] text-center mb-6 font-['Raleway',Helvetica]">
              Посредники
            </h3>
            <div className="space-y-6">
              {intermediaryProblems.map((problem, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
                    <Image
                      src={problem.icon}
                      alt={problem.title}
                      width={40}
                      height={40}
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#394355] text-sm leading-5 mb-1">
                      {problem.title}
                    </h4>
                    <p className="text-[#4f5d80] text-xs leading-4 font-normal max-w-full">
                      {problem.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Direct Manufacturer Card (Mobile) */}
        <Card className="rounded-[20px] shadow-lg bg-[linear-gradient(180deg,#73A8FF_0%,#6FA7FF_36.5%,#3C6CEC_100%)] border-0 overflow-hidden">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-white text-center mb-6 font-['Raleway',Helvetica]">
              Напрямую у производителя
            </h3>
            <div className="space-y-6">
              {manufacturerBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      className="object-contain"
                      alt={benefit.title}
                      src={benefit.icon}
                      width={48}
                      height={48}
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white text-sm leading-5 mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-white text-xs leading-4 font-normal max-w-full">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Mobile Version - Live meeting section */}
      <section className="md:hidden w-full py-8 px-4 relative">
        <div className="relative">
          {/* العنوان على اليسار */}
          <h2 className="font-semibold text-2xl text-left font-['Raleway',Helvetica] mb-8">
            <span className="text-[#527dc5]">Организуем живую встречу </span>
            <span className="text-[#232c42]">
              с представителем компании в вашем городе
            </span>
          </h2>

          {/* الميزات مع الأيقونات */}
          <Card className="w-full rounded-[16px] shadow-[0px_24px_38px_#161D2414] backdrop-blur-[20px] bg-[rgba(255,255,255,0.7)] p-4 border-0 mb-8">
            <CardContent className="p-2">
              <div className="grid grid-cols-2 gap-6">
                {serviceFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-[50px] h-[50px] bg-[#F3F4F7] rounded-full flex items-center justify-center flex-shrink-0">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={30}
                        height={30}
                        className="w-6 h-6"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="font-semibold text-[#4f5d80] text-sm leading-5 font-['Raleway',Helvetica]">
                        {feature.title}
                      </div>
                      <div className="font-normal text-[#4f5d80] text-xs leading-4 font-['Raleway',Helvetica]">
                        {feature.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* صورة الشخص مع الخلفيات */}
          <div className="relative w-full">
            <div className="relative w-full aspect-[4/5]">
              {/* الخلفية الأساسية */}
              <div className="absolute inset-0 rounded-t-lg overflow-hidden">
                <Image
                  src="/rectangle-499.webp"
                  alt="Background"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              
              {/* التأثيرات البصرية */}
              <div className="absolute w-[100px] h-[100px] bottom-[20%] left-[-30px] rounded-full blur-[20px] bg-[#5a91ee8c]" />
              <div className="absolute w-[40px] h-[40px] top-[30%] right-[10px] rounded-full blur-[10px] bg-[#56a4ff]" />
              <div className="absolute w-[20px] h-[20px] top-[10%] left-[20%] rounded-full blur-[8px] bg-[#527dc5]" />
              
              {/* صورة الشخص */}
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src="/element7_confident-young-businessman-in-blue-shirt-and-glasses-smiling-at.webp"
                  alt="Confident young businessman"
                  fill
                  className="object-contain p-4"
                  loading="lazy"
                />
              </div>
            </div>

            {/* كارت المدن الروسية - يلامس أسفل الصورة */}
            <Card className="relative z-10 -mt-12 mx-2 rounded-[20px] border border-[#E3E3E3] shadow-[0px_22px_44px_#207CFE66] bg-gradient-to-br from-[#243057] to-[#374255] p-6 animate-float">
              <h3 className="font-semibold text-white text-xl text-left leading-6 font-['Raleway',Helvetica] mb-6">
                Представительства в городах и странах СНГ
              </h3>

              {/* المدن الروسية */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {russianCities.flat().map((city, cityIndex) => (
                  <div key={cityIndex} className="flex items-center gap-2">
                    <Image
                      className="w-[10px] h-[10px]"
                      src="/polygon-3.webp"
                      alt="Polygon"
                      width={10}
                      height={10}
                      loading="lazy"
                    />
                    <div className="font-medium text-white text-sm font-['Raleway',Helvetica]">
                      {city}
                    </div>
                  </div>
                ))}
              </div>

              {/* دول СНГ */}
              <div className="grid grid-cols-2 gap-4">
                {cisCountries.map((country, index) => (
                  <Card
                    key={index}
                    className="bg-[#a9beef1a] rounded-[20px] border border-solid border-[#d3d3d31a] hover:scale-105 transition-transform"
                  >
                    <CardContent className="p-3">
                      <div className="flex items-center gap-3">
                        <Image
                          className="w-[30px] h-[30px] object-cover rounded-full"
                          src={country.flagSrc}
                          alt={`Flag of ${country.name}`}
                          width={30}
                          height={30}
                          quality={100}
                          loading="lazy"
                        />
                        <div className="font-semibold text-white text-sm font-['Raleway',Helvetica]">
                          {country.name}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Mobile Version - Reviews section */}
      <section className="md:hidden w-full px-4 py-8">
        <div className="flex flex-col gap-6">
          {/* Header - Left aligned */}
          <div className="flex flex-col items-start gap-3">
            <h2 className="font-semibold text-2xl font-['Raleway',Helvetica] text-left">
              <span className="text-[#232c42]">Уже </span>
              <span className="text-[#527dc5]">800+ компаний купили</span>
              <span className="text-[#232c42]"> наши шатры</span>
            </h2>

            <div className="flex items-center gap-2">
              <Image alt="Review icon" src="/group-14.webp" width={24} height={24} />
              <p className="font-medium text-[#4f5d80] text-base font-['Raleway',Helvetica]">
                Пишут реальные отзывы
              </p>
            </div>
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full flex gap-2 bg-transparent p-0">
              {tabOptions.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="flex-1 py-2 bg-[#e1ecff] rounded-[50px] text-[#394355] text-sm font-semibold font-['Raleway',Helvetica] data-[state=active]:bg-[#e1ecff]"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Mobile text testimonials */}
            <TabsContent value="text" className="mt-4">
              {/* Images - Centered */}
              <div className="flex justify-center gap-4">
                {testimonial.images.map((image, index) => (
                  <div key={index} className="relative w-[150px] h-[150px] rounded-lg overflow-hidden">
                    <Image src={image} loading="lazy" alt={`Testimonial ${index + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>

              {/* Text Card */}
              <Card className="w-full bg-white rounded-[20px] shadow-[0px_24px_38px_#161D2414] border-0 p-6 mt-4">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <div className="relative w-[50px] h-[0px] -rotate-180 -mt-2 -ml-1">
                      <Image className="rotate-180" loading="lazy" alt="Quote" src="/group-15.webp" width={40} height={30} />
                    </div>
                    <div className="flex flex-col gap-4">
                      <p className="font-normal text-[#4f5d80] text-base font-['Raleway',Helvetica]">
                        {testimonial.text}
                      </p>
                      <p className="font-semibold text-[#4f5d80] text-base font-['Raleway',Helvetica]">
                        {testimonial.author}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Navigation Buttons */}
              <div className="flex justify-center gap-6 mt-4">
                <Button
                  onClick={prev}
                  variant="outline"
                  className="w-12 h-12 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
                  aria-label="Previous testimonial"
                >
                  <Image loading="lazy" alt="Previous" src="/group-16.webp" width={20} height={20} />
                </Button>

                <Button
                  onClick={next}
                  variant="outline"
                  className="w-12 h-12 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
                  aria-label="Next testimonial"
                >
                  <Image loading="lazy" alt="Next" src="/group-17.webp" width={20} height={20} />
                </Button>
              </div>
            </TabsContent>

            {/* Mobile letters */}
            <TabsContent value="letters" className="mt-4">
              <div className="grid grid-cols-1 gap-4">
                {letters.map((letter, idx) => (
                  <Card key={idx} className="rounded-2xl border border-[#E3E3E3] overflow-hidden">
                    <CardContent className="p-0">
                      <div className="w-full h-[180px] relative">
                        <Image
                          src={letter.imageUrl || letter.fileUrl}
                          alt={letter.title}
                          fill
                          className="object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-4 flex flex-col gap-2">
                        <div className="font-semibold text-[#232c42]">{letter.title}</div>
                        {letter.signer && <div className="text-sm text-[#4f5d80]">{letter.signer}</div>}
                        {letter.date && <div className="text-xs text-[#4f5d80]">Дата: {letter.date}</div>}
                        {letter.excerpt && (
                          <p className="text-sm text-[#4f5d80] line-clamp-3">{letter.excerpt}</p>
                        )}
                        <Link href={letter.fileUrl} target="_blank" className="mt-2">
                          <Button className="w-full rounded-xl">Открыть письмо</Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Mobile external review sites */}
            <TabsContent value="reviews" className="mt-4">
              <div className="grid grid-cols-1 gap-4">
                {reviewSites.map((site, idx) => (
                  <Card key={idx} className="rounded-2xl border border-[#E3E3E3]">
                    <CardContent className="p-4 flex flex-col gap-3">
                      <div className="font-semibold text-[#232c42]">{site.name}</div>
                      {(site.rating || site.votes) && (
                        <div className="text-sm text-[#4f5d80]">
                          {site.rating && <>Рейтинг: {site.rating.toFixed(1)}</>}
                          {site.votes && <> • Голосов: {site.votes}</>}
                        </div>
                      )}
                      <Link href={site.url} target="_blank">
                        <Button className="rounded-xl">Перейти к отзывам</Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Mobile Version - Cards Section */}
      <section className="md:hidden w-full px-4 py-8">
        <div className="flex flex-col gap-6">
          {cardData.map((card) => (
            <Card
              key={card.id}
              className="flex flex-col w-full h-auto border-0 items-center gap-4 p-6 rounded-2xl overflow-hidden shadow-[0px_24px_38px_#161d2414] backdrop-blur-[79px] [-webkit-backdrop-filter:blur(79px)] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.7)_100%)]"
            >
              <CardContent className="p-0 w-full flex flex-col items-center">
                <div className="flex w-full flex-col items-center justify-center gap-3">
                  <div className="inline-flex flex-col items-center justify-center gap-2 text-center">
                    <div className="relative [font-family:'Raleway',Helvetica] font-semibold text-lg text-[#4f5d80] leading-tight">
                      {card.titlePart1}
                      <span className="text-[#527dc5]">{card.titlePart2}</span>
                      {card.titlePart3 && <span className="text-[#4f5d80]">{card.titlePart3}</span>}
                    </div>
                    <div className="font-normal text-[#4f5d80] text-sm leading-5 text-center max-w-[300px]">
                      {card.description}
                    </div>
                  </div>

                  {!card.hasSpecialImages ? (
                    <Image
                      src={card.imageSrc || '/fallback.webp'}
                      alt={card.imageAlt || 'Descriptive image'}
                      width={337}
                      height={254}
                      className="w-[337px] h-auto object-contain rounded-lg"
                      loading="lazy"
                    />
                  ) : (
                    <div className="relative w-[357px] h-[246px] mt-2">
                      <div className="relative w-[363px] h-64 top-1 -left-0.5">
                        <div className="absolute w-[280px] h-[216px] top-0 left-0">
                          <Image
                            src="/FrameShatry7-------1-1500x-1-2.webp"
                            alt="Element"
                            fill
                            className="object-contain"
                            loading="lazy"
                          />
                        </div>
                        <div className="absolute w-[186px] h-[219px] top-[37px] left-[177px]">
                          <Image
                            src="/FrameShatry7-------1-1500x-2.webp"
                            alt="Element"
                            fill
                            className="object-contain"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};
