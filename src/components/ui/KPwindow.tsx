'use client';

import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import Image from 'next/image';
import { ReactElement } from 'react';
import { MailIcon } from "lucide-react";

export const KPwindow = ({ onClose }: { onClose: () => void }): ReactElement => {
  const [phone, setPhone] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);
  const [isMarketingAgreed, setIsMarketingAgreed] = useState(false);
  const [error, setError] = useState('');
  const [isSending, setIsSending] = useState(false);
  const router = useRouter();

  // Check if both checkboxes are checked
  const areBothCheckboxesChecked = isAgreed && isMarketingAgreed;

  // Basic sanitizer (keeps digits and + while typing is handled below)
  const sanitize = (s: string) =>
    s.replace(/[<>&"'/]/g, (c) =>
      ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&#x27;', '/': '&#x2F;' } as Record<string,string>)[c]
    );

  // ===== Helpers (TS-safe) =====
  const escapeRegex = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const getCookie = (name: string): string => {
    if (typeof document === "undefined") return "";
    const m = document.cookie.match(new RegExp(`(?:^|; )${escapeRegex(name)}=([^;]*)`));
    return m ? decodeURIComponent(m[1]) : "";
  };

  const getSearchParam = (name: string): string => {
    if (typeof window === "undefined") return "";
    return new URLSearchParams(window.location.search).get(name) || "";
  };

  const parseGAClientId = (gaCookie: string): string => {
    if (!gaCookie) return "";
    const parts = gaCookie.split(".");
    return parts.length >= 4 ? parts.slice(-2).join(".") : gaCookie;
  };

  // --- Fixed RU phone formatter ---
  const formatRuPhone = (input: string) => {
    // Remove all non-digits
    let digits = input.replace(/\D/g, "");
    
    // If no digits, return what was typed (could be "+" or "")
    if (digits.length === 0) {
      return input;
    }
    
    // Always start with 7
    if (digits[0] !== "7") {
      digits = "7" + digits.slice(1);
    }
    
    // Limit to 11 digits (7 + 10 digits)
    digits = digits.slice(0, 11);
    
    // If we only have "7", return "+7"
    if (digits === "7") {
      return "+7";
    }
    
    // Format the digits
    const countryCode = digits.slice(0, 1); // Should be "7"
    const areaCode = digits.slice(1, 4);
    const firstPart = digits.slice(4, 7);
    const secondPart = digits.slice(7, 9);
    const thirdPart = digits.slice(9, 11);
    
    let formatted = `+${countryCode}`;
    
    if (areaCode) {
      formatted += ` (${areaCode}`;
      if (areaCode.length === 3) {
        formatted += `)`;
      }
    }
    
    if (firstPart) {
      formatted += ` ${firstPart}`;
    }
    
    if (secondPart) {
      formatted += `-${secondPart}`;
    }
    
    if (thirdPart) {
      formatted += `-${thirdPart}`;
    }
    
    return formatted;
  };

  // Keep phone masked as +7 (XXX) XXX-XX-XX
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    
    // Get cursor position before formatting
    const cursorPosition = e.target.selectionStart;
    
    // Format the phone number
    const formatted = formatRuPhone(newValue);
    setPhone(formatted);
    setError('');
    
    // Restore cursor position after formatting
    setTimeout(() => {
      if (e.target && cursorPosition !== null) {
        // Calculate where cursor should be based on digit count
        const digitsBeforeCursor = newValue.slice(0, cursorPosition).replace(/\D/g, '').length;
        let newCursorPosition = 0;
        let digitsCount = 0;
        
        // Find position in formatted string
        for (let i = 0; i < formatted.length; i++) {
          if (/\d/.test(formatted[i])) {
            digitsCount++;
          }
          if (digitsCount >= digitsBeforeCursor) {
            newCursorPosition = i + 1;
            break;
          }
        }
        
        // If we couldn't find position, put cursor at end
        if (newCursorPosition === 0) {
          newCursorPosition = formatted.length;
        }
        
        e.target.setSelectionRange(newCursorPosition, newCursorPosition);
      }
    }, 0);
  };

  const handlePhonePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text");
    setPhone(formatRuPhone(pasted));
    setError('');
  };

  const handlePhoneFocus = () => {
    if (!phone.trim()) {
      setPhone("+7");
    }
  };

  const validPhone = (v: string) => v.replace(/\D/g, '').length === 11 && v.replace(/\D/g, '')[0] === '7';

  // ---- Bitrix webhook sender ----
  const sendToWebhook = async (cleanDigits: string) => {
    const now = new Date();
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    const clientTime = now.toLocaleTimeString('ru-RU', { hour12: false });
    const clientDate = now.toLocaleDateString('ru-RU'); // DD.MM.YYYY
    const pageUrl = typeof window !== 'undefined' ? window.location.href : '';
    const domainHost = typeof window !== 'undefined' ? window.location.hostname : 'mobile-tent.ru';
    const pageTitle = typeof document !== "undefined" ? document.title : "";
    const referrer = typeof document !== "undefined" ? document.referrer : "";

    // URL params
    const utm_source   = getSearchParam('utm_source');
    const utm_medium   = getSearchParam('utm_medium');
    const utm_campaign = getSearchParam('utm_campaign');
    const utm_content  = getSearchParam('utm_content');
    const utm_term     = getSearchParam('utm_term');
    const gclid        = getSearchParam('gclid');
    const yclid        = getSearchParam('yclid');

    // Cookies/IDs
    const gaCookie = getCookie('_ga');
    const gaClientId = parseGAClientId(gaCookie);
    const ymUid = getCookie('_ym_uid');
    const roistat_visit = getCookie('roistat_visit');

    // Device/browser context for COMMENTS (if you map "message")
    const dpr = typeof window !== "undefined" && window.devicePixelRatio ? String(window.devicePixelRatio) : "";
    const vw = typeof window !== "undefined" && window.innerWidth ? String(window.innerWidth) : "";
    const vh = typeof window !== "undefined" && window.innerHeight ? String(window.innerHeight) : "";
    const lang = typeof navigator !== "undefined" ? navigator.language : "";
    const platform = typeof navigator !== "undefined" ? (navigator as any).platform || "" : "";
    const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";

    const sourceDescription =
      `Клиент открыл окно «Отправить КП» и оставил телефон для проверки КП от другой компании. ` +
      `Страница: ${pageUrl} | Время клиента: ${clientTime} (${tz}) | ` +
      `Дата создания (клиента): ${clientDate} | Источник: сайт ${domainHost} (окно КП).`;

    const messageReadable =
      `Окно: «Отправить КП»\n` +
      `Страница: ${pageUrl}\nЗаголовок: ${pageTitle}\nИсточник-реферер: ${referrer || "—"}\n` +
      `Время клиента: ${clientTime} (${tz}), Дата: ${clientDate}\n\n` +
      `UTM: source=${utm_source || "—"}, medium=${utm_medium || "—"}, campaign=${utm_campaign || "—"}, content=${utm_content || "—"}, term=${utm_term || "—"}\n` +
      `gclid=${gclid || "—"}, yclid=${yclid || "—"}, roistat_visit=${roistat_visit || "—"}\n` +
      `_ga=${gaCookie || "—"} (cid=${gaClientId || "—"}), _ym_uid=${ymUid || "—"}\n\n` +
      `Устройство: ${platform || "—"}, Язык: ${lang || "—"}, DPR=${dpr || "—"}, viewport=${vw || "—"}×${vh || "—"}\n` +
      `User-Agent: ${ua || "—"}`;

    // Build full payload (max coverage for your PHP mapping)
    const payload: Record<string, string> = {
      // Basic
      domain: domainHost,
      phone: cleanDigits,
      'Время клиента': `${clientTime} (${tz})`,
      'Дата создания': clientDate,
      'Источник': `Сайт ${domainHost} — окно «Отправить КП»`,

      // Bitrix fields (your custom fields)
      UF_CRM_1698687546: domainHost,              // Домен сайта
      UF_CRM_CUST_LTIME: `${clientTime} (${tz})`, // Время клиента
      SOURCE_DESCRIPTION: sourceDescription,      // Дополнительно об источнике
      UF_CRM_1712907937027: pageUrl,              // Страница с которой пришла заявка
      "doc.pagetitle": pageTitle,                 // Заголовок страницы (есть маппинг в PHP)

      // UTM custom fields
      UF_CRM_1728380948090: utm_source,
      UF_CRM_1728380965926: utm_medium,
      UF_CRM_1728380991359: utm_campaign,
      UF_CRM_1728381006839: utm_content,
      UF_CRM_1728381021062: utm_term,

      // Ads/counters expected by your PHP
      _ga: gaCookie,
      _ym_uid: ymUid,
      gclid,
      yclid,

      // Optional that some of your forms use (kept for completeness)
      roistat_visit,

      // If later you map COMMENTS, you can read this:
      message: messageReadable,

      // Keep placeholders to satisfy PHP mappings if reused:
      sitename: domainHost,
      name: "",
      surname: "",
      question_1: "", question_2: "", question_3: "", question_4: "",
      "question-1": "", "question-2": "", "question-3": "", "question-4": "",
      quizDate: clientDate,
      construction_type: "", length: "", width: "", height1: "", height2: "",
      gates_type: "", gates: "", doors_type: "", doors: "",
      cover_type: "", tip: "", city: "", pokr: "",
      tent_material: "", tent_density: "", tent_layers: "",
      frame_type: "", frame_material: "", frame_zinc: "",
      fur_type: "", full_price: "", project: "", type: "",
      typeproject: "", comment: "", otrasl: "", nameFile: "",
      url: pageUrl,
      utm_source, utm_medium, utm_campaign, utm_content, utm_term,
      email: "",
    };

    const body = new URLSearchParams(payload).toString();

    try {
      await fetch('https://crm.grand-tent.ru/local/webhooks/get_from_sites.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        body,
        mode: 'no-cors',
      });
    } catch (e) {
      console.error('Webhook error:', e);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const cleaned = phone.replace(/\D/g, ''); // 11 digits expected, starts with 7

    if (!phone.trim()) {
      setError('Пожалуйста, введите ваш телефон');
      return;
    }
    if (!validPhone(phone)) {
      setError('Введите корректный российский номер (+7 XXX XXX-XX-XX)');
      return;
    }
    if (!isAgreed) {
      setError('Вы должны согласиться с Пользовательским соглашением');
      return;
    }
    if (!isMarketingAgreed) {
      setError('Вы должны согласиться на получение информационных и маркетинговых рассылок');
      return;
    }

    setError('');
    setIsSending(true);
    await sendToWebhook(cleaned);
    setIsSending(false);
    setPhone("");
    setIsAgreed(false);
    setIsMarketingAgreed(false);
    router.push('/thankyou');
  };

  const checkPoints = [
    { title: "Проверим качество", description: "используемых материалов" },
    { title: "Оценим правильность расчетов", description: "для выдерживания нагрузки" },
    { title: "Оценим адекватность", description: "выставленной цены" },
  ];

// Добавьте этот тип в начало компонента (после импортов)
type ContactMethod =
  | { isSvg: true; svgPath: string; text: string; link: string; }
  | { isSvg?: false; icon: string; text: string; link: string; };

// Затем замените сам массив contactMethods
const contactMethods: ContactMethod[] = [
  { 
    isSvg: false,
    icon: "/group.webp", 
    text: "Отправить в Телеграм", 
    link: "https://t.me/+79857604220" 
  },
  { 
    isSvg: true,
    text: "MAX",
    link: "https://max.ru/u/f9LHodD0cOK_6DAtIeOn3T51Xpzrkg2i4RB2ZEjtVfXOwvURhiW6gtGMLrA",
    svgPath: "M508.211 878.328c-75.007 0-109.864-10.95-170.453-54.75-38.325 49.275-159.686 87.783-164.979 21.9 0-49.456-10.95-91.248-23.36-136.873-14.782-56.21-31.572-118.807-31.572-209.508 0-216.626 177.754-379.597 388.357-379.597 210.785 0 375.947 171.001 375.947 381.604.707 207.346-166.595 376.118-373.94 377.224m3.103-571.585c-102.564-5.292-182.499 65.7-200.201 177.024-14.6 92.162 11.315 204.398 33.397 210.238 10.585 2.555 37.23-18.98 53.837-35.587a189.8 189.8 0 0 0 92.71 33.032c106.273 5.112 197.08-75.794 204.215-181.95 4.154-106.382-77.67-196.486-183.958-202.574Z"
  },
];

  return (
    <>
      {/* Desktop */}
      <div className="hidden md:block w-[1344px] h-[650px]">
        <Card className="relative w-[1341px] h-[547px] left-[3px] rounded-[20px] shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] bg-[linear-gradient(180deg,rgba(255,255,255,1)_46%,rgba(232,238,248,1)_100%)] border-none">
          <CardContent className="p-0">
            <div className="absolute w-[30px] h-[30px] top-[-15px] left-[1311px]">
              <div className="relative w-7 h-7 top-px left-px cursor-pointer" onClick={onClose}>
                <button className="absolute top-4 right-4 z-50 text-gray-500 hover:text-gray-700 text-3xl font-mono" aria-label="Close">×</button>
              </div>
            </div>

            <div className="inline-flex items-start gap-[105px] absolute top-[45px] left-[55px]">
              <div className="inline-flex flex-col items-start gap-10 relative flex-[0_0_auto]">
                <div className="inline-flex flex-col items-start gap-[30px] relative flex-[0_0_auto]">
                  <div className="relative w-[500px] mt-[-1.00px] font-medium text-[#232c42] text-xl leading-[normal] [font-family:'Raleway',Helvetica] tracking-[0]">
                    Спасибо, что доверяете нам
                  </div>
                  <div className="relative w-fit font-semibold text-[#232c42] text-4xl leading-[normal] whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                    Отправьте КП от другой компании и мы
                  </div>
                </div>

                <div className="flex flex-col w-[411px] items-start gap-6 relative flex-[0_0_auto]">
                  {checkPoints.map((point, index) => (
                    <div key={index} className="inline-flex items-start gap-3 relative flex-[0_0_auto]">
                      <div className="relative w-6 h-6 overflow-hidden">
                        <div className="relative h-[17px] top-[3px] bg-[url(/vector-2.webp)] bg-[100%_100%]" />
                      </div>
                      <div className="inline-flex flex-col items-start justify-center gap-2 relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] font-semibold text-[#4f5d80] text-sm leading-5 [font-family:'Raleway',Helvetica] tracking-[0]">
                          {point.title}
                        </div>
                        <div className="relative w-fit font-normal text-[#4f5d80] text-sm leading-5 [font-family:'Raleway',Helvetica] tracking-[0]">
                          {point.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="inline-flex flex-col items-start gap-[42px] relative flex-[0_0_auto]">
                <div className="inline-flex flex-col items-start gap-[35px] relative flex-[0_0_auto]">
                  <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
                      {contactMethods.map((m, i) => (
                        <a key={i} href={m.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                          <div className={`w-6 h-6 flex items-center justify-center rounded-full ${m.isSvg ? 'bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec]' : 'bg-transparent'}`}>
                            {m.isSvg ? (
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 1000 1000" fill="none">
                                <path fill="#fff" fillRule="evenodd" d={m.svgPath} clipRule="evenodd" />
                              </svg>
                            ) : (
                              <Image src={m.icon} alt={m.text} width={20} height={20} className="object-contain" />
                            )}
                          </div>
                          <div className="[font-family:'Raleway',Helvetica] font-semibold text-[#4f5d80] text-sm underline">{m.text}</div>
                        </a>
                      ))}

                    <div className="inline-flex items-center gap-5 relative flex-[0_0_auto]">
                      <div className="flex w-[25px] h-[25px] items-center justify-center gap-2.5 p-1.5 relative rounded-[50px] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
                        <MailIcon className="w-[15px] h-[15px] text-white" />
                      </div>
                      <div className="inline-flex items-start gap-[9px] relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] font-semibold text-[#4f5d80] text-sm leading-5 whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                          Отправить на почту
                        </div>
                        <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                          <a href="mailto:info@mobile-tent.ru" className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                            <span className="relative w-fit font-normal text-[#232c42] text-sm tracking-[0] leading-normal whitespace-nowrap">
                              info@mobile-tent.ru
                            </span>
                            <div className="relative w-5 h-5">
                              <Image
                                className="absolute w-4 h-4 top-0.5 left-0.5"
                                src="/group-2.webp"
                                alt="Email icon"
                                width={16}
                                height={16}
                                quality={90}
                                loading="eager"
                                priority
                                style={{ minWidth: '16px', objectFit: 'contain' }}
                              />
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-[17px] relative flex-[0_0_auto]">
                    <div className="flex w-[25px] h-[25px] items-center justify-center gap-2.5 p-1.5 relative bg-[#73a7ff66] rounded-[50px]">
                      <div className="relative w-[21px] h-[21px] mt-[-4.00px] mb-[-4.00px] ml-[-4.00px] mr-[-4.00px]">
                        <div className="relative w-[13px] h-[13px] top-1 left-1 bg-[url(/plus.webp)] bg-[100%_100%]" />
                      </div>
                    </div>
                    <div className="inline-flex flex-col items-start gap-1.5 relative flex-[0_0_auto]">
                      <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] font-medium text-[#394355] text-base leading-[normal] whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                          Или прикрепите фото
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col w-[422px] items-start gap-5 relative flex-[0_0_auto]">
                  <div className="inline-flex flex-col items-start justify-end gap-2 relative flex-[0_0_auto]">
                    <div className="flex flex-col w-[422px] h-[67px] items-start gap-4 relative rounded-2xl overflow-hidden border border-solid border-neutral-200 shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]">
                      <Input
                        type="tel"
                        className="flex w-full h-[67px] items-center gap-2 pl-3 pr-2 py-2 border-0 relative bg-white rounded-2xl overflow-hidden border-none"
                        placeholder="+7XXXXXXXXXX"
                        value={phone}
                        onChange={handlePhoneChange}
                        onPaste={handlePhonePaste}
                        onFocus={handlePhoneFocus}
                        onKeyDown={(e) => { if (e.key === 'Enter' && validPhone(phone)) e.currentTarget.form?.requestSubmit(); }}
                        required
                      />
                    </div>

                    {error && <p className="text-red-500 text-sm pl-2 w-full">{error}</p>}

                    <Button
                      type="submit"
                      disabled={isSending || !areBothCheckboxesChecked}
                      className={`relative w-[422px] h-[68px] rounded-2xl border-[none] shadow-2 bg-[linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] before:content-[''] before:absolute before:inset-0 before:p-[3px] before:rounded-2xl before:[background:linear-gradient(180deg,rgba(255,255,255,0.3)_0%,rgba(255,255,255,0.03)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none ${!areBothCheckboxesChecked || isSending ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                      <span className="font-semibold text-white text-base text-center leading-[normal] whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                        {isSending ? 'Отправка…' : 'Отправить КП'}
                      </span>
                    </Button>
                  </div>

                  {/* Checkbox 1 */}
                  <div className="flex items-center gap-2.5">
                    <button
                      type="button"
                      onClick={() => setIsAgreed(!isAgreed)}
                      className={`flex items-center justify-center w-[33px] h-[33px] p-3 rounded-lg transition-all duration-200 ${
                        isAgreed
                          ? "bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
                          : "bg-gray-200"
                      }`}
                      aria-pressed={isAgreed}
                      aria-label="Agree to terms"
                    >
                      {isAgreed && (
                        <Image
                          className="w-[17px] h-[13px]"
                          alt="Check"
                          src="/right.webp"
                          width={17}
                          height={13}
                        />
                      )}
                    </button>

                    <p className="font-medium text-[#4f5d8094] text-xs [font-family:'Raleway',Helvetica]">
                      Я даю согласие на обработку{" "}
                      <a href="/privacy-consent" className="text-[#73A8FF] underline">персональных данных</a>{" "}
                      и согласен с{" "}
                      <a href="/privacy-policy" className="text-[#73A8FF] underline">политикой конфиденциальности</a>
                      <br />
                      Чекбокс политики *
                    </p>
                  </div>

                  {/* Checkbox 2 */}
                  <div className="flex items-center gap-2.5">
                    <button
                      type="button"
                      onClick={() => setIsMarketingAgreed(!isMarketingAgreed)}
                      className={`flex items-center justify-center w-[33px] h-[33px] p-3 rounded-lg transition-all duration-200 ${
                        isMarketingAgreed
                          ? "bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
                          : "bg-gray-200"
                      }`}
                      aria-pressed={isMarketingAgreed}
                      aria-label="Agree to marketing"
                    >
                      {isMarketingAgreed && (
                        <Image
                          className="w-[17px] h-[13px]"
                          alt="Check"
                          src="/right.webp"
                          width={17}
                          height={13}
                        />
                      )}
                    </button>

                    <p className="font-medium text-[#4f5d8094] text-xs [font-family:'Raleway',Helvetica]">
                      Я даю согласие на получение{" "}
                      <a href="/advertising-consent" className="text-[#73A8FF] underline">информационных и маркетинговых рассылок</a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Mobile */}
      <div className="md:hidden w-full p-4">
        <Card className="relative max-w-md mx-auto rounded-[20px] shadow-[var(--)] backdrop-blur-[30px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(30px)_brightness(100%)] bg-[linear-gradient(180deg,rgba(255,255,255,1)_46%,rgba(232,238,248,1)_100%)] border-none">
          <CardContent className="p-4">
            <div className="flex justify-end mb-4">
              <button className="text-gray-500 hover:text-gray-700 text-3xl font-mono" onClick={onClose} aria-label="Close">×</button>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <div className="font-medium text-[#232c42] text-lg [font-family:'Raleway',Helvetica]">Спасибо, что доверяете нам</div>
                <div className="font-semibold text-[#232c42] text-2xl [font-family:'Raleway',Helvetica]">Отправьте КП от другой компании и мы</div>
              </div>

              <div className="flex flex-col gap-4">
                {[
                  { title: "Проверим качество", description: "используемых материалов" },
                  { title: "Оценим правильность расчетов", description: "для выдерживания нагрузки" },
                  { title: "Оценим адекватность", description: "выставленной цены" },
                ].map((p, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0">
                      <div className="h-[17px] mt-[3px] bg-[url(/vector-2.webp)] bg-contain bg-no-repeat" />
                    </div>
                    <div className="flex flex-col">
                      <div className="font-semibold text-[#4f5d80] text-sm [font-family:'Raleway',Helvetica]">{p.title}</div>
                      <div className="font-normal text-[#4f5d80] text-sm [font-family:'Raleway',Helvetica]">{p.description}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  {contactMethods.map((m, i) => (
                    <a key={i} href={m.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                      <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec]">
                        {m.isSvg ? (
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 1000 1000" fill="none">
                            <path fill="#fff" fillRule="evenodd" d={m.svgPath} clipRule="evenodd" />
                          </svg>
                        ) : (
                          <Image src={m.icon} alt={m.text} width={20} height={20} className="object-contain" />
                        )}
                      </div>
                      <div className="[font-family:'Raleway',Helvetica] font-semibold text-[#4f5d80] text-sm underline">{m.text}</div>
                    </a>
                  ))}

                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 flex items-center justify-center rounded-full [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
                      <MailIcon className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-1">
                      <div className="font-semibold text-[#4f5d80] text-sm [font-family:'Raleway',Helvetica]">Отправить на почту</div>
                      <a href="mailto:info@mobile-tent.ru" className="flex items-center gap-1">
                        <span className="font-normal text-[#232c42] text-sm">info@mobile-tent.ru</span>
                        <Image src="/group-2.webp" alt="Email icon" width={16} height={16} className="object-contain" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 flex items-center justify-center bg-[#73a7ff66] rounded-full">
                    <div className="w-4 h-4 bg-[url(/plus.webp)] bg-contain bg-no-repeat" />
                  </div>
                  <div className="font-medium text-[#394355] text-base [font-family:'Raleway',Helvetica]">Или прикрепите фото</div>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <Input
                      type="tel"
                      className="w-full h-14 rounded-2xl border border-solid border-neutral-200"
                      placeholder="+7XXXXXXXXXX"
                      value={phone}
                      onChange={handlePhoneChange}
                      onPaste={handlePhonePaste}
                      onFocus={handlePhoneFocus}
                      onKeyDown={(e) => { if (e.key === 'Enter' && validPhone(phone)) e.currentTarget.form?.requestSubmit(); }}
                      required
                    />
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <Button 
                      type="submit" 
                      disabled={isSending || !areBothCheckboxesChecked} 
                      className={`w-full h-14 rounded-2xl bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] relative overflow-hidden ${!areBothCheckboxesChecked || isSending ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                      <span className="font-semibold text-white text-base [font-family:'Raleway',Helvetica]">
                        {isSending ? 'Отправка…' : 'Отправить КП'}
                      </span>
                    </Button>
                  </div>

                  {/* Checkbox 1 - Mobile */}
                  <div className="flex items-center gap-2.5 w-full">
                    <button
                      type="button"
                      onClick={() => setIsAgreed(!isAgreed)}
                      className={`flex items-center justify-center w-8 h-8 p-3 rounded-lg transition-all duration-200 ${
                        isAgreed
                          ? "bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
                          : "bg-gray-200"
                      }`}
                      aria-pressed={isAgreed}
                      aria-label="Agree to terms"
                    >
                      {isAgreed && (
                        <Image className="w-[17px] h-[13px]" alt="Check" src="/right.webp" width={17} height={13} />
                      )}
                    </button>

                    <p className="font-medium text-[#4f5d8094] text-xs [font-family:'Raleway',Helvetica] flex-1">
                      Я даю согласие на обработку{" "}
                      <a href="/privacy-consent" className="text-[#73A8FF] underline">персональных данных</a>{" "}
                      и согласен с{" "}
                      <a href="/privacy-policy" className="text-[#73A8FF] underline">политикой конфиденциальности</a>
                      <br />
                      Чекбокс политики *
                    </p>
                  </div>

                  {/* Checkbox 2 - Mobile */}
                  <div className="flex items-center gap-2.5 w-full">
                    <button
                      type="button"
                      onClick={() => setIsMarketingAgreed(!isMarketingAgreed)}
                      className={`flex items-center justify-center w-8 h-8 p-3 rounded-lg transition-all duration-200 ${
                        isMarketingAgreed
                          ? "bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
                          : "bg-gray-200"
                      }`}
                      aria-pressed={isMarketingAgreed}
                      aria-label="Agree to marketing"
                    >
                      {isMarketingAgreed && (
                        <Image className="w-[17px] h-[13px]" alt="Check" src="/right.webp" width={17} height={13} />
                      )}
                    </button>

                    <p className="font-medium text-[#4f5d8094] text-xs [font-family:'Raleway',Helvetica] flex-1">
                      Я даю согласие на получение{" "}
                      <a href="/advertising-consent" className="text-[#73A8FF] underline">информационных и маркетинговых рассылок</a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default KPwindow;