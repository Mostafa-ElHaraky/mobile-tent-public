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
async function getShatryData() {
  try {
    const response = await fetch('page.php?code=bolshie', {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch page data');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching shatry page data:', error);
    // Return default values if API fails – ENHANCED WITH GEO KEYWORDS
    return {
      success: false,
      seo: {
        title: "Купить большие шатры недорого от MOBILE TENT - продажа шатров большого размера",
        description: "Большие тенты в Москве и России. Продажа классических шатров на Mobile-Tent.Ru: ассортимент расцветок, дизайнов и размеров традиционных шатровых конструкций разного назначения смотрите в нашем каталоге. Купить большие шатры в Москве и Московской области по привлекательной стоимости с доставкой по всей России предлагаем на сайте Mobile-Tent.Ru.",
        h1: "Большие шатры в Москве напрямую от производителя",
        keywords: "большие шатры москва, купить большой шатер в москве, большие шатры московская область, шатры больших размеров цена, производство шатров красногорск, тенты большие купить, шатры для мероприятий москва, шатры для кемпинга, шатры для кафе, шатры для склада",
        url: "https://mobile-tent.ru/shatry-i-navesy/bolshie"
      },
      content: {
        desktop: '',
        mobile: ''
      },
      contacts: {
        phone1: "+7 (499) 113-36-60",
        phone2: "+7 (495) 487-43-53",
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

// Generate metadata dynamically – ENHANCED WITH VERIFICATION AND LANGUAGES
export async function generateMetadata(): Promise<Metadata> {
  const data = await getShatryData();

  // Use data from API if successful, otherwise use defaults
  const seoTitle = data.success ? data.seo.title : data.seo.title;
  const seoDescription = data.success ? data.seo.description : data.seo.description;
  const seoKeywords = data.success ? data.seo.keywords : data.seo.keywords;
  const canonicalUrl = 'https://mobile-tent.ru/shatry-i-navesy/bolshie';
  
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
          url: 'https://mobile-tent.ru/10x30,1.webp',
          width: 1200,
          height: 630,
          alt: 'Большие шатры от производителя MOBILE TENT в Москве'
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
export default async function ShatryPage() {
  const pageData = await getShatryData();

  // Add JSON-LD for Local Business with GEO targeting
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "MOBILE TENT",
    "image": "https://mobile-tent.ru/10x30,1.webp",
    "url": "https://mobile-tent.ru/shatry-i-navesy/bolshie",
    "telephone": pageData.contacts?.phone1 || "+7 (499) 113-36-60",
    "email": pageData.contacts?.email || "info@mobile-tent.ru",
    "priceRange": "₽₽",
    "description": pageData.seo?.description || "Большие шатры в Москве и России от производителя. Продажа классических шатров на Mobile-Tent.Ru: ассортимент расцветок, дизайнов и размеров.",
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
        "@type": "City",
        "name": "Красногорск"
      },
      {
        "@type": "City",
        "name": "Химки"
      },
      {
        "@type": "City",
        "name": "Мытищи"
      },
      {
        "@type": "City",
        "name": "Подольск"
      },
      {
        "@type": "City",
        "name": "Люберцы"
      },
      {
        "@type": "City",
        "name": "Балашиха"
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
      pageData.contacts?.telegram || "https://t.me/mobiletent",
      pageData.contacts?.whatsapp ? `https://wa.me/${pageData.contacts.whatsapp.replace(/[^0-9]/g, '')}` : "https://wa.me/79805109568"
    ]
  };

  // Add Product schema for большие шатры
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "image": "https://mobile-tent.ru/10x30,1.webp",
    "name": "Большие шатры",
    "description": pageData.seo?.description || "Купить большие шатры в Москве и России. Продажа классических шатров больших размеров от производителя Mobile Tent.",
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
    "material": "Алюминий, ПВХ ткань 650-900 г/м², Сталь",
    "category": "Тентовые конструкции",
    "size": "от 3x3 м до 20x40 м и больше"
  };

  // FAQ Schema for Shatry7 (with FAQ content)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Нужно ли разрешение на установку большого шатра в Москве?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Для временных сооружений площадью до 50 м² разрешение не требуется. Для крупных шатров больших размеров мы помогаем с согласованием в администрации Москвы и Московской области."
        }
      },
      {
        "@type": "Question",
        "name": "Сколько стоит аренда большого шатра в Москве?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Аренда большого шатра 3×3 м — от 3500 руб/сутки, 4×6 м — от 6900 руб/сутки, 5×10 м — от 12500 руб/сутки, 10×20 м — от 34000 руб/сутки с доставкой по Москве и Московской области. Цены зависят от размера и комплектации."
        }
      },
      {
        "@type": "Question",
        "name": "Доставляете ли большие шатры в Московскую область?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, доставляем по всей Московской области: Красногорск, Химки, Мытищи, Люберцы, Подольск, Одинцово, Балашиха, Раменское, Домодедово, Сергиев Посад, Щелково, Пушкино, Жуковский, Королев и другие города. Стоимость доставки — от 2000 рублей в зависимости от удаленности."
        }
      },
      {
        "@type": "Question",
        "name": "Какой срок изготовления большого шатра на заказ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Стандартный срок изготовления большого шатра — от 3 до 7 рабочих дней. Для срочных заказов возможна ускоренная сборка за 1-2 дня. Шатры больших размеров могут требовать дополнительного времени на производство."
        }
      },
      {
        "@type": "Question",
        "name": "Какие размеры больших шатров у вас есть?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Мы предлагаем шатры различных размеров: 3x3 м, 3x4.5 м, 4x4 м, 4x6 м, 5x5 м, 5x10 м, 6x6 м, 6x8 м, 6x12 м, 8x8 м, 10x10 м, 10x15 м, 10x20 м, 15x30 м и больше. Возможно изготовление шатров больших размеров по индивидуальным параметрам."
        }
      },
      {
        "@type": "Question",
        "name": "Есть ли у вас шоу-рум в Москве?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, наш офис и демонстрационный зал находятся в Красногорске (Московская область, ул. Молодежная, д. 4). Вы можете приехать и посмотреть образцы тканей, каркасов и готовые конструкции больших шатров перед покупкой."
        }
      },
      {
        "@type": "Question",
        "name": "Какие шатры лучше для мероприятий в Москве?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Для мероприятий в Москве мы рекомендуем шатры больших размеров из ПВХ ткани 650-900 г/м² с алюминиевым каркасом. Они устойчивы к ветру, осадкам и сохраняют презентабельный внешний вид. Для свадеб, корпоративов и фестивалей отлично подходят белые шатры с окнами."
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
        "telephone": pageData.contacts?.phone1 || "+7 (499) 113-36-60",
        "contactType": "customer service",
        "areaServed": "RU",
        "availableLanguage": "Russian"
      },
      {
        "@type": "ContactPoint",
        "telephone": pageData.contacts?.phone2 || "+7 (495) 487-43-53",
        "contactType": "sales",
        "areaServed": ["Moscow", "Moscow Oblast"],
        "availableLanguage": "Russian"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Красногорск",
      "addressRegion": "Московская область",
      "streetAddress": "ул. Молодежная, д. 4",
      "addressCountry": "RU"
    },
    "areaServed": ["Москва", "Московская область", "Россия"]
  };

  // BreadcrumbList Schema for better navigation SEO
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
        "name": "Большие шатры",
        "item": "https://mobile-tent.ru/shatry-i-navesy/bolshie"
      }
    ]
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
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