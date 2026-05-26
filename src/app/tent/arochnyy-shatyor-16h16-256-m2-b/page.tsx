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
const PAGE_CODE = "arochnyy-shatyor-16h16-256-m2-b";

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
        id: 187,
        name: "Арочный шатёр 16х16 — 256 м² (B)",
        code: PAGE_CODE
      },
      seo: {
        title: "Арочный шатёр 16х16 — 256 м² (B) – купить шатер бизнес-класса в Москве с доставкой: цена в интернет-магазине Mobile Tent",
        description: "Арочный шатёр 16х16 — 256 м² (B) – купить шатер бизнес-класса в Москве под заказ в компании Mobile Tent. Премиальная конструкция с индексом (B) представляет собой усовершенствованную версию с улучшенными характеристиками, повышенной надежностью и расширенными возможностями для бизнес-проектов. Идеально подходит для строительства выставочных центров, спортивных комплексов, концертных залов, торговых центров, логистических терминалов, производственных цехов и складских комплексов премиум-уровня. Инженерная конструкция с максимальными пролетами и улучшенными техническими характеристиками позволяет создавать полностью свободное пространство без внутренних опор. Вы можете выбрать любую комплектацию, размер и цвет изделия, а также заказать его брендирование. Мы используем только качественные и долговечные материалы, а также предлагаем адекватные цены, которые будут дешевле долгосрочный аренды! Гарантия от производителя — 5 лет.",
        keywords: "арочный шатёр 16х16 B, купить шатер бизнес-класса 16х16, шатер 16 на 16 B, арочный шатер 256м2 B, шатер бизнес-класса, премиальный шатер, шатер для выставочного центра, шатер для спортивного комплекса, шатер для концертного зала, тентовый шатер, быстровозводимый шатер, шатер для торгового центра, шатер для логистического терминала, шатер улучшенной комплектации",
        h1: "Арочный шатёр 16х16 — 256 м² (B)",
        url: `/tent/arochnyy-shatyor-16h16-256-m2-b`
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
  const seoTitle = data.seo?.title || "Арочный шатёр 16х16 — 256 м² (B) – купить шатер бизнес-класса в Москве с доставкой: цена в интернет-магазине Mobile Tent";
  const seoDescription = data.seo?.description || "Арочный шатёр 16х16 — 256 м² (B) – купить шатер бизнес-класса в Москве под заказ в компании Mobile Tent. Премиальная конструкция с индексом (B) представляет собой усовершенствованную версию с улучшенными характеристиками, повышенной надежностью и расширенными возможностями для бизнес-проектов. Идеально подходит для строительства выставочных центров, спортивных комплексов, концертных залов, торговых центров, логистических терминалов, производственных цехов и складских комплексов премиум-уровня. Инженерная конструкция с максимальными пролетами и улучшенными техническими характеристиками позволяет создавать полностью свободное пространство без внутренних опор. Вы можете выбрать любую комплектацию, размер и цвет изделия, а также заказать его брендирование. Мы используем только качественные и долговечные материалы, а также предлагаем адекватные цены, которые будут дешевле долгосрочный аренды! Гарантия от производителя — 5 лет.";
  const seoKeywords = data.seo?.keywords || "арочный шатёр 16х16 B, купить шатер бизнес-класса 16х16, шатер 16 на 16 B, арочный шатер 256м2 B, шатер бизнес-класса, премиальный шатер, шатер для выставочного центра, шатер для спортивного комплекса, шатер для концертного зала, тентовый шатер, быстровозводимый шатер, шатер для торгового центра, шатер для логистического терминала, шатер улучшенной комплектации";
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
          alt: 'Арочный шатёр 16х16 - 256 м² бизнес-класса (B) от производителя MOBILE TENT'
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
  const width = 16;
  const length = 16;
  const area = 256; // 256 m²

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "image": "https://mobile-tent.ru/12x12,1.webp",
    "name": pageData.page?.name || "Арочный шатёр 16х16 — 256 м² (B)",
    "description": pageData.seo?.description || "Арочный шатёр 16х16 — 256 м² (B) – купить шатер бизнес-класса в Москве под заказ в компании Mobile Tent. Премиальная конструкция с индексом (B) представляет собой усовершенствованную версию с улучшенными характеристиками, повышенной надежностью и расширенными возможностями для бизнес-проектов. Идеально подходит для строительства выставочных центров, спортивных комплексов, концертных залов, торговых центров, логистических терминалов, производственных цехов и складских комплексов премиум-уровня. Инженерная конструкция с максимальными пролетами и улучшенными техническими характеристиками позволяет создавать полностью свободное пространство без внутренних опор. Вы можете выбрать любую комплектацию, размер и цвет изделия.",
    "sku": `MOB-${PAGE_CODE}`,
    "mpn": `MOB-ARCH-16x16-256-BUSINESS`,
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
      "areaServed": ["Москва", "Московская область", "Россия", "СНГ", "Европа", "Ближний Восток"],
      "url": `https://mobile-tent.ru${pageData.seo?.url || `/tent/${PAGE_CODE}`}`
    },
    "material": "Премиальная усиленная алюминиевая конструкция бизнес-класса, ПВХ ткань 1100-1200 г/м²",
    "category": "Арочные шатры бизнес-класса",
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
        "value": "до 6.5 м"
      },
      {
        "@type": "PropertyValue",
        "name": "Тип конструкции",
        "value": "Арочный шатер бизнес-класса (B)"
      },
      {
        "@type": "PropertyValue",
        "name": "Каркас",
        "value": "Премиальная усиленная алюминиевая конструкция с улучшенным антикоррозийным покрытием, система ферм повышенной надежности, пятерные элементы жесткости, премиальные узлы соединений, усиленные опорные колонны с увеличенным сечением"
      },
      {
        "@type": "PropertyValue",
        "name": "Тент",
        "value": "ПВХ ткань бизнес-класса, плотность 1100-1200 г/м², с максимальной УФ-защитой, огнеупорными свойствами, морозостойкостью, улучшенной цветопередачей"
      },
      {
        "@type": "PropertyValue",
        "name": "Ветровая нагрузка",
        "value": "до 280 км/ч"
      },
      {
        "@type": "PropertyValue",
        "name": "Снеговая нагрузка",
        "value": "до 500 кг/м²"
      },
      {
        "@type": "PropertyValue",
        "name": "Температурный режим",
        "value": "от -60 до +80°C"
      },
      {
        "@type": "PropertyValue",
        "name": "Индекс (B)",
        "value": "Бизнес-класс: улучшенные характеристики, премиальные материалы, расширенная комплектация"
      },
      {
        "@type": "PropertyValue",
        "name": "Назначение",
        "value": "Премиальные выставочные центры, спортивные комплексы международного уровня, концертные залы, торговые центры премиум-класса, логистические терминалы, производственные цеха, складские комплексы бизнес-класса, ангары для бизнес-авиации, ледовые дворцы, крытые стадионы"
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
        "name": pageData.page?.name || "Арочный шатёр 16х16 — 256 м² (B)",
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

  // ----- FAQ SCHEMA (customized for арочный шатер 16х16 бизнес-класса) -----
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Какие размеры у шатра бизнес-класса 16х16 (B)?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Шатер бизнес-класса имеет ширину 16 метров, длину 16 метров, высоту в коньке до 6.5 метров. Полезная площадь — ${area} м². Это премиальное тентовое здание с индексом (B), представляющее собой усовершенствованную версию с улучшенными характеристиками для бизнес-проектов высшего уровня.`
        }
      },
      {
        "@type": "Question",
        "name": `Что означает индекс (B) в названии шатра?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Индекс (B) обозначает бизнес-класс конструкции. Это означает: улучшенные технические характеристики, премиальные материалы, повышенную надежность, расширенную комплектацию, усиленную конструкцию, улучшенные показатели ветро- и снегостойкости, премиальное антикоррозийное покрытие, тент повышенной плотности 1100-1200 г/м², увеличенный срок службы и расширенные возможности для бизнес-проектов.`
        }
      },
      {
        "@type": "Question",
        "name": `Сколько стоит шатер бизнес-класса 16х16 (B)?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Цена зависит от комплектации и требований бизнес-класса: базовая — от ${prices[0]?.toLocaleString() || '372 000'} ₽, средняя — от ${prices[1]?.toLocaleString() || '472 000'} ₽, максимальная — от ${prices[2]?.toLocaleString() || '572 000'} ₽. Для премиальной конструкции бизнес-класса требуется индивидуальное проектирование, усиленная конструкция и тент премиум-класса плотностью 1100-1200 г/м². Стоимость доставки, фундамента и монтажа рассчитывается индивидуально по проекту.`
        }
      },
      {
        "@type": "Question",
        "name": "Для каких целей подходит шатер бизнес-класса 16х16 (B)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Шатер бизнес-класса 16х16 (B) идеально подходит для: премиальных выставочных центров, спортивных комплексов международного уровня, концертных залов, торговых центров премиум-класса, логистических терминалов, производственных цехов, складских комплексов бизнес-класса, ангаров для бизнес-авиации, ледовых дворцов, крытых стадионов, VIP-зон на мероприятиях, премиальных отелей под открытым небом."
        }
      },
      {
        "@type": "Question",
        "name": "Чем отличается шатер бизнес-класса (B) от стандартного?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Шатер бизнес-класса (B) отличается от стандартного: увеличенным сечением профиля, пятерными элементами жесткости (вместо тройных), премиальными узлами соединений, усиленными опорными колоннами, тканью повышенной плотности 1100-1200 г/м², улучшенным антикоррозийным покрытием, повышенной ветростойкостью до 280 км/ч, увеличенной снеговой нагрузкой до 500 кг/м², расширенным температурным режимом, увеличенным сроком службы до 60+ лет, премиальной гарантией и расширенными возможностями для бизнес-проектов."
        }
      },
      {
        "@type": "Question",
        "name": "Какая конструкция у шатра бизнес-класса 16х16 (B)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Шатер 16х16 (B) имеет премиальную усиленную конструкцию бизнес-класса с системой ферм повышенной надежности, пятерными элементами жесткости, премиальными узлами соединений, усиленными опорными колоннами с увеличенным сечением, возможностью установки дополнительных внутренних опор для особых нагрузок. Проводится индивидуальное проектирование с учетом всех требований бизнес-класса и международных стандартов."
        }
      },
      {
        "@type": "Question",
        "name": "Нужно ли разрешение на строительство шатра 16х16 (B)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Для капитального сооружения бизнес-класса площадью 256 м² требуется полное оформление разрешительной документации, включая получение разрешения на строительство, прохождение государственной экспертизы, оформление прав на земельный участок. Мы предоставляем полное сопровождение: помощь в проектировании, подготовке проектной документации бизнес-класса, согласовании с соответствующими органами, получении разрешений."
        }
      },
      {
        "@type": "Question",
        "name": "Какой срок службы и гарантия на шатер бизнес-класса (B)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Гарантия от производителя — 20 лет на каркас и 10 лет на тент. Срок службы при правильной эксплуатации — более 60 лет благодаря премиальной конструкции бизнес-класса. Алюминиевый каркас с улучшенным антикоррозийным покрытием, ПВХ ткань бизнес-класса плотностью 1100-1200 г/м² с максимальной УФ-защитой, огнеупорными свойствами, морозостойкостью до -60°C, улучшенной цветопередачей. Конструкция рассчитана на постоянную круглогодичную эксплуатацию в любых климатических условиях."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли утеплить шатер бизнес-класса 16х16 (B)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, возможна полная термоизоляция шатра бизнес-класса для круглогодичного использования: установка утепленных сэндвич-панелей премиум-класса, монтаж системы отопления, вентиляции и кондиционирования бизнес-уровня, установка тепловых завес, утепленных ворот и дверей премиум-класса, двойных тентовых систем с воздушной прослойкой, систем климат-контроля. Премиальная конструкция позволяет создавать полноценное отапливаемое здание бизнес-класса с поддержанием комфортной температуры в любое время года."
        }
      },
      {
        "@type": "Question",
        "name": "Какой срок изготовления шатра бизнес-класса 16х16 (B)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Стандартный срок изготовления шатра бизнес-класса 16х16 (B) — от 50 до 70 рабочих дней, включая индивидуальное проектирование, изготовление премиальной конструкции, подготовку фундамента бизнес-класса. Возможно ускоренное производство для срочных бизнес-проектов с дополнительной комплектацией и увеличенной стоимостью."
        }
      },
      {
        "@type": "Question",
        "name": "Доставляете ли шатры бизнес-класса 16х16 (B) в регионы?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, доставляем по всей России, странам СНГ, Европы и Ближнего Востока. Для конструкций бизнес-класса организуется специальная логистика премиум-уровня, доставка специализированным транспортом, профессиональный монтаж с использованием тяжелой спецтехники (автокраны грузоподъемностью до 150 тонн, манипуляторы, подъемники). Стоимость доставки и монтажа рассчитывается индивидуально в зависимости от удаленности, сложности установки, необходимых работ по подготовке фундамента бизнес-класса."
        }
      },
      {
        "@type": "Question",
        "name": "Сколько человек вмещает шатер бизнес-класса 16х16 (B)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "В шатре бизнес-класса 16х16 (B) площадью 256 м² можно разместить: до 500-550 гостей с банкетными столами премиум-класса, до 600-650 человек на фуршете бизнес-уровня, до 350-400 посадочных мест в ресторане премиум-класса, полноценное футбольное поле для мини-футбола с VIP-трибунами, баскетбольную площадку международного класса, выставочную экспозицию с 60-70 премиальными стендами, складское хранение с высотными стеллажами бизнес-класса, ледовую арену с VIP-ложами, концертный зал со сценой премиум-уровня."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли использовать шатер 16х16 (B) как ангар для бизнес-авиации?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, шатер бизнес-класса 16х16 (B) идеально подходит как ангар для бизнес-авиации, частных самолетов, вертолетов премиум-класса. Ширина 16 метров и высота до 6.5 метров позволяют размещать бизнес-джеты, вертолеты, крупногабаритную технику. Премиальная конструкция и возможность установки широких ангарных ворот с автоматикой делают его идеальным решением для авиационных ангаров бизнес-класса, эллингов и технических баз премиум-уровня."
        }
      },
      {
        "@type": "Question",
        "name": "Какие максимальные нагрузки выдерживает шатер бизнес-класса 16х16 (B)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Шатер бизнес-класса 16х16 (B) выдерживает экстремальные нагрузки: ветровую нагрузку до 280 км/ч (ураган 5 категории), снеговую нагрузку до 500 кг/м², сейсмическую нагрузку до 9 баллов. Может использоваться в любых климатических зонах, включая Арктику, прибрежные зоны с ураганными ветрами, горную местность и сейсмоопасные районы. Конструкция проходит индивидуальный расчет с учетом всех международных нормативов и требований бизнес-класса."
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
        {pageData.seo?.h1 || "Арочный шатёр 16х16 — 256 м² (B)"}
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