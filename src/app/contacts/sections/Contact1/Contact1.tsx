'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { Badge } from '../../../../components/ui/badge';
import { Card, CardContent } from '../../../../components/ui/card';
import { Button } from '../../../../components/ui/button';

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

interface Contact1Props {
  contacts?: ContactInfo;
}

export const Contact1 = ({ contacts }: Contact1Props) => {
  const catalogRef = useRef<HTMLDivElement | null>(null);
  
  // Helper functions to format URLs
  const formatTelegramUrl = (telegramData: string) => {
    if (telegramData.startsWith('http')) return telegramData;
    if (telegramData.startsWith('@')) {
      return `https://t.me/${telegramData.substring(1)}`;
    }
    if (/^[a-zA-Z0-9_]+$/.test(telegramData)) {
      return `https://t.me/${telegramData}`;
    }
    return telegramData;
  };

  const formatWhatsAppUrl = (whatsappData: string) => {
    if (whatsappData.startsWith('http')) return whatsappData;
    const cleanNumber = whatsappData.replace(/\D/g, '');
    return `https://api.whatsapp.com/send/?phone=${cleanNumber}`;
  };

  // Default values if no data from CMS
  const defaultContacts = {
    phone1: "+7 (499) 113-36-60",
    phone2: "+7 (495) 487-43-53",
    email: "info@mobile-tent.ru",
    telegram: "https://t.me/+79770893996?start=14594990928",
    whatsapp: "https://api.whatsapp.com/send/?phone=79805109568",
    office: {
      name: "Офис г. Красногорск",
      address: "Московская область, г. Красногорск, ул. Молодежная, д. 4",
      map_url: "https://yandex.ru/maps/org/grand_tent/130300118530/?ll=37.269340%2C55.834305&z=17",
      hours: "ПН - ПТ с 09:00 до 18:00",
      appointment: "По предварительной записи"
    },
    production: {
      name: "Производство г. Калуга",
      address: "Калужская область, г. Калуга, ул. Производственная, д. 15",
      map_url: "https://yandex.ru/maps/org/grand_tent/32724517904/?ll=36.261566%2C54.556269&z=17",
      hours: "ПН - СБ с 08:00 до 20:00",
      appointment: "По договоренности"
    }
  };

  // Merge CMS data with defaults
  const contactData = {
    phone1: contacts?.phone1 || defaultContacts.phone1,
    phone2: contacts?.phone2 || defaultContacts.phone2,
    email: contacts?.email || defaultContacts.email,
    telegram: contacts?.telegram || defaultContacts.telegram,
    whatsapp: contacts?.whatsapp || defaultContacts.whatsapp,
    office: {
      name: contacts?.office?.name || defaultContacts.office.name,
      address: contacts?.office?.address || defaultContacts.office.address,
      map_url: contacts?.office?.map_url || defaultContacts.office.map_url,
      hours: contacts?.office?.hours || defaultContacts.office.hours,
      appointment: contacts?.office?.appointment || defaultContacts.office.appointment
    },
    production: {
      name: contacts?.production?.name || defaultContacts.production.name,
      address: contacts?.production?.address || defaultContacts.production.address,
      map_url: contacts?.production?.map_url || defaultContacts.production.map_url,
      hours: contacts?.production?.hours || defaultContacts.production.hours,
      appointment: contacts?.production?.appointment || defaultContacts.production.appointment
    }
  };

  const telegramUrl = formatTelegramUrl(contactData.telegram);
  const whatsappUrl = formatWhatsAppUrl(contactData.whatsapp);

  // Use contacts from props or default values
  const contactInfo = [
    { phone: contactData.phone1 },
    { phone: contactData.phone2 },
  ].filter(contact => contact.phone); // Filter out empty phone numbers

  const officeLocations = {
    krasnogorsk: {
      name: contactData.office.name,
      address: contactData.office.address,
      yandexMap: contactData.office.map_url,
      hours: contactData.office.hours,
      appointment: contactData.office.appointment
    },
    kaluga: {
      name: contactData.production.name,
      address: contactData.production.address,
      yandexMap: contactData.production.map_url,
      hours: contactData.production.hours,
      appointment: contactData.production.appointment
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (catalogRef.current && !catalogRef.current.contains(event.target as Node)) {
        // Your existing click outside logic
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleOpenMap = (url: string) => {
    window.open(url, '_blank');
  };

  const handleCopyAddress = (address: string) => {
    navigator.clipboard.writeText(address);
    alert("Адрес скопирован в буфер обмена!");
  };

  const renderDesktopVersion = () => (
    <div className="hidden md:block">
      <section className="relative h-[923px] rounded-[0px_0px_30px_30px]">
        <div className="relative h-[1558px] overflow-hidden">
          <div className="
              absolute -top-16 md:-top-24 left-0 w-screen
              h-[900px] md:h-[1400px]
              bg-[linear-gradient(180deg,rgba(232,238,248,1)_0%,rgba(232,238,248,0.7)_20%,rgba(232,238,248,0.35)_55%,rgba(232,238,248,0)_100%)]
            " />

          <Image
            src="/reviews1-08-clouds-2.webp"
            alt="Clouds background"
            width={719}
            height={643}
            className="absolute top-[194px] left-0 object-cover"
            priority
          />

          <Image
            src="/reviews1-vecteezy-overgrown-green-grass-generative-ai-generated-24190129-.webp"
            alt="Grass foreground"
            width={318}
            height={306}
            className="absolute bottom-[295px] left-0"
          />

            <div className="relative bottom-[20px] ">
              <div className="relative top-[180px] left-[40px] text-xs text-[#394355] font-raleway whitespace-nowrap">
                <div className="inline-flex items-center justify-center gap-2.5 p-1 bg-[#4f5d801a] rounded">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Raleway',Helvetica] font-normal text-[#394355] text-xs tracking-[0] leading-[normal] whitespace-nowrap">
                    <Link href="/" className="[font-family:'Raleway',Helvetica] font-normal text-[#394355] text-xs tracking-[0] hover:underline">
                      Главная &gt;{"  "}
                    </Link>
                    <span className="font-medium underline">Контакты</span>
                  </div>
                </div>
              </div>
          </div>
        </div>

        {renderDesktopMapSection()}
      </section>
    </div>
  );

  const renderDesktopMapSection = () => (
    <section className="relative w-full max-[1346px] h-[636px] bottom-[1350px] hidden md:block">
      <div className="flex flex-col gap-[22px] relative left-[25px]">
        <div className="text-4xl font-semibold font-raleway">
          <span className="text-[#527dc5]">Контакты </span>
          <span className="text-[#232c42]">компании</span>
        </div>

        <div className="flex flex-col gap-9">
          <div className="flex flex-col gap-3">
            <Badge className="inline-flex relative w-[395px] px-3 py-1.5 rounded-lg bg-gradient-to-br from-[#243057] to-[#374255] text-white text-lg font-raleway">
              Работаем с любыми городами России
            </Badge>
            <p className="text-lg text-[#394355] font-raleway">
              По любым вопросам звоните и пишите по указанным контактам
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-start gap-14 mt-8 relative left-[25px]">
        <div className="flex items-start gap-[18px]">
          <div className="relative w-6 h-6">
            <a href={telegramUrl} target="_blank" rel="noopener noreferrer">
              <Image
                className="absolute top-[3px] left-0.5"
                src="/QA2-group-1.webp"
                alt="Telegram icon"
                width={21}
                height={18}
              />
            </a>
          </div>
          <div className="relative w-6 h-6">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Image
                className="absolute top-0.5 left-0.5"
                src="/QA2-group-2.webp"
                alt="WhatsApp icon"
                width={20}
                height={20}
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {contactInfo.map((contact, index) => (
            <div key={index} className="flex items-center gap-[17px]">
              <div className="flex w-[25px] h-[25px] items-center justify-center rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec]">
                {index === 0 ? (
                  <Image
                    src="/element8-11.webp"
                    alt="Phone icon"
                    width={12}
                    height={12}
                    className="object-contain"
                  />
                ) : (
                  <Image
                    src="/element8-12.webp"
                    alt="Phone icon"
                    width={12}
                    height={12}
                    className="object-contain"
                  />
                )}
              </div>
              <a
                href={`tel:${contact.phone.replace(/\s|\(|\)|-/g, '')}`}
                className="text-sm text-[#394355] font-raleway hover:underline"
              >
                {contact.phone}
              </a>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-[18px]">
          <div className="flex w-[25px] h-[25px] items-center justify-center rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec]">
            <Image src="/element8-13.webp" alt="Email icon" width={12} height={12} />
          </div>
          <div className="flex items-center gap-1">
            <a
              href={`mailto:${contactData.email}`}
              className="text-sm text-[#232c42] font-raleway hover:underline"
            >
              {contactData.email}
            </a>
            <Image src="/element8-14.webp" alt="Copy icon" width={16} height={16} 
              className="cursor-pointer" 
              onClick={() => {
                navigator.clipboard.writeText(contactData.email);
                alert("Email скопирован!");
              }}
            />
          </div>
        </div>
      </div>

      <Card className="w-[560px] p-[26px] relative bottom-[250px] left-[850px] border-0 bg-white rounded-[20px] shadow-md backdrop-blur-lg">
        <CardContent className="p-0">
          <div className="flex flex-col gap-[26px]">
            <h2 className="text-lg font-semibold text-[#394355] font-raleway">
              Будем рады вас видеть в офисе или на производстве
            </h2>
            <div className="flex gap-4">
              <Button 
                onClick={() => handleOpenMap(officeLocations.krasnogorsk.yandexMap)}
                className="h-[49px] px-4 py-[7px] bg-[#527dc5] rounded-[10px] text-white font-bold text-lg font-raleway shadow-md hover:bg-[#3c6cec] transition-colors"
              >
                {officeLocations.krasnogorsk.name}
              </Button>
              <Button 
                onClick={() => handleOpenMap(officeLocations.kaluga.yandexMap)}
                className="h-[49px] px-4 py-[7px] bg-[#527dc5] rounded-[10px] text-white font-bold text-lg font-raleway shadow-md hover:bg-[#3c6cec] transition-colors"
              >
                {officeLocations.kaluga.name}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

  <div className="relative w-full h-[360px] bottom-[90px] bg-[url(/contact1-rectangle-87.webp)] bg-cover bg-center rounded-lg">
        <div className="flex flex-col gap-6 pt-[163px] pl-[26px]">
          <h3 className="text-lg font-semibold text-[#394355] font-raleway">Адрес офиса компании</h3>
          <div className="flex flex-col gap-6">
            <div className="flex items-start">
              <div className="flex w-[25px] h-[25px] items-center justify-center rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec]">
                <Image
                  src="/contact1-group-13.webp"
                  alt="Location"
                  width={11}
                  height={15}
                />
              </div>
              <div className="ml-[10px] flex flex-col gap-3">
                <p className="text-sm text-[#232c42] font-raleway">
                  {officeLocations.krasnogorsk.address}
                </p>
                <div className="flex gap-3">
                  <Button 
                    onClick={() => handleOpenMap(officeLocations.krasnogorsk.yandexMap)}
                    className="h-9 px-4 py-1.5 bg-gradient-to-b from-[#73a8ff] to-[#3c6cec] text-white text-sm font-semibold rounded-lg shadow-sm hover:from-[#6fa7ff] hover:to-[#365fd9] transition-colors"
                  >
                    Открыть в Яндекс Картах
                  </Button>
                  <Button 
                    onClick={() => handleCopyAddress(officeLocations.krasnogorsk.address)}
                    className="h-9 px-4 py-1.5 bg-white border border-[#527dc5] text-[#527dc5] text-sm font-semibold rounded-lg shadow-sm hover:bg-[#f0f5ff] transition-colors"
                  >
                    Скопировать адрес
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex w-[25px] h-[25px] items-center justify-center rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec]">
                <Image
                  src="/element8-8.webp"
                  alt="Clock icon"
                  width={12}
                  height={12}
                />
              </div>
              <div className="ml-[10px]">
                <div className="flex items-start gap-1.5 mb-1">
                  <span className="text-sm font-semibold text-[#232c42] font-raleway">ПН - ПТ</span>
                  <span className="text-sm text-[#232c42] font-raleway">{officeLocations.krasnogorsk.hours}</span>
                </div>
                <p className="text-sm font-semibold text-[#527dc5] font-raleway">
                  {officeLocations.krasnogorsk.appointment}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <Image
          src="/reviews1-08-clouds-2.webp"
          alt="Clouds"
          width={719}
          height={643}
          className="absolute top-[194px] left-0 object-cover"
        />
        <Image
          src="/reviews1-vecteezy-overgrown-green-grass-generative-ai-generated-24190129-.webp"
          alt="Grass"
          width={318}
          height={64}
          className="absolute bottom-0 left-0"
        />
      </div>
    </section>
  );

  const renderMobileVersion = () => (
    <div className="block md:hidden mt-[-250]">
      <section className="relative flex flex-col bg-white rounded-b-2xl">
        <div className="w-full h-64 bg-gradient-to-b from-[#e8eef8] to-transparent" />
        <div className="mt-6 px-4 text-xs text-[#394355] font-raleway">
          <div className="inline-flex items-center gap-2.5 p-1 bg-[#4f5d801a] rounded">
            <div className="[font-family:'Raleway',Helvetica] font-normal text-[#394355] text-xs tracking-[0] leading-[normal] whitespace-nowrap">
              <Link href="/" className="hover:underline">
                Главная &gt;{" "}
              </Link>
              <span className="font-medium underline">Контакты</span>
            </div>
          </div>
        </div>

        <div className="mt-8 px-2">
          {renderMobileMapSection()}
        </div>
      </section>
    </div>
  );

  const renderMobileMapSection = () => (
    <section className="relative w-full pb-8 md:hidden">
      <div className="px-4">
        <div className="flex flex-col gap-4 mb-6 mt-6">
          <div className="text-3xl font-semibold font-raleway text-center">
            <span className="text-[#527dc5]">Контакты </span>
            <span className="text-[#232c42]">компании</span>
          </div>
          <Badge className="inline-flex w-full px-3 py-2 rounded-lg bg-gradient-to-br from-[#243057] to-[#374255] text-white text-base font-raleway justify-center">
            Работаем с любыми городами России
          </Badge>
        </div>
        
        <p className="text-base text-[#394355] font-raleway text-center mx-4 mb-6">
          По любым вопросам звоните и пишите по указанным контактам
        </p>
        
        <Card className="w-full p-5 mx-4 mb-4 border-0 bg-white rounded-[20px] shadow-md backdrop-blur-lg">
          <CardContent className="p-0">
            <div className="flex flex-col gap-5">
              <h2 className="text-base font-semibold text-[#394355] font-raleway text-center">
                Будем рады вас видеть в офисе или на производстве
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                <Button 
                  onClick={() => handleOpenMap(officeLocations.krasnogorsk.yandexMap)}
                  className="flex-1 min-w-[150px] h-12 px-4 py-3 bg-[#527dc5] rounded-[10px] text-white font-bold text-base font-raleway shadow-md hover:bg-[#3c6cec] transition-colors"
                >
                  {officeLocations.krasnogorsk.name}
                </Button>
                <Button 
                  onClick={() => handleOpenMap(officeLocations.kaluga.yandexMap)}
                  className="flex-1 min-w-[150px] h-12 px-4 py-3 bg-[#527dc5] rounded-[10px] text-white font-bold text-base font-raleway shadow-md hover:bg-[#3c6cec] transition-colors"
                >
                  {officeLocations.kaluga.name}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col gap-6 mb-6 px-4">
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-4 flex-1">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex w-8 h-8 items-center justify-center rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec]">
                    {index === 0 ? (
                      <Image
                        src="/element8-11.webp"
                        alt="Phone icon"
                        width={12}
                        height={12}
                        className="object-contain"
                      />
                    ) : (
                      <Image
                        src="/element8-12.webp"
                        alt="Phone icon"
                        width={12}
                        height={12}
                        className="object-contain"
                      />
                    )}
                  </div>
                  <a
                    href={`tel:${contact.phone.replace(/\s|\(|\)|-/g, '')}`}
                    className="text-base text-[#394355] font-raleway hover:underline"
                  >
                    {contact.phone}
                  </a>
                </div>
              ))}

              <div className="flex items-center gap-3">
                <div className="flex w-8 h-8 items-center justify-center rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec]">
                  <Image src="/element8-13.webp" alt="Email icon" width={12} height={12} />
                </div>
                <div className="flex items-center gap-1">
                  <a
                    href={`mailto:${contactData.email}`}
                    className="text-base text-[#232c42] font-raleway hover:underline"
                  >
                    {contactData.email}
                  </a>
                  <Image src="/element8-14.webp" alt="Copy icon" width={16} height={16} 
                    className="cursor-pointer"
                    onClick={() => {
                      navigator.clipboard.writeText(contactData.email);
                      alert("Email скопирован!");
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-[18px] ml-2">
              <div className="relative w-6 h-6">
                <a href={telegramUrl} target="_blank" rel="noopener noreferrer">
                  <Image
                    className="absolute top-[3px] left-0.5"
                    src="/QA2-group-1.webp"
                    alt="Telegram icon"
                    width={21}
                    height={18}
                  />
                </a>
              </div>

              <div className="relative w-6 h-6">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Image
                    className="absolute top-0.5 left-0.5"
                    src="/QA2-group-2.webp"
                    alt="WhatsApp icon"
                    width={20}
                    height={20}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full h-72 mx-4 bg-[url('/rectangle-65.webp')] bg-cover bg-center rounded-lg mb-6" />
      </div>

      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <Image
          src="/reviews1-08-clouds-2.webp"
          alt="Clouds"
          width={400}
          height={343}
          className="absolute top-40 left-0 object-cover opacity-70"
        />
        <Image
          src="/reviews1-vecteezy-overgrown-green-grass-generative-ai-generated-24190129-.webp"
          alt="Grass"
          width={200}
          height={40}
          className="absolute bottom-0 left-0"
        />
      </div>
      
      <div className="mx-4 mb-6 bg-white p-4 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-[#394355] font-raleway mb-3">Адрес офиса компании</h3>

        <div className="flex items-start mb-4">
          <div className="flex w-6 h-6 items-center justify-center rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] mt-1 mr-2">
            <Image
              src="/element8-7.webp"
              alt="Location"
              width={11}
              height={15}
            />
          </div>
          <div className="flex-1">
            <p className="text-sm text-[#232c42] font-raleway mb-2">
              {officeLocations.krasnogorsk.address}
            </p>
            <div className="flex flex-col gap-2">
              <Button 
                onClick={() => handleOpenMap(officeLocations.krasnogorsk.yandexMap)}
                className="h-9 px-4 py-1.5 bg-gradient-to-b from-[#73a8ff] to-[#3c6cec] text-white text-sm font-semibold rounded-lg shadow-sm hover:from-[#6fa7ff] hover:to-[#365fd9] transition-colors w-full"
              >
                Открыть в Яндекс Картах
              </Button>
              <Button 
                onClick={() => handleCopyAddress(officeLocations.krasnogorsk.address)}
                className="h-9 px-4 py-1.5 bg-white border border-[#527dc5] text-[#527dc5] text-sm font-semibold rounded-lg shadow-sm hover:bg-[#f0f5ff] transition-colors w-full"
              >
                Скопировать адрес
              </Button>
            </div>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex w-6 h-6 items-center justify-center rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] mt-1 mr-2">
            <Image
              src="/element8-8.webp"
              alt="Clock icon"
              width={12}
              height={12}
            />
          </div>
          <div className="flex-1">
            <div className="flex flex-col mb-1">
              <span className="text-sm font-semibold text-[#232c42] font-raleway">ПН - ПТ</span>
              <span className="text-sm text-[#232c42] font-raleway">{officeLocations.krasnogorsk.hours}</span>
            </div>
            <p className="text-sm font-semibold text-[#527dc5] font-raleway">
              {officeLocations.krasnogorsk.appointment}
            </p>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="relative w-full max-w-[1440px] mx-auto bg-white">
      {renderDesktopVersion()}
      {renderMobileVersion()}
    </div>
  );
};