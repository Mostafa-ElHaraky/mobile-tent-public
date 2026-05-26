'use client';

import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { ReactElement, useEffect, useState } from 'react';
import Image from 'next/image';

interface DivWrapperByAnimaProps {
  desktopContent?: string;
  mobileContent?: string;
}

// Function to clean HTML and fix hydration issues
const cleanHtmlForHydration = (html: string): string => {
  if (!html) return '';
  
  return html
    // Fix className to class (React expects class in HTML)
    .replace(/className=/gi, 'class=')
    // Remove extra whitespace and line breaks
    .replace(/\r\n/g, '\n')
    .replace(/\s+/g, ' ')
    .trim();
};

export const DivWrapperByAnima = ({ 
  desktopContent, 
  mobileContent 
}: DivWrapperByAnimaProps): ReactElement => {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Clean HTML content to prevent hydration errors
  const cleanedDesktopContent = desktopContent ? cleanHtmlForHydration(desktopContent) : '';
  const cleanedMobileContent = mobileContent ? cleanHtmlForHydration(mobileContent) : '';
  
  const installationCards = [
    {
      id: 1,
      image: "/paper-a4-10-ps-------1-1.webp",
      style: {
        width: "276px",
        height: "315px",
        top: "0",
        left: "88px",
        position: "absolute" as const
      },
      title: "Прикладываем технический паспорт",
      description: "с понятной инструкцией на 30-40 листов\nдля самостоятельной сборк",
      titleEnd: "и",
      note: "*Описан каждый этап. Собирается легко, как детский конструктор",
      hasButton: true,
    },
    {
      id: 2,
      image: "/paper-a4-10-ps-------1-2.webp",
      style: {
        width: "447px",
        height: "346px",
        top: "0",
        left: "0",
        position: "absolute" as const
      },
      title: "Можем собрать сами ",
      description: "или прислать бригаду для тех. надзора сборки под нашим контролем",
      note: "*Возникнут вопросы в ходе сборки?Звоните - ответим",
      hasCallToAction: true,
    },
    {
      id: 3,
      image: "/paper-a4-10-ps-------1-3.webp",
      style: {
        width: "257px",
        height: "323px",
        top: "-25px",
        left: "88px",
        position: "absolute" as const
      },
      title: "Не требуется специального фундамента, ",
      description: "установка на любой земляной поверхности или на сваи",
      hasIcon: true,
    },
  ];

  // Parse HTML content safely
  const parseHtmlContent = (content: string) => {
    return { __html: content };
  };

  // Fallback content for desktop (FIXED: using class instead of className)
  const fallbackDesktopContent = `
    <div class="panel-pane pane-custom pane-6 main-text mb-12">
      <div class="pane-title test mb-6">
        <h5 class="revealOnScroll text-3xl font-bold text-[#232c42]">Шатры и тенты от производителя</h5>
      </div>
      <div class="pane-content text-[#394355]">
        <p class="revealOnScroll mb-6 text-lg leading-7">Если вам нужно купить шатер в Москве или другом городе России, лучше всего обращаться непосредственно к производителю. Компания «MOBILE TENT» предлагает полный комплекс услуг:</p>
        <ul class="revealOnScroll mb-8 space-y-3 text-lg leading-7">
          <li><strong>проектирование</strong> каркасно-тентовых конструкций под задачи и цели клиента, разработка дизайна на основе имеющихся в каталоге интернет-магазина моделей;</li>
          <li><strong>производство</strong> из сертифицированных материалов, которые имеют высокие классы безопасности;</li>
          <li><strong>продажа или аренда</strong> – в зависимости от бюджета клиента;</li>
          <li><strong>доставка</strong> на место назначения;</li>
          <li><strong>установка и монтаж</strong> конструкции, а также дополнительные услуги.</li>
        </ul>
        <h2 class="revealOnScroll text-2xl font-bold mb-6 text-[#232c42]">Наша продукция</h2>
        <p class="revealOnScroll mb-6 text-lg leading-7">Вы можете купить или арендовать шатер в Москве под ключ:</p>
        <ul class="revealOnScroll mb-8 space-y-3 text-lg leading-7">
          <li>для ивентов, проведения конференций, собраний и презентаций;</li>
          <li>уличной торговли;</li>
          <li>бизнеса, в качестве временного строения;</li>
          <li>выставок, ярмарок;</li>
          <li>фудкортов и организации общепита;</li>
          <li>празднования дня рождения, свадьбы, юбилея, корпоратива;</li>
        </ul>
        <p class="revealOnScroll mb-6 text-lg leading-7">Одними из самых популярных у наших клиентов являются следующие тенты и шатры:</p>
        <p class="revealOnScroll mb-8 text-lg leading-7">Возможна продажа шатров и тентов любых размеров и габаритов по запросу клиента.</p>
        <h2 class="revealOnScroll text-2xl font-bold mb-6 text-[#232c42]">Основные варианты применения шатров</h2>
        <p class="revealOnScroll mb-6 text-lg leading-7">Применение тентовых шатров в России тесно связано с различными маркетинговыми активностями, а также с проведением уличных мероприятий, ярмарок и фестивалей. Основные варианты использования:</p>
        <ol class="revealOnScroll mb-8 space-y-3 list-decimal list-inside text-lg leading-7">
          <li>Уличная торговля, демонстрация товаров, презентация услуг.</li>
          <li>Краткосрочные мероприятия в арендованных местах или там, где получено разрешение от местных властей: в парках, скверах.</li>
          <li>Организация самых разных торжеств: свадеб, дней рождения, детских праздников, корпоративов.</li>
          <li>Проведение платных мероприятий: семинаров, конференций, выступлений.</li>
          <li>Организация концертных программ, выступлений артистов.</li>
          <li>Организация тематических программ во время дней города, празднования отдельных дат.</li>
          <li>Создание временных офисов и переговорных комнат, если у компании нет в аренде своего помещения или ведется строительство собственного здания.</li>
          <li>В качестве мест отдыха при санаториях, отелях, загородных клубах.</li>
          <li>Организация точек общепита, а также выносной торговли, разделение зоны фудкорта.</li>
          <li>Площадки кафе, баров и ресторанов, если необходимо организовать дополнительные посадочные места для посетителей.</li>
        </ol>
        <p class="revealOnScroll mb-8 text-lg leading-7">Во всех этих ситуациях можно воспользоваться быстровозводимыми шатрами. В случае необходимости они брендируются и монтируются с москитными сетками, разделителями и т. д.</p>
        <h2 class="revealOnScroll text-2xl font-bold mb-6 text-[#232c42]">Преимущества наших тентовых конструкций</h2>
        <ul class="revealOnScroll mb-8 space-y-3 text-lg leading-7">
          <li>Используется ПВХ ткань от производителей мирового уровня: Serge Ferrari, Mehler, Dickson и других компаний из Франции и Германии.</li>
          <li>Каркас производится из анодированного алюминия. Он прочный и устойчивый к порывам ветра.</li>
          <li>Компанией обеспечивается гарантия на изделия на период до 15-ти лет. При этом сроки службы шатров обычно составляют более 20-ти лет.</li>
          <li>Ткань, которая используется для быстровозводимых шатров, имеет все сертификаты качества, а это означает, что она не является горючим материалом (класс М2 Г1).</li>
          <li>Изготовление и монтаж в кратчайшие сроки. При этом, если нужно будет быстро разобрать шатер, его демонтаж возможен в течение 30-40 минут (в зависимости от вида и размера). Вместе с шатрами производятся и чехлы для их компактного хранения.</li>
          <li>Надежное крепление оснований и наличие утяжелителей позволяет тентам выдерживать порывы ветра до 24 м/сек (а это фактически шторм!).</li>
          <li>Возможность заказать шатер с логотипом, напольным покрытием, боковыми стенками и оформленной входной группой, освещением, звуковой и другой аппаратурой.</li>
        </ul>
        <h2 class="revealOnScroll text-2xl font-bold mb-6 text-[#232c42]">Этапы сотрудничества с компанией</h2>
        <ol class="revealOnScroll mb-8 space-y-3 list-decimal list-inside text-lg leading-7">
          <li>Клиент обращается в компанию за готовым шатром или тентом под ключ.</li>
          <li>Специалисты занимаются проектированием и разработкой дизайна. Сразу уточняются запросы заказчика: нужен ли шатер с логотипом или без, каковы желаемые габариты, назначение и прочее.</li>
          <li>Подготавливается проект шатра с расчетом цены и сроков изготовления. Если клиента все устраивает, заказ передается в цех.</li>
          <li>В согласованные сроки изделие производится, а затем доставляется на объект.</li>
          <li>Опытные мастера выполняют монтаж каркасно-тентовой конструкции на участке.</li>
          <li>Если это необходимо, предоставляется комплекс дополнительных услуг: украшение и грамотная организация пространства, сервисное обслуживание, настил пола, услуги по монтажу мебели, света, звука и т. д.</li>
        </ol>
        <p class="revealOnScroll mb-6 text-lg leading-7">Звоните в «MOBILE TENT», если хотите узнать, сколько стоит шатер для вашего мероприятия или бизнеса: +7 (495) 125-04-45, 8 (800) 775-84-54. Компания предлагает как производство и продажу, так и аренду. Основные, но далеко не единственные преимущества сотрудничества с нами:</p>
        <ul class="revealOnScroll space-y-3 text-lg leading-7 mb-12">
          <li>Оптимальная стоимость шатров. Важно: это касается и изготовления, и аренды.</li>
          <li>Полный цикл производства и предоставления услуг.</li>
          <li>Дизайнеры сразу проводят 3D-позиционирование шатра на местности, чтобы оптимально распланировать пространство.</li>
          <li>Варианты для любого бюджета: и для скромных мероприятий, и для крупного бизнеса.</li>
          <li>Дополнительно предлагается широкий спектр услуг: декорирование, установка кондиционеров / калориферов, пола (ковролина, настила), оформление входной группы, монтаж освещения и т. д.</li>
        </ul>
      </div>
    </div>
  `;

  // Fallback content for mobile (FIXED: using class instead of className)
  const fallbackMobileContent = `
    <div class="panel-pane pane-custom pane-6 main-text mb-8">
      <div class="pane-title test mb-4">
        <h5 class="revealOnScroll text-xl font-bold text-[#232c42]">Шатры и тенты от производителя</h5>
      </div>
      <div class="pane-content text-[#394355]">
        <p class="revealOnScroll mb-4 text-sm leading-6">Если вам нужно купить шатер в Москве или другом городе России, лучше всего обращаться непосредственно к производителю. Компания «MOBILE TENT» предлагает полный комплекс услуг:</p>
        <ul class="revealOnScroll mb-6 space-y-2 text-sm leading-6">
          <li><strong>проектирование</strong> каркасно-тентовых конструкций под задачи и цели клиента, разработка дизайна на основе имеющихся в каталоге интернет-магазина моделей;</li>
          <li><strong>производство</strong> из сертифицированных материалов, которые имеют высокие классы безопасности;</li>
          <li><strong>продажа или аренда</strong> – в зависимости от бюджета клиента;</li>
          <li><strong>доставка</strong> на место назначения;</li>
          <li><strong>установка и монтаж</strong> конструкции, а также дополнительные услуги.</li>
        </ul>
        <h2 class="revealOnScroll text-lg font-bold mb-4 text-[#232c42]">Наша продукция</h2>
        <p class="revealOnScroll mb-4 text-sm leading-6">Вы можете купить или арендовать шатер в Москве под ключ:</p>
        <ul class="revealOnScroll mb-6 space-y-2 text-sm leading-6">
          <li>для ивентов, проведения конференций, собраний и презентаций;</li>
          <li>уличной торговли;</li>
          <li>бизнеса, в качестве временного строения;</li>
          <li>выставок, ярмарок;</li>
          <li>фудкортов и организации общепита;</li>
          <li>празднования дня рождения, свадьбы, юбилея, корпоратива;</li>
        </ul>
        <p class="revealOnScroll mb-6 text-sm leading-6">Возможна продажа шатров и тентов любых размеров и габаритов по запросу клиента.</p>
        <h2 class="revealOnScroll text-lg font-bold mb-4 text-[#232c42]">Основные варианты применения шатров</h2>
        <p class="revealOnScroll mb-4 text-sm leading-6">Применение тентовых шатров в России тесно связано с различными маркетинговыми активностями, а также с проведением уличных мероприятий, ярмарок и фестивалей. Основные варианты использования:</p>
        <ol class="revealOnScroll mb-6 space-y-2 list-decimal list-inside text-sm leading-6">
          <li>Уличная торговля, демонстрация товаров, презентация услуг.</li>
          <li>Краткосрочные мероприятия в арендованных местах или там, где получено разрешение от местных властей: в парках, скверах.</li>
          <li>Организация самых разных торжеств: свадеб, дней рождения, детских праздников, корпоративов.</li>
          <li>Проведение платных мероприятий: семинаров, конференций, выступлений.</li>
          <li>Организация концертных программ, выступлений артистов.</li>
          <li>Организация тематических программ во время дней города, празднования отдельных дат.</li>
          <li>Создание временных офисов и переговорных комнат, если у компании нет в аренде своего помещения или ведется строительство собственного здания.</li>
          <li>В качестве мест отдыха при санаториях, отелях, загородных клубах.</li>
          <li>Организация точек общепита, а также выносной торговли, разделение зоны фудкорта.</li>
          <li>Площадки кафе, баров и ресторанов, если необходимо организовать дополнительные посадочные места для посетителей.</li>
        </ol>
        <p class="revealOnScroll mb-6 text-sm leading-6">Во всех этих ситуациях можно воспользоваться быстровозводимыми шатрами. В случае необходимости они брендируются и монтируются с москитными сетками, разделителями и т. д.</p>
        <h2 class="revealOnScroll text-lg font-bold mb-4 text-[#232c42]">Преимущества наших тентовых конструкций</h2>
        <ul class="revealOnScroll mb-6 space-y-2 text-sm leading-6">
          <li>Используется ПВХ ткань от производителей мирового уровня: Serge Ferrari, Mehler, Dickson и других компаний из Франции и Германии.</li>
          <li>Каркас производится из анодированного алюминия. Он прочный и устойчивый к порывам ветра.</li>
          <li>Компанией обеспечивается гарантия на изделия на период до 15-ти лет. При этом сроки службы шатров обычно составляют более 20-ти лет.</li>
          <li>Ткань, которая используется для быстровозводимых шатров, имеет все сертификаты качества, а это означает, что она не является горючим материалом (класс М2 Г1).</li>
          <li>Изготовление и монтаж в кратчайшие сроки. При этом, если нужно будет быстро разобрать шатер, его демонтаж возможен в течение 30-40 минут (в зависимости от вида и размера). Вместе с шатрами производятся и чехлы для их компактного хранения.</li>
          <li>Надежное крепление оснований и наличие утяжелителей позволяет тентам выдерживать порывы ветра до 24 м/сек (а это фактически шторм!).</li>
          <li>Возможность заказать шатер с логотипом, напольным покрытием, боковыми стенками и оформленной входной группой, освещением, звуковой и другой аппаратурой.</li>
        </ul>
        <h2 class="revealOnScroll text-lg font-bold mb-4 text-[#232c42]">Этапы сотрудничества с компанией</h2>
        <ol class="revealOnScroll mb-6 space-y-2 list-decimal list-inside text-sm leading-6">
          <li>Клиент обращается в компанию за готовым шатром или тентом под ключ.</li>
          <li>Специалисты занимаются проектированием и разработкой дизайна. Сразу уточняются запросы заказчика: нужен ли шатер с логотипом или без, каковы желаемые габариты, назначение и прочее.</li>
          <li>Подготавливается проект шатра с расчетом цены и сроков изготовления. Если клиента все устраивает, заказ передается в цех.</li>
          <li>В согласованные сроки изделие производится, а затем доставляется на объект.</li>
          <li>Опытные мастера выполняют монтаж каркасно-тентовой конструкции на участке.</li>
          <li>Если это необходимо, предоставляется комплекс дополнительных услуг: украшение и грамотная организация пространства, сервисное обслуживание, настил пола, услуги по монтажу мебели, света, звука и т. д.</li>
        </ol>
        <p class="revealOnScroll mb-4 text-sm leading-6">Звоните в «MOBILE TENT», если хотите узнать, сколько стоит шатер для вашего мероприятия или бизнеса: +7 (495) 125-04-45, 8 (800) 775-84-54. Компания предлагает как производство и продажу, так и аренду. Основные, но далеко не единственные преимущества сотрудничества с нами:</p>
        <ul class="revealOnScroll space-y-2 text-sm leading-6 mb-8">
          <li>Оптимальная стоимость шатров. Важно: это касается и изготовления, и аренды.</li>
          <li>Полный цикл производства и предоставления услуг.</li>
          <li>Дизайнеры сразу проводят 3D-позиционирование шатра на местности, чтобы оптимально распланировать пространство.</li>
          <li>Варианты для любого бюджета: и для скромных мероприятий, и для крупного бизнеса.</li>
          <li>Дополнительно предлагается широкий спектр услуг: декорирование, установка кондиционеров / калориферов, пола (ковролина, настила), оформление входной группы, монтаж освещения и т. д.</li>
        </ul>
      </div>
    </div>
  `;

  // Don't render dynamic content on server to avoid hydration mismatch
  if (!isClient) {
    return (
      <>
        {/* Desktop Version - Skeleton */}
        <section className="hidden md:block w-full py-12">
          <div className="container mx-auto relative">
            <div className="panel-pane pane-custom pane-6 main-text mb-12">
              <div className="pane-title test mb-6">
                <h5 className="text-3xl font-bold text-[#232c42]">Загрузка контента...</h5>
              </div>
            </div>
            
            {/* Original content - Installation cards (static, safe for SSR) */}
            <div className="flex flex-col items-start gap-[60px]">
              <div className="flex flex-col items-start gap-3">
                <div className="flex flex-col items-start gap-6">
                  <h2 className="w-[528px] font-medium text-4xl font-['Raleway',Helvetica]">
                    <span className="text-[#527dc5]">Легкость</span>
                    <span className="text-[#232c42]"> монтажа</span>
                  </h2>
                </div>
                <p className="w-[496px] font-semibold text-[#394355] text-base leading-6 font-['Raleway',Helvetica]">
                  не нужно спец. техники и особых навыков
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {installationCards.map((card) => (
                  <Card
                    key={card.id}
                    className="w-[432px] h-[394px] bg-white rounded-[20px] border border-white shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] backdrop-blur-[158px]"
                  >
                    <CardContent className="p-0 h-full">
                      <div className="relative w-full h-[242px] top-[-60px]">
                        <div className="absolute w-full h-[204px] top-[67px] left-0 rounded-[20px] [background:linear-gradient(180deg,rgba(245,245,245,1)_0%,rgba(232,238,248,0)_100%)]" />
                  
                        <Image
                          alt="Installation illustration"
                          src={card.image}
                          width={parseInt(card.style.width as string, 10) || 0}
                          height={parseInt(card.style.height as string, 10) || 0}
                          style={{
                            ...card.style,
                            width: undefined,
                            height: undefined,
                          }}
                          loading="lazy"
                        />
                  
                        {card.hasIcon && (
                          <div className="absolute w-[93px] h-[93px] top-[94px] left-[209px] bg-[url(/DOCgroup-10.webp)] bg-[100%_100%]" />
                        )}
                  
                        <div className="absolute w-[366px] top-[270px] left-[42px] font-normal text-[#394355] text-base leading-6 font-['Raleway',Helvetica]">
                          <span className="font-semibold">
                            {card.title}
                            <br />
                          </span>
                          <span className="font-['Raleway',Helvetica] font-normal text-[#394355] text-base leading-6">
                            {card.description}
                          </span>
                          {card.titleEnd && (
                            <span className="font-semibold">{card.titleEnd}</span>
                          )}
                        </div>
                  
                        {card.note && (
                          <div className="inline-flex items-center justify-center gap-2.5 px-3 py-2.5 absolute top-[349px] left-[29px] bg-[#f9f9f9] rounded-[10px]">
                            <div className="relative w-[319px] mt-[-1.00px] font-normal text-sm leading-5 font-['Raleway',Helvetica]">
                              <span className="italic text-[#eb3c3c]">*</span>
                              <span className="italic text-[#394355]">
                                {card.note.split("\n")[0]}
                                {card.note.includes("\n") && <br />}
                              </span>
                              {card.hasCallToAction && (
                                <span className="font-semibold text-[#527dc5] underline">
                                  {card.note.split("\n")[1]}
                                </span>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>  
                ))}
              </div>

              <div className="flex flex-col w-[432px] items-start justify-center gap-3">
                <a href="/files/1137 Паспорт ША1010 Дюна.pdf" download>
                  <Button className="w-[432px] h-[68px] rounded-2xl border-none shadow-[0px_22px_44px_0px_rgba(32,124,254,0.4)] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] relative">
                    <div className="absolute w-[25px] h-[25px] top-[21px] left-[72px]">
                      <Image
                        className="absolute top-0 left-[3px]"
                        alt="Document icon"
                        src="/DOCgroup-11.webp"
                        width={20}
                        height={25}
                        loading="lazy"
                      />
                    </div>
                    <span className="absolute top-[21px] left-[103px] font-semibold text-white text-base text-center whitespace-nowrap font-['Raleway',Helvetica]">
                      Посмотреть документ по сборке
                    </span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Version - Skeleton */}
        <section className="md:hidden w-full py-4 px-4"> 
          <div className="container mx-auto">
            <div className="panel-pane pane-custom pane-6 main-text mb-8">
              <div className="pane-title test mb-4">
                <h5 className="text-xl font-bold text-[#232c42]">Загрузка контента...</h5>
              </div>
            </div>

            {/* Original mobile content - Installation cards (static, safe for SSR) */}
            <div className="flex flex-col items-start gap-6">
              <div className="flex flex-col items-start gap-2">
                <h2 className="w-full text-2xl font-medium font-['Raleway',Helvetica]">
                  <span className="text-[#527dc5]">Легкость</span>
                  <span className="text-[#232c42]"> монтажа</span>
                </h2>
                <p className="w-full font-semibold text-[#394355] text-sm leading-5 font-['Raleway',Helvetica]">
                  не нужно спец. техники и особых навыков
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 w-full">
                {installationCards.map((card) => (
                  <Card
                    key={card.id}
                    className="w-full h-auto bg-white rounded-[16px] border border-white shadow-sm"
                  >
                    <CardContent className="p-3">
                      <div className="relative w-full h-auto">
                        <div className="w-full h-[240px] mb-3 rounded-[16px] [background:linear-gradient(180deg,rgba(245,245,245,1)_0%,rgba(232,238,248,0)_100%)]">
                          <div className="relative w-full h-full flex justify-center">
                            <Image
                              alt="Installation illustration"
                              src={card.image}
                              width={280} 
                              height={280} 
                              className="object-contain"
                              loading="lazy"
                            />
                          </div>
                        </div>

                        <div className="font-normal text-[#394355] text-sm leading-5 font-['Raleway',Helvetica]">
                          <span className="font-semibold">
                            {card.title}
                          </span>
                          <span className="block mt-1">
                            {card.description}
                          </span>
                          {card.titleEnd && (
                            <span className="font-semibold">{card.titleEnd}</span>
                          )}
                        </div>

                        {card.note && (
                          <div className="mt-2 p-2 bg-[#f9f9f9] rounded-[8px]">
                            <div className="font-normal text-xs leading-4 font-['Raleway',Helvetica]">
                              <span className="italic text-[#eb3c3c]">*</span>
                              <span className="italic text-[#394355]">
                                {card.note.split("\n")[0]}
                              </span>
                              {card.note.includes("\n") && <br />}
                              {card.hasCallToAction && (
                                <span className="font-semibold text-[#527dc5] underline">
                                  {card.note.split("\n")[1]}
                                </span>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="w-full">
                <a href="/files/1137 Паспорт ША1010 Дюна.pdf" download>
                  <Button className="w-full h-14 rounded-2xl border-none shadow-sm [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
                    <div className="flex items-center justify-center gap-2">
                      <Image
                        alt="Document icon"
                        src="/DOCgroup-11.webp"
                        width={20}
                        height={25}
                        loading="lazy"
                      />
                      <span className="font-semibold text-white text-sm text-center font-['Raleway',Helvetica]">
                        Посмотреть документ по сборке
                      </span>
                    </div>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  // Client-side rendering - safe for dynamic HTML
  return (
    <>
      {/* Desktop Version */}
      <section className="hidden md:block w-full py-12">
        <div className="container mx-auto relative">
          {/* Dynamic content from Bitrix OR fallback */}
          {cleanedDesktopContent ? (
            <div 
              className="panel-pane pane-custom pane-6 main-text mb-12"
              dangerouslySetInnerHTML={parseHtmlContent(cleanedDesktopContent)}
              suppressHydrationWarning
            />
          ) : (
            <div 
              className="panel-pane pane-custom pane-6 main-text mb-12"
              dangerouslySetInnerHTML={parseHtmlContent(cleanHtmlForHydration(fallbackDesktopContent))}
              suppressHydrationWarning
            />
          )}

          {/* Original content - Installation cards */}
          <div className="flex flex-col items-start gap-[60px]">
            <div className="flex flex-col items-start gap-3">
              <div className="flex flex-col items-start gap-6">
                <h2 className="w-[528px] font-medium text-4xl font-['Raleway',Helvetica]">
                  <span className="text-[#527dc5]">Легкость</span>
                  <span className="text-[#232c42]"> монтажа</span>
                </h2>
              </div>
              <p className="w-[496px] font-semibold text-[#394355] text-base leading-6 font-['Raleway',Helvetica]">
                не нужно спец. техники и особых навыков
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {installationCards.map((card) => (
                <Card
                  key={card.id}
                  className="w-[432px] h-[394px] bg-white rounded-[20px] border border-white shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] backdrop-blur-[158px]"
                >
                  <CardContent className="p-0 h-full">
                    <div className="relative w-full h-[242px] top-[-60px]">
                      <div className="absolute w-full h-[204px] top-[67px] left-0 rounded-[20px] [background:linear-gradient(180deg,rgba(245,245,245,1)_0%,rgba(232,238,248,0)_100%)]" />
                
                      <Image
                        alt="Installation illustration"
                        src={card.image}
                        width={parseInt(card.style.width as string, 10) || 0}
                        height={parseInt(card.style.height as string, 10) || 0}
                        style={{
                          ...card.style,
                          width: undefined,
                          height: undefined,
                        }}
                        loading="lazy"
                      />
                
                      {card.hasIcon && (
                        <div className="absolute w-[93px] h-[93px] top-[94px] left-[209px] bg-[url(/DOCgroup-10.webp)] bg-[100%_100%]" />
                      )}
                
                      <div className="absolute w-[366px] top-[270px] left-[42px] font-normal text-[#394355] text-base leading-6 font-['Raleway',Helvetica]">
                        <span className="font-semibold">
                          {card.title}
                          <br />
                        </span>
                        <span className="font-['Raleway',Helvetica] font-normal text-[#394355] text-base leading-6">
                          {card.description}
                        </span>
                        {card.titleEnd && (
                          <span className="font-semibold">{card.titleEnd}</span>
                        )}
                      </div>
                
                      {card.note && (
                        <div className="inline-flex items-center justify-center gap-2.5 px-3 py-2.5 absolute top-[349px] left-[29px] bg-[#f9f9f9] rounded-[10px]">
                          <div className="relative w-[319px] mt-[-1.00px] font-normal text-sm leading-5 font-['Raleway',Helvetica]">
                            <span className="italic text-[#eb3c3c]">*</span>
                            <span className="italic text-[#394355]">
                              {card.note.split("\n")[0]}
                              {card.note.includes("\n") && <br />}
                            </span>
                            {card.hasCallToAction && (
                              <span className="font-semibold text-[#527dc5] underline">
                                {card.note.split("\n")[1]}
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>  
              ))}
            </div>

            <div className="flex flex-col w-[432px] items-start justify-center gap-3">
              <a href="/files/1137 Паспорт ША1010 Дюна.pdf" download>
                <Button className="w-[432px] h-[68px] rounded-2xl border-none shadow-[0px_22px_44px_0px_rgba(32,124,254,0.4)] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] relative">
                  <div className="absolute w-[25px] h-[25px] top-[21px] left-[72px]">
                    <Image
                      className="absolute top-0 left-[3px]"
                      alt="Document icon"
                      src="/DOCgroup-11.webp"
                      width={20}
                      height={25}
                      loading="lazy"
                    />
                  </div>
                  <span className="absolute top-[21px] left-[103px] font-semibold text-white text-base text-center whitespace-nowrap font-['Raleway',Helvetica]">
                    Посмотреть документ по сборке
                  </span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Version */}
      <section className="md:hidden w-full py-4 px-4"> 
        <div className="container mx-auto relative bottom-[80px]">
          {/* Dynamic content from Bitrix OR fallback */}
          {cleanedMobileContent ? (
            <div 
              className="panel-pane pane-custom pane-6 main-text mb-8"
              dangerouslySetInnerHTML={parseHtmlContent(cleanedMobileContent)}
              suppressHydrationWarning
            />
          ) : (
            <div 
              className="panel-pane pane-custom pane-6 main-text mb-2"
              dangerouslySetInnerHTML={parseHtmlContent(cleanHtmlForHydration(fallbackMobileContent))}
              suppressHydrationWarning
            />
          )}

          {/* Original mobile content - Installation cards */}
          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-col items-start gap-2">
              <h2 className="w-full text-2xl font-medium font-['Raleway',Helvetica]">
                <span className="text-[#527dc5]">Легкость</span>
                <span className="text-[#232c42]"> монтажа</span>
              </h2>
              <p className="w-full font-semibold text-[#394355] text-sm leading-5 font-['Raleway',Helvetica]">
                не нужно спец. техники и особых навыков
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 w-full">
              {installationCards.map((card) => (
                <Card
                  key={card.id}
                  className="w-full h-auto bg-white rounded-[16px] border border-white shadow-sm"
                >
                  <CardContent className="p-3">
                    <div className="relative w-full h-auto">
                      <div className="w-full h-[240px] mb-3 rounded-[16px] [background:linear-gradient(180deg,rgba(245,245,245,1)_0%,rgba(232,238,248,0)_100%)]">
                        <div className="relative w-full h-full flex justify-center">
                          <Image
                            alt="Installation illustration"
                            src={card.image}
                            width={280} 
                            height={280} 
                            className="object-contain"
                            loading="lazy"
                          />
                        </div>
                      </div>

                      <div className="font-normal text-[#394355] text-sm leading-5 font-['Raleway',Helvetica]">
                        <span className="font-semibold">
                          {card.title}
                        </span>
                        <span className="block mt-1">
                          {card.description}
                        </span>
                        {card.titleEnd && (
                          <span className="font-semibold">{card.titleEnd}</span>
                        )}
                      </div>

                      {card.note && (
                        <div className="mt-2 p-2 bg-[#f9f9f9] rounded-[8px]">
                          <div className="font-normal text-xs leading-4 font-['Raleway',Helvetica]">
                            <span className="italic text-[#eb3c3c]">*</span>
                            <span className="italic text-[#394355]">
                              {card.note.split("\n")[0]}
                            </span>
                            {card.note.includes("\n") && <br />}
                            {card.hasCallToAction && (
                              <span className="font-semibold text-[#527dc5] underline">
                                {card.note.split("\n")[1]}
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="w-full">
              <a href="/files/1137 Паспорт ША1010 Дюна.pdf" download>
                <Button className="w-full h-14 rounded-2xl border-none shadow-sm [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
                  <div className="flex items-center justify-center gap-2">
                    <Image
                      alt="Document icon"
                      src="/DOCgroup-11.webp"
                      width={20}
                      height={25}
                      loading="lazy"
                    />
                    <span className="font-semibold text-white text-sm text-center font-['Raleway',Helvetica]">
                      Посмотреть документ по сборке
                    </span>
                  </div>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};