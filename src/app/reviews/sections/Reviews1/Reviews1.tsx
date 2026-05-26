'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../../../components/ui/Header';
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from '@/components/ui/dialog';

// Define types
type ReviewItem = {
  text: string;
  author: string;
  images: string[];
};

type FilterKey = 'text' | 'letters' | 'otzoviki';

type Reviews1Props = {
  seoH1: string;
  reviewsData?: {
    text?: ReviewItem[];
    letters?: ReviewItem[];
    otzoviki?: ReviewItem[];
  };
};

// Fallback data in case API fails
const fallbackReviews = [
  {
    text: "Заказывали арочный шатёр 10×20 м для ярмарки. Монтаж занял один день, конструкция уверенно выдержала порывистый ветер ~18–20 м/с и дождь. Ткань не пахнет на солнце, швы аккуратные, комплектность полная. Подсветка внутри смотрится эффектно — посетители отмечали уют.",
    author: "Максимова Н.В., генеральный директор ООО «СитиМаркет»",
    images: ["/2017-05-19 13-18-44.webp", "/2017-05-19 13-19-02.webp"],
  },
  {
    text: "Используем шатры как сезонные павильоны под кофе-поинты и мерч. Важно было, чтобы быстро ставились и так же быстро снимались. Каркас жёсткий, крепёж продуманный, инструкции ясные — бригада уложилась в сроки. После месяца эксплуатации — никаких провисаний и потертостей.",
    author: "Илья Романов, операционный директор «Event&Go»",
    images: ["/IMG-20170711-WA0006.webp", "/IMG-20170711-WA0007.webp"],
  },
  {
    text: "Нужен был качественный шатёр для спортивного турнира: брендирование, окна, перегородки. Менеджеры помогли с макетами, а производство попало в наш жёсткий дедлайн. На площадке всё подошло без подрезок. Клиент остался доволен, планируем докупить ещё два модуля к осени.",
    author: "Оксана Литвинова, руководитель проектов АНО «СпортГород»",
    images: ["/КШ 20х20.webp", "/КШ 10х10.webp"],
  },
];

const fallbackLettersReviews = [
  {
    text: "ООО «Агротех-Гарант», в лице директора Евсеева Александра Васильевича, благодарит компанию MOBILE TENT за производство качественных шатров, благодаря которым, мероприятия, проводимые нашей компанией, выглядели более презентабельно и качественно. Надеемся на дальнейшее плодотворное и взаимовыгодное сотрудничество.",
    author: "Директор ООО «Агротех-Гарант»",
    images: ["/litter1.webp"],
  },
  {
    text: "ФГБУ «Пансионат „Солнечный МЧС России» выражает благодарность за добросовестное и качественное выполнение работ в установленные сроки, внимательный подход к задачам и высокий профессионализм. Надеемся на дальнейшее плодотворное сотрудничество и желаем успехов и процветания.",
    author: "ФГБУ «Пансионат „Солнечный МЧС России",
    images: ["/bp-2-gigapixel-standard v2-2x.webp"],
  },
  {
    text: "Отдельная благодарность за консультации по выбору фундамента и ветровой нагрузке. Проект сдан в срок, замечаний по качеству нет.",
    author: "ПАО «Гамма Девелопмент»",
    images: ["/04.webp"],
  },
];

const fallbackOtzovikiReviews = [
  {
    text: "Планировали фестиваль, на котором также задумывались шатры для отдыха гостей. Было трудно найти именно надувные и с символикой нашего мероприятия. Сроки выполнения поджимали. Спасибо огромное MOBILE TENT за сверхсрочное выполнение заказа, праздник удался!",
    author: "Марина",
    images: ["/АШ20х20.webp"],
  },
  {
    text: "Покупали тент-зонт на площадку возле бассейна. Стоит действительно устойчиво и обладает хорошей водоотталкивающим свойством. От солнца и дождя самое оно. Всем довольны, спасибо.",
    author: "Виталий архитектор",
    images: ["/АШ 5х5.webp"],
  },
  {
    text: "Порадовала работа персонала компании. Сервис и продукция на высоте. Будем в дальнейшем обращаться.",
    author: "Алена менеджер",
    images: ["/5х5.webp"],
  },
];

const filterButtons = [
  { text: "Текстовые", key: "text", active: true },
  { text: "Благодарственные письма", key: "letters", active: false },
  { text: "Отзовики", key: "otzoviki", active: false },
] as const;

export const Reviews1 = ({ seoH1, reviewsData }: Reviews1Props) => {
  const catalogRef = useRef<HTMLDivElement | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterKey>("text");

  // Lightbox state
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);
  const [previewAlt, setPreviewAlt] = useState<string>("");

  const openPreview = (src: string, alt: string) => {
    setPreviewSrc(src);
    setPreviewAlt(alt);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (catalogRef.current && !catalogRef.current.contains(event.target as Node)) {
        // Handle outside click if needed
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Use Bitrix data if available, otherwise use fallback
  const currentReviews = (() => {
    const reviewsFromData = reviewsData?.[activeFilter] || [];
    
    if (reviewsFromData.length > 0) {
      return reviewsFromData;
    }
    
    // Fallback to static data
    switch (activeFilter) {
      case "text":
        return fallbackReviews;
      case "letters":
        return fallbackLettersReviews;
      case "otzoviki":
        return fallbackOtzovikiReviews;
      default:
        return fallbackReviews;
    }
  })();

  return (
    <>
      {/* ===== Desktop ===== */}
      <div className="hidden md:block w-full bg-white relative">
        <div
          className="absolute inset-x-0 top-0 h-[1196px] bg-gradient-to-b from-[#e8eef8] to-transparent z-0 pointer-events-none"
          aria-hidden
        />

        <div className="relative z-10 w-full max-w-[1440px] h-[1558px] mx-auto">
          <section className="relative h-[1558px] rounded-[0px_0px_30px_30px]">
            <div className="relative h-[1558px] overflow-hidden">
              <div className="h-[1196px]" aria-hidden />

              <Image
                src="/reviews1-08-clouds-2.webp"
                alt="Clouds background"
                width={719}
                height={643}
                className="absolute top-[194px] left-0 object-cover"
                priority
              />

              <div className="relative bottom-[118px]">
                <Header/>
              </div>

              <Image
                src="/reviews1-vecteezy-overgrown-green-grass-generative-ai-generated-24190129-.webp"
                alt="Grass foreground"
                width={318}
                height={306}
                className="absolute bottom-[295px] left-0"
              />

              <div className="relative bottom-[1400px]">
                {/* Breadcrumbs */}
                <div className="relative top-[380px] left-[60px]">
                  <div className="inline-flex items-center justify-center gap-2.5 p-1 bg-[#4f5d801a] rounded">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Raleway',Helvetica] font-normal text-[#394355] text-xs">
                      <Link href="/" className="hover:underline">Главная &gt;{"  "}</Link>
                      <span className="font-medium underline">Отзывы</span>
                    </div>
                  </div>
                </div>

                {/* Main content */}
                <div className="absolute top-[443px] left-12 flex flex-col gap-9">
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-[5px]">
                        <Image src="/reviews1-group.webp" alt="Reviews" width={25} height={25} />
                        <h2 className="font-medium text-lg text-[#4f5d80] font-raleway">Отзывы клиентов</h2>
                      </div>
                      {/* Desktop H1 */}
                      <div className="max-w-[721px] font-semibold text-3xl sm:text-4xl font-raleway">
                        <span className="text-[#232c42]">Уже </span>
                        <span className="text-[#527dc5]">800+ компаний купили</span>
                        <span className="text-[#232c42]"> наши шатры</span>
                      </div>
                    </div>

                    {/* Filters */}
                    <div className="flex flex-wrap gap-4">
                      {filterButtons.map((button) => (
                        <Button
                          key={button.key}
                          onClick={() => setActiveFilter(button.key)}
                          className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full border-0 font-semibold text-base font-raleway ${
                            activeFilter === button.key
                              ? "bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white"
                              : "bg-white text-[#394355] hover:bg-gray-100"
                          }`}
                        >
                          {button.text}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Reviews (desktop) */}
                  <div className="flex flex-col gap-6">
                    {currentReviews.map((review, index) => (
                      <Card
                        key={index}
                        className="w-[1343px] h-[326px] bg-white border-0 rounded-[20px] shadow-lg backdrop-blur-[79px] flex-none"
                      >
                        <CardContent className="p-6 h-full flex flex-row items-center justify-between gap-6">
                          {/* Left side (text) */}
                          <div className="flex-1 flex flex-col justify-center gap-4">
                            <p className="font-normal text-lg text-[#4f5d80] leading-6 font-raleway">{review.text}</p>
                            <p className="font-semibold text-lg text-[#4f5d80] leading-6 font-raleway">{review.author}</p>
                          </div>

                          {/* Right side (images in row) */}
                          <div className="flex gap-4">
                            {review.images.map((image, imgIndex) => (
                              <button
                                key={imgIndex}
                                type="button"
                                onClick={() => openPreview(image, `Просмотр изображения ${imgIndex + 1}`)}
                                className="relative w-[180px] h-[180px] rounded-lg overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3c6cec]"
                                aria-label={`Открыть изображение ${imgIndex + 1}`}
                              >
                                <Image src={image} alt={`Tent ${imgIndex + 1}`} fill className="object-cover" />
                              </button>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* ===== Mobile ===== */}
      <div className="block md:hidden w-full bg-white px-4 py-6">
        <Header/>

        {/* Breadcrumbs */}
        <div className="mt-11">
          <div className="inline-flex items-center gap-2.5 p-1 bg-[#4f5d801a] rounded">
            <div className="text-xs text-[#394355] font-raleway">
              <Link href="/" className="hover:underline">Главная &gt; </Link>
              <span className="font-medium underline">Отзывы</span>
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="mt-6">
          <div className="flex items-center gap-2">
            <Image src="/reviews1-group.webp" alt="Reviews" width={20} height={20} />
            <h2 className="text-base font-medium text-[#4f5d80] font-raleway">Отзывы клиентов</h2>
          </div>
          {/* Mobile H1 */}
          <h1 className="mt-2 text-xl font-semibold font-raleway">
            <span className="text-[#232c42]">Уже </span>
            <span className="text-[#527dc5]">800+ компаний купили</span>
            <span className="text-[#232c42]"> наши шатры</span>
          </h1>
        </div>

        {/* Filters */}
        <div className="mt-4 flex flex-wrap gap-2">
          {filterButtons.map((button) => (
            <Button
              key={button.key}
              onClick={() => setActiveFilter(button.key)}
              className={`px-3 py-1 rounded-full text-sm font-semibold font-raleway ${
                activeFilter === button.key
                  ? "bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white"
                  : "bg-white text-[#394355] border hover:bg-gray-100"
              }`}
            >
              {button.text}
            </Button>
          ))}
        </div>

        {/* Reviews */}
        <div className="mt-6 flex flex-col gap-4">
          {currentReviews.map((review, index) => (
            <Card key={index} className="bg-white border-0 rounded-[20px] shadow-lg backdrop-blur-[79px]">
              <CardContent className="p-6 flex flex-col items-center gap-4">
                <p className="text-base text-[#4f5d80] font-raleway text-center">{review.text}</p>
                <p className="text-base font-semibold text-[#4f5d80] font-raleway text-center">{review.author}</p>
                <div className="flex gap-4 justify-center flex-wrap">
                  {review.images.map((image, imgIndex) => (
                    <button
                      key={imgIndex}
                      type="button"
                      onClick={() => openPreview(image, `Просмотр изображения ${imgIndex + 1}`)}
                      className="relative w-[180px] h-[180px] rounded-lg overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3c6cec]"
                      aria-label={`Открыть изображение ${imgIndex + 1}`}
                    >
                      <Image src={image} alt={`Tent ${imgIndex + 1}`} fill className="object-cover" />
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Lightbox / Preview dialog */}
      <Dialog open={!!previewSrc} onOpenChange={(open) => !open && setPreviewSrc(null)}>
        <DialogContent className="max-w-[95vw] sm:max-w-4xl p-0 bg-transparent border-0">
          {previewSrc && (
            <div className="relative mx-auto w-[90vw] h-[70vh] sm:w-[800px] sm:h-[600px]">
              <Image
                src={previewSrc}
                alt={previewAlt || "Просмотр изображения"}
                fill
                className="object-contain rounded-lg"
                priority
              />
              <DialogClose
                className="absolute top-3 right-3 inline-flex items-center justify-center rounded-full bg-white/80 p-2 shadow-md hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#3c6cec]"
                aria-label="Закрыть"
              >
                <X className="w-5 h-5 text-[#3c6cec]" />
              </DialogClose>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};