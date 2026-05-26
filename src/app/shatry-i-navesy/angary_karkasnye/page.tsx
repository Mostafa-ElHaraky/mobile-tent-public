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
async function getAngaryKarkasnyeData() {
  try {
    const response = await fetch('page.php?code=angary_karkasnye', {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch page data');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching angary_karkasnye page data:', error);
    // Return default values if API fails – ENHANCED WITH GEO KEYWORDS
    return {
      success: false,
      seo: {
        title: "Быстровозводимые каркасные ангары купить в Москве и Московской области | Цена под ключ от MOBILE TENT",
        description: "Производство и монтаж быстровозводимых каркасных ангаров в Москве и Московской области. Собственное производство в Красногорске. Ангары для склада, спорта, сельского хозяйства. Низкие цены, доставка по РФ. Звоните!",
        h1: "Каркасные ангары в Москве и Московской области — производство и монтаж под ключ",
        keywords: "каркасные ангары, быстровозводимые ангары, купить каркасный ангар в москве, производство ангаров красногорск, ангар под ключ, складские ангары, спортивные ангары, сельскохозяйственные ангары",
        url: "https://mobile-tent.ru/shatry-i-navesy/angary_karkasnye"
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
  const data = await getAngaryKarkasnyeData();

  const seoTitle = data.success ? data.seo.title : data.seo.title;
  const seoDescription = data.success ? data.seo.description : data.seo.description;
  const seoKeywords = data.success ? data.seo.keywords : data.seo.keywords;
  const canonicalUrl = 'https://mobile-tent.ru/shatry-i-navesy/angary_karkasnye';
  
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
          url: 'https://mobile-tent.ru/angar1.webp',
          width: 1200,
          height: 630,
          alt: 'Каркасные ангары в Москве и Московской области от производителя MOBILE TENT'
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
export default async function AngaryKarkasnyePage() {
  const pageData = await getAngaryKarkasnyeData();

  // ----- PLACE SCHEMAS for Office and Production (detailed locations) -----
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

  // ----- LOCAL BUSINESS (main entity) with GEO targeting and references to both places -----
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "MOBILE TENT",
    "image": "https://mobile-tent.ru/angar1.webp",
    "url": "https://mobile-tent.ru/shatry-i-navesy/angary_karkasnye",
    "telephone": pageData.contacts?.phone1 || "8 (495) 487 43 53",
    "email": pageData.contacts?.email || "info@mobile-tent.ru",
    "priceRange": "₽₽₽", // or "$$$"
    "description": pageData.seo?.description || "Производство быстровозводимых каркасных ангаров от компании MOBILE TENT в Москве и Московской области. Реализуем проекты под ключ: от проектирования до монтажа.",
    // Link the two places – you can use either "location" or "department"
    "location": [ officePlace, productionPlace ],
    // If you prefer to keep them as separate departments, use:
    // "department": [ productionPlace ],
    // "address" is still included as an array for backward compatibility
    "address": [
      officePlace.address,
      productionPlace.address
    ],
    "geo": officePlace.geo, // main office coordinates
    "areaServed": [
      { "@type": "City", "name": "Москва" },
      { "@type": "City", "name": "Санкт-Петербург" },
      { "@type": "State", "name": "Московская область" },
      // More specific cities in Moscow region for hyperlocal targeting
      { "@type": "City", "name": "Красногорск" },
      { "@type": "City", "name": "Химки" },
      { "@type": "City", "name": "Мытищи" },
      { "@type": "City", "name": "Люберцы" },
      { "@type": "City", "name": "Подольск" },
      { "@type": "City", "name": "Одинцово" },
      { "@type": "City", "name": "Балашиха" },
      { "@type": "City", "name": "Раменское" },
      { "@type": "City", "name": "Домодедово" },
      { "@type": "Country", "name": "Россия" }
    ],
    "hasMap": officePlace.hasMap,
    "openingHoursSpecification": officePlace.openingHoursSpecification,
    "sameAs": [
      pageData.contacts?.telegram || "https://t.me/mobiletent",
      pageData.contacts?.whatsapp ? `https://wa.me/${pageData.contacts.whatsapp.replace(/[^0-9]/g, '')}` : "https://wa.me/79805109568"
      // Add VK if available: "https://vk.com/mobiletent"
    ]
  };

  // ----- PRODUCT SCHEMA for каркасные ангары (with offer catalog) -----
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "image": "https://mobile-tent.ru/angar25x30,1.webp",
    "name": "Каркасные ангары",
    "description": pageData.seo?.description || "Производство и монтаж быстровозводимых каркасных ангаров в Москве и Московской области. Ангары для складов, спортивных сооружений, сельского хозяйства.",
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
      "offerCount": "100+",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "RUB",
      "areaServed": ["Москва", "Московская область", "Санкт-Петербург", "Россия"],
      "lowPrice": "1500000",
      "highPrice": "15000000"
    },
    "material": "Металлоконструкции, сэндвич-панели, профнастил",
    "category": "Быстровозводимые здания",
    // Optional: hasOfferCatalog to show product types
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Типы каркасных ангаров",
      "itemListElement": [
        { "@type": "Product", "name": "Складские ангары" },
        { "@type": "Product", "name": "Сельскохозяйственные ангары" },
        { "@type": "Product", "name": "Спортивные ангары" },
        { "@type": "Product", "name": "Производственные цеха" },
        { "@type": "Product", "name": "Автосервисы" }
      ]
    }
  };

  // ----- FAQ SCHEMA (already excellent, keep as is) -----
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Нужно ли разрешение на строительство каркасного ангара в Москве и Московской области?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Для ангаров площадью до 1500 м² и высотой до 15 метров разрешение на строительство не требуется, если объект не является капитальным. Наши ангары относятся к быстровозводимым некапитальным сооружениям. Для крупных объектов мы помогаем с получением всех необходимых разрешений в администрации Московской области."
        }
      },
      {
        "@type": "Question",
        "name": "Сколько стоит каркасный ангар под ключ в Москве?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Стоимость каркасного ангара зависит от размеров и комплектации. Ангар 12×24 м (288 м²) — от 1 500 000 ₽, ангар 18×36 м (648 м²) — от 3 200 000 ₽, ангар 24×48 м (1152 м²) — от 6 800 000 ₽. В стоимость входит: проектирование, каркас, утепление, ворота, окна, монтаж под ключ. Точная цена рассчитывается индивидуально."
        }
      },
      {
        "@type": "Question",
        "name": "Какие сроки строительства каркасного ангара?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Стандартный срок изготовления и монтажа каркасного ангара — от 14 до 45 рабочих дней в зависимости от сложности и площади. Для типовых проектов возможно ускоренное строительство за 10-14 дней. Мы работаем в Москве, Красногорске, Химках, Мытищах, Подольске, Одинцово и по всей Московской области."
        }
      },
      {
        "@type": "Question",
        "name": "Нужен ли фундамент для каркасного ангара?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Для легких каркасных ангаров достаточно бетонной подготовки или винтовых свай. Для утепленных ангаров с тяжелым оборудованием рекомендуется ленточный или плитный фундамент. Наши инженеры бесплатно выезжают на объект в Москве и Московской области для оценки грунта и расчета оптимального фундамента."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли утеплить каркасный ангар для круглогодичного использования?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, мы производим утепленные каркасные ангары с сэндвич-панелями или минеральной ватой толщиной 100-200 мм. Внутри поддерживается комфортная температура даже зимой. Подходит для складов, производственных цехов, автосервисов, спортивных комплексов."
        }
      },
      {
        "@type": "Question",
        "name": "Какие ворота можно установить на каркасный ангар?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Мы устанавливаем любые типы ворот: распашные, откатные, секционные, рольставни, ПВХ-шторы. Возможна установка автоматики, калиток, окон. Ворота подбираются под задачи заказчика и бюджет."
        }
      },
      {
        "@type": "Question",
        "name": "Есть ли у вас готовые проекты каркасных ангаров?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, у нас более 50 типовых проектов ангаров различного назначения: складские, сельскохозяйственные, спортивные, производственные, автосервисы, ангары для спецтехники. Также разрабатываем индивидуальные проекты по вашему техническому заданию."
        }
      },
      {
        "@type": "Question",
        "name": "Доставляете и монтируете каркасные ангары в другие регионы?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, мы работаем по всей России. Доставка металлоконструкций транспортными компаниями. Наши монтажные бригады выезжают в Санкт-Петербург, Нижний Новгород, Казань, Самару, Ростов-на-Дону, Краснодар и другие города РФ. Стоимость доставки рассчитывается индивидуально."
        }
      },
      {
        "@type": "Question",
        "name": "Какой срок службы каркасного ангара?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Срок службы наших каркасных ангаров — более 30 лет. Металлоконструкции обработаны антикоррозийным покрытием. Мы даем гарантию на каркас 10 лет, на кровлю 5 лет. При правильной эксплуатации ангар служит 50+ лет."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли посмотреть ваш каркасный ангар в Москве или области?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, мы можем организовать выезд на действующие объекты в Москве, Красногорске, Химках, Мытищах. Также вы можете посетить наше производство в Калуге и офис в Красногорске, где покажем образцы материалов и готовые конструкции. Запись по телефону или через форму на сайте."
        }
      }
    ]
  };

  // ----- ORGANIZATION SCHEMA (with contact point) -----
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MOBILE TENT",
    "url": "https://mobile-tent.ru",
    "logo": "https://mobile-tent.ru/favicon.ico",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": pageData.contacts?.phone1 || "8 (495) 487 43 53",
        "contactType": "customer service",
        "areaServed": "RU",
        "availableLanguage": "Russian"
      }
    ],
    "address": officePlace.address
  };

  // ----- BREADCRUMB SCHEMA (helps with navigation) -----
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
        "name": "Шатры и навесы",
        "item": "https://mobile-tent.ru/shatry/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Каркасные ангары",
        "item": "https://mobile-tent.ru/shatry-i-navesy/angary_karkasnye"
      }
    ]
  };

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

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* JSON-LD schemas - enhanced for GEO & SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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