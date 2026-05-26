'use client';

import { useState, useEffect } from 'react';
import { Button } from "./button";
import { Card, CardContent } from "./card";
import Image from 'next/image';

interface PromotionCard {
  id: number;
  title: string;
  discount: string;
  description: string;
  validUntil: string;
  bgColor: string;
  textColor: string;
  titleColor: string;
  backgroundImage: string;
  overlayImage?: string;
  badgeIcon?: string;
  hasSecondImage?: boolean;
  decorationImages?: Array<{ src: string; className: string }>;
}

interface PromotionProps {
  isMobile?: boolean;
}

export const Promotion = ({ isMobile = false }: PromotionProps) => {
  const [promoPage, setPromoPage] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cards, setCards] = useState<PromotionCard[]>([]);
  const [sectionTitle, setSectionTitle] = useState('Акции');
  const [sectionVisible, setSectionVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPromotions = async () => {
      try {
        const res = await fetch(`/api/promotion?mobile=${isMobile}`);
        const html = await res.text();
        
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        
        const section = doc.querySelector('.promotion-section');
        const isVisible = section?.getAttribute('data-visible') !== 'false';
        setSectionVisible(isVisible);
        
        if (!isVisible) {
          setIsLoading(false);
          return;
        }
        
        const title = doc.querySelector('.section-title')?.textContent || 'Акции';
        setSectionTitle(title);
        
        const slides = doc.querySelectorAll('.promotion-slide');
        const promotionCards: PromotionCard[] = [];
        
        slides.forEach((slide, index) => {
          const card = slide.querySelector('.promotion-card');
          if (!card) return;
          
          const title = card.querySelector('.title')?.textContent || '';
          const discount = card.querySelector('.discount')?.textContent || '';
          const description = card.querySelector('.description')?.textContent || '';
          const validUntil = card.querySelector('.valid-until')?.textContent || '';
          const bgColor = card.getAttribute('data-bg-color') || '#44546F';
          const textColor = card.getAttribute('data-text-color') || 'white';
          const titleColor = card.getAttribute('data-title-color') || 'white';
          const backgroundImage = card.querySelector('.background-image')?.textContent || '';
          const overlayImage = card.querySelector('.overlay-image')?.textContent || '';
          const badgeIcon = card.querySelector('.badge-icon')?.textContent || '/groupp.webp';
          const hasSecondImage = card.getAttribute('data-has-second-image') === 'true';
          
          const decorationImages: Array<{ src: string; className: string }> = [];
          const decoImages = card.querySelectorAll('.decoration-images img');
          decoImages.forEach(img => {
            const src = img.getAttribute('src') || '';
            const className = img.getAttribute('class') || '';
            if (src) decorationImages.push({ src, className });
          });
          
          promotionCards.push({
            id: index,
            title,
            discount,
            description,
            validUntil,
            bgColor,
            textColor,
            titleColor,
            backgroundImage,
            overlayImage,
            badgeIcon,
            hasSecondImage,
            decorationImages,
          });
        });
        
        setCards(promotionCards);
      } catch (error) {
        console.error('Error loading promotions:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchPromotions();
  }, [isMobile]);

  const promoNext = () => {
    const totalPages = Math.ceil(cards.length / 2);
    if (totalPages > 0) setPromoPage((p) => (p + 1) % totalPages);
  };
  
  const promoPrev = () => {
    const totalPages = Math.ceil(cards.length / 2);
    if (totalPages > 0) setPromoPage((p) => (p - 1 + totalPages) % totalPages);
  };

  const nextMobile = () => {
    if (cards.length > 0) setCurrentSlide((i) => (i + 1) % cards.length);
  };
  
  const prevMobile = () => {
    if (cards.length > 0) setCurrentSlide((i) => (i - 1 + cards.length) % cards.length);
  };

  if (isLoading) return <div className="text-center py-8">Загрузка акций...</div>;
  if (!sectionVisible) return null;
  if (cards.length === 0) return (
    <div className="text-center py-8">
      <h2 className="font-semibold text-[#232c42] text-3xl mb-4">{sectionTitle}</h2>
      <p className="text-gray-500">Нет активных акций</p>
    </div>
  );

  if (isMobile) {
    return (
      <div className="flex flex-col items-center gap-6 mb-8">
        <h2 className="[font-family:'Raleway',Helvetica] font-semibold text-[#232c42] text-3xl tracking-[0] leading-[normal] whitespace-nowrap">
          {sectionTitle}
        </h2>
        <div className="relative w-full overflow-hidden">
          <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {cards.map((card) => (
              <div key={card.id} className="w-full shrink-0 px-0">
                <Card className="relative w-full min-h-[300px] rounded-[30px] shadow-[0px_24px_38px_#161d2414] backdrop-blur-[79px] border-0 overflow-hidden">
                  <div className="absolute inset-0" style={{ backgroundColor: card.bgColor }}>
                    {card.backgroundImage && <Image src={card.backgroundImage} alt="Background" fill sizes="100vw" className="opacity-70 object-cover" loading="lazy" />}
                    {card.overlayImage && <Image src={card.overlayImage} alt="Overlay" fill sizes="(min-width: 1024px) 50vw, 100vw" className="opacity-50 object-contain object-right" loading="lazy" />}
                  </div>
                  <div className="relative z-10 p-6 h-full flex flex-col">
                    <h3 className="font-bold text-3xl mb-4" style={{ color: card.titleColor }}>{card.title}</h3>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="inline-flex">
                        <div className="font-bold text-white text-3xl px-4 py-2 rounded-lg" style={{background: 'linear-gradient(180deg, rgba(115,168,255,1) 0%, rgba(111,167,255,1) 37%, rgba(60,108,236,1) 100%)'}}>
                          {card.discount}
                        </div>
                      </div>
                      <div className="font-medium text-lg" style={{ color: card.textColor }}>{card.description}</div>
                    </div>
                    <div className="mt-auto flex items-center gap-2 bg-black/30 backdrop-blur-md rounded-full relative top-[65px] right-[20px] px-4 py-2 w-fit translate-y-4">
                      <Image src={card.badgeIcon || '/groupp.webp'} width={16} height={16} alt="Calendar icon" />
                      <span className="font-medium text-white">{card.validUntil}</span>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-6 mt-10">
            <Button onClick={prevMobile} className="w-14 h-14 rounded-full p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"><Image src="/GROP-10.webp" width={14} height={24} alt="Previous" /></Button>
            <Button onClick={nextMobile} className="w-14 h-14 rounded-full p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"><Image src="/GROP-11.webp" width={14} height={24} alt="Next" /></Button>
          </div>
        </div>
      </div>
    );
  }

  // Desktop version - with buttons positioned below cards
  return (
    <div className="relative w-full top-[600px] left-[35px]">

      <div className="inline-flex flex-col items-center gap-9">
        <h2 className="[font-family:'Raleway',Helvetica] font-semibold text-[#232c42] text-4xl tracking-[0] leading-[normal] whitespace-nowrap">
          {sectionTitle}
        </h2>
        <div className="relative w-[1344px] overflow-hidden">
          <div
            className="inline-flex items-start gap-6 relative transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${promoPage * 1344}px)` }}
          >
            {cards.map((card) => (
              <Card key={card.id} className={`relative w-[660px] h-[379px] rounded-[30px] shadow-[0px_24px_38px_#161d2414] backdrop-blur-[79px] border-0 ${card.hasSecondImage ? 'cursor-pointer hover:shadow-lg transition-shadow' : ''}`} style={{ backgroundColor: card.bgColor }}>
                <CardContent className="p-0">
                  <div className="relative h-[379px] rounded-[20px]">
                    <div className="absolute w-[660px] h-[379px] top-0 left-0 rounded-[20px] overflow-hidden">
                      <div className="relative h-[379px]">
                        {card.decorationImages?.map((img, i) => <Image key={i} src={img.src} alt="Decoration" width={200} height={200} className={img.className} loading="lazy" />)}
                        {card.backgroundImage && <Image src={card.backgroundImage} alt="Background" fill className="object-cover" loading="lazy" />}
                        <div className="inline-flex items-center justify-center gap-2.5 px-4 py-1.5 absolute top-[319px] left-[30px] bg-[#00000030] rounded-[50px] overflow-hidden shadow-[0px_24px_38px_#161d2414] backdrop-blur-[79px] z-10">
                          <div className="relative w-6 h-6 z-10"><Image src={card.badgeIcon || '/groupp.webp'} width={16} height={16} className="absolute w-4 h-4 top-1 left-1 z-10" alt="Group" /></div>
                          <div className="relative w-fit mt-[-0.50px] [font-family:'Raleway',Helvetica] font-medium text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap z-10">{card.validUntil}</div>
                        </div>
                        {card.overlayImage && <Image src={card.overlayImage} alt="Element" fill className="object-contain object-right opacity-50" loading="lazy" />}
                      </div>
                    </div>
                    <div className="absolute top-[45px] left-[30px] [font-family:'Raleway',Helvetica] font-bold text-4xl tracking-[0] leading-[normal] whitespace-nowrap" style={{ color: card.titleColor }}>{card.title}</div>
                    <div className="inline-flex items-center gap-4 absolute top-[121px] left-[30px]">
                      <div className="inline-flex flex-col items-start gap-2.5 relative flex-[0_0_auto] rounded-lg overflow-hidden">
                        <div className="[font-family:'Raleway',Helvetica] font-bold text-white text-[20px] tracking-[0] leading-[normal] whitespace-nowrap px-4 py-3 rounded-lg" style={{background: 'linear-gradient(180deg, rgba(115,168,255,1) 0%, rgba(111,167,255,1) 37%, rgba(60,108,236,1) 100%)'}}>{card.discount}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
                    {/* Navigation buttons - positioned below the cards */}
        <div className="flex w-full absolute bottom-[150px] gap-[1300px] right-[30px]">
          <Button
            onClick={promoPrev}
            className="w-14 h-14 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
          >
            <Image src="/GROP-10.webp" width={14} height={24} alt="Previous" />
          </Button>
          <Button
            onClick={promoNext}
            className="w-14 h-14 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
          >
            <Image src="/GROP-11.webp" width={14} height={24} alt="Next" />
          </Button>
        </div>
    </div>
  );
};