'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent } from "../../../../../../../components/ui/card";
import { Progress } from "../../../../../../../components/ui/progress";
import { RadioGroup, RadioGroupItem } from "../../../../../../../components/ui/radio-group";
import Image from 'next/image';
import { Button } from "../../../../../../../components/ui/button";
import { Input } from "../../../../../../../components/ui/input";
import { CheckIcon } from "lucide-react";
import { Label } from "../../../../../../../components/ui/label";
import Consultaionfor3d from '../../../../../../../components/ui/Consultaionfor3d';
import { Badge } from "../../../../../../../components/ui/badge";

const STEP_COUNT = 3;

type CapacityOption = {
  value: string;
  label: string;
  display?: string;
  icon?: boolean;
};

type TentUsageOption = {
  value: string;
  label: string;
  icon?: boolean;
  image?: {
    src: string;
    width: number;
    height: number;
  };
};

// Fabric issues data
const fabricIssues = [
  {
    icon: "/FORgroup-5.png",
    title: "Будет постоянно пахнуть пластмассой",
    description: "при нагреве на солнце",
  },
  {
    icon: "/FORgroup-6.png",
    title: "Покроется плесенью",
    description: "и начнутся процессы гниения",
  },
  {
    icon: "/FORgroup-7.png",
    title: "Тент выцветет",
    description: "и станет серым, беклым и не красивым",
  },
  {
    icon: "/FORgroup-8.png",
    title: "Будет невозможно отмыть",
    description: "от въевшихся пятен грязи",
  },
  {
    icon: "/FORgroup-9.png",
    title: "Потрескается",
    description: "и начнет протекать прямо на головы людям",
  },
];

// Fabric benefits data
const fabricBenefits = [
  {
    icon: "/FORgroup-2.png",
    text: "Компания DICKSON\nоснована в 1969 году",
  },
  {
    icon: "/FORgroup-3.png",
    text: "Выпускает 25 000 000+ м2 ткани в год",
  },
];

export const RelatedProductsSection = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formError, setFormError] = useState("");
  const [answers, setAnswers] = useState({
    capacity: '',
    usage: '',
    installation: 'week'
  });
  const [phone, setPhone] = useState('');
  const [contactMethod, setContactMethod] = useState('');
  const [policyAgreed, setPolicyAgreed] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const capacityOptions: CapacityOption[] = [
    { value: "50", label: "до 50 человек", display: "50" },
    { value: "50-200", label: "50-200 человек", display: "50-200" },
    { value: "200+", label: "от 200 человек", display: "от 200" },
    { value: "not-sure", label: "затрудняюсь ответить", icon: true },
  ];

  const installationOptions = [
    { id: "week", label: "В течении недели" },
    { id: "month", label: "Через месяц" },
    { id: "year", label: "В течении года" },
  ];

  const pricingTiers = [
    {
      name: "Базовая",
      style: "basic",
      fabric: "Ткань тента SIOIEN - Китай",
      density: "640 гр/м",
      profile: "труба 40*3 мм",
      galvanization: "холодное 70 микрон",
      hardware: "Китай",
      price: "от 150 000 ₽",
    },
    {
      name: "Средняя",
      style: "medium",
      fabric: "Ткань тента Диксон - Франция",
      density: "640 гр/м",
      profile: "труба 60x3",
      galvanization: "горячее 50 микрон",
      hardware: "Россия",
      price: "от 250 000 ₽",
    },
    {
      name: "Максимальная",
      style: "premium",
      fabric: "Ткань тента Диксон - Франция",
      density: "960 гр/м",
      profile: "труба 76*3 мм",
      galvanization: "горячее 150 микрон",
      hardware: "Польша",
      price: "от 250 000 ₽",
    },
  ];
  
  const contactOptions = [
    { id: "whatsapp", label: "в Whatsapp" },
    { id: "telegram", label: "в Telegram" },
    { id: "call", label: "Перезвоните мне хочу узнать точную стоимость\nи получить подарки" },
  ];
  



const sendToWebhook = async (cleanedPhone: string) => {
  const now = new Date();
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
  const clientTime = now.toLocaleTimeString("ru-RU", { hour12: false });
  const clientDate = now.toLocaleDateString("ru-RU"); // DD.MM.YYYY
  const pageUrl = typeof window !== "undefined" ? window.location.href : "";
  const domainHost =
    typeof window !== "undefined" ? window.location.hostname : "grand-tent.ru";

  // UTM (optional)
  const sp =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search)
      : null;
  const utm_source = sp?.get("utm_source") || "";
  const utm_medium = sp?.get("utm_medium") || "";
  const utm_campaign = sp?.get("utm_campaign") || "";
  const utm_content = sp?.get("utm_content") || "";
  const utm_term = sp?.get("utm_term") || "";

  // Human-readable CRM note
  const sourceDescription =
    `Клиент оставил телефон в форме «Скачайте каталог шатров». ` +
    `Страница: ${pageUrl} | Время клиента: ${clientTime} (${tz}) | ` +
    `Дата создания (клиента): ${clientDate} | Источник: сайт ${domainHost} (форма каталога).`;

  const payload: Record<string, string> = {
    // Simple keys (для вашего PHP)
    domain: domainHost,
    phone: cleanedPhone,
    "Время клиента": `${clientTime} (${tz})`,
    "Дата создания": clientDate,
    Источник: `Сайт ${domainHost} — форма «Скачать каталог шатров»`,

    // Ваши Bitrix UF_ поля
    UF_CRM_1698687546: domainHost, // Домен сайта
    UF_CRM_CUST_LTIME: `${clientTime} (${tz})`, // Время клиента
    SOURCE_DESCRIPTION: sourceDescription, // Дополнительно об источнике
    UF_CRM_1712907937027: pageUrl, // Страница

    // UTM
    UF_CRM_1728380948090: utm_source, // utm_source
    UF_CRM_1728380965926: utm_medium, // utm_medium
    UF_CRM_1728380991359: utm_campaign, // utm_campaign
    UF_CRM_1728381006839: utm_content, // utm_content
    UF_CRM_1728381021062: utm_term, // utm_term

    // (необязательно) ответы формы для удобства в PHP
    form_capacity: answers.capacity || "",
    form_usage: answers.usage || "",
    form_installation: answers.installation || "",
    preferred_contact: contactMethod || "",
  };

  const body = new URLSearchParams(payload).toString();

  try {
    await fetch(
      "https://crm.grand-tent.ru/local/webhooks/get_from_sites.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body,
        mode: "no-cors", // уберите когда включите CORS на сервере
      }
    );
  } catch (e) {
    console.error("Webhook error:", e);
  }
};

const [isSubmitting, setIsSubmitting] = useState(false);

const handleSubmit = async () => {
  if (!validateForm()) return;

  setIsSubmitting(true);
  try {
    const cleanedPhone = phone.replace(/\D/g, "");
    await sendToWebhook(cleanedPhone); // send to Bitrix
    router.push("/thankyou");          // then redirect
  } finally {
    setIsSubmitting(false);
  }
};

  const tentUsageOptions: TentUsageOption[] = [
    {
      value: "trading",
      label: "Торговля",
      image: {
        src: "/503774b4-f2ac-4d80-a16e-e0e416349220-------1.png",
        width: 174,
        height: 174,
      }
    },
    {
      value: "warehouses",
      label: "Склады",
      image: {
        src: "/15-9bf6ff67-------1.png",
        width: 148,
        height: 82,
      }
    },
    {
      value: "events",
      label: "Мероприятия",
      image: {
        src: "/event-tent-i02-1.png",
        width: 155,
        height: 79,
      }
    },
    {
      value: "custom",
      label: "Свой вариант",
      icon: true
    },
  ];

  // Check for mobile on mount and resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Handle escape key and scroll locking
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsPopupOpen(false);
    };
    
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isPopupOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset' };
  }, [isPopupOpen]);

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    else if (step === 3) setStep(4);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^\d+\-\s()]/g, "");
    
    if (!value.startsWith('+7') && value.length > 0) {
      value = /^[78]/.test(value) 
        ? '+7' + value.slice(1) 
        : '+7' + value;
    }
    
    setPhone(value.substring(0, 16));
    setFormError("");
  };

  const handleValueChange = (value: string) => {
    setAnswers(prev => {
      const key = step === 1 ? 'capacity' : 
                  step === 2 ? 'usage' : 
                  'installation';
      return { ...prev, [key]: value };
    });
  };

  const validateForm = () => {
    if (!contactMethod) {
      setFormError('Пожалуйста, выберите способ связи');
      return false;
    }
    
    const cleanedPhone = phone.replace(/\D/g, '');
    if (cleanedPhone.length !== 11) {
      setFormError('Пожалуйста, введите корректный номер телефона');
      return false;
    }
    
    if (!policyAgreed) {
      setFormError('Пожалуйста, подтвердите согласие с политикой');
      return false;
    }
    
    return true;
  };


  // Custom radio button component to be used throughout
  const CustomRadioButton = ({ 
    value, 
    id,
    currentValue,
    label 
  }: {
    value: string;
    id: string;
    currentValue: string;
    label: string;
  }) => {
    const isSelected = currentValue === value;
    
    return (
      <div className="flex items-center gap-3">
        <div className="relative ">
          <RadioGroupItem
            value={value}
            id={id}
            className="sr-only"
          />
          <div className={`w-[25px] h-[25px] rounded-full border flex items-center justify-center ${
            isSelected ? "border-none" : "border-[#4f5d807d]"
          }`}>
            {isSelected && (
              <div className="flex items-center justify-center w-full h-full rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] p-[2px]">
                <div className="w-[21px] h-[21px] rounded-full bg-white flex items-center justify-center">
                  <div className="w-[15px] h-[15px] rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec]"></div>
                </div>
              </div>
            )}
          </div>
        </div>
        <Label htmlFor={id} className="font-normal text-[#394355] text-lg">
          {label}
        </Label>
      </div>
    );
  };

  const handleCardClick = (value: string) => {
    handleValueChange(value);
  };

  // Rendering helpers with mobile responsiveness
  const renderCapacityOptions = () => (
    capacityOptions.map((option, index) => {
      const isSelected = answers.capacity === option.value;
      return (
        <div 
          key={index}
          className={`w-full ${isMobile ? 'max-w-full' : 'max-w-[318px]'} ${isMobile ? 'h-[150px]' : 'h-[200px]'} cursor-pointer`}
          onClick={() => handleCardClick(option.value)}
        >
          <Card
            className={`w-full h-full border-0 rounded-[20px] shadow-md ${isSelected ? 'ring-2 ring-blue-500' : ''}`}
          >
            <CardContent className="p-0 h-full">
              <div className="p-5 h-full flex flex-col justify-between">
                {option.icon ? (
                  <div className={`${isMobile ? 'w-[60px] h-[60px]' : 'w-[90px] h-[90px]'} bg-[#f5f6ff] rounded-full flex items-center justify-center ${isMobile ? 'mt-[10px] ml-[10px]' : 'mt-[22px] ml-[22px]'}`}>
                    <Image
                      src="/FORgroup.png"
                      alt="Question mark"
                      width={isMobile ? 32 : 48}
                      height={isMobile ? 36 : 54}
                      className={`${isMobile ? 'w-8 h-[36px]' : 'w-12 h-[54px]'}`}
                      quality={100}
                    />
                  </div>
                ) : (
                  <div className={`${isMobile ? 'mt-2 ml-[10px]' : 'mt-5 ml-[22px]'} font-bold ${isMobile ? 'text-2xl' : 'text-6xl'} text-[#6FA7FF]`}>
                    {option.display}
                  </div>
                )}

                <div className="flex items-center gap-3 mt-auto mb-6 ml-[22px]">
                  <CustomRadioButton
                    value={option.value}
                    id={`capacity-${option.value}`}
                    currentValue={answers.capacity}
                    label={option.label}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      );
    })
  );

  const renderTentUsageOptions = () => (
    tentUsageOptions.map((option, index) => {
      const isSelected = answers.usage === option.value;
      return (
        <div 
          key={index}
          className={`w-full ${isMobile ? 'max-w-full' : 'max-w-[318px]'} ${isMobile ? 'h-[150px]' : 'h-[200px]'} cursor-pointer`}
          onClick={() => handleCardClick(option.value)}
        >
          <Card
            className={`w-full h-full border-0 rounded-[20px] shadow-md ${isSelected ? 'ring-2 ring-blue-500' : ''}`}
          >
            <CardContent className=" p-0 h-full ">
              <div className="p-5 h-full flex flex-col justify-between">
                {option.icon ? (
                  <div className={`${isMobile ? 'w-[60px] h-[60px]' : 'w-[90px] h-[90px]'} bg-[#f5f6ff] rounded-full flex items-center justify-center ${isMobile ? 'mt-[2px] ml-[10px]' : 'mt-[2px] ml-[22px]'}`}>
                    <Image
                      src="/FORgroup.png"
                      alt="Question mark"
                      width={isMobile ? 32 : 48}
                      height={isMobile ? 36 : 54}
                      className={`${isMobile ? 'w-8 h-[36px]' : 'w-12 h-[54px]'}`}
                      quality={100}
                    />
                  </div>
                ) : option.image && (
                  <div className={`relative ${isMobile ? 'bottom-[5px]' : 'bottom-[20px]'} w-full ${isMobile ? 'h-[80px]' : 'h-[120px]'}`}>
                    <Image
                      src={option.image.src}
                      alt={option.label}
                      layout="fill"
                      objectFit="contain"
                      className="mt-2"
                    />
                  </div>
                )}

                <div className="flex items-center gap-3 mt-auto mb-6 ml-[22px]">
                  <CustomRadioButton
                    value={option.value}
                    id={`usage-${option.value}`}
                    currentValue={answers.usage}
                    label={option.label}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      );
    })
  );

  const renderInstallationOptions = () => {
  if (isMobile) {
    // نسخة الهاتف - بطاقات مشابهة لخيارات السعة
    return (
      <div className={`grid grid-cols-1 gap-4 w-full`}>
        {installationOptions.map((option) => {
          const isSelected = answers.installation === option.id;
          return (
            <div 
              key={option.id}
              className="w-full max-w-full h-[150px] cursor-pointer"
              onClick={() => handleCardClick(option.id)}
            >
              <Card
                className={`w-full h-full border-0 rounded-[20px] shadow-md ${isSelected ? 'ring-2 ring-blue-500' : ''}`}
              >
                <CardContent className="p-0 h-full">
                  <div className="p-5 h-full flex flex-col justify-between">
                    <div className="mt-2 ml-[10px] font-bold text-4xl text-[#6FA7FF]">
                      {option.id === "week" && "1 нед"}
                      {option.id === "month" && "1 мес"}
                      {option.id === "year" && "1 год"}
                    </div>

                    <div className="flex items-center gap-3 mt-auto mb-6 ml-[22px]">
                      <CustomRadioButton
                        value={option.id}
                        id={`installation-${option.id}`}
                        currentValue={answers.installation}
                        label={option.label}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    );
  } else {
    // نسخة الديسكتوب - تبقى كما هي بدون تغيير
    return (
      <div className={`flex ${isMobile ? 'flex-col' : 'items-start'} gap-6`}>
        {installationOptions.map((option) => {
          const isSelected = answers.installation === option.id;
          
          return (
            <div 
              key={option.id}
              className={`${isMobile ? 'w-full' : 'w-[318px]'} ${isMobile ? 'h-[100px]' : 'h-[200px]'} cursor-pointer`}
              onClick={() => handleCardClick(option.id)}
            >
              <Card
                className={`w-full h-full bg-white rounded-[20px] shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] relative ${isSelected ? 'ring-2 ring-blue-500' : ''}`}
              >
                <CardContent className="absolute bottom-0 left-0 p-0">
                  <div className="flex items-center gap-3 p-[22px]">
                    <div className="relative">
                      <RadioGroupItem
                        value={option.id}
                        id={`installation-${option.id}`}
                        className="sr-only"
                      />
                      <div className={`w-[25px] h-[25px] rounded-full border flex items-center justify-center ${
                        isSelected ? "border-none" : "border-[#4f5d807d]"
                      }`}>
                        {isSelected && (
                          <div className="flex items-center justify-center w-full h-full rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] p-[2px]">
                            <div className="w-[21px] h-[21px] rounded-full bg-white flex items-center justify-center">
                              <div className="w-[15px] h-[15px] rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec]"></div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <Label
                      htmlFor={`installation-${option.id}`}
                      className="font-normal text-[#394355] text-lg"
                    >
                      {option.label}
                    </Label>
                  </div>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    );
  }
};

  const renderPricingTiers = () => (
    <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'} gap-4 w-full`}>
      {pricingTiers.map((tier, index) => (
        <div 
          key={index} 
          className={index === 2 ? (isMobile ? "col-span-1" : "md:col-span-2 flex justify-center") : "col-span-1"}
        >
          <Card className={`${isMobile ? 'w-full' : 'w-[550px]'} border border-solid border-[#dddddd] rounded-[20px] shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] overflow-hidden`}>
            <CardContent className="p-[30px]">
              <div className="flex flex-col items-start gap-[30px]">
                <div className="flex flex-col items-start gap-[35px] w-full">
                  <div
                    className={`inline-flex items-center justify-center px-3 py-2 rounded-[50px] 
                      ${tier.style === "basic" ? "bg-[#e8edf7]" :
                        tier.style === "medium" ? "bg-[linear-gradient(159deg,#243057_0%,#374255_100%)]" :
                          "bg-[linear-gradient(180deg,#73a8ff_0%,#6fa7ff_37%,#3c6cec_100%)]"
                      }`}
                  >
                    <span
                      className={`font-semibold text-2xl leading-6 whitespace-nowrap 
                        ${tier.style === "basic" ? 
                          "bg-[linear-gradient(159deg,#243057_0%,#374255_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent]" : 
                          "text-white"
                        }`}
                    >
                      {tier.name}
                    </span>
                  </div>

                  <div className="flex flex-col items-start gap-9">
                    <div className="flex flex-col items-start gap-6">
                      <div className="flex flex-col items-start gap-4">
                        <div className="flex items-start gap-2">
                          <span className="font-normal text-[#394355] text-lg">
                            {tier.fabric}
                          </span>
                        </div>

                        <div className="flex items-start gap-2">
                          <span className="font-normal text-[#394355] text-lg">
                            Плотность тента:
                          </span>
                          <span className="font-medium text-[#394355] text-lg">
                            {tier.density}
                          </span>
                        </div>

                        <div className="flex items-start gap-2">
                          <span className="font-normal text-[#394355] text-lg">
                            Профиль каркаса:
                          </span>
                          <span className="font-medium text-[#394355] text-lg">
                            {tier.profile}
                          </span>
                        </div>

                        <div className="flex items-start gap-2">
                          <span className="font-normal text-[#394355] text-lg">
                            Цинкование каркаса:
                          </span>
                          <span className="font-medium text-[#394355] text-lg">
                            {tier.galvanization}
                          </span>
                        </div>

                        <div className="flex items-start gap-2">
                          <span className="font-normal text-[#394355] text-lg">
                            Фурнитура:
                          </span>
                          <span className="font-medium text-[#394355] text-lg">
                            {tier.hardware}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-2">
                    <span className="font-bold text-[#394355] text-4xl">
                      {tier.price}
                    </span>
                  </div>
                </div>

                <Button 
                  className={`w-full h-[68px] rounded-2xl shadow-[0px_22px_44px_0px_rgba(32,124,254,0.4)] bg-[linear-gradient(180deg,#73a8ff_0%,#6fa7ff_37%,#3c6cec_100%)]`}
                  onClick={() => setIsPopupOpen(true)}
                >
                  <span className="font-semibold text-white text-base text-center">
                    Рассчитать под размер
                    <br />+ консультация
                  </span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );

const renderGiftsSection = () => {
  if (isMobile) {
    // إعدادات نسخة الهاتف
return (
  <div className="w-full mt-8 mb-8 relative"> {/* تغيير mb-8 إلى mb-6 لتقليل المساحة السفلية */}
    <div className="w-[100%] mx-auto rounded-[20px] bg-[linear-gradient(159deg,#243057_0%,#374255_100%)] pb-4"> {/* تغيير pb-2 إلى pb-4 */}
      <h3 className="p-4 font-bold text-white text-2xl">
        Ваши подарки в конце
      </h3>
      <div className="p-4 pb-16 flex flex-col items-start gap-5"> {/* تغيير pb-20 إلى pb-16 */}
        <div className="w-full flex items-center gap-4">
          <div className="w-[75px] h-[70px] flex-shrink-0">
            <Image
              src="/FORstar-tent-h02-1.png"
              alt="Star tent"
              width={75}
              height={56}
              quality={100}
            />
          </div>
          <p className="pt-3 font-normal text-white text-base">
            3d проект вашего шатра 
            <br />под размеры и оснащение
          </p>
        </div>
        <div className="w-full flex items-center gap-4">
          <div className="w-[75px] h-[70px] flex-shrink-0 flex items-center justify-center"> {/* جعل نفس حجم العنصر الأول */}
            <Image
              className="w-[50px] h-[50px] object-cover" 
              alt="Img"
              src="/Fc3740fa54440e5eaefe94690ddc2643-4.png"
              width={50}
              height={50}
            />
          </div>
          <p className="font-normal text-white text-base">
            Примеры уже готовых шатров схожими
            <br />с вашими задачами
          </p>
        </div>
      </div>
<div className="absolute bottom-[180px] right-[-60px] w-[180px] h-[180px]"> {/* تم التكبير من 150x150 إلى 180x180 */}
  <Image
    className="w-full h-full"
    alt="Gifts"
    src="/gifts3-------1.png"
    width={180}  // تم تحديث القيمة لتتناسب مع الحجم الجديد
    height={180} // تم تحديث القيمة لتتناسب مع الحجم الجديد
  />
</div>
    </div>
  </div>
);
  } else {
    // إعدادات نسخة الديسكتوب
    return (
      <div className="absolute w-[594px] h-[377px] bottom-[200px] right-0">
        <div className="w-[546px] h-72 rounded-[20px] bg-[linear-gradient(159deg,#243057_0%,#374255_100%)]">
          <h3 className="absolute top-[30px] left-[30px] font-bold text-white text-2xl">
            Ваши подарки в конце
          </h3>
          <div className="absolute top-[96px] left-[30px] flex flex-col items-start gap-5">
            <div className="relative w-[378px] h-14">
              <Image
                src="/FORstar-tent-h02-1.png"
                alt="Star tent"
                width={75}
                height={56}
                className="absolute w-[75px] h-[56px] top-[-3px] left-0"
                quality={100}
              />
              <p className="absolute top-4 left-[86px] font-normal text-white text-base">
                3d проект вашего шатра под размеры
                <br />и оснащение
              </p>
            </div>
            <div className="relative w-[395px] h-20">
              <Image
                className="absolute w-9 h-9 top-[29px] left-[13px] object-cover"
                alt="Img"
                src="/Fc3740fa54440e5eaefe94690ddc2643-4.png"
                width={36}
                height={36}
              />
              <p className="absolute w-[309px] top-[20px] left-[84px] font-normal text-white text-base">
                Примеры уже готовых шатров схожими
                <br />с вашими задачами
              </p>
            </div>
          </div>
        </div>
        <Image
          className="absolute w-[232px] h-[272px] top-[-80px] left-[362px]"
          alt="Gifts"
          src="/gifts3-------1.png"
          width={232}
          height={272}
        />
      </div>
    );
  }
};

  // Main renderer with mobile responsiveness
  const getQuestionContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="flex flex-col items-start gap-6 mb-12 relative">
            {isMobile && (
              <>
                <div className="flex flex-col w-full max-w-[627px] items-start gap-6 mb-6">
                  <h1 className="font-semibold text-4xl">
                    <span className="text-[#527dc5]">
                      Нужен шатер под свои размеры,{" "}
                    </span>
                    <span className="text-[#232c42]">форму или дизайн?</span>
                  </h1>
                  <p className="font-medium text-[#4f5d80] text-lg">
                    Спроектируем и изготовим с гарантией 50 лет
                  </p>
                </div>

                {renderGiftsSection()}

                <div className="flex flex-col items-start gap-3 w-full p-6 bg-[#f2f4f7] rounded-[10px] mb-6">
                  <p className="font-semibold text-[#4f5d80] text-base">
                    Получите расчет цены шатра в 3х вариантах ответив на 3 вопроса
                  </p>
                  <Progress
                    value={(step / STEP_COUNT) * 100}
                    className="h-2.5 w-full bg-[#4f5d802b] rounded-full [&>div]:bg-[#6FA7FF]"
                  />
                  <p className="font-medium text-[#4f5d80] text-lg">
                    {step} из {STEP_COUNT}
                  </p>
                </div>
              </>
            )}

            <h2 className="font-bold text-[#394355] text-xl">
              1. Какая вместимость?
            </h2>

            <RadioGroup 
              value={answers.capacity}
              className={`grid ${isMobile ? 'grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'} gap-4 w-full`}
            >
              {renderCapacityOptions()}
            </RadioGroup>

            {!isMobile && renderGiftsSection()}
          </div>
        );
      
      case 2:
        return (
          <div className="flex flex-col items-start gap-6 mb-12 relative">
            {isMobile && (
              <>
                <div className="flex flex-col w-full max-w-[627px] items-start gap-6 mb-6">
                  <h1 className="font-semibold text-4xl">
                    <span className="text-[#527dc5]">
                      Нужен шатер под свои размеры,{" "}
                    </span>
                    <span className="text-[#232c42]">форму или дизайн?</span>
                  </h1>
                  <p className="font-medium text-[#4f5d80] text-lg">
                    Спроектируем и изготовим с гарантией 50 лет
                  </p>
                </div>

                {renderGiftsSection()}

                <div className="flex flex-col items-start gap-3 w-full p-6 bg-[#f2f4f7] rounded-[10px] mb-6">
                  <p className="font-semibold text-[#4f5d80] text-base">
                    Получите расчет цены шатра в 3х вариантах ответив на 3 вопроса
                  </p>
                  <Progress
                    value={(step / STEP_COUNT) * 100}
                    className="h-2.5 w-full bg-[#4f5d802b] rounded-full [&>div]:bg-[#6FA7FF]"
                  />
                  <p className="font-medium text-[#4f5d80] text-lg">
                    {step} из {STEP_COUNT}
                  </p>
                </div>
              </>
            )}

            <h2 className="font-bold text-[#394355] text-xl">
              2. Где будет использоваться шатер?
            </h2>

            <RadioGroup 
              value={answers.usage}
              className={`grid ${isMobile ? 'grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'} gap-4 w-full`}
            >
              {renderTentUsageOptions()}
            </RadioGroup>

            {!isMobile && renderGiftsSection()}
          </div>
        );
      
      case 3:
        return (
          <div className="relative w-full max-w-[1366px] mx-auto">
            <div className="w-full">
              <div className="w-full">
                {isMobile && (
                  <>
                    <div className="flex flex-col w-full items-start gap-6 pt-[20px]">
                      <h1 className="w-full font-semibold text-4xl">
                        <span className="text-[#527dc5]">
                          Нужен шатер под свои размеры,{" "}
                        </span>
                        <span className="text-[#232c42]">форму или дизайн?</span>
                      </h1>
                      <p className="font-medium text-[#4f5d80] text-lg">
                        Спроектируем и изготовим с гарантией 50 лет
                      </p>
                    </div>

                    {renderGiftsSection()}
                  </>
                )}

                <div className={`flex flex-col ${isMobile ? 'w-full' : 'w-[627px]'} items-start gap-6 ${isMobile ? 'pt-[20px]' : 'pt-[52px]'}`}>
                  {!isMobile && (
                    <>
                      <h1 className="w-full font-semibold text-4xl">
                        <span className="text-[#527dc5]">
                          Нужен шатер под свои размеры,{" "}
                        </span>
                        <span className="text-[#232c42]">форму или дизайн?</span>
                      </h1>
                      <p className="font-medium text-[#4f5d80] text-lg">
                        Спроектируем и изготовим с гарантией 50 лет
                      </p>
                    </>
                  )}

                  <div className={`flex flex-col items-start gap-3 ${isMobile ? 'w-full' : 'max-w-[627px]'} p-6 bg-[#f2f4f7] rounded-[10px]`}>
                    <p className="font-semibold text-[#4f5d80] text-base">
                      Получите расчет цены шатра в 3х вариантах ответив на 3 вопроса
                    </p>
                    <Progress
                      value={100}
                      className={`${isMobile ? 'w-full' : 'w-[579px]'} h-2.5 bg-[#4f5d802b] rounded [&>div]:bg-[#6FA7FF]`}
                    />
                    <p className="font-medium text-[#4f5d80] text-lg">
                      3 из 3
                    </p>
                  </div>

                  <div className="flex flex-col items-start gap-6 mt-[30px]">
                    <h2 className="font-bold text-[#394355] text-xl">
                      3. В какой срок необходимо установить шатер?
                    </h2>
                    <RadioGroup 
                      value={answers.installation}
                      className={`flex ${isMobile ? 'flex-col' : 'items-start'} gap-6`}
                    >
                      {renderInstallationOptions()}
                    </RadioGroup>
                  </div>
                </div>
              </div>
              {!isMobile && (
                <div className="relative bottom-[10px]">
                  {renderGiftsSection()}
                </div>
              )}
              {isMobile && renderGiftsSection()}

              <div className="flex justify-center mt-[40px]">
                <Button 
                  onClick={handleNext}
                  className={`${isMobile ? 'w-full' : 'w-[412px]'} h-[68px] rounded-2xl shadow-[0px_22px_44px_0px_rgba(32,124,254,0.4)] bg-[linear-gradient(180deg,#73a8ff_0%,#6fa7ff_37%,#3c6cec_100%)]`}
                >
                  <span className="font-semibold text-white text-base text-center">
                    Далее
                  </span>
                </Button>
              </div>
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="w-full relative">
            <div className="flex flex-col items-start gap-6 mb-6">
              <h2 className="font-bold text-[#394355] text-xl">
                4. Предварительный расчет стоимости шатров
              </h2>
              <Card className="bg-[#f2f4f7] border-none shadow-none rounded-[10px]">
                <CardContent className="px-6 py-3">
                  <p className="font-semibold text-[#4f5d80] text-base">
                    Цена отличается качеством и типом материалов
                  </p>
                </CardContent>
              </Card>

              <div className={`absolute ${isMobile ? 'static' : 'top-0 left-150'} w-full z-0`}>
                {renderPricingTiers()}
              </div>
            </div>

            <div className={`${isMobile ? 'mt-8' : 'mt-16'}`}>
              <div className={`flex flex-col w-full ${isMobile ? 'px-4' : 'max-w-[570px]'} items-start ${isMobile ? 'py-8' : 'py-[85px]'} ${isMobile ? 'pl-4' : 'pl-12'}`}>
                <div className="flex flex-col items-start gap-[45px]">
                  <div className={`flex flex-col w-full ${isMobile ? '' : 'max-w-[627px]'} items-start gap-6`}>
                    <h2 className="font-semibold text-[#232c42] text-4xl">
                      Предварительный расчет
                      <br />
                      стоимости шатров
                    </h2>
                    <Card className="bg-[#f2f4f7] border-none shadow-none rounded-[10px]">
                      <CardContent className="px-6 py-3">
                        <p className="font-semibold text-[#4f5d80] text-base">
                          Цена отличается качеством и типом материалов
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="flex flex-col items-start gap-[45px]">
                    <div className={`flex flex-col w-full ${isMobile ? '' : 'max-w-[544px]'} items-start gap-6`}>
                      <h3 className="font-semibold text-[#394355] text-2xl">
                        Для точного расчета стоимости шатра нужно получить больше данных
                      </h3>
                      <p className="font-medium text-[#4f5d80] text-sm">
                        Оставьте телефон, свяжемся в течении 15 минут, рассчитаем точную
                        цену шатра и отправим подарки
                      </p>
                      <p className="font-semibold text-[#4f5d80] text-base">
                        Укажите, куда отправить обещанные подарки
                      </p>
                      
                      <div className="flex flex-col gap-3">
                        {contactOptions.map((option) => {
                          const isSelected = contactMethod === option.id;
                          return (
                            <button
                              key={option.id}
                              type="button"
                              onClick={() => setContactMethod(option.id)}
                              className="flex items-center gap-3 focus:outline-none"
                            >
                              <div className={`w-[25px] h-[25px] rounded-full border flex items-center justify-center ${
                                isSelected ? "border-none" : "border-[#4f5d807d]"
                              }`}>
                                {isSelected && (
                                  <div className="flex items-center justify-center w-full h-full rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] p-[2px]">
                                    <div className="w-[21px] h-[21px] rounded-full bg-white flex items-center justify-center">
                                      <div className="w-[15px] h-[15px] rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec]"></div>
                                    </div>
                                  </div>
                                )}
                              </div>
                              <Label
                                htmlFor={option.id}
                                className="font-normal text-[#394355] text-base leading-normal whitespace-pre-line"
                              >
                                {option.label}
                              </Label>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-[31px]">
<div className="flex flex-col items-start justify-end gap-4 w-full">
  <div className="flex w-full h-[67px] items-start rounded-2xl overflow-hidden border border-solid border-neutral-200">
    <Input
      value={phone}
      onChange={handlePhoneChange}
      className="w-full h-full bg-transparent font-normal border-0 text-label-colorslc-l-secondary text-[17px] tracking-[-0.41px] leading-[22px] font-raleway"
      placeholder="+7 (XXX) XXX-XX-XX"
      aria-label="Ваш телефон"
      type="tel"
      required
      disabled={isSubmitting}
    />
  </div>

  {formError && (
    <div className="text-red-500 text-sm -mt-2" aria-live="polite">
      {formError}
    </div>
  )}

  <Button
    className="w-full h-[68px] rounded-2xl border-none bg-[linear-gradient(180deg,#73a8ff_0%,#6fa7ff_37%,#3c6cec_100%)]"
    onClick={handleSubmit}
    disabled={isSubmitting}
    aria-busy={isSubmitting}
  >
    <span className="font-semibold text-white text-base text-center">
      {isSubmitting ? "Отправляем..." : "Получить точный расчет и подарки"}
    </span>
  </Button>
</div>


                      <div className="flex w-full max-w-[544px] items-center gap-2.5">
                        <button 
                          onClick={() => setPolicyAgreed(!policyAgreed)}
                          className={`flex items-center justify-center w-[33px] h-[33px] p-3 rounded-lg ${
                            policyAgreed 
                              ? 'bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec]'
                              : 'bg-gray-200'
                          }`}
                          aria-label="Согласие с политикой"
                        >
                          {policyAgreed && <CheckIcon className="w-[17px] h-[13px] text-white" />}
                        </button>
                        <p className="font-medium text-[#4f5d8094] text-xs">
                          Нажимая на кнопку, вы соглашаетесь с 
                          <a href="/policy" target="_blank" className="text-[#3c6cec] underline ml-1">
                            Пользовательским соглашением
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  
  return (
    <main className="relative w-full max-w-[1440px] mx-auto bg-white">
      <section className={`${isMobile ? 'px-4' : 'px-12'} pt-[33px] pb-12`}>
        <div className="max-w-[1368px] mx-auto">
          {step < 3 && !isMobile && (
            <>
              <div className={`flex flex-col w-full max-w-[627px] items-start gap-6 mb-12`}>
                <h1 className="font-semibold text-4xl">
                  <span className="text-[#527dc5]">
                    Нужен шатер под свои размеры,{" "}
                  </span>
                  <span className="text-[#232c42]">форму или дизайн?</span>
                </h1>
                <p className="font-medium text-[#4f5d80] text-lg">
                  Спроектируем и изготовим с гарантией 50 лет
                </p>
              </div>

              <div className={`flex flex-col items-start gap-3 p-6 bg-[#f2f4f7] rounded-[10px] max-w-[627px] mb-12`}>
                <p className="font-semibold text-[#4f5d80] text-base">
                  Получите расчет цены шатра в 3х вариантах ответив на 3 вопроса
                </p>
                <Progress
                  value={(step / STEP_COUNT) * 100}
                  className="h-2.5 w-full bg-[#4f5d802b] rounded-full [&>div]:bg-[#6FA7FF]"
                />
                <p className="font-medium text-[#4f5d80] text-lg">
                  {step} из {STEP_COUNT}
                </p>
              </div>
            </>
          )}
          
          {getQuestionContent()}
          
          {step < 3 && step !== 4 && (
            <div className="flex justify-center mt-8">
              <Button 
                onClick={handleNext}
                className={`${isMobile ? 'w-full' : 'w-[412px]'} h-[68px] rounded-2xl shadow-[0px_22px_44px_0px_rgba(32,124,254,0.4)] bg-[linear-gradient(180deg,#73a8ff_0%,#6fa7ff_37%,#3c6cec_100%)] font-semibold text-white text-base`}
                disabled={
                  (step === 1 && !answers.capacity) || 
                  (step === 2 && !answers.usage)
                }
              >
                Далее
              </Button>
            </div>
          )}
        </div>
      </section>
      
      {/* Fixed Popup Section */}
      {isPopupOpen && (
        <div 
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/30 backdrop-blur-sm"
          onClick={() => setIsPopupOpen(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <Consultaionfor3d onClose={() => setIsPopupOpen(false)} />
          </div>
        </div>
      )}

      {/* Second Section - Fabric Quality */}
<section className={`${isMobile ? 'px-4' : 'px-12'} py-8`}>
  <div className="max-w-[1392px] mx-auto relative">
    {isMobile ? (
      /* Mobile Version */
      <div className="flex flex-col gap-8">
        <h2 className="font-['Raleway',Helvetica] font-semibold text-4xl">
          <span className="text-[#232c42]">
            Ткань тента приспособлена для работы{" "}
          </span>
          <span className="text-[#527dc5]">
            в самых жестких условиях эксплуатации. Даже в суровом климате России
          </span>
        </h2>

        <div className="flex flex-col gap-4 p-3 bg-[#f2f4f7] rounded-[10px] w-full">
          <p className="font-['Raleway',Helvetica] font-medium text-[#4f5d80] text-lg leading-6">
            Используем профессиональный французский бренд
          </p>
          <Badge className="p-3 rounded-[5px] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] self-start">
            <span className="font-['Raleway',Helvetica] font-extrabold text-white text-3xl">
              DICKSON
            </span>
          </Badge>
        </div>

        <div className="flex flex-col gap-4">
  <div className="flex items-center gap-3">
    <div className="w-4 h-4 rounded-full [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] flex-shrink-0" />
    <p className="font-['Raleway',Helvetica] font-normal text-[#394355] text-lg leading-5">
      Закупаем оптовые объемы и даем вам цену ниже, чем другие компании
    </p>
  </div>

  <div className="flex items-start gap-3">
    <div className="w-4 h-4 rounded-full [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] flex-shrink-0 mt-1" />
    <p className="font-['Raleway',Helvetica] font-semibold text-[#394355] text-lg leading-6">
      С нами вы купите официальную продукцию, а не получаете китайскую
      под видом европейской
    </p>
  </div>
</div>

        <Card className="w-full p-6 rounded-2xl shadow-lg backdrop-blur-[79px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.7)_100%)] radius-[16px] border-0">
  <CardContent className="p-0">
    <h3 className="font-['Raleway',Helvetica] font-semibold text-[#242f57] text-2xl leading-6 mb-6">
      Лучшая ткань в мире по цене-качеству
    </h3>

    <div className="flex flex-row gap-4 w-full"> {/* تغيير من flex-wrap إلى flex-row */}
      {fabricBenefits.slice(0, 2).map((benefit, index) => (
        <div key={index} className="flex items-center gap-3 w-[48%]"> {/* إزالة sm:w-[48%] واستخدام w-[48%] مباشرة */}
          <div className="w-6 h-6 flex items-center justify-center">
            <Image
              className="w-6 h-[17px]"
              alt="Checkmark"
              src={benefit.icon}
              width={24}
              height={17}
            />
          </div>
          <p className="font-['Raleway',Helvetica] font-semibold text-[#4f5d80] text-sm leading-5">
            {benefit.text}
          </p>
        </div>
      ))}
    </div>
  </CardContent>
</Card>

    <div className="relative min-h-[300px]">
  {/* الصورة الرئيسية */}
  <Image
    className="w-full h-auto"
    alt="Fabric sample"
    src="/rectangle-43.png"
    width={926}
    height={100}
  />

  {/* مجموعة الصور المتداخلة - بدون حواف بيضاء */}
  <div className="absolute top-[10px] right-[50%] w-[220px] h-[275px]">
    <div className="relative">
      {/* الصورة الثالثة (الأبعد) */}
      <div className="absolute z-[1] w-[150px] h-[190px] top-[-30px] left-[100px] transform -translate-x-[80px] overflow-hidden">
        <Image
          className="w-full h-full object-cover rounded-lg shadow-lg"
          alt="Fabric document"
          src="/rectangle-46.png"
          width={150}
          height={190}
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
        />
      </div>
      
      {/* الصورة الثانية */}
      <div className="absolute z-[2] w-[150px] h-[190px] top-[-30px] left-[100px] transform -translate-x-[40px] overflow-hidden">
        <Image
          className="w-full h-full object-cover rounded-lg shadow-lg"
          alt="Fabric document"
          src="/rectangle-45.png"
          width={150}
          height={190}
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
        />
      </div>
      
      {/* الصورة الأولى (الأقرب) */}
      <div className="absolute z-[3] w-[150px] h-[190px] top-[-30px] left-[100px] overflow-hidden">
        <Image
          className="w-full h-full object-cover rounded-lg shadow-lg"
          alt="Fabric document"
          src="/rectangle-44.png"
          width={150}
          height={190}
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
        />
      </div>
    </div>
  </div>

  {/* شارة الشركاء الرسميين */}
  <Badge className="absolute bottom-[-20px] right-4 flex items-center gap-[15px] px-6 py-3 bg-white rounded-[50px] border-[3px] border-solid shadow-md">
    <div className="w-[50px] h-[50px] flex items-center justify-center">
      <div className="w-[43px] h-[43px]">
        <Image
          className="w-10 h-[43px]"
          alt="Certificate"
          src="/FORgroup-4.png"
          width={40}
          height={43}
        />
      </div>
    </div>
    <span className="font-['Raleway',Helvetica] font-bold text-[#232c42] text-base">
      Официальные партнеры компании
    </span>
  </Badge>
</div>

<Button className="gap-[15px] h-[68px] rounded-2xl shadow-2 [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] w-full mt-12">
  <div className="w-[50px] h-[50px] flex items-center justify-center">
    <div className="w-[35px] h-[35px] bg-[url(/FORgroup-1.png)] bg-[100%_100%]" />
  </div>
  <span className="font-['Raleway',Helvetica] font-bold text-white text-base">
    Скачать документы на ткань
  </span>
</Button>
      </div>
    ) : (
      /* Desktop Version */
      <>
        <h2 className="font-['Raleway',Helvetica] font-semibold text-4xl mb-8">
          <span className="text-[#232c42]">
            Ткань тента приспособлена для работы{" "}
          </span>
          <span className="text-[#527dc5]">
            в самых жестких условиях эксплуатации. Даже в суровом климате России
          </span>
        </h2>

        <div className="flex items-center gap-4 p-3 bg-[#f2f4f7] rounded-[10px] mb-8 max-w-fit">
          <p className="font-['Raleway',Helvetica] font-medium text-[#4f5d80] text-lg leading-6">
            Используем профессиональный французский бренд
          </p>
          <Badge className="p-3 rounded-[10px] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
            <span className="font-['Raleway',Helvetica] font-extrabold text-white text-3xl">
              DICKSON
            </span>
          </Badge>
        </div>

        <div className="flex flex-col gap-4 mb-12">
          <div className="flex items-center gap-3">
            <div className="w-[13px] h-[13px] rounded-[6.5px] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]" />
            <p className="font-['Raleway',Helvetica] font-normal text-[#394355] text-lg leading-5 max-w-[774px]">
              Закупаем оптовые объемы и даем вам цену ниже, чем другие компании
            </p>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-[13px] h-7 pt-[5px]">
              <div className="h-[13px] rounded-[6.5px] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]" />
            </div>
            <p className="font-['Raleway',Helvetica] font-semibold text-[#394355] text-lg leading-6 max-w-[634px]">
              С нами вы купите официальную продукцию, а не получаете китайскую
              под видом европейской
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-8">
          <Card className="p-6 rounded-2xl shadow-lg backdrop-blur-[79px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.7)_100%)] max-w-[509px] max-h-[166px] radius-[16px] border-0">
            <CardContent className="p-0">
              <h3 className="font-['Raleway',Helvetica] font-semibold text-[#242f57] text-2xl leading-6 mb-6">
                Лучшая ткань в мире по цене-качеству
              </h3>

              <div className="flex justify-between flex-wrap gap-4 w-full">
                {fabricBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <Image
                        className="w-6 h-[17px]"
                        alt="Checkmark"
                        src={benefit.icon}
                        width={24}
                        height={17}
                      />
                    </div>
                    <p className="font-['Raleway',Helvetica] font-semibold text-[#4f5d80] text-sm leading-5 max-w-[184px] whitespace-pre-line">
                      {benefit.text}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex-1 relative min-h-[500px]">
            <Image
              className="w-full h-auto max-w-[926px]"
              alt="Fabric sample"
              src="/rectangle-43.png"
              width={926}
              height={100}
            />

            <div className="absolute top-[136px] right-[376px] w-[408px] h-[275px]">
              <div className="relative">
                <Image
                  className="absolute w-[220px] h-[275px] top-[-130px] left-[395px]"
                  alt="Fabric document"
                  src="/rectangle-44.png"
                  width={220}
                  height={275}
                />
                <Image
                  className="absolute w-[220px] h-[275px] top-[-130px] left-[494px]"
                  alt="Fabric document"
                  src="/rectangle-45.png"
                  width={220}
                  height={275}
                />
                <Image
                  className="absolute w-[220px] h-[275px] top-[-130px] left-[588px]"
                  alt="Fabric document"
                  src="/rectangle-46.png"
                  width={220}
                  height={275}
                />
              </div>
            </div>

            <Badge className="absolute top-[436px] right-[107px] flex items-center gap-[15px] px-6 py-3 bg-white rounded-[50px] border-[3px] border-solid shadow-md">
              <div className="w-[50px] h-[50px] flex items-center justify-center">
                <div className="w-[43px] h-[43px]">
                  <Image
                    className="w-10 h-[43px]"
                    alt="Certificate"
                    src="/FORgroup-4.png"
                    width={40}
                    height={43}
                  />
                </div>
              </div>
              <span className="font-['Raleway',Helvetica] font-bold text-[#232c42] text-base">
                Официальные партнеры компании
              </span>
            </Badge>
          </div>
        </div>

        <Button className="relative top-[-170px] gap-[15px] h-[68px] rounded-2xl shadow-2 [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] max-w-[499px]">
          <div className="w-[50px] h-[50px] top-[500px] flex items-center justify-center">
            <div className="w-[35px] h-[35px] bg-[url(/FORgroup-1.png)] bg-[100%_100%]" />
          </div>
          <span className="font-['Raleway',Helvetica] font-bold text-white text-base">
            Скачать документы на ткань
          </span>
        </Button>
      </>
    )}
  </div>
</section>

{/* Third Section - Fabric Warning */}
<section className={`relative max-w[1440px] max-h-[4108px] ${isMobile ? 'px-4' : 'px-12'} py-8`}>
  <div className="max-w-[1392px] mx-auto">
    {isMobile ? (
      /* Mobile Version */
      <div className="flex flex-col gap-9">
        <div className="flex flex-col gap-6">
          <h2 className="font-['Raleway',Helvetica] font-semibold text-4xl">
            <span className="text-[#527dc5]">Не экономьте на ткани, </span>
            <span className="text-[#232c42]">
              чтобы через 2-3 года не пришлось заказывать новый тент
            </span>
          </h2>

          <p className="font-['Raleway',Helvetica] font-medium text-[#4f5d80] text-lg leading-6">
            А это на минуточку 50% от цены всего шатра
          </p>
        </div>

     <Card className="w-full p-6 rounded-2xl shadow-lg backdrop-blur-[79px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.7)_100%)] border-0">
  <CardContent className="p-0">
    <h3 className="font-['Raleway',Helvetica] font-semibold text-[#242f57] text-2xl leading-6 mb-9">
      Что вас ожидает через 1-3 года от плохой ткани
    </h3>

    <div className="grid grid-cols-2 gap-x-8 gap-y-12"> {/* صفين مع تباعد مناسب */}
      {fabricIssues.map((issue, index) => (
        <div key={index} className="flex flex-col items-center gap-3">
          {/* حاوية الأيقونة */}
          <div className="w-[108px] h-[108px] bg-[#f2f4f7] rounded-full flex items-center justify-center">
            <Image
              className="w-[50px] h-[50px] object-contain"
              alt={`Issue ${index + 1}`}
              src={issue.icon}
              width={50}
              height={50}
            />
          </div>
          
          {/* حاوية النص */}
          <div className="text-center px-2">
            <p className="font-['Raleway',Helvetica] text-[#4f5d80] text-sm leading-5">
              <span className="font-semibold">{issue.title}</span>
              <br />
              {issue.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </CardContent>
</Card>
      </div>
    ) : (
      /* Desktop Version */
      <div className="flex flex-col gap-9">
        <div className="flex flex-col gap-6">
          <h2 className="font-['Raleway',Helvetica] font-semibold text-4xl max-w-[798px]">
            <span className="text-[#527dc5]">Не экономьте на ткани, </span>
            <span className="text-[#232c42]">
              чтобы через 2-3 года не пришлось заказывать новый тент
            </span>
          </h2>

          <p className="font-['Raleway',Helvetica] font-medium text-[#4f5d80] text-lg leading-6">
            А это на минуточку 50% от цены всего шатра
          </p>
        </div>

        <Card className="max-w-[1345px] max-h-[288px] p-6 rounded-2xl shadow-lg backdrop-blur-[79px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.7)_100%)] border-0">
          <CardContent className="p-0">
            <h3 className="font-['Raleway',Helvetica] font-semibold text-[#242f57] text-2xl leading-6 mb-9">
              Что вас ожидает через 1-3 года от плохой ткани
            </h3>

            <div className="flex flex-wrap gap-[55px]">
              {fabricIssues.map((issue, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-3 max-w-[212px]"
                >
                  <div className="w-[174px] h-[108px] relative">
                    <div className="w-[108px] h-[108px] bg-[#f2f4f7] rounded-[87px] absolute left-[33px] flex items-center justify-center">
                      <Image
                        className="w-[50px] h-[50px] object-contain"
                        alt={`Issue ${index + 1}`}
                        src={issue.icon}
                        width={50}
                        height={50}
                      />
                    </div>
                  </div>

                  <p className="font-['Raleway',Helvetica] text-[#4f5d80] text-sm leading-5 text-center">
                    <span className="font-semibold">{issue.title} </span>
                    {issue.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    )}
  </div>
</section>
    </main>
  );  
};