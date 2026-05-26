import { Footer } from '../../components/ui/Footer';
import { Header } from '../../components/ui/Header';
import Gallery3D from './Gallery3D/Gallery3D';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Галерея 3D решений | Проекты шатров и тентовых конструкций MOBILE TENT',
  description: 'Просмотрите 3D галерею шатров, каркасных ангаров и арочных тентовых конструкций от компании MOBILE TENT. Индивидуальные проекты для Москвы, СПб и РФ. Визуализация под ключ.',
  keywords: [
    '3D галерея шатров',
    '3D решения тентовых конструкций',
    'проекты шатров',
    'каркасные ангары 3D',
    'арочные тенты визуализация',
    'тентовые конструкции 3D',
    'MOBILE TENT',
    'шатры на заказ',
    '3D модели ангаров',
  ],
  robots: 'index, follow',
  openGraph: {
    title: 'Галерея 3D решений MOBILE TENT',
    description: 'Реалистичные 3D‑проекты шатров, ангаров и тентовых конструкций. Индивидуальный подход, производство в Москве и СПб.',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'MOBILE TENT',
    images: [
      {
        url: '/images/gallery/large/bolshie-kompleksy-012-grand-tent-ru.webp', // замените на реальный путь к изображению
        width: 1200,
        height: 630,
        alt: '3D галерея шатров MOBILE TENT',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Галерея 3D решений | MOBILE TENT',
    description: '3D‑проекты шатров, ангаров и тентов – визуализация под ключ.',
    images: ['/images/gallery/large/bolshie-kompleksy-012-grand-tent-ru.webp'], // замените при необходимости
  },
  alternates: {
    canonical: 'https://mobile-tent.ru/3d-gallery',
  },
  other: {
    'geo.region': 'RU-MOW;RU-LEN',
    'geo.placename': 'Moscow, Saint Petersburg',
    'geo.position': '55.7558;37.6173',
    'ICBM': '55.7558, 37.6173',
    'og:phone_number': '+7 (495) 123-45-67',
    'og:address': 'Москва, ул. Примерная, д. 1',
    'contact:phone_number': '+7 (495) 123-45-67',
  },
};

export default function Page() {
  return (
    <>
        <h1 className="sr-only">
            Галерея 3D решений | MOBILE TENT
        </h1>
      {/* ===== DESKTOP VERSION (>= lg) ===== */}
      <div className="hidden desktop:block">
        <div className="min-h-screen flex flex-col bg-white">
          {/* Header positioned 1080px from top but scrolls normally */}
          <div className="relative top-[1080px] w-full max-w-[1440px] mx-auto z-40">
            <Header />
          </div>

          {/* Hangar Calculator - Using margin instead of top */}
          <div className="relative z-10 mt-[255px]">
            <Gallery3D />
          </div>

          <div className="flex-1 w-full bg-[#e8eef8] relative">
            {/* Background Gradient - LIMITED to content area only */}
            <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-[#e8eef8] via-[#e8eef8]/70 to-transparent" 
                 style={{ height: 'calc(100vh - 200px)' }} />
          </div>

          {/* Footer - Will be pushed down by content */}
          <div className="relative z-20 bg-white mt-auto">
            <Footer />
          </div>
        </div>
      </div>

      {/* ===== MOBILE VERSION (< lg) ===== */}
      <div className="block desktop:hidden">
        <div className="min-h-screen flex flex-col bg-white relative">
          {/* Mobile Header - Fixed at top */}
          <div className="fixed top-0 left-0 right-0 z-40 bg-white shadow-lg border-b border-gray-200">
            <Header />
          </div>
          {/* Spacer for fixed mobile header */}
          <div className="h-60"></div>
          
          {/* Hangar Calculator */}
          <div className="relative z-10 mt-25">
            <Gallery3D />
          </div>

          {/* Main Content Area */}
          <div className="flex-1 w-full bg-[#e8eef8] relative">
            {/* Background Gradient - LIMITED to content area only */}
            <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-[#e8eef8] via-[#e8eef8]/70 to-transparent" 
                 style={{ height: 'calc(100vh - 150px)' }} />
          </div>
          
          {/* Footer - Increased z-index to be above gradient */}
          <div className="relative z-20 bg-white mt-auto">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}