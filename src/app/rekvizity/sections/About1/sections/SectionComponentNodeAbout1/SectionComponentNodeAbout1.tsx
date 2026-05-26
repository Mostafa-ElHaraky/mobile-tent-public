'use client';

import { useState } from 'react';
import { Button } from "../../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../../components/ui/card";
import { Input } from "../../../../../../components/ui/input";
import { ReactElement } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

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

export const SectionComponentNodeAbout1 = (): ReactElement => {
  const router = useRouter();

  // UI state
  const [digits, setDigits] = useState(''); // only digits, e.g. "7XXXXXXXXXX"
  const [formError, setFormError] = useState('');
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // --- Phone mask helpers ---
  // Format "7XXXXXXXXXX" -> "+7 (XXX) XXX-XX-XX"
  const formatPhone = (val: string) => {
    if (!val) return '+7 (___) ___-__-__';
    let d = val.replace(/\D/g, '');
    // force leading 7
    if (d.startsWith('8')) d = '7' + d.slice(1);
    if (!d.startsWith('7')) d = '7' + d;
    d = d.slice(0, 11);

    const p1 = d.slice(1, 4);
    const p2 = d.slice(4, 7);
    const p3 = d.slice(7, 9);
    const p4 = d.slice(9, 11);

    let out = '+7 ';
    out += '(' + (p1.padEnd(3, '_')) + ') ';
    out += (p2.padEnd(3, '_')) + '-';
    out += (p3.padEnd(2, '_')) + '-';
    out += (p4.padEnd(2, '_'));
    return out;
  };

  // Normalize arbitrary input to digits-only with leading 7 and max length 11
  const normalizeDigits = (raw: string) => {
    let d = raw.replace(/\D/g, '');
    if (d.startsWith('8')) d = '7' + d.slice(1);
    if (!d.startsWith('7')) d = '7' + d;
    return d.slice(0, 11);
  };

  // --- Masked input change handler ---
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextDigits = normalizeDigits(e.target.value);
    setDigits(nextDigits);
    setFormError('');
  };

  // Optional: better paste handling
  const handlePhonePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pasted = e.clipboardData.getData('text');
    const nextDigits = normalizeDigits(pasted);
    e.preventDefault();
    setDigits(nextDigits);
    setFormError('');
  };

  // Display value for the input
  const displayPhone = digits ? formatPhone(digits) : '+7 (___) ___-__-__';

  // --- Send payload to Bitrix webhook ---
  const sendToWebhook = async (cleanedPhone: string) => {
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
      `Форма: «Скачайте презентацию компании»\n` +
      `Действие: Запрос контактов и презентации\n\n` +
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
      comment: "Запрос презентации компании", // UF_CRM_1712905718228
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
      phone: cleanedPhone, // also goes into FM->PHONE
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

  // --- Submit
  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    // digits must be exactly 11 and start with 7
    if (!digits || !digits.startsWith('7') || digits.length !== 11) {
      setFormError("Введите корректный российский номер (+7 XXX XXX-XX-XX)");
      return;
    }
    if (!consent) {
      setFormError("Пожалуйста, согласитесь с Пользовательским соглашением");
      return;
    }

    setIsSubmitting(true);
    setFormError('');
    try {
      await sendToWebhook(digits); // send clean 7XXXXXXXXXX
      setDigits('');
      setConsent(false);
      router.push("/thankyou");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Derived disable state
  const isValidPhone = digits.startsWith('7') && digits.length === 11;
  const isDisabled = !isValidPhone || !consent || isSubmitting;

  return (
    <>
      {/* Desktop */}
      <section
        className="relative w-full h-[680px] top-[650px] rounded-[30px] overflow-hidden shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] bg-cover bg-center hidden md:block"
        style={{
          backgroundImage: `
            linear-gradient(108.32deg, #243057 19.48%, rgba(0, 0, 0, 0.7) 107.93%),
            url('/About1-metal-structure-against-the-blue-sky-with-white-clouds-1-1.webp')
          `,
        }}
      >
        <div className="relative w-[962px] h-[860px] top-[-57px] left-[-115px]">
          <div className="absolute w-[807px] h-[807px] top-0 left-0 rounded-[403.5px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(60,138,255,0.85)_0%,rgba(67,130,220,0)_100%)]" />

          <Image
            src="/About1-08-clouds-1-1.webp"
            alt="Element clouds"
            width={847}
            height={424}
            loading="lazy"
            className="absolute top-[57px] left-[115px] object-cover"
          />

          <div className="absolute w-[676px] h-[513px] top-[298px] left-[115px] rounded-[338px/256.5px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(7,12,30,1)_0%,rgba(17,27,63,0)_100%)]" />

          <Image
            src="/About1-vecteezy-overgrown-green-grass-generative-ai-generated-24190129--2.webp"
            alt="Vecteezy overgrown"
            width={299}
            height={190}
            loading="lazy"
            className="absolute top-[510px] left-[115px]"
          />

          <Image
            src="/About1-08-clouds-1-1.webp"
            alt="Element clouds"
            width={486}
            height={355}
            loading="lazy"
            className="absolute top-[336px] left-[115px] blur-[15px] object-cover"
          />

          <Image
            src="/About1-event-tent-i02-2-1.webp"
            alt="Event tent"
            width={719}
            height={604}
            loading="lazy"
            className="absolute top-[57px] left-[25px]"
          />
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start border-0 gap-[46px] absolute top-[95px] left-[847px]"
        >
          <div className="flex flex-col items-start gap-[50px]">
            <div className="flex flex-col items-start gap-9">
              <div className="flex flex-col w-[490px] items-start gap-6">
                <h2 className="w-[490px] mt-[-1.00px] font-semibold text-4xl leading-[normal] [font-family:'Raleway',Helvetica] tracking-[0] text-white">
                  <span>Скачайте презентацию </span>
                  <span className="text-[#89b5ff]">компании</span>
                </h2>
              </div>

              <Card className="bg-[#73a7ff59] border-none rounded-[20px]">
                <CardContent className="p-6">
                  <p className="w-fit mt-[-1.00px] [font-family:'Raleway',Helvetica] font-semibold text-white text-xl tracking-[0] leading-6 whitespace-nowrap">
                    Придет файл формат .pdf, 57 страниц, 500 кб
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="flex flex-col items-start gap-6">
            <div className="flex w-[496px] items-end gap-4">
              <div className="flex flex-col h-[72px] items-start gap-4 flex-1 grow rounded-2xl overflow-hidden border border-solid border-neutral-200 shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]">
                <div className="w-full h-[72px] rounded-2xl overflow-hidden flex items-center gap-2 pl-3 pr-2 py-2 bg-white">
      <Input
        value={displayPhone}
        onChange={handlePhoneChange}
        onPaste={handlePhonePaste}
        inputMode="tel"
        placeholder="+7 (___) ___-__-__"
        maxLength={22} // generous to allow user typing; we still clamp to 11 digits in code
        aria-invalid={!!formError}
      />
                </div>
              </div>
            </div>

            {!!formError && (
              <p id="phone-error" className="text-red-500 text-sm mt-1">
                {formError}
              </p>
            )}

            {/* Consent */}
            <div className="flex items-center justify-center gap-2.5 mt-2">
              <div className="flex flex-col w-[453px] items-start gap-3">
                <label className="flex items-center gap-2 cursor-pointer select-none text-white text-sm max-w-[496px]">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="w-5 h-5 rounded border border-gray-300 bg-white"
                  />
                  <span>
                    Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь с{' '}
                    <a href="/user-agreement" target="_blank" rel="noopener noreferrer" className="underline text-[#89b5ff]">
                      Пользовательским соглашением
                    </a>
                  </span>
                </label>

                <div className="flex flex-col w-[496px] items-start justify-center gap-3 mt-3">
                  <Button
                    type="submit"
                    disabled={isDisabled}
                    className="w-[496px] h-[72px] rounded-2xl border-none shadow-2 [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] font-semibold text-white text-base text-center leading-[normal] whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]"
                  >
                    {isSubmitting ? 'Отправка...' : 'Запросить контакты'}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>

      {/* Mobile */}
      <section
        className="relative w-full min-h-[760px] top-[50px] rounded-[20px] overflow-hidden shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] bg-cover bg-center block md:hidden px-4"
        style={{
          backgroundImage: `
            linear-gradient(108.32deg, #243057 19.48%, rgba(0, 0, 0, 0.7) 107.93%),
            url('/About1-metal-structure-against-the-blue-sky-with-white-clouds-1-1.webp')
          `,
        }}
      >
        <div className="relative w-full flex flex-col items-center pt-8 pb-10">
          <div className="flex flex-col items-center gap-4 w-full max-w-[400px] mb-6">
            <h2 className="font-semibold text-2xl text-center [font-family:'Raleway',Helvetica] text-white">
              <span>Скачайте презентацию </span>
              <span className="text-[#89b5ff]">компании</span>
            </h2>

            <Card className="bg-[#73a7ff59] border-none rounded-[15px] w-full">
              <CardContent className="p-4">
                <p className="[font-family:'Raleway',Helvetica] font-semibold text-white text-base text-center tracking-[0] leading-5">
                  Придет файл формат .pdf, 57 страниц, 500 кб
                </p>
              </CardContent>
            </Card>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 w-full max-w-[400px]">
            <div className="w-full h-[60px] rounded-2xl overflow-hidden border border-solid border-neutral-200 bg-white">
      <Input
        value={displayPhone}
        onChange={handlePhoneChange}
        onPaste={handlePhonePaste}
        inputMode="tel"
        placeholder="+7 (___) ___-__-__"
        maxLength={22} // generous to allow user typing; we still clamp to 11 digits in code
        aria-invalid={!!formError}
      />
            </div>

            {!!formError && (
              <p id="phone-error-mobile" className="text-red-300 text-sm text-center">
                {formError}
              </p>
            )}

            <Button
              type="submit"
              disabled={isDisabled}
              className="w-full h-[60px] rounded-2xl border-none [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] font-semibold text-white text-base text-center [font-family:'Raleway',Helvetica]"
            >
              {isSubmitting ? 'Отправка...' : 'Запросить контакты'}
            </Button>

            <div className="flex flex-col items-center gap-2 w-full mt-3">
              <label className="flex items-start gap-2 cursor-pointer select-none text-white text-xs max-w-full">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="w-4 h-4 mt-0.5 rounded border border-gray-300 bg-white flex-shrink-0"
                />
                <span>
                  Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь с{' '}
                  <a href="/user-agreement" target="_blank" rel="noopener noreferrer" className="underline text-[#89b5ff]">
                    Пользовательским соглашением
                  </a>
                </span>
              </label>
            </div>
          </form>

          {/* Decorative images (unchanged) */}
          <div className="relative w-full max-w-[600px] h-[420px] mx-auto mt-8">
            <div className="absolute inset-0 z-0">
              <Image
                src="/About1-08-clouds-1-1.webp"
                alt="Clouds background"
                fill
                loading="lazy"
                className="object-cover opacity-70 blur-[2px]"
                quality={80}
              />
            </div>

            <div className="relative w-200 h-full right-80 top-30 z-10 flex items-center justify-center">
              <Image
                src="/About1-event-tent-i02-2-1.webp"
                alt="Event tent"
                width={500}
                height={450}
                loading="lazy"
                className="object-contain object-bottom mt-12"
                quality={100}
              />
            </div>
          </div>

          <div className="absolute bottom-4 left-0 right-30 flex justify-center">
            <Image
              src="/About1-vecteezy-overgrown-green-grass-generative-ai-generated-24190129--2.webp"
              alt="Vecteezy overgrown"
              width={180}
              height={80}
              loading="lazy"
              className="opacity-80"
            />
          </div>
        </div>
      </section>
    </>
  );
};