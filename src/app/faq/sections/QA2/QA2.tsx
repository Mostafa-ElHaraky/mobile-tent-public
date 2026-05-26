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

// Cookie helper function
const getCookie = (name: string): string => {
  if (typeof document === "undefined") return "";
  const m = document.cookie.match(new RegExp("(^|; )" + name.replace(/([.$?*|{}()[\]\\/+^])/g, "\\$1") + "=([^;]*)"));
  return m ? decodeURIComponent(m[2]) : "";
};

// URL search params helper
const getSearchParam = (name: string): string => {
  if (typeof window === "undefined") return "";
  return new URLSearchParams(window.location.search).get(name) || "";
};

// Google Analytics Client ID parser
const parseGAClientId = (gaCookie: string): string => {
  if (!gaCookie) return "";
  const parts = gaCookie.split(".");
  if (parts.length >= 4) {
    const cid = parts.slice(-2).join(".");
    return cid;
  }
  return gaCookie;
};

// Props interface for QA2 component
interface QA2Props {
  contactData?: {
    phone1?: string;
    phone2?: string;
    email?: string;
    telegram?: string;
    whatsapp?: string;
  };
}

export const QA2: React.FC<QA2Props> = ({ contactData }) => {
  const router = useRouter();

  const [phone, setPhone] = useState('+7 ');
  const [question, setQuestion] = useState('');
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Default values if no data from CMS
  const defaultContactData = {
    phone1: "+7 (495) 760-42-20",
    phone2: "+7 (985) 760-42-20",
    email: "info@mobile-tent.ru",
    telegram: "https://t.me/+79857604220",
    whatsapp: "https://max.ru/u/f9LHodD0cOK_6DAtIeOn3T51Xpzrkg2i4RB2ZEjtVfXOwvURhiW6gtGMLrA"
  };

  // Merge CMS data with defaults
  const contacts = {
    phone1: contactData?.phone1 || defaultContactData.phone1,
    phone2: contactData?.phone2 || defaultContactData.phone2,
    email: contactData?.email || defaultContactData.email,
    telegram: contactData?.telegram || defaultContactData.telegram,
    whatsapp: contactData?.whatsapp || defaultContactData.whatsapp
  };

  // Helper function to extract phone number from WhatsApp URL
  const extractWhatsAppNumber = (url: string) => {
    try {
      const match = url.match(/phone=(\d+)/);
      return match ? match[1] : "79805109568";
    } catch {
      return "79805109568";
    }
  };

  // Helper function to format WhatsApp URL
  const formatWhatsAppUrl = (phoneNumber: string) => {
    // If it's already a full URL, return as is
    if (phoneNumber.startsWith('http')) return phoneNumber;
    
    // If it's just a number, format it
    const cleanNumber = phoneNumber.replace(/\D/g, '');
    return `https://api.whatsapp.com/send/?phone=${cleanNumber}`;
  };

  // Helper function to format Telegram URL
  const formatTelegramUrl = (telegramData: string) => {
    // If it's already a full URL, return as is
    if (telegramData.startsWith('http')) return telegramData;
    
    // If it's just a username (without @), add it
    if (telegramData.startsWith('@')) {
      return `https://t.me/${telegramData.substring(1)}`;
    }
    
    // If it's just a username (without @), add it
    if (/^[a-zA-Z0-9_]+$/.test(telegramData)) {
      return `https://t.me/${telegramData}`;
    }
    
    // Default fallback
    return telegramData;
  };

  const whatsappUrl = formatWhatsAppUrl(contacts.whatsapp);
  const telegramUrl = formatTelegramUrl(contacts.telegram);
  const whatsappNumber = extractWhatsAppNumber(whatsappUrl);

  // Basic HTML escape
  const escapeHtml = (str: string) =>
    str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');

  // Strict client-side sanitizer for the comment/question
  const sanitizeComment = (raw: string) => {
    let s = raw ?? '';
    // Normalize whitespace and trim
    s = s.replace(/\r\n?/g, '\n').trim();
    // Strip script/style/iframe/object/embed tags completely
    s = s.replace(/<\/?(script|style|iframe|object|embed|link|meta|svg|math)[^>]*>/gi, '');
    // Remove on* handlers and javascript: urls inside any tags (if any remain)
    s = s.replace(/\son[a-z]+\s*=\s*["'][^"']*["']/gi, '');
    s = s.replace(/javascript\s*:/gi, '');
    // Disallow angle-bracket tags by escaping (we only allow plain text)
    s = escapeHtml(s);
    // Length clamp (avoid payload abuse)
    const MAX = 2000;
    if (s.length > MAX) s = s.slice(0, MAX);
    return s;
  };

  // --- Webhook (POST) ---
  const sendToWebhook = async (cleanPhone: string, safeMessage: string) => {
    // ==== Collected context ====
    const now = new Date();
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    const clientTime = now.toLocaleTimeString("ru-RU", { hour12: false });
    const clientDate = now.toLocaleDateString("ru-RU"); // DD.MM.YYYY
    const pageUrl = typeof window !== "undefined" ? window.location.href : "";
    const domainHost = typeof window !== "undefined" ? window.location.hostname : "tent-test.ru";
    const pageTitle = typeof document !== "undefined" ? document.title : "";
    const referrer = typeof document !== "undefined" ? document.referrer : "";

    // UTM & ad params (from URL if present)
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

    // Device / browser context for readable CRM comments
    const w = typeof window !== "undefined" ? window : ({} as any);
    const dpr = w.devicePixelRatio ? String(w.devicePixelRatio) : "";
    const vw = w.innerWidth ? String(w.innerWidth) : "";
    const vh = w.innerHeight ? String(w.innerHeight) : "";
    const lang = typeof navigator !== "undefined" ? navigator.language : "";
    const platform = typeof navigator !== "undefined" ? (navigator as any).platform || "" : "";
    const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";

    // Human-readable message → goes into Bitrix COMMENTS (via $_POST['message'])
    const messageReadable =
      `Форма: «Не нашли ответ на свой вопрос? Задайте и получите ответ в течении 30 минут»\n` +
      `Вопрос клиента: ${safeMessage}\n\n` +
      `Страница: ${pageUrl}\nЗаголовок: ${pageTitle}\nИсточник-реферер: ${referrer || "—"}\n` +
      `Время клиента: ${clientTime} (${tz}), Дата: ${clientDate}\n\n` +
      `UTM: source=${utm_source || "—"}, medium=${utm_medium || "—"}, campaign=${utm_campaign || "—"}, content=${utm_content || "—"}, term=${utm_term || "—"}\n` +
      `gclid=${gclid || "—"}, yclid=${yclid || "—"}, roistat_visit=${roistat_visit || "—"}\n` +
      `_ga=${gaCookie || "—"} (cid=${gaClientId || "—"}), _ym_uid=${ymUid || "—"}\n\n` +
      `Устройство: ${platform || "—"}, Язык: ${lang || "—"}, DPR=${dpr || "—"}, viewport=${vw || "—"}×${vh || "—"}\n` +
      `User-Agent: ${ua || "—"}`;

    // ==== IMPORTANT: match PHP expected keys exactly ====
    const payload: Record<string, string> = {
      // Title/name
      sitename: domainHost,   // -> TITLE
      name: "",               // -> NAME
      surname: "",            // -> LAST_NAME
      message: messageReadable, // -> COMMENTS (rich context)

      // Lead metadata
      roistat_visit: roistat_visit || "",
      domain: domainHost, // UF_CRM_1698687546 (Домен сайта)

      // Quiz fields (send empty if unknown)
      question_1: "", // UF_CRM_1698687796
      question_2: "", // UF_CRM_1698687816
      question_3: "", // UF_CRM_1698687825
      question_4: "", // UF_CRM_1698687834

      "question-1": "", // UF_CRM_1698690729
      "question-2": "", // UF_CRM_1698690739
      "question-3": "", // UF_CRM_1698690747
      quizDate: clientDate, // UF_CRM_1698690747
      "question-4": "", // UF_CRM_1698690756

      construction_type: "", // UF_CRM_1698687843
      length: "",            // UF_CRM_1698687854
      width: "",             // UF_CRM_1698687861
      height1: "",           // UF_CRM_1698687869
      height2: "",           // UF_CRM_1698687878
      gates_type: "",        // UF_CRM_1698687888
      gates: "",             // UF_CRM_1698687897
      doors_type: "",        // UF_CRM_1698687906
      doors: "",             // UF_CRM_1698687915
      cover_type: "",        // UF_CRM_1698687924
      tip: "",               // UF_CRM_1698687935
      city: "",              // UF_CRM_1698687943
      pokr: "",              // UF_CRM_1698687954
      "doc.pagetitle": pageTitle, // UF_CRM_1698687968

      tent_material: "", // UF_CRM_1712905580948
      tent_density: "",  // UF_CRM_1712905599160
      tent_layers: "",   // UF_CRM_1712905613519
      frame_type: "",    // UF_CRM_1712905623743
      frame_material: "",// UF_CRM_1712905635127
      frame_zinc: "",    // UF_CRM_1712905646071
      fur_type: "",      // UF_CRM_1712905656934
      full_price: "",    // UF_CRM_1712905667781
      project: "",       // UF_CRM_1712905681349
      type: "",          // UF_CRM_1712905691205
      typeproject: "",   // UF_CRM_1712905701949
      comment: safeMessage,       // UF_CRM_1712905718228 (original question)
      otrasl: "",        // UF_CRM_1712905751828
      nameFile: "",      // UF_CRM_1712905764012

      url: pageUrl, // UF_CRM_1712907937027

      // UTM (exact names the PHP expects)
      utm_source: utm_source,
      utm_medium: utm_medium,
      utm_campaign: utm_campaign,
      utm_content: utm_content,
      utm_term: utm_term,

      // Ads/counters the PHP expects
      _ga: gaCookie,
      _ym_uid: ymUid,
      yclid: yclid,
      gclid: gclid,

      // Phones/emails
      phone: cleanPhone, // also goes into FM->PHONE
      email: "",         // FM->EMAIL (empty unless you add field)
    };

    const body = new URLSearchParams(payload).toString();

    try {
      await fetch("https://crm.grand-tent.ru/local/webhooks/get_from_sites.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
        body,
        mode: "no-cors", // keep to avoid CORS/browser errors
      });
    } catch (e) {
      console.error("Webhook error:", e);
    }
  };
  // --- /Webhook ---

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

    // Sanitize comment to protect from XSS
    const safeQuestion = sanitizeComment(question);

    try {
      setSubmitting(true);
      await sendToWebhook(cleanDigits, safeQuestion);
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

  const contactInfo = [
    {
      icon: <PhoneIcon className="h-3 w-3 text-white" />,
      text: contacts.phone1,
      href: `tel:${contacts.phone1.replace(/\D/g, '')}`,
    },
    {
      icon: <PhoneIcon className="h-3 w-3 text-white" />,
      text: contacts.phone2,
      href: `tel:${contacts.phone2.replace(/\D/g, '')}`,
    },
    {
      icon: <MailIcon className="h-3 w-3 text-white" />,
      text: contacts.email,
      href: `mailto:${contacts.email}`,
      hasClipboard: true,
    },
  ];

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
                    Евгений Петров
                  </div>
                  <div className="font-raleway font-medium text-base text-white">
                    Эксперт по тентовым конструкциям
                  </div>
                </div>
              </Badge>

            </div>

            <div className="relative z-10 pt-[110px] pb-[90px] pl-[63px]">
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
                      href={`mailto:${contacts.email}`}
                      className="font-raleway text-sm text-[#232c42] hover:underline"
                    >
                      {contacts.email}
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
                  Евгений Петров
                </div>
                <div className="font-raleway font-medium text-xs text-white">
                  Эксперт по тентовым конструкциям
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