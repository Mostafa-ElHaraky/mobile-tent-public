'use client';

import { Button } from "../../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../../components/ui/card";
import { ReactElement } from 'react';

export const FrameWrapperOurProjects3 = (): ReactElement => {
  // Project data for mapping
  const projects = [
    {
      id: 1,
      title: "SPA отель Мриан бей",
      city: "Москва",
      area: "250 м2",
      image: "/RectangleOurProjects.png",
    },
    {
      id: 2,
      title: "SPA отель Мриан бей",
      city: "Москва",
      area: "250 м2",
      image: "/RectangleOurProjects.png",
    },
    {
      id: 3,
      title: "SPA отель Мриан бей",
      city: "Москва",
      area: "250 м2",
      image: "/RectangleOurProjects.png",
    },
  ];

  return (
    <section className="flex flex-col items-start gap-10 w-full py-8">
      <h2 className="text-4xl font-semibold [font-family:'Raleway',Helvetica]">
        <span className="text-[#527dc5]">Другие </span>
        <span className="text-[#232c42]">выполненные работы</span>
      </h2>

      <div className="flex flex-col items-center gap-[35px] w-full">
        <div className="flex flex-wrap items-start gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="w-[432px] h-[309px] p-0 overflow-hidden border-0 rounded-none"
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: "cover",
                backgroundPosition: "50% 50%",
              }}
            >
              <CardContent className="flex flex-col h-[255px] justify-between p-0 pt-[30px] pl-[30px]">
                <div className="flex flex-col items-start gap-5">
                  <h3 className="mt-[-1px] [font-family:'Raleway',Helvetica] font-semibold text-white text-lg whitespace-nowrap">
                    {project.title}
                  </h3>

                  <div className="flex flex-col items-start gap-1.5">
                    <div className="flex items-start gap-2">
                      <span className="mt-[-1px] font-normal text-white text-base whitespace-nowrap [font-family:'Raleway',Helvetica]">
                        Город:
                      </span>
                      <span className="mt-[-1px] font-semibold text-white text-base whitespace-nowrap [font-family:'Raleway',Helvetica]">
                        {project.city}
                      </span>
                    </div>

                    <div className="flex items-start gap-2">
                      <span className="mt-[-1px] font-normal text-white text-base whitespace-nowrap [font-family:'Raleway',Helvetica]">
                        Площадь:
                      </span>
                      <span className="mt-[-1px] font-semibold text-white text-base whitespace-nowrap [font-family:'Raleway',Helvetica]">
                        {project.area}
                      </span>
                    </div>
                  </div>
                </div>

                <Button
                  variant="link"
                  className="p-0 h-auto w-fit font-semibold text-white text-lg [font-family:'Raleway',Helvetica] hover:no-underline"
                >
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Button
          variant="link"
          className="font-bold text-[#527dc5] text-2xl leading-6 underline [font-family:'Raleway',Helvetica]"
        >
          Показать еще
        </Button>
      </div>
    </section>
  );
};
