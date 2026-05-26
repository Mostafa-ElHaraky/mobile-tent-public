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
const PAGE_CODE = "mobilnye-shatry-transformery-prof-4h4";

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
    
    // Return enhanced default values for Мобильный шатер-трансформер Prof 4×4 м
    return {
      success: false,
      page: {
        id: 19,
        name: "Мобильный шатер-трансформер Prof 4×4 м (16 м²)",
        code: PAGE_CODE
      },
      seo: {
        title: "Мобильный шатер-трансформер Prof 4×4 м (16 м²) – купить в Москве с доставкой | MOBILE TENT",
        description: "Мобильный шатер-трансформер Prof 4×4 м (16 м²) от производителя MOBILE TENT. Быстроскладывающаяся конструкция с алюминиевым каркасом. Для выездной торговли, мероприятий, кемпинга. Цена от 185 000 ₽. Гарантия 5 лет. Доставка по Москве, МО и всей России.",
        keywords: "мобильный шатер трансформер 4х4, шатер трансформер 4x4, складной шатер 4x4, быстросборный шатер, шатер для выездной торговли, шатер для мероприятий, кемпинговый шатер, мобильный тент",
        h1: "Мобильный шатер-трансформер Prof 4×4 м – быстрая установка, компактное хранение",
        url: `/tent/${PAGE_CODE}`
      },
      content: {
        desktop: '',
        mobile: ''
      },
      priceConfigurations: [
        {
          name: "Базовая (трансформер)",
          isActive: true,
          currentPrice: 185000,
          originalPrice: 230000,
          discount: 20,
          description: "Алюминиевый складной каркас, ПВХ тент 650 г/м², съемные боковые стенки, входная дверь. Для выездной торговли, мероприятий, кемпинга."
        },
        {
          name: "Оптимальная (утепленная)",
          isActive: false,
          currentPrice: 245000,
          originalPrice: 310000,
          discount: 21,
          description: "Усиленный каркас, двойной тент 900 г/м² с утеплителем, окна ПВХ, система вентиляции. Для круглогодичного использования."
        },
        {
          name: "Максимальная (профи)",
          isActive: false,
          currentPrice: 320000,
          originalPrice: 400000,
          discount: 20,
          description: "Стальной каркас с антикоррозийным покрытием, сэндвич-панели, освещение, отопление, брендирование тента, колесная тележка для транспортировки."
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
  const seoTitle = data.seo?.title || "Мобильный шатер-трансформер Prof 4×4 м (16 м²) – купить в Москве с доставкой | MOBILE TENT";
  const seoDescription = data.seo?.description || "Мобильный шатер-трансформер Prof 4×4 м (16 м²) от производителя MOBILE TENT. Быстроскладывающаяся конструкция с алюминиевым каркасом. Для выездной торговли, мероприятий, кемпинга. Цена от 185 000 ₽. Гарантия 5 лет. Доставка по Москве, МО и всей России.";
  const seoKeywords = data.seo?.keywords || "мобильный шатер трансформер 4х4, шатер трансформер 4x4, складной шатер 4x4, быстросборный шатер";
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
          url: 'https://mobile-tent.ru/mobilny4x4,1.webp',
          width: 1200,
          height: 630,
          alt: 'Мобильный шатер-трансформер Prof 4×4 м от MOBILE TENT'
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
export default async function MobileTransformerPage() {
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
    "image": "https://mobile-tent.ru/mobilny4x4,1.webp",
    "url": "https://mobile-tent.ru",
    "telephone": pageData.contacts?.phone1 || "+7 (495) 760-42-20",
    "email": pageData.contacts?.email || "info@mobile-tent.ru",
    "priceRange": "₽₽₽ (180 000 - 350 000 ₽)",
    "description": "Производство и продажа мобильных шатров-трансформеров, тентовых конструкций и быстровозводимых сооружений в Москве, Московской области и всей России. Собственное производство, гарантия 5 лет.",
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

  // ----- ENHANCED PRODUCT SCHEMA for Transformer Tent 4x4 m (16 m²) -----
  const prices: number[] = pageData.priceConfigurations?.map((c: PriceConfiguration) => c.currentPrice) || [185000, 245000, 320000];
  const lowPrice = Math.min(...prices);
  const highPrice = Math.max(...prices);
  const offerCount = pageData.priceConfigurations?.length || 3;

  // Correct dimensions for 4x4 transformer tent
  const width = 4;
  const length = 4;
  const area = 16;
  const ridgeHeight = 3.2;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "image": [
      "https://mobile-tent.ru/mobilny4x4,1.webp",
    ],
    "name": pageData.page?.name || "Мобильный шатер-трансформер Prof 4×4 м (16 м²)",
    "description": pageData.seo?.description || "Мобильный шатер-трансформер Prof 4×4 м – быстросборная конструкция для выездной торговли, мероприятий, кемпинга. Складной алюминиевый каркас, ПВХ тент 650 г/м², трансформируемые стенки. Устойчив к ветру до 80 км/ч. Компактное хранение в чехле. Срок службы 10+ лет.",
    "sku": `MOB-${PAGE_CODE}`,
    "mpn": `MOB-TRANSFORMER-4x4`,
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
    "material": "Алюминиевый складной каркас (сплав 6063), ПВХ ткань 650-900 г/м² с УФ-защитой",
    "category": "Мобильные шатры-трансформеры / Быстросборные конструкции",
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Ширина в разложенном виде",
        "value": `${width} м`
      },
      {
        "@type": "PropertyValue",
        "name": "Длина в разложенном виде",
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
        "value": "Трансформер (складывается в компактный чехол)"
      },
      {
        "@type": "PropertyValue",
        "name": "Время сборки",
        "value": "10-15 минут"
      },
      {
        "@type": "PropertyValue",
        "name": "Размер в сложенном виде",
        "value": "120×40×40 см"
      },
      {
        "@type": "PropertyValue",
        "name": "Вес комплекта",
        "value": "~35 кг"
      },
      {
        "@type": "PropertyValue",
        "name": "Ветровая нагрузка",
        "value": "до 80 км/ч"
      },
      {
        "@type": "PropertyValue",
        "name": "Температурный режим",
        "value": "от -20 до +50°C (стандарт), с утеплителем до -30°C"
      },
      {
        "@type": "PropertyValue",
        "name": "Назначение",
        "value": "Выездная торговля, фестивали, свадьбы, кемпинг, рекламные акции, временные склады, пункты проката"
      },
      {
        "@type": "PropertyValue",
        "name": "Трансформация",
        "value": "Съемные/поднимаемые стенки, возможность открытых и закрытых конфигураций"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Комплектации мобильного шатра-трансформера 4×4 м",
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
      "ratingValue": "4.8",
      "reviewCount": "34",
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
    "legalName": "ООО 'МОБАЙЛ ТЕНТ'",
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
        "name": "Мобильные шатры-трансформеры",
        "item": "https://mobile-tent.ru/transformer"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": pageData.page?.name || "Мобильный шатер-трансформер Prof 4×4 м",
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

  // ----- ENHANCED FAQ SCHEMA for Transformer Tent 4x4 -----
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Что такое мобильный шатер-трансформер 4×4 Prof?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Мобильный шатер-трансформер 4×4 Prof – это складная быстросборная конструкция площадью 16 м². Особенность – возможность трансформации: можно открывать боковые стенки, регулировать высоту, полностью разбирать и укладывать в компактный чехол для транспортировки. Идеален для выездной торговли и мероприятий."
        }
      },
      {
        "@type": "Question",
        "name": "Сколько стоит мобильный шатер-трансформер 4×4?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Цена зависит от комплектации: базовая (трансформер) — от ${prices[0]?.toLocaleString() || '185 000'} ₽, утеплённая — от ${prices[1]?.toLocaleString() || '245 000'} ₽, максимальная (Prof) — от ${prices[2]?.toLocaleString() || '320 000'} ₽. В стоимость входит каркас, тент, чехол для хранения, стяжные ремни. Доставка рассчитывается отдельно.`
        }
      },
      {
        "@type": "Question",
        "name": "Сколько времени занимает сборка/разборка шатра?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Благодаря запатентованной конструкции трансформера, сборка занимает 10-15 минут, разборка – 5-10 минут. Не требуется специальных инструментов. Компактно складывается в чехол размером 120×40×40 см, помещающийся в багажник легкового автомобиля."
        }
      },
      {
        "@type": "Question",
        "name": "Нужен ли фундамент?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Нет, шатер устанавливается на любую ровную поверхность (грунт, асфальт, бетон, газон). В комплекте идут грунтовые анкеры и оттяжки для надежной фиксации при ветре."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли использовать шатер-трансформер зимой?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, при заказе утепленной комплектации (двойной тент с утеплителем) и установке обогревателя шатер можно эксплуатировать при температурах до -20°C. Максимальная комплектация позволяет использовать его как стационарный павильон."
        }
      },
      {
        "@type": "Question",
        "name": "В чем отличие модели Prof от стандартного трансформера?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Модель Prof имеет усиленный каркас, более плотный тент (900 г/м²), улучшенную ветрозащиту, возможность установки жестких стен (сэндвич-панелей) и систему быстрой трансформации с газовыми амортизаторами. Подходит для интенсивной ежедневной эксплуатации."
        }
      },
      {
        "@type": "Question",
        "name": "Доставляете ли шатры-трансформеры 4×4 в регионы РФ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, доставляем по всей России через транспортные компании (Деловые линии, ПЭК, КИТ, ЖелДорЭкспедиция). Компактность шатра в сложенном виде позволяет сэкономить на доставке."
        }
      },
      {
        "@type": "Question",
        "name": "Какой срок службы и гарантия?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Гарантия от производителя – 5 лет на каркас и тент. Срок службы при правильной эксплуатации – более 10 лет. Все узлы трансформации проходят ресурсные испытания (не менее 5000 циклов складывания/раскладывания)."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли брендировать шатер (нанести логотип)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, мы наносим полноцветную печать на тент по вашему макету. Это идеальное решение для рекламных акций, выездной торговли с корпоративной символикой."
        }
      },
      {
        "@type": "Question",
        "name": "Какие размеры шатра в сложенном и разложенном состоянии?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "В разложенном состоянии: 4×4 м, высота в коньке до 3,2 м. В сложенном виде (в транспортном чехле): 120×40×40 см. Объем – всего 0,19 м³, вес комплекта – около 35 кг."
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
        "ratingValue": "4.7",
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
      {reviewSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />}

      {/* Dynamic H1 - passed to Cardtent1 component */}
      <h1 className="sr-only">
        {pageData.seo?.h1 || "Мобильный шатер-трансформер Prof 4×4 м – быстрая установка, компактное хранение"}
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