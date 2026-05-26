"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

// Region and city data structure
type Region = {
  id: number;
  name: string;
  cities: string[];
};

const CitySelector = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Москва");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState(2); // Default to Краснодарский край
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const regionData: Region[] = [
    {
      id: 1,
      name: "Астраханская область",
      cities: [
        "Астрахань", "Ахтубинск", "Знаменск", "Камызяк", "Нариманов", 
        "Харабали", "Красный Яр", "Лиман", "Икряное", "Володарский", 
        "Енотаевка", "Черный Яр", "Ахтуба", "Трусово", "Советское"
      ]
    },
    {
      id: 2,
      name: "Волгоградская область",
      cities: [
        "Волгоград", "Волжский", "Камышин", "Урюпинск", "Калач-на-Дону",
        "Михайловка", "Фролово", "Котово", "Жирновск", "Палласовка",
        "Новоаннинский", "Серафимович", "Суровикино", "Елань", "Котельниково"
      ]
    },
    {
      id: 3,
      name: "Краснодарский край",
      cities: [
        "Краснодар", "Сочи", "Новороссийск", "Армавир", "Ейск",
        "Кропоткин", "Анапа", "Геленджик", "Туапсе", "Славянск-на-Кубани",
        "Тихорецк", "Белореченск", "Крымск", "Тимашёвск", "Лабинск",
        "Курганинск", "Усть-Лабинск", "Апшеронск", "Горячий Ключ", "Динская"
      ]
    },
    {
      id: 4,
      name: "Крым",
      cities: [
        "Симферополь", "Севастополь", "Ялта", "Евпатория", "Алушта",
        "Керчь", "Феодосия", "Саки", "Бахчисарай", "Судак",
        "Джанкой", "Белогорск", "Партенит", "Гурзуф", "Щёлкино"
      ]
    },
    {
      id: 5,
      name: "Республика Адыгея",
      cities: [
        "Майкоп", "Адыгейск", "Гиагинская", "Кошехабль", "Красногвардейское",
        "Тульский", "Хакуринохабль", "Каменномостский", "Тахтамукай", "Яблоновский",
        "Энем", "Дондуковская", "Красногвардейск", "Шовгеновский", "Ханская"
      ]
    },
    {
      id: 6,
      name: "Республика Калмыкия",
      cities: [
        "Элиста", "Городовиковск", "Лагань", "Троицкое", "Яшалта",
        "Яшкуль", "Малые Дербеты", "Приютное", "Советское", "Цаган-Аман",
        "Кетченеры", "Садовое", "Ики-Бурул", "Большой Царын", "Артезиан"
      ]
    },
    {
      id: 7,
      name: "Ростовская область",
      cities: [
        "Ростов-на-Дону", "Таганрог", "Шахты", "Волгодонск", "Новочеркасск",
        "Батайск", "Новошахтинск", "Каменск-Шахтинский", "Азов", "Гуково",
        "Сальск", "Донецк", "Белая Калитва", "Красный Сулин", "Миллерово",
        "Морозовск", "Зерноград", "Семикаракорск", "Зверево", "Пролетарск"
      ]
    },
    {
      id: 8,
      name: "Ставропольский край",
      cities: [
        "Ставрополь", "Пятигорск", "Кисловодск", "Невинномысск", "Ессентуки",
        "Минеральные Воды", "Будённовск", "Георгиевск", "Михайловск", "Светлоград",
        "Зеленокумск", "Благодарный", "Изобильный", "Ипатово", "Новоалександровск"
      ]
    }
  ];

  const popularCities = [
    "Москва", "Санкт-Петербург", "Новосибирск", "Екатеринбург", "Казань",
    "Нижний Новгород", "Челябинск", "Самара", "Омск", "Ростов-на-Дону"
  ];

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    setIsModalOpen(false);
  };

  // Get cities for current region
  const currentCities = regionData.find(r => r.id === selectedRegion)?.cities || [];

  return (
    <div className="relative">
      {/* City display */}
      <div
        className="inline-flex flex-col items-start gap-1.5 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="inline-flex items-center gap-1">
          <span className="font-normal text-[#232c42] text-sm [font-family:'Raleway',Helvetica]">
            Ваш город
          </span>
          <Image
            src="/polygon-1.webp"
            alt="Dropdown"
            width={8.66}
            height={4.5}
          />
        </div>
        <span className="relative bottom-[5px] font-semibold text-[#232c42] text-sm [font-family:'Raleway',Helvetica]">
          {selectedCity}
        </span>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-[#00000080] flex items-center justify-center z-50 p-4 overflow-y-auto">
          <Card className={`relative ${isMobile ? 'w-full h-full max-h-[90vh] rounded-xl' : 'w-full max-w-4xl rounded-[20px]'} bg-white border-0 shadow-lg`}>
            <CardContent className="p-0 h-full">
              <div className={`${isMobile ? 'p-4 h-full flex flex-col' : 'p-[30px]'}`}>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="font-semibold text-2xl text-[#232c42] [font-family:'Raleway',Helvetica]">
                    Выберите город
                  </h2>
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="text-gray-500 hover:text-gray-700 text-xl"
                  >
                    ✕
                  </button>
                </div>

                {/* Search */}
                <div className="flex items-center gap-2 bg-white rounded-[50px] border border-[#3943551a] mb-6 p-2">
                  <Input
                    placeholder="Поиск города"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="border-0 focus-visible:ring-0 flex-1"
                  />
                  <Button className="bg-[#4f5d80] rounded-[50px] p-2">
                    <Image
                      src="/group-4.webp"
                      alt="Search"
                      width={16}
                      height={16}
                    />
                  </Button>
                </div>

                {/* Popular cities */}
                <div className="mb-6">
                  <h3 className="font-medium text-[#232c42] mb-3">Популярные города</h3>
                  <div className="flex flex-wrap gap-2 overflow-x-auto pb-2">
                    {popularCities.map((city) => (
                      <Badge
                        key={city}
                        variant="secondary"
                        className={`cursor-pointer rounded-full px-4 py-1 transition-all ${
                          selectedCity === city 
                            ? "bg-[#527dc5] text-white" 
                            : "bg-[#e8edf7] hover:bg-[#d8e0f0]"
                        }`}
                        onClick={() => handleCitySelect(city)}
                      >
                        {city}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className={`flex gap-6 ${isMobile ? 'flex-col flex-1 min-h-0' : 'flex-col md:flex-row'}`}>
                  {/* Regions */}
                  <Card className={`${isMobile ? 'w-full flex-1 min-h-0' : 'w-full md:w-[240px]'} border-0 shadow-none`}>
                    <CardContent className="p-0 h-full">
                      <h3 className="font-semibold mb-4">Регион</h3>
                      <div className={`${isMobile ? 'h-[calc(100%-28px)]' : 'max-h-[300px]'} overflow-y-auto pr-2`}>
                        {regionData.map((region) => (
                          <div
                            key={region.id}
                            className={`py-2.5 px-3 cursor-pointer rounded-lg transition-colors ${
                              selectedRegion === region.id
                                ? "bg-[#e8edf7] text-[#527dc5] font-medium"
                                : "hover:bg-gray-100"
                            }`}
                            onClick={() => setSelectedRegion(region.id)}
                          >
                            {region.name}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Cities */}
                  <Card className={`${isMobile ? 'flex-1 min-h-0' : 'flex-1'} border-0 shadow-none`}>
                    <CardContent className="p-0 h-full">
                      <h3 className="font-semibold mb-4">Города</h3>
                      <div className={`${isMobile ? 'h-[calc(100%-28px)]' : 'max-h-[300px]'} overflow-y-auto`}>
                        <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'} gap-3 pr-2`}>
                          {currentCities
                            .filter(city =>
                              city.toLowerCase().includes(searchQuery.toLowerCase())
                            )
                            .map((city) => (
                              <div
                                key={city}
                                className={`py-2 px-3 cursor-pointer rounded-lg transition-colors ${
                                  selectedCity === city
                                    ? "bg-[#e8edf7] text-[#527dc5] font-medium"
                                    : "hover:bg-gray-100"
                                }`}
                                onClick={() => handleCitySelect(city)}
                              >
                                {city}
                              </div>
                            ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default CitySelector;