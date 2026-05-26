'use client';

import { Card, CardContent } from "../../../../../components/ui/card";
import { ReactElement } from 'react';
import Image from 'next/image';

export const FrameWrapperShatry7 = (): ReactElement => {
  // Data for process steps
  const processSteps = [
    {
      number: "01",
      title: "Сообщаете пожелания и задачи",
      description:
        "Эксперты помогут определиться с выбором модели и оснащения под ваши задачи. Проведут расчет стоимости, сроков изготовления и доставки",
      images: [
        {
          src: "/checklist-------1.webp",
          alt: "Checklist",
          className: "w-[171px] h-[175px] absolute top-[18px] left-[229px]",
          mobileClassName: "w-[120px] h-[123px] absolute top-[15px] left-[50%] transform -translate-x-1/2"
        },
        {
          src: "/felt-tip-pen--10-------1.webp",
          alt: "Felt tip pen",
          className:
            "w-[105px] h-[105px] absolute top-[98px] left-[305px] object-cover",
          mobileClassName: "w-[74px] h-[74px] absolute top-[70px] left-[50%] transform -translate-x-1/2 object-cover"
        },
      ],
    },
    {
      number: "02",
      title: "Создание 3Д модели",
      description: (
        <>
          а 1-2 часа готовим 3D модель будущей конструкции с расчетом стоимости.
          <br />
          <br />
          <span className="italic text-[#527dc5]">
            *Отправляем КП со сметой
          </span>
        </>
      ),
      images: [
        {
          src: "/tent-i03-1.webp",
          alt: "Tent",
          className: "w-[252px] h-[185px] absolute top-0 left-[168px]",
          mobileClassName: "w-[176px] h-[130px] absolute top-0 left-[50%] transform -translate-x-1/2"
        },
      ],
    },
    {
      number: "03",
      title: "Геодезия и проектирование",
      description: (
        <>
          Специалист производит топографическую съемку на объекте для
          правильного расположения шатра. 1 день.
          <br />
          <span className="font-semibold text-[#527dc5]">еще....</span>
        </>
      ),
      images: [
        {
          src: "/tent-i03-1-1.webp",
          alt: "Tent",
          className: "w-[188px] h-[218px] absolute top-0 left-[209px]",
          mobileClassName: "w-[132px] h-[153px] absolute top-0 left-[50%] transform -translate-x-1/2"
        },
      ],
    },
  ];

  return (
    <>
      {/* Desktop version */}
      <section className="hidden md:flex flex-wrap justify-center w-full max-w-[1339px] h-auto gap-[20px] py-8 mx-auto mt-[1210px]">
        <section className="w-full px-12 mt-8">
          <h2 className="font-semibold text-4xl [font-family:'Raleway',Helvetica] tracking-[0]">
            <span className="text-[#232c42]">Этапы работы при создании </span>
            <span className="text-[#527dc5]">шатра под ключ</span>
          </h2>
        </section>
        {processSteps.map((step, index) => (
          <Card
            key={index}
            className="relative w-[433px] h-[434px] rounded-[20px] border-0 overflow-hidden shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] backdrop-blur-[79px]"
          >
            <CardContent className="p-0 h-full">
              <div className="relative w-full h-full bg-white rounded-[20px]">
                {/* Circular background for step number */}
                <div className="absolute w-[216px] h-[216px] top-[-63px] left-[-61px] bg-[#dee4f066] rounded-[108px]" />

                {/* Step number with gradient */}
                <div 
                  className="absolute top-[44px] left-[32px] [text-shadow:0px_4px_20px_#0000001a] font-raleway font-bold text-black text-[50px] tracking-[0] leading-6 whitespace-nowrap"
                >
                  {step.number}
                </div>

                {/* Images */}
                {step.images.map((image, imgIndex) => (
                  <Image
                    key={imgIndex}
                    className={image.className}
                    alt={image.alt}
                    src={image.src}
                    width={500}
                    height={300}
                    loading="lazy"
                  />
                ))}

                {/* Text content */}
                <div className="absolute bottom-[25px] left-[25px] flex flex-col items-start gap-[18px] max-w-[385px]">
                  <h3 className="[font-family:'Raleway',Helvetica] font-bold text-[#232c42] text-xl tracking-[0] leading-6">
                    {step.title}
                  </h3>
                  <div className="[font-family:'Raleway',Helvetica] font-normal text-[#394355] text-lg tracking-[0] leading-6">
                    {step.description}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Mobile version */}
      <section className="flex md:hidden flex-col items-center w-full px-4 py-8 mx-auto mt-8">
        <section className="w-full px-4 mt-4 mb-6">
          <h2 className="font-semibold text-2xl text-center [font-family:'Raleway',Helvetica] tracking-[0]">
            <span className="text-[#232c42]">Этапы работы при создании </span>
            <span className="text-[#527dc5]">шатра под ключ</span>
          </h2>
        </section>
        
        <div className="flex flex-col items-center gap-6 w-full">
          {processSteps.map((step, index) => (
            <Card
              key={index}
              className="relative w-full max-w-[350px] h-[380px] rounded-[20px] border-0 overflow-hidden shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] backdrop-blur-[79px]"
            >
              <CardContent className="p-0 h-full">
                <div className="relative w-full h-full bg-white rounded-[20px]">
                  {/* Circular background for step number */}
                  <div className="absolute w-[150px] h-[150px] top-[-40px] left-[-40px] bg-[#dee4f066] rounded-[75px]" />

                  {/* Step number with gradient */}
                  <div 
                    className="absolute top-[25px] left-[20px] [text-shadow:0px_4px_20px_#0000001a] font-raleway font-bold text-black text-[36px] tracking-[0] leading-6 whitespace-nowrap"
                  >
                    {step.number}
                  </div>

                  {/* Images */}
                  {step.images.map((image, imgIndex) => (
                    <Image
                      key={imgIndex}
                      className={image.mobileClassName}
                      alt={image.alt}
                      src={image.src}
                      width={300}
                      height={200}
                      loading="lazy"
                    />
                  ))}

                  {/* Text content */}
                  <div className="absolute bottom-[20px] left-[20px] right-[20px] flex flex-col items-start gap-[12px]">
                    <h3 className="[font-family:'Raleway',Helvetica] font-bold text-[#232c42] text-lg tracking-[0] leading-6 text-center w-full">
                      {step.title}
                    </h3>
                    <div className="[font-family:'Raleway',Helvetica] font-normal text-[#394355] text-base tracking-[0] leading-6 text-center w-full">
                      {step.description}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};