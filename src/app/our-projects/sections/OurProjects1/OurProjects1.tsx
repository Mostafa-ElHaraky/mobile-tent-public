'use client';

import React, { ReactElement } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";
import { Checkbox } from "../../../../components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

export const OurProjects1 = (): ReactElement => {
  return (
    <div className="relative z-10 w-full bg-white">
      <ProjectShowcaseSection />
      <ServiceDetailsSection />
      <ContactInfoSection />

      <div className="mx-auto w-full max-w-[1440px] flex justify-center py-8 px-4 lg:px-6">
        <button className="font-bold text-[#527dc5] text-2xl leading-6 underline whitespace-nowrap [font-family:'Raleway',Helvetica]">
          Показать еще
        </button>
      </div>
    </div>
  );
};

/* ------------------------- ProjectShowcaseSection ------------------------- */

const ProjectShowcaseSection = (): ReactElement => {
  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-[1440px] px-4 lg:px-6">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12">
          <div className="flex flex-col items-start gap-9 flex-1">
            <div className="flex flex-col items-start gap-6">
              <h2 className="font-medium text-[#394355] text-4xl leading-normal [font-family:'Raleway',Helvetica]">
                Выполненные работы
              </h2>

              <div className="flex flex-col items-start gap-6">
                <Badge className="h-auto px-3 py-1.5 rounded-lg bg-[linear-gradient(159deg,rgba(36,48,87,1)_0%,rgba(55,66,85,1)_100%)] hover:bg-[linear-gradient(159deg,rgba(36,48,87,1)_0%,rgba(55,66,85,1)_100%)]">
                  <span className="font-normal text-white text-lg leading-6 whitespace-nowrap [font-family:'Raleway',Helvetica]">
                    Для наших инженеров нет сложных задач
                  </span>
                </Badge>

                <p className="font-normal text-[#394355] text-lg leading-6 [font-family:'Raleway',Helvetica]">
                  Посмотрите, как мы решаем задачи клиентов
                </p>
              </div>
            </div>
          </div>

          <Card className="w-full lg:w-[351px] h-auto rounded-[20px] shadow-2 bg-[linear-gradient(178deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] border-0">
            <CardContent className="p-6">
              <div className="flex flex-col items-start gap-3">
                <h3 className="font-bold text-4xl [font-family:'Raleway',Helvetica] text-white leading-normal whitespace-nowrap">
                  1 500 000+ м2
                </h3>
                <p className="font-medium text-white text-base leading-normal [font-family:'Raleway',Helvetica]">
                  площадь произведенных тентовых конструкций
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

/* ------------------------- ServiceDetailsSection ------------------------- */

const ServiceDetailsSection = (): ReactElement => {
  const constructionTypes = [
    { id: "tents", label: "Шатры" },
    { id: "hangars", label: "Ангары" },
  ];

  const filterSelects = [
    { label: "Тип шатра", placeholder: "Тип шатра" },
    { label: "Площадь шатра", placeholder: "Площадь шатра" },
    { label: "Для какого мероприятия", placeholder: "Для какого мероприятия" },
  ];

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background decorations behind everything */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[800px] bg-[linear-gradient(180deg,rgba(232,238,248,1)_0%,rgba(222,228,240,0)_100%)] z-0" />
      <img
        className="pointer-events-none absolute top-0 left-0 w-[719px] h-[643px] object-cover z-0"
        alt="Element clouds"
        src="/08-clouds-2.png"
      />
      <img
        className="pointer-events-none absolute bottom-[-20px] left-0 w-[318px] h-10 z-0"
        alt="Vecteezy overgrown"
        src="/vecteezy-overgrown-green-grass-generative-ai-generated-24190129-.png"
      />

      {/* Centered content above backgrounds */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 lg:px-6 py-8">
        <nav className="mt-6 inline-flex items-center justify-center gap-2.5 rounded bg-[#4f5d801a] px-3 py-1">
          <div className="relative w-fit [font-family:'Raleway',Helvetica] text-xs text-[#394355]">
            <span className="font-normal">Главная &gt;{"  "}</span>
            <span className="font-medium underline">Портфолио</span>
          </div>
        </nav>

        <div className="mt-10 grid grid-cols-1 items-start gap-8 lg:grid-cols-[260px,1fr,auto]">
          <div className="flex flex-col items-start gap-4">
            <h3 className="[font-family:'Raleway',Helvetica] text-lg font-semibold text-[#232c42]">
              Конструкция
            </h3>
            <div className="flex flex-col items-start gap-4">
              {constructionTypes.map((type) => (
                <label key={type.id} htmlFor={type.id} className="flex cursor-pointer items-center gap-2.5">
                  <Checkbox
                    id={type.id}
                    className="h-[33px] w-[33px] rounded-lg border-2 border-[#dddddd] data-[state=checked]:bg-transparent data-[state=checked]:border-[#dddddd]"
                  />
                  <span className="[font-family:'Raleway',Helvetica] text-base font-medium leading-6 text-[#394355]">
                    {type.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            {filterSelects.map((select, index) => (
              <div key={index} className="flex flex-col items-start gap-2.5">
                <label className="sr-only">{select.label}</label>
                <Select>
                  <SelectTrigger className="h-auto w-full min-w-[240px] rounded-lg border-2 border-[#dddddd] p-3 [font-family:'Raleway',Helvetica] text-base font-medium leading-6 text-[#394355]">
                    <SelectValue placeholder={select.placeholder} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Опция 1</SelectItem>
                    <SelectItem value="option2">Опция 2</SelectItem>
                    <SelectItem value="option3">Опция 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            ))}
          </div>

          <div className="flex items-start justify-end">
            <button className="bg-transparent p-0 text-left [font-family:'Raleway',Helvetica] text-base font-bold leading-6 text-[#527dc5] underline">
              Сбросить фильтр
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ------------------------- ContactInfoSection ------------------------- */

const projectsData = [
  { id: 1, title: "SPA отель Мриан бей", city: "Москва", area: "250 м²", image: "/rectangle-85-5.png" },
  { id: 2, title: "SPA отель Мриан бей", city: "Москва", area: "250 м²", image: "/rectangle-85-5.png" },
  { id: 3, title: "SPA отель Мриан бей", city: "Москва", area: "250 м²", image: "/rectangle-85-5.png" },
  { id: 4, title: "SPA отель Мриан бей", city: "Москва", area: "250 м²", image: "/rectangle-85-5.png" },
  { id: 5, title: "SPA отель Мриан бей", city: "Москва", area: "250 м²", image: "/rectangle-85-5.png" },
  { id: 6, title: "SPA отель Мриан бей", city: "Москва", area: "250 м²", image: "/rectangle-85-5.png" },
];

const ContactInfoSection = (): ReactElement => {
  return (
    <section className="relative w-full py-6">
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 lg:px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <Card
              key={project.id}
              className="relative cursor-pointer overflow-hidden rounded-[20px] border-0 transition-opacity hover:opacity-90"
            >
              <CardContent className="relative h-[309px] p-0">
                <img className="h-full w-full object-cover" alt={project.title} src={project.image} />
                <div className="absolute inset-0 flex flex-col justify-between p-[30px]">
                  <div className="flex flex-col gap-5">
                    <h3 className="[font-family:'Raleway',Helvetica] text-lg font-semibold leading-[normal] text-white">
                      {project.title}
                    </h3>
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-start gap-2">
                        <span className="[font-family:'Raleway',Helvetica] text-base font-normal leading-[normal] text-white">
                          Город:
                        </span>
                        <span className="[font-family:'Raleway',Helvetica] text-base font-semibold leading-[normal] text-white">
                          {project.city}
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="[font-family:'Raleway',Helvetica] text-base font-normal leading-[normal] text-white">
                          Площадь:
                        </span>
                        <span className="[font-family:'Raleway',Helvetica] text-base font-semibold leading-[normal] text-white">
                          {project.area}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="[font-family:'Raleway',Helvetica] text-lg font-semibold leading-[normal] text-white">
                    Подробнее
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
