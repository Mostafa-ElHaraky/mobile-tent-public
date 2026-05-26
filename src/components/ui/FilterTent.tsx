'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CatalogSh from '../../components/ui/CatalogSh';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Checkbox } from '../../components/ui/checkbox';
import { Card, CardContent } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Carousel } from '../../components/ui/carousel';
import { Slider } from '../../components/ui/slider';
import {
  CarouselContent, CarouselItem, CarouselNext, CarouselPrevious
} from '../../components/ui/carousel';
import mockProducts from './mockProducts';

interface Product {
  id: string;
  title: string;
  images: string[];
  size: string;           // e.g. "10x12 м", "10х12", "5 х 5 м"
  area: number;           // m² numeric
  capacity: string;       // e.g. "до 6 чел."
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
  slug: string;
}

const baseShapes = ['Круг', 'Прямоугольник', 'Шестигранник', 'Звезда', 'Квадрат', 'Многоугольник', 'Овал'];
const capacities = ['до 2 чел.', 'до 4 чел.', 'до 6 чел.', 'до 10 чел.', 'до 20 чел.', 'до 25 чел.', 'до 35 чел.'];
const areas = ['до 20 м2', 'до 50 м2', 'до 100 м2', 'до 200 м2', 'до 300 м2', 'до 450 м2'];
const popularSizes = ['5х5', '6х6', '8х8', '10х10'];

const tentCategories: Category[] = [
  { id: 1, image: '/mobilny1.webp', title: 'Мобильные шатры', slug: 'mobilnye' },
  { id: 2, image: '/pagda1.webp', title: 'Пагода шатры', slug: 'pagoda' },
  { id: 3, image: '/1.webp', title: 'Арочные шатры', slug: 'arochnye' },
  { id: 4, image: '/bigsizes.webp', title: 'Большие шатры', slug: 'bolshie' },
  { id: 5, image: '/zvezda.webp', title: 'Шатер Звезда', slug: 'shater-zvezda' },
  { id: 6, image: '/shesteg1.webp', title: 'Шестигранные шатры', slug: 'shestigrannye' },
  { id: 7, image: '/kopal1.webp', title: 'Купольные шатры', slug: 'kruglye' },
  { id: 8, image: '/natyag.webp', title: 'Натяжные шатры', slug: 'natyagnye' },
  { id: 9, image: '/membranysh.webp', title: 'Мембранные шатры', slug: 'membrannye' },
  { id: 10, image: '/glemp1.webp', title: 'Глэмпинг', slug: 'glehmping' },
  { id: 11, image: '/nadyv.webp', title: 'Надувные шатры', slug: 'naduvnye' },
  { id: 12, image: '/spher1.webp', title: 'Сферические шатры', slug: 'kruglye' },
  { id: 13, image: '/transformsh.webp', title: 'Шатры-трансформеры', slug: 'transformer' },
];

/* ---------- Helpers (robust parsing) ---------- */

// Normalize "x" (latin) and "х" (cyrillic), remove spaces/units, return [L, W] numbers if found.
function parseSizeToLW(sizeStr: string): [number, number] | null {
  if (!sizeStr) return null;
  const clean = sizeStr
    .toLowerCase()
    .replace(/м2|м²|м/gi, '')
    .replace(/\s+/g, '')
    .replace(/[xх]/gi, 'x'); // make both separators latin 'x'

  const match = clean.match(/(\d+(?:[.,]\d+)?)[x](\d+(?:[.,]\d+)?)/i);
  if (!match) return null;
  const L = parseFloat(match[1].replace(',', '.'));
  const W = parseFloat(match[2].replace(',', '.'));
  if (Number.isFinite(L) && Number.isFinite(W)) return [L, W];
  return null;
}

// Extract number from "до 6 чел."
function maxPeopleFromLabel(label: string): number | null {
  const m = label.match(/(\d+)/);
  return m ? parseInt(m[1], 10) : null;
}

// Extract number from "до 100 м2"
function maxAreaFromLabel(label: string): number | null {
  const m = label.match(/(\d+)/);
  return m ? parseInt(m[1], 10) : null;
}

function parseCurrency(input: string): number {
  const clean = input.replace(/[^\d]/g, '');
  return parseInt(clean || '0', 10);
}

function formatCurrency(value: number): string {
  return (value || 0).toLocaleString('ru-RU');
}

// Normalize sizes for equality (e.g., "5x5" == "5х5")
function normalizeSizeLabel(s: string): string {
  return s.toLowerCase().replace(/\s+/g, '').replace(/[xх]/g, 'x');
}

/* ---------- Component ---------- */

export const FilterTent = () => {
  const [selectedShapes, setSelectedShapes] = useState<string[]>([]);
  const [selectedCapacities, setSelectedCapacities] = useState<string[]>([]);
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([20000, 2000000]);
  const [lengthRange, setLengthRange] = useState<[number, number]>([2, 10]);
  const [widthRange, setWidthRange] = useState<[number, number]>([2, 10]);

  const [visibleProducts, setVisibleProducts] = useState(6);
  const itemsPerPage = 3;
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // safer mobile check
  useEffect(() => {
    const checkIfMobile = () => setIsMobile(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const toggleSelection = useCallback((
    item: string,
    state: string[],
    setState: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setState(prev => prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]);
  }, []);

  const resetFilters = useCallback(() => {
    setSelectedShapes([]);
    setSelectedCapacities([]);
    setSelectedAreas([]);
    setSelectedSizes([]);
    setPriceRange([20000, 2000000]);
    setLengthRange([2, 10]);
    setWidthRange([2, 10]);
  }, []);

  const removeFilter = useCallback((type: string, value: string) => {
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
  }, []);

  // Compute filtered products with robust parsing; also reset pagination when filters change
  const filteredProducts = useMemo(() => {
    const filtered = mockProducts.filter((product: Product) => {
      if (!product || !product.images?.length) return false;

      // shape
      if (selectedShapes.length > 0 && product.shape && !selectedShapes.includes(product.shape)) {
        return false;
      }

      // capacity (product.capacity like "до 6 чел.")
      if (selectedCapacities.length > 0) {
        const productCap = maxPeopleFromLabel(product.capacity ?? '');
        if (productCap == null) return false;
        const ok = selectedCapacities.some(lbl => {
          const maxLbl = maxPeopleFromLabel(lbl);
          return maxLbl != null && productCap <= maxLbl;
        });
        if (!ok) return false;
      }

      // area
      if (selectedAreas.length > 0) {
        const ok = selectedAreas.some(lbl => {
          const maxA = maxAreaFromLabel(lbl);
          return maxA != null && product.area <= maxA;
        });
        if (!ok) return false;
      }

      // sizes equality (normalize both "x" and "х")
      if (selectedSizes.length > 0) {
        const productNorm = normalizeSizeLabel(product.size || '');
        const wanted = selectedSizes.map(normalizeSizeLabel);
        if (!wanted.some(w => productNorm.includes(w))) {
          return false;
        }
      }

      // price after discount
      const discountedPrice = product.basePrice * (1 - (product.discountPercentage || 0) / 100);
      if (discountedPrice < priceRange[0] || discountedPrice > priceRange[1]) {
        return false;
      }

      // length/width from size
      const lw = parseSizeToLW(product.size || '');
      if (lw) {
        const [L, W] = lw;
        if (L < lengthRange[0] || L > lengthRange[1]) return false;
        if (W < widthRange[0] || W > widthRange[1]) return false;
      } else {
        // if size can't be parsed, exclude only if user narrowed ranges below defaults
        const narrowedLength = lengthRange[0] > 2 || lengthRange[1] < 20;
        const narrowedWidth  = widthRange[0]  > 2 || widthRange[1]  < 20;
        if (narrowedLength || narrowedWidth) return false;
      }

      return true;
    });

    return filtered;
  }, [selectedShapes, selectedCapacities, selectedAreas, selectedSizes, priceRange, lengthRange, widthRange]);

  // Reset pagination whenever filters change
  useEffect(() => {
    setVisibleProducts(6);
  }, [selectedShapes, selectedCapacities, selectedAreas, selectedSizes, priceRange, lengthRange, widthRange]);

  const selectedCount = filteredProducts.length;

  const selectedFilters = useMemo(() => ([
    ...selectedShapes.map(value => ({ type: 'shape', name: 'Форма', value })),
    ...selectedCapacities.map(value => ({ type: 'capacity', name: 'Вместимость', value })),
    ...selectedAreas.map(value => ({ type: 'area', name: 'Площадь', value })),
    ...selectedSizes.map(value => ({ type: 'size', name: 'Размер', value })),
  ]), [selectedShapes, selectedCapacities, selectedAreas, selectedSizes]);

  const handleShowMore = useCallback(() => {
    setVisibleProducts(prev => prev + itemsPerPage);
  }, []);

  /* ================= Desktop View ================= */
  const DesktopView = () => (
    <section className="flex flex-col gap-[45px] w-full mx-auto px-12">
      {/* Tent Categories */}
      <section className="w-full max-w-[1440px] min-h-[398px]">
        <div className="w-full h-full bg-[#eef1f8] rounded-[20px] p-12 pt-[60px]">
          <div className="flex flex-col gap-9">
            <header className="flex w-full items-center justify-between">
              <h2 className="font-semibold text-[#232c42] text-4xl [font-family:'Raleway',Helvetica]">
                Выбирайте категорию шатров
              </h2>
              <Button
                variant="link"
                className="font-bold text-[#527dc5] text-2xl leading-6 underline [font-family:'Raleway',Helvetica] p-0 h-auto"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? "Скрыть" : "Показать все"}
              </Button>
            </header>

            <Card className="bg-white rounded-[20px] border-0 shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] backdrop-blur-[79px]">
              <CardContent className="p-6">
                {showAll ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                    {tentCategories.map((category) => (
                      <div key={category.id} className="flex flex-col items-center text-center w-40">
                        <div className="relative w-32 h-[84px]">
                          <Image
                            src={category.image}
                            alt={category.title}
                            fill
                            className="object-contain"  // no cropping
                            sizes="128px"
                            loading="lazy"
                          />
                        </div>
                        <Link
                          href={`/shatry-i-navesy/${category.slug}`}
                          className="font-bold text-[#527dc5] text-xl leading-6 [font-family:'Raleway',Helvetica] hover:underline mt-4"
                        >
                          {category.title}
                        </Link>
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
                          <div className="flex flex-col items-center text-center w-full">
                            <div className="relative w-40 h-[154px]">
                              <Image
                                src={category.image}
                                alt={category.title}
                                fill
                                className="object-contain"  // no cropping
                                sizes="160px"
                                loading="lazy"
                              />
                            </div>
                            <Link
                              href={`/shatry-i-navesy/${category.slug}`}
                              className="font-bold text-[#527dc5] text-l leading-6 [font-family:'Raleway',Helvetica] hover:underline mt-4"
                            >
                              {category.title}
                            </Link>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <div className="flex gap-2 justify-end mt-4">
                      <CarouselPrevious className="w-14 h-14 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]">
                        <Image width={14} height={24} className="w-3.5 h-6" alt="Previous slide" src="/GROP-10.webp" loading="lazy" />
                      </CarouselPrevious>
                      <CarouselNext className="w-14 h-14 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]">
                        <Image width={14} height={24} className="w-3.5 h-6" alt="Next slide" src="/GROP-11.webp" loading="lazy" />
                      </CarouselNext>
                    </div>
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
          <div className="flex w-full items-center justify-between">
            <h5 className="font-semibold text-[#232c42] text-4xl [font-family:'Raleway',Helvetica]">Каталог</h5>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="font-bold text-[#527dc5] text-xl leading-6 [font-family:'Raleway',Helvetica]">
              Подберите для себя необходимое
            </h2>

            <div className="flex flex-wrap gap-[41px]">
              {/* Price */}
              <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-[#232c42] text-lg [font-family:'Raleway',Helvetica]">Цена</h3>
                <div className="w-[294px]">
                  <div className="flex gap-2.5">
                    <div className="flex flex-col gap-1 p-3 rounded-lg border-2 border-[#dddddd]">
                      <label className="font-medium text-[#394355] text-xs [font-family:'Raleway',Helvetica]">от</label>
                      <Input
                        inputMode="numeric"
                        className="font-medium text-[#394355] text-base [font-family:'Raleway',Helvetica] border-none p-0 h-6"
                        value={formatCurrency(priceRange[0])}
                        onChange={(e) => setPriceRange([parseCurrency(e.target.value), priceRange[1]])}
                      />
                    </div>
                    <div className="flex flex-col gap-1 p-3 rounded-lg border-2 border-[#dddddd]">
                      <label className="font-medium text-[#394355] text-xs [font-family:'Raleway',Helvetica]">до</label>
                      <Input
                        inputMode="numeric"
                        className="font-medium text-[#394355] text-base [font-family:'Raleway',Helvetica] border-none p-0 h-6"
                        value={formatCurrency(priceRange[1])}
                        onChange={(e) => setPriceRange([priceRange[0], parseCurrency(e.target.value)])}
                      />
                    </div>
                  </div>
                  <div className="mt-6 px-1.5">
                    <Slider
                      value={priceRange}
                      onValueChange={(value) => setPriceRange(value as [number, number])}
                      min={20000}
                      max={2000000}
                      step={10000}
                      className="[&_.slider-track]:bg-[#e8e8e8] [&_.slider-range]:bg-gradient-to-b from-[rgba(115,168,255,1)] via-[rgba(111,167,255,1)] to-[rgba(60,108,236,1)]"
                    />
                  </div>
                </div>
              </div>

              {/* Base shape */}
              <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-[#232c42] text-lg [font-family:'Raleway',Helvetica]">Форма в основании</h3>
                <div className="flex flex-col gap-[26px]">
                  {baseShapes.map((shape, index) => (
                    <div key={`shape-${index}`} className="flex items-center gap-2.5">
                      <Checkbox
                        id={`shape-${index}`}
                        className="w-[33px] h-[33px] rounded-lg border-2 border-[#dddddd]"
                        checked={selectedShapes.includes(shape)}
                        onCheckedChange={() => toggleSelection(shape, selectedShapes, setSelectedShapes)}
                      />
                      <label htmlFor={`shape-${index}`} className="font-medium text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]">
                        {shape}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Capacity */}
              <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-[#232c42] text-lg [font-family:'Raleway',Helvetica]">Вместимость</h3>
                <div className="flex flex-col gap-[26px]">
                  {capacities.map((capacity, index) => (
                    <div key={`capacity-${index}`} className="flex items-center gap-2.5">
                      <Checkbox
                        id={`capacity-${index}`}
                        className="w-[33px] h-[33px] rounded-lg border-2 border-[#dddddd]"
                        checked={selectedCapacities.includes(capacity)}
                        onCheckedChange={() => toggleSelection(capacity, selectedCapacities, setSelectedCapacities)}
                      />
                      <label htmlFor={`capacity-${index}`} className="font-medium text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]">
                        {capacity}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Area */}
              <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-[#232c42] text-lg [font-family:'Raleway',Helvetica]">Площадь</h3>
                <div className="flex flex-col gap-[26px]">
                  {areas.map((area, index) => (
                    <div key={`area-${index}`} className="flex items-center gap-2.5">
                      <Checkbox
                        id={`area-${index}`}
                        className="w-[33px] h-[33px] rounded-lg border-2 border-[#dddddd]"
                        checked={selectedAreas.includes(area)}
                        onCheckedChange={() => toggleSelection(area, selectedAreas, setSelectedAreas)}
                      />
                      <label htmlFor={`area-${index}`} className="font-medium text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]">
                        {area}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Length & Width */}
              <div className="flex flex-col gap-[18px]">
                <div className="flex flex-col gap-4">
                  <h3 className="font-semibold text-[#232c42] text-lg [font-family:'Raleway',Helvetica]">Длина</h3>
                  <div className="w-60">
                    <div className="flex gap-2.5">
                      <div className="flex flex-col gap-1 p-3 rounded-lg border-2 border-[#dddddd]">
                        <label className="font-medium text-[#394355] text-xs [font-family:'Raleway',Helvetica]">от</label>
                        <Input
                          inputMode="numeric"
                          className="font-medium text-[#394355] text-base [font-family:'Raleway',Helvetica] border-none p-0 h-6"
                          value={`${lengthRange[0]} м`}
                          onChange={(e) => {
                            const v = parseInt(e.target.value.replace(/[^\d]/g, '') || '0', 10);
                            setLengthRange([v, Math.max(v, lengthRange[1])]);
                          }}
                        />
                      </div>
                      <div className="flex flex-col gap-1 p-3 rounded-lg border-2 border-[#dddddd]">
                        <label className="font-medium text-[#394355] text-xs [font-family:'Raleway',Helvetica]">до</label>
                        <Input
                          inputMode="numeric"
                          className="font-medium text-[#394355] text-base [font-family:'Raleway',Helvetica] border-none p-0 h-6"
                          value={`${lengthRange[1]} м`}
                          onChange={(e) => {
                            const v = parseInt(e.target.value.replace(/[^\d]/g, '') || '0', 10);
                            setLengthRange([Math.min(lengthRange[0], v), v]);
                          }}
                        />
                      </div>
                    </div>
                    <div className="mt-6 px-1.5">
                      <Slider
                        value={lengthRange}
                        onValueChange={(value) => setLengthRange(value as [number, number])}
                        min={2}
                        max={20}
                        step={1}
                        className="[&_.slider-track]:bg-[#e8e8e8] [&_.slider-range]:bg-gradient-to-b from-[rgba(115,168,255,1)] via-[rgba(111,167,255,1)] to-[rgba(60,108,236,1)]"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="font-semibold text-[#232c42] text-lg [font-family:'Raleway',Helvetica]">Ширина</h3>
                  <div className="w-60">
                    <div className="flex gap-2.5">
                      <div className="flex flex-col gap-1 p-3 rounded-lg border-2 border-[#dddddd]">
                        <label className="font-medium text-[#394355] text-xs [font-family:'Raleway',Helvetica]">от</label>
                        <Input
                          inputMode="numeric"
                          className="font-medium text-[#394355] text-base [font-family:'Raleway',Helvetica] border-none p-0 h-6"
                          value={`${widthRange[0]} м`}
                          onChange={(e) => {
                            const v = parseInt(e.target.value.replace(/[^\d]/g, '') || '0', 10);
                            setWidthRange([v, Math.max(v, widthRange[1])]);
                          }}
                        />
                      </div>
                      <div className="flex flex-col gap-1 p-3 rounded-lg border-2 border-[#dddddd]">
                        <label className="font-medium text-[#394355] text-xs [font-family:'Raleway',Helvetica]">до</label>
                        <Input
                          inputMode="numeric"
                          className="font-medium text-[#394355] text-base [font-family:'Raleway',Helvetica] border-none p-0 h-6"
                          value={`${widthRange[1]} м`}
                          onChange={(e) => {
                            const v = parseInt(e.target.value.replace(/[^\d]/g, '') || '0', 10);
                            setWidthRange([Math.min(widthRange[0], v), v]);
                          }}
                        />
                      </div>
                    </div>
                    <div className="mt-6 px-1.5">
                      <Slider
                        value={widthRange}
                        onValueChange={(value) => setWidthRange(value as [number, number])}
                        min={2}
                        max={20}
                        step={1}
                        className="[&_.slider-track]:bg-[#e8e8e8] [&_.slider-range]:bg-gradient-to-b from-[rgba(115,168,255,1)] via-[rgba(111,167,255,1)] to-[rgba(60,108,236,1)]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Popular sizes – keep your position if needed; suggest avoiding absolute positioning */}
              <div className="relative bottom-[400px] left-[1150px]">
                <div className="flex flex-col gap-4">
                  <h3 className="font-semibold text-[#232c42] text-lg [font-family:'Raleway',Helvetica]">Популярные размеры</h3>
                  <div className="flex flex-col gap-[26px]">
                    {popularSizes.map((size, index) => (
                      <div key={`size-${index}`} className="flex items-center gap-2.5">
                        <Checkbox
                          id={`size-${index}`}
                          className="w-[33px] h-[33px] rounded-lg border-2 border-[#dddddd]"
                          checked={selectedSizes.includes(size)}
                          onCheckedChange={() => toggleSelection(size, selectedSizes, setSelectedSizes)}
                        />
                        <label htmlFor={`size-${index}`} className="font-medium text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]">
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

        {/* Selected filters bar */}
        <div className="relative bottom-[200px]">
          <div className="flex items-center justify-between p-3 bg-[#f5f6ff] rounded-[50px]">
            <div className="flex items-center gap-6 flex-wrap">
              {selectedFilters.map((filter, index) => (
                <Badge
                  key={`${filter.type}-${filter.value}-${index}`}
                  className="flex items-center gap-2.5 px-4 py-[13px] h-[46px] bg-white text-[#232c42] rounded-[50px] border-none"
                >
                  <span className="font-semibold text-lg [font-family:'Raleway',Helvetica]">{filter.value}</span>
                  <button
                    className="w-[15px] h-[14.99px]"
                    onClick={() => removeFilter(filter.type, filter.value)}
                    aria-label="Удалить фильтр"
                  >
                    <Image src="/Shatry3-group-5.webp" alt="Remove" width={15} height={15} loading="lazy" />
                  </button>
                </Badge>
              ))}
              <Button
                onClick={resetFilters}
                disabled={
                  selectedShapes.length === 0 &&
                  selectedCapacities.length === 0 &&
                  selectedAreas.length === 0 &&
                  selectedSizes.length === 0 &&
                  priceRange[0] === 20000 && priceRange[1] === 2000000 &&
                  lengthRange[0] === 2 && lengthRange[1] === 10 &&
                  widthRange[0] === 2 && widthRange[1] === 10
                }
                className="flex items-center gap-2.5 px-4 py-[13px] h-[46px] font-semibold text-white text-lg rounded-[50px] [font-family:'Raleway',Helvetica] shadow-2 [background:linear-gradient(159deg,rgba(36,48,87,1)_0%,rgba(55,66,85,1)_100%)] disabled:opacity-50"
              >
                Сбросить все
              </Button>
            </div>
            <div className="flex items-center gap-[18px] pl-3 pr-1.5 py-1.5 bg-white rounded-[50px] border-2 border-[#dddddd]">
              <span className="font-semibold text-[#232c42] text-lg [font-family:'Raleway',Helvetica]">Выбрано: {selectedCount}</span>
              <Button className="flex items-center gap-2.5 px-4 py-[13px] h-[46px] font-semibold text-white text-lg rounded-[50px] [font-family:'Raleway',Helvetica] shadow-[0px_22px_20px_#1f7cfe33] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
                Показать
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Product grid */}
      <div className="relative w-full bottom-[150px]">
        <div className="relative w-full bottom-[150px]">
          <CatalogSh products={filteredProducts} visibleProducts={visibleProducts} />
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
        </div>
      </div>
    </section>
  );

  /* ================= Mobile View ================= */
  const MobileView = () => {
    const [showFilters, setShowFilters] = useState({
      price: true,
      shape: true,
      capacity: true,
      area: true,
      length: true,
      width: true,
      sizes: true,
    });

    type FilterSection = keyof typeof showFilters;
    const toggleFilterSection = (section: FilterSection) =>
      setShowFilters(prev => ({ ...prev, [section]: !prev[section] }));

    return (
      <section className="flex flex-col gap-6 w-full px-4 pb-12">
        {/* Categories */}
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
                          <div className="relative w-24 h-24">
                            <Image src={category.image} alt={category.title} fill className="object-contain rounded-lg" />
                          </div>
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
                              <div className="relative w-24 h-24">
                                <Image src={category.image} alt={category.title} fill className="object-contain rounded-lg" />
                              </div>
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

        {/* Catalog header */}
        <div className="flex flex-col gap-6">
          <div className="flex w-full items-center justify-between">
            <h5 className="font-semibold text-[#232c42] text-2xl [font-family:'Raleway',Helvetica]">Каталог</h5>
          </div>

          {/* Filters + Products */}
          <div className="w-full max-w-[1440px] mx-auto">
            <Card className="bg-white rounded-2xl border-0 shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)]">
              <CardContent className="p-6">
                <div className="flex flex-col gap-6 mt-6">
                  <h2 className="font-bold text-[#527dc5] text-lg [font-family:'Raleway',Helvetica]">
                    Подберите для себя необходимое
                  </h2>

                  {/* Selected filters bar */}
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
                            aria-label="Удалить фильтр"
                          >
                            <Image src="/Shatry3-group-5.webp" loading="lazy" alt="Remove" width={16} height={16} />
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

                  {/* PRICE */}
                  <div className="flex flex-col gap-4 border-b border-[#dddddd] pb-4">
                    <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFilterSection('price')}>
                      <h3 className="font-semibold text-[#232c42] text-base [font-family:'Raleway',Helvetica]">Цена</h3>
                      <span>{showFilters.price ? '−' : '+'}</span>
                    </div>
                    {showFilters.price && (
                      <div className="w-full mt-2">
                        <div className="flex gap-2 mb-2">
                          <div className="flex-1">
                            <label className="block font-medium text-[#394355] text-xs mb-1">от</label>
                            <Input
                              inputMode="numeric"
                              value={formatCurrency(priceRange[0])}
                              onChange={(e) => setPriceRange([parseCurrency(e.target.value), priceRange[1]])}
                              className="w-full h-8 text-sm border border-[#dddddd] rounded-lg p-2"
                            />
                          </div>
                          <div className="flex-1">
                            <label className="block font-medium text-[#394355] text-xs mb-1">до</label>
                            <Input
                              inputMode="numeric"
                              value={formatCurrency(priceRange[1])}
                              onChange={(e) => setPriceRange([priceRange[0], parseCurrency(e.target.value)])}
                              className="w-full h-8 text-sm border border-[#dddddd] rounded-lg p-2"
                            />
                          </div>
                        </div>
                        <Slider
                          value={priceRange}
                          onValueChange={(value) => setPriceRange(value as [number, number])}
                          min={20000}
                          max={2000000}
                          step={10000}
                          className="w-full [&_.slider-track]:bg-[#e8e8e8] [&_.slider-range]:bg-gradient-to-b from-[#73A8FF] to-[#3C6CEC] [&_.slider-thumb]:w-5 [&_.slider-thumb]:h-5 [&_.slider-thumb]:bg-white [&_.slider-thumb]:border-2 [&_.slider-thumb]:border-[#3C6CEC]"
                        />
                      </div>
                    )}
                  </div>

                  {/* SHAPE */}
                  <div className="flex flex-col gap-4 border-b border-[#dddddd] pb-4">
                    <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFilterSection('shape')}>
                      <h3 className="font-semibold text-[#232c42] text-base [font-family:'Raleway',Helvetica]">Форма в основании</h3>
                      <span>{showFilters.shape ? '−' : '+'}</span>
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
                            <label htmlFor={`shape-${index}`} className="font-medium text-[#394355] text-sm [font-family:'Raleway',Helvetica]">
                              {shape}
                            </label>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* CAPACITY */}
                  <div className="flex flex-col gap-4 border-b border-[#dddddd] pb-4">
                    <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFilterSection('capacity')}>
                      <h3 className="font-semibold text-[#232c42] text-base [font-family:'Raleway',Helvetica]">Вместимость</h3>
                      <span>{showFilters.capacity ? '−' : '+'}</span>
                    </div>
                    {showFilters.capacity && (
                      <div className="grid grid-cols-2 gap-3 mt-2">
                        {capacities.map((capacity, index) => (
                          <div key={`capacity-${index}`} className="flex items-center gap-2">
                            <Checkbox
                              id={`capacity-${index}`}
                              checked={selectedCapacities.includes(capacity)}
                              onCheckedChange={() => toggleSelection(capacity, selectedCapacities, setSelectedCapacities)}
                              className="w-6 h-6 rounded-lg border-2 border-[#dddddd]"
                            />
                            <label htmlFor={`capacity-${index}`} className="font-medium text-[#394355] text-sm [font-family:'Raleway',Helvetica]">
                              {capacity}
                            </label>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* AREA */}
                  <div className="flex flex-col gap-4 border-b border-[#dddddd] pb-4">
                    <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFilterSection('area')}>
                      <h3 className="font-semibold text-[#232c42] text-base [font-family:'Raleway',Helvetica]">Площадь</h3>
                      <span>{showFilters.area ? '−' : '+'}</span>
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
                            <label htmlFor={`area-${index}`} className="font-medium text-[#394355] text-sm [font-family:'Raleway',Helvetica]">
                              {area}
                            </label>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* POPULAR SIZES */}
                  <div className="flex flex-col gap-4 border-b border-[#dddddd] pb-4">
                    <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFilterSection('sizes')}>
                      <h3 className="font-semibold text-[#232c42] text-base [font-family:'Raleway',Helvetica]">Популярные размеры</h3>
                      <span>{showFilters.sizes ? '−' : '+'}</span>
                    </div>
                    {showFilters.sizes && (
                      <div className="grid grid-cols-2 gap-3 mt-2">
                        {popularSizes.map((size, index) => (
                          <div key={`size-${index}`} className="flex items-center gap-2">
                            <Checkbox
                              id={`size-${index}`}
                              checked={selectedSizes.includes(size)}
                              onCheckedChange={() => toggleSelection(size, selectedSizes, setSelectedSizes)}
                              className="w-6 h-6 rounded-lg border-2 border-[#dddddd]"
                            />
                            <label htmlFor={`size-${index}`} className="font-medium text-[#394355] text-sm [font-family:'Raleway',Helvetica]">
                              {size}
                            </label>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* LENGTH */}
                  <div className="flex flex-col gap-4 border-b border-[#dddddd] pb-4">
                    <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFilterSection('length')}>
                      <h3 className="font-semibold text-[#232c42] text-base [font-family:'Raleway',Helvetica]">Длина</h3>
                      <span>{showFilters.length ? '−' : '+'}</span>
                    </div>
                    {showFilters.length && (
                      <div className="w-full mt-2">
                        <div className="flex gap-2 mb-2">
                          <div className="flex-1">
                            <label className="block font-medium text-[#394355] text-xs mb-1">от</label>
                            <Input
                              inputMode="numeric"
                              value={`${lengthRange[0]} м`}
                              onChange={(e) => {
                                const v = parseInt(e.target.value.replace(/[^\d]/g, '') || '0', 10);
                                setLengthRange([v, Math.max(v, lengthRange[1])]);
                              }}
                              className="w-full h-8 text-sm border border-[#dddddd] rounded-lg p-2"
                            />
                          </div>
                          <div className="flex-1">
                            <label className="block font-medium text-[#394355] text-xs mb-1">до</label>
                            <Input
                              inputMode="numeric"
                              value={`${lengthRange[1]} м`}
                              onChange={(e) => {
                                const v = parseInt(e.target.value.replace(/[^\d]/g, '') || '0', 10);
                                setLengthRange([Math.min(lengthRange[0], v), v]);
                              }}
                              className="w-full h-8 text-sm border border-[#dddddd] rounded-lg p-2"
                            />
                          </div>
                        </div>
                        <Slider
                          value={lengthRange}
                          onValueChange={(value) => setLengthRange(value as [number, number])}
                          min={2}
                          max={20}
                          step={1}
                          className="w-full [&_.slider-track]:bg-[#e8e8e8] [&_.slider-range]:bg-gradient-to-b from-[#73A8FF] to-[#3C6CEC] [&_.slider-thumb]:w-5 [&_.slider-thumb]:h-5 [&_.slider-thumb]:bg-white [&_.slider-thumb]:border-2 [&_.slider-thumb]:border-[#3C6CEC]"
                        />
                      </div>
                    )}
                  </div>

                  {/* WIDTH */}
                  <div className="flex flex-col gap-4 border-b border-[#dddddd] pb-4">
                    <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFilterSection('width')}>
                      <h3 className="font-semibold text-[#232c42] text-base [font-family:'Raleway',Helvetica]">Ширина</h3>
                      <span>{showFilters.width ? '−' : '+'}</span>
                    </div>
                    {showFilters.width && (
                      <div className="w-full mt-2">
                        <div className="flex gap-2 mb-2">
                          <div className="flex-1">
                            <label className="block font-medium text-[#394355] text-xs mb-1">от</label>
                            <Input
                              inputMode="numeric"
                              value={`${widthRange[0]} м`}
                              onChange={(e) => {
                                const v = parseInt(e.target.value.replace(/[^\d]/g, '') || '0', 10);
                                setWidthRange([v, Math.max(v, widthRange[1])]);
                              }}
                              className="w-full h-8 text-sm border border-[#dddddd] rounded-lg p-2"
                            />
                          </div>
                          <div className="flex-1">
                            <label className="block font-medium text-[#394355] text-xs mb-1">до</label>
                            <Input
                              inputMode="numeric"
                              value={`${widthRange[1]} м`}
                              onChange={(e) => {
                                const v = parseInt(e.target.value.replace(/[^\d]/g, '') || '0', 10);
                                setWidthRange([Math.min(widthRange[0], v), v]);
                              }}
                              className="w-full h-8 text-sm border border-[#dddddd] rounded-lg p-2"
                            />
                          </div>
                        </div>
                        <Slider
                          value={widthRange}
                          onValueChange={(value) => setWidthRange(value as [number, number])}
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

          {/* Products */}
          <div className="w-full py-2">
            <CatalogSh products={filteredProducts} visibleProducts={visibleProducts} />
            <div className="flex justify-center py-6">
              {visibleProducts < filteredProducts.length && (
                <Button
                  variant="link"
                  onClick={handleShowMore}
                  className="font-bold text-[#527dc5] text-lg underline [font-family:'Raleway',Helvetica] py-2"
                >
                  Показать еще
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  };

  return isMobile ? <MobileView /> : <DesktopView />;
};

export default FilterTent;
