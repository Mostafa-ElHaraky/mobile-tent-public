import { Card, CardContent } from "../../components/ui/card";
import { DivProizvodstvoshatrov } from "./sections/DivProizvodstvoshatrov/DivProizvodstvoshatrov";
import { DivWrapperProizvodstvoshatrov } from "./sections/DivWrapperProizvodstvoshatrov";
import { Frame1Proizvodstvoshatrov } from "./sections/Frame1Proizvodstvoshatrov";
import { Frame2Proizvodstvoshatrov } from "./sections/Frame2Proizvodstvoshatrov";
import { Frame3Proizvodstvoshatrov } from "./sections/Frame3Proizvodstvoshatrov/Frame3Proizvodstvoshatrov";
import { Frame4Proizvodstvoshatrov } from "./sections/Frame4Proizvodstvoshatrov/Frame4Proizvodstvoshatrov";
import { Frame5Proizvodstvoshatrov } from "./sections/Frame5Proizvodstvoshatrov/Frame5Proizvodstvoshatrov";
import { FrameProizvodstvoshatrov } from "./sections/FrameProizvodstvoshatrov";
import { FrameWrapperProizvodstvoshatrov } from "./sections/FrameWrapperProizvodstvoshatrov";
import { OverlapGroupWrapperProizvodstvoshatrov } from "./sections/OverlapGroupWrapperProizvodstvoshatrov";
import { OverlapWrapperProizvodstvoshatrov } from "./sections/OverlapWrapperProizvodstvoshatrov";
import { SectionComponentNodeProizvodstvoshatrov } from "./sections/SectionComponentNodeProizvodstvoshatrov/SectionComponentNodeProizvodstvoshatrov";
import { FrameNew } from "./sections/FrameNew/FrameNew";
import { FrameWrapperNew } from "./sections/FrameWrapperNew/FrameWrapperNew";
import type { Metadata } from "next";
import Header from "../../components/ui/Header";
import Image from "next/image";
import { Footer } from "../../components/ui/Footer";

// Fetch page data from Bitrix API
async function getFactoryData() {
  try {
    const response = await fetch('page.php?code=proizvodstvo-shatrov', {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch page data');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching page data:', error);
    // Return default values if API fails
    return {
      success: false,
      seo: {
        title: "Производство шатров на заказ в России - изготовление шатров и тентов любой сложности от компании MOBILE TENT",
        description: "Производство шатров в России по доступной цене. Изготовление на заказ и производство готовых быстровозводимых шатров (звезда, пагода, больших и др), и других сооружений и тентовых конструкций от MOBILE TENT. Доставка по РФ, гарантии производителя.",
        h1: "Производство тентовых конструкций любой сложности"
      },
      content: {
        desktop: '',
        mobile: ''
      },
      contacts: {
        phone1: "+7 (499) 113-36-60",
        phone2: "+7 (495) 487-43-53",
        email: "info@mobile-tent.ru",
        telegram: "https://t.me/+79770893996?start=14594990928",
        whatsapp: "https://api.whatsapp.com/send/?phone=79805109568",
        office: {
          name: "Офис г. Красногорск",
          address: "Московская область, г. Красногорск, ул. Молодежная. д. 4",
          map_url: "https://yandex.ru/maps/?from=api-maps&text=Красногорск%2C%20Молодежная%2C%204",
          hours: "Пн-Пт с 09:00 -19:00",
          appointment: "По предварительной записи"
        },
        production: {
          name: "Производство г. Калуга",
          address: "Калужская область, г. Калуга, ул. Производственная, д. 15",
          map_url: "https://yandex.ru/maps/org/grand_tent/32724517904/?ll=36.261566%2C54.556269&z=17",
          hours: "ПН - СБ с 08:00 - 20:00 МСК",
          appointment: "По договоренности"
        }
      }
    };
  }
}

// Generate metadata dynamically
export async function generateMetadata(): Promise<Metadata> {
  const data = await getFactoryData();

  // Use data from API if successful, otherwise use defaults
  const seoTitle = data.success ? data.seo.title : data.seo.title;
  const seoDescription = data.success ? data.seo.description : data.seo.description;
  
  return {
    title: seoTitle,
    description: seoDescription,
    openGraph: {
      title: seoTitle,
      description: seoDescription,
    },
  };
}

// Component to render HTML content from Bitrix
function BitrixContent({ 
  desktopContent, 
  mobileContent 
}: { 
  desktopContent?: string; 
  mobileContent?: string;
}) {
  // Default static content as fallback
  const defaultDesktopContent = `
<div className="w-full max-w-[1340px] mx-auto px-4 py-12">
<h2 className="font-semibold text-4xl leading-normal text-[#232c42] mb-8 [font-family:'Raleway',Helvetica]">Производство шатров</h2>
<div className="space-y-6 text-lg">
<p>
Компания MOBILE TENT - эксперт в области изготовления шатров, ангаров и тентов на заказ различных типов,
предоставляя клиентам уникальные решения для разнообразных событий. Наш ассортимент включает арочные,
сферические (купольные), гармошки, надувные, воздухоопорные, туристические шатры, а также конструкции в форме
шестигранника или звезды, с площадью от 9 до 600 кв. м и более.
</p>
<p>
Если вам нужно создать уютное и надежное сооружение для мероприятия на открытом воздухе, обеспечить непромокаемое
и ветроустойчивое пространство для магазина, автомойки, гостиницы, спортивных мероприятий, свадеб, уличной
торговли, пикника, временного хранения автомобиля, лодки или других нужд - обращайтесь к нам! MOBILE TENT - это
профессионализм, подтвержденный успешными проектами в&nbsp;Санкт-Петербурге и за его пределами.
</p>

<h2 className="font-semibold text-3xl leading-normal text-[#232c42] mt-10 mb-6 [font-family:'Raleway',Helvetica]">Особенности нашего производства:</h2>
<ol className="list-decimal pl-8 space-y-4">
<li>
<strong>Современная база:</strong> Мы располагаем современным производством с передовым оборудованием, что позволяет нам
создавать шатры любой сложности с высоким уровнем качества.
</li>
<li>
<strong>Качественные материалы:</strong> Мы закупаем материалы у официальных поставщиков из Китая, Италии, Польши и России,
что позволяет нам сохранять доступные цены без потери качества.
</li>
<li>
<strong>Прочные каркасы и тенты:</strong> Используем стальные профильные трубы для каркаса и тентовую ткань с плотностью 650
г/м², обеспечивая стойкость к различным нагрузкам и способность к эксплуатации в любое время года.
</li>
</ol>

<h2 className="font-semibold text-3xl leading-normal text-[#232c42] mt-10 mb-6 [font-family:'Raleway',Helvetica]">Как изготавливаются тентовые конструкции?</h2>
<p>
Изготовление тентовых конструкций - это процесс, требующий точности, профессионализма и использования
высококачественных материалов. Ниже приведены основные шаги, которые обычно включаются в процесс производства
тентовых конструкций:
</p>

<div className="space-y-8">
<div>
<h3 className="font-semibold text-xl text-[#232c42] mb-3">1. Проектирование и планирование:</h3>
<ul className="list-disc pl-6 space-y-2">
<li>
<strong>Определение требований клиента:</strong> определение размеров, формы, конструкции, дополнительных опций и
функциональных характеристик.
</li>
<li>
<strong>Разработка проекта</strong> с учетом всех параметров заказа.
</li>
</ul>
</div>

<div>
<h3 className="font-semibold text-xl text-[#232c42] mb-3">2. Выбор материалов:</h3>
<ul className="list-disc pl-6 space-y-2">
<li>
Тентовые конструкции часто изготавливаются из прочных и устойчивых к атмосферным воздействиям
материалами, таких как полиэстер, ПВХ (поливинилхлорид) или ПЭ (полиэтилен).
</li>
<li>
Каркас может быть выполнен из алюминия, стали или других прочных материалов.
</li>
</ul>
</div>

<div>
<h3 className="font-semibold text-xl text-[#232c42] mb-3">3. Резка материалов:</h3>
<ul className="list-disc pl-6 space-y-2">
<li>
Тентовая ткань и другие материалы режутся с использованием специальных инструментов и оборудования в
соответствии с размерами и формой, указанными в проекте.
</li>
</ul>
</div>

<div>
<h3 className="font-semibold text-xl text-[#232c42] mb-3">4. Швейный процесс:</h3>
<ul className="list-disc pl-6 space-y-2">
<li>
После резки, части ткани соединяются с использованием профессионального швейного оборудования.
</li>
<li>
Швы должны быть качественными и герметичными, чтобы обеспечить водонепроницаемость и прочность
конструкции.
</li>
</ul>
</div>

<div>
<h3 className="font-semibold text-xl text-[#232c42] mb-3">5. Каркасное изготовление:</h3>
<ul className="list-disc pl-6 space-y-2">
<li>
Если конструкция предусматривает каркас, происходит изготовление каркасных элементов.
</li>
<li>
Каркас может быть собран из алюминиевых или стальных труб с использованием соединителей и крепежных
элементов.
</li>
</ul>
</div>

<div>
<h3 className="font-semibold text-xl text-[#232c42] mb-3">6. Сборка и монтаж:</h3>
<ul className="list-disc pl-6 space-y-2">
<li>
Тентовая конструкция монтируется на месте, где она будет использоваться.
</li>
<li>
Каркас и тент крепятся в соответствии с проектом.
</li>
</ul>
</div>

<div>
<h3 className="font-semibold text-xl text-[#232c42] mb-3">7. Контроль качества:</h3>
<ul className="list-disc pl-6 space-y-2">
<li>
После монтажа проводится контроль качества, включающий проверку швов, прочности креплений, устойчивости
к атмосферным воздействиям и других параметров.
</li>
</ul>
</div>

<div>
<h3 className="font-semibold text-xl text-[#232c42] mb-3">8. Дополнительные опции:</h3>
<ul className="list-disc pl-6 space-y-2">
<li>
При необходимости могут быть добавлены дополнительные опции, такие как освещение, отопление, вентиляция,
окна и двери.
</li>
</ul>
</div>

<div>
<h3 className="font-semibold text-xl text-[#232c42] mb-3">9. Доставка и установка:</h3>
<ul className="list-disc pl-6 space-y-2">
<li>
Готовая конструкция доставляется на место использования, где происходит установка.
</li>
</ul>
</div>
</div>

<h2 className="font-semibold text-3xl leading-normal text-[#232c42] mt-10 mb-6 [font-family:'Raleway',Helvetica]">Заказ и дополнительные услуги:</h2>
<p>
Чтобы заказать шатер, свяжитесь с нами по указанному номеру. Мы также предлагаем гарантийный и послегарантийный
ремонт, а также дополнительные опции, такие как установка пола, осветительного оборудования и мебели. MOBILE
TENT готова к производству уникальных шатров для вашего события!
</p>
</div>
</div>
  `;

  const defaultMobileContent = `
<div className="w-full px-2 py-8">
<h2 className="font-semibold text-2xl leading-normal text-[#232c42] mb-6 [font-family:'Raleway',Helvetica]">Производство шатров</h2>
<div className="space-y-4 text-base">
<p>
Компания MOBILE TENT - эксперт в области изготовления шатров, ангаров и тентов на заказ различных типов,
предоставляя клиентам уникальные решения для разнообразных событий. Наш ассортимент включает арочные,
сферические (купольные), гармошки, надувные, воздухоопорные, туристические шатры, а также конструкции в форме
шестигранника или звезды, с площадью от 9 до 600 кв. м и более.
</p>
<p>
Если вам нужно создать уютное и надежное сооружение для мероприятия на открытом воздухе, обеспечить непромокаемое
и ветроустойчивое пространство для магазина, автомойки, гостиницы, спортивных мероприятий, свадеб, уличной
торговли, пикника, временного хранения автомобиля, лодки или других нужд - обращайтесь к нам! MOBILE TENT - это
профессионализм, подтвержденный успешными проектами в&nbsp;Санкт-Петербурге и за его пределами.
</p>

<h2 className="font-semibold text-xl leading-normal text-[#232c42] mt-8 mb-4 [font-family:'Raleway',Helvetica]">Особенности нашего производства:</h2>
<ol className="list-decimal pl-5 space-y-3">
<li>
<strong>Современная база:</strong> Мы располагаем современным производством с передовым оборудованием, что позволяет нам
создавать шатры любой сложности с высоким уровнем качества.
</li>
<li>
<strong>Качественные материалы:</strong> Мы закупаем материалы у официальных поставщиков из Китая, Италии, Польши и России,
что позволяет нам сохранять доступные цены без потери качества.
</li>
<li>
<strong>Прочные каркасы и тенты:</strong> Используем стальные профильные трубы для каркаса и тентовую ткань с плотностью 650
г/м², обеспечивая стойкость к различным нагрузкам и способность к эксплуатации в любое время года.
</li>
</ol>

<h2 className="font-semibold text-xl leading-normal text-[#232c42] mt-8 mb-4 [font-family:'Raleway',Helvetica]">Как изготавливаются тентовые конструкции?</h2>
<p>
Изготовление тентовых конструкций - это процесс, требующий точности, профессионализма и использования
высококачественных материалов. Ниже приведены основные шаги, которые обычно включаются в процесс производства
тентовых конструкций:
</p>

<div className="space-y-6">
<div>
<h3 className="font-semibold text-lg text-[#232c42] mb-2">1. Проектирование и планирование:</h3>
<ul className="list-disc pl-4 space-y-1">
<li>
<strong>Определение требований клиента:</strong> определение размеров, формы, конструкции, дополнительных опций и
функциональных характеристик.
</li>
<li>
<strong>Разработка проекта</strong> с учетом всех параметров заказа.
</li>
</ul>
</div>

<div>
<h3 className="font-semibold text-lg text-[#232c42] mb-2">2. Выбор материалов:</h3>
<ul className="list-disc pl-4 space-y-1">
<li>
Тентовые конструкции часто изготавливаются из прочных и устойчивых к атмосферным воздействиям
материалов, таких как полиэстер, ПВХ (поливинилхлорид) или ПЭ (полиэтилен).
</li>
<li>
Каркас может быть выполнен из алюминия, стали или других прочных материалов.
</li>
</ul>
</div>

<div>
<h3 className="font-semibold text-lg text-[#232c42] mb-2">3. Резка материалов:</h3>
<ul className="list-disc pl-4 space-y-1">
<li>
Тентовая ткань и другие материалы режутся с использованием специальных инструментов и оборудования в
соответствии с размерами и формой, указанными в проекте.
</li>
</ul>
</div>

<div>
<h3 className="font-semibold text-lg text-[#232c42] mb-2">4. Швейный процесс:</h3>
<ul className="list-disc pl-4 space-y-1">
<li>
После резки, части ткани соединяются с использованием профессионального швейного оборудования.
</li>
<li>
Швы должны быть качественными и герметичными, чтобы обеспечить водонепроницаемость и прочность
конструкции.
</li>
</ul>
</div>

<div>
<h3 className="font-semibold text-lg text-[#232c42] mb-2">5. Каркасное изготовление:</h3>
<ul className="list-disc pl-4 space-y-1">
<li>
Если конструкция предусматривает каркас, происходит изготовление каркасных элементов.
</li>
<li>
Каркас может быть собран из алюминиевых или стальных труб с использованием соединителей и крепежных
элементов.
</li>
</ul>
</div>

<div>
<h3 className="font-semibold text-lg text-[#232c42] mb-2">6. Сборка и монтаж:</h3>
<ul className="list-disc pl-4 space-y-1">
<li>
Тентовая конструкция монтируется на месте, где она будет использоваться.
</li>
<li>
Каркас и тент крепятся в соответствии с проектом.
</li>
</ul>
</div>

<div>
<h3 className="font-semibold text-lg text-[#232c42] mb-2">7. Контроль качества:</h3>
<ul className="list-disc pl-4 space-y-1">
<li>
После монтажа проводится контроль качества, включающий проверку швов, прочности креплений, устойчивости
к атмосферным воздействиям и других параметров.
</li>
</ul>
</div>

<div>
<h3 className="font-semibold text-lg text-[#232c42] mb-2">8. Дополнительные опции:</h3>
<ul className="list-disc pl-4 space-y-1">
<li>
При необходимости могут быть добавлены дополнительные опции, такие как освещение, отопление, вентиляция,
окна и двери.
</li>
</ul>
</div>

<div>
<h3 className="font-semibold text-lg text-[#232c42] mb-2">9. Доставка и установка:</h3>
<ul className="list-disc pl-4 space-y-1">
<li>
Готовая конструкция доставляется на место использования, где происходит установка.
</li>
</ul>
</div>
</div>

<h2 className="font-semibold text-xl leading-normal text-[#232c42] mt-8 mb-4 [font-family:'Raleway',Helvetica]">Заказ и дополнительные услуги:</h2>
<p>
Чтобы заказать шатер, свяжитесь с нами по указанному номеру. Мы также предлагаем гарантийный и послегарантийный
ремонт, а также дополнительные опции, такие как установка пола, осветительного оборудования и мебели. MOBILE
TENT готова к производству уникальных шатров для вашего события!
</p>
</div>
</div>
  `;

  return (
    <>
      {/* Desktop content */}
      <div className="hidden md:block">
        {desktopContent ? (
          <div 
            className="w-full max-w-[1340px] mx-auto px-4 py-12"
            dangerouslySetInnerHTML={{ __html: desktopContent }}
          />
        ) : (
          <div 
            className="w-full max-w-[1340px] mx-auto px-4 py-12"
            dangerouslySetInnerHTML={{ __html: defaultDesktopContent }}
          />
        )}
      </div>

      {/* Mobile content */}
      <div className="block md:hidden">
        {mobileContent ? (
          <div 
            className="w-full px-2 py-8"
            dangerouslySetInnerHTML={{ __html: mobileContent }}
          />
        ) : (
          <div 
            className="w-full px-2 py-8"
            dangerouslySetInnerHTML={{ __html: defaultMobileContent }}
          />
        )}
      </div>
    </>
  );
}

export default async function FactoryPage() {
  const pageData = await getFactoryData();

  return (
    <>
      {/* SINGLE SEO-OPTIMIZED H1 TAG FROM BITRIX */}
      <h1 className="sr-only">
        {pageData.success ? pageData.seo.h1 : "Производство тентовых конструкций любой сложности"}
      </h1>
      
      {/* Desktop version */}
      <main className="hidden md:block relative flex justify-center bg-transparent overflow-x-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(232,238,248,1)] to-[rgba(222,228,240,0)] pointer-events-none z-0" />
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-screen h-[1196px] bg-gradient-to-b from-[#E8EEF8] to-transparent -z-10" />
        <div className="relative z-10 w-full max-w-[1440px] mx-auto flex flex-col items-center">
          <div className="w-full flex flex-col items-center gap-16 px-[20px]">
            <FrameWrapperProizvodstvoshatrov />
            <FrameProizvodstvoshatrov />
            <OverlapWrapperProizvodstvoshatrov />
            <DivProizvodstvoshatrov />
            <DivWrapperProizvodstvoshatrov />
            <section className="w-full flex flex-col items-center">
              <div className="flex w-full max-w-[1340px] mx-auto items-center justify-between">
                <h2 className="w-[658px] font-semibold text-4xl leading-normal [font-family:'Raleway',Helvetica]">
                  <span className="text-[#527dc5]">Проектируем </span>
                  <span className="text-[#232c42]">
                    все конструкции в самой крутой программе в РФ и СНГ
                  </span>
                </h2>
                <Card className="rounded-[10px] bg-gradient-to-br from-[#243057] to-[#374255] border-none">
                  <CardContent className="px-5 py-4">
                    <div className="font-semibold text-white text-[55px] leading-normal [font-family:'Raleway',Helvetica]">
                      Dlubal RFEM + MPanel
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="relative w-full max-w-[1340px] h-[572px] mt-[50px] rounded-2xl overflow-hidden">
                <Image
                  alt="Software Example"
                  src="/rectangle-95.webp"
                  fill
                  className="object-cover"
                  quality={85}
                  sizes="100vw"
                  loading="lazy"
                />
              </div>
            </section>

            <SectionComponentNodeProizvodstvoshatrov />
            <Frame1Proizvodstvoshatrov />
            <OverlapGroupWrapperProizvodstvoshatrov />
            <Frame2Proizvodstvoshatrov />
            <Frame3Proizvodstvoshatrov />
            <Frame4Proizvodstvoshatrov />

            <div className="relative w-full max-w-[1340px] h-[510px] rounded-2xl overflow-hidden">
              <Image
                src="/rectangle-99.webp"
                alt="Gallery"
                fill
                className="object-cover"
                sizes="100vw"
                quality={85}
                loading="lazy"
              />
            </div>

            <Frame5Proizvodstvoshatrov />
            <FrameNew contacts={pageData.contacts} />
            <FrameWrapperNew contacts={pageData.contacts} />

            {/* BITRIX CONTENT */}
            <BitrixContent 
              desktopContent={pageData.content?.desktop}
              mobileContent={pageData.content?.mobile}
            />
          </div>
        </div>
        <Footer />
      </main>

      {/* Mobile version */}
<main className="block md:hidden relative bg-transparent overflow-x-hidden min-h-[100svh] flex flex-col">
  {/* Backgrounds */}
  <div className="absolute inset-0 bg-gradient-to-b from-[rgba(232,238,248,1)] to-[rgba(222,228,240,0)] pointer-events-none" />
  <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-screen h-[420px] bg-gradient-to-b from-[#E8EEF8] to-transparent -z-10" />

  {/* Page content (constrained, grows to push footer down) */}
  <div className="relative z-10 w-full max-w-[430px] mx-auto flex-1 flex flex-col items-stretch px-4 gap-8">
    <FrameWrapperProizvodstvoshatrov />
    <FrameProizvodstvoshatrov />
    <OverlapWrapperProizvodstvoshatrov />
    <DivProizvodstvoshatrov />
    <DivWrapperProizvodstvoshatrov />

    <section className="w-full flex flex-col gap-4">
      <h2 className="font-semibold text-2xl leading-snug [font-family:'Raleway',Helvetica]">
        <span className="text-[#527dc5]">Проектируем </span>
        <span className="text-[#232c42]">в самой крутой программе в РФ и СНГ</span>
      </h2>
      <Card className="rounded-xl bg-gradient-to-br from-[#243057] to-[#374255] border-none">
        <CardContent className="px-4 py-3">
          <div className="font-semibold text-white text-3xl leading-tight [font-family:'Raleway',Helvetica]">
            Dlubal RFEM + MPanel
          </div>
        </CardContent>
      </Card>
      <div className="relative w-full h-56 sm:h-64 rounded-xl overflow-hidden">
        <Image alt="Software Example" loading="lazy" src="/rectangle-95.webp" fill className="object-cover" quality={85}  sizes="100vw" />
      </div>
    </section>

    <SectionComponentNodeProizvodstvoshatrov />
    <Frame1Proizvodstvoshatrov />
    <OverlapGroupWrapperProizvodstvoshatrov />
    <Frame2Proizvodstvoshatrov />
    <Frame3Proizvodstvoshatrov />
    <Frame4Proizvodstvoshatrov />

    <div className="relative w-full h-52 sm:h-64 rounded-xl overflow-hidden">
      <Image src="/rectangle-99.webp" alt="Gallery" fill className="object-cover" sizes="100vw" loading="lazy" quality={85} />
    </div>

    <Frame5Proizvodstvoshatrov />
    <FrameNew contacts={pageData.contacts} />
    <FrameWrapperNew contacts={pageData.contacts} />

    {/* BITRIX CONTENT FOR MOBILE */}
    {/* This is now handled inside the BitrixContent component */}
  </div>

  {/* Full-bleed footer (outside the constrained container) */}
  <div className="w-full pb-[env(safe-area-inset-bottom)]">
    <Footer />
  </div>
</main>

    </>
  );
}