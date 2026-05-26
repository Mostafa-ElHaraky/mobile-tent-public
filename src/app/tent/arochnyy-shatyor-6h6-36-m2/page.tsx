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
const PAGE_CODE = "arochnyy-shatyor-6h6-36-m2";

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
        id: 175,
        name: "Арочный шатёр 6х6 — 36м²",
        code: PAGE_CODE
      },
      seo: {
        title: "Арочный шатёр 6х6 — 36 м² – купить в Москве с доставкой: цена в интернет-магазине Mobile Tent",
        description: "Арочный шатёр 6х6 — 36 м² – купить в Москве под заказ в компании Mobile Tent. Квадратный шатер оптимального размера, идеально подходящий для проведения мероприятий, свадеб, выставок, кафе и ресторанов. Вы можете выбрать любую комплектацию, размер и цвет изделия, а также заказать его брендирование. Мы используем только качественные и долговечные материалы, а также предлагаем адекватные цены, которые будут дешевле долгосрочный аренды! Гарантия от производителя — 5 лет.",
        keywords: "арочный шатёр 6х6, купить арочный шатер 6х6, шатер 6 на 6, арочный шатер 36м2, квадратный шатер, шатер для мероприятий, шатер для свадьбы, шатер для кафе, тентовый шатер, быстровозводимый шатер, шатер для выставки",
        h1: "Арочный шатёр 6х6 — 36м²",
        url: `/tent/arochnyy-shatyor-6h6-36-m2`
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
  const seoTitle = data.seo?.title || "Арочный шатёр 6х6 — 36 м² – купить в Москве с доставкой: цена в интернет-магазине Mobile Tent";
  const seoDescription = data.seo?.description || "Арочный шатёр 6х6 — 36 м² – купить в Москве под заказ в компании Mobile Tent. Квадратный шатер оптимального размера, идеально подходящий для проведения мероприятий, свадеб, выставок, кафе и ресторанов. Вы можете выбрать любую комплектацию, размер и цвет изделия, а также заказать его брендирование. Мы используем только качественные и долговечные материалы, а также предлагаем адекватные цены, которые будут дешевле долгосрочный аренды! Гарантия от производителя — 5 лет.";
  const seoKeywords = data.seo?.keywords || "арочный шатёр 6х6, купить арочный шатер 6х6, шатер 6 на 6, арочный шатер 36м2, квадратный шатер, шатер для мероприятий, шатер для свадьбы, шатер для кафе, тентовый шатер, быстровозводимый шатер, шатер для выставки";
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
          alt: 'Арочный шатёр 6х6 - 36 м² от производителя MOBILE TENT'
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
  const width = 6;
  const length = 6;
  const area = 36; // 36 m²

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "image": "https://mobile-tent.ru/1(2).webp",
    "name": pageData.page?.name || "Арочный шатёр 6х6 — 36м²",
    "description": pageData.seo?.description || "Арочный шатёр 6х6 — 36 м² – купить в Москве под заказ в компании Mobile Tent. Квадратный шатер оптимального размера, идеально подходящий для проведения мероприятий, свадеб, выставок, кафе и ресторанов. Вы можете выбрать любую комплектацию, размер и цвет изделия.",
    "sku": `MOB-${PAGE_CODE}`,
    "mpn": `MOB-ARCH-6x6-36`,
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
    "material": "Алюминиевый каркас, ПВХ ткань 650-900 г/м²",
    "category": "Арочные шатры",
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
        "value": "Арочный шатер"
      },
      {
        "@type": "PropertyValue",
        "name": "Каркас",
        "value": "Алюминиевый профиль с антикоррозийным покрытием"
      },
      {
        "@type": "PropertyValue",
        "name": "Тент",
        "value": "ПВХ ткань, плотность 650-900 г/м², с УФ-защитой"
      },
      {
        "@type": "PropertyValue",
        "name": "Ветровая нагрузка",
        "value": "до 120 км/ч"
      },
      {
        "@type": "PropertyValue",
        "name": "Температурный режим",
        "value": "от -40 до +70°C"
      },
      {
        "@type": "PropertyValue",
        "name": "Назначение",
        "value": "Мероприятия, свадьбы, кафе, рестораны, выставки, торговые площади, склад"
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
        "name": pageData.page?.name || "Арочный шатёр 6х6 — 36м²",
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

  // ----- FAQ SCHEMA (customized for арочный шатер 6х6 with questions from document) -----
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Как арочный шатёр 6×6 помогает оптимизировать организацию мероприятия?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Арочный шатёр 6×6 помогает не просто закрыть зону от солнца или осадков, а выстроить более рациональную организацию пространства и снизить сопутствующие затраты на временную инфраструктуру. Он обеспечивает рациональное использование 36 м², позволяет зонировать пространство без капитальных перегородок, экономит на строительстве временных конструкций и может использоваться многократно на разных мероприятиях."
        }
      },
      {
        "@type": "Question",
        "name": "Как рационально используется площадь 36 м² в шатре 6×6?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Площадь 36 м² позволяет разместить до 20–24 гостей в фуршетном формате или организовать функциональную рабочую зону. Пространство используется с высокой эффективностью: внутри помещаются стойки регистрации, фуршетные столы, мебель для лаунж-зоны или презентационное оборудование без ощущения тесноты."
        }
      },
      {
        "@type": "Question",
        "name": "Как организовать зонирование в арочном шатре 6×6 без перегородок?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Арочная форма и открытые проёмы позволяют делить площадь на функциональные зоны с помощью мебели, света и декора, а не строительных конструкций. Это упрощает организацию пространства и снижает затраты на дополнительные элементы. Вы можете легко создать welcome-зону, лаунж-пространство или презентационную площадку в одном шатре."
        }
      },
      {
        "@type": "Question",
        "name": "Как арочный шатёр 6×6 экономит на строительстве временных конструкций?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Вместо возведения временных стен, навесов или павильонов арочный шатёр 6×6 метров выполняет сразу несколько функций: укрытие, визуальная рамка пространства и готовая зона для размещения гостей. Это даёт прямую оптимизацию бюджета мероприятия за счёт сокращения монтажных и строительных работ."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли использовать арочный шатёр 6×6 повторно на разных мероприятиях?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, арочный шатёр 6×6 м рассчитан на многократную эксплуатацию. Одна конструкция может использоваться на разных площадках и событиях, что повышает эффективность вложений и снижает долгосрочные затраты на организацию мероприятий. Это выгодное решение для ивент-агентств и организаторов."
        }
      },
      {
        "@type": "Question",
        "name": "Насколько гибок арочный шатёр 6×6 под разные форматы событий?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Один и тот же шатёр легко адаптируется под разные задачи: от welcome-зоны до лаунж-пространства или презентационной площадки. Такая универсальность упрощает организацию мероприятий и позволяет добиваться лучшей оптимизации ресурсов без увеличения занимаемой площади. Вы можете использовать его для свадеб, корпоративов, выставок и других событий."
        }
      },
      {
        "@type": "Question",
        "name": "Почему компактные шатры выгодны организаторам?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Компактные шатры выгодны организаторам по нескольким причинам: эффективность использования площади (формат 6×6 позволяет закрыть ключевые задачи без избыточных пространств); снижение затрат на организацию (не требуется строительство временных павильонов); оптимизация логистики на площадке (компактный шатёр проще разместить рядом с другими зонами); гибкость планировки (одну и ту же площадь можно адаптировать под разные сценарии); повторная эксплуатация на разных мероприятиях."
        }
      },
      {
        "@type": "Question",
        "name": "Какие преимущества у арочного шатра 6×6?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Основные преимущества: эффективность использования площади 36 м²; снижение затрат на организацию мероприятий; оптимизация логистики на площадке; гибкость планировки под разные сценарии; повторная эксплуатация на разных событиях. Это компактное, но функциональное решение для любых уличных мероприятий."
        }
      },
      {
        "@type": "Question",
        "name": "Чем отличается арочный шатёр 6×6 «Дюна» от стандартной модели?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Арочный шатёр 6×6 «Дюна» — это более прочный вариант, ориентированный на интенсивную эксплуатацию и повышенные требования к стабильности и ресурсу конструкции. Его стоит выбирать, если проект предполагает усиленные нагрузки, сложные погодные условия или длительное размещение на площадке."
        }
      },
      {
        "@type": "Question",
        "name": "Какие размеры у арочного шатра 6х6?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Арочный шатер имеет ширину 6 метров, длину 6 метров, высоту в коньке до 4.5 метров. Полезная площадь — ${area} м². Это квадратная конструкция оптимального размера, которая позволяет эффективно использовать пространство для различных мероприятий и задач.`
        }
      },
      {
        "@type": "Question",
        "name": `Сколько стоит арочный шатер 6х6?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Цена зависит от комплектации: базовая — от ${prices[0]?.toLocaleString() || '372 000'} ₽, средняя — от ${prices[1]?.toLocaleString() || '472 000'} ₽, максимальная — от ${prices[2]?.toLocaleString() || '572 000'} ₽. Доставка по Москве и области рассчитывается отдельно.`
        }
      },
      {
        "@type": "Question",
        "name": "Для каких целей подходит арочный шатер 6х6?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Арочный шатер 6х6 идеально подходит для: свадебных мероприятий и банкетов, кафе и ресторанов (летние веранды), выставочных павильонов, торговых площадей, складских нужд, спортивных мероприятий, зон отдыха, детских праздников, корпоративных мероприятий, welcome-зон и лаунж-пространств."
        }
      },
      {
        "@type": "Question",
        "name": "Нужно ли разрешение на установку арочного шатра 6х6 в Москве?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Для временных сооружений площадью до 36 м² разрешение не требуется. Для установки на длительный срок или в общественных местах может потребоваться согласование. Мы помогаем с оформлением необходимых документов."
        }
      },
      {
        "@type": "Question",
        "name": "Какой срок службы и гарантия на арочный шатер?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Гарантия от производителя — 5 лет на каркас и тент. Срок службы при правильной эксплуатации — более 15 лет. Алюминиевый каркас устойчив к коррозии, ПВХ ткань защищена от УФ-излучения."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли установить стены и двери в арочном шатре 6х6?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, возможна установка торцевых стен с дверями, окнами, воротами. Квадратная форма позволяет организовать несколько входных групп. Также доступны боковые стены, системы вентиляции, освещения и отопления. Возможно брендирование тента."
        }
      },
      {
        "@type": "Question",
        "name": "Какой срок изготовления арочного шатра 6х6?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Стандартный срок изготовления арочного шатра 6х6 — от 3 до 7 рабочих дней. Для срочных заказов возможна ускоренная сборка за 1-2 дня."
        }
      },
      {
        "@type": "Question",
        "name": "Доставляете ли арочные шатры 6х6 в Московскую область?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, доставляем по всей Москве и Московской области: Красногорск, Химки, Мытищи, Люберцы, Подольск, Одинцово, Балашиха, Раменское, Домодедово, Королев, Пушкино, Сергиев Посад, Коломна, Электросталь, Жуковский, Дмитров, Солнечногорск, Истра, Наро-Фоминск, Чехов, Ступино, Серпухов и другие города. Стоимость доставки — от 2000 рублей."
        }
      },
      {
        "@type": "Question",
        "name": "Сколько человек вмещает арочный шатер 6х6?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "В арочном шатре 6х6 площадью 36 м² можно разместить: до 20-24 гостей в фуршетном формате, до 40 гостей с банкетными столами, до 60-70 человек на фуршете, до 25-30 посадочных мест в кафе, либо использовать как выставочную площадь для 6-8 стендов. Квадратная форма позволяет оптимально организовать пространство."
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
        "ratingValue": "4.8",
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
        {pageData.seo?.h1 || "Арочный шатёр 6х6 — 36м²"}
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