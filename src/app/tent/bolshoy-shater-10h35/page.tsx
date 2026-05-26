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
const PAGE_CODE = "bolshoy-shater-10h35";

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
        id: 202,
        name: "Большой шатер 10х35 — 350 м²",
        code: PAGE_CODE
      },
      seo: {
        title: "Большой шатер 10х35 (350 м²) – купить в Москве с доставкой: цена в интернет-магазине Mobile Tent",
        description: "Большой шатер 10х35 (350 м²) – купить в Москве под заказ в компании Mobile Tent. Просторный шатер премиум-класса площадью 350 квадратных метров идеально подходит для проведения масштабных мероприятий: крупных свадеб, корпоративов, выставок, спортивных соревнований, фестивалей, концертов, складов и торговых комплексов. Усиленная конструкция с дополнительными опорами обеспечивает максимальную надежность при любых погодных условиях. Вы можете выбрать любую комплектацию, размер и цвет изделия, а также заказать его брендирование. Мы используем только качественные и долговечные материалы, а также предлагаем адекватные цены, которые будут дешевле долгосрочный аренды! Гарантия от производителя — 5 лет.",
        keywords: "большой шатер 10х35, шатер 10 на 35, купить большой шатер 10х35, шатер 350 м2, большой шатер для мероприятий, большой шатер для свадьбы, большой шатер для выставки, большой шатер для склада, шатер премиум-класса, просторный шатер, тентовый шатер большой, быстровозводимый шатер большой, большой арочный шатер, шатер для фестиваля, шатер для концерта",
        h1: "Большой шатер 10х35 — 350 м²",
        url: `/tent/bolshoy-shater-10h35`
      },
      content: {
        desktop: '',
        mobile: ''
      },
      priceConfigurations: [
        {
          name: "Базовая",
          isActive: true,
          currentPrice: 452000,
          originalPrice: 452000,
          discount: 0,
          description: "Базовая комплектация включает основные элементы конструкции"
        },
        {
          name: "Средняя",
          isActive: false,
          currentPrice: 572000,
          originalPrice: 572000,
          discount: 0,
          description: "Средняя комплектация с дополнительными опциями"
        },
        {
          name: "Максимальная",
          isActive: false,
          currentPrice: 692000,
          originalPrice: 692000,
          discount: 0,
          description: "Максимальная комплектация со всеми доступными опциями"
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
  const seoTitle = data.seo?.title || "Большой шатер 10х35 (350 м²) – купить в Москве с доставкой: цена в интернет-магазине Mobile Tent";
  const seoDescription = data.seo?.description || "Большой шатер 10х35 (350 м²) – купить в Москве под заказ в компании Mobile Tent. Просторный шатер премиум-класса площадью 350 квадратных метров идеально подходит для проведения масштабных мероприятий: крупных свадеб, корпоративов, выставок, спортивных соревнований, фестивалей, концертов, складов и торговых комплексов. Усиленная конструкция с дополнительными опорами обеспечивает максимальную надежность при любых погодных условиях. Вы можете выбрать любую комплектацию, размер и цвет изделия, а также заказать его брендирование. Мы используем только качественные и долговечные материалы, а также предлагаем адекватные цены, которые будут дешевле долгосрочный аренды! Гарантия от производителя — 5 лет.";
  const seoKeywords = data.seo?.keywords || "большой шатер 10х35, шатер 10 на 35, купить большой шатер 10х35, шатер 350 м2, большой шатер для мероприятий, большой шатер для свадьбы, большой шатер для выставки, большой шатер для склада, шатер премиум-класса, просторный шатер, тентовый шатер большой, быстровозводимый шатер большой, большой арочный шатер, шатер для фестиваля, шатер для концерта";
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
          alt: 'Большой шатер 10х35 - 350 м² просторный шатер премиум-класса от производителя MOBILE TENT'
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
export default async function Bolshoy_Shatyor_10x35_Page() {
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
    "description": "Производство и продажа больших шатров, тентовых конструкций и быстровозводимых сооружений премиум-класса в Москве и Московской области для масштабных мероприятий и промышленных объектов.",
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
      { "@type": "City", "name": "Нижний Новгород" }
    ],
    "hasMap": officePlace.hasMap,
    "openingHoursSpecification": officePlace.openingHoursSpecification,
    "sameAs": [
      pageData.contacts?.telegram || "https://t.me/+79770893996?start=14594990928",
      pageData.contacts?.whatsapp ? `https://wa.me/${pageData.contacts.whatsapp.replace(/[^0-9]/g, '')}` : "https://wa.me/79805109568"
    ]
  };

  // ----- PRODUCT SCHEMA (specific to this большой шатер 10х35) -----
  // Determine price range from configurations with proper typing
  const prices: number[] = pageData.priceConfigurations?.map((c: PriceConfiguration) => c.currentPrice) || [452000, 572000, 692000];
  const lowPrice = Math.min(...prices);
  const highPrice = Math.max(...prices);
  const offerCount = pageData.priceConfigurations?.length || 3;

  // Calculate dimensions for this specific size
  const width = 10;
  const length = 35;
  const area = 350; // 350 m²
  const ridgeHeight = "до 6.0 м";
  const wallHeight = "до 3.0 м";

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "image": "https://mobile-tent.ru/10x30,1.webp",
    "name": pageData.page?.name || "Большой шатер 10х35 — 350 м²",
    "description": pageData.seo?.description || "Большой шатер 10х35 (350 м²) – купить в Москве под заказ в компании Mobile Tent. Просторный шатер премиум-класса площадью 350 квадратных метров идеально подходит для проведения масштабных мероприятий: крупных свадеб, корпоративов, выставок, спортивных соревнований, фестивалей, концертов, складов и торговых комплексов. Усиленная конструкция с дополнительными опорами обеспечивает максимальную надежность при любых погодных условиях. Вы можете выбрать любую комплектацию, размер и цвет изделия, а также заказать его брендирование.",
    "sku": `MOB-${PAGE_CODE}`,
    "mpn": `MOB-BIG-10x35-350`,
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
    "category": "Большие шатры премиум-класса",
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
        "value": "Большой арочный шатер премиум-класса с дополнительными опорами"
      },
      {
        "@type": "PropertyValue",
        "name": "Каркас",
        "value": "Усиленный алюминиевый профиль с антикоррозийным покрытием, дополнительные опоры, усиленные узлы соединения, система внутренних растяжек"
      },
      {
        "@type": "PropertyValue",
        "name": "Тент",
        "value": "ПВХ ткань, плотность 750-900 г/м², с УФ-защитой, огнеупорная, водоотталкивающая"
      },
      {
        "@type": "PropertyValue",
        "name": "Ветровая нагрузка",
        "value": "до 110 км/ч (с дополнительным креплением до 130 км/ч)"
      },
      {
        "@type": "PropertyValue",
        "name": "Снеговая нагрузка",
        "value": "до 180 кг/м²"
      },
      {
        "@type": "PropertyValue",
        "name": "Температурный режим",
        "value": "от -45 до +70°C"
      },
      {
        "@type": "PropertyValue",
        "name": "Количество опор",
        "value": "Усиленная система опор с шагом 3-4 метра"
      },
      {
        "@type": "PropertyValue",
        "name": "Назначение",
        "value": "Масштабные мероприятия, крупные свадьбы (до 350 гостей), корпоративы, выставки, спортивные соревнования, фестивали, концерты, склады, торговые комплексы, логистические центры, производственные помещения, ангары, укрытия для крупной техники, сельскохозяйственные объекты"
      },
      {
        "@type": "PropertyValue",
        "name": "Вместимость",
        "value": "до 350 гостей с банкетными столами, до 550 человек на фуршете, до 300 посадочных мест в ресторане"
      },
      {
        "@type": "PropertyValue",
        "name": "Возможность зонирования",
        "value": "Да, возможно разделение на отдельные зоны перегородками, создание нескольких залов"
      },
      {
        "@type": "PropertyValue",
        "name": "Освещение",
        "value": "Возможность установки систем освещения, люстр, прожекторов, сценического света"
      },
      {
        "@type": "PropertyValue",
        "name": "Отопление",
        "value": "Возможность установки систем отопления, тепловых пушек, инфракрасных обогревателей"
      },
      {
        "@type": "PropertyValue",
        "name": "Вентиляция",
        "value": "Возможность установки систем вентиляции, кондиционирования, приточной вентиляции"
      },
      {
        "@type": "PropertyValue",
        "name": "Звукоизоляция",
        "value": "Опция звукоизоляции для проведения мероприятий"
      },
      {
        "@type": "PropertyValue",
        "name": "Пол",
        "value": "Возможность установки различных типов пола: деревянный настил, модульный пол, профессиональное покрытие"
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
        "name": "Большие шатры",
        "item": "https://mobile-tent.ru/shatry-i-navesy/bolshie"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": pageData.page?.name || "Большой шатер 10х35 — 350 м²",
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

  // ----- FAQ SCHEMA (customized for большой шатер 10х35) -----
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Какие размеры у большого шатра 10х35?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Большой шатер имеет ширину 10 метров, длину 35 метров, высоту в коньке до 6.0 метров, высоту стен до 3.0 метров. Полезная площадь — ${area} м². Это просторный шатер премиум-класса с дополнительными опорами, идеально подходящий для проведения масштабных мероприятий: крупных свадеб, корпоративов, выставок, спортивных соревнований, фестивалей, концертов, складов и торговых комплексов.`
        }
      },
      {
        "@type": "Question",
        "name": `Сколько человек вмещает большой шатер 10х35?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `В большом шатре 10х35 площадью 350 м² можно разместить: до 350 гостей с банкетными столами, до 550 человек на фуршете, до 300 посадочных мест в ресторане, выставочные стенды, спортивную площадку, сцену с зрительным залом, складское оборудование, производственное помещение, несколько функциональных зон одновременно.`
        }
      },
      {
        "@type": "Question",
        "name": `Сколько стоит большой шатер 10х35?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Цена зависит от комплектации: базовая — от ${prices[0]?.toLocaleString() || '452 000'} ₽, средняя — от ${prices[1]?.toLocaleString() || '572 000'} ₽, максимальная — от ${prices[2]?.toLocaleString() || '692 000'} ₽. Для больших шатров доступны специальные комплектации с усиленным каркасом, системой отопления, освещением, вентиляцией, брендированием, звукоизоляцией. Доставка по Москве и области рассчитывается индивидуально.`
        }
      },
      {
        "@type": "Question",
        "name": "Для каких мероприятий подходит большой шатер 10х35?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Большой шатер 10х35 идеально подходит для: масштабных свадеб (до 350 гостей), корпоративных мероприятий, выставок и ярмарок, спортивных соревнований (волейбол, баскетбол, мини-футбол), фестивалей и концертов, складских помещений, торговых комплексов, логистических центров, производственных цехов, укрытий для крупной техники, ресторанов под открытым небом, летних кафе, кинопоказов, театральных постановок, конференций, форумов."
        }
      },
      {
        "@type": "Question",
        "name": "Какая гарантия на большой шатер 10х35?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Гарантия от производителя — 5 лет на каркас и тент. Срок службы при правильной эксплуатации — более 20 лет благодаря усиленной конструкции премиум-класса с дополнительными опорами. Алюминиевый каркас устойчив к коррозии, ПВХ ткань защищена от УФ-излучения, имеет огнеупорные свойства и повышенную износостойкость."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли установить отопление в большом шатре 10х35 для зимнего использования?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, в большом шатре 10х35 возможна установка различных систем отопления: тепловые пушки (электрические, газовые, дизельные), инфракрасные обогреватели, газовые обогреватели, системы воздушного отопления, водяное отопление. Для зимнего использования рекомендуется утепленная версия с двойным тентом, теплоизоляцией и системой климат-контроля. Возможна установка тепловых завес на входах."
        }
      },
      {
        "@type": "Question",
        "name": "Какой срок изготовления большого шатра 10х35?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Стандартный срок изготовления большого шатра 10х35 — от 10 до 15 рабочих дней. Для срочных заказов возможна ускоренная сборка за 5-7 дней. Монтаж на объекте занимает 2-3 дня бригадой профессиональных установщиков с использованием спецтехники при необходимости."
        }
      },
      {
        "@type": "Question",
        "name": "Нужно ли разрешение на установку большого шатра 10х35?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Для временных сооружений на частных территориях разрешение не требуется. Для установки на городских площадках, в парках, на публичных мероприятиях может потребоваться согласование с администрацией. Для конструкций площадью более 300 м² рекомендуется получение разрешительной документации. Наша компания помогает с получением необходимых разрешений и согласований."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли разделить большой шатер 10х35 на несколько залов?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, большой шатер 10х35 можно разделить на несколько отдельных залов или функциональных зон с помощью специальных перегородок из ПВХ ткани. Это позволяет создать: банкетный зал, танцпол, сцену, лаунж-зону, бар, кухню, гардероб, служебные помещения, VIP-зону, выставочные стенды. Возможно создание многоуровневых конструкций и антресолей."
        }
      },
      {
        "@type": "Question",
        "name": "Какая ветровая и снеговая нагрузка для большого шатра 10х35?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Большой шатер 10х35 в стандартной комплектации с дополнительными опорами выдерживает ветровую нагрузку до 110 км/ч. С дополнительным креплением и усиленным каркасом — до 130 км/ч. Снеговая нагрузка — до 180 кг/м² благодаря усиленной системе стропил и дополнительным опорам. Для регионов с экстремальными погодными условиями рекомендуется премиальная версия с максимальным усилением."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли заказать брендирование большого шатра 10х35?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, мы предлагаем полный комплекс услуг по брендированию больших шатров: нанесение логотипов, рекламных надписей, полноцветная печать на тентах, создание корпоративного стиля, брендирование стен, подвесные конструкции с логотипами. Возможно брендирование как всего шатра, так и отдельных элементов, включая торцевые стены, входные группы. Используем качественные краски, устойчивые к выцветанию и атмосферным воздействиям."
        }
      },
      {
        "@type": "Question",
        "name": "Доставляете ли большие шатры 10х35 в регионы России?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, доставляем большие шатры 10х35 по всей России: Москва, Санкт-Петербург, все города Московской области, Ленинградская область, Центральный федеральный округ, Приволжский федеральный округ, Южный федеральный округ, Урал, Сибирь, Дальний Восток. Возможна отправка транспортными компаниями или нашим автотранспортом. Стоимость доставки рассчитывается индивидуально. Возможен шеф-монтаж на объекте заказчика."
        }
      },
      {
        "@type": "Question",
        "name": "Какое освещение можно установить в большом шатре 10х35?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "В большом шатре 10х35 возможно установить различные системы освещения: подвесные люстры, светодиодные ленты, прожекторы, точечные светильники, сценический свет, декоративную подсветку, RGB-освещение с изменением цвета, архитектурную подсветку, аварийное освещение. Возможна интеграция с системами умного дома, пультами управления, световыми сценариями для мероприятий."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли использовать большой шатер 10х35 как склад или производственное помещение?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, большой шатер 10х35 отлично подходит для использования в качестве складского помещения, логистического центра, производственного цеха, ангара для техники, сельскохозяйственного объекта. Усиленная конструкция с дополнительными опорами позволяет размещать стеллажи, тяжелое оборудование, крупногабаритную технику. Возможно утепление, установка ворот (распашных, откатных, секционных), пандусов, систем безопасности, вентиляции, отопления."
        }
      },
      {
        "@type": "Question",
        "name": "Какой фундамент нужен для большого шатра 10х35?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Для большого шатра 10х35 требуется подготовленное основание: бетонная плита, асфальтированная площадка, утрамбованный грунт, деревянный настил, фундаментные блоки. Возможна установка на винтовые сваи или буронабивные сваи для сложных грунтов и пучинистых почв. Временная установка возможна с использованием анкерных креплений, бетонных блоков, грунтозацепов. Для капитального использования рекомендуется фундамент с учетом нагрузок."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли установить окна и двери в большом шатре 10х35?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, возможна установка различных типов окон (прозрачные ПВХ-окна, стеклопакеты, ленточное остекление) и дверей (распашные, раздвижные, автоматические, противопожарные). Возможна установка входных групп, тамбуров, пандусов. Количество и расположение проемов проектируется индивидуально под задачи заказчика."
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
        {pageData.seo?.h1 || "Большой шатер 10х35 — 350 м²"}
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