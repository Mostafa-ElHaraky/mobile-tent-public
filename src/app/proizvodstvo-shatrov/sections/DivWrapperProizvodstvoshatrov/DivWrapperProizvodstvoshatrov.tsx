'use client';

import React, { useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import Image from "next/image";
import { ReactElement } from "react";

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
          <button onClick={onClose} className="rounded-lg border border-[#E5E7EB] px-3 py-1 text-sm hover:bg-gray-50">
            Закрыть
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

type ProcessCard = {
  id: string;
  title: string;
  description: string | string[];
  image?: string; // background for the top area (277px)
  tag?: string;   // small label chip
};

export const DivWrapperProizvodstvoshatrov = (): ReactElement => {
  // SAME SIZES; just added optional images/tags
  const processCards: ProcessCard[] = [
    { id: "01", title: "При поступлении", description: "Проверяется толщина металла, качество ткани и фурнитуры", image: "/realfactory1 (1).webp", tag: "Контроль входящих" },
    { id: "02", title: "В процессе", description: [ "Соответствие требованиям пожарной безопасности", "Проверка заложенных требований в проекте на условиях эксплуатации" ], image: "/thisisfactory.webp", tag: "ОТК в производстве" },
    { id: "03", title: "Перед отгрузкой", description: "Проверка маркировки всех деталей и комплектации", image: "/realfactory1.webp", tag: "Финальная проверка" },
  ];

  const [open, setOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalBody, setModalBody] = useState<React.ReactNode>(null);

  const openModal = (card: ProcessCard) => {
    setModalTitle(`${card.id}. ${card.title}`);
    setModalBody(
      <div className="space-y-4">
        {card.image && (
          <Image src={card.image} alt={card.title} width={1200} height={600} className="w-full h-[260px] rounded-xl object-cover" />
        )}
        {Array.isArray(card.description) ? (
          <ul className="list-disc pl-5 text-sm text-[#394355] space-y-1">
            {card.description.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-[#394355]">{card.description}</p>
        )}
        <div className="flex items-center gap-3 pt-1">
          <Button variant="outline" onClick={() => setOpen(false)}>Закрыть</Button>
        </div>
      </div>
    );
    setOpen(true);
  };

  return (
    <>
      {/* ======================= DESKTOP (unchanged) ======================= */}
      <div className="hidden md:flex items-start gap-6 relative top-[25px]">
        {processCards.map((card) => (
          <Card key={card.id} className="relative w-[431px] h-[492px] rounded-[20px] border border-solid border-[#dddddd] shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] overflow-hidden hover:-translate-y-0.5 hover:shadow-2xl transition">
            {/* CLICK LAYER */}
            <button type="button" className="absolute inset-0 z-10 block text-left focus:outline-none focus:ring-2 focus:ring-[#527dc5] focus:ring-offset-2 focus:ring-offset-white" aria-label={`Подробнее: ${card.title}`} onClick={() => openModal(card)} />

            {/* TOP VISUAL (h-[277px]) */}
            <div className="absolute w-full h-[277px] top-0 left-0 rounded-t-[20px]">
              {card.image ? (
                <Image src={card.image} alt={card.title} loading="lazy" fill className="rounded-t-[20px] object-cover pointer-events-none" />
              ) : (
                <div className="w-full h-full rounded-t-[20px] bg-[linear-gradient(180deg,rgba(232,238,248,1)_0%,rgba(232,238,248,0)_100%)]" />
              )}
              <div className="pointer-events-none absolute inset-0 rounded-t-[20px] bg-gradient-to-t from-black/50 via-black/15 to-transparent" />
            </div>

            {/* TAG CHIP */}
            {card.tag && (
              <div className="absolute top-5 right-5 z-[5] rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-[#232c42] shadow">{card.tag}</div>
            )}

            {/* NUMBER BADGE */}
            <div className="absolute w-20 h-20 top-5 left-5 bg-[#dee4f0] rounded-[40px] flex items-center justify-center z-[5]">
              <div className="[text-shadow:0px_4px_20px_#0000001a] bg-[linear-gradient(173deg,rgba(35,44,66,1)_0%,rgba(91,100,122,1)_35%,rgba(35,44,66,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Raleway',Helvetica] font-bold text-transparent text-[35px] leading-9">{card.id}</div>
            </div>

            {/* CONTENT */}
            <CardContent className="flex flex-col items-start gap-4 absolute top-[311px] left-8 p-0">
              <h3 className="font-semibold [font-family:'Raleway',Helvetica] text-[#394355] text-2xl">{card.title}</h3>
              <div className="w-[365px]">
                {Array.isArray(card.description) ? (
                  <div className="flex flex-col items-start gap-2.5">
                    {card.description.map((text, index) => (
                      <p key={index} className="[font-family:'Raleway',Helvetica] font-normal text-[#394355] text-lg"><span className="mr-2 inline-block align-middle">•</span><span className="align-middle">{text}</span></p>
                    ))}
                  </div>
                ) : (
                  <p className="[font-family:'Raleway',Helvetica] font-normal text-[#394355] text-lg">{card.description}</p>
                )}
              </div>
              <div className="text-sm text-[#527dc5] opacity-0 transition group-hover:opacity-100">Нажмите, чтобы узнать больше →</div>
            </CardContent>
          </Card>
        ))}
        <Modal open={open} onClose={() => setOpen(false)} title={modalTitle}>{modalBody}</Modal>
      </div>

      {/* ======================= MOBILE (new) ========================== */}
      <div className="md:hidden relative top-0 px-4">
        <div className="flex flex-col gap-4">
          {processCards.map((card) => (
            <Card key={card.id} className="relative w-full rounded-2xl border border-[#dddddd] shadow-[0px_12px_24px_0px_rgba(22,29,36,0.06)] overflow-hidden">
              {/* Click layer */}
              <button type="button" className="absolute inset-0 z-10" aria-label={`Подробнее: ${card.title}`} onClick={() => openModal(card)} />

              {/* Top visual (responsive) */}
              <div className="relative w-full h-44 sm:h-56">
                {card.image ? (
                  <Image src={card.image} loading="lazy" alt={card.title} fill className="object-cover" />
                ) : (
                  <div className="w-full h-full bg-[linear-gradient(180deg,rgba(232,238,248,1)_0%,rgba(232,238,248,0)_100%)]" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

                {/* Number badge + tag overlay */}
                <div className="absolute top-3 left-3 w-12 h-12 rounded-full bg-[#dee4f0] flex items-center justify-center">
                  <span className="text-lg font-bold [font-family:'Raleway',Helvetica] text-[#232c42]">{card.id}</span>
                </div>
                {card.tag && (
                  <div className="absolute top-3 right-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-medium text-[#232c42] shadow">{card.tag}</div>
                )}
              </div>

              {/* Content */}
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-[#394355] [font-family:'Raleway',Helvetica]">{card.title}</h3>
                {Array.isArray(card.description) ? (
                  <ul className="mt-2 space-y-1 text-sm text-[#394355]">
                    {card.description.map((t, i) => (
                      <li key={i} className="flex gap-2"><span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[#527dc5]" />{t}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-2 text-sm text-[#394355]">{card.description}</p>
                )}
                <div className="mt-3 text-xs text-[#527dc5]">Нажмите, чтобы узнать больше →</div>
              </CardContent>
            </Card>
          ))}
        </div>
        <Modal open={open} onClose={() => setOpen(false)} title={modalTitle}>{modalBody}</Modal>
      </div>
    </>
  );
};
