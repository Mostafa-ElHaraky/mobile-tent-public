"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";

export interface Product {
  id: string;
  title: string;
  images: string[];
  size: string;
  area: number;
  capacity: string;
  availability: string;
  basePrice: number;
  discountPercentage: number;
  oldPrice: string;
  discount: string;
  price: string;
  shape?: string;
}

interface ProductCardProps {
  product: Product;
}

interface ProductDetailProps {
  label: string;
  value: string;
}

interface CatalogShProps {
  products: Product[];
  visibleProducts: number;
  onShowMore?: () => void;
}

// Helper functions for cookies and URL params
const getCookie = (name: string): string => {
  if (typeof document === "undefined") return "";
  
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || "";
  return "";
};

const getSearchParam = (param: string): string => {
  if (typeof window === "undefined") return "";
  
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param) || "";
};

const parseGAClientId = (gaCookie: string): string => {
  if (!gaCookie) return "";
  
  // _ga format: GA1.2.123456789.123456789
  const parts = gaCookie.split('.');
  if (parts.length >= 4) {
    return `${parts[2]}.${parts[3]}`;
  }
  return gaCookie;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const router = useRouter();
  const [imageIndex, setImageIndex] = useState(0);
  const dragStartX = useRef<number | null>(null);
  const dragThreshold = 30;
  const [dragging, setDragging] = useState(false);
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % product.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, product.images.length]);

  const onDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    dragStartX.current = clientX;
    setDragging(false);
    setIsPaused(true);
  };

  const onDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (dragStartX.current === null) return;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const deltaX = clientX - dragStartX.current;

    if (Math.abs(deltaX) > dragThreshold) {
      setDragging(true);
      if (deltaX > 0) {
        setImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
      } else {
        setImageIndex((prev) => (prev + 1) % product.images.length);
      }
      dragStartX.current = clientX;
    }
  };

  const onDragEnd = () => {
    dragStartX.current = null;
    setTimeout(() => setIsPaused(false), 3000);
  };

  const onCardClick = () => {
    if (!dragging) {
      router.push(`/tent/${product.id}`);
    }
  };

  return (
    <Card
      onClick={onCardClick}
      onMouseDown={onDragStart}
      onMouseMove={onDragMove}
      onMouseUp={onDragEnd}
      onTouchStart={onDragStart}
      onTouchMove={onDragMove}
      onTouchEnd={onDragEnd}
      onMouseEnter={() => setIsPaused(false)}
      onMouseLeave={() => {
        setIsPaused(true);
        setImageIndex(0);
        setDragging(false);
      }}
      className="w-full max-w-[432px] h-auto min-h-[550px] rounded-[20px] border border-[#dddddd] shadow-lg backdrop-blur-[79px] mx-auto"
      style={{ userSelect: "none", cursor: dragging ? "grabbing" : "pointer" }}
    >
      <CardContent className="p-0">
        <div className="flex flex-col gap-[22px] p-4 sm:p-[33px]">
          <div className="relative w-full h-[250px] sm:h-[300px] rounded-t-[20px] overflow-hidden bg-white">
            <Image
              src={product.images[imageIndex]}
              alt={product.title}
              fill
              className="transition-all duration-300 ease-in-out select-none shifted-image object-contain object-center p-2 sm:p-3"
              draggable={false}
              loading="lazy"
              sizes="(max-width: 640px) 100vw, 432px"
            />

            <div className="flex gap-1 absolute bottom-1 left-1/2 -translate-x-1/2">
              {product.images.map((_, i) => (
                <div
                  key={i}
                  className={`w-[7px] h-[7px] rounded-[3.5px] ${
                    i === imageIndex
                      ? "bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
                      : "bg-[#d9d9d9]"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:gap-9">
            <div className="flex flex-col gap-4 sm:gap-6">
              <h3 className="font-bold text-[#394355] text-lg sm:text-xl leading-6 [font-family:'Raleway',Helvetica]">
                <a
                  href={`/tent/${product.id}`}
                  onClick={(e) => e.stopPropagation()}
                  className="hover:underline underline-offset-2 hover:text-[#3C6CEC] focus:underline focus:outline-none"
                  aria-label={`Открыть страницу товара ${product.title}`}
                >
                  {product.title}
                </a>
              </h3>

              <div className="flex flex-col gap-2 sm:gap-[9px]">
                <ProductDetail label="Размер:" value={product.size} />
                <ProductDetail label="Площадь:" value={`${product.area} м2`} />
                <ProductDetail label="Вместимость:" value={product.capacity} />
                <ProductDetail label="В наличии:" value={product.availability} />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <span className="font-normal text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]">
                Цена:
              </span>

              <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-9">
                <div className="flex items-center gap-1.5">
                  <span className="text-[#4f5d80d9] line-through font-medium text-base leading-6 [font-family:'Raleway',Helvetica]">
                    {product.oldPrice}
                  </span>

                  <Badge className="px-1 py-1 font-bold text-white text-sm [font-family:'Raleway',Helvetica] rounded-lg [background:linear-gradient(180deg,rgba(255,115,115,1)_0%,rgba(255,111,111,1)_37%,rgba(236,60,60,1)_100%)]">
                    {product.discount}
                  </Badge>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="font-bold text-[#394355] text-xl sm:text-2xl leading-6 [font-family:'Raleway',Helvetica]">
                    {product.price}
                  </span>
                  <div className="w-full max-w-[190px] font-normal text-[10px] leading-[10px] [font-family:'Raleway',Helvetica]">
                    <span className="italic text-[#eb3c3c]">*</span>
                    <span className="italic text-[#394355]">
                      В зависимости от включенных опций
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const ProductDetail: React.FC<ProductDetailProps> = ({ label, value }) => (
  <div className="flex items-start gap-2">
    <span className="font-normal text-[#394355] text-sm sm:text-base leading-6 [font-family:'Raleway',Helvetica]">
      {label}
    </span>
    <span className="font-medium text-[#394355] text-sm sm:text-base leading-6 [font-family:'Raleway',Helvetica]">
      {value}
    </span>
  </div>
);

const CatalogSh = ({ products, visibleProducts, onShowMore }: CatalogShProps) => {
  const [globalDiscount, setGlobalDiscount] = useState(30);

  const discountedProducts = products
    .filter(p => p && Array.isArray(p.images) && p.images.length > 0)
    .map(product => ({
      ...product,
      oldPrice: formatPrice(product.basePrice),
      discount: `-${product.discountPercentage}%`,
      price: `от ${formatPrice(product.basePrice * (1 - product.discountPercentage / 100))}`
    }));

  // Define products for each row
  const firstRowProducts = discountedProducts.slice(0, 3);
  const thirdRowProducts = discountedProducts.slice(10, 10 + (visibleProducts - 3));

  const router = useRouter();
  const [phone, setPhone] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Phone formatting functions
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
    if (p1) out += `(${p1}`;
    if (p1.length === 3) out += `)`;
    if (p2) out += `-${p2}`;
    if (p3) out += `-${p3}`;
    if (p4) out += `-${p4}`;
    return out;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const formatted = formatRuPhone(value);
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
    if (!phone.trim()) setPhone("+7(");
  };

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
      `Форма: «Получить помощь в подборе»\n` +
      `Страница каталога: ${pageUrl}\nЗаголовок: ${pageTitle}\nИсточник-реферер: ${referrer || "—"}\n` +
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
    const cleanedPhone = phone.replace(/\D/g, "");

    if (!phone.trim()) {
      setFormError("Пожалуйста, введите ваш телефон");
      return;
    }
    if (!cleanedPhone.startsWith("7") || cleanedPhone.length !== 11) {
      setFormError("Введите корректный российский номер (+7XXX-XXX-XX-XX)");
      return;
    }
    if (!agreed) {
      setFormError("Пожалуйста, согласитесь с Пользовательским соглашением");
      return;
    }

    setIsSubmitting(true);
    try {
      await sendToWebhook(cleanedPhone);
      setPhone("");
      setFormError("");
      setAgreed(false);
      router.push('/thankyou');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative top-[150px]">
      {/* Desktop & Tablet Version */}
      <div className="hidden md:flex flex-col items-center gap-[45px]">
        <div className="hidden bg-gray-100 p-4 rounded-lg mb-4">
          <h3 className="font-bold mb-2">Developer Controls</h3>
          <div className="flex items-center gap-2">
            <label>Global Discount (%):</label>
            <Input 
              type="number" 
              value={globalDiscount}
              onChange={(e) => setGlobalDiscount(Number(e.target.value))}
              className="w-20"
              min="0"
              max="100"
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          {/* First row - always show first 3 products */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {firstRowProducts.map((product, index) => (
              <ProductCard key={`product-${index}`} product={product} />
            ))}
          </div>

          {/* Second row - show products 4-5 and consultation card */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Product 4 */}
            {discountedProducts[3]?.images?.length && (
              <ProductCard product={discountedProducts[3]} />
            )}

            {/* Consultation Card */}
            <Card className="w-full max-w-[432px] top-[70px] h-[574px] rounded-[20px] border border-[#dddddd] shadow-lg backdrop-blur-[79px] relative overflow-hidden bg-gradient-to-b from-[#243057] to-[#374255]">
              <CardContent className="p-0 h-full">
                <Image
                  src="/Shatry3-portrait-smiling-handsome-man-using-mobile-phone-chat-app-lookin.webp"
                  alt="Portrait smiling"
                  width={198}
                  height={508}
                  className="absolute top-[-10px] right-1"
                  loading="lazy"
                />
                <div className="p-[33px] flex flex-col justify-between h-full">
                  <div className="flex flex-col gap-9">
                    <div className="flex flex-col gap-[30px]">
                      <h3 className="text-white text-2xl font-bold leading-normal w-[253px] [font-family:'Raleway',Helvetica]">
                        Поможем подобрать под ваши размеры и требования
                      </h3>

                      <div className="flex flex-col gap-[9px]">
                        <div className="w-[190px]"></div>
                        <div className="bg-[#4f5d807a] rounded-lg px-3 py-2">
                          <span className="text-white text-base font-semibold leading-normal w-[158px] [font-family:'Raleway',Helvetica]">
                            Проконсультируем
                            <br /> и подберем
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-3">
                    <div className="flex flex-col gap-2 w-full">
                      <div className="relative">
                        <input
                          type="tel"
                          value={phone}
                          onChange={handlePhoneChange}
                          onPaste={handlePhonePaste}
                          onFocus={handlePhoneFocus}
                          required
                          inputMode="tel"
                          className="h-[67px] w-full bg-white rounded-2xl px-3 py-2 font-normal text-[17px] text-label-colorslc-l-secondary [font-family:'Raleway',Helvetica] tracking-[-0.41px] leading-[22px]"
                          placeholder="+7(000)-000-00-00"
                        />
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 hidden">+7</span>
                      </div>
                      {formError && (
                        <span className="text-red-400 text-xs [font-family:'Raleway',Helvetica]">
                          {formError}
                        </span>
                      )}

                      <Button 
                        onClick={handleSubmit}
                        disabled={!phone || !agreed || isSubmitting}
                        className={`h-[68px] rounded-2xl shadow-2 [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] text-white text-base font-semibold [font-family:'Raleway',Helvetica] ${
                          !phone || !agreed || isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                      >
                        {isSubmitting ? 'Отправляем...' : 'Получить помощь в подборе'}
                      </Button>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <div 
                        onClick={() => setAgreed(!agreed)}
                        className={`flex items-center justify-center w-[33px] h-[33px] rounded-lg cursor-pointer transition-colors ${
                          agreed 
                            ? 'bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]'
                            : 'bg-white border border-gray-300'
                        }`}
                      >
                        {agreed && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <p className="text-[#ffffffb2] text-xs font-medium leading-normal w-[296px] [font-family:'Raleway',Helvetica]">
                        Нажимая на кнопку, вы даете согласие на обработку
                        персональных данных и соглашаетесь с Пользовательским
                        соглашением
                      </p>
                    </div>
                  </div>          
                </div>
              </CardContent>
            </Card>

            {/* Product 5 */}
            {discountedProducts[4]?.images?.length && (
              <ProductCard product={discountedProducts[4]} />
            )}
          </div>

          {/* Third row */}
          {thirdRowProducts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {thirdRowProducts.map((product, index) => (
                <ProductCard 
                  key={`product-${index + 4}`} 
                  product={product} 
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden flex flex-col items-center gap-6 px-4 pb-8 -mt-40 ">
        {/* First row - mobile */}
        <div className="grid grid-cols-1 gap-6 w-full max-w-md mx-auto">
          {firstRowProducts.map((product, index) => (
            <ProductCard key={`mobile-product-${index}`} product={product} />
          ))}
        </div>

        {/* Second row - mobile */}
        <div className="grid grid-cols-1 gap-6 w-full max-w-md mx-auto">
          {discountedProducts[3]?.images?.length && (
            <ProductCard product={discountedProducts[3]} />
          )}

          {/* Mobile Consultation Card */}
          <Card className="w-full max-w-md mx-auto min-h-[400px] rounded-[20px] border border-[#dddddd] shadow-lg backdrop-blur-[79px] overflow-hidden bg-gradient-to-b from-[#243057] to-[#374255] ">
            <CardContent className="p-0 h-full relative">
              <div className="absolute top-0 right-0 w-[35%] max-w-[150px] h-full overflow-hidden z-10 pointer-events-none">
                <Image
                  src="/Shatry3-portrait-smiling-handsome-man-using-mobile-phone-chat-app-lookin.webp"
                  alt="Консультант"
                  fill
                  className="object-contain object-top"
                  loading="lazy"
                />
              </div>

              <div className="p-5 flex flex-col justify-between h-full relative z-20">
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-4">
                    <h3 className="text-white text-lg font-bold leading-tight max-w-[70%] [font-family:'Raleway',Helvetica]">
                      Поможем подобрать под ваши размеры и требования
                    </h3>

                    <div className="bg-[#4f5d807a] rounded-lg px-3 py-2 max-w-[170px]">
                      <span className="text-white text-sm font-semibold leading-tight [font-family:'Raleway',Helvetica]">
                        Проконсультируем
                        <br /> и подберем
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-5 mt-4">
                  <div className="flex flex-col gap-2 w-full">
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm hidden">+7</span>
                      <input
                        type="tel"
                        value={phone}
                        onChange={handlePhoneChange}
                        onPaste={handlePhonePaste}
                        onFocus={handlePhoneFocus}
                        required
                        inputMode="tel"
                        className="h-[50px] w-full bg-white rounded-2xl px-3 py-2 font-normal text-sm text-label-colorslc-l-secondary [font-family:'Raleway',Helvetica] tracking-[-0.41px] leading-[22px]"
                        placeholder="+7(000)-000-00-00"
                      />
                    </div>
                    {formError && (
                      <span className="text-red-300 text-xs [font-family:'Raleway',Helvetica]">
                        {formError}
                      </span>
                    )}

                    <Button 
                      onClick={handleSubmit}
                      disabled={!phone || !agreed || isSubmitting}
                      className={`h-[50px] rounded-2xl shadow-2 [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] text-white text-sm font-semibold [font-family:'Raleway',Helvetica] whitespace-normal ${
                        !phone || !agreed || isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? 'Отправляем...' : 'Получить помощь в подборе'}
                    </Button>
                  </div>

                  <div className="flex items-start gap-2 w-full">
                    <div 
                      onClick={() => setAgreed(!agreed)}
                      className={`flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-md cursor-pointer transition-colors mt-1 ${
                        agreed 
                          ? 'bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]'
                          : 'bg-white border border-gray-300'
                      }`}
                    >
                      {agreed && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                        </svg>
                      )}
                    </div>
                    <p className="text-[#ffffffb2] text-xs font-medium leading-tight [font-family:'Raleway',Helvetica] flex-1">
                      Нажимая на кнопку, вы даете согласие на обработку
                      персональных данных и соглашаетесь с Пользовательским
                      соглашением
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {discountedProducts[5]?.images?.length && (
            <ProductCard product={discountedProducts[5]} />
          )}
        </div>

        {/* Third row - mobile */}
        {thirdRowProducts.length > 0 && (
          <div className="grid grid-cols-1 gap-6 w-full max-w-md mx-auto">
            {thirdRowProducts.map((product, index) => (
              <ProductCard 
                key={`mobile-product-${index + 10}`} 
                product={product} 
              />
            ))}
          </div>
        )}

        {/* Show More Button - Mobile Only */}
        {discountedProducts.length > visibleProducts && onShowMore && (
          <div className="flex justify-center mt-4 w-full max-w-md mx-auto">
            <Button
              variant="link"
              onClick={onShowMore}
              className="font-bold text-[#527dc5] text-base underline p-0 h-auto"
            >
              Показать еще
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

const formatPrice = (price: number): string => {
  return price.toLocaleString('ru-RU') + ' ₽';
};

export default CatalogSh;