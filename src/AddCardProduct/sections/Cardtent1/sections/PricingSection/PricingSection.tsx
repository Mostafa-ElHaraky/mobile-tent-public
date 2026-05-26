'use client';

import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ReactElement } from 'react';
import Image from 'next/image';
import { useState, useEffect, useMemo } from 'react';
import Consultaionfor3d from '@/components/ui/Consultaionfor3d';
import ProductFramePlayer from '@/components/ui/ProductFramePlayer'; 
import CMSImage from '@/components/ui/CMSImage';
import { getImageUrl } from '@/utils/images';

// ===== Define interfaces for all props =====
interface PriceConfiguration {
  name: string;
  isActive: boolean;
  currentPrice: number;
  originalPrice: number;
  discount: number;
  description: string;
}

interface ContactInfo {
  phone1: string;
  phone2: string;
  email: string;
  telegram: string;
  whatsapp: string;
  office: {
    name: string;
    address: string;
    map_url: string;
    hours: string;
    appointment: string;
  };
  production: {
    name: string;
    address: string;
    map_url: string;
    hours: string;
    appointment: string;
  };
}

interface Specification {
  label: string;
  value: string;
}

interface Thumbnail {
  id: number;
  src?: string;
  alt?: string;
  is3D?: boolean;
  label?: string;
}

interface ConfigDetail {
  title: string;
  items: string[];
  note: string;
}

interface ProductDetail {
  warranty: {
    title: string;
    value: string;
  };
  delivery: {
    title: string;
    description: string;
  };
  certifications: {
    title: string;
    imageSrc: string;
  };
  madeInRussia: {
    imageSrc: string;
    description: string;
  };
}

interface ThreeDConfig {
  enabled: boolean;
  basePath?: string;
  totalFrames?: number;
  frameRate?: number;
}

// New interface for the product data from API
interface ProductData {
  code?: string;
  type?: string;
  size?: string;
  area?: number;
  shape?: string;
  width?: number;
  length?: number;
  archHeight?: number;
  ridgeHeight?: number;
  capacity?: string;
  url3d?: string;
  inStock?: string;
}

interface PricingSectionProps {
  // Product info
  pageName?: string;
  productCode?: string;
  productType?: string;
  
  // New structured data from API
  product?: ProductData;
  imagePaths?: string[];
  mainImagePath?: string;
  threed?: ThreeDConfig;
  
  // Pricing
  priceConfigurations?: PriceConfiguration[];
  
  // Specifications
  specifications?: Specification[];
  
  // Legacy props (kept for compatibility)
  specs?: any;
  images?: string[];
  
  // Config details
  configDetails?: Record<string, ConfigDetail>;
  
  // Product details (warranty, delivery, etc.)
  productDetails?: ProductDetail;
  
  // Contact info
  contacts?: ContactInfo;
  
  // Styling props
  desktopOffset?: number;
  mobileSpacing?: string;
  
  // Text content
  pricePrefix?: string;
  discountLabel?: string;
  lowerPriceQuestion?: string;
  lowerPriceResponse?: string;
  askQuestionText?: string;
  ctaButtonText?: string;
  
  // Flags
  showShareButton?: boolean;
  showCode?: boolean;
    // Add this line 👇
  fallbackImage?: string;
}

const ShareButton = ({ showShareButton = true }: { showShareButton?: boolean }) => {
  const [copied, setCopied] = useState(false);

  if (!showShareButton) return null;

  const handleShareClick = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
        const textArea = document.createElement('textarea');
        textArea.value = url;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
  };

  return (
    <div className="absolute top-3 right-3 z-10">
      <div 
        onClick={handleShareClick}
        className="relative flex w-[30px] h-[30px] items-center justify-center p-1.5 rounded-full bg-[linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] cursor-pointer hover:opacity-90 transition-opacity shadow-md"
      >
        <Image
          src="/share.webp"
          alt="Share icon"
          width={14}
          height={15}
          className="w-3.5 h-[15px]"
          priority
        />

        {copied && (
          <div className="absolute top-full right-0 mt-2 px-3 py-1.5 text-xs font-medium bg-gray-800 text-white rounded-md shadow-lg z-20 whitespace-nowrap">
            Ссылка скопирована!
          </div>
        )}
      </div>
    </div>
  );
};

export const PricingSection = ({ 
  pageName,
  productCode = "14",
  productType,
  product,
  imagePaths = [],
  mainImagePath,
  threed,
  priceConfigurations,
  specifications: propSpecifications,
  specs: legacySpecs,
  images: legacyImages,
  fallbackImage = "/fallback.webp",
  configDetails: propConfigDetails,
  productDetails: propProductDetails,
  contacts,
  desktopOffset = 400,
  mobileSpacing = "py-10 px-4",
  pricePrefix = "от",
  discountLabel = "-{discount}%",
  lowerPriceQuestion = "Нашли дешевле?",
  lowerPriceResponse = "Сделаем скидку",
  askQuestionText = "Задать вопрос по товару",
  ctaButtonText = "Получить КП с ценой под ваши размеры",
  showShareButton = true,
  showCode = true
}: PricingSectionProps): ReactElement => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);


  // Helper to get full CMS URL for 3D frames
const getCmsUrl = (path: string) => {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  if (path.startsWith('/upload')) {
    return `https://cms.mobile-tent.ru${path}`;
  }
  return path;
};


  // ===== GET IMAGES FROM API (PREFER NEW STRUCTURE) =====
  const images = imagePaths.length > 0 ? imagePaths : (legacyImages || legacySpecs?.images || []);
  const mainImage = mainImagePath || (images.length > 0 ? images[0] : fallbackImage);
  
  // ===== GET PRODUCT DATA FROM API =====
  const productData = product || legacySpecs || {};
  
// ===== GENERATE THUMBNAILS FROM IMAGES =====
const generatedThumbnails: Thumbnail[] = images.map((src: string, index: number) => ({
  id: index + 1,
  src,
  alt: `${pageName || 'Product'} - фото ${index + 1}`
}));
  
// ===== 3D THUMBNAIL (if enabled) =====
const has3D = threed?.enabled && threed?.basePath;
const allThumbnails: Thumbnail[] = [
  ...generatedThumbnails,
  ...(has3D ? [{ id: 999, label: "3D", is3D: true }] : [])
];

// ===== TENT SEQUENCES FROM 3D CONFIG =====
const tentSequences = has3D && threed?.basePath ? [{
  basePath: threed.basePath.startsWith('/upload') 
    ? getImageUrl(threed.basePath) 
    : threed.basePath,
  totalFrames: threed.totalFrames || 180,
  frameRate: threed.frameRate || 24
}] : [];

  // ===== DEFAULT VALUES (only used if no data from CMS) =====
  const defaultSpecifications: Specification[] = [
    { label: "Размер:", value: productData?.size || "—" },
    { label: "Площадь:", value: productData?.area ? `${productData.area} м²` : "—" },
    { label: "Форма:", value: productData?.shape || "—" },
    { label: "Вместимость:", value: productData?.capacity || "—" },
    { label: "Ширина:", value: productData?.width ? `${productData.width} м` : "—" },
    { label: "Длина:", value: productData?.length ? `${productData.length} м` : "—" },
    { label: "Высота входной арки:", value: productData?.archHeight ? `${productData.archHeight} м` : "—" },
    { label: "Высота в коньке:", value: productData?.ridgeHeight ? `${productData.ridgeHeight} м` : "—" },
  ];

  const defaultConfigOptions: PriceConfiguration[] = priceConfigurations && priceConfigurations.length > 0 
    ? priceConfigurations 
    : [
        { 
          name: "Базовая", 
          isActive: true,
          currentPrice: 372000,
          originalPrice: 372000,
          discount: 0,
          description: "Базовая комплектация включает основные элементы конструкции"
        },
        { 
          name: "Средняя", 
          isActive: false,
          currentPrice: 472000,
          originalPrice: 472000,
          discount: 0,
          description: "Средняя комплектация с дополнительными опциями"
        },
        { 
          name: "Максимальная", 
          isActive: false,
          currentPrice: 572000,
          originalPrice: 572000,
          discount: 0,
          description: "Максимальная комплектация со всеми доступными опциями"
        },
      ];

  const defaultConfigDetails: Record<string, ConfigDetail> = propConfigDetails || {
    "Базовая": {
      title: "Базовая комплектация",
      items: [
        "Каркас из оцинкованной стали",
        "Тент из ПВХ 650 г/м²",
        "Комплект крепежей и анкеров",
        "Сумка для транспортировки",
        "Инструкция по сборке"
      ],
      note: "Подходит для сезонного использования на мероприятиях."
    },
    "Средняя": {
      title: "Средняя комплектация",
      items: [
        "Каркас усиленный, с защитой от коррозии",
        "Тент из ПВХ 750 г/м² с UV-защитой",
        "Дополнительные растяжки и грузы",
        "Сумка с колесами",
        "Гарантия 3 года",
        "Бесплатная доставка по МКАД"
      ],
      note: "Идеально для частого использования и аренды."
    },
    "Максимальная": {
      title: "Максимальная комплектация",
      items: [
        "Промышленный каркас с двойной защитой",
        "Тент 850 г/м², огнеупорный, зимний",
        "Система вентиляции и окна",
        "Электропроводка внутри (опция)",
        "Профессиональная сборка в подарок",
        "Гарантия 5 лет + сервисное обслуживание"
      ],
      note: "Премиум-решение для бизнеса и круглогодичного использования."
    }
  };

  const defaultProductDetails: ProductDetail = propProductDetails || {
    warranty: {
      title: "Гарантия",
      value: "50 лет",
    },
    delivery: {
      title: "Доставка",
      description: "Отправляем во все регионы РФ и страны СНГ",
    },
    certifications: {
      title: "Сертификации",
      imageSrc: "/forcirtifcate.webp",
    },
    madeInRussia: {
      imageSrc: "/eac.webp",
      description: "Товар произведен в РФ и допущен к закупкам по программе «Импортозамещение»",
    },
  };

  // ===== USE PROPS OR DEFAULTS =====
  const specifications = propSpecifications || defaultSpecifications;
  const configOptions = defaultConfigOptions;
  const configDetails = defaultConfigDetails;
  const productDetails = defaultProductDetails;

  // Find the active configuration
  const activeConfigFromBitrix = useMemo(() => {
    return configOptions.find(option => option.isActive) || configOptions[0];
  }, [configOptions]);

  // States
  const [showConfigDetails, setShowConfigDetails] = useState(true);
  const [activeConfig, setActiveConfig] = useState<string>(activeConfigFromBitrix.name);
  const [currentPrice, setCurrentPrice] = useState(activeConfigFromBitrix.currentPrice);
  const [originalPrice, setOriginalPrice] = useState(activeConfigFromBitrix.originalPrice);
  const [discount, setDiscount] = useState(activeConfigFromBitrix.discount);
  const [selectedImage, setSelectedImage] = useState<string | null>(
    allThumbnails.find(t => t.src)?.src ?? mainImage
  );
  const [selectedMode, setSelectedMode] = useState<"image" | "3d">("image");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Handlers
  const handleConfigClick = (configName: string) => {
    setActiveConfig(configName);
    setShowConfigDetails(true);
    
    const selectedConfig = configOptions.find(option => option.name === configName);
    if (selectedConfig) {
      setCurrentPrice(selectedConfig.currentPrice);
      setOriginalPrice(selectedConfig.originalPrice);
      setDiscount(selectedConfig.discount);
    }
  };

  const toggleConfigDetails = () => {
    setShowConfigDetails(prev => !prev);
  };

  const closePopup = () => setIsPopupOpen(false);

  // Helpers
  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const formatDiscountLabel = (discount: number) => {
    return discountLabel.replace('{discount}', discount.toString());
  };

  const contactInfo = contacts ? [
    { phone: contacts.phone1 || "+7 (499) 113-36-60" },
    { phone: contacts.phone2 || "+7 (495) 487-43-53" },
  ] : [
    { phone: "+7 (499) 113-36-60" },
    { phone: "+7 (495) 487-43-53" },
  ];

  // Use product code from API
  const displayProductCode = productData?.code || productCode;

  // Desktop version
  if (!isMobile) {
    return (
      <section className={`flex flex-col gap-[35px] py-6 px-12 relative top-[${desktopOffset}px]`}>
        <div className="flex flex-col w-full max-w-[658px]">
          <div className="font-medium text-[#394355] text-4xl [font-family:'Raleway',Helvetica] tracking-[0]">
            {pageName || "Арочный шатер 10х5 - 50 м²"}
          </div>
          {productType && (
            <div className="mt-2 text-sm text-gray-600">Тип: {productType}</div>
          )}
        </div>

        <div className="flex flex-col gap-9">
          <div className="flex flex-col gap-6">
            <dl className="flex flex-col gap-4">
              {specifications.map((spec, index) => (
                <div key={index} className="flex items-start gap-2">
                  <dt className="font-normal text-[#394355] text-lg leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                    {spec.label}
                  </dt>
                  <dd className="font-medium text-[#394355] text-lg leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <Card className="bg-[#eef2fc] border-0 relative z-20 w-[580px] rounded-[10px] border-none">
          <CardContent className="flex flex-col gap-6 p-4">
            <div className="flex w-full max-w-[546px] items-start justify-between">
              <h3 className="font-semibold text-[#394355] text-lg leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                Комплектация:
              </h3>
            </div>

            <div className="flex items-start gap-[34px]">
              {configOptions.map((option, index) => (
                <Button
                  key={index}
                  onClick={() => handleConfigClick(option.name)}
                  variant={activeConfig === option.name ? "default" : "outline"}
                  className={`w-40 h-auto px-4 py-2 rounded-[50px] transition-all ${
                    activeConfig === option.name
                      ? "bg-[linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] shadow-[0px_22px_44px_0px_rgba(32,124,254,0.4)] border-0"
                      : "bg-white border border-[#394355] hover:bg-gray-50"
                  }`}
                >
                  <span
                    className={`text-lg leading-6 [font-family:'Raleway',Helvetica] tracking-[0] ${
                      activeConfig === option.name ? "font-semibold text-white" : "font-medium text-[#394355]"
                    }`}
                  >
                    {option.name}
                  </span>
                </Button>
              ))}
            </div>

{showConfigDetails && activeConfig && (
  <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
    <h4 className="font-bold text-[#394355] text-lg mb-3">
      {activeConfig} комплектация
    </h4>
    
    {/* Display the description from CMS */}
    {priceConfigurations?.find(c => c.name === activeConfig)?.description && (
      <div 
        className="text-[#394355] text-sm prose prose-sm max-w-none"
        dangerouslySetInnerHTML={{ 
          __html: priceConfigurations.find(c => c.name === activeConfig)?.description || '' 
        }} 
      />
    )}
    
    {/* Fallback to default config details if no CMS description */}
    {!priceConfigurations?.find(c => c.name === activeConfig)?.description && 
     configDetails[activeConfig] && (
      <>
        <ul className="list-disc list-inside space-y-1 text-[#394355] text-sm">
          {configDetails[activeConfig].items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-[#6b7280] italic">
          {configDetails[activeConfig].note}
        </p>
      </>
    )}
  </div>
)}
          </CardContent>
        </Card>

        <div className="flex flex-col gap-[30px]">
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-[#394355] text-lg leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
              Цена:
            </h3>
            <div className="flex items-start gap-3">
              <div className="flex items-center gap-3">
                <div className="font-bold text-[#394355] text-4xl leading-[normal] [font-family:'Raleway',Helvetica] tracking-[0]">
                  {pricePrefix} {formatPrice(currentPrice)} ₽
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="font-medium text-[#4f5d80d9] text-base leading-6 line-through [font-family:'Raleway',Helvetica] tracking-[0]">
                    {formatPrice(originalPrice)} ₽
                  </span>
                  <Badge className="px-2 py-1 rounded-lg bg-[linear-gradient(180deg,rgba(255,115,115,1)_0%,rgba(255,111,111,1)_37%,rgba(236,60,60,1)_100%)]">
                    <span className="font-bold text-white text-sm leading-[normal] [font-family:'Raleway',Helvetica] tracking-[0]">
                      {formatDiscountLabel(discount)}
                    </span>
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-[5px] left-[750px] z-10">
            {showCode && (
              <div className="font-normal text-[#394355] text-base leading-[normal] whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0] mb-4">
                <span className="[font-family:'Raleway',Helvetica] font-normal text-[#394355] text-base tracking-[0]">
                  Код товара:{" "}
                </span>
                <span className="font-semibold underline">{displayProductCode}</span>
              </div>
            )}

<div className="w-[660px] h-[660px] rounded-[20px] overflow-hidden relative z-10">
  {selectedMode === "3d" && has3D ? (
    <ProductFramePlayer sequences={tentSequences} className="absolute inset-0" /> 
  ) : (
    <CMSImage
      key={selectedImage || mainImage} // 👈 ADD THIS KEY
      src={selectedImage || mainImage}
      alt={pageName || "Product image"}
      width={1280}
      height={720}
      className="object-contain w-full h-full"
      priority
    />
  )}
  <ShareButton showShareButton={showShareButton} />
</div>

            <div className="flex flex-wrap gap-3 mt-4 relative z-20">
              {allThumbnails.map((thumbnail) => (
                <button
                  key={thumbnail.id}
                  onClick={() => {
                    if (thumbnail.is3D) {
                      setSelectedMode("3d");
                      setSelectedImage(null);
                    } else if (thumbnail.src) {
                      setSelectedMode("image");
                      setSelectedImage(thumbnail.src);
                    }
                  }}
                  className={`w-[100px] h-[100px] rounded-xl flex items-center justify-center font-semibold text-lg text-black
                    ${selectedMode === "3d" && thumbnail.is3D ? "ring-4 ring-blue-500 scale-105" : ""}
                    ${!thumbnail.is3D && selectedImage === thumbnail.src ? "ring-4 ring-blue-500 scale-105" : ""}
                    bg-[#ffffff] transition-all duration-300 transform focus:outline-none hover:scale-105 cursor-pointer`}
                >
                  {thumbnail.is3D ? (
                    <span>3D</span>
                  ) : thumbnail.src ? (
                    <CMSImage
                      src={thumbnail.src}
                      alt={thumbnail.alt || 'Thumbnail'}
                      width={100}
                      height={100}
                      className="rounded-xl object-cover border-2 border-white shadow-md"
                      loading="lazy"
                    />
                  ) : null}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-start justify-between w-full max-w-[546px]">
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-[#394355] text-sm leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                {lowerPriceQuestion}
              </h4>
              <p className="font-medium text-[#394355] text-sm leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                {lowerPriceResponse}
              </p>
            </div>

            <Button
              variant="ghost"
              className="flex items-center gap-[7px] h-auto p-0"
            >
              <span className="font-medium text-[#394355] text-sm leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                {askQuestionText}
              </span>
              <div className="w-[15px] h-[15px] bg-[url(/forinfo.webp)] bg-[100%_100%]" />
            </Button>
          </div>

          <Card className="relative w-full left-[700px] top-[50px] max-w-[658px] bg-[#fffffff2] rounded-[20px] border-[3px] border-solid border-white shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]">
            <CardContent className="flex flex-col items-start gap-7 p-[17px_27px]">
              <div className="flex items-start justify-between w-full">
                <div className="flex flex-col items-start gap-4">
                  <h3 className="mt-[-1px] font-['Raleway',Helvetica] font-semibold text-[#232c42] text-xl">
                    {productDetails.warranty.title}
                  </h3>
                  <div className="flex items-start gap-7">
                    <div className="flex flex-col items-start gap-1.5">
                      <p className="mt-[-1px] font-['Raleway',Helvetica] font-bold text-[#232c42] text-3xl">
                        {productDetails.warranty.value}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-4">
                  <h3 className="mt-[-1px] font-['Raleway',Helvetica] font-semibold text-[#232c42] text-xl">
                    {productDetails.delivery.title}
                  </h3>
                  <div className="flex items-start gap-7">
                    <div className="flex flex-col items-start gap-1.5">
                      <p className="mt-[-1px] font-['Raleway',Helvetica] font-normal text-[#232c42] text-base whitespace-pre-line">
                        {productDetails.delivery.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-end gap-7 w-full">
                <div className="flex flex-col items-start gap-4">
                  <h3 className="mt-[-1px] font-['Raleway',Helvetica] font-semibold text-[#232c42] text-xl">
                    {productDetails.certifications.title}
                  </h3>
                  <Image
                    className="w-[310px] h-14"
                    alt="Certification logos"
                    src={productDetails.certifications.imageSrc}
                    width={310}
                    height={56}
                    quality={80}
                    priority
                  />
                </div>

                <div className="flex items-start gap-2">
                  <Image
                    className="w-[77px] h-[71px]"
                    alt="Made in Russia logo"
                    src={productDetails.madeInRussia.imageSrc}
                    width={77}
                    height={71}
                    quality={80}
                    priority
                  />
                  <div className="flex flex-col items-start gap-2.5">
                    <div className="flex w-[157px] items-start gap-7">
                      <div className="flex flex-col w-[157px] items-start gap-1.5">
                        <p className="w-40 mt-[-1px] mr-[-3px] font-['Raleway',Helvetica] font-normal text-[#232c42] text-sm whitespace-pre-line">
                          {productDetails.madeInRussia.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="absolute bottom-[70px] w-[600px] h-[140px] border-0">
            <CardContent className="flex flex-col items-start gap-6 p-0 relative left-[15px]">
              <div className="relative bottom-[30px]">
                <h3 className="font-semibold text-[#394355] text-lg leading-6 [font-family:'Raleway',Helvetica]">
                  Или свяжитесь по контактам
                </h3>
              </div>

              <div className="flex items-start gap-[73px]">
                <div className="flex items-start gap-[18px]">
                  <div className="relative w-6 h-6">
                    <a href={contacts?.telegram || "https://t.me/+79770893996?start=14594990928"} target="_blank" rel="noopener noreferrer">
                      <Image
                        className="absolute top-[3px] left-0.5"
                        src="/group.webp"
                        alt="Telegram icon"
                        width={21}
                        height={18}
                        priority
                      />
                    </a>
                  </div>
                  <div className="relative w-6 h-6">
                    <a href={contacts?.whatsapp || "https://max.ru/u/f9LHodD0cOK_6DAtIeOn3T51Xpzrkg2i4RB2ZEjtVfXOwvURhiW6gtGMLrA"} target="_blank" rel="noopener noreferrer">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        xmlSpace="preserve" 
                        viewBox="0 0 1000 1000"
                        width={20}
                        height={20}
                        className="absolute top-0.5 left-0.5"
                      >
                        <defs>
                          <linearGradient id="b">
                            <stop offset="0" stopColor="#00f"/>
                            <stop offset="1" stopOpacity="0"/>
                            <stop offset="1" stopOpacity="0"/>
                          </linearGradient>
                          <linearGradient id="a">
                            <stop offset="0" stopColor="#4cf"/>
                            <stop offset=".662" stopColor="#53e"/>
                            <stop offset="1" stopColor="#93d"/>
                          </linearGradient>
                          <linearGradient id="c" x1="117.847" x2="1000" y1="760.536" y2="500" gradientUnits="userSpaceOnUse" href="#a"/>
                          <radialGradient id="d" cx="-87.392" cy="1166.116" r="500" fx="-87.392" fy="1166.116" gradientTransform="rotate(51.356 1551.478 559.3)scale(2.42703433 1)" gradientUnits="userSpaceOnUse" href="#b"/>
                        </defs>
                        <rect width="1000" height="1000" fill="url(#c)" ry="249.681"/>
                        <rect width="1000" height="1000" fill="url(#d)" ry="249.681"/>
                        <path fill="#fff" fillRule="evenodd" d="M508.211 878.328c-75.007 0-109.864-10.95-170.453-54.75-38.325 49.275-159.686 87.783-164.979 21.9 0-49.456-10.95-91.248-23.36-136.873-14.782-56.21-31.572-118.807-31.572-209.508 0-216.626 177.754-379.597 388.357-379.597 210.785 0 375.947 171.001 375.947 381.604.707 207.346-166.595 376.118-373.94 377.224m3.103-571.585c-102.564-5.292-182.499 65.7-200.201 177.024-14.6 92.162 11.315 204.398 33.397 210.238 10.585 2.555 37.23-18.98 53.837-35.587a189.8 189.8 0 0 0 92.71 33.032c106.273 5.112 197.08-75.794 204.215-181.95 4.154-106.382-77.67-196.486-183.958-202.574Z" clipRule="evenodd"/>
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-3">
                  {contactInfo
                    .filter((contact) => contact.phone)
                    .map((contact, index) => (
                      <div key={index} className="flex items-center gap-[17px]">
                        <div className="flex w-[25px] h-[25px] items-center justify-center rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec]">
                          <Image
                            src={`/contact1-group-${index === 0 ? 9 : 10}.webp`}
                            alt="Phone icon"
                            width={12}
                            height={12}
                            className="object-contain"
                            priority
                          />
                        </div>
                        <a
                          href={`tel:${contact.phone.replace(/\s|\(|\)|-/g, '')}`}
                          className="text-sm text-[#394355] font-raleway hover:underline"
                        >
                          {contact.phone}
                        </a>
                      </div>
                    ))}
                </div>

                <div className="flex items-center gap-[18px]">
                  <div className="flex w-[25px] h-[25px] items-center justify-center rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec]">
                    <Image src="/contact1-group-11.webp" priority alt="Email icon" width={15} height={11} />
                  </div>
                  <div className="flex items-center gap-1">
                    <a
                      href={`mailto:${contacts?.email || "info@mobile-tent.ru"}`}
                      className="text-sm text-[#232c42] font-raleway hover:underline"
                    >
                      {contacts?.email || "info@mobile-tent.ru"}
                    </a>
                    <Image src="/contact1-group-12.webp" priority alt="Copy icon" width={16} height={16} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="relative flex flex-col w-[580px] bottom-[250px] right-[50px] items-center gap-3 mx-12">
            <Button 
              className="w-[579px] h-[68px] rounded-2xl shadow-2 bg-[linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]"
              onClick={() => setIsPopupOpen(true)}
            >
              <span className="font-semibold text-white text-base text-center leading-[normal] whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                {ctaButtonText}
              </span>
            </Button>
          </div>
        </div>

        {isPopupOpen && (
          <div 
            className="fixed inset-0 flex items-center justify-center z-50 bg-black/30 backdrop-blur-sm"
            onClick={closePopup}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <Consultaionfor3d onClose={closePopup} />
            </div>
          </div>
        )}
      </section>
    );
  }

  // Mobile Version
  return (
  <section className={`flex flex-col gap-10 ${mobileSpacing} w-full max-w-4xl mx-auto`}>
    {showCode && (
      <div className="font-normal text-[#394355] text-sm [font-family:'Raleway',Helvetica] tracking-[0] mb-4">
        <span className="[font-family:'Raleway',Helvetica] font-normal text-[#394355] text-sm tracking-[0]">
          Код товара:{" "}
        </span>
        <span className="font-semibold underline">{displayProductCode}</span>
      </div>
    )}

    {/* Product Images & 3D Viewer */}
    <div className="flex flex-col gap-4 w-full">
      <div className="w-full h-[400px] rounded-[16px] overflow-hidden relative bg-white shadow-md px-4">
        {selectedMode === "3d" && has3D ? (
          <div className="w-full h-full flex items-center justify-center">
            <div className="relative w-full h-full">
              <ProductFramePlayer
                sequences={tentSequences}
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
          </div>
        ) : (
<CMSImage
  key={`main-${selectedImage || mainImage}`} // More specific key
  src={selectedImage || mainImage}
  alt={pageName || "Product image"}
  fill
  className="object-contain"
  priority
/>
        )}
        <ShareButton showShareButton={showShareButton} />
      </div>

      <div className="flex flex-wrap gap-2 justify-center">
        {allThumbnails.map((thumbnail) => (
<button
  key={thumbnail.id}
  onClick={() => {
    if (thumbnail.is3D) {
      setSelectedMode("3d");
      setSelectedImage(null);
    } else if (thumbnail.src) {
      setSelectedMode("image");
      setSelectedImage(thumbnail.src);
    }
  }}
  className={`w-[70px] h-[70px] rounded-xl flex items-center justify-center font-semibold text-sm text-black transition-all duration-300 transform focus:outline-none hover:scale-105
    ${selectedMode === "3d" && thumbnail.is3D 
      ? "ring-2 ring-blue-500 scale-105 bg-blue-50" 
      : !thumbnail.is3D && selectedImage === thumbnail.src 
      ? "ring-2 ring-blue-500 scale-105 bg-blue-50" 
      : thumbnail.is3D 
        ? "bg-gradient-to-br from-blue-400 to-blue-600 text-white font-bold" 
        : "bg-white border border-gray-200 shadow-sm"
    }`}
>
  {thumbnail.is3D ? (
    <span className="text-white font-bold text-sm">3D</span>
  ) : thumbnail.src ? (
    <div className="relative w-full h-full">
      <CMSImage
        src={thumbnail.src}
        alt={thumbnail.alt || 'Thumbnail'}
        fill
        className="rounded-xl object-contain"
        loading="lazy"
      />
    </div>
  ) : null}
</button>
        ))}
      </div>
    </div>

    {/* Product title */}
    <div className="flex flex-col w-full">
      <div className="font-medium text-[#394355] text-2xl [font-family:'Raleway',Helvetica] tracking-[0] leading-tight">
        {pageName || "Арочный шатер 10х5 - 50 м²"}
      </div>
      {productType && (
        <div className="mt-1 text-xs text-gray-600">Тип: {productType}</div>
      )}
    </div>

    {/* Configuration */}
    <Card className="bg-[#eef2fc] border-0 rounded-[12px] shadow-sm">
      <CardContent className="flex flex-col gap-4 p-4">
        <div className="flex w-full items-start justify-between">
          <h3 className="font-semibold text-[#394355] text-sm [font-family:'Raleway',Helvetica] tracking-[0]">
            Комплектация:
          </h3>
          <Button
            variant="ghost"
            onClick={toggleConfigDetails}
            className="flex items-center gap-1 h-auto p-0"
          >
            <span className="font-medium text-[#394355] text-xs [font-family:'Raleway',Helvetica] tracking-[0]">
              Смотреть разницу
            </span>
            <ChevronDownIcon className={`h-3 w-3 transition-transform ${showConfigDetails ? "rotate-180" : ""}`} />
          </Button>
        </div>

        <div className="flex flex-col items-stretch gap-3">
          {configOptions.map((option, index) => (
            <Button
              key={index}
              onClick={() => handleConfigClick(option.name)}
              variant={activeConfig === option.name ? "default" : "outline"}
              className={`w-full h-12 px-4 py-2 rounded-full font-medium text-sm transition-all
                ${activeConfig === option.name
                  ? "bg-[linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] shadow-md text-white border-0"
                  : "bg-white border border-[#cbd5e1] text-[#394355] hover:bg-gray-50"
                }`}
            >
              {option.name}
            </Button>
          ))}
        </div>

        {showConfigDetails && activeConfig && (
          <div className="mt-4 p-3 bg-white rounded-lg border border-gray-200 shadow-sm">
            <h4 className="font-bold text-[#394355] text-base mb-2">{activeConfig} комплектация</h4>
            
            {priceConfigurations?.find(c => c.name === activeConfig)?.description && (
              <div 
                className="text-[#394355] text-xs prose prose-xs max-w-none"
                dangerouslySetInnerHTML={{ 
                  __html: priceConfigurations.find(c => c.name === activeConfig)?.description || '' 
                }} 
              />
            )}
            
            {!priceConfigurations?.find(c => c.name === activeConfig)?.description && 
             configDetails[activeConfig] && (
              <>
                <ul className="list-disc list-inside space-y-1 text-[#394355] text-xs">
                  {configDetails[activeConfig].items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <p className="mt-2 text-xs text-[#6b7280] italic">
                  {configDetails[activeConfig].note}
                </p>
              </>
            )}
          </div>
        )}
      </CardContent>
    </Card>

    {/* Price section */}
    <div className="flex flex-col gap-3">
      <h3 className="font-semibold text-[#394355] text-lg [font-family:'Raleway',Helvetica] tracking-[0]">
        Цена:
      </h3>
      <div className="flex flex-wrap items-center gap-2">
        <div className="font-bold text-[#394355] text-2xl [font-family:'Raleway',Helvetica] tracking-[0]">
          {pricePrefix} {formatPrice(currentPrice)} ₽
        </div>
        <div className="flex items-center gap-1.5">
          <span className="font-medium text-[#4f5d80d9] text-sm line-through [font-family:'Raleway',Helvetica] tracking-[0]">
            {formatPrice(originalPrice)} ₽
          </span>
          <Badge className="px-2 py-0.5 rounded-md text-xs bg-[linear-gradient(180deg,rgba(255,115,115,1)_0%,rgba(255,111,111,1)_37%,rgba(236,60,60,1)_100%)]">
            <span className="font-bold text-white">
              {formatDiscountLabel(discount)}
            </span>
          </Badge>
        </div>
      </div>
    </div>

    {/* Additional info */}
    <div className="flex items-start justify-between w-full">
      <div className="flex flex-col gap-1">
        <h4 className="font-semibold text-[#394355] text-xs [font-family:'Raleway',Helvetica] tracking-[0]">
          {lowerPriceQuestion}
        </h4>
        <p className="font-medium text-[#394355] text-xs [font-family:'Raleway',Helvetica] tracking-[0]">
          {lowerPriceResponse}
        </p>
      </div>

      <Button
        variant="ghost"
        className="flex items-center gap-1 h-auto p-0"
      >
        <span className="font-medium text-[#394355] text-xs [font-family:'Raleway',Helvetica] tracking-[0]">
          {askQuestionText}
        </span>
        <div className="w-3 h-3 bg-[url(/forinfo.webp)] bg-contain bg-no-repeat" />
      </Button>
    </div>

    {/* Product details */}
    <Card className="w-full bg-white/90 backdrop-blur-sm rounded-[16px] border border-white/50 shadow-sm">
      <CardContent className="flex flex-col items-start gap-4 p-4">
        <div className="flex items-start justify-between w-full">
          <div className="flex flex-col gap-1 w-1/2">
            <h3 className="font-semibold text-[#232c42] text-sm">
              {productDetails.warranty.title}
            </h3>
            <p className="font-bold text-[#232c42] text-xl">
              {productDetails.warranty.value}
            </p>
          </div>

          <div className="flex flex-col gap-1 w-1/2">
            <h3 className="font-semibold text-[#232c42] text-sm">
              {productDetails.delivery.title}
            </h3>
            <p className="font-normal text-[#232c42] text-xs whitespace-pre-line leading-tight">
              {productDetails.delivery.description}
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-gray-200 my-2" />

        <div className="flex items-start justify-between w-full">
          <div className="flex flex-col gap-1 w-1/2">
            <h3 className="font-semibold text-[#232c42] text-sm">
              {productDetails.certifications.title}
            </h3>
            <Image
              src={productDetails.certifications.imageSrc}
              alt="Certification logos"
              width={310}
              height={40}
              className="w-full h-auto max-h-10 object-contain"
              quality={80}
              priority
            />
          </div>
          <div className="flex flex-col gap-2 w-1/2">
            <div className="flex flex-col items-start">
              <p className="font-normal text-[#232c42] text-xs leading-relaxed pl-4">
                {productDetails.madeInRussia.description}
              </p>
              <Image
                src={productDetails.madeInRussia.imageSrc}
                alt="Made in Russia logo"
                width={64}
                height={56}
                className="w-10 h-auto object-contain mt-[-20] self-end"
                quality={80}
                priority
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* Contact info */}
    <Card className="w-full border-0 bg-transparent">
      <CardContent className="flex flex-col items-start gap-4 p-2">
        <h3 className="font-semibold text-[#394355] text-sm [font-family:'Raleway',Helvetica]">
          Или свяжитесь по контактам
        </h3>

        <div className="flex flex-col items-start gap-4 w-full pl-4">
          <div className="flex items-center gap-4">
            <a href={contacts?.telegram || "https://t.me/+79770893996?start=14594990928"} target="_blank" rel="noopener noreferrer" className="block">
              <Image
                src="/group.webp"
                alt="Telegram icon"
                width={24}
                height={20}
                className="w-6 h-auto"
                priority
              />
            </a>
            <a href={contacts?.whatsapp || "https://max.ru/u/f9LHodD0cOK_6DAtIeOn3T51Xpzrkg2i4RB2ZEjtVfXOwvURhiW6gtGMLrA"} target="_blank" rel="noopener noreferrer" className="block">
              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  xmlSpace="preserve" 
                  viewBox="0 0 1000 1000"
                  width={16}
                  height={16}
                >
                  <defs>
                    <linearGradient id="b">
                      <stop offset="0" stopColor="#00f"/>
                      <stop offset="1" stopOpacity="0"/>
                      <stop offset="1" stopOpacity="0"/>
                    </linearGradient>
                    <linearGradient id="a">
                      <stop offset="0" stopColor="#4cf"/>
                      <stop offset=".662" stopColor="#53e"/>
                      <stop offset="1" stopColor="#93d"/>
                    </linearGradient>
                    <linearGradient id="c" x1="117.847" x2="1000" y1="760.536" y2="500" gradientUnits="userSpaceOnUse" href="#a"/>
                    <radialGradient id="d" cx="-87.392" cy="1166.116" r="500" fx="-87.392" fy="1166.116" gradientTransform="rotate(51.356 1551.478 559.3)scale(2.42703433 1)" gradientUnits="userSpaceOnUse" href="#b"/>
                  </defs>
                  <rect width="1000" height="1000" fill="url(#c)" ry="249.681"/>
                  <rect width="1000" height="1000" fill="url(#d)" ry="249.681"/>
                  <path fill="#fff" fillRule="evenodd" d="M508.211 878.328c-75.007 0-109.864-10.95-170.453-54.75-38.325 49.275-159.686 87.783-164.979 21.9 0-49.456-10.95-91.248-23.36-136.873-14.782-56.21-31.572-118.807-31.572-209.508 0-216.626 177.754-379.597 388.357-379.597 210.785 0 375.947 171.001 375.947 381.604.707 207.346-166.595 376.118-373.94 377.224m3.103-571.585c-102.564-5.292-182.499 65.7-200.201 177.024-14.6 92.162 11.315 204.398 33.397 210.238 10.585 2.555 37.23-18.98 53.837-35.587a189.8 189.8 0 0 0 92.71 33.032c106.273 5.112 197.08-75.794 204.215-181.95 4.154-106.382-77.67-196.486-183.958-202.574Z" clipRule="evenodd"/>
                </svg>
              </div>
            </a>
          </div>

          <div className="flex flex-col items-start gap-2 w-full">
            {contactInfo
              .filter((contact) => contact.phone)
              .map((contact, index) => (
                <div key={index} className="flex items-center gap-3 w-full">
                  <div className="flex w-6 h-6 items-center justify-center rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec]">
                    <Image
                      src={`/contact1-group-${index === 0 ? 9 : 10}.webp`}
                      alt="Phone icon"
                      width={12}
                      height={12}
                      className="object-contain"
                      priority
                    />
                  </div>
                  <a
                    href={`tel:${contact.phone.replace(/\s|\(|\)|-/g, '')}`}
                    className="text-sm text-[#394355] font-medium hover:underline flex-1"
                  >
                    {contact.phone}
                  </a>
                </div>
              ))}
          </div>

          <div className="flex items-center gap-3 w-full">
            <div className="flex w-6 h-6 items-center justify-center rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec]">
              <Image src="/contact1-group-11.webp" priority alt="Email icon" width={14} height={10} className="object-contain" />
            </div>
            <div className="flex items-center gap-2 flex-1">
              <a
                href={`mailto:${contacts?.email || "info@mobile-tent.ru"}`}
                className="text-sm text-[#232c42] font-medium hover:underline"
              >
                {contacts?.email || "info@mobile-tent.ru"}
              </a>
              <Image src="/contact1-group-12.webp" priority alt="Copy icon" width={14} height={14} className="cursor-pointer" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* CTA Button */}
    <div className="flex flex-col w-full items-center gap-3 pt-4">
      <Button 
        className="w-full h-14 rounded-2xl text-base font-semibold shadow-lg 
             bg-[linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] 
             hover:shadow-xl transition-shadow text-white"
        onClick={() => setIsPopupOpen(true)}
      >
        {ctaButtonText}
      </Button>
    </div>

    {/* Popup */}
    {isPopupOpen && (
      <div 
        className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm p-4"
        onClick={closePopup}
      >
        <div onClick={(e) => e.stopPropagation()} className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
          <Consultaionfor3d onClose={closePopup} />
        </div>
      </div>
    )}
  </section>
);
};