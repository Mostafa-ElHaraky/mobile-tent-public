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
const PAGE_CODE = "bolshoy-shater-20h20";

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
        id: 205,
        name: "Большой шатер 20х20 — 400 м²",
        code: PAGE_CODE
      },
      seo: {
        title: "Большой шатер 20х20 (400 м²) – купить в Москве с доставкой: цена в интернет-магазине Mobile Tent",
        description: "Большой квадратный шатер 20х20 (400 м²) – купить в Москве под заказ в компании Mobile Tent. Уникальный квадратный шатер премиум-класса площадью 400 квадратных метров с пролетом 20х20 метров создает идеальное симметричное пространство для проведения мероприятий любого формата. Квадратная форма позволяет максимально эффективно использовать площадь, создавать центральные композиции, размещать сцену по центру, организовывать круговые банкеты, выставочные стенды, спортивные площадки. Усиленная конструкция с перекрестной системой опор и диагональными фермами обеспечивает максимальную надежность и равномерное распределение нагрузок. Вы можете выбрать любую комплектацию, размер и цвет изделия, а также заказать его брендирование. Мы используем только качественные и долговечные материалы, а также предлагаем адекватные цены, которые будут дешевле долгосрочный аренды! Гарантия от производителя — 5 лет.",
        keywords: "большой шатер 20х20, шатер 20 на 20, купить большой шатер 20х20, шатер 400 м2, квадратный шатер, большой квадратный шатер, шатер для мероприятий, шатер для свадьбы, шатер для выставки, шатер для склада, шатер премиум-класса, симметричный шатер, тентовый шатер большой, быстровозводимый шатер большой, большой арочный шатер, шатер для фестиваля, шатер для концерта, шатер для форума, шатер для экспо, шатер квадратной формы",
        h1: "Большой квадратный шатер 20х20 — 400 м²",
        url: `/tent/bolshoy-shater-20h20`
      },
      content: {
        desktop: '',
        mobile: ''
      },
      priceConfigurations: [
        {
          name: "Базовая",
          isActive: true,
          currentPrice: 592000,
          originalPrice: 592000,
          discount: 0,
          description: "Базовая комплектация квадратного шатра с перекрестной системой опор"
        },
        {
          name: "Средняя",
          isActive: false,
          currentPrice: 752000,
          originalPrice: 752000,
          discount: 0,
          description: "Средняя комплектация с усиленными диагональными фермами"
        },
        {
          name: "Максимальная",
          isActive: false,
          currentPrice: 912000,
          originalPrice: 912000,
          discount: 0,
          description: "Максимальная комплектация с премиальным оснащением и центральной конструкцией"
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
  const seoTitle = data.seo?.title || "Большой квадратный шатер 20х20 (400 м²) – купить в Москве с доставкой: цена в интернет-магазине Mobile Tent";
  const seoDescription = data.seo?.description || "Большой квадратный шатер 20х20 (400 м²) – купить в Москве под заказ в компании Mobile Tent. Уникальный квадратный шатер премиум-класса площадью 400 квадратных метров с пролетом 20х20 метров создает идеальное симметричное пространство для проведения мероприятий любого формата. Квадратная форма позволяет максимально эффективно использовать площадь, создавать центральные композиции, размещать сцену по центру, организовывать круговые банкеты, выставочные стенды, спортивные площадки. Усиленная конструкция с перекрестной системой опор и диагональными фермами обеспечивает максимальную надежность и равномерное распределение нагрузок. Вы можете выбрать любую комплектацию, размер и цвет изделия, а также заказать его брендирование. Мы используем только качественные и долговечные материалы, а также предлагаем адекватные цены, которые будут дешевле долгосрочный аренды! Гарантия от производителя — 5 лет.";
  const seoKeywords = data.seo?.keywords || "большой шатер 20х20, шатер 20 на 20, купить большой шатер 20х20, шатер 400 м2, квадратный шатер, большой квадратный шатер, шатер для мероприятий, шатер для свадьбы, шатер для выставки, шатер для склада, шатер премиум-класса, симметричный шатер, тентовый шатер большой, быстровозводимый шатер большой, большой арочный шатер, шатер для фестиваля, шатер для концерта, шатер для форума, шатер для экспо, шатер квадратной формы";
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
          alt: 'Большой квадратный шатер 20х20 - 400 м² симметричный шатер от производителя MOBILE TENT'
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
export default async function Bolshoy_Shatyor_20x20_Page() {
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

  // ----- LOCAL BUSINESS with GEO targeting (expanded for square tent) -----
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "MOBILE TENT",
    "image": "https://mobile-tent.ru/10x30,1.webp",
    "url": "https://mobile-tent.ru",
    "telephone": pageData.contacts?.phone1 || "+7 (499) 113-36-60",
    "email": pageData.contacts?.email || "info@mobile-tent.ru",
    "priceRange": "₽₽₽",
    "description": "Производство и продажа больших квадратных шатров, симметричных тентовых конструкций и быстровозводимых сооружений премиум-класса в Москве и Московской области для мероприятий и промышленных объектов.",
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

  // ----- PRODUCT SCHEMA (specific to this квадратный шатер 20х20) -----
  // Determine price range from configurations with proper typing
  const prices: number[] = pageData.priceConfigurations?.map((c: PriceConfiguration) => c.currentPrice) || [592000, 752000, 912000];
  const lowPrice = Math.min(...prices);
  const highPrice = Math.max(...prices);
  const offerCount = pageData.priceConfigurations?.length || 3;

  // Calculate dimensions for this specific size
  const width = 20;
  const length = 20;
  const area = 400; // 400 m²
  const ridgeHeight = "до 8.0 м";
  const wallHeight = "до 5.0 м";

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "image": "https://mobile-tent.ru/10x30,1.webp",
    "name": pageData.page?.name || "Большой квадратный шатер 20х20 — 400 м²",
    "description": pageData.seo?.description || "Большой квадратный шатер 20х20 (400 м²) – купить в Москве под заказ в компании Mobile Tent. Уникальный квадратный шатер премиум-класса площадью 400 квадратных метров с пролетом 20х20 метров создает идеальное симметричное пространство для проведения мероприятий любого формата. Квадратная форма позволяет максимально эффективно использовать площадь, создавать центральные композиции, размещать сцену по центру, организовывать круговые банкеты, выставочные стенды, спортивные площадки. Усиленная конструкция с перекрестной системой опор и диагональными фермами обеспечивает максимальную надежность.",
    "sku": `MOB-${PAGE_CODE}`,
    "mpn": `MOB-SQUARE-20x20-400`,
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
      "areaServed": ["Москва", "Московская область", "Россия"],
      "url": `https://mobile-tent.ru${pageData.seo?.url || `/tent/${PAGE_CODE}`}`
    },
    "material": "Усиленный алюминиевый каркас, ПВХ ткань 850-1000 г/м²",
    "category": "Квадратные шатры премиум-класса",
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Ширина",
        "value": `${width} м`
      },
      {
        "@type": "PropertyValue",
        "name": "Длина",
        "value": `${length} м (квадратная форма)`
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
        "value": "Квадратный арочный шатер с перекрестной системой опор и диагональными фермами"
      },
      {
        "@type": "PropertyValue",
        "name": "Каркас",
        "value": "Усиленный алюминиевый профиль с антикоррозийным покрытием, перекрестная система опор, диагональные фермы, дополнительные элементы жесткости, система внутренних растяжек, центральный узел усиления"
      },
      {
        "@type": "PropertyValue",
        "name": "Тент",
        "value": "ПВХ ткань, плотность 850-1000 г/м², с УФ-защитой, огнеупорная, водоотталкивающая, усиленная в зонах повышенной нагрузки, с диагональными швами для квадратной формы"
      },
      {
        "@type": "PropertyValue",
        "name": "Ветровая нагрузка",
        "value": "до 130 км/ч (с дополнительным креплением до 150 км/ч)"
      },
      {
        "@type": "PropertyValue",
        "name": "Снеговая нагрузка",
        "value": "до 220 кг/м²"
      },
      {
        "@type": "PropertyValue",
        "name": "Температурный режим",
        "value": "от -50 до +75°C"
      },
      {
        "@type": "PropertyValue",
        "name": "Количество опор",
        "value": "Перекрестная система опор по периметру и диагональные фермы для равномерного распределения нагрузок"
      },
      {
        "@type": "PropertyValue",
        "name": "Назначение",
        "value": "Крупные мероприятия, свадьбы (до 450 гостей), корпоративы, выставки, спортивные соревнования (волейбол, баскетбол, гимнастика), фестивали, концерты, форумы, экспо-центры, склады, торговые комплексы, логистические центры, производственные помещения, ангары, шоу-румы, презентационные залы"
      },
      {
        "@type": "PropertyValue",
        "name": "Вместимость",
        "value": "до 450 гостей с банкетными столами, до 700 человек на фуршете, до 400 посадочных мест в ресторане, центральная сцена с круговым расположением зрителей"
      },
      {
        "@type": "PropertyValue",
        "name": "Особенности квадратной формы",
        "value": "Идеальная симметрия, возможность центрального расположения сцены, круговые банкеты, равномерное распределение пространства, оптимальная организация выставочных стендов, панорамный обзор со всех сторон"
      },
      {
        "@type": "PropertyValue",
        "name": "Возможность зонирования",
        "value": "Да, возможно создание симметричных зон, центральной композиции, радиального зонирования, квадратных модулей"
      },
      {
        "@type": "PropertyValue",
        "name": "Освещение",
        "value": "Возможность установки центральной люстры, симметричного освещения, прожекторов по периметру, сценического света"
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
        "name": "Квадратные шатры",
        "item": "https://mobile-tent.ru/shatry-i-navesy/kvadratnye"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": pageData.page?.name || "Большой квадратный шатер 20х20 — 400 м²",
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

  // ----- FAQ SCHEMA (customized for квадратный шатер 20х20) -----
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Какие размеры у квадратного шатра 20х20?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Квадратный шатер имеет идеально симметричные размеры: ширина 20 метров, длина 20 метров, высоту в коньке до 8.0 метров, высоту стен до 5.0 метров. Полезная площадь — ${area} м². Это уникальная квадратная конструкция с перекрестной системой опор и диагональными фермами, создающая идеальное пространство для мероприятий, где важна симметрия и равномерное распределение пространства.`
        }
      },
      {
        "@type": "Question",
        "name": `В чем преимущество квадратной формы шатра 20х20?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Квадратная форма 20х20 дает уникальные преимущества: идеальная симметрия пространства, возможность центрального расположения сцены с круговым обзором, организация круговых банкетов, равномерное распределение выставочных стендов, оптимальная вместимость при минимальном периметре стен, панорамный обзор со всех сторон, возможность создания центральных композиций, люстр, инсталляций, равномерное освещение всего пространства.`
        }
      },
      {
        "@type": "Question",
        "name": `Сколько человек вмещает квадратный шатер 20х20?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `В квадратном шатре 20х20 площадью 400 м² можно разместить: до 450 гостей с банкетными столами, до 700 человек на фуршете, до 400 посадочных мест в ресторане, центральную сцену с круговым расположением зрителей на 400-500 мест, выставочные стенды по периметру с центральной зоной, спортивную площадку с трибунами, несколько функциональных зон в симметричном расположении.`
        }
      },
      {
        "@type": "Question",
        "name": `Сколько стоит квадратный шатер 20х20?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Цена зависит от комплектации и оснащения: базовая с перекрестной системой опор — от ${prices[0]?.toLocaleString() || '592 000'} ₽, средняя с диагональными фермами — от ${prices[1]?.toLocaleString() || '752 000'} ₽, максимальная с премиальным оснащением — от ${prices[2]?.toLocaleString() || '912 000'} ₽. Для квадратных шатров доступны специальные комплектации с центральным усилением, симметричным освещением, круговыми конструкциями. Доставка по Москве и области рассчитывается индивидуально.`
        }
      },
      {
        "@type": "Question",
        "name": "Для каких мероприятий идеально подходит квадратный шатер 20х20?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Квадратный шатер 20х20 идеально подходит для: свадеб с круговой рассадкой, юбилеев, корпоративных мероприятий, выставок и экспо-форумов, презентаций, шоу-румов, спортивных соревнований (волейбол, баскетбол, гимнастика, единоборства), концертов с центральной сценой, театральных постановок, цирковых представлений, fashion-показов, конференций, форумов, банкетов, фуршетов, детских праздников, новогодних ёлок."
        }
      },
      {
        "@type": "Question",
        "name": "Какая гарантия на квадратный шатер 20х20?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Гарантия от производителя — 5 лет на каркас и тент. Срок службы при правильной эксплуатации — более 25 лет благодаря усиленной квадратной конструкции с перекрестной системой опор и диагональными фермами. Алюминиевый каркас с антикоррозийным покрытием, ПВХ ткань плотностью 850-1000 г/м² с усилением в диагональных направлениях."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли установить сцену по центру квадратного шатра?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, квадратная форма идеально подходит для центрального расположения сцены. Благодаря отсутствию центральных опор (при соответствующей комплектации) можно создать круговой обзор сцены со всех сторон, организовать амфитеатр, разместить зрителей по периметру. Возможна установка вращающейся сцены, подиумов, подиумов-подиумов. Центральное расположение обеспечивает отличную видимость и акустику."
        }
      },
      {
        "@type": "Question",
        "name": "Какая ветровая и снеговая нагрузка для квадратного шатра 20х20?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Квадратный шатер 20х20 с перекрестной системой опор выдерживает ветровую нагрузку до 130 км/ч. С дополнительным креплением и усиленными диагональными фермами — до 150 км/ч. Снеговая нагрузка — до 220 кг/м² благодаря равномерному распределению нагрузок через диагональные фермы и перекрестную систему опор. Квадратная форма обеспечивает оптимальную аэродинамику и сопротивление ветровым нагрузкам."
        }
      },
      {
        "@type": "Question",
        "name": "Как организовать освещение в квадратном шатре 20х20?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Квадратная форма позволяет создать уникальные световые решения: центральная люстра или световая инсталляция, симметричное освещение по периметру, диагональные световые лучи, квадратные световые зоны, прожекторное освещение с четырех сторон, RGB-подсветка по контуру, сценический свет с четырех направлений. Возможна установка подвесных конструкций, светодиодных экранов, медиа-фасадов."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли использовать квадратный шатер 20х20 как выставочный павильон?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, квадратный шатер 20х20 идеально подходит для выставочных павильонов. Симметричная форма позволяет оптимально организовать выставочное пространство: разместить стенды по периметру с центральной зоной для презентаций, создать квадратную сетку проходов, организовать тематические зоны, установить информационные стенды. Равномерное освещение и отсутствие «мертвых зон» делает квадратную форму наиболее эффективной для выставок."
        }
      },
      {
        "@type": "Question",
        "name": "Какой срок изготовления и монтажа квадратного шатра 20х20?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Стандартный срок изготовления квадратного шатра 20х20 с перекрестной системой опор — от 12 до 18 рабочих дней. Для срочных заказов возможна ускоренная сборка за 7-10 дней. Монтаж на объекте занимает 2-4 дня бригадой профессиональных установщиков. Квадратная форма требует точной разметки и геодезического контроля при монтаже."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли разделить квадратный шатер 20х20 на зоны?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, квадратный шатер можно разделить на различные конфигурации зон: квадратные модули 10х10, прямоугольные зоны, крестообразное деление, радиальное зонирование от центра, зоны по периметру с центральным пространством. Возможно создание центрального атриума с зонами по углам, переговорных, VIP-лож, выставочных секторов. Симметричное зонирование создает гармоничное пространство."
        }
      },
      {
        "@type": "Question",
        "name": "Какой фундамент нужен для квадратного шатра 20х20?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Для квадратного шатра 20х20 требуется ровное основание с точной геометрией: бетонная плита, асфальтированная площадка, утрамбованный грунт с геотекстилем, деревянный настил, фундаментные блоки с точным позиционированием. Важно обеспечить прямоугольность углов 90 градусов и диагональное равенство. Для капитального использования рекомендуется монолитный фундамент с учетом нагрузок от квадратной конструкции."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли использовать квадратный шатер 20х20 для спортивных соревнований?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, квадратная форма 20х20 метров идеально подходит для многих видов спорта: волейбол (площадка 9х18 м), баскетбол (тренировочная площадка), гимнастика, единоборства (можно разместить несколько татами одновременно), фитнес-зоны, аэробика, йога, танцевальные соревнования, бадминтон, настольный теннис. Возможна установка профессионального спортивного покрытия, трибун с четырех сторон, раздевалок."
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
        {pageData.seo?.h1 || "Большой квадратный шатер 20х20 — 400 м²"}
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