import { notFound } from 'next/navigation';
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

// Base URL for the site
const SITE_URL = 'https://mobile-tent.ru';

// Fetch category data from CMS API based on slug
async function getCategoryData(slug: string) {
  try {
    const response = await fetch(`category_page.php?code=${slug}`, {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error fetching category data for ${slug}:`, error);
    return null;
  }
}

// Default contacts data (used as fallback)
const defaultContacts = {
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
};

// Generate metadata dynamically based on slug
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  // Await params to access its properties
  const { slug } = await params;
  const data = await getCategoryData(slug);
  
  if (!data) {
    return {
      title: 'Страница не найдена',
      robots: {
        index: false,
        follow: false,
      },
    };
  }
  
  const canonicalUrl = `${SITE_URL}/shatry-i-navesy/${slug}`;
  const title = data.seo?.title || data.sectionTitle || data.productType;
  const description = data.seo?.description || `Купить ${data.productType?.toLowerCase()} в Москве и России. Заказать по оптимальным ценам. Звоните: +7 (495) 760-42-20.`;
  
  return {
    title: title,
    description: description,
    keywords: data.seo?.keywords,
    openGraph: {
      title: title,
      description: description,
      url: canonicalUrl,
      siteName: 'MOBILE TENT',
      locale: 'ru_RU',
      type: 'website',
      images: [
        {
          url: data.previewImages?.[0] || 'https://mobile-tent.ru/doparc.webp',
          width: 1200,
          height: 630,
          alt: data.sectionTitle || data.productType
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

// Generate static paths for pre-rendering
export async function generateStaticParams() {
  // Add all slugs from your CMS here
  const slugs = ['arochnye', 'test'];
  return slugs.map((slug) => ({ slug }));
}

// Main page component
export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  // Await params to access its properties
  const { slug } = await params;
  const data = await getCategoryData(slug);
  
  // If category not found, show 404
  if (!data) {
    notFound();
  }
  
  // Prepare contacts data (use API data if available, otherwise fallback to defaults)
  const contacts = defaultContacts;
  
  // Prepare product type for Shatry3 component
  const productType = data.productType || 'Арочные (Шатры)';
  const sectionTitle = data.sectionTitle || productType;
  const heroText = data.heroText || productType.toUpperCase() + ' В МОСКВЕ';
  
  // JSON-LD Schema for the category page
  const categorySchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": sectionTitle,
    "description": data.seo?.description || `Купить ${sectionTitle.toLowerCase()} в Москве и России.`,
    "image": data.previewImages?.[0] || 'https://mobile-tent.ru/doparc.webp',
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
    }
  };
  
  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MOBILE TENT",
    "url": SITE_URL,
    "logo": "https://mobile-tent.ru/favicon.ico",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": contacts.phone1,
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
  
  // Local Business Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "MOBILE TENT",
    "image": data.previewImages?.[0] || "https://mobile-tent.ru/doparc.webp",
    "url": `${SITE_URL}/shatry-i-navesy/${slug}`,
    "telephone": contacts.phone1,
    "email": contacts.email,
    "priceRange": "₽₽",
    "description": data.seo?.description,
    "address": [
      {
        "@type": "PostalAddress",
        "addressLocality": "Красногорск",
        "addressRegion": "Московская область",
        "addressCountry": "RU",
        "streetAddress": contacts.office.address.replace('Московская область, г. Красногорск, ', ''),
        "postalCode": "143401"
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
      { "@type": "Country", "name": "Россия" }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "22:00"
      }
    ]
  };
  
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* JSON-LD schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(categorySchema) }}
      />

<AnimatedSection delay={0.2}>
  <Shatry1 
    seoH1={data.seo?.h1 || sectionTitle} 
    heroText={heroText}
    breadcrumbTitle={sectionTitle}  // Add this
    breadcrumbSlug={slug}           // Add this
  />
</AnimatedSection>

      <AnimatedSection delay={0.2}>
        {/* Pass product type and section title to Shatry3 */}
        <Shatry3 
          productType={productType}
          sectionTitle={sectionTitle}
        />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <Shatry2 />
      </AnimatedSection>
      
      <AnimatedSection delay={0.2}>
        {/* Pass content data to Shatry4 */}
        <Shatry4 
          desktopContent={data.content?.desktop}
          mobileContent={data.content?.mobile}
          quickFilterLinks={data.quickFilterLinks || []}
          previewImages={data.previewImages || []}
          sectionTitle={data.sectionTitle}  // Add this line
        />
      </AnimatedSection>
      
      <AnimatedSection delay={0.2}>
        {/* Pass preview images to Shatry5 */}
        <Shatry5 previewImages={data.previewImages || []} />
      </AnimatedSection>
      
      <AnimatedSection delay={0.2}>
        <Shatry6 />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <Shatry7 />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        {/* Pass contacts data to Shatry8 */}
        <Shatry8 contacts={contacts} />
      </AnimatedSection>

      <Footer />
    </div>
  );
}