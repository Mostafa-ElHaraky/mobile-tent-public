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
const PAGE_CODE = "arochnyy-shatyor-8h8-64-m2";

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
        id: 178,
        name: "Арочный шатёр 8х8 — 64 м²",
        code: PAGE_CODE
      },
      seo: {
        title: "Арочный шатёр 8х8 — 64 м² – купить в Москве с доставкой: цена в интернет-магазине Mobile Tent",
        description: "Арочный шатёр 8х8 — 64 м² – купить в Москве под заказ в компании Mobile Tent. Просторный квадратный шатер, идеально подходящий для масштабных мероприятий, свадеб, выставок, спортивных соревнований, складских комплексов и торговых центров. Большая площадь позволяет организовать пространство любой сложности. Вы можете выбрать любую комплектацию, размер и цвет изделия, а также заказать его брендирование. Мы используем только качественные и долговечные материалы, а также предлагаем адекватные цены, которые будут дешевле долгосрочный аренды! Гарантия от производителя — 5 лет.",
        keywords: "арочный шатёр 8х8, купить арочный шатер 8х8, шатер 8 на 8, арочный шатер 64м2, большой шатер, квадратный шатер, шатер для мероприятий, шатер для свадьбы, шатер для выставки, тентовый шатер, быстровозводимый шатер, шатер для склада, шатер для спортивных мероприятий",
        h1: "Арочный шатёр 8х8 — 64 м²",
        url: `/tent/arochnyy-shatyor-8h8-64-m2`
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
  const seoTitle = data.seo?.title || "Арочный шатёр 8х8 — 64 м² – купить в Москве с доставкой: цена в интернет-магазине Mobile Tent";
  const seoDescription = data.seo?.description || "Арочный шатёр 8х8 — 64 м² – купить в Москве под заказ в компании Mobile Tent. Просторный квадратный шатер, идеально подходящий для масштабных мероприятий, свадеб, выставок, спортивных соревнований, складских комплексов и торговых центров. Большая площадь позволяет организовать пространство любой сложности. Вы можете выбрать любую комплектацию, размер и цвет изделия, а также заказать его брендирование. Мы используем только качественные и долговечные материалы, а также предлагаем адекватные цены, которые будут дешевле долгосрочный аренды! Гарантия от производителя — 5 лет.";
  const seoKeywords = data.seo?.keywords || "арочный шатёр 8х8, купить арочный шатер 8х8, шатер 8 на 8, арочный шатер 64м2, большой шатер, квадратный шатер, шатер для мероприятий, шатер для свадьбы, шатер для выставки, тентовый шатер, быстровозводимый шатер, шатер для склада, шатер для спортивных мероприятий";
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
          alt: 'Арочный шатёр 8х8 - 64 м² от производителя MOBILE TENT'
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
  const width = 8;
  const length = 8;
  const area = 64; // 64 m²

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "image": "https://mobile-tent.ru/1(2).webp",
    "name": pageData.page?.name || "Арочный шатёр 8х8 — 64 м²",
    "description": pageData.seo?.description || "Арочный шатёр 8х8 — 64 м² – купить в Москве под заказ в компании Mobile Tent. Просторный квадратный шатер, идеально подходящий для масштабных мероприятий, свадеб, выставок, спортивных соревнований, складских комплексов и торговых центров. Большая площадь позволяет организовать пространство любой сложности. Вы можете выбрать любую комплектацию, размер и цвет изделия.",
    "sku": `MOB-${PAGE_CODE}`,
    "mpn": `MOB-ARCH-8x8-64`,
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
        "value": "Масштабные мероприятия, свадьбы, выставки, спортивные соревнования, складские комплексы, торговые центры, концертные площадки"
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
        "name": pageData.page?.name || "Арочный шатёр 8х8 — 64 м²",
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

  // ----- FAQ SCHEMA (customized for арочный шатер 8х8 with questions from Дюна document) -----
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Когда выбирают арочный шатёр 8×8 «Дюна»?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Размер 8×8 метров — сбалансированный вариант для задач среднего масштаба. Его выбирают тогда, когда нужно разместить гостей, оборудование и функциональные зоны без ощущения тесноты. Шатёр такого формата подходит для: мероприятий среднего масштаба, где важно организовать единое крытое пространство; частных и корпоративных событий: свадеб, юбилеев, презентаций, тимбилдингов; выездных проектов, где требуется мобильное и быстро монтируемое сооружение. В каждом из этих случаев арочный шатёр 8×8 «Дюна» становится решением, которое легко адаптируется под конкретный формат мероприятия.`
        }
      },
      {
        "@type": "Question",
        "name": `Какие задачи закрывает шатёр «Дюна»?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Модель «Дюна» разработана с учётом практических задач, которые возникают при организации событий:\n\n• Защита от непогоды: Арочный шатёр 8×8 «Дюна» создаёт защищённое пространство, укрытое от дождя, ветра и избыточного солнца. Это позволяет проводить мероприятия в более стабильных условиях и снижает зависимость от прогноза погоды.\n\n• Площадь и вместимость: Площадь шатра составляет 64 м², что даёт достаточно пространства для зонирования. По вместимости конструкция подходит в среднем до 42 человек — в зависимости от выбранной расстановки мебели и сценария события.\n\n• Комфорт для гостей: Высота конструкции и арочная форма создают ощущение простора внутри. Гости не чувствуют замкнутости, а организаторы получают удобное пространство для расстановки столов, сцены или других элементов.\n\n• Презентабельный внешний вид: Арочный шатёр 8×8 «Дюна» выглядит аккуратно и современно, поэтому хорошо вписывается в разные площадки — от загородных территорий до городских пространств. Это важно, когда внешний облик площадки является частью общего впечатления от события.`
        }
      },
      {
        "@type": "Question",
        "name": `Что такое крестовина «паук» в конструкции шатра Дюна?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Крестовина «паук» — это центральный соединительный узел, который объединяет основные дуги каркаса. Он распределяет нагрузку сразу по нескольким направлениям. Благодаря этому конструкция работает как единое целое, а не как набор отдельных дуг, что значительно повышает надёжность шатра.`
        }
      },
      {
        "@type": "Question",
        "name": `Что такое фермы «паук» в шатре Дюна?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Фермы «паук» — это дополнительные металлические элементы, которые связывают дуги между собой и усиливают верхнюю часть шатра. Благодаря этому крыша становится жёстче, лучше держит форму и устойчивее к внешним нагрузкам, что особенно важно при неблагоприятных погодных условиях.`
        }
      },
      {
        "@type": "Question",
        "name": `Какая усиленная пространственная схема используется в шатре Дюна?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `В «Дюне» каркас работает как единая объёмная конструкция. Это более надёжное инженерное решение, которое помогает шатру сохранять стабильность, а организаторам — уверенность в том, что площадка справится с поставленной задачей. Усиление достигается за счёт специальных узлов и дополнительных элементов каркаса, включая крестовину «паук» и фермы «паук».`
        }
      },
      {
        "@type": "Question",
        "name": `Как заказать арочный шатёр 8×8 «Дюна» под свой формат мероприятия?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Чтобы шатёр действительно стал эффективным решением под ваш формат мероприятия, важно правильно подобрать комплектацию. Вы можете выбрать тип стен, уровень закрытости, дополнительные элементы для комфорта и технического оснащения. Мы поможем учесть особенности площадки, сезон проведения и предполагаемую нагрузку, чтобы обеспечить максимальный комфорт гостей и стабильную работу конструкции. Свяжитесь с нами, опишите свою задачу — и мы подберём оптимальный вариант шатра 8×8 «Дюна» под ваши условия.`
        }
      },
      {
        "@type": "Question",
        "name": `Какие размеры у арочного шатра 8х8?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Арочный шатер имеет ширину 8 метров, длину 8 метров, высоту в коньке до 4.5 метров. Полезная площадь — 64 м². Это просторная квадратная конструкция, которая позволяет организовывать мероприятия любого масштаба, создавать складские комплексы или выставочные павильоны.`
        }
      },
      {
        "@type": "Question",
        "name": `Сколько стоит арочный шатер 8х8?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Цена зависит от комплектации: базовая — от ${prices[0]?.toLocaleString() || '372 000'} ₽, средняя — от ${prices[1]?.toLocaleString() || '472 000'} ₽, максимальная — от ${prices[2]?.toLocaleString() || '572 000'} ₽. Доставка по Москве и области рассчитывается отдельно. Для больших конструкций возможен индивидуальный расчет стоимости монтажа.`
        }
      },
      {
        "@type": "Question",
        "name": "Для каких целей подходит арочный шатер 8х8?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Арочный шатер 8х8 идеально подходит для: масштабных свадебных мероприятий и банкетов (до 100 гостей), выставочных павильонов, спортивных соревнований, складских комплексов, торговых центров, концертных площадок, фестивалей, корпоративных мероприятий, временных укрытий для техники и оборудования."
        }
      },
      {
        "@type": "Question",
        "name": "Нужно ли разрешение на установку арочного шатра 8х8 в Москве?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Для временных сооружений площадью до 64 м² может потребоваться уведомление или согласование в зависимости от места установки и срока использования. Мы помогаем с оформлением необходимых документов и консультируем по всем вопросам."
        }
      },
      {
        "@type": "Question",
        "name": "Какой срок службы и гарантия на арочный шатер?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Гарантия от производителя — 5 лет на каркас и тент. Срок службы при правильной эксплуатации — более 15 лет. Алюминиевый каркас устойчив к коррозии, ПВХ ткань защищена от УФ-излучения. Для больших конструкций предусмотрено усиление каркаса."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли установить стены и двери в арочном шатре 8х8?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, возможна установка торцевых стен с дверями, окнами, воротами. Квадратная форма большой площади позволяет организовать несколько входных групп, зонировать внутреннее пространство, установить перегородки. Также доступны боковые стены, системы вентиляции, освещения, отопления и кондиционирования. Возможно брендирование тента."
        }
      },
      {
        "@type": "Question",
        "name": "Какой срок изготовления арочного шатра 8х8?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Стандартный срок изготовления арочного шатра 8х8 — от 5 до 10 рабочих дней, так как требуется больше материалов и усиление конструкции. Для срочных заказов возможна ускоренная сборка за 2-3 дня."
        }
      },
      {
        "@type": "Question",
        "name": "Доставляете ли арочные шатры 8х8 в Московскую область?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, доставляем по всей Москве и Московской области: Красногорск, Химки, Мытищи, Люберцы, Подольск, Одинцово, Балашиха, Раменское, Домодедово, Королев, Пушкино, Сергиев Посад, Коломна, Электросталь, Жуковский, Дмитров, Солнечногорск, Истра, Наро-Фоминск, Чехов, Ступино, Серпухов и другие города. Для больших конструкций возможна доставка спецтранспортом. Стоимость доставки — от 3000 рублей."
        }
      },
      {
        "@type": "Question",
        "name": "Сколько человек вмещает арочный шатер 8х8?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "В арочном шатре 8х8 площадью 64 м² можно разместить: до 80-100 гостей с банкетными столами, до 120-150 человек на фуршете, до 50-60 посадочных мест в кафе/ресторане, либо использовать как выставочную площадь для 10-15 стендов. По вместимости конструкция подходит в среднем до 42 человек с комфортной рассадкой — в зависимости от выбранной расстановки мебели и сценария события."
        }
      },
      {
        "@type": "Question",
        "name": "Нужно ли усиление для шатра 8х8?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Для шатра 8х8 мы используем усиленный каркас с дополнительными элементами жесткости, включая крестовину «паук» и фермы «паук». При необходимости устанавливаются дополнительные опоры и растяжки для обеспечения максимальной надежности конструкции при ветровых нагрузках. Все расчеты производятся индивидуально с учетом места установки."
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
        {pageData.seo?.h1 || "Арочный шатёр 8х8 — 64 м²"}
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