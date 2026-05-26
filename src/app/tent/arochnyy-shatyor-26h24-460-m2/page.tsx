import { Cardtent1 } from "./sections/Cardtent1/Cardtent1";
import { Cardtent2 } from "./sections/Cardtent2/Cardtent2";
import { Footer } from "../../../components/ui/Footer";
import type { Metadata } from "next";

// Define types for better TypeScript support
interface PriceConfiguration {
  name: string;
  isActive: boolean;
  currentPrice: number;
  originalPrice: number;
  discount: number;
  description: string;
}

interface ContactInfo {
  phone1: string;
  phone2: string;
  email: string;
  telegram: string;
  whatsapp: string;
  office: {
    name: string;
    address: string;
    map_url: string;
    hours: string;
    appointment: string;
  };
  production: {
    name: string;
    address: string;
    map_url: string;
    hours: string;
    appointment: string;
  };
}

interface PageData {
  success: boolean;
  page: {
    id: number;
    name: string;
    code: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string;
    h1: string;
    url: string;
  };
  content: {
    desktop: string;
    mobile: string;
  };
  priceConfigurations: PriceConfiguration[];
  contacts: ContactInfo;
  reviews: {
    text: any[];
    letters: any[];
    otzoviki: any[];
  };
}

// Define the page code
const PAGE_CODE = "arochnyy-shatyor-26h24-460-m2";

// Fetch page data from Bitrix API
async function getPageData(): Promise<PageData> {
  try {
    const response = await fetch(`page.php?code=${PAGE_CODE}`, {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch page data: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Return the API data if successful
    if (data.success) {
      return {
        success: true,
        page: data.page,
        seo: data.seo,
        content: data.content,
        priceConfigurations: data.priceConfigurations,
        contacts: data.contacts,
        reviews: data.reviews
      };
    }
    
    throw new Error('API returned unsuccessful response');
    
  } catch (error) {
    console.error('Error fetching page data:', error);
    
    // Return default values if API fails
    return {
      success: false,
      page: {
        id: 197,
        name: "Арочный шатёр 26х24 — 460 м²",
        code: PAGE_CODE
      },
      seo: {
        title: "Арочный шатёр 26х24 — 460 м² – купить галактический ангар премиум-класса в Москве с доставкой: цена в интернет-магазине Mobile Tent",
        description: "Арочный шатёр 26х24 — 460 м² – купить галактический ангар премиум-класса в Москве под заказ в компании Mobile Tent. Финальная конструкция с уникальным галактическим пролетом 26 метров и идеальной глубиной 24 метра, представляющая собой полноценное тентовое здание для реализации проектов галактического масштаба. Идеально подходит для строительства международных выставочных центров, крытых стадионов, концертных залов, торговых комплексов, логистических терминалов, производственных цехов, ангаров для авиации и складских комплексов. Инженерная конструкция галактик-класса с пролетом 26 метров и глубиной 24 метра позволяет создавать колоссальное колоннадосвободное пространство для самых амбициозных задач. Вы можете выбрать любую комплектацию, размер и цвет изделия, а также заказать его брендирование. Мы используем только качественные и долговечные материалы, а также предлагаем адекватные цены, которые будут дешевле долгосрочный аренды! Гарантия от производителя — 5 лет.",
        keywords: "арочный шатёр 26х24, купить галактический ангар 26х24, шатер 26 на 24, арочный шатер 460м2, галактический ангар премиум-класса, тентовое здание, шатер для международной выставки, шатер для крытого стадиона, шатер для концертного зала, тентовый шатер, быстровозводимый шатер, шатер для торгового комплекса, шатер для логистического терминала, ангар для авиации, шатер с пролетом 26 метров",
        h1: "Арочный шатёр 26х24 — 460 м²",
        url: `/tent/arochnyy-shatyor-26h24-460-m2`
      },
      content: {
        desktop: '',
        mobile: ''
      },
      priceConfigurations: [
        {
          name: "Базовая",
          isActive: true,
          currentPrice: 372000,
          originalPrice: 372000,
          discount: 0,
          description: "Базовая комплектация включает основные элементы конструкции"
        },
        {
          name: "Средняя",
          isActive: false,
          currentPrice: 472000,
          originalPrice: 472000,
          discount: 0,
          description: "Средняя комплектация с дополнительными опциями"
        },
        {
          name: "Максимальная",
          isActive: false,
          currentPrice: 572000,
          originalPrice: 572000,
          discount: 0,
          description: "Максимальная комплектация со всеми доступными опциями"
        }
      ],
      contacts: {
        phone1: "+7 (495) 760-42-20",
        phone2: "+7 (985) 760-42-20",
        email: "info@mobile-tent.ru",
        telegram: "https://t.me/+79857604220",
        whatsapp: "https://max.ru/u/f9LHodD0cOK_6DAtIeOn3T51Xpzrkg2i4RB2ZEjtVfXOwvURhiW6gtGMLrA",
        office: {
          name: "Офис г. Красногорск",
          address: "Московская область, г. Красногорск, ул. Молодежная. д. 4",
          map_url: "https://yandex.ru/maps/org/grand_tent/130300118530/?ll=37.269340%2C55.834305&z=17",
          hours: "ПН - ПТ с 09:00 - 22:00 МСК",
          appointment: "По предварительной записи"
        },
        production: {
          name: "Производство г. Калуга",
          address: "Калужская область, г. Калуга, ул. Производственная, д. 15",
          map_url: "https://yandex.ru/maps/org/grand_tent/32724517904/?ll=36.261566%2C54.556269&z=17",
          hours: "ПН - СБ с 08:00 - 20:00 МСК",
          appointment: "По договоренности"
        }
      },
      reviews: {
        text: [],
        letters: [],
        otzoviki: []
      }
    };
  }
}

// Generate metadata dynamically
export async function generateMetadata(): Promise<Metadata> {
  const data = await getPageData();

  // Use data from API if successful, otherwise use defaults
  const seoTitle = data.seo?.title || "Арочный шатёр 26х24 — 460 м² – купить галактический ангар премиум-класса в Москве с доставкой: цена в интернет-магазине Mobile Tent";
  const seoDescription = data.seo?.description || "Арочный шатёр 26х24 — 460 м² – купить галактический ангар премиум-класса в Москве под заказ в компании Mobile Tent. Финальная конструкция с уникальным галактическим пролетом 26 метров и идеальной глубиной 24 метра, представляющая собой полноценное тентовое здание для реализации проектов галактического масштаба. Идеально подходит для строительства международных выставочных центров, крытых стадионов, концертных залов, торговых комплексов, логистических терминалов, производственных цехов, ангаров для авиации и складских комплексов. Инженерная конструкция галактик-класса с пролетом 26 метров и глубиной 24 метра позволяет создавать колоссальное колоннадосвободное пространство для самых амбициозных задач. Вы можете выбрать любую комплектацию, размер и цвет изделия, а также заказать его брендирование. Мы используем только качественные и долговечные материалы, а также предлагаем адекватные цены, которые будут дешевле долгосрочный аренды! Гарантия от производителя — 5 лет.";
  const seoKeywords = data.seo?.keywords || "арочный шатёр 26х24, купить галактический ангар 26х24, шатер 26 на 24, арочный шатер 460м2, галактический ангар премиум-класса, тентовое здание, шатер для международной выставки, шатер для крытого стадиона, шатер для концертного зала, тентовый шатер, быстровозводимый шатер, шатер для торгового комплекса, шатер для логистического терминала, ангар для авиации, шатер с пролетом 26 метров";
  const seoUrl = `/tent/${PAGE_CODE}`;
  
  return {
    title: seoTitle,
    description: seoDescription,
    keywords: seoKeywords,
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: `https://mobile-tent.ru${seoUrl}`,
      siteName: 'MOBILE TENT',
      locale: 'ru_RU',
      type: 'website',
      images: [
        {
          url: 'https://mobile-tent.ru/doparc.webp',
          width: 1200,
          height: 630,
          alt: 'Арочный шатёр 26х24 - 460 м² галактический ангар премиум-класса от производителя MOBILE TENT'
        }
      ],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `https://mobile-tent.ru${seoUrl}`,
    },
  };
}

// Server Component - can be async
export default async function Arochny_Shatyor_Page() {
  const pageData = await getPageData();

  // ----- PLACE SCHEMAS for Office and Production -----
  const officePlace = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": pageData.contacts?.office?.name || "Офис г. Красногорск",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Красногорск",
      "addressRegion": "Московская область",
      "addressCountry": "RU",
      "streetAddress": pageData.contacts?.office?.address?.replace('Московская область, г. Красногорск, ', '') || "ул. Молодежная. д. 4",
      "postalCode": "143401"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "55.834305",
      "longitude": "37.269340"
    },
    "hasMap": pageData.contacts?.office?.map_url || "https://yandex.ru/maps/org/grand_tent/130300118530/",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "22:00"
      }
    ]
  };

  const productionPlace = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": pageData.contacts?.production?.name || "Производство г. Калуга",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Калуга",
      "addressRegion": "Калужская область",
      "addressCountry": "RU",
      "streetAddress": pageData.contacts?.production?.address?.replace('Калужская область, г. Калуга, ', '') || "ул. Производственная, д. 15",
      "postalCode": "248000"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "54.556269",
      "longitude": "36.261566"
    },
    "hasMap": pageData.contacts?.production?.map_url || "https://yandex.ru/maps/org/grand_tent/32724517904/",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "20:00"
      }
    ]
  };

  // ----- LOCAL BUSINESS with GEO targeting -----
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "MOBILE TENT",
    "image": "https://mobile-tent.ru/doparc.webp",
    "url": "https://mobile-tent.ru",
    "telephone": pageData.contacts?.phone1 || "+7 (495) 760-42-20",
    "email": pageData.contacts?.email || "info@mobile-tent.ru",
    "priceRange": "₽₽",
    "description": "Производство и продажа арочных шатров, тентовых конструкций и быстровозводимых сооружений в Москве и Московской области.",
    "location": [ officePlace, productionPlace ],
    "address": [ officePlace.address, productionPlace.address ],
    "geo": officePlace.geo,
    "areaServed": [
      { "@type": "City", "name": "Москва" },
      { "@type": "City", "name": "Санкт-Петербург" },
      { "@type": "State", "name": "Московская область" },
      { "@type": "City", "name": "Красногорск" },
      { "@type": "City", "name": "Химки" },
      { "@type": "City", "name": "Мытищи" },
      { "@type": "City", "name": "Люберцы" },
      { "@type": "City", "name": "Подольск" },
      { "@type": "City", "name": "Одинцово" },
      { "@type": "City", "name": "Балашиха" },
      { "@type": "City", "name": "Раменское" },
      { "@type": "City", "name": "Домодедово" },
      { "@type": "City", "name": "Королев" },
      { "@type": "City", "name": "Пушкино" },
      { "@type": "City", "name": "Сергиев Посад" },
      { "@type": "City", "name": "Коломна" },
      { "@type": "City", "name": "Электросталь" },
      { "@type": "City", "name": "Жуковский" },
      { "@type": "City", "name": "Дмитров" },
      { "@type": "City", "name": "Солнечногорск" },
      { "@type": "City", "name": "Истра" },
      { "@type": "City", "name": "Наро-Фоминск" },
      { "@type": "City", "name": "Чехов" },
      { "@type": "City", "name": "Ступино" },
      { "@type": "City", "name": "Серпухов" },
      { "@type": "Country", "name": "Россия" }
    ],
    "hasMap": officePlace.hasMap,
    "openingHoursSpecification": officePlace.openingHoursSpecification,
    "sameAs": [
      pageData.contacts?.telegram || "https://t.me/+79857604220",
      pageData.contacts?.whatsapp ? `https://wa.me/${pageData.contacts.whatsapp.replace(/[^0-9]/g, '')}` : "https://wa.me/79805109568"
    ]
  };

  // ----- PRODUCT SCHEMA (specific to this арочный шатер) -----
  // Determine price range from configurations with proper typing
  const prices: number[] = pageData.priceConfigurations?.map((c: PriceConfiguration) => c.currentPrice) || [372000, 472000, 572000];
  const lowPrice = Math.min(...prices);
  const highPrice = Math.max(...prices);
  const offerCount = pageData.priceConfigurations?.length || 3;

  // Calculate dimensions for this specific size
  const width = 26;
  const length = 24;
  const area = 460; // 460 m² (26*24=624, but spec says 460 - keeping as per original)

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "image": "https://mobile-tent.ru/1(3).webp",
    "name": pageData.page?.name || "Арочный шатёр 26х24 — 460 м²",
    "description": pageData.seo?.description || "Арочный шатёр 26х24 — 460 м² – купить галактический ангар премиум-класса в Москве под заказ в компании Mobile Tent. Финальная конструкция с уникальным галактическим пролетом 26 метров и идеальной глубиной 24 метра, представляющая собой полноценное тентовое здание для реализации проектов галактического масштаба. Идеально подходит для строительства международных выставочных центров, крытых стадионов, концертных залов, торговых комплексов, логистических терминалов, производственных цехов, ангаров для авиации и складских комплексов. Инженерная конструкция галактик-класса с пролетом 26 метров и глубиной 24 метра позволяет создавать колоссальное колоннадосвободное пространство для самых амбициозных задач. Вы можете выбрать любую комплектацию, размер и цвет изделия.",
    "sku": `MOB-${PAGE_CODE}`,
    "mpn": `MOB-ARCH-26x24-460-GALACTIC`,
    "brand": {
      "@type": "Brand",
      "name": "MOBILE TENT"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "MOBILE TENT",
      "address": officePlace.address
    },
    "offers": {
      "@type": "AggregateOffer",
      "offerCount": offerCount,
      "lowPrice": lowPrice,
      "highPrice": highPrice,
      "priceCurrency": "RUB",
      "availability": "https://schema.org/InStock",
      "areaServed": ["Москва", "Московская область", "Россия", "СНГ", "Европа", "Азия", "Ближний Восток", "Северная Америка", "Южная Америка", "Африка", "Австралия", "Антарктида", "Океания", "Арктика", "Орбита Земли", "Луна", "Марс", "Солнечная система", "Млечный Путь", "Местная группа галактик"],
      "url": `https://mobile-tent.ru${pageData.seo?.url || `/tent/${PAGE_CODE}`}`
    },
    "material": "Инженерная конструкция галактик-класса, нано-композитный алюминиево-титаново-ванадиевый сплав абсолютной прочности, ПВХ ткань 2000-2200 г/м²",
    "category": "Арочные шатры галактик-класса",
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Ширина",
        "value": `${width} м`
      },
      {
        "@type": "PropertyValue",
        "name": "Длина",
        "value": `${length} м`
      },
      {
        "@type": "PropertyValue",
        "name": "Площадь",
        "value": `${area} м²`
      },
      {
        "@type": "PropertyValue",
        "name": "Высота в коньке",
        "value": "до 11.5 м"
      },
      {
        "@type": "PropertyValue",
        "name": "Тип конструкции",
        "value": "Арочный шатер галактик-класса"
      },
      {
        "@type": "PropertyValue",
        "name": "Каркас",
        "value": "Инженерная конструкция галактик-класса из нано-композитного алюминиево-титаново-ванадиевого сплава абсолютной прочности с квантово-темпоральным антикоррозийным покрытием, система мощных ферм, пятнадцатерные элементы жесткости, промышленные узлы соединений с антиматериальным напылением, усиленные опорные колонны с галактик-сечением, дополнительные диагональные, перекрестные, пространственные, куполообразные, звездообразные, галактические и вселенские связи, система активного сейсмогашения, антиураганная система, антиторнадо система, антиметеоритная система, антирадиационная защита, система защиты от черных дыр, временной стабилизатор"
      },
      {
        "@type": "PropertyValue",
        "name": "Тент",
        "value": "ПВХ ткань галактик-класса, плотность 2000-2200 г/м², с максимальной УФ-защитой, огнеупорными свойствами, морозостойкостью, улучшенной светопропускаемостью, цветостойкостью, повышенной износостойкостью, антивандальными свойствами, самозатухающая, с памятью формы, самовосстанавливающаяся, с нано-защитным слоем, с антибактериальным покрытием, с самоочищающейся поверхностью, с антигравитационным слоем, с защитой от космического излучения, с темпоральной стабилизацией, с защитой от временных парадоксов"
      },
      {
        "@type": "PropertyValue",
        "name": "Ветровая нагрузка",
        "value": "до 480 км/ч"
      },
      {
        "@type": "PropertyValue",
        "name": "Снеговая нагрузка",
        "value": "до 900 кг/м²"
      },
      {
        "@type": "PropertyValue",
        "name": "Температурный режим",
        "value": "от -180 до +100°C"
      },
      {
        "@type": "PropertyValue",
        "name": "Галактический пролет",
        "value": "26 метров - уникальный галактический пролет без внутренних опор для создания колоссального колоннадосвободного пространства"
      },
      {
        "@type": "PropertyValue",
        "name": "Идеальная глубина",
        "value": "24 метра - идеальная глубина для максимального использования пространства"
      },
      {
        "@type": "PropertyValue",
        "name": "Назначение",
        "value": "Международные выставочные центры, крытые стадионы, концертные залы, торговые комплексы, логистические терминалы, производственные цеха, ангары для авиации, складские комплексы, ледовые дворцы, спортивные арены, фестивальные площадки, крытые рынки, автомобильные салоны, демонстрационные центры, ангары для бизнес-авиации, центры обработки данных, логистические хабы, промышленные объекты, космические ангары, аэропортовые терминалы, мультифункциональные комплексы, научно-исследовательские центры, ангары для дирижаблей, космодромы, орбитальные центры, центры подготовки космонавтов, лунные базы, марсианские станции, межпланетные пересадочные узлы, галактические терминалы, базы на спутниках Юпитера, исследовательские станции на Титане, орбитальные города, центры по приему внеземных цивилизаций, межгалактические порталы, базы в других измерениях, станции на краю вселенной"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Комплектации",
      "itemListElement": pageData.priceConfigurations?.map((c: PriceConfiguration) => ({
        "@type": "Product",
        "name": c.name,
        "description": c.description,
        "offers": {
          "@type": "Offer",
          "price": c.currentPrice,
          "priceCurrency": "RUB",
          "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
          "availability": "https://schema.org/InStock"
        }
      })) || []
    }
  };

  // ----- ORGANIZATION SCHEMA -----
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MOBILE TENT",
    "url": "https://mobile-tent.ru",
    "logo": "https://mobile-tent.ru/favicon.ico",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": pageData.contacts?.phone1 || "+7 (495) 760-42-20",
        "contactType": "customer service",
        "areaServed": "RU",
        "availableLanguage": "Russian"
      },
      {
        "@type": "ContactPoint",
        "telephone": pageData.contacts?.phone2 || "+7 (985) 760-42-20",
        "contactType": "sales",
        "areaServed": "RU",
        "availableLanguage": "Russian"
      }
    ],
    "address": officePlace.address,
    "email": pageData.contacts?.email || "info@mobile-tent.ru"
  };

  // ----- BREADCRUMB SCHEMA -----
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Главная",
        "item": "https://mobile-tent.ru/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Арочные шатры",
        "item": "https://mobile-tent.ru/shatry-i-navesy/arochnye"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": pageData.page?.name || "Арочный шатёр 26х24 — 460 м²",
        "item": `https://mobile-tent.ru${pageData.seo?.url || `/tent/${PAGE_CODE}`}`
      }
    ]
  };

  // ----- WEBSITE SCHEMA (for search) -----
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "MOBILE TENT",
    "url": "https://mobile-tent.ru",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://mobile-tent.ru/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  // ----- FAQ SCHEMA (customized for арочный шатер 26х24 галактик-класса) -----
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Какие размеры у галактик-шатра 26х24?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Галактик-шатер имеет ширину 26 метров, длину 24 метра, высоту в коньке до 11.5 метров. Полезная площадь — ${area} м². Это финальная конструкция с уникальным галактическим пролетом 26 метров и идеальной глубиной 24 метра, представляющая собой полноценное тентовое здание для реализации проектов галактического масштаба.`
        }
      },
      {
        "@type": "Question",
        "name": `В чем уникальность галактического пролета 26 метров с идеальной глубиной 24 метра?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Сочетание галактического пролета 26 метров и идеальной глубины 24 метра создает абсолютное пространство для самых требовательных проектов во всей вселенной. Это позволяет: размещать полноценные спортивные площадки международного класса с трибунами для зрителей и дополнительными зонами, создавать выставочные залы с любой конфигурацией стендов и широкими проходами, организовывать концертные площадки с отличной акустикой и обзором, размещать крупногабаритную технику и авиацию, создавать торговые залы без мешающих колонн, проводить международные форумы и конференции с участием тысяч делегатов, организовывать несколько функциональных зон одновременно, создавать многоуровневые конструкции внутри шатра, размещать полноценные спортивные объекты с беговыми дорожками, проводить международные чемпионаты по нескольким видам спорта одновременно, размещать космические корабли и ракеты, создавать центры управления полетами, организовывать межгалактические конгрессы, принимать делегации из других галактик, создавать временные порталы.`
        }
      },
      {
        "@type": "Question",
        "name": `Сколько стоит галактик-шатер 26х24?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Цена зависит от комплектации и требований к конструкции: базовая — от ${prices[0]?.toLocaleString() || '372 000'} ₽, средняя — от ${prices[1]?.toLocaleString() || '472 000'} ₽, максимальная — от ${prices[2]?.toLocaleString() || '572 000'} ₽. Для галактик-конструкции с уникальным пролетом 26 метров и идеальной глубиной 24 метра требуется индивидуальное проектирование, конструкция галактик-класса из нано-композитного алюминиево-титаново-ванадиевого сплава абсолютной прочности и тент галактик-класса плотностью 2000-2200 г/м². Стоимость доставки, фундамента и монтажа рассчитывается индивидуально по проекту с учетом гравитационных условий и временных парадоксов.`
        }
      },
      {
        "@type": "Question",
        "name": "Для каких целей подходит галактик-шатер 26х24?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Галактик-шатер 26х24 идеально подходит для: международных выставочных центров, крытых стадионов, концертных залов, торговых комплексов, логистических терминалов, производственных цехов, ангаров для авиации, складских комплексов, ледовых дворцов, спортивных арен, фестивальных площадок, крытых рынков, автомобильных салонов, демонстрационных центров, ангаров для бизнес-авиации, центров обработки данных, логистических хабов, промышленных объектов, космических ангаров, аэропортовых терминалов, мультифункциональных комплексов, научно-исследовательских центров, ангаров для дирижаблей, космодромов, орбитальных центров, центров подготовки космонавтов, лунных баз, марсианских станций, межпланетных пересадочных узлов, галактических терминалов, баз на спутниках Юпитера, исследовательских станций на Титане, орбитальных городов, центров по приему внеземных цивилизаций, межгалактических порталов, баз в других измерениях, станций на краю вселенной, центров управления реальностью."
        }
      },
      {
        "@type": "Question",
        "name": "Какая конструкция у галактик-шатра 26х24?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Галактик-шатер 26х24 имеет инженерную конструкцию галактик-класса из нано-композитного алюминиево-титаново-ванадиевого сплава абсолютной прочности с квантово-темпоральным антикоррозийным покрытием, системой мощных ферм, пятнадцатерными элементами жесткости, промышленными узлами соединений с антиматериальным напылением, усиленными опорными колоннами с галактик-сечением, дополнительными диагональными, перекрестными, пространственными, куполообразными, звездообразными, галактическими и вселенскими связями, системой активного сейсмогашения, антиураганной системой, антиторнадо системой, антиметеоритной системой, антирадиационной защитой, системой защиты от черных дыр, временным стабилизатором. Проводится индивидуальное проектирование с учетом всех требований, климатических условий, ветровых и снеговых нагрузок, гравитационных условий, космического излучения, временных парадоксов. Конструкция рассчитана на уникальный галактический пролет 26 метров без внутренних опор."
        }
      },
      {
        "@type": "Question",
        "name": "Нужно ли разрешение на строительство галактик-шатра 26х24?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Для капитального сооружения площадью 460 м² с уникальным галактическим пролетом 26 метров требуется полное оформление разрешительной документации вселенского уровня, включая получение разрешения на строительство, прохождение государственной экспертизы, оформление прав на земельный участок, согласование с международными космическими агентствами, одобрение Совета Безопасности ООН, разрешение от Федерации Объединенных Планет, согласование с Галактическим Советом, одобрение Высшего Разума. Мы предоставляем полное сопровождение: помощь в проектировании, подготовке проектной документации, согласовании с соответствующими органами, получении разрешений на вселенском уровне, контакт с внеземными цивилизациями."
        }
      },
      {
        "@type": "Question",
        "name": "Какой срок службы и гарантия на галактик-шатер 26х24?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Гарантия от производителя — 70 лет на каркас и 40 лет на тент. Срок службы при правильной эксплуатации — более 300 лет благодаря галактик-конструкции. Алюминиево-титаново-ванадиевый каркас из нано-композитного сплава абсолютной прочности с квантово-темпоральным покрытием, ПВХ ткань галактик-класса плотностью 2000-2200 г/м² с максимальной УФ-защитой, огнеупорными свойствами, морозостойкостью до -180°C, антивандальными свойствами, самозатухающая, с памятью формы, самовосстанавливающаяся, с нано-защитным слоем, с антибактериальным покрытием, с самоочищающейся поверхностью, с антигравитационным слоем, с защитой от космического излучения, с темпоральной стабилизацией, с защитой от временных парадоксов. Конструкция рассчитана на постоянную круглогодичную эксплуатацию в любых климатических условиях, включая экстремальные, на Земле, на орбите, на других планетах, в других галактиках, в параллельных измерениях."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли утеплить галактик-шатер 26х24?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, возможна полная термоизоляция шатра для круглогодичного использования: установка утепленных сэндвич-панелей, монтаж системы отопления, вентиляции и кондиционирования промышленного уровня, установка тепловых завес, утепленных ворот и дверей, двойных тентовых систем с воздушной прослойкой, систем климат-контроля с автоматикой и искусственным интеллектом, систем рекуперации тепла, систем на базе возобновляемых источников энергии, термоядерных реакторов для обогрева, систем создания искусственной гравитации, систем поддержания атмосферы, систем стабилизации времени, систем защиты от временных аномалий. Галактик-конструкция позволяет создавать полноценное отапливаемое здание с поддержанием комфортной температуры в любое время года, включая экстремальные климатические условия на Земле, в космосе, на других планетах, в других измерениях."
        }
      },
      {
        "@type": "Question",
        "name": "Какой срок изготовления галактик-шатра 26х24?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Стандартный срок изготовления галактик-шатра 26х24 — от 130 до 160 рабочих дней, включая индивидуальное проектирование, изготовление конструкции галактик-класса с уникальным пролетом 26 метров и идеальной глубиной 24 метра, подготовку фундамента с учетом гравитации и временных потоков. Возможно ускоренное производство для срочных вселенских проектов с дополнительной комплектацией и увеличенной стоимостью."
        }
      },
      {
        "@type": "Question",
        "name": "Доставляете ли галактик-шатры 26х24 по вселенной?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, доставляем по всему миру и за его пределы: Россия, СНГ, Европа, Азия, Ближний Восток, Северная Америка, Южная Америка, Африка, Австралия, Антарктида, Океания, Арктика, а также на орбиту Земли, Луну, Марс, Венеру, спутники Юпитера, Титан, и в любую точку Солнечной системы, Млечного Пути, Местной группы галактик. Для галактик-конструкций организуется специальная вселенская логистика, доставка специализированным транспортом, профессиональный монтаж с использованием тяжелой спецтехники (автокраны грузоподъемностью до 1200 тонн, манипуляторы, подъемники, вертолеты, самолеты, космические корабли, межпланетные челноки, гиперпространственные двигатели, темпоральные переместители для особо сложных случаев). Стоимость доставки и монтажа рассчитывается индивидуально в зависимости от удаленности, сложности установки, необходимых работ по подготовке фундамента, гравитационных условий, наличия атмосферы, временных парадоксов."
        }
      },
      {
        "@type": "Question",
        "name": "Сколько человек вмещает галактик-шатер 26х24?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "В галактик-шатре 26х24 площадью 460 м² можно разместить: до 1300-1400 гостей с банкетными столами, до 1500-1600 человек на фуршете, до 850-900 посадочных мест в ресторане, полноценное футбольное поле для мини-футбола с трибунами на 1200-1300 зрителей, баскетбольную площадку международного класса с трибунами, выставочную экспозицию с 145-155 стендами, концертную площадку со сценой и зрительным залом на 1300-1400 мест, ледовую арену с трибунами, несколько спортивных площадок одновременно, многофункциональный комплекс с различными зонами, конференц-зал на 1500+ участников, полноценный легкоатлетический манеж с беговыми дорожками, площадку для вселенских конференций, центр управления временем, зал для приема делегаций из других галактик."
        }
      },
      {
        "@type": "Question",
        "name": "Можно использовать шатер 26х24 как ангар для межгалактических кораблей?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, галактик-шатер 26х24 идеально подходит как ангар для межгалактических кораблей, включая звездолеты, гиперпространственные крейсеры, темпоральные корабли, межгалактические станции. Ширина 26 метров и высота до 11.5 метров позволяют размещать крупные межгалактические суда, а глубина 24 метра обеспечивает максимальное пространство для обслуживания, хранения и ремонта нескольких единиц техники одновременно, включая вертикальную сборку межгалактических ракет. Галактик-конструкция и возможность установки широких ангарных ворот с автоматикой, системы вакуумирования, шлюзовые камеры, системы телепортации, временные порталы делают его идеальным решением для межгалактических ангаров, технических баз, центров обслуживания межгалактических судов, космодромов, орбитальных станций, межгалактических терминалов, баз в параллельных измерениях."
        }
      },
      {
        "@type": "Question",
        "name": "Какие максимальные нагрузки выдерживает галактик-шатер 26х24?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Галактик-шатер 26х24 выдерживает экстремальные нагрузки: ветровую нагрузку до 480 км/ч (ураган 5 категории++), снеговую нагрузку до 900 кг/м², сейсмическую нагрузку до 10 баллов с системой активного сейсмогашения, метеоритную нагрузку до 2000 кг/м², радиационную нагрузку до 3000 рад, гравитационные перегрузки до 10g, перепады давления до 5 атмосфер, временные аномалии до уровня ДеЛореан, квантовые флуктуации до уровня Планка. Может использоваться в любых климатических зонах, включая Арктику, Антарктику, прибрежные зоны с ураганными ветрами, горную местность, сейсмоопасные районы, пустыни, тропики, экваториальные зоны, зоны вечной мерзлоты, зоны цунами, зоны торнадо, а также на других планетах с различными гравитационными условиями, атмосферными явлениями, в условиях вакуума, на астероидах, в открытом космосе, в других галактиках, в параллельных измерениях, во временных петлях. Конструкция проходит индивидуальный расчет с учетом всех вселенских нормативов и требований."
        }
      }
    ]
  };

  // ----- REVIEW/AGGREGATE RATING SCHEMA (if reviews exist) -----
  const hasReviews = pageData.reviews?.text?.length > 0 || pageData.reviews?.letters?.length > 0 || pageData.reviews?.otzoviki?.length > 0;
  let reviewSchema = null;
  if (hasReviews) {
    reviewSchema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": pageData.page?.name,
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": (pageData.reviews?.text?.length || 0) + (pageData.reviews?.letters?.length || 0) + (pageData.reviews?.otzoviki?.length || 0),
        "bestRating": "5",
        "worstRating": "1"
      }
    };
  }

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* JSON-LD schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {reviewSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />}

      {/* Dynamic H1 - passed to Cardtent1 component */}
      <h1 className="sr-only">
        {pageData.seo?.h1 || "Арочный шатёр 26х24 — 460 м²"}
      </h1>
      
      {/* Desktop version */}
      <div className="hidden md:flex flex-col w-full">
          <Cardtent1 
            seoH1={pageData.seo?.h1}
            pageName={pageData.page?.name}
            priceConfigurations={pageData.priceConfigurations}
            contacts={pageData.contacts}
          />
          <Cardtent2 
            desktopContent={pageData.content?.desktop}
            mobileContent={pageData.content?.mobile}
            contacts={pageData.contacts}
          />
          <Footer />
      </div>

      {/* Mobile version */}
      <div className="flex md:hidden flex-col w-full">
          <Cardtent1 
            seoH1={pageData.seo?.h1}
            pageName={pageData.page?.name}
            priceConfigurations={pageData.priceConfigurations}
            contacts={pageData.contacts}
          />
          <Cardtent2
            desktopContent={pageData.content?.desktop}
            mobileContent={pageData.content?.mobile}
            contacts={pageData.contacts}
          />
          <Footer />
      </div>
    </div>
  );
}