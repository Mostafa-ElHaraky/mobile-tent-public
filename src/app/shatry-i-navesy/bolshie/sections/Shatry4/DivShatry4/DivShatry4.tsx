'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from "lucide-react";
import { Button } from "../../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../../components/ui/card";
import { ReactElement } from 'react';
import Image from 'next/image';
import Askcontact from '../../../../../../components/ui/Askcontact';
import { useEffect, useRef } from 'react';

export const DivShatry4 = (): ReactElement => {
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [showAskContact, setShowAskContact] = useState(false);
  const thumbRowRef = useRef<HTMLDivElement | null>(null);

  // Keyboard navigation for gallery
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key.toLowerCase() === 'escape') {
        setShowThankYouModal(false);
        setShowAskContact(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Navigation handler with Ctrl/Cmd-click support
  const handleNavigation = useCallback((path: string, event: React.MouseEvent) => {
    if (event.ctrlKey || event.metaKey) {
      window.open(path, '_blank', 'noopener,noreferrer');
    } else {
      router.push(path);
    }
  }, [router]);

  // Data for the service cards (updated for большие шатры)
  const serviceCards = [
    { title: "Тип конструкции", content: "Большой шатер 10×20 м" },
    { title: "Локация", content: "Москва, Крокус Экспо" },
    { title: "Срок монтажа", content: "3 дня" },
    { title: "Площадь покрытия", content: "200 м²" },
  ];

  // “Сделали” section items — обновлено для больших шатров
  const accomplishments = [
    "Разработали индивидуальный дизайн большого шатра с учетом брендинга клиента и особенностей выставочной площадки.",
    "Изготовили усиленный каркас и ПВХ-тент 900 г/м² для обеспечения надежности при ветровых нагрузках.",
    "Выполнили доставку, монтаж и подключение освещения за 3 дня, провели инструктаж для персонала."
  ];

  // About company (обновлено для больших шатров)
  const aboutCompany = {
    title: "Экспертиза в больших шатрах",
    paragraphs: [
      "Основная специализация компании «MOBILE TENT» — изготовление больших шатров на заказ. Мы помогаем организовывать масштабные мероприятия на открытом воздухе — от выставок и фестивалей до корпоративных праздников — и надежно защищаем их от ветра, дождя и солнца.",
      "В Москве немного компаний, способных реализовать проекты с шатрами большого размера площадью от 100 до 1000+ м². Мы берем на себя полный комплекс задач: от проектирования до монтажа и сервисного обслуживания.",
      "Большие шатры — наша основа, но мы предлагаем куда больше: брендирование, освещение, отопление и полное оснащение вашего мероприятия."
    ]
  };

  // Preview images (оставляем как есть, можно заменить на фото больших шатров)
  const previewImages = [
    "/10x30,1.webp",
    "/10x30,2.webp",
    "/10x30,4.webp",
    "/10x30,1.webp",
  ];

  // Navigation handlers
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % previewImages.length);
    thumbRowRef.current?.scrollBy({ left: 140, behavior: 'smooth' });
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + previewImages.length) % previewImages.length);
    thumbRowRef.current?.scrollBy({ left: -140, behavior: 'smooth' });
  };

  const selectImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <>
      {/* Desktop Version */}
      <section
        aria-label="Кейсы больших шатров MOBILE TENT"
        className="hidden md:block w-full py-16 relative top-[25px] rounded-[30px] bg-[linear-gradient(108.32deg,_#243057_-27.58%,_#435575_107.93%)]"
      >
        {/* Thank You Letter Modal */}
        {showThankYouModal && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setShowThankYouModal(false)}
          >
            <div
              className="relative max-w-4xl max-h-[90vh] w-full bg-white rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="Благодарственное письмо"
            >
              <Image
                src="/bp-2-gigapixel-standard v2-2x.webp"
                alt="Скан благодарственного письма клиента за большой шатер"
                width={800}
                height={600}
                className="w-full h-auto object-contain"
                loading="lazy"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 bg-white/80 rounded-full hover:bg-white"
                onClick={() => setShowThankYouModal(false)}
                aria-label="Закрыть модальное окно"
              >
                <XIcon className="h-6 w-6 text-black" />
              </Button>
              <div className="absolute bottom-4 left-4 bg-white/80 px-4 py-2 rounded-lg">
                <span className="font-bold text-black">Благодарственное письмо</span>
              </div>
            </div>
          </div>
        )}

        {/* Ask Contact Modal */}
        {showAskContact && <Askcontact onClose={() => setShowAskContact(false)} />}

        <div className="flex flex-col md:flex-row gap-12 ml-8">
          {/* Left column: text content */}
          <div className="flex flex-col gap-[60px]">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-3">
                  <p className="font-medium text-[#ffffff] text-lg leading-6 [font-family:'Raleway',Helvetica]">
                    Более 60% клиентов заказывают большие шатры повторно
                  </p>
                </div>

                <h2 className="w-[528px] [font-family:'Raleway',Helvetica] text-4xl leading-normal">
                  <span className="font-medium text-[#ffffff]">
                    Реализованные проекты{" "}
                  </span>
                  <span className="font-bold text-[#527dc5]">больших шатров</span>
                </h2>
              </div>

              <p className="w-[496px] font-semibold text-[#ffffff] text-base leading-6 [font-family:'Raleway',Helvetica]">
                «Заказывали большой шатер для выставки в Крокусе — конструкция выдержала сильный ветер, монтаж за 2 дня. Будем работать дальше».
              </p>
            </div>

            {/* About company (обновлено) */}
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-[#ffffff] text-base leading-6 [font-family:'Raleway',Helvetica]">
                {aboutCompany.title}
              </h3>
              <div className="flex flex-col gap-3 text-[#ffffff] text-sm leading-6 [font-family:'Raleway',Helvetica]">
                {aboutCompany.paragraphs.map((t, i) => (
                  <p key={i} className="w-[528px]">{t}</p>
                ))}
              </div>
            </div>

            {/* Task & Done */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <h3 className="font-bold text-[#ffffff] text-base leading-6 [font-family:'Raleway',Helvetica]">
                  Задача
                </h3>
                <p className="w-[418px] font-normal text-[#ffffff] text-sm leading-5 [font-family:'Raleway',Helvetica]">
                  Обеспечить надежное укрытие для выставочного стенда площадью 200 м² с учетом брендирования, 
                  интенсивных потоков посетителей и ограниченного времени на монтаж (3 дня).
                </p>
              </div>

              <div className="flex flex-col gap-5">
                <h3 className="font-bold text-[#ffffff] text-base leading-6 [font-family:'Raleway',Helvetica]">
                  Сделали
                </h3>
                <div className="flex flex-col gap-4">
                  {accomplishments.map((text, index) => (
                    <div key={index} className="flex items-start gap-6">
                      <div className="relative w-6 h-6" aria-hidden>
                        <Image
                          className="absolute w-6 h-[17px] top-[3px] left-0"
                          alt=""
                          src={`/GROP-${index + 4}.webp`}
                          width={24}
                          height={17}
                          loading="lazy"
                        />
                      </div>
                      <p className="w-[358px] font-normal text-[#ffffff] text-sm leading-5 [font-family:'Raleway',Helvetica]">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom: review + letter */}
            <div className="flex items-center gap-[33px] mt-12">
              <Button
                variant="outline"
                className="flex items-center gap-[15px] border-0 px-6 py-8 bg-white rounded-[50px] shadow backdrop-blur-[79px]"
                onClick={(e) => handleNavigation('/reviews', e)}
                aria-label="Смотреть отзыв о большом шатре"
              >
                <div className="relative w-[50px] h-[50px]" aria-hidden>
                  <div className="relative w-[35px] h-[35px] top-2 left-2 bg-[url(/GROP-9.webp)] bg-[100%_100%]" />
                </div>
                <span className="font-bold text-[#000000] text-base [font-family:'Raleway',Helvetica]">
                  Смотреть отзыв
                </span>
              </Button>

              <button
                className="flex items-center gap-[18px] cursor-pointer group"
                onClick={() => setShowThankYouModal(true)}
                aria-label="Открыть благодарственное письмо"
              >
                <Image
                  className="relative w-[86px] h-[62px] mt-[-54px] mb-[-62px] ml-[-18px] backdrop-blur-[79px] object-cover group-hover:scale-105 transition-transform"
                  alt="Миниатюра благодарственного письма"
                  src="/bp-2-gigapixel-standard v2-2x.webp"
                  width={86}
                  height={62}
                  loading="lazy"
                />
                <span className="w-[180px] font-semibold text-[#ffffff] text-base leading-5 [font-family:'Raleway',Helvetica] underline-offset-2 group-hover:underline">
                  Благодарственное письмо
                </span>
              </button>
            </div>

            {/* Contact CTA */}
            <div className="flex flex-col gap-3 mt-6">
              <p className="w-[412px] font-normal text-[#ffffff] text-xs text-center [font-family:'Raleway',Helvetica]">
                Свяжитесь с нашими клиентами, чтобы узнать об опыте использования больших шатров
              </p>
              <Button
                className="w-[412px] h-[68px] rounded-2xl [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]"
                onClick={() => setShowAskContact(true)}
                aria-label="Запросить контакты"
              >
                <span className="font-semibold text-white text-base text-center [font-family:'Raleway',Helvetica]">
                  Запросить контакты
                </span>
              </Button>
            </div>
          </div>

          {/* Right column: gallery + cards */}
          <div className="flex flex-col">
            {/* Thumbnails */}
            <div
              className="flex gap-4 mb-4 ml-[-20px]"
              role="listbox"
              aria-label="Превью фотографий больших шатров"
            >
              {previewImages.map((image, index) => {
                const selected = currentImageIndex === index;
                return (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Показать фото большого шатра ${index + 1}`}
                    aria-selected={selected}
                    role="option"
                    tabIndex={0}
                    onClick={() => selectImage(index)}
                    className={`relative bottom-[20px] w-[182px] h-[120px] rounded-[10px] overflow-hidden cursor-pointer transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500 ${selected ? 'ring-4 ring-blue-500 scale-105' : 'opacity-80 hover:opacity-100'}`}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={image}
                        alt={`Превью большого шатра ${index + 1}`}
                        className="object-cover"
                        fill
                        loading="lazy"
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Main image */}
            <div className="relative w-full">
              <div
                className="relative w-[808px] h-[785px] -top-2.5 left-[-38px] rounded-[30px] overflow-hidden"
                role="region"
                aria-live="polite"
                aria-label={`Главное фото большого шатра ${currentImageIndex + 1} из ${previewImages.length}`}
              >
                <Image
                  src={previewImages[currentImageIndex]}
                  alt="Большой шатер от производителя MOBILE TENT"
                  className="object-cover"
                  fill
                  priority
                />

                {/* Nav buttons */}
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute top-1/2 left-4 p-4 bg-white/90 rounded-full border-0 shadow-lg hover:bg-white transition-all duration-300 transform -translate-y-1/2 w-12 h-12"
                  onClick={prevImage}
                  aria-label="Предыдущее изображение большого шатра"
                >
                  <ChevronLeftIcon className="h-6 w-6 text-blue-600" />
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  className="absolute top-1/2 right-4 p-4 bg-white/90 rounded-full border-0 shadow-lg hover:bg-white transition-all duration-300 transform -translate-y-1/2 w-12 h-12"
                  onClick={nextImage}
                  aria-label="Следующее изображение большого шатра"
                >
                  <ChevronRightIcon className="h-6 w-6 text-blue-600" />
                </Button>

                {/* Action buttons */}
                <Button
                  variant="outline"
                  className="h-[60px] absolute top-[633px] left-[66px] border-0 inline-flex items-center gap-2.5 pl-6 pr-3 py-3 bg-white rounded-[50px] shadow backdrop-blur-[79px]"
                  onClick={(e) => handleNavigation('/gallery/bolshie-shatry', e)}
                >
                  <span className="font-bold text-[#000000] text-base [font-family:'Raleway',Helvetica]">
                    Смотреть кейс большого шатра
                  </span>
                  <Image
                    alt="Стрелка"
                    src="/FRAME-4.webp"
                    width={24}
                    height={24}
                    loading="lazy"
                  />
                </Button>

                <Button
                  className="h-[60px] absolute top-[633px] left-[548px] inline-flex items-center gap-2.5 pl-6 pr-3 py-3 bg-[#ffffff] rounded-[50px] border-0 shadow backdrop-blur-[79px]"
                  onClick={(e) => handleNavigation('/gallery/bolshie-shatry', e)}
                >
                  <span className="font-bold text-black text-base [font-family:'Raleway',Helvetica]">
                    Ещё проекты
                  </span>
                  <Image
                    alt="Стрелка"
                    src="/FRAME-4.webp"
                    width={24}
                    height={24}
                    loading="lazy"
                  />
                </Button>
              </div>
            </div>

            {/* Info cards - обновлено для больших шатров */}
            <div className="flex gap-4 mt-6 ml-[-38px]">
              {serviceCards.map((card, index) => (
                <Card
                  key={index}
                  className="w-[182px] rounded-[20px] border border-solid border-[#d3d3d3] bg-transparent"
                >
                  <CardContent className="flex flex-col items-center justify-center h-[85px] gap-1.5 p-5">
                    <div className="font-semibold text-[#ffffff] text-base text-center leading-5 [font-family:'Raleway',Helvetica]">
                      {card.title}
                    </div>
                    <div className="font-normal text-[#ffffff] text-base text-center leading-5 [font-family:'Raleway',Helvetica]">
                      {card.content}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Version - обновлено для больших шатров */}
      <section className="md:hidden w-full py-8 px-4 relative rounded-[20px] bg-[linear-gradient(108.32deg,_#243057_-27.58%,_#435575_107.93%)]">
        {/* Thank You Letter Modal */}
        {showThankYouModal && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setShowThankYouModal(false)}
          >
            <div
              className="relative max-w-4xl max-h-[90vh] w-full bg-white rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="Благодарственное письмо"
            >
              <Image
                src="/bp-2-gigapixel-standard v2-2x.webp"
                alt="Скан благодарственного письма за большой шатер"
                width={800}
                height={600}
                className="w-full h-auto object-contain"
                loading="lazy"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 bg-white/80 rounded-full hover:bg-white"
                onClick={() => setShowThankYouModal(false)}
                aria-label="Закрыть"
              >
                <XIcon className="h-6 w-6 text-black" />
              </Button>
              <div className="absolute bottom-4 left-4 bg-white/80 px-4 py-2 rounded-lg">
                <span className="font-bold text-black">Благодарственное письмо</span>
              </div>
            </div>
          </div>
        )}

        {/* Ask Contact Modal */}
        {showAskContact && <Askcontact onClose={() => setShowAskContact(false)} />}

        <div className="flex flex-col gap-8">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <p className="font-medium text-[#ffffff] text-lg leading-6 [font-family:'Raleway',Helvetica]">
              Более 60% клиентов заказывают большие шатры повторно
            </p>

            <h2 className="[font-family:'Raleway',Helvetica] text-3xl leading-normal">
              <span className="font-medium text-[#ffffff]">
                Реализованные проекты{" "}
              </span>
              <span className="font-bold text-[#527dc5]">больших шатров</span>
            </h2>

            <p className="font-semibold text-[#ffffff] text-base leading-6 [font-family:'Raleway',Helvetica]">
              «Заказывали большой шатер для выставки — конструкция выдержала сильный ветер, монтаж за 2 дня».
            </p>
          </div>

          {/* About company (обновлено) */}
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-[#ffffff] text-base leading-6 [font-family:'Raleway',Helvetica]">
              {aboutCompany.title}
            </h3>
            <div className="flex flex-col gap-2 text-[#ffffff] text-sm leading-6 [font-family:'Raleway',Helvetica]">
              {aboutCompany.paragraphs.map((t, i) => (
                <p key={i}>{t}</p>
              ))}
            </div>
          </div>

          {/* Task & Done */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-[#ffffff] text-base leading-6 [font-family:'Raleway',Helvetica]">
                Задача
              </h3>
              <p className="font-normal text-[#ffffff] text-sm leading-5 [font-family:'Raleway',Helvetica]">
                Обеспечить надежное укрытие для выставочного стенда 200 м² с брендированием и быстрым монтажом.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <h3 className="font-bold text-[#ffffff] text-base leading-6 [font-family:'Raleway',Helvetica]">
                Сделали
              </h3>
              <div className="flex flex-col gap-4">
                {accomplishments.map((text, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="relative w-6 h-6" aria-hidden>
                      <Image
                        className="absolute w-6 h-[17px] top-[3px] left-0"
                        alt=""
                        src={`/GROP-${index + 4}.webp`}
                        width={24}
                        height={17}
                        loading="lazy"
                      />
                    </div>
                    <p className="font-normal text-[#ffffff] text-sm leading-5 [font-family:'Raleway',Helvetica]">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Review + letter */}
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="flex items-center gap-3 border-0 px-6 py-4 bg-white rounded-[50px] shadow backdrop-blur-[79px]"
              onClick={(e) => handleNavigation('/reviews', e)}
              aria-label="Смотреть отзыв о большом шатре"
            >
              <div className="relative w-[30px] h-[30px]" aria-hidden>
                <div className="relative w-[25px] h-[25px] top-[2px] left-[2px] bg-[url(/GROP-9.webp)] bg-[100%_100%]" />
              </div>
              <span className="font-bold text-[#000000] text-sm [font-family:'Raleway',Helvetica]">
                Смотреть отзыв
              </span>
            </Button>

            <button
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => setShowThankYouModal(true)}
              aria-label="Открыть благодарственное письмо"
            >
              <Image
                className="relative w-[60px] h-[45px] backdrop-blur-[79px] object-cover group-hover:scale-105 transition-transform"
                alt="Миниатюра письма"
                src="/bp-2-gigapixel-standard v2-2x.webp"
                width={60}
                height={45}
                loading="lazy"
              />
              <span className="w-[150px] font-semibold text-[#ffffff] text-sm leading-5 [font-family:'Raleway',Helvetica] underline-offset-2 group-hover:underline">
                Благодарственное письмо
              </span>
            </button>
          </div>

          {/* Main image */}
          <div className="relative w-full">
            <div
              className="relative w-full h-[300px] rounded-[20px] overflow-hidden"
              role="region"
              aria-live="polite"
              aria-label={`Главное фото большого шатра ${currentImageIndex + 1} из ${previewImages.length}`}
            >
              <Image
                src={previewImages[currentImageIndex]}
                alt="Большой шатер MOBILE TENT"
                className="object-cover"
                fill
                loading="lazy"
              />

              <Button
                variant="outline"
                size="icon"
                className="absolute top-1/2 left-2 p-2 bg-white/90 rounded-full border-0 shadow-lg hover:bg-white transition-all duration-300 transform -translate-y-1/2 w-10 h-10"
                onClick={prevImage}
                aria-label="Предыдущее изображение"
              >
                <ChevronLeftIcon className="h-5 w-5 text-blue-600" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="absolute top-1/2 right-2 p-2 bg-white/90 rounded-full border-0 shadow-lg hover:bg-white transition-all duration-300 transform -translate-y-1/2 w-10 h-10"
                onClick={nextImage}
                aria-label="Следующее изображение"
              >
                <ChevronRightIcon className="h-5 w-5 text-blue-600" />
              </Button>
            </div>

            {/* Thumbnails */}
            <div
              ref={thumbRowRef}
              className="flex gap-2 mt-4 overflow-x-auto pb-2"
              role="listbox"
              aria-label="Превью фотографий больших шатров"
            >
              {previewImages.map((image, index) => {
                const selected = currentImageIndex === index;
                return (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Показать фото большого шатра ${index + 1}`}
                    aria-selected={selected}
                    role="option"
                    tabIndex={0}
                    onClick={() => selectImage(index)}
                    className={`relative w-[100px] h-[70px] rounded-[8px] overflow-hidden cursor-pointer transition-all duration-300 flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-blue-500 ${selected ? 'ring-2 ring-blue-500 scale-105' : 'opacity-80 hover:opacity-100'}`}
                  >
                    <Image
                      src={image}
                      alt={`Превью большого шатра ${index + 1}`}
                      className="object-cover"
                      fill
                      loading="lazy"
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Info cards - обновлено */}
          <div className="grid grid-cols-2 gap-3 mt-4">
            {serviceCards.map((card, index) => (
              <Card
                key={index}
                className="w-full rounded-[15px] border border-solid border-[#d3d3d3] bg-transparent"
              >
                <CardContent className="flex flex-col items-center justify-center h-[70px] gap-1 p-3">
                  <div className="font-semibold text-[#ffffff] text-sm text-center leading-5 [font-family:'Raleway',Helvetica]">
                    {card.title}
                  </div>
                  <div className="font-normal text-[#ffffff] text-sm text-center leading-5 [font-family:'Raleway',Helvetica]">
                    {card.content}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3 mt-4">
            <Button
              variant="outline"
              className="h-[50px] w-full border-0 inline-flex items-center justify-between px-4 py-3 bg-white rounded-[50px] shadow backdrop-blur-[79px]"
              onClick={(e) => handleNavigation('/gallery/bolshie-shatry', e)}
            >
              <span className="font-bold text-[#000000] text-sm [font-family:'Raleway',Helvetica]">
                Смотреть кейс большого шатра
              </span>
              <Image
                alt="Стрелка"
                src="/FRAME-4.webp"
                width={20}
                height={20}
                loading="lazy"
              />
            </Button>

            <Button
              className="h-[50px] w-full inline-flex items-center justify-between px-4 py-3 bg-[#ffffff] rounded-[50px] border-0 shadow backdrop-blur-[79px]"
              onClick={(e) => handleNavigation('/gallery/bolshie-shatry', e)}
            >
              <span className="font-bold text-black text-sm [font-family:'Raleway',Helvetica]">
                Ещё проекты
              </span>
              <Image
                alt="Стрелка"
                src="/FRAME-4.webp"
                width={20}
                height={20}
                loading="lazy"
              />
            </Button>
          </div>

          {/* Contact CTA */}
          <div className="flex flex-col gap-3 mt-6">
            <p className="font-normal text-[#ffffff] text-xs text-center [font-family:'Raleway',Helvetica]">
              Свяжитесь с нашими клиентами, чтобы узнать об опыте использования больших шатров
            </p>
            <Button
              className="w-full h-[50px] rounded-2xl [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]"
              onClick={() => setShowAskContact(true)}
              aria-label="Запросить контакты"
            >
              <span className="font-semibold text-white text-sm text-center [font-family:'Raleway',Helvetica]">
                Запросить контакты
              </span>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};