import { Footer } from '../../../../components/ui/Footer';
import { Header } from '../../../../components/ui/Header';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import ImageGalleryClient from './ImageGalleryClient';

// ---------- Helper to generate image paths for categories ----------

// Тенты для социальных объектов - 56 images
const socialImages = Array.from({ length: 56 }, (_, i) => 
  `/images/gallery/social/tenty-dlya-socialnyh-obektov-${String(i + 1).padStart(3, '0')}-grand-tent-ru.webp`
);

// Тенты для ресторации - 168 images
const restorationImages = Array.from({ length: 168 }, (_, i) => 
  `/images/gallery/restoration/tenty-dlya-restoracii-${String(i + 1).padStart(3, '0')}-grand-tent-ru.webp`
);

// Тенты для зоны бассейна - 57 images
const poolImages = Array.from({ length: 57 }, (_, i) => 
  `/images/gallery/pool/tenty-dlya-zony-basseyna-${String(i + 1).padStart(3, '0')}-grand-tent-ru.webp`
);

// Тентовые сооружения без внутренних опор - 108 images
const noPillarsImages = Array.from({ length: 108 }, (_, i) => 
  `/images/gallery/no-pillars/tentovye-soorujeniya-bez-vnutrennih-opor-${String(i + 1).padStart(3, '0')}-grand-tent-ru.webp`
);

// Тентовые входные группы - 88 images
const entranceImages = Array.from({ length: 88 }, (_, i) => 
  `/images/gallery/entrance/tentovye-vhodnye-gruppy-${String(i + 1).padStart(3, '0')}-grand-tent-ru.webp`
);

// Тентовые ансамбли - 149 images
const ensembleImages = Array.from({ length: 149 }, (_, i) => 
  `/images/gallery/ensemble/tentovye-ansambli-${String(i + 1).padStart(3, '0')}-grand-tent-ru.webp`
);

// Теневые навесы - 211 images
const shadeImages = Array.from({ length: 211 }, (_, i) => 
  `/images/gallery/shade/tenevye-navesy-${String(i + 1).padStart(3, '0')}-grand-tent-ru.webp`
);

// Натяжные тенты - 42 images
const stretchImages = Array.from({ length: 42 }, (_, i) => 
  `/images/gallery/stretch/natyajnye-tenty-${String(i + 1).padStart(3, '0')}-grand-tent-ru.webp`
);

// Натяжные системы - 182 images
const stretchSystemsImages = Array.from({ length: 182 }, (_, i) => 
  `/images/gallery/stretch-systems/natyajnye-sistemy-${String(i + 1).padStart(3, '0')}-grand-tent-ru.webp`
);

// Навесы трибун стадионов - 102 images
const stadiumImages = Array.from({ length: 102 }, (_, i) => 
  `/images/gallery/stadium/navesy-tribun-stadionov-${String(i + 1).padStart(3, '0')}-grand-tent-ru.webp`
);

// Навесы для рынков - 99 images
const marketImages = Array.from({ length: 99 }, (_, i) => 
  `/images/gallery/market/navesy-dlya-rynkov-${String(i + 1).padStart(3, '0')}-grand-tent-ru.webp`
);

// Навесы для пеших зон - 53 images
const pedestrianImages = Array.from({ length: 53 }, (_, i) => 
  `/images/gallery/pedestrian/navesy-dlya-peshih-zon-${String(i + 1).padStart(3, '0')}-grand-tent-ru.webp`
);

// Навесы для крыш и балконов - 154 images
const roofImages = Array.from({ length: 154 }, (_, i) => 
  `/images/gallery/roof/navesy-dlya-krysh-i-balkonov-${String(i + 1).padStart(3, '0')}-grand-tent-ru.webp`
);

// Навесы для автомобильных парковок - 114 images
const parkingImages = Array.from({ length: 114 }, (_, i) => 
  `/images/gallery/parking/navesy-dlya-avtomobilnyh-parkovok-${String(i + 1).padStart(3, '0')}-grand-tent-ru.webp`
);

// Модульные шатры - 53 images
const modularImages = Array.from({ length: 53 }, (_, i) => 
  `/images/gallery/modular/modulnye-shatry-${String(i + 1).padStart(3, '0')}-grand-tent-ru.webp`
);

// Концертные площадки - 93 images
const concertImages = Array.from({ length: 93 }, (_, i) => 
  `/images/gallery/concert/koncertnye-ploschadki-${String(i + 1).padStart(3, '0')}-grand-tent-ru.webp`
);

// Большие комплексы - 30 images
const largeImages = Array.from({ length: 30 }, (_, i) => 
  `/images/gallery/large/bolshie-kompleksy-${String(i + 1).padStart(3, '0')}-grand-tent-ru.webp`
);

// Complete list of all categories
const allCategories = [
  {
    name: 'Тенты для социальных объектов',
    slug: 'tenty-dlya-sotsialnykh-obektov',
    description: 'Надежные тентовые решения для школ, больниц и муниципальных учреждений.',
    images: socialImages,
  },
  {
    name: 'Тенты для ресторации',
    slug: 'tenty-dlya-restoratsii',
    description: 'Эстетичные навесы для летних веранд, кафе и ресторанов.',
    images: restorationImages,
  },
  {
    name: 'Тенты для зоны бассейна',
    slug: 'tenty-dlya-zony-basseyna',
    description: 'Защита бассейнов от мусора и ультрафиолета, создание комфортной зоны отдыха.',
    images: poolImages,
  },
  {
    name: 'Тентовые сооружения без внутренних опор',
    slug: 'tentovye-sooruzheniya-bez-opor',
    description: 'Свободное пространство внутри – идеально для мероприятий и складов.',
    images: noPillarsImages,
  },
  {
    name: 'Тентовые входные группы',
    slug: 'tentovye-vkhodnye-gruppy',
    description: 'Эффектные козырьки и тамбуры для офисов, отелей и торговых центров.',
    images: entranceImages,
  },
  {
    name: 'Тентовые ансамбли',
    slug: 'tentovye-ansambli',
    description: 'Комплексные решения из нескольких тентов для больших территорий.',
    images: ensembleImages,
  },
  {
    name: 'Теневые навесы',
    slug: 'tenevye-navesy',
    description: 'Легкие конструкции для защиты от солнца на детских площадках и в парках.',
    images: shadeImages,
  },
  {
    name: 'Натяжные тенты',
    slug: 'natyazhnye-tenty',
    description: 'Современные тканевые натяжные системы для любых архитектурных форм.',
    images: stretchImages,
  },
  {
    name: 'Натяжные системы',
    slug: 'natyazhnye-sistemy',
    description: 'Профессиональные решения для стадионов, выставочных павильонов.',
    images: stretchSystemsImages,
  },
  {
    name: 'Навесы трибун стадионов',
    slug: 'navesy-tribun-stadionov',
    description: 'Надежная защита зрителей от осадков и солнца на спортивных аренах.',
    images: stadiumImages,
  },
  {
    name: 'Навесы для рынков',
    slug: 'navesy-dlya-rynkov',
    description: 'Практичные тенты для торговых рядов и ярмарок.',
    images: marketImages,
  },
  {
    name: 'Навесы для пеших зон',
    slug: 'navesy-dlya-pexih-zon',
    description: 'Укрытия для пешеходных улиц, остановок и переходов.',
    images: pedestrianImages,
  },
  {
    name: 'Навесы для крыш и балконов',
    slug: 'navesy-dlya-krysh-i-balkonov',
    description: 'Защита террас, балконов и мансард от непогоды.',
    images: roofImages,
  },
  {
    name: 'Навесы для автомобильных парковок',
    slug: 'navesy-dlya-avtoparkovok',
    description: 'Прочные навесы для парковок легковых и грузовых автомобилей.',
    images: parkingImages,
  },
  {
    name: 'Модульные шатры',
    slug: 'modulnye-shatry',
    description: 'Быстровозводимые конструкции для временных и постоянных объектов.',
    images: modularImages,
  },
  {
    name: 'Концертные площадки',
    slug: 'kontsertnye-ploshchadki',
    description: 'Акустические тенты и сценические навесы для open-air мероприятий.',
    images: concertImages,
  },
  {
    name: 'Большие комплексы',
    slug: 'bolshie-kompleksy',
    description: 'Масштабные тентовые сооружения для спорта, логистики и индустрии.',
    images: largeImages, // <-- 30 images automatically
  },
];

// Generate metadata for each category
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = allCategories.find((c) => c.slug === slug);
  if (!category) {
    return {
      title: 'Категория не найдена',
    };
  }
  return {
    title: `${category.name} | MOBILE TENT`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = allCategories.find((c) => c.slug === slug);
  if (!category) {
    notFound();
  }

  // Prepare images array for the client component
  const galleryImages = category.images.map((src, idx) => ({
    src,
    alt: `${category.name} проект ${idx + 1}`,
  }));

  return (
    <>
      <h1 className="sr-only">{category.name}</h1>
      {/* ===== DESKTOP VERSION ===== */}
      <div className="hidden desktop:block">
        <div className="min-h-screen flex flex-col bg-white">
          <div className="relative top-[1080px] w-full max-w-[1440px] mx-auto z-40">
            <Header />
          </div>

          <div className="relative z-10 mt-[255px]">
            {/* Content */}
            <section className="py-16 bg-gradient-to-b">
              <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">{category.name}</h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">{category.description}</p>
                </div>

                {/* Image grid with lightbox */}
                <ImageGalleryClient images={galleryImages} />

                {category.images.length === 0 && (
                  <p className="text-center text-gray-500">Изображения скоро появятся</p>
                )}

                <div className="text-center mt-12">
                  <a
                    href="/3d-gallery"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-full shadow-lg"
                  >
                    ← Назад ко всем категориям
                  </a>
                </div>
              </div>
            </section>
          </div>

          <div className="flex-1 w-full bg-[#e8eef8] relative">
            <div
              className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-[#e8eef8] via-[#e8eef8]/70 to-transparent"
              style={{ height: 'calc(100vh - 200px)' }}
            />
          </div>

          <div className="relative z-20 bg-white mt-auto">
            <Footer />
          </div>
        </div>
      </div>

      {/* ===== MOBILE VERSION ===== */}
      <div className="block desktop:hidden">
        <div className="min-h-screen flex flex-col bg-white relative">
          <div className="fixed top-0 left-0 right-0 z-40 bg-white shadow-lg border-b border-gray-200">
            <Header />
          </div>
          <div className="h-60"></div>

          <div className="relative z-10 mt-25">
            <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.name}</h2>
                  <p className="text-base text-gray-600">{category.description}</p>
                </div>

                {/* Image grid with lightbox */}
                <ImageGalleryClient images={galleryImages} />

                <div className="text-center mt-12">
                  <a
                    href="/3d-gallery"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-full"
                  >
                    ← Назад
                  </a>
                </div>
              </div>
            </section>
          </div>

          <div className="flex-1 w-full bg-[#e8eef8] relative">
            <div
              className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-[#e8eef8] via-[#e8eef8]/70 to-transparent"
              style={{ height: 'calc(100vh - 150px)' }}
            />
          </div>

          <div className="relative z-20 bg-white mt-auto">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}