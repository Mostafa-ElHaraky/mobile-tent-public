'use client';

import { ReactElement } from 'react';

export const FrameShatry4 = (): ReactElement => {
  return (
    <section className="w-full max-w-[1200px] mx-auto">
      <div className="flex flex-col items-start gap-6">
        {/* VISUAL HEADING - styled div instead of H1 */}
        <div className="w-full [font-family:'Raleway',Helvetica] font-semibold text-4xl tracking-[0] leading-[normal] mb-6">
          <span className="text-[#527dc5]">Летние шатры</span>
        </div>

        <div className="w-full">
          <div className="flex flex-col gap-6">
            <div className="font-medium text-lg leading-8 [font-family:'Raleway',Helvetica] tracking-[0] text-[#394355]">
              <article>
                <div className="space-y-4">
                  <p>В тёплый сезон летние шатры востребованы в качестве места проведения праздников на природе и летних площадок. Отдых на свежем воздухе помогает восстановить силы и получить заряд энергии.</p>
                  <p>Популярное кафе или престижный ресторан должны следить за современными тенденциями в дизайне и потребностями клиентов. В теплый сезон успех бизнеса зависит от наличия летней площадки. Гости города и просто гуляющие люди обязательно обратят внимание на стильно оформленную летнюю площадку и захотят отдохнуть на свежем воздухе за вкусной едой.</p>
                  <p>Компания MOBILE TENT поможет сделать Ваш бизнес еще успешнее. Мы производим не просто качественные, а красивые навесные конструкции, которые привлекают внимание людей своим нестандартным дизайном. Возможности нашего производства и талант дизайнеров позволяют изготовить летние шатры под заказ даже по сложному эскизу.</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};