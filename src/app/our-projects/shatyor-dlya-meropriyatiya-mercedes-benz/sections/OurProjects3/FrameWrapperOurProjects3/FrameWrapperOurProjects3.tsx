'use client';

import { ReactElement } from 'react';
import { Button } from "../../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../../components/ui/card";
import { useRouter } from 'next/navigation';

export const FrameWrapperOurProjects3 = (): ReactElement => {
  const router = useRouter();

  const projects = [
    {
      id: 4,
      title: "Шатры представительского класса в Архангельске",
      city: "Архангельск",
      area: "уточняйте у менеджера",
      image: "/18-shatry-predstavitelskogo-klassa-v-arhangelske.webp",
      type: "event",
      event: "corporate",
      construction: "tents",
      actualArea: "large",
      date: "вс, 06/05/2016",
      link: "/our-projects/shatry-predstavitelskogo-klassa-v-arhangelske",
      service: "Аренда, монтаж, демонтаж, отопление, освещение, меблирование, декорирование.",
    },
    {
      id: 5,
      title: "Шатёр для мероприятия Mercedes-Benz",
      city: "—",
      area: "уточняйте у менеджера",
      image: "/17-shater-dlya-meropriyatiya-mercedes-benz.webp",
      type: "event",
      event: "corporate",
      construction: "tents",
      actualArea: "large",
      date: "вс, 06/05/2016",
      link: "/our-projects/shatyor-dlya-meropriyatiya-mercedes-benz",
      service: "Аренда, монтаж, демонтаж, отопление, освещение, меблирование, декорирование.",
    },
    {
      id: 6,
      title: "Мобильный шатёр JACOBS",
      city: "—",
      area: "уточняйте у менеджера",
      image: "/16-mobilnyy-shater-jacobs.webp",
      type: "mobile",
      event: "corporate",
      construction: "tents",
      actualArea: "small",
      date: "чт, 05/05/2016",
      link: "/our-projects/mobilnyy-shatyor-jacobs",
      service: "Аренда, монтаж, демонтаж, отопление, освещение, меблирование, декорирование.",
    },
  ];

  const handleProjectClick = (link: string) => {
    router.push(link);
  };

  const handleShowMore = () => {
    // Add your "show more" logic here
    console.log('Show more clicked');
  };

  return (
    <section className="flex flex-col items-start gap-10 w-full py-8">
      <h2 className="text-4xl font-semibold font-[Raleway,Helvetica]">
        <span className="text-[#527dc5]">Другие </span>
        <span className="text-[#232c42]">выполненные работы</span>
      </h2>

      <div className="flex flex-col items-center gap-9 w-full">
        <div className="flex flex-wrap items-start gap-6 justify-start w-full">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="w-[432px] h-[309px] p-0 overflow-hidden border-0 rounded-30 cursor-pointer transition-transform hover:scale-105"
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onClick={() => handleProjectClick(project.link)}
            >
              <CardContent className="flex flex-col h-[255px] justify-between p-[30px]">
                <div className="flex flex-col gap-5">
                  <h3 className="font-[Raleway,Helvetica] font-semibold text-black text-lg">
                    {project.title}
                  </h3>

                  <div className="flex flex-col gap-1.5">
                    <div className="flex gap-2">
                      <span className="font-normal text-black text-base font-[Raleway,Helvetica]">
                        Город:
                      </span>
                      <span className="font-semibold text-black text-base font-[Raleway,Helvetica]">
                        {project.city}
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <span className="font-normal text-black text-base font-[Raleway,Helvetica]">
                        Площадь:
                      </span>
                      <span className="font-semibold text-black text-base font-[Raleway,Helvetica]">
                        {project.area}
                      </span>
                    </div>
                  </div>
                </div>

                <Button
                  variant="link"
                  className="p-0 h-auto w-fit font-semibold text-black text-lg font-[Raleway,Helvetica] hover:no-underline"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleProjectClick(project.link);
                  }}
                >
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};