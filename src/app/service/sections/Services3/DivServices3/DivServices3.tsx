
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent } from "../../../../../components/ui/card";
import { Progress } from "../../../../../components/ui/progress";
import { RadioGroup, RadioGroupItem } from "../../../../../components/ui/radio-group";
import Image from 'next/image';
import { Button } from "../../../../../components/ui/button";
import { Input } from "../../../../../components/ui/input";
import { CheckIcon } from "lucide-react";
import { Label } from "../../../../../components/ui/label";
import Consultaionfor3d from '../../../../../components/ui/Consultaionfor3d';

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

export const DivServices3 = () => {
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

  const handleSubmit = () => {
    if (validateForm()) router.push('/thankyou');
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
        <div className="relative">
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

  // FIX: Create a handler for card clicks
  const handleCardClick = (value: string) => {
    handleValueChange(value);
  };

  // Rendering helpers - FIXED with clickable cards
  const renderCapacityOptions = () => (
    capacityOptions.map((option, index) => {
      const isSelected = answers.capacity === option.value;
      return (
        <div 
          key={index}
          className="w-full max-w-[318px] h-[200px] cursor-pointer"
          onClick={() => handleCardClick(option.value)}
        >
          <Card
            className={`w-full h-full border-0 rounded-[20px] shadow-md ${isSelected ? 'ring-2 ring-blue-500' : ''}`}
          >
            <CardContent className="p-0 h-full">
              <div className="p-5 h-full flex flex-col justify-between">
                {option.icon ? (
                  <div className="w-[90px] h-[90px] bg-[#f5f6ff] rounded-[45px] flex items-center justify-center mt-[22px] ml-[22px]">
                    <Image
                      src="/FORgroup.png"
                      alt="Question mark"
                      width={48}
                      height={54}
                      className="w-12 h-[54px]"
                      quality={100}
                    />
                  </div>
                ) : (
                  <div className="mt-5 ml-[22px] font-bold text-6xl text-[#6FA7FF]">
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
          className="w-full max-w-[318px] h-[200px] cursor-pointer"
          onClick={() => handleCardClick(option.value)}
        >
          <Card
            className={`w-full h-full border-0 rounded-[20px] shadow-md ${isSelected ? 'ring-2 ring-blue-500' : ''}`}
          >
            <CardContent className=" p-0 h-full ">
              <div className="p-5 h-full flex flex-col justify-between">
                {option.icon ? (
                  <div className="w-[90px] h-[90px] bg-[#f5f6ff] rounded-[45px] flex items-center justify-center mt-[2px] ml-[22px]">
                    <Image
                      src="/FORgroup.png"
                      alt="Question mark"
                      width={48}
                      height={54}
                      className="w-12 h-[54px]"
                      quality={100}
                    />
                  </div>
                ) : option.image && (
                  <div className="relative bottom-[20px] w-full h-[120px]">
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

  const renderInstallationOptions = () => (
    installationOptions.map((option) => {
      const isSelected = answers.installation === option.id;
      
      return (
        <div 
          key={option.id}
          className="w-[318px] h-[200px] cursor-pointer"
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
    })
  );

  const renderPricingTiers = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
      {pricingTiers.map((tier, index) => (
        <div 
          key={index} 
          className={index === 2 ? "md:col-span-2 flex justify-center" : "md:col-span-1"}
        >
          <Card className="w-[550px] border border-solid border-[#dddddd] rounded-[20px] shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] overflow-hidden">
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
                  className="w-full h-[68px] rounded-2xl shadow-[0px_22px_44px_0px_rgba(32,124,254,0.4)] bg-[linear-gradient(180deg,#73a8ff_0%,#6fa7ff_37%,#3c6cec_100%)]"
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

  const renderGiftsSection = () => (
    <div className="absolute w-[594px] h-[377px] bottom-[300px] right-0">
      <div className="absolute w-[546px] h-72 top-[89px] left-0 rounded-[20px] bg-[linear-gradient(159deg,#243057_0%,#374255_100%)]">
        <h3 className="absolute top-[30px] left-[30px] font-bold text-white text-2xl">
          Ваши подарки в конце
        </h3>
        <div className="flex flex-col items-start gap-5 absolute top-[96px] left-[30px]">
          <div className="relative w-[378px] h-14">
            <p className="absolute top-1 left-[84px] font-normal text-white text-base">
              3d проект вашего шатра под размеры
              <br />и оснащение
            </p>
            <Image
              src="/FORstar-tent-h02-1.png"
              alt="Star tent"
              width={75}
              height={56}
              className="absolute w-[75px] h-[56px] top-[-3px] left-0"
              quality={100}
            />
          </div>
          <div className="relative w-[395px] h-20">
            <p className="absolute w-[309px] top-[17px] left-[84px] font-normal text-white text-base">
              Примеры уже готовых шатров схожими
              <br />с вашими задачами
            </p>
            <div className="absolute w-[62px] h-20 top-0 left-0">
              <Image
                className="absolute w-9 h-9 top-[29px] left-[13px] object-cover"
                alt="Img"
                src="/fc3740fa54440e5eaefe94690ddc2643-4.png"
                width={36}
                height={36}
              />
            </div>
          </div>
        </div>
      </div>
      <Image
        className="absolute w-[232px] h-[272px] top-0 left-[362px]"
        alt="Gifts"
        src="/gifts3-------1.png"
        width={232}
        height={272}
      />
    </div>
  );

  // Main renderer
  const getQuestionContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="flex flex-col items-start gap-6 mb-12 relative">
            <h2 className="font-bold text-[#394355] text-xl">
              1. Какая вместимость?
            </h2>

            <RadioGroup 
              value={answers.capacity}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
            >
              {renderCapacityOptions()}
            </RadioGroup>

            {renderGiftsSection()}
          </div>
        );
      
      case 2:
        return (
          <div className="flex flex-col items-start gap-6 mb-12 relative">
            <h2 className="font-bold text-[#394355] text-xl">
              2. Где будет использоваться шатер?
            </h2>

            <RadioGroup 
              value={answers.usage}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
            >
              {renderTentUsageOptions()}
            </RadioGroup>

            {renderGiftsSection()}
          </div>
        );
      
      case 3:
        return (
          <div className="relative w-full max-w-[1366px] mx-auto">
            <div className="w-full">
              <div className="w-full">
                <div className="flex flex-col w-[627px] items-start gap-6 pt-[52px]">
                  <h5 className="w-full font-semibold text-4xl">
                    <span className="text-[#527dc5]">
                      Нужен шатер под свои размеры,{" "}
                    </span>
                    <span className="text-[#232c42]">форму или дизайн?</span>
                  </h5>
                  <p className="font-medium text-[#4f5d80] text-lg">
                    Спроектируем и изготовим с гарантией 50 лет
                  </p>
                </div>

                <div className="flex flex-col items-start gap-3 px-6 py-3 mt-[75px] bg-[#f2f4f7] rounded-[10px] max-w-[627px]">
                  <p className="font-semibold text-[#4f5d80] text-base">
                    Получите расчет цены шатра в 3х вариантах ответив на 3 вопроса
                  </p>
                  <Progress
                    value={100}
                    className="w-[579px] h-2.5 bg-[#4f5d802b] rounded [&>div]:bg-[#6FA7FF]"
                  />
                  <p className="font-medium text-[#4f5d80] text-lg">
                    3 из 3
                  </p>
                </div>

                <div className="flex flex-col items-start gap-6 mt-[50px]">
                  <h2 className="font-bold text-[#394355] text-xl">
                    3. В какой срок необходимо установить шатер?
                  </h2>
                  <RadioGroup 
                    value={answers.installation}
                    className="flex items-start gap-6"
                  >
                    {renderInstallationOptions()}
                  </RadioGroup>
                </div>
              </div>
              <div className="relative bottom-[10px]">
                {renderGiftsSection()}
              </div>

              <div className="flex justify-center mt-[40px]">
                <Button 
                  onClick={handleNext}
                  className="w-[412px] h-[68px] rounded-2xl shadow-[0px_22px_44px_0px_rgba(32,124,254,0.4)] bg-[linear-gradient(180deg,#73a8ff_0%,#6fa7ff_37%,#3c6cec_100%)]"
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

              <div className="absolute top-0 left-150 w-full z-0">
                {renderPricingTiers()}
              </div>
            </div>

            <div className="mt-16">
              <div className="flex flex-col w-full max-w-[570px] items-start py-[85px] pl-12">
                <div className="flex flex-col items-start gap-[45px]">
                  <div className="flex flex-col w-full max-w-[627px] items-start gap-6">
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
                    <div className="flex flex-col w-full max-w-[544px] items-start gap-6">
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
                        >
                          <span className="font-semibold text-white text-base text-center">
                            Получить точный расчет и подарки
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
    <main className="relative w-full max-w-[1440px] right-[90px] mx-auto bg-white">
      <section className="px-12 pt-[33px] pb-12">
        <div className="max-w-[1368px] mx-auto">
          {step < 3 && (
            <>
              <div className="flex flex-col w-full max-w-[627px] items-start gap-6 mb-12">
                <h5 className="font-semibold text-4xl">
                  <span className="text-[#527dc5]">
                    Нужен шатер под свои размеры,{" "}
                  </span>
                  <span className="text-[#232c42]">форму или дизайн?</span>
                </h5>
                <p className="font-medium text-[#4f5d80] text-lg">
                  Спроектируем и изготовим с гарантией 50 лет
                </p>
              </div>

              <div className="flex flex-col items-start gap-3 p-6 bg-[#f2f4f7] rounded-[10px] max-w-[627px] mb-12">
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
                className="w-[412px] h-[68px] rounded-2xl shadow-[0px_22px_44px_0px_rgba(32,124,254,0.4)] bg-[linear-gradient(180deg,#73a8ff_0%,#6fa7ff_37%,#3c6cec_100%)] font-semibold text-white text-base"
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

    </main>
  );  
};