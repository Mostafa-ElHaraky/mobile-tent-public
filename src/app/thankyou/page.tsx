import { Thank1 } from "./sections/Thank1/Thank1";
import { Footer } from "../../components/ui/Footer";
import AnimatedSection from "../../components/ui/AnimatedSection";
import type { Metadata } from "next";

// Fetch page data from Bitrix API
async function getThankYouData() {
  try {
    const response = await fetch('page.php?code=thankyou', {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch page data');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching page data:', error);
    // Return default values if API fails
    return {
      success: false,
      seo: {
        title: "ThankYou - Москва, Mobile Tent",
        description: "Галерея проектов: здесь вы можете просмотреть изготовленные нашей компанией шатры, тенты и навесы, которые были установлены для заказчиков.",
        h1: "Портфолио проектов шатров и ангаров от MOBILE TENT - каркасные, тентовые, арочные и мобильные конструкции для мероприятий"
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

// Generate metadata dynamically
export async function generateMetadata(): Promise<Metadata> {
  const data = await getThankYouData();

  // Use data from API if successful, otherwise use defaults
  const seoTitle = data.success ? data.seo.title : data.seo.title;
  const seoDescription = data.success ? data.seo.description : data.seo.description;
  
  return {
    title: seoTitle,
    description: seoDescription,
    openGraph: {
      title: seoTitle,
      description: seoDescription,
    },
  };
}

export default async function ThankYouPage() {
  const pageData = await getThankYouData();

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* Single H1 tag from Bitrix */}
      <h1 className="sr-only">
        {pageData.success ? pageData.seo.h1 : "Портфолио проектов шатров и ангаров от MOBILE TENT - каркасные, тентовые, арочные и мобильные конструкции для мероприятий"}
      </h1>

      {/* Desktop version - appears only on sm screens and larger */}
      <div className="hidden sm:flex flex-col w-full">
          <Thank1 contacts={pageData.contacts} />
          <Footer />
      </div>

      {/* Mobile version - appears only on small screens */}
      <div className="flex flex-col w-full sm:hidden">
          <div className="px-4 py-2">
            <Thank1 contacts={pageData.contacts} />
          </div>
          <Footer />
      </div>
    </div>
  );
};