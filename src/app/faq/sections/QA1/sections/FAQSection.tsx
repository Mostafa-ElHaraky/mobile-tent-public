'use client';

import React from "react";
import { ReactElement } from 'react';

export const FAQSection = (): ReactElement => {
  return (
    <>
      {/* Desktop version - H2 instead of H1 */}
      <section className="relative bottom-[820px] h-[42px] left-[40px] w-full py-6 hidden md:block ">
        <div className="container mx-auto px-4">
          <h2 className="font-['Raleway',Helvetica] font-semibold text-4xl mb-6">
            <span className="text-[#527dc5]">Клиенты</span>
            <span className="text-[#232c42]"> часто спрашивают</span>
          </h2>
        </div>
      </section>

      {/* Mobile version - H2 instead of H1 */}
      <section className="block md:hidden w-full py-4 px-4 mt-0">
        <div className="container mx-auto">
          <h2 className="font-['Raleway',Helvetica] font-semibold text-2xl text-center mb-4">
            <span className="text-[#527dc5]">Клиенты</span>
            <span className="text-[#232c42]"> часто спрашивают</span>
          </h2>
        </div>
      </section>
    </>
  );
};