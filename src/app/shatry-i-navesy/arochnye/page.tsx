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
    const response = await fetch('page.php?code=arochnye', {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch page data');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching arochnye page data:', error);
    // Return default values if API fails – ENHANCED WITH GEO KEYWORDS
    return {
      success: false,
      seo: {
        title: "Шатры арочные купить в Москве: заказать арочный шатер или тент от производителя Mobile Tent",
        description: "Купить арочные шатры в Москве и России. Заказать Арочные шатры по оптимальным ценам предлагаем на нашем сайте. Звоните: +7 (495) 760-42-20.",
        h1: "Арочные шатры в Москве и Московской области — напрямую от производителя",
        keywords: "арочные шатры москва, арочные шатры московская область, купить арочный шатер в москве, производство арочных шатров красногорск, аренда арочного шатра москва, арочные шатры цена, шатры арочные для кафе, арочный тент купить",
        url: "https://mobile-tent.ru/shatry-i-navesy/arochnye"
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

// Generate metadata dynamically – ENHANCED WITH VERIFICATION AND LANGUAGES
export async function generateMetadata(): Promise<Metadata> {
  const data = await getArochnyeData();

  // Use data from API if successful, otherwise use defaults
  const seoTitle = data.success ? data.seo.title : data.seo.title;
  const seoDescription = data.success ? data.seo.description : data.seo.description;
  const seoKeywords = data.success ? data.seo.keywords : data.seo.keywords;
  const canonicalUrl = 'https://mobile-tent.ru/shatry-i-navesy/arochnye';
  
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
          alt: 'Арочные шатры от производителя MOBILE TENT в Москве'
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

  // Add JSON-LD for Local Business with GEO targeting
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "MOBILE TENT",
    "image": "https://mobile-tent.ru/doparc.webp",
    "url": "https://mobile-tent.ru/shatry-i-navesy/arochnye",
    "telephone": pageData.contacts?.phone1 || "+7 (495) 760-42-20",
    "email": pageData.contacts?.email || "info@mobile-tent.ru",
    "priceRange": "₽₽",
    "description": pageData.seo?.description || "Купить арочные шатры в Москве и России. Заказать Арочные шатры по оптимальным ценам предлагаем на нашем сайте. Звоните: +7 (495) 760-42-20.",
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

  // Add Product schema for арочные шатры
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "image": "https://mobile-tent.ru/doparc.webp",
    "name": "Арочные шатры",
    "description": pageData.seo?.description || "Купить арочные шатры в Москве и России. Заказать Арочные шатры по оптимальным ценам предлагаем на нашем сайте. Звоните: +7 (495) 760-42-20.",
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
    "material": "Алюминий, ПВХ ткань 650-900 г/м²",
    "category": "Тентовые конструкции"
  };

  // FAQ Schema for Shatry7 (if it contains FAQ)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Нужно ли разрешение на установку арочного шатра в Москве?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Для временных сооружений площадью до 50 м² разрешение не требуется. Для крупных объектов мы помогаем с согласованием в администрации Московской области."
        }
      },
      {
        "@type": "Question",
        "name": "Сколько стоит аренда арочного шатра в Москве?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Аренда арочного шатра 3×3 м — от 3500 руб/сутки, 4×6 м — от 6900 руб/сутки, 5×10 м — от 12500 руб/сутки, 10×20 м — от 34000 руб/сутки с доставкой по Москве и Московской области."
        }
      },
      {
        "@type": "Question",
        "name": "Доставляете ли арочные шатры в Московскую область?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, доставляем по всей Московской области: Красногорск, Химки, Мытищи, Люберцы, Подольск, Одинцово, Балашиха, Раменское, Домодедово, Сергиев Посад и другие города. Стоимость доставки — от 2000 рублей в зависимости от удаленности."
        }
      },
      {
        "@type": "Question",
        "name": "Какой срок изготовления арочного шатра на заказ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Стандартный срок изготовления арочного шатра — от 3 до 7 рабочих дней. Для срочных заказов возможна ускоренная сборка за 1-2 дня."
        }
      },
      {
        "@type": "Question",
        "name": "Есть ли у вас шоу-рум в Москве?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, наш офис и демонстрационный зал находятся в Красногорске (Московская область, ул. Молодежная, д. 4). Вы можете приехать и посмотреть образцы тканей и готовые конструкции."
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
      {/* JSON-LD schemas - ALL ADDED, NOTHING REMOVED */}
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
        {/* Pass H1 data to Shatry1 component */}
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