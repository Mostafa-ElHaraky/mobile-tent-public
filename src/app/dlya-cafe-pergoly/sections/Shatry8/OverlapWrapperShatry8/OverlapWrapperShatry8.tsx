'use client';

import { Button } from "../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../components/ui/card";
import { Input } from "../../../../../components/ui/input";
import { ReactElement, useState, useCallback } from 'react';
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

export const OverlapWrapperShatry8 = (): ReactElement => {
  const router = useRouter();

  // Always start with +7
  const [phone, setPhone] = useState('+7 ');
  const [error, setError] = useState('');
  const [isSending, setIsSending] = useState(false);

  const benefits = [
    { id: 1, icon: "/element8-15.webp", text: (<><span className="font-semibold">Расскажет, как не попасть на уловки нечестных компаний,</span> которые могут привести к печальным последствиям. Они не только в стоимости</>) },
    { id: 2, icon: "/element8-16.webp", text: (<><span className="font-semibold">покажет отличия качественного и некачественного шатра</span></>) },
    { id: 3, icon: "/element8-17.webp", text: (<><span className="font-semibold">Ответит на вопросы и подберет лучшие материалы</span> для ваших условий эксплуатации</>) },
  ];

  // --- Webhook with comprehensive data collection ---
  const sendToWebhook = async (cleanPhone: string) => {
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
      `Форма: «Получите экспертную консультацию по покупке шатра с оценкой стоимости и сроков»\n` +
      `Действие: Запрос экспертной консультации по покупке шатра\n\n` +
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
      comment: "Запрос экспертной консультации по покупке шатра", // UF_CRM_1712905718228
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

  // Formats digits (without +) into "+7 (XXX) XXX-XX-XX"
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
    setError('');
  }, []);

  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === 'Backspace' || e.key === 'Delete') && phone.length <= 3) {
      e.preventDefault();
    }
  };

  const handlePhonePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text');
    const normalizedDigits = sanitizeToRuDigits(pasted);
    const formatted = formatRuPhone(normalizedDigits);
    setPhone(formatted);
    setError('');
  };

  const handleSubmit = async () => {
    if (isSending) return;
    // Clean to digits
    const clean = phone.replace(/\D/g, '');
    if (!(clean.startsWith('7') && clean.length === 11)) {
      setError('Введите корректный российский номер (+7 XXX XXX-XX-XX)');
      return;
    }

    setIsSending(true);
    try {
      await sendToWebhook(clean);
    } catch (e) {
      // Already logged inside sendToWebhook, but keep UX smooth
    } finally {
      setIsSending(false);
      router.push('/thankyou');
    }
  };

  return (
    <>
      {/* Desktop Version (unchanged layout) */}
      <section className="hidden md:block relative w-[1440px] h-[726px] rounded-[30px] overflow-hidden shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] mx-auto flex justify-center items-center">
        <div className="relative h-[718px] top-[50px]">
          <div className="absolute w-full h-[629px] top-[89px] left-0 rounded-[30px] [background:linear-gradient(180deg,rgba(245,246,255,1)_0%,rgba(245,246,255,0)_100%)]" />

          <Image className="absolute w-[302px] h-[322px] top-[284px] left-0" loading="lazy" alt="Vecteezy overgrown" src="/element8-vecteezy-overgrown-green-grass-generative-ai-generated-24190129--1.webp" width={302} height={322} />
          <Image className="absolute w-[498px] h-[565px] top-[129px] right-0" loading="lazy" alt="Event tent" src="/element8-event-tent-i02-1.webp" width={498} height={565} />

          <div className="flex flex-col items-start gap-[55px] absolute top-[172px] left-[63px]">
            <div className="flex flex-col items-start gap-6">
              <h2 className="w-[707px] mt-[-1.00px] font-semibold text-4xl leading-[normal] [font-family:'Raleway',Helvetica] tracking-[0]">
                <span className="text-[#527dc5]">Получите экспертную консультацию<br /></span>
                <span className="text-[#232c42]">по покупке шатра с оценкой стоимости и сроков</span>
              </h2>
            </div>

            <div className="flex flex-col items-start gap-6">
              <div className="flex flex-col w-[560px] gap-[51px] items-start">
                {benefits.map((benefit) => (
                  <div key={benefit.id} className="flex items-center gap-3">
                    <div className="relative w-6 h-6">
                      <Image className="absolute w-6 h-[17px] top-[3px] left-0" loading="lazy" alt="Check icon" src={benefit.icon} width={24} height={17} />
                    </div>
                    <div className="w-[504px] font-normal text-[#394355] text-sm leading-5 [font-family:'Raleway',Helvetica] tracking-[0]">
                      {benefit.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Image
            alt="Confident young businessman"
            src="/element8-confident-young-businessman-in-blue-shirt-and-glasses-smiling-at.webp"
            width={516}
            height={718}
           
            loading="lazy"
            style={{ position: "absolute", width: "516px", height: "718px", top: "8px", left: "808px", transform: "rotate(0deg)", opacity: 1, objectFit: "cover" }}
          />

          <Card className="inline-flex items-center justify-center gap-2.5 px-6 py-3 absolute top-[598px] right-[176px] rounded-2xl overflow-hidden [background:linear-gradient(159deg,rgba(36,48,87,1)_0%,rgba(55,66,85,1)_100%)] border-none">
            <CardContent className="p-0">
              <div className="flex flex-col items-center justify-center gap-1.5">
                <div className="w-fit mt-[-1.00px] font-semibold text-white text-lg text-center leading-6 whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">Евгений Петров</div>
                <div className="w-fit font-medium text-white text-base text-center leading-6 whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">Эксперт по тентовым конструкциям</div>
              </div>
            </CardContent>
          </Card>

          <Image className="absolute w-[359px] h-[306px] top-[412px] right-[-150px]" loading="lazy" alt="Vecteezy overgrown" src="/element8-vecteezy-overgrown-green-grass-generative-ai-generated-24190129--2.webp" width={359} height={306} />

          <div className="flex items-end gap-4 absolute top-[600px] left-[63px]">
            <Card className="flex w-[349px] h-[67px] items-start gap-4 relative rounded-2xl overflow-hidden border-solid border-neutral-200 shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] p-0 border-0">
              <CardContent className="p-0 w-full h-full">
                <div className="flex w-full h-full items-center gap-2 pl-3 pr-2 py-2 bg-white rounded-2xl overflow-hidden">
                  <Input
                    className="border-none shadow-none w-full [font-family:'Raleway',Helvetica] font-normal text-label-colorslc-l-secondary text-[17px] tracking-[-0.41px] leading-[22px]"
                    placeholder="+7 (XXX) XXX-XX-XX"
                    value={phone}
                    onChange={handlePhoneChange}
                    onKeyDown={handlePhoneKeyDown}
                    onPaste={handlePhonePaste}
                    inputMode="tel"
                    maxLength={18} // "+7 (XXX) XXX-XX-XX"
                    pattern="^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$"
                    aria-label="Номер телефона"
                  />
                </div>
              </CardContent>
            </Card>

            <Button
              className="w-[262px] h-[68px] rounded-2xl border-[none] shadow-2 [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] font-semibold text-white text-base text-center leading-[normal] whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]"
              onClick={handleSubmit}
              disabled={isSending}
            >
              {isSending ? 'Отправка...' : 'Получить консультацию'}
            </Button>
          </div>

          {error && (
            <div className="absolute top-[670px] left-[63px] text-red-500 text-sm mt-1">
              {error}
            </div>
          )}
        </div>
      </section>

      {/* Mobile Version */}
      <section className="md:hidden relative w-full py-8 px-4 bg-gradient-to-b from-[#f5f6ff] to-transparent">
        <div className="relative">
          <h2 className="text-2xl font-semibold text-center mb-8 [font-family:'Raleway',Helvetica]">
            <span className="text-[#527dc5] block">Получите экспертную консультацию</span>
            <span className="text-[#232c42] block">по покупке шатра с оценкой стоимости и сроков</span>
          </h2>

          <div className="flex flex-col gap-6 mb-8">
            {benefits.map((benefit) => (
              <div key={benefit.id} className="flex items-start gap-3">
                <div className="relative w-6 h-6 mt-1">
                  <Image className="w-6 h-[17px]" loading="lazy" alt="Check icon" src={benefit.icon} width={24} height={17} />
                </div>
                <div className="flex-1 font-normal text-[#394355] text-sm leading-5 [font-family:'Raleway',Helvetica]">
                  {benefit.text}
                </div>
              </div>
            ))}
          </div>

          <div className="w-full mb-8">
            <div className="flex flex-col gap-4">
              <Card className="w-full border-0">
                <CardContent className="p-0 border-0">
                  <div className="flex items-center gap-2 pl-3 pr-2 py-2 bg-white rounded-2xl">
                    <Input
                      className="border-none shadow-none w-full [font-family:'Raleway',Helvetica] font-normal text-label-colorslc-l-secondary text-[17px]"
                      placeholder="+7 (XXX) XXX-XX-XX"
                      value={phone}
                      onChange={handlePhoneChange}
                      onKeyDown={handlePhoneKeyDown}
                      onPaste={handlePhonePaste}
                      inputMode="tel"
                      maxLength={18}
                      pattern="^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$"
                      aria-label="Номер телефона"
                    />
                  </div>
                </CardContent>
              </Card>

              <Button
                className="w-full h-[68px] rounded-2xl [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] font-semibold text-white text-base [font-family:'Raleway',Helvetica]"
                onClick={handleSubmit}
                disabled={isSending}
              >
                {isSending ? 'Отправка...' : 'Получить консультацию'}
              </Button>
            </div>

            {error && (
              <div className="text-red-500 text-sm mt-2 text-center">
                {error}
              </div>
            )}
          </div>

          <div className="relative w-full mb-8">
            <Image className="w-full h-auto rounded-lg" loading="lazy" alt="Event tent" src="/element8-event-tent-i02-1.webp" width={498} height={565} />
            <div className="absolute top-1 right-[-50px] flex flex-col items-end">
              <div className="w-[630px]">
                <Image className="w-full h-auto rounded-lg" loading="lazy" alt="Confident young businessman" src="/element8-confident-young-businessman-in-blue-shirt-and-glasses-smiling-at.webp" width={516} height={718} />
              </div>
              <Card className="absolute -bottom-0 right-45 w-[260px] [background:linear-gradient(159deg,rgba(36,48,87,1)_0%,rgba(55,66,85,1)_100%)] border-none">
                <CardContent className="p-2">
                  <div className="flex flex-col items-center justify-center gap-1 text-center">
                    <div className="font-semibold text-white text-sm [font-family:'Raleway',Helvetica]">Евгений Петров</div>
                    <div className="font-medium text-white text-xs [font-family:'Raleway',Helvetica] whitespace-nowrap">Эксперт по тентовым конструкциям</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Image className="absolute bottom-0 left-0 w-1/3 -z-10" loading="lazy" alt="Vecteezy overgrown" src="/element8-vecteezy-overgrown-green-grass-generative-ai-generated-24190129--1.webp" width={302} height={322} />
          <Image className="absolute bottom-0 right-0 w-1/3 -z-10" loading="lazy" alt="Vecteezy overgrown" src="/element8-vecteezy-overgrown-green-grass-generative-ai-generated-24190129--2.webp" width={359} height={306} />
        </div>
      </section>
    </>
  );
};