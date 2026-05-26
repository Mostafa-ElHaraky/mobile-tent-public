'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from "../../components/ui/card";
import Image from 'next/image';

interface FeatureCardData {
  id: number;
  titleHtml: string;
  description: string;
  imageSrc: string;
  position: string;
  iconClass: string;
}

interface GuaranteeData {
  titleHtml: string;
  items: Array<{ years: string; description: string }>;
  bgColor: string;
}

// Desktop Components
const FeatureCardDesktop = ({ card }: { card: FeatureCardData }) => (
  <Card
    className={`absolute w-[660px] h-40 ${card.position} bg-white rounded-[30px] shadow-[0px_24px_38px_#161d2414] backdrop-blur-[79px] overflow-hidden border-0`}
  >
    <CardContent className="p-0 h-full">
      <div className="relative w-full h-full pl-28">
        <div className={`absolute ${card.iconClass} overflow-visible z-10`}>
          <Image 
            className="w-full h-full object-contain" 
            alt="Feature icon" 
            src={card.imageSrc} 
            width={500} 
            height={500} 
            loading="lazy" 
          />
        </div>
        <div className="inline-flex flex-col items-start gap-3 pt-8 h-full">
          <div 
            className="relative w-fit font-bold text-transparent text-xl leading-6 [font-family:'Raleway',Helvetica] tracking-[0]"
            dangerouslySetInnerHTML={{ __html: card.titleHtml }}
          />
          <div className="relative w-fit font-normal text-[#394355] text-lg leading-6 [font-family:'Raleway',Helvetica] tracking-[0] whitespace-pre-line">
            {card.description}
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

const GuaranteeCardDesktop = ({ guarantee }: { guarantee: GuaranteeData }) => (
  <Card 
    className="absolute w-[660px] h-[164px] top-[425px] left-[35px] rounded-[20px] overflow-hidden border-0 border-white shadow-[0px_24px_38px_#161d2414] backdrop-blur-[79px]"
    style={{ backgroundColor: guarantee.bgColor }}
  >
    <CardContent className="p-0">
      <div className="inline-flex flex-col items-start gap-4 relative top-[29px] left-[25px]">
        <div 
          className="relative w-fit mt-[-1.00px] font-bold text-transparent text-xl leading-[normal] whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]"
          dangerouslySetInnerHTML={{ __html: guarantee.titleHtml }}
        />
        <div className="inline-flex items-start gap-[51px] relative flex-[0_0_auto]">
          {guarantee.items.map((item, index) => (
            <div key={index} className="inline-flex flex-col items-start gap-1.5 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Raleway',Helvetica] font-bold text-[#232c42] text-3xl tracking-[0] leading-[normal] whitespace-nowrap">
                {item.years}
              </div>
              <div className="relative w-fit font-normal text-[#394355] text-sm leading-[normal] whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </CardContent>
  </Card>
);

// Mobile Components
const FeatureCardMobile = ({ card }: { card: FeatureCardData }) => (
  <Card className="w-full h-auto bg-white rounded-[30px] shadow-[0px_24px_38px_#161d2414] backdrop-blur-[79px] overflow-hidden border-0">
    <CardContent className="p-4 h-full">
      <div className="flex items-start gap-4">
        <div className="relative w-24 h-24 flex-shrink-0">
          <div className="absolute inset-0 overflow-visible z-10">
            <Image 
              className="w-full h-full object-contain" 
              alt="Feature icon" 
              src={card.imageSrc} 
              width={100} 
              height={100} 
              loading="lazy" 
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div 
            className="font-bold text-transparent text-xl leading-6 [font-family:'Raleway',Helvetica] tracking-[0]"
            dangerouslySetInnerHTML={{ __html: card.titleHtml }}
          />
          <div className="font-normal text-[#394355] text-base leading-5 [font-family:'Raleway',Helvetica] tracking-[0] whitespace-pre-line">
            {card.description}
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

const GuaranteeCardMobile = ({ guarantee }: { guarantee: GuaranteeData }) => (
  <Card 
    className="w-full h-auto rounded-[20px] overflow-hidden border-0 border-white shadow-[0px_24px_38px_#161d2414] backdrop-blur-[79px] mb-8"
    style={{ backgroundColor: guarantee.bgColor }}
  >
    <CardContent className="p-4">
      <div className="flex flex-col items-start gap-4">
        <div 
          className="font-bold text-transparent text-xl leading-[normal] whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]"
          dangerouslySetInnerHTML={{ __html: guarantee.titleHtml }}
        />
        <div className="grid grid-cols-2 gap-4 w-full">
          {guarantee.items.map((item, index) => (
            <div key={index} className="flex flex-col items-start gap-1.5">
              <div className="[font-family:'Raleway',Helvetica] font-bold text-[#232c42] text-2xl tracking-[0] leading-[normal] whitespace-nowrap">
                {item.years}
              </div>
              <div className="font-normal text-[#394355] text-sm leading-[normal] whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </CardContent>
  </Card>
);

// Main Component - Unified Feature Cards + Guarantee Card
export const FeatureCards = () => {
  const [featureCards, setFeatureCards] = useState<FeatureCardData[]>([]);
  const [guarantee, setGuarantee] = useState<GuaranteeData | null>(null);
  const [sectionVisible, setSectionVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFeatureCards = async () => {
      try {
        const res = await fetch('/api/feature_cards');
        const html = await res.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        
        const section = doc.querySelector('.feature-section');
        const isVisible = section?.getAttribute('data-visible') !== 'false';
        setSectionVisible(isVisible);
        
        if (!isVisible) {
          setIsLoading(false);
          return;
        }
        
        // Parse Feature Cards
        const slides = doc.querySelectorAll('.feature-slide');
        const cards: FeatureCardData[] = [];
        slides.forEach((slide, idx) => {
          const card = slide.querySelector('.feature-card');
          if (!card) return;
          
          const titleHtml = card.querySelector('.title')?.innerHTML || '';
          const description = card.querySelector('.description')?.textContent || '';
          const imageSrc = card.querySelector('.image')?.textContent || '';
          const iconClass = card.querySelector('.icon-class')?.textContent || '';
          const position = card.querySelector('.position')?.textContent || '';
          
          cards.push({
            id: idx,
            titleHtml,
            description,
            imageSrc,
            position,
            iconClass,
          });
        });
        setFeatureCards(cards);
        
        // Parse Guarantee Card
        const guaranteeCard = doc.querySelector('.guarantee-card');
        if (guaranteeCard) {
          const titleHtml = guaranteeCard.querySelector('.title')?.innerHTML || '';
          const bgColor = guaranteeCard.getAttribute('data-bg-color') || '#fffffff2';
          const items: Array<{ years: string; description: string }> = [];
          const itemElements = guaranteeCard.querySelectorAll('.item');
          itemElements.forEach(item => {
            const years = item.querySelector('.years')?.textContent || '';
            const description = item.querySelector('.description')?.textContent || '';
            items.push({ years, description });
          });
          setGuarantee({ titleHtml, items, bgColor });
        }
      } catch (error) {
        console.error('Error loading feature cards:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchFeatureCards();
  }, []);

  if (isLoading) return <div className="text-center py-8">Загрузка...</div>;
  if (!sectionVisible) return null;
  if (featureCards.length === 0 && !guarantee) return null;

  return (
    <>
      {/* Desktop Version */}
      <div className="hidden lg:block relative">
        {featureCards.map((card) => (
          <FeatureCardDesktop key={card.id} card={card} />
        ))}
        {guarantee && <GuaranteeCardDesktop guarantee={guarantee} />}
      </div>

      {/* Mobile Version */}
      <div className="lg:hidden">
        <div className="flex flex-col gap-6 mb-8">
          {featureCards.map((card) => (
            <FeatureCardMobile key={card.id} card={card} />
          ))}
        </div>
        {guarantee && <GuaranteeCardMobile guarantee={guarantee} />}
      </div>
    </>
  );
};