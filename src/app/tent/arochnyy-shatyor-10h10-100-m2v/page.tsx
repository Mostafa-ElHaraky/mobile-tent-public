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
const PAGE_CODE = "arochnyy-shatyor-10h10-100-m2v";

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
        id: 182,
        name: "Арочный шатёр 10х10 — 100м² (V)",
        code: PAGE_CODE
      },
      seo: {
        title: "Арочный шатёр 10х10 — 100 м² (V) – купить усиленный большой шатер в Москве с доставкой: цена в интернет-магазине Mobile Tent",
        description: "Арочный шатёр 10х10 — 100 м² (V) – купить усиленный большой шатер в Москве под заказ в компании Mobile Tent. Просторный шатер с максимальным усилением конструкции, идеально подходящий для масштабных мероприятий, выставок, спортивных соревнований, торговых центров, складских комплексов и концертных площадок. Усиленный каркас с дополнительными элементами жесткости обеспечивает повышенную надежность и устойчивость к экстремальным ветровым нагрузкам. Огромное внутреннее пространство позволяет организовать мероприятие любого уровня сложности. Вы можете выбрать любую комплектацию, размер и цвет изделия, а также заказать его брендирование. Мы используем только качественные и долговечные материалы, а также предлагаем адекватные цены, которые будут дешевле долгосрочный аренды! Гарантия от производителя — 5 лет.",
        keywords: "арочный шатёр 10х10 усиленный, купить усиленный большой арочный шатер 10х10, шатер 10 на 10 усиленный, арочный шатер 100м2 усиленный, огромный усиленный шатер, шатер для мероприятий усиленный, шатер для выставки усиленный, шатер для концерта усиленный, шатер для спортивных соревнований усиленный, тентовый шатер усиленный, быстровозводимый шатер усиленный, шатер для склада усиленный, шатер для торгового центра усиленный",
        h1: "Арочный шатёр 10х10 — 100м² (V)",
        url: `/tent/arochnyy-shatyor-10h10-100-m2v`
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
  const seoTitle = data.seo?.title || "Арочный шатёр 10х10 — 100 м² (V) – купить усиленный большой шатер в Москве с доставкой: цена в интернет-магазине Mobile Tent";
  const seoDescription = data.seo?.description || "Арочный шатёр 10х10 — 100 м² (V) – купить усиленный большой шатер в Москве под заказ в компании Mobile Tent. Просторный шатер с максимальным усилением конструкции, идеально подходящий для масштабных мероприятий, выставок, спортивных соревнований, торговых центров, складских комплексов и концертных площадок. Усиленный каркас с дополнительными элементами жесткости обеспечивает повышенную надежность и устойчивость к экстремальным ветровым нагрузкам. Огромное внутреннее пространство позволяет организовать мероприятие любого уровня сложности. Вы можете выбрать любую комплектацию, размер и цвет изделия, а также заказать его брендирование. Мы используем только качественные и долговечные материалы, а также предлагаем адекватные цены, которые будут дешевле долгосрочный аренды! Гарантия от производителя — 5 лет.";
  const seoKeywords = data.seo?.keywords || "арочный шатёр 10х10 усиленный, купить усиленный большой арочный шатер 10х10, шатер 10 на 10 усиленный, арочный шатер 100м2 усиленный, огромный усиленный шатер, шатер для мероприятий усиленный, шатер для выставки усиленный, шатер для концерта усиленный, шатер для спортивных соревнований усиленный, тентовый шатер усиленный, быстровозводимый шатер усиленный, шатер для склада усиленный, шатер для торгового центра усиленный";
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
          alt: 'Арочный шатёр 10х10 - 100 м² усиленный (V) от производителя MOBILE TENT'
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
  const width = 10;
  const length = 10;
  const area = 100; // 100 m²

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "image": "https://mobile-tent.ru/1(1).webp",
    "name": pageData.page?.name || "Арочный шатёр 10х10 — 100м² (V)",
    "description": pageData.seo?.description || "Арочный шатёр 10х10 — 100 м² (V) – купить усиленный большой шатер в Москве под заказ в компании Mobile Tent. Просторный шатер с максимальным усилением конструкции, идеально подходящий для масштабных мероприятий, выставок, спортивных соревнований, торговых центров, складских комплексов и концертных площадок. Усиленный каркас с дополнительными элементами жесткости обеспечивает повышенную надежность и устойчивость к экстремальным ветровым нагрузкам. Огромное внутреннее пространство позволяет организовать мероприятие любого уровня сложности. Вы можете выбрать любую комплектацию, размер и цвет изделия.",
    "sku": `MOB-${PAGE_CODE}`,
    "mpn": `MOB-ARCH-10x10-100-HEAVY`,
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
    "material": "Максимально усиленный алюминиевый каркас, ПВХ ткань 650-900 г/м²",
    "category": "Арочные шатры усиленные",
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
        "value": "до 4.5 м"
      },
      {
        "@type": "PropertyValue",
        "name": "Тип конструкции",
        "value": "Арочный шатер максимально усиленный"
      },
      {
        "@type": "PropertyValue",
        "name": "Каркас",
        "value": "Максимально усиленный алюминиевый профиль с антикоррозийным покрытием, дополнительные элементы жесткости, усиленные узлы соединений"
      },
      {
        "@type": "PropertyValue",
        "name": "Тент",
        "value": "ПВХ ткань, плотность 650-900 г/м², с УФ-защитой"
      },
      {
        "@type": "PropertyValue",
        "name": "Ветровая нагрузка",
        "value": "до 180 км/ч (максимально усиленная)"
      },
      {
        "@type": "PropertyValue",
        "name": "Температурный режим",
        "value": "от -40 до +70°C"
      },
      {
        "@type": "PropertyValue",
        "name": "Назначение",
        "value": "Масштабные мероприятия, выставки, спортивные соревнования, торговые центры, складские комплексы, концертные площадки, фестивали, ангары, производственные цеха, объекты в регионах с экстремальными погодными условиями"
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
        "name": pageData.page?.name || "Арочный шатёр 10х10 — 100м² (V)",
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

  // ----- FAQ SCHEMA (customized for арочный шатер 10х10 усиленный) -----
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Какие размеры у максимально усиленного арочного шатра 10х10 (V)?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Максимально усиленный арочный шатер имеет ширину 10 метров, длину 10 метров, высоту в коньке до 4.5 метров. Полезная площадь — ${area} м². Это самая надежная версия нашей конструкции, предназначенная для экстремальных погодных условий и повышенных нагрузок.`
        }
      },
      {
        "@type": "Question",
        "name": `Сколько стоит максимально усиленный арочный шатер 10х10 (V)?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Цена зависит от комплектации: базовая — от ${prices[0]?.toLocaleString() || '372 000'} ₽, средняя — от ${prices[1]?.toLocaleString() || '472 000'} ₽, максимальная — от ${prices[2]?.toLocaleString() || '572 000'} ₽. Для конструкции площадью 100 м² с максимальным усилением применяется самый надежный каркас с увеличенным сечением профиля. Доставка по Москве и области рассчитывается отдельно. Обязателен профессиональный монтаж, стоимость которого рассчитывается индивидуально.`
        }
      },
      {
        "@type": "Question",
        "name": "Для каких целей подходит максимально усиленный шатер 10х10 (V)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Максимально усиленный арочный шатер 10х10 (V) идеально подходит для: масштабных мероприятий в регионах с суровым климатом, круглогодичных выставок, спортивных комплексов, постоянных торговых центров, складских комплексов с тяжелым оборудованием, концертных площадок, фестивалей, ангаров для спецтехники, производственных цехов, объектов в прибрежных зонах с сильными ветрами, горных районах и регионах с высокой снеговой нагрузкой."
        }
      },
      {
        "@type": "Question",
        "name": "Чем отличается максимально усиленный шатер 10х10(V) от обычного усиленного?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Максимально усиленный шатер 10х10(V) имеет самый мощный каркас с увеличенным сечением профиля, максимальное количество дополнительных элементов жесткости, усиленные узлы соединений, возможность установки дополнительных опорных колонн и усиленную систему растяжек. Это обеспечивает повышенную устойчивость к ветровым нагрузкам до 180 км/ч, позволяет выдерживать экстремальные снеговые нагрузки и увеличивает общий срок службы конструкции до 25+ лет. Маркировка (V) в данном случае обозначает максимальное усиление."
        }
      },
      {
        "@type": "Question",
        "name": "Нужно ли разрешение на установку максимально усиленного шатра 10х10 в Москве?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Для постоянных сооружений площадью 100 м² требуется получение разрешительной документации. Мы предоставляем полное сопровождение: помощь в проектировании, подготовке необходимых документов, согласовании с соответствующими органами. Для временных конструкций также может потребоваться согласование в зависимости от места и срока установки."
        }
      },
      {
        "@type": "Question",
        "name": "Какой срок службы и гарантия на максимально усиленный арочный шатер?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Гарантия от производителя — 7 лет на каркас и 5 лет на тент. Срок службы при правильной эксплуатации — более 25 лет благодаря максимально усиленной конструкции. Алюминиевый каркас с усиленным антикоррозийным покрытием, ПВХ ткань премиум-класса с повышенной УФ-защитой. Конструкция рассчитана на круглогодичное использование в любых климатических условиях."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли установить стены и двери в максимально усиленном шатре 10х10?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, возможна установка любых типов ограждений: торцевые стены с дверями, окнами, промышленными воротами (распашными, раздвижными, рольставнями), полное остекление, утепленные стены для круглогодичного использования. Усиленная конструкция позволяет устанавливать тяжелые стеновые панели, системы кондиционирования, отопления, вентиляции, освещения любого уровня. Возможно полноценное брендирование и архитектурное оформление."
        }
      },
      {
        "@type": "Question",
        "name": "Какой срок изготовления максимально усиленного арочного шатра 10х10?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Стандартный срок изготовления максимально усиленного арочного шатра 10х10 — от 14 до 21 рабочего дня, так как требуется индивидуальное проектирование, усиленная конструкция, больше материалов и сложная сборка. Возможно ускоренное производство для срочных проектов."
        }
      },
      {
        "@type": "Question",
        "name": "Доставляете ли максимально усиленные шатры 10х10 в Московскую область?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, доставляем по всей Москве и Московской области, а также в другие регионы России. Для конструкций такого размера обязательна доставка спецтранспортом и профессиональный монтаж с использованием спецтехники. Стоимость доставки и монтажа рассчитывается индивидуально в зависимости от удаленности и сложности установки."
        }
      },
      {
        "@type": "Question",
        "name": "Сколько человек вмещает максимально усиленный шатер 10х10?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "В максимально усиленном арочном шатре 10х10 площадью 100 м² можно разместить: до 200-250 гостей с банкетными столами, до 300-350 человек на фуршете, до 100-120 посадочных мест в ресторане, полноценную волейбольную или баскетбольную площадку, выставочную экспозицию с 20-25 стендами, складское хранение с высотными стеллажами."
        }
      },
      {
        "@type": "Question",
        "name": "Какие максимальные нагрузки выдерживает усиленный шатер 10х10(V)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Максимально усиленный шатер 10х10(V) выдерживает: ветровую нагрузку до 180 км/ч, снеговую нагрузку до 300 кг/м², может использоваться в регионах с особо суровым климатом, включая северные районы, прибрежные зоны и горную местность. Конструкция проходит индивидуальный расчет под конкретные климатические условия места установки."
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
        {pageData.seo?.h1 || "Арочный шатёр 10х10 — 100м² (V)"}
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