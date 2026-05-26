'use client';

import { ClockIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { ReactElement, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Callmeback from "./Callmeback";
import Consultaionfor3d from '@/components/ui/Consultaionfor3d';

const footerSections = [
  {
    title: "Клиентам",
    links: [
      { text: "Отзывы", path: "/reviews" },
      { text: "Готовые решения", path: "/gallery" },
      { text: "Вопросы и ответы", path: "/faq" },
      { text: "Контакты", path: "/contacts" },
      { text: "3D решения", path: "/3d-gallery" }
    ],
  },
  {
    title: "Каталог",
    links: [
      { text: "Шатры", path: "/shatry" },
      { text: "Тентовые ангары", path: "/shatry-i-navesy/tentovye-angary" },
      { text: "Оснащение", path: "/services" },
      { text: "Калькулятор", path: "/kalkulyator-angara" },
      { text: "Карта сайта", path: "/sitemap" }


    ],
  },
  {
    title: "О компании",
    links: [
      { text: "Компания", path: "/about" },
      { text: "Команда", path: "/comanda" },
      { text: "Производство", path: "/proizvodstvo-shatrov" },
    ],
  },
  {
    title: "Правовые документы",
    links: [
      { text: "Политика конфиденциальности", path: "/privacy-policy" },
      { text: "Пользовательское соглашение", path: "/user-agreement" },
      { text: "Согласие на рассылку", path: "/advertising-consent" },
      { text: "Политика cookie", path: "/cookie-policy" },
      { text: "Согласие на обработку персональных данных", path: "/privacy-consent" }

    ],
  },
];

export const Footer = (): ReactElement => {
  const [showCallback, setShowCallback] = useState(false);
  const [show3dModal, setShow3dModal] = useState(false);

  return (
    <>
      {/* Desktop Footer (unchanged) */}
      <div className="hidden desktop:block">
          <div className="w-full bg-[#171C29]">
         <footer className="relative max-w-[1440px] h-[346px] mx-auto font-['Raleway',Helvetica] overflow-hidden">
          {/* Company Logo and Description */}
          <div className="flex flex-col w-[127px] h-[55px] items-start gap-3 absolute top-[42px] left-12">
            <Link href="/">
              <Image
                className="relative cursor-pointer"
                src="/white.png"
                alt="Mobile tent ru logo"
                width={150}
                height={20}
                loading="lazy"
              />
            </Link>
            <p className="relative w-[156px] mb-[-9.16px] font-normal text-white text-[10px] tracking-[0] leading-normal">
              Производство и продажа тентовых конструкций и шатров по всей России и СНГ
            </p>
          </div>

          {/* Navigation Sections */}
          <div className="inline-flex items-start gap-[46px] absolute top-10 left-[269px]">
            {footerSections.map((section, index) => (
              <div key={index} className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
                <h3 className="relative w-fit mt-[-1.00px] font-semibold text-white text-base whitespace-nowrap tracking-[0] leading-normal">
                  {section.title}
                </h3>
                <nav className="inline-flex flex-col items-start gap-3.5 relative flex-[0_0_auto]">
                  {section.links.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      href={link.path}
                      className="relative w-fit font-normal text-white text-sm whitespace-nowrap tracking-[0] leading-normal hover:text-[#b1ceff] transition-colors"
                    >
                      {link.text}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}

            {/* Social Media Section */}
            <div className="relative w-[138px] top-[150px] h-16">
              <div className="inline-flex flex-col items-start gap-6 absolute top-0 left-0">
              </div>
              <div className="inline-flex items-center gap-3 absolute top-[37px] left-0">
                <a href="https://rutube.ru/channel/32587007/" target="_blank" rel="noopener noreferrer" className="relative w-[27px] h-[27px]">
                  <div className="relative w-[25px] h-[18px] top-[5px] left-px">
                    <div className="relative h-[18px]">
                      <div className="absolute w-3 h-3 top-[3px] left-[7px] bg-white rounded-[6.21px]" />
                      <Image
                        className="absolute w-[25px] h-[18px] top-0 left-0"
                        alt="Vector"
                        src="/element9-vector.webp"
                        width={25}
                        height={18}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </a>
                <a href="https://vk.com/club229768367?from=groups" target="_blank" rel="noopener noreferrer" className="relative w-[25px] h-[25px]">
                  <Image
                    className="absolute w-[25px] h-3.5 top-[5px] left-0"
                    alt="Group"
                    src="/element9-group.webp"
                    width={25}
                    height={14}
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Contact and CTA Section */}
          <div className="absolute w-[187px] h-[161px] top-[42px] left-[960px]">
            {/* Working Hours */}
            <div className="inline-flex items-start gap-[17px] absolute top-0 left-0">
              <div className="flex w-[25px] h-[25px] items-center justify-center gap-2.5 p-1.5 relative rounded-[50px] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
                <ClockIcon className="w-[13px] h-[13px] text-white" />
              </div>
              <div className="inline-flex flex-col items-start gap-1.5 relative flex-[0_0_auto]">
                <p className="relative w-fit mt-[-1.00px] font-normal text-white text-sm whitespace-nowrap tracking-[0] leading-normal">
                  с 09:00 - 22:00 МСК
                </p>
                <p className="relative w-fit font-semibold text-white text-sm whitespace-nowrap tracking-[0] leading-normal">
                  с ПН - ПТ
                </p>
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="flex w-[184px] items-center justify-between absolute top-[59px] left-0">
              <Button
                variant="ghost"
                className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] rounded"
              >
                <span className="relative w-fit mt-[-1.00px] font-semibold text-[#b1ceff] text-sm whitespace-nowrap tracking-[0] leading-normal">
                  Написать
                </span>
              </Button>
<div className="inline-flex items-start gap-[15px] relative flex-[0_0_auto]">
  <a href="https://t.me/+79857604220" target="_blank" rel="noopener noreferrer" className="relative w-6 h-6">
    <Image
      className="absolute w-[21px] h-[18px] top-[3px] left-0.5"
      alt="Telegram"
      src="/element9-group-1.webp"
      width={21}
      height={18}
      loading="lazy"
    />
  </a>
  <a href="https://max.ru/u/f9LHodD0cOK_6DAtIeOn3T51Xpzrkg2i4RB2ZEjtVfXOwvURhiW6gtGMLrA" target="_blank" rel="noopener noreferrer" className="relative w-6 h-6">
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      xmlSpace="preserve" 
      viewBox="0 0 1000 1000"
      className="absolute w-5 h-5 top-0.5 left-0.5"
    >
      <defs>
        <linearGradient id="b">
          <stop offset="0" stopColor="#00f"/>
          <stop offset="1" stopOpacity="0"/>
          <stop offset="1" stopOpacity="0"/>
        </linearGradient>
        <linearGradient id="a">
          <stop offset="0" stopColor="#4cf"/>
          <stop offset=".662" stopColor="#53e"/>
          <stop offset="1" stopColor="#93d"/>
        </linearGradient>
        <linearGradient id="c" x1="117.847" x2="1000" y1="760.536" y2="500" gradientUnits="userSpaceOnUse" href="#a"/>
        <radialGradient id="d" cx="-87.392" cy="1166.116" r="500" fx="-87.392" fy="1166.116" gradientTransform="rotate(51.356 1551.478 559.3)scale(2.42703433 1)" gradientUnits="userSpaceOnUse" href="#b"/>
      </defs>
      <rect width="1000" height="1000" fill="url(#c)" ry="249.681"/>
      <rect width="1000" height="1000" fill="url(#d)" ry="249.681"/>
      <path fill="#fff" fillRule="evenodd" d="M508.211 878.328c-75.007 0-109.864-10.95-170.453-54.75-38.325 49.275-159.686 87.783-164.979 21.9 0-49.456-10.95-91.248-23.36-136.873-14.782-56.21-31.572-118.807-31.572-209.508 0-216.626 177.754-379.597 388.357-379.597 210.785 0 375.947 171.001 375.947 381.604.707 207.346-166.595 376.118-373.94 377.224m3.103-571.585c-102.564-5.292-182.499 65.7-200.201 177.024-14.6 92.162 11.315 204.398 33.397 210.238 10.585 2.555 37.23-18.98 53.837-35.587a189.8 189.8 0 0 0 92.71 33.032c106.273 5.112 197.08-75.794 204.215-181.95 4.154-106.382-77.67-196.486-183.958-202.574Z" clipRule="evenodd"/>
    </svg>
  </a>
</div>
            </div>

            {/* CTA Button */}
<div className="relative w-full h-[53px] top-[110px]">
  <Button
    onClick={() => setShow3dModal(true)}
    className="absolute w-[187px] h-[53px] left-1/2 transform -translate-x-1/2 rounded-2xl border-[none] shadow-[0px_15px_20px_#1f7cfe24] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]"
  >
    <span className="absolute w-[167px] top-1 left-2.5 font-semibold text-white text-sm text-center tracking-[0] leading-normal">
      Рассчитать стоимость <br /> под нужный размер
    </span>
  </Button>
</div>


          </div>

          {/* PhoneIcon and Email Section */}
          <div className="absolute w-[199px] h-[148px] top-[42px] left-[1193px]">
            <div className="inline-flex flex-col items-start absolute top-0 left-0">
              <div className="inline-flex items-start gap-[17px] relative flex-[0_0_auto]">
                <div className="flex w-[25px] h-[25px] items-center justify-center gap-2.5 p-1.5 relative rounded-[50px] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
                  <PhoneIcon className="w-3 h-3 text-white" />
                </div>
                <div className="inline-flex flex-col items-start gap-1.5 relative flex-[0_0_auto]">
                  <a href="tel:+7 (495) 760-42-20" className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                    <span className="relative w-fit mt-[-1.00px] font-normal text-white text-sm tracking-[0] leading-normal whitespace-nowrap">
                      +7 (495) 760-42-20
                    </span>
                  </a>
                </div>
              </div>
              <div className="inline-flex items-center gap-[17px] relative flex-[0_0_auto] -mt-2">
                <div className="relative w-[25px] h-[25px] rounded-[50px]" />
                <a href="tel:+7 (985) 760-42-20" className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                  <span className="relative w-fit mt-[-1.00px] font-normal text-white text-sm tracking-[0] leading-normal whitespace-nowrap">
                    +7 (985) 760-42-20
                  </span>
                </a>
              </div>
            </div>

            {/* Call Back Button */}
            <Button
              onClick={() => setShowCallback(true)}
              variant="ghost"
              className="inline-flex items-center gap-2.5 p-1.5 absolute top-[59px] left-[42px] bg-[#4f5d8024] rounded"
            >
              <span className="relative w-fit mt-[-1.00px] font-semibold text-[#b1ceff] text-sm underline whitespace-nowrap tracking-[0] leading-normal">
                Перезвоните мне
              </span>
            </Button>

            {/* Email */}
            <div className="inline-flex items-center gap-[18px] absolute top-[123px] left-0">
              <div className="flex w-[25px] h-[25px] items-center justify-center gap-2.5 p-1.5 relative rounded-[50px] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
                <MailIcon className="w-[15px] h-[15px] text-white" />
              </div>
              <a href="mailto:info@mobile-tent.ru" className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                <span className="relative w-fit font-normal text-white text-sm tracking-[0] leading-normal whitespace-nowrap">
                  info@mobile-tent.ru
                </span>
                <div className="relative w-5 h-5">
                  <Image
                    className="absolute w-4 h-4 top-0.5 left-0.5"
                    alt="Group"
                    src="/element9-group-6.webp"
                    width={16}
                    height={16}
                    quality={90}
                    loading="lazy"
                    style={{ minWidth: '16px', objectFit: 'contain' }}
                  />
                </div>
              </a>
            </div>
          </div>

          {/* Footer Bottom Section */}
          <div className="absolute w-full h-[46px] top-[300px] left-0">
            <div className="relative w-full h-[46px] bg-[#4f5d8008]">
              <p className="absolute top-[11px] left-12 font-normal text-[#4f5d8094] text-[10px] tracking-[0] leading-normal">
                Предложения на сайте не является публичной офертой.
                <br />
                Цена может быть скорректирована в связи со сменой рыночных цен
              </p>
              <p className="absolute top-[21px] left-[462px] font-normal text-[#4f5d8094] text-[10px] tracking-[0] leading-normal whitespace-nowrap">
                © ООО mobile-tent
              </p>
              <Link href="/privacy-policy" className="absolute top-[21px] left-[960px] font-normal text-[#4f5d8094] text-[10px] whitespace-nowrap tracking-[0] leading-normal hover:text-[#b1ceff] transition-colors">
                Политика конфиденциальности
              </Link>
              <Link href="/user-agreement" className="absolute top-[21px] left-[1193px] font-normal text-[#4f5d8094] text-[10px] whitespace-nowrap tracking-[0] leading-normal hover:text-[#b1ceff] transition-colors">
                Пользовательское соглашение
              </Link>
            </div>
          </div>
        </footer>
          </div>
      </div>









{/* Mobile/Tablet Footer */}
      <footer className="block desktop:hidden w-full bg-[#171C29] font-['Raleway',Helvetica] pt-10 pb-8 px-4">
        {/* Logo & Description */}
        <div className="flex flex-col items-center md:text-center mb-10 max-w-2xl mx-auto">
          <Link href="/" className="mb-6">
            <Image
              src="/white.png"
              alt="Mobile tent ru logo"
              width={200}
              height={30}
              className="w-48 md:w-64"
              loading="lazy"
            />
          </Link>
          <p className="text-white text-[10px] md:text-xs font-normal opacity-80 leading-relaxed max-w-[280px] md:max-w-md">
            Производство и продажа тентовых конструкций и шатров по всей России и СНГ
          </p>
        </div>

        {/* Navigation Grid - 2 cols on mobile, 4 on tablet */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 mb-12 max-w-5xl mx-auto">
          {footerSections.map((section, index) => (
            <div key={index} className="flex flex-col">
              <h3 className="font-semibold text-white text-base mb-4 md:mb-6">
                {section.title}
              </h3>
              <nav className="flex flex-col gap-3">
                {section.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href={link.path}
                    className="font-normal text-white text-sm opacity-70 hover:opacity-100 hover:text-[#b1ceff] transition-all py-1"
                  >
                    {link.text}
                  </Link>
                ))}
              </nav>
            </div>
          ))}

          {/* Social Media - Included in grid for tablet balance */}
          <div className="flex flex-col">
            <h3 className="font-semibold text-white text-base mb-4 md:mb-6">
              Социальные сети
            </h3>
            <div className="flex gap-4">
              <a
                href="https://rutube.ru/channel/32587007/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <Image
                  src="/element9-vector.webp"
                  alt="Rutube"
                  width={30}
                  height={22}
                  className="h-5 w-auto"
                  loading="lazy"
                />
              </a>
              <a
                href="https://vk.com/club229768367?from=groups"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <Image
                  src="/element9-group.webp"
                  alt="VK"
                  width={50}
                  height={50}
                  className="h-5 w-auto"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Contact & CTA Section */}
        <div className="max-w-5xl mx-auto border-t border-white/10 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Left: Hours & Quick Contact */}
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]">
                  <ClockIcon className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-white text-xs opacity-70">График работы:</p>
                  <p className="text-white text-sm font-semibold">с ПН - ПТ, 09:00 - 22:00 МСК</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  className="text-[#b1ceff] font-semibold hover:bg-white/5"
                >
                  Написать нам
                </Button>
                <div className="flex gap-4">
                  <a href="https://t.me/+79857604220" target="_blank" className="hover:scale-110 transition-transform">
                    <Image src="/element9-group-1.webp" alt="Telegram" width={24} height={24} />
                  </a>
                  {/* WhatsApp SVG - reusable if needed, but let's stick to current UI */}
                </div>
              </div>
            </div>

            {/* Right: Phones & Email */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]">
                    <PhoneIcon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <a href="tel:+7 (495) 760-42-20" className="text-white font-semibold hover:text-[#b1ceff] transition-colors">+7 (495) 760-42-20</a>
                    <a href="tel:+7 (985) 760-42-20" className="text-white font-semibold hover:text-[#b1ceff] transition-colors">+7 (985) 760-42-20</a>
                  </div>
                </div>
                <Button
                  variant="link"
                  className="text-[#b1ceff] text-xs underline p-0 h-auto justify-start ml-14"
                  onClick={() => setShowCallback(true)}
                >
                  Перезвоните мне
                </Button>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]">
                  <MailIcon className="w-5 h-5 text-white" />
                </div>
                <a href="mailto:info@mobile-tent.ru" className="text-white font-semibold hover:text-[#b1ceff] transition-colors">
                  info@mobile-tent.ru
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <Button
              className="w-full md:w-fit md:px-12 h-14 rounded-2xl font-semibold text-white bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC] shadow-xl md:mx-auto md:block"
              onClick={() => setShow3dModal(true)} 
            >
              Рассчитать стоимость под нужный размер
            </Button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col items-center text-[#4f5d8094] text-[10px] md:text-xs text-center pt-8 border-t border-white/5 mt-12 max-w-5xl mx-auto">
          <div className="mb-4 opacity-60">
            Предложения на сайте не являются публичной офертой.<br />
            Цена может быть скорректирована в связи со сменой рыночных цен
          </div>
          <div className="mb-6 font-medium">© {new Date().getFullYear()} ООО mobile-tent</div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Политика конфиденциальности
            </Link>
            <Link href="/user-agreement" className="hover:text-white transition-colors">
              Пользовательское соглашение
            </Link>
          </div>
        </div>
      </footer>

      {/* Callback Modal */}
      <Callmeback isOpen={showCallback} onClose={() => setShowCallback(false)} />
      {show3dModal && <Consultaionfor3d onClose={() => setShow3dModal(false)} />}

    </>
  );
};