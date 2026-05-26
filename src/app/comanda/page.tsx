import { Commanda } from "./sections/Commanda/Commanda";
import { Header } from "../../components/ui/Header";
import { Footer } from "../../components/ui/Footer";
import type { Metadata } from "next";

// Fetch Comanda page data from Bitrix API
async function getComandaData() {
  try {
    const response = await fetch('page.php?code=comanda', {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch Comanda page data');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching Comanda page data:', error);
    // Return default values if API fails
    return {
      success: false,
      seo: {
        title: "Наша команда | MOBILE TENT",
        description: "Профессиональная команда специалистов по производству ангаров",
        keywords: "",
        h1: "Команда экспертов Mobile Tent - профессиональная команда специалистов по шатрам и тентам",
        url: "/comanda"
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
        REVIEWS_OTZOVIKI: ""
      }
    };
  }
}

// Generate metadata dynamically from Bitrix
export async function generateMetadata(): Promise<Metadata> {
  const data = await getComandaData();

  // Use data from API if successful, otherwise use defaults
  const seoTitle = data.success ? data.seo.title : "О компании - Москва, Mobile Tent";
  const seoDescription = data.success ? data.seo.description : "Компания MOBILE TENT - ведущий производитель шатров, тентов и навесов в Москве, предоставляет услуги аренды и монтажа конструкций, их украшения и дизайна";
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
export default async function ComandaPage() {
  const pageData = await getComandaData();

  // Get H1 content from Bitrix or use default
  const h1Content = pageData.seo?.h1 || "Команда экспертов Mobile Tent - профессиональная команда специалистов по шатрам и тентам";

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
          {/* SEO-optimized H1 - placed at page level to avoid duplication */}
          {/* Dynamic H1 content from Bitrix */}
          <h1 className="sr-only">{h1Content}</h1>
          
          {/* ===== Mobile layout (<= md) ===== */}
          <div className="block md:hidden w-full">
            <div className="w-full max-w-screen-sm mx-auto">
              <Header />
              {/* Spacing tuned for mobile; adjust if your mock requires different */}
              <div className="pt-20 px-4 sm:px-6">
                {/* Pass H1 content to Commanda component if needed */}
                <Commanda />
              </div>
            </div>
          </div>

          {/* ===== Desktop layout (>= md) — unchanged ===== */}
          <div className="hidden md:block relative w-full max-w-[1440px] h-[1192px] bottom-[110px] mx-auto bg-transparent">
            <Header />
            <div className="relative top-[260px]">
              {/* Pass H1 content to Commanda component if needed */}
              <Commanda />
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}