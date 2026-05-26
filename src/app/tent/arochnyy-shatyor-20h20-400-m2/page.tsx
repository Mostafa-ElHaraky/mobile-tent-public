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
const PAGE_CODE = "arochnyy-shatyor-20h20-400-m2";

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
        id: 190,
        name: "Арочный шатёр 20х20 — 400 м²",
        code: PAGE_CODE
      },
      seo: {
        title: "Арочный шатёр 20х20 — 400 м² – купить мега-ангар премиум-класса в Москве с доставкой: цена в интернет-магазине Mobile Tent",
        description: "Арочный шатёр 20х20 — 400 м² – купить мега-ангар премиум-класса в Москве под заказ в компании Mobile Tent. Флагманская конструкция с уникальным квадратным пролетом 20х20 метров, представляющая собой полноценное тентовое здание для реализации проектов любого масштаба. Идеально подходит для строительства международных выставочных центров, крытых стадионов, концертных залов, торговых комплексов, логистических терминалов, производственных цехов, ангаров для авиации и складских комплексов. Инженерная конструкция максимальной прочности с пролетом 20 метров в квадрате позволяет создавать колоссальное колоннадосвободное пространство для самых амбициозных задач. Вы можете выбрать любую комплектацию, размер и цвет изделия, а также заказать его брендирование. Мы используем только качественные и долговечные материалы, а также предлагаем адекватные цены, которые будут дешевле долгосрочный аренды! Гарантия от производителя — 5 лет.",
        keywords: "арочный шатёр 20х20, купить мега-ангар 20х20, шатер 20 на 20, арочный шатер 400м2, мега-ангар премиум-класса, тентовое здание, шатер для международной выставки, шатер для крытого стадиона, шатер для концертного зала, тентовый шатер, быстровозводимый шатер, шатер для торгового комплекса, шатер для логистического терминала, ангар для авиации, шатер с пролетом 20 метров квадрат",
        h1: "Арочный шатёр 20х20 — 400 м²",
        url: `/tent/arochnyy-shatyor-20h20-400-m2`
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
  const seoTitle = data.seo?.title || "Арочный шатёр 20х20 — 400 м² – купить мега-ангар премиум-класса в Москве с доставкой: цена в интернет-магазине Mobile Tent";
  const seoDescription = data.seo?.description || "Арочный шатёр 20х20 — 400 м² – купить мега-ангар премиум-класса в Москве под заказ в компании Mobile Tent. Флагманская конструкция с уникальным квадратным пролетом 20х20 метров, представляющая собой полноценное тентовое здание для реализации проектов любого масштаба. Идеально подходит для строительства международных выставочных центров, крытых стадионов, концертных залов, торговых комплексов, логистических терминалов, производственных цехов, ангаров для авиации и складских комплексов. Инженерная конструкция максимальной прочности с пролетом 20 метров в квадрате позволяет создавать колоссальное колоннадосвободное пространство для самых амбициозных задач. Вы можете выбрать любую комплектацию, размер и цвет изделия, а также заказать его брендирование. Мы используем только качественные и долговечные материалы, а также предлагаем адекватные цены, которые будут дешевле долгосрочный аренды! Гарантия от производителя — 5 лет.";
  const seoKeywords = data.seo?.keywords || "арочный шатёр 20х20, купить мега-ангар 20х20, шатер 20 на 20, арочный шатер 400м2, мега-ангар премиум-класса, тентовое здание, шатер для международной выставки, шатер для крытого стадиона, шатер для концертного зала, тентовый шатер, быстровозводимый шатер, шатер для торгового комплекса, шатер для логистического терминала, ангар для авиации, шатер с пролетом 20 метров квадрат";
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
          alt: 'Арочный шатёр 20х20 - 400 м² мега-ангар премиум-класса от производителя MOBILE TENT'
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
  const width = 20;
  const length = 20;
  const area = 400; // 400 m²

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "image": "https://mobile-tent.ru/20x20,1.webp",
    "name": pageData.page?.name || "Арочный шатёр 20х20 — 400 м²",
    "description": pageData.seo?.description || "Арочный шатёр 20х20 — 400 м² – купить мега-ангар премиум-класса в Москве под заказ в компании Mobile Tent. Флагманская конструкция с уникальным квадратным пролетом 20х20 метров, представляющая собой полноценное тентовое здание для реализации проектов любого масштаба. Идеально подходит для строительства международных выставочных центров, крытых стадионов, концертных залов, торговых комплексов, логистических терминалов, производственных цехов, ангаров для авиации и складских комплексов. Инженерная конструкция максимальной прочности с пролетом 20 метров в квадрате позволяет создавать колоссальное колоннадосвободное пространство для самых амбициозных задач. Вы можете выбрать любую комплектацию, размер и цвет изделия.",
    "sku": `MOB-${PAGE_CODE}`,
    "mpn": `MOB-ARCH-20x20-400-MEGA`,
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
      "areaServed": ["Москва", "Московская область", "Россия", "СНГ", "Европа", "Азия", "Ближний Восток", "Северная Америка"],
      "url": `https://mobile-tent.ru${pageData.seo?.url || `/tent/${PAGE_CODE}`}`
    },
    "material": "Инженерная конструкция максимальной прочности, усиленный алюминиевый сплав, ПВХ ткань 1200-1300 г/м²",
    "category": "Арочные шатры флагман-класса",
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
        "value": "до 8.0 м"
      },
      {
        "@type": "PropertyValue",
        "name": "Тип конструкции",
        "value": "Арочный шатер флагман-класса"
      },
      {
        "@type": "PropertyValue",
        "name": "Каркас",
        "value": "Инженерная конструкция максимальной прочности из усиленного алюминиевого сплава с антикоррозийным покрытием, система мощных ферм, восьмерные элементы жесткости, промышленные узлы соединений, усиленные опорные колонны с максимальным сечением, дополнительные диагональные связи"
      },
      {
        "@type": "PropertyValue",
        "name": "Тент",
        "value": "ПВХ ткань флагман-класса, плотность 1200-1300 г/м², с максимальной УФ-защитой, огнеупорными свойствами, морозостойкостью, улучшенной светопропускаемостью, цветостойкостью, повышенной износостойкостью"
      },
      {
        "@type": "PropertyValue",
        "name": "Ветровая нагрузка",
        "value": "до 300 км/ч"
      },
      {
        "@type": "PropertyValue",
        "name": "Снеговая нагрузка",
        "value": "до 550 кг/м²"
      },
      {
        "@type": "PropertyValue",
        "name": "Температурный режим",
        "value": "от -70 до +80°C"
      },
      {
        "@type": "PropertyValue",
        "name": "Флагманский пролет",
        "value": "20х20 метров - максимальный квадратный пролет без внутренних опор для создания колоссального колоннадосвободного пространства"
      },
      {
        "@type": "PropertyValue",
        "name": "Назначение",
        "value": "Международные выставочные центры, крытые стадионы, концертные залы, торговые комплексы, логистические терминалы, производственные цеха, ангары для авиации, складские комплексы, ледовые дворцы, спортивные арены, фестивальные площадки, крытые рынки, автомобильные салоны, демонстрационные центры, ангары для бизнес-авиации"
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
        "name": pageData.page?.name || "Арочный шатёр 20х20 — 400 м²",
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

  // ----- FAQ SCHEMA (customized for арочный шатер 20х20 флагман-класса) -----
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Какие размеры у флагман-шатра 20х20?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Флагман-шатер имеет ширину 20 метров, длину 20 метров, высоту в коньке до 8.0 метров. Полезная площадь — ${area} м². Это флагманская конструкция с уникальным квадратным пролетом, представляющая собой полноценное тентовое здание для реализации проектов любого масштаба.`
        }
      },
      {
        "@type": "Question",
        "name": `В чем уникальность квадратного пролета 20х20 метров?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Квадратный пролет 20х20 метров является максимальным для создания колоннадосвободного пространства в тентовых конструкциях. Это позволяет: размещать полноценные спортивные площадки международного класса (мини-футбол, гандбол, волейбол, баскетбол, теннис), создавать выставочные залы с любой конфигурацией стендов, организовывать концертные площадки с отличной акустикой и обзором, размещать крупногабаритную технику и авиацию, создавать торговые залы без мешающих колонн, проводить международные форумы и конференции.`
        }
      },
      {
        "@type": "Question",
        "name": `Сколько стоит флагман-шатер 20х20?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Цена зависит от комплектации и требований к конструкции: базовая — от ${prices[0]?.toLocaleString() || '372 000'} ₽, средняя — от ${prices[1]?.toLocaleString() || '472 000'} ₽, максимальная — от ${prices[2]?.toLocaleString() || '572 000'} ₽. Для флагманской конструкции с уникальным пролетом 20х20 метров требуется индивидуальное проектирование, конструкция максимальной прочности и тент флагман-класса плотностью 1200-1300 г/м². Стоимость доставки, фундамента и монтажа рассчитывается индивидуально по проекту.`
        }
      },
      {
        "@type": "Question",
        "name": "Для каких целей подходит флагман-шатер 20х20?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Флагман-шатер 20х20 идеально подходит для: международных выставочных центров, крытых стадионов, концертных залов, торговых комплексов, логистических терминалов, производственных цехов, ангаров для авиации, складских комплексов, ледовых дворцов, спортивных арен, фестивальных площадок, крытых рынков, автомобильных салонов, демонстрационных центров, ангаров для бизнес-авиации, центров обработки данных, логистических хабов."
        }
      },
      {
        "@type": "Question",
        "name": "Какая конструкция у флагман-шатра 20х20?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Флагман-шатер 20х20 имеет инженерную конструкцию максимальной прочности из усиленного алюминиевого сплава с системой мощных ферм, восьмерными элементами жесткости, промышленными узлами соединений, усиленными опорными колоннами с максимальным сечением, дополнительными диагональными связями. Проводится индивидуальное проектирование с учетом всех требований, климатических условий, ветровых и снеговых нагрузок. Конструкция рассчитана на уникальный квадратный пролет 20х20 метров без внутренних опор."
        }
      },
      {
        "@type": "Question",
        "name": "Нужно ли разрешение на строительство шатра 20х20?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Для капитального сооружения площадью 400 м² с уникальным пролетом 20х20 метров требуется полное оформление разрешительной документации, включая получение разрешения на строительство, прохождение государственной экспертизы, оформление прав на земельный участок. Мы предоставляем полное сопровождение: помощь в проектировании, подготовке проектной документации, согласовании с соответствующими органами, получении разрешений на международном уровне."
        }
      },
      {
        "@type": "Question",
        "name": "Какой срок службы и гарантия на флагман-шатер 20х20?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Гарантия от производителя — 25 лет на каркас и 12 лет на тент. Срок службы при правильной эксплуатации — более 70 лет благодаря флагманской конструкции. Алюминиевый каркас из усиленного сплава с максимальным антикоррозийным покрытием, ПВХ ткань флагман-класса плотностью 1200-1300 г/м² с максимальной УФ-защитой, огнеупорными свойствами, морозостойкостью до -70°C. Конструкция рассчитана на постоянную круглогодичную эксплуатацию в любых климатических условиях."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли утеплить флагман-шатер 20х20?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, возможна полная термоизоляция шатра для круглогодичного использования: установка утепленных сэндвич-панелей, монтаж системы отопления, вентиляции и кондиционирования промышленного уровня, установка тепловых завес, утепленных ворот и дверей, двойных тентовых систем с воздушной прослойкой. Флагманская конструкция позволяет создавать полноценное отапливаемое здание с поддержанием комфортной температуры в любое время года, включая экстремальные климатические условия."
        }
      },
      {
        "@type": "Question",
        "name": "Какой срок изготовления флагман-шатра 20х20?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Стандартный срок изготовления флагман-шатра 20х20 — от 60 до 80 рабочих дней, включая индивидуальное проектирование, изготовление конструкции максимальной прочности с пролетом 20х20 метров, подготовку фундамента. Возможно ускоренное производство для срочных международных проектов с дополнительной комплектацией и увеличенной стоимостью."
        }
      },
      {
        "@type": "Question",
        "name": "Доставляете ли флагман-шатры 20х20 по всему миру?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, доставляем по всей России, странам СНГ, Европы, Азии, Ближнего Востока и Северной Америки. Для флагманских конструкций организуется специальная международная логистика, доставка специализированным транспортом, профессиональный монтаж с использованием тяжелой спецтехники (автокраны грузоподъемностью до 300 тонн, манипуляторы, подъемники). Стоимость доставки и монтажа рассчитывается индивидуально в зависимости от удаленности, сложности установки, необходимых работ по подготовке фундамента."
        }
      },
      {
        "@type": "Question",
        "name": "Сколько человек вмещает флагман-шатер 20х20?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "В флагман-шатре 20х20 площадью 400 м² можно разместить: до 700-750 гостей с банкетными столами, до 850-900 человек на фуршете, до 500-550 посадочных мест в ресторане, полноценное футбольное поле для мини-футбола с трибунами на 500-600 зрителей, баскетбольную площадку международного класса с трибунами, выставочную экспозицию с 80-90 стендами, концертную площадку со сценой и зрительным залом на 700-750 мест, ледовую арену с трибунами, несколько спортивных площадок одновременно."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли использовать шатер 20х20 как ангар для авиации?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, флагман-шатер 20х20 идеально подходит как ангар для авиации, включая бизнес-джеты, легкие самолеты, вертолеты, беспилотники. Ширина 20 метров и высота до 8 метров позволяют размещать даже крупные воздушные суда. Флагманская конструкция и возможность установки широких ангарных ворот с автоматикой делают его идеальным решением для авиационных ангаров, технических баз, центров обслуживания воздушных судов."
        }
      },
      {
        "@type": "Question",
        "name": "Какие максимальные нагрузки выдерживает флагман-шатер 20х20?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Флагман-шатер 20х20 выдерживает экстремальные нагрузки: ветровую нагрузку до 300 км/ч (ураган 5 категории), снеговую нагрузку до 550 кг/м², сейсмическую нагрузку до 9 баллов. Может использоваться в любых климатических зонах, включая Арктику, прибрежные зоны с ураганными ветрами, горную местность, сейсмоопасные районы и пустыни. Конструкция проходит индивидуальный расчет с учетом всех международных нормативов и требований."
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
        {pageData.seo?.h1 || "Арочный шатёр 20х20 — 400 м²"}
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