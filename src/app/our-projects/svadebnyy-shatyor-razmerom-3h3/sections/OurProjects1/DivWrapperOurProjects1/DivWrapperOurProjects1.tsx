'use client';

import { Card, CardContent } from "../../../../../../components/ui/card";
import { ReactElement } from 'react';

export const DivWrapperOurProjects1 = (): ReactElement => {
  // Equipment items data
  const equipmentItems = [
    {
      title: "Двойной тент\nс утеплителем",
    },
    {
      title: "Одностворчатая входная группа",
    },
    {
      title: "Козырек над входом",
    },
    {
      title: "Внутреннее утепление",
    },
    {
      title: "Вентиляционный диффузор и зонтик",
    },
    {
      title: "Глэмбоксы с внутренним оснащением, электрикой и водоснабжением",
      wide: true,
    },
  ];

  // Done items data
  const doneItems = [
    {
      icon: "/group-9.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus",
    },
    {
      icon: "/group-10.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus",
    },
    {
      icon: "/group-11.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus",
    },
  ];

  return (
    <section className="flex flex-col md:flex-row gap-[22px] w-full py-8 px-12">
      {/* Equipment Section */}
      <div className="flex flex-col gap-4 relative top-[80px] ">
        <h2 className="font-semibold text-[#394355] text-2xl leading-6 [font-family:'Raleway',Helvetica]">
          Комплектация
        </h2>

        <Card className="w-full bg-white md:w-[662px] border-0 shadow-[var(--)] rounded-[20px] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]">
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-[24px]">
              {equipmentItems.map((item, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <div className="flex flex-col gap-2.5 px-4 py-2.5 bg-[#f5f6ff] rounded-[10px]">
                    <div
                      className={`flex flex-col ${item.wide ? "w-[393px]" : "w-[222px]"} gap-2`}
                    >
                      <div
                        className={`${item.wide ? "w-[455px]" : "w-[198px]"} font-bold text-[#527dc5] text-xl leading-6 [font-family:'Raleway',Helvetica]`}
                      >
                        {item.title}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-9 relative top-[80px] ">
        {/* Task Section */}
        <div className="flex flex-col gap-4">
          <h2 className="font-semibold text-[#394355] text-2xl leading-6 [font-family:'Raleway',Helvetica]">
            Задача
          </h2>
          <p className="w-full md:w-[660px] [font-family:'Raleway',Helvetica] font-normal text-[#394355] text-sm leading-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            euismod bibendum laoreet. Proin gravida dolor sit amet lacus
          </p>
        </div>

        {/* Done Section */}
        <div className="flex flex-col gap-5">
          <h2 className="font-semibold text-[#394355] text-2xl leading-6 [font-family:'Raleway',Helvetica]">
            Сделали
          </h2>
          <div className="flex flex-col gap-4">
            {doneItems.map((item, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="relative w-6 h-6">
                  <img
                    className="absolute w-6 h-[17px] top-[3px] left-0"
                    alt="Group"
                    src={item.icon}
                  />
                </div>
                <div className="flex flex-col w-full md:w-[612px]">
                  <p className="[font-family:'Raleway',Helvetica] font-normal text-[#394355] text-sm leading-5">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Result Section */}
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-[#394355] text-2xl leading-6 [font-family:'Raleway',Helvetica]">
            Итог
          </h2>
          <p className="w-full md:w-[660px] [font-family:'Raleway',Helvetica] font-normal text-[#394355] text-sm leading-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            euismod bibendum laoreet. Proin gravida dolor sit amet lacus
          </p>
        </div>
      </div>
    </section>
  );
};
