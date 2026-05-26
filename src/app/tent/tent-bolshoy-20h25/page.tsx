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

// Define the page code for 20x25 tent
const PAGE_CODE = "tent-bolshoy-20h25";

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
    
    // Return default values if API fails - Updated for 20x25 tent
    return {
      success: false,
      page: {
        id: 224,
        name: "Тент большой 20х25",
        code: PAGE_CODE
      },
      seo: {
        title: "Тент большой 20х25 – купить в Москве с доставкой: цена в интернет-магазине Mobile Tent",
        description: "Тент большой 20х25 – купить в Москве под заказ в компании Mobile Tent. Вы можете выбрать любую комплектацию, размер и цвет изделия, а также заказать его брендирование. Мы используем только качественные и долговечные материалы, а также предлагаем адекватные цены, которые будут дешевле долгосрочный аренды! Гарантия от производителя — 5 лет.",
        keywords: "тент большой 20х25, тент 20 на 25, купить тент большой 20х25, тент 500 м2, тент-ангар, тент для склада, тент для выставки, тент для логистического центра, тент для спортивного комплекса, тент для концерта, тент для фестиваля, тент премиум-класса, огромный тент, тентовый ангар, быстровозводимый тент большой, большой арочный тент, промышленный тент",
        h1: "Тент большой 20х25",
        url: `/tent/bolshoy-shater-20h25`
      },
      content: {
        desktop: '',
        mobile: ''
      },
      priceConfigurations: [
        {
          name: "Базовая",
          isActive: true,
          currentPrice: 795000,
          originalPrice: 795000,
          discount: 0,
          description: "Базовая комплектация включает основные элементы конструкции с усиленным каркасом"
        },
        {
          name: "Средняя",
          isActive: false,
          currentPrice: 995000,
          originalPrice: 995000,
          discount: 0,
          description: "Средняя комплектация с дополнительными опциями и усиленными узлами"
        },
        {
          name: "Максимальная",
          isActive: false,
          currentPrice: 1195000,
          originalPrice: 1195000,
          discount: 0,
          description: "Максимальная комплектация премиум-класса со всеми доступными опциями"
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

  // Use data from API if successful, otherwise use defaults - Updated for 20x25
  const seoTitle = data.seo?.title || "Тент большой 20х25 – купить в Москве с доставкой: цена в интернет-магазине Mobile Tent";
  const seoDescription = data.seo?.description || "Тент большой 20х25 – купить в Москве под заказ в компании Mobile Tent. Вы можете выбрать любую комплектацию, размер и цвет изделия, а также заказать его брендирование. Мы используем только качественные и долговечные материалы, а также предлагаем адекватные цены, которые будут дешевле долгосрочный аренды! Гарантия от производителя — 5 лет.";
  const seoKeywords = data.seo?.keywords || "тент большой 20х25, тент 20 на 25, купить тент большой 20х25, тент 500 м2, тент-ангар, тент для склада, тент для выставки, тент для логистического центра, тент для спортивного комплекса, тент для концерта, тент для фестиваля, тент премиум-класса, огромный тент, тентовый ангар, быстровозводимый тент большой, большой арочный тент, промышленный тент";
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
          alt: 'Тент большой 20х25 - 500 м² огромный тент-ангар премиум-класса от производителя MOBILE TENT'
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
export default async function Bolshoy_Shatyor_20x25_Page() {
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
    "description": "Производство и продажа огромных тентов-ангаров, тентовых конструкций и быстровозводимых сооружений премиум-класса в Москве и Московской области для промышленных и коммерческих объектов.",
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
      pageData.contacts?.telegram || "https://t.me/+79770893996?start=14594990928",
      pageData.contacts?.whatsapp ? `https://wa.me/${pageData.contacts.whatsapp.replace(/[^0-9]/g, '')}` : "https://wa.me/79805109568"
    ]
  };

  // ----- PRODUCT SCHEMA (specific to this большой тент 20х25) -----
  // Determine price range from configurations with proper typing
  const prices: number[] = pageData.priceConfigurations?.map((c: PriceConfiguration) => c.currentPrice) || [795000, 995000, 1195000];
  const lowPrice = Math.min(...prices);
  const highPrice = Math.max(...prices);
  const offerCount = pageData.priceConfigurations?.length || 3;

  // Calculate dimensions for this specific size
  const width = 20;
  const length = 25;
  const area = 500; // 500 m²
  const ridgeHeight = "до 7.5 м";
  const wallHeight = "до 4.0 м";

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "image": "https://mobile-tent.ru/10x30,1.webp",
    "name": pageData.page?.name || "Тент большой 20х25 — 500 м²",
    "description": pageData.seo?.description || "Тент большой 20х25 (500 м²) – купить в Москве под заказ в компании Mobile Tent. Огромный тент-ангар площадью 500 квадратных метров идеально подходит для проведения крупномасштабных мероприятий: масштабных выставок, промышленных складов, логистических центров, спортивных комплексов, концертных площадок, фестивалей. Усиленная конструкция премиум-класса обеспечивает надежность при любых погодных условиях. Вы можете выбрать любую комплектацию, размер и цвет изделия, а также заказать его брендирование.",
    "sku": `MOB-${PAGE_CODE}`,
    "mpn": `MOB-BIG-20x25-500`,
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
    "material": "Усиленный алюминиевый каркас премиум-класса, ПВХ ткань 900 г/м²",
    "category": "Огромные тенты-ангары",
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
        "value": "Огромный тент-ангар премиум-класса"
      },
      {
        "@type": "PropertyValue",
        "name": "Каркас",
        "value": "Усиленный алюминиевый профиль премиум-класса с антикоррозийным покрытием, двойные элементы жесткости, усиленные узлы соединения, дополнительные опорные колонны"
      },
      {
        "@type": "PropertyValue",
        "name": "Тент",
        "value": "ПВХ ткань премиум-класса, плотность 900 г/м², с УФ-защитой, огнеупорная, усиленная в местах крепления"
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
        "value": "от -50 до +70°C"
      },
      {
        "@type": "PropertyValue",
        "name": "Назначение",
        "value": "Промышленные склады, логистические центры, производственные цеха, крупномасштабные выставки, спортивные комплексы, концертные площадки, фестивали, ангары для техники, сельскохозяйственные комплексы, торговые центры, выставочные павильоны"
      },
      {
        "@type": "PropertyValue",
        "name": "Вместимость",
        "value": "до 500 гостей с банкетными столами, до 800 человек на фуршете, полноразмерное спортивное поле, выставочные стенды, складское оборудование, тяжелая техника"
      },
      {
        "@type": "PropertyValue",
        "name": "Возможность зонирования",
        "value": "Да, возможно разделение на отдельные зоны, создание многоуровневых конструкций"
      },
      {
        "@type": "PropertyValue",
        "name": "Освещение",
        "value": "Промышленные системы освещения, прожекторы, светодиодные панели"
      },
      {
        "@type": "PropertyValue",
        "name": "Отопление",
        "value": "Промышленные системы отопления, тепловые завесы"
      },
      {
        "@type": "PropertyValue",
        "name": "Вентиляция",
        "value": "Промышленные системы вентиляции и кондиционирования"
      },
      {
        "@type": "PropertyValue",
        "name": "Ворота",
        "value": "Возможность установки промышленных ворот, пандусов"
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
        "name": "Огромные тенты-ангары",
        "item": "https://mobile-tent.ru/tenty/ogromnye"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": pageData.page?.name || "Тент большой 20х25 — 500 м²",
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

  // ----- FAQ SCHEMA (customized for большой тент 20х25) -----
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Какие размеры у огромного тента 20х25?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Огромный тент-ангар имеет ширину 20 метров, длину 25 метров, высоту в коньке до 7.5 метров, высоту стен до 4.0 метров. Полезная площадь — ${area} м². Это тент премиум-класса, идеально подходящий для промышленных объектов, крупномасштабных мероприятий: складов, логистических центров, выставок, спортивных комплексов, концертных площадок.`
        }
      },
      {
        "@type": "Question",
        "name": `Сколько человек вмещает огромный тент 20х25?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `В огромном тенте 20х25 площадью 500 м² можно разместить: до 500 гостей с банкетными столами, до 800 человек на фуршете, полноразмерное спортивное поле, выставочные стенды, складское оборудование, тяжелую технику.`
        }
      },
      {
        "@type": "Question",
        "name": `Сколько стоит огромный тент 20х25?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Цена зависит от комплектации: базовая (промышленная) — от ${prices[0]?.toLocaleString() || '795 000'} ₽, средняя (усиленная) — от ${prices[1]?.toLocaleString() || '995 000'} ₽, максимальная (премиум) — от ${prices[2]?.toLocaleString() || '1 195 000'} ₽. Доставка по Москве и области рассчитывается индивидуально.`
        }
      },
      {
        "@type": "Question",
        "name": "Для каких целей подходит огромный тент 20х25?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Огромный тент 20х25 идеально подходит для: промышленных складов, логистических центров, производственных цехов, крупномасштабных выставок, спортивных комплексов (футбол, баскетбол, теннис), концертных площадок, фестивалей, ангаров для техники, сельскохозяйственных комплексов, торговых центров, выставочных павильонов."
        }
      },
      {
        "@type": "Question",
        "name": "Какая гарантия на огромный тент 20х25?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Гарантия от производителя — 5 лет на каркас и тент. Срок службы при правильной эксплуатации — более 25 лет благодаря усиленной конструкции премиум-класса. Алюминиевый каркас устойчив к коррозии, ПВХ ткань премиум-класса защищена от УФ-излучения, имеет огнеупорные свойства."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли использовать тент 20х25 как склад или ангар?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, тент 20х25 специально разработан для использования в качестве промышленного склада, логистического центра, производственного цеха, ангара для техники. Усиленная конструкция позволяет размещать стеллажи, тяжелое оборудование, крупногабаритную технику. Возможно утепление, установка промышленных ворот, систем безопасности."
        }
      },
      {
        "@type": "Question",
        "name": "Какой срок изготовления огромного тента 20х25?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Стандартный срок изготовления огромного тента 20х25 — от 14 до 21 рабочих дней. Для срочных заказов возможна ускоренная сборка за 7-10 дней. Монтаж на объекте занимает 3-5 дней бригадой профессиональных установщиков с использованием спецтехники."
        }
      },
      {
        "@type": "Question",
        "name": "Нужно ли разрешение на установку тента 20х25 в Москве?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Для промышленных объектов на частных территориях требуется разрешение на строительство. Для временных сооружений на мероприятия может потребоваться согласование с администрацией. Наша компания помогает с получением необходимых разрешений и документации."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли разделить огромный тент 20х25 на зоны?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, огромный тент 20х25 можно разделить на отдельные зоны с помощью специальных перегородок. Это позволяет создать: складские зоны, офисные помещения, производственные участки, выставочные залы, спортивные площадки. Возможно создание многоуровневых конструкций."
        }
      },
      {
        "@type": "Question",
        "name": "Какая ветровая нагрузка выдерживает огромный тент 20х25?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Огромный тент 20х25 в стандартной комплектации выдерживает ветровую нагрузку до 110 км/ч. С дополнительным креплением и усиленным каркасом — до 130 км/ч. Снеговая нагрузка — до 180 кг/м². Для регионов с экстремальными нагрузками предлагается версия с особо усиленным каркасом."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли заказать брендирование огромного тента 20х25?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, мы предлагаем полный комплекс услуг по брендированию огромных тентов: нанесение логотипов, рекламных надписей, полноцветная печать на тентах, создание корпоративного стиля для промышленных объектов. Используем качественные краски, устойчивые к выцветанию и атмосферным воздействиям."
        }
      },
      {
        "@type": "Question",
        "name": "Доставляете ли огромные тенты 20х25 в регионы России?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, доставляем огромные тенты 20х25 по всей России: Москва, Санкт-Петербург, все города Московской области, Центральный федеральный округ, Приволжский федеральный округ, Южный федеральный округ, Урал, Сибирь, Дальний Восток. Возможна отправка специализированным транспортом. Стоимость доставки рассчитывается индивидуально."
        }
      },
      {
        "@type": "Question",
        "name": "Какое освещение можно установить в огромном тент 20х25?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "В огромном тент 20х25 возможно установить промышленные системы освещения: прожекторы, светодиодные панели, промышленные светильники, сценический свет. Возможна интеграция с системами автоматизации."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли установить отопление в огромном тент 20х25?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, в огромном тент 20х25 возможна установка промышленных систем отопления: воздушное отопление, инфракрасные обогреватели, тепловые завесы. Для круглогодичного использования рекомендуется утепленная версия с системой климат-контроля."
        }
      },
      {
        "@type": "Question",
        "name": "Какой фундамент нужен для огромного тента 20х25?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Для огромного тента 20х25 требуется капитальное основание: бетонная плита, фундамент на сваях, ленточный фундамент. Возможна установка на подготовленную площадку с использованием анкерных креплений и бетонных блоков для временных конструкций."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли установить ворота в тент 20х25?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, в тент 20х25 возможна установка различных типов ворот: рольставни, секционные ворота, распашные ворота, пандусы для въезда техники. Возможна организация въездных групп любого размера."
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
        {pageData.seo?.h1 || "Тент большой 20х25 — 500 м²"}
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