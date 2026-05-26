'use client';

import { Button } from "../../../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../../../components/ui/card";
import { Input } from "../../../../../../../components/ui/input";
import { ReactElement, useState, useCallback } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const OverlapWrapperShatry8 = (): ReactElement => {
  const router = useRouter();
  const [phone, setPhone] = useState('+7');
  const [error, setError] = useState('');
  const [isSending, setIsSending] = useState(false);

  const benefits = [
    { id: 1, icon: "/element8-15.png", text: (<> <span className="font-semibold">Расскажет, как не попасть на уловки нечестных компаний,</span>{" "}которые могут привести к печальным последствиям. Они не только в стоимости</>) },
    { id: 2, icon: "/element8-16.png", text: (<>На примерах{" "}<span className="font-semibold">покажет отличия качественного и некачественного шатра</span></>) },
    { id: 3, icon: "/element8-17.png", text: (<> <span className="font-semibold">Ответит на вопросы и подберет лучшие материалы</span>{" "}для ваших условий эксплуатации</>) },
  ];

  const handlePhoneChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const sanitized = input.replace(/[^0-9+\-() ]/g, '');

    if (!sanitized.startsWith('+7')) {
      if (sanitized.length <= 2) {
        setPhone('+7');
        return;
      }
      if (/^[78]/.test(sanitized)) {
        const digits = sanitized.replace(/[^0-9]/g, '').substring(1);
        setPhone('+7' + digits.substring(0, 10));
        return;
      }
      setPhone('+7' + sanitized.replace(/[^0-9]/g, '').substring(0, 10));
      return;
    }

    if (sanitized.length > 16) return;

    setPhone(sanitized);
    setError('');
  }, []);

const sendToWebhook = async (cleanPhone: string) => {
  const now = new Date();
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
  const clientTime = now.toLocaleTimeString('ru-RU', { hour12: false });
  const clientDate = now.toLocaleDateString('ru-RU'); // DD.MM.YYYY
  const pageUrl = typeof window !== 'undefined' ? window.location.href : '';

  // UTM (optional)
  const sp =
    typeof window !== 'undefined'
      ? new URLSearchParams(window.location.search)
      : null;
  const utm_source   = sp?.get('utm_source')   || '';
  const utm_medium   = sp?.get('utm_medium')   || '';
  const utm_campaign = sp?.get('utm_campaign') || '';
  const utm_content  = sp?.get('utm_content')  || '';
  const utm_term     = sp?.get('utm_term')     || '';

  // Human-readable explanation for CRM (Дополнительно об источнике)
  const sourceDescription =
    `Клиент оставил номер телефона в карточке сервиса: ` +
    `«Получите экспертную консультацию по покупке шатра с оценкой стоимости и сроков». ` +
    `Страница: ${pageUrl} | Время клиента: ${clientTime} (${tz}) | ` +
    `Дата создания (клиента): ${clientDate} | Источник: сайт tent-test.ru (форма консультации).`;

  // Payload: simple keys + direct Bitrix UF_ fields
  const payload: Record<string, string> = {
    domain: 'tent-test.ru',
    phone: cleanPhone,
    'Время клиента': `${clientTime} (${tz})`,
    'Дата создания': clientDate,
    'Источник': 'Сайт tent-test.ru — форма консультации (карточка сервиса)',

    UF_CRM_1698687546: 'tent-test.ru',            // Домен сайта
    UF_CRM_CUST_LTIME: `${clientTime} (${tz})`,   // Время клиента
    SOURCE_DESCRIPTION: sourceDescription,        // Дополнительно об источнике
    UF_CRM_1712907937027: pageUrl,                // Страница с которой пришла заявка

    // UTM (when present)
    UF_CRM_1728380948090: utm_source,   // utm_source:
    UF_CRM_1728380965926: utm_medium,   // utm_medium:
    UF_CRM_1728380991359: utm_campaign, // utm_campaign:
    UF_CRM_1728381006839: utm_content,  // utm_content:
    UF_CRM_1728381021062: utm_term,     // utm_term:
  };

  const body = new URLSearchParams(payload).toString();

  try {
    await fetch('https://crm.grand-tent.ru/local/webhooks/get_from_sites.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
      body,
      mode: 'no-cors', // remove if CORS is enabled and you want to inspect the response
    });
  } catch (e) {
    console.error('Webhook error:', e);
  }
};

const handleSubmit = async () => {
  if (isSending) return;

  const cleanPhone = phone.replace(/\D/g, '');
  if (!cleanPhone.startsWith('7') || cleanPhone.length !== 11) {
    setError('Введите корректный российский номер (+7 XXX XXX-XXXX)');
    return;
  }

  setError('');
  setIsSending(true);
  await sendToWebhook(cleanPhone);
  setIsSending(false);
  router.push('/thankyou');
};

const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    handleSubmit();
  }
};

  return (
    <>
      {/* Desktop Version (unchanged layout, input now supports Enter + sending state) */}
      <section className="hidden md:block relative w-full h-[726px] top-[70px] rounded-[30px] overflow-hidden shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]">
        <div className="relative h-[718px] mt-1">
          <div className="absolute w-full h-[629px] top-[89px] left-0 rounded-[30px] [background:linear-gradient(180deg,rgba(245,246,255,1)_0%,rgba(245,246,255,0)_100%)]" />

          <Image className="absolute w-[302px] h-[322px] top-[284px] left-0" alt="Vecteezy overgrown" src="/element8-vecteezy-overgrown-green-grass-generative-ai-generated-24190129--1.png" width={302} height={322} />
          <Image className="absolute w-[498px] h-[565px] top-[129px] right-0" alt="Event tent" src="/element8-event-tent-i02-1.png" width={498} height={565} />

          <div className="flex flex-col items-start gap-[55px] absolute top-[172px] left-[63px]">
            <div className="flex flex-col items-start gap-6">
              <h2 className="w-[707px] mt-[-1.00px] font-semibold text-4xl leading-[normal] [font-family:'Raleway',Helvetica] tracking-[0]">
                <span className="text-[#527dc5]">Получите экспертную консультацию<br/></span>
                <span className="text-[#232c42]">по покупке шатра с оценкой стоимости и сроков</span>
              </h2>
            </div>

            <div className="flex flex-col items-start gap-6">
              <div className="flex flex-col w-[560px] gap-[51px] items-start">
                {benefits.map((benefit) => (
                  <div key={benefit.id} className="flex items-center gap-3">
                    <div className="relative w-6 h-6">
                      <Image className="absolute w-6 h-[17px] top-[3px] left-0" alt="Check icon" src={benefit.icon} width={24} height={17} />
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
            src="/element8-confident-young-businessman-in-blue-shirt-and-glasses-smiling-at.png"
            width={516}
            height={718}
           
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

          <Image className="absolute w-[359px] h-[306px] top-[412px] right-[-150px]" alt="Vecteezy overgrown" src="/element8-vecteezy-overgrown-green-grass-generative-ai-generated-24190129--2.png" width={359} height={306} />

          <div className="flex items-end gap-4 absolute top-[600px] left-[63px]">
            <Card className="flex w-[349px] h-[67px] items-start gap-4 relative rounded-2xl overflow-hidden border-solid border-neutral-200 shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] p-0 border-0">
              <CardContent className="p-0 w-full h-full">
                <div className="flex w-full h-full items-center gap-2 pl-3 pr-2 py-2 bg-white rounded-2xl overflow-hidden">
                  <Input
                    className="border-none shadow-none w-full [font-family:'Raleway',Helvetica] font-normal text-label-colorslc-l-secondary text-[17px] tracking-[-0.41px] leading-[22px]"
                    placeholder="+7 (XXX) XXX-XXXX"
                    value={phone}
                    onChange={handlePhoneChange}
                    onKeyDown={handleKeyDown}
                    inputMode="tel"
                  />
                </div>
              </CardContent>
            </Card>

            <Button
              className="w-[262px] h-[68px] rounded-2xl border-[none] shadow-2 [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] font-semibold text-white text-base text-center leading-[normal] whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]"
              onClick={handleSubmit}
              disabled={isSending}
            >
              {isSending ? 'Отправка…' : 'Получить консультацию'}
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
                  <Image className="w-6 h-[17px]" alt="Check icon" src={benefit.icon} width={24} height={17} />
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
                <CardContent className="p-0">
                  <div className="flex items-center gap-2 pl-3 pr-2 py-2 bg-white rounded-2xl">
                    <Input
                      className="border-none shadow-none w-full [font-family:'Raleway',Helvetica] font-normal text-label-colorslc-l-secondary text-[17px]"
                      placeholder="+7 (XXX) XXX-XXXX"
                      value={phone}
                      onChange={handlePhoneChange}
                      onKeyDown={handleKeyDown}
                      inputMode="tel"
                    />
                  </div>
                </CardContent>
              </Card>

              <Button
                className="w-full h-[68px] rounded-2xl [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] font-semibold text-white text-base [font-family:'Raleway',Helvetica]"
                onClick={handleSubmit}
                disabled={isSending}
              >
                {isSending ? 'Отправка…' : 'Получить консультацию'}
              </Button>
            </div>

            {error && (
              <div className="text-red-500 text-sm mt-2 text-center">
                {error}
              </div>
            )}
          </div>

          <div className="relative w-full mb-8">
            <Image className="w-full h-auto rounded-lg" alt="Event tent" src="/element8-event-tent-i02-1.png" width={498} height={565} />

            <div className="absolute top-10 right-[-50px] flex flex-col items-end">
              <div className="w-[630px]">
                <Image className="w-full h-auto rounded-lg" alt="Confident young businessman" src="/element8-confident-young-businessman-in-blue-shirt-and-glasses-smiling-at.png" width={516} height={718} />
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

          <Image className="absolute bottom-0 left-0 w-1/3 -z-10" alt="Vecteezy overgrown" src="/element8-vecteezy-overgrown-green-grass-generative-ai-generated-24190129--1.png" width={302} height={322} />
          <Image className="absolute bottom-0 right-0 w-1/3 -z-10" alt="Vecteezy overgrown" src="/element8-vecteezy-overgrown-green-grass-generative-ai-generated-24190129--2.png" width={359} height={306} />
        </div>
      </section>
    </>
  );
};
