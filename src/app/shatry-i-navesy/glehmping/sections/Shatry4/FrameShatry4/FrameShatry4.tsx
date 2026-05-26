'use client';

import React from "react";
import { Button } from "../../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  return (
    <>
      {/* === Desktop version === */}
      <section className="hidden md:block relative bottom-[90px] w-full">
        <div className="mx-auto max-w-[1440px] flex flex-col items-start gap-9 px-10">
          <h2 className="w-fit font-semibold text-4xl [font-family:'Raleway',Helvetica] leading-tight">
            <span className="text-[#527dc5]">Что такое</span>{" "}
            <span className="text-[#232c42]">глэмпинг?</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-lg"
          >
            Узнать о глэмпинге
          </Button>

          <div className="w-full font-medium text-lg leading-7 text-[#394355] space-y-6">
            <p>
              Глэмпинг – это возможность насладиться природой, сохраняя привычный комфорт. 
              Наши решения от «Мобайл-Тент» помогут создать уютное пространство для отдыха, 
              где все продумано до мелочей.
            </p>

            <h3 className="font-semibold text-2xl">Что вас ждет:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><b>Простор и удобство:</b> различные модели для уединенного отдыха или больших компаний.</li>
              <li><b>Стильный дизайн:</b> гармония с природой и современная атмосфера.</li>
              <li><b>Надежные материалы:</b> устойчивые к дождю, ветру и солнцу.</li>
              <li><b>Простота установки:</b> легко монтируются для временного и постоянного использования.</li>
              <li><b>Индивидуальный подход:</b> адаптация цвета, формы и оснащения под ваши нужды.</li>
            </ul>

            <h3 className="font-semibold text-2xl">Для кого это решение?</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Создателей комфортных кемпингов.</li>
              <li>Предпринимателей, развивающих глэмпинг-бизнес.</li>
              <li>Организаторов свадеб, фестивалей, корпоративов на природе.</li>
              <li>Турбазы, экопарки и зоны отдыха.</li>
            </ul>

            <p>
              Глэмпинг-шатры от «Мобайл-Тент» идеально подходят для отдыха на природе. 
              Просторные и комфортные укрытия защищают от непогоды и вписываются в ландшафт. 
              Легкая установка делает их удобными для бизнеса и личного использования. 
              Прочность и вентиляция поддерживают комфортную температуру в любую погоду.
            </p>

            <div className="p-5 rounded-xl bg-[#f6f8ff]">
              <p className="font-semibold">
                «Мобайл-Тент» — компания с многолетним опытом в производстве решений 
                для кемпинга и отдыха. Мы создаем пространство для отдыха в гармонии с природой 
                и учитываем все предпочтения клиентов.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Mobile version === */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-center leading-tight">
            Глэмпинг
          </h2>

          <Button
            variant="link"
            className="px-6 py-2 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-sm self-center"
          >
            Подробнее
          </Button>

          <div className="font-medium text-sm leading-5 text-[#394355] text-justify space-y-4">
            <p>
              Глэмпинг – это отдых на природе с комфортом. Просторные шатры от «Мобайл-Тент» 
              создают уют и защищают от непогоды.
            </p>

            <h3 className="font-semibold">Что вас ждет</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Простор и удобство</li>
              <li>Стильный дизайн</li>
              <li>Надежные материалы</li>
              <li>Простота установки</li>
              <li>Индивидуальный подход</li>
            </ul>

            <h3 className="font-semibold">Для кого</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Кемпинги и глэмпинг-бизнес</li>
              <li>Свадьбы, фестивали, корпоративы</li>
              <li>Турбазы, экопарки, зоны отдыха</li>
            </ul>

            <p>
              Конструкции продуманы до мелочей: просторные, прочные и удобные для временного 
              и постоянного использования.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
