"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import Image from "next/image";

const sanitizeInput = (input: string) => {
  return input.replace(/[<>]/g, "");
};

interface CallmebackProps {
  isOpen: boolean;
  onClose: () => void;
}

const Callmeback = ({ isOpen, onClose }: CallmebackProps) => {
  const [isAgreed, setIsAgreed] = useState(false);
  const [isMarketingAgreed, setIsMarketingAgreed] = useState(false);
  const [phone, setPhone] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();

  const formData = {
    title:
      "Оставьте свой номер телефона и вам перезвонит первый освободившийся специалист",
    inputPlaceholder: "+7 (___) ___-__-__",
    buttonText: "Запросить контакты представителей",
    agreementText:
      "Нажимая на кнопку, вы соглашаетесь с Пользовательским соглашением",
    errorMessage: "Введите корректный российский номер телефона",
  };

  // Format phone number as +7 (XXX) XXX-XX-XX
  const formatPhoneNumber = useCallback((value: string): string => {
    let cleanValue = value.replace(/\D/g, "");
    
    if (cleanValue.startsWith("7") || cleanValue.startsWith("8")) {
      cleanValue = "7" + cleanValue.substring(1);
    } else if (cleanValue) {
      cleanValue = "7" + cleanValue;
    }
    
    cleanValue = cleanValue.substring(0, 11);
    if (!cleanValue) return "";
    
    let formatted = "+7";
    if (cleanValue.length > 1) {
      formatted += " (" + cleanValue.substring(1, 4);
    }
    if (cleanValue.length > 4) {
      formatted += ") " + cleanValue.substring(4, 7);
    }
    if (cleanValue.length > 7) {
      formatted += "-" + cleanValue.substring(7, 9);
    }
    if (cleanValue.length > 9) {
      formatted += "-" + cleanValue.substring(9, 11);
    }
    
    return formatted;
  }, []);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhone(formatted);
    setError("");
  };

  // Validate phone number
  useEffect(() => {
    const digitCount = phone.replace(/\D/g, "").length;
    setIsValid(!phone || digitCount === 11);
  }, [phone]);

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setPhone("");
      setIsAgreed(false);
      setIsMarketingAgreed(false);
      setIsValid(true);
      setError("");
    }
  }, [isOpen]);

  const handleSubmit = () => {
    setError("");
    const cleanPhone = phone.replace(/\D/g, "");
    
    if (!phone.trim()) {
      setError("Пожалуйста, введите ваш телефон");
      return;
    }
    if (!isValid || !cleanPhone.startsWith("7") || cleanPhone.length !== 11) {
      setError(formData.errorMessage);
      return;
    }
    if (!isAgreed) {
      setError("Вы должны согласиться с Пользовательским соглашением");
      return;
    }
    if (!isMarketingAgreed) {
      setError("Вы должны согласиться на получение информационных и маркетинговых рассылок");
      return;
    }
    
    sanitizeInput(phone);
    onClose();
    router.push("/thankyou");
  };

  // Check if form can be submitted - BOTH checkboxes must be checked
  const canSubmit = isValid && phone.replace(/\D/g, "").length === 11 && isAgreed && isMarketingAgreed;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[100] bg-black/45">
      <Card className="relative w-full max-w-[445px] bg-white rounded-[20px] border-0 shadow-[0px_24px_38px_rgba(22,29,36,0.08)] mx-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 text-gray-500 hover:text-gray-700 text-3xl font-mono"
          aria-label="Close"
        >
          ×
        </button>
        <CardContent className="px-10 pt-[60px] pb-[30px] flex flex-col items-center gap-[45px]">
          <h2 className="text-2xl font-semibold text-center text-[#232c42]">
            {formData.title}
          </h2>

          <div className="flex flex-col items-center w-full gap-5">
            <div className="w-full border-0 rounded-2xl border-neutral-200 shadow-[0px_24px_38px_rgba(22,29,36,0.08)] overflow-hidden">
              <Input
                placeholder={formData.inputPlaceholder}
                className={`w-full h-[67px] px-3 py-2 bg-white rounded-2xl border-0 text-[17px] leading-[22px] tracking-[-0.41px] ${
                  !isValid ? "text-red-500" : "text-label-colorslc-l-secondary"
                }`}
                value={phone}
                onChange={handlePhoneChange}
              />
              {(!isValid && phone) && (
                <p className="text-red-500 text-xs mt-1 px-3">
                  {formData.errorMessage}
                </p>
              )}
              {error && !phone && (
                <p className="text-red-500 text-xs mt-1 px-3">
                  {error}
                </p>
              )}
            </div>

            <Button
              disabled={!canSubmit}
              onClick={handleSubmit}
              className={`w-full h-[68px] rounded-2xl shadow-[0px_22px_44px_rgba(32,124,254,0.4)] ${
                canSubmit
                  ? "bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC] cursor-pointer hover:opacity-90"
                  : "bg-gradient-to-b from-[#cccccc] via-[#bbbbbb] to-[#999999] cursor-not-allowed"
              }`}
            >
              <span className="text-white text-base font-semibold">
                {formData.buttonText}
              </span>
            </Button>
          </div>

          {/* Checkbox 1 - Required */}
          <div className="flex items-start gap-3 mt-2">
            <button
              onClick={() => setIsAgreed(!isAgreed)}
              className={`flex items-center justify-center w-[33px] h-[33px] p-3 rounded-lg transition-colors duration-200 ${
                isAgreed
                  ? "bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
                  : "bg-white border border-gray-300"
              }`}
              aria-label="Toggle agreement"
              aria-pressed={isAgreed}
              type="button"
            >
              {isAgreed && (
                <div className="relative w-[21px] h-[21px]">
                  <Image
                    src="/right.webp"
                    alt="Checked icon"
                    width={17}
                    height={13}
                    className="absolute top-1 left-0.5"
                  />
                </div>
              )}
            </button>
            <p className="text-xs font-medium text-[#4f5d80] opacity-60 leading-normal max-w-[297px]">
              Я даю согласие на обработку{" "}
              <a href="/privacy-consent" className="text-[#73A8FF] underline">персональных данных</a>{" "}
              и согласен с{" "}
              <a href="/privacy-policy" className="text-[#73A8FF] underline">политикой конфиденциальности</a>
              <br />
              Чекбокс политики *
            </p>
          </div>

          {/* Checkbox 2 - Now Also Required */}
          <div className="flex items-start gap-3 mt-2">
            <button
              onClick={() => setIsMarketingAgreed(!isMarketingAgreed)}
              className={`flex items-center justify-center w-[33px] h-[33px] p-3 rounded-lg transition-colors duration-200 ${
                isMarketingAgreed
                  ? "bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
                  : "bg-white border border-gray-300"
              }`}
              aria-label="Toggle marketing agreement"
              aria-pressed={isMarketingAgreed}
              type="button"
            >
              {isMarketingAgreed && (
                <div className="relative w-[21px] h-[21px]">
                  <Image
                    src="/right.webp"
                    alt="Checked icon"
                    width={17}
                    height={13}
                    className="absolute top-1 left-0.5"
                  />
                </div>
              )}
            </button>
            <p className="text-xs font-medium text-[#4f5d80] opacity-60 leading-normal max-w-[297px]">
              Я даю согласие на получение{" "}
              <a href="/advertising-consent" className="text-[#73A8FF] underline">информационных и маркетинговых рассылок</a>
              <br />
              Чекбокс рассылок *
            </p>
          </div>

          {error && (isAgreed || isMarketingAgreed) && (
            <p className="text-red-500 text-sm mt-1 text-center">
              {error}
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Callmeback;