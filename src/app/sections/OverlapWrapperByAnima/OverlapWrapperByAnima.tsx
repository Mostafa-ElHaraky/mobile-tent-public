'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from "../../../components/ui/card";
import Image from 'next/image';

interface ExpertiseCard {
  id: number;
  title: string;
  description: string;
  position: string;
  width: string;
  height: string;
  bgColor: string;
  isWhiteBg: boolean;
  iconSrc?: string;
  iconBg?: string;
}

interface ImageData {
  src: string;
  alt: string;
  position: string;
  width: number;
  height: number;
  customLeft?: string;
}

export const OverlapWrapperByAnima = () => {
  const [cards, setCards] = useState<ExpertiseCard[]>([]);
  const [imageData, setImageData] = useState<ImageData | null>(null);
  const [sectionVisible, setSectionVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/expertise_cards');
        const html = await res.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        
        const section = doc.querySelector('.expertise-section');
        const isVisible = section?.getAttribute('data-visible') !== 'false';
        setSectionVisible(isVisible);
        
        if (!isVisible) {
          setIsLoading(false);
          return;
        }
        
        // Parse central image
        const centralImage = doc.querySelector('.central-image');
        if (centralImage) {
          const img = centralImage.querySelector('img');
          const imgSrc = img?.getAttribute('src') || '/tent-with-curtains-i08-1.webp';
          const imgAlt = img?.getAttribute('alt') || 'Tent with curtains';
          const imgPositionElem = centralImage.querySelector('.image-position');
          const imgSizeElem = centralImage.querySelector('.image-size');
          
          // Get custom left offset from image class
          let customLeft = null;
          const imgClass = img?.getAttribute('class') || '';
          const leftMatch = imgClass.match(/left-\[(-?\d+)px\]/);
          if (leftMatch) {
            customLeft = leftMatch[1];
          }
          
          let imgPosition = 'top:74px left:calc(50% - 371px)';
          let imgWidth = 712;
          let imgHeight = 553;
          
          if (imgSizeElem) {
            const sizeText = imgSizeElem.textContent || '';
            const widthMatch = sizeText.match(/width:(\d+)/);
            const heightMatch = sizeText.match(/height:(\d+)/);
            if (widthMatch) imgWidth = parseInt(widthMatch[1], 10);
            if (heightMatch) imgHeight = parseInt(heightMatch[1], 10);
          }
          if (imgPositionElem) {
            imgPosition = imgPositionElem.textContent || imgPosition;
          }
          
          setImageData({
            src: imgSrc,
            alt: imgAlt,
            position: imgPosition,
            width: imgWidth,
            height: imgHeight,
            customLeft: customLeft || undefined,
          });
        }
        
        // Parse expertise cards
        const cardElements = doc.querySelectorAll('.expertise-card');
        const cardsList: ExpertiseCard[] = [];
        
        cardElements.forEach((card, idx) => {
          const title = card.querySelector('.card-title')?.textContent || '';
          const description = card.querySelector('.card-description')?.textContent || '';
          const position = card.getAttribute('data-position') || '';
          const width = card.getAttribute('data-width') || '367px';
          const height = card.getAttribute('data-height') || '121px';
          const bgColor = card.getAttribute('data-bg-color') || '#ffffff99';
          const isWhiteBg = card.getAttribute('data-white-bg') === 'true';
          
          // Parse icon
          const iconBgElem = card.querySelector('.icon-bg');
          const iconSrcElem = card.querySelector('.icon-src');
          const iconBg = iconBgElem?.textContent || '';
          const iconSrc = iconSrcElem?.textContent || '';
          
          cardsList.push({
            id: idx,
            title,
            description,
            position,
            width,
            height,
            bgColor,
            isWhiteBg,
            iconSrc: iconSrc || undefined,
            iconBg: iconBg || undefined,
          });
        });
        
        setCards(cardsList);
      } catch (error) {
        console.error('Error loading expertise cards:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) return <div className="text-center py-8">Загрузка...</div>;
  if (!sectionVisible) return null;
  if (cards.length === 0) return null;

  // Helper to parse style from position string
  const parsePosition = (positionStr: string) => {
    const styles: React.CSSProperties = {};
    const topMatch = positionStr.match(/top-\[?(\d+)\]?/);
    const leftMatch = positionStr.match(/left-\[?(\d+)\]?/);
    if (topMatch) styles.top = `${parseInt(topMatch[1], 10)}px`;
    if (leftMatch) styles.left = `${parseInt(leftMatch[1], 10)}px`;
    return styles;
  };

  // Calculate the left position based on custom offset
  const getImageLeftPosition = () => {
    let baseLeft = 'calc(50% - 371px)';
    if (imageData?.customLeft) {
      const offset = parseInt(imageData.customLeft, 10);
      return `calc(50% - 371px + ${offset}px)`;
    }
    return baseLeft;
  };

  return (
    <>
      {/* Desktop Version */}
      <section className="hidden md:block relative w-full py-[70px] px-[40px] right-[70px]">
        <div className="relative h-[715px] w-[1342px] mx-auto">
          
          {/* Central Image */}
          {imageData && (
            <div className="relative left-[50px]">
              <div 
                className="absolute"
                style={{ 
                  top: '74px', 
                  left: getImageLeftPosition(),
                  width: `${imageData.width}px`,
                  height: `${imageData.height}px`
                }}
              >
                <Image
                  alt={imageData.alt}
                  src={imageData.src}
                  fill
                  className="object-contain"
                  sizes="712px"
                  loading="lazy"
                />
              </div>
            </div>
          )}
          
          {/* Cards */}
          {cards.map((card) => (
            <Card
              key={card.id}
              className={`absolute rounded-[20px] overflow-hidden shadow-[0px_24px_38px_rgba(22,29,36,0.08)] backdrop-blur-[79px] border-0`}
              style={{
                ...parsePosition(card.position),
                width: card.width,
                height: card.height,
                backgroundColor: card.bgColor,
              }}
            >
              <CardContent className="p-3.5 relative">
                <div className="inline-flex items-center gap-3">
                  <div className="relative w-[92px] h-[93px] rounded-[52px] bg-[#3C6CEC]">
                    {card.iconSrc ? (
                      <div className="absolute w-[46px] h-[46px] top-[24px] left-[23px]">
                        <Image
                          alt={card.title}
                          src={card.iconSrc}
                          fill
                          className="object-contain"
                          sizes="46px"
                          loading="lazy"
                        />
                      </div>
                    ) : card.iconBg ? (
                      <div className={`absolute w-[46px] h-[46px] top-[24px] left-[23px] ${card.iconBg} bg-cover bg-center`} />
                    ) : null}
                  </div>

                  <div className="flex flex-col items-start gap-0.5">
                    <h3 className="font-semibold text-[#394355] text-base leading-6 [font-family:'Raleway']">
                      {card.title}
                    </h3>
                    <p
                      className="font-normal text-[#394355] text-xs leading-5 [font-family:'Raleway']"
                      style={{ width: `calc(${card.width} - 120px)` }}
                    >
                      {card.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Mobile Version */}
      <section className="md:hidden w-full py-8 px-4">
        <div className="flex flex-col items-center">
          
          {/* Image at the top */}
          {imageData && (
            <div className="relative w-full max-w-[400px] h-[300px] mb-8">
              <div className="relative w-full h-full">
                <Image
                  alt={imageData.alt}
                  src={imageData.src}
                  fill
                  className="rounded-lg object-contain"
                  sizes="100vw"
                  loading="lazy"
                />
              </div>
            </div>
          )}

          {/* Cards below the image */}
          <div className="grid grid-cols-1 gap-4 w-full max-w-[600px]">
            {cards.map((card) => (
              <Card
                key={card.id}
                className={`rounded-[20px] overflow-hidden shadow-[0px_24px_38px_rgba(22,29,36,0.08)] backdrop-blur-[79px] border-0 w-full`}
                style={{ backgroundColor: card.bgColor }}
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-[60px] h-[60px] rounded-full bg-[#3C6CEC] flex items-center justify-center">
                      {card.iconSrc ? (
                        <div className="w-[30px] h-[30px] relative">
                          <Image
                            alt={card.title}
                            src={card.iconSrc}
                            fill
                            className="object-contain"
                            sizes="30px"
                            loading="lazy"
                          />
                        </div>
                      ) : card.iconBg ? (
                        <div className={`w-[30px] h-[30px] ${card.iconBg} bg-contain bg-no-repeat bg-center`} />
                      ) : null}
                    </div>

                    <div className="flex-1">
                      <h3 className="font-semibold text-[#394355] text-base leading-6 [font-family:'Raleway'] mb-1">
                        {card.title}
                      </h3>
                      <p className="font-normal text-[#394355] text-xs leading-5 [font-family:'Raleway']">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};