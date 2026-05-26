import { Shatry1 } from "./sections/Shatry1/Shatry1";
import { Shatry2 } from "./sections/Shatry2/Shatry2";
import { Shatry3 } from "./sections/Shatry3/Shatry3";
import { Shatry4 } from "./sections/Shatry4/Shatry4";
import { Shatry5 } from "./sections/Shatry5/Shatry5";
import { Shatry6 } from "./sections/Shatry6/Shatry6";
import { Shatry7 } from "./sections/Shatry7/Shatry7";
import { Shatry8 } from "./sections/Shatry8/Shatry8";
import { Footer } from "../../components/ui/Footer";
import type { Metadata } from "next";
import AnimatedSection from "../../components/ui/AnimatedSection";

// Fetch ALL page data from Bitrix API
async function getArochnyeData() {
  try {
    const response = await fetch('page.php?code=dlya-cafe-sfera-tent', {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch page data');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching page data:', error);
    // Return default values – FULLY GEO & SEO OPTIMIZED for Сферические шатры
    return {
      success: false,
      seo: {
        title: "Сферические шатры и навесы для кафе и ресторанов купить по выгодным ценам от MOBILE TENT",
        description: "Сферические шатры для кафе и ресторанов от производителя. Доставка по Москве, МО и всей России. Гарантия, монтаж, сервис. Звоните +7 (495) 760-42-20!",
        h1: "Сферические шатры в Москве и Московской области – напрямую от производителя MOBILE TENT",
        keywords: "сферические шатры москва, сферические шатры московская область, купить сферический шатер в москве, производство сферических шатров красногорск, сферические шатры цена, шатры сферические для кафе, сферический тент купить, шатер сфера для ресторана",
        url: "https://mobile-tent.ru/dlya-cafe-sfera-tent"
      },
      content: {
        desktop: '',
        mobile: ''
      },
      contacts: {
        phone1: "+7 (495) 760-42-20",
        phone2: "+7 (985) 760-42-20",
        email: "info@mobile-tent.ru",
        telegram: "https://t.me/+79857604220",
        Max: "https://max.ru/u/f9LHodD0cOK_6DAtIeOn3T51Xpzrkg2i4RB2ZEjtVfXOwvURhiW6gtGMLrA",
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

// Generate metadata dynamically – ENHANCED WITH VERIFICATION, LANGUAGES & GEO
export async function generateMetadata(): Promise<Metadata> {
  const data = await getArochnyeData();

  const seoTitle = data.success ? data.seo.title : data.seo.title;
  const seoDescription = data.success ? data.seo.description : data.seo.description;
  const seoKeywords = data.success ? data.seo.keywords : data.seo.keywords;
  const canonicalUrl = 'https://mobile-tent.ru/dlya-cafe-sfera-tent';
  
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
          url: 'https://mobile-tent.ru/spher26,1.webp',
          width: 1200,
          height: 630,
          alt: 'Сферические шатры для кафе и ресторанов от MOBILE TENT в Москве'
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
    // GEO meta tags for Yandex & Google
    other: {
      'geo.position': '55.834305;37.269340',
      'geo.placename': 'Красногорск, Московская область',
      'geo.region': 'RU-MOS',
    },
  };
}

// Server Component
export default async function ArochnyePage() {
  const pageData = await getArochnyeData();

  // ----- LOCAL BUSINESS SCHEMA (GEO TARGETED) -----
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "MOBILE TENT",
    "image": "https://mobile-tent.ru/spher26,1.webp",
    "url": "https://mobile-tent.ru/dlya-cafe-sfera-tent",
    "telephone": pageData.contacts?.phone1 || "+7 (495) 760-42-20",
    "email": pageData.contacts?.email || "info@mobile-tent.ru",
    "priceRange": "₽₽",
    "description": pageData.seo?.description || "Сферические шатры для кафе и ресторанов от производителя. Доставка по Москве, МО и всей России. Гарантия качества, монтаж, сервис.",
    "address": [
      {
        "@type": "PostalAddress",
        "addressLocality": "Красногорск",
        "addressRegion": "Московская область",
        "addressCountry": "RU",
        "streetAddress": pageData.contacts?.office?.address?.replace('Московская область, г. Красногорск, ', '') || "ул. Молодежная. д. 4",
        "postalCode": "143401"
      },
      {
        "@type": "PostalAddress",
        "addressLocality": "Калуга",
        "addressRegion": "Калужская область",
        "addressCountry": "RU",
        "streetAddress": pageData.contacts?.production?.address?.replace('Калужская область, г. Калуга, ', '') || "ул. Производственная, д. 15",
        "postalCode": "248000"
      }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "55.834305",
      "longitude": "37.269340"
    },
    "areaServed": [
      { "@type": "City", "name": "Москва" },
      { "@type": "State", "name": "Московская область" },
      { "@type": "City", "name": "Санкт-Петербург" },
      { "@type": "City", "name": "Краснодар" },
      { "@type": "City", "name": "Екатеринбург" },
      { "@type": "City", "name": "Новосибирск" },
      { "@type": "Country", "name": "Россия" }
    ],
    "hasMap": pageData.contacts?.office?.map_url || "https://yandex.ru/maps/org/grand_tent/130300118530/",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "22:00"
      }
    ],
    "sameAs": [
      pageData.contacts?.telegram || "https://t.me/+79857604220",
      "https://max.ru/u/f9LHodD0cOK_6DAtIeOn3T51Xpzrkg2i4RB2ZEjtVfXOwvURhiW6gtGMLrA"
    ]
  };

  // ----- PRODUCT SCHEMA (Сферические шатры) -----
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "image": "https://mobile-tent.ru/spher26,1.webp",
    "name": "Сферические шатры для кафе и ресторанов",
    "description": pageData.seo?.description || "Купить сферические шатры для заведений общепита. Изготовление под заказ, доставка по РФ. Высокое качество, выгодные цены.",
    "brand": { "@type": "Brand", "name": "MOBILE TENT" },
    "manufacturer": {
      "@type": "Organization",
      "name": "MOBILE TENT",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Красногорск",
        "addressRegion": "Московская область",
        "addressCountry": "RU"
      }
    },
    "offers": {
      "@type": "AggregateOffer",
      "offerCount": "70+",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "RUB",
      "areaServed": ["Москва", "Московская область", "Санкт-Петербург", "Россия"]
    },
    "material": "Алюминиевый каркас, ПВХ ткань 750-1000 г/м²",
    "category": "Тентовые конструкции для общепита"
  };

  // ----- FAQ SCHEMA (Сферические шатры) -----
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Нужно ли разрешение на установку сферического шатра в Москве?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Для временных сооружений площадью до 50 м² разрешение не требуется. Для больших объектов мы помогаем с согласованием в администрации."
        }
      },
      {
        "@type": "Question",
        "name": "Доставляете ли сферические шатры в Московскую область?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, доставляем по всей Московской области: Красногорск, Химки, Мытищи, Люберцы, Подольск, Одинцово, Балашиха, Раменское, Домодедово, Сергиев Посад, Королёв, Пушкино, Щёлково, Электросталь, Коломна и другие."
        }
      },
      {
        "@type": "Question",
        "name": "Какой срок изготовления сферического шатра на заказ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Стандартный срок – от 5 до 10 рабочих дней. Возможно срочное изготовление за 3 дня."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли посмотреть сферический шатер вживую в Москве?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, наш шоу-рум в Красногорске (Московская область, ул. Молодежная, д. 4). Приезжайте, покажем образцы материалов и готовые конструкции."
        }
      }
    ]
  };

  // ----- ORGANIZATION SCHEMA -----
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MOBILE TENT",
    "url": "https://mobile-tent.ru",
    "logo": "https://mobile-tent.ru/favicon.ico",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": pageData.contacts?.phone1 || "+7 (495) 760-42-20",
      "contactType": "customer service",
      "areaServed": "RU",
      "availableLanguage": "Russian"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Красногорск",
      "addressRegion": "Московская область",
      "addressCountry": "RU"
    }
  };

  // ----- BREADCRUMBLIST SCHEMA (улучшает внутреннюю перелинковку) -----
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Главная",
        "item": "https://mobile-tent.ru"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Шатры и навесы",
        "item": "https://mobile-tent.ru/shatry"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Сферические шатры для кафе и ресторанов",
        "item": "https://mobile-tent.ru/dlya-cafe-sfera-tent"
      }
    ]
  };

  // ----- SERVICE SCHEMA (услуги по установке и доставке) -----
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Установка и доставка сферических шатров",
    "provider": { "@type": "LocalBusiness", "name": "MOBILE TENT" },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Московская область, Москва, Санкт-Петербург, Россия"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Доставка и монтаж",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Доставка по Москве" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Доставка по Московской области" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Монтаж под ключ" } }
      ]
    }
  };

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* Все JSON-LD схемы для максимального SEO и GEO продвижения */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <AnimatedSection delay={0.2}>
        {/* Передаём обновлённый H1 о сферических шатрах */}
        <Shatry1 seoH1={pageData.seo?.h1} />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <Shatry3 />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <Shatry2 />
      </AnimatedSection>
      
      <AnimatedSection delay={0.2}>
        <Shatry4 
          desktopContent={pageData.content?.desktop}
          mobileContent={pageData.content?.mobile}
        />
      </AnimatedSection>
      
      <AnimatedSection delay={0.2}>
        <Shatry5 />
      </AnimatedSection>
      
      <AnimatedSection delay={0.2}>
        <Shatry6 />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <Shatry7 />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <Shatry8 contacts={pageData.contacts} />
      </AnimatedSection>

      <Footer />
    </div>
  );
}