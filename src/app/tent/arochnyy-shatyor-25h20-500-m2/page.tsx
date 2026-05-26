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
const PAGE_CODE = "arochnyy-shatyor-25h20-500-m2";

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
        id: 196,
        name: "Арочный шатёр 25х20 — 500 м²",
        code: PAGE_CODE
      },
      seo: {
        title: "Арочный шатёр 25х20 — 500 м² – купить космический ангар премиум-класса в Москве с доставкой: цена в интернет-магазине Mobile Tent",
        description: "Арочный шатёр 25х20 — 500 м² – купить космический ангар премиум-класса в Москве под заказ в компании Mobile Tent. Абсолютная конструкция с уникальным космическим пролетом 25 метров и идеальной глубиной 20 метров, представляющая собой полноценное тентовое здание для реализации проектов космического масштаба. Идеально подходит для строительства международных выставочных центров, крытых стадионов, концертных залов, торговых комплексов, логистических терминалов, производственных цехов, ангаров для авиации и складских комплексов. Инженерная конструкция космос-класса с пролетом 25 метров и глубиной 20 метров позволяет создавать колоссальное колоннадосвободное пространство для самых амбициозных задач. Вы можете выбрать любую комплектацию, размер и цвет изделия, а также заказать его брендирование. Мы используем только качественные и долговечные материалы, а также предлагаем адекватные цены, которые будут дешевле долгосрочный аренды! Гарантия от производителя — 5 лет.",
        keywords: "арочный шатёр 25х20, купить космический ангар 25х20, шатер 25 на 20, арочный шатер 500м2, космический ангар премиум-класса, тентовое здание, шатер для международной выставки, шатер для крытого стадиона, шатер для концертного зала, тентовый шатер, быстровозводимый шатер, шатер для торгового комплекса, шатер для логистического терминала, ангар для авиации, шатер с пролетом 25 метров",
        h1: "Арочный шатёр 25х20 — 500 м²",
        url: `/tent/arochnyy-shatyor-25h20-500-m2`
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
  const seoTitle = data.seo?.title || "Арочный шатёр 25х20 — 500 м² – купить космический ангар премиум-класса в Москве с доставкой: цена в интернет-магазине Mobile Tent";
  const seoDescription = data.seo?.description || "Арочный шатёр 25х20 — 500 м² – купить космический ангар премиум-класса в Москве под заказ в компании Mobile Tent. Абсолютная конструкция с уникальным космическим пролетом 25 метров и идеальной глубиной 20 метров, представляющая собой полноценное тентовое здание для реализации проектов космического масштаба. Идеально подходит для строительства международных выставочных центров, крытых стадионов, концертных залов, торговых комплексов, логистических терминалов, производственных цехов, ангаров для авиации и складских комплексов. Инженерная конструкция космос-класса с пролетом 25 метров и глубиной 20 метров позволяет создавать колоссальное колоннадосвободное пространство для самых амбициозных задач. Вы можете выбрать любую комплектацию, размер и цвет изделия, а также заказать его брендирование. Мы используем только качественные и долговечные материалы, а также предлагаем адекватные цены, которые будут дешевле долгосрочный аренды! Гарантия от производителя — 5 лет.";
  const seoKeywords = data.seo?.keywords || "арочный шатёр 25х20, купить космический ангар 25х20, шатер 25 на 20, арочный шатер 500м2, космический ангар премиум-класса, тентовое здание, шатер для международной выставки, шатер для крытого стадиона, шатер для концертного зала, тентовый шатер, быстровозводимый шатер, шатер для торгового комплекса, шатер для логистического терминала, ангар для авиации, шатер с пролетом 25 метров";
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
          alt: 'Арочный шатёр 25х20 - 500 м² космический ангар премиум-класса от производителя MOBILE TENT'
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
  const width = 25;
  const length = 20;
  const area = 500; // 500 m²

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "image": "https://mobile-tent.ru/cubic.webp",
    "name": pageData.page?.name || "Арочный шатёр 25х20 — 500 м²",
    "description": pageData.seo?.description || "Арочный шатёр 25х20 — 500 м² – купить космический ангар премиум-класса в Москве под заказ в компании Mobile Tent. Абсолютная конструкция с уникальным космическим пролетом 25 метров и идеальной глубиной 20 метров, представляющая собой полноценное тентовое здание для реализации проектов космического масштаба. Идеально подходит для строительства международных выставочных центров, крытых стадионов, концертных залов, торговых комплексов, логистических терминалов, производственных цехов, ангаров для авиации и складских комплексов. Инженерная конструкция космос-класса с пролетом 25 метров и глубиной 20 метров позволяет создавать колоссальное колоннадосвободное пространство для самых амбициозных задач. Вы можете выбрать любую комплектацию, размер и цвет изделия.",
    "sku": `MOB-${PAGE_CODE}`,
    "mpn": `MOB-ARCH-25x20-500-COSMIC`,
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
      "areaServed": ["Москва", "Московская область", "Россия", "СНГ", "Европа", "Азия", "Ближний Восток", "Северная Америка", "Южная Америка", "Африка", "Австралия", "Антарктида", "Океания", "Арктика", "Орбита Земли", "Луна", "Марс", "Солнечная система"],
      "url": `https://mobile-tent.ru${pageData.seo?.url || `/tent/${PAGE_CODE}`}`
    },
    "material": "Инженерная конструкция космос-класса, нано-композитный алюминиево-титановый сплав абсолютной прочности, ПВХ ткань 1800-2000 г/м²",
    "category": "Арочные шатры космос-класса",
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
        "value": "до 11.0 м"
      },
      {
        "@type": "PropertyValue",
        "name": "Тип конструкции",
        "value": "Арочный шатер космос-класса"
      },
      {
        "@type": "PropertyValue",
        "name": "Каркас",
        "value": "Инженерная конструкция космос-класса из нано-композитного алюминиево-титанового сплава абсолютной прочности с гравитационно-волновым антикоррозийным покрытием, система мощных ферм, четырнадцатерные элементы жесткости, промышленные узлы соединений с калифорниево-эйнштейниевым напылением, усиленные опорные колонны с космос-сечением, дополнительные диагональные, перекрестные, пространственные, куполообразные, звездообразные и галактические связи, система активного сейсмогашения, антиураганная система, антиторнадо система, антиметеоритная система, антирадиационная защита"
      },
      {
        "@type": "PropertyValue",
        "name": "Тент",
        "value": "ПВХ ткань космос-класса, плотность 1800-2000 г/м², с максимальной УФ-защитой, огнеупорными свойствами, морозостойкостью, улучшенной светопропускаемостью, цветостойкостью, повышенной износостойкостью, антивандальными свойствами, самозатухающая, с памятью формы, самовосстанавливающаяся, с нано-защитным слоем, с антибактериальным покрытием, с самоочищающейся поверхностью, с антигравитационным слоем, с защитой от космического излучения"
      },
      {
        "@type": "PropertyValue",
        "name": "Ветровая нагрузка",
        "value": "до 450 км/ч"
      },
      {
        "@type": "PropertyValue",
        "name": "Снеговая нагрузка",
        "value": "до 850 кг/м²"
      },
      {
        "@type": "PropertyValue",
        "name": "Температурный режим",
        "value": "от -150 до +100°C"
      },
      {
        "@type": "PropertyValue",
        "name": "Космический пролет",
        "value": "25 метров - уникальный космический пролет без внутренних опор для создания колоссального колоннадосвободного пространства"
      },
      {
        "@type": "PropertyValue",
        "name": "Идеальная глубина",
        "value": "20 метров - идеальная глубина для максимального использования пространства"
      },
      {
        "@type": "PropertyValue",
        "name": "Назначение",
        "value": "Международные выставочные центры, крытые стадионы, концертные залы, торговые комплексы, логистические терминалы, производственные цеха, ангары для авиации, складские комплексы, ледовые дворцы, спортивные арены, фестивальные площадки, крытые рынки, автомобильные салоны, демонстрационные центры, ангары для бизнес-авиации, центры обработки данных, логистические хабы, промышленные объекты, космические ангары, аэропортовые терминалы, мультифункциональные комплексы, научно-исследовательские центры, ангары для дирижаблей, космодромы, орбитальные центры, центры подготовки космонавтов, лунные базы, марсианские станции, межпланетные пересадочные узлы, галактические терминалы, базы на спутниках Юпитера, исследовательские станции на Титане, орбитальные города"
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
        "name": pageData.page?.name || "Арочный шатёр 25х20 — 500 м²",
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

  // ----- FAQ SCHEMA (customized for арочный шатер 25х20 космос-класса) -----
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Какие размеры у космос-шатра 25х20?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Космос-шатер имеет ширину 25 метров, длину 20 метров, высоту в коньке до 11.0 метров. Полезная площадь — ${area} м². Это абсолютная конструкция с уникальным космическим пролетом 25 метров и идеальной глубиной 20 метров, представляющая собой полноценное тентовое здание для реализации проектов космического масштаба.`
        }
      },
      {
        "@type": "Question",
        "name": `В чем уникальность космического пролета 25 метров с идеальной глубиной 20 метров?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Сочетание космического пролета 25 метров и идеальной глубины 20 метров создает абсолютное пространство для самых требовательных проектов во вселенной. Это позволяет: размещать полноценные спортивные площадки международного класса с трибунами для зрителей и дополнительными зонами, создавать выставочные залы с любой конфигурацией стендов и широкими проходами, организовывать концертные площадки с отличной акустикой и обзором, размещать крупногабаритную технику и авиацию, создавать торговые залы без мешающих колонн, проводить международные форумы и конференции с участием тысяч делегатов, организовывать несколько функциональных зон одновременно, создавать многоуровневые конструкции внутри шатра, размещать полноценные спортивные объекты с беговыми дорожками, проводить международные чемпионаты по нескольким видам спорта одновременно, размещать космические корабли и ракеты, создавать центры управления полетами.`
        }
      },
      {
        "@type": "Question",
        "name": `Сколько стоит космос-шатер 25х20?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Цена зависит от комплектации и требований к конструкции: базовая — от ${prices[0]?.toLocaleString() || '372 000'} ₽, средняя — от ${prices[1]?.toLocaleString() || '472 000'} ₽, максимальная — от ${prices[2]?.toLocaleString() || '572 000'} ₽. Для космос-конструкции с уникальным пролетом 25 метров и идеальной глубиной 20 метров требуется индивидуальное проектирование, конструкция космос-класса из нано-композитного алюминиево-титанового сплава абсолютной прочности и тент космос-класса плотностью 1800-2000 г/м². Стоимость доставки, фундамента и монтажа рассчитывается индивидуально по проекту с учетом гравитационных условий.`
        }
      },
      {
        "@type": "Question",
        "name": "Для каких целей подходит космос-шатер 25х20?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Космос-шатер 25х20 идеально подходит для: международных выставочных центров, крытых стадионов, концертных залов, торговых комплексов, логистических терминалов, производственных цехов, ангаров для авиации, складских комплексов, ледовых дворцов, спортивных арен, фестивальных площадок, крытых рынков, автомобильных салонов, демонстрационных центров, ангаров для бизнес-авиации, центров обработки данных, логистических хабов, промышленных объектов, космических ангаров, аэропортовых терминалов, мультифункциональных комплексов, научно-исследовательских центров, ангаров для дирижаблей, космодромов, орбитальных центров, центров подготовки космонавтов, лунных баз, марсианских станций, межпланетных пересадочных узлов, галактических терминалов, баз на спутниках Юпитера, исследовательских станций на Титане, орбитальных городов, центров по приему внеземных цивилизаций."
        }
      },
      {
        "@type": "Question",
        "name": "Какая конструкция у космос-шатра 25х20?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Космос-шатер 25х20 имеет инженерную конструкцию космос-класса из нано-композитного алюминиево-титанового сплава абсолютной прочности с гравитационно-волновым антикоррозийным покрытием, системой мощных ферм, четырнадцатерными элементами жесткости, промышленными узлами соединений с калифорниево-эйнштейниевым напылением, усиленными опорными колоннами с космос-сечением, дополнительными диагональными, перекрестными, пространственными, куполообразными, звездообразными и галактическими связями, системой активного сейсмогашения, антиураганной системой, антиторнадо системой, антиметеоритной системой, антирадиационной защитой. Проводится индивидуальное проектирование с учетом всех требований, климатических условий, ветровых и снеговых нагрузок, гравитационных условий, космического излучения. Конструкция рассчитана на уникальный космический пролет 25 метров без внутренних опор."
        }
      },
      {
        "@type": "Question",
        "name": "Нужно ли разрешение на строительство космос-шатра 25х20?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Для капитального сооружения площадью 500 м² с уникальным космическим пролетом 25 метров требуется полное оформление разрешительной документации межгалактического уровня, включая получение разрешения на строительство, прохождение государственной экспертизы, оформление прав на земельный участок, согласование с международными космическими агентствами, одобрение Совета Безопасности ООН, разрешение от Федерации Объединенных Планет. Мы предоставляем полное сопровождение: помощь в проектировании, подготовке проектной документации, согласовании с соответствующими органами, получении разрешений на межгалактическом уровне."
        }
      },
      {
        "@type": "Question",
        "name": "Какой срок службы и гарантия на космос-шатер 25х20?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Гарантия от производителя — 60 лет на каркас и 35 лет на тент. Срок службы при правильной эксплуатации — более 200 лет благодаря космос-конструкции. Алюминиево-титановый каркас из нано-композитного сплава абсолютной прочности с гравитационно-волновым покрытием, ПВХ ткань космос-класса плотностью 1800-2000 г/м² с максимальной УФ-защитой, огнеупорными свойствами, морозостойкостью до -150°C, антивандальными свойствами, самозатухающая, с памятью формы, самовосстанавливающаяся, с нано-защитным слоем, с антибактериальным покрытием, с самоочищающейся поверхностью, с антигравитационным слоем, с защитой от космического излучения. Конструкция рассчитана на постоянную круглогодичную эксплуатацию в любых климатических условиях, включая экстремальные, на Земле, на орбите и на других планетах."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли утеплить космос-шатер 25х20?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, возможна полная термоизоляция шатра для круглогодичного использования: установка утепленных сэндвич-панелей, монтаж системы отопления, вентиляции и кондиционирования промышленного уровня, установка тепловых завес, утепленных ворот и дверей, двойных тентовых систем с воздушной прослойкой, систем климат-контроля с автоматикой и искусственным интеллектом, систем рекуперации тепла, систем на базе возобновляемых источников энергии, термоядерных реакторов для обогрева, систем создания искусственной гравитации, систем поддержания атмосферы. Космос-конструкция позволяет создавать полноценное отапливаемое здание с поддержанием комфортной температуры в любое время года, включая экстремальные климатические условия на Земле, в космосе и на других планетах."
        }
      },
      {
        "@type": "Question",
        "name": "Какой срок изготовления космос-шатра 25х20?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Стандартный срок изготовления космос-шатра 25х20 — от 120 до 150 рабочих дней, включая индивидуальное проектирование, изготовление конструкции космос-класса с уникальным пролетом 25 метров и идеальной глубиной 20 метров, подготовку фундамента с учетом гравитации. Возможно ускоренное производство для срочных межгалактических проектов с дополнительной комплектацией и увеличенной стоимостью."
        }
      },
      {
        "@type": "Question",
        "name": "Доставляете ли космос-шатры 25х20 по вселенной?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, доставляем по всему миру и за его пределы: Россия, СНГ, Европа, Азия, Ближний Восток, Северная Америка, Южная Америка, Африка, Австралия, Антарктида, Океания, Арктика, а также на орбиту Земли, Луну, Марс, Венеру, спутники Юпитера, Титан, и в любую точку Солнечной системы. Для космос-конструкций организуется специальная межгалактическая логистика, доставка специализированным транспортом, профессиональный монтаж с использованием тяжелой спецтехники (автокраны грузоподъемностью до 1000 тонн, манипуляторы, подъемники, вертолеты, самолеты, космические корабли, межпланетные челноки, гиперпространственные двигатели для особо сложных случаев). Стоимость доставки и монтажа рассчитывается индивидуально в зависимости от удаленности, сложности установки, необходимых работ по подготовке фундамента, гравитационных условий и наличия атмосферы."
        }
      },
      {
        "@type": "Question",
        "name": "Сколько человек вмещает космос-шатер 25х20?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "В космос-шатре 25х20 площадью 500 м² можно разместить: до 1200-1300 гостей с банкетными столами, до 1400-1500 человек на фуршете, до 800-850 посадочных мест в ресторане, полноценное футбольное поле для мини-футбола с трибунами на 1100-1200 зрителей, баскетбольную площадку международного класса с трибунами, выставочную экспозицию с 135-145 стендами, концертную площадку со сценой и зрительным залом на 1200-1300 мест, ледовую арену с трибунами, несколько спортивных площадок одновременно, многофункциональный комплекс с различными зонами, конференц-зал на 1400+ участников, полноценный легкоатлетический манеж с беговыми дорожками, площадку для межгалактических конференций, центр управления космическими полетами."
        }
      },
      {
        "@type": "Question",
        "name": "Можно использовать шатер 25х20 как ангар для космических кораблей?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, космос-шатер 25х20 идеально подходит как ангар для космических кораблей, включая шаттлы, ракеты, межпланетные станции, космические челноки, звездолеты. Ширина 25 метров и высота до 11.0 метров позволяют размещать крупные космические суда, а глубина 20 метров обеспечивает максимальное пространство для обслуживания, хранения и ремонта нескольких единиц техники одновременно, включая вертикальную сборку ракет. Космос-конструкция и возможность установки широких ангарных ворот с автоматикой, системы вакуумирования, шлюзовые камеры делают его идеальным решением для космических ангаров, технических баз, центров обслуживания космических судов, космодромов, орбитальных станций, межгалактических терминалов."
        }
      },
      {
        "@type": "Question",
        "name": "Какие максимальные нагрузки выдерживает космос-шатер 25х20?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Космос-шатер 25х20 выдерживает экстремальные нагрузки: ветровую нагрузку до 450 км/ч (ураган 5 категории++), снеговую нагрузку до 850 кг/м², сейсмическую нагрузку до 10 баллов с системой активного сейсмогашения, метеоритную нагрузку до 1500 кг/м², радиационную нагрузку до 2000 рад, гравитационные перегрузки до 5g, перепады давления до 3 атмосфер. Может использоваться в любых климатических зонах, включая Арктику, Антарктику, прибрежные зоны с ураганными ветрами, горную местность, сейсмоопасные районы, пустыни, тропики, экваториальные зоны, зоны вечной мерзлоты, зоны цунами, зоны торнадо, а также на других планетах с различными гравитационными условиями, атмосферными явлениями, в условиях вакуума, на астероидах, в открытом космосе. Конструкция проходит индивидуальный расчет с учетом всех межгалактических нормативов и требований."
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
        {pageData.seo?.h1 || "Арочный шатёр 25х20 — 500 м²"}
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