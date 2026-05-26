// app/[...slug]/page.js
import { notFound } from 'next/navigation';
import CMSLayout from '@/components/layout/CMSLayout';

// IMPORTANT: Force dynamic rendering for CMS pages
// This ensures that every request fetches fresh data from the CMS API
export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;

// List of your EXISTING pages that should NOT be handled by CMS
const existingRoutes = [
  'about', 'about-company', 'contacts', 'reviews', 'faq', 'services',
  '3d-gallery', 'articles', 'comanda', 'cookie-policy', 'honors',
  'izgotovlenie_tentov_navesov', 'kalkulyator-angara', 'our-projects',
  'pergoly', 'privacy-consent', 'privacy-policy', 'proizvodstvo-shatrov',
  'rekvizity', 'search', 'service', 'shater-zvezda', 'shatry', 'shatry-transformery', 'sitemap', 'thankyou',
  'transformer', 'turisticheskie-shatry-i-tenty', 'user-agreement',
  'vidy-shatrov', 'warranty-and-refund', 'dlya-cafe', 'dlya-sport',
  'dlya-torgestva', 'dlya-vistavok', 'dlya-vremennyh', 'dlya-zagorodnyh-domov'
];

// List of image extensions to ignore
const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.ico', '.bmp', '.tiff'];

// Check if the path looks like an image file
function isImagePath(path) {
  if (!path) return false;
  const lowerPath = path.toLowerCase();
  return imageExtensions.some(ext => lowerPath.endsWith(ext));
}

// Check if the path starts with any existing route
function isExistingRoute(path) {
  if (!path) return false;
  
  // Check exact matches
  if (existingRoutes.includes(path)) return true;
  
  // Check if path starts with any of the prefixes
  for (const route of existingRoutes) {
    if (path.startsWith(route + '/')) return true;
  }
  
  return false;
}

// Check if this is likely a card product (starts with /tent/)
function isCardProduct(slugArray) {
  if (!slugArray || slugArray.length === 0) return false;
  // Check if first segment is 'tent'
  return slugArray[0] === 'tent';
}

async function getPageData(slugArray) {
  const slug = slugArray ? slugArray.join('/') : '';
  
  // Skip image paths - return 404 immediately
  if (isImagePath(slug)) {
    return null;
  }
  
  // If it's an existing route, return null
  if (isExistingRoute(slug)) {
    return null;
  }
  
  try {
    // Determine which API endpoint to use
    const isCard = isCardProduct(slugArray);
    const apiEndpoint = isCard ? 'card_product.php' : 'pages_direct.php';
    const fullSlug = isCard ? slugArray.slice(1).join('/') : slug; // Remove 'tent/' prefix for card products
    
    console.log(`Fetching from ${apiEndpoint} with slug: ${fullSlug}`);
    
    // Note: Removed { next: { revalidate: 3600 } } because we're using force-dynamic
    const res = await fetch(`${process.env.CMS_API_BASE}/${apiEndpoint}?slug=${fullSlug}`);
    
    if (!res.ok) {
      if (res.status === 404) return null;
      return null;
    }
    
    const data = await res.json();
    
    // Add a flag to indicate if this is a card product
    if (isCard) {
      data.isCardProduct = true;
    }
    
    return data;
  } catch (error) {
    console.error('Error fetching CMS page:', error);
    return null;
  }
}

export default async function Page({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug || [];
  
  const pageData = await getPageData(slug);

  if (!pageData) {
    notFound();
  }

  // For card products, use the CardProduct template
  if (pageData.isCardProduct) {
    try {
      const { default: CardProductPage } = await import('@/templates/CardProductPage');
      return (
        <CMSLayout>
          <CardProductPage data={pageData} />
        </CMSLayout>
      );
    } catch (error) {
      console.error('Failed to load CardProductPage template:', error);
      notFound();
    }
  }

  // For regular CMS pages, dynamically import the template component
  const templateName = pageData.template.charAt(0).toUpperCase() + pageData.template.slice(1) + 'Page';
  
  let TemplateComponent;
  try {
    const mod = await import(`@/templates/${templateName}`);
    TemplateComponent = mod.default || mod[templateName] || mod[pageData.template];
  } catch (error) {
    console.warn(`Template ${templateName} not found, using EmptyPage`);
    try {
      const fallbackMod = await import('@/templates/EmptyPage');
      TemplateComponent = fallbackMod.default || fallbackMod.EmptyPage;
    } catch (fallbackError) {
      console.error('Failed to load EmptyPage fallback:', fallbackError);
      throw new Error('Could not load any template component. Check that EmptyPage.js exists and is correctly exported.');
    }
  }

  if (!TemplateComponent) {
    throw new Error(`Template component is undefined for template: ${templateName}. Check exports in the template file.`);
  }

  // Wrap CMS pages with CMSLayout
  return (
    <CMSLayout>
      <TemplateComponent data={pageData} />
    </CMSLayout>
  );
}

// Generate metadata for CMS pages
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug ? resolvedParams.slug.join('/') : '';
  
  // Skip for image paths
  if (isImagePath(slug)) {
    return {};
  }
  
  // Skip for existing routes
  if (isExistingRoute(slug)) {
    return {};
  }
  
  try {
    const isCard = slug.startsWith('tent/');
    const apiEndpoint = isCard ? 'card_product.php' : 'pages_direct.php';
    const apiSlug = isCard ? slug.replace('tent/', '') : slug;
    
    const res = await fetch(`${process.env.CMS_API_BASE}/${apiEndpoint}?slug=${apiSlug}`);
    
    if (res.ok) {
      const pageData = await res.json();
      return {
        title: pageData.meta?.title || pageData.slug || pageData.product?.name,
        description: pageData.meta?.description || pageData.product?.description,
      };
    }
  } catch (error) {
    console.error('Error fetching metadata:', error);
  }
  
  return {};
}