import { Element } from "./Element";
import { Element2 } from "./Element2";
import { Element3 } from "./Element3";
import { Element4 } from "./Element4";
import { Element5 } from "./Element5";
import { Element6 } from "./Element6";
import { Element7 } from "./Element7";
import { Element8 } from "./Element8";
import { Footer } from "../components/ui/Footer";
import type { Metadata } from "next";
import AnimatedSection from "../components/ui/AnimatedSection";

// Define types for better TypeScript support
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

interface SEOData {
  title: string;
  description: string;
  keywords: string;
  h1: string;
  url?: string;
}

interface HomeData {
  success: boolean;
  seo: SEOData;
  content: {
    desktop: string;
    mobile: string;
  };
  contacts: ContactInfo;
}

// Fetch ALL page data from Bitrix API
async function getHomeData(): Promise<HomeData> {
  try {
    const response = await fetch('page.php?code=home', {
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error('Failed to fetch page data');
    }

    const data = await response.json();

    if (data.success) {
      return {
        success: true,
        seo: data.seo,
        content: data.content,
        contacts: data.contacts
      };
    }

    throw new Error('API returned unsuccessful response');

  } catch (error) {
    console.error('Error fetching page data:', error);
    // Return default values if API fails
    return {
      success: false,
      seo: {
        title: "Купить шатры в MOBILE TENT - каркасно-тентовые конструкции недорого по цене производителя",
        description: "Купить каркасно-тентовые шатры из ПВХ по ценам компании-производителя MOBILE TENT. Продажа и изготовление тентовых конструкций и сооружений в России. Доставка по РФ. Заказывайте по тел +7 (495) 487-43-53",
        keywords: "каркасно-тентовые конструкции, шатры из ПВХ, тентовые сооружения, производство шатров, тентовые ангары",
        h1: "Тентовые конструкции в Москве напрямую от производителя",
        url: "https://mobile-tent.ru/"
      },
      content: {
        desktop: '',
        mobile: ''
      },
      contacts: {
        phone1: "+7 (495) 760-42-20",
        phone2: "+7 (985) 760-42-20",
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
      }
    };
  }
}

// Generate metadata dynamically
export async function generateMetadata(): Promise<Metadata> {
  const data = await getHomeData();

  // Use data from API if successful, otherwise use defaults
  const seoTitle = data.seo.title;
  const seoDescription = data.seo.description;
  const seoKeywords = data.seo.keywords || '';
  const canonicalUrl = 'https://mobile-tent.ru';

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: seoKeywords,
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: canonicalUrl,
      siteName: 'MOBILE TENT',
      locale: 'ru_RU',
      type: 'website',
      images: [
        {
          url: 'https://mobile-tent.ru/doparc.webp',
          width: 1200,
          height: 630,
          alt: 'MOBILE TENT - Производство тентовых конструкций в Москве'
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
      canonical: canonicalUrl,
      languages: {
        'ru-RU': canonicalUrl,
      },
    },
  };
}

// Server Component - can be async
export default async function Home() {
  const pageData = await getHomeData();

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

  // ----- LOCAL BUSINESS with GEO targeting (main schema for homepage) -----
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "MOBILE TENT",
    "image": "https://mobile-tent.ru/doparc.webp",
    "url": "https://mobile-tent.ru/",
    "telephone": pageData.contacts?.phone1 || "+7 (495) 760-42-20",
    "email": pageData.contacts?.email || "info@mobile-tent.ru",
    "priceRange": "₽₽-₽₽₽",
    "description": pageData.seo?.description || "Производство и продажа каркасно-тентовых конструкций, шатров, ангаров и тентовых сооружений в Москве и Московской области. Собственное производство в Красногорске и Калуге.",
    "foundingDate": "2015",
    "founder": {
      "@type": "Person",
      "name": "MOBILE TENT"
    },
    "location": [officePlace, productionPlace],
    "address": [officePlace.address, productionPlace.address],
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
      { "@type": "Country", "name": "Россия" }
    ],
    "hasMap": officePlace.hasMap,
    "openingHoursSpecification": officePlace.openingHoursSpecification,
    "sameAs": [
      pageData.contacts?.telegram || "https://t.me/mobiletent",
      pageData.contacts?.whatsapp ? `https://max.ru/u/f9LHodD0cOK_6DAtIeOn3T51Xpzrkg2i4RB2ZEjtVfXOwvURhiW6gtGMLrA` : "https://max.ru/u/f9LHodD0cOK_6DAtIeOn3T51Xpzrkg2i4RB2ZEjtVfXOwvURhiW6gtGMLrA",
      "https://vk.com/club229768367?from=groups", // Add if you have VK
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Тентовые конструкции",
      "itemListElement": [
        {
          "@type": "Product",
          "name": "Арочные шатры",
          "url": "https://mobile-tent.ru/shatry-i-navesy/arochnye"
        },
        {
          "@type": "Product",
          "name": "Каркасные ангары",
          "url": "https://mobile-tent.ru/shatry-i-navesy/angary_karkasnye"
        },
        {
          "@type": "Product",
          "name": "Шатры для мероприятий",
          "url": "https://mobile-tent.ru/shatry-i-navesy/shatry-dlya-meropriyatiy"
        },
        {
          "@type": "Product",
          "name": "Тентовые навесы",
          "url": "https://mobile-tent.ru/shatry-i-navesy/navesy"
        },
        {
          "@type": "Product",
          "name": "Каркасно-тентовые ангары",
          "url": "https://mobile-tent.ru/shatry-i-navesy/karkasno-tentovye-angary"
        }
      ]
    }
  };

  // ----- ORGANIZATION SCHEMA (for general organization info) -----
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MOBILE TENT",
    "url": "https://mobile-tent.ru",
    "logo": "https://mobile-tent.ru/doparc.webp",
    "description": pageData.seo?.description,
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": pageData.contacts?.phone1 || "+7 (495) 760-42-20",
        "contactType": "customer service",
        "areaServed": "RU",
        "availableLanguage": ["Russian", "English"]
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
    "email": pageData.contacts?.email || "info@mobile-tent.ru",
    "foundingDate": "2015",
    "numberOfEmployees": "50+"
  };

  // ----- BREADCRUMB SCHEMA for homepage -----
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Главная",
        "item": "https://mobile-tent.ru/"
      }
    ]
  };

  // ----- WEBSITE SCHEMA with search action (for sitelinks search box) -----
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

  // ----- ABOUT PAGE SCHEMA (for the homepage as an About page) -----
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "О компании MOBILE TENT",
    "description": pageData.seo?.description,
    "url": "https://mobile-tent.ru/",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "MOBILE TENT"
    }
  };

  // ----- FAQ SCHEMA (common questions about the company) -----
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Где находится производство MOBILE TENT?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Наше производство находится в Калуге (Калужская область, г. Калуга, ул. Производственная, д. 15), а офис и демонстрационный зал в Красногорске (Московская область, г. Красногорск, ул. Молодежная. д. 4)."
        }
      },
      {
        "@type": "Question",
        "name": "Какие тентовые конструкции вы производите?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Мы производим арочные шатры, каркасные ангары, шатры для мероприятий, тентовые навесы, каркасно-тентовые ангары, павильоны, склады, спортивные сооружения и другие тентовые конструкции любых размеров."
        }
      },
      {
        "@type": "Question",
        "name": "Доставляете ли вы в регионы России?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, мы доставляем тентовые конструкции по всей России: Санкт-Петербург, Нижний Новгород, Казань, Самара, Ростов-на-Дону, Краснодар, Екатеринбург, Новосибирск и другие города. Доставка транспортными компаниями."
        }
      },
      {
        "@type": "Question",
        "name": "Какой срок изготовления тентовых конструкций?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Срок изготовления зависит от сложности и размера: арочные шатры от 3-7 дней, каркасные ангары от 14-45 дней. Возможно срочное изготовление."
        }
      },
      {
        "@type": "Question",
        "name": "Есть ли у вас гарантия на тентовые конструкции?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, мы даем гарантию от производителя 5 лет на все тентовые конструкции. Срок службы при правильной эксплуатации — более 25 лет."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли заказать индивидуальный проект?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, мы разрабатываем индивидуальные проекты тентовых конструкций по вашему техническому заданию. Наши инженеры помогут рассчитать оптимальную конструкцию под ваши задачи."
        }
      }
    ]
  };

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* JSON-LD schemas - comprehensive for homepage */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <AnimatedSection delay={0.2}>
        {/* Pass only H1 data to Element component */}
        <Element seoH1={pageData.seo?.h1} />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <Element2 />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <Element3 />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <Element4 />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <Element5 />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        {/* Pass content data to Element6 */}
        <Element6
          desktopContent={pageData.content?.desktop}
          mobileContent={pageData.content?.mobile}
        />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <Element7 />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        {/* Pass contacts data to Element8 */}
        <Element8 contacts={pageData.contacts} />
      </AnimatedSection>

      <Footer />
    </div>
  );
}