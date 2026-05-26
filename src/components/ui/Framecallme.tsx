"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import Image from "next/image";

interface FramecallmeProps {
  isExternalTrigger?: boolean;
  onClose?: () => void;
}

const sanitizeInput = (input: string) => input.replace(/[<>]/g, "");

type Ripple = { x: number; y: number; key: number };

/** Safely escape a string for use inside a RegExp */
const escapeRegex = (s: string): string => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** Read cookie value by name (SSR-safe) */
const getCookie = (name: string): string => {
  if (typeof document === "undefined") return "";
  const pattern = new RegExp(`(?:^|; )${escapeRegex(name)}=([^;]*)`);
  const m = document.cookie.match(pattern);
  return m ? decodeURIComponent(m[1]) : "";
};

/** Read a URL search param (SSR-safe) */
const getSearchParam = (name: string): string => {
  if (typeof window === "undefined") return "";
  return new URLSearchParams(window.location.search).get(name) || "";
};

/** Parse GA client id from _ga cookie */
const parseGAClientId = (gaCookie: string): string => {
  if (!gaCookie) return "";
  const parts = gaCookie.split(".");
  return parts.length >= 4 ? parts.slice(-2).join(".") : gaCookie;
};

const Framecallme = ({ isExternalTrigger = false, onClose }: FramecallmeProps) => {
  const [showModal, setShowModal] = useState(false);
  const [showMobileModal, setShowMobileModal] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);
  const [isMarketingAgreed, setIsMarketingAgreed] = useState(false);
  const [phone, setPhone] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  // 🔹 animation states (desktop + mobile triggers)
  const [ripplesDesktop, setRipplesDesktop] = useState<Ripple[]>([]);
  const [ripplesMobile, setRipplesMobile] = useState<Ripple[]>([]);
  const [sheenKeyDesktop, setSheenKeyDesktop] = useState(0);
  const [sheenKeyMobile, setSheenKeyMobile] = useState(0);

  useEffect(() => {
    if (isExternalTrigger) setShowMobileModal(true);
  }, [isExternalTrigger]);

  const formData = {
    title: "Оставьте свой номер телефона и вам перезвонит первый освободившийся специалист",
    inputPlaceholder: "+7 (___) ___-__-__",
    buttonText: "Запросить контакты представителей",
    errorMessage: "Введите корректный российский номер телефона",
  };

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
    if (cleanValue.length > 1) formatted += " (" + cleanValue.substring(1, 4);
    if (cleanValue.length > 4) formatted += ") " + cleanValue.substring(4, 7);
    if (cleanValue.length > 7) formatted += "-" + cleanValue.substring(7, 9);
    if (cleanValue.length > 9) formatted += "-" + cleanValue.substring(9, 11);
    return formatted;
  }, []);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const formatted = formatPhoneNumber(rawValue);
    setPhone(formatted);
    setError("");
  };

  useEffect(() => {
    if (!phone) {
      setIsValid(true);
      return;
    }
    const digitCount = phone.replace(/\D/g, "").length;
    setIsValid(digitCount === 11 && phone.startsWith("+7"));
  }, [phone]);

  // ===== Main webhook that matches your PHP mapping exactly =====
  const sendToWebhook = async (cleanPhone: string) => {
    const now = new Date();
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    const clientTime = now.toLocaleTimeString("ru-RU", { hour12: false });
    const clientDate = now.toLocaleDateString("ru-RU"); // DD.MM.YYYY
    const pageUrl = typeof window !== "undefined" ? window.location.href : "";
    const domainHost = typeof window !== "undefined" ? window.location.hostname : "tent-test.ru";
    const pageTitle = typeof document !== "undefined" ? document.title : "";
    const referrer = typeof document !== "undefined" ? document.referrer : "";

    // UTM/ad params
    const utm_source = getSearchParam("utm_source");
    const utm_medium = getSearchParam("utm_medium");
    const utm_campaign = getSearchParam("utm_campaign");
    const utm_content = getSearchParam("utm_content");
    const utm_term = getSearchParam("utm_term");
    const gclid = getSearchParam("gclid");
    const yclid = getSearchParam("yclid");

    // Cookies / IDs
    const gaCookie = getCookie("_ga");
    const gaClientId = parseGAClientId(gaCookie);
    const ymUid = getCookie("_ym_uid");
    const roistat_visit = getCookie("roistat_visit");

    // Device/browser context for readable COMMENTS
    const dpr = typeof window !== "undefined" && window.devicePixelRatio ? String(window.devicePixelRatio) : "";
    const vw = typeof window !== "undefined" && window.innerWidth ? String(window.innerWidth) : "";
    const vh = typeof window !== "undefined" && window.innerHeight ? String(window.innerHeight) : "";
    const lang = typeof navigator !== "undefined" ? navigator.language : "";
    const platform = typeof navigator !== "undefined" ? (navigator as any).platform || "" : "";
    const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";

    const messageReadable =
      `Форма: «Перезвоните мне / ${formData.title}»\n` +
      `Страница: ${pageUrl}\nЗаголовок: ${pageTitle}\nИсточник-реферер: ${referrer || "—"}\n` +
      `Время клиента: ${clientTime} (${tz}), Дата: ${clientDate}\n\n` +
      `UTM: source=${utm_source || "—"}, medium=${utm_medium || "—"}, campaign=${utm_campaign || "—"}, content=${utm_content || "—"}, term=${utm_term || "—"}\n` +
      `gclid=${gclid || "—"}, yclid=${yclid || "—"}, roistat_visit=${roistat_visit || "—"}\n` +
      `_ga=${gaCookie || "—"} (cid=${gaClientId || "—"}), _ym_uid=${ymUid || "—"}\n\n` +
      `Устройство: ${platform || "—"}, Язык: ${lang || "—"}, DPR=${dpr || "—"}, viewport=${vw || "—"}×${vh || "—"}\n` +
      `User-Agent: ${ua || "—"}`;

    // === Exact keys your PHP expects ===
    const payload: Record<string, string> = {
      // Maps to TITLE/NAME/LAST_NAME/COMMENTS
      sitename: domainHost,
      name: "",
      surname: "",
      message: messageReadable,

      // Mirrors PHP POST -> Bitrix fields
      roistat_visit: roistat_visit || "",
      domain: domainHost,           // UF_CRM_1698687546
      "doc.pagetitle": pageTitle,   // UF_CRM_1698687968
      url: pageUrl,                 // UF_CRM_1712907937027

      // Quiz/lead placeholders (keep keys present)
      question_1: "",
      question_2: "",
      question_3: "",
      question_4: "",
      "question-1": "",
      "question-2": "",
      "question-3": "",
      quizDate: clientDate,
      "question-4": "",
      construction_type: "",
      length: "",
      width: "",
      height1: "",
      height2: "",
      gates_type: "",
      gates: "",
      doors_type: "",
      doors: "",
      cover_type: "",
      tip: "",
      city: "",
      pokr: "",
      tent_material: "",
      tent_density: "",
      tent_layers: "",
      frame_type: "",
      frame_material: "",
      frame_zinc: "",
      fur_type: "",
      full_price: "",
      project: "",
      type: "",
      typeproject: "",
      comment: "",
      otrasl: "",
      nameFile: "",

      // UTM/ad params
      utm_source,
      utm_medium,
      utm_campaign,
      utm_content,
      utm_term,
      _ga: gaCookie,
      _ym_uid: ymUid,
      yclid,
      gclid,

      // Contact block (also mapped into FM by PHP)
      phone: cleanPhone,
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
    
    sanitizeInput(phone);

    setIsSending(true);
    await sendToWebhook(cleanPhone);
    setIsSending(false);

    setShowModal(false);
    setShowMobileModal(false);
    setPhone("");
    setIsAgreed(false);
    setIsMarketingAgreed(false);
    if (onClose) onClose();
    router.push("/thankyou");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleClose = () => {
    setShowModal(false);
    setShowMobileModal(false);
    if (onClose) onClose();
  };

  // Check if form can be submitted - BOTH checkboxes must be checked
  const canSubmit = isValid && phone.replace(/\D/g, "").length === 11 && isAgreed && isMarketingAgreed && !isSending;

  // 🔹 helpers for visual click
  const triggerRipple = (
    e: React.MouseEvent<HTMLButtonElement>,
    setRipples: React.Dispatch<React.SetStateAction<Ripple[]>>,
    setSheenKey: React.Dispatch<React.SetStateAction<number>>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const key = Date.now();
    setRipples(prev => [...prev, { x, y, key }]);
    setSheenKey(prev => prev + 1);
  };
  const onRippleEnd = (key: number, setRipples: React.Dispatch<React.SetStateAction<Ripple[]>>) => {
    setRipples(prev => prev.filter(r => r.key !== key));
  };

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Desktop Trigger Button - hidden when used externally */}
      {!isExternalTrigger && (
        <>
          <div className="relative hidden md:block">
            <Button
              variant="outline"
              onClick={(e) => {
                triggerRipple(e, setRipplesDesktop, setSheenKeyDesktop);
                setShowModal(true);
              }}
              className="relative flex w-[190px] h-[46px] items-center justify-center gap-2.5 pl-6 pr-3 py-2.5 bg-white rounded-full shadow-[inset_0px_0px_20px_#ffffff40] border-none
                         overflow-hidden select-none transition-all duration-150 active:scale-[0.98]
                         hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#6FA7FF]"
            >
              {/* ripple layer */}
              <span className="pointer-events-none absolute inset-0 rounded-full">
                {ripplesDesktop.map(r => (
                  <span
                    key={r.key}
                    className="ripple block absolute rounded-full opacity-60"
                    style={{ left: r.x, top: r.y }}
                    onAnimationEnd={() => onRippleEnd(r.key, setRipplesDesktop)}
                  />
                ))}
              </span>
              {/* sheen layer */}
              <span
                key={sheenKeyDesktop}
                className="pointer-events-none absolute inset-0 -translate-x-full animate-sheen rounded-full"
              />

              <span className="font-semibold text-[#232c42] text-sm">Перезвоните мне</span>
              <Image src="/frame-44.webp" alt="Phone icon" width={24} height={24} className="flex-shrink-0" />
            </Button>
          </div>

          <div className="fixed bottom-4 right-4 z-40 md:hidden">
            <Button
              variant="outline"
              onClick={(e) => {
                triggerRipple(e, setRipplesMobile, setSheenKeyMobile);
                setShowMobileModal(true);
              }}
              className="relative flex w-[190px] h-[46px] items-center justify-center gap-2.5 pl-6 pr-3 py-2.5 bg-white rounded-full shadow-[inset_0px_0px_20px_#ffffff40] border-none shadow-lg
                         overflow-hidden select-none transition-all duration-150 active:scale-[0.98]
                         hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#6FA7FF]"
            >
              {/* ripple layer */}
              <span className="pointer-events-none absolute inset-0 rounded-full">
                {ripplesMobile.map(r => (
                  <span
                    key={r.key}
                    className="ripple block absolute rounded-full opacity-60"
                    style={{ left: r.x, top: r.y }}
                    onAnimationEnd={() => onRippleEnd(r.key, setRipplesMobile)}
                  />
                ))}
              </span>
              {/* sheen layer */}
              <span
                key={sheenKeyMobile}
                className="pointer-events-none absolute inset-0 -translate-x-full animate-sheen rounded-full"
              />

              <span className="font-semibold text-[#232c42] text-sm">Перезвоните мне</span>
              <Image src="/frame-44.webp" alt="Phone icon" width={24} height={24} className="flex-shrink-0" />
            </Button>
          </div>
        </>
      )}

      {/* Desktop Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/45">
          <Card className="relative w-full max-w-[445px] h-[650px] bg-white rounded-[20px] border-0 shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)]">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-50 text-gray-500 hover:text-gray-700 text-3xl font-mono"
              aria-label="Close"
            >
              ×
            </button>

            <CardContent className="px-10 pt-[60px] pb-[30px] flex flex-col items-center gap-[45px]">
              <h2 className="text-2xl font-semibold text-center text-[#232c42] w-[344px]">
                {formData.title}
              </h2>

              <div className="flex flex-col items-center w-full gap-5">
                <div className="w-[349px] border-0 rounded-2xl border-neutral-200 shadow-[0px_24px_38px_rgba(22,29,36,0.08)] overflow-hidden">
                  <Input
                    placeholder={formData.inputPlaceholder}
                    className={`w-full h-[67px] px-3 py-2 bg-white rounded-2xl border-0 text-[17px] leading-[22px] tracking-[-0.41px] ${
                      isValid ? "text-label-colorslc-l-secondary" : "text-red-500"
                    }`}
                    value={phone}
                    onChange={handlePhoneChange}
                    onKeyDown={handleKeyDown}
                    inputMode="tel"
                  />
                  {!isValid && phone && (
                    <p className="text-red-500 text-xs mt-1 px-3">{formData.errorMessage}</p>
                  )}
                  {error && (
                    <p className="text-red-500 text-xs mt-1 px-3">{error}</p>
                  )}
                </div>

                <Button
                  disabled={!canSubmit}
                  onClick={handleSubmit}
                  className={`w-[349px] h-[68px] rounded-2xl shadow-[0px_22px_44px_rgba(32,124,254,0.4)] ${
                    canSubmit
                      ? "bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC] cursor-pointer"
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

                <p className="w-[297px] font-medium text-[#4f5d8094] text-xs">
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

                <p className="w-[297px] font-medium text-[#4f5d8094] text-xs">
                  Я даю согласие на получение{" "}
                  <a href="/advertising-consent" className="text-[#73A8FF] underline">информационных и маркетинговых рассылок</a>
                  <br />
                  Чекбокс рассылок *
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Mobile Modal */}
      {showMobileModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/45 p-4">
          <Card className="relative w-full max-w-[100%] max-h-[90vh] overflow-y-auto bg-white rounded-[20px] border-0 shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)]">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-50 text-gray-500 hover:text-gray-700 text-3xl font-mono"
              aria-label="Close"
            >
              ×
            </button>

            <CardContent className="px-6 pt-8 pb-6 flex flex-col items-center gap-6">
              <h2 className="text-xl font-semibold text-center text-[#232c42] w-full">
                {formData.title}
              </h2>

              <div className="flex flex-col items-center w-full gap-4">
                <div className="w-full border-0 rounded-2xl border-neutral-200 shadow-[0px_24px_38px_rgba(22,29,36,0.08)] overflow-hidden">
                  <Input
                    placeholder={formData.inputPlaceholder}
                    className={`w-full h-16 px-3 py-2 bg-white rounded-2xl border-0 text-base leading-[22px] tracking-[-0.41px] ${
                      isValid ? "text-label-colorslc-l-secondary" : "text-red-500"
                    }`}
                    value={phone}
                    onChange={handlePhoneChange}
                    onKeyDown={handleKeyDown}
                    inputMode="tel"
                  />
                  {!isValid && phone && (
                    <p className="text-red-500 text-xs mt-1 px-3">{formData.errorMessage}</p>
                  )}
                  {error && (
                    <p className="text-red-500 text-xs mt-1 px-3">{error}</p>
                  )}
                </div>

                <Button
                  disabled={!canSubmit}
                  onClick={handleSubmit}
                  className={`w-full h-16 rounded-2xl shadow-[0px_22px_44px_rgba(32,124,254,0.4)] ${
                    canSubmit
                      ? "bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC] cursor-pointer"
                      : "bg-gradient-to-b from-[#cccccc] via-[#bbbbbb] to-[#999999] cursor-not-allowed"
                  }`}
                >
                  <span className="text-white text-base font-semibold">
                    {isSending ? "Отправка…" : formData.buttonText}
                  </span>
                </Button>
              </div>

              {/* Checkbox 1 - Mobile - Required */}
              <div className="flex items-start gap-3 w-full">
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

                <p className="font-medium text-[#4f5d8094] text-xs flex-1">
                  Я даю согласие на обработку{" "}
                  <a href="/privacy-consent" className="text-[#73A8FF] underline">персональных данных</a>{" "}
                  и согласен с{" "}
                  <a href="/privacy-policy" className="text-[#73A8FF] underline">политикой конфиденциальности</a>
                  <br />
                  Чекбокс политики *
                </p>
              </div>

              {/* Checkbox 2 - Mobile - Now Also Required */}
              <div className="flex items-start gap-3 w-full">
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

                <p className="font-medium text-[#4f5d8094] text-xs flex-1">
                  Я даю согласие на получение{" "}
                  <a href="/advertising-consent" className="text-[#73A8FF] underline">информационных и маркетинговых рассылок</a>
                  <br />
                  Чекбокс рассылок *
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* 🔹 Local styles for ripple + sheen (shared by both triggers) */}
      <style jsx>{`
        .ripple {
          width: 16px;
          height: 16px;
          background: radial-gradient(circle, rgba(111,167,255,0.45) 0%, rgba(111,167,255,0.35) 40%, rgba(111,167,255,0.05) 70%, transparent 80%);
          position: absolute;
          transform: translate(-50%, -50%) scale(0);
          animation: ripple-anim 550ms ease-out forwards;
          pointer-events: none;
        }
        @keyframes ripple-anim {
          to {
            transform: translate(-50%, -50%) scale(18);
            opacity: 0;
          }
        }
        .animate-sheen {
          animation: sheen-move 700ms ease-out forwards;
          background: linear-gradient(
            120deg,
            transparent 0%,
            rgba(255,255,255,0.6) 20%,
            rgba(255,255,255,0.85) 35%,
            rgba(255,255,255,0.6) 50%,
            transparent 65%
          );
        }
        @keyframes sheen-move {
          0% { transform: translateX(-120%); opacity: 0.0; }
          20% { opacity: 0.9; }
          100% { transform: translateX(120%); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Framecallme;