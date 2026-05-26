'use client';

import React from "react";
import { Button } from "../../../../../components/ui/button";
import { ReactElement } from 'react';

export const FrameShatry4 = (): ReactElement => {
  // Paragraph text with highlighted words
  const paragraphText =
    "Сообщите точные размеры, пришлите фото местности, где будет располагаться шатер. Мы бесплатно спроектируем и поставим его на фото. Увидете, как он будет смотреться в реальностиСообщите точные размеры, пришлите фото местности, где будет располагаться шатер. Мы бесплатно спроектируем и поставим его на фото. Увидете, как он будет смотреться в реальностиСообщите точные размеры, пришлите фото местности, где будет располагаться шатер. Мы бесплатно спроектируем и поставим его на фото. Увидете, как он будет смотреться в реальности";

  // Function to render paragraph with highlighted words
  const renderParagraph = (text: string) => {
    return text.split("шатер").map((part, index) => (
      <React.Fragment key={index}>
        <span className="text-[#394355]">{part}</span>
        {index < text.split("шатер").length - 1 && (
          <span className="text-[#527dc5] underline">шатер</span>
        )}
      </React.Fragment>
    ));
  };

  // === Your content, structured but reusing existing typography/colors ===
  const RussianContentDesktop = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-4">
      <h3 className="font-semibold text-2xl leading-7">
        Каталог тент-шатров любых размеров от производителя
      </h3>
      <p className="font-medium text-lg leading-6">
        Мы предлагаем разнообразие конструкций любых размеров, созданных специально для вашего комфорта на любом мероприятии. Наши тент-шатры сочетают в себе стиль, надежность и высокое качество.
      </p>

      <h4 className="font-semibold text-xl leading-6">Почему выбор наших тент-шатров — это правильное решение?</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li><span className="font-semibold">Широкий ассортимент размеров:</span> в нашем каталоге представлены тент-шатры различных размеров, чтобы соответствовать требованиям и масштабам события.</li>
        <li><span className="font-semibold">Прочная защита от непогоды:</span> наши конструкции обеспечивают надежную защиту от ветра, дождя и солнца, создавая уютное и безопасное пространство.</li>
        <li><span className="font-semibold">Индивидуальные заказы:</span> мы готовы воплотить идеи в реальность. Возможность заказа тент-шатра по индивидуальным параметрам, чтобы соответствовать вашим предпочтениям.</li>
        <li><span className="font-semibold">Профессиональное изготовление:</span> каждый тент-шатер производится нашими опытными специалистами, используя высококачественные материалы.</li>
        <li><span className="font-semibold">Эстетика и стиль:</span> наши тенты-шатры не только функциональны, но и имеют привлекательный дизайн, чтобы придать мероприятию особую атмосферу.</li>
      </ul>
      <p className="font-medium text-lg leading-6">
        Выберите наши тент-шатры, чтобы создать комфортное и запоминающееся пространство для вашего мероприятия.
      </p>

      <h4 className="font-semibold text-xl leading-6">Для чего используются тентовые шатры?</h4>
      <p className="font-medium text-lg leading-6">
        Тентовые шатры нашли широкое применение благодаря своей универсальности и функциональности. Они используются для различных мероприятий и событий, предоставляя защиту от внешних условий и создавая комфортное пространство. Вот несколько областей применения тент-шатров, купить которые вы можете у нас:
      </p>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li><span className="font-semibold">Мероприятия на открытом воздухе:</span> идеально подходят для организации свадеб, корпоративных мероприятий, концертов, фестивалей и других событий под открытым небом. Они обеспечивают защиту участников от дождя, ветра и солнца.</li>
        <li><span className="font-semibold">Рестораны и кафе на открытом воздухе:</span> используются для создания уютных зон для обедов и ужинов на свежем воздухе.</li>
        <li><span className="font-semibold">Спортивные мероприятия:</span> используются для создания временных спортивных площадок, где спортсмены могут тренироваться или проводить соревнования, обеспечивая при этом защиту от погодных условий.</li>
        <li><span className="font-semibold">Пикники и мероприятия на природе:</span> создают уютные зоны на природе для пикников, кемпинга, фестивалей и других мероприятий, предоставляя участникам укрытие от солнца или дождя.</li>
        <li><span className="font-semibold">Рынки и ярмарки:</span> тентовые павильоны, купить которые можно в нашей компании, используются для временных торговых точек на рынках и ярмарках, обеспечивая продавцов защитой от атмосферных воздействий.</li>
      </ul>

      <h4 className="font-semibold text-xl leading-6">Преимущества компании MOBILE TENT:</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li><span className="font-semibold">Надёжные поставщики материалов:</span> заказываем материалы у проверенных производителей из Италии, Китая, Польши и России, обеспечивая качество и долговечность наших шатров и тентов.</li>
        <li><span className="font-semibold">Конкурентоспособные цены:</span> благодаря прямому сотрудничеству с производителями без посредников, мы предлагаем клиентам низкие цены на шатры и тенты.</li>
        <li><span className="font-semibold">Сертифицированное качество:</span> наши конструкции имеют соответствующие сертификаты качества, что подтверждает их соответствие стандартам безопасности и надёжности.</li>
        <li><span className="font-semibold">Гарантия на услуги:</span> мы уверены в надёжности наших шатров и тентов, поэтому предоставляем гарантию на все предоставляемые услуги.</li>
        <li><span className="font-semibold">Доставка:</span> мы ценим время клиентов и осуществляем доставку конструкций в удобное для них место, обеспечивая удобство и оперативность.</li>
        <li><span className="font-semibold">Обучение и сопровождение:</span> наши специалисты не только устанавливают конструкции, но и проводят обучающие мастер-классы по их обслуживанию.</li>
        <li><span className="font-semibold">Широкий спектр услуг:</span> помимо тентов, предоставляем дополнительные услуги: монтаж напольного покрытия, системы кондиционирования и отопления, установка мебели.</li>
        <li><span className="font-semibold">Персонализированный подход:</span> помогаем в выборе и оформлении заказа, обеспечивая индивидуальный подход к каждому запросу.</li>
      </ul>
      <p className="font-medium text-lg leading-6">
        <span className="font-semibold">MOBILE TENT</span> стремится предоставить клиентам комплексный сервис с высоким уровнем качества и внимания к деталям.
      </p>
    </div>
  );

  const RussianContentMobile = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-3">
      <h3 className="font-semibold text-lg leading-6">
        Каталог тент-шатров любых размеров от производителя
      </h3>
      <p className="font-medium text-sm leading-5">
        Мы предлагаем разнообразие конструкций любых размеров, созданных специально для вашего комфорта на любом мероприятии. Наши тент-шатры сочетают в себе стиль, надёжность и высокое качество.
      </p>

      <h4 className="font-semibold text-base leading-5">Почему выбор наших тент-шатров — это правильное решение?</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li><span className="font-semibold">Широкий ассортимент размеров:</span> тент-шатры разных размеров под масштаб события.</li>
        <li><span className="font-semibold">Прочная защита от непогоды:</span> надёжная защита от ветра, дождя и солнца.</li>
        <li><span className="font-semibold">Индивидуальные заказы:</span> изготовим по вашим параметрам.</li>
        <li><span className="font-semibold">Профессиональное изготовление:</span> высокое качество материалов и работы.</li>
        <li><span className="font-semibold">Эстетика и стиль:</span> функциональность и привлекательный дизайн.</li>
      </ul>
      <p className="font-medium text-sm leading-5">
        Выберите наши тент-шатры, чтобы создать комфортное и запоминающееся пространство.
      </p>

      <h4 className="font-semibold text-base leading-5">Для чего используются тентовые шатры?</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li><span className="font-semibold">Открытые мероприятия:</span> свадьбы, корпоративы, концерты, фестивали.</li>
        <li><span className="font-semibold">Рестораны и кафе:</span> уютные летние террасы.</li>
        <li><span className="font-semibold">Спорт:</span> временные площадки и зоны для соревнований.</li>
        <li><span className="font-semibold">Природа:</span> пикники, кемпинг, фестивали на свежем воздухе.</li>
        <li><span className="font-semibold">Рынки и ярмарки:</span> временные торговые точки.</li>
      </ul>

      <h4 className="font-semibold text-base leading-5">Преимущества компании MOBILE TENT:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Проверенные поставщики материалов (Италия, Китай, Польша, Россия).</li>
        <li>Низкие цены за счёт работы без посредников.</li>
        <li>Сертифицированное качество и безопасность.</li>
        <li>Гарантия на все услуги.</li>
        <li>Быстрая и удобная доставка.</li>
        <li>Обучение обслуживанию конструкций.</li>
        <li>Доп. услуги: полы, кондиционирование, отопление, мебель.</li>
        <li>Индивидуальный подход к каждому заказу.</li>
      </ul>
      <p className="font-medium text-sm leading-5">
        <span className="font-semibold">MOBILE TENT</span> — комплексный сервис с высоким уровнем качества и внимания к деталям.
      </p>
    </div>
  );

  return (
    <>
      {/* === نسخة الديسكتوب: تُعرض فقط على الشاشات المتوسطة فأكبر === */}
      <section className="hidden md:block relative bottom-[90px]">
        <div className="flex flex-col items-start gap-9">
          <h2 className="w-fit relative [font-family:'Raleway',Helvetica] font-semibold text-4xl tracking-[0] leading-[normal] whitespace-nowrap">
            <span className="text-[#527dc5]">Как устроены</span>
            <span className="text-[#232c42]">
              , какие бывают и из чего состоят арочные шатры
            </span>
          </h2>

          {/* ✅ Single header-style button replacing the three tabs */}
          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-lg [font-family:'Raleway',Helvetica]"
          >
            Информация о тент-шатрах
          </Button>

          <div className="w-full font-medium text-lg leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
            {renderParagraph(paragraphText)}
          </div>

          {/* === Your content for desktop === */}
          <RussianContentDesktop />

        </div>
      </section>

      {/* === نسخة الهاتف: تُعرض فقط على الشاشات الصغيرة (mobile) === */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-xl font-semibold [font-family:'Raleway',Helvetica] leading-tight text-center w-full">
            <span className="text-[#527dc5]">Как устроены</span>
            <span className="text-[#232c42]">
              , какие бывают и из чего состоят арочные шатры
            </span>
          </h2>

          {/* ✅ Single header-style button replacing the three tabs */}
          <div className="w-full text-center">
            <Button
              variant="link"
              className="px-6 py-2 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-sm [font-family:'Raleway',Helvetica]"
            >
              Информация о тент-шатрах
            </Button>
          </div>

          <div className="w-full font-medium text-sm leading-5 [font-family:'Raleway',Helvetica] text-[#394355] text-justify">
            {renderParagraph(paragraphText)}
          </div>

          {/* === Your content for mobile === */}
          <RussianContentMobile />
        </div>
      </section>
    </>
  );
};
