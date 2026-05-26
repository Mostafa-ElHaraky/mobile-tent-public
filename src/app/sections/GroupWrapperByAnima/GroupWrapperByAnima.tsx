'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from "../../../components/ui/card";
import Image from 'next/image';

interface Feature {
  id: number;
  title: string;
  description: string;
  iconSrc: string;
  iconWidth: number;
  iconHeight: number;
}

export const GroupWrapperByAnima = () => {
  const [features, setFeatures] = useState<Feature[]>([]);
  const [sectionVisible, setSectionVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/features');
        const html = await res.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        
        const section = doc.querySelector('.features-section');
        const isVisible = section?.getAttribute('data-visible') !== 'false';
        setSectionVisible(isVisible);
        
        if (!isVisible) {
          setIsLoading(false);
          return;
        }
        
        // Parse features
        const featureItems = doc.querySelectorAll('.feature-item');
        const featuresList: Feature[] = [];
        
        featureItems.forEach((item, idx) => {
          const iconSrc = item.querySelector('.feature-icon')?.textContent || '';
          const title = item.querySelector('.feature-title')?.textContent || '';
          const description = item.querySelector('.feature-description')?.textContent || '';
          
          // Parse icon size
          let iconWidth = 36;
          let iconHeight = 38;
          const sizeText = item.querySelector('.icon-size')?.textContent || '';
          if (sizeText) {
            const widthMatch = sizeText.match(/width:(\d+)/);
            const heightMatch = sizeText.match(/height:(\d+)/);
            if (widthMatch) iconWidth = parseInt(widthMatch[1], 10);
            if (heightMatch) iconHeight = parseInt(heightMatch[1], 10);
          }
          
          featuresList.push({
            id: idx,
            title,
            description,
            iconSrc,
            iconWidth,
            iconHeight,
          });
        });
        
        setFeatures(featuresList);
      } catch (error) {
        console.error('Error loading features:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) return <div className="text-center py-8">Загрузка...</div>;
  if (!sectionVisible) return null;
  if (features.length === 0) return null;

  return (
    <Card className="w-full p-8 rounded-[20px] shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] border-0">
      <CardContent className="p-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="flex items-start gap-[34px]">
              <div className="relative w-[60px] h-[60px]">
                <div className="relative w-9 h-[38px] top-[11px] left-3">
                  <div className="relative h-[38px]">
                    <div className="absolute w-[23px] h-[23px] top-[7px] left-[7px] bg-white rounded-[11.63px]" />
                    <Image
                      className="absolute top-0 left-0"
                      alt="Feature icon"
                      src={feature.iconSrc}
                      width={feature.iconWidth}
                      height={feature.iconHeight}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div className="font-normal text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                <span className="font-semibold">{feature.title} </span>
                <span className="[font-family:'Raleway',Helvetica] font-normal text-[#394355] text-base tracking-[0] leading-6">
                  {feature.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};