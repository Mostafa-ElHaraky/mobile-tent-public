'use client';

import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { ReactElement, useState, useCallback } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const Services4 = (): ReactElement => {
  const router = useRouter();
  const [phone, setPhone] = useState('+7');
  const [error, setError] = useState('');

  const benefits = [
    {
      id: 1,
      icon: "/element8-15.png",
      text: (
        <>
          <span className="font-semibold">
            Расскажет, как не попасть на уловки нечестных компаний,
          </span>{" "}
          которые могут привести к печальным последствиям. Они не только в
          стоимости
        </>
      ),
    },
    {
      id: 2,
      icon: "/element8-16.png",
      text: (
        <>
          На примерах{" "}
          <span className="font-semibold">
            покажет отличия качественного и некачественного шатра
          </span>
        </>
      ),
    },
    {
      id: 3,
      icon: "/element8-17.png",
      text: (
        <>
          <span className="font-semibold">
            Ответит на вопросы и подберет лучшие материалы
          </span>{" "}
          для ваших условий эксплуатации
        </>
      ),
    },
  ];

  const handlePhoneChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    
    // Allow only numbers, +, -, (), and space
    const sanitized = input.replace(/[^0-9+\-() ]/g, '');
    
    // Always keep +7 prefix
    if (!sanitized.startsWith('+7')) {
      // If user tries to delete prefix, keep it
      if (sanitized.length <= 2) {
        setPhone('+7');
        return;
      }
      
      // If pasted number starts with 7 or 8, convert to +7
      if (/^[78]/.test(sanitized)) {
        const digits = sanitized.replace(/[^0-9]/g, '').substring(1);
        setPhone('+7' + digits.substring(0, 10));
        return;
      }
      
      // Otherwise force +7 prefix
      setPhone('+7' + sanitized.replace(/[^0-9]/g, '').substring(0, 10));
      return;
    }
    
    // Limit length to 16 characters (including formatting)
    if (sanitized.length > 16) return;
    
    setPhone(sanitized);
    setError('');
  }, []);

  const handleSubmit = () => {
    // Clean phone number - remove all non-digit characters
    const cleanPhone = phone.replace(/\D/g, '');
    
    // Validate Russian phone number format
    if (!cleanPhone.startsWith('7') || cleanPhone.length !== 11) {
      setError('Введите корректный российский номер (+7 XXX XXX-XXXX)');
      return;
    }
    
    // Navigate to thank you page
    router.push('/thankyou');
  };

  return (
    <div className="w-full flex justify-center">
      <section className="relative w-[1440px] h-[726px] top-[300px] right-[90px] rounded-[30px] overflow-hidden shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]">
        <div className="relative h-[718px] mt-1">
          <div className="absolute w-full h-[629px] top-[89px] left-0 rounded-[30px] [background:linear-gradient(180deg,rgba(245,246,255,1)_0%,rgba(245,246,255,0)_100%)]" />

          <Image
            className="absolute w-[302px] h-[322px] top-[284px] left-0"
            alt="Vecteezy overgrown"
            src="/element8-vecteezy-overgrown-green-grass-generative-ai-generated-24190129--1.png"
            width={302}
            height={322}
           
          />

          <Image
            className="absolute w-[498px] h-[565px] top-[129px] right-0"
            alt="Event tent"
            src="/element8-event-tent-i02-1.png"
            width={498}
            height={565}
           
          />

          <div className="flex flex-col items-start gap-[55px] absolute top-[172px] left-[63px]">
            <div className="flex flex-col items-start gap-6">
              <h2 className="w-[707px] mt-[-1.00px] font-semibold text-4xl leading-[normal] [font-family:'Raleway',Helvetica] tracking-[0]">
                <span className="text-[#527dc5]">
                  Получите экспертную консультацию
                  <br />
                </span>
                <span className="text-[#232c42]">
                  по покупке шатра с оценкой стоимости и сроков
                </span>
              </h2>
            </div>

            <div className="flex flex-col items-start gap-6">
              <div className="flex flex-col w-[560px] gap-[51px] items-start">
                {benefits.map((benefit) => (
                  <div key={benefit.id} className="flex items-center gap-3">
                    <div className="relative w-6 h-6">
                      <Image
                        className="absolute w-6 h-[17px] top-[3px] left-0"
                        alt="Check icon"
                        src={benefit.icon}
                        width={24}
                        height={17}
                       
                      />
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
            className="absolute w-[516px] h-[718px] top-0 right-[116px] object-cover"
            alt="Confident young businessman"
            src="/element8-confident-young-businessman-in-blue-shirt-and-glasses-smiling-at.png"
            width={516}
            height={718}
           
          />

          <Card className="inline-flex items-center justify-center gap-2.5 px-6 py-3 absolute top-[598px] right-[176px] rounded-2xl overflow-hidden [background:linear-gradient(159deg,rgba(36,48,87,1)_0%,rgba(55,66,85,1)_100%)] border-none">
            <CardContent className="p-0">
              <div className="flex flex-col items-center justify-center gap-1.5">
                <div className="w-fit mt-[-1.00px] font-semibold text-white text-lg text-center leading-6 whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                  Евгений Петров
                </div>
                <div className="w-fit font-medium text-white text-base text-center leading-6 whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                  Эксперт по тентовым конструкциям
                </div>
              </div>
            </CardContent>
          </Card>

          <Image
            className="absolute w-[359px] h-[306px] top-[412px] right-[-150px]"
            alt="Vecteezy overgrown"
            src="/element8-vecteezy-overgrown-green-grass-generative-ai-generated-24190129--2.png"
            width={359}
            height={306}
           
          />

          <div className="flex items-end gap-4 absolute top-[600px] left-[63px]">
            <Card className="flex w-[349px] h-[67px] items-start gap-4 relative rounded-2xl overflow-hidden border-solid border-neutral-200 shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] p-0 border-0">
              <CardContent className="p-0 w-full h-full">
                <div className="flex w-full h-full items-center gap-2 pl-3 pr-2 py-2 bg-white rounded-2xl overflow-hidden">
                  <Input
                    className="border-none shadow-none w-full [font-family:'Raleway',Helvetica] font-normal text-label-colorslc-l-secondary text-[17px] tracking-[-0.41px] leading-[22px]"
                    placeholder="+7 (XXX) XXX-XXXX"
                    value={phone}
                    onChange={handlePhoneChange}
                    inputMode="tel"
                  />
                </div>
              </CardContent>
            </Card>

            <Button 
              className="w-[262px] h-[68px] rounded-2xl border-[none] shadow-2 [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] font-semibold text-white text-base text-center leading-[normal] whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]"
              onClick={handleSubmit}
            >
              Получить консультацию
            </Button>
          </div>
          
          {error && (
            <div className="absolute top-[670px] left-[63px] text-red-500 text-sm mt-1">
              {error}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};