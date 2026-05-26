'use client';

import { Card, CardContent } from "../../../../../components/ui/card";
import { ReactElement, useState, useEffect } from 'react';

export const GroupServices3 = (): ReactElement => {
  const [showSwipeHint, setShowSwipeHint] = useState(true);
  
  // Card data for mapping
  const cards = [
    {
      id: 1,
      image: "/GroupServices3id1.webp",
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
      image: "/GroupServices3id2.webp",
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
      image: "/Tent.GroupServices3.webp",
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
      image: "/GroupServices3id4.webp",
      imageWidth: "291px",
      imageHeight: "244px",
      imageTop: "1px",
      imageLeft: "3.5px",
      title: "Без скрытых расходов и изменения цены",
      description: "цена фиксируемая в договоре не подлежит изменению и не всплывают дополнительные платежи",
      shadowTop: "148px",
      textSize: "text-[15px]",
    },
  ];

  // إخفاء مؤشر السحب بعد 5 ثوانٍ أو عند التمرير
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSwipeHint(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleScroll = () => {
    setShowSwipeHint(false);
  };

  return (
    <>
      {/* Desktop Version */}
      <section className="hidden md:block w-full py-4 rounded-[20px]">
        <div className="flex flex-col items-start gap-9 px-12 pt-[60px] w-full max-w-[1440px] mx-auto h-auto min-h-[528px] relative top-[16px] rounded-[20px] bg-[linear-gradient(108.32deg,_#243057_-27.58%,_#4C638A_107.93%)]">
          <div className="w-full">
            <h2 className="font-semibold text-4xl leading-[normal] [font-family:'Raleway',Helvetica] tracking-[0] whitespace-nowrap">
              <span className="text-white">Оснастим так, </span>
              <span className="text-[#86b3ff]">чтобы не пришлось переделывать</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-6 w-full">
            {cards.map((card) => (
              <Card
                key={card.id}
                className="relative w-full sm:w-[300px] md:w-[318px] h-[330px] bg-white rounded-[20px] border border-solid border-[#dddddd] shadow-lg backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]"
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
                      className="absolute object-contain"
                      alt="Element"
                      src={card.image}
                      style={{
                        width: card.imageWidth,
                        height: card.imageHeight,
                        top: card.imageTop,
                        left: card.imageLeft,
                      }}
                      loading="lazy"
                    />

                    {/* Text content */}
                    <div
                      className={`absolute font-normal text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica] tracking-[0] ${card.textSize || ""}`}
                      style={{
                        top: card.id === 1 ? "230px" : "211px",
                        left: card.id === 4 ? "17px" : card.id === 3 ? "27px" : card.id === 2 ? "26px" : "27px",
                        width: card.id === 4 ? "282px" : card.id === 3 ? "275px" : "264px",
                      }}
                    >
                      <span className="font-semibold">{card.title} </span>
                      <span className={`[font-family:'Raleway',Helvetica] font-normal text-[#394355] ${card.textSize || "text-base"} tracking-[0] leading-6`}>
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

      {/* Mobile Version with Horizontal Scroll */}
      <section className="block md:hidden w-full py-6 rounded-[20px] bg-[linear-gradient(108.32deg,_#243057_-27.58%,_#4C638A_107.93%)] relative">
        {/* Swipe Hint Overlay */}
        {showSwipeHint && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 z-50 rounded-[20px] animate-fadeIn">
            <div className="text-center text-white p-6">
              <div className="mb-6">
                <div className="animate-bounce mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h58" />
                  </svg>
                </div>
                <p className="text-xl font-bold mb-2">Проведите вправо

</p>
                <p className="text-lg">чтобы увидеть больше карточек

</p>
              </div>
              <button 
                onClick={() => setShowSwipeHint(false)}
                className="mt-4 px-6 py-2 bg-white text-blue-800 rounded-full font-semibold"
              >
Хорошо, понял

              </button>
            </div>
          </div>
        )}

        <div className="flex flex-col items-center gap-6 px-4 pt-6">
          <div className="w-full text-center">
            <h2 className="font-semibold text-2xl leading-normal [font-family:'Raleway',Helvetica] tracking-[0]">
              <span className="text-white">Оснастим так, </span>
              <span className="text-[#86b3ff]">чтобы не пришлось переделывать</span>
            </h2>
          </div>

          <div className="flex overflow-x-auto gap-4 w-full pb-4 hide-scrollbar snap-x snap-mandatory" onScroll={handleScroll}>
            {cards.map((card) => (
              <div key={card.id} className="flex-shrink-0 w-[85vw] snap-center">
                <Card className="relative w-full h-[380px] bg-white rounded-[20px] border border-solid border-[#dddddd] shadow-lg">
                  <CardContent className="p-0 h-full flex flex-col">
                    {/* Gradient background */}
                    <div className="w-full h-[180px] rounded-t-[20px] [background:linear-gradient(180deg,rgba(176,191,220,1)_0%,rgba(232,238,248,0)_100%)] relative flex items-center justify-center">
                      {/* Shadow effect */}
                      <div
                        className="absolute w-[100px] h-[25px] bg-[#8c9db6] rounded-full blur-[12px]"
                        style={{ bottom: "10px", left: "50%", transform: "translateX(-50%)" }}
                      />

                      {/* Image */}
                      <div className="relative h-full w-full flex items-center justify-center">
                        <img
                          className="object-contain max-h-[160px]"
                          alt="Element"
                          src={card.image}
                          style={{
                            maxWidth: "85%",
                            height: "auto",
                          }}
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Text content */}
                    <div className="flex-1 p-4 flex flex-col justify-center">
                      <div className={`text-center ${card.textSize || "text-base"}`}>
                        <p className="font-semibold text-[#394355] [font-family:'Raleway',Helvetica] mb-2">
                          {card.title}
                        </p>
                        <p className="font-normal text-[#394355] [font-family:'Raleway',Helvetica]">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          

          {/* Persistent Swipe Hint at Bottom */}
          <div className="flex items-center justify-center gap-2 text-white/80 text-sm mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h58" />
            </svg>
            <span>Пролистайте вправо, чтобы увидеть больше</span>
          </div>
        </div>

        <style jsx>{`
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          .animate-fadeIn {
            animation: fadeIn 0.5s ease-in-out;
          }
          
          /* تحسينات للشاشات الصغيرة جدًا */
          @media (max-width: 340px) {
            .flex-shrink-0 {
              width: 95vw;
            }
          }
        `}</style>
      </section>
    </>
  );
};