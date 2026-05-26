'use client';

import React, { useState } from "react";
import { Card, CardContent } from "../../../../../../../components/ui/card";
import { ReactElement } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Updated product data - no href fields
const archWallProducts = [
  { id: 742, name: "Полумесяц белый 8 м", priceFormatted: "19 800 ₽", priceNumeric: 19800, image: "/m.webp" },
  { id: 743, name: "Полумесяц прозрачный 8 м", priceFormatted: "19 800 ₽", priceNumeric: 19800, image: "/m-a.webp" },
  { id: 764, name: "Герметизация фермы 8 м", priceFormatted: "28 600 ₽", priceNumeric: 28600, image: "/g.webp" },
  { id: 744, name: "Стена сплошная белая 8 м", priceFormatted: "39 600 ₽", priceNumeric: 39600, image: "/w.webp" },
  { id: 745, name: "Стена сплошная прозрачная 8 м", priceFormatted: "39 600 ₽", priceNumeric: 39600, image: "/w-a.webp" },
  { id: 746, name: "Стена раздвижная 8 белая + полумесяц", priceFormatted: "56 100 ₽", priceNumeric: 56100, image: "/s.webp" },
  { id: 747, name: "Стена раздвижная 8 м прозрачная + полумесяц", priceFormatted: "56 100 ₽", priceNumeric: 56100, image: "/s-a.webp" },
  { id: 753, name: "Стена сплошная 8 м белая с одностворчатой ПВХ дверью", priceFormatted: "135 300 ₽", priceNumeric: 135300, image: "/wd.webp" },
  { id: 771, name: "Стена сплошная 8 м белая с одностворчатой алюминиевой дверью", priceFormatted: "160 600 ₽", priceNumeric: 160600, image: "/wd.webp" },
  { id: 755, name: "Стена сплошная 8 м белая с двустворчатой ПВХ дверью", priceFormatted: "155 100 ₽", priceNumeric: 155100, image: "/wdd.webp" },
  { id: 773, name: "Стена сплошная 8 м белая с двустворчатой алюминиевой дверью", priceFormatted: "237 600 ₽", priceNumeric: 237600, image: "/wdd.webp" },
  { id: 756, name: "Стена сплошная 8 м прозрачная с одностворчатой ПВХ дверью", priceFormatted: "135 300 ₽", priceNumeric: 135300, image: "/wda.webp" },
  { id: 772, name: "Стена сплошная 8 м прозрачная с одностворчатой алюминиевой дверью", priceFormatted: "160 600 ₽", priceNumeric: 160600, image: "/wda.webp" },
  { id: 757, name: "Стена сплошная 8 м прозрачная с двустворчатой ПВХ дверью", priceFormatted: "155 100 ₽", priceNumeric: 155100, image: "/wdda.webp" },
  { id: 774, name: "Стена сплошная 8 м прозрачная с двустворчатой алюминиевой дверью", priceFormatted: "237 600 ₽", priceNumeric: 237600, image: "/wdda.webp" },
  { id: 748, name: "Стена внешняя 8 м белая", priceFormatted: "47 300 ₽", priceNumeric: 47300, image: "/wz.webp" },
  { id: 758, name: "Стена внешняя 8 м белая с одностворчатой ПВХ дверью", priceFormatted: "143 000 ₽", priceNumeric: 143000, image: "/wzd.webp" },
  { id: 775, name: "Стена внешняя 8 м белая с одностворчатой алюминиевой дверью", priceFormatted: "168 300 ₽", priceNumeric: 168300, image: "/wzd.webp" },
  { id: 759, name: "Стена внешняя 8 м белая с двустворчатой ПВХ дверью", priceFormatted: "162 800 ₽", priceNumeric: 162800, image: "/wzdd.webp" },
  { id: 776, name: "Стена внешняя 8 м белая с двустворчатой алюминиевой дверью", priceFormatted: "245 300 ₽", priceNumeric: 245300, image: "/wzdd.webp" },
  { id: 751, name: "Стена внешняя 8 м прозрачная", priceFormatted: "47 300 ₽", priceNumeric: 47300, image: "/wz-a.webp" },
  { id: 760, name: "Стена внешняя 8 м прозрачная с одностворчатой ПВХ дверью", priceFormatted: "143 000 ₽", priceNumeric: 143000, image: "/wzd-a.webp" },
  { id: 777, name: "Стена внешняя 8 м прозрачная с одностворчатой алюминиевой дверью", priceFormatted: "168 300 ₽", priceNumeric: 168300, image: "/wzd-a.webp" },
  { id: 761, name: "Стена внешняя 8 м прозрачная с двустворчатой ПВХ дверью", priceFormatted: "162 800 ₽", priceNumeric: 162800, image: "/wzdd-a.webp" },
  { id: 778, name: "Стена внешняя 8 м прозрачная с двустворчатой алюминиевой дверью", priceFormatted: "245 300 ₽", priceNumeric: 245300, image: "/wzdd-a.webp" },
  { id: 749, name: "Cтена зимняя 8 м белая 2 слоя", priceFormatted: "86 900 ₽", priceNumeric: 86900, image: "/wz.webp" },
  { id: 765, name: "Cтена зимняя 8 м белая 2 слоя с одностворчатой ПВХ дверью", priceFormatted: "182 600 ₽", priceNumeric: 182600, image: "/wzd.webp" },
  { id: 779, name: "Cтена зимняя 8 м белая 2 слоя с одностворчатой алюминиевой дверью", priceFormatted: "207 900 ₽", priceNumeric: 207900, image: "/wzd.webp" },
  { id: 766, name: "Cтена зимняя 8 м белая 2 слоя с двустворчатой ПВХ дверью", priceFormatted: "202 400 ₽", priceNumeric: 202400, image: "/wzdd.webp" },
  { id: 780, name: "Cтена зимняя 8 м белая 2 слоя с двустворчатой алюминиевой дверью", priceFormatted: "284 900 ₽", priceNumeric: 284900, image: "/wzdd.webp" },
  { id: 754, name: "Cтена зимняя 8 м прозрачная 2 слоя", priceFormatted: "86 900 ₽", priceNumeric: 86900, image: "/wz-a.webp" },
  { id: 767, name: "Cтена зимняя 8 м прозрачная 2 слоя с одностворчатой ПВХ дверью", priceFormatted: "182 600 ₽", priceNumeric: 182600, image: "/wzd-a.webp" },
  { id: 781, name: "Cтена зимняя 8 м прозрачная 2 слоя с одностворчатой алюминиевой дверью", priceFormatted: "207 900 ₽", priceNumeric: 207900, image: "/wzd-a.webp" },
  { id: 768, name: "Cтена зимняя 8 м прозрачная 2 слоя с двустворчатой ПВХ дверью", priceFormatted: "202 400 ₽", priceNumeric: 202400, image: "/wzdd-a.webp" },
  { id: 782, name: "Cтена зимняя 8 м прозрачная 2 слоя с двустворчатой алюминиевой дверью", priceFormatted: "284 900 ₽", priceNumeric: 284900, image: "/eddt.webp" },
  { id: 750, name: "Стена зимняя 8 м 2 слоя + утеплитель", priceFormatted: "126 500 ₽", priceNumeric: 126500, image: "/e.webp" },
  { id: 770, name: "Cтена зимняя 8 м белая 2 слоя + утеплитель с одностворчатой ПВХ дверью", priceFormatted: "222 200 ₽", priceNumeric: 222200, image: "/ed.webp" },
  { id: 783, name: "Cтена зимняя 8 м белая 2 слоя + утеплитель с одностворчатой алюминиевой дверью", priceFormatted: "247 500 ₽", priceNumeric: 247500, image: "/ed.webp" },
  { id: 769, name: "Cтена зимняя 8 м белая 2 слоя + утеплитель с двустворчатой ПВХ дверью", priceFormatted: "242 000 ₽", priceNumeric: 242000, image: "/edd.webp" },
  { id: 784, name: "Cтена зимняя 8 м белая 2 слоя + утеплитель с двустворчатой алюминиевой дверью", priceFormatted: "324 500 ₽", priceNumeric: 324500, image: "/edd.webp" },
  { id: 752, name: "Стеклопакет 8 м", priceFormatted: "277 200 ₽", priceNumeric: 277200, image: "/v.webp" },
  { id: 762, name: "Стеклопакет 8 м с одностворчатой ПВХ дверью", priceFormatted: "372 900 ₽", priceNumeric: 372900, image: "/vd.webp" },
  { id: 785, name: "Стеклопакет 8 м с одностворчатой алюминиевой дверью", priceFormatted: "398 200 ₽", priceNumeric: 398200, image: "/vd.webp" },
  { id: 763, name: "Стеклопакет 8 м с двустворчатой ПВХ дверью", priceFormatted: "392 700 ₽", priceNumeric: 392700, image: "/vdd.webp" },
  { id: 786, name: "Стеклопакет 8 м с двустворчатой алюминиевой дверью", priceFormatted: "475 200 ₽", priceNumeric: 475200, image: "/vdd.webp" },
  { id: 787, name: "Герметизация угла 8", priceFormatted: "33 000 ₽", priceNumeric: 33000, image: "/gy.webp" },
  { id: 788, name: "Герметизация угла утепленная 8", priceFormatted: "40 700 ₽", priceNumeric: 40700, image: "/gy.webp" },
  { id: 789, name: "Соединительный водоотлив 8 м", priceFormatted: "12 100 ₽", priceNumeric: 12100, image: "/o.webp" },
  { id: 695, name: "Одностворчатая ПВХ дверь для шатров", priceFormatted: "95 700 ₽", priceNumeric: 95700, image: "/d.webp" },
  { id: 719, name: "Одностворчатая алюминиевая дверь для шатров", priceFormatted: "121 000 ₽", priceNumeric: 121000, image: "/d.webp" },
  { id: 697, name: "Двустворчатая ПВХ дверь для шатров", priceFormatted: "115 500 ₽", priceNumeric: 115500, image: "/dd.webp" },
  { id: 720, name: "Двустворчатая алюминиевая дверь для арочных шатров", priceFormatted: "198 000 ₽", priceNumeric: 198000, image: "/dd.webp" },
  { id: 721, name: "Угол (поликарбонат)", priceFormatted: "41 800 ₽", priceNumeric: 41800, image: "/yp.webp" },
  { id: 716, name: "Пол базовый", priceFormatted: "4 400 ₽", priceNumeric: 4400, image: "/fb.webp" },
  { id: 717, name: "Пол стандарт", priceFormatted: "5 500 ₽", priceNumeric: 5500, image: "/fs.webp" },
  { id: 718, name: "Пол премиум", priceFormatted: "7 700 ₽", priceNumeric: 7700, image: "/fp.webp" }
];


export const FeaturedProductsSection = (): ReactElement => {
  const customizationOptions = [
    { title: "Материал тента", width: "w-[222px]", titleWidth: "w-[198px]" },
    { title: "Плотность тента", width: "w-[221px]", titleWidth: "w-fit" },
    { title: "Профиль каркаса", width: "w-[207px]", titleWidth: "w-fit" },
    { title: "Цинкование каркаса", width: "w-fit", titleWidth: "w-fit" },
    { title: "Фурнитуру креплений", width: "w-fit", titleWidth: "w-fit" },
    { title: "Цвет тента", width: "w-[221px]", titleWidth: "w-[198px]" },
    { title: "Тип стен", width: "w-[221px]", titleWidth: "w-[198px]" },
  ];

  const [clickedItems, setClickedItems] = useState<boolean[]>(Array(customizationOptions.length).fill(false));
  const [addedProducts, setAddedProducts] = useState<boolean[]>(Array(archWallProducts.length).fill(false));
  
  // Pagination state
  const [visibleCount, setVisibleCount] = useState(12); // Show 12 cards initially

  const handleCustomizationClick = (index: number) => {
    const updated = [...clickedItems];
    updated[index] = true;
    setClickedItems(updated);
  };

  const handleProductAdd = (index: number) => {
    const updated = [...addedProducts];
    updated[index] = true;
    setAddedProducts(updated);
  };

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 12, archWallProducts.length));
  };

  const visibleProducts = archWallProducts.slice(0, visibleCount);
  const hasMore = visibleCount < archWallProducts.length;

  // Desktop product grid
  const renderProductGrid = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full">
      {visibleProducts.map((product, idx) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: idx * 0.05 }}
          whileHover={{ y: -8 }}
          className="group"
        >
          <Card className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
            <div className="relative w-full h-56 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
               
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <CardContent className="p-5 flex flex-col gap-3 flex-grow">
              {/* Removed line-clamp to show full title */}
              <h4 className="font-['Raleway',Helvetica] font-bold text-[#232c42] text-xl leading-tight">
                {product.name}
              </h4>
              <div className="font-['Raleway',Helvetica] font-bold text-[#527dc5] text-2xl mt-1">
                {product.priceFormatted}
              </div>
              <div className="mt-auto pt-2">
                <motion.button
                  onClick={() => handleProductAdd(idx)}
                  className={`w-full py-2.5 rounded-full font-['Raleway',Helvetica] font-semibold transition-all duration-200 ${
                    !addedProducts[idx]
                      ? "bg-[#527dc5] text-white hover:bg-[#3a5da0] shadow-md hover:shadow-lg"
                      : "bg-green-100 text-green-700 cursor-default"
                  }`}
                  whileTap={!addedProducts[idx] ? { scale: 0.97 } : {}}
                  disabled={addedProducts[idx]}
                >
                  <AnimatePresence mode="wait">
                    {!addedProducts[idx] ? (
                      <motion.span
                        key="add"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                      >
                        Добавить
                      </motion.span>
                    ) : (
                      <motion.span
                        key="added"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                      >
                        ✓ Добавлен
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );

  // Mobile product grid
  const renderMobileProductGrid = () => (
    <div className="grid grid-cols-1 gap-6 w-full">
      {visibleProducts.map((product, idx) => (
        <Card key={product.id} className="overflow-hidden rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300">
          <div className="relative w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200">
            <Image
              src={product.image}
              alt={product.name}
              fill
             
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <CardContent className="p-4 flex flex-col gap-2">
            <h4 className="font-['Raleway',Helvetica] font-bold text-[#232c42] text-lg leading-tight">
              {product.name}
            </h4>
            <div className="font-['Raleway',Helvetica] font-bold text-[#527dc5] text-xl">
              {product.priceFormatted}
            </div>
            <motion.button
              onClick={() => handleProductAdd(idx)}
              className={`w-full py-2 rounded-full font-['Raleway',Helvetica] font-semibold transition-all ${
                !addedProducts[idx]
                  ? "bg-[#527dc5] text-white hover:bg-[#3a5da0]"
                  : "bg-green-100 text-green-700 cursor-default"
              }`}
              whileTap={!addedProducts[idx] ? { scale: 0.97 } : {}}
              disabled={addedProducts[idx]}
            >
              <AnimatePresence mode="wait">
                {!addedProducts[idx] ? (
                  <motion.span key="add-mobile" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.2 }}>
                    Добавить
                  </motion.span>
                ) : (
                  <motion.span key="added-mobile" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.2 }}>
                    ✓ Добавлен
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <>
      {/* Desktop Version */}
      <section className="hidden md:flex flex-col items-start gap-10 w-full max-w-[1343px] mx-auto my-16 px-4">
        {/* Header, customization options, and note (unchanged) */}
        <div className="w-full">
          <h2 className="font-['Raleway',Helvetica] font-semibold text-4xl md:text-5xl text-left tracking-tight leading-tight">
            <span className="text-[#394355]">Шатры MobileTent могут быть </span>
            <span className="text-[#527dc5]">абсолютно любой формы, размера и бюджет</span>
          </h2>
        </div>

        <div className="flex flex-col items-start gap-6 w-full">
          <h3 className="font-['Raleway',Helvetica] font-medium text-[#232c42] text-2xl leading-normal tracking-[0]">
            При заказе можете выбрать
          </h3>
          <Card className="w-full rounded-2xl border-0 bg-gradient-to-br from-white to-[#f8f9ff] shadow-md">
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-wrap gap-6">
                {customizationOptions.map((option, index) => (
                  <div key={index} className="flex flex-col items-start gap-2">
                    <div className="px-5 py-3 bg-[#f5f6ff] rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <div className={`flex flex-col items-start gap-2 ${option.width}`}>
                        <div className={`${option.titleWidth} font-['Raleway',Helvetica] font-bold text-[#527dc5] text-lg leading-6`}>
                          {option.title}
                        </div>
                        <motion.button
                          onClick={() => handleCustomizationClick(index)}
                          className="font-['Raleway',Helvetica] font-medium text-[#394355] text-sm px-3 py-1 rounded-full bg-white border border-gray-200 hover:border-[#527dc5] hover:text-[#527dc5] transition-all"
                          whileTap={{ scale: 0.95 }}
                        >
                          <AnimatePresence mode="wait">
                            {!clickedItems[index] ? (
                              <motion.span key="add" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                Добавить
                              </motion.span>
                            ) : (
                              <motion.span key="added" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-green-600">
                                ✓ Добавлен
                              </motion.span>
                            )}
                          </AnimatePresence>
                        </motion.button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="w-full max-w-4xl mt-4">
          <div className="flex items-start gap-4 p-5 bg-blue-50/80 border-l-4 border-[#527dc5] rounded-r-2xl shadow-sm">
            <div className="flex-shrink-0 mt-0.5">
              <svg className="w-6 h-6 text-[#527dc5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="font-['Raleway',Helvetica] text-[#2c3e66] text-base leading-relaxed flex-1">
              К базовой комплектации шатра вы можете добавить любые дополнительные элементы из списка ниже — выберите нужные опции, чтобы собрать решение под свои задачи; если требуется эксклюзивное исполнение или нестандартное оснащение, обсудите детали с менеджером, и мы предложим индивидуальный вариант.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-8 w-full mt-8">
          <div className="flex items-baseline justify-between w-full">
            <h3 className="font-['Raleway',Helvetica] font-bold text-[#232c42] text-4xl leading-normal tracking-tight">
              Арочные стены
            </h3>
            <span className="text-sm text-gray-500 font-['Raleway',Helvetica]">
              {archWallProducts.length} моделей
            </span>
          </div>
          {renderProductGrid()}
          {/* Load More Button (Desktop) */}
          {hasMore && (
            <div className="w-full flex justify-center mt-6">
              <motion.button
                onClick={loadMore}
                className="px-8 py-3 bg-white border-2 border-[#527dc5] text-[#527dc5] font-['Raleway',Helvetica] font-semibold rounded-full hover:bg-[#527dc5] hover:text-white transition-all duration-200 shadow-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Показать ещё ({archWallProducts.length - visibleCount})
              </motion.button>
            </div>
          )}
        </div>
      </section>

      {/* Mobile Version */}
      <section className="block md:hidden flex-col items-start gap-8 w-full mx-auto my-12 px-4">
        <h2 className="w-full font-['Raleway',Helvetica] font-semibold text-2xl leading-tight">
          <span className="text-[#394355]">Шатры MobileTent могут быть </span>
          <span className="text-[#527dc5]">абсолютно любой формы, размера и бюджет</span>
        </h2>

        <div className="flex flex-col items-start gap-4 w-full">
          <h3 className="font-['Raleway',Helvetica] font-medium text-[#232c42] text-xl leading-normal">
            При заказе можете выбрать
          </h3>
          <Card className="w-full rounded-xl border-0 bg-white shadow-md">
            <CardContent className="p-4">
              <div className="flex flex-col gap-3">
                {customizationOptions.map((option, index) => (
                  <div key={`mobile-${index}`} className="flex flex-col items-start">
                    <div className="w-full px-4 py-3 bg-[#f5f6ff] rounded-xl">
                      <div className="flex flex-col items-start gap-1">
                        <div className="font-['Raleway',Helvetica] font-bold text-[#527dc5] text-base">
                          {option.title}
                        </div>
                        <motion.button
                          onClick={() => handleCustomizationClick(index)}
                          className="font-['Raleway',Helvetica] font-medium text-[#394355] text-xs px-3 py-1 rounded-full bg-white border border-gray-200"
                          whileTap={{ scale: 0.95 }}
                        >
                          <AnimatePresence mode="wait">
                            {!clickedItems[index] ? (
                              <motion.span key="add-mobile" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                Добавить
                              </motion.span>
                            ) : (
                              <motion.span key="added-mobile" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-green-600">
                                ✓ Добавлен
                              </motion.span>
                            )}
                          </AnimatePresence>
                        </motion.button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="w-full">
          <div className="flex items-start gap-3 p-4 bg-blue-50/80 border-l-4 border-[#527dc5] rounded-r-xl shadow-sm">
            <svg className="w-5 h-5 text-[#527dc5] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="font-['Raleway',Helvetica] text-[#2c3e66] text-sm leading-relaxed flex-1">
              К базовой комплектации шатра вы можете добавить любые дополнительные элементы из списка ниже — выберите нужные опции, чтобы собрать решение под свои задачи; если требуется эксклюзивное исполнение или нестандартное оснащение, обсудите детали с менеджером, и мы предложим индивидуальный вариант.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-5 w-full mt-6">
          <div className="flex items-center justify-between w-full">
            <h3 className="font-['Raleway',Helvetica] font-bold text-[#232c42] text-2xl">
              Арочные стены
            </h3>
            <span className="text-xs text-gray-500">{archWallProducts.length} моделей</span>
          </div>
          {renderMobileProductGrid()}
          {/* Load More Button (Mobile) */}
          {hasMore && (
            <div className="w-full flex justify-center mt-2">
              <motion.button
                onClick={loadMore}
                className="w-full py-3 bg-white border-2 border-[#527dc5] text-[#527dc5] font-['Raleway',Helvetica] font-semibold rounded-full hover:bg-[#527dc5] hover:text-white transition-all duration-200"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                Показать ещё ({archWallProducts.length - visibleCount})
              </motion.button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};