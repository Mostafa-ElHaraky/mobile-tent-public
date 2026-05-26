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
const PAGE_CODE = "bolshoy-shater-15h25";

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
        id: 203,
        name: "Большой шатер 15х25 — 375 м²",
        code: PAGE_CODE
      },
      seo: {
        title: "Большой шатер 15х25 (375 м²) – купить в Москве с доставкой: цена в интернет-магазине Mobile Tent",
        description: "Большой шатер 15х25 (375 м²) – купить в Москве под заказ в компании Mobile Tent. Просторный шатер премиум-класса площадью 375 квадратных метров с увеличенной шириной 15 метров идеально подходит для проведения масштабных мероприятий: крупных свадеб, корпоративов, выставок, спортивных соревнований, фестивалей, концертов, складов и торговых комплексов. Увеличенный пролет 15 метров позволяет создавать уникальные планировочные решения, размещать сцену, несколько функциональных зон, выставочное оборудование. Усиленная конструкция с двойной системой опор обеспечивает максимальную надежность при любых погодных условиях. Вы можете выбрать любую комплектацию, размер и цвет изделия, а также заказать его брендирование. Мы используем только качественные и долговечные материалы, а также предлагаем адекватные цены, которые будут дешевле долгосрочный аренды! Гарантия от производителя — 5 лет.",
        keywords: "большой шатер 15х25, шатер 15 на 25, купить большой шатер 15х25, шатер 375 м2, большой шатер для мероприятий, большой шатер для свадьбы, большой шатер для выставки, большой шатер для склада, шатер премиум-класса, просторный шатер, шатер с широким пролетом, тентовый шатер большой, быстровозводимый шатер большой, большой арочный шатер, шатер для фестиваля, шатер для концерта, шатер для форума",
        h1: "Большой шатер 15х25 — 375 м²",
        url: `/tent/bolshoy-shater-15h25`
      },
      content: {
        desktop: '',
        mobile: ''
      },
      priceConfigurations: [
        {
          name: "Базовая",
          isActive: true,
          currentPrice: 532000,
          originalPrice: 532000,
          discount: 0,
          description: "Базовая комплектация включает основные элементы конструкции с широким пролетом"
        },
        {
          name: "Средняя",
          isActive: false,
          currentPrice: 672000,
          originalPrice: 672000,
          discount: 0,
          description: "Средняя комплектация с дополнительными опциями и усилением"
        },
        {
          name: "Максимальная",
          isActive: false,
          currentPrice: 812000,
          originalPrice: 812000,
          discount: 0,
          description: "Максимальная комплектация со всеми доступными опциями и премиальным оснащением"
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
  const seoTitle = data.seo?.title || "Большой шатер 15х25 (375 м²) – купить в Москве с доставкой: цена в интернет-магазине Mobile Tent";
  const seoDescription = data.seo?.description || "Большой шатер 15х25 (375 м²) – купить в Москве под заказ в компании Mobile Tent. Просторный шатер премиум-класса площадью 375 квадратных метров с увеличенной шириной 15 метров идеально подходит для проведения масштабных мероприятий: крупных свадеб, корпоративов, выставок, спортивных соревнований, фестивалей, концертов, складов и торговых комплексов. Увеличенный пролет 15 метров позволяет создавать уникальные планировочные решения, размещать сцену, несколько функциональных зон, выставочное оборудование. Усиленная конструкция с двойной системой опор обеспечивает максимальную надежность при любых погодных условиях. Вы можете выбрать любую комплектацию, размер и цвет изделия, а также заказать его брендирование. Мы используем только качественные и долговечные материалы, а также предлагаем адекватные цены, которые будут дешевле долгосрочный аренды! Гарантия от производителя — 5 лет.";
  const seoKeywords = data.seo?.keywords || "большой шатер 15х25, шатер 15 на 25, купить большой шатер 15х25, шатер 375 м2, большой шатер для мероприятий, большой шатер для свадьбы, большой шатер для выставки, большой шатер для склада, шатер премиум-класса, просторный шатер, шатер с широким пролетом, тентовый шатер большой, быстровозводимый шатер большой, большой арочный шатер, шатер для фестиваля, шатер для концерта, шатер для форума";
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
          alt: 'Большой шатер 15х25 - 375 м² просторный шатер с широким пролетом от производителя MOBILE TENT'
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
export default async function Bolshoy_Shatyor_15x25_Page() {
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

  // ----- LOCAL BUSINESS with GEO targeting (expanded for big tent) -----
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "MOBILE TENT",
    "image": "https://mobile-tent.ru/10x30,1.webp",
    "url": "https://mobile-tent.ru",
    "telephone": pageData.contacts?.phone1 || "+7 (499) 113-36-60",
    "email": pageData.contacts?.email || "info@mobile-tent.ru",
    "priceRange": "₽₽₽",
    "description": "Производство и продажа больших шатров с широким пролетом, тентовых конструкций и быстровозводимых сооружений премиум-класса в Москве и Московской области для масштабных мероприятий и промышленных объектов.",
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
      { "@type": "City", "name": "Смоленск" }
    ],
    "hasMap": officePlace.hasMap,
    "openingHoursSpecification": officePlace.openingHoursSpecification,
    "sameAs": [
      pageData.contacts?.telegram || "https://t.me/+79770893996?start=14594990928",
      pageData.contacts?.whatsapp ? `https://wa.me/${pageData.contacts.whatsapp.replace(/[^0-9]/g, '')}` : "https://wa.me/79805109568"
    ]
  };

  // ----- PRODUCT SCHEMA (specific to this большой шатер 15х25) -----
  // Determine price range from configurations with proper typing
  const prices: number[] = pageData.priceConfigurations?.map((c: PriceConfiguration) => c.currentPrice) || [532000, 672000, 812000];
  const lowPrice = Math.min(...prices);
  const highPrice = Math.max(...prices);
  const offerCount = pageData.priceConfigurations?.length || 3;

  // Calculate dimensions for this specific size
  const width = 15;
  const length = 25;
  const area = 375; // 375 m²
  const ridgeHeight = "до 7.0 м";
  const wallHeight = "до 4.0 м";

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "image": "https://mobile-tent.ru/10x30,1.webp",
    "name": pageData.page?.name || "Большой шатер 15х25 — 375 м²",
    "description": pageData.seo?.description || "Большой шатер 15х25 (375 м²) – купить в Москве под заказ в компании Mobile Tent. Просторный шатер премиум-класса площадью 375 квадратных метров с увеличенной шириной 15 метров идеально подходит для проведения масштабных мероприятий: крупных свадеб, корпоративов, выставок, спортивных соревнований, фестивалей, концертов, складов и торговых комплексов. Увеличенный пролет 15 метров позволяет создавать уникальные планировочные решения, размещать сцену, несколько функциональных зон, выставочное оборудование. Усиленная конструкция с двойной системой опор обеспечивает максимальную надежность при любых погодных условиях.",
    "sku": `MOB-${PAGE_CODE}`,
    "mpn": `MOB-BIG-15x25-375`,
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
    "material": "Усиленный алюминиевый каркас, ПВХ ткань 750-900 г/м²",
    "category": "Большие шатры с широким пролетом премиум-класса",
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Ширина пролета",
        "value": `${width} м (увеличенный широкий пролет)`
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
        "value": "Большой арочный шатер с широким пролетом и двойной системой опор"
      },
      {
        "@type": "PropertyValue",
        "name": "Каркас",
        "value": "Усиленный алюминиевый профиль с антикоррозийным покрытием, двойная система опор, усиленные фермы, дополнительные элементы жесткости, система внутренних растяжек"
      },
      {
        "@type": "PropertyValue",
        "name": "Тент",
        "value": "ПВХ ткань, плотность 750-900 г/м², с УФ-защитой, огнеупорная, водоотталкивающая, усиленная в зонах повышенной нагрузки"
      },
      {
        "@type": "PropertyValue",
        "name": "Ветровая нагрузка",
        "value": "до 120 км/ч (с дополнительным креплением до 140 км/ч)"
      },
      {
        "@type": "PropertyValue",
        "name": "Снеговая нагрузка",
        "value": "до 200 кг/м²"
      },
      {
        "@type": "PropertyValue",
        "name": "Температурный режим",
        "value": "от -50 до +70°C"
      },
      {
        "@type": "PropertyValue",
        "name": "Количество опор",
        "value": "Двойная система опор с шагом 3-4 метра, усиленные несущие фермы"
      },
      {
        "@type": "PropertyValue",
        "name": "Назначение",
        "value": "Масштабные мероприятия, крупные свадьбы (до 400 гостей), корпоративы, выставки, спортивные соревнования (волейбол, баскетбол, мини-футбол, теннис), фестивали, концерты, склады, торговые комплексы, логистические центры, производственные помещения, ангары, укрытия для крупной техники, сельскохозяйственные объекты, конференц-залы, форумы"
      },
      {
        "@type": "PropertyValue",
        "name": "Вместимость",
        "value": "до 400 гостей с банкетными столами, до 600 человек на фуршете, до 350 посадочных мест в ресторане, полноценная сцена с зрительным залом"
      },
      {
        "@type": "PropertyValue",
        "name": "Возможность зонирования",
        "value": "Да, возможно разделение на отдельные зоны перегородками, создание нескольких залов, антресолей, VIP-лож"
      },
      {
        "@type": "PropertyValue",
        "name": "Освещение",
        "value": "Возможность установки профессиональных систем освещения, люстр, прожекторов, сценического света, архитектурной подсветки"
      },
      {
        "@type": "PropertyValue",
        "name": "Отопление",
        "value": "Возможность установки промышленных систем отопления, тепловых пушек, инфракрасных обогревателей, водяного отопления"
      },
      {
        "@type": "PropertyValue",
        "name": "Вентиляция и кондиционирование",
        "value": "Возможность установки промышленных систем вентиляции, кондиционирования, приточной вентиляции, климат-контроля"
      },
      {
        "@type": "PropertyValue",
        "name": "Звукоизоляция и акустика",
        "value": "Опция профессиональной звукоизоляции и акустической обработки для проведения мероприятий"
      },
      {
        "@type": "PropertyValue",
        "name": "Пол",
        "value": "Возможность установки различных типов пола: деревянный настил, модульный пол, профессиональное покрытие, спортивный паркет, танцевальное покрытие"
      },
      {
        "@type": "PropertyValue",
        "name": "Сцена",
        "value": "Возможность установки профессиональной сцены различных размеров, подиумов"
      },
      {
        "@type": "PropertyValue",
        "name": "Особенности",
        "value": "Увеличенный пролет 15 метров без промежуточных опор, двойная система опор по периметру, возможность установки кранового оборудования"
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
        "name": "Большие шатры с широким пролетом",
        "item": "https://mobile-tent.ru/shatry-i-navesy/bolshie-shirokie"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": pageData.page?.name || "Большой шатер 15х25 — 375 м²",
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

  // ----- FAQ SCHEMA (customized for большой шатер 15х25 с широким пролетом) -----
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Какие размеры у большого шатра 15х25 с широким пролетом?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Большой шатер имеет увеличенную ширину пролета 15 метров, длину 25 метров, высоту в коньке до 7.0 метров, высоту стен до 4.0 метров. Полезная площадь — ${area} м². Это просторный шатер премиум-класса с широким пролетом без промежуточных опор, идеально подходящий для проведения масштабных мероприятий, где требуется максимальное свободное пространство: крупных свадеб, корпоративов, выставок, спортивных соревнований, концертов.`
        }
      },
      {
        "@type": "Question",
        "name": `В чем преимущество широкого пролета 15 метров?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Широкий пролет 15 метров без промежуточных опор позволяет: создавать уникальные планировочные решения, размещать профессиональную сцену любого размера, устанавливать выставочное оборудование, проводить спортивные соревнования (волейбол, баскетбол, теннис), организовывать концерты с полноценной сценой и зрительным залом, размещать крупногабаритную технику, создавать несколько функциональных зон без ограничений. Это идеальное решение для мероприятий, где важно максимальное свободное пространство.`
        }
      },
      {
        "@type": "Question",
        "name": `Сколько человек вмещает большой шатер 15х25?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `В большом шатре 15х25 площадью 375 м² можно разместить: до 400 гостей с банкетными столами, до 600 человек на фуршете, до 350 посадочных мест в ресторане, полноценную сцену с зрительным залом на 300-400 мест, выставочные стенды, спортивную площадку, несколько функциональных зон одновременно.`
        }
      },
      {
        "@type": "Question",
        "name": `Сколько стоит большой шатер 15х25 с широким пролетом?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Цена зависит от комплектации: базовая — от ${prices[0]?.toLocaleString() || '532 000'} ₽, средняя — от ${prices[1]?.toLocaleString() || '672 000'} ₽, максимальная — от ${prices[2]?.toLocaleString() || '812 000'} ₽. Для шатров с широким пролетом доступны специальные комплектации с усиленным каркасом, двойной системой опор, промышленным отоплением, профессиональным освещением, вентиляцией, звукоизоляцией, брендированием. Доставка по Москве и области рассчитывается индивидуально.`
        }
      },
      {
        "@type": "Question",
        "name": "Для каких мероприятий подходит большой шатер 15х25 с широким пролетом?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Большой шатер 15х25 с широким пролетом идеально подходит для: масштабных свадеб (до 400 гостей), корпоративных мероприятий, выставок и ярмарок, спортивных соревнований (волейбол, баскетбол, мини-футбол, теннис, бадминтон), фестивалей и концертов, складских помещений, торговых комплексов, логистических центров, производственных цехов, ангаров для крупной техники, ресторанов под открытым небом, летних кафе, кинопоказов, театральных постановок, конференций, форумов, презентаций, шоу-румов."
        }
      },
      {
        "@type": "Question",
        "name": "Какая гарантия на большой шатер 15х25 с широким пролетом?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Гарантия от производителя — 5 лет на каркас и тент. Срок службы при правильной эксплуатации — более 25 лет благодаря усиленной конструкции премиум-класса с широким пролетом и двойной системой опор. Алюминиевый каркас устойчив к коррозии, ПВХ ткань защищена от УФ-излучения, имеет огнеупорные свойства и повышенную износостойкость в зонах повышенной нагрузки."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли установить профессиональную сцену в шатре 15х25?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, широкий пролет 15 метров позволяет установить профессиональную сцену различных размеров: от компактной до полноценной концертной сцены шириной до 12-14 метров. Возможна установка сцены с глубиной 6-8 метров, подиумов, подиумов для оркестра. Конструкция шатра позволяет разместить профессиональное сценическое оборудование, свет, звук, видеоэкраны, декорации."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли использовать шатер 15х25 для спортивных мероприятий?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, широкий пролет 15 метров идеально подходит для проведения спортивных мероприятий. В шатре можно разместить: волейбольную площадку (9х18 м), баскетбольную площадку для тренировок, площадку для мини-футбола, теннисный корт, бадминтон, гимнастику, единоборства, фитнес-зоны. Возможна установка профессионального спортивного покрытия, трибун для зрителей, раздевалок."
        }
      },
      {
        "@type": "Question",
        "name": "Какая ветровая и снеговая нагрузка для шатра 15х25 с широким пролетом?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Шатер 15х25 с широким пролетом в стандартной комплектации с двойной системой опор выдерживает ветровую нагрузку до 120 км/ч. С дополнительным креплением и усиленным каркасом — до 140 км/ч. Снеговая нагрузка — до 200 кг/м² благодаря усиленной системе ферм и двойным опорам. Для регионов с экстремальными погодными условиями рекомендуется премиальная версия с максимальным усилением всех узлов."
        }
      },
      {
        "@type": "Question",
        "name": "Какой срок изготовления и монтажа большого шатра 15х25?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Стандартный срок изготовления большого шатра 15х25 с широким пролетом — от 12 до 18 рабочих дней. Для срочных заказов возможна ускоренная сборка за 7-10 дней. Монтаж на объекте занимает 2-4 дня бригадой профессиональных установщиков с использованием спецтехники (автовышки, краны) при необходимости. Возможен шеф-монтаж под руководством наших специалистов."
        }
      },
      {
        "@type": "Question",
        "name": "Нужно ли разрешение на установку большого шатра 15х25?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Для временных сооружений на частных территориях разрешение не требуется. Для установки на городских площадках, в парках, на публичных мероприятиях требуется согласование с администрацией. Для конструкций площадью более 300 м² с широким пролетом рекомендуется получение разрешительной документации и экспертизы. Наша компания помогает с получением необходимых разрешений и согласований, подготовкой проектной документации."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли разделить шатер 15х25 на несколько залов?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, большой шатер 15х25 можно разделить на несколько отдельных залов или функциональных зон с помощью специальных перегородок из ПВХ ткани различной степени звукоизоляции. Это позволяет создать: банкетный зал, танцпол, сцену, лаунж-зону, бар, кухню, гардероб, служебные помещения, VIP-зону, выставочные стенды, конференц-зал. Возможно создание многоуровневых конструкций и антресолей благодаря высоте до 7 метров."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли использовать шатер 15х25 как склад или производственное помещение?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, шатер 15х25 с широким пролетом отлично подходит для использования в качестве складского помещения, логистического центра, производственного цеха, ангара для крупной техники, сельскохозяйственного объекта, автосервиса. Усиленная конструкция с широким пролетом позволяет размещать стеллажи высотой до 6 метров, тяжелое оборудование, крупногабаритную технику, крановое оборудование. Возможно утепление, установка ворот (распашных, откатных, секционных), пандусов, систем безопасности, вентиляции, отопления, грузоподъемного оборудования."
        }
      },
      {
        "@type": "Question",
        "name": "Какой фундамент нужен для шатра 15х25 с широким пролетом?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Для шатра 15х25 с широким пролетом требуется подготовленное основание повышенной прочности: бетонная плита, асфальтированная площадка, утрамбованный грунт с геотекстилем, деревянный настил, фундаментные блоки. Возможна установка на винтовые сваи или буронабивные сваи для сложных грунтов и пучинистых почв. Для капитального использования рекомендуется железобетонный фундамент с учетом нагрузок от широкого пролета. Мы проводим геодезические изыскания и расчет фундамента под конкретные условия."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли установить отопление и кондиционирование в шатре 15х25 для круглогодичного использования?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, для круглогодичного использования шатра 15х25 возможна установка промышленных систем: воздушное отопление, водяное отопление с радиаторами, инфракрасные обогреватели, тепловые завесы, системы вентиляции и кондиционирования, приточно-вытяжная вентиляция с рекуперацией тепла, климат-контроль. Для зимнего использования рекомендуется утепленная версия с двойным тентом, теплоизоляцией стен, тепловым контуром. Возможна установка систем автоматического поддержания микроклимата."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли заказать брендирование большого шатра 15х25?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, мы предлагаем полный комплекс услуг по брендированию больших шатров с широким пролетом: нанесение логотипов, рекламных надписей, полноцветная печать на тентах, создание корпоративного стиля, брендирование стен, подвесные конструкции с логотипами, световые короба, неоновые вывески. Возможно брендирование как всего шатра, так и отдельных элементов, включая торцевые стены, входные группы, фронтоны. Используем качественные краски и пленки, устойчивые к выцветанию и атмосферным воздействиям."
        }
      },
      {
        "@type": "Question",
        "name": "Доставляете ли большие шатры 15х25 в регионы России?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, доставляем большие шатры 15х25 по всей России: Москва, Санкт-Петербург, все города Московской области, Ленинградская область, Центральный федеральный округ, Приволжский федеральный округ, Южный федеральный округ, Урал, Сибирь, Дальний Восток. Возможна отправка транспортными компаниями или нашим автотранспортом. Стоимость доставки рассчитывается индивидуально. Возможен шеф-монтаж на объекте заказчика, выезд наших специалистов для контроля установки."
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
        {pageData.seo?.h1 || "Большой шатер 15х25 — 375 м²"}
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