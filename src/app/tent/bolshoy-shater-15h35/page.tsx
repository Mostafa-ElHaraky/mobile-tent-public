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
const PAGE_CODE = "bolshoy-shater-15h35";

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
        id: 204,
        name: "Большой шатер 15х35 — 525 м²",
        code: PAGE_CODE
      },
      seo: {
        title: "Большой шатер 15х35 (525 м²) – купить в Москве с доставкой: цена в интернет-магазине Mobile Tent",
        description: "Большой шатер 15х35 (525 м²) – купить в Москве под заказ в компании Mobile Tent. Масштабный шатер премиум-класса площадью 525 квадратных метров с широким пролетом 15 метров и увеличенной длиной 35 метров идеально подходит для проведения крупнейших мероприятий: масштабных свадеб до 550 гостей, корпоративов, выставок, спортивных соревнований, фестивалей, концертов, форумов, а также для промышленных объектов, складов, логистических центров. Увеличенный пролет 15 метров без промежуточных опор позволяет создавать уникальные планировочные решения, размещать профессиональную сцену, несколько функциональных зон, выставочное оборудование, крупногабаритную технику. Усиленная конструкция с тройной системой опор и усиленными фермами обеспечивает максимальную надежность при любых погодных условиях и повышенных нагрузках. Вы можете выбрать любую комплектацию, размер и цвет изделия, а также заказать его брендирование. Мы используем только качественные и долговечные материалы, а также предлагаем адекватные цены, которые будут дешевле долгосрочный аренды! Гарантия от производителя — 5 лет.",
        keywords: "большой шатер 15х35, шатер 15 на 35, купить большой шатер 15х35, шатер 525 м2, большой шатер для мероприятий, большой шатер для свадьбы, большой шатер для выставки, большой шатер для склада, шатер премиум-класса, просторный шатер, шатер с широким пролетом, тентовый шатер большой, быстровозводимый шатер большой, большой арочный шатер, шатер для фестиваля, шатер для концерта, шатер для форума, шатер для экспо, промышленный шатер",
        h1: "Большой шатер 15х35 — 525 м²",
        url: `/tent/bolshoy-shater-15h35`
      },
      content: {
        desktop: '',
        mobile: ''
      },
      priceConfigurations: [
        {
          name: "Базовая",
          isActive: true,
          currentPrice: 672000,
          originalPrice: 672000,
          discount: 0,
          description: "Базовая комплектация включает основные элементы конструкции с широким пролетом и усиленной системой опор"
        },
        {
          name: "Средняя",
          isActive: false,
          currentPrice: 832000,
          originalPrice: 832000,
          discount: 0,
          description: "Средняя комплектация с дополнительными опциями и промышленным усилением"
        },
        {
          name: "Максимальная",
          isActive: false,
          currentPrice: 992000,
          originalPrice: 992000,
          discount: 0,
          description: "Максимальная комплектация со всеми доступными опциями и премиальным промышленным оснащением"
        }
      ],
      contacts: {
        phone1: "+7 (499) 113-36-60",
        phone2: "+7 (495) 487-43-53",
        email: "info@mobile-tent.ru",
        telegram: "https://t.me/+79770893996?start=14594990928",
        whatsapp: "https://api.whatsapp.com/send/?phone=79805109568",
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
  const seoTitle = data.seo?.title || "Большой шатер 15х35 (525 м²) – купить в Москве с доставкой: цена в интернет-магазине Mobile Tent";
  const seoDescription = data.seo?.description || "Большой шатер 15х35 (525 м²) – купить в Москве под заказ в компании Mobile Tent. Масштабный шатер премиум-класса площадью 525 квадратных метров с широким пролетом 15 метров и увеличенной длиной 35 метров идеально подходит для проведения крупнейших мероприятий: масштабных свадеб до 550 гостей, корпоративов, выставок, спортивных соревнований, фестивалей, концертов, форумов, а также для промышленных объектов, складов, логистических центров. Увеличенный пролет 15 метров без промежуточных опор позволяет создавать уникальные планировочные решения, размещать профессиональную сцену, несколько функциональных зон, выставочное оборудование, крупногабаритную технику. Усиленная конструкция с тройной системой опор и усиленными фермами обеспечивает максимальную надежность при любых погодных условиях и повышенных нагрузках. Вы можете выбрать любую комплектацию, размер и цвет изделия, а также заказать его брендирование. Мы используем только качественные и долговечные материалы, а также предлагаем адекватные цены, которые будут дешевле долгосрочный аренды! Гарантия от производителя — 5 лет.";
  const seoKeywords = data.seo?.keywords || "большой шатер 15х35, шатер 15 на 35, купить большой шатер 15х35, шатер 525 м2, большой шатер для мероприятий, большой шатер для свадьбы, большой шатер для выставки, большой шатер для склада, шатер премиум-класса, просторный шатер, шатер с широким пролетом, тентовый шатер большой, быстровозводимый шатер большой, большой арочный шатер, шатер для фестиваля, шатер для концерта, шатер для форума, шатер для экспо, промышленный шатер";
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
          url: 'https://mobile-tent.ru/10x30,1.webp',
          width: 1200,
          height: 630,
          alt: 'Большой шатер 15х35 - 525 м² масштабный шатер с широким пролетом от производителя MOBILE TENT'
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
export default async function Bolshoy_Shatyor_15x35_Page() {
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

  // ----- LOCAL BUSINESS with GEO targeting (maximum expansion for industrial scale) -----
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "MOBILE TENT",
    "image": "https://mobile-tent.ru/10x30,1.webp",
    "url": "https://mobile-tent.ru",
    "telephone": pageData.contacts?.phone1 || "+7 (499) 113-36-60",
    "email": pageData.contacts?.email || "info@mobile-tent.ru",
    "priceRange": "₽₽₽₽",
    "description": "Производство и продажа масштабных шатров с широким пролетом, промышленных тентовых конструкций и быстровозводимых сооружений премиум-класса в Москве и Московской области для крупнейших мероприятий и промышленных объектов.",
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
      { "@type": "Country", "name": "Россия" },
      { "@type": "City", "name": "Калуга" },
      { "@type": "City", "name": "Тула" },
      { "@type": "City", "name": "Рязань" },
      { "@type": "City", "name": "Владимир" },
      { "@type": "City", "name": "Тверь" },
      { "@type": "City", "name": "Ярославль" },
      { "@type": "City", "name": "Нижний Новгород" },
      { "@type": "City", "name": "Воронеж" },
      { "@type": "City", "name": "Липецк" },
      { "@type": "City", "name": "Белгород" },
      { "@type": "City", "name": "Курск" },
      { "@type": "City", "name": "Орел" },
      { "@type": "City", "name": "Брянск" },
      { "@type": "City", "name": "Смоленск" },
      { "@type": "City", "name": "Казань" },
      { "@type": "City", "name": "Самара" },
      { "@type": "City", "name": "Саратов" },
      { "@type": "City", "name": "Волгоград" },
      { "@type": "City", "name": "Ростов-на-Дону" },
      { "@type": "City", "name": "Краснодар" },
      { "@type": "City", "name": "Сочи" },
      { "@type": "City", "name": "Екатеринбург" },
      { "@type": "City", "name": "Челябинск" },
      { "@type": "City", "name": "Тюмень" },
      { "@type": "City", "name": "Новосибирск" },
      { "@type": "City", "name": "Омск" },
      { "@type": "City", "name": "Красноярск" },
      { "@type": "City", "name": "Иркутск" },
      { "@type": "City", "name": "Владивосток" },
      { "@type": "City", "name": "Хабаровск" }
    ],
    "hasMap": officePlace.hasMap,
    "openingHoursSpecification": officePlace.openingHoursSpecification,
    "sameAs": [
      pageData.contacts?.telegram || "https://t.me/+79770893996?start=14594990928",
      pageData.contacts?.whatsapp ? `https://wa.me/${pageData.contacts.whatsapp.replace(/[^0-9]/g, '')}` : "https://wa.me/79805109568"
    ]
  };

  // ----- PRODUCT SCHEMA (specific to this большой шатер 15х35) -----
  // Determine price range from configurations with proper typing
  const prices: number[] = pageData.priceConfigurations?.map((c: PriceConfiguration) => c.currentPrice) || [672000, 832000, 992000];
  const lowPrice = Math.min(...prices);
  const highPrice = Math.max(...prices);
  const offerCount = pageData.priceConfigurations?.length || 3;

  // Calculate dimensions for this specific size
  const width = 15;
  const length = 35;
  const area = 525; // 525 m²
  const ridgeHeight = "до 8.0 м";
  const wallHeight = "до 5.0 м";

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "image": "https://mobile-tent.ru/10x30,1.webp",
    "name": pageData.page?.name || "Большой шатер 15х35 — 525 м²",
    "description": pageData.seo?.description || "Большой шатер 15х35 (525 м²) – купить в Москве под заказ в компании Mobile Tent. Масштабный шатер премиум-класса площадью 525 квадратных метров с широким пролетом 15 метров и увеличенной длиной 35 метров идеально подходит для проведения крупнейших мероприятий и промышленных объектов. Увеличенный пролет 15 метров без промежуточных опор позволяет создавать уникальные планировочные решения. Усиленная конструкция с тройной системой опор и усиленными фермами обеспечивает максимальную надежность.",
    "sku": `MOB-${PAGE_CODE}`,
    "mpn": `MOB-BIG-15x35-525`,
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
      "areaServed": ["Москва", "Московская область", "Россия", "СНГ"],
      "url": `https://mobile-tent.ru${pageData.seo?.url || `/tent/${PAGE_CODE}`}`
    },
    "material": "Промышленный усиленный алюминиевый каркас, ПВХ ткань 900-1100 г/м²",
    "category": "Промышленные шатры с широким пролетом премиум-класса",
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Ширина пролета",
        "value": `${width} м (увеличенный широкий пролет без промежуточных опор)`
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
        "value": ridgeHeight
      },
      {
        "@type": "PropertyValue",
        "name": "Высота стен",
        "value": wallHeight
      },
      {
        "@type": "PropertyValue",
        "name": "Тип конструкции",
        "value": "Промышленный арочный шатер с широким пролетом и тройной системой опор"
      },
      {
        "@type": "PropertyValue",
        "name": "Каркас",
        "value": "Промышленный усиленный алюминиевый профиль с антикоррозийным покрытием, тройная система опор, усиленные несущие фермы, дополнительные элементы жесткости, система внутренних растяжек, усиленные узлы соединения"
      },
      {
        "@type": "PropertyValue",
        "name": "Тент",
        "value": "Промышленная ПВХ ткань, плотность 900-1100 г/м², с УФ-защитой, огнеупорная, водоотталкивающая, маслобензостойкая, усиленная в зонах повышенной нагрузки, с двойным армированием"
      },
      {
        "@type": "PropertyValue",
        "name": "Ветровая нагрузка",
        "value": "до 140 км/ч (с дополнительным креплением до 160 км/ч)"
      },
      {
        "@type": "PropertyValue",
        "name": "Снеговая нагрузка",
        "value": "до 250 кг/м²"
      },
      {
        "@type": "PropertyValue",
        "name": "Температурный режим",
        "value": "от -60 до +80°C"
      },
      {
        "@type": "PropertyValue",
        "name": "Количество опор",
        "value": "Тройная система опор с шагом 2.5-3 метра, усиленные промышленные фермы"
      },
      {
        "@type": "PropertyValue",
        "name": "Назначение",
        "value": "Крупнейшие мероприятия (500+ гостей), международные выставки (экспо-форумы), спортивные соревнования международного уровня, концертные площадки, фестивали, промышленные объекты, складские комплексы, логистические центры, производственные цеха, ангары для крупной техники, сельскохозяйственные комплексы, авиационные ангары, автосалоны, торговые центры, выставочные павильоны"
      },
      {
        "@type": "PropertyValue",
        "name": "Вместимость",
        "value": "до 550 гостей с банкетными столами, до 800 человек на фуршете, до 500 посадочных мест в ресторане, полноценная концертная площадка с профессиональной сценой и зрительным залом на 600-700 мест"
      },
      {
        "@type": "PropertyValue",
        "name": "Возможность зонирования",
        "value": "Да, возможно создание многофункционального пространства с разделением на несколько залов, антресолей, VIP-лож, переговорных, выставочных зон, конференц-залов"
      },
      {
        "@type": "PropertyValue",
        "name": "Промышленное оснащение",
        "value": "Возможность установки кранового оборудования, грузоподъемных механизмов, конвейерных линий, стеллажных систем высотой до 7 метров"
      },
      {
        "@type": "PropertyValue",
        "name": "Инженерные системы",
        "value": "Промышленные системы отопления, вентиляции, кондиционирования, освещения, пожаротушения, безопасности, видеонаблюдения, контроля доступа"
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
        "telephone": pageData.contacts?.phone1 || "+7 (499) 113-36-60",
        "contactType": "customer service",
        "areaServed": "RU",
        "availableLanguage": "Russian"
      },
      {
        "@type": "ContactPoint",
        "telephone": pageData.contacts?.phone2 || "+7 (495) 487-43-53",
        "contactType": "sales",
        "areaServed": "RU",
        "availableLanguage": "Russian"
      },
      {
        "@type": "ContactPoint",
        "telephone": pageData.contacts?.phone1 || "+7 (499) 113-36-60",
        "contactType": "industrial sales",
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
        "name": "Промышленные шатры с широким пролетом",
        "item": "https://mobile-tent.ru/shatry-i-navesy/promyshlennye"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": pageData.page?.name || "Большой шатер 15х35 — 525 м²",
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

  // ----- FAQ SCHEMA (customized for большой шатер 15х35 промышленного класса) -----
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Какие размеры у промышленного шатра 15х35 с широким пролетом?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Промышленный шатер имеет увеличенную ширину пролета 15 метров без промежуточных опор, длину 35 метров, высоту в коньке до 8.0 метров, высоту стен до 5.0 метров. Полезная площадь — ${area} м². Это масштабный шатер премиум-класса с тройной системой опор, идеально подходящий для проведения крупнейших мероприятий и промышленных объектов, где требуется максимальное свободное пространство.`
        }
      },
      {
        "@type": "Question",
        "name": `В чем преимущество тройной системы опор для шатра 15х35?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Тройная система опор с усиленными фермами обеспечивает: максимальную надежность при экстремальных нагрузках, возможность установки тяжелого промышленного оборудования, увеличенную снеговую нагрузку до 250 кг/м², повышенную ветроустойчивость до 160 км/ч, возможность использования кранового оборудования, долговечность более 25 лет, сохранение геометрии при любых погодных условиях.`
        }
      },
      {
        "@type": "Question",
        "name": `Сколько человек вмещает большой шатер 15х35?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `В большом шатре 15х35 площадью 525 м² можно разместить: до 550 гостей с банкетными столами, до 800 человек на фуршете, до 500 посадочных мест в ресторане, полноценную концертную площадку с профессиональной сценой и зрительным залом на 600-700 мест, международную выставку с десятками стендов, спортивные соревнования с трибунами для зрителей.`
        }
      },
      {
        "@type": "Question",
        "name": `Сколько стоит промышленный шатер 15х35 с широким пролетом?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Цена зависит от комплектации и промышленного оснащения: базовая — от ${prices[0]?.toLocaleString() || '672 000'} ₽, средняя с промышленным усилением — от ${prices[1]?.toLocaleString() || '832 000'} ₽, максимальная с полным промышленным оснащением — от ${prices[2]?.toLocaleString() || '992 000'} ₽. Для промышленных шатров доступны специальные комплектации с тройной системой опор, усиленными фермами, промышленным отоплением, вентиляцией, грузоподъемным оборудованием. Доставка по России рассчитывается индивидуально.`
        }
      },
      {
        "@type": "Question",
        "name": "Для каких целей подходит промышленный шатер 15х35?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Промышленный шатер 15х35 идеально подходит для: международных выставок и экспо-форумов, крупнейших свадеб (до 550 гостей), корпоративных мероприятий, концертных площадок, фестивалей, спортивных соревнований международного уровня, промышленных объектов, складских комплексов, логистических центров, производственных цехов, ангаров для крупной техники, авиационных ангаров, сельскохозяйственных комплексов, автосалонов, торговых центров, выставочных павильонов, конференц-залов, кинопавильонов."
        }
      },
      {
        "@type": "Question",
        "name": "Какая гарантия на промышленный шатер 15х35?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Гарантия от производителя — 5 лет на каркас и тент. Срок службы при правильной эксплуатации — более 25-30 лет благодаря промышленной усиленной конструкции с тройной системой опор. Алюминиевый каркас с антикоррозийным покрытием устойчив к агрессивным средам, промышленная ПВХ ткань плотностью 900-1100 г/м² имеет повышенную износостойкость, маслобензостойкость, огнеупорность."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли установить крановое оборудование в шатре 15х35?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, промышленная конструкция с тройной системой опор и усиленными фермами позволяет установить крановое оборудование: мостовые краны грузоподъемностью до 5 тонн, кран-балки, тельферы, подвесные системы. Возможна интеграция грузоподъемного оборудования в конструкцию шатра с усилением несущих элементов. Проектируется индивидуально под задачи заказчика."
        }
      },
      {
        "@type": "Question",
        "name": "Какая максимальная снеговая нагрузка для шатра 15х35?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Промышленный шатер 15х35 с тройной системой опор выдерживает снеговую нагрузку до 250 кг/м² благодаря усиленной системе ферм, тройным опорам и специальной геометрии кровли. Для регионов с экстремальными снеговыми нагрузками (северные регионы, Урал, Сибирь) доступна версия с максимальным усилением и увеличенным углом наклона кровли."
        }
      },
      {
        "@type": "Question",
        "name": "Какой срок изготовления и монтажа промышленного шатра 15х35?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Стандартный срок изготовления промышленного шатра 15х35 с тройной системой опор — от 15 до 20 рабочих дней. Для срочных заказов возможна ускоренная сборка за 10-12 дней. Монтаж на объекте занимает 3-5 дней бригадой профессиональных установщиков с использованием спецтехники (автовышки, краны 25-50 тонн). Возможен шеф-монтаж под руководством наших специалистов."
        }
      },
      {
        "@type": "Question",
        "name": "Нужно ли разрешение на установку промышленного шатра 15х35?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Для промышленных объектов и крупных сооружений площадью более 500 м² требуется получение разрешительной документации, экспертизы промышленной безопасности, согласование с надзорными органами. Для временных сооружений на частных территориях разрешение не требуется. Наша компания предоставляет полный комплекс услуг по проектированию, получению разрешений, разработке конструкторской документации, прохождению экспертизы."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли использовать шатер 15х35 как ангар для самолетов или вертолетов?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, промышленный шатер 15х35 с высотой в коньке до 8 метров и широким пролетом 15 метров подходит для использования в качестве ангара для малой авиации: легких самолетов, вертолетов, бизнес-джетов, беспилотников. Возможна установка специальных ворот для авиационной техники, систем обогрева, освещения, противопожарной безопасности. Конструкция может быть усилена для защиты от ветровых нагрузок на открытых площадках."
        }
      },
      {
        "@type": "Question",
        "name": "Какие инженерные системы можно установить в промышленном шатре 15х35?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "В промышленном шатре 15х35 возможна установка полного комплекса инженерных систем: промышленное отопление (воздушное, водяное, инфракрасное), промышленная вентиляция и кондиционирование, приточно-вытяжная вентиляция с рекуперацией, промышленное освещение (LED, прожекторное, аварийное), системы пожаротушения (спринклерные, порошковые, газовые), системы безопасности и видеонаблюдения, контроля доступа, охранной сигнализации, автоматизации производственных процессов."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли использовать шатер 15х35 как выставочный павильон?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, шатер 15х35 с широким пролетом идеально подходит для использования в качестве выставочного павильона международного уровня. Отсутствие промежуточных опор позволяет разместить выставочные стенды любых размеров, организовать удобную навигацию, создать презентационные зоны, конференц-залы, VIP-лаунжи. Возможно зонирование пространства, установка перегородок, создание многоуровневых стендов, подвесных конструкций для брендирования."
        }
      },
      {
        "@type": "Question",
        "name": "Какой фундамент нужен для промышленного шатра 15х35?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Для промышленного шатра 15х35 требуется капитальное основание повышенной прочности: железобетонная плита с расчетом на нагрузки, монолитный фундамент, буронабивные сваи, винтовые сваи большого диаметра. Обязательно проведение геодезических изысканий, расчетов несущей способности грунта, проектирования фундамента с учетом нагрузок от конструкции и промышленного оборудования. Возможна установка на существующие бетонные основания после проверки их несущей способности."
        }
      },
      {
        "@type": "Question",
        "name": "Доставляете ли промышленные шатры 15х35 в регионы России и СНГ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, доставляем промышленные шатры 15х35 по всей России и в страны СНГ: Москва, Санкт-Петербург, все регионы Центрального, Приволжского, Южного, Уральского, Сибирского, Дальневосточного федеральных округов. Возможна отправка железнодорожным транспортом, автомобильным транспортом, мультимодальные перевозки. Осуществляем доставку в Казахстан, Беларусь, другие страны СНГ. Стоимость доставки рассчитывается индивидуально. Возможен выезд наших специалистов для шеф-монтажа в любой регион."
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
        "ratingValue": "4.9",
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
        {pageData.seo?.h1 || "Большой шатер 15х35 — 525 м²"}
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