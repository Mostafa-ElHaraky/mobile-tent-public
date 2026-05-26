import { Shatry1 } from "./sections/Shatry1/Shatry1";
import { Shatry2 } from "./sections/Shatry2/Shatry2";
import { Shatry3 } from "./sections/Shatry3/Shatry3";
import { Shatry4 } from "./sections/Shatry4/Shatry4";
import { Shatry5 } from "./sections/Shatry5/Shatry5";
import { Shatry6 } from "./sections/Shatry6/Shatry6";
import { Shatry7 } from "./sections/Shatry7/Shatry7";
import { Shatry8 } from "./sections/Shatry8/Shatry8";
import { Footer } from "../../../components/ui/Footer";
import type { Metadata } from "next";
import AnimatedSection from "../../../components/ui/AnimatedSection";

// Fetch ALL page data from Bitrix API for МОБИЛЬНЫЕ ШАТРЫ
async function getMobileData() {
  try {
    const response = await fetch('page.php?code=mobilnye', {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch page data');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching mobile page data:', error);
    // Return default values – FULLY OPTIMIZED FOR МОБИЛЬНЫЕ ШАТРЫ
    return {
      success: false,
      seo: {
        title: "Мобильные шатры купить от производителя в Москве с доставкой по России | MOBILE TENT",
        description: "Мобильные быстросборные шатры от производителя. Легкие, портативные конструкции для мероприятий, кафе, туризма. Доставка по Москве, МО и всей России. Звоните +7 (495) 760-42-20!",
        h1: "Мобильные шатры в Москве и Московской области – напрямую от производителя MOBILE TENT",
        keywords: "мобильные шатры москва, мобильные шатры московская область, купить мобильный шатер в москве, производство мобильных шатров красногорск, аренда мобильного шатра москва, мобильные шатры цена, быстросборные шатры, портативные шатры, hard tent мобильные шатры",
        url: "https://mobile-tent.ru/shatry-i-navesy/mobilnye"
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

// Generate metadata dynamically – ENHANCED FOR МОБИЛЬНЫЕ ШАТРЫ
export async function generateMetadata(): Promise<Metadata> {
  const data = await getMobileData();

  const seoTitle = data.success ? data.seo.title : data.seo.title;
  const seoDescription = data.success ? data.seo.description : data.seo.description;
  const seoKeywords = data.success ? data.seo.keywords : data.seo.keywords;
  const canonicalUrl = 'https://mobile-tent.ru/shatry-i-navesy/mobilnye';
  
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
          url: 'https://mobile-tent.ru/mobilny4x6,3.webp',
          width: 1200,
          height: 630,
          alt: 'Мобильные шатры от производителя MOBILE TENT в Москве'
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
export default async function MobilePage() {
  const pageData = await getMobileData();

  // ----- LOCAL BUSINESS SCHEMA (GEO TARGETED) -----
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "MOBILE TENT",
    "image": "https://mobile-tent.ru/mobilny4x6,3.webp",
    "url": "https://mobile-tent.ru/shatry-i-navesy/mobilnye",
    "telephone": pageData.contacts?.phone1 || "+7 (495) 760-42-20",
    "email": pageData.contacts?.email || "info@mobile-tent.ru",
    "priceRange": "₽₽",
    "description": pageData.seo?.description || "Мобильные шатры в Москве и России от производителя. Быстросборные портативные конструкции для мероприятий, кафе, туризма. Доставка по РФ, гарантия 5 лет.",
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
      { "@type": "City", "name": "Казань" },
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

  // ----- PRODUCT SCHEMA (МОБИЛЬНЫЕ ШАТРЫ) -----
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "image": "https://mobile-tent.ru/mobilny4x6,3.webp",
    "name": "Мобильные шатры",
    "description": pageData.seo?.description || "Купить мобильные шатры в Москве и России. Легкие быстросборные конструкции. Изготовление под заказ, доставка по РФ.",
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
      "offerCount": "50+",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "RUB",
      "areaServed": ["Москва", "Московская область", "Санкт-Петербург", "Россия"]
    },
    "material": "Алюминиевый каркас, ПВХ ткань 650-900 г/м²",
    "category": "Портативные быстросборные тентовые конструкции"
  };

  // ----- FAQ SCHEMA (МОБИЛЬНЫЕ ШАТРЫ) -----
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Сколько времени занимает сборка мобильного шатра?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Мобильные шатры собираются за 30–60 минут в зависимости от размера. Наша бригада выполняет монтаж профессионально и быстро."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли использовать мобильный шатёр зимой?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, наши мобильные шатры можно использовать круглый год. Для зимы предусмотрены утепленные версии и системы обогрева."
        }
      },
      {
        "@type": "Question",
        "name": "Доставляете ли мобильные шатры в Московскую область?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, доставляем по всей Московской области: Красногорск, Химки, Мытищи, Люберцы, Подольск, Одинцово, Балашиха, Раменское, Домодедово, Сергиев Посад и другие города. Стоимость доставки — от 2000 рублей."
        }
      },
      {
        "@type": "Question",
        "name": "Какой срок изготовления мобильного шатра на заказ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Стандартный срок изготовления — от 3 до 7 рабочих дней. Для срочных заказов возможна ускоренная сборка за 1-2 дня."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли нанести логотип на мобильный шатёр?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, мы наносим полноцветную печать непосредственно на ПВХ‑ткань. Сублимация, шелкография – любой тираж. Шатёр станет отличной рекламной конструкцией."
        }
      },
      {
        "@type": "Question",
        "name": "Есть ли у вас шоу-рум в Москве?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, наш офис и демонстрационный зал находятся в Красногорске (Московская область, ул. Молодежная, д. 4). Приезжайте – покажем образцы тканей и готовые мобильные шатры."
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

  // ----- BREADCRUMBLIST SCHEMA -----
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
        "name": "Мобильные шатры",
        "item": "https://mobile-tent.ru/shatry-i-navesy/mobilnye"
      }
    ]
  };

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* JSON-LD schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <AnimatedSection delay={0.2}>
        <Shatry1 seoH1={pageData.seo?.h1} />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <Shatry3 />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <Shatry2 />
      </AnimatedSection>
      
      <AnimatedSection delay={0.2}>
        {/* Pass CMS content to Shatry4 – now supports dynamic HTML */}
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