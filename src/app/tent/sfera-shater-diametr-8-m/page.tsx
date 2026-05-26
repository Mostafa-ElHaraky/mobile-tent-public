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

const PAGE_CODE = "sfera-shater-diametr-8-m";

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
    // Fallback data for the spherical tent
    return {
      success: false,
      page: {
        id: 0,
        name: "Сфера шатер диаметр 8 м (50 м²)",
        code: PAGE_CODE,
      },
      seo: {
        title: "Сфера шатер диаметр 8 м (50 м²) – купить сферический шатер в Москве | MOBILE TENT",
        description:
          "Сферический шатер диаметром 8 метров (площадь ~50 м²) от производителя MOBILE TENT. Уникальная купольная конструкция для мероприятий, выставок, кафе, складов. Алюминиевый каркас, ПВХ тент 900 г/м². Цена от 380 000 ₽. Гарантия 5 лет. Доставка по Москве, МО и всей России.",
        keywords:
          "сфера шатер диаметр 8 м, сферический шатер 8 метров, купить сферический шатер, шатер купол, геодезический купол, шатер сфера, тентовый купол, шатер для мероприятий, шатер кафе, шатер выставка",
        h1: "Сфера шатер диаметром 8 метров – купольное пространство для вашего бизнеса",
        url: `/tent/${PAGE_CODE}`,
      },
      content: { desktop: "", mobile: "" },
      priceConfigurations: [
        {
          name: "Базовая (мероприятия)",
          isActive: true,
          currentPrice: 380000,
          originalPrice: 450000,
          discount: 16,
          description:
            "Алюминиевый каркас, ПВХ тент 650 г/м², стандартная дверь, вентиляционные люки. Для сезонных мероприятий, кафе, выставок.",
        },
        {
          name: "Оптимальная (утепленная)",
          isActive: false,
          currentPrice: 520000,
          originalPrice: 620000,
          discount: 16,
          description:
            "Усиленный каркас, двойной тент 900 г/м² с утеплителем, окна ПВХ, система вентиляции. Для круглогодичного использования.",
        },
        {
          name: "Максимальная (ресторан/офис)",
          isActive: false,
          currentPrice: 680000,
          originalPrice: 820000,
          discount: 17,
          description:
            "Стальной каркас с антикоррозийным покрытием, сэндвич-панели, освещение, отопление, кондиционирование, отделка входа.",
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
  const title = data.seo?.title || "Сфера шатер диаметр 8 м (50 м²) – купить сферический шатер в Москве | MOBILE TENT";
  const description =
    data.seo?.description ||
    "Сферический шатер диаметром 8 метров (площадь ~50 м²) от производителя MOBILE TENT. Уникальная купольная конструкция для мероприятий, выставок, кафе, складов. Алюминиевый каркас, ПВХ тент 900 г/м². Цена от 380 000 ₽. Гарантия 5 лет. Доставка по Москве, МО и всей России.";
  const keywords =
    data.seo?.keywords ||
    "сфера шатер диаметр 8 м, сферический шатер 8 метров, купить сферический шатер, шатер купол, геодезический купол";
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
          url: "https://mobile-tent.ru/spher26,1.webp",
          width: 1200,
          height: 630,
          alt: "Сфера шатер диаметр 8 метров",
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

export default async function SphereTentPage() {
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
    image: "https://mobile-tent.ru/spher26,1.webp",
    url: "https://mobile-tent.ru",
    telephone: pageData.contacts?.phone1 || "+7 (495) 760-42-20",
    email: pageData.contacts?.email || "info@mobile-tent.ru",
    priceRange: "₽₽₽ (350 000 - 700 000 ₽)",
    description:
      "Производство и продажа сферических шатров, купольных конструкций и быстровозводимых сооружений в Москве, Московской области и всей России. Гарантия 5 лет.",
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

  const prices = pageData.priceConfigurations?.map((c) => c.currentPrice) || [380000, 520000, 680000];
  const lowPrice = Math.min(...prices);
  const highPrice = Math.max(...prices);
  const offerCount = pageData.priceConfigurations?.length || 3;
  const diameter = 8;
  const area = 50;
  const height = 8;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    image: "https://mobile-tent.ru/spher26,1.webp",
    name: pageData.page?.name || "Сфера шатер диаметр 8 м (≈50 м²)",
    description:
      pageData.seo?.description ||
      "Сферический шатер диаметром 8 метров – купольная конструкция для мероприятий, кафе, складов, выставок. Просторное внутреннее пространство без опор, высота 8 м. Алюминиевый каркас, ПВХ тент 900 г/м², ветроустойчивость до 120 км/ч.",
    sku: `MOB-${PAGE_CODE}`,
    mpn: `MOB-SPHERE-8M`,
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
    category: "Сферические шатры / Купольные конструкции",
    additionalProperty: [
      { "@type": "PropertyValue", name: "Диаметр", value: `${diameter} м` },
      { "@type": "PropertyValue", name: "Площадь пола", value: `≈${area} м²` },
      { "@type": "PropertyValue", name: "Высота", value: `${height} м` },
      { "@type": "PropertyValue", name: "Тип конструкции", value: "Сферический купол" },
      { "@type": "PropertyValue", name: "Каркас", value: "Алюминиевый профиль с антикоррозийным покрытием / Сталь горячеоцинкованная" },
      { "@type": "PropertyValue", name: "Тент", value: "ПВХ ткань, плотность 650-900 г/м², М2, Г1" },
      { "@type": "PropertyValue", name: "Ветровая нагрузка", value: "до 120 км/ч (32 м/с)" },
      { "@type": "PropertyValue", name: "Снеговая нагрузка", value: "до 120 кг/м²" },
      { "@type": "PropertyValue", name: "Температурный режим", value: "от -40 до +70°C" },
      { "@type": "PropertyValue", name: "Назначение", value: "Мероприятия, свадьбы, кафе, рестораны, выставки, склады, укрытие техники" },
      { "@type": "PropertyValue", name: "Фундамент", value: "Не требуется (установка на грунт, асфальт, бетон, блоки)" },
      { "@type": "PropertyValue", name: "Срок изготовления", value: "от 7 до 14 рабочих дней" },
      { "@type": "PropertyValue", name: "Гарантия", value: "5 лет на каркас и тент, 25 лет на антикоррозийную обработку стали" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Комплектации сферического шатра 8 м",
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
      reviewCount: "38",
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
        name: "Сферические шатры",
        item: "https://mobile-tent.ru/dlya-cafe-sfera-tent",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: pageData.page?.name || "Сфера шатер диаметр 8 м",
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
        name: "Какую площадь имеет сферический шатер диаметром 8 м?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Площадь пола составляет примерно 50 м², внутренняя высота – 8 метров. Это позволяет комфортно разместить до 40-50 гостей за столами или до 70 человек на фуршет.",
        },
      },
      {
        "@type": "Question",
        name: "Сколько стоит сфера шатер 8 м под ключ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Цена от ${prices[0]?.toLocaleString() || "380 000"} ₽ за базовую комплектацию, утеплённая – от ${prices[1]?.toLocaleString() || "520 000"} ₽, максимальная (ресторан/офис) – от ${prices[2]?.toLocaleString() || "680 000"} ₽. Включает каркас, тент, двери, окна. Доставка рассчитывается отдельно.`,
        },
      },
      {
        "@type": "Question",
        name: "Нужен ли фундамент для сферического шатра?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Нет, капитальный фундамент не требуется. Устанавливается на ровную площадку (грунт, асфальт, бетон, бетонные блоки) с фиксацией анкерами.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли использовать шатер-сферу зимой?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да, при выборе утеплённой комплектации (двойной тент с утеплителем или сэндвич-панели) и установке системы отопления шатер пригоден для круглогодичной эксплуатации до -40°C.",
        },
      },
      {
        "@type": "Question",
        name: "Какой срок службы и гарантия?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Гарантия 5 лет на каркас и тент, срок службы более 15 лет. Алюминиевый каркас устойчив к коррозии, ПВХ тент защищён от УФ-излучения.",
        },
      },
      {
        "@type": "Question",
        name: "Доставляете ли сферические шатры в регионы?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да, доставляем по всей России через ТК (Деловые линии, ПЭК и др.). Возможен выезд на монтаж в любой регион.",
        },
      },
      {
        "@type": "Question",
        name: "Какие мероприятия можно проводить в сфере 8 м?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Идеален для свадеб, банкетов, дней рождения, корпоративов, выставок, ярмарок, кафе, ресторанов, временных магазинов, складов, укрытия техники.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли установить в сфере окна и двери?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да, возможны стеклопакеты ПВХ, входные двери, раздвижные системы, рольставни, а также системы вентиляции, освещения и отопления.",
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

      <h1 className="sr-only">{pageData.seo?.h1 || "Сфера шатер диаметром 8 метров – купольное пространство для вашего бизнеса"}</h1>

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