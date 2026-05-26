'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from "../../../components/ui/card";
import Image from 'next/image';

interface CategoryItem {
  text: string;
  href: string;
}

interface CategoryColumn {
  items: CategoryItem[];
}

interface TentSection {
  title: string;
  columns: CategoryColumn[];
  imageSrc: string;
  imageAlt: string;
  gradientType: 'blue' | 'dark';
}

interface ConstructionSection {
  title: string;
  columns: CategoryColumn[];
  imageSrc: string;
  imageAlt: string;
}

interface OfferData {
  sectionTitle: string;
  tentSection: TentSection;
  constructionSection: ConstructionSection;
}

export const GroupByAnima = () => {
  const [data, setData] = useState<OfferData | null>(null);
  const [sectionVisible, setSectionVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/what_we_offer');
        const html = await res.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        const section = doc.querySelector('.offer-section');
        const isVisible = section?.getAttribute('data-visible') !== 'false';
        setSectionVisible(isVisible);

        if (!isVisible) {
          setIsLoading(false);
          return;
        }

        // Parse section title
        const sectionTitle = doc.querySelector('.section-title')?.textContent || 'Что предлагаем';

        // Parse Tent Section
        const tentSectionElem = doc.querySelector('.tent-types-section');
        const tentTitle = tentSectionElem?.querySelector('.section-subtitle')?.textContent || 'Шатры';
        const tentColumns: CategoryColumn[] = [];
        const tentColumnsElem = tentSectionElem?.querySelectorAll('.category-column');
        tentColumnsElem?.forEach(col => {
          const items: CategoryItem[] = [];
          const itemElems = col.querySelectorAll('.category-item a');
          itemElems.forEach(item => {
            items.push({
              text: item.textContent || '',
              href: item.getAttribute('href') || '#'
            });
          });
          tentColumns.push({ items });
        });
        const tentImageSrc = tentSectionElem?.querySelector('.image-container img')?.getAttribute('src') || '/event-tent-i02-1.webp';
        const tentImageAlt = tentSectionElem?.querySelector('.image-container img')?.getAttribute('alt') || 'Event tent';
        const tentGradientType = tentSectionElem?.querySelector('.image-container')?.getAttribute('data-gradient') === 'dark' ? 'dark' : 'blue';

        // Parse Construction Section
        const constSectionElem = doc.querySelector('.other-constructions-section');
        const constTitle = constSectionElem?.querySelector('.section-subtitle')?.textContent || 'Другие тентовые конструкции';
        const constColumns: CategoryColumn[] = [];
        const constColumnsElem = constSectionElem?.querySelectorAll('.category-column');
        constColumnsElem?.forEach(col => {
          const items: CategoryItem[] = [];
          const itemElems = col.querySelectorAll('.category-item a');
          itemElems.forEach(item => {
            items.push({
              text: item.textContent || '',
              href: item.getAttribute('href') || '#'
            });
          });
          constColumns.push({ items });
        });
        const constImageSrc = constSectionElem?.querySelector('.image-container img')?.getAttribute('src') || '/bessonneau-hangar-i01-1.webp';
        const constImageAlt = constSectionElem?.querySelector('.image-container img')?.getAttribute('alt') || 'Bessonneau hangar';

        setData({
          sectionTitle,
          tentSection: {
            title: tentTitle,
            columns: tentColumns,
            imageSrc: tentImageSrc,
            imageAlt: tentImageAlt,
            gradientType: tentGradientType
          },
          constructionSection: {
            title: constTitle,
            columns: constColumns,
            imageSrc: constImageSrc,
            imageAlt: constImageAlt
          }
        });
      } catch (error) {
        console.error('Error loading what we offer:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) return <div className="text-center py-8">Загрузка...</div>;
  if (!sectionVisible) return null;
  if (!data) return null;

  const tentGradient = data.tentSection.gradientType === 'blue'
    ? 'linear-gradient(180deg, #73A8FF 0%, #6FA7FF 36.5%, #4778C7 95.5%)'
    : 'linear-gradient(108.32deg, #243057 -27.58%, #374255 107.93%)';

  const constGradient = 'linear-gradient(108.32deg, #243057 -27.58%, #374255 107.93%)';

  return (
    <>
      {/* Desktop Version */}
      <section className="hidden md:block w-full h-[540px] bg-[#eef1f8] rounded-[20px] p-12 pt-16">
        <div className="flex flex-col gap-9">
          <h2 className="font-semibold text-[#232c42] text-4xl [font-family:'Raleway',Helvetica]">
            {data.sectionTitle}
          </h2>

          <div className="flex gap-6">
            {/* Tent Types Card */}
            <Card className="w-[888px] h-[362px] bg-white shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] border-0">
              <CardContent className="p-7">
                <div className="flex flex-col gap-[21px]">
                  <h3 className="font-bold text-[#527dc5] text-xl leading-6 [font-family:'Raleway',Helvetica]">
                    {data.tentSection.title}
                  </h3>

                  <div className="flex gap-[61px]">
                    {data.tentSection.columns.map((column, colIndex) => (
                      <div key={`tent-col-${colIndex}`} className="flex flex-col gap-3">
                        {column.items.map((item, itemIndex) => (
                          <a
                            key={`tent-item-${colIndex}-${itemIndex}`}
                            href={item.href}
                            className="font-normal text-[#394355] text-base leading-6 underline [font-family:'Raleway',Helvetica] tracking-[0] w-[169px]"
                          >
                            {item.text}
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className="absolute w-[366px] h-[296px] top-[23px] right-5 rounded-[20px]"
                  style={{ background: tentGradient }}
                >
                  <Image
                    className="ml-[30px]"
                    alt={data.tentSection.imageAlt}
                    src={data.tentSection.imageSrc}
                    width={336}
                    height={296}
                    loading="lazy"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Other Constructions Card */}
            <Card className="w-[432px] h-[362px] bg-white shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] border-0">
              <CardContent className="p-7">
                <div className="flex flex-col gap-[21px]">
                  <h3 className="font-bold text-[#232c42] text-xl leading-6 [font-family:'Raleway',Helvetica]">
                    {data.constructionSection.title}
                  </h3>

                  <div className="flex gap-[61px]">
                    {data.constructionSection.columns.map((column, colIndex) => (
                      <div key={`const-col-${colIndex}`} className="flex flex-col gap-3">
                        {column.items.map((item, itemIndex) => (
                          <a
                            key={`const-item-${colIndex}-${itemIndex}`}
                            href={item.href}
                            className="font-normal text-[#394355] text-base leading-6 underline [font-family:'Raleway',Helvetica] tracking-[0] w-[169px]"
                          >
                            {item.text}
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className="absolute w-[386px] h-[132px] bottom-[23px] left-[23px] rounded-[20px]"
                  style={{ background: constGradient }}
                >
                  <Image
                    className="mt-3 ml-[33px]"
                    alt={data.constructionSection.imageAlt}
                    src={data.constructionSection.imageSrc}
                    width={320}
                    height={112}
                    loading="lazy"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mobile Version */}
      <section className="md:hidden w-full bg-[#eef1f8] rounded-[20px] p-6 pt-8">
        <div className="flex flex-col gap-6">
          <h2 className="font-semibold text-[#232c42] text-2xl [font-family:'Raleway',Helvetica]">
            {data.sectionTitle}
          </h2>

          {/* Tent Types Card - Mobile */}
          <Card className="w-full bg-white shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] border-0 mb-4">
            <CardContent className="p-4">
              <div className="flex flex-col gap-4">
                <h3 className="font-bold text-[#527dc5] text-lg leading-6 [font-family:'Raleway',Helvetica]">
                  {data.tentSection.title}
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  {data.tentSection.columns.map((column, colIndex) => (
                    <div key={`mobile-tent-col-${colIndex}`} className="flex flex-col gap-3">
                      {column.items.map((item, itemIndex) => (
                        <a
                          key={`mobile-tent-item-${colIndex}-${itemIndex}`}
                          href={item.href}
                          className="font-normal text-[#394355] text-sm leading-5 underline [font-family:'Raleway',Helvetica]"
                        >
                          {item.text}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="relative w-full h-[296px] mt-4 rounded-[20px] mx-auto"
                style={{
                  background: tentGradient,
                  maxWidth: '366px'
                }}
              >
                <Image
                  className="object-contain ml-[30px]"
                  alt={data.tentSection.imageAlt}
                  src={data.tentSection.imageSrc}
                  width={336}
                  height={296}
                  loading="lazy"
                />
              </div>
            </CardContent>
          </Card>

          {/* Other Constructions Card - Mobile */}
          <Card className="w-full bg-white shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] border-0">
            <CardContent className="p-4">
              <div className="flex flex-col gap-4">
                <h3 className="font-bold text-[#232c42] text-lg leading-6 [font-family:'Raleway',Helvetica]">
                  {data.constructionSection.title}
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  {data.constructionSection.columns.map((column, colIndex) => (
                    <div key={`mobile-const-col-${colIndex}`} className="flex flex-col gap-3">
                      {column.items.map((item, itemIndex) => (
                        <a
                          key={`mobile-const-item-${colIndex}-${itemIndex}`}
                          href={item.href}
                          className="font-normal text-[#394355] text-sm leading-5 underline [font-family:'Raleway',Helvetica]"
                        >
                          {item.text}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="relative w-full h-[100px] mt-4 rounded-[15px]"
                style={{ background: constGradient }}
              >
                <Image
                  className="mx-auto pt-2 object-contain"
                  alt={data.constructionSection.imageAlt}
                  src={data.constructionSection.imageSrc}
                  width={260}
                  height={80}
                  loading="lazy"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};