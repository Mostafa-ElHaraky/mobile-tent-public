"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";

type FrameofhelpProps = {
  showMobileModal?: boolean;
  onClose?: () => void;
};

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

const Application = ({ showMobileModal = false, onClose }: FrameofhelpProps) => {
  const [isAgreed, setIsAgreed] = useState(false);
  const [isMarketingAgreed, setIsMarketingAgreed] = useState(false);
  const [phone, setPhone] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState("");
  const [isSending, setIsSending] = useState(false);

  const router = useRouter();

  // Updated contact info with new phone number
  const contactInfo = {
    phone: "+7 (495) 760-42-20",
    email: "info@mobile-tent.ru",
  };

  // --- Fixed RU phone formatter ---
  const formatRuPhone = useCallback((input: string): string => {
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
  }, []);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    
    // Get cursor position before formatting
    const cursorPosition = e.target.selectionStart;
    
    // Format the phone number
    const formatted = formatRuPhone(newValue);
    setPhone(formatted);
    setError("");
    
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
    setError("");
  };

  const handlePhoneFocus = () => {
    if (!phone.trim()) {
      setPhone("+7");
    }
  };

  useEffect(() => {
    if (!phone) {
      setIsValid(true);
      return;
    }
    const digitCount = phone.replace(/\D/g, "").length;
    setIsValid(digitCount === 11 && phone.startsWith("+7"));
  }, [phone]);

  const sendToWebhook = async (cleanPhone: string) => {
    const now = new Date();
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    const clientTime = now.toLocaleTimeString("ru-RU", { hour12: false });
    const clientDate = now.toLocaleDateString("ru-RU");
    const pageUrl = typeof window !== "undefined" ? window.location.href : "";
    const domainHost = typeof window !== "undefined" ? window.location.hostname : "mobile-tent.ru";
    const pageTitle = typeof document !== "undefined" ? document.title : "";
    const referrer = typeof document !== "undefined" ? document.referrer : "";

    // Params
    const utm_source = getSearchParam("utm_source");
    const utm_medium = getSearchParam("utm_medium");
    const utm_campaign = getSearchParam("utm_campaign");
    const utm_content = getSearchParam("utm_content");
    const utm_term = getSearchParam("utm_term");
    const gclid = getSearchParam("gclid");
    const yclid = getSearchParam("yclid");

    // Cookies
    const gaCookie = getCookie("_ga");
    const ymUid = getCookie("_ym_uid");
    const roistat_visit = getCookie("roistat_visit");
    const gaClientId = parseGAClientId(gaCookie);

    // Device/browser context
    const dpr = typeof window !== "undefined" ? String(window.devicePixelRatio) : "";
    const vw = typeof window !== "undefined" ? String(window.innerWidth) : "";
    const vh = typeof window !== "undefined" ? String(window.innerHeight) : "";
    const lang = typeof navigator !== "undefined" ? navigator.language : "";
    const platform = typeof navigator !== "undefined" ? (navigator as any).platform || "" : "";
    const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";

    const sourceDescription =
      `Клиент оставил номер телефона в модальном окне: ` +
      `«Помочь с подбором / Закажите обратный звонок». ` +
      `Страница: ${pageUrl} | Время клиента: ${clientTime} (${tz}) | ` +
      `Дата создания (клиента): ${clientDate} | Источник: сайт ${domainHost} (модальная форма).`;

    // Rich readable message (optional, if your PHP maps to COMMENTS or similar)
    const message =
      `Форма: «Помочь с подбором / Закажите обратный звонок»\n` +
      `Страница: ${pageUrl}\nЗаголовок: ${pageTitle}\nРеферер: ${referrer || "—"}\n` +
      `Время клиента: ${clientTime} (${tz}), Дата: ${clientDate}\n` +
      `UTM: source=${utm_source || "—"}, medium=${utm_medium || "—"}, campaign=${utm_campaign || "—"}, content=${utm_content || "—"}, term=${utm_term || "—"}\n` +
      `gclid=${gclid || "—"}, yclid=${yclid || "—"}, roistat_visit=${roistat_visit || "—"}\n` +
      `_ga=${gaCookie || "—"} (cid=${gaClientId || "—"}), _ym_uid=${ymUid || "—"}\n` +
      `Устройство: ${platform || "—"}, Язык: ${lang || "—"}, DPR=${dpr || "—"}, viewport=${vw || "—"}×${vh || "—"}\n` +
      `User-Agent: ${ua || "—"}`;

    const payload: Record<string, string> = {
      // simple keys
      domain: domainHost,
      phone: cleanPhone,
      "Время клиента": `${clientTime} (${tz})`,
      "Дата создания": clientDate,
      "Источник": "Сайт mobile-tent.ru — модальная форма «Помочь с подбором»",

      // Bitrix UF_ fields you use
      UF_CRM_1698687546: domainHost,                 // Домен сайта
      UF_CRM_CUST_LTIME: `${clientTime} (${tz})`,    // Время клиента (текст)
      SOURCE_DESCRIPTION: sourceDescription,         // Дополнительно об источнике
      UF_CRM_1712907937027: pageUrl,                 // Страница
      "doc.pagetitle": pageTitle,                    // Если у вас маппинг на это поле

      // UTM
      UF_CRM_1728380948090: utm_source,
      UF_CRM_1728380965926: utm_medium,
      UF_CRM_1728380991359: utm_campaign,
      UF_CRM_1728381006839: utm_content,
      UF_CRM_1728381021062: utm_term,

      // Ads/counters (if your PHP reads them как в вашем серверном коде)
      _ga: gaCookie,
      _ym_uid: ymUid,
      gclid,
      yclid,
      roistat_visit,

      // Rich message blob (optional)
      message,
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

  const handleSubmit = async () => {
    setError("");
    if (isSending) return;

    const cleanPhone = phone.replace(/\D/g, "");
    if (!isValid || !cleanPhone.startsWith("7") || cleanPhone.length !== 11) {
      setError("Введите корректный российский номер телефона");
      return;
    }
    if (!isAgreed) {
      setError("Вы должны согласиться с Пользовательским соглашением");
      return;
    }
    if (!isMarketingAgreed) {
      setError("Вы должны согласиться на получение информационных и маркетинговых рассылок");
      return;
    }

    setIsSending(true);
    await sendToWebhook(cleanPhone);
    setIsSending(false);

    onClose?.();
    setPhone("");
    setIsAgreed(false);
    setIsMarketingAgreed(false);
    router.push("/thankyou");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  // Check if form can be submitted - BOTH checkboxes must be checked
  const canSubmit = isValid && phone.replace(/\D/g, "").length === 11 && isAgreed && isMarketingAgreed && !isSending;

  return (
    <>
      {/* Desktop Modal */}
      {!showMobileModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45">
          <Card className="relative w-full max-w-[445px] h-[725px] bg-white rounded-[20px] border-0 [background:linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(245,246,255,1)_100%)]">
            <button
              onClick={() => onClose?.()}
              className="absolute top-4 right-4 z-50 text-gray-500 hover:text-gray-700 text-3xl font-mono"
              aria-label="Close"
            >
              ×
            </button>

            <div className="w-[445px] h-[625px]">
              <Card className="relative h-[725px] border-0 rounded-[20px] shadow-[var(--)] backdrop-blur-[79px]">
                <CardContent className="flex flex-col items-center gap-[45px] pt-[30px] px-10">
                  <div className="flex flex-col items-center gap-[30px]">
                    <h2 className="font-semibold text-[#232c42] text-2xl text-center [font-family:'Raleway',Helvetica]">
                      Закажите обратный звонок
                    </h2>

                    <p className="w-[365px] font-medium text-[#232c42] text-sm text-center [font-family:'Raleway',Helvetica]">
                      Перезвоним в течении 30 минут
                      <br />
                      Ответим на вопросы, запросим данные для рассчета стоимости и сроков
                    </p>

                    <div className="flex flex-col w-[365px] items-center gap-5">
                      <div className="flex flex-col items-start justify-end gap-4">
                        <div className="w-[349px] rounded-2xl overflow-hidden border border-solid border-neutral-200 shadow-[var(--)] backdrop-blur-[79px]">
                          <div className="flex w-full h-[67px] items-center gap-2 pl-3 pr-2 py-2 bg-white rounded-2xl">
                            <Input
                              className="border-none shadow-none [font-family:'Raleway',Helvetica] font-normal text-label-colorslc-l-secondary text-[17px] tracking-[-0.41px] leading-[22px] w-full"
                              placeholder="+7 (___) ___-__-__"
                              value={phone}
                              onChange={handlePhoneChange}
                              onPaste={handlePhonePaste}
                              onFocus={handlePhoneFocus}
                              onKeyDown={handleKeyDown}
                              inputMode="tel"
                              type="tel"
                              aria-label="Phone number"
                            />
                          </div>
                        </div>

                        {(!isValid && phone) && (
                          <p className="text-red-600 text-sm mt-1 w-full">
                            Введите корректный российский номер телефона
                          </p>
                        )}
                        {error && (
                          <p className="text-red-600 text-sm mt-1 w-full">{error}</p>
                        )}

                        <Button
                          className={`w-[349px] h-[68px] rounded-2xl border-none shadow-2 ${
                            canSubmit
                              ? "bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC] cursor-pointer"
                              : "bg-gradient-to-b from-[#cccccc] via-[#bbbbbb] to-[#999999] cursor-not-allowed"
                          } ${isSending ? "opacity-50 cursor-not-allowed" : ""}`}
                          onClick={handleSubmit}
                          disabled={!canSubmit || isSending}
                        >
                          <span className="font-semibold text-white text-base text-center [font-family:'Raleway',Helvetica]">
                            {isSending ? "Отправка…" : "Получить помощь в подборе"}
                          </span>
                        </Button>
                      </div>

                      {/* Checkbox 1 - Required */}
                      <div className="flex items-center justify-center gap-2.5">
                        <button
                          onClick={() => setIsAgreed(!isAgreed)}
                          className={`flex items-center justify-center w-[33px] h-[33px] p-3 rounded-lg transition-all duration-200 ${
                            isAgreed
                              ? "bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
                              : "bg-gray-200"
                          }`}
                          aria-pressed={isAgreed}
                          aria-label="Agree to terms"
                          type="button"
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

                        <p className="w-[296px] font-medium text-[#4f5d8094] text-xs [font-family:'Raleway',Helvetica]">
                          Я даю согласие на обработку{" "}
                          <a href="/privacy-consent" className="text-[#73A8FF] underline">персональных данных</a>{" "}
                          и согласен с{" "}
                          <a href="/privacy-policy" className="text-[#73A8FF] underline">политикой конфиденциальности</a>
                          <br />
                          Чекбокс политики *
                        </p>
                      </div>

                      {/* Checkbox 2 - Now Also Required */}
                      <div className="flex items-center justify-center gap-2.5">
                        <button
                          onClick={() => setIsMarketingAgreed(!isMarketingAgreed)}
                          className={`flex items-center justify-center w-[33px] h-[33px] p-3 rounded-lg transition-all duration-200 ${
                            isMarketingAgreed
                              ? "bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
                              : "bg-gray-200"
                          }`}
                          aria-pressed={isMarketingAgreed}
                          aria-label="Agree to marketing"
                          type="button"
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

                        <p className="w-[296px] font-medium text-[#4f5d8094] text-xs [font-family:'Raleway',Helvetica]">
                          Я даю согласие на получение{" "}
                          <a href="/advertising-consent" className="text-[#73A8FF] underline">информационных и маркетинговых рассылок</a>
                          <br />
                          Чекбокс рассылок *
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Contacts */}
                  <div className="flex flex-col items-center gap-[30px]">
                    <h3 className="font-semibold text-[#232c42] text-xl text-center [font-family:'Raleway',Helvetica]">
                      Или свяжитесь по контактам
                    </h3>

                    <div className="flex flex-col w-[340px] items-center gap-6">
                      <div className="flex items-start gap-[13px]">
                        <div className="flex items-start gap-[23px]">
                          {/* Updated phone number and tel link */}
                          <a href="tel:+74957604220" className="flex items-center gap-[17px]">
                            <div className="flex w-[25px] h-[25px] items-center justify-center p-1.5 rounded-full [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
                              <div className="relative w-[21px] h-[21px] -m-[4px]">
                                <Image className="absolute w-3 h-3 top-1 left-1" alt="Phone" src="/group-5.webp" width={12} height={12} />
                              </div>
                            </div>
                            <span className="[font-family:'Raleway',Helvetica] font-normal text-[#394355] text-sm whitespace-nowrap">
                              {contactInfo.phone}
                            </span>
                          </a>

                          <a href="mailto:sales@i-avr.ru" className="flex items-center gap-[18px]">
                            <div className="flex w-[25px] h-[25px] items-center justify-center p-1.5 rounded-full [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
                              <div className="relative w-[21px] h-[21px] -m-[4px]">
                                <div className="relative w-[15px] h-[15px] top-[3px] left-[3px]">
                                  <Image className="absolute w-[15px] h-[11px] top-0.5 left-0" alt="Email" src="/mail.webp" width={15} height={11} />
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-1">
                              <span className="[font-family:'Raleway',Helvetica] font-normal text-[#232c42] text-sm whitespace-nowrap">
                                {contactInfo.email}
                              </span>
                              <div className="relative w-5 h-5">
                                <Image className="absolute w-4 h-4 top-0.5 left-0.5" alt="Email Icon" src="/group-2.webp" width={16} height={16} />
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>

                      <div className="flex flex-col items-start gap-[11px]">
                        <div className="flex items-start gap-[18px]">
                          {/* Updated Telegram link */}
                          <a href="https://t.me/+79857604220" target="_blank" rel="noopener noreferrer" className="relative w-7 h-7 bg-transparent">
                            <Image className="absolute w-6 h-5 top-1 left-0.5" alt="Telegram" src="/group.webp" width={24} height={20} />
                          </a>

                          {/* MAX icon - replaces WhatsApp */}
                          <a href="https://max.ru/u/f9LHodD0cOK_6DAtIeOn3T51Xpzrkg2i4RB2ZEjtVfXOwvURhiW6gtGMLrA" target="_blank" rel="noopener noreferrer" className="flex w-7 h-7 items-center justify-center rounded-full [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 1000 1000" fill="none">
                              <path fill="#fff" fillRule="evenodd" d="M508.211 878.328c-75.007 0-109.864-10.95-170.453-54.75-38.325 49.275-159.686 87.783-164.979 21.9 0-49.456-10.95-91.248-23.36-136.873-14.782-56.21-31.572-118.807-31.572-209.508 0-216.626 177.754-379.597 388.357-379.597 210.785 0 375.947 171.001 375.947 381.604.707 207.346-166.595 376.118-373.94 377.224m3.103-571.585c-102.564-5.292-182.499 65.7-200.201 177.024-14.6 92.162 11.315 204.398 33.397 210.238 10.585 2.555 37.23-18.98 53.837-35.587a189.8 189.8 0 0 0 92.71 33.032c106.273 5.112 197.08-75.794 204.215-181.95 4.154-106.382-77.67-196.486-183.958-202.574Z" clipRule="evenodd" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </Card>
        </div>
      )}

      {/* Mobile Modal */}
      {showMobileModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-4">
          <Card className="relative w-full max-w-[100%] max-h-[90vh] overflow-y-auto bg-white rounded-[20px] border-0 [background:linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(245,246,255,1)_100%)]">
            <button
              onClick={() => onClose?.()}
              className="absolute top-4 right-4 z-50 text-gray-500 hover:text-gray-700 text-3xl font-mono"
              aria-label="Close"
            >
              ×
            </button>

            <Card className="relative border-0 rounded-[20px] shadow-[var(--)] backdrop-blur-[79px]">
              <CardContent className="flex flex-col items-center gap-6 pt-6 px-4 pb-8">
                <div className="flex flex-col items-center gap-6">
                  <h2 className="font-semibold text-[#232c42] text-xl text-center [font-family:'Raleway',Helvetica]">
                    Закажите обратный звонок
                  </h2>

                  <p className="w-full font-medium text-[#232c42] text-sm text-center [font-family:'Raleway',Helvetica]">
                    Перезвоним в течении 30 минут
                    <br />
                    Ответим на вопросы, запросим данные для рассчета стоимости и сроков
                  </p>

                  <div className="flex flex-col w-full items-center gap-4">
                    <div className="flex flex-col items-start justify-end gap-3 w-full">
                      <div className="w-full rounded-2xl overflow-hidden border border-solid border-neutral-200 shadow-[var(--)] backdrop-blur-[79px]">
                        <div className="flex w-full h-16 items-center gap-2 pl-3 pr-2 py-2 bg-white rounded-2xl">
                          <Input
                            className="border-none shadow-none [font-family:'Raleway',Helvetica] font-normal text-label-colorslc-l-secondary text-base tracking-[-0.41px] leading-[22px] w-full"
                            placeholder="+7 (___) ___-__-__"
                            value={phone}
                            onChange={handlePhoneChange}
                            onPaste={handlePhonePaste}
                            onFocus={handlePhoneFocus}
                            onKeyDown={handleKeyDown}
                            inputMode="tel"
                            type="tel"
                            aria-label="Phone number"
                          />
                        </div>
                      </div>

                      {(!isValid && phone) && (
                        <p className="text-red-600 text-xs mt-1 w-full">
                          Введите корректный российский номер телефона
                        </p>
                      )}
                      {error && (
                        <p className="text-red-600 text-xs mt-1 w-full">{error}</p>
                      )}

                      <Button
                        className={`w-full h-16 rounded-2xl border-none shadow-2 ${
                          canSubmit
                            ? "bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC] cursor-pointer"
                            : "bg-gradient-to-b from-[#cccccc] via-[#bbbbbb] to-[#999999] cursor-not-allowed"
                        } ${isSending ? "opacity-50 cursor-not-allowed" : ""}`}
                        onClick={handleSubmit}
                        disabled={!canSubmit || isSending}
                      >
                        <span className="font-semibold text-white text-base text-center [font-family:'Raleway',Helvetica]">
                          {isSending ? "Отправка…" : "Получить помощь в подборе"}
                        </span>
                      </Button>
                    </div>

                    {/* Checkbox 1 - Mobile - Required */}
                    <div className="flex items-center justify-start gap-2.5 w-full">
                      <button
                        onClick={() => setIsAgreed(!isAgreed)}
                        className={`flex items-center justify-center w-8 h-8 p-3 rounded-lg transition-all duration-200 ${
                          isAgreed
                            ? "bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
                            : "bg-gray-200"
                        }`}
                        aria-pressed={isAgreed}
                        aria-label="Agree to terms"
                        type="button"
                      >
                        {isAgreed && (
                          <Image className="w-[17px] h-[13px]" alt="Check" src="/right.webp" width={17} height={13} />
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

                    {/* Checkbox 2 - Mobile - Now Also Required */}
                    <div className="flex items-center justify-start gap-2.5 w-full">
                      <button
                        onClick={() => setIsMarketingAgreed(!isMarketingAgreed)}
                        className={`flex items-center justify-center w-8 h-8 p-3 rounded-lg transition-all duration-200 ${
                          isMarketingAgreed
                            ? "bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
                            : "bg-gray-200"
                        }`}
                        aria-pressed={isMarketingAgreed}
                        aria-label="Agree to marketing"
                        type="button"
                      >
                        {isMarketingAgreed && (
                          <Image className="w-[17px] h-[13px]" alt="Check" src="/right.webp" width={17} height={13} />
                        )}
                      </button>

                      <p className="font-medium text-[#4f5d8094] text-xs [font-family:'Raleway',Helvetica]">
                        Я даю согласие на получение{" "}
                        <a href="/advertising-consent" className="text-[#73A8FF] underline">информационных и маркетинговых рассылок</a>
                        <br />
                        Чекбокс рассылок *
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contacts */}
                <div className="flex flex-col items-center gap-6 w-full">
                  <h3 className="font-semibold text-[#232c42] text-lg text-center [font-family:'Raleway',Helvetica]">
                    Или свяжитесь по контактам
                  </h3>

                  <div className="flex flex-col w-full items-center gap-4">
                    <div className="flex flex-col items-center gap-4 w-full">
                      {/* Updated phone number and tel link */}
                      <a href="tel:+74957604220" className="flex items-center gap-3 w-full justify-center">
                        <div className="flex w-6 h-6 items-center justify-center p-1.5 rounded-full [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
                          <div className="relative w-5 h-5 -m-[4px]">
                            <Image className="absolute w-3 h-3 top-1 left-1" alt="Phone" src="/group-5.webp" width={12} height={12} />
                          </div>
                        </div>
                        <span className="[font-family:'Raleway',Helvetica] font-normal text-[#394355] text-sm">
                          {contactInfo.phone}
                        </span>
                      </a>

                      <a href="mailto:sales@i-avr.ru" className="flex items-center gap-3 w-full justify-center">
                        <div className="flex w-6 h-6 items-center justify-center p-1.5 rounded-full [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
                          <div className="relative w-5 h-5 -m-[4px]">
                            <div className="relative w-[15px] h-[15px] top-[3px] left-[3px]">
                              <Image className="absolute w-[15px] h-[11px] top-0.5 left-0" alt="Email" src="/mail.webp" width={15} height={11} />
                            </div>
                          </div>
                        </div>
                        <span className="[font-family:'Raleway',Helvetica] font-normal text-[#232c42] text-sm">
                          {contactInfo.email}
                        </span>
                      </a>
                    </div>

                    <div className="flex flex-col items-center gap-3 w-full">
                      <div className="flex items-center justify-center gap-6">
                        {/* Updated Telegram link */}
                        <a
                          href="https://t.me/+79857604220"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative w-8 h-8 bg-transparent"
                        >
                          <Image className="absolute w-6 h-5 top-1.5 left-1" alt="Telegram" src="/group.webp" width={24} height={20} />
                        </a>

                        {/* MAX icon - replaces WhatsApp */}
                        <a
                          href="https://max.ru/u/f9LHodD0cOK_6DAtIeOn3T51Xpzrkg2i4RB2ZEjtVfXOwvURhiW6gtGMLrA"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex w-8 h-8 items-center justify-center rounded-full [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1000 1000" fill="none">
                            <path fill="#fff" fillRule="evenodd" d="M508.211 878.328c-75.007 0-109.864-10.95-170.453-54.75-38.325 49.275-159.686 87.783-164.979 21.9 0-49.456-10.95-91.248-23.36-136.873-14.782-56.21-31.572-118.807-31.572-209.508 0-216.626 177.754-379.597 388.357-379.597 210.785 0 375.947 171.001 375.947 381.604.707 207.346-166.595 376.118-373.94 377.224m3.103-571.585c-102.564-5.292-182.499 65.7-200.201 177.024-14.6 92.162 11.315 204.398 33.397 210.238 10.585 2.555 37.23-18.98 53.837-35.587a189.8 189.8 0 0 0 92.71 33.032c106.273 5.112 197.08-75.794 204.215-181.95 4.154-106.382-77.67-196.486-183.958-202.574Z" clipRule="evenodd" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Card>
        </div>
      )}
    </>
  );
};

export default Application;