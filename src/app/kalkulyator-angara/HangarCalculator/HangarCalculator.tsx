'use client';

import { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Calculator, Settings, DollarSign, CheckCircle } from 'lucide-react';
import { createPortal } from 'react-dom';

interface CalculationResult {
  area: number;
  ridgeHeight: number;
  frontonHeight: number;
  tentPrice: number;
  framePriceZinc: number;
  framePricePowder: number;
  totalWeight: number;
  hangarPricePowder: number;
  doubleTentPricePowder: number;
  insulatedPricePowder: number;
  hangarPriceZinc: number;
  doubleTentPriceZinc: number;
  insulatedPriceZinc: number;
  totalArea: number;
  wallArea: number;
  roofArea: number;
  frontonArea: number;
}

// ---------------------- CRM helpers (SSR-safe) ----------------------
const escapeRegex = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const getCookie = (name: string): string => {
  if (typeof document === 'undefined') return '';
  const m = document.cookie.match(new RegExp(`(?:^|; )${escapeRegex(name)}=([^;]*)`));
  return m ? decodeURIComponent(m[1]) : '';
};
const getSearchParam = (name: string): string => {
  if (typeof window === 'undefined') return '';
  return new URLSearchParams(window.location.search).get(name) || '';
};
const parseGAClientId = (gaCookie: string): string => {
  if (!gaCookie) return '';
  const parts = gaCookie.split('.');
  return parts.length >= 4 ? parts.slice(-2).join('.') : gaCookie;
};

// Send lead data DIRECTLY to the CRM – same as in the working example
const sendToWebhook = async (cleanPhone: string, email: string, fullName: string, hangarData: any) => {
  const now = new Date();
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
  const clientTime = now.toLocaleTimeString('ru-RU', { hour12: false });
  const clientDate = now.toLocaleDateString('ru-RU');
  const pageUrl = typeof window !== 'undefined' ? window.location.href : '';
  const domainHost = typeof window !== 'undefined' ? window.location.hostname : 'mobile-tent.ru';
  const pageTitle = typeof document !== 'undefined' ? document.title : '';
  const referrer = typeof document !== 'undefined' ? document.referrer : '';

  const utm_source = getSearchParam('utm_source');
  const utm_medium = getSearchParam('utm_medium');
  const utm_campaign = getSearchParam('utm_campaign');
  const utm_content = getSearchParam('utm_content');
  const utm_term = getSearchParam('utm_term');
  const gclid = getSearchParam('gclid');
  const yclid = getSearchParam('yclid');

  const gaCookie = getCookie('_ga');
  const ymUid = getCookie('_ym_uid');
  const roistat_visit = getCookie('roistat_visit');
  const gaClientId = parseGAClientId(gaCookie);

  const dpr = typeof window !== 'undefined' ? String(window.devicePixelRatio) : '';
  const vw = typeof window !== 'undefined' ? String(window.innerWidth) : '';
  const vh = typeof window !== 'undefined' ? String(window.innerHeight) : '';
  const lang = typeof navigator !== 'undefined' ? navigator.language : '';
  const platform = typeof navigator !== 'undefined' ? (navigator as any).platform || '' : '';
  const ua = typeof navigator !== 'undefined' ? navigator.userAgent : '';

  // Split fullName into name and surname
  const nameParts = fullName.trim().split(/\s+/);
  const name = nameParts[0] || '';
  const surname = nameParts.slice(1).join(' ') || '';

  const sourceDescription =
    `Клиент запросил КП через калькулятор ангара. ` +
    `Страница: ${pageUrl} | Время клиента: ${clientTime} (${tz}) | ` +
    `Дата создания (клиента): ${clientDate} | Источник: сайт ${domainHost} (калькулятор ангара).`;

  const message =
    `Форма: «Калькулятор ангара – Скачать КП»\n` +
    `Страница: ${pageUrl}\nЗаголовок: ${pageTitle}\nРеферер: ${referrer || '—'}\n` +
    `Время клиента: ${clientTime} (${tz}), Дата: ${clientDate}\n` +
    `UTM: source=${utm_source || '—'}, medium=${utm_medium || '—'}, campaign=${utm_campaign || '—'}, content=${utm_content || '—'}, term=${utm_term || '—'}\n` +
    `gclid=${gclid || '—'}, yclid=${yclid || '—'}, roistat_visit=${roistat_visit || '—'}\n` +
    `_ga=${gaCookie || '—'} (cid=${gaClientId || '—'}), _ym_uid=${ymUid || '—'}\n` +
    `Устройство: ${platform || '—'}, Язык: ${lang || '—'}, DPR=${dpr || '—'}, viewport=${vw || '—'}×${vh || '—'}\n` +
    `User-Agent: ${ua || '—'}\n\n` +
    `=== Параметры ангара ===\n` +
    `Имя: ${fullName}, Email: ${email}\n` +
    `Размеры: ${hangarData.width}×${hangarData.length} м, высота стен: ${hangarData.height} м\n` +
    `Тип: ${hangarData.hangarType === 'A' ? 'Тип В (арочный)' : 'Тип Д (двускатный)'}\n` +
    `Сталь: ${hangarData.steelType}, Снеговой район: ${hangarData.snowRegion}\n` +
    `Площадь пола: ${hangarData.results.area} м², Общая площадь тента: ${hangarData.results.totalArea.toFixed(1)} м², Масса каркаса: ${Math.round(hangarData.results.totalWeight)} кг\n` +
    `Цены (порошок): базовый ${Math.round(hangarData.results.hangarPricePowder)} ₽, двойной тент ${Math.round(hangarData.results.doubleTentPricePowder)} ₽, утеплённый ${Math.round(hangarData.results.insulatedPricePowder)} ₽\n` +
    `Цены (цинк): базовый ${Math.round(hangarData.results.hangarPriceZinc)} ₽, двойной тент ${Math.round(hangarData.results.doubleTentPriceZinc)} ₽, утеплённый ${Math.round(hangarData.results.insulatedPriceZinc)} ₽`;

  const payload: Record<string, string> = {
    domain: domainHost,
    phone: cleanPhone,
    name,
    surname,
    email: email,
    message,
    'Время клиента': `${clientTime} (${tz})`,
    'Дата создания': clientDate,
    'Источник': 'Сайт mobile-tent.ru — калькулятор ангара',
    UF_CRM_1698687546: domainHost,
    UF_CRM_CUST_LTIME: `${clientTime} (${tz})`,
    SOURCE_DESCRIPTION: sourceDescription,
    UF_CRM_1712907937027: pageUrl,
    'doc.pagetitle': pageTitle,
    UF_CRM_1728380948090: utm_source,
    UF_CRM_1728380965926: utm_medium,
    UF_CRM_1728380991359: utm_campaign,
    UF_CRM_1728381006839: utm_content,
    UF_CRM_1728381021062: utm_term,
    _ga: gaCookie,
    _ym_uid: ymUid,
    gclid,
    yclid,
    roistat_visit,
  };

  const body = new URLSearchParams(payload).toString();

  // ★ Direct POST to the CRM – identical to the working example
  try {
    await fetch('https://crm.grand-tent.ru/local/webhooks/get_from_sites.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
      body,
      mode: 'no-cors',   // required for cross-origin posting without a server proxy
    });
  } catch (e) {
    console.error('CRM webhook error:', e);
  }
};

// ---------------------- Phone formatter ----------------------
const formatRuPhone = (input: string) => {
  let d = input.replace(/\D/g, '');
  if (d.length === 0) d = '7';
  if (d[0] !== '7') d = '7' + d.slice(1);
  d = d.slice(0, 11);

  const p1 = d.slice(1, 4);
  const p2 = d.slice(4, 7);
  const p3 = d.slice(7, 9);
  const p4 = d.slice(9, 11);

  let out = '+7';
  if (p1) out += ` (${p1}`;
  if (p1.length === 3) out += `)`;
  if (p2) out += ` ${p2}`;
  if (p3) out += `-${p3}`;
  if (p4) out += `-${p4}`;
  return out;
};

// ---------------------- Main Component ----------------------
const HangarCalculator = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const [currentStep, setCurrentStep] = useState<number>(1);

  const [widthStr, setWidthStr] = useState<string>('15');
  const [lengthStr, setLengthStr] = useState<string>('40');
  const [heightStr, setHeightStr] = useState<string>('3');

  const width = parseFloat(widthStr) || 15;
  const length = parseFloat(lengthStr) || 40;
  const height = parseFloat(heightStr) || 3;

  const [snowRegion, setSnowRegion] = useState<number>(3);
  const [steelType, setSteelType] = useState<'СТ3' | '09г2С'>('СТ3');
  const [hangarType, setHangarType] = useState<'A' | 'D'>('A');
  const [results, setResults] = useState<CalculationResult | null>(null);

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    phone: '',
    email: '',
    fullName: '',
  });
  const [isAgreed, setIsAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formError, setFormError] = useState('');

  // ----- Constants (unchanged) -----
  const TENT_COST_PER_M2 = 1560;
  const POWDER_COST_PER_KG = 141;
  const ZINC_COST_PER_KG = 214;
  const STEEL_09G2S_MULT = 1.15;
  const DOUBLE_TENT_MULT = 1.5;
  const INSULATION_MULT = 1.7;

  const MASS_MATRIX: Record<number, number[]> = {
    1: [20, 20.5, 21, 21.5, 22, 22.5, 23, 23.5, 24, 24.5, 25, 25.5, 26, 26.5, 27, 27.5, 28, 28.5, 29, 29.5, 30],
    2: [21, 21.5, 22, 22.5, 23, 23.5, 24, 24.5, 25, 25.5, 26, 26.5, 27, 27.5, 28, 28.5, 29, 29.5, 30, 30.5, 31],
    3: [22, 22.5, 23, 23.5, 24, 24.5, 25, 25.5, 26, 26.5, 27, 27.5, 28, 28.5, 29, 29.5, 30, 30.5, 31, 31.5, 32],
    4: [23, 23.5, 24, 24.5, 25, 25.5, 26, 26.5, 27, 27.5, 28, 28.5, 29, 29.5, 30, 30.5, 31, 31.5, 32, 32.5, 33],
    5: [24, 24.5, 25, 25.5, 26, 26.5, 27, 27.5, 28, 28.5, 29, 29.5, 30, 30.5, 31, 31.5, 32, 32.5, 33, 33.5, 34],
  };

  const getMassPerM2 = (region: number, wallHeight: number): number => {
    const row = MASS_MATRIX[region];
    if (!row) return 25;
    let h = Math.round(wallHeight * 2) / 2;
    h = Math.min(10, Math.max(0, h));
    const index = Math.round(h / 0.5);
    return row[index];
  };

  const calculateResults = () => {
    const floorArea = width * length;
    const massPerM2 = getMassPerM2(snowRegion, height);
    const frameMass = floorArea * massPerM2;
    const baseFrameCostPowder = frameMass * POWDER_COST_PER_KG;
    const baseFrameCostZinc = frameMass * ZINC_COST_PER_KG;
    const steelMultiplier = steelType === '09г2С' ? STEEL_09G2S_MULT : 1;
    const framePricePowder = baseFrameCostPowder * steelMultiplier;
    const framePriceZinc = baseFrameCostZinc * steelMultiplier;

    const rise = hangarType === 'A' ? width * 0.24 : width * 0.35;
    const ridgeHeight = height + rise;
    const perimeter = 2 * (width + length);
    let tentArea = 0;
    let roofArea = 0;
    let frontonArea = 0;
    let wallArea = perimeter * height * 1.2;

    if (hangarType === 'A') {
      const R = (width * width) / (8 * rise) + rise / 2;
      const halfAngle = Math.asin(width / (2 * R));
      const fullAngle = 2 * halfAngle;
      const archLength = R * fullAngle + 0.5;
      roofArea = archLength * length * 1.2;
      frontonArea = 2 * width * rise * 1.2;
      tentArea = 1.2 * (perimeter * height + 2 * width * rise + archLength * length);
    } else {
      const rafter = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(rise, 2));
      roofArea = 2 * rafter * length * 1.2;
      frontonArea = width * rise * 1.2;
      tentArea = 1.2 * (perimeter * height + width * rise + 2 * rafter * length);
    }

    const totalArea = wallArea + roofArea + frontonArea;
    const tentPrice = tentArea * TENT_COST_PER_M2;
    const baseCostPowder = framePricePowder + tentPrice;
    const baseCostZinc = framePriceZinc + tentPrice;

    const hangarPricePowder = baseCostPowder;
    const doubleTentPricePowder = baseCostPowder * DOUBLE_TENT_MULT;
    const insulatedPricePowder = baseCostPowder * INSULATION_MULT;
    const hangarPriceZinc = baseCostZinc;
    const doubleTentPriceZinc = baseCostZinc * DOUBLE_TENT_MULT;
    const insulatedPriceZinc = baseCostZinc * INSULATION_MULT;

    setResults({
      area: floorArea,
      ridgeHeight,
      frontonHeight: rise,
      tentPrice,
      framePriceZinc,
      framePricePowder,
      totalWeight: frameMass,
      hangarPricePowder,
      doubleTentPricePowder,
      insulatedPricePowder,
      hangarPriceZinc,
      doubleTentPriceZinc,
      insulatedPriceZinc,
      totalArea,
      wallArea,
      roofArea,
      frontonArea,
    });
  };

  useEffect(() => {
    calculateResults();
  }, [width, length, height, snowRegion, steelType, hangarType]);

  const handleDimensionChange = (
    setter: React.Dispatch<React.SetStateAction<string>>,
    value: string,
    defaultValue: number
  ) => {
    if (value === '') {
      setter('');
      return;
    }
    if (/^\d*\.?\d*$/.test(value)) {
      setter(value);
    }
  };

  const handleDimensionBlur = (
    setter: React.Dispatch<React.SetStateAction<string>>,
    value: string,
    defaultValue: number,
    min: number,
    max: number
  ) => {
    if (value === '') {
      setter(defaultValue.toString());
    } else {
      const num = parseFloat(value);
      if (!isNaN(num)) {
        const clamped = Math.min(max, Math.max(min, num));
        setter(clamped.toString());
      } else {
        setter(defaultValue.toString());
      }
    }
  };

  const formatCurrency = (amount: number) => {
    const formattedAmount = new Intl.NumberFormat('ru-RU', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
    return `${formattedAmount} ₽`;
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFormFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setFormError('');
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatRuPhone(e.target.value);
    setFormData(prev => ({ ...prev, phone: formatted }));
    setFormError('');
  };

  const handlePhonePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text');
    setFormData(prev => ({ ...prev, phone: formatRuPhone(pasted) }));
    setFormError('');
  };

  const handlePhoneFocus = () => {
    if (!formData.phone.trim()) setFormData(prev => ({ ...prev, phone: '+7 (' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const cleanedPhone = formData.phone.replace(/\D/g, '');

    if (!formData.phone.trim()) {
      setFormError('Пожалуйста, введите ваш телефон');
      return;
    }
    if (!cleanedPhone.startsWith('7') || cleanedPhone.length !== 11) {
      setFormError('Введите корректный российский номер (+7 XXX XXX-XX-XX)');
      return;
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      setFormError('Введите корректный email');
      return;
    }
    if (!formData.fullName.trim()) {
      setFormError('Введите ваше ФИО');
      return;
    }
    if (!isAgreed) {
      setFormError('Вы должны согласиться с Пользовательским соглашением');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // 1. Send CRM lead via server proxy
    const hangarData = { width, length, height, hangarType, steelType, snowRegion, results };
    await sendToWebhook(cleanedPhone, formData.email, formData.fullName, hangarData);

    // 2. Request PDF
    try {
      const payload = {
        width,
        length,
        height,
        hangarType,
        steelType,
        snowRegion,
        results,
        phone: cleanedPhone,
        email: formData.email,
        fullName: formData.fullName,
      };

      const response = await fetch('/api/generate-hangar-kp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `КП_Ангар_${width}x${length}_${hangarType}.pdf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        setSubmitStatus('success');
        setTimeout(() => {
          setShowModal(false);
          resetForm();
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({ phone: '', email: '', fullName: '' });
    setIsAgreed(false);
    setSubmitStatus('idle');
    setFormError('');
  };

  const steps = [
    { id: 1, name: 'Основные размеры', icon: Calculator },
    { id: 2, name: 'Параметры', icon: Settings },
    { id: 3, name: 'Результаты', icon: DollarSign },
  ];

  const StepIndicator = () => (
    <div className="mb-8">
      <div className="flex items-center justify-center">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isCompleted = step.id < currentStep;
          const isCurrent = step.id === currentStep;
          return (
            <div key={step.id} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-200 ${isCompleted ? 'bg-blue-600 border-blue-600 text-white' : isCurrent ? 'border-blue-600 text-blue-600' : 'border-gray-300 text-gray-400'}`}>
                  {isCompleted ? <CheckCircle size={18} /> : <Icon size={18} />}
                </div>
                <span className={`mt-2 text-xs font-medium ${isCurrent ? 'text-blue-600' : isCompleted ? 'text-gray-700' : 'text-gray-500'}`}>
                  {step.name}
                </span>
              </div>
              {index < steps.length - 1 && <div className={`w-12 h-0.5 mx-2 ${isCompleted ? 'bg-blue-600' : 'bg-gray-300'} transition-all duration-200`} />}
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <>
      {/* Attention animation keyframes */}
      <style>{`
        @keyframes gentlePulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }
        .animate-gentle-pulse {
          animation: gentlePulse 2s infinite;
        }
      `}</style>

      <div className="min-h-screen flex items-center justify-center py-8 px-4">
        <div className="w-full max-w-4xl mx-auto">
          <div className="text-center mb-20 relative top-[30px]">
            <h1 className="text-3xl font-light text-gray-900 mb-2">Калькулятор стоимости ангара</h1>
            <p className="text-gray-600">Рассчитайте стоимость строительства ангара за 3 простых шага</p>
          </div>

          <StepIndicator />

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8 mb-8">
            {currentStep === 1 && (
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-xl font-medium text-gray-800 mb-1">Основные размеры ангара</h2>
                  <p className="text-sm text-gray-500">Укажите основные параметры вашего будущего ангара</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                  <div className="text-center">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Ширина (м)</label>
                    <div className="relative">
                      <input type="text" inputMode="numeric" value={widthStr} onChange={(e) => handleDimensionChange(setWidthStr, e.target.value, 15)} onBlur={(e) => handleDimensionBlur(setWidthStr, e.target.value, 15, 1, 100)} className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors text-center text-gray-900" placeholder="15" />
                      <div className="absolute inset-y-0 right-3 flex items-center text-gray-400 text-sm pointer-events-none">м</div>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">от 1 до 100</p>
                  </div>
                  <div className="text-center">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Длина (м)</label>
                    <div className="relative">
                      <input type="text" inputMode="numeric" value={lengthStr} onChange={(e) => handleDimensionChange(setLengthStr, e.target.value, 40)} onBlur={(e) => handleDimensionBlur(setLengthStr, e.target.value, 40, 1, 100)} className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors text-center text-gray-900" placeholder="40" />
                      <div className="absolute inset-y-0 right-3 flex items-center text-gray-400 text-sm pointer-events-none">м</div>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">от 1 до 100</p>
                  </div>
                  <div className="text-center">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Высота стен (м)</label>
                    <div className="relative">
                      <input type="text" inputMode="numeric" value={heightStr} onChange={(e) => handleDimensionChange(setHeightStr, e.target.value, 3)} onBlur={(e) => handleDimensionBlur(setHeightStr, e.target.value, 3, 1, 20)} className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors text-center text-gray-900" placeholder="3" />
                      <div className="absolute inset-y-0 right-3 flex items-center text-gray-400 text-sm pointer-events-none">м</div>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">от 1 до 20</p>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg border border-gray-300 p-5 max-w-2xl mx-auto">
                  <h3 className="font-medium text-gray-800 mb-3 text-center text-sm uppercase tracking-wide">Предварительный расчет</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="text-center"><div className="text-lg font-semibold text-gray-900">{(width * length).toFixed(1)} м²</div><div className="text-xs text-gray-600">Площадь</div></div>
                    <div className="text-center"><div className="text-lg font-semibold text-gray-900">{(height + (width * (hangarType === 'A' ? 0.24 : 0.35))).toFixed(1)} м</div><div className="text-xs text-gray-600">Высота в коньке</div></div>
                    <div className="text-center"><div className="text-lg font-semibold text-gray-900">{(width * (hangarType === 'A' ? 0.24 : 0.35)).toFixed(1)} м</div><div className="text-xs text-gray-600">Высота фронтона</div></div>
                    <div className="text-center"><div className="text-lg font-semibold text-gray-900">{Math.round(width * length * getMassPerM2(snowRegion, height))} кг</div><div className="text-xs text-gray-600">Масса каркаса</div></div>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-xl font-medium text-gray-800 mb-1">Дополнительные параметры</h2>
                  <p className="text-sm text-gray-500">Выберите тип ангара и материалы</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <div className="space-y-4">
                    <label className="block text-sm font-medium text-gray-700 text-center">Тип ангара</label>
                    <div className="grid grid-cols-2 gap-4">
                      <button onClick={() => setHangarType('A')} className={`p-5 border rounded-lg text-center transition-all duration-200 ${hangarType === 'A' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white hover:border-gray-300'}`}>
                        <div className="text-2xl mb-2">🏗️</div>
                        <div className="font-medium text-gray-800">Тип В</div>
                        <div className="text-xs text-gray-500 mt-1">Арочный</div>
                        {hangarType === 'A' && <div className="mt-2 text-blue-600 text-xs flex items-center justify-center"><CheckCircle size={14} className="mr-1" />Выбрано</div>}
                      </button>
                      <button onClick={() => setHangarType('D')} className={`p-5 border rounded-lg text-center transition-all duration-200 ${hangarType === 'D' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white hover:border-gray-300'}`}>
                        <div className="text-2xl mb-2">🏠</div>
                        <div className="font-medium text-gray-800">Тип Д</div>
                        <div className="text-xs text-gray-500 mt-1">Двускатный</div>
                        {hangarType === 'D' && <div className="mt-2 text-blue-600 text-xs flex items-center justify-center"><CheckCircle size={14} className="mr-1" />Выбрано</div>}
                      </button>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="block text-sm font-medium text-gray-700 text-center">Марка стали каркаса</label>
                    <div className="space-y-3">
                      <button onClick={() => setSteelType('СТ3')} className={`w-full p-4 border rounded-lg text-left transition-all duration-200 ${steelType === 'СТ3' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white hover:border-gray-300'}`}>
                        <div className="font-medium text-gray-800">СТ3</div>
                        <div className="text-xs text-gray-500 mt-1">Стандартная сталь</div>
                        {steelType === 'СТ3' && <div className="mt-2 text-blue-600 text-xs flex items-center"><CheckCircle size={14} className="mr-1" />Рекомендуется для большинства регионов</div>}
                      </button>
                      <button onClick={() => setSteelType('09г2С')} className={`w-full p-4 border rounded-lg text-left transition-all duration-200 ${steelType === '09г2С' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white hover:border-gray-300'}`}>
                        <div className="font-medium text-gray-800">09г2С</div>
                        <div className="text-xs text-gray-500 mt-1">Легированная сталь (+15% к стоимости каркаса)</div>
                        {steelType === '09г2С' && <div className="mt-2 text-blue-600 text-xs flex items-center"><CheckCircle size={14} className="mr-1" />Для специальных регионов</div>}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="space-y-3 max-w-md mx-auto">
                  <label className="block text-sm font-medium text-gray-700 text-center">Снеговой район</label>
                  <select value={snowRegion} onChange={(e) => setSnowRegion(Number(e.target.value))} className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-900 bg-white">
                    {[1, 2, 3, 4, 5].map((region) => (<option key={region} value={region}>Снеговой район {region} ({getMassPerM2(region, height)} кг/м² при высоте {height} м)</option>))}
                  </select>
                  <p className="text-xs text-gray-600 text-center">Выбор снегового района влияет на массу каркаса и стоимость</p>
                </div>
              </div>
            )}

            {currentStep === 3 && results && (
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-xl font-medium text-gray-800 mb-1">Результаты расчета</h2>
                  <p className="text-sm text-gray-500">Итоговая стоимость вашего ангара</p>
                </div>
                <div className="bg-slate-800 rounded-lg p-6 text-white">
                  <div className="text-center mb-4">
                    <div className="text-lg font-medium mb-1">Ваш ангар</div>
                    <div className="text-sm text-slate-300">{width}м × {length}м × {height}м • {hangarType === 'A' ? 'Арочный' : 'Двускатный'} • {steelType}</div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div><div className="text-xl font-semibold">{results.area} м²</div><div className="text-xs text-slate-400">Площадь</div></div>
                    <div><div className="text-xl font-semibold">{results.ridgeHeight.toFixed(1)} м</div><div className="text-xs text-slate-400">Высота в коньке</div></div>
                    <div><div className="text-xl font-semibold">{Math.round(results.totalWeight)} кг</div><div className="text-xs text-slate-400">Масса каркаса</div></div>
                    <div><div className="text-xl font-semibold">{results.totalArea.toFixed(0)} м²</div><div className="text-xs text-slate-400">Площадь тента</div></div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-5 text-center"><div className="text-sm font-medium text-gray-500 mb-1">Ангар (порошок)</div><div className="text-2xl font-semibold text-gray-900 mb-2">{formatCurrency(results.hangarPricePowder)}</div><div className="text-xs text-gray-500">Базовая комплектация</div></div>
                  <div className="bg-white border border-gray-200 rounded-lg p-5 text-center"><div className="text-sm font-medium text-gray-500 mb-1">Дв. тент (порошок)</div><div className="text-2xl font-semibold text-gray-900 mb-2">{formatCurrency(results.doubleTentPricePowder)}</div><div className="text-xs text-gray-500">Двойной тент</div></div>
                  <div className="bg-white border border-gray-200 rounded-lg p-5 text-center"><div className="text-sm font-medium text-gray-500 mb-1">Утеплённый (порошок)</div><div className="text-2xl font-semibold text-gray-900 mb-2">{formatCurrency(results.insulatedPricePowder)}</div><div className="text-xs text-gray-500">С утеплением</div></div>
                  <div className="bg-white border border-gray-200 rounded-lg p-5 text-center"><div className="text-sm font-medium text-gray-500 mb-1">Ангар (цинк)</div><div className="text-2xl font-semibold text-gray-900 mb-2">{formatCurrency(results.hangarPriceZinc)}</div><div className="text-xs text-gray-500">Базовая комплектация</div></div>
                  <div className="bg-white border border-gray-200 rounded-lg p-5 text-center"><div className="text-sm font-medium text-gray-500 mb-1">Дв. тент (цинк)</div><div className="text-2xl font-semibold text-gray-900 mb-2">{formatCurrency(results.doubleTentPriceZinc)}</div><div className="text-xs text-gray-500">Двойной тент</div></div>
                  <div className="bg-white border border-gray-200 rounded-lg p-5 text-center"><div className="text-sm font-medium text-gray-500 mb-1">Утеплённый (цинк)</div><div className="text-2xl font-semibold text-gray-900 mb-2">{formatCurrency(results.insulatedPriceZinc)}</div><div className="text-xs text-gray-500">С утеплением</div></div>
                </div>
                <div className="bg-slate-50 rounded-lg border border-slate-200 p-5 max-w-2xl mx-auto">
                  <h3 className="text-sm font-medium text-slate-700 mb-4 text-center uppercase tracking-wide">Детализация стоимости</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-white rounded border border-slate-100"><div className="text-xs font-medium text-slate-500 mb-1">Тент</div><div className="text-base font-semibold text-slate-800 mb-1">{formatCurrency(results.tentPrice)}</div><div className="text-xs text-slate-400">{results.totalArea.toFixed(1)} м²</div></div>
                    <div className="text-center p-3 bg-white rounded border border-slate-100"><div className="text-xs font-medium text-slate-500 mb-1">Каркас (цинк)</div><div className="text-base font-semibold text-slate-800 mb-1">{formatCurrency(results.framePriceZinc)}</div><div className="text-xs text-slate-400">{Math.round(results.totalWeight)} кг</div></div>
                    <div className="text-center p-3 bg-white rounded border border-slate-100"><div className="text-xs font-medium text-slate-500 mb-1">Каркас (порошок)</div><div className="text-base font-semibold text-slate-800 mb-1">{formatCurrency(results.framePricePowder)}</div><div className="text-xs text-slate-400">{Math.round(results.totalWeight)} кг</div></div>
                  </div>
                </div>
                <div className="flex justify-center mt-8">
                  {/* Main CTA button with animation */}
                  <button
                    onClick={() => setShowModal(true)}
                    className="relative bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-white/20 hover:border-white/40 animate-gentle-pulse"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="flex flex-col items-start">
                        <span className="text-sm uppercase tracking-wider opacity-90">Бесплатно</span>
                        <span className="text-lg">Скачать КП</span>
                      </div>
                    </div>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000"></div>
                  </button>
                </div>
              </div>
            )}

            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
              <button onClick={prevStep} disabled={currentStep === 1} className={`flex items-center px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 ${currentStep === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'}`}>
                <ChevronLeft size={18} className="mr-1" /> Назад
              </button>
              {currentStep < steps.length ? (
                <button onClick={nextStep} className="flex items-center px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium text-sm hover:bg-blue-700 transition-all duration-200 shadow-sm">
                  Далее <ChevronRight size={18} className="ml-1" />
                </button>
              ) : (
                <button onClick={() => setCurrentStep(1)} className="flex items-center px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium text-sm hover:bg-blue-700 transition-all duration-200 shadow-sm">
                  <Calculator size={18} className="mr-1" /> Новый расчет
                </button>
              )}
            </div>
          </div>
          <div className="text-center text-sm text-gray-500">Шаг {currentStep} из {steps.length} • Заполните все параметры для точного расчета</div>
        </div>

        {mounted && showModal && createPortal(
          <div className="fixed inset-0 bg-black/50 flex items-start justify-center z-[9999] p-4 overflow-y-auto backdrop-blur-sm" onClick={() => setShowModal(false)}>
            <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl mt-8 mb-8 relative animate-in fade-in slide-in-from-bottom-4 duration-300" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800">Скачать КП</h3>
                <button onClick={() => { setShowModal(false); resetForm(); }} className="text-gray-400 hover:text-gray-600 transition-colors p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                </button>
              </div>
              <div className="p-6">
                {submitStatus === 'success' ? (
                  <div className="text-center py-4 space-y-6">
                    <div className="bg-green-50 text-green-800 p-4 rounded-lg border border-green-200">
                      <p className="font-medium text-lg">КП готово!</p>
                      <p className="text-sm mt-1">Файл автоматически скачан. Сохраните его на своём устройстве.</p>
                    </div>
                    <button onClick={() => { setShowModal(false); resetForm(); }} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors shadow-md">
                      Закрыть
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Телефон <span className="text-red-500">*</span></label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handlePhoneChange} onPaste={handlePhonePaste} onFocus={handlePhoneFocus} required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-gray-50" placeholder="+7 (___) ___-__-__" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email <span className="text-red-500">*</span></label>
                      <input type="email" name="email" value={formData.email} onChange={handleFormFieldChange} required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-gray-50" placeholder="ivan@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">ФИО <span className="text-red-500">*</span></label>
                      <input type="text" name="fullName" value={formData.fullName} onChange={handleFormFieldChange} required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-gray-50" placeholder="Иванов Иван Иванович" />
                    </div>
                    <div className="space-y-3 pt-2">
                      <label className="flex items-start cursor-pointer group">
                        <input type="checkbox" checked={isAgreed} onChange={(e) => setIsAgreed(e.target.checked)} className="mt-1 h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                        <span className="ml-3 text-sm text-gray-600 group-hover:text-gray-800 transition-colors">Я согласен с <a href="/user-agreement" target="_blank" className="text-blue-600 underline hover:text-blue-700">Пользовательским соглашением</a></span>
                      </label>
                    </div>
                    {formError && <div className="bg-red-50 text-red-700 p-3 rounded-lg text-sm border border-red-200">{formError}</div>}
                    {submitStatus === 'error' && <div className="bg-red-50 text-red-700 p-3 rounded-lg text-sm border border-red-200">Ошибка. Попробуйте позже или свяжитесь с нами.</div>}
                    <div className="flex justify-end space-x-3 pt-4">
                      <button type="button" onClick={() => { setShowModal(false); resetForm(); }} className="px-5 py-2.5 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium" disabled={isSubmitting}>Отмена</button>
                      <button type="submit" disabled={isSubmitting} className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors shadow-md font-medium">{isSubmitting ? 'Загрузка...' : 'Скачать КП'}</button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>,
          document.body
        )}
      </div>
    </>
  );
};

export default HangarCalculator;
