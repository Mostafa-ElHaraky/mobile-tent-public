'use client';

import { ReactElement } from 'react';

export const FrameShatry4 = (): ReactElement => {
  return (
    <section className="w-full max-w-[1200px] mx-auto">
      <div className="flex flex-col items-start gap-6">
        {/* VISUAL HEADING - styled div instead of H1 */}
        <div className="w-full [font-family:'Raleway',Helvetica] font-semibold text-4xl tracking-[0] leading-[normal] mb-6">
          <span className="text-[#527dc5]">Как выбрать быстросборный шатёр</span>
        </div>

        <div className="w-full">
          <div className="flex flex-col gap-6">
            <div className="font-medium text-lg leading-8 [font-family:'Raleway',Helvetica] tracking-[0] text-[#394355]">
              <article>
                <div className="space-y-4">
                  <p>Выбор быстросборного шатра должен определяться его функциональными возможностями. Основной критерий –– быстрая сборка и разборка конструкции.</p>
                  <p>Быстросборные шатры обычно эксплуатируются в экстремальных условиях. Под проливным дождем или в вечернее время скорость и простота сборки не менее важны, чем удобство, надёжность конструкции.</p>
                  <p>Компания MOBILE TENT производит каркасно-тентовые конструкции разного назначения. Производитель отвечает за качество сборки и подбор материалов, поэтому шатры и тенты компании имеют длительный срок службы и прекрасно эксплуатируются в любую погоду. У нас можно приобрести как классические, так и быстросборные шатры с продуманной конструкцией, которые легко установить и разобрать в считанные минуты.</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};