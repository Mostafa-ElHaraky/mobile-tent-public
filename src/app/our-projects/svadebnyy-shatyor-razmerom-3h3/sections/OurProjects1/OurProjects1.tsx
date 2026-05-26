'use client';

import { Button } from "../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../components/ui/card";
import { DivWrapperOurProjects1 } from "./DivWrapperOurProjects1/DivWrapperOurProjects1";
import { FrameOurProjects1 } from "./FrameOurProjects1/FrameOurProjects1";
import { ReactElement } from 'react';
import Header from '../../../../../components/ui/Header'; // Import the Header component
import { useState } from "react"; 
import Consultaionfor3d from "../../../../../components/ui/Consultaionfor3d"; 

export const OurProjects1 = (): ReactElement => {
  const [showPopup, setShowPopup] = useState(false); 
  // Hotel specifications
  const hotelSpecs = [
    { label: "Размер:", value: "200*80 м" },
    { label: "Площадь:", value: "300 м2" }, 
    { label: "Вместимость:", value: "400 чел" },
  ];

  // Additional information
  const additionalInfo = [
    { label: "Срок:", value: "10 дней" },
    { label: "Город:", value: "Москва" },
  ];

  return (
<div className="relative w-full max-w-[1440px] min-h-[1539px] mx-auto bg-[linear-gradient(180deg,#E8EEF8_0%,rgba(222,228,240,0)_100%)]">     
    <section className="relative h-[1539px] rounded-[0px_0px_30px_30px]">
      <div className="w-full">
        <div className="w-full">
          <FrameOurProjects1 />
          {/* Hotel title */}
          <div className="inline-flex items-start gap-[335px] absolute top-[246px] left-12">
            <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
              <div className="flex flex-col w-[658px] items-start gap-[228px] relative flex-[0_0_auto]">
                <div className="inline-flex flex-col items-start gap-[55px] relative flex-[0_0_auto] mr-[-8.00px]">
                  <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
                    <div className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]">
                      <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
                        <div className="w-[666px] font-medium text-4xl relative mt-[-1.00px] font-['Raleway',Helvetica] text-[#394355] tracking-[0] leading-[normal]">
                          Свадебный шатёр размером 3х3
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hotel specifications */}
          <Card className="inline-flex flex-col items-start gap-9 absolute top-[825px] left-12 border-none shadow-none bg-transparent">
            <CardContent className="p-0">
              <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
                <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
                  {hotelSpecs.map((spec, index) => (
                    <div
                      key={index}
                      className="inline-flex items-start gap-2 relative flex-[0_0_auto]"
                    >
                      <div className="relative w-fit mt-[-1.00px] font-['Raleway',Helvetica] font-normal text-[#394355] text-lg tracking-[0] leading-6 whitespace-nowrap">
                        {spec.label}
                      </div>
                      <div className="relative w-fit mt-[-1.00px] font-medium text-[#394355] text-lg leading-6 whitespace-nowrap font-['Raleway',Helvetica] tracking-[0]">
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional information */}
          <Card className="inline-flex flex-col items-start gap-9 absolute top-[825px] left-[733px] border-none shadow-none bg-transparent">
            <CardContent className="p-0">
              <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
                <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
                  {additionalInfo.map((info, index) => (
                    <div
                      key={index}
                      className="inline-flex items-start gap-2 relative flex-[0_0_auto]"
                    >
                      <div className="relative w-fit mt-[-1.00px] font-['Raleway',Helvetica] font-normal text-[#394355] text-lg tracking-[0] leading-6 whitespace-nowrap">
                        {info.label}
                      </div>
                      <div className="relative w-fit mt-[-1.00px] font-medium text-[#394355] text-lg leading-6 whitespace-nowrap font-['Raleway',Helvetica] tracking-[0]">
                        {info.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
{/* Call to action button */}
<div className="flex flex-col w-[659px] items-center gap-3 absolute top-[910px] left-[733px]">
  <Button 
    onClick={() => setShowPopup(true)} // Add click handler
    className="relative w-[655px] h-[68px] rounded-2xl border-[none] shadow-2 [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]"
  >
    <span className="absolute top-[22px] left-[272px] font-semibold text-white text-base text-center leading-[normal] whitespace-nowrap font-['Raleway',Helvetica] tracking-[0]">
      Хочу похожий
    </span>
  </Button>
</div>
{showPopup && (
  <Consultaionfor3d 
    onClose={() => setShowPopup(false)} // Close handler
  />
)}
      </div>
      <DivWrapperOurProjects1 />
      <div className="relative bottom-[317px] ">
      <Header />
      </div>
      </section>
    </div>
  );
};