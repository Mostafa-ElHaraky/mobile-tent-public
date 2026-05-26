import { MainOurProjects1 } from "./sections/MainOurProjects1/MainOurProjects1";
import { MainOurProjects3 } from "./sections/MainOurProjects3/MainOurProjects3";
import { MainOurProjects4 } from "./sections/MainOurProjects4/MainOurProjects4";
import { Footer } from "../../components/ui/Footer";
import AnimatedSection from "../../components/ui/AnimatedSection";
import type { Metadata } from "next";

// Fetch gallery metadata from Bitrix API
async function getGalleryMetadata() {
  try {
    const response = await fetch('page.php?code=gallery', {
      next: { revalidate: 3600 }
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch gallery metadata');
    }
    
    // Get the response as text first
    const text = await response.text();
    
    // Clean the response - find JSON part
    const jsonStart = text.indexOf('{');
    const jsonEnd = text.lastIndexOf('}');
    
    if (jsonStart === -1 || jsonEnd === -1) {
      // No valid JSON found, use default data
      console.warn('No JSON found in API response, using default data');
      return {
        success: false,
        seo: {
          title: "Галерея наших проектов - Москва, Mobile Tent",
          description: "Галерея проектов: здесь вы можете просмотреть изготовленные нашей компанией шатры, тенты и навесы, которые были установлены для заказчиков.",
          h1: "Галерея проектов",
          url: "/gallery",
          keywords: ""
        },
        contacts: {
          phone1: "+7 (499) 113-36-60",
          phone2: "+7 (495) 487-43-53",
          email: "info@mobile-tent.ru",
          telegram: "https://t.me/+79770893996?start=14594990928",
          whatsapp: "https://api.whatsapp.com/send/?phone=79805109568",
          office: {
            address: "Московская область, г. Красногорск, ул. Молодежная, д. 4",
            map_url: "https://yandex.ru/maps/org/grand_tent/130300118530/?ll=37.269340%2C55.834305&z=17",
            hours: "ПН - ПТ с 09:00 - 22:00 МСК",
            appointment: "По предварительной записи"
          },
          production: {
            address: "Калужская область, г. Калуга, ул. Производственная, д. 15",
            map_url: "https://yandex.ru/maps/org/grand_tent/32724517904/?ll=36.261566%2C54.556269&z=17",
            hours: "ПН - СБ с 08:00 - 20:00 МСК",
            appointment: "По договоренности"
          }
        }
      };
    }
    
    // Extract clean JSON
    const cleanJson = text.substring(jsonStart, jsonEnd + 1);
    const data = JSON.parse(cleanJson);
    
    return data;
    
  } catch (error) {
    console.error('Error fetching gallery metadata:', error);
    // Return default values if API fails
    return {
      success: false,
      seo: {
        title: "Галерея наших проектов - Москва, Mobile Tent",
        description: "Галерея проектов: здесь вы можете просмотреть изготовленные нашей компанией шатры, тенты и навесы, которые были установлены для заказчиков.",
        h1: "Галерея проектов",
        url: "/gallery",
        keywords: ""
      },
      contacts: {
        phone1: "+7 (499) 113-36-60",
        phone2: "+7 (495) 487-43-53",
        email: "info@mobile-tent.ru",
        telegram: "https://t.me/+79770893996?start=14594990928",
        whatsapp: "https://api.whatsapp.com/send/?phone=79805109568",
        office: {
          address: "Московская область, г. Красногорск, ул. Молодежная, д. 4",
          map_url: "https://yandex.ru/maps/org/grand_tent/130300118530/?ll=37.269340%2C55.834305&z=17",
          hours: "ПН - ПТ с 09:00 - 22:00 МСК",
          appointment: "По предварительной записи"
        },
        production: {
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
  const data = await getGalleryMetadata();

  // Get SEO data with safe access
  const seoData = data?.seo || {};
  
  // Use API data if successful and exists, otherwise use fallback
  const seoTitle = data.success && seoData.title 
    ? seoData.title 
    : "Галерея наших проектов - Москва, Mobile Tent";
    
  const seoDescription = data.success && seoData.description 
    ? seoData.description 
    : "Галерея проектов: здесь вы можете просмотреть изготовленные нашей компанией шатры, тенты и навесы, которые были установлены для заказчиков.";
    
  const seoKeywords = data.success && seoData.keywords 
    ? seoData.keywords 
    : "";
    
  const seoUrl = data.success && seoData.url 
    ? seoData.url 
    : "/gallery";

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: seoKeywords,
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: seoUrl,
      siteName: 'MOBILE TENT',
      locale: 'ru_RU',
      type: 'website',
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
      canonical: seoUrl,
    },
  };
}

// Fetch gallery data for page content
async function getGalleryData() {
  try {
    const response = await fetch('page.php?code=gallery', {
      next: { revalidate: 3600 }
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch gallery data');
    }
    
    // Get the response as text first
    const text = await response.text();
    
    // Clean the response - find JSON part
    const jsonStart = text.indexOf('{');
    const jsonEnd = text.lastIndexOf('}');
    
    if (jsonStart === -1 || jsonEnd === -1) {
      // No valid JSON found, use default data
      console.warn('No JSON found in API response, using default data');
      return {
        success: false,
        seo: {
          h1: "Галерея проектов"
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
            address: "Московская область, г. Красногорск, ул. Молодежная, д. 4",
            map_url: "https://yandex.ru/maps/org/grand_tent/130300118530/?ll=37.269340%2C55.834305&z=17",
            hours: "ПН - ПТ с 09:00 - 22:00 МСК",
            appointment: "По предварительной записи"
          },
          production: {
            address: "Калужская область, г. Калуга, ул. Производственная, д. 15",
            map_url: "https://yandex.ru/maps/org/grand_tent/32724517904/?ll=36.261566%2C54.556269&z=17",
            hours: "ПН - СБ с 08:00 - 20:00 МСК",
            appointment: "По договоренности"
          }
        }
      };
    }
    
    // Extract clean JSON
    const cleanJson = text.substring(jsonStart, jsonEnd + 1);
    const data = JSON.parse(cleanJson);
    
    return data;
    
  } catch (error) {
    console.error('Error fetching gallery data:', error);
    // Return default values if API fails
    return {
      success: false,
      seo: {
        h1: "Галерея проектов"
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
          address: "Московская область, г. Красногорск, ул. Молодежная, д. 4",
          map_url: "https://yandex.ru/maps/org/grand_tent/130300118530/?ll=37.269340%2C55.834305&z=17",
          hours: "ПН - ПТ с 09:00 - 22:00 МСК",
          appointment: "По предварительной записи"
        },
        production: {
          address: "Калужская область, г. Калуга, ул. Производственная, д. 15",
          map_url: "https://yandex.ru/maps/org/grand_tent/32724517904/?ll=36.261566%2C54.556269&z=17",
          hours: "ПН - СБ с 08:00 - 20:00 МСК",
          appointment: "По договоренности"
        }
      }
    };
  }
}

export default async function GalleryPage() {
  const pageData = await getGalleryData();

  // Get H1 with safe access - use API data if available, otherwise use default
  const seoH1 = pageData.success && pageData.seo && pageData.seo.h1 
    ? pageData.seo.h1 
    : "Галерея проектов";

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <AnimatedSection delay={0.2}>
        {/* Pass H1 from Bitrix to MainOurProjects1 */}
        <MainOurProjects1 seoH1={seoH1} />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <MainOurProjects3 />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        {/* Pass CMS data to MainOurProjects4 */}
        <MainOurProjects4 cmsData={{
          contacts: pageData.contacts,
          content: {
            heading: "Весь комплекс работ делаем на своем производстве",
            subheading: "в г. Калуга",
            invitationText: "Приезжайте на знакомство-экскурсию",
            descriptionText: "Увидите разницу китайской и французской ткани на примере 2 конструкций стоящих уже несколько лет на улице"
          }
        }} />
      </AnimatedSection>
                          
      <Footer />
    </div>
  );
}