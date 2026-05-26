'use client';

import { Card, CardContent } from "../../../../../../components/ui/card";
import { ReactElement, useState } from 'react';
import Image from 'next/image';

type Category = {
  id: number;
  name: string;
  icon: string;
  description: string;
};

type Department = {
  id: number;
  name: string;
  width?: string;
  description: string;
};

export const Frame1About1 = (): ReactElement => {
  // Team member categories with their icons
  const teamCategories: Category[] = [
    { id: 1, name: "Дизайнеры", icon: "/About1-group-19.webp", description: "Проектируют внешний вид и эргономику шатров, подбирают материалы, готовят макеты брендирования." },
    { id: 2, name: "Технологи, конструктора", icon: "/About1-group-20.webp", description: "Разрабатывают конструктивные узлы, расчёты прочности и технологические карты производства." },
    { id: 3, name: "Проектировщики", icon: "/About1-group-21.webp", description: "Готовят рабочую документацию, 3D-схемы и спецификации для производства и монтажа." },
    { id: 4, name: "Геодезисты", icon: "/About1-group-22.webp", description: "Проводят разбивку и контроль геометрии на площадке, обеспечивая точность монтажа." },
  ];

  // Department data for the right card
  const departments: Department[] = [
    { id: 1, name: "Отдел проектирования", width: "222px", description: "Отвечает за архитектурные решения, чертежи и согласование ТЗ с заказчиком." },
    { id: 2, name: "Отдел контроля качества", width: "222px", description: "Многоступенчатый контроль: входные материалы, процесс производства и итоговая приёмка." },
    { id: 3, name: "Отдел монтажа", width: "143px", description: "Сертифицированные бригады, соблюдение техники безопасности, строгие сроки развёртывания." },
    { id: 4, name: "Отдел сертификации изделий", width: "272px", description: "Обеспечивает соответствие ГОСТ/ТР ТС, ведёт паспорта изделий и протоколы испытаний." },
  ];

  // Simple, accessible Modal
  const [isOpen, setIsOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalBody, setModalBody] = useState<React.ReactNode>(null);

  const openModal = (title: string, body: React.ReactNode) => {
    setModalTitle(title);
    setModalBody(body);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const moreRolesBody = (
    <ul className="list-disc pl-5 space-y-1 text-[#394355]">
      <li>Сметчики</li>
      <li>Инженеры ПТО</li>
      <li>Производственники</li>
      <li>Логисты</li>
      <li>Специалисты по снабжению</li>
    </ul>
  );

  const moreFactoriesBody = (
    <div className="space-y-2 text-[#394355]">
      <p><span className="font-semibold">Металлоцех:</span> гибка, сварка, порошковая окраска.</p>
      <p><span className="font-semibold">Швейный участок:</span> тентовые ПВХ-полотна, ПВХ-сварка, усиление швов.</p>
      <p><span className="font-semibold">Склад и логистика:</span> комплектация, упаковка, отгрузка по РФ и СНГ.</p>
    </div>
  );

  return (
    <>
      {/* Desktop version - remains unchanged (layout), now interactive */}
      <main className="relative top-[550px] left-[60px] hidden desktop:block">
        <div className="flex items-start gap-[134px] w-full">
          <div className="flex flex-col items-start gap-[45px]">
            <div className="flex flex-col items-start gap-[22px] w-[574px]">
              <div className="flex flex-col items-start gap-3 w-full">
                <div className="font-semibold text-4xl leading-normal [font-family:'Raleway',Helvetica] tracking-[0] w-[674px]">
                  <span className="text-[#527dc5]">Экспертная команда </span>
                  <span className="text-[#394355]">
                    воплотит мечты
                    <br />
                    об идеальном шатре под ваши задачи
                  </span>
                </div>
              </div>

              <div className="w-[510px] font-normal text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                <span className="font-bold">Работает, как единый организм</span>
                <span className="font-semibold">&nbsp;</span>
                <span className="font-medium">
                  из 80 человек с высшим строительным и инженерным образованием и
                  опытом от 10 лет
                </span>
              </div>
            </div>

            <div className="flex flex-col items-start gap-6">
              <div className="flex items-start justify-between w-[560px]">
                {teamCategories.slice(0, 3).map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => openModal(category.name, <p className="text-[#394355]">{category.description}</p>)}
                    className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#527dc5] rounded-md px-1 py-1 hover:opacity-90 cursor-pointer"
                    aria-label={`Подробнее: ${category.name}`}
                  >
                    <span className="relative w-6 h-6 shrink-0">
                      <Image
                        alt={`${category.name} icon`}
                        src={category.icon}
                        fill
                        loading="lazy"
                        style={{ objectFit: 'contain' }}
                      />
                    </span>
                    <span className="[font-family:'Raleway',Helvetica] font-semibold text-[#394355] text-sm tracking-[0] leading-5 whitespace-nowrap">
                      {category.name}
                    </span>
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-between w-[413px]">
                <button
                  type="button"
                  onClick={() => openModal("Геодезисты", <p className="text-[#394355]">{teamCategories.find(t => t.name === 'Геодезисты')?.description}</p>)}
                  className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#527dc5] rounded-md px-1 py-1 hover:opacity-90 cursor-pointer"
                  aria-label="Подробнее: Геодезисты"
                >
                  <span className="relative w-6 h-6 shrink-0">
                    <Image
                      alt="Геодезисты icon"
                      src="/About1-group-22.webp"
                      fill
                      style={{ objectFit: 'contain' }}
                      loading="lazy"
                    />
                  </span>
                  <span className="[font-family:'Raleway',Helvetica] font-semibold text-[#394355] text-sm tracking-[0] leading-5 whitespace-nowrap">
                    Геодезисты
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => openModal("Другие должности", moreRolesBody)}
                  className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#527dc5] rounded-md px-1 py-1 hover:opacity-90 cursor-pointer"
                  aria-label="Посмотреть другие должности"
                >
                  <span className="font-semibold text-[#527dc5] text-sm leading-5 underline whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                    и еще 5+ должностей разного уровня
                  </span>
                </button>
              </div>
            </div>
          </div>

          <Card className="w-[631px] bg-white rounded-[20px] border-0 shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]">
            <CardContent className="flex flex-col items-center justify-center gap-9 py-[29px] px-0">
              <div className="flex flex-wrap w-[619px] h-[143px] items-start justify-center gap-[24px_12px]">
                {departments.map((department) => (
                  <button
                    key={department.id}
                    type="button"
                    onClick={() => openModal(department.name, <p className="text-[#394355]">{department.description}</p>)}
                    className="flex flex-col items-start gap-2.5 p-4 bg-[#f5f6ff] rounded-[10px] hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#527dc5] cursor-pointer"
                    style={{ width: department.width }}
                    aria-label={`Подробнее: ${department.name}`}
                  >
                    <div className="flex flex-col items-center justify-center gap-2 w-full">
                      <div className="font-bold text-[#527dc5] text-lg text-center whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0] leading-6">
                        {department.name}
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => openModal("Дополнительно: производства", moreFactoriesBody)}
                className="w-[432px] font-bold text-[#394355] text-base text-center leading-6 underline [font-family:'Raleway',Helvetica] tracking-[0] hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#527dc5] rounded-md px-1 py-1 cursor-pointer"
                aria-label="Посмотреть дополнительные производства"
              >
                + еще 3 производства
              </button>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Mobile version (layout preserved), now interactive */}
      <main className="relative desktop:hidden px-4 py-8">
        <div className="flex flex-col items-center gap-8 w-full">
          <div className="flex flex-col items-center gap-6 w-full">
            <div className="flex flex-col items-center gap-4 w-full">
              <div className="font-semibold text-2xl md:text-3xl text-center leading-normal [font-family:'Raleway',Helvetica] tracking-[0]">
                <span className="text-[#527dc5]">Экспертная команда </span>
                <span className="text-[#394355]">
                  воплотит мечты об идеальном шатре под ваши задачи
                </span>
              </div>
            </div>

            <div className="w-full font-normal text-[#394355] text-sm md:text-base text-center leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
              <span className="font-bold">Работает, как единый организм</span>
              <span className="font-semibold">&nbsp;</span>
              <span className="font-medium">
                из 80 человек с высшим строительным и инженерным образованием и
                опытом от 10 лет
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 w-full">
            <div className="grid grid-cols-2 gap-4 w-full max-w-md">
              {teamCategories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => openModal(category.name, <p className="text-[#394355]">{category.description}</p>)}
                  className="flex items-center gap-3 justify-center bg-transparent hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#527dc5] rounded-md px-2 py-2 cursor-pointer"
                  aria-label={`Подробнее: ${category.name}`}
                >
                  <span className="relative w-6 h-6">
                    <Image
                      alt={`${category.name} icon`}
                      src={category.icon}
                      fill
                      style={{ objectFit: 'contain' }}
                      loading="lazy"
                    />
                  </span>
                  <span className="[font-family:'Raleway',Helvetica] font-semibold text-[#394355] text-sm tracking-[0] leading-5">
                    {category.name}
                  </span>
                </button>
              ))}
            </div>

            <div className="flex justify-center w-full">
              <button
                type="button"
                onClick={() => openModal("Другие должности", moreRolesBody)}
                className="font-semibold text-[#527dc5] text-sm leading-5 underline [font-family:'Raleway',Helvetica] tracking-[0] text-center hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#527dc5] rounded-md px-1 py-1 cursor-pointer"
                aria-label="Посмотреть другие должности"
              >
                и еще 5+ должностей разного уровня
              </button>
            </div>
          </div>

          <Card className="w-full bg-white rounded-[20px] border-0 shadow-lg backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]">
            <CardContent className="flex flex-col items-center justify-center gap-6 py-6 px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                {departments.map((department) => (
                  <button
                    key={department.id}
                    type="button"
                    onClick={() => openModal(department.name, <p className="text-[#394355]">{department.description}</p>)}
                    className="flex flex-col items-start gap-2.5 p-4 bg-[#f5f6ff] rounded-[10px] w-full hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#527dc5] cursor-pointer"
                    aria-label={`Подробнее: ${department.name}`}
                  >
                    <div className="flex flex-col items-center justify-center gap-2 w-full">
                      <div className="font-bold text-[#527dc5] text-base md:text-lg text-center [font-family:'Raleway',Helvetica] tracking-[0] leading-6">
                        {department.name}
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => openModal("Дополнительно: производства", moreFactoriesBody)}
                className="w-full font-bold text-[#394355] text-base text-center leading-6 underline [font-family:'Raleway',Helvetica] tracking-[0] hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#527dc5] rounded-md px-1 py-1 cursor-pointer"
                aria-label="Посмотреть дополнительные производства"
              >
                + еще 3 производства
              </button>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Lightweight Modal (no external deps) */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="about-modal-title"
          className="fixed inset-0 z-[100] flex items-center justify-center"
        >
          <button
            aria-label="Закрыть"
            className="absolute inset-0 bg-black/40"
            onClick={closeModal}
          />
          <div className="relative bg-white rounded-2xl shadow-xl max-w-lg w-[92%] p-6">
            <div className="flex items-start justify-between gap-4">
              <h3 id="about-modal-title" className="text-xl font-semibold text-[#394355]">
                {modalTitle}
              </h3>
              <button
                onClick={closeModal}
                aria-label="Закрыть модальное окно"
                className="rounded-md px-2 py-1 hover:bg-[#f5f6ff] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#527dc5]"
              >
                ✕
              </button>
            </div>
            <div className="mt-4 text-base leading-6">{modalBody}</div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={closeModal}
                className="rounded-md bg-[#527dc5] text-white px-4 py-2 font-medium hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#527dc5]"
              >
                Понятно
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
