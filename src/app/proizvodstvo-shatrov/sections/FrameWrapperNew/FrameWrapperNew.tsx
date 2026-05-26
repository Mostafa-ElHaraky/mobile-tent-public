'use client';

import { ReactElement } from 'react';
import Image from 'next/image';
import { Button } from '../../../../components/ui/button';
import { Card, CardContent } from '../../../../components/ui/card';
import { Badge } from '../../../../components/ui/badge';

// Define the types for Bitrix contacts data
interface OfficeLocation {
  name: string;
  address: string;
  map_url: string;
  hours: string;
  appointment: string;
}

interface ContactsData {
  phone1: string;
  phone2: string;
  email: string;
  telegram: string;
  whatsapp: string;
  office: OfficeLocation;
  production: OfficeLocation;
}

// Default contact data as fallback
const defaultContacts: ContactsData = {
  phone1: '+7 (499) 113-36-60',
  phone2: '+7 (495) 487-43-53',
  email: 'info@mobile-tent.ru',
  telegram: 'https://t.me/+79770893996?start=14594990928',
  whatsapp: 'https://api.whatsapp.com/send/?phone=79805109568',
  office: {
    name: 'Офис г. Красногорск',
    address: 'Московская область, г. Красногорск, ул. Молодежная. д. 4',
    map_url: 'https://yandex.ru/maps/org/grand_tent/130300118530/?ll=37.269340%2C55.834305&z=17',
    hours: 'ПН - ПТ с 09:00 - 22:00 МСК',
    appointment: 'По предварительной записи',
  },
  production: {
    name: 'Производство г. Калуга',
    address: 'Калужская область, г. Калуга, ул. Производственная, д. 15',
    map_url: 'https://yandex.ru/maps/org/grand_tent/32724517904/?ll=36.261566%2C54.556269&z=17',
    hours: 'ПН - СБ с 08:00 - 20:00 МСК',
    appointment: 'По договоренности',
  }
};

// Create contact array from Bitrix data
const getContactInfo = (contacts: ContactsData) => [
  { phone: contacts.phone1 },
  { phone: contacts.phone2 }
];

// Create office locations from Bitrix data
const getOfficeLocations = (contacts: ContactsData) => ({
  krasnogorsk: {
    name: contacts.office.name,
    address: contacts.office.address,
    yandexMap: contacts.office.map_url,
    hours: contacts.office.hours,
    appointment: contacts.office.appointment,
    appointmentHref: '/proizvodstvo-shatrov',
  },
  kaluga: {
    name: contacts.production.name,
    address: contacts.production.address,
    yandexMap: contacts.production.map_url,
    hours: contacts.production.hours,
    appointment: contacts.production.appointment,
    appointmentHref: '/proizvodstvo-shatrov',
  }
});

// Props interface
interface FrameWrapperNewProps {
  contacts?: ContactsData;
}

export const FrameWrapperNew = ({ contacts = defaultContacts }: FrameWrapperNewProps): ReactElement => {
  // Use provided contacts or default
  const contactsData = contacts || defaultContacts;
  
  // Generate dynamic data
  const contactInfo = getContactInfo(contactsData);
  const officeLocations = getOfficeLocations(contactsData);

  const handleOpenMap = (url: string) => window.open(url, '_blank');

  const handleCopyAddress = (address: string) => {
    navigator.clipboard.writeText(address);
    alert('Адрес скопирован в буфер обмена!');
  };

  return (
    <section className="relative w-full bg-white">
      {/* ========== DESKTOP (md+) ========== */}
      <div className="hidden md:block">
        <div className="w-full max-w-[900px] mx-auto my-8 relative right-[250px]">
          <div className="px-12 mt-8">
            <div className="flex flex-col gap-[22px]">
              <h5 className="text-4xl font-semibold font-raleway">
                <span className="text-[#527dc5]">Контакты </span>
                <span className="text-[#232c42]">компании</span>
              </h5>

              <div className="flex flex-col gap-9">
<div className="flex flex-col gap-3">
  <Badge className="inline-flex max-w-fit px-3 py-1.5 rounded-lg bg-gradient-to-br from-[#243057] to-[#374255] text-white text-lg font-raleway">
    Работаем с любыми городами России
  </Badge>
  <p className="text-lg text-[#394355] font-raleway">
    По любым вопросам звоните и пишите по указанным контактам
  </p>
</div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="flex items-start gap-14 mt-8">
              {/* Messengers */}
              <div className="flex items-start gap-[18px]">
                <div className="relative w-6 h-6">
                  <a
                    href={contactsData.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className="absolute top-[3px] left-0.5"
                      src="/group.webp"
                      alt="Telegram icon"
                      width={21}
                      height={18}
                      loading="lazy"
                    />
                  </a>
                </div>
                <div className="relative w-6 h-6">
                  <a
                    href={contactsData.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className="absolute top-0.5 left-0.5"
                      src="/group-1.webp"
                      alt="WhatsApp icon"
                      width={20}
                      height={20}
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>

              {/* Phones */}
              <div className="flex flex-col gap-3">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center gap-[17px]">
                    <div className="flex w-[25px] h-[25px] items-center justify-center rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec]">
                      <Image
                        src={`/contact1-group-${index === 0 ? 9 : 10}.webp`}
                        alt="Phone icon"
                        width={12}
                        height={12}
                        className="object-contain"
                        loading="lazy"
                      />
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

              {/* Email */}
              <div className="flex items-center gap-[18px]">
                <div className="flex w-[25px] h-[25px] items-center justify-center rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec]">
                  <Image
                    src="/contact1-group-11.webp"
                    alt="Email icon"
                    width={15}
                    height={11}
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center gap-1">
                  <a
                    href={`mailto:${contactsData.email}`}
                    className="text-sm text-[#232c42] font-raleway hover:underline"
                  >
                    {contactsData.email}
                  </a>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(contactsData.email);
                      alert('Email скопирован в буфер обмена!');
                    }}
                    className="p-1 hover:bg-gray-100 rounded"
                    title="Скопировать email"
                  >
                    <Image
                      src="/contact1-group-12.webp"
                      alt="Copy icon"
                      width={16}
                      height={16}
                      loading="lazy"
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Office Info Card */}
            <div className="relative bottom-[230px] left-[750px]">
              <Card className="w-[560px] p-[26px] border-0 bg-white rounded-[20px] shadow-md backdrop-blur-lg">
                <CardContent className="p-0">
                  <div className="flex flex-col gap-[26px]">
                    <h2 className="text-lg font-semibold text-[#394355] font-raleway">
                      Будем рады вас видеть в офисе или на производстве
                    </h2>
                    <div className="flex gap-4">
                      <Button
                        onClick={() =>
                          handleOpenMap(officeLocations.krasnogorsk.yandexMap)
                        }
                        className="h-[49px] px-4 py-[7px] bg-[#527dc5] rounded-[10px] text-white font-bold text-lg font-raleway shadow-md hover:bg-[#3c6cec] transition-colors"
                      >
                        {officeLocations.krasnogorsk.name}
                      </Button>
                      <Button
                        onClick={() =>
                          handleOpenMap(officeLocations.kaluga.yandexMap)
                        }
                        className="h-[49px] px-4 py-[7px] bg-[#527dc5] rounded-[10px] text-white font-bold text-lg font-raleway shadow-md hover:bg-[#3c6cec] transition-colors"
                      >
                        {officeLocations.kaluga.name}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Address: Калуга */}
            <Card className="mt-6 border-0 bg-white rounded-[20px] shadow-md backdrop-blur-lg relative bottom-[90px]">
              <CardContent className="p-5">
                <h3 className="text-lg font-semibold text-[#394355] font-raleway mb-4">
                  {officeLocations.kaluga.name}
                </h3>
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex w-[25px] h-[25px] items-center justify-center rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec]">
                    <Image
                      src="/contact1-group-13.webp"
                      alt="Location"
                      width={11}
                      height={15}
                      loading="lazy"
                    />
                  </div>
                  <p className="text-sm text-[#232c42] font-raleway">
                    {officeLocations.kaluga.address}
                  </p>
                </div>
                <div className="flex gap-3 mb-4">
                  <Button
                    onClick={() => handleOpenMap(officeLocations.kaluga.yandexMap)}
                    className="h-9 px-4 py-1.5 bg-gradient-to-b from-[#73a8ff] to-[#3c6cec] text-white text-sm font-semibold rounded-lg shadow-sm hover:from-[#6fa7ff] hover:to-[#365fd9] transition-colors"
                  >
                    Открыть в Яндекс Картах
                  </Button>
                  <Button
                    onClick={() => handleCopyAddress(officeLocations.kaluga.address)}
                    className="h-9 px-4 py-1.5 bg-white border border-[#527dc5] text-[#527dc5] text-sm font-semibold rounded-lg shadow-sm hover:bg-[#f0f5ff] transition-colors"
                  >
                    Скопировать адрес
                  </Button>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex w-[25px] h-[25px] items-center justify-center rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec]">
                    <div className="w-[13px] h-[13px] bg-[url(/group-14.webp)] bg-cover" />
                  </div>
                  <div className="ml-[2px]">
                    <div className="flex items-start gap-1.5 mb-1">
                      <span className="text-sm font-semibold text-[#232c42] font-raleway">
                        {officeLocations.kaluga.hours.split(' ')[0]}
                      </span>
                      <span className="text-sm text-[#232c42] font-raleway">
                        {officeLocations.kaluga.hours.substring(officeLocations.kaluga.hours.indexOf('с'))}
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-[#527dc5] underline font-raleway">
                      {officeLocations.kaluga.appointment}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map / Address: Красногорск */}
          <div className="relative w-300 h-[360px] bottom-[50px] left-[20px] bg-[url(/contact1-rectangle-87.webp)] bg-cover bg-center rounded-lg">
            <div className="flex flex-col gap-6 pt-[163px] pl-[26px]">
              <h3 className="text-lg font-semibold text-[#394355] font-raleway">
                Адрес офиса компании
              </h3>
              <div className="flex flex-col gap-6">
                {/* Address with buttons */}
                <div className="flex items-start">
                  <div className="flex w-[25px] h-[25px] items-center justify-center rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec]">
                    <Image
                      src="/contact1-group-13.webp"
                      alt="Location"
                      width={11}
                      height={15}
                      loading="lazy"
                    />
                  </div>
                  <div className="ml-[10px] flex flex-col gap-3">
                    <p className="text-sm text-[#232c42] font-raleway">
                      {officeLocations.krasnogorsk.address}
                    </p>
                    <div className="flex gap-3">
                      <Button
                        onClick={() =>
                          handleOpenMap(officeLocations.krasnogorsk.yandexMap)
                        }
                        className="h-9 px-4 py-1.5 bg-gradient-to-b from-[#73a8ff] to-[#3c6cec] text-white text-sm font-semibold rounded-lg shadow-sm hover:from-[#6fa7ff] hover:to-[#365fd9] transition-colors"
                      >
                        Открыть в Яндекс Картах
                      </Button>
                      <Button
                        onClick={() =>
                          handleCopyAddress(officeLocations.krasnogorsk.address)
                        }
                        className="h-9 px-4 py-1.5 bg-white border border-[#527dc5] text-[#527dc5] text-sm font-semibold rounded-lg shadow-sm hover:bg-[#f0f5ff] transition-colors"
                      >
                        Скопировать адрес
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Work Hours */}
                <div className="flex items-start">
                  <div className="flex w-[25px] h-[25px] items-center justify-center rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec]">
                    <div className="w-[13px] h-[13px] bg-[url(/group-14.webp)] bg-cover" />
                  </div>
                  <div className="ml-[10px]">
                    <div className="flex items-start gap-1.5 mb-1">
                      <span className="text-sm font-semibold text-[#232c42] font-raleway">
                        {officeLocations.krasnogorsk.hours.split(' ')[0]}
                      </span>
                      <span className="text-sm text-[#232c42] font-raleway">
                        {officeLocations.krasnogorsk.hours.substring(officeLocations.krasnogorsk.hours.indexOf('с'))}
                      </span>
                    </div>
                    <a
                      href={officeLocations.krasnogorsk.appointmentHref}
                      className="text-sm font-semibold text-[#527dc5] underline font-raleway"
                    >
                      {officeLocations.krasnogorsk.appointment}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Desktop background images */}
          <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
            <Image
              src="/contact1-08-clouds-2.webp"
              alt="Clouds"
              width={719}
              height={643}
              className="absolute top-[194px] left-0 object-cover"
              loading="lazy"
            />
            <Image
              src="/contact1-vecteezy-overgrown-green-grass-generative-ai-generated-24190129-.webp"
              alt="Grass"
              width={318}
              height={64}
              className="absolute bottom-0 left-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* ========== MOBILE (<md) ========== */}
      <div className="block md:hidden">
        <div className="px-4 pt-8">
          <h5 className="text-3xl font-semibold font-raleway text-center">
            <span className="text-[#527dc5]">Контакты </span>
            <span className="text-[#232c42]">компании</span>
          </h5>
          <div className="mt-4 flex justify-center">
            <Badge className=" px-3 py-2 rounded-lg bg-gradient-to-br from-[#243057] to-[#374255] text-white text-sm font-raleway">
              Работаем с любыми городами России
            </Badge>
          </div>
          <p className="mt-3 text-center text-[#394355] font-raleway">
            По любым вопросам звоните и пишите по указанным контактам
          </p>
        </div>

        {/* Messengers + phones + email */}
        <div className="px-4 mt-6 space-y-5">
          {/* Messengers */}
          <div className="flex items-center justify-center gap-4">
            <a
              href={contactsData.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="relative h-8 w-8"
              aria-label="Telegram"
            >
              <Image src="/group.webp" loading="lazy" alt="Telegram" fill className="object-contain" />
            </a>
            <a
              href={contactsData.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="relative h-8 w-8"
              aria-label="WhatsApp"
            >
              <Image src="/group-1.webp" loading="lazy" alt="WhatsApp" fill className="object-contain" />
            </a>
          </div>

          {/* Phones */}
          <div className="space-y-3">
            {contactInfo.map((c, i) => (
              <a
                key={i}
                href={`tel:${c.phone.replace(/\s|\(|\)|-/g, '')}`}
                className="flex items-center gap-3"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec]">
                  <Image
                    src={`/contact1-group-${i === 0 ? 9 : 10}.webp`}
                    alt="Phone"
                    width={12}
                    height={12}
                    loading="lazy"
                  />
                </span>
                <span className="text-base text-[#394355] font-raleway underline-offset-2 hover:underline">
                  {c.phone}
                </span>
              </a>
            ))}
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec]">
              <Image src="/contact1-group-11.webp" loading="lazy" alt="Email" width={15} height={11} />
            </span>
            <div className="flex items-center gap-2">
              <a
                href={`mailto:${contactsData.email}`}
                className="text-base text-[#232c42] font-raleway underline-offset-2 hover:underline"
              >
                {contactsData.email}
              </a>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(contactsData.email);
                  alert('Email скопирован в буфер обмена!');
                }}
                className="p-1 hover:bg-gray-100 rounded"
                title="Скопировать email"
              >
                <Image
                  src="/contact1-group-12.webp"
                  alt="Copy email"
                  width={16}
                  height={16}
                  loading="lazy"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Visit card */}
        <div className="px-4 mt-6">
          <Card className="border-0 bg-white rounded-2xl shadow-md">
            <CardContent className="p-5">
              <h2 className="text-base font-semibold text-[#394355] font-raleway text-center">
                Будем рады вас видеть в офисе или на производстве
              </h2>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Button
                  onClick={() => handleOpenMap(officeLocations.krasnogorsk.yandexMap)}
                  className="h-12 rounded-[10px] bg-[#527dc5] text-white font-bold"
                >
                  {officeLocations.krasnogorsk.name}
                </Button>
                <Button
                  onClick={() => handleOpenMap(officeLocations.kaluga.yandexMap)}
                  className="h-12 rounded-[10px] bg-[#527dc5] text-white font-bold"
                >
                  {officeLocations.kaluga.name}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Address block: Красногорск */}
        <div className="px-4 mt-6">
          <div className="relative h-56 w-full rounded-lg bg-[url('/contact1-rectangle-87.webp')] bg-cover bg-center" />
          <div className="mt-4 rounded-lg bg-white p-4 shadow-sm">
            <h3 className="text-lg font-semibold text-[#394355] font-raleway">
              Адрес офиса компании
            </h3>

            <div className="mt-3 flex items-start gap-3">
              <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec]">
                <Image src="/contact1-group-13.webp" loading="lazy" alt="Location" width={11} height={15} />
              </span>
              <p className="flex-1 text-sm text-[#232c42] font-raleway">
                {officeLocations.krasnogorsk.address}
              </p>
            </div>

            <div className="mt-3 grid grid-cols-1 gap-2">
              <Button
                onClick={() => handleOpenMap(officeLocations.krasnogorsk.yandexMap)}
                className="h-10 rounded-lg bg-gradient-to-b from-[#73a8ff] to-[#3c6cec] text-white text-sm font-semibold"
              >
                Открыть в Яндекс Картах
              </Button>
              <Button
                onClick={() => handleCopyAddress(officeLocations.krasnogorsk.address)}
                className="h-10 rounded-lg border border-[#527dc5] bg-white text-[#527dc5] text-sm font-semibold"
                variant="outline"
              >
                Скопировать адрес
              </Button>
            </div>

            <div className="mt-3 flex items-start gap-3">
              <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec]">
                <span className="block h-3 w-3 bg-[url('/group-14.webp')] bg-cover" />
              </span>
              <div>
                <div className="text-sm font-raleway">
                  <span className="font-semibold text-[#232c42]">{officeLocations.krasnogorsk.hours.split(' ')[0]}</span>{' '}
                  <span className="text-[#232c42]">{officeLocations.krasnogorsk.hours.substring(officeLocations.krasnogorsk.hours.indexOf('с'))}</span>
                </div>
                <a
                  href={officeLocations.krasnogorsk.appointmentHref}
                  className="text-sm font-semibold text-[#527dc5] underline font-raleway"
                >
                  {officeLocations.krasnogorsk.appointment}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Address block: Калуга */}
        <div className="px-4 mt-6">
          <Card className="border-0 bg-white rounded-2xl shadow-md">
            <CardContent className="p-5">
              <h3 className="text-lg font-semibold text-[#394355] font-raleway">
                {officeLocations.kaluga.name}
              </h3>

              <div className="mt-3 flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec]">
                  <Image src="/contact1-group-13.webp" loading="lazy" alt="Location" width={11} height={15} />
                </span>
                <p className="flex-1 text-sm text-[#232c42] font-raleway">
                  {officeLocations.kaluga.address}
                </p>
              </div>

              <div className="mt-3 grid grid-cols-1 gap-2">
                <Button
                  onClick={() => handleOpenMap(officeLocations.kaluga.yandexMap)}
                  className="h-10 rounded-lg bg-gradient-to-b from-[#73a8ff] to-[#3c6cec] text-white text-sm font-semibold"
                >
                  Открыть в Яндекс Картах
                </Button>
                <Button
                  onClick={() => handleCopyAddress(officeLocations.kaluga.address)}
                  className="h-10 rounded-lg border border-[#527dc5] bg-white text-[#527dc5] text-sm font-semibold"
                  variant="outline"
                >
                  Скопировать адрес
                </Button>
              </div>

              <div className="mt-3 flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec]">
                  <span className="block h-3 w-3 bg-[url('/group-14.webp')] bg-cover" />
                </span>
                <div>
                  <div className="text-sm font-raleway">
                    <span className="font-semibold text-[#232c42]">{officeLocations.kaluga.hours.split(' ')[0]}</span>{' '}
                    <span className="text-[#232c42]">{officeLocations.kaluga.hours.substring(officeLocations.kaluga.hours.indexOf('с'))}</span>
                  </div>
                  <span className="text-sm font-semibold text-[#527dc5] underline font-raleway">
                    {officeLocations.kaluga.appointment}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mobile background images */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <Image
            src="/contact1-08-clouds-2.webp"
            alt="Clouds"
            width={400}
            height={343}
            className="absolute left-0 top-24 opacity-70"
            loading="lazy"
          />
          <Image
            src="/contact1-vecteezy-overgrown-green-grass-generative-ai-generated-24190129-.webp"
            alt="Grass"
            width={200}
            height={40}
            className="absolute bottom-0 left-0"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};