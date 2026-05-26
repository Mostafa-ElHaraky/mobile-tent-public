"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import Image from "next/image";

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

const sanitizeInput = (input: string) => {
  return input.replace(/[<>]/g, "");
};

interface CallmebackProps {
  /** Made optional so <ContactButton /> compiles anywhere */
  isOpen?: boolean;
  onClose?: () => void;
}

const ContactButton = ({ isOpen = false, onClose = () => {} }: CallmebackProps) => {
  const [isAgreed, setIsAgreed] = useState(false);
  const [isMarketingAgreed, setIsMarketingAgreed] = useState(false);
  const [phone, setPhone] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const formData = {
    title:
      "Оставьте свой номер телефона и вам перезвонит первый освободившийся специалист",
    inputPlaceholder: "+7 (___) ___-__-__",
    buttonText: "Запросить контакты представителей",
    errorMessage: "Введите корректный российский номер телефона",
  };

  // Format phone number as +7 (XXX) XXX-XX-XX
  const formatPhoneNumber = useCallback((value: string): string => {
    let cleanValue = value.replace(/\D/g, "");
    
    if (cleanValue.startsWith("7") || cleanValue.startsWith("8")) {
      cleanValue = "7" + cleanValue.substring(1);
    } else if (cleanValue) {
      cleanValue = "7" + cleanValue;
    }
    
    cleanValue = cleanValue.substring(0, 11);
    if (!cleanValue) return "";
    
    let formatted = "+7";
    if (cleanValue.length > 1) {
      formatted += " (" + cleanValue.substring(1, 4);
    }
    if (cleanValue.length > 4) {
      formatted += ") " + cleanValue.substring(4, 7);
    }
    if (cleanValue.length > 7) {
      formatted += "-" + cleanValue.substring(7, 9);
    }
    if (cleanValue.length > 9) {
      formatted += "-" + cleanValue.substring(9, 11);
    }
    
    return formatted;
  }, []);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhone(formatted);
    setError("");
  };

  // Validate phone number
  useEffect(() => {
    const digitCount = phone.replace(/\D/g, "").length;
    setIsValid(!phone || digitCount === 11);
  }, [phone]);

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setPhone("");
      setIsAgreed(false);
      setIsMarketingAgreed(false);
      setIsValid(true);
      setError("");
    }
  }, [isOpen]);

  // Send to CRM webhook with maximum context
  const sendToWebhook = async (cleanPhone: string) => {
    const now = new Date();
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    const clientTime = now.toLocaleTimeString("ru-RU", { hour12: false });
    const clientDate = now.toLocaleDateString("ru-RU");
    const pageUrl = typeof window !== "undefined" ? window.location.href : "";
    const domainHost = typeof window !== "undefined" ? window.location.hostname : "tent-test.ru";
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
      `«Запросить контакты представителей». ` +
      `Страница: ${pageUrl} | Время клиента: ${clientTime} (${tz}) | ` +
      `Дата создания (клиента): ${clientDate} | Источник: сайт ${domainHost} (модальная форма).`;

    // Rich readable message (optional, if your PHP maps to COMMENTS or similar)
    const message =
      `Форма: «Запросить контакты представителей»\n` +
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
      "Источник": "Сайт mobile-tent.ru — модальная форма «Запросить контакты представителей»",

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

      // Ads/counters (if your PHP reads them as in your server code)
      _ga: gaCookie,
      _ym_uid: ymUid,
      gclid,
      yclid,
      roistat_visit,

      // Rich message blob (optional)
      message,

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

    sanitizeInput(phone);
    onClose();
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[100] bg-black/45">
      <Card className="relative w-full max-w-[445px] h-[650px] bg-white rounded-[20px] border-0 shadow-[0px_24px_38px_rgba(22,29,36,0.08)] mx-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 text-gray-500 hover:text-gray-700 text-3xl font-mono"
          aria-label="Close"
        >
          ×
        </button>
        <CardContent className="px-10 pt-[60px] pb-[30px] flex flex-col items-center gap-[45px]">
          <h2 className="text-2xl font-semibold text-center text-[#232c42]">
            {formData.title}
          </h2>

          <div className="flex flex-col items-center w-full gap-5">
            <div className="w-full border-0 rounded-2xl border-neutral-200 shadow-[0px_24px_38px_rgba(22,29,36,0.08)] overflow-hidden">
              <Input
                placeholder={formData.inputPlaceholder}
                className={`w-full h-[67px] px-3 py-2 bg-white rounded-2xl border-0 text-[17px] leading-[22px] tracking-[-0.41px] ${
                  !isValid ? "text-red-500" : "text-label-colorslc-l-secondary"
                }`}
                value={phone}
                onChange={handlePhoneChange}
                onKeyDown={handleKeyDown}
                inputMode="tel"
                type="tel"
                aria-label="Phone number"
              />
              {!isValid && phone && (
                <p className="text-red-500 text-xs mt-1 px-3">
                  {formData.errorMessage}
                </p>
              )}
              {error && (
                <p className="text-red-500 text-xs mt-1 px-3">{error}</p>
              )}
            </div>

            <Button
              disabled={!canSubmit}
              onClick={handleSubmit}
              className={`w-full h-[68px] rounded-2xl shadow-[0px_22px_44px_rgba(32,124,254,0.4)] ${
                canSubmit
                  ? "bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC] cursor-pointer hover:opacity-90"
                  : "bg-gradient-to-b from-[#cccccc] via-[#bbbbbb] to-[#999999] cursor-not-allowed"
              }`}
            >
              <span className="text-white text-base font-semibold">
                {isSending ? "Отправка…" : formData.buttonText}
              </span>
            </Button>
          </div>

          {/* Checkbox 1 - Required */}
          <div className="flex items-start gap-3">
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

            <p className="text-xs font-medium text-[#4f5d80] opacity-60 leading-normal max-w-[297px]">
              Я даю согласие на обработку{" "}
              <a href="/privacy-consent" className="text-[#73A8FF] underline">персональных данных</a>{" "}
              и согласен с{" "}
              <a href="/privacy-policy" className="text-[#73A8FF] underline">политикой конфиденциальности</a>
              <br />
              Чекбокс политики *
            </p>
          </div>

          {/* Checkbox 2 - Now Also Required */}
          <div className="flex items-start gap-3">
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

            <p className="text-xs font-medium text-[#4f5d80] opacity-60 leading-normal max-w-[297px]">
              Я даю согласие на получение{" "}
              <a href="/advertising-consent" className="text-[#73A8FF] underline">информационных и маркетинговых рассылок</a>
              <br />
              Чекбокс рассылок *
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactButton;