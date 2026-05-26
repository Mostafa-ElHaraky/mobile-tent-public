import { Cardtent1 } from "./sections/Cardtent1/Cardtent1";
import { Cardtent2 } from "./sections/Cardtent2/Cardtent2";
import { Footer } from "../../../components/ui/Footer";
import type { Metadata } from "next";

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
const PAGE_CODE = "arochnyy-angar-15h40-m";

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
    
    // Return enhanced default values for 10x30 arched hangar
    return {
      success: false,
      page: {
        id: 254,
        name: "Арочный ангар 15х40 (600 м²) тип В",
        code: PAGE_CODE
      },
      seo: {
        title: "Арочный ангар 15х40 (600 м²) – купить в Москве с доставкой по России | MOBILE TENT",
        description: "Арочный ангар 15х40 (600 м²) от производителя MOBILE TENT. Алюминиевый каркас, ПВХ тент 900 г/м². Для складов, производственных цехов, спортивных залов. Цена от 1 150 000 ₽. Гарантия 5 лет. Доставка по Москве, МО и всей России.",
        keywords: "арочный ангар 15х40, ангар 15 на 40, купить ангар 15х40, тентовый ангар 15х40, быстровозводимый ангар, ангар для склада, ангар 600 кв м, цена ангара 15х40",
        h1: "Арочный ангар 15х40 (600 м²) – надежное решение для склада и производства",
        url: `/tent/arochnyy-angar-15h40-m`
      },
      content: {
        desktop: '',
        mobile: ''
      },
      priceConfigurations: [
        {
          name: "Базовая (склад)",
          isActive: true,
          currentPrice: 1150000,
          originalPrice: 1350000,
          discount: 15,
          description: "Каркас из анодированного алюминия, тент ПВХ 650 г/м², торцевые стены, стандартные двери. Подходит для складов и временных сооружений."
        },
        {
          name: "Оптимальная (утепленная)",
          isActive: false,
          currentPrice: 1490000,
          originalPrice: 1690000,
          discount: 12,
          description: "Усиленный каркас, тент 900 г/м² с утеплителем, система вентиляции, окна, усиленные двери. Для круглогодичного использования."
        },
        {
          name: "Максимальная (производство)",
          isActive: false,
          currentPrice: 1890000,
          originalPrice: 2190000,
          discount: 14,
          description: "Полная комплектация: стальной каркас с антикоррозийным покрытием, сэндвич-панели, освещение, отопление, раздевалки."
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

// Generate metadata dynamically with enhanced GEO and SEO tags
export async function generateMetadata(): Promise<Metadata> {
  const data = await getPageData();

  // Use data from API if successful, otherwise use enhanced defaults
  const seoTitle = data.seo?.title || "Арочный ангар 15х40 (600 м²) – купить в Москве с доставкой по России | MOBILE TENT";
  const seoDescription = data.seo?.description || "Арочный ангар 15х40 (600 м²) от производителя MOBILE TENT. Алюминиевый каркас, ПВХ тент 900 г/м². Для складов, производственных цехов, спортивных залов. Цена от 1 150 000 ₽. Гарантия 5 лет. Доставка по Москве, МО и всей России.";
  const seoKeywords = data.seo?.keywords || "арочный ангар 15х40, ангар 15 на 40, купить ангар 15х40, тентовый ангар 15х40, быстровозводимый ангар, ангар 600 кв м";
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
          url: 'https://mobile-tent.ru/B_15x40_1.webp',
          width: 1200,
          height: 630,
          alt: 'Арочный ангар 15х40 (600 м²) от MOBILE TENT'
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
      languages: {
        'ru-RU': `https://mobile-tent.ru${seoUrl}`,
      },
    },
    // GEO meta tags for Yandex and other search engines
    other: {
      'geo.region': 'RU-MOS',
      'geo.placename': 'Moscow, Krasnogorsk',
      'geo.position': '55.834305;37.269340',
      'ICBM': '55.834305, 37.269340',
      'yandex-verification': '4155dd43e89d7f12',
    },
    viewport: 'width=device-width, initial-scale=1.0',
    formatDetection: {
      telephone: true,
      email: true,
      address: true,
    },
  };
}

// Server Component - can be async
export default async function Arochny_Shatyor_Page() {
  const pageData = await getPageData();

  // Enhanced coordinates with precise GEO for office and production
  const officeLat = 55.834305;
  const officeLon = 37.269340;
  const productionLat = 54.556269;
  const productionLon = 36.261566;

  // ----- PLACE SCHEMAS for Office and Production with enhanced GEO -----
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
      "latitude": officeLat.toString(),
      "longitude": officeLon.toString()
    },
    "hasMap": pageData.contacts?.office?.map_url || "https://yandex.ru/maps/org/grand_tent/130300118530/",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "22:00",
        "timeZone": "Europe/Moscow"
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
      "latitude": productionLat.toString(),
      "longitude": productionLon.toString()
    },
    "hasMap": pageData.contacts?.production?.map_url || "https://yandex.ru/maps/org/grand_tent/32724517904/",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "20:00",
        "timeZone": "Europe/Moscow"
      }
    ]
  };

  // ----- ENHANCED LOCAL BUSINESS with extensive GEO targeting (60+ cities across Russia) -----
  const areaServedCities = [
    "Москва", "Санкт-Петербург", "Красногорск", "Химки", "Мытищи", "Люберцы", "Подольск", "Одинцово", "Балашиха",
    "Раменское", "Домодедово", "Королев", "Пушкино", "Сергиев Посад", "Коломна", "Электросталь", "Жуковский",
    "Дмитров", "Солнечногорск", "Истра", "Наро-Фоминск", "Чехов", "Ступино", "Серпухов", "Калуга", "Обнинск",
    "Тула", "Владимир", "Рязань", "Тверь", "Ярославль", "Кострома", "Иваново", "Смоленск", "Брянск", "Орел",
    "Липецк", "Тамбов", "Воронеж", "Нижний Новгород", "Казань", "Екатеринбург", "Новосибирск", "Красноярск",
    "Челябинск", "Самара", "Уфа", "Ростов-на-Дону", "Краснодар", "Сочи", "Волгоград", "Пермь", "Омск",
    "Саратов", "Белгород", "Курск", "Пенза", "Ульяновск", "Набережные Челны", "Владивосток", "Хабаровск"
  ];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "MOBILE TENT",
    "image": "https://mobile-tent.ru/B_15x40_1.webp",
    "url": "https://mobile-tent.ru",
    "telephone": pageData.contacts?.phone1 || "+7 (495) 760-42-20",
    "email": pageData.contacts?.email || "info@mobile-tent.ru",
    "priceRange": "₽₽₽ (1 000 000 - 2 500 000 ₽)",
    "description": "Производство и продажа арочных ангаров 15х40, тентовых конструкций и быстровозводимых сооружений в Москве, Московской области и всей России. Собственное производство, гарантия 5 лет.",
    "location": [ officePlace, productionPlace ],
    "address": [ officePlace.address, productionPlace.address ],
    "geo": officePlace.geo,
    "areaServed": areaServedCities.map(city => ({ "@type": "City", "name": city })),
    "hasMap": officePlace.hasMap,
    "openingHoursSpecification": officePlace.openingHoursSpecification,
    "paymentAccepted": "Наличные, Банковский перевод, Кредитные карты, Безналичный расчет",
    "currenciesAccepted": "RUB",
    "sameAs": [
      pageData.contacts?.telegram || "https://t.me/+79857604220",
      pageData.contacts?.whatsapp || "https://max.ru/u/f9LHodD0cOK_6DAtIeOn3T51Xpzrkg2i4RB2ZEjtVfXOwvURhiW6gtGMLrA"
    ],
    "award": "Лучший производитель быстровозводимых конструкций 2023",
    "foundingDate": "2010",
    "numberOfEmployees": "50-100"
  };

  // ----- ENHANCED PRODUCT SCHEMA for Arched Hangar 10x30 (300 m²) -----
  const prices: number[] = pageData.priceConfigurations?.map((c: PriceConfiguration) => c.currentPrice) || [1150000, 1490000, 1890000];
  const lowPrice = Math.min(...prices);
  const highPrice = Math.max(...prices);
  const offerCount = pageData.priceConfigurations?.length || 3;

  // Correct dimensions for 10x30 arched hangar
  const width = 15;
  const length = 40;
  const area = 600;
  const ridgeHeight = 6.2;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "image": [
      "https://mobile-tent.ru/B_15x40_1.webp",
    ],
    "name": pageData.page?.name || "Арочный ангар 15х40 (600 м²) тип В",
    "description": pageData.seo?.description || "Арочный ангар 15х40 (600 м²) от производителя MOBILE TENT. Идеален для складов, производственных цехов, спортивных залов, выставочных павильонов. Каркас из алюминия или стали, ПВХ тент 650-900 г/м². Устойчив к ветру до 120 км/ч, снеговым нагрузкам до 120 кг/м². Срок службы 15+ лет.",
    "sku": `MOB-${PAGE_CODE}`,
    "mpn": `MOB-ARCH-15x40-600`,
    "brand": {
      "@type": "Brand",
      "name": "MOBILE TENT",
      "logo": "https://mobile-tent.ru/favicon.ico"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "MOBILE TENT",
      "address": officePlace.address,
      "telephone": pageData.contacts?.phone1 || "+7 (495) 760-42-20"
    },
    "offers": {
      "@type": "AggregateOffer",
      "offerCount": offerCount,
      "lowPrice": lowPrice,
      "highPrice": highPrice,
      "priceCurrency": "RUB",
      "availability": "https://schema.org/InStock",
      "areaServed": areaServedCities,
      "url": `https://mobile-tent.ru${pageData.seo?.url || `/tent/${PAGE_CODE}`}`
    },
    "material": "Алюминиевый каркас (сплав 6063) или сталь с порошковым покрытием, ПВХ ткань 650-900 г/м² с УФ-защитой",
    "category": "Арочные ангары / Быстровозводимые сооружения",
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
        "value": `до ${ridgeHeight} м`
      },
      {
        "@type": "PropertyValue",
        "name": "Тип конструкции",
        "value": "Арочный ангар"
      },
      {
        "@type": "PropertyValue",
        "name": "Каркас",
        "value": "Алюминиевый профиль с антикоррозийным покрытием / Сталь горячеоцинкованная"
      },
      {
        "@type": "PropertyValue",
        "name": "Тент/покрытие",
        "value": "ПВХ ткань, плотность 650-900 г/м², с УФ-стабилизацией, класс пожарной безопасности М2, Г1"
      },
      {
        "@type": "PropertyValue",
        "name": "Ветровая нагрузка",
        "value": "до 120 км/ч (32 м/с)"
      },
      {
        "@type": "PropertyValue",
        "name": "Снеговая нагрузка",
        "value": "до 120 кг/м²"
      },
      {
        "@type": "PropertyValue",
        "name": "Температурный режим",
        "value": "от -40 до +70°C"
      },
      {
        "@type": "PropertyValue",
        "name": "Назначение",
        "value": "Склады, производственные цеха, спортивные залы, выставочные павильоны, сельское хозяйство"
      },
      {
        "@type": "PropertyValue",
        "name": "Фундамент",
        "value": "Не требуется капитальный фундамент (установка на грунт, бетонные блоки, якоря)"
      },
      {
        "@type": "PropertyValue",
        "name": "Срок изготовления",
        "value": "от 3 до 10 рабочих дней"
      },
      {
        "@type": "PropertyValue",
        "name": "Гарантия",
        "value": "5 лет на каркас и тент, 25 лет на антикоррозийную обработку стали"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Комплектации арочного ангара 15х40",
      "itemListElement": pageData.priceConfigurations?.map((c: PriceConfiguration, idx: number) => ({
        "@type": "Product",
        "name": c.name,
        "description": c.description,
        "offers": {
          "@type": "Offer",
          "price": c.currentPrice,
          "priceCurrency": "RUB",
          "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
          "availability": "https://schema.org/InStock",
          "eligibleRegion": {
            "@type": "Country",
            "name": "RU"
          }
        },
        "position": idx + 1
      })) || []
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "47",
      "bestRating": "5",
      "worstRating": "1"
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
        "availableLanguage": ["Russian", "English"]
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
    "email": pageData.contacts?.email || "info@mobile-tent.ru",
    "sameAs": [
      "https://t.me/+79857604220",
      "https://max.ru/u/f9LHodD0cOK_6DAtIeOn3T51Xpzrkg2i4RB2ZEjtVfXOwvURhiW6gtGMLrA",
    ],
    "foundingDate": "2010",
    "numberOfEmployees": "50-100",
    "legalName": "ООО 'ЗТК'",
    "taxID": "7728388234"
  };

  // ----- BREADCRUMB SCHEMA with correct hierarchy -----
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
        "name": "Ангары и тентовые конструкции",
        "item": "https://mobile-tent.ru/shatry-i-navesy/angary_karkasnye"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Арочные ангары",
        "item": "https://mobile-tent.ru/shatry-i-navesy/angary_arochnye"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": pageData.page?.name || "Арочный ангар 15х40 (600 м²)",
        "item": `https://mobile-tent.ru${pageData.seo?.url || `/tent/${PAGE_CODE}`}`
      }
    ]
  };

  // ----- WEBSITE SCHEMA with search action -----
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
    },
    "inLanguage": "ru-RU"
  };

  // ----- ENHANCED FAQ SCHEMA for Arched Hangar 10x30 -----
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Какие размеры у арочного ангара 15х40?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Арочный ангар 15х40 имеет ширину 15 метров, длину 40 метров, высоту в коньке до 6.6 метров. Полезная площадь — 600 м². Это оптимальный размер для складов, производственных цехов, спортивных залов и выставочных павильонов."
        }
      },
      {
        "@type": "Question",
        "name": "Сколько стоит арочный ангар 15х40 под ключ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Цена зависит от комплектации: базовая (склад) — от ${prices[0]?.toLocaleString() || '1 150 000'} ₽, оптимальная с утеплением — от ${prices[1]?.toLocaleString() || '1 490 000'} ₽, максимальная (производство) — от ${prices[2]?.toLocaleString() || '1 890 000'} ₽. В стоимость входит каркас, тент/стены, двери, окна. Доставка по Москве и области рассчитывается отдельно, по России — от 15 000 ₽.`
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли использовать ангар 15х40 как производственный цех круглый год?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, при выборе утепленной комплектации (сэндвич-панели или утепленный тент) и установке системы отопления, ангар 15х40 можно использовать круглогодично при температурах до -40°C. Мы предлагаем опции: газовые/электрические тепловые пушки, инфракрасные обогреватели, системы вентиляции."
        }
      },
      {
        "@type": "Question",
        "name": "Нужно ли разрешение на установку ангара 15х40 в Москве или области?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Для некапитальных сооружений площадью до 1500 м² разрешение на строительство не требуется. Наш ангар 600 м² попадает в эту категорию. Наши юристы помогают с оформлением всех необходимых документов."
        }
      },
      {
        "@type": "Question",
        "name": "Какой срок службы и гарантия на арочный ангар 15х40?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Гарантия от производителя — 5 лет на каркас и тент. Срок службы при правильной эксплуатации — более 15 лет. Алюминиевый каркас устойчив к коррозии, ПВХ ткань защищена от УФ-излучения и гниения. Для стального каркаса гарантия на антикоррозийное покрытие — 25 лет."
        }
      },
      {
        "@type": "Question",
        "name": "Требуется ли фундамент для ангара 15х40?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Капитальный фундамент не требуется. Ангар устанавливается на подготовленную ровную площадку (асфальт, бетон, грунт) и фиксируется грунтовыми анкерами, бетонными блоками или винтовыми сваями. Это снижает затраты и ускоряет монтаж (3-5 дней)."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли установить в ангаре 15х40 стены, двери, ворота, окна?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, возможна полная кастомизация: торцевые стены с распашными или раздвижными дверями, рольставни, секционные ворота, окна, системы вентиляции, освещения, отопления. Также доступно брендирование тента (печать логотипов, баннеров)."
        }
      },
      {
        "@type": "Question",
        "name": "Какой срок изготовления и доставки ангара 15х40?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Стандартный срок изготовления — от 3 до 7 рабочих дней. Доставка по Москве — 1-2 дня, по Московской области — 1-3 дня, в регионы России — от 5 до 14 дней (в зависимости от удаленности)."
        }
      },
      {
        "@type": "Question",
        "name": "Доставляете ли ангары 15х40 в регионы России?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, мы доставляем по всей России: от Калининграда до Владивостока. Отправка транспортными компаниями (Деловые Линии, ПЭК, КИТ, ЖелДорЭкспедиция). Стоимость доставки рассчитывается индивидуально. В крупные города (СПб, Екатеринбург, Новосибирск, Казань) возможна скидка на логистику."
        }
      },
      {
        "@type": "Question",
        "name": "В чем отличие арочного ангара 15х40 от каркасного?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Арочный ангар имеет обтекаемую форму, снег не задерживается на крыше, конструкция легче и быстрее монтируется. Каркасный (прямостенный) ангар даёт максимум полезной площади, удобен для стеллажей и оборудования. Мы предлагаем оба типа под любые задачи."
        }
      }
    ]
  };

  // ----- VIDEO SCHEMA -----
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Как устанавливается арочный ангар 15х40 | MOBILE TENT",
    "description": "Видео-инструкция по монтажу арочного ангара 15х40 (600 м²). Быстровозводимая конструкция для складов и производства.",
    "thumbnailUrl": "https://mobile-tent.ru/video-thumb.jpg",
    "uploadDate": "2023-01-15",
    "duration": "PT5M30S",
    "contentUrl": "https://rutube.ru/video/51679662e77a22b3b4df5ba3e06d0bc0/",
    "embedUrl": "https://rutube.ru/embed/51679662e77a22b3b4df5ba3e06d0bc0/",
    "interactionCount": "12456"
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
        "ratingValue": "4.8",
        "reviewCount": (pageData.reviews?.text?.length || 0) + (pageData.reviews?.letters?.length || 0) + (pageData.reviews?.otzoviki?.length || 0),
        "bestRating": "5",
        "worstRating": "1"
      }
    };
  }

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* JSON-LD schemas - comprehensive SEO & GEO markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />
      {reviewSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />}

      {/* Dynamic H1 - passed to Cardtent1 component */}
      <h1 className="sr-only">
        {pageData.seo?.h1 || "Арочный ангар 15х40 (600 м²) – купить по цене от 1 150 000 ₽ с доставкой по России"}
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