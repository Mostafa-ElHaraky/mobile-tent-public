'use client';

import { useState } from 'react';
import { Badge } from '../../../../components/ui/badge';
import { Card, CardContent } from '../../../../components/ui/card';
import { Button } from '../../../../components/ui/button';
import Image from 'next/image';
import { ReactElement } from 'react';

/** Lightweight modal (no external deps) */
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
    <div className="fixed inset-0 z-50 flex items-center justify-center" aria-modal="true" role="dialog">
      {/* Backdrop */}
      <button aria-label="Close" className="absolute inset-0 bg-black/40" onClick={onClose} />
      {/* Panel */}
      <div className="relative w-[min(92vw,720px)] max-h-[85vh] overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl">
        <div className="mb-4 flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-[#232c42]">{title}</h3>
          <button onClick={onClose} className="rounded-lg border border-[#E5E7EB] px-3 py-1 text-sm hover:bg-gray-50">
            Закрыть
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

type Step = {
  title: string;
  active?: boolean;
  description: string;
  image?: string;
};

type Category = {
  title: string;
  image: string;
  description: string;
  link?: string;
  specs?: string[];
};

type Facility = {
  title: string;
  description: string;
  image?: string;
};

export const FrameProizvodstvoshatrov = (): ReactElement => {
  /** Production process steps (now fully interactive) */
  const productionSteps: Step[] = [
    { title: 'Проектирование', active: true, description: 'Создаем техническое задание, 3D-модель и рабочие чертежи. Учитываем нагрузки, ветровые районы и требования безопасности.', image: '/rectangle-94.webp' },
    { title: 'Подготовка и резка сырья и материалов', description: 'ПВХ-ткани раскраиваются по лекалам на плоттере с ЧПУ. Металл раскраивается картами раскроя для минимизации отходов.', image: '/rezka_metalla_vidy_sposoby_i_sut_tekhnologij_1_4de29f6a5d.webp' },
    { title: 'Швейный процесс', description: 'Сшиваем панели ПВХ, усиливаем углы и стыки, интегрируем окна/двери. Контроль швов и геометрии.', image: '/tailoring-processs_1098-17986.webp' },
    { title: 'Изготовление каркаса', description: 'Точность гибов и сварки, подготовка узлов, пескоструй и грунт. Проверка посадочных размеров.', image: '/karkas_zdaniya_00.webp' },
    { title: 'Итоговая проверка ОТК', description: 'Измерение размеров, проверка сварных швов, герметичности тканей и комплектации. Фотоотчёт ОТК.', image: '/8777.webp' },
    { title: 'Упаковка и отгрузка', description: 'Маркировка мест, защитная упаковка, паллетирование. Готовим документы и инструкции.', image: '/my-packaging-and-transportation-are-like-what-_1084.webp' },
    { title: 'Монтаж на месте установки', description: 'Шеф-монтаж или полный монтаж. Инструктаж бригады, финишная натяжка тента и сдача объекта.', image: '/монтаж-1024x576.webp' },
  ];

  /** High-tech equipment cards */
  const productCategories: Category[] = [
    { title: 'Оборудования для сварки ткани токами высокой частоты - ТВЧ', image: '/ZUND_G3.webp', description: 'ТВЧ-сварка формирует монолитный шов с высокой герметичностью и прочностью, идеально для тентов из ПВХ.', specs: ['Длина шва до 8 м', 'Контроль температуры и давления', 'Ширина шва 20–60 мм'] },
    { title: 'Металлорежущее оборудование\nдля плазменной резки', image: '/1699526595_5791.webp', description: 'Плазменная резка обеспечивает точную геометрию деталей, ускоряя производство узлов каркаса.', specs: ['Толщина до 20 мм', 'Чистый рез с малой ЗТВ', 'ЧПУ-позиционирование'] },
    { title: 'Плоттерная резка ткани с ЧПУ', image: '/2111-202503250857179010.webp', description: 'Автоматический раскрой ПВХ-тканей по лекалам уменьшает отходы и повышает повторяемость.', specs: ['Рабочее поле 3×6 м', 'Сканирование лекал', 'Точность ±1 мм'] },
    { title: 'Сварочное и гибочное оборудование для металла', image: '/Universal_manual_bending_machine_FABTEC_UB_100_MB22_70_9.webp', description: 'Полный цикл: гибка, сварка MIG/MAG/TIG, зачистка швов. Контроль геометрии узлов.', specs: ['Трубогибы CNC', 'Оснастка для повторяемости', 'Шаблоны контроля'] },
    { title: 'Покрасочное оборудование', image: '/406_original.webp', description: 'Порошково-полимерное покрытие с равномерной толщиной слоя и стойкостью к коррозии.', specs: ['Печь полимеризации', 'Камера напыления', 'Спектрофотометрия'] },
    { title: 'Сушильная камера', image: '/65da568fad32aec84ffee8eea5812088.webp', description: 'Стабильные режимы сушки покрытий и материалов для долговечной эксплуатации изделий.', specs: ['Равномерность прогрева', 'Темп. до 220°C', 'Сенсорный контроль'] },
  ];

  /** Production facilities */
  const productionFacilities: Facility[] = [
    { title: 'Цех металлоконструкций', description: 'Участки резки, гибки, сварки и контрольной сборки. Геодезическая проверка узлов и шаблоны.', image: '/hhxrgdizj1z3h6h9cjy1j8018ope0n3j.webp' },
    { title: 'Цех изготовления ПВХ тентов', description: 'Плоттерная резка, ТВЧ-сварка, швейные посты, столы раскроя, ламинация и контроль герметичности.', image: '/uyhioo9apllzcgilguujyymdfshkareb.webp' },
    { title: 'Цех горячего цинкования', description: 'Долговременная защита металла. Соответствует ISO 1461, равномерная толщина цинка.', image: '/295949746740956.webp' },
  ];

  /** State for interactivity */
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>('');
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  /** Handlers */
  const openModal = (title: string, node: React.ReactNode) => {
    setModalTitle(title);
    setModalContent(node);
    setModalOpen(true);
  };

  const activeStep = productionSteps[activeStepIndex];

  return (
    <div className="w-full relative top-[130px]">
      {/* ============================ DESKTOP (unchanged) ============================ */}
      <div className="hidden md:block">
        {/* Production Cycle Section */}
        <div className="mt-[60px] mx-[49px]">
          <div className="flex flex-col items-center gap-[39px]">
            <div className="flex flex-col items-center gap-4">
              <h2 className="[font-family:'Raleway',Helvetica] text-4xl">
                <span className="font-semibold text-[#527dc5]">Делаем все этапы</span>
                <span className="font-semibold text-[#232c42]"> полного цикла</span>
              </h2>
              <p className="[font-family:'Raleway',Helvetica] text-[#232c42] text-lg leading-6">от идеи до монтажа</p>
            </div>

            <div className="flex items-start gap-[29px]">
              {/* Steps */}
              <div className="flex flex-col items-start gap-[13px]">
                {productionSteps.map((step, index) => {
                  const isActive = index === activeStepIndex;
                  const isTall = step.title.includes('Подготовка');
                  return (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setActiveStepIndex(index)}
                      className={[
                        'flex w-[315px] items-center gap-2.5 px-4 py-[7px] rounded-[10px] transition-all',
                        isTall ? 'h-[65px]' : 'h-[49px]',
                        isActive ? 'bg-[#527dc5] text-white shadow-[0_10px_25px_rgba(82,125,197,0.35)]' : 'bg-white text-black hover:bg-[#f3f6fc]',
                        'backdrop-blur-[79px] backdrop-brightness-[100%] border border-[#E5E7EB]/60',
                      ].join(' ')}
                      aria-pressed={isActive}
                    >
                      {isTall ? (
                        <div className="w-[203px] h-[34px] flex flex-col items-start">
                          <div className="font-medium text-base leading-3 [font-family:'Raleway',Helvetica]">Подготовка и резка сырья</div>
                          <div className="font-medium text-base leading-3 [font-family:'Raleway',Helvetica]">и материалов</div>
                        </div>
                      ) : (
                        <div className={[ '[font-family:"Raleway",Helvetica] text-base leading-normal whitespace-nowrap', isActive ? 'font-bold text-white' : 'font-medium text-black', ].join(' ')}>
                          {step.title}
                        </div>
                      )}
                    </button>
                  );
                })}

                <Button variant="outline" className="mt-3 w-[315px] rounded-[10px] border-[#527dc5] text-[#527dc5] hover:bg-[#e8eef8]" onClick={() => openModal('Полный регламент производства', (
                  <div className="space-y-3">
                    <p className="text-sm text-[#394355]">Мы предоставим подробный регламент: сроки, контрольные точки, ответственность сторон и требования к площадке монтажа.</p>
                    <ul className="list-disc pl-5 text-sm text-[#394355] space-y-1">
                      <li>Чек-лист ОТК по этапам</li>
                      <li>Карты раскроя и спецификации</li>
                      <li>Инструкции по эксплуатации</li>
                    </ul>
                  </div>
                ))}>Посмотреть регламент</Button>
              </div>

              {/* Step preview / details */}
              <div className="flex w-[995px] flex-col gap-4">
                <Image src={activeStep.image || '/rectangle-94.webp'} alt={activeStep.title} width={995} height={437} className="w-[995px] h-[437px] object-cover rounded-2xl" quality={85} loading="lazy"  />
                <Card className="rounded-2xl border border-[#E5E7EB]">
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold text-[#232c42]">{activeStep.title}</h3>
                        <p className="mt-1 text-sm text-[#394355]">{activeStep.description}</p>
                      </div>
                      <div className="shrink-0">
                        <Button onClick={() => openModal(activeStep.title, (
                          <div className="space-y-3">
                            <p className="text-sm text-[#394355]">{activeStep.description}</p>
                            <ul className="list-disc pl-5 text-sm text-[#394355] space-y-1">
                              <li>Фото и примеры работ по этапу</li>
                              <li>Контрольные показатели качества</li>
                              <li>Сроки и ответственные</li>
                            </ul>
                          </div>
                        ))}>Подробнее</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* High-tech Equipment Section */}
        <div className="flex w-full max-w-[1344px] items-center justify-between mt-[50px] mx-auto px-12">
          <div className="flex flex-col items-start gap-4">
            <h2 className="font-semibold text-3xl text-[#527dc5] [font-family:'Raleway',Helvetica]">Используется высокотехнологичное оборудование</h2>
            <p className="text-2xl text-[#232c42] [font-family:'Raleway',Helvetica]">от Leister, Vanad, Beka-mak и других мировых брендов</p>
          </div>
          <Badge className="rounded-[20px] bg-[#527dc5] shadow-lg text-white w-[351px] h-[120px] flex flex-col justify-center px-6">
            <div className="text-4xl font-bold">35+ <span className="text-3xl">инструментов</span></div>
            <div className="text-base font-medium">и уникальных станков</div>
          </Badge>
        </div>

        {/* Equipment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1344px] relative top-[50px] mx-auto px-12" data-model-id="1:28295">
          {productCategories.map((category, index) => (
            <Card key={index} className="group relative w-full h-[404px] overflow-hidden rounded-[20px] border border-[#dddddd] shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] transition hover:-translate-y-0.5 hover:shadow-2xl focus-within:ring-2 focus-within:ring-[#527dc5]">
              <button type="button" className="absolute inset-0 z-10 block text-left" aria-label={`Подробнее: ${category.title.replace(/\n/g, ' ')}`} onClick={() => openModal(category.title, (
                <div className="space-y-4">
                  <Image src={category.image} loading="lazy" alt={category.title} width={1200} height={600} className="w-full h-[260px] rounded-xl object-cover" />
                  <p className="text-sm text-[#394355] whitespace-pre-line">{category.description}</p>
                  {category.specs && (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-[#394355]">
                      {category.specs.map((s, i) => (
                        <li key={i} className="flex items-start gap-2"><span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-[#527dc5]" />{s}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))} />

              <Image src={category.image} alt={category.title} fill className="object-cover pointer-events-none" sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" loading="lazy" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/5" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5">
                <p className="whitespace-pre-line [font-family:'Raleway',Helvetica] text-white text-xl font-semibold drop-shadow-md">{category.title}</p>
                <div className="mt-2 text-sm text-white/90 opacity-0 transition group-hover:opacity-100">Нажмите, чтобы узнать больше →</div>
              </div>
            </Card>
          ))}
        </div>

        {/* Production Facilities */}
        <div className="w-full bg-[#232c42] py-[60px] mt-[100px] rounded-2xl">
          <div className="max-w-[1344px] mx-auto px-12">
            <h2 className="text-center text-4xl font-semibold text-white mb-12"><span className="text-[#8eb8ff]">Самое оснащенное производство </span>в России площадью 1500 м²</h2>
            <div className="flex flex-wrap gap-6 justify-center">
              {productionFacilities.map((facility, index) => (
                <Card key={index} className="group relative w-[431px] h-[404px] overflow-hidden rounded-[20px] border border-[#dddddd] shadow-md hover:-translate-y-0.5 hover:shadow-xl transition">
                  <button type="button" className="absolute inset-0 z-10 block text-left" onClick={() => openModal(facility.title, (
                    <div className="space-y-4">
                      <Image src={facility.image || '/rectangle-94.webp'} loading="lazy" alt={facility.title} width={1200} height={600} className="w-full h-[260px] rounded-xl object-cover" />
                      <p className="text-sm text-[#394355]">{facility.description}</p>
                    </div>
                  ))} />
                  <Image src={facility.image || '/rectangle-94.webp'} loading="lazy" alt={facility.title} fill className="object-cover pointer-events-none" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-black/10" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5">
                    <p className="text-white text-2xl font-semibold drop-shadow-md [font-family:'Raleway',Helvetica]">{facility.title}</p>
                    <p className="text-sm text-white/90 opacity-0 transition group-hover:opacity-100">Нажмите, чтобы узнать больше →</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

  {/* ============================ MOBILE (full section, fixed) =============================== */}
      <div className="md:hidden px-4 relative bottom-[120px]">
        {/* Header */}
        <div className="pt-6 text-center">
          <h2 className="text-2xl font-semibold [font-family:'Raleway',Helvetica]">
            <span className="text-[#527dc5]">Делаем все этапы</span>
            <span className="text-[#232c42]"> полного цикла</span>
          </h2>
          <p className="text-sm text-[#232c42] mt-1">от идеи до монтажа</p>
        </div>

        {/* Steps as horizontal scroll */}
        <div className="mt-5 -mx-4 overflow-x-auto pb-2">
          <div className="px-4 flex gap-3 w-max">
            {productionSteps.map((step, index) => {
              const isActive = index === activeStepIndex;
              return (
                <button
                  key={index}
                  onClick={() => setActiveStepIndex(index)}
                  className={[
                    'min-w-[240px] px-4 py-3 rounded-xl text-left border',
                    isActive
                      ? 'bg-[#527dc5] text-white border-transparent shadow-[0_10px_25px_rgba(82,125,197,0.35)]'
                      : 'bg-white text-black border-[#E5E7EB]',
                  ].join(' ')}
                >
                  <div className="text-sm font-semibold leading-snug">{step.title}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active step preview */}
        <div className="mt-4">
          <div className="relative w-full h-48 rounded-2xl overflow-hidden">
            <Image
              src={activeStep.image || '/rectangle-94.webp'}
              alt={activeStep.title}
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>
          <Card className="mt-3 rounded-2xl border-0 border-[#E5E7EB]">
            <CardContent className="p-4">
              <h3 className="text-base font-semibold text-[#232c42]">{activeStep.title}</h3>
              <p className="mt-1 text-sm text-[#394355]">{activeStep.description}</p>
              <Button
                className="mt-3"
                onClick={() =>
                  openModal(
                    activeStep.title,
                    <div className="space-y-3">
                      <p className="text-sm text-[#394355]">{activeStep.description}</p>
                      <ul className="list-disc pl-5 text-sm text-[#394355] space-y-1">
                        <li>Фото и примеры работ по этапу</li>
                        <li>Контрольные показатели качества</li>
                        <li>Сроки и ответственные</li>
                      </ul>
                    </div>
                  )
                }
              >
                Подробнее
              </Button>
            </CardContent>
          </Card>

          <Button
            variant="outline"
            className="mt-3 w-full rounded-xl border-[#527dc5] text-[#527dc5]"
            onClick={() =>
              openModal(
                'Полный регламент производства',
                <div className="space-y-3">
                  <p className="text-sm text-[#394355]">
                    Мы предоставим подробный регламент: сроки, контрольные точки, ответственность
                    сторон и требования к площадке монтажа.
                  </p>
                  <ul className="list-disc pl-5 text-sm text-[#394355] space-y-1">
                    <li>Чек-лист ОТК по этапам</li>
                    <li>Карты раскроя и спецификации</li>
                    <li>Инструкции по эксплуатации</li>
                  </ul>
                </div>
              )
            }
          >
            Посмотреть регламент
          </Button>
        </div>

        {/* High-tech Equipment Section */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-[#527dc5] [font-family:'Raleway',Helvetica]">
            Используется высокотехнологичное оборудование
          </h2>
          <p className="text-base text-[#232c42]">
            от Leister, Vanad, Beka-mak и других мировых брендов
          </p>
          <Badge className="mt-3 rounded-2xl bg-[#527dc5] text-white px-4 py-3">
            <div className="text-2xl font-bold">
              35+ <span className="text-xl">инструментов</span>
            </div>
            <div className="text-sm">и уникальных станков</div>
          </Badge>
        </div>

        {/* Equipment Cards: 1 column list (FIX: give parent height) */}
        <div className="mt-4 grid grid-cols-1 gap-4">
          {productCategories.map((category, index) => (
            <Card
              key={index}
              className="relative overflow-hidden rounded-2xl border-0 h-56 sm:h-64"
            >
              {/* Click layer */}
              <button
                type="button"
                className="absolute inset-0 z-10"
                onClick={() =>
                  openModal(
                    category.title,
                    <div className="space-y-4">
                      <Image
                        src={category.image}
                        alt={category.title}
                        width={1200}
                        height={600}
                        className="w-full h-48 rounded-xl object-cover"
                      />
                      <p className="text-sm text-[#394355] whitespace-pre-line">
                        {category.description}
                      </p>
                      {category.specs && (
                        <ul className="grid grid-cols-1 gap-y-2 text-sm text-[#394355]">
                          {category.specs.map((s, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-[#527dc5]" />
                              {s}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )
                }
              />

              {/* Background image + overlays */}
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover z-0"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent z-0" />
              <div className="absolute bottom-0 inset-x-0 p-4 z-0">
                <p className="text-white text-lg font-semibold whitespace-pre-line">
                  {category.title}
                </p>
                <p className="text-white/90 text-xs">Нажмите, чтобы узнать больше →</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Production Facilities: 1 column (FIX: give parent height) */}
        <div className="mt-10 bg-[#232c42] rounded-2xl p-5">
          <h2 className="text-center text-2xl font-semibold text-white mb-5">
            <span className="text-[#8eb8ff]">Самое оснащенное производство </span>
            в России площадью 1500 м²
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {productionFacilities.map((facility, index) => (
              <Card
                key={index}
                className="relative overflow-hidden border-0 rounded-2xl h-56 sm:h-64"
              >
                <button
                  type="button"
                  className="absolute inset-0 z-10"
                  onClick={() =>
                    openModal(
                      facility.title,
                      <div className="space-y-4">
                        <Image
                          src={facility.image || '/rectangle-94.webp'}
                          alt={facility.title}
                          width={1200}
                          height={600}
                          className="w-full h-48 rounded-xl object-cover"
                          loading="lazy"
                        />
                        <p className="text-sm text-[#394355]">{facility.description}</p>
                      </div>
                    )
                  }
                />
                <Image
                  src={facility.image || '/rectangle-94.webp'}
                  alt={facility.title}
                  fill
                  className="object-cover z-0"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent z-0" />
                <div className="absolute bottom-0 inset-x-0 p-4 z-0">
                  <p className="text-white text-lg font-semibold">{facility.title}</p>
                  <p className="text-white/90 text-xs">Нажмите, чтобы узнать больше →</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Shared modal */}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={modalTitle}>
        {modalContent}
      </Modal>
    </div>
  );
};