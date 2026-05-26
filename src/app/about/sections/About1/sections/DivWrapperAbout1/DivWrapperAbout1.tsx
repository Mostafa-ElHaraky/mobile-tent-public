'use client';

import { Badge } from "../../../../../../components/ui/badge";
import { Card, CardContent } from "../../../../../../components/ui/card";
import { ReactElement, useState } from 'react'; // Added useState import
import Image from 'next/image';
import { Button } from "../../../../../../components/ui/button"; // Added Button import

export const DivWrapperAbout1 = (): ReactElement => {
  // --- NEW: Modal state for "Список допусков"
  const [isPermitsOpen, setIsPermitsOpen] = useState(false);

  // --- NEW: Content for the modal
  const skolkovoUrl = "https://navigator.sk.ru/orn/1127932";
  const permitsText = [
    "С 22 сентября 2025 года наша компания",
    "ООО \"Завод Тентовых Конструкций\" стала резидентом СКОЛКОВО!",
    "",
    "Это новый уровень!",
    "Это крутые возможности и проекты!",
    "",
    "Мы единственная компания в РФ по каркасно - тентовому строительсу кто зашли в сколково как инновационная компания!",
    "",
    "За нами будущее, за нами новейшие разработки и технологии!!",
  ];

  // --- NEW: Lightweight modal (no extra deps)
  const PermitsModal = () => {
    if (!isPermitsOpen) return null;
    return (
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center"
        role="dialog"
        aria-modal="true"
      >
        {/* Backdrop */}
        <button
          aria-label="Закрыть"
          className="absolute inset-0 bg-black/40"
          onClick={() => setIsPermitsOpen(false)}
        />
        {/* Panel */}
        <div className="relative w-[min(92vw,720px)] max-h-[85vh] overflow-auto rounded-2xl bg-white shadow-xl">
          <div className="p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-[#232c42] [font-family:'Raleway',Helvetica]">
              Список допусков / Подтверждение статуса
            </h3>

            <div className="mt-4 space-y-2 text-[#232c42] [font-family:'Raleway',Helvetica]">
              {permitsText.map((t, i) => (
                <p key={i} className="text-sm md:text-base leading-6">
                  {t}
                </p>
              ))}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={skolkovoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Button className="w-full sm:w-auto">
                  Открыть подтверждение на сайте Сколково
                </Button>
              </a>
              <Button
                variant="outline"
                className="w-full sm:w-auto"
                onClick={() => setIsPermitsOpen(false)}
              >
                Закрыть
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Company standards and achievements data
  const standardBadges = [
    "ГОСТ 31937-2011",
    "ГОСТ 12.1.012-2004",
    "ГОСТ 27751-2014",
  ];

  // Company statistics data
  const companyStats = [
    {
      value: "15",
      unit: "лет",
      description: "производим и проектируем тентовые конструкции",
      bgColor: "bg-[#527dc5]",
      textColor: "text-white",
    },
    {
      value: "5000+",
      description: "конструкций сделано",
      bgColor: "bg-white",
    },
    {
      value: "3000+",
      description: "цехов производства",
      bgColor: "bg-[#527dc5]",
      textColor: "text-white",
    },
    {
      value: "87",
      description: "человек в штате",
      bgColor: "bg-[#527dc5]",
      textColor: "text-white",
    },
    {
      value: "35",
      unit: "штук",
      description: "уникальных станков",
      bgColor: "bg-[#527dc5]",
      textColor: "text-white",
    },
  ];

  // Client categories data
  const businessCategories = [
    {
      id: 1,
      title: "Бизнесу по загородному отдыху: ",
      description: "отели, яхт-клубы, базы отдыха, парк-отели и пр.",
      imageSrc: "/00120-------1.webp",
      imageAlt: "Countryside vacation business",
      imageWidth: "350px",
      imageHeight: "271px",
      imagePosition: "top-0 left-0",
    },
    {
      id: 2,
      title: "Компаниям по организации выездных мероприятий",
      description: "",
      imageSrc: "/d588110f-6d7c-4f88-8567-90f3d9164e14-------1.webp",
      imageAlt: "Event organization companies",
      imageWidth: "394px",
      imageHeight: "326px",
      imagePosition: "top-0 left-0",
    },
    {
      id: 3,
      title: "Кафе, ресторанам",
      description: " и другим бизнесам по организации точек питания",
      imageSrc: "/tent-i01-1.webp",
      imageAlt: "Cafes and restaurants",
      imageWidth: "362px",
      imageHeight: "222px",
      imagePosition: "top-[15px] left-0",
    },
    {
      id: 4,
      title: "Бизнесу для уличной торговли\n",
      description: "и демонстрации товаров и услуг",
      imageSrc: "/503774b4-f2ac-4d80-a16e-e0e416349220-------1.webp",
      imageAlt: "Outdoor trade business",
      imageWidth: "190px",
      imageHeight: "236px",
      imagePosition: "top-px left-[50px] top-[10px]",
    },
  ];

  return (
    <>
      {/* Render the modal */}
      <PermitsModal />

      {/* Desktop Version - remains exactly the same */}
      <div className="hidden md:block relative w-full max-w-[1344px] h-[1533px] mx-auto top-[200px]">
        <div className="flex flex-col items-start gap-[65px] w-full py-12">
          {/* Company introduction section */}
          <section className="flex flex-col items-start gap-9 w-full">
            <div className="flex flex-col w-full items-start gap-9">
              <h2 className="w-full font-semibold text-4xl leading-normal [font-family:'Raleway',Helvetica] tracking-[0]">
                <span className="text-[#527dc5]">С 2012 года </span>
                <span className="text-[#232c42]">
                  изготавливаем тентовые конструкции: шатры, ангары и пр.
                </span>
              </h2>
            </div>

            <div className="relative w-full h-[381px]">
              <div className="relative w-full h-[465px]">
                {/* First info card */}
                <Card className="absolute w-[660px] h-[206px] top-[22px] right-[650px] bg-white rounded-[20px] border-0 shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]">
                  <CardContent className="p-0">
                    <div className="w-[449px] top-[30px] left-[70px] flex flex-col items-start gap-2.5 absolute h-[83px]">
                      <div className="relative self-stretch font-normal text-[#232c42] text-xl leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                        <span className="font-semibold">
                          Соблюдаем все 50+ требований
                          <br />
                        </span>
                      </div>
                      <div className="relative self-stretch font-normal text-[#232c42] text-xl leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                        <span className="text-lg">
                          ГОСТов и СНИПов к качеству материалов и сборке Это даже
                          больше, чем обычно нужно
                        </span>
                      </div>
                    </div>

                    <div className="inline-flex items-start gap-6 absolute top-[150px] left-[50px]">
                      {standardBadges.map((standard, index) => (
                        <Badge
                          key={index}
                          className="justify-center gap-2.5 px-3 py-1.5 bg-[#527dc5] rounded-lg font-semibold text-white text-base leading-6 [font-family:'Raleway',Helvetica] tracking-[0] whitespace-nowrap"
                        >
                          {standard}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Background images */}
                <Image
                  className="absolute top-0 left-[678px]"
                  alt="Rectangle"
                  src="/About1-rectangle-61.webp"
                  width={748}
                  height={294}
                  priority
                />

                <Image
                  className="absolute top-[234px] left-0"
                  alt="Rectangle"
                  src="/About1-rectangle-62.webp"
                  width={508}
                  height={231}
                  priority
                />

                {/* Second info card */}
                <Card className="absolute w-[432px] h-[155px] top-[248px] left-[494px] bg-white rounded-[20px] border border-solid border-[#dadada] shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]">
                  <CardContent className="p-0">
                    <div className="inline-flex flex-col items-start gap-[17px] absolute top-[28px] left-[32px]">
                      <div className="inline-flex items-start gap-4 relative flex-[0_0_auto]">
                        <Badge className="inline-flex h-[49px] items-center gap-2.5 px-4 py-[7px] relative flex-[0_0_auto] bg-[#527dc5] rounded-[10px]">
                          <div className="[text-shadow:0px_4px_4px_#00000040] text-white text-lg relative w-fit [font-family:'Raleway',Helvetica] font-bold tracking-[0] leading-[normal] whitespace-nowrap">
                            8 городов России
                          </div>
                        </Badge>

                        <Badge className="inline-flex h-[49px] items-center gap-2.5 px-4 py-[7px] relative flex-[0_0_auto] bg-[#527dc5] rounded-[10px]">
                          <div className="[text-shadow:0px_4px_4px_#00000040] text-white text-lg relative w-fit [font-family:'Raleway',Helvetica] font-bold tracking-[0] leading-[normal] whitespace-nowrap">
                            4 городах СНГ
                          </div>
                        </Badge>
                      </div>

                      <div className="relative w-fit font-semibold text-[#4f5d80] text-xl leading-6 whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                        представительства
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Third info card */}
                <Card className="absolute w-[432px] h-[155px] top-[248px] left-[950px] bg-white rounded-[20px] border border-solid border-[#dadada] shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]">
                  <CardContent className="p-0">
                    <div className="w-[358px] top-[36px] left-[33px] flex flex-col items-start gap-2.5 absolute h-[83px]">
                      <div className="relative self-stretch font-normal text-[#232c42] text-xl leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                        <span className="font-semibold">
                          Отдел технического контроля
                          <br />
                        </span>
                      </div>

                      <div className="relative self-stretch font-normal text-[#232c42] text-xl leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                        <span className="text-lg">
                          (ОТК) для исключения брака проверяет каждый этап и сварные
                          швы
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Projects count */}
                <div className="inline-flex flex-col items-start gap-3 absolute top-[276px] left-[70px]">
                  <div className="relative w-fit mt-[-1.00px] [text-shadow:0px_4px_4px_#00000040] font-bold text-white text-[46px] leading-[normal] whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                    8000+
                  </div>

                  <div className="relative w-fit font-semibold text-white text-xl leading-6 whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                    изготовленных конструкций
                  </div>
                </div>

                {/* CPO membership */}
                <div className="absolute w-[449px] top-[52px] left-[758px] [font-family:'Raleway',Helvetica] font-semibold text-white text-4xl tracking-[0] leading-[normal]">
                  Являемся членами CPO
                </div>

                {/* Permissions list - NOW CLICKABLE */}
                <Card 
                  className="inline-flex flex-col items-start border-0 gap-2.5 px-6 py-3 absolute top-[119px] left-[758px] bg-white rounded-[50px] border-[3px] border-solid shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => setIsPermitsOpen(true)}
                >
                  <CardContent className="p-0 border-0">
                    <div className="gap-[15px] inline-flex items-center relative flex-[0_0_auto]">
                      <div className="relative w-[50px] h-[50px]">
                        <div className="relative w-[35px] h-[35px] top-2 left-2 overflow-hidden">
                          <div className="relative h-[35px] top-px">
                            <Image
                              className="absolute top-px left-px"
                              alt="Group"
                              src="/About1-group-16.webp"
                              width={32}
                              height={32}
                              priority
                            />
                          </div>
                        </div>
                      </div>

                      <div className="relative w-fit font-bold text-[#232c42] text-base leading-[normal] whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                        Список допусков
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Company statistics section */}
          <section className="flex flex-col items-center gap-11 w-full">
            <div className="flex flex-col items-center gap-9 w-full">
              <h2 className="relative w-fit mt-[-1.00px] font-semibold text-4xl leading-[normal] whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                <span className="text-[#527dc5]">Цифры </span>
                <span className="text-[#232c42]">компании</span>
              </h2>
            </div>

            <div className="relative w-full h-[470px]">
              {companyStats.map((stat, index) => {
                // Position each card based on index
                let position = {};
                if (index === 0) position = { top: 0, left: 0 };
                else if (index === 1) position = { top: 0, left: "456px" };
                else if (index === 2) position = { top: 0, left: "912px" };
                else if (index === 3) position = { top: "247px", left: "228px" };
                else if (index === 4) position = { top: "247px", left: "680px" };

                return (
                  <Card
                    key={index}
                    className={`absolute w-[428px] h-[223px] ${stat.bgColor} rounded-[20px] border-0 shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]`}
                    style={position}
                  >
                    <CardContent className="p-0">
                      <div className="inline-flex flex-col items-start gap-2.5 relative top-[37px] left-[29px]">
                        <div
                          className={`relative w-fit mt-[-1.00px] [text-shadow:0px_4px_4px_#00000040] font-bold ${stat.textColor} text-[80px] leading-[normal] whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]`}
                        >
                          {stat.value}
                          {stat.unit && (
                            <>
                              {index === 0 && (
                                <Image
                                  className="absolute top-5 left-[93px]"
                                  alt="Img"
                                  src="/About1--.webp"
                                  width={26}
                                  height={27}
                                  priority
                                />
                              )}
                              <div className="absolute top-[47px] left-[93px] [text-shadow:0px_4px_4px_#00000040] font-bold text-white text-3xl leading-[normal] whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                                {stat.unit}
                              </div>
                            </>
                          )}
                        </div>

                        <div
                          className={`relative w-[370px] font-semibold ${index === 1 ? "text-[#4f5d80]" : "text-white"} text-xl leading-6 [font-family:'Raleway',Helvetica] tracking-[0]`}
                        >
                          {stat.description}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Clients section */}
          <section className="flex flex-col items-center gap-9 w-full">
            <div className="flex items-center justify-center gap-[216px] w-full">
              <h2 className="w-[777px] font-semibold text-4xl text-center leading-[normal] [font-family:'Raleway',Helvetica] tracking-[0]">
                <span className="text-[#232c42]">Наши </span>
                <span className="text-[#527dc5]">клиенты</span>
              </h2>
            </div>

            <div className="flex items-start gap-6 w-full">
              {businessCategories.map((category) => (
                <Card
                  key={category.id}
                  className="w-[318px] h-[330px] bg-white rounded-[20px] border border-solid border-[#dddddd] shadow-[] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] relative overflow-hidden"
                >
                  <CardContent className="p-0 h-full">
                    <div className="absolute w-[318px] h-[204px] top-0 left-0 rounded-[20px] [background:linear-gradient(180deg,rgba(232,238,248,1)_0%,rgba(232,238,248,0)_100%)]" />

                    <div className="relative w-full h-full">
                      <Image
                        className={`absolute ${category.imagePosition} object-contain`}
                        alt={category.imageAlt}
                        src={category.imageSrc}
                        width={parseInt(category.imageWidth, 10)}
                        height={parseInt(category.imageHeight, 10)}
                        priority
                      />

                      <div className="absolute w-[255px] top-[239px] left-[31px] font-normal text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                        <span className="font-semibold">{category.title}</span>
                        <span className="[font-family:'Raleway',Helvetica] font-normal text-[#394355] text-base tracking-[0] leading-6">
                          {category.description}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="block md:hidden w-full bg-white px-4 py-8">
        {/* Company introduction section */}
        <section className="flex flex-col items-start gap-8 w-full">
          <h2 className="w-full font-semibold text-2xl leading-normal [font-family:'Raleway',Helvetica]">
            <span className="text-[#527dc5]">С 2012 года </span>
            <span className="text-[#232c42]">
              изготавливаем тентовые конструкции
            </span>
          </h2>

          {/* First info card - Mobile */}
          <Card className="w-full bg-white rounded-[20px] border-0 shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]">
            <CardContent className="p-6">
              <div className="flex flex-col gap-4">
                <p className="font-semibold text-[#232c42] text-xl">
                  Соблюдаем все 50+ требований ГОСТов и СНИПов
                </p>
                <p className="text-[#232c42] text-lg">
                  Это даже больше, чем обычно нужно
                </p>
                <div className="flex flex-wrap gap-3 mt-2">
                  {standardBadges.map((standard, index) => (
                    <Badge
                      key={index}
                      className="justify-center gap-2.5 px-3 py-1.5 bg-[#527dc5] rounded-lg font-semibold text-white text-base leading-6 [font-family:'Raleway',Helvetica] tracking-[0] whitespace-nowrap"
                    >
                      {standard}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CPO Membership - Full Height Card */}
          <Card className="w-full relative overflow-hidden rounded-[20px] border-0 shadow-lg h-[250px]">
            {/* Background Layer with Blue Overlay */}
            <div className="absolute inset-0 bg-[#527dc5]/90">
              {/* Scaled Background Image */}
              <div className="absolute inset-[-70px]">
                <Image
                  src="/About1-rectangle-61.webp"
                  alt="CPO Background"
                  fill
                  priority
                  className="object-cover object-center scale-125 opacity-30"
                />
              </div>
            </div>

            {/* Content */}
            <CardContent className="relative z-10 h-full p-6 flex flex-col justify-between text-white">
              <h3 className="text-2xl font-semibold [font-family:'Raleway'] leading-snug drop-shadow-lg">
                Являемся членами CPO
              </h3>
              {/* CLICKABLE Permissions button for mobile */}
              <div 
                className="flex items-center gap-3 bg-white/10 rounded-[100px] border-[3px] border-white px-6 py-3 w-fit backdrop-blur-sm cursor-pointer hover:bg-white/20 transition-colors"
                onClick={() => setIsPermitsOpen(true)}
              >
                <Image
                  src="/About1-group-16.webp"
                  alt="Permissions"
                  width={20}
                  height={20}
                  className="object-contain"
                  priority
                />
                <span className="font-bold text-sm [font-family:'Raleway']">Список допусков</span>
              </div>
            </CardContent>
          </Card>

          {/* Projects count - Mobile */}
          <div className="relative w-full h-[200px] rounded-[20px] overflow-hidden shadow-lg mb-6">
            {/* Base Gradient Layer */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#527dc5] to-[#3a5a9a]"></div>
            
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-[-20px] right-[-50px] w-[150%] h-[152%]">
                <Image
                  src="/About1-rectangle-62.webp"
                  alt="Pattern"
                  fill
                  className="object-cover mix-blend-soft-light"
                  priority
                />
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center">
              <div className="text-[46px] font-bold text-white [font-family:'Raleway'] [text-shadow:0px_4px_4px_rgba(0,0,0,0.4)]">
                8000+
              </div>
              <div className="text-xl font-semibold text-white [font-family:'Raleway']">
                изготовленных конструкций
              </div>
            </div>
          </div>

          {/* Branches info - Mobile */}
          <Card className="w-full bg-white rounded-[20px] border-0 shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]">
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-3 justify-center">
                <Badge className="inline-flex h-[49px] items-center gap-2.5 px-4 py-[7px] bg-[#527dc5] rounded-[10px] [text-shadow:0px_4px_4px_#00000040] text-white text-lg relative [font-family:'Raleway',Helvetica] font-bold tracking-[0] leading-[normal] whitespace-nowrap">
                  8 городов России
                </Badge>
                <Badge className="inline-flex h-[49px] items-center gap-2.5 px-4 py-[7px] bg-[#527dc5] rounded-[10px] [text-shadow:0px_4px_4px_#00000040] text-white text-lg relative [font-family:'Raleway',Helvetica] font-bold tracking-[0] leading-[normal] whitespace-nowrap">
                  4 городах СНГ
                </Badge>
              </div>
              <p className="text-[#4f5d80] font-semibold text-center mt-3 text-xl [font-family:'Raleway',Helvetica]">
                представительства
              </p>
            </CardContent>
          </Card>

          {/* OTC info - Mobile */}
          <Card className="w-full bg-white rounded-[20px] border border-solid border-[#dadada] shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]">
            <CardContent className="p-6">
              <p className="font-semibold text-[#232c42] text-xl [font-family:'Raleway',Helvetica]">
                Отдел технического контроля
              </p>
              <p className="text-[#232c42] text-lg [font-family:'Raleway',Helvetica]">
                (ОТК) для исключения брака проверяет каждый этап и сварные швы
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Company statistics section - Mobile */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-center mb-6 [font-family:'Raleway',Helvetica]">
            <span className="text-[#527dc5]">Цифры </span>
            <span className="text-[#232c42]">компании</span>
          </h2>

          <div className="grid grid-cols-1 gap-4">
            {companyStats.map((stat, index) => (
              <Card
                key={index}
                className={`${stat.bgColor} rounded-[20px] border-0 shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] p-6`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative">
                    <div className={`[text-shadow:0px_4px_4px_#00000040] font-bold ${stat.textColor || 'text-[#4f5d80]'} text-[60px] leading-[normal] [font-family:'Raleway',Helvetica] tracking-[0]`}>
                      {stat.value}
                      {stat.unit && (
                        <>
                          <Image
                            className="absolute top-3 left-[70px]"
                            alt="Img"
                            src="/About1--.webp"
                            width={20}
                            height={21}
                            priority
                          />
                          <div className="absolute top-[30px] left-[70px] [text-shadow:0px_4px_4px_#00000040] font-bold text-white text-xl leading-[normal] [font-family:'Raleway',Helvetica] tracking-[0]">
                            {stat.unit}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  <div className={`font-semibold ${index === 1 ? "text-[#4f5d80]" : "text-white"} text-lg mt-2 [font-family:'Raleway',Helvetica] tracking-[0]`}>
                    {stat.description}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Clients section - Mobile */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-center mb-6 [font-family:'Raleway',Helvetica]">
            <span className="text-[#232c42]">Наши </span>
            <span className="text-[#527dc5]">клиенты</span>
          </h2>

          <div className="grid grid-cols-1 gap-6">
            {businessCategories.map((category) => (
              <Card
                key={category.id}
                className="w-full bg-white rounded-[20px] border border-solid border-[#dddddd] shadow-lg relative overflow-hidden flex flex-col items-center pb-6"
              >
                <CardContent className="p-0 w-full flex flex-col items-center">
                  {/* Gradient background */}
                  <div className="w-full h-[180px] rounded-t-[20px] [background:linear-gradient(180deg,rgba(232,238,248,1)_0%,rgba(232,238,248,0)_100%)] flex items-center justify-center">
                    {/* Image container */}
                    <div className="relative h-[150px] w-full flex items-center justify-center">
                      <Image
                        alt={category.imageAlt}
                        src={category.imageSrc}
                        width={parseInt(category.imageWidth, 10)}
                        height={parseInt(category.imageHeight, 10)}
                        className="object-contain max-h-[140px]"
                        priority
                      />
                    </div>
                  </div>

                  {/* Text content - centered */}
                  <div className="w-full px-4 mt-4 text-center">
                    <p className="font-semibold text-[#394355] text-lg leading-6 [font-family:'Raleway',Helvetica]">
                      {category.title}
                    </p>
                    <p className="text-[#394355] text-base mt-1 [font-family:'Raleway',Helvetica]">
                      {category.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};