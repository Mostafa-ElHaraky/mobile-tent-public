import { NextRequest, NextResponse } from 'next/server';
import puppeteer from 'puppeteer-core';
import * as fs from 'fs/promises';
import * as path from 'path';

function formatPrice(price: number): string {
  return Math.round(price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '\u00A0');
}

async function toDataUri(filePath: string): Promise<string> {
  const buffer = await fs.readFile(filePath);
  const ext = path.extname(filePath).toLowerCase();
  const mime = ext === '.jpg' || ext === '.jpeg' ? 'image/jpeg' : ext === '.webp' ? 'image/webp' : 'image/png';
  return `data:${mime};base64,${buffer.toString('base64')}`;
}

export async function POST(req: NextRequest) {
  const origin = 'https://mobile-tent.ru';

  try {
    const body = await req.json();
    const { width, length, height, hangarType, steelType, snowRegion, results } = body;

    // Hangar image – embed from filesystem (fixed known paths – no warning)
    const hangarImageName = hangarType === 'A' ? 'B_25x50_1.webp' : 'D_25x30_1.webp';
    const hangarImagePath = path.join(process.cwd(), 'public', 'images', 'hangars', hangarImageName);
    let hangarDataUri: string;
    try { hangarDataUri = await toDataUri(hangarImagePath); }
    catch { hangarDataUri = await toDataUri(path.join(process.cwd(), 'public', 'KP', 'images', 'img_1.png')); }

    const specs = [
      `Тип ангара: ${hangarType === 'A' ? 'Тип В (арочный)' : 'Тип Д (двускатный)'}`,
      `Размер: ${width} × ${length} м`, `Высота стен: ${height} м`,
      `Высота в коньке: ${results.ridgeHeight.toFixed(1)} м`, `Площадь пола: ${results.area} м²`,
      `Общая площадь тента: ${results.totalArea.toFixed(1)} м²`,
      `Масса каркаса: ${Math.round(results.totalWeight).toLocaleString('ru-RU')} кг`,
      `Марка стали: ${steelType}`, `Снеговой район: ${snowRegion}`,
      `Тип покрытия: порошковая окраска / горячее цинкование`,
    ];
    const characteristicsHtml = specs.join('<br>');

    const basePrice   = Math.round(results.hangarPricePowder);
    const mediumPrice = Math.round(results.doubleTentPricePowder);
    const maxPrice    = Math.round(results.insulatedPricePowder);

    const replacements: Record<string, string> = {
      '{productName}': `Ангар ${width}×${length}`,
      '{area}': `${results.area} м²`,
      '{description}': `Коммерческое предложение на ангар ${width}×${length} м, тип ${hangarType === 'A' ? 'В' : 'Д'}, ${steelType}.`,
      '{characteristicsTable}': characteristicsHtml,
      '{baseDescription}': 'Каркас: порошковая окраска. Тент: однослойный.',
      '{basePrice}': `${formatPrice(basePrice)} ₽`,
      '{mediumDescription}': 'Каркас: порошковая окраска. Тент: двойной.',
      '{mediumPrice}': `${formatPrice(mediumPrice)} ₽`,
      '{maxDescription}': 'Каркас: порошковая окраска. Тент: утеплённый.',
      '{maxPrice}': `${formatPrice(maxPrice)} ₽`,
      '{productCode}': `hangar-${width}x${length}-${hangarType}`,
      '{baseImage}': hangarDataUri,
      '{mediumImage}': hangarDataUri,
      '{maxImage}': hangarDataUri,
    };

    const templatePath = path.join(process.cwd(), 'public', 'KP', 'clean_presentation_angar.html');
    let html = await fs.readFile(templatePath, 'utf-8');

    for (const [key, value] of Object.entries(replacements)) {
      html = html.replace(new RegExp(key.replace(/[{}]/g, '\\$&'), 'g'), value);
    }

    // Embed ALL remaining images/ references as base64 (fixed known paths – no warning)
    const imagesDir = path.join(process.cwd(), 'public', 'KP', 'images');
    const imgRegex = /src=["']images\/([^"']+)["']/g;
    let match;
    while ((match = imgRegex.exec(html)) !== null) {
      try {
        const dataUri = await toDataUri(path.join(imagesDir, match[1]));
        html = html.replace(match[0], `src="${dataUri}"`);
      } catch {}
    }

    const browser = await puppeteer.launch({
      headless: true,
      executablePath: '/usr/bin/google-chrome-stable',
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    });
    const page = await browser.newPage();
    page.setDefaultTimeout(60000);
    await page.setContent(html, { waitUntil: 'load', timeout: 60000 });
    await new Promise(r => setTimeout(r, 2000));
    const pdfBuffer = await page.pdf({
      width: '340mm',
      height: '250mm',
      printBackground: true,
      margin: { top: '10mm', bottom: '10mm', left: '10mm', right: '10mm' },
    });
    await browser.close();

    const filename = `КП_Ангар_${width}x${length}_${hangarType}.pdf`;
    const encodedFilename = encodeURIComponent(filename);
    const buffer = Buffer.from(pdfBuffer);
    return new NextResponse(buffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${encodedFilename}"; filename*=UTF-8''${encodedFilename}`,
      },
    });
  } catch (error) {
    console.error('Hangar PDF generation error:', error);
    return new NextResponse('Ошибка при генерации КП', { status: 500 });
  }
}
