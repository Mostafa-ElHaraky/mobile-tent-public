import { Cardtent1 } from "./sections/Cardtent1/Cardtent1";
import { Cardtent2 } from "./sections/Cardtent2/Cardtent2";
import { Footer } from "../../../components/ui/Footer";
import type { Metadata } from "next";

// Types
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

const PAGE_CODE = "shatyor-pagoda-london-10h10";

async function getPageData(): Promise<PageData> {
  try {
    const response = await fetch(`page.php?code=${PAGE_CODE}`, {
      next: { revalidate: 3600 }
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    if (data.success) {
      return {
        success: true,
        page: data.page,
        seo: data.seo,
        content: data.content,
        priceConfigurations: data.priceConfigurations,
        contacts: data.contacts,
        reviews: data.reviews,
      };
    }
    throw new Error("API returned unsuccessful");
  } catch (error) {
    console.error("Error fetching page data:", error);
    // Fallback data for Pagoda tent London 10×10 m
    return {
      success: false,
      page: {
        id: 274,
        name: "Шатёр Пагода Лондон 10×10 м (100 м²)",
        code: PAGE_CODE,
      },
      seo: {
        title: "Шатёр Пагода Лондон 10×10 м (100 м²) – купить премиальный пагодный шатер в Москве | MOBILE TENT",
        description:
          "Шатёр Пагода Лондон 10×10 метров (площадь 100 м²) с острой крышей от производителя MOBILE TENT. Премиальная пагодная конструкция в британском стиле для масштабных банкетов, выставок, свадеб, ресторанов. Алюминиевый каркас, ПВХ тент 650 г/м². Цена от 430 000 ₽. Гарантия 5 лет. Доставка по Москве, МО и всей России.",
        keywords:
          "шатер пагода лондон 10х10, пагода лондон 10х10, шатер лондон 10 на 10, пагодный шатер премиум 10х10, шатер для банкета 10х10, шатер для свадьбы, шатер лондон тип",
        h1: "Шатёр Пагода Лондон 10×10 м – британская элегантность для масштабных мероприятий",
        url: `/tent/${PAGE_CODE}`,
      },
      content: { desktop: "", mobile: "" },
      priceConfigurations: [
        {
          name: "Базовая (Лондон)",
          isActive: true,
          currentPrice: 430000,
          originalPrice: 560000,
          discount: 23,
          description:
            "Премиальный алюминиевый каркас, ПВХ тент 650 г/м², боковые стенки, входная дверь. Для статусных мероприятий, банкетов, свадеб, выставок.",
        },
        {
          name: "Оптимальная (Лондон Премиум)",
          isActive: false,
          currentPrice: 620000,
          originalPrice: 830000,
          discount: 25,
          description:
            "Усиленный каркас, двойной тент 900 г/м² с утеплителем, окна ПВХ, система вентиляции, декоративные элементы. Для круглогодичного использования.",
        },
        {
          name: "Максимальная (Лондон Эксклюзив)",
          isActive: false,
          currentPrice: 870000,
          originalPrice: 1160000,
          discount: 25,
          description:
            "Стальной каркас с антикоррозийным покрытием, сэндвич-панели, освещение, отопление, кондиционирование, витрины, брендирование тента, люстры, акустическая обработка.",
        },
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
          map_url: "https://yandex.ru/maps/org/grand_tent/130300118530/",
          hours: "ПН - ПТ с 09:00 - 22:00 МСК",
          appointment: "По предварительной записи",
        },
        production: {
          name: "Производство г. Калуга",
          address: "Калужская область, г. Калуга, ул. Производственная, д. 15",
          map_url: "https://yandex.ru/maps/org/grand_tent/32724517904/",
          hours: "ПН - СБ с 08:00 - 20:00 МСК",
          appointment: "По договоренности",
        },
      },
      reviews: { text: [], letters: [], otzoviki: [] },
    };
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getPageData();
  const title = data.seo?.title || "Шатёр Пагода Лондон 10×10 м (100 м²) – купить премиальный пагодный шатер в Москве | MOBILE TENT";
  const description =
    data.seo?.description ||
    "Шатёр Пагода Лондон 10×10 метров (площадь 100 м²) с острой крышей от производителя MOBILE TENT. Премиальная пагодная конструкция в британском стиле для масштабных банкетов, выставок, свадеб, ресторанов. Алюминиевый каркас, ПВХ тент 650 г/м². Цена от 430 000 ₽. Гарантия 5 лет. Доставка по Москве, МО и всей России.";
  const keywords =
    data.seo?.keywords ||
    "шатер пагода лондон 10х10, пагода лондон 10х10, шатер лондон 10 на 10, пагодный шатер премиум 10х10";
  const url = `/tent/${PAGE_CODE}`;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `https://mobile-tent.ru${url}`,
      siteName: "MOBILE TENT",
      locale: "ru_RU",
      type: "website",
      images: [
        {
          url: "https://mobile-tent.ru/pagda1.webp",
          width: 1200,
          height: 630,
          alt: "Шатёр Пагода Лондон 10×10 метров с острой крышей",
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `https://mobile-tent.ru${url}`,
      languages: { "ru-RU": `https://mobile-tent.ru${url}` },
    },
    other: {
      "geo.region": "RU-MOS",
      "geo.placename": "Moscow, Krasnogorsk",
      "geo.position": "55.834305;37.269340",
      "ICBM": "55.834305, 37.269340",
      "yandex-verification": "4155dd43e89d7f12",
    },
    viewport: "width=device-width, initial-scale=1.0",
    formatDetection: {
      telephone: true,
      email: true,
      address: true,
    },
  };
}

export default async function PagodaLondon10x10Page() {
  const pageData = await getPageData();

  // Coordinates
  const officeLat = 55.834305;
  const officeLon = 37.269340;
  const productionLat = 54.556269;
  const productionLon = 36.261566;

  const officePlace = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: pageData.contacts?.office?.name || "Офис г. Красногорск",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Красногорск",
      addressRegion: "Московская область",
      addressCountry: "RU",
      streetAddress:
        pageData.contacts?.office?.address?.replace("Московская область, г. Красногорск, ", "") ||
        "ул. Молодежная. д. 4",
      postalCode: "143401",
    },
    geo: { "@type": "GeoCoordinates", latitude: officeLat.toString(), longitude: officeLon.toString() },
    hasMap: pageData.contacts?.office?.map_url || "https://yandex.ru/maps/org/grand_tent/130300118530/",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "22:00",
        timeZone: "Europe/Moscow",
      },
    ],
  };

  const productionPlace = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: pageData.contacts?.production?.name || "Производство г. Калуга",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Калуга",
      addressRegion: "Калужская область",
      addressCountry: "RU",
      streetAddress:
        pageData.contacts?.production?.address?.replace("Калужская область, г. Калуга, ", "") ||
        "ул. Производственная, д. 15",
      postalCode: "248000",
    },
    geo: { "@type": "GeoCoordinates", latitude: productionLat.toString(), longitude: productionLon.toString() },
    hasMap: pageData.contacts?.production?.map_url || "https://yandex.ru/maps/org/grand_tent/32724517904/",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "20:00",
        timeZone: "Europe/Moscow",
      },
    ],
  };

  const areaServedCities = [
    "Москва", "Санкт-Петербург", "Красногорск", "Химки", "Мытищи", "Люберцы", "Подольск", "Одинцово", "Балашиха",
    "Раменское", "Домодедово", "Королев", "Пушкино", "Сергиев Посад", "Коломна", "Электросталь", "Жуковский",
    "Дмитров", "Солнечногорск", "Истра", "Наро-Фоминск", "Чехов", "Ступино", "Серпухов", "Калуга", "Обнинск",
    "Тула", "Владимир", "Рязань", "Тверь", "Ярославль", "Кострома", "Иваново", "Смоленск", "Брянск", "Орел",
    "Липецк", "Тамбов", "Воронеж", "Нижний Новгород", "Казань", "Екатеринбург", "Новосибирск", "Красноярск",
    "Челябинск", "Самара", "Уфа", "Ростов-на-Дону", "Краснодар", "Сочи", "Волгоград", "Пермь", "Омск",
    "Саратов", "Белгород", "Курск", "Пенза", "Ульяновск", "Набережные Челны", "Владивосток", "Хабаровск",
  ];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "MOBILE TENT",
    image: "https://mobile-tent.ru/pagda1.webp",
    url: "https://mobile-tent.ru",
    telephone: pageData.contacts?.phone1 || "+7 (495) 760-42-20",
    email: pageData.contacts?.email || "info@mobile-tent.ru",
    priceRange: "₽₽₽ (420 000 - 900 000 ₽)",
    description:
      "Производство и продажа премиальных пагодных шатров Лондон, тентовых конструкций и быстровозводимых сооружений в Москве, Московской области и всей России. Гарантия 5 лет.",
    location: [officePlace, productionPlace],
    address: [officePlace.address, productionPlace.address],
    geo: officePlace.geo,
    areaServed: areaServedCities.map((city) => ({ "@type": "City", name: city })),
    hasMap: officePlace.hasMap,
    openingHoursSpecification: officePlace.openingHoursSpecification,
    paymentAccepted: "Наличные, Банковский перевод, Кредитные карты",
    currenciesAccepted: "RUB",
    sameAs: [
      pageData.contacts?.telegram || "https://t.me/+79857604220",
      pageData.contacts?.whatsapp ||
        "https://max.ru/u/f9LHodD0cOK_6DAtIeOn3T51Xpzrkg2i4RB2ZEjtVfXOwvURhiW6gtGMLrA",
    ],
    foundingDate: "2010",
    numberOfEmployees: "50-100",
  };

  const prices = pageData.priceConfigurations?.map((c) => c.currentPrice) || [430000, 620000, 870000];
  const lowPrice = Math.min(...prices);
  const highPrice = Math.max(...prices);
  const offerCount = pageData.priceConfigurations?.length || 3;
  const width = 10;
  const length = 10;
  const area = 100;
  const wallHeight = 4.0;
  const ridgeHeight = 10.0;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    image: "https://mobile-tent.ru/pagda1.webp",
    name: pageData.page?.name || "Шатёр Пагода Лондон 10×10 м (100 м²)",
    description:
      pageData.seo?.description ||
      "Шатёр Пагода Лондон 10×10 метров – премиальная пагодная конструкция в британском стиле с острой крышей для масштабных банкетов, выставок, свадеб, ресторанов. Элегантный дизайн, площадь 100 м², высота в коньке 10 м. Алюминиевый каркас, ПВХ тент 650 г/м², ветроустойчивость до 80 км/ч.",
    sku: `MOB-${PAGE_CODE}`,
    mpn: `MOB-PAGODA-LONDON-10x10`,
    brand: { "@type": "Brand", name: "MOBILE TENT", logo: "https://mobile-tent.ru/favicon.ico" },
    manufacturer: {
      "@type": "Organization",
      name: "MOBILE TENT",
      address: officePlace.address,
      telephone: pageData.contacts?.phone1 || "+7 (495) 760-42-20",
    },
    offers: {
      "@type": "AggregateOffer",
      offerCount: offerCount,
      lowPrice: lowPrice,
      highPrice: highPrice,
      priceCurrency: "RUB",
      availability: "https://schema.org/InStock",
      areaServed: areaServedCities,
      url: `https://mobile-tent.ru${pageData.seo?.url || `/tent/${PAGE_CODE}`}`,
    },
    material: "Алюминиевый каркас (сплав 6063) или сталь с порошковым покрытием, ПВХ ткань 650-900 г/м² с УФ-защитой",
    category: "Пагодные шатры / Премиум-конструкции Лондон",
    additionalProperty: [
      { "@type": "PropertyValue", name: "Ширина", value: `${width} м` },
      { "@type": "PropertyValue", name: "Длина", value: `${length} м` },
      { "@type": "PropertyValue", name: "Площадь", value: `${area} м²` },
      { "@type": "PropertyValue", name: "Высота стенки", value: `${wallHeight} м` },
      { "@type": "PropertyValue", name: "Высота в коньке", value: `до ${ridgeHeight} м` },
      { "@type": "PropertyValue", name: "Тип конструкции", value: "Пагодный шатер Лондон (острая крыша, британский стиль)" },
      { "@type": "PropertyValue", name: "Каркас", value: "Алюминиевый профиль с антикоррозийным покрытием / Сталь" },
      { "@type": "PropertyValue", name: "Тент", value: "ПВХ ткань, плотность 650-900 г/м², М2, Г1" },
      { "@type": "PropertyValue", name: "Ветровая нагрузка", value: "до 80 км/ч" },
      { "@type": "PropertyValue", name: "Фундамент", value: "Не требуется (установка на грунт, асфальт, бетон)" },
      { "@type": "PropertyValue", name: "Срок изготовления", value: "от 18 до 25 рабочих дней" },
      { "@type": "PropertyValue", name: "Гарантия", value: "5 лет на каркас и тент" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Комплектации пагодного шатра Лондон 10×10 м",
      itemListElement:
        pageData.priceConfigurations?.map((c, idx) => ({
          "@type": "Product",
          name: c.name,
          description: c.description,
          offers: {
            "@type": "Offer",
            price: c.currentPrice,
            priceCurrency: "RUB",
            priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split("T")[0],
            availability: "https://schema.org/InStock",
            eligibleRegion: { "@type": "Country", name: "RU" },
          },
          position: idx + 1,
        })) || [],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "17",
      bestRating: "5",
      worstRating: "1",
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MOBILE TENT",
    url: "https://mobile-tent.ru",
    logo: "https://mobile-tent.ru/favicon.ico",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: pageData.contacts?.phone1 || "+7 (495) 760-42-20",
        contactType: "customer service",
        areaServed: "RU",
        availableLanguage: ["Russian", "English"],
      },
      {
        "@type": "ContactPoint",
        telephone: pageData.contacts?.phone2 || "+7 (985) 760-42-20",
        contactType: "sales",
        areaServed: "RU",
        availableLanguage: "Russian",
      },
    ],
    address: officePlace.address,
    email: pageData.contacts?.email || "info@mobile-tent.ru",
    sameAs: [
      "https://t.me/+79857604220",
      "https://max.ru/u/f9LHodD0cOK_6DAtIeOn3T51Xpzrkg2i4RB2ZEjtVfXOwvURhiW6gtGMLrA",
    ],
    foundingDate: "2010",
    numberOfEmployees: "50-100",
    legalName: "ООО 'МОБАЙЛ ТЕНТ'",
    taxID: "7728388234",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: "https://mobile-tent.ru/" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Пагодные шатры Лондон",
        item: "https://mobile-tent.ru/shatry-i-navesy/pagoda",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: pageData.page?.name || "Шатёр Пагода Лондон 10×10 м",
        item: `https://mobile-tent.ru${pageData.seo?.url || `/tent/${PAGE_CODE}`}`,
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "MOBILE TENT",
    url: "https://mobile-tent.ru",
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: "https://mobile-tent.ru/search?q={search_term_string}" },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "ru-RU",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Чем отличается шатёр Пагода Лондон 10×10 м от стандартной пагоды?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Шатёр Пагода Лондон имеет более острую крышу (увеличенный угол наклона), усиленный каркас и премиальные материалы отделки. Дизайн выполнен в классическом британском стиле, что придаёт мероприятию особый статус и элегантность.",
        },
      },
      {
        "@type": "Question",
        name: "Какую площадь имеет шатёр Пагода Лондон 10×10 м?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Площадь шатра составляет 100 м², высота стенки – 4,0 метра, высота в коньке – до 10 метров. Это позволяет комфортно разместить до 70-80 гостей за столами или до 100-120 человек на фуршет.",
        },
      },
      {
        "@type": "Question",
        name: "Сколько стоит шатёр Пагода Лондон 10×10 м под ключ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Цена от ${prices[0]?.toLocaleString() || "430 000"} ₽ за базовую комплектацию Лондон, премиум версия – от ${prices[1]?.toLocaleString() || "620 000"} ₽, эксклюзивная – от ${prices[2]?.toLocaleString() || "870 000"} ₽. Включает каркас, тент, боковые стенки, дверь. Доставка рассчитывается отдельно.`,
        },
      },
      {
        "@type": "Question",
        name: "Нужен ли фундамент для шатра Пагода Лондон 10×10 м?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Капитальный фундамент не требуется, но из-за увеличенного размера рекомендуется усиленная подготовка площадки (бетонные блоки, утяжелители). Устанавливается на ровную поверхность (асфальт, бетон, утрамбованный грунт).",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли использовать шатёр Пагода Лондон 10×10 м зимой?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да, при выборе утеплённой комплектации (двойной тент с утеплителем) и установке системы отопления шатер пригоден для круглогодичной эксплуатации до -30°C.",
        },
      },
      {
        "@type": "Question",
        name: "Какой срок службы и гарантия?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Гарантия от производителя – 5 лет на каркас и тент. Срок службы – более 15 лет. Алюминиевый каркас устойчив к коррозии, ПВХ тент защищён от УФ-излучения.",
        },
      },
      {
        "@type": "Question",
        name: "Доставляете ли шатры Пагода Лондон 10×10 м в регионы России?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да, доставляем по всей России через транспортные компании (Деловые линии, ПЭК, КИТ, ЖелДорЭкспедиция). Возможен выезд на монтаж в любой регион.",
        },
      },
      {
        "@type": "Question",
        name: "Для каких целей лучше всего подходит шатёр Пагода Лондон 10×10 м?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Идеален для: масштабных свадеб и банкетов, крупных корпоративных мероприятий, выставочных павильонов, конференц-залов, ресторанных веранд, фотостудий, временных торговых центров, фестивальных площадок.",
        },
      },
    ],
  };

  const hasReviews =
    pageData.reviews?.text?.length > 0 ||
    pageData.reviews?.letters?.length > 0 ||
    pageData.reviews?.otzoviki?.length > 0;
  let reviewSchema = null;
  if (hasReviews) {
    reviewSchema = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: pageData.page?.name,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount:
          (pageData.reviews?.text?.length || 0) +
          (pageData.reviews?.letters?.length || 0) +
          (pageData.reviews?.otzoviki?.length || 0),
        bestRating: "5",
        worstRating: "1",
      },
    };
  }

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {reviewSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      )}

      <h1 className="sr-only">{pageData.seo?.h1 || "Шатёр Пагода Лондон 10×10 м – британская элегантность для масштабных мероприятий"}</h1>

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