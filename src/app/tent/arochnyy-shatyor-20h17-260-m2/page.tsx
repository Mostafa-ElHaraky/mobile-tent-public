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
const PAGE_CODE = "arochnyy-shatyor-20h17-260-m2";

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
        id: 189,
        name: "Арочный шатёр 20х17 — 260 м²",
        code: PAGE_CODE
      },
      seo: {
        title: "Арочный шатёр 20х17 — 260 м² – купить гигантский шатер премиум-класса в Москве с доставкой: цена в интернет-магазине Mobile Tent",
        description: "Арочный шатёр 20х17 — 260 м² – купить гигантский шатер премиум-класса в Москве под заказ в компании Mobile Tent. Монументальная конструкция с уникальным пролетом 20 метров, представляющая собой полноценное тентовое здание для реализации самых амбициозных проектов. Идеально подходит для строительства международных выставочных центров, крытых стадионов, концертных залов, торговых комплексов, логистических терминалов, производственных цехов и ангаров для крупногабаритной техники. Инженерная конструкция повышенной прочности с пролетом 20 метров позволяет создавать колоннадосвободное пространство для любых задач. Вы можете выбрать любую комплектацию, размер и цвет изделия, а также заказать его брендирование. Мы используем только качественные и долговечные материалы, а также предлагаем адекватные цены, которые будут дешевле долгосрочный аренды! Гарантия от производителя — 5 лет.",
        keywords: "арочный шатёр 20х17, купить гигантский шатер 20х17, шатер 20 на 17, арочный шатер 260м2, гигантский шатер премиум-класса, тентовое здание, шатер для международной выставки, шатер для крытого стадиона, шатер для концертного зала, тентовый шатер, быстровозводимый шатер, шатер для торгового комплекса, шатер для логистического терминала, ангар для крупногабаритной техники, шатер с пролетом 20 метров",
        h1: "Арочный шатёр 20х17 — 260 м²",
        url: `/tent/arochnyy-shatyor-20h17-260-m2`
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
  const seoTitle = data.seo?.title || "Арочный шатёр 20х17 — 260 м² – купить гигантский шатер премиум-класса в Москве с доставкой: цена в интернет-магазине Mobile Tent";
  const seoDescription = data.seo?.description || "Арочный шатёр 20х17 — 260 м² – купить гигантский шатер премиум-класса в Москве под заказ в компании Mobile Tent. Монументальная конструкция с уникальным пролетом 20 метров, представляющая собой полноценное тентовое здание для реализации самых амбициозных проектов. Идеально подходит для строительства международных выставочных центров, крытых стадионов, концертных залов, торговых комплексов, логистических терминалов, производственных цехов и ангаров для крупногабаритной техники. Инженерная конструкция повышенной прочности с пролетом 20 метров позволяет создавать колоннадосвободное пространство для любых задач. Вы можете выбрать любую комплектацию, размер и цвет изделия, а также заказать его брендирование. Мы используем только качественные и долговечные материалы, а также предлагаем адекватные цены, которые будут дешевле долгосрочный аренды! Гарантия от производителя — 5 лет.";
  const seoKeywords = data.seo?.keywords || "арочный шатёр 20х17, купить гигантский шатер 20х17, шатер 20 на 17, арочный шатер 260м2, гигантский шатер премиум-класса, тентовое здание, шатер для международной выставки, шатер для крытого стадиона, шатер для концертного зала, тентовый шатер, быстровозводимый шатер, шатер для торгового комплекса, шатер для логистического терминала, ангар для крупногабаритной техники, шатер с пролетом 20 метров";
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
          alt: 'Арочный шатёр 20х17 - 260 м² гигантский шатер премиум-класса от производителя MOBILE TENT'
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
  const length = 17;
  const area = 260; // 260 m²

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "image": "https://mobile-tent.ru/1.webp",
    "name": pageData.page?.name || "Арочный шатёр 20х17 — 260 м²",
    "description": pageData.seo?.description || "Арочный шатёр 20х17 — 260 м² – купить гигантский шатер премиум-класса в Москве под заказ в компании Mobile Tent. Монументальная конструкция с уникальным пролетом 20 метров, представляющая собой полноценное тентовое здание для реализации самых амбициозных проектов. Идеально подходит для строительства международных выставочных центров, крытых стадионов, концертных залов, торговых комплексов, логистических терминалов, производственных цехов и ангаров для крупногабаритной техники. Инженерная конструкция повышенной прочности с пролетом 20 метров позволяет создавать колоннадосвободное пространство для любых задач. Вы можете выбрать любую комплектацию, размер и цвет изделия.",
    "sku": `MOB-${PAGE_CODE}`,
    "mpn": `MOB-ARCH-20x17-260-GIANT`,
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
      "areaServed": ["Москва", "Московская область", "Россия", "СНГ", "Европа", "Азия", "Ближний Восток"],
      "url": `https://mobile-tent.ru${pageData.seo?.url || `/tent/${PAGE_CODE}`}`
    },
    "material": "Инженерная усиленная алюминиевая конструкция повышенной прочности, ПВХ ткань 1100-1200 г/м²",
    "category": "Арочные шатры гигант-класса",
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
        "value": "до 6.3 м"
      },
      {
        "@type": "PropertyValue",
        "name": "Высота входной арки",
        "value": "около 5 м"
      },
      {
        "@type": "PropertyValue",
        "name": "Тип конструкции",
        "value": "Арочный шатер гигант-класса"
      },
      {
        "@type": "PropertyValue",
        "name": "Каркас",
        "value": "Инженерная усиленная алюминиевая конструкция повышенной прочности с антикоррозийным покрытием, система мощных ферм, семерные элементы жесткости, промышленные узлы соединений, усиленные опорные колонны с максимальным сечением"
      },
      {
        "@type": "PropertyValue",
        "name": "Тент",
        "value": "ПВХ ткань премиум-класса, плотность 1100-1200 г/м², с максимальной УФ-защитой, огнеупорными свойствами, морозостойкостью, улучшенной светопропускаемостью и цветостойкостью"
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
        "name": "Уникальный пролет",
        "value": "20 метров - максимальный пролет без внутренних опор для создания колоннадосвободного пространства"
      },
      {
        "@type": "PropertyValue",
        "name": "Назначение",
        "value": "Международные выставочные центры, крытые стадионы, концертные залы, торговые комплексы, логистические терминалы, производственные цеха, ангары для крупногабаритной техники, авиационные ангары, складские комплексы, спортивные арены, ледовые дворцы, фестивальные площадки"
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
        "name": pageData.page?.name || "Арочный шатёр 20х17 — 260 м²",
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

  // ----- FAQ SCHEMA (customized for арочный шатер 20х17 with questions from document) -----
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Какие основные параметры определяют формат использования шатра 20х17?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Основные параметры, определяющие формат использования: ширина 20 м позволяет организовать широкие проходы и зонирование; длина 17 м подходит для размещения сцены, посадки и сервисных участков; высота входной арки около 5 м обеспечивает удобный доступ для оборудования; высота в коньке создаёт достаточный внутренний объём без ощущения замкнутости. Площадь сооружения составляет около 260 м², что сопоставимо с залом средней вместимости."
        }
      },
      {
        "@type": "Question",
        "name": "В чем практическая польза арочной конструкции шатра 17 на 20 м?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Практическая польза арочной конструкции выражается в трёх ключевых факторах: Устойчивость — арочная форма эффективно перераспределяет нагрузки, снижая концентрацию усилий в отдельных узлах, что повышает надёжность при эксплуатации на открытых площадках. Отсутствие внутренних опор — внутри формируется единое свободное пространство, что упрощает планировку и позволяет реализовать различные сценарии, включая банкетную рассадку, размещение сцены или выставочных стендов. Внешний вид — плавная линия свода формирует нейтральный и аккуратный архитектурный облик."
        }
      },
      {
        "@type": "Question",
        "name": "Где используется шатер 20х17 м?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Шатер 20×17 м используется в трёх основных направлениях: Мероприятия — пространство подходит для деловых форумов, презентаций, корпоративных событий и массовых встреч. Единый зал без опор облегчает размещение гостей и технического оборудования. Ресторанные и банкетные зоны — формат позволяет организовать полноценные посадочные схемы, в том числе банкетную рассадку, с выделением сервисных проходов и сценической части. Выставки и ярмарки — прямоугольное основание и свободная планировка упрощают размещение стендов, экспозиций и демонстрационных зон."
        }
      },
      {
        "@type": "Question",
        "name": "Как организовать банкетную рассадку в шатер 20х17 м?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Банкетная рассадка в шатре 20х17 м может быть организована с максимальной эффективностью благодаря отсутствию внутренних опор. Прямоугольная форма основания и свободное пространство позволяют разместить банкетные столы различной конфигурации, выделить зоны для сцены, танцпола и сервисных проходов. Ширина 20 м даёт возможность создать широкие проходы, а длина 17 м оптимальна для размещения президиума и посадки гостей. Площадь 260 м² позволяет комфортно разместить до 200-250 гостей."
        }
      },
      {
        "@type": "Question",
        "name": "Какие размеры у арочного шатра 20х17?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Гигант-шатер имеет ширину 20 метров, длину 17 метров, высоту в коньке до 6.3 метров, высоту входной арки около 5 метров. Полезная площадь — ${area} м². Это монументальная конструкция с уникальным пролетом 20 метров, представляющая собой полноценное тентовое здание.`
        }
      },
      {
        "@type": "Question",
        "name": "Сколько стоит гигант-шатер 20х17?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Цена зависит от комплектации и требований к конструкции: базовая — от ${prices[0]?.toLocaleString() || '372 000'} ₽, средняя — от ${prices[1]?.toLocaleString() || '472 000'} ₽, максимальная — от ${prices[2]?.toLocaleString() || '572 000'} ₽. Для конструкции с уникальным пролетом 20 метров требуется индивидуальное проектирование, усиленная конструкция и тент премиум-класса. Стоимость доставки и монтажа рассчитывается индивидуально.`
        }
      },
      {
        "@type": "Question",
        "name": "Для каких целей подходит гигант-шатер 20х17?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Гигант-шатер 20х17 идеально подходит для: международных выставочных центров, крытых стадионов, концертных залов, торговых комплексов, логистических терминалов, производственных цехов, ангаров для крупногабаритной техники, авиационных ангаров, складских комплексов, спортивных арен, ледовых дворцов, фестивальных площадок, крытых рынков, автомобильных салонов, демонстрационных центров, деловых форумов и массовых мероприятий."
        }
      },
      {
        "@type": "Question",
        "name": "Какая конструкция у гигант-шатра 20х17?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Гигант-шатер 20х17 имеет инженерную усиленную конструкцию повышенной прочности с системой мощных ферм, семерными элементами жесткости, промышленными узлами соединений, усиленными опорными колоннами с максимальным сечением. Арочная форма эффективно перераспределяет нагрузки, снижая концентрацию усилий в отдельных узлах. Проводится индивидуальное проектирование с учетом всех требований и климатических условий."
        }
      },
      {
        "@type": "Question",
        "name": "В чем преимущество отсутствия внутренних опор в шатре 20х17?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Отсутствие внутренних опор — ключевое преимущество арочной конструкции. Внутри формируется единое свободное пространство площадью 260 м² без мешающих колонн. Это позволяет: реализовать различные сценарии мероприятий с гибкой планировкой; организовать банкетную рассадку с оптимальным расположением столов; разместить сцену с хорошей видимостью из любой точки; установить выставочные стенды без ограничений; обеспечить свободное перемещение гостей и персонала."
        }
      },
      {
        "@type": "Question",
        "name": "Какой срок службы и гарантия на гигант-шатер 20х17?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Гарантия от производителя — 5 лет на каркас и 10 лет на тент. Срок службы при правильной эксплуатации — более 60 лет благодаря уникальной конструкции. Алюминиевый каркас с антикоррозийным покрытием, ПВХ ткань премиум-класса плотностью 1100-1200 г/м². Конструкция рассчитана на постоянную круглогодичную эксплуатацию в любых климатических условиях."
        }
      },
      {
        "@type": "Question",
        "name": "Нужно ли разрешение на строительство шатра 20х17?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Для временного сооружения площадью 260 м² для проведения мероприятий разрешение не требуется при краткосрочной установке. Для капитального строительства или долгосрочного размещения может потребоваться оформление разрешительной документации. Мы предоставляем полное сопровождение: помощь в проектировании, подготовке проектной документации, согласовании с соответствующими органами."
        }
      },
      {
        "@type": "Question",
        "name": "Сколько человек вмещает гигант-шатер 20х17?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "В гигант-шатре 20х17 площадью 260 м² можно разместить: до 200-250 гостей с банкетными столами, до 300-350 человек на фуршете, до 150-200 посадочных мест в ресторане, до 15-20 выставочных стендов. Ширина 20 м позволяет организовать широкие проходы, длина 17 м подходит для размещения сцены и сервисных участков. Высота входной арки около 5 м обеспечивает удобный доступ."
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
        {pageData.seo?.h1 || "Арочный шатёр 20х17 — 260 м²"}
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