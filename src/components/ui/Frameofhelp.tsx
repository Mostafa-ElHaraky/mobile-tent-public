"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import Image from "next/image";

type FrameofhelpProps = {
  showMobileModal?: boolean;
  onClose?: () => void;
};

type Ripple = { x: number; y: number; key: number };

const getCookie = (name: string): string => {
  if (typeof document === "undefined") return "";
  const m = document.cookie.match(new RegExp("(^|; )" + name.replace(/([.$?*|{}()[\]\\/+^])/g, "\\$1") + "=([^;]*)"));
  return m ? decodeURIComponent(m[2]) : "";
};

const getSearchParam = (name: string): string => {
  if (typeof window === "undefined") return "";
  return new URLSearchParams(window.location.search).get(name) || "";
};

const parseGAClientId = (gaCookie: string): string => {
  if (!gaCookie) return "";
  const parts = gaCookie.split(".");
  if (parts.length >= 4) {
    const cid = parts.slice(-2).join(".");
    return cid;
  }
  return gaCookie;
};

const Frameofhelp = ({ showMobileModal = false, onClose }: FrameofhelpProps) => {
  const [showModal, setShowModal] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);
  const [isMarketingAgreed, setIsMarketingAgreed] = useState(false);
  const [phone, setPhone] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState("");
  const [isSending, setIsSending] = useState(false);

  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [sheenKey, setSheenKey] = useState(0);

  const router = useRouter();

  // Updated contact info with new phone number
  const contactInfo = {
    phone: "+7 (495) 760-42-20",
    email: "info@mobile-tent.ru",
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
    const formatted = formatPhoneNumber(e.target.value);
    setPhone(formatted);
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
    const domainHost = typeof window !== "undefined" ? window.location.hostname : "tent-test.ru";
    const pageTitle = typeof document !== "undefined" ? document.title : "";
    const referrer = typeof document !== "undefined" ? document.referrer : "";

    const utm_source = getSearchParam("utm_source");
    const utm_medium = getSearchParam("utm_medium");
    const utm_campaign = getSearchParam("utm_campaign");
    const utm_content = getSearchParam("utm_content");
    const utm_term = getSearchParam("utm_term");
    const gclid = getSearchParam("gclid");
    const yclid = getSearchParam("yclid");

    const gaCookie = getCookie("_ga");
    const gaClientId = parseGAClientId(gaCookie);
    const ymUid = getCookie("_ym_uid");
    const roistat_visit = getCookie("roistat_visit");

    const w = typeof window !== "undefined" ? window : ({} as any);
    const dpr = w.devicePixelRatio ? String(w.devicePixelRatio) : "";
    const vw = w.innerWidth ? String(w.innerWidth) : "";
    const vh = w.innerHeight ? String(w.innerHeight) : "";
    const lang = typeof navigator !== "undefined" ? navigator.language : "";
    const platform = typeof navigator !== "undefined" ? (navigator as any).platform || "" : "";
    const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";

    const messageReadable =
      `Форма: «Помочь с подбором / Закажите обратный звонок»\n` +
      `Страница: ${pageUrl}\nЗаголовок: ${pageTitle}\nИсточник-реферер: ${referrer || "—"}\n` +
      `Время клиента: ${clientTime} (${tz}), Дата: ${clientDate}\n\n` +
      `UTM: source=${utm_source || "—"}, medium=${utm_medium || "—"}, campaign=${utm_campaign || "—"}, content=${utm_content || "—"}, term=${utm_term || "—"}\n` +
      `gclid=${gclid || "—"}, yclid=${yclid || "—"}, roistat_visit=${roistat_visit || "—"}\n` +
      `_ga=${gaCookie || "—"} (cid=${gaClientId || "—"}), _ym_uid=${ymUid || "—"}\n\n` +
      `Устройство: ${platform || "—"}, Язык: ${lang || "—"}, DPR=${dpr || "—"}, viewport=${vw || "—"}×${vh || "—"}\n` +
      `User-Agent: ${ua || "—"}`;

    const payload: Record<string, string> = {
      sitename: domainHost,
      name: "",
      surname: "",
      message: messageReadable,
      roistat_visit: roistat_visit || "",
      domain: domainHost,
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
      "doc.pagetitle": pageTitle,
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
      url: pageUrl,
      utm_source: utm_source || "",
      utm_medium: utm_medium || "",
      utm_campaign: utm_campaign || "",
      utm_content: utm_content || "",
      utm_term: utm_term || "",
      _ga: gaCookie || "",
      _ym_uid: ymUid || "",
      yclid: yclid || "",
      gclid: gclid || "",
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

    setIsSending(true);
    await sendToWebhook(cleanPhone);
    setIsSending(false);

    setShowModal(false);
    if (onClose) onClose();
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

  const areBothCheckboxesChecked = isAgreed && isMarketingAgreed;

  const triggerVisualClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const key = Date.now();
    setRipples(prev => [...prev, { x, y, key }]);
    setSheenKey(prev => prev + 1);
  };

  const handleRippleEnd = (key: number) => {
    setRipples(prev => prev.filter(r => r.key !== key));
  };

  return (
    <>
      {/* Desktop Button */}
      <div className="relative right-[250px] bottom-[16px] hidden md:block">
        <Button
          variant="outline"
          onClick={(e) => {
            triggerVisualClick(e);
            setShowModal(true);
          }}
          className="relative inline-flex h-[46px] items-center justify-center gap-2.5 px-4 py-[13px] bg-white rounded-[50px] border-none
                     overflow-hidden select-none
                     transition-all duration-150 active:scale-[0.98]
                     hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#6FA7FF]"
        >
          <span className="pointer-events-none absolute inset-0 rounded-[50px]">
            {ripples.map((r) => (
              <span
                key={r.key}
                className="ripple block absolute rounded-full opacity-60"
                style={{ left: r.x, top: r.y }}
                onAnimationEnd={() => handleRippleEnd(r.key)}
              />
            ))}
          </span>

          <span
            key={sheenKey}
            className="pointer-events-none absolute inset-0 -translate-x-full animate-sheen rounded-[50px]"
          />

          <span className="font-semibold text-[#232c42] text-sm">Помочь с подбором</span>
        </Button>
      </div>

      {/* Desktop Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45">
          <Card className="relative w-full max-w-[445px] h-[725px] bg-white rounded-[20px] border-0 [background:linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(245,246,255,1)_100%)]">
            <button
              onClick={() => setShowModal(false)}
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
                        {error && !phone && (
                          <p className="text-red-600 text-sm mt-1">{error}</p>
                        )}

                        <Button
                          className={`w-[349px] h-[68px] rounded-2xl border-none shadow-2 bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC] ${!areBothCheckboxesChecked || isSending ? "opacity-50 cursor-not-allowed" : ""}`}
                          onClick={handleSubmit}
                          disabled={!areBothCheckboxesChecked || isSending}
                        >
                          <span className="font-semibold text-white text-base text-center [font-family:'Raleway',Helvetica]">
                            {isSending ? "Отправка…" : "Получить помощь в подборе"}
                          </span>
                        </Button>
                      </div>

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

                          <a href="mailto:info@mobile-tent.ru" className="flex items-center gap-[18px]">
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

                          {/* MAX icon with gradient circle background for visibility */}
                          <a href="https://max.ru/u/f9LHodD0cOK_6DAtIeOn3T51Xpzrkg2i4RB2ZEjtVfXOwvURhiW6gtGMLrA" target="_blank" rel="noopener noreferrer" className="flex w-7 h-7 items-center justify-center rounded-full [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 1000 1000" fill="none">
                              <path fill="#fff" fillRule="evenodd" d="M508.211 878.328c-75.007 0-109.864-10.95-170.453-54.75-38.325 49.275-159.686 87.783-164.979 21.9 0-49.456-10.95-91.248-23.36-136.873-14.782-56.21-31.572-118.807-31.572-209.508 0-216.626 177.754-379.597 388.357-379.597 210.785 0 375.947 171.001 375.947 381.604.707 207.346-166.595 376.118-373.94 377.224m3.103-571.585c-102.564-5.292-182.499 65.7-200.201 177.024-14.6 92.162 11.315 204.398 33.397 210.238 10.585 2.555 37.23-18.98 53.837-35.587a189.8 189.8 0 0 0 92.71 33.032c106.273 5.112 197.08-75.794 204.215-181.95 4.154-106.382-77.67-196.486-183.958-202.574Z" clipRule="evenodd"></path>
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
                      {error && !phone && (
                        <p className="text-red-600 text-xs mt-1">{error}</p>
                      )}

                      <Button
                        className={`w-full h-16 rounded-2xl border-none shadow-2 bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC] ${!areBothCheckboxesChecked || isSending ? "opacity-50 cursor-not-allowed" : ""}`}
                        onClick={handleSubmit}
                        disabled={!areBothCheckboxesChecked || isSending}
                      >
                        <span className="font-semibold text-white text-base text-center [font-family:'Raleway',Helvetica]">
                          {isSending ? "Отправка…" : "Получить помощь в подборе"}
                        </span>
                      </Button>
                    </div>

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

                      <a href="mailto:info@mobile-tent.ru" className="flex items-center gap-3 w-full justify-center">
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

                        {/* MAX icon with gradient circle background for visibility (mobile) */}
                        <a
                          href="https://max.ru/u/f9LHodD0cOK_6DAtIeOn3T51Xpzrkg2i4RB2ZEjtVfXOwvURhiW6gtGMLrA"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex w-8 h-8 items-center justify-center rounded-full [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1000 1000" fill="none">
                            <path fill="#fff" fillRule="evenodd" d="M508.211 878.328c-75.007 0-109.864-10.95-170.453-54.75-38.325 49.275-159.686 87.783-164.979 21.9 0-49.456-10.95-91.248-23.36-136.873-14.782-56.21-31.572-118.807-31.572-209.508 0-216.626 177.754-379.597 388.357-379.597 210.785 0 375.947 171.001 375.947 381.604.707 207.346-166.595 376.118-373.94 377.224m3.103-571.585c-102.564-5.292-182.499 65.7-200.201 177.024-14.6 92.162 11.315 204.398 33.397 210.238 10.585 2.555 37.23-18.98 53.837-35.587a189.8 189.8 0 0 0 92.71 33.032c106.273 5.112 197.08-75.794 204.215-181.95 4.154-106.382-77.67-196.486-183.958-202.574Z" clipRule="evenodd"></path>
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
    </>
  );
};

export default Frameofhelp;