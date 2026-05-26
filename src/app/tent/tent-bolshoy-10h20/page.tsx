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

// Define the page code for 10x20 tent
const PAGE_CODE = "tent-bolshoy-10h20";

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
    
    // Return default values if API fails - Updated for 10x20 tent
    return {
      success: false,
      page: {
        id: 223,
        name: "Тент большой 10х20",
        code: PAGE_CODE
      },
      seo: {
        title: "Тент большой 10х20 – купить в Москве с доставкой: цена в интернет-магазине Mobile Tent",
        description: "Тент большой 10х20 – купить в Москве под заказ в компании Mobile Tent. Вы можете выбрать любую комплектацию, размер и цвет изделия, а также заказать его брендирование. Мы используем только качественные и долговечные материалы, а также предлагаем адекватные цены, которые будут дешевле долгосрочный аренды! Гарантия от производителя — 5 лет.",
        keywords: "тент большой 10х20, тент 10 на 20, купить тент большой 10х20, тент 200 м2, тент для мероприятий, тент для свадьбы, тент для выставки, тент для склада, тент премиум-класса, просторный тент, тентовый шатер большой, быстровозводимый тент большой, большой арочный тент, тент для фестиваля",
        h1: "Тент большой 10х20",
        url: `/tent/bolshoy-shater-10h20`
      },
      content: {
        desktop: '',
        mobile: ''
      },
      priceConfigurations: [
        {
          name: "Базовая",
          isActive: true,
          currentPrice: 332000,
          originalPrice: 332000,
          discount: 0,
          description: "Базовая комплектация включает основные элементы конструкции"
        },
        {
          name: "Средняя",
          isActive: false,
          currentPrice: 432000,
          originalPrice: 432000,
          discount: 0,
          description: "Средняя комплектация с дополнительными опциями"
        },
        {
          name: "Максимальная",
          isActive: false,
          currentPrice: 532000,
          originalPrice: 532000,
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

  // Use data from API if successful, otherwise use defaults - Updated for 10x20
  const seoTitle = data.seo?.title || "Тент большой 10х20 – купить в Москве с доставкой: цена в интернет-магазине Mobile Tent";
  const seoDescription = data.seo?.description || "Тент большой 10х20 – купить в Москве под заказ в компании Mobile Tent. Вы можете выбрать любую комплектацию, размер и цвет изделия, а также заказать его брендирование. Мы используем только качественные и долговечные материалы, а также предлагаем адекватные цены, которые будут дешевле долгосрочный аренды! Гарантия от производителя — 5 лет.";
  const seoKeywords = data.seo?.keywords || "тент большой 10х20, тент 10 на 20, купить тент большой 10х20, тент 200 м2, тент для мероприятий, тент для свадьбы, тент для выставки, тент для склада, тент премиум-класса, просторный тент, тентовый шатер большой, быстровозводимый тент большой, большой арочный тент, тент для фестиваля";
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
          alt: 'Тент большой 10х20 - 200 м² просторный тент от производителя MOBILE TENT'
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
export default async function Bolshoy_Shatyor_10x20_Page() {
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
    "description": "Производство и продажа больших тентов, шатровых конструкций и быстровозводимых сооружений в Москве и Московской области для мероприятий.",
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

  // ----- PRODUCT SCHEMA (specific to this большой тент 10х20) -----
  // Determine price range from configurations with proper typing
  const prices: number[] = pageData.priceConfigurations?.map((c: PriceConfiguration) => c.currentPrice) || [332000, 432000, 532000];
  const lowPrice = Math.min(...prices);
  const highPrice = Math.max(...prices);
  const offerCount = pageData.priceConfigurations?.length || 3;

  // Calculate dimensions for this specific size
  const width = 10;
  const length = 20;
  const area = 200; // 200 m²
  const ridgeHeight = "до 5.6 м";
  const wallHeight = "до 2.8 м";

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "image": "https://mobile-tent.ru/10x30,1.webp",
    "name": pageData.page?.name || "Тент большой 10х20",
    "description": pageData.seo?.description || "Тент большой 10х20 (200 м²) – купить в Москве под заказ в компании Mobile Tent. Просторный тент площадью 200 квадратных метров идеально подходит для проведения мероприятий: свадеб, корпоративов, выставок, спортивных соревнований, фестивалей, складов и торговых комплексов. Надежная конструкция обеспечивает защиту при любых погодных условиях. Вы можете выбрать любую комплектацию, размер и цвет изделия, а также заказать его брендирование.",
    "sku": `MOB-${PAGE_CODE}`,
    "mpn": `MOB-BIG-10x20-200`,
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
    "material": "Усиленный алюминиевый каркас, ПВХ ткань 700-850 г/м²",
    "category": "Большие тенты",
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
        "value": "Большой арочный тент"
      },
      {
        "@type": "PropertyValue",
        "name": "Каркас",
        "value": "Усиленный алюминиевый профиль с антикоррозийным покрытием"
      },
      {
        "@type": "PropertyValue",
        "name": "Тент",
        "value": "ПВХ ткань, плотность 700-850 г/м², с УФ-защитой, огнеупорная"
      },
      {
        "@type": "PropertyValue",
        "name": "Ветровая нагрузка",
        "value": "до 95 км/ч (с дополнительным креплением до 115 км/ч)"
      },
      {
        "@type": "PropertyValue",
        "name": "Снеговая нагрузка",
        "value": "до 135 кг/м²"
      },
      {
        "@type": "PropertyValue",
        "name": "Температурный режим",
        "value": "от -40 до +70°C"
      },
      {
        "@type": "PropertyValue",
        "name": "Назначение",
        "value": "Мероприятия, свадьбы, корпоративы, выставки, спортивные соревнования, фестивали, склады, торговые комплексы"
      },
      {
        "@type": "PropertyValue",
        "name": "Вместимость",
        "value": "до 200 гостей с банкетными столами, до 300 человек на фуршете"
      },
      {
        "@type": "PropertyValue",
        "name": "Возможность зонирования",
        "value": "Да, возможно разделение на отдельные зоны перегородками"
      },
      {
        "@type": "PropertyValue",
        "name": "Освещение",
        "value": "Возможность установки систем освещения"
      },
      {
        "@type": "PropertyValue",
        "name": "Отопление",
        "value": "Возможность установки систем отопления"
      },
      {
        "@type": "PropertyValue",
        "name": "Вентиляция",
        "value": "Возможность установки систем вентиляции"
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
        "name": "Большие тенты",
        "item": "https://mobile-tent.ru/tenty/bolshie"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": pageData.page?.name || "Тент большой 10х20 — 200 м²",
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

  // ----- FAQ SCHEMA (customized for большой тент 10х20) -----
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Какие размеры у большого тента 10х20?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Большой тент имеет ширину 10 метров, длину 20 метров, высоту в коньке до 5.6 метров, высоту стен до 2.8 метров. Полезная площадь — ${area} м². Это просторный тент, идеально подходящий для проведения мероприятий: свадеб, корпоративов, выставок, спортивных соревнований, фестивалей, складов и торговых комплексов.`
        }
      },
      {
        "@type": "Question",
        "name": `Сколько человек вмещает большой тент 10х20?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `В большом тенте 10х20 площадью 200 м² можно разместить: до 200 гостей с банкетными столами, до 300 человек на фуршете, до 160 посадочных мест в ресторане, выставочные стенды, складское оборудование.`
        }
      },
      {
        "@type": "Question",
        "name": `Сколько стоит большой тент 10х20?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Цена зависит от комплектации: базовая — от ${prices[0]?.toLocaleString() || '332 000'} ₽, средняя — от ${prices[1]?.toLocaleString() || '432 000'} ₽, максимальная — от ${prices[2]?.toLocaleString() || '532 000'} ₽. Доставка по Москве и области рассчитывается индивидуально.`
        }
      },
      {
        "@type": "Question",
        "name": "Для каких мероприятий подходит большой тент 10х20?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Большой тент 10х20 идеально подходит для: свадеб (до 200 гостей), корпоративных мероприятий, выставок, спортивных соревнований, фестивалей, складских помещений, торговых комплексов, летних кафе, ресторанов под открытым небом."
        }
      },
      {
        "@type": "Question",
        "name": "Какая гарантия на большой тент 10х20?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Гарантия от производителя — 5 лет на каркас и тент. Срок службы при правильной эксплуатации — более 17 лет. Алюминиевый каркас устойчив к коррозии, ПВХ ткань защищена от УФ-излучения."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли установить отопление в большом тент 10х20?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, в большом тент 10х20 возможна установка различных систем отопления: тепловые пушки, инфракрасные обогреватели. Для зимнего использования рекомендуется утепленная версия."
        }
      },
      {
        "@type": "Question",
        "name": "Какой срок изготовления большого тента 10х20?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Стандартный срок изготовления большого тента 10х20 — от 6 до 12 рабочих дней. Монтаж на объекте занимает 1-2 дня бригадой профессиональных установщиков."
        }
      },
      {
        "@type": "Question",
        "name": "Нужно ли разрешение на установку большого тента 10х20 в Москве?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Для временных сооружений на частных территориях разрешение не требуется. Для установки на городских площадках может потребоваться согласование с администрацией."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли разделить большой тент 10х20 на зоны?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, большой тент 10х20 можно разделить на отдельные зоны с помощью специальных перегородок из ПВХ ткани. Это позволяет создать: банкетную зону, танцпол, сцену, лаунж-зону."
        }
      },
      {
        "@type": "Question",
        "name": "Какая ветровая нагрузка выдерживает большой тент 10х20?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Большой тент 10х20 в стандартной комплектации выдерживает ветровую нагрузку до 95 км/ч. С дополнительным креплением — до 115 км/ч. Снеговая нагрузка — до 135 кг/м²."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли заказать брендирование большого тента 10х20?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, мы предлагаем услуги по брендированию больших тентов: нанесение логотипов, рекламных надписей, полноцветная печать на тентах."
        }
      },
      {
        "@type": "Question",
        "name": "Доставляете ли большие тенты 10х20 в регионы России?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, доставляем большие тенты 10х20 по всей России: Москва, Санкт-Петербург, все города Московской области и другие регионы. Стоимость доставки рассчитывается индивидуально."
        }
      },
      {
        "@type": "Question",
        "name": "Какое освещение можно установить в большом тент 10х20?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "В большом тент 10х20 возможно установить различные системы освещения: подвесные люстры, светодиодные ленты, прожекторы, точечные светильники."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли использовать большой тент 10х20 как склад?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, большой тент 10х20 отлично подходит для использования в качестве складского помещения. Конструкция позволяет размещать стеллажи и оборудование."
        }
      },
      {
        "@type": "Question",
        "name": "Какой фундамент нужен для большого тента 10х20?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Для большого тента 10х20 требуется подготовленное основание: бетонная плита, асфальтированная площадка, утрамбованный грунт. Временная установка возможна с использованием анкерных креплений."
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
        {pageData.seo?.h1 || "Тент большой 10х20 — 200 м²"}
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