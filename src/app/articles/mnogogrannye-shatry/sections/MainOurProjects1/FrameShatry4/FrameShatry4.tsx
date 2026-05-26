'use client';

import { ReactElement } from 'react';

export const FrameShatry4 = (): ReactElement => {
  return (
    <section className="w-full max-w-[1200px] mx-auto">
      <div className="flex flex-col items-start gap-6">
        {/* VISUAL HEADING - styled div instead of H1 */}
        <div className="w-full [font-family:'Raleway',Helvetica] font-semibold text-4xl tracking-[0] leading-[normal] mb-6">
          <span className="text-[#527dc5]">Многогранные шатры</span>
        </div>

        <div className="w-full">
          <div className="flex flex-col gap-6">
            <div className="font-medium text-lg leading-8 [font-family:'Raleway',Helvetica] tracking-[0] text-[#394355]">
              <article>
                <div className="space-y-4">
                  <p>Плавная форма многогранного шатра делает его конструкцию более устойчивой к ветровой нагрузке, компактный навес идеален для проведения зимних мероприятий.</p>
                  <p>От классического шатра многогранный отличается формой. Его периметр не квадратный или прямоугольный, а состоит из 6 и более граней. При объёме, одинаковом с классическим, у многогранного шатра площадь будет меньшей, что более экономично, если требуется делать обогрев в холодное время года.</p>
                  <p>Компания MOBILE TENT является одним из крупнейших в России производителей навесных конструкций. Мы давно работаем в этой сфере, поэтому знаем о шатрах всё, легко подберём для Вас оптимальную по функциям и цене конструкцию. Обращаясь в нашу компанию, Вы сможете приобрести или арендовать шатёр высокого качества по оптимальной цене от производителя.</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};