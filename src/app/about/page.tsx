import { About1 } from "./sections/About1/About1";
import { About2 } from "./sections/About2/About2";
import { Footer } from "../../components/ui/Footer";
import type { Metadata } from "next";

// Fetch About page data from Bitrix API
async function getAboutData() {
  try {
    const response = await fetch('page.php?code=about', {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch About page data');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching About page data:', error);
    // Return default values if API fails
    return {
      success: false,
      seo: {
        title: "О компании - Москва, Mobile Tent",
        description: "Компания MOBILE TENT - ведущий производитель шатров, тентов и навесов в Москве, предоставляет услуги аренды и монтажа конструкций, их украшения и дизайна",
        keywords: "",
        h1: "О компании MobileTent - Производство и продажа тентовых конструкций и шатров по всей России и СНГ",
        url: "/about"
      },
      content: {
        desktop: '',
        mobile: ''
      },
      reviews: {
        text: '',
        letters: '',
        otzoviki: ''
      },
      extracted_values: {
        phone1: "",
        phone2: "",
        email: "",
        telegram: "",
        whatsapp: "",
        office_address: "",
        production_address: "",
        office_hours: "",
        production_hours: "",
        office_appointment: "",
        production_appointment: "",
        office_map_url: "",
        production_map_url: ""
      }
    };
  }
}

// Generate metadata dynamically from Bitrix
export async function generateMetadata(): Promise<Metadata> {
  const data = await getAboutData();

  // Use data from API if successful, otherwise use defaults
  const seoTitle = data.success ? data.seo.title : "О компании - Москва, Mobile Tent";
  const seoDescription = data.success ? data.seo.description : "Компания MOBILE TENT - ведущий производитель шатров, тентов и навесов в Москве, предоставляет услуги аренды и монтажа конструкций, их украшения и дизайна";
  const seoKeywords = data.success ? data.seo.keywords : "";
  
  const metadata: Metadata = {
    title: seoTitle,
    description: seoDescription,
    keywords: seoKeywords || undefined,
  };

  // Add Open Graph tags
  metadata.openGraph = {
    title: seoTitle,
    description: seoDescription,
    type: 'website',
  };

  return metadata;
}

export default async function AboutPage() {
  const pageData = await getAboutData();

  // Get H1 content from Bitrix or use default
  const h1Content = pageData.seo?.h1 || "О компании MobileTent - Производство и продажа тентовых конструкций и шатров по всей России и СНГ";

  // Get content data for About2
  const contentData = {
    desktopContent: pageData.content?.desktop || '',
    mobileContent: pageData.content?.mobile || ''
  };

  // Get contact data for About2
  const contactData = {
    office_address: pageData.extracted_values?.office_address || "",
    office_hours: pageData.extracted_values?.office_hours || "",
    office_appointment: pageData.extracted_values?.office_appointment || "",
    production_address: pageData.extracted_values?.production_address || "",
    production_hours: pageData.extracted_values?.production_hours || "",
    production_appointment: pageData.extracted_values?.production_appointment || "",
    phone1: pageData.extracted_values?.phone1 || "",
    phone2: pageData.extracted_values?.phone2 || "",
    email: pageData.extracted_values?.email || "",
    telegram: pageData.extracted_values?.telegram || "",
    whatsapp: pageData.extracted_values?.whatsapp || "",
    office_map_url: pageData.extracted_values?.office_map_url || "",
    production_map_url: pageData.extracted_values?.production_map_url || ""
  };

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
        <About1 h1Content={h1Content} />
        <About2 contentData={contentData} contactData={contactData} />
        <Footer />
    </div>
  );
};