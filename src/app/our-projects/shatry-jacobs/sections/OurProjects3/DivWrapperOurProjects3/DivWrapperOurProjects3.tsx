'use client';

import { Card, CardContent } from "../../../../../../components/ui/card";
import { Button } from "../../../../../../components/ui/button";
import { ReactElement } from 'react';

export const DivWrapperOurProjects3 = (): ReactElement => {
  // Data for testimonial cards
  const testimonialCards = [
    {
      id: 1,
      title: "Ветер",
      iconPath: "/Clip-path-group.png",
      isImage: false,
      width: "260px",
      height: "116px",
    },
    {
      id: 2,
      title: "Дождь, снег, град",
      iconPath: "/GROP.png",
      isImage: true,
      width: "391px",
      height: "116px",
    },
    {
      id: 3,
      title: "Огонь",
      iconPath: "/GROP-1.png",
      isImage: true,
      width: "260px",
      height: "116px",
    },
  ];

  // Data for the feature section
  const featureData = {
    subtitle:
      "Еще до производства протестируем шатер для самых сложных условий эксплуатации",
    title: {
      regular: "Шатры выдерживают колосальные ",
      highlighted: "ветровые нагрузки до 35м/c",
    },
    callout: "По запросу рассчитаем снеговую нагрузку от 60 до 380 кг/м2",
    description: {
      regular: "При проектировании макет шатра ",
      bold: "прогоняем через аэротрубу в специальной программе Dlubal rwind",
    },
  };

  return (
    <>
      <section className="relative w-full py-12 rounded-[30px] bg-[#394355]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-4xl leading-normal font-normal">
                <span className="font-normal text-white">Нашим </span>
                <span className="font-bold text-[#86b4ff]">
                  шатрам<br />
                </span>
                <span className="font-bold text-[#86b4ff]">не страшны</span>
              </h2>
            </div>

            <div className="flex flex-wrap gap-8 md:gap-[35px] justify-center">
              {testimonialCards.map((card) => (
                <Card
                  key={card.id}
                  className="w-[260px] h-[116px] bg-white rounded-[20px] shadow-none"
                >
                  <CardContent className="p-0 flex items-center">
                    <div
                      className="w-[90px] h-[90px] rounded-[45px] flex items-center justify-center ml-[13px] my-[13px]"
                      style={{
                        background:
                          "linear-gradient(180deg, #73A8FF 0%, #6FA7FF 36.5%, #3C6CEC 100%)",
                      }}
                    >
                      {card.isImage ? (
                        <img
                          className={`w-${card.width} h-${card.height}`}
                          alt={card.title}
                          src={card.iconPath}
                        />
                      ) : (
                        <div className="w-12 h-12 bg-[url(/Clip-path-group.png)] bg-[100%_100%]" />
                      )}
                    </div>
                    <div className="font-bold text-2l text-[#394355] leading-5 ml-6 font-['Raleway',Helvetica]">
                      {card.title}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col md:flex-row items-center gap-10 w-full py-12 px-12">
        <div className="flex flex-col items-start justify-center gap-10 w-full md:w-auto">
          <div className="flex flex-col items-start gap-[30px]">
            <div className="flex flex-col w-full max-w-[621px] items-start gap-3">
              <div className="flex items-start gap-3">
                <p className="font-normal text-[#4f5d80] text-sm leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                  <span className="font-medium">
                    {featureData.subtitle.split("шатер")[0]}шатер
                  </span>
                  <span className="font-bold">
                    {featureData.subtitle.split("шатер")[1]}
                  </span>
                </p>
              </div>

              <h2 className="text-4xl leading-[normal] [font-family:'Raleway',Helvetica] tracking-[0]">
                <span className="font-medium text-[#232c42]">
                  {featureData.title.regular}
                </span>
                <span className="font-bold text-[#527dc5]">
                  {featureData.title.highlighted}
                </span>
              </h2>
            </div>

            <Card className="bg-[#e8edf7] border-none rounded-[10px]">
              <CardContent className="px-4 py-1.5">
                <p className="font-semibold text-[#394355] text-xl leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                  {featureData.callout}
                </p>
              </CardContent>
            </Card>

            <p className="text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica] tracking-[0] max-w-[643px]">
              <span className="font-normal">
                {featureData.description.regular}
              </span>
              <span className="font-semibold">
                {featureData.description.bold}
              </span>
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Button
              variant="outline"
              size="icon"
              className="w-14 h-14 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
            >
              <div className="rotate-180">
                <img
                  className="w-3.5 h-6 -rotate-180"
                  alt="Previous slide"
                  src="/GROP-10.png"
                />
              </div>
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="w-14 h-14 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
            >
              <img className="w-3.5 h-6" alt="Next slide" src="/GROP-11.png" />
            </Button>
          </div>
        </div>

        <Card className="relative w-full md:w-[656px] h-[394px] bg-[#e8edf7] rounded-[20px] border-none">
          <CardContent className="p-0 h-full flex items-center justify-center">
            <Button
              variant="outline"
              size="icon"
              className="w-[75px] h-[75px] bg-white rounded-full border-none"
            >
              <img
                className="w-[25px] h-[29px]"
                alt="PlayIcon video"
                src="/Polygon-2.svg"
              />
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
};