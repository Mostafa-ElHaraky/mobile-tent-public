'use client';

import React from "react";
import { FeaturesSection } from "./sections/FeaturesSection/FeaturesSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { TestimonialsSection } from "./sections/TestimonialsSection/TestimonialsSection";
import { ReactElement } from 'react';

// Props interface
interface About2Props {
  contentData?: {
    desktopContent?: string;
    mobileContent?: string;
  };
  contactData?: {
    office_address?: string;
    office_hours?: string;
    office_appointment?: string;
    production_address?: string;
    production_hours?: string;
    production_appointment?: string;
    phone1?: string;
    phone2?: string;
    email?: string;
    telegram?: string;
    whatsapp?: string;
    office_map_url?: string;
  };
}

export const About2: React.FC<About2Props> = ({ contentData, contactData }): ReactElement => {
  // Default content if no data from CMS
  const defaultContent = {
    desktop: `
      <div class="space-y-16">
        <div class="space-y-8">
          <div>
            <div>
              <h4 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Наша специализация</h4>
            </div>
            <div class="space-y-4 text-gray-700 leading-relaxed">
              <p>Основная специализация компании «MOBILE TENT» — изготовление шатров на заказ. Мы являемся
                надежным партнером для тех, перед кем стоит задача грамотной организации мероприятия на
                свежем воздухе. Масштаб празднества не имеет значения, и будь то деловая встреча или
                свадьба — мы всегда рады оберегать его от ветра и непогоды, предложив интересную и
                надежную защиту в виде прочного красивого накрытия.</p>
              <p>Вы можете сказать, что фирм наподобие нашей в столице достаточно, но кто из них готов
                гарантировать высокий уровень сервиса и комплексный подход к решению Вашей задачи?
                Обращаясь к нам, клиент может не только купить недорого тенты и шатры в
                интернет-магазине, но также воспользоваться целым спектром дополнительных услуг и в разы
                упростить организаторский процесс.</p>
              <p>Изготовление и продажа тентов — это наша специализация, но это не значит, что список
                предложений компании должен ограничиваться только этими двумя пунктами.</p>
            </div>
          </div>
          
          <div>
            <div>
              <h4 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Наши услуги</h4>
            </div>
            <div class="space-y-4 text-gray-700 leading-relaxed">
              <p>Современный рынок требует индивидуального подхода к клиенту, поэтому мы предоставляем
                целый комплекс услуг.</p>
              <p>Вот их перечень:</p>
              <ul class="list-disc pl-5 space-y-2">
                <li>разработка дизайна (отличный шанс подчеркнуть эксклюзивность события);</li>
                <li>изготовление навесов и их реализация (не только для Москвы, но и для СПб и других
                  городов РФ);</li>
                <li>шатры и навесы можно изготовить и приобрести, а можно арендовать по разумной цене
                  (причем не один раз);</li>
                <li>доставка и монтаж конструкции;</li>
                <li>украшение и грамотная организация пространства;</li>
                <li>полная консультация по эксплуатации и уходу;</li>
                <li>сервисное обслуживание.</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="space-y-8">
          <div>
            <div>
              <h4 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6">С нами любой праздник приятный и незабываемый</h4>
            </div>
            <div class="space-y-4 text-gray-700 leading-relaxed">
              <p>«MOBILE TENT» с радостью возьмется за реализацию Вашего проекта. Уверены, вместе мы
                решим, как лучше подготовиться к событию, какой формы и конструкции должны быть
                изготовленные на заказ шатры и тенты. С нами любой праздник превращается в приятный и
                незабываемый.</p>
              <p>Изготовление тентов на заказ самых разных форм и размеров — абсолютно реально потому, что
                в нашей команде работают лучшие специалисты, а наличие производственных мощностей,
                оснащенных только современным оборудованием гарантирует, что работа будет выполнена
                согласно европейским стандартам — точно, качественно и к назначенному сроку.</p>
              <p>Оценить наши возможности — просто, стоит лишь посетить разделы «Каталог» и «Галерея» на
                странице сайта. Там размещены самые популярные варианты тентов, шатров и других накрытий
                в Москве и СПб, изготовление которых заказывают клиенты чаще всего. Смотрите, как
                выглядят изделия в условиях эксплуатации и выбирайте вариант, который подходит именно
                Вам. Ассортимент настолько большой, что у нас реально отыскать все существующие виды
                шатров и аксессуаров, которые можно использовать для навесного укрытия. А если нет, то
                мы готовы к индивидуальному проекту — изготовим на продажу навесы по требованиям
                заказчика, устроим их установку и радо займемся обслуживанием.</p>
              <p>Намечается торжество? Вам больше не придется беспокоиться о том, как украсить место
                проведения и кому это доверить, потому что данная услуга есть у «MOBILE TENT». Мы берем
                на себя все хлопоты по изготовлению и оформлению тента, а те, кто работают с нами, не
                понаслышке знают, что оплаченные услуги стоят своей цены. Это весьма выгодно, особенно,
                если заказчику нужно организовать разовое мероприятие.</p>
              <p>Не принципиально, покупаете Вы изготовленный на заказ навес или арендуете, потому что все
                они производятся под строжайшим контролем и в соответствии с европейскими стандартами,
                абсолютно безопасны для Вашего здоровья и готовы спасать от жары и осадков, а также
                стать прекрасным местом для отдыха, презентации, работы и т.п.</p>
              <p>Обращайтесь, если привыкли серьезно и ответственно подходить к решению поставленных
                задач. Сотрудничество с «MOBILE TENT» — это выгодное партнерство и Ваша уверенность в
                результате. Доверьте изготовление навесов на заказ профессионалам и будьте спокойны — мы
                не подведем!</p>
            </div>
          </div>
        </div>
      </div>
    `
  };

  // Use content from CMS or default
  const contentHtml = contentData?.desktopContent || defaultContent.desktop;

  // Function to safely render HTML
  const createMarkup = (htmlContent: string) => {
    return { __html: htmlContent };
  };

  return(
    <main className="w-full min-h-screen bg-white overflow-hidden">
      <div className="flex flex-col w-full">
        <TestimonialsSection contactData={contactData} />
        <HeroSection />
        <FeaturesSection />
        
        {/* Russian Content Section - Now editable via Bitrix */}
        <div className="w-full py-12 px-4 md:px-8 lg:px-16 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Render content from Bitrix */}
            <div dangerouslySetInnerHTML={createMarkup(contentHtml)} />
          </div>
        </div>
      </div>
    </main>
  );
};