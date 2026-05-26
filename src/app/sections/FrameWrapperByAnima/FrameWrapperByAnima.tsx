'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from "../../../components/ui/card";
import { CheckIcon } from "lucide-react";
import Image from 'next/image';

interface Category {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  imagePosition: string;
}

interface StatsData {
  number: string;
  description: string;
  bgColor: string;
}

interface BenefitsData {
  mainTitleHtml: string;
  checkText: string;
  stats: StatsData;
  categories: Category[];
}

export const FrameWrapperByAnima = () => {
  const [data, setData] = useState<BenefitsData | null>(null);
  const [sectionVisible, setSectionVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/business_benefits');
        const html = await res.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        
        const section = doc.querySelector('.benefits-section');
        const isVisible = section?.getAttribute('data-visible') !== 'false';
        setSectionVisible(isVisible);
        
        if (!isVisible) {
          setIsLoading(false);
          return;
        }
        
        // Parse main title
        const mainTitleElem = doc.querySelector('.main-title');
        const mainTitleHtml = mainTitleElem?.innerHTML || 'Делаем все, чтобы <span class="text-[#232c42] font-medium">ваша компания больше зарабатывала на аренде и приеме гостей</span>';
        
        // Parse check item
        const checkText = doc.querySelector('.check-text')?.textContent || 'Выгодные условия сотрудничества';
        
        // Parse stats card
        const statsCard = doc.querySelector('.stats-card');
        const statsNumber = statsCard?.querySelector('.stats-number')?.textContent || '800+ клиентов';
        const statsDescription = statsCard?.querySelector('.stats-description')?.textContent || 'с 2012 года по России и странам СНГ';
        const statsBgColor = statsCard?.getAttribute('data-bg-color') || '#527dc5';
        
        // Parse categories
        const categoryCards = doc.querySelectorAll('.category-card');
        const categories: Category[] = [];
        categoryCards.forEach((card, idx) => {
          const title = card.querySelector('.category-title')?.textContent || '';
          const description = card.querySelector('.category-description')?.textContent || '';
          const imageSrc = card.querySelector('.category-image img')?.getAttribute('src') || '';
          const imageAlt = card.querySelector('.category-image img')?.getAttribute('alt') || '';
          
          // Parse image position and size
          const imagePosition = card.querySelector('.image-position')?.textContent || 'top-0 left-0';
          const imageSizeText = card.querySelector('.image-size')?.textContent || '';
          let imageWidth = 318;
          let imageHeight = 204;
          
          if (imageSizeText) {
            const widthMatch = imageSizeText.match(/width:(\d+)/);
            const heightMatch = imageSizeText.match(/height:(\d+)/);
            if (widthMatch) imageWidth = parseInt(widthMatch[1], 10);
            if (heightMatch) imageHeight = parseInt(heightMatch[1], 10);
          }
          
          categories.push({
            id: idx,
            title,
            description,
            imageSrc,
            imageAlt,
            imageWidth,
            imageHeight,
            imagePosition,
          });
        });
        
        setData({
          mainTitleHtml,
          checkText,
          stats: {
            number: statsNumber,
            description: statsDescription,
            bgColor: statsBgColor,
          },
          categories,
        });
      } catch (error) {
        console.error('Error loading business benefits:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) return <div className="text-center py-8">Загрузка...</div>;
  if (!sectionVisible) return null;
  if (!data) return null;

  return (
    <>
      {/* Desktop Version */}
      <section className="hidden md:flex flex-col items-start gap-9 w-full py-12">
        <div className="flex items-center justify-between w-full gap-8 flex-wrap">
          <div className="flex flex-col items-start gap-6 max-w-[777px]">
            <h2 
              className="text-4xl font-normal [font-family:'Raleway',Helvetica] tracking-[0]"
              dangerouslySetInnerHTML={{ __html: data.mainTitleHtml }}
            />

            <div className="flex items-center gap-3">
              <div className="relative w-6 h-6 flex-shrink-0">
                <CheckIcon className="absolute w-[21px] h-[17px] top-[3px] left-0.5 text-[#527dc5]" />
              </div>
              <p className="font-medium text-[#4f5d80] text-lg leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                {data.checkText}
              </p>
            </div>
          </div>

          <Card className="w-[351px] h-[120px] rounded-[20px] shadow-2 border-none" style={{ backgroundColor: data.stats.bgColor }}>
            <CardContent className="p-0">
              <div className="flex flex-col items-start gap-3 pt-[23px] pl-[25px]">
                <h3 className="font-bold text-white text-4xl leading-[normal] whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                  {data.stats.number}
                </h3>
                <p className="font-medium text-white text-base leading-[normal] whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                  {data.stats.description}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex items-start gap-6 flex-wrap">
          {data.categories.map((category) => (
            <Card
              key={category.id}
              className="w-[318px] h-[330px] bg-white rounded-[20px] border border-solid border-[#dddddd] shadow-[] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] relative overflow-hidden"
            >
              <CardContent className="p-0 h-full">
                <div className="absolute w-[318px] h-[204px] top-0 left-0 rounded-[20px] [background:linear-gradient(180deg,rgba(232,238,248,1)_0%,rgba(232,238,248,0)_100%)]" />

                <div className="relative w-full h-full">
                  <Image
                    className={`absolute ${category.imagePosition} object-contain`}
                    alt={category.imageAlt}
                    src={category.imageSrc}
                    width={category.imageWidth}
                    height={category.imageHeight}
                    loading="lazy"
                  />

                  <div className="absolute w-[255px] top-[239px] left-[31px] font-normal text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                    <span className="font-semibold">{category.title}</span>
                    <span className="[font-family:'Raleway',Helvetica] font-normal text-[#394355] text-base tracking-[0] leading-6">
                      {category.description}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Mobile Version */}
      <section className="md:hidden flex flex-col items-start gap-6 w-full py-8 px-4">
        <div className="flex flex-col items-start gap-6 w-full">
          <div className="flex flex-col items-start gap-6 w-full">
            <h2 
              className="text-2xl font-normal [font-family:'Raleway',Helvetica] tracking-[0]"
              dangerouslySetInnerHTML={{ __html: data.mainTitleHtml }}
            />

            <div className="flex items-center gap-3">
              <div className="relative w-6 h-6 flex-shrink-0">
                <CheckIcon className="absolute w-[21px] h-[17px] top-[3px] left-0.5 text-[#527dc5]" />
              </div>
              <p className="font-medium text-[#4f5d80] text-base leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                {data.checkText}
              </p>
            </div>
          </div>

          <Card className="w-full h-[100px] rounded-[20px] shadow-2 border-none" style={{ backgroundColor: data.stats.bgColor }}>
            <CardContent className="p-0">
              <div className="flex flex-col items-start gap-2 pt-4 pl-5">
                <h3 className="font-bold text-white text-2xl leading-[normal] whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                  {data.stats.number}
                </h3>
                <p className="font-medium text-white text-sm leading-[normal] whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                  {data.stats.description}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-6 w-full">
          {data.categories.map((category) => (
            <Card
              key={category.id}
              className="w-full bg-white rounded-[20px] border border-solid border-[#dddddd] shadow-[] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] relative overflow-hidden"
            >
              <CardContent className="p-0 h-full flex flex-col items-center pb-6">
                <div className="w-full h-[250px] relative flex justify-center items-center rounded-t-[20px] [background:linear-gradient(180deg,rgba(232,238,248,1)_0%,rgba(232,238,248,0)_100%)]">
                  <div className="relative w-full h-full flex justify-center">
                    <Image
                      className="object-contain"
                      alt={category.imageAlt}
                      src={category.imageSrc}
                      width={category.imageWidth}
                      height={category.imageHeight}
                      style={{
                        maxWidth: '95%',
                        height: 'auto',
                      }}
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="w-full px-6 mt-4 text-center">
                  <p className="font-semibold text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                    {category.title}
                  </p>
                  <p className="[font-family:'Raleway',Helvetica] font-normal text-[#394355] text-sm tracking-[0] leading-5 mt-1">
                    {category.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};