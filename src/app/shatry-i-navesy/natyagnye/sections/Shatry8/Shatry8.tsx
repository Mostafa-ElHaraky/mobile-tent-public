'use client';

import { FrameShatry8 } from "./FrameShatry8/FrameShatry8";
import { OverlapWrapperShatry8 } from "./OverlapWrapperShatry8/OverlapWrapperShatry8";
import { ReactElement } from 'react';

// Define the contacts interface
interface ContactInfo {
  phone1?: string;
  phone2?: string;
  email?: string;
  telegram?: string;
  whatsapp?: string;
  office?: {
    name?: string;
    address?: string;
    map_url?: string;
    hours?: string;
    appointment?: string;
  };
  production?: {
    name?: string;
    address?: string;
    map_url?: string;
    hours?: string;
    appointment?: string;
  };
}

interface Shatry8Props {
  contacts?: ContactInfo;
}

export const Shatry8 = ({ contacts }: Shatry8Props): ReactElement => {
  return (
    <main className="w-full bg-white flex flex-col items-center">
      
      {/* ============ Desktop Version (shown only from md up) ============ */}
      <div className="hidden md:flex w-full max-w-[1440px] h-[1833px] flex-col items-center gap-[25px] relative top-[90px] ">
        <FrameShatry8 contacts={contacts} />
        <OverlapWrapperShatry8 />
      </div>

      {/* ============ Mobile Version (shown only on phone) ============ */}
      <div className="block md:hidden w-full px-4 py-6 mt-[-135]">
        <div className="flex flex-col gap-12 pb-16">
          {/* FrameShatry8 on mobile */}
          <div className="w-full flex flex-col items-center">
            <FrameShatry8 contacts={contacts} />
          </div>

          {/* OverlapWrapperShatry8 on mobile */}
          <div className="w-full flex flex-col items-center">
            <OverlapWrapperShatry8 />
          </div>
        </div>
      </div>
    </main>
  );
};