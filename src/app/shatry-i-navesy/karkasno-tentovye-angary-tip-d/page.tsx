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

// Fetch ALL page data from Bitrix API
async function getArochnyeData() {
  try {
    const response = await fetch('page.php?code=karkasno-tentovye-angary-tip-d', {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch page data');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching page data:', error);
    // Return default values if API fails – ENHANCED FOR КАРКАСНЫЙ ТЕНТОВЫЙ АНГАР ТИП Д
    return {
      success: false,
      seo: {
        title: "Каркасные тентовые ангары тип Д купить в Москве | Производство Mobile Tent",
        description: "Купить каркасный тентовый ангар тип Д от производителя Mobile Tent. Цены, размеры от 6 до 40 метров. Доставка по Москве, МО и всей России. Звоните: +7 (495) 760-42-20.",
        h1: "Каркасные тентовые ангары тип Д – напрямую от производителя в Москве и Московской области",
        keywords: "каркасный тентовый ангар тип д, купить ангар тип д, тентовый ангар тип д цена, каркасный ангар тип д москва, производство ангаров тип д, ангар тентовый каркасный, тентовые ангары тип д от производителя",
        url: "https://mobile-tent.ru/shatry-i-navesy/karkasno-tentovye-angary-tip-d"
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

// Generate metadata dynamically – OPTIMIZED FOR КАРКАСНЫЙ ТЕНТОВЫЙ АНГАР ТИП В
export async function generateMetadata(): Promise<Metadata> {
  const data = await getArochnyeData();

  // Default SEO values (same as fallback in getArochnyeData)
  const defaultSeo = {
    title: "Каркасные тентовые ангары тип Д купить в Москве | Производство Mobile Tent",
    description: "Купить каркасный тентовый ангар тип Д от производителя Mobile Tent. Цены, размеры от 6 до 40 метров. Доставка по Москве, МО и всей России. Звоните: +7 (495) 760-42-20.",
    keywords: "каркасный тентовый ангар тип д, купить ангар тип д, тентовый ангар тип д цена, каркасный ангар тип д москва, производство ангаров тип д, ангар тентовый каркасный, тентовые ангары тип д от производителя",
  };

  // Safe access: use API SEO if available and success is true, otherwise fallback to defaults
  const seoTitle = (data.success && data.seo?.title) ? data.seo.title : defaultSeo.title;
  const seoDescription = (data.success && data.seo?.description) ? data.seo.description : defaultSeo.description;
  const seoKeywords = (data.success && data.seo?.keywords) ? data.seo.keywords : defaultSeo.keywords;
  const canonicalUrl = 'https://mobile-tent.ru/shatry-i-navesy/karkasno-tentovye-angary-tip-d';

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
          url: 'https://mobile-tent.ru/D_20x30_1.webp',
          width: 1200,
          height: 630,
          alt: 'Каркасный тентовый ангар тип Д от производителя MOBILE TENT'
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
export default async function ArochnyePage() {
  const pageData = await getArochnyeData();

  // Add JSON-LD for Local Business with GEO targeting (updated for ангар тип В)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "MOBILE TENT",
    "image": "https://mobile-tent.ru/D_20x30_1.webp",
    "url": "https://mobile-tent.ru/shatry-i-navesy/karkasno-tentovye-angary-tip-d",
    "telephone": pageData.contacts?.phone1 || "+7 (495) 760-42-20",
    "email": pageData.contacts?.email || "info@mobile-tent.ru",
    "priceRange": "₽₽",
    "description": pageData.seo?.description || "Купить каркасный тентовый ангар тип Д от производителя Mobile Tent. Цены, размеры от 6 до 40 метров. Доставка по Москве, МО и всей России. Звоните: +7 (495) 760-42-20.",
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
      {
        "@type": "City",
        "name": "Москва"
      },
      {
        "@type": "State",
        "name": "Московская область"
      },
      {
        "@type": "City",
        "name": "Санкт-Петербург"
      },
      {
        "@type": "Country",
        "name": "Россия"
      }
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
      pageData.contacts?.Max ? `https://max.ru/u/f9LHodD0cOK_6DAtIeOn3T51Xpzrkg2i4RB2ZEjtVfXOwvURhiW6gtGMLrA` : "https://max.ru/u/f9LHodD0cOK_6DAtIeOn3T51Xpzrkg2i4RB2ZEjtVfXOwvURhiW6gtGMLrA"
    ]
  };

  // Product schema for КАРКАСНЫЙ ТЕНТОВЫЙ АНГАР ТИП В
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "image": "https://mobile-tent.ru/D_20x30_1.webp",
    "name": "Каркасный тентовый ангар тип В",
    "description": pageData.seo?.description || "Купить каркасный тентовый ангар тип Д от производителя Mobile Tent. Цены, размеры от 6 до 40 метров. Доставка по Москве, МО и всей России. Звоните: +7 (495) 760-42-20.",
    "brand": {
      "@type": "Brand",
      "name": "MOBILE TENT"
    },
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
    "material": "Алюминиевый профиль, ПВХ ткань 650-900 г/м²",
    "category": "Тентовые ангары"
  };

  // FAQ Schema specific to каркасный тентовый ангар тип В
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Какие размеры каркасного тентового ангара тип Д вы производите?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Мы изготавливаем ангары тип Д шириной от 6 до 40 метров, длиной — любой кратно 2 метрам. Высота конька зависит от ширины и рассчитывается индивидуально."
        }
      },
      {
        "@type": "Question",
        "name": "Сколько стоит каркасный тентовый ангар тип Д?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Цена зависит от размеров и комплектации. Например, ангар 10×20 м — от 580 000 ₽, 15×30 м — от 1 250 000 ₽. Точный расчёт высылаем по запросу."
        }
      },
      {
        "@type": "Question",
        "name": "Доставляете ли ангары тип Д в Московскую область и другие регионы?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, доставляем по Москве, Московской области, а также во все регионы России. Стоимость доставки рассчитывается отдельно."
        }
      },
      {
        "@type": "Question",
        "name": "Какой срок изготовления ангара тип Д?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Стандартный срок изготовления — от 7 до 14 рабочих дней. Для срочных заказов возможна ускоренная сборка."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли использовать ангар тип Д как склад или производственный цех?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, ангары тип Д идеально подходят для склада, производственного помещения, сельскохозяйственного хранения, автомастерской или спортивного сооружения."
        }
      }
    ]
  };

  // Organization Schema for better local SEO
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
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Красногорск",
      "addressRegion": "Московская область",
      "addressCountry": "RU"
    }
  };

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* JSON-LD schemas – ALL UPDATED FOR КАРКАСНЫЙ ТЕНТОВЫЙ АНГАР ТИП В */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />

      <AnimatedSection delay={0.2}>
        {/* Pass H1 data to Shatry1 component (now for ангар тип В) */}
        <Shatry1 seoH1={pageData.seo?.h1} />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <Shatry3 />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <Shatry2 />
      </AnimatedSection>
      
      <AnimatedSection delay={0.2}>
        {/* Pass content data to Shatry4 */}
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
        {/* Pass contacts data to Shatry8 */}
        <Shatry8 contacts={pageData.contacts} />
      </AnimatedSection>

      <Footer />
    </div>
  );
}