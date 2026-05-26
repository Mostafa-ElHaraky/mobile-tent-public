'use client';

import { Card, CardContent } from "../../../../../../../components/ui/card";
import { ReactElement, useState } from "react";

type CountryKey = 'russia' | 'kazakhstan' | 'belarus' | 'uzbekistan' | 'armenia';

export const FrameWrapperShatry4 = (): ReactElement => {
  const [selectedCountry, setSelectedCountry] = useState<CountryKey>('russia');

  const countryData: Record<CountryKey, string[]> = {
    russia: [
      "Москва","Санкт-Петербург","Новосибирск","Екатеринбург","Казань",
      "Нижний Новгород","Челябинск","Самара","Омск","Ростов-на-Дону",
      "Уфа","Красноярск","Калуга","Воронеж","Пермь","Волгоград",
      "Краснодар","Саратов","Тюмень","Тольятти","Ижевск","Барнаул",
      "Иркутск","Ульяновск"
    ],
    kazakhstan: ["Астана","Алматы","Шымкент","Актобе","Караганда"],
    belarus:    ["Минск","Гомель","Могилев","Витебск","Гродно"],
    uzbekistan: ["Ташкент","Самарканд","Наманган","Андижан","Фергана"],
    armenia:    ["Ереван","Гюмри","Ванадзор","Вагаршапат","Раздан"],
  };

  const labelByKey: Record<CountryKey, string> = {
    russia: "Россия",
    kazakhstan: "Казахстан",
    belarus: "Беларусь",
    uzbekistan: "Узбекистан",
    armenia: "Армения",
  };

  const cities = countryData[selectedCountry];

const CountrySelectNative = ({ className = "" }: { className?: string }) => (
  <div className={`relative inline-block ${className}`}>
    <label className="sr-only" htmlFor="country-select">Выберите страну</label>
    <select
      id="country-select"
      className="
        appearance-none   /* hide default arrow */
        min-w-[160px]     /* smaller width */
        px-4 pr-10 py-2.5 /* extra right padding for arrow */
        rounded-[500px]
        border border-solid border-[#394355]
        bg-white
        text-[#232c42] font-semibold [font-family:'Raleway',Helvetica]
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#527dc5]
      "
      value={selectedCountry}
      onChange={(e) => setSelectedCountry(e.target.value as CountryKey)}
    >
      <option value="russia">Россия</option>
      <option value="kazakhstan">Казахстан</option>
      <option value="belarus">Беларусь</option>
      <option value="uzbekistan">Узбекистан</option>
      <option value="armenia">Армения</option>
    </select>

    {/* Custom dropdown arrow */}
    <svg
      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#394355]"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  </div>
);

  const CityItem = ({ children }: { children: React.ReactNode }) => (
    <button
      type="button"
      className="text-left font-normal text-[#394355] text-base leading-6 underline [font-family:'Raleway',Helvetica] tracking-[0] hover:opacity-80 focus:outline-none"
      onClick={() => {}}
    >
      {children}
    </button>
  );

  return (
    <>
      {/* DESKTOP */}
      <section className="hidden md:block w-full p-6 bg-[#eef1f8] rounded-[20px]">
        <div className="flex flex-col gap-9 max-w-[1343px] mx-auto">
          <div className="flex flex-wrap items-center gap-4">
            <h2 className="font-semibold text-4xl [font-family:'Raleway',Helvetica] text-[#232c42]">
              Работаем по всему миру
            </h2>
            {/* Native select on desktop too */}
            <CountrySelectNative />
          </div>

          <Card key={selectedCountry} className="bg-white rounded-[20px] border-0 shadow-[var(--)] backdrop-blur-[79px]">
            <CardContent className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-10 gap-y-1">
                {cities.map((city, i) =>
                  selectedCountry === 'russia' ? (
                    <CityItem key={i}>{city}</CityItem>
                  ) : (
                    <span key={i} className="font-normal text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                      {city}
                    </span>
                  )
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* MOBILE */}
      <section className="block md:hidden w-full p-5 bg-[#eef1f8] rounded-[20px] mt-10">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h2 className="font-semibold text-3xl [font-family:'Raleway',Helvetica] text-[#232c42]">
              Работаем по всему миру
            </h2>
            <CountrySelectNative />
          </div>

          <Card key={`m-${selectedCountry}`} className="bg-white rounded-[20px] border-0 shadow-[var(--)] backdrop-blur-[79px]">
            <CardContent className="p-5">
              <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                {cities.map((city, i) =>
                  selectedCountry === 'russia' ? (
                    <CityItem key={i}>{city}</CityItem>
                  ) : (
                    <span key={i} className="font-normal text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                      {city}
                    </span>
                  )
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};
