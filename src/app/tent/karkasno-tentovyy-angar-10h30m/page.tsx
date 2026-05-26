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
const PAGE_CODE = "karkasno-tentovyy-angar-10h30m";

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
    
    // Return enhanced default values for Каркасный ангар 15×20м Тип Д (300 м²)
    return {
      success: false,
      page: {
        id: 211,
        name: "Каркасный ангар 10×30м Тип Д (300 м²)",
        code: PAGE_CODE
      },
      seo: {
        title: "Каркасный ангар 10×30м (300 м²) Тип Д – купить в Москве с доставкой по России | MOBILE TENT",
        description: "Каркасный ангар 10×30м (300 м²) Тип Д от производителя MOBILE TENT. Усиленный металлокаркас, сэндвич-панели или ПВХ тент. Для складов, производств, спорта. Цена от 1 250 000 ₽. Гарантия 5 лет. Доставка по Москве, МО и всей России.",
        keywords: "каркасный ангар 10х30, ангар 10 на 30, купить каркасный ангар 10х30, быстровозводимый ангар, ангар тип Д, ангар 300 кв м, цена ангара 10х30",
        h1: "Каркасный ангар 10×30м Тип Д (300 м²)",
        url: `/tent/karkasno-tentovyy-angar-10h30m`
      },
      content: {
        desktop: '',
        mobile: ''
      },
      priceConfigurations: [
        {
          name: "Базовая (холодный склад)",
          isActive: true,
          currentPrice: 1250000,
          originalPrice: 1450000,
          discount: 14,
          description: "Металлокаркас из профильной трубы, ПВХ тент 650 г/м², торцевые стены, стандартные ворота. Для сезонного хранения и временных сооружений."
        },
        {
          name: "Оптимальная (утепленная)",
          isActive: false,
          currentPrice: 1650000,
          originalPrice: 1950000,
          discount: 15,
          description: "Усиленный каркас, сэндвич-панели 100 мм, система вентиляции, окна, утепленные ворота. Для круглогодичного использования."
        },
        {
          name: "Максимальная (производство)",
          isActive: false,
          currentPrice: 2150000,
          originalPrice: 2550000,
          discount: 16,
          description: "Полная комплектация: стальной каркас с антикоррозийным покрытием, сэндвич-панели 150 мм, освещение, отопление, раздевалки, санузлы."
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

  // Use data from API if successful, otherwise use enhanced defaults for 15×20 frame hangar
  const seoTitle = data.seo?.title || "Каркасный ангар 10×30м (300 м²) Тип Д – купить в Москве с доставкой по России | MOBILE TENT";
  const seoDescription = data.seo?.description || "Каркасный ангар 10×30м (300 м²) Тип Д от производителя MOBILE TENT. Усиленный металлокаркас, сэндвич-панели или ПВХ тент. Для складов, производств, спорта. Цена от 1 250 000 ₽. Гарантия 5 лет. Доставка по Москве, МО и всей России.";
  const seoKeywords = data.seo?.keywords || "каркасный ангар 10х30, ангар 10 на 30, купить каркасный ангар 10х30, быстровозводимый ангар, ангар тип Д, ангар 300 кв м";
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
          url: 'https://mobile-tent.ru/D_10x30_1.webp',
          width: 1200,
          height: 630,
          alt: 'Каркасный ангар 10×30м Тип Д (300 м²) от MOBILE TENT'
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
    "image": "https://mobile-tent.ru/D_10x30_1.webp",
    "url": "https://mobile-tent.ru",
    "telephone": pageData.contacts?.phone1 || "+7 (495) 760-42-20",
    "email": pageData.contacts?.email || "info@mobile-tent.ru",
    "priceRange": "₽₽₽ (1 200 000 - 2 500 000 ₽)",
    "description": "Производство и продажа каркасных ангаров 10×30м, тентовых конструкций и быстровозводимых сооружений в Москве, Московской области и всей России. Собственное производство, гарантия 5 лет.",
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

  // ----- ENHANCED PRODUCT SCHEMA for Frame Hangar 15×20 (300 m²) Type D -----
  const prices: number[] = pageData.priceConfigurations?.map((c: PriceConfiguration) => c.currentPrice) || [1250000, 1650000, 2150000];
  const lowPrice = Math.min(...prices);
  const highPrice = Math.max(...prices);
  const offerCount = pageData.priceConfigurations?.length || 3;

  // Correct dimensions for 15×20 frame hangar
  const width = 10;
  const length = 30;
  const area = 300; // 4000 m²
  const wallHeight = 7; // meters (typical for frame hangars)
  const ridgeHeight = 9; // meters

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "image": [
      "https://mobile-tent.ru/D_10x30_1.webp",
    ],
    "name": pageData.page?.name || "Каркасный ангар 10×30м (300 м²) Тип Д",
    "description": pageData.seo?.description || "Каркасный ангар 10×30м (300 м²) Тип Д от производителя MOBILE TENT. Идеален для складов, производственных цехов, спортивных залов, выставочных павильонов. Усиленный металлокаркас, сэндвич-панели или ПВХ тент. Устойчив к ветру до 120 км/ч, снеговым нагрузкам до 120 кг/м². Срок службы 30+ лет.",
    "sku": `MOB-${PAGE_CODE}`,
    "mpn": `MOB-FRAME-10x30-300`,
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
    "material": "Стальной каркас (профильная труба, двутавр) с антикоррозийным покрытием, сэндвич-панели 50-150 мм / ПВХ ткань 900 г/м²",
    "category": "Каркасные ангары / Быстровозводимые сооружения",
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
        "name": "Высота стенки",
        "value": `до ${wallHeight} м`
      },
      {
        "@type": "PropertyValue",
        "name": "Высота в коньке",
        "value": `до ${ridgeHeight} м`
      },
      {
        "@type": "PropertyValue",
        "name": "Тип конструкции",
        "value": "Каркасный (прямостенный) ангар"
      },
      {
        "@type": "PropertyValue",
        "name": "Каркас",
        "value": "Сталь с порошковым покрытием / горячеоцинкованная"
      },
      {
        "@type": "PropertyValue",
        "name": "Покрытие",
        "value": "Сэндвич-панели 50-150 мм / ПВХ тент 900 г/м², класс пожарной безопасности М2, Г1"
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
        "value": "Требуется ленточный или свайный фундамент (входит в проект)"
      },
      {
        "@type": "PropertyValue",
        "name": "Срок изготовления",
        "value": "от 7 до 14 рабочих дней"
      },
      {
        "@type": "PropertyValue",
        "name": "Гарантия",
        "value": "5 лет на каркас, 25 лет на антикоррозийное покрытие"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Комплектации каркасного ангара 10×30м Тип Д",
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
      "reviewCount": "52",
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
        "name": "Каркасные ангары",
        "item": "https://mobile-tent.ru/shatry-i-navesy/karkasno-tentovye-angary-tip-d"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": pageData.page?.name || "Каркасный ангар 10×30м Тип Д",
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

  // ----- ENHANCED FAQ SCHEMA for Frame Hangar 15×20 Type D -----
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Какие размеры у каркасного ангара 10×30м Тип Д?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Каркасный ангар 10×30м Тип Д имеет ширину 10 метров, длину 30 метров, высоту стенки до 7 метров, высоту в коньке до 9 метров. Полезная площадь — 300 м². Это оптимальный размер для складов, производственных цехов и спортивных залов."
        }
      },
      {
        "@type": "Question",
        "name": "Сколько стоит каркасный ангар 10×30м под ключ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Цена зависит от комплектации: базовая (холодный склад) — от ${prices[0]?.toLocaleString() || '1 250 000'} ₽, оптимальная с утеплением — от ${prices[1]?.toLocaleString() || '1 650 000'} ₽, максимальная (производство) — от ${prices[2]?.toLocaleString() || '2 150 000'} ₽. В стоимость входит каркас, покрытие, ворота. Доставка по Москве и области рассчитывается отдельно, по России — от 15 000 ₽.`
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли использовать ангар 10×30м как производственный цех круглый год?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, при выборе утепленной комплектации (сэндвич-панели 100-150 мм) и установке системы отопления, ангар 10×30м можно использовать круглогодично при температурах до -40°C. Мы предлагаем опции: газовые/электрические тепловые пушки, инфракрасные обогреватели, системы вентиляции."
        }
      },
      {
        "@type": "Question",
        "name": "Нужно ли разрешение на строительство каркасного ангара 10×30м?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Для некапитальных сооружений площадью до 1500 м² разрешение не требуется. Наш ангар 300 м² попадает в эту категорию. Для капитального строительства (с фундаментом) может потребоваться уведомление. Наши юристы помогают с оформлением всех необходимых документов."
        }
      },
      {
        "@type": "Question",
        "name": "Какой срок службы и гарантия на каркасный ангар 10×30м?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Гарантия от производителя — 5 лет на каркас, 25 лет на антикоррозийное покрытие. Срок службы при правильной эксплуатации — более 30 лет. Стальной каркас устойчив к коррозии, сэндвич-панели сохраняют тепло."
        }
      },
      {
        "@type": "Question",
        "name": "Требуется ли фундамент для ангара 10×30м?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Для стационарного каркасного ангара требуется ленточный или свайный фундамент. Мы предлагаем проектирование и устройство фундамента под ключ. Для временных сооружений возможна установка на бетонные блоки."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли установить в ангаре 10×30м ворота, двери, окна?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, возможна полная кастомизация: распашные, откатные, секционные ворота, калитки, окна ПВХ, системы вентиляции, освещения, отопления. Также доступно брендирование фасада."
        }
      },
      {
        "@type": "Question",
        "name": "Какой срок изготовления и доставки ангара 10×30м?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Стандартный срок изготовления — от 7 до 14 рабочих дней. Доставка по Москве — 1-2 дня, по Московской области — 1-3 дня, в регионы России — от 5 до 14 дней (в зависимости от удаленности)."
        }
      },
      {
        "@type": "Question",
          "name": "Доставляете ли ангары 10×30м в регионы России?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, мы доставляем по всей России: от Калининграда до Владивостока. Отправка транспортными компаниями (Деловые Линии, ПЭК, КИТ, ЖелДорЭкспедиция). Стоимость доставки рассчитывается индивидуально."
        }
      },
      {
        "@type": "Question",
        "name": "Чем отличается каркасный ангар Тип Д от других типов?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Тип Д — это усиленная конструкция с увеличенным сечением профиля, предназначенная для повышенных снеговых и ветровых нагрузок. Рекомендуется для регионов с суровым климатом и для стационарного использования."
        }
      }
    ]
  };

  // ----- VIDEO SCHEMA -----
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Как устанавливается каркасный ангар 10×30м Тип Д | MOBILE TENT",
    "description": "Видео-инструкция по монтажу каркасного ангара 10×30м (300 м²). Быстровозводимая конструкция для складов и производства.",
    "thumbnailUrl": "https://mobile-tent.ru/video-thumb-karkas.jpg",
    "uploadDate": "2023-01-15",
    "duration": "PT6M",
    "interactionCount": "18700"
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
        {pageData.seo?.h1 || "Каркасный ангар 10×30м Тип Д (300 м²)"}
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