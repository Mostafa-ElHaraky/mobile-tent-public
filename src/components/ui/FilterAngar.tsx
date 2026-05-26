'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CatalogSh from '../../components/ui/CatalogSh';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Checkbox } from '../../components/ui/checkbox';
import { Select } from '../../components/ui/select';
import { SelectItem } from '../../components/ui/select';
import { SelectTrigger } from '../../components/ui/select';
import { SelectValue } from '../../components/ui/select';
import { Card, CardContent } from '../../components/ui/card';
import { SelectContent } from '../../components/ui/select';
import { Badge } from '../../components/ui/badge';
import { Carousel } from '../../components/ui/carousel';
import { Slider } from '../../components/ui/slider';
import {
  CarouselContent, 
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '../../components/ui/carousel';

interface Product {
  id: string;
  title: string;
  images: string[];
  size: string;
  area: number;
  capacity: string;
  availability: string;
  basePrice: number;
  discountPercentage: number;
  oldPrice: string;
  discount: string;
  price: string;
  shape: string;
}
interface Category {
  id: number;
  image: string;
  title: string;
  slug: string; // Manually defined slug property
}

const baseShapes = ['Спорт', 'Промышленность', 'Сельское хозяйство', 'Спец. проекты'];
const capacities = ['Тип B', 'Тип C', 'Тип D', 'Тип E'];
const areas = ['до 20 м2', 'до 50 м2', 'до 100 м2', 'до 200 м2', 'до 300 м2', 'до 450 м2'];
const popularSizes = ['5х5', '6х6', '8х8', '10х10'];
const tentCategories: Category[] = [
  { id: 1, image: '/angar1.webp', title: 'Тентовые ангары', slug: 'tentovye-angary' },
  { id: 2, image: '/angar1.webp', title: 'Арочные ангары', slug: 'angary_arochnye' },
  { id: 3, image: '/angar1.webp', title: 'Каркасные ангары', slug: 'angary_karkasnye' },
];

const globalDiscount = 30;

const calculateProductDetails = (area: number) => {
  const capacity = Math.floor(area * 0.67);
  return {
    capacity: `${capacity} человек`,
    oldPrice: `Цена по Запрос`,
    discount: "",
    price: `Цена по Запрос`,
  };
};

const mockProducts: Product[] = (
  [
    {
      id: 'arochnyy-angar-10h30',
      title: 'Арочный ангар 10х30',
      images: ['/angar1.webp', '/angar2.webp', '/angar3.jpg'],
      size: '10х30м',
      area: 300,
      availability: "да",
      basePrice: 380000,
      discountPercentage: 50,
    },
    {
      id: 'arochnyy-angar-15h20-m',
      title: 'Арочный ангар 15х20 м',
      images: ['/angar1.webp', '/angar2.webp', '/angar3.jpg'],
      size: '15х20м',
      area: 300,
      availability: "да",
      basePrice: 1143000,
      discountPercentage: 20,
      price: "",
    },
    {
      id: 'arochnyy-angar-15h40-m',
      title: 'Арочный ангар 15х40 м',
      images: ['/angar1.webp', '/angar2.webp', '/angar3.jpg'],
      size: '15x40м',
      area: 600,
      availability: "да",
      basePrice: 309000,
      discountPercentage: 10,
      price: "",
    },
    {
      id: 'arochnyy-angar-20h30-m',
      title: 'Арочный ангар 20х30 м',
      images: ['/angar1.webp', '/angar2.webp', '/angar3.jpg'],
      size: '20х30м',
      area: 600,
      availability: "да",
      basePrice: 657000,
      discountPercentage: globalDiscount,
    },
    {
      id: 'arochnyy-angar-20h50-m',
      title: 'Арочный ангар 20х50 м',
      images: ['/angar1.webp', '/angar2.webp', '/angar3.jpg'],
      size: '20х50м',
      area: 1000,
      availability: "да",
      basePrice: 342000,
      discountPercentage: globalDiscount,
      shape: "Квадрат"
    },
    {
      id: 'arochnyy-angar-25h30m',
      title: 'Арочный ангар 25х30м',
      images: ['/angar1.webp', '/angar2.webp', '/angar3.jpg'],
      size: '25х30м',
      area: 700,
      availability: "да",
      basePrice: 90000,
      discountPercentage: globalDiscount,
      price: "",
      shape: "Круг"
    },
    {
      id: 'arochnyy-angar-25h50-m',
      title: 'Арочный ангар 25х50 м',
      images: ['/angar1.webp', '/angar2.webp', '/angar3.jpg'],
      size: '25х50м',
      area: 1250,
      availability: "да",
      basePrice: 913000,
      discountPercentage: globalDiscount,
      price: "",
      shape: "Прямоугольник"
    },
    {
      id: 'arochnyy-angar-30h40-m',
      title: 'Арочный ангар 30х40 м',
      images: ['/angar1.webp', '/angar2.webp', '/angar3.jpg'],
      size: '30х40м',
      area: 1200,
      availability: "да",
      basePrice: 913000,
      discountPercentage: globalDiscount,
      price: "",
      shape: "Прямоугольник"
    },
    {
      id: 'arochnyy-angar-30h50m',
      title: 'Арочный ангар 30х50м',
      images: ['/angar1.webp', '/angar2.webp', '/angar3.jpg'],
      size: '30х50м',
      area: 1500,
      availability: "да",
      basePrice: 913000,
      discountPercentage: globalDiscount,
      price: "",
      shape: "Прямоугольник"
    },
    {
      id: 'arochnyy-angar-40h500-m',
      title: 'Арочный ангар 40х100 м',
      images: ['/angar1.webp', '/angar2.webp', '/angar3.jpg'],
      size: '40х100м',
      area: 4000,
      availability: "да",
      basePrice: 913000,
      discountPercentage: globalDiscount,
      price: "",
      shape: "Прямоугольник"
    },
  ] as Omit<Product, 'capacity' | 'oldPrice' | 'discount' | 'price'>[]
).map((product): Product => {
  const calculated = calculateProductDetails(product.area);
  return {
    ...product,
    capacity: calculated.capacity,
    oldPrice: calculated.oldPrice,
    discount: calculated.discount,
    price: calculated.price,
  };
});

const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export const FilterAngar = () => {
  const [selectedShapes, setSelectedShapes] = useState<string[]>([]);
  const [selectedCapacities, setSelectedCapacities] = useState<string[]>([]);
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([20000, 2000000]);
  const [lengthRange, setLengthRange] = useState<[number, number]>([2, 10]);
  const [widthRange, setWidthRange] = useState<[number, number]>([2, 10]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(mockProducts);
  const [selectedCount, setSelectedCount] = useState(0);
  const [visibleProducts, setVisibleProducts] = useState(6);
  const itemsPerPage = 3;
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isFiltering, setIsFiltering] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const handleShowMore = () => {
    setVisibleProducts(prev => prev + itemsPerPage);
  };

  const toggleSelection = (
    item: string,
    state: string[],
    setState: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setState(prev =>
      prev.includes(item)
        ? prev.filter(i => i !== item)
        : [...prev, item]
    );
    triggerFilterEffect();
  };

  const triggerFilterEffect = () => {
    setIsFiltering(true);
    setFilteredProducts([]);
    setTimeout(() => {
      setFilteredProducts(shuffleArray([...mockProducts]));
      setIsFiltering(false);
    }, 300);
  };

  const resetFilters = () => {
    setSelectedShapes([]);
    setSelectedCapacities([]);
    setSelectedAreas([]);
    setSelectedSizes([]);
    setPriceRange([20000, 2000000]);
    setLengthRange([2, 10]);
    setWidthRange([2, 10]);
    triggerFilterEffect();
  };

  const removeFilter = (type: string, value: string) => {
    switch (type) {
      case 'shape':
        setSelectedShapes(prev => prev.filter(v => v !== value));
        break;
      case 'capacity':
        setSelectedCapacities(prev => prev.filter(v => v !== value));
        break;
      case 'area':
        setSelectedAreas(prev => prev.filter(v => v !== value));
        break;
      case 'size':
        setSelectedSizes(prev => prev.filter(v => v !== value));
        break;
      default:
        break;
    }
    triggerFilterEffect();
  };

  useEffect(() => {
    setFilteredProducts(mockProducts);
    setSelectedCount(mockProducts.length);
  }, []);

  useEffect(() => {
    triggerFilterEffect();
  }, [selectedShapes, selectedCapacities, selectedAreas, selectedSizes, priceRange]);

  const parseCurrency = (input: string): number => {
    const cleanValue = input.replace(/[^\d]/g, '');
    return parseInt(cleanValue) || 0;
  };

  const formatCurrency = (value: number): string => {
    return value.toLocaleString('ru-RU');
  };

  const selectedFilters = [
    ...selectedShapes.map(value => ({ type: 'shape', name: 'Форма', value })),
    ...selectedCapacities.map(value => ({ type: 'capacity', name: 'Вместимость', value })),
    ...selectedAreas.map(value => ({ type: 'area', name: 'Площадь', value })),
    ...selectedSizes.map(value => ({ type: 'size', name: 'Размер', value })),
  ];

  // ============= Desktop Version =============
  const DesktopView = () => (
    <section className="flex flex-col gap-[45px] w-full mx-auto px-12">
      {/* Tent Categories Section */}
      <section className="w-full max-w-[1440px] min-h-[398px]">
        <div className="w-full h-full bg-[#eef1f8] rounded-[20px] p-12 pt-[60px]">
          <div className="flex flex-col gap-9">
            <header className="flex w-full items-center justify-between">
              <h2 className="font-semibold text-[#232c42] text-4xl [font-family:'Raleway',Helvetica]">
                Выбирайте категорию ангаров
              </h2>
            </header>
            <Card className="bg-white rounded-[20px] border-0 shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] backdrop-blur-[79px]">
              <CardContent className="relative left-[230px] p-6">
                {showAll ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                    {tentCategories.map((category) => (
                      <div key={category.id} className="w-40 h-[160px]">
                        <div
                          className="w-40 h-[84px] bg-cover bg-center"
                          style={{ backgroundImage: `url(${category.image})` }}
                        />
                        <div className="flex flex-col items-start gap-2 mt-6">
                          <Link 
                            href={`/shatry-i-navesy/${category.slug}`}
                            className="font-bold text-[#527dc5] text-xl leading-6 [font-family:'Raleway',Helvetica] hover:underline"
                          >
                            {category.title}
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <Carousel className="w-full">
                    <CarouselContent className="-ml-6">
                      {tentCategories.map((category) => (
                        <CarouselItem
                          key={category.id}
                          className="pl-6 md:basis-1/3 lg:basis-1/4 xl:basis-1/6"
                        >
                          <div className="w-60 h-[180px]">
                            <div
                              className="w-40 h-[104px] bg-cover bg-center"
                              style={{ backgroundImage: `url(${category.image})` }}
                            />
                            <div className="flex flex-col items-start gap-2 mt-6">
                              <Link 
                                href={`/shatry-i-navesy/${category.slug}`}
                                className="font-bold text-[#527dc5] text-l leading-6 [font-family:'Raleway',Helvetica] hover:underline"
                              >
                                {category.title}
                              </Link>
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-10">
          {/* Header with sorting controls */}
          <div className="flex w-full items-center justify-between">
            <h5 className="font-semibold text-[#232c42] text-4xl [font-family:'Raleway',Helvetica]">
              Каталог
            </h5>
            <div className="flex items-center gap-3">
            </div>
          </div>

          {/* Filter section */}
          <div className="flex flex-col gap-6">
            <h2 className="font-normal text-[#394355] text-[18px] leading-[24px] font-['Raleway'] font-variant-numeric: lining-nums proportional-nums tracking-normal">
              Любой ангар можно изменить под ваши размеры, оснастить любым оборудованием и соединить несколько в один большой
            </h2>
            <p className="font-bold text-[20px] leading-[24px] text-[#527DC5] font-['Raleway'] font-variant-numeric: lining-nums proportional-nums">
              Подберите для себя необходимое
            </p>
            <div className="flex flex-wrap gap-[41px]">
              {/* Price filter */}
              <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-[#232c42] text-lg [font-family:'Raleway',Helvetica]">
                  Цена
                </h3>
                <div className="w-[294px] h-[97px] relative">
                  <div className="flex gap-2.5">
                    <div className="flex flex-col gap-1 p-3 rounded-lg border-2 border-[#dddddd]">
                      <label className="font-medium text-[#394355] text-xs [font-family:'Raleway',Helvetica]">
                        от
                      </label>
                      <Input
                        className="font-medium text-[#394355] text-base [font-family:'Raleway',Helvetica] border-none p-0 h-6"
                        value={formatCurrency(priceRange[0])}
                        onChange={(e) => {
                          const value = parseCurrency(e.target.value);
                          setPriceRange([value, priceRange[1]]);
                        }}
                      />
                    </div>
                    <div className="flex flex-col gap-1 p-3 rounded-lg border-2 border-[#dddddd]">
                      <label className="font-medium text-[#394355] text-xs [font-family:'Raleway',Helvetica]">
                        до
                      </label>
                      <Input
                        className="font-medium text-[#394355] text-base [font-family:'Raleway',Helvetica] border-none p-0 h-6"
                        value={formatCurrency(priceRange[1])}
                        onChange={(e) => {
                          const value = parseCurrency(e.target.value);
                          setPriceRange([priceRange[0], value]);
                        }}
                      />
                    </div>
                  </div>
                  <div className="mt-6 px-1.5">
                    <Slider
                      value={priceRange}
                      onValueChange={(value) => {
                        setPriceRange(value as [number, number]);
                        triggerFilterEffect();
                      }}
                      min={20000}
                      max={2000000}
                      step={10000}
                      className="[&_.slider-track]:bg-[#e8e8e8] [&_.slider-range]:bg-gradient-to-b from-[rgba(115,168,255,1)] via-[rgba(111,167,255,1)] to-[rgba(60,108,236,1)]"
                    />
                  </div>
                </div>
              </div>

              {/* Base shape filter */}
              <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-[#232c42] text-lg [font-family:'Raleway',Helvetica]">
                  Форма в основании
                </h3>
                <div className="flex flex-col gap-[26px]">
                  <div className="flex flex-col gap-4">
                    {baseShapes.map((shape, index) => (
                      <div
                        key={`shape-${index}`}
                        className="flex items-center gap-2.5"
                      >
                        <Checkbox
                          id={`shape-${index}`}
                          className="w-[33px] h-[33px] rounded-lg border-2 border-[#dddddd]"
                          checked={selectedShapes.includes(shape)}
                          onCheckedChange={() => 
                            toggleSelection(shape, selectedShapes, setSelectedShapes)
                          }
                        />
                        <label
                          htmlFor={`shape-${index}`}
                          className="font-medium text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]"
                        >
                          {shape}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Capacity filter */}
              <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-[#232c42] text-lg [font-family:'Raleway',Helvetica]">
                  Вместимость
                </h3>
                <div className="flex flex-col gap-[26px]">
                  <div className="flex flex-col gap-4">
                    {capacities.map((capacity, index) => (
                      <div
                        key={`capacity-${index}`}
                        className="flex items-center gap-2.5"
                      >
                        <Checkbox
                          id={`capacity-${index}`}
                          className="w-[33px] h-[33px] rounded-lg border-2 border-[#dddddd]"
                          checked={selectedCapacities.includes(capacity)}
                          onCheckedChange={() => 
                            toggleSelection(capacity, selectedCapacities, setSelectedCapacities)
                          }
                        />
                        <label
                          htmlFor={`capacity-${index}`}
                          className="font-medium text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]"
                        >
                          {capacity}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Area filter */}
              <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-[#232c42] text-lg [font-family:'Raleway',Helvetica]">
                  Площадь
                </h3>
                <div className="flex flex-col gap-[26px]">
                  <div className="flex flex-col gap-4">
                    {areas.map((area, index) => (
                      <div
                        key={`area-${index}`}
                        className="flex items-center gap-2.5"
                      >
                        <Checkbox
                          id={`area-${index}`}
                          className="w-[33px] h-[33px] rounded-lg border-2 border-[#dddddd]"
                          checked={selectedAreas.includes(area)}
                          onCheckedChange={() => 
                            toggleSelection(area, selectedAreas, setSelectedAreas)
                          }
                        />
                        <label
                          htmlFor={`area-${index}`}
                          className="font-medium text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]"
                        >
                          {area}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Length and Width filters */}
              <div className="flex flex-col gap-[18px]">
                {/* Length filter */}
                <div className="flex flex-col gap-4">
                  <h3 className="font-semibold text-[#232c42] text-lg [font-family:'Raleway',Helvetica]">
                    Длина
                  </h3>
                  <div className="w-60 h-[97px] relative">
                    <div className="flex gap-2.5">
                      <div className="flex flex-col gap-1 p-3 rounded-lg border-2 border-[#dddddd]">
                        <label className="font-medium text-[#394355] text-xs [font-family:'Raleway',Helvetica]">
                          от
                        </label>
                        <Input
                          className="font-medium text-[#394355] text-base [font-family:'Raleway',Helvetica] border-none p-0 h-6"
                          value={`${lengthRange[0]} м`}
                          onChange={(e) => {
                            const value = parseInt(e.target.value) || 0;
                            setLengthRange([value, lengthRange[1]]);
                          }}
                        />
                      </div>
                      <div className="flex flex-col gap-1 p-3 rounded-lg border-2 border-[#dddddd]">
                        <label className="font-medium text-[#394355] text-xs [font-family:'Raleway',Helvetica]">
                          до
                        </label>
                        <Input
                          className="font-medium text-[#394355] text-base [font-family:'Raleway',Helvetica] border-none p-0 h-6"
                          value={`${lengthRange[1]} м`}
                          onChange={(e) => {
                            const value = parseInt(e.target.value) || 0;
                            setLengthRange([lengthRange[0], value]);
                          }}
                        />
                      </div>
                    </div>
                    <div className="mt-6 px-1.5">
                      <Slider
                        value={lengthRange}
                        onValueChange={(value) => {
                          setLengthRange(value as [number, number]);
                          triggerFilterEffect();
                        }}
                        min={2}
                        max={20}
                        step={1}
                        className="[&_.slider-track]:bg-[#e8e8e8] [&_.slider-range]:bg-gradient-to-b from-[rgba(115,168,255,1)] via-[rgba(111,167,255,1)] to-[rgba(60,108,236,1)]"
                      />
                    </div>
                  </div>
                </div>
                {/* Width filter */}
                <div className="flex flex-col gap-4">
                  <h3 className="font-semibold text-[#232c42] text-lg [font-family:'Raleway',Helvetica]">
                    Ширина
                  </h3>
                  <div className="w-60 h-[97px] relative">
                    <div className="flex gap-2.5">
                      <div className="flex flex-col gap-1 p-3 rounded-lg border-2 border-[#dddddd]">
                        <label className="font-medium text-[#394355] text-xs [font-family:'Raleway',Helvetica]">
                          от
                        </label>
                        <Input
                          className="font-medium text-[#394355] text-base [font-family:'Raleway',Helvetica] border-none p-0 h-6"
                          value={`${widthRange[0]} м`}
                          onChange={(e) => {
                            const value = parseInt(e.target.value) || 0;
                            setWidthRange([value, widthRange[1]]);
                          }}
                        />
                      </div>
                      <div className="flex flex-col gap-1 p-3 rounded-lg border-2 border-[#dddddd]">
                        <label className="font-medium text-[#394355] text-xs [font-family:'Raleway',Helvetica]">
                          до
                        </label>
                        <Input
                          className="font-medium text-[#394355] text-base [font-family:'Raleway',Helvetica] border-none p-0 h-6"
                          value={`${widthRange[1]} м`}
                          onChange={(e) => {
                            const value = parseInt(e.target.value) || 0;
                            setWidthRange([widthRange[0], value]);
                          }}
                        />
                      </div>
                    </div>
                    <div className="mt-6 px-1.5">
                      <Slider
                        value={widthRange}
                        onValueChange={(value) => {
                          setWidthRange(value as [number, number]);
                          triggerFilterEffect();
                        }}
                        min={2}
                        max={20}
                        step={1}
                        className="[&_.slider-track]:bg-[#e8e8e8] [&_.slider-range]:bg-gradient-to-b from-[rgba(115,168,255,1)] via-[rgba(111,167,255,1)] to-[rgba(60,108,236,1)]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Popular sizes filter */}
              <div className="relative bottom-[400px] left-[1150px]">
                <div className="flex flex-col gap-4">
                  <h3 className="font-semibold text-[#232c42] text-lg [font-family:'Raleway',Helvetica]">
                    Популярные размеры
                  </h3>
                  <div className="flex flex-col gap-[26px]">
                    <div className="flex flex-col gap-4">
                      {popularSizes.map((size, index) => (
                        <div
                          key={`size-${index}`}
                          className="flex items-center gap-2.5"
                        >
                          <Checkbox
                            id={`size-${index}`}
                            className="w-[33px] h-[33px] rounded-lg border-2 border-[#dddddd]"
                            checked={selectedSizes.includes(size)}
                            onCheckedChange={() => 
                              toggleSelection(size, selectedSizes, setSelectedSizes)
                            }
                          />
                          <label
                            htmlFor={`size-${index}`}
                            className="font-medium text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]"
                          >
                            {size}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Selected filters bar */}
        <div className="relative bottom-[200px]">
          <div className="flex items-center justify-between p-3 bg-[#f5f6ff] rounded-[50px]">
            <div className="flex items-center gap-6 flex-wrap">
              {selectedFilters.map((filter, index) => (
                <Badge 
                  key={index} 
                  className="flex items-center gap-2.5 px-4 py-[13px] h-[46px] bg-white text-[#232c42] rounded-[50px] border-none"
                >
                  <span className="font-semibold text-lg [font-family:'Raleway',Helvetica]">
                    {filter.value}
                  </span>
                  <div 
                    className="w-[15px] h-[14.99px] cursor-pointer"
                    onClick={() => removeFilter(filter.type, filter.value)}
                  >
                    <Image
                      src="/Shatry3-group-5.webp"
                      alt="Remove"
                      width={15}
                      height={15}
                    />
                  </div>
                </Badge>
              ))}
              <Button 
                onClick={resetFilters}
                className="flex items-center gap-2.5 px-4 py-[13px] h-[46px] font-semibold text-white text-lg rounded-[50px] [font-family:'Raleway',Helvetica] shadow-2 [background:linear-gradient(159deg,rgba(36,48,87,1)_0%,rgba(55,66,85,1)_100%)]"
              >
                Сбросить все
              </Button>
            </div>
            <div className="flex items-center gap-[18px] pl-3 pr-1.5 py-1.5 bg-white rounded-[50px] border-2 border-[#dddddd]">
              <span className="font-semibold text-[#232c42] text-lg [font-family:'Raleway',Helvetica]">
                Выбрано: {selectedCount}
              </span>
              <Button className="flex items-center gap-2.5 px-4 py-[13px] h-[46px] font-semibold text-white text-lg rounded-[50px] [font-family:'Raleway',Helvetica] shadow-[0px_22px_20px_#1f7cfe33] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
                Показать
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Product grid */}
      <div className="relative w-full bottom-[150px] ">
        <div className="relative w-full bottom-[150px]">
          {isFiltering ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <>
              <CatalogSh 
                products={filteredProducts} 
                visibleProducts={visibleProducts} 
              />
              <div className="relative top-[210px]">
                <div className="flex justify-center mt-8">
                  {visibleProducts < filteredProducts.length && (
                    <Button
                      variant="link"
                      onClick={handleShowMore}
                      className="font-bold text-[#527dc5] text-2xl leading-6 underline [font-family:'Raleway',Helvetica] p-0 h-auto"
                    >
                      Показать еще
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );

  // ============= Mobile Version =============
  const MobileView = () => {
    const [showFilters, setShowFilters] = useState<{
      price: boolean;
      shape: boolean;
      capacity: boolean;
      area: boolean;
      length: boolean;
      width: boolean;
      sizes: boolean;
    }>({
      price: true,
      shape: true,
      capacity: true,
      area: true,
      length: true,
      width: true,
      sizes: true,
    });

    type FilterSection = keyof typeof showFilters;
    const toggleFilterSection = (section: FilterSection) => {
      setShowFilters((prev) => ({
        ...prev,
        [section]: !prev[section],
      }));
    };

    return (
      <section className="flex flex-col gap-6 w-full px-4 pb-12">
        {/* Tent Categories Section */}
        <section className="w-full max-w-[1440px] min-h-[300px] mx-auto">
          <div className="w-full h-full bg-[#eef1f8] rounded-2xl p-6">
            <div className="flex flex-col gap-6">
              <header className="flex w-full items-center justify-between">
                <h2 className="font-semibold text-[#232c42] text-2xl [font-family:'Raleway',Helvetica]">
                  Выбирайте категорию шатров
                </h2>
              </header>
              <Card className="bg-white rounded-2xl border-0 shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] backdrop-blur-[79px]">
                <CardContent className="p-4">
                  {showAll ? (
                    <div className="grid grid-cols-2 gap-4">
                      {tentCategories.map((category) => (
                        <div key={category.id} className="flex flex-col items-center gap-3">
                          <div
                            className="w-24 h-24 bg-cover bg-center rounded-lg"
                            style={{ backgroundImage: `url(${category.image})` }}
                          />
                          <Link
                            href={`/shatry-i-navesy/${category.slug}`}
                            className="font-bold text-[#527dc5] text-sm text-center leading-tight hover:underline"
                          >
                            {category.title}
                          </Link>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <Carousel className="w-full">
                      <CarouselContent className="-ml-4">
                        {tentCategories.map((category) => (
                          <CarouselItem key={category.id} className="pl-4 basis-1/2 sm:basis-1/3">
                            <div className="flex flex-col items-center gap-3">
                              <div
                                className="w-24 h-24 bg-cover bg-center rounded-lg"
                                style={{ backgroundImage: `url(${category.image})` }}
                              />
                              <Link
                                href={`/shatry-i-navesy/${category.slug}`}
                                className="font-bold text-[#527dc5] text-xs text-center leading-tight hover:underline"
                              >
                                {category.title}
                              </Link>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <div className="flex justify-end mt-2">
                        <div className="flex gap-2">
                          <CarouselPrevious className="w-10 h-10 bg-blue-500 text-white rounded-full p-0" />
                          <CarouselNext className="w-10 h-10 bg-blue-500 text-white rounded-full p-0" />
                        </div>
                      </div>
                    </Carousel>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
          {/* Show All button outside container */}
          <div className="flex justify-center mt-4">
            <Button
              variant="link"
              className="font-bold text-[#527dc5] text-sm underline p-0 h-auto"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Скрыть" : "Показать все"}
            </Button>
          </div>
        </section>

        {/* Catalog Header & Filters */}
        <div className="flex flex-col gap-6">
          <div className="flex w-full items-center justify-between relative z-0">
            <h5 className="font-semibold text-[#232c42] text-2xl [font-family:'Raleway',Helvetica]">
              Каталог
            </h5>
            <div className="flex items-center gap-3 relative z-50">
              <div className="flex flex-col gap-2.5 relative z-50">
                <Select defaultValue="cheaper">
                  <SelectTrigger 
                    className="w-[160px] h-10 border-2 border-[#dddddd] rounded-lg text-sm"
                  >
                    <SelectValue placeholder="Сначала подешевле" />
                  </SelectTrigger>
                  <SelectContent 
                    className="z-50 bg-white rounded-lg shadow-xl"
                  >
                    <SelectItem value="cheaper">Сначала подешевле</SelectItem>
                    <SelectItem value="expensive">Сначала подороже</SelectItem>
                    <SelectItem value="popular">По популярности</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2.5 relative z-50">
                <Select defaultValue="9">
                  <SelectTrigger 
                    className="w-[70px] h-10 border-2 border-[#dddddd] rounded-lg text-sm"
                  >
                    <SelectValue placeholder="9" />
                  </SelectTrigger>
                  <SelectContent 
                    className="z-50 bg-white rounded-lg shadow-xl"
                  >
                    <SelectItem value="9">9</SelectItem>
                    <SelectItem value="12">12</SelectItem>
                    <SelectItem value="24">24</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Filter and Product Container */}
          <div className="w-full max-w-[1440px] mx-auto mt-10">
            <Card className="bg-white rounded-2xl border-0 shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)]">
              <CardContent className="p-6">
                <div className="flex flex-col gap-6 mt-6">
                  <h2 className="font-bold text-[#527dc5] text-lg [font-family:'Raleway',Helvetica]">
                    Подберите для себя необходимое
                  </h2>

                  {/* Selected Filters Bar */}
                  <div className="p-3 bg-[#f5f6ff] rounded-full">
                    <div className="flex flex-wrap items-center gap-2">
                      <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-full border border-[#dddddd] whitespace-nowrap">
                        <span className="font-semibold text-[#232c42] text-sm">Выбрано: {selectedCount}</span>
                        <Button className="px-3 py-1 h-7 text-xs font-semibold rounded-full bg-gradient-to-b from-[#73A8FF] to-[#3C6CEC] text-white">
                          Показать
                        </Button>
                      </div>
                      {selectedFilters.map((filter, index) => (
                        <Badge
                          key={`${filter.type}-${filter.value}-${index}`}
                          className="flex items-center gap-2 px-3 py-2 bg-white text-[#232c42] rounded-full border-none text-sm whitespace-nowrap"
                        >
                          <span className="font-medium">{filter.value}</span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              removeFilter(filter.type, filter.value);
                            }}
                            className="w-4 h-4"
                          >
                            <Image src="/Shatry3-group-5.webp" alt="Remove" width={16} height={16} />
                          </button>
                        </Badge>
                      ))}
                      {selectedFilters.length > 0 && (
                        <Button
                          onClick={(e) => {
                            e.stopPropagation();
                            resetFilters();
                          }}
                          className="px-3 py-2 h-9 text-xs font-semibold rounded-full bg-gradient-to-b from-[#73A8FF] to-[#3C6CEC] text-white whitespace-nowrap"
                        >
                          Сбросить все
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Price Filter */}
                  <div className="flex flex-col gap-4 border-b border-[#dddddd] pb-4">
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleFilterSection("price")}
                    >
                      <h3 className="font-semibold text-[#232c42] text-base [font-family:'Raleway',Helvetica]">
                        Цена
                      </h3>
                      <span>{showFilters.price ? "−" : "+"}</span>
                    </div>
                    {showFilters.price && (
                      <div className="w-full mt-2">
                        <div className="flex gap-2 mb-2">
                          <div className="flex-1">
                            <label className="block font-medium text-[#394355] text-xs mb-1">от</label>
                            <Input
                              value={formatCurrency(priceRange[0])}
                              onChange={(e) => {
                                const value = parseCurrency(e.target.value);
                                setPriceRange([value, priceRange[1]]);
                              }}
                              className="w-full h-8 text-sm border border-[#dddddd] rounded-lg p-2"
                            />
                          </div>
                          <div className="flex-1">
                            <label className="block font-medium text-[#394355] text-xs mb-1">до</label>
                            <Input
                              value={formatCurrency(priceRange[1])}
                              onChange={(e) => {
                                const value = parseCurrency(e.target.value);
                                setPriceRange([priceRange[0], value]);
                              }}
                              className="w-full h-8 text-sm border border-[#dddddd] rounded-lg p-2"
                            />
                          </div>
                        </div>
                        <Slider
                          value={priceRange}
                          onValueChange={(value) => {
                            setPriceRange(value as [number, number]);
                            triggerFilterEffect();
                          }}
                          min={20000}
                          max={2000000}
                          step={10000}
                          className="w-full [&_.slider-track]:bg-[#e8e8e8] [&_.slider-range]:bg-gradient-to-b from-[#73A8FF] to-[#3C6CEC] [&_.slider-thumb]:w-5 [&_.slider-thumb]:h-5 [&_.slider-thumb]:bg-white [&_.slider-thumb]:border-2 [&_.slider-thumb]:border-[#3C6CEC]"
                        />
                      </div>
                    )}
                  </div>

                  {/* Base Shape Filter */}
                  <div className="flex flex-col gap-4 border-b border-[#dddddd] pb-4">
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleFilterSection("shape")}
                    >
                      <h3 className="font-semibold text-[#232c42] text-base [font-family:'Raleway',Helvetica]">
                        Форма в основании
                      </h3>
                      <span>{showFilters.shape ? "−" : "+"}</span>
                    </div>
                    {showFilters.shape && (
                      <div className="grid grid-cols-2 gap-3 mt-2">
                        {baseShapes.map((shape, index) => (
                          <div key={`shape-${index}`} className="flex items-center gap-2">
                            <Checkbox
                              id={`shape-${index}`}
                              checked={selectedShapes.includes(shape)}
                              onCheckedChange={() => toggleSelection(shape, selectedShapes, setSelectedShapes)}
                              className="w-6 h-6 rounded-lg border-2 border-[#dddddd]"
                            />
                            <label
                              htmlFor={`shape-${index}`}
                              className="font-medium text-[#394355] text-sm [font-family:'Raleway',Helvetica]"
                            >
                              {shape}
                            </label>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Capacity Filter */}
                  <div className="flex flex-col gap-4 border-b border-[#dddddd] pb-4">
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleFilterSection("capacity")}
                    >
                      <h3 className="font-semibold text-[#232c42] text-base [font-family:'Raleway',Helvetica]">
                        Вместимость
                      </h3>
                      <span>{showFilters.capacity ? "−" : "+"}</span>
                    </div>
                    {showFilters.capacity && (
                      <div className="grid grid-cols-2 gap-3 mt-2">
                        {capacities.map((capacity, index) => (
                          <div key={`capacity-${index}`} className="flex items-center gap-2">
                            <Checkbox
                              id={`capacity-${index}`}
                              checked={selectedCapacities.includes(capacity)}
                              onCheckedChange={() =>
                                toggleSelection(capacity, selectedCapacities, setSelectedCapacities)
                              }
                              className="w-6 h-6 rounded-lg border-2 border-[#dddddd]"
                            />
                            <label
                              htmlFor={`capacity-${index}`}
                              className="font-medium text-[#394355] text-sm [font-family:'Raleway',Helvetica]"
                            >
                              {capacity}
                            </label>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Area Filter */}
                  <div className="flex flex-col gap-4 border-b border-[#dddddd] pb-4">
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleFilterSection("area")}
                    >
                      <h3 className="font-semibold text-[#232c42] text-base [font-family:'Raleway',Helvetica]">
                        Площадь
                      </h3>
                      <span>{showFilters.area ? "−" : "+"}</span>
                    </div>
                    {showFilters.area && (
                      <div className="grid grid-cols-2 gap-3 mt-2">
                        {areas.map((area, index) => (
                          <div key={`area-${index}`} className="flex items-center gap-2">
                            <Checkbox
                              id={`area-${index}`}
                              checked={selectedAreas.includes(area)}
                              onCheckedChange={() => toggleSelection(area, selectedAreas, setSelectedAreas)}
                              className="w-6 h-6 rounded-lg border-2 border-[#dddddd]"
                            />
                            <label
                              htmlFor={`area-${index}`}
                              className="font-medium text-[#394355] text-sm [font-family:'Raleway',Helvetica]"
                            >
                              {area}
                            </label>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                           {/* Popular Sizes Filter */}
<div className="flex flex-col gap-4 border-b border-[#dddddd] pb-4">
  <div
    className="flex justify-between items-center cursor-pointer"
    onClick={() => toggleFilterSection("sizes")}
  >
    <h3 className="font-semibold text-[#232c42] text-base [font-family:'Raleway',Helvetica]">
      Популярные размеры
    </h3>
    <span>{showFilters.sizes ? "−" : "+"}</span>
  </div>
  {showFilters.sizes && (
    <div className="grid grid-cols-2 gap-3 mt-2">
      {popularSizes.map((size, index) => (
        <div key={`size-${index}`} className="flex items-center gap-2">
          <Checkbox
            id={`size-${index}`}
            checked={selectedSizes.includes(size)}
           onCheckedChange={() => 
                              toggleSelection(size, selectedSizes, setSelectedSizes)
                            }
            className="w-6 h-6 rounded-lg border-2 border-[#dddddd]"
          />
          <label
            htmlFor={`size-${index}`}
            className="font-medium text-[#394355] text-sm [font-family:'Raleway',Helvetica]"
          >
            {size}
          </label>
        </div>
      ))}
    </div>
  )}
</div>

                  {/* Length Filter */}
                  <div className="flex flex-col gap-4 border-b border-[#dddddd] pb-4">
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleFilterSection("length")}
                    >
                      <h3 className="font-semibold text-[#232c42] text-base [font-family:'Raleway',Helvetica]">
                        Длина
                      </h3>
                      <span>{showFilters.length ? "−" : "+"}</span>
                    </div>
                    {showFilters.length && (
                      <div className="w-full mt-2">
                        <div className="flex gap-2 mb-2">
                          <div className="flex-1">
                            <label className="block font-medium text-[#394355] text-xs mb-1">от</label>
                            <Input
                              value={`${lengthRange[0]} м`}
                              onChange={(e) => {
                                const value = parseInt(e.target.value) || 0;
                                setLengthRange([value, lengthRange[1]]);
                              }}
                              className="w-full h-8 text-sm border border-[#dddddd] rounded-lg p-2"
                            />
                          </div>
                          <div className="flex-1">
                            <label className="block font-medium text-[#394355] text-xs mb-1">до</label>
                            <Input
                              value={`${lengthRange[1]} м`}
                              onChange={(e) => {
                                const value = parseInt(e.target.value) || 0;
                                setLengthRange([lengthRange[0], value]);
                              }}
                              className="w-full h-8 text-sm border border-[#dddddd] rounded-lg p-2"
                            />
                          </div>
                        </div>
                        <Slider
                          value={lengthRange}
                          onValueChange={(value) => {
                            setLengthRange(value as [number, number]);
                            triggerFilterEffect();
                          }}
                          min={2}
                          max={20}
                          step={1}
                          className="w-full [&_.slider-track]:bg-[#e8e8e8] [&_.slider-range]:bg-gradient-to-b from-[#73A8FF] to-[#3C6CEC] [&_.slider-thumb]:w-5 [&_.slider-thumb]:h-5 [&_.slider-thumb]:bg-white [&_.slider-thumb]:border-2 [&_.slider-thumb]:border-[#3C6CEC]"
                        />
                      </div>
                    )}
                  </div>

                  {/* Width Filter */}
                  <div className="flex flex-col gap-4 border-b border-[#dddddd] pb-4">
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleFilterSection("width")}
                    >
                      <h3 className="font-semibold text-[#232c42] text-base [font-family:'Raleway',Helvetica]">
                        Ширина
                      </h3>
                      <span>{showFilters.width ? "−" : "+"}</span>
                    </div>
                    {showFilters.width && (
                      <div className="w-full mt-2">
                        <div className="flex gap-2 mb-2">
                          <div className="flex-1">
                            <label className="block font-medium text-[#394355] text-xs mb-1">от</label>
                            <Input
                              value={`${widthRange[0]} м`}
                              onChange={(e) => {
                                const value = parseInt(e.target.value) || 0;
                                setWidthRange([widthRange[0], value]);
                              }}
                              className="w-full h-8 text-sm border border-[#dddddd] rounded-lg p-2"
                            />
                          </div>
                          <div className="flex-1">
                            <label className="block font-medium text-[#394355] text-xs mb-1">до</label>
                            <Input
                              value={`${widthRange[1]} м`}
                              onChange={(e) => {
                                const value = parseInt(e.target.value) || 0;
                                setWidthRange([widthRange[0], value]);
                              }}
                              className="w-full h-8 text-sm border border-[#dddddd] rounded-lg p-2"
                            />
                          </div>
                        </div>
                        <Slider
                          value={widthRange}
                          onValueChange={(value) => {
                            setWidthRange(value as [number, number]);
                            triggerFilterEffect();
                          }}
                          min={2}
                          max={20}
                          step={1}
                          className="w-full [&_.slider-track]:bg-[#e8e8e8] [&_.slider-range]:bg-gradient-to-b from-[#73A8FF] to-[#3C6CEC] [&_.slider-thumb]:w-5 [&_.slider-thumb]:h-5 [&_.slider-thumb]:bg-white [&_.slider-thumb]:border-2 [&_.slider-thumb]:border-[#3C6CEC]"
                        />
                      </div>
                    )}
                  </div>

         
                </div>
              </CardContent>
            </Card>
          </div>

                    {/* Product Grid */}
          <div className="w-full pt-8 ">
            <CatalogSh products={filteredProducts} visibleProducts={visibleProducts}/>
            <div className="pt-20 pb-12">
              <div className="flex justify-center mt-15">
                {visibleProducts < filteredProducts.length && (
                  <Button
                    variant="link"
                    onClick={handleShowMore}
                    className="font-bold text-[#527dc5] text-2xl leading-6 underline [font-family:'Raleway',Helvetica] p-0 h-auto"
                  >
                    Показать еще
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return isMobile ? <MobileView /> : <DesktopView />;
};

export default FilterAngar;