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
const PAGE_CODE = "arochnyy-shatyor-18h15-241-m2";

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
        id: 188,
        name: "Арочный шатёр 18х15 — 241 м²",
        code: PAGE_CODE
      },
      seo: {
        title: "Арочный шатёр 18х15 — 241 м² – купить мега-шатер премиум-класса в Москве с доставкой: цена в интернет-магазине Mobile Tent",
        description: "Арочный шатёр 18х15 — 241 м² – купить мега-шатер премиум-класса в Москве под заказ в компании Mobile Tent. Грандиозная прямоугольная конструкция с уникальными пропорциями, представляющая собой полноценное тентовое здание для самых масштабных задач. Идеально подходит для строительства международных выставочных центров, крытых спортивных арен, концертных залов, торговых комплексов, логистических терминалов, производственных цехов и ангаров для крупногабаритной техники. Инженерная конструкция повышенной прочности с пролетом 18 метров позволяет создавать колоннадосвободное пространство для реализации любых проектов. Вы можете выбрать любую комплектацию, размер и цвет изделия, а также заказать его брендирование. Мы используем только качественные и долговечные материалы, а также предлагаем адекватные цены, которые будут дешевле долгосрочный аренды! Гарантия от производителя — 5 лет.",
        keywords: "арочный шатёр 18х15, купить мега-шатер 18х15, шатер 18 на 15, арочный шатер 241м2, мега-шатер премиум-класса, тентовое здание, шатер для международной выставки, шатер для спортивной арены, шатер для концертного зала, тентовый шатер, быстровозводимый шатер, шатер для торгового комплекса, шатер для логистического терминала, ангар для крупногабаритной техники",
        h1: "Арочный шатёр 18х15 — 241 м²",
        url: `/tent/arochnyy-shatyor-18h15-241-m2`
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
  const seoTitle = data.seo?.title || "Арочный шатёр 18х15 — 241 м² – купить мега-шатер премиум-класса в Москве с доставкой: цена в интернет-магазине Mobile Tent";
  const seoDescription = data.seo?.description || "Арочный шатёр 18х15 — 241 м² – купить мега-шатер премиум-класса в Москве под заказ в компании Mobile Tent. Грандиозная прямоугольная конструкция с уникальными пропорциями, представляющая собой полноценное тентовое здание для самых масштабных задач. Идеально подходит для строительства международных выставочных центров, крытых спортивных арен, концертных залов, торговых комплексов, логистических терминалов, производственных цехов и ангаров для крупногабаритной техники. Инженерная конструкция повышенной прочности с пролетом 18 метров позволяет создавать колоннадосвободное пространство для реализации любых проектов. Вы можете выбрать любую комплектацию, размер и цвет изделия, а также заказать его брендирование. Мы используем только качественные и долговечные материалы, а также предлагаем адекватные цены, которые будут дешевле долгосрочный аренды! Гарантия от производителя — 5 лет.";
  const seoKeywords = data.seo?.keywords || "арочный шатёр 18х15, купить мега-шатер 18х15, шатер 18 на 15, арочный шатер 241м2, мега-шатер премиум-класса, тентовое здание, шатер для международной выставки, шатер для спортивной арены, шатер для концертного зала, тентовый шатер, быстровозводимый шатер, шатер для торгового комплекса, шатер для логистического терминала, ангар для крупногабаритной техники";
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
          alt: 'Арочный шатёр 18х15 - 241 м² мега-шатер премиум-класса от производителя MOBILE TENT'
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
  const width = 18;
  const length = 15;
  const area = 241; // 241 m²

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "image": "https://mobile-tent.ru/20x17,1.webp",
    "name": pageData.page?.name || "Арочный шатёр 18х15 — 241 м²",
    "description": pageData.seo?.description || "Арочный шатёр 18х15 — 241 м² – купить мега-шатер премиум-класса в Москве под заказ в компании Mobile Tent. Грандиозная прямоугольная конструкция с уникальными пропорциями, представляющая собой полноценное тентовое здание для самых масштабных задач. Идеально подходит для строительства международных выставочных центров, крытых спортивных арен, концертных залов, торговых комплексов, логистических терминалов, производственных цехов и ангаров для крупногабаритной техники. Инженерная конструкция повышенной прочности с пролетом 18 метров позволяет создавать колоннадосвободное пространство для реализации любых проектов. Вы можете выбрать любую комплектацию, размер и цвет изделия.",
    "sku": `MOB-${PAGE_CODE}`,
    "mpn": `MOB-ARCH-18x15-241-MEGA`,
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
      "areaServed": ["Москва", "Московская область", "Россия", "СНГ", "Европа", "Азия"],
      "url": `https://mobile-tent.ru${pageData.seo?.url || `/tent/${PAGE_CODE}`}`
    },
    "material": "Инженерная усиленная алюминиевая конструкция повышенной прочности, ПВХ ткань 1000-1100 г/м²",
    "category": "Арочные шатры мега-класса",
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
        "value": "до 7.0 м"
      },
      {
        "@type": "PropertyValue",
        "name": "Тип конструкции",
        "value": "Арочный шатер мега-класса"
      },
      {
        "@type": "PropertyValue",
        "name": "Каркас",
        "value": "Инженерная усиленная алюминиевая конструкция повышенной прочности с антикоррозийным покрытием, система мощных ферм, шестерные элементы жесткости, промышленные узлы соединений, усиленные опорные колонны с увеличенным сечением"
      },
      {
        "@type": "PropertyValue",
        "name": "Тент",
        "value": "ПВХ ткань премиум-класса, плотность 1000-1100 г/м², с максимальной УФ-защитой, огнеупорными свойствами, морозостойкостью, улучшенной светопропускаемостью"
      },
      {
        "@type": "PropertyValue",
        "name": "Ветровая нагрузка",
        "value": "до 260 км/ч"
      },
      {
        "@type": "PropertyValue",
        "name": "Снеговая нагрузка",
        "value": "до 450 кг/м²"
      },
      {
        "@type": "PropertyValue",
        "name": "Температурный режим",
        "value": "от -60 до +70°C"
      },
      {
        "@type": "PropertyValue",
        "name": "Уникальные пропорции",
        "value": "Ширина 18 метров - оптимальный пролет для спортивных сооружений и выставочных залов"
      },
      {
        "@type": "PropertyValue",
        "name": "Назначение",
        "value": "Международные выставочные центры, крытые спортивные арены, концертные залы, торговые комплексы, логистические терминалы, производственные цеха, ангары для крупногабаритной техники, авиационные ангары, складские комплексы, спортивные сооружения"
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
        "name": pageData.page?.name || "Арочный шатёр 18х15 — 241 м²",
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

  // ----- FAQ SCHEMA (customized for арочный шатер 18х15 мега-класса) -----
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Какие размеры у мега-шатра 18х15?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Мега-шатер имеет ширину 18 метров, длину 15 метров, высоту в коньке до 7.0 метров. Полезная площадь — ${area} м². Это грандиозная прямоугольная конструкция с уникальными пропорциями, предназначенная для самых масштабных проектов - от международных выставок до крытых спортивных арен.`
        }
      },
      {
        "@type": "Question",
        "name": `В чем особенность пропорций 18х15?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Пропорции 18х15 создают оптимальное пространство для спортивных сооружений (ширина 18 метров позволяет разместить полноценную волейбольную или баскетбольную площадку с трибунами), выставочных залов (возможность организовать проходы шириной 3-4 метра между стендами) и концертных площадок (оптимальная акустика и обзор). Такая конфигурация особенно востребована для международных мероприятий и профессионального спорта.`
        }
      },
      {
        "@type": "Question",
        "name": `Сколько стоит мега-шатер 18х15?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Цена зависит от комплектации и требований к конструкции: базовая — от ${prices[0]?.toLocaleString() || '372 000'} ₽, средняя — от ${prices[1]?.toLocaleString() || '472 000'} ₽, максимальная — от ${prices[2]?.toLocaleString() || '572 000'} ₽. Для конструкции такого масштаба с пролетом 18 метров требуется индивидуальное проектирование, усиленная конструкция и тент премиум-класса. Стоимость доставки, фундамента и монтажа рассчитывается индивидуально по проекту.`
        }
      },
      {
        "@type": "Question",
        "name": "Для каких целей подходит мега-шатер 18х15?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Мега-шатер 18х15 идеально подходит для: международных выставочных центров, крытых спортивных арен (волейбол, баскетбол, гандбол, теннис), концертных залов, торговых комплексов, логистических терминалов, производственных цехов, ангаров для крупногабаритной техники, авиационных ангаров, складских комплексов, ледовых арен, крытых стадионов, фестивальных площадок."
        }
      },
      {
        "@type": "Question",
        "name": "Какая конструкция у мега-шатра 18х15?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Мега-шатер 18х15 имеет инженерную усиленную конструкцию повышенной прочности с системой мощных ферм, шестерными элементами жесткости, промышленными узлами соединений, усиленными опорными колоннами с увеличенным сечением. Проводится индивидуальное проектирование с учетом всех требований, климатических условий, ветровых и снеговых нагрузок. Конструкция рассчитана на пролет 18 метров без внутренних опор."
        }
      },
      {
        "@type": "Question",
        "name": "Нужно ли разрешение на строительство шатра 18х15?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Для капитального сооружения площадью 241 м² требуется полное оформление разрешительной документации, включая получение разрешения на строительство, прохождение государственной экспертизы, оформление прав на земельный участок. Мы предоставляем полное сопровождение: помощь в проектировании, подготовке проектной документации, согласовании с соответствующими органами, получении разрешений."
        }
      },
      {
        "@type": "Question",
        "name": "Какой срок службы и гарантия на мега-шатер 18х15?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Гарантия от производителя — 15 лет на каркас и 7 лет на тент. Срок службы при правильной эксплуатации — более 50 лет благодаря усиленной конструкции. Алюминиевый каркас с антикоррозийным покрытием, ПВХ ткань премиум-класса плотностью 1000-1100 г/м² с максимальной УФ-защитой, огнеупорными свойствами, морозостойкостью до -60°C. Конструкция рассчитана на постоянную круглогодичную эксплуатацию в любых климатических условиях."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли утеплить мега-шатер 18х15?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, возможна полная термоизоляция шатра для круглогодичного использования: установка утепленных сэндвич-панелей, монтаж системы отопления, вентиляции и кондиционирования, установка тепловых завес, утепленных ворот и дверей, двойных тентовых систем с воздушной прослойкой. Мощная конструкция позволяет создавать полноценное отапливаемое здание с поддержанием комфортной температуры в любое время года."
        }
      },
      {
        "@type": "Question",
        "name": "Какой срок изготовления мега-шатра 18х15?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Стандартный срок изготовления мега-шатра 18х15 — от 40 до 55 рабочих дней, включая индивидуальное проектирование, изготовление усиленной конструкции, подготовку фундамента. Возможно ускоренное производство для срочных проектов с дополнительной комплектацией и увеличенной стоимостью."
        }
      },
      {
        "@type": "Question",
        "name": "Доставляете ли мега-шатры 18х15 в регионы?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, доставляем по всей России, странам СНГ, Европы и Азии. Для конструкций такого масштаба организуется специальная логистика, доставка специализированным транспортом, профессиональный монтаж с использованием тяжелой спецтехники (автокраны грузоподъемностью до 150 тонн, манипуляторы, подъемники). Стоимость доставки и монтажа рассчитывается индивидуально в зависимости от удаленности, сложности установки, необходимых работ по подготовке фундамента."
        }
      },
      {
        "@type": "Question",
        "name": "Сколько человек вмещает мега-шатер 18х15?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "В мега-шатре 18х15 площадью 241 м² можно разместить: до 450-500 гостей с банкетными столами, до 550-600 человек на фуршете, до 300-350 посадочных мест в ресторане, полноценную волейбольную площадку с трибунами на 200-250 зрителей, баскетбольную площадку с тренировочной зоной, выставочную экспозицию с 40-45 стендами, концертную площадку со сценой и зрительным залом на 400-450 мест."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли использовать шатер 18х15 как ангар для крупногабаритной техники?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, мега-шатер 18х15 идеально подходит как ангар для крупногабаритной техники, включая строительную технику, сельскохозяйственные машины, автобусы, грузовики, спецтехнику. Ширина 18 метров и высота до 7 метров позволяют размещать даже высокую технику. Усиленная конструкция и возможность установки широких промышленных ворот делают его идеальным решением для автопарков, строительных баз, сельскохозяйственных комплексов."
        }
      },
      {
        "@type": "Question",
        "name": "Какие спортивные объекты можно разместить в шатре 18х15?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "В шатре 18х15 можно разместить: полноценную волейбольную площадку (18х9 м) с трибунами, баскетбольную тренировочную площадку, теннисный корт, площадку для гандбола, зону для единоборств, тренажерный зал, несколько бадминтонных кортов, скалодром, зону для фитнеса и аэробики. Пропорции 18х15 идеально подходят для создания многофункционального спортивного комплекса."
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
        {pageData.seo?.h1 || "Арочный шатёр 18х15 — 241 м²"}
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