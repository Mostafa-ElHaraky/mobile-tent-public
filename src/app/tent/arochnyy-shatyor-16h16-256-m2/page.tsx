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
const PAGE_CODE = "arochnyy-shatyor-16h16-256-m2";

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
        id: 186,
        name: "Арочный шатёр 16х16 — 256 м²",
        code: PAGE_CODE
      },
      seo: {
        title: "Арочный шатёр 16х16 — 256 м² – купить гигантский шатер в Москве с доставкой: цена в интернет-магазине Mobile Tent",
        description: "Арочный шатёр 16х16 — 256 м² – купить гигантский шатер в Москве под заказ в компании Mobile Tent. Монументальная конструкция премиум-класса с площадью 256 квадратных метров, представляющая собой готовое здание для любых целей. Идеально подходит для строительства выставочных центров, спортивных комплексов, концертных залов, торговых центров, логистических терминалов, производственных цехов и складских комплексов. Инженерная конструкция с максимальными пролетами позволяет создавать полностью свободное пространство без внутренних опор для реализации самых амбициозных проектов. Вы можете выбрать любую комплектацию, размер и цвет изделия, а также заказать его брендирование. Мы используем только качественные и долговечные материалы, а также предлагаем адекватные цены, которые будут дешевле долгосрочный аренды! Гарантия от производителя — 5 лет.",
        keywords: "арочный шатёр 16х16, купить гигантский шатер 16х16, шатер 16 на 16, арочный шатер 256м2, гигантский шатер, здание из тента, шатер для выставочного центра, шатер для спортивного комплекса, шатер для концертного зала, тентовый шатер, быстровозводимый шатер, шатер для торгового центра, шатер для логистического терминала, шатер премиум-класса, инженерная конструкция, тентовое здание",
        h1: "Арочный шатёр 16х16 — 256 м²",
        url: `/tent/arochnyy-shatyor-16h16-256-m2`
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
  const seoTitle = data.seo?.title || "Арочный шатёр 16х16 — 256 м² – купить гигантский шатер в Москве с доставкой: цена в интернет-магазине Mobile Tent";
  const seoDescription = data.seo?.description || "Арочный шатёр 16х16 — 256 м² – купить гигантский шатер в Москве под заказ в компании Mobile Tent. Монументальная конструкция премиум-класса с площадью 256 квадратных метров, представляющая собой готовое здание для любых целей. Идеально подходит для строительства выставочных центров, спортивных комплексов, концертных залов, торговых центров, логистических терминалов, производственных цехов и складских комплексов. Инженерная конструкция с максимальными пролетами позволяет создавать полностью свободное пространство без внутренних опор для реализации самых амбициозных проектов. Вы можете выбрать любую комплектацию, размер и цвет изделия, а также заказать его брендирование. Мы используем только качественные и долговечные материалы, а также предлагаем адекватные цены, которые будут дешевле долгосрочный аренды! Гарантия от производителя — 5 лет.";
  const seoKeywords = data.seo?.keywords || "арочный шатёр 16х16, купить гигантский шатер 16х16, шатер 16 на 16, арочный шатер 256м2, гигантский шатер, здание из тента, шатер для выставочного центра, шатер для спортивного комплекса, шатер для концертного зала, тентовый шатер, быстровозводимый шатер, шатер для торгового центра, шатер для логистического терминала, шатер премиум-класса, инженерная конструкция, тентовое здание";
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
          alt: 'Арочный шатёр 16х16 - 256 м² гигантский тентовый ангар от производителя MOBILE TENT'
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
    "name": pageData.page?.name || "Арочный шатёр 16х16 — 256 м²",
    "description": pageData.seo?.description || "Арочный шатёр 16х16 — 256 м² – купить гигантский шатер в Москве под заказ в компании Mobile Tent. Монументальная конструкция премиум-класса с площадью 256 квадратных метров, представляющая собой готовое здание для любых целей. Идеально подходит для строительства выставочных центров, спортивных комплексов, концертных залов, торговых центров, логистических терминалов, производственных цехов и складских комплексов. Инженерная конструкция с максимальными пролетами позволяет создавать полностью свободное пространство без внутренних опор для реализации самых амбициозных проектов. Вы можете выбрать любую комплектацию, размер и цвет изделия.",
    "sku": `MOB-${PAGE_CODE}`,
    "mpn": `MOB-ARCH-16x16-256-GIANT`,
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
      "areaServed": ["Москва", "Московская область", "Россия", "СНГ", "Европа"],
      "url": `https://mobile-tent.ru${pageData.seo?.url || `/tent/${PAGE_CODE}`}`
    },
    "material": "Промышленная усиленная алюминиевая конструкция, ПВХ ткань 1000-1100 г/м²",
    "category": "Арочные шатры промышленного класса",
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
        "value": "до 6.0 м"
      },
      {
        "@type": "PropertyValue",
        "name": "Тип конструкции",
        "value": "Арочный шатер промышленного класса"
      },
      {
        "@type": "PropertyValue",
        "name": "Каркас",
        "value": "Промышленная усиленная алюминиевая конструкция с антикоррозийным покрытием, система ферм, четверные элементы жесткости, промышленные узлы соединений, усиленные опорные колонны"
      },
      {
        "@type": "PropertyValue",
        "name": "Тент",
        "value": "ПВХ ткань промышленного класса, плотность 1000-1100 г/м², с максимальной УФ-защитой, огнеупорными свойствами, морозостойкостью"
      },
      {
        "@type": "PropertyValue",
        "name": "Ветровая нагрузка",
        "value": "до 250 км/ч"
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
        "name": "Назначение",
        "value": "Выставочные центры, спортивные комплексы, концертные залы, торговые центры, логистические терминалы, производственные цеха, складские комплексы, ангары для авиатехники, ледовые дворцы, крытые стадионы, промышленные объекты"
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
        "name": pageData.page?.name || "Арочный шатёр 16х16 — 256 м²",
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

  // ----- FAQ SCHEMA (customized for арочный шатер 16х16 промышленного класса) -----
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Какие размеры у промышленного шатра 16х16?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Промышленный арочный шатер имеет ширину 16 метров, длину 16 метров, высоту в коньке до 6.0 метров. Полезная площадь — ${area} м². Это полноценное тентовое здание, предназначенное для капитального строительства и промышленного использования.`
        }
      },
      {
        "@type": "Question",
        "name": `Сколько стоит промышленный шатер 16х16?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Цена зависит от комплектации и промышленных требований: базовая — от ${prices[0]?.toLocaleString() || '372 000'} ₽, средняя — от ${prices[1]?.toLocaleString() || '472 000'} ₽, максимальная — от ${prices[2]?.toLocaleString() || '572 000'} ₽. Для конструкции такого масштаба требуется индивидуальное проектирование, промышленная усиленная конструкция и тент повышенной плотности 1000-1100 г/м². Стоимость доставки, фундамента и монтажа рассчитывается индивидуально по проекту.`
        }
      },
      {
        "@type": "Question",
        "name": "Для каких целей подходит промышленный шатер 16х16?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Промышленный шатер 16х16 идеально подходит для: строительства выставочных центров, спортивных комплексов с полноразмерными площадками, концертных залов, торговых центров, логистических терминалов, производственных цехов, складских комплексов, ангаров для авиатехники, ледовых дворцов, крытых стадионов, промышленных объектов, автовокзалов, транспортных терминалов."
        }
      },
      {
        "@type": "Question",
        "name": "Какая конструкция у промышленного шатра 16х16?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Шатер 16х16 имеет промышленную усиленную конструкцию с системой ферм, четверными элементами жесткости, промышленными узлами соединений, усиленными опорными колоннами, возможностью установки внутренних опор для особых нагрузок. Проводится индивидуальное проектирование с учетом всех строительных норм и требований, климатических условий, ветровых и снеговых нагрузок, сейсмической активности региона."
        }
      },
      {
        "@type": "Question",
        "name": "Нужно ли разрешение на строительство шатра 16х16?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Для капитального сооружения площадью 256 м² требуется полное оформление разрешительной документации, включая получение разрешения на строительство, прохождение государственной экспертизы, оформление прав на земельный участок. Мы предоставляем полное сопровождение: помощь в проектировании, подготовке проектной документации, согласовании с соответствующими органами, получении разрешений."
        }
      },
      {
        "@type": "Question",
        "name": "Какой срок службы и гарантия на промышленный шатер?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Гарантия от производителя — 15 лет на каркас и 7 лет на тент. Срок службы при правильной эксплуатации — более 50 лет благодаря промышленной конструкции. Алюминиевый каркас с максимальным антикоррозийным покрытием, ПВХ ткань промышленного класса плотностью 1000-1100 г/м² с максимальной УФ-защитой, огнеупорными свойствами, морозостойкостью до -60°C. Конструкция рассчитана на постоянную круглогодичную эксплуатацию в любых климатических условиях."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли утеплить промышленный шатер 16х16?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, возможна полная термоизоляция шатра для круглогодичного использования: установка утепленных сэндвич-панелей, монтаж системы отопления, вентиляции и кондиционирования, установка тепловых завес, утепленных ворот и дверей, двойных тентовых систем с воздушной прослойкой. Промышленная конструкция позволяет создавать полноценное отапливаемое здание с поддержанием комфортной температуры в любое время года."
        }
      },
      {
        "@type": "Question",
        "name": "Какой срок изготовления промышленного шатра 16х16?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Стандартный срок изготовления промышленного шатра 16х16 — от 45 до 60 рабочих дней, включая индивидуальное проектирование, изготовление промышленной конструкции, подготовку фундамента. Возможно ускоренное производство для срочных проектов с дополнительной комплектацией и увеличенной стоимостью."
        }
      },
      {
        "@type": "Question",
        "name": "Доставляете ли промышленные шатры 16х16 в регионы?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, доставляем по всей России, странам СНГ и Европы. Для конструкций такого масштаба организуется специальная логистика, доставка специализированным транспортом, профессиональный монтаж с использованием тяжелой спецтехники (автокраны грузоподъемностью до 100 тонн, манипуляторы, подъемники). Стоимость доставки и монтажа рассчитывается индивидуально в зависимости от удаленности, сложности установки, необходимых работ по подготовке фундамента."
        }
      },
      {
        "@type": "Question",
        "name": "Сколько человек вмещает промышленный шатер 16х16?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "В промышленном шатре 16х16 площадью 256 м² можно разместить: до 450-500 гостей с банкетными столами, до 550-600 человек на фуршете, до 300-350 посадочных мест в ресторане, полноценное футбольное поле для мини-футбола с трибунами, баскетбольную площадку международного класса, выставочную экспозицию с 50-60 стендами, складское хранение с высотными стеллажами, ледовую арену с трибунами, концертный зал со сценой."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли использовать шатер 16х16 как ангар для самолетов?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, промышленный шатер 16х16 может использоваться как ангар для малой авиации, бизнес-джетов, вертолетов, спецтехники. Ширина 16 метров и высота до 6 метров позволяют размещать легкие самолеты, вертолеты, крупногабаритную технику. Промышленная конструкция и возможность установки широких ангарных ворот делают его идеальным решением для авиационных ангаров, эллингов и технических баз."
        }
      },
      {
        "@type": "Question",
        "name": "Какие максимальные нагрузки выдерживает промышленный шатер 16х16?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Промышленный шатер 16х16 выдерживает экстремальные нагрузки: ветровую нагрузку до 250 км/ч (ураган 5 категории), снеговую нагрузку до 450 кг/м², сейсмическую нагрузку до 9 баллов. Может использоваться в любых климатических зонах, включая Арктику, прибрежные зоны с ураганными ветрами, горную местность и сейсмоопасные районы. Конструкция проходит индивидуальный расчет с учетом всех нормативов и требований промышленного строительства."
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
        {pageData.seo?.h1 || "Арочный шатёр 16х16 — 256 м²"}
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