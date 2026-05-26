'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import Image from "next/image";

// Define props interface
type Consultaionfor3dProps = {
  onClose: () => void;
};

// Helpers (SSR-safe)
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

// Strict RU phone formatter: "+7 (xxx) xxx-xx-xx", max 11 digits
const formatRuPhone = (input: string) => {
  let d = input.replace(/\D/g, "");
  if (d.length === 0) d = "7";
  if (d[0] !== "7") d = "7" + d.slice(1);
  d = d.slice(0, 11);

  const p1 = d.slice(1, 4);
  const p2 = d.slice(4, 7);
  const p3 = d.slice(7, 9);
  const p4 = d.slice(9, 11);

  let out = "+7";
  if (p1) out += ` (${p1}`;
  if (p1.length === 3) out += `)`;
  if (p2) out += ` ${p2}`;
  if (p3) out += `-${p3}`;
  if (p4) out += `-${p4}`;
  return out;
};

const Consultaionfor3d = ({ onClose }: Consultaionfor3dProps) => {
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

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatRuPhone(e.target.value);
    setPhone(formatted);
    setFormError("");
  };
  const handlePhonePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text");
    setPhone(formatRuPhone(pasted));
    setFormError("");
  };
  const handlePhoneFocus = () => {
    if (!phone.trim()) setPhone("+7 (");
  };

  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText(contactInfo[2].value)
      .then(() => setCopySuccess("Скопировано!"))
      .catch(() => setCopySuccess("Ошибка копирования"));
    setTimeout(() => setCopySuccess(""), 2000);
  };

  // Send payload to Bitrix webhook (maximum context)
  const sendToWebhook = async (cleanedPhone: string) => {
    const now = new Date();
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    const clientTime = now.toLocaleTimeString("ru-RU", { hour12: false });
    const clientDate = now.toLocaleDateString("ru-RU"); // DD.MM.YYYY
    const pageUrl = typeof window !== "undefined" ? window.location.href : "";
    const domainHost = typeof window !== "undefined" ? window.location.hostname : "mobile-tent.ru";
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

    // Device/browser context (handy for COMMENTS)
    const dpr = typeof window !== "undefined" && window.devicePixelRatio ? String(window.devicePixelRatio) : "";
    const vw = typeof window !== "undefined" && window.innerWidth ? String(window.innerWidth) : "";
    const vh = typeof window !== "undefined" && window.innerHeight ? String(window.innerHeight) : "";
    const lang = typeof navigator !== "undefined" ? navigator.language : "";
    const platform = typeof navigator !== "undefined" ? (navigator as any).platform || "" : "";
    const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";

    const sourceDescription =
      `Клиент запросил консультацию/КП (форма 3D). ` +
      `Страница: ${pageUrl} | Время клиента: ${clientTime} (${tz}) | ` +
      `Дата создания (клиента): ${clientDate} | Источник: сайт ${domainHost} (форма «Получить КП»).`;

    const messageReadable =
      `Форма: «Получить КП (3D консультация)»\n` +
      `Страница: ${pageUrl}\nЗаголовок: ${pageTitle}\nИсточник-реферер: ${referrer || "—"}\n` +
      `Время клиента: ${clientTime} (${tz}), Дата: ${clientDate}\n\n` +
      `UTM: source=${utm_source || "—"}, medium=${utm_medium || "—"}, campaign=${utm_campaign || "—"}, content=${utm_content || "—"}, term=${utm_term || "—"}\n` +
      `gclid=${gclid || "—"}, yclid=${yclid || "—"}, roistat_visit=${roistat_visit || "—"}\n` +
      `_ga=${gaCookie || "—"} (cid=${gaClientId || "—"}), _ym_uid=${ymUid || "—"}\n\n` +
      `Устройство: ${platform || "—"}, Язык: ${lang || "—"}, DPR=${dpr || "—"}, viewport=${vw || "—"}×${vh || "—"}\n` +
      `User-Agent: ${ua || "—"}`;

    const payload: Record<string, string> = {
      // Simple keys (your PHP also reads these)
      domain: domainHost,
      phone: cleanedPhone,
      "Время клиента": `${clientTime} (${tz})`,
      "Дата создания": clientDate,
      "Источник": `Сайт ${domainHost} — форма «Получить КП»`,

      // Bitrix custom fields (your PHP maps these)
      UF_CRM_1698687546: domainHost,              // Домен сайта
      UF_CRM_CUST_LTIME: `${clientTime} (${tz})`, // Время клиента
      SOURCE_DESCRIPTION: sourceDescription,      // Дополнительно об источнике
      UF_CRM_1712907937027: pageUrl,              // URL
      "doc.pagetitle": pageTitle,                 // Заголовок страницы (для ваших маппингов)

      // UTM → your custom UF_ fields
      UF_CRM_1728380948090: utm_source,
      UF_CRM_1728380965926: utm_medium,
      UF_CRM_1728380991359: utm_campaign,
      UF_CRM_1728381006839: utm_content,
      UF_CRM_1728381021062: utm_term,

      // Ads/counters used elsewhere
      _ga: gaCookie,
      _ym_uid: ymUid,
      gclid,
      yclid,

      // Optional cookie from your stack
      roistat_visit,

      // Rich COMMENTS (map this to COMMENTS if desired)
      message: messageReadable,

      // Keep placeholders to satisfy shared webhook mappings if reused
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
      setPhone("");
      setIsAgreed(false);
      setIsMarketingAgreed(false);
      onClose();
      router.push("/thankyou");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Check if form can be submitted - BOTH checkboxes must be checked
  const canSubmit = phone.replace(/\D/g, "").length === 11 && isAgreed && isMarketingAgreed && !isSubmitting;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 flex items-center justify-center z-50 bg-black/45"
    >
      {/* Desktop Version */}
      <Card className="hidden lg:block relative w-full max-w-[1341px] h-[650px] border-0 bg-white rounded-[20px] shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 text-gray-500 hover:text-gray-700 text-3xl font-mono"
          aria-label="Закрыть модальное окно"
        >
          ×
        </button>

        <div className="absolute w-[562px] h-[588px] top-[-15px] right-0">
          <Image
            className="absolute w-[521px] h-[521px] top-[52px] left-[41px]"
            alt="Шатёр для мероприятий"
            src="/event-tent-i02-1.webp"
            width={521}
            height={521}
            priority
          />
          <Image
            className="absolute w-[412px] h-[573px] top-0 left-0"
            alt="Уверенный молодой бизнесмен"
            src="/QA2-confident-young-businessman-in-blue-shirt-and-glasses-smiling-at.webp"
            width={412}
            height={573}
            priority
          />
          <div className="absolute w-[526px] h-[222px] top-[381px] left-9">
            <Image
              className="absolute w-[409px] h-[222px] top-0 left-[91px]"
              alt="Зелёная трава"
              src="/vecteezy-overgrown-green-grass-generative-ai-generated-24190129-.webp"
              width={409}
              height={222}
              priority
            />
          </div>
        </div>

        <CardContent className="p-0">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-start gap-6 absolute border-0  top-[45px] left-[55px] max-w-[544px]"
          >
            <div className="flex flex-col items-start gap-[30px]">
              <h1 className="font-semibold text-2xl font-raleway tracking-normal leading-normal">
                <span className="text-[#527dc5]">
                  Получите КП со стоимостью
                  <br />
                </span>
                <span className="text-[#232c42]">
                  и сроками изготовления конструкции
                </span>
              </h1>
              <p className="font-medium text-[#232c42] text-l font-raleway leading-normal">
                Оставьте телефон, свяжемся в течении 30 минут запросим данные и
                сделаем КП
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
                        Получить КП
                      </span>
                    )}
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

                  <p className="font-medium text-[#4f5d8094] text-xs font-raleway">
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
                        <Image
                          src={contact.icon}
                          alt="Телефон"
                          width={12}
                          height={12}
                          className="w-3 h-3"
                        />
                      </div>
                      <a
                        href={`tel:${contact.value.replace(/[^\d+]/g, "")}`}
                        className="font-raleway font-normal text-[#394355] text-sm hover:underline"
                      >
                        {contact.value}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col items-start gap-[13px]">
                  <div className="flex items-center gap-[18px] relative">
                    <div className="flex w-[25px] h-[25px] items-center justify-center p-1.5 rounded-[50px] bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec]">
                      <Image
                        src={contactInfo[2].icon}
                        alt="Email"
                        width={15}
                        height={11}
                        className="w-[15px] h-[11px]"
                      />
                    </div>
                    <button
                      onClick={handleCopyEmail}
                      className="flex items-center gap-1 hover:opacity-80 transition-opacity"
                      aria-label="Скопировать email"
                      type="button"
                    >
                      <a
                        href={`mailto:${contactInfo[2].value}`}
                        className="font-raleway font-normal text-[#232c42] text-sm hover:underline"
                      >
                        {contactInfo[2].value}
                      </a>
                      <Image
                        src="/group-2.webp"
                        alt="Копировать"
                        width={16}
                        height={16}
                        className="w-4 h-4"
                      />
                    </button>
                    {copySuccess && (
                      <span className="absolute -bottom-6 left-0 text-sm text-green-600 transition-opacity duration-300">
                        {copySuccess}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Mobile Version */}
      <Card className="lg:hidden relative w-full max-w-[90vw] mx-auto border-0 bg-white rounded-[20px] shadow-lg overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 text-gray-500 hover:text-gray-700 text-3xl font-mono"
          aria-label="Закрыть модальное окно"
        >
          ×
        </button>

        <CardContent className="p-6">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-6 w-full"
          >
            <div className="flex flex-col items-center gap-6 w-full">
              <h1 className="font-semibold text-xl text-center font-raleway tracking-normal leading-normal">
                <span className="text-[#527dc5] block">
                  Получите КП со стоимостью
                </span>
                <span className="text-[#232c42] block">
                  и сроками изготовления конструкции
                </span>
              </h1>

              <p className="font-medium text-[#232c42] text-base text-center font-raleway leading-normal">
                Оставьте телефон, свяжемся в течении 30 минут запросим данные и сделаем КП
              </p>
            </div>

            <fieldset className="flex flex-col items-center gap-6 w-full" disabled={isSubmitting}>
              <div className="flex flex-col w-full gap-5">
                <div className="flex flex-col gap-4 w-full">
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
                    <div className="text-red-500 text-sm -mt-2 text-center" aria-live="polite">
                      {formError}
                    </div>
                  )}

                  <Button
                    type="submit"
                    className={`w-full h-[68px] rounded-2xl border-[none] shadow-2 ${
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
                        Получить КП
                      </span>
                    )}
                  </Button>
                </div>

                {/* Checkbox 1 - Mobile - Required */}
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
                      <Image
                        src="/right.webp"
                        alt="Галочка"
                        width={17}
                        height={13}
                        className="w-[17px] h-[13px]"
                      />
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

                {/* Checkbox 2 - Mobile - Now Also Required */}
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
                      <Image
                        src="/right.webp"
                        alt="Галочка"
                        width={17}
                        height={13}
                        className="w-[17px] h-[13px]"
                      />
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

            <div className="flex flex-col items-start gap-6 w-full relative">
              <h2 className="font-semibold text-[#232c42] text-xl [font-family:'Raleway',Helvetica] tracking-[0] leading-[normal]">
                Или свяжитесь по контактам
              </h2>

              <div className="flex flex-row items-start gap-6 w-full">
                <div className="flex flex-col items-start gap-4 w-full">
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="flex w-[25px] h-[25px] items-center justify-center p-1.5 rounded-[50px] bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec]">
                        <Image
                          src={contact.icon}
                          alt={contact.type === "phone" ? "Телефон" : "Email"}
                          width={contact.type === "phone" ? 12 : 15}
                          height={contact.type === "phone" ? 12 : 11}
                          className={contact.type === "phone" ? "w-3 h-3" : "w-[15px] h-[11px]"}
                        />
                      </div>
                      {contact.type === "email" ? (
                        <div className="flex items-center gap-2">
                          <span className="font-raleway font-normal text-[#232c42] text-sm">
                            {contact.value}
                          </span>
                          <button
                            onClick={handleCopyEmail}
                            className="hover:opacity-80 transition-opacity"
                            aria-label="Скопировать email"
                            type="button"
                          >
                            <Image
                              src="/group-2.webp"
                              alt="Копировать"
                              width={16}
                              height={16}
                              className="w-4 h-4"
                            />
                          </button>
                        </div>
                      ) : (
                        <a
                          href={`tel:${contact.value.replace(/[^\d+]/g, "")}`}
                          className="font-raleway font-normal text-[#394355] text-sm hover:underline"
                        >
                          {contact.value}
                        </a>
                      )}
                    </div>
                  ))}

                  <div className="flex items-center gap-4 mt-2">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex w-10 h-10 items-center justify-center rounded-full hover:opacity-80 transition-opacity ${
                          social.isSvg 
                            ? "bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec]" 
                            : "bg-transparent"
                        }`}
                        aria-label={social.alt}
                      >
                        {social.isSvg ? (
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 1000 1000" fill="none">
                            <path fill="#fff" fillRule="evenodd" d={social.svgPath} clipRule="evenodd" />
                          </svg>
                        ) : (
                          <Image src={social.icon} alt={social.alt} width={24} height={24} className="w-6 h-6" />
                        )}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="relative w-[400px] h-[260px]">
                  <Image
                    src="/QA2-confident-young-businessman-in-blue-shirt-and-glasses-smiling-at.webp"
                    alt="Businessman"
                    width={400}
                    height={400}
                    className="rounded-lg object-contain"
                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                  />
                </div>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Consultaionfor3d;