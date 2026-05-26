import { QA1 } from "./sections/QA1";
import { QA2 } from "./sections/QA2";
import { Footer } from "../../components/ui/Footer";
import type { Metadata } from "next";
import AnimatedSection from "../../components/ui/AnimatedSection";

// Fetch FAQ page data from Bitrix API
async function getFaqData() {
  try {
    const response = await fetch('page.php?code=faq', {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch FAQ page data');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching FAQ page data:', error);
    // Return default values if API fails
    return {
      success: false,
      seo: {
        title: "Часто задаваемые вопросы (FAQ) MOBILE TENT",
        description: "Вы найдете ответы на часто задаваемые вопросы о наших продуктах и услугах. Если у вас есть дополнительные вопросы, не стесняйтесь обращаться к нашей службе поддержки. Мы всегда готовы помочь вам! MOBILE TENT.",
        keywords: "",
        h1: "Часто задаваемые вопросы о шатрах и тентах - ответы на популярные вопросы клиентов MobilTent",
        url: "/faq"
      },
      content: {
        desktop: '',
        mobile: ''
      },
      reviews: {
        text: [],
        letters: [],
        otzoviki: []
      },
      extracted_values: {
        REVIEWS_TEXT: "",
        REVIEWS_LETTERS: "",
        REVIEWS_OTZOVIKI: "",
        phone1: "",
        phone2: "",
        email: "",
        telegram: "",
        whatsapp: ""
      }
    };
  }
}

// Generate metadata dynamically from Bitrix
export async function generateMetadata(): Promise<Metadata> {
  const data = await getFaqData();

  // Use data from API if successful, otherwise use defaults
  const seoTitle = data.success ? data.seo.title : "Часто задаваемые вопросы (FAQ) MOBILE TENT";
  const seoDescription = data.success ? data.seo.description : "Вы найдете ответы на часто задаваемые вопросы о наших продуктах и услугах. Если у вас есть дополнительные вопросы, не стесняйтесь обращаться к нашей службе поддержки. Мы всегда готовы помочь вам! MOBILE TENT.";
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
export default async function FaqPage() {
  const pageData = await getFaqData();

  // Get H1 content from Bitrix or use default
  const h1Content = pageData.seo?.h1 || "Часто задаваемые вопросы о шатрах и тентах - ответы на популярные вопросы клиентов MobilTent";

  // Extract contact data from Bitrix CMS
  const contactData = {
    phone1: pageData.extracted_values?.phone1 || "",
    phone2: pageData.extracted_values?.phone2 || "",
    email: pageData.extracted_values?.email || "",
    telegram: pageData.extracted_values?.telegram || "",
    whatsapp: pageData.extracted_values?.whatsapp || ""
  };

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* Pass H1 content to QA1 component */}
      <QA1 h1Content={h1Content} />
      
      {/* Pass contact data to QA2 component */}
      <QA2 contactData={contactData} />

      <Footer />
    </div>
  );
}