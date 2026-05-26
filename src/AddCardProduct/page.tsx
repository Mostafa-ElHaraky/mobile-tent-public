import { Cardtent1 } from "./sections/Cardtent1/Cardtent1";
import { Cardtent2 } from "./sections/Cardtent2/Cardtent2";
import { Footer } from "@/components/ui/Footer";
import type { Metadata } from "next";

// --- New Types for the product card fields ---
interface ProductSpecs {
  productCode: string;          // Код товара
  size: string;                 // Размер (e.g., "10х5")
  area: number;                 // Площадь
  shape: "Прямоугольник" | "Квадрат"; // Форма
  images: string[];             // Фото (массив URL)
  url3d: string;                // 3D адрес
  capacity: string;             // Вместимость
  width: number;                // Ширина
  length: number;               // Длина
  archHeight: number;           // Высота входной арки
  ridgeHeight: number;          // Высота в коньке
  inStock: "Да" | "Под заказ";  // В наличии
}

interface PriceConfiguration {
  name: string;
  isActive: boolean;
  currentPrice: number;
  originalPrice: number;
  discount: number;
  description: string;
}

interface OtherSize {
  name: string;      // e.g., "12х6"
  link: string;      // URL to the other size page
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
  specs: ProductSpecs;                         // 👈 new
  priceConfigurations: PriceConfiguration[];
  otherSizes: OtherSize[];                     // 👈 new
  contacts: ContactInfo;
  reviews: {
    text: any[];
    letters: any[];
    otzoviki: any[];
  };
}

// Define the page code (will be dynamic later)
const PAGE_CODE = "arochnyy-shater-10h5-50-m2";

// Fetch page data from Bitrix API (to be implemented)
async function getPageData(): Promise<PageData> {
  try {
    const response = await fetch(`page.php?code=${PAGE_CODE}`, {
      next: { revalidate: 3600 }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch page data: ${response.status}`);
    }

    const data = await response.json();

    if (data.success) {
      return {
        success: true,
        page: data.page,
        seo: data.seo,
        content: data.content,
        specs: data.specs,                       // 👈 new
        priceConfigurations: data.priceConfigurations,
        otherSizes: data.otherSizes,             // 👈 new
        contacts: data.contacts,
        reviews: data.reviews
      };
    }

    throw new Error('API returned unsuccessful response');

  } catch (error) {
    console.error('Error fetching page data:', error);

    // --- Fallback default data with all fields ---
    return {
      success: false,
      page: {
        id: 14,
        name: "Арочный шатер 10х5 - 50 м²",
        code: PAGE_CODE
      },
      seo: {
        title: "Арочный шатер 10х5 - 50 м² – купить в Москве с доставкой: цена в интернет-магазине Mobile Tent",
        description: "Арочный шатер 10х5 - 50 м² – купить в Москве под заказ в компании Mobile Tent. Вы можете выбрать любую комплектацию, размер и цвет изделия, а также заказать его брендирование. Мы используем только качественные и долговечные материалы, а также предлагаем адекватные цены, которые будут дешевле долгосрочный аренды! Гарантия от производителя — 5 лет.",
        keywords: "арочный шатер 10х5, купить арочный шатер 10х5, шатер 10 на 5, арочный шатер 50м2, шатер для мероприятий, шатер для свадьбы, шатер для кафе, тентовый шатер, быстровозводимый шатер",
        h1: "Арочный шатер 10х5 - 50 м²",
        url: `/tent/${PAGE_CODE}`
      },
      content: {
        desktop: '<p>Основное описание шатра (десктоп).</p>',
        mobile: '<p>Основное описание шатра (мобильное).</p>'
      },
      specs: {
        productCode: "ARCH-10x5-50",
        size: "10x5",
        area: 50,
        shape: "Прямоугольник",
        images: [
          "/module6m1.webp",
          "/module6m2.webp",
          "/module6m3.webp"
        ],
        url3d: "https://3d.mobile-tent.ru/10x5",
        capacity: "до 80 человек",
        width: 10,
        length: 5,
        archHeight: 3.5,
        ridgeHeight: 4.5,
        inStock: "Да"
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
      otherSizes: [
        { name: "12х6 - 72 м²", link: "/tent/arochnyy-shater-12h6-72-m2" },
        { name: "15х8 - 120 м²", link: "/tent/arochnyy-shater-15h8-120-m2" },
        { name: "20х10 - 200 м²", link: "/tent/arochnyy-shater-20h10-200-m2" }
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
  const seoUrl = `/tent/${PAGE_CODE}`;
  return {
    title: data.seo.title,
    description: data.seo.description,
    keywords: data.seo.keywords,
    openGraph: {
      title: data.seo.title,
      description: data.seo.description,
      url: `https://mobile-tent.ru${seoUrl}`,
      siteName: 'MOBILE TENT',
      locale: 'ru_RU',
      type: 'website',
      images: data.specs.images.map((img, i) => ({
        url: `https://mobile-tent.ru${img}`,
        width: 1200,
        height: 630,
        alt: `${data.page.name} - фото ${i+1}`
      })),
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

export default async function Arochny_Shatyor_Page() {
  const pageData = await getPageData();

  // ----- JSON‑LD schemas (simplified, adapt as needed) -----
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": pageData.page.name,
    "description": pageData.seo.description,
    "image": pageData.specs.images.map(img => `https://mobile-tent.ru${img}`),
    "sku": pageData.specs.productCode,
    "brand": { "@type": "Brand", "name": "MOBILE TENT" },
    "offers": {
      "@type": "AggregateOffer",
      "offerCount": pageData.priceConfigurations.length,
      "lowPrice": Math.min(...pageData.priceConfigurations.map(p => p.currentPrice)),
      "highPrice": Math.max(...pageData.priceConfigurations.map(p => p.currentPrice)),
      "priceCurrency": "RUB"
    },
    "additionalProperty": [
      { "@type": "PropertyValue", "name": "Размер", "value": pageData.specs.size },
      { "@type": "PropertyValue", "name": "Площадь", "value": `${pageData.specs.area} м²` },
      { "@type": "PropertyValue", "name": "Форма", "value": pageData.specs.shape },
      { "@type": "PropertyValue", "name": "Вместимость", "value": pageData.specs.capacity },
      { "@type": "PropertyValue", "name": "Ширина", "value": `${pageData.specs.width} м` },
      { "@type": "PropertyValue", "name": "Длина", "value": `${pageData.specs.length} м` },
      { "@type": "PropertyValue", "name": "Высота входной арки", "value": `${pageData.specs.archHeight} м` },
      { "@type": "PropertyValue", "name": "Высота в коньке", "value": `${pageData.specs.ridgeHeight} м` },
      { "@type": "PropertyValue", "name": "Наличие", "value": pageData.specs.inStock }
    ]
  };

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

      <h1 className="sr-only">{pageData.seo.h1}</h1>

      {/* Desktop version */}
      <div className="hidden md:flex flex-col w-full">
        <Cardtent1
          seoH1={pageData.seo.h1}
          pageName={pageData.page.name}
          specs={pageData.specs}                     // 👈 new
          priceConfigurations={pageData.priceConfigurations}
          contacts={pageData.contacts}
        />
        <Cardtent2
          desktopContent={pageData.content.desktop}
          mobileContent={pageData.content.mobile}
          specs={pageData.specs}                     // 👈 new
          otherSizes={pageData.otherSizes}           // 👈 new
          contacts={pageData.contacts}
        />
        <Footer />
      </div>

      {/* Mobile version */}
      <div className="flex md:hidden flex-col w-full">
        <Cardtent1
          seoH1={pageData.seo.h1}
          pageName={pageData.page.name}
          specs={pageData.specs}
          priceConfigurations={pageData.priceConfigurations}
          contacts={pageData.contacts}
        />
        <Cardtent2
          desktopContent={pageData.content.desktop}
          mobileContent={pageData.content.mobile}
          specs={pageData.specs}
          otherSizes={pageData.otherSizes}
          contacts={pageData.contacts}
        />
        <Footer />
      </div>
    </div>
  );
}