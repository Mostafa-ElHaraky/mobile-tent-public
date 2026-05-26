'use client';

import React, { useState, useEffect } from 'react';
import { Button } from "./button";
import { Card, CardContent } from "./card";
import Image from 'next/image';

interface ProcessStep {
  number: string;
  title: string;
  description: React.ReactNode; // <- изменено
  images: Array<{ src: string; className: string }>;
}

// Helper function to get visible cards (2 at a time)
const getVisibleCards = (currentSlide: number, steps: ProcessStep[]): ProcessStep[] => {
  const visibleCards = [];
  for (let i = 0; i < 2; i++) {
    const index = (currentSlide + i) % steps.length;
    visibleCards.push(steps[index]);
  }
  return visibleCards;
};

// Desktop Components
const ServicesHeaderDesktop = ({ titleHtml, descriptionHtml }: { titleHtml: string; descriptionHtml: string }) => (
      <div className="relative h-[100px] max-w-[500px] top-[200px]">
        <div 
          className="font-normal text-transparent text-4xl leading-[normal] [font-family:'Raleway',Helvetica] tracking-[0]"
          dangerouslySetInnerHTML={{ __html: titleHtml }}
        />
        <div 
          className="font-medium text-[#394355] text-lg leading-6 [font-family:'Raleway',Helvetica] tracking-[0] mt-4"
          dangerouslySetInnerHTML={{ __html: descriptionHtml }}
        />
      </div>
);

const NavigationButtons = ({ onPrev, onNext }: { onPrev: () => void; onNext: () => void }) => (
  <div className="flex gap-6 mt-18 relative top-[400px]">
    <Button
      variant="outline"
      size="icon"
      onClick={onPrev}
      className="w-14 h-14 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
    >
      <Image src="/GROP-10.webp" width={14} height={24} alt="Previous" />
    </Button>
    <Button
      variant="outline"
      size="icon"
      onClick={onNext}
      className="w-14 h-14 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
    >
      <Image src="/GROP-11.webp" width={14} height={24} alt="Next" />
    </Button>
  </div>
);

const ProcessCard = ({ step }: { step: ProcessStep }) => (
  <Card className="relative w-[433px] h-[434px] rounded-[20px] overflow-hidden shadow-[0px_24px_38px_#161d2414] backdrop-blur-[79px] border-0">
    <CardContent className="p-0">
      <div className="relative w-[494px] h-[497px] top-[-63px] left-[-61px]">
        <div className="absolute w-[434px] h-[434px] top-[63px] left-[60px] bg-white rounded-[20px] shadow-[0px_24px_38px_#161d2414] backdrop-blur-[79px]" />
        <div className="inline-flex flex-col items-start gap-[18px] absolute top-[330px] left-[85px]">
          <h3 className="relative w-[356px] mt-[-1.00px] font-bold text-[#232c42] text-xl leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
            {step.title}
          </h3>
          <div className="relative w-[385px] font-normal text-[#394355] text-lg leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
            {step.description}
          </div>
        </div>
        <div className="absolute w-[216px] h-[216px] top-0 left-0 bg-[#dee4f066] rounded-[108px] flex items-center justify-center">
          <div className="text-[#232c42] [font-family:'Raleway',Helvetica] font-bold text-[50px]">
            {step.number}
          </div>
        </div>
        {step.images.map((image, imgIndex) => (
          <Image
            key={imgIndex}
            className={image.className}
            alt={`Step ${step.number} illustration`}
            src={image.src}
            width={100}
            height={100}
            loading="lazy"
          />
        ))}
      </div>
    </CardContent>
  </Card>
);

const ProcessStepsCarousel = ({ steps }: { steps: ProcessStep[] }) => (
  <div className="relative max-w-[1399px] left-[220px] mx-auto">
    <div className="flex flex-wrap justify-center gap-5">
      {steps.map((step, index) => (
        <ProcessCard key={`${step.number}-${index}`} step={step} />
      ))}
    </div>
  </div>
);

// Mobile Components
const ServicesHeaderMobile = ({ titleHtml, descriptionHtml }: { titleHtml: string; descriptionHtml: string }) => (
  <div className="flex flex-col items-start gap-6 w-full">
    <div 
      className="font-normal text-transparent text-3xl leading-[normal] [font-family:'Raleway',Helvetica] tracking-[0]"
      dangerouslySetInnerHTML={{ __html: titleHtml }}
    />
    <div 
      className="font-medium text-[#394355] text-lg leading-6 [font-family:'Raleway',Helvetica] tracking-[0]"
      dangerouslySetInnerHTML={{ __html: descriptionHtml }}
    />
  </div>
);

const MobileProcessCard = ({ step, isFirstStep }: { step: ProcessStep; isFirstStep: boolean }) => (
  <Card className="relative w-full h-[450px] rounded-[20px] bg-white overflow-hidden shadow-[0px_24px_38px_#161d2414] border border-[#e4eaf2]">
    <CardContent className="p-6 h-full">
      <div className="relative w-full h-full">
        <div className="absolute w-[120px] h-[120px] top-[-60px] left-[-60px] bg-[#dee4f0] rounded-full flex items-center justify-center overflow-hidden">
          <div className="text-[#232c42] font-bold text-4xl [font-family:'Raleway',Helvetica] transform translate-x-3 translate-y-3">
            {step.number}
          </div>
        </div>

        {isFirstStep && step.images.length >= 2 ? (
          <div className="absolute right-10 top-0 w-[50%] h-[65%]">
            <div className="absolute w-[200px] h-[200px] top-[30px] left-[50px]">
              <div className="absolute w-[171px] h-[175px] top-[18px] left-[6px]">
                <Image
                  src={step.images[0].src}
                  alt="Notebook"
                  fill
                  className="object-contain scale-130"
                  sizes="100vw"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="absolute w-[120px] h-[120px] top-[150px] left-[140px] transform rotate-[4deg] scale-118">
              <Image
                src={step.images[1].src}
                alt="Pen"
                fill
                className="object-contain"
                sizes="100vw"
                loading="lazy"
              />
            </div>
          </div>
        ) : (
          <div className="absolute right-10 top-0 w-[50%] h-[65%] flex items-start justify-center">
            {step.images.map((image, imgIndex) => (
              <div key={imgIndex} className="relative w-full h-full">
                <Image
                  className="object-contain scale-130"
                  alt={`Step ${step.number} illustration`}
                  src={image.src}
                  fill
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}

        <div className="absolute left-0 right-0 bottom-10 w-full h-[10%] flex flex-col items-center justify-center px-4">
          <h3 className="font-bold text-[#232c42] text-xl leading-6 [font-family:'Raleway',Helvetica] mb-4 text-center">
            {step.title}
          </h3>
          <p className="text-[#394355] text-base font-normal [font-family:'Raleway',Helvetica] leading-6 text-center">
            {step.description}
          </p>
        </div>
      </div>
    </CardContent>
  </Card>
);

// Main Component
export const ProcessSteps = () => {
  const [steps, setSteps] = useState<ProcessStep[]>([]);
  const [sectionVisible, setSectionVisible] = useState(true);
  const [headerData, setHeaderData] = useState({ titleHtml: '', descriptionHtml: '' });
  const [isLoading, setIsLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchProcessSteps = async () => {
      try {
        const res = await fetch('/api/process_steps');
        const html = await res.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        
        const section = doc.querySelector('.process-section');
        const isVisible = section?.getAttribute('data-visible') !== 'false';
        setSectionVisible(isVisible);
        
        if (!isVisible) {
          setIsLoading(false);
          return;
        }
        
        // Parse header
        const servicesHeader = doc.querySelector('.services-header');
        if (servicesHeader) {
          const titleHtml = servicesHeader.querySelector('.title')?.innerHTML || '';
          const descriptionHtml = servicesHeader.querySelector('.description')?.innerHTML || '';
          setHeaderData({ titleHtml, descriptionHtml });
        }
        
        // Parse process steps
        const slides = doc.querySelectorAll('.process-slide');
        const processSteps: ProcessStep[] = [];
        slides.forEach((slide) => {
          const card = slide.querySelector('.process-card');
          if (!card) return;
          
          const number = card.querySelector('.number')?.textContent || '';
          const title = card.querySelector('.title')?.textContent || '';
          const description = card.querySelector('.description')?.textContent || '';
          
          const images: Array<{ src: string; className: string }> = [];
          const imageElements = card.querySelectorAll('.images img');
          imageElements.forEach((img, idx) => {
            const src = img.getAttribute('src') || '';
            const className = idx === 0 ? 'absolute w-[252px] h-[185px] top-[63px] left-[228px]' : 'absolute w-[105px] h-[105px] top-[161px] left-[365px] object-cover';
            images.push({ src, className });
          });
          
          processSteps.push({ number, title, description, images });
        });
        setSteps(processSteps);
      } catch (error) {
        console.error('Error loading process steps:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProcessSteps();
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % steps.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + steps.length) % steps.length);
  
  const visibleCards = getVisibleCards(currentSlide, steps);
  const currentStep = steps[currentSlide];

  if (isLoading) return <div className="text-center py-8">Загрузка...</div>;
  if (!sectionVisible) return null;
  if (steps.length === 0) return null;

  return (
    <>
      {/* Desktop Version */}
      <div className="hidden md:block">
        <ServicesHeaderDesktop titleHtml={headerData.titleHtml} descriptionHtml={headerData.descriptionHtml} />
          
          <NavigationButtons onPrev={prevSlide} onNext={nextSlide} />
        
        <ProcessStepsCarousel steps={visibleCards} />
      </div>

      {/* Mobile Version */}
      <div className="block md:hidden">
        <section className="flex flex-col items-start gap-6 mb-8 w-full">
          <ServicesHeaderMobile titleHtml={headerData.titleHtml} descriptionHtml={headerData.descriptionHtml} />
          <div className="relative w-full">
            <MobileProcessCard step={currentStep} isFirstStep={currentStep?.number === "01"} />
          </div>
          <div className="flex items-center justify-center gap-6 w-full mt-4">
            <Button onClick={prevSlide} className="w-14 h-14 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]">
              <Image src="/GROP-10.webp" width={14} height={24} alt="Previous" />
            </Button>
            <Button onClick={nextSlide} className="w-14 h-14 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]">
              <Image src="/GROP-11.webp" width={14} height={24} alt="Next" />
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};