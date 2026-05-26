'use client';

import { useState } from 'react';
import { Badge } from '../../../../components/ui/badge';
import { Card, CardContent } from '../../../../components/ui/card';
import { Button } from '../../../../components/ui/button';
import Image from 'next/image';
import { ReactElement } from 'react';

/** Minimal modal (no deps) */
function Modal({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" role="dialog" aria-modal="true">
      <button className="absolute inset-0 bg-black/40" aria-label="Закрыть" onClick={onClose} />
      <div className="relative w-[min(92vw,720px)] max-h-[85vh] overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl">
        <div className="mb-4 flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-[#232c42]">{title}</h3>
          <button onClick={onClose} className="rounded-lg border border-[#E5E7EB] px-3 py-1 text-sm hover:bg-gray-50">Закрыть</button>
        </div>
        {children}
      </div>
    </div>
  );
}

type Category = { id: number; name: string; icon: string; description: string };
type Department = { id: number; name: string; width: string; description: string };

export const Frame4Proizvodstvoshatrov = (): ReactElement => {
  const teamCategories: Category[] = [
    { id: 1, name: 'Дизайнеры', icon: '/About1-group-19.webp', description: 'Проектируют внешний вид и эргономику шатров, подбирают материалы, готовят макеты брендирования.' },
    { id: 2, name: 'Технологи, конструктора', icon: '/About1-group-20.webp', description: 'Разрабатывают конструктивные узлы, расчёты прочности и технологические карты производства.' },
    { id: 3, name: 'Проектировщики', icon: '/About1-group-21.webp', description: 'Готовят рабочую документацию, 3D-схемы и спецификации для производства и монтажа.' },
    { id: 4, name: 'Геодезисты', icon: '/About1-group-22.webp', description: 'Проводят разбивку и контроль геометрии на площадке, обеспечивая точность монтажа.' },
  ];

  const departments: Department[] = [
    { id: 1, name: 'Отдел проектирования', width: '222px', description: 'Отвечает за архитектурные решения, чертежи и согласование ТЗ с заказчиком.' },
    { id: 2, name: 'Отдел контроля качества', width: '222px', description: 'Многоступенчатый контроль: входные материалы, процесс производства и итоговая приёмка.' },
    { id: 3, name: 'Отдел монтажа', width: '143px', description: 'Сертифицированные бригады, соблюдение техники безопасности, строгие сроки развёртывания.' },
    { id: 4, name: 'Отдел сертификации изделий', width: '272px', description: 'Обеспечивает соответствие ГОСТ/ТР ТС, ведёт паспорта изделий и протоколы испытаний.' },
  ];

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

  const [open, setOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalBody, setModalBody] = useState<React.ReactNode>(null);

  const openTeamModal = (cat: Category) => {
    setModalTitle(cat.name);
    setModalBody((
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <Image src={cat.icon} alt={cat.name} width={32} height={32} className="h-8 w-8 object-contain" />
          <div className="text-sm text-[#394355]">{cat.description}</div>
        </div>
      </div>
    ));
    setOpen(true);
  };

  const openDeptModal = (dept: Department) => {
    setModalTitle(dept.name);
    setModalBody(<p className="text-sm text-[#394355]">{dept.description}</p>);
    setOpen(true);
  };

  return (
    <>
      {/* ======================== DESKTOP (unchanged) ======================== */}
      <div className="hidden md:flex items-start gap-[110px] w-full py-12 relative top-[45px] left-[50px]">
        {/* LEFT COLUMN */}
        <div className="flex flex-col items-start gap-[30px]">
          <div className="flex flex-col w-[574px] items-start gap-[22px]">
            <div className="flex items-start gap-3 flex-col">
              <h2 className="w-full font-semibold text-4xl leading-normal font-['Raleway',Helvetica]">
                <span className="text-[#527dc5]">80+ человек </span>
                <span className="text-[#232c42]">компании работает,<br/>как единый организм</span>
              </h2>
            </div>
            <div className="flex flex-col items-start gap-3">
              <div className="flex flex-col items-start gap-9">
                <div className="flex flex-col items-start gap-1.5">
                  <div className="flex flex-col items-start gap-3">
                    <Badge className="inline-flex flex-col items-start gap-2.5 px-3 py-1.5 rounded-lg [background:linear-gradient(159deg,rgba(36,48,87,1)_0%,rgba(55,66,85,1)_100%)]">
                      <div className="inline-flex items-start gap-2">
                        <div className="w-fit font-normal text-white text-lg leading-6 font-['Raleway',Helvetica]">
                          <span className="font-bold">С высшим строительным<br/></span>
                          <span className="font-['Raleway',Helvetica] font-normal">и инженерным образованием с опытом от 10 лет</span>
                        </div>
                      </div>
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ROLES rows */}
          <div className="flex flex-col items-start gap-6">
            <div className="flex w-[560px] items-start justify-between">
              {teamCategories.slice(0, 3).map((role) => (
                <button key={role.id} type="button" className="flex items-center gap-3 group" onClick={() => openTeamModal(role)} aria-label={`Подробнее: ${role.name}`}>
                  <div className="relative w-6 h-6">
                    <Image className="absolute w-6 h-[17px] top-[3px] left-0" loading="lazy" alt={`${role.name} icon`} src={role.icon} width={24} height={17} />
                  </div>
                  <div className="font-['Raleway',Helvetica] font-semibold text-[#394355] text-sm leading-5 whitespace-nowrap group-hover:text-[#527dc5]">{role.name}</div>
                </button>
              ))}
            </div>

            <div className="flex w-[413px] items-center justify-between">
              <button type="button" className="flex items-center gap-3 group" onClick={() => openTeamModal(teamCategories[3])} aria-label="Подробнее: Геодезисты">
                <div className="relative w-6 h-6">
                  <Image className="absolute w-6 h-[17px] top-[3px] left-0" loading="lazy" alt="Геодезисты icon" src={teamCategories[3].icon} width={24} height={17} />
                </div>
                <div className="font-['Raleway',Helvetica] font-semibold text-[#394355] text-sm leading-5 whitespace-nowrap group-hover:text-[#527dc5]">{teamCategories[3].name}</div>
              </button>
              <button type="button" className="flex items-center gap-3" onClick={() => { setModalTitle('Другие роли'); setModalBody(moreRolesBody); setOpen(true); }}>
                <div className="font-['Raleway',Helvetica] font-semibold text-[#527dc5] text-sm leading-5 underline whitespace-nowrap">и еще 5+ должностей разного уровня</div>
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <Card className="w-[660px] shadow-[var(--)] border-0 backdrop-blur-[79px] rounded-[20px] overflow-hidden">
          <CardContent className="flex flex-wrap items-start justify-center gap-[24px_12px] p-[29px]">
            {departments.map((department) => (
              <button key={department.id} type="button" onClick={() => openDeptModal(department)} style={{ width: department.width }} className="flex flex-col items-start gap-2.5 p-4 bg-[#f5f6ff] rounded-[50px] overflow-hidden hover:bg-[#e8eef8] transition text-left" aria-label={`Подробнее: ${department.name}`}>
                <div className="flex flex-col items-center justify-center gap-2">
                  <div className="font-['Raleway',Helvetica] font-bold text-[#527dc5] text-lg text-center leading-6 whitespace-nowrap">{department.name}</div>
                </div>
              </button>
            ))}
            <div className="basis-full pt-2 text-center">
              <Button variant="outline" onClick={() => { setModalTitle('Производственные участки'); setModalBody(moreFactoriesBody); setOpen(true); }}>Подробнее о производстве</Button>
            </div>
          </CardContent>
        </Card>

        <Modal open={open} onClose={() => setOpen(false)} title={modalTitle}>{modalBody}</Modal>
      </div>

      {/* ======================== MOBILE (new) ======================== */}
      <div className="md:hidden w-full px-4 py-8 flex flex-col gap-6">
        {/* Heading + badge */}
        <div>
          <h2 className="text-2xl font-semibold [font-family:'Raleway',Helvetica] leading-snug">
            <span className="text-[#527dc5]">80+ человек </span>
            <span className="text-[#232c42]">компании работает, как единый организм</span>
          </h2>
          <Badge className="mt-4 inline-flex px-3 py-2 rounded-lg [background:linear-gradient(159deg,rgba(36,48,87,1)_0%,rgba(55,66,85,1)_100%)]">
            <div className="text-white text-sm leading-5 [font-family:'Raleway',Helvetica]">
              <span className="font-bold">С высшим строительным</span> и инженерным образованием с опытом от 10 лет
            </div>
          </Badge>
        </div>

        {/* Roles as 2-col grid */}
        <div className="grid grid-cols-2 gap-4">
          {teamCategories.map((role) => (
            <button key={role.id} type="button" onClick={() => openTeamModal(role)} className="flex items-center gap-2 p-3 rounded-xl bg-[#f5f6ff] hover:bg-[#e8eef8] text-left">
              <Image src={role.icon} alt={role.name} loading="lazy" width={20} height={20} />
              <span className="text-sm font-semibold text-[#394355] [font-family:'Raleway',Helvetica]">{role.name}</span>
            </button>
          ))}
          <button type="button" onClick={() => { setModalTitle('Другие роли'); setModalBody(moreRolesBody); setOpen(true); }} className="col-span-2 text-[#527dc5] underline text-sm text-left">и еще 5+ должностей разного уровня</button>
        </div>

        {/* Departments card stacked full width */}
        <Card className="w-full rounded-2xl border-0 shadow-md">
          <CardContent className="p-4 flex flex-col gap-3">
            {departments.map((dept) => (
              <button key={dept.id} type="button" onClick={() => openDeptModal(dept)} className="w-full p-4 rounded-2xl bg-[#f5f6ff] text-left hover:bg-[#e8eef8]">
                <div className="text-[#527dc5] font-bold text-base [font-family:'Raleway',Helvetica]">{dept.name}</div>
              </button>
            ))}
            <Button variant="outline" onClick={() => { setModalTitle('Производственные участки'); setModalBody(moreFactoriesBody); setOpen(true); }} className="mt-2">Подробнее о производстве</Button>
          </CardContent>
        </Card>

        <Modal open={open} onClose={() => setOpen(false)} title={modalTitle}>{modalBody}</Modal>
      </div>
    </>
  );
};