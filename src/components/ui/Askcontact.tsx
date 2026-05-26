"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import Image from "next/image";

interface AskContactProps {
  onClose: () => void;
}

const Askcontact: React.FC<AskContactProps> = ({ onClose }) => {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);
  const [isMarketingAgreed, setIsMarketingAgreed] = useState(false);
  const [copySuccess, setCopySuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  // Updated contact info with two new phone numbers
  const contactInfo = [
    { type: "phone", value: "+7 (495) 760-42-20", icon: "/group-5.webp" },
    { type: "phone", value: "+7 (985) 760-42-20", icon: "/group-5.webp" },
    { type: "email", value: "info@mobile-tent.ru", icon: "/mail.webp", copyIcon: "/group-2.webp" },
  ];

  // Updated social links: Telegram new link, WhatsApp replaced by MAX
// До объявления socialLinks добавьте типы:
type SocialLink = 
  | { isSvg: true; svgPath: string; alt: string; href: string; }
  | { isSvg?: false; icon: string; alt: string; href: string; };

// Затем замените массив socialLinks
const socialLinks: SocialLink[] = [
  { 
    isSvg: false,
    icon: "/group.webp", 
    alt: "Telegram", 
    href: "https://t.me/+79857604220" 
  },
  { 
    isSvg: true,
    svgPath: "M508.211 878.328c-75.007 0-109.864-10.95-170.453-54.75-38.325 49.275-159.686 87.783-164.979 21.9 0-49.456-10.95-91.248-23.36-136.873-14.782-56.21-31.572-118.807-31.572-209.508 0-216.626 177.754-379.597 388.357-379.597 210.785 0 375.947 171.001 375.947 381.604.707 207.346-166.595 376.118-373.94 377.224m3.103-571.585c-102.564-5.292-182.499 65.7-200.201 177.024-14.6 92.162 11.315 204.398 33.397 210.238 10.585 2.555 37.23-18.98 53.837-35.587a189.8 189.8 0 0 0 92.71 33.032c106.273 5.112 197.08-75.794 204.215-181.95 4.154-106.382-77.67-196.486-183.958-202.574Z",
    alt: "MAX", 
    href: "https://max.ru/u/f9LHodD0cOK_6DAtIeOn3T51Xpzrkg2i4RB2ZEjtVfXOwvURhiW6gtGMLrA"
  },
];

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

  // --- Send payload to Bitrix webhook ---
  const sendToWebhook = async (cleanedPhone: string) => {
    const now = new Date();
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    const clientTime = now.toLocaleTimeString("ru-RU", { hour12: false });
    const clientDate = now.toLocaleDateString("ru-RU");
    const pageUrl = typeof window !== "undefined" ? window.location.href : "";
    const domainHost = typeof window !== "undefined" ? window.location.hostname : "mobile-tent.ru";

    const sp = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
    const utm_source   = sp?.get("utm_source")   || "";
    const utm_medium   = sp?.get("utm_medium")   || "";
    const utm_campaign = sp?.get("utm_campaign") || "";
    const utm_content  = sp?.get("utm_content")  || "";
    const utm_term     = sp?.get("utm_term")     || "";

    const sourceDescription =
      `Клиент нажал «Запросить контакты». ` +
      `Страница: ${pageUrl} | Время клиента: ${clientTime} (${tz}) | ` +
      `Дата создания (клиента): ${clientDate} | Источник: сайт ${domainHost} (форма «Запросить контакты»).`;

    const payload: Record<string, string> = {
      domain: domainHost,
      phone: cleanedPhone,
      "Время клиента": `${clientTime} (${tz})`,
      "Дата создания": clientDate,
      "Источник": `Сайт ${domainHost} — форма «Запросить контакты»`,
      UF_CRM_1698687546: domainHost,
      UF_CRM_CUST_LTIME: `${clientTime} (${tz})`,
      SOURCE_DESCRIPTION: sourceDescription,
      UF_CRM_1712907937027: pageUrl,
      UF_CRM_1728380948090: utm_source,
      UF_CRM_1728380965926: utm_medium,
      UF_CRM_1728380991359: utm_campaign,
      UF_CRM_1728381006839: utm_content,
      UF_CRM_1728381021062: utm_term,
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
    const cleanedPhone = phone.replace(/\D/g, "");

    if (!phone.trim()) {
      setFormError("Пожалуйста, введите ваш телефон");
      return;
    }
    if (!cleanedPhone.startsWith("7") || cleanedPhone.length !== 11) {
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

  const canSubmit = phone.replace(/\D/g, "").length === 11 && isAgreed && isMarketingAgreed && !isSubmitting;

  return (
    <>
      {/* Desktop */}
      <div className="hidden md:block">
        <div role="dialog" aria-modal="true" className="fixed inset-0 flex items-center justify-center z-50 bg-black/45">
          <Card className="relative w-full max-w-[1341px] h-[650px] border-0 bg-white rounded-[20px] shadow-lg">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-50 text-gray-500 hover:text-gray-700 text-3xl font-mono"
              aria-label="Закрыть модальное окно"
            >
              ×
            </button>

            <div className="absolute w-[562px] h-[588px] top-[-15px] right-0">
              <Image className="absolute w-[521px] h-[521px] top-[52px] left-[41px]" alt="Шатёр для мероприятий" src="/event-tent-i02-1.webp" width={521} height={521} priority />
              <Image className="absolute w-[412px] h-[573px] top-0 left-0" alt="Уверенный молодой бизнесмен" src="/QA2-confident-young-businessman-in-blue-shirt-and-glasses-smiling-at.webp" width={412} height={573} priority />
              <div className="absolute w-[526px] h-[222px] top-[381px] left-9">
                <Image className="absolute w-[409px] h-[222px] top-0 left-[91px]" alt="Зелёная трава" src="/vecteezy-overgrown-green-grass-generative-ai-generated-24190129-.webp" width={409} height={222} priority />
              </div>
            </div>

            <CardContent className="p-0">
              <form onSubmit={handleSubmit} className="flex flex-col items-start gap-6 absolute border-0 top-[45px] left-[55px] max-w-[544px]">
                <div className="flex flex-col items-start gap-[30px]">
                  <h1 className="font-semibold text-2xl font-raleway tracking-normal leading-normal">
                    <span className="text-[#232c42]">Запросить контакты</span>
                  </h1>
                  <p className="font-medium text-[#232c42] text-l font-raleway leading-normal">
                    и узнайте все подробности о нашей работе
                  </p>
                </div>

                <fieldset className="flex flex-col items-start gap-[31px] w-full" disabled={isSubmitting}>
                  <div className="flex flex-col w-full gap-5">
                    <div className="flex flex-col gap-4">
                      <div className="flex w-full h-[67px] items-center rounded-2xl border border-neutral-300 shadow-sm bg-white px-3">
                        <Input
                          value={phone}
                          onChange={handlePhoneChange}
                          onPaste={handlePhonePaste}
                          onFocus={handlePhoneFocus}
                          className="w-full h-full bg-transparent font-normal border-0 text-label-colorslc-l-secondary text-[17px] tracking-[-0.41px] leading-[22px] font-raleway"
                          placeholder="+7 (XXX) XXX-XX-XX"
                          aria-label="Ваш телефон"
                          inputMode="tel"
                          type="tel"
                          pattern="[\d+\-\s()]+"
                          required
                        />
                      </div>

                      {formError && (
                        <div className="text-red-500 text-sm -mt-2" aria-live="polite">
                          {formError}
                        </div>
                      )}

                      <Button
                        type="submit"
                        className={`w-[544px] h-[68px] rounded-2xl border-[none] shadow-2 ${
                          canSubmit
                            ? "bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] cursor-pointer hover:opacity-90"
                            : "bg-gradient-to-b from-[#cccccc] via-[#bbbbbb] to-[#999999] cursor-not-allowed"
                        }`}
                        disabled={!canSubmit || isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="text-white">Отправка...</span>
                        ) : (
                          <span className="font-semibold text-white text-base text-center whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0] leading-[normal]">
                            Запросить контакты клиентов
                          </span>
                        )}
                      </Button>
                    </div>

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

                      <p className="font-medium text-[#4f5d8094] text-xs font-raleway">
                        Я даю согласие на обработку{" "}
                        <a href="/privacy-consent" className="text-[#73A8FF] underline">персональных данных</a>{" "}
                        и согласен с{" "}
                        <a href="/privacy-policy" className="text-[#73A8FF] underline">политикой конфиденциальности</a>
                        <br />
                        Чекбокс политики *
                      </p>
                    </div>

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

                      <p className="font-medium text-[#4f5d8094] text-xs font-raleway">
                        Я даю согласие на получение{" "}
                        <a href="/advertising-consent" className="text-[#73A8FF] underline">информационных и маркетинговых рассылок</a>
                        <br />
                        Чекбокс рассылок *
                      </p>
                    </div>
                  </div>
                </fieldset>

                <div className="flex flex-col w-[544px] items-start gap-[30px]">
                  <h2 className="w-fit mt-[-1.00px] font-semibold text-[#232c42] text-xl text-center whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0] leading-[normal]">
                    Или свяжитесь по контактам
                  </h2>

                  <div className="flex w-[732px] items-start justify-between mr-[-188.00px]">
                    <div className="flex flex-col items-start gap-[11px]">
                      <div className="flex items-start gap-[18px]">
                        {socialLinks.map((social, index) => (
                          <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex w-7 h-7 items-center justify-center rounded-full hover:opacity-80 transition-opacity ${
                              social.isSvg 
                                ? "bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec]" 
                                : "bg-transparent"
                            }`}
                            aria-label={social.alt}
                          >
                            {social.isSvg ? (
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 1000 1000" fill="none">
                                <path fill="#fff" fillRule="evenodd" d={social.svgPath} clipRule="evenodd" />
                              </svg>
                            ) : (
                              <Image src={social.icon} alt={social.alt} width={20} height={20} className="w-5 h-5" />
                            )}
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-start gap-[23px]">
                      {contactInfo.slice(0, 2).map((contact, index) => (
                        <div key={index} className="flex items-center gap-[17px]">
                          <div className="flex w-[25px] h-[25px] items-center justify-center p-1.5 rounded-[50px] bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec]">
                            <Image src={contact.icon} alt="Телефон" width={12} height={12} className="w-3 h-3" />
                          </div>
                          <a href={`tel:${contact.value.replace(/[^\d+]/g, "")}`} className="font-raleway font-normal text-[#394355] text-sm hover:underline">
                            {contact.value}
                          </a>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col items-start gap-[13px]">
                      <div className="flex items-center gap-[18px] relative">
                        <div className="flex w-[25px] h-[25px] items-center justify-center p-1.5 rounded-[50px] bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec]">
                          <Image src={contactInfo[2].icon} alt="Email" width={15} height={11} className="w-[15px] h-[11px]" />
                        </div>
                        <button onClick={handleCopyEmail} className="flex items-center gap-1 hover:opacity-80 transition-opacity" aria-label="Скопировать email" type="button">
                          <a href={`mailto:${contactInfo[2].value}`} className="font-raleway font-normal text-[#232c42] text-sm hover:underline">
                            {contactInfo[2].value}
                          </a>
                          <Image src="/group-2.webp" alt="Копировать" width={16} height={16} className="w-4 h-4" />
                        </button>
                        {copySuccess && <span className="absolute -bottom-6 left-0 text-sm text-green-600 transition-opacity duration-300">{copySuccess}</span>}
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <div role="dialog" aria-modal="true" className="fixed inset-0 flex items-center justify-center z-50 bg-black/45 p-4">
          <Card className="relative w-full max-w-md border-0 bg-white rounded-[20px] shadow-lg overflow-y-auto max-h-[90vh]">
            <button onClick={onClose} className="absolute top-4 right-4 z-50 text-gray-500 hover:text-gray-700 text-3xl font-mono" aria-label="Закрыть модальное окно">
              ×
            </button>

            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="flex flex-col items-start gap-6">
                <div className="flex flex-col items-start gap-[20px]">
                  <h1 className="font-semibold text-xl font-raleway tracking-normal leading-normal">
                    <span className="text-[#232c42]">Запросить контакты</span>
                  </h1>
                  <p className="font-medium text-[#232c42] text-base font-raleway leading-normal">и узнайте все подробности о нашей работе</p>
                </div>

                <fieldset className="flex flex-col items-start gap-5 w-full" disabled={isSubmitting}>
                  <div className="flex flex-col w-full gap-4">
                    <div className="flex flex-col gap-3">
                      <div className="flex w-full h-[55px] items-center rounded-2xl border border-neutral-300 shadow-sm bg-white px-3">
                        <Input
                          value={phone}
                          onChange={handlePhoneChange}
                          onPaste={handlePhonePaste}
                          onFocus={handlePhoneFocus}
                          className="w-full h-full bg-transparent font-normal border-0 text-label-colorslc-l-secondary text-base tracking-[-0.41px] leading-[22px] font-raleway"
                          placeholder="+7 (XXX) XXX-XX-XX"
                          aria-label="Ваш телефон"
                          inputMode="tel"
                          type="tel"
                          pattern="[\d+\-\s()]+"
                          required
                        />
                      </div>

                      {formError && (
                        <div className="text-red-500 text-sm -mt-1" aria-live="polite">
                          {formError}
                        </div>
                      )}

                      <Button
                        type="submit"
                        className={`w-full h-[55px] rounded-2xl border-[none] shadow-2 ${
                          canSubmit
                            ? "bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] cursor-pointer hover:opacity-90"
                            : "bg-gradient-to-b from-[#cccccc] via-[#bbbbbb] to-[#999999] cursor-not-allowed"
                        }`}
                        disabled={!canSubmit || isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="text-white">Отправка...</span>
                        ) : (
                          <span className="font-semibold text-white text-sm text-center whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0] leading-[normal]">
                            Запросить контакты клиентов
                          </span>
                        )}
                      </Button>
                    </div>

                    <div className="flex items-center gap-2 w-full">
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
                        {isAgreed && (
                          <Image className="w-[15px] h-[11px]" alt="Check" src="/right.webp" width={15} height={11} />
                        )}
                      </button>

                      <p className="font-medium text-[#4f5d8094] text-xs font-raleway flex-1">
                        Я даю согласие на обработку{" "}
                        <a href="/privacy-consent" className="text-[#73A8FF] underline">персональных данных</a>{" "}
                        и согласен с{" "}
                        <a href="/privacy-policy" className="text-[#73A8FF] underline">политикой конфиденциальности</a>
                        <br />
                        Чекбокс политики *
                      </p>
                    </div>

                    <div className="flex items-center gap-2 w-full">
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
                        {isMarketingAgreed && (
                          <Image className="w-[15px] h-[11px]" alt="Check" src="/right.webp" width={15} height={11} />
                        )}
                      </button>

                      <p className="font-medium text-[#4f5d8094] text-xs font-raleway flex-1">
                        Я даю согласие на получение{" "}
                        <a href="/advertising-consent" className="text-[#73A8FF] underline">информационных и маркетинговых рассылок</a>
                        <br />
                        Чекбокс рассылок *
                      </p>
                    </div>
                  </div>
                </fieldset>

                <div className="flex flex-col w-full items-start gap-5 relative">
                  <h2 className="w-fit font-semibold text-[#232c42] text-lg text-center whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0] leading-[normal]">
                    Или свяжитесь по контактам
                  </h2>

                  <div className="flex flex-col gap-3">
                    {contactInfo.slice(0, 2).map((contact, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="flex w-[25px] h-[25px] items-center justify-center p-1.5 rounded-[50px] bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec]">
                          <Image src={contact.icon} alt="Телефон" width={12} height={12} className="w-3 h-3" />
                        </div>
                        <a href={`tel:${contact.value.replace(/[^\d+]/g, "")}`} className="font-raleway font-normal text-[#394355] text-sm hover:underline">
                          {contact.value}
                        </a>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3 relative">
                      <div className="flex w-[25px] h-[25px] items-center justify-center p-1.5 rounded-[50px] bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec]">
                        <Image src={contactInfo[2].icon} alt="Email" width={15} height={11} className="w-[15px] h-[11px]" />
                      </div>
                      <button onClick={handleCopyEmail} className="flex items-center gap-1 hover:opacity-80 transition-opacity" aria-label="Скопировать email" type="button">
                        <a href={`mailto:${contactInfo[2].value}`} className="font-raleway font-normal text-[#232c42] text-sm hover:underline">
                          {contactInfo[2].value}
                        </a>
                        <Image src="/group-2.webp" alt="Копировать" width={16} height={16} className="w-4 h-4" />
                      </button>
                      {copySuccess && <span className="absolute -bottom-5 left-0 text-xs text-green-600 transition-opacity duration-300">{copySuccess}</span>}
                    </div>

                    <div className="flex flex-row gap-4 w-full z-20">
                      <div className="flex-1 flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                          {socialLinks.map((social, index) => (
                            <a
                              key={index}
                              href={social.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`flex w-8 h-8 items-center justify-center rounded-full hover:opacity-80 transition-opacity ${
                                social.isSvg 
                                  ? "bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec]" 
                                  : "bg-transparent"
                              }`}
                              aria-label={social.alt}
                            >
                              {social.isSvg ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1000 1000" fill="none">
                                  <path fill="#fff" fillRule="evenodd" d={social.svgPath} clipRule="evenodd" />
                                </svg>
                              ) : (
                                <Image src={social.icon} alt={social.alt} width={24} height={24} className="w-6 h-6" />
                              )}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-[140px] right-0 w-[300px] h-[200px] z-0">
                    <Image src="/event-tent-i02-1.webp" alt="Шатёр для мероприятий" width={200} height={200} className="w-full h-auto rounded-lg" priority />
                  </div>
                  <div className="absolute top-[65px] right-0 w-[255px] h-[180px] z-10">
                    <Image src="/QA2-confident-young-businessman-in-blue-shirt-and-glasses-smiling-at.webp" alt="Уверенный молодой бизнесмен" width={180} height={180} className="w-full h-auto rounded-lg" priority />
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Askcontact;