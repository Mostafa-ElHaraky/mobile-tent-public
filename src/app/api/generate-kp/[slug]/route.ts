import { NextRequest, NextResponse } from 'next/server';
import puppeteer from 'puppeteer-core';
import * as fs from 'fs/promises';
import * as path from 'path';

function formatPrice(price: number): string {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

async function toDataUri(filePath: string): Promise<string> {
  const buffer = await fs.readFile(filePath);
  const ext = path.extname(filePath).toLowerCase();
  const mime = ext === '.jpg' || ext === '.jpeg' ? 'image/jpeg' : ext === '.webp' ? 'image/webp' : 'image/png';
  return `data:${mime};base64,${buffer.toString('base64')}`;
}

// Fetch an image from a URL and return as data URI (no filesystem access)
async function fetchImageAsDataUri(imageUrl: string): Promise<string> {
  const response = await fetch(imageUrl);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const contentType = response.headers.get('content-type') || 'image/png';
  return `data:${contentType};base64,${buffer.toString('base64')}`;
}

const DEFAULT_PRODUCT: any = {
  page: { id: 14, name: 'Арочный шатер 10х5 - 50 м²', code: 'arochnyy-shater-10h5-50-m2' },
  seo: { description: 'Арочный шатер 10х5 - 50 м² – купить в Москве под заказ в компании Mobile Tent.' },
  priceConfigurations: [
    { name: 'Базовая', isActive: true, currentPrice: 372000, originalPrice: 372000, discount: 0, description: 'Базовая комплектация включает основные элементы конструкции' },
    { name: 'Средняя', isActive: false, currentPrice: 472000, originalPrice: 472000, discount: 0, description: 'Средняя комплектация с дополнительными опциями' },
    { name: 'Максимальная', isActive: false, currentPrice: 572000, originalPrice: 572000, discount: 0, description: 'Максимальная комплектация со всеми доступными опциями' },
  ],
};

async function fetchProductData(slug: string) {
  try {
    const res = await fetch(`page.php?code=${slug}`);
    if (!res.ok) return null;
    const data = await res.json();
    return data.success ? data : null;
  } catch (e) { return null; }
}

function parseSpecsFromPageName(name: string) {
  const sizeMatch = name.match(/(\d+(?:\.\d+)?)\s*[xх×]\s*(\d+(?:\.\d+)?)/i);
  const areaMatch = name.match(/(\d+(?:\.\d+)?)\s*м\s*[²2]/i);
  const w = sizeMatch ? sizeMatch[1] : null;
  const l = sizeMatch ? sizeMatch[2] : null;
  const a = areaMatch ? parseFloat(areaMatch[1]) : (w && l ? parseFloat(w) * parseFloat(l) : 0);
  const areaStr = a > 0 ? `${a} м²` : '—';
  const cap = a > 0 ? Math.round(a / 2.5) : '—';
  const specs: string[] = [];
  if (w && l) specs.push(`Размер: ${w}x${l} м`);
  if (a > 0) specs.push(`Площадь: ${areaStr}`);
  specs.push('Форма: Прямоугольник');
  if (cap !== '—') specs.push(`Вместимость: ${cap} человек`);
  if (w) { specs.push(`Высота входной арки: до ${w} м`); specs.push(`Высота в коньке: до ${w} м`); }
  return { area: areaStr, specs };
}

function extractProductInfo(product: any) {
  const pageName = product.page?.name || DEFAULT_PRODUCT.page.name;
  const desc = product.seo?.description || DEFAULT_PRODUCT.seo.description;
  const pid = product.page?.id?.toString() || DEFAULT_PRODUCT.page.id.toString();
  const configs = product.priceConfigurations?.length ? product.priceConfigurations : DEFAULT_PRODUCT.priceConfigurations;
  const baseCfg = configs.find((c: any) => c.name === 'Базовая') || configs[0];
  const mediumCfg = configs.find((c: any) => c.name === 'Средняя');
  const maxCfg = configs.find((c: any) => c.name === 'Максимальная');
  const parsed = parseSpecsFromPageName(pageName);
  return { pageName, desc, pid, chars: parsed.specs.join('<br>'), area: parsed.area, baseCfg, mediumCfg, maxCfg };
}

export async function GET(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const origin = 'https://mobile-tent.ru';
  const customImage = req.nextUrl.searchParams.get('image');

  try {
    let product = await fetchProductData(slug);
    if (!product) product = DEFAULT_PRODUCT;
    const info = extractProductInfo(product);

    // Fetch variant image via HTTP – NO filesystem access for dynamic paths
    let variantDataUri: string;
    if (customImage) {
      const imageUrl = customImage.startsWith('http') ? customImage : `${origin}${customImage}`;
      try { variantDataUri = await fetchImageAsDataUri(imageUrl); }
      catch { variantDataUri = await fetchImageAsDataUri(`${origin}/KP/images/img_1.png`); }
    } else {
      variantDataUri = await fetchImageAsDataUri(`${origin}/KP/images/img_1.png`);
    }

    const replacements: Record<string, string> = {
      '{productName}': info.pageName, '{area}': info.area, '{description}': info.desc,
      '{characteristicsTable}': info.chars,
      '{baseDescription}': info.baseCfg?.description || '', '{basePrice}': info.baseCfg ? `от ${formatPrice(info.baseCfg.currentPrice)} ₽` : '',
      '{mediumDescription}': info.mediumCfg?.description || '', '{mediumPrice}': info.mediumCfg ? `от ${formatPrice(info.mediumCfg.currentPrice)} ₽` : '',
      '{maxDescription}': info.maxCfg?.description || '', '{maxPrice}': info.maxCfg ? `от ${formatPrice(info.maxCfg.currentPrice)} ₽` : '',
      '{productCode}': info.pid,
      '{baseImage}': variantDataUri, '{mediumImage}': variantDataUri, '{maxImage}': variantDataUri,
    };

    let html = await fs.readFile(path.join(process.cwd(), 'public', 'KP', 'clean_presentation.html'), 'utf-8');
    for (const [k, v] of Object.entries(replacements)) {
      html = html.replace(new RegExp(k.replace(/[{}]/g, '\\$&'), 'g'), v);
    }

    // Embed ALL remaining images/ references as base64 (fixed known paths – no warning)
    const imagesDir = path.join(process.cwd(), 'public', 'KP', 'images');
    const imgRegex = /src=["']images\/([^"']+)["']/g;
    let m;
    while ((m = imgRegex.exec(html)) !== null) {
      try {
        const dataUri = await toDataUri(path.join(imagesDir, m[1]));
        html = html.replace(m[0], `src="${dataUri}"`);
      } catch {}
    }

    const browser = await puppeteer.launch({
      headless: true,
      executablePath: '/usr/bin/google-chrome-stable',
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    });
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'load', timeout: 60000 });
    await new Promise(r => setTimeout(r, 2000));
    const pdfBuffer = await page.pdf({ width: '340mm', height: '250mm', printBackground: true, margin: { top: '10mm', bottom: '10mm', left: '10mm', right: '10mm' } });
    await browser.close();

    const filename = `КП_${slug}.pdf`;
    return new NextResponse(Buffer.from(pdfBuffer), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${encodeURIComponent(filename)}"; filename*=UTF-8''${encodeURIComponent(filename)}`,
      },
    });
  } catch (error) {
    console.error('PDF generation error:', error);
    return new NextResponse('Ошибка при генерации КП', { status: 500 });
  }
}
