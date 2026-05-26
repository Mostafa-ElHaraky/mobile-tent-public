'use client';

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { CopyIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Checkbox } from "../../../../components/ui/checkbox";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";
import Image from 'next/image';

// Props interface
interface Contact2Props {
  contacts?: {
    phone1?: string;
    phone2?: string;
    email?: string;
    telegram?: string;
    whatsapp?: string;
    expertName?: string;
    expertPosition?: string;
  };
}

export const Contact2: React.FC<Contact2Props> = ({ contacts }) => {
  const router = useRouter();

  const [phone, setPhone] = useState('+7 ');
  const [question, setQuestion] = useState('');
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Default values if no data from CMS
  const defaultContacts = {
    phone1: "+7 (499) 113-36-60", // Your Phone 1
    phone2: "+7 (495) 487-43-53", // Your Phone 2
    email: "info@mobile-tent.ru",
    telegram: "https://t.me/+79770893996?start=14594990928",
    whatsapp: "https://api.whatsapp.com/send/?phone=79805109568",
    expertName: "Евгений Петров",
    expertPosition: "Эксперт по тентовым конструкциям"
  };

  // Merge CMS data with defaults
  const contactData = {
    phone1: contacts?.phone1 || defaultContacts.phone1, // Will use Phone 1 from Bitrix
    phone2: contacts?.phone2 || defaultContacts.phone2, // Will use Phone 2 from Bitrix
    email: contacts?.email || defaultContacts.email,
    telegram: contacts?.telegram || defaultContacts.telegram,
    whatsapp: contacts?.whatsapp || defaultContacts.whatsapp,
    expertName: contacts?.expertName || defaultContacts.expertName,
    expertPosition: contacts?.expertPosition || defaultContacts.expertPosition
  };

  // Helper function to format Telegram URL
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

  // Helper function to format WhatsApp URL
  const formatWhatsAppUrl = (whatsappData: string) => {
    if (whatsappData.startsWith('http')) return whatsappData;
    const cleanNumber = whatsappData.replace(/\D/g, '');
    return `https://api.whatsapp.com/send/?phone=${cleanNumber}`;
  };

  const telegramUrl = formatTelegramUrl(contactData.telegram);
  const whatsappUrl = formatWhatsAppUrl(contactData.whatsapp);

  // Contact info array for rendering - using SAME phones as Contact1
  const contactInfo = [
    {
      icon: <PhoneIcon className="h-3 w-3 text-white" />,
      text: contactData.phone1, // Using Phone 1 from Bitrix: +7 (499) 113-36-60
      href: `tel:${contactData.phone1.replace(/\D/g, '')}`,
    },
    {
      icon: <PhoneIcon className="h-3 w-3 text-white" />,
      text: contactData.phone2, // Using Phone 2 from Bitrix: +7 (495) 487-43-53
      href: `tel:${contactData.phone2.replace(/\D/g, '')}`,
    },
    {
      icon: <MailIcon className="h-3 w-3 text-white" />,
      text: contactData.email,
      href: `mailto:${contactData.email}`,
      hasClipboard: true,
    },
  ];

  // Phone helpers: enforce +7 format
  const formatRuPhone = (digits: string) => {
    if (!digits) return '+7 ';
    if (digits[0] !== '7') digits = '7' + digits.replace(/^[^7]/, '');
    digits = digits.replace(/\D/g, '').slice(0, 11);

    const local = digits.slice(1);
    const p1 = local.slice(0, 3);
    const p2 = local.slice(3, 6);
    const p3 = local.slice(6, 8);
    const p4 = local.slice(8, 10);

    let out = '+7';
    out += local.length ? ' (' + p1 : ' ';
    out += local.length >= 3 ? ')' : '';
    out += local.length >= 4 ? ' ' + p2 : '';
    out += local.length >= 7 ? '-' + p3 : '';
    out += local.length >= 9 ? '-' + p4 : '';
    if (local.length === 0) out = '+7 ';
    return out;
  };

  const sanitizeToRuDigits = (raw: string) => {
    let d = raw.replace(/\D/g, '');
    if (d.startsWith('8')) d = '7' + d.slice(1);
    if (!d.startsWith('7')) d = '7' + d;
    return d.slice(0, 11);
  };

  const handlePhoneChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const normalizedDigits = sanitizeToRuDigits(input);
    const formatted = formatRuPhone(normalizedDigits);
    setPhone(formatted);
  }, []);

  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === 'Backspace' || e.key === 'Delete') && phone.length <= 3) {
      e.preventDefault();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!consent) {
      alert("Пожалуйста, подтвердите согласие на обработку персональных данных.");
      return;
    }

    const cleanDigits = sanitizeToRuDigits(phone);
    if (cleanDigits.length !== 11) {
      alert("Введите корректный телефон в формате +7 (XXX) XXX-XX-XX.");
      return;
    }

    try {
      setSubmitting(true);
      // Clear only the question (keep phone if you want)
      setQuestion('');
      // Navigate to /thankyou after successful send
      router.push('/thankyou');
    } catch (err) {
      console.error(err);
      alert("Не удалось отправить данные. Попробуйте позже.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Desktop version */}
      <div className="relative w-full max-w-[1440px] mx-auto overflow-hidden hidden md:block">
        <Card className="relative w-full rounded-[30px] border-0 overflow-hidden shadow-lg backdrop-blur-[79px]">
          <CardContent className="p-0">
            <div className="relative">
              <div className="absolute inset-0 top-[90px] rounded-[30px] bg-gradient-to-b from-[#F5F6FF] to-transparent" />

              <Image
                className="absolute top-[130px] left-[942px]"
                alt="Event tent"
                src="/QA2-event-tent-i02-1.webp"
                width={498}
                height={565}
                loading="lazy"
              />

              <div className="relative z-10 pt-[173px] pl-[63px]">
                <div className="max-w-[707px] mb-6">
                  <h5 className="font-raleway font-semibold text-4xl">
                    <span className="text-[#527dc5]">Не нашли ответ</span>
                    <span className="text-[#232c42]"> на свой вопрос?</span>
                  </h5>
                  <p className="font-raleway text-lg text-[#394355] mt-6">
                    Задайте и <span className="font-medium">получите ответ в течении 30 минут</span>
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col w-[575px] gap-4 mt-12">
                  <Card className="rounded-2xl overflow-hidden border border-neutral-200">
                    <CardContent className="p-0">
                      <Input
                        className="border-none shadow-none h-[67px] font-raleway text-[17px] px-6"
                        placeholder="Ваш телефон на который хотите получить ответ"
                        value={phone}
                        onChange={handlePhoneChange}
                        onKeyDown={handlePhoneKeyDown}
                        inputMode="tel"
                      />
                    </CardContent>
                  </Card>

                  <Card className="rounded-2xl overflow-hidden border border-neutral-200">
                    <CardContent className="p-0">
                      <Textarea
                        className="border-none shadow-none resize-none min-h-[184px] font-raleway text-[17px] p-6"
                        placeholder="Ваш вопрос"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                      />
                    </CardContent>
                  </Card>

                  <Button
                    className="h-[68px] rounded-2xl bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
                    type="submit"
                    disabled={!consent || submitting}
                  >
                    <span className="font-raleway font-semibold text-base text-white">
                      {submitting ? 'Отправка…' : 'Задать вопрос'}
                    </span>
                  </Button>

                  <div className="flex items-center gap-2.5">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-b">
                      <Checkbox
                        id="terms"
                        className="w-4 h-4 data-[state=checked]:bg-transparent border-none"
                        checked={consent}
                        onCheckedChange={(checked: boolean | "indeterminate") => setConsent(!!checked)}
                      />
                    </div>
                    <label
                      htmlFor="terms"
                      className="font-raleway font-medium text-xs text-[#4f5d80cc] max-w-[453px]"
                    >
                      Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь с Пользовательским соглашением
                    </label>
                  </div>
                </form>
              </div>

              <Image
                className="absolute top-0 left-[704px] z-10"
                alt="Confident young businessman"
                src="/QA2-confident-young-businessman-in-blue-shirt-and-glasses-smiling-at.webp"
                width={676}
                height={862}
                loading="lazy"
              />

              <Badge className="absolute top-[378px] left-[738px] z-20 rounded-2xl bg-gradient-to-br from-[#243057] to-[#374255] px-6 py-3">
                <div className="text-center">
                  <div className="font-raleway font-semibold text-lg text-white">
                    {contactData.expertName}
                  </div>
                  <div className="font-raleway font-medium text-base text-white">
                    {contactData.expertPosition}
                  </div>
                </div>
              </Badge>

            </div>

            <div className="relative z-10 pt-[110px] pb-[20px] pl-[63px]">
              <h2 className="font-raleway font-semibold text-lg text-[#394355] mb-6">
                Или свяжитесь по контактам
              </h2>

              <div className="flex items-start gap-[69px]">
                <div className="flex gap-[18px]">
                  <a
                    href={telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-7 h-7 hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src="/QA2-group-1.webp"
                      alt="Telegram icon"
                      width={24}
                      height={20}
                      className="absolute top-1 left-0.5"
                      loading="lazy"
                    />
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-7 h-7 hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src="/QA2-group-2.webp"
                      alt="WhatsApp icon"
                      width={23}
                      height={23}
                      className="absolute top-[3px] left-[3px]"
                      loading="lazy"
                    />
                  </a>
                </div>

                <div className="flex flex-col gap-3">
                  {contactInfo.slice(0, 2).map((contact, index) => (
                    <div key={index} className="flex items-center gap-[17px]">
                      <div className="flex w-6 h-6 items-center justify-center rounded-full bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]">
                        {contact.icon}
                      </div>
                      <a
                        href={contact.href}
                        className="font-raleway text-sm text-[#394355] hover:underline"
                      >
                        {contact.text}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-[18px]">
                  <div className="flex w-6 h-6 items-center justify-center rounded-full bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]">
                    <MailIcon className="h-3 w-3 text-white" />
                  </div>
                  <div className="flex items-center gap-1">
                    <a
                      href={`mailto:${contactData.email}`}
                      className="font-raleway text-sm text-[#232c42] hover:underline"
                    >
                      {contactData.email}
                    </a>
                    <CopyIcon className="w-4 h-4 cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Mobile version */}
      <div className="block md:hidden w-full bg-white px-4 py-8">
        <div className="bg-gradient-to-b from-[#F5F6FF] to-transparent rounded-[20px] p-6">
          <div className="text-center mb-6">
            <h5 className="font-raleway font-semibold text-2xl">
              <span className="text-[#527dc5]">Не нашли ответ</span>
              <span className="text-[#232c42]"> на свой вопрос?</span>
            </h5>
            <p className="font-raleway text-base text-[#394355] mt-3">
              Задайте и <span className="font-medium">получите ответ в течении 30 минут</span>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Card className="rounded-xl overflow-hidden border border-neutral-200">
              <CardContent className="p-0">
                <Input
                  className="border-none shadow-none h-14 font-raleway text-base px-4"
                  placeholder="Ваш телефон на который хотите получить ответ"
                  value={phone}
                  onChange={handlePhoneChange}
                  onKeyDown={handlePhoneKeyDown}
                  inputMode="tel"
                />
              </CardContent>
            </Card>

            <Card className="rounded-xl overflow-hidden border border-neutral-200">
              <CardContent className="p-0">
                <Textarea
                  className="border-none shadow-none resize-none min-h-[120px] font-raleway text-base p-4"
                  placeholder="Ваш вопрос"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                />
              </CardContent>
            </Card>

            <Button
              className="h-14 rounded-xl bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
              type="submit"
              disabled={!consent || submitting}
            >
              <span className="font-raleway font-semibold text-base text-white">
                {submitting ? 'Отправка…' : 'Задать вопрос'}
              </span>
            </Button>

            <div className="flex items-start gap-3">
              <div className="flex items-center justify-center w-6 h-6 rounded-md bg-gradient-to-b mt-1">
                <Checkbox
                  id="terms-mobile"
                  className="w-3 h-3 data-[state=checked]:bg-transparent border-none"
                  checked={consent}
                  onCheckedChange={(checked: boolean | "indeterminate") => setConsent(!!checked)}
                />
              </div>
              <label
                htmlFor="terms-mobile"
                className="font-raleway font-medium text-xs text-[#4f5d80cc]"
              >
                Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь с Пользовательским соглашением
              </label>
            </div>
          </form>

          <div className="mt-8 flex flex-col items-center relative">
            {/* Background */}
            <div className="absolute top-20 right-0 w-40 h-48 opacity-70 z-0">
              <Image
                src="/QA2-event-tent-i02-1.webp"
                alt="Event tent"
                fill
                className="object-contain"
                loading="lazy"
              />
            </div>

            {/* Person image */}
            <div className="relative w-48 h-60 mt-10 z-0">
              <Image
                src="/QA2-confident-young-businessman-in-blue-shirt-and-glasses-smiling-at.webp"
                alt="Confident young businessman"
                fill
                className="object-cover rounded-lg"
                loading="lazy"
              />
            </div>

            {/* Badge */}
            <Badge className="relative z-0 rounded-xl bg-gradient-to-br from-[#243057] to-[#374255] px-4 py-2 mb-6 mt-6">
              <div className="text-center">
                <div className="font-raleway font-semibold text-sm text-white">
                  {contactData.expertName}
                </div>
                <div className="font-raleway font-medium text-xs text-white">
                  {contactData.expertPosition}
                </div>
              </div>
            </Badge>

            {/* Grass at the bottom */}
            <div className="relative w-full h-20 mb-8 mt-6 z-10">
              <Image
                src="/QA2-vecteezy-overgrown-green-grass-generative-ai-generated-24190129-.webp"
                alt="Overgrown green grass"
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="mt-8">
            <h2 className="font-raleway font-semibold text-lg text-[#394355] mb-4 text-center">
              Или свяжитесь по контактам
            </h2>

            <div className="flex flex-col gap-3 items-start w-full">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex w-5 h-5 items-center justify-center rounded-full bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]">
                    {contact.icon}
                  </div>
                  <a
                    href={contact.href}
                    className="font-raleway text-sm text-[#394355] hover:underline"
                  >
                    {contact.text}
                  </a>
                  {contact.hasClipboard && <CopyIcon className="w-3 h-3 cursor-pointer" />}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 items-start mt-6">
              <div className="flex gap-4">
                <a
                  href={telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-6 h-6 hover:opacity-80 transition-opacity"
                >
                  <Image
                    src="/QA2-group-1.webp"
                    alt="Telegram icon"
                    width={20}
                    height={17}
                    loading="lazy"
                  />
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-6 h-6 hover:opacity-80 transition-opacity"
                >
                  <Image
                    src="/QA2-group-2.webp"
                    alt="WhatsApp icon"
                    width={19}
                    height={19}
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};