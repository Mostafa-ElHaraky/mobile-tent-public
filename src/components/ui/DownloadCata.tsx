'use client';

import { XIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input"; 
import Image from 'next/image';
import { useRouter } from "next/navigation";

// --- helpers (SSR-safe) ---
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

interface DownloadCataProps {
  onClose: () => void;
}

// Updated contact info with new phone numbers
const contactInfo = [
  { type: "phone", value: "+7 (495) 760-42-20", icon: "/group-5.webp" },
  { type: "phone", value: "+7 (985) 760-42-20", icon: "/group-5.webp" },
  { type: "email", value: "info@mobile-tent.ru", icon: "/mail.webp", copyIcon: "/group-2.webp" },
];

export const DownloadCata = ({ onClose }: DownloadCataProps): React.ReactElement => {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);
  const [isMarketingAgreed, setIsMarketingAgreed] = useState(false);
  const [copySuccess, setCopySuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

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

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    
    // Get cursor position before formatting
    const cursorPosition = e.target.selectionStart;
    
    // Format the phone number
    const formatted = formatRuPhone(newValue);
    setPhone(formatted);
    setFormError("");
    
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
    setFormError("");
  };

  const handlePhoneFocus = () => {
    if (!phone.trim()) {
      setPhone("+7");
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText(contactInfo[2].value)
      .then(() => setCopySuccess("Скопировано!"))
      .catch(() => setCopySuccess("Ошибка копирования"));
    setTimeout(() => setCopySuccess(""), 2000);
  };

  // ---- Webhook sender (Bitrix-ready payload) ----
  const sendToWebhook = async (cleanedPhone: string) => {
    const now = new Date();
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    const clientTime = now.toLocaleTimeString("ru-RU", { hour12: false });
    const clientDate = now.toLocaleDateString("ru-RU"); // DD.MM.YYYY
    const pageUrl = typeof window !== "undefined" ? window.location.href : "";
    const domainHost = typeof window !== "undefined" ? window.location.hostname : "tent-test.ru";
    const pageTitle = typeof document !== "undefined" ? document.title : "";
    const referrer = typeof document !== "undefined" ? document.referrer : "";

    // URL params
    const utm_source = getSearchParam("utm_source");
    const utm_medium = getSearchParam("utm_medium");
    const utm_campaign = getSearchParam("utm_campaign");
    const utm_content = getSearchParam("utm_content");
    const utm_term = getSearchParam("utm_term");
    const gclid = getSearchParam("gclid");
    const yclid = getSearchParam("yclid");

    // Cookies/IDs
    const gaCookie = getCookie("_ga");
    const gaClientId = parseGAClientId(gaCookie);
    const ymUid = getCookie("_ym_uid");
    const roistat_visit = getCookie("roistat_visit");

    // Device/browser context
    const dpr = typeof window !== "undefined" && window.devicePixelRatio ? String(window.devicePixelRatio) : "";
    const vw = typeof window !== "undefined" && window.innerWidth ? String(window.innerWidth) : "";
    const vh = typeof window !== "undefined" && window.innerHeight ? String(window.innerHeight) : "";
    const lang = typeof navigator !== "undefined" ? navigator.language : "";
    const platform = typeof navigator !== "undefined" ? (navigator as any).platform || "" : "";
    const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";

    const sourceDescription =
      `Клиент оставил телефон в форме «Скачайте каталог шатров». ` +
      `Страница: ${pageUrl} | Время клиента: ${clientTime} (${tz}) | ` +
      `Дата создания (клиента): ${clientDate} | Источник: сайт ${domainHost} (форма каталога).`;

    const messageReadable =
      `Форма: «Скачать каталог шатров»\n` +
      `Страница: ${pageUrl}\nЗаголовок: ${pageTitle}\nИсточник-реферер: ${referrer || "—"}\n` +
      `Время клиента: ${clientTime} (${tz}), Дата: ${clientDate}\n\n` +
      `UTM: source=${utm_source || "—"}, medium=${utm_medium || "—"}, campaign=${utm_campaign || "—"}, content=${utm_content || "—"}, term=${utm_term || "—"}\n` +
      `gclid=${gclid || "—"}, yclid=${yclid || "—"}, roistat_visit=${roistat_visit || "—"}\n` +
      `_ga=${gaCookie || "—"} (cid=${gaClientId || "—"}), _ym_uid=${ymUid || "—"}\n\n` +
      `Устройство: ${platform || "—"}, Язык: ${lang || "—"}, DPR=${dpr || "—"}, viewport=${vw || "—"}×${vh || "—"}\n` +
      `User-Agent: ${ua || "—"}`;

    const payload: Record<string, string> = {
      // Simple keys
      domain: domainHost,
      phone: cleanedPhone,
      "Время клиента": `${clientTime} (${tz})`,
      "Дата создания": clientDate,
      "Источник": `Сайт ${domainHost} — форма «Скачать каталог шатров»`,

      // Bitrix fields
      UF_CRM_1698687546: domainHost,              // Домен сайта
      UF_CRM_CUST_LTIME: `${clientTime} (${tz})`, // Время клиента
      SOURCE_DESCRIPTION: sourceDescription,      // Дополнительно об источнике
      UF_CRM_1712907937027: pageUrl,              // URL
      "doc.pagetitle": pageTitle,                 // Page title

      // UTM custom fields
      UF_CRM_1728380948090: utm_source,
      UF_CRM_1728380965926: utm_medium,
      UF_CRM_1728380991359: utm_campaign,
      UF_CRM_1728381006839: utm_content,
      UF_CRM_1728381021062: utm_term,

      // Ads/counters
      _ga: gaCookie,
      _ym_uid: ymUid,
      gclid,
      yclid,

      // Optional cookie used elsewhere in your stack
      roistat_visit,

      // Rich COMMENTS (if you later map "message" to COMMENTS)
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
      await fetch("https://crm.grand-tent.ru/local/webhooks/get_from_sites.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
        body,
        mode: "no-cors",
      });
    } catch (e) {
      console.error("Webhook error:", e);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanedPhone = phone.replace(/\D/g, '');

    if (!phone.trim()) {
      setFormError("Пожалуйста, введите ваш телефон");
      return;
    }
    if (!cleanedPhone.startsWith('7') || cleanedPhone.length !== 11) {
      setFormError("Введите корректный российский номер (+7 XXX XXX-XX-XX)");
      return;
    }
    if (!isAgreed) {
      setFormError("Вы должны согласиться с Пользовательским соглашением");
      return;
    }
    if (!isMarketingAgreed) {
      setFormError("Вы должны согласиться на получение информационных и маркетинговых рассылок");
      return;
    }

    setIsSubmitting(true);
    try {
      await sendToWebhook(cleanedPhone);
      onClose();
      setPhone("");
      setIsAgreed(false);
      setIsMarketingAgreed(false);
      router.push("/thankyou");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  // Check if form can be submitted - BOTH checkboxes must be checked
  const canSubmit = phone.replace(/\D/g, "").length === 11 && isAgreed && isMarketingAgreed && !isSubmitting;

  // MAX icon SVG path
  const maxIconPath = "M508.211 878.328c-75.007 0-109.864-10.95-170.453-54.75-38.325 49.275-159.686 87.783-164.979 21.9 0-49.456-10.95-91.248-23.36-136.873-14.782-56.21-31.572-118.807-31.572-209.508 0-216.626 177.754-379.597 388.357-379.597 210.785 0 375.947 171.001 375.947 381.604.707 207.346-166.595 376.118-373.94 377.224m3.103-571.585c-102.564-5.292-182.499 65.7-200.201 177.024-14.6 92.162 11.315 204.398 33.397 210.238 10.585 2.555 37.23-18.98 53.837-35.587a189.8 189.8 0 0 0 92.71 33.032c106.273 5.112 197.08-75.794 204.215-181.95 4.154-106.382-77.67-196.486-183.958-202.574Z";

  return (
    <>
      {/* =============== Desktop =============== */}
      <div className="hidden md:block">
        <div className="w-[445px] h-[500px]">
          <Card className="relative h-[520px] bg-white rounded-[20px] border-0 shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]">
            <div 
              className="absolute w-[30px] h-[30px] top-[-15px] left-[415px] z-10 cursor-pointer"
              onClick={onClose}
            >
              <div className="relative w-7 h-7 top-px left-px">
                <div className="absolute w-[17px] h-[17px] top-[5px] left-[5px] bg-white rounded-[8.5px]" />
                <XIcon className="absolute w-7 h-7 top-0 left-0" />
              </div>
            </div>

            <CardContent className="flex flex-col items-center gap-[45px] pt-[30px] px-10">
              <div className="flex flex-col items-center gap-[30px]">
                <div className="flex flex-col items-center gap-4">
                  <h2 className="w-[344px] mt-[-1.00px] font-semibold text-[#232c42] text-2xl text-center [font-family:'Raleway',Helvetica] tracking-[0] leading-[normal]">
                    Скачайте каталог шатров
                  </h2>
                  <p className="w-[344px] font-medium text-[#232c42] text-base text-center [font-family:'Raleway',Helvetica] tracking-[0] leading-[normal]">
                    Выберите, куда удобно получить каталог
                  </p>
                </div>

                <div className="flex items-center gap-[18px]">
                  {/* Telegram - updated link - no background */}
                  <a 
                    href="https://t.me/+79857604220" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="relative w-7 h-7 block bg-transparent"
                  >
                    <Image className="absolute top-[3px] left-0.5" src="/group.webp" alt="Telegram icon" width={21} height={18} />
                  </a>
                  
                  {/* MAX icon - with gradient background */}
                  <a 
                    href="https://max.ru/u/f9LHodD0cOK_6DAtIeOn3T51Xpzrkg2i4RB2ZEjtVfXOwvURhiW6gtGMLrA" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex w-7 h-7 items-center justify-center rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec]"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 1000 1000" fill="none">
                      <path fill="#fff" fillRule="evenodd" d={maxIconPath} clipRule="evenodd" />
                    </svg>
                  </a>

                  {/* Email copy button */}
                  <div 
                    className="flex w-[25px] h-[25px] items-center justify-center p-1.5 relative rounded-full bg-[linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] cursor-pointer"
                    onClick={handleCopyEmail}
                  >
                    <div className="relative w-[21px] h-[21px] mt-[-4.00px] mb-[-4.00px] ml-[-4.00px] mr-[-4.00px]">
                      <div className="relative w-[15px] h-[15px] top-[3px] left-[3px]">
                        <Image src={contactInfo[2].icon} alt="Email" width={15} height={11} className="w-[15px] h-[11px]" />
                      </div>
                    </div>
                  </div>
                </div>
                {copySuccess && (
                  <div className="absolute top-20 bg-gray-800 text-white px-3 py-1 rounded-md text-sm">
                    {copySuccess}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col w-[365px] items-center gap-5">
                  <div className="flex flex-col gap-4">
                    <div className="w-[349px] h-[67px] rounded-2xl overflow-hidden border border-solid border-neutral-200 shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]">
                      <Input
                        value={phone}
                        onChange={handlePhoneChange}
                        onPaste={handlePhonePaste}
                        onFocus={handlePhoneFocus}
                        onKeyDown={handleKeyDown}
                        className="w-full h-[67px] px-3 py-2 bg-white rounded-2xl text-[17px] [font-family:'Raleway',Helvetica] font-normal text-label-colorslc-l-secondary tracking-[-0.41px] leading-[22px]"
                        placeholder="+7 (XXX) XXX-XX-XX"
                        inputMode="tel"
                        type="tel"
                        aria-label="Phone number"
                      />
                    </div>

                    {formError && (
                      <p className="text-red-500 text-sm text-center mt-[-10px]">
                        {formError}
                      </p>
                    )}

                    <Button 
                      type="submit"
                      disabled={!canSubmit}
                      className={`w-[349px] h-[68px] rounded-2xl shadow-2 ${
                        canSubmit
                          ? "bg-[linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] cursor-pointer"
                          : "bg-gradient-to-b from-[#cccccc] via-[#bbbbbb] to-[#999999] cursor-not-allowed"
                      }`}
                    >
                      <span className="font-semibold text-white text-base text-center whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0] leading-[normal]">
                        {isSubmitting ? "Отправка..." : "Скачать каталог шатров"}
                      </span>
                    </Button>
                  </div>

                  {/* Checkbox 1 - Required */}
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

                  {/* Checkbox 2 - Now Also Required */}
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
                      <br />
                      Чекбокс рассылок *
                    </p>
                  </div>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* =============== Mobile =============== */}
      <div className="md:hidden w-full px-4">
        <Card className="relative bg-white rounded-[20px] border-0 shadow-lg backdrop-blur-[79px]">
          <div className="absolute w-8 h-8 top-[-16px] right-4 z-10 cursor-pointer" onClick={onClose}>
            <div className="relative w-7 h-7">
              <div className="absolute w-[17px] h-[17px] top-[5px] left-[5px] bg-white rounded-[8.5px]" />
              <XIcon className="absolute w-7 h-7 top-0 left-0 text-gray-700" />
            </div>
          </div>

          <CardContent className="flex flex-col items-center gap-6 pt-8 px-6 pb-6">
            <div className="flex flex-col items-center gap-6">
              <div className="flex flex-col items-center gap-3">
                <h2 className="font-semibold text-[#232c42] text-xl text-center [font-family:'Raleway',Helvetica]">
                  Скачайте каталог шатров
                </h2>
                <p className="font-medium text-[#232c42] text-sm text-center [font-family:'Raleway',Helvetica]">
                  Выберите, куда удобно получить каталог
                </p>
              </div>

              <div className="flex items-center gap-6">
                {/* Telegram - no background */}
                <a 
                  href="https://t.me/+79857604220" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-transparent"
                >
                  <Image src="/group.webp" alt="Telegram" width={24} height={20} />
                </a>
                
                {/* MAX icon - with gradient background */}
                <a 
                  href="https://max.ru/u/f9LHodD0cOK_6DAtIeOn3T51Xpzrkg2i4RB2ZEjtVfXOwvURhiW6gtGMLrA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex w-10 h-10 items-center justify-center rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 1000 1000" fill="none">
                    <path fill="#fff" fillRule="evenodd" d={maxIconPath} clipRule="evenodd" />
                  </svg>
                </a>

                {/* Email copy button */}
                <div onClick={handleCopyEmail} className="flex w-10 h-10 items-center justify-center rounded-full bg-gradient-to-b from-[#73A8FF] to-[#3C6CEC] cursor-pointer">
                  <Image src="/mail.webp" alt="Email" width={16} height={12} />
                </div>
              </div>

              {copySuccess && (
                <div className="bg-gray-800 text-white px-3 py-1 rounded-md text-sm">
                  {copySuccess}
                </div>
              )}

              <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-5">
                <div className="w-full">
                  <Input
                    value={phone}
                    onChange={handlePhoneChange}
                    onPaste={handlePhonePaste}
                    onFocus={handlePhoneFocus}
                    onKeyDown={handleKeyDown}
                    className="w-full h-14 px-4 py-2 bg-white rounded-2xl text-base [font-family:'Raleway',Helvetica] font-normal"
                    placeholder="+7 (XXX) XXX-XX-XX"
                    inputMode="tel"
                    type="tel"
                    aria-label="Phone number"
                  />
                  {formError && (
                    <p className="text-red-500 text-xs text-center mt-1">{formError}</p>
                  )}
                </div>

                <Button 
                  type="submit"
                  disabled={!canSubmit}
                  className={`w-full h-14 rounded-2xl ${
                    canSubmit
                      ? "bg-gradient-to-b from-[#73A8FF] to-[#3C6CEC] cursor-pointer"
                      : "bg-gradient-to-b from-[#cccccc] via-[#bbbbbb] to-[#999999] cursor-not-allowed"
                  } text-white font-semibold`}
                >
                  {isSubmitting ? "Отправка..." : "Скачать каталог шатров"}
                </Button>

                {/* Checkbox 1 - Mobile - Required */}
                <div className="flex items-start gap-2.5 w-full">
                  <button
                    type="button"
                    onClick={() => setIsAgreed(!isAgreed)}
                    className={`flex items-center justify-center w-8 h-8 p-2 rounded-lg transition-all duration-200 ${
                      isAgreed
                        ? "bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
                        : "bg-gray-200"
                    }`}
                    aria-pressed={isAgreed}
                    aria-label="Agree to terms"
                  >
                    {isAgreed && <Image src="/right.webp" alt="Галочка" width={16} height={12} />}
                  </button>
                  <p className="text-[#4f5d8094] text-xs leading-tight text-left [font-family:'Raleway',Helvetica] flex-1">
                    Я даю согласие на обработку{" "}
                    <a href="/privacy-consent" className="text-[#73A8FF] underline">персональных данных</a>{" "}
                    и согласен с{" "}
                    <a href="/privacy-policy" className="text-[#73A8FF] underline">политикой конфиденциальности</a>
                    <br />
                    Чекбокс политики *
                  </p>
                </div>

                {/* Checkbox 2 - Mobile - Now Also Required */}
                <div className="flex items-start gap-2.5 w-full">
                  <button
                    type="button"
                    onClick={() => setIsMarketingAgreed(!isMarketingAgreed)}
                    className={`flex items-center justify-center w-8 h-8 p-2 rounded-lg transition-all duration-200 ${
                      isMarketingAgreed
                        ? "bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
                        : "bg-gray-200"
                    }`}
                    aria-pressed={isMarketingAgreed}
                    aria-label="Agree to marketing"
                  >
                    {isMarketingAgreed && <Image src="/right.webp" alt="Галочка" width={16} height={12} />}
                  </button>
                  <p className="text-[#4f5d8094] text-xs leading-tight text-left [font-family:'Raleway',Helvetica] flex-1">
                    Я даю согласие на получение{" "}
                    <a href="/advertising-consent" className="text-[#73A8FF] underline">информационных и маркетинговых рассылок</a>
                    <br />
                    Чекбокс рассылок *
                  </p>
                </div>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default DownloadCata;