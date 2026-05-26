'use client';

import { Card, CardContent } from "../../../../../components/ui/card";
import { ReactElement } from 'react';

export const GroupServices3 = (): ReactElement => {
  // Card data for mapping
  const cards = [
    {
      id: 1,
      image: "/GroupServices3id1.png",
      imageWidth: "259px",
      imageHeight: "311px",
      imageTop: "0",
      imageLeft: "30px",
      title: "Используем современные материалы и технологии,",
      description: "чтобы сохранять шатер в первозданном виде",
      shadowTop: "166px",
    },
    {
      id: 2,
      image:
        "/GroupServices3id2.png",
      imageWidth: "254px",
      imageHeight: "221px",
      imageTop: "4px",
      imageLeft: "8px",
      title: "Соблюдаем брендовые стандарты",
      description: "гайдланы, дизайн-концепции и другие стандарты заказчика",
      shadowTop: "148px",
    },
    {
      id: 3,
      image: "/Tent.GroupServices3.png",
      imageWidth: "244px",
      imageHeight: "239px",
      imageTop: "1.5px",
      imageLeft: "37px",
      title: "Соблюдаем сроки и несем ответственность",
      description: "по договору в случае их нарушения",
      shadowTop: "148px",
    },
    {
      id: 4,
      image:
        "/GroupServices3id4.png",
      imageWidth: "291px",
      imageHeight: "244px",
      imageTop: "1px",
      imageLeft: "3.5px",
      title: "Без скрытых расходов и изменения цены",
      description:
        "цена фиксируемая в договоре не подлежит изменению и не всплывают дополнительные платежи",
      shadowTop: "148px",
      textSize: "text-[15px]",
    },
  ];

  return (
    <section className="w-full py-4 rounded-[20px]">
<div 
  className="
    flex flex-col items-start gap-9 px-12 pt-[60px]
    w-[1440px] h-[528px] relative top-[16px]
    rounded-[20px]
    bg-[linear-gradient(108.32deg,_#243057_-27.58%,_#4C638A_107.93%)]
  "
>        <div className="w-full">
          <h2 className="font-semibold text-4xl leading-[normal] [font-family:'Raleway',Helvetica] tracking-[0] whitespace-nowrap">
            <span className="text-white">Оснастим так, </span>
            <span className="text-[#86b3ff]">
              чтобы не пришлось переделывать
            </span>
          </h2>
        </div>

        <div className="flex items-start gap-6 flex-wrap">
          {cards.map((card) => (
            <Card
              key={card.id}
              className="relative w-[318px] h-[330px] bg-white rounded-[20px] border border-solid border-[#dddddd] shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]"
            >
              <CardContent className="p-0 h-full">
                <div className="relative w-full h-full">
                  {/* Gradient background */}
                  <div className="absolute top-0 left-0 w-full h-[204px] rounded-[20px] [background:linear-gradient(180deg,rgba(176,191,220,1)_0%,rgba(232,238,248,0)_100%)]" />

                  {/* Shadow effect */}
                  <div
                    className="absolute w-[120px] h-[33px] bg-[#8c9db6] rounded-[60px/16.5px] blur-[15px]"
                    style={{ top: card.shadowTop, left: "99px" }}
                  />

                  {/* Image */}
                  <img
                    className="absolute"
                    alt="Element"
                    src={card.image}
                    style={{
                      width: card.imageWidth,
                      height: card.imageHeight,
                      top: card.imageTop,
                      left: card.imageLeft,
                    }}
                  />

                  {/* Text content */}
                  <div
                    className={`absolute w-[264px] font-normal text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica] tracking-[0] ${card.textSize || ""}`}
                    style={{
                      top: card.id === 1 ? "230px" : "211px",
                      left:
                        card.id === 4
                          ? "17px"
                          : card.id === 3
                            ? "27px"
                            : card.id === 2
                              ? "26px"
                              : "27px",
                      width:
                        card.id === 4
                          ? "282px"
                          : card.id === 3
                            ? "275px"
                            : "264px",
                    }}
                  >
                    <span className="font-semibold">{card.title} </span>
                    <span
                      className={`[font-family:'Raleway',Helvetica] font-normal text-[#394355] ${card.textSize || "text-base"} tracking-[0] leading-6`}
                    >
                      {card.description}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
