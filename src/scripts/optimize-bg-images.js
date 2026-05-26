// src/scripts/optimize-bg-images.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetDir = path.join(__dirname, '..', 'app');

function walkDir(dir, callback) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkDir(filePath, callback);
    } else if (file === 'Shatry1.tsx') {
      callback(filePath);
    }
  }
}

console.log(`Starting background image optimizations recursively under ${targetDir}...`);
let processedCount = 0;
let updatedCount = 0;

walkDir(targetDir, (filePath) => {
  processedCount++;
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // 1. Desktop background replacement regex and substitution
  const desktopRegex = /<div\s+className="relative h-full bg-\[url\(['"]?\/fc3740fa54440e5eaefe94690ddc2643-3\.webp['"]?\)\] bg-cover bg-center">/g;
  const desktopReplacement = `<div className="relative h-full">
              <Image
                src="/fc3740fa54440e5eaefe94690ddc2643-3.webp"
                alt="Background"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
                quality={85}
              />`;

  // 2. Mobile background replacement regex and substitution
  const mobileRegex = /<div\s+className="relative h-full w-full bg-\[url\(['"]?\/fc3740fa54440e5eaefe94690ddc2643-3\.webp['"]?\)\] bg-cover bg-center"\s+style=\{\{\s*maskImage:\s*['"]linear-gradient\(to bottom, black 80%, transparent 100%\)['"],\s*WebkitMaskImage:\s*['"]linear-gradient\(to bottom, black 80%, transparent 100%\)['"]\s*\}\}\s*\/>/g;
  const mobileReplacement = `<div className="relative h-full w-full">
                  <Image
                    src="/fc3740fa54440e5eaefe94690ddc2643-3.webp"
                    alt="Background"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                    style={{
                      maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                      WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                    }}
                  />
                </div>`;

  if (desktopRegex.test(content)) {
    content = content.replace(desktopRegex, desktopReplacement);
  }

  if (mobileRegex.test(content)) {
    content = content.replace(mobileRegex, mobileReplacement);
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    updatedCount++;
    console.log(`[UPDATED] ${path.relative(targetDir, filePath)}`);
  }
});

console.log(`\nCompleted background image optimizations!`);
console.log(`Total Shatry1.tsx components processed: ${processedCount}`);
console.log(`Total Shatry1.tsx components optimized: ${updatedCount}`);
