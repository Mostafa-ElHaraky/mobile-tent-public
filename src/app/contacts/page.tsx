import { Contact1 } from "./sections/Contact1/Contact1";
import { Contact2 } from "./sections/Contact2/Contact2";
import { Header } from "../../components/ui/Header";
import { Footer } from "../../components/ui/Footer";
import type { Metadata } from "next";

// Fetch Contacts page data from Bitrix API
async function getContactsData() {
  try {
    const response = await fetch('page.php?code=contacts', {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch Contacts page data');
    }
    
    const data = await response.json();
    console.log('API Response:', data); // Debug log
    
    return data;
  } catch (error) {
    console.error('Error fetching Contacts page data:', error);
    // Return default values if API fails
    return {
      success: false,
      seo: {
        title: "Контакты компании MOBILE TENT",
        description: "Контактная информация компании-производителя шатров и тентовых конструкций MOBILE TENT.",
        keywords: "",
        h1: "Контакты компании MOBILE TENT - производителя шатров и тентовых конструкций",
        url: "/contacts"
      },
      contacts: {
        phone1: "+7 (499) 113-36-60",
        phone2: "+7 (495) 487-43-53",
        email: "info@mobile-tent.ru",
        telegram: "https://t.me/+79770893996?start=14594990928",
        whatsapp: "https://api.whatsapp.com/send/?phone=79805109568",
        office: {
          name: "Офис г. Красногорск",
          address: "Московская область, г. Красногорск, ул. Молодежная, д. 4",
          map_url: "https://yandex.ru/maps/org/grand_tent/130300118530/?ll=37.269340%2C55.834305&z=17",
          hours: "ПН - ПТ с 09:00 до 18:00",
          appointment: "По предварительной записи"
        },
        production: {
          name: "Производство г. Калуга",
          address: "Калужская область, г. Калуга, ул. Производственная, д. 15",
          map_url: "https://yandex.ru/maps/org/grand_tent/32724517904/?ll=36.261566%2C54.556269&z=17",
          hours: "ПН - СБ с 08:00 до 20:00",
          appointment: "По договоренности"
        }
      },
      extracted_values: {
        phone1: "+7 (499) 113-36-60",
        phone2: "+7 (495) 487-43-53",
        email: "info@mobile-tent.ru",
        telegram: "https://t.me/+79770893996?start=14594990928",
        whatsapp: "https://api.whatsapp.com/send/?phone=79805109568",
        office_address: "Московская область, г. Красногорск, ул. Молодежная, д. 4",
        production_address: "Калужская область, г. Калуга, ул. Производственная, д. 15",
        office_hours: "ПН - ПТ с 09:00 до 18:00",
        production_hours: "ПН - СБ с 08:00 до 20:00",
        office_appointment: "По предварительной записи",
        production_appointment: "По договоренности",
        office_map_url: "https://yandex.ru/maps/org/grand_tent/130300118530/?ll=37.269340%2C55.834305&z=17",
        production_map_url: "https://yandex.ru/maps/org/grand_tent/32724517904/?ll=36.261566%2C54.556269&z=17",
        expert_name: "Евгений Петров",
        expert_position: "Эксперт по тентовым конструкциям"
      },
      content: {
        desktop: '',
        mobile: ''
      },
      reviews: {
        text: [],
        letters: [],
        otzoviki: []
      }
    };
  }
}

// Generate metadata dynamically from Bitrix
export async function generateMetadata(): Promise<Metadata> {
  const data = await getContactsData();

  // Use data from API if successful, otherwise use defaults
  const seoTitle = data.success ? data.seo.title : "Контакты компании MOBILE TENT";
  const seoDescription = data.success ? data.seo.description : "Контактная информация компании-производителя шатров и тентовых конструкций MOBILE TENT.";
  const seoKeywords = data.success ? data.seo.keywords : "";
  
  const metadata: Metadata = {
    title: seoTitle,
    description: seoDescription,
    keywords: seoKeywords || undefined, // Only include if not empty
  };

  // Add Open Graph tags
  metadata.openGraph = {
    title: seoTitle,
    description: seoDescription,
    type: 'website',
  };

  return metadata;
}

// Server Component - can be async
export default async function ContactPage() {
  const pageData = await getContactsData();

  // Debug log to see the actual structure
  console.log('Page Data Structure:', {
    hasContacts: !!pageData.contacts,
    contactsKeys: pageData.contacts ? Object.keys(pageData.contacts) : [],
    hasExtractedValues: !!pageData.extracted_values,
    extractedValuesKeys: pageData.extracted_values ? Object.keys(pageData.extracted_values) : []
  });

  // Get H1 content from Bitrix or use default
  const h1Content = pageData.seo?.h1 || "Контакты компании MOBILE TENT - производителя шатров и тентовых конструкций";

  // Create unified contact data object from contacts and extracted_values
  // API returns data in pageData.contacts, not pageData.extracted_values
  const contactData = {
    // Basic contact info - check both locations
    phone1: pageData.contacts?.phone1 || pageData.extracted_values?.phone1 || "+7 (499) 113-36-60",
    phone2: pageData.contacts?.phone2 || pageData.extracted_values?.phone2 || "+7 (495) 487-43-53",
    email: pageData.contacts?.email || pageData.extracted_values?.email || "info@mobile-tent.ru",
    telegram: pageData.contacts?.telegram || pageData.extracted_values?.telegram || "https://t.me/+79770893996?start=14594990928",
    whatsapp: pageData.contacts?.whatsapp || pageData.extracted_values?.whatsapp || "https://api.whatsapp.com/send/?phone=79805109568",
    
    // Office info - handle both nested office object and flat structure
    office: {
      name: pageData.contacts?.office?.name || "Офис г. Красногорск",
      address: pageData.contacts?.office?.address || pageData.extracted_values?.office_address || "Московская область, г. Красногорск, ул. Молодежная, д. 4",
      map_url: pageData.contacts?.office?.map_url || pageData.extracted_values?.office_map_url || "https://yandex.ru/maps/org/grand_tent/130300118530/?ll=37.269340%2C55.834305&z=17",
      hours: pageData.contacts?.office?.hours || pageData.extracted_values?.office_hours || "ПН - ПТ с 09:00 до 18:00",
      appointment: pageData.contacts?.office?.appointment || pageData.extracted_values?.office_appointment || "По предварительной записи"
    },
    
    // Production info - handle both nested production object and flat structure
    production: {
      name: pageData.contacts?.production?.name || "Производство г. Калуга",
      address: pageData.contacts?.production?.address || pageData.extracted_values?.production_address || "Калужская область, г. Калуга, ул. Производственная, д. 15",
      map_url: pageData.contacts?.production?.map_url || pageData.extracted_values?.production_map_url || "https://yandex.ru/maps/org/grand_tent/32724517904/?ll=36.261566%2C54.556269&z=17",
      hours: pageData.contacts?.production?.hours || pageData.extracted_values?.production_hours || "ПН - СБ с 08:00 до 20:00",
      appointment: pageData.contacts?.production?.appointment || pageData.extracted_values?.production_appointment || "По договоренности"
    },
    
    // Expert info (for Contact2) - these are only in extracted_values
    expertName: pageData.extracted_values?.expert_name || "Евгений Петров",
    expertPosition: pageData.extracted_values?.expert_position || "Эксперт по тентовым конструкциям"
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Background layer spans the entire width; responsive height for mobile */}
      <div className="relative w-full flex-1 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-0">
          {/* soft blue gradient like the mock */}
          <div
            className="
              absolute -top-16 md:-top-24 left-0 w-screen
              h-[900px] md:h-[1400px]
              bg-[linear-gradient(180deg,rgba(232,238,248,1)_0%,rgba(232,238,248,0.7)_20%,rgba(232,238,248,0.35)_55%,rgba(232,238,248,0)_100%)]
            "
          />
        </div>

        {/* Main content is centered inside max width */}
        <main className="relative z-10">
          {/* SINGLE H1 TAG - using proper screen reader only styling */}
          {/* Dynamic H1 content from Bitrix */}
          <h1 className="absolute w-[1px] h-[1px] p-0 -m-[1px] overflow-hidden whitespace-nowrap border-0">
            {h1Content}
          </h1>
          
          {/* ===== Mobile layout (<= md) ===== */}
          <div className="block md:hidden w-full">
            <div className="w-full max-w-screen-sm mx-auto">
              <Header />
              {/* Spacing tuned for mobile */}
              <div className="pt-10 px-4 sm:px-6 -mt-60">
                {/* Pass SAME contact data to both components */}
                <Contact1 contacts={contactData} />
                <Contact2 contacts={contactData} /> 
              </div>
            </div>
          </div>

          {/* ===== Desktop layout (>= md) ===== */}
          
          <div className="hidden md:block relative w-full max-w-[1440px] h-[1930px] bottom-[110px] mx-auto bg-transparent">
            <div className="relative top-[140px]">
              {/* Pass SAME contact data to both components */}
              <Contact1 contacts={contactData} />
              <Contact2 contacts={contactData} /> 
            </div>
            <div className="relative bottom-[690px]">
              <Header />
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}