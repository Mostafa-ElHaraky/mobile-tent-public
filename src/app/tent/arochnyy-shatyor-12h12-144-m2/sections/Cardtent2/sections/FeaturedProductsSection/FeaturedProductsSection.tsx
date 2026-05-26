'use client';

import React, { useState } from "react";
import { Card, CardContent } from "../../../../../../../components/ui/card";
import { ReactElement } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Updated product data - no href fields
const archWallProducts = [
  { id: 677, name: "Полумесяц белый 6 м", priceFormatted: "11 000 ₽", priceNumeric: 11000, image: "/m.webp" },
  { id: 681, name: "Полумесяц прозрачный 6 м", priceFormatted: "11 000 ₽", priceNumeric: 11000, image: "/m-a.webp" },
  { id: 709, name: "Герметизация фермы 6 м", priceFormatted: "28 600 ₽", priceNumeric: 28600, image: "/g.webp" },
  { id: 682, name: "Стена сплошная белая 6 м", priceFormatted: "35 200 ₽", priceNumeric: 35200, image: "/w.webp" },
  { id: 683, name: "Стена сплошная прозрачная 6 м", priceFormatted: "35 200 ₽", priceNumeric: 35200, image: "/w-a.webp" },
  { id: 684, name: "Стена раздвижная 6 белая + полумесяц", priceFormatted: "47 300 ₽", priceNumeric: 47300, image: "/s.webp" },
  { id: 685, name: "Стена раздвижная 6 м прозрачная + полумесяц", priceFormatted: "47 300 ₽", priceNumeric: 47300, image: "/s-a.webp" },
  { id: 691, name: "Стена сплошная 6 м белая с одностворчатой ПВХ дверью", priceFormatted: "130 900 ₽", priceNumeric: 130900, image: "/wd.webp" },
  { id: 722, name: "Стена сплошная 6 м белая с одностворчатой алюминиевой дверью", priceFormatted: "156 200 ₽", priceNumeric: 156200, image: "/wd.webp" },
  { id: 694, name: "Стена сплошная 6 м прозрачная с одностворчатой ПВХ дверью", priceFormatted: "130 900 ₽", priceNumeric: 130900, image: "/wda.webp" },
  { id: 723, name: "Стена сплошная 6 м прозрачная с одностворчатой алюминиевой дверью", priceFormatted: "156 200 ₽", priceNumeric: 156200, image: "/wda.webp" },
  { id: 693, name: "Стена сплошная 6 м белая с двустворчатой ПВХ дверью", priceFormatted: "150 700 ₽", priceNumeric: 150700, image: "/wdd.webp" },
  { id: 724, name: "Стена сплошная 6 м белая с двустворчатой алюминиевой дверью", priceFormatted: "233 200 ₽", priceNumeric: 233200, image: "/wdd.webp" },
  { id: 696, name: "Стена сплошная 6 м прозрачная с двустворчатой ПВХ дверью", priceFormatted: "150 700 ₽", priceNumeric: 150700, image: "/wdda.webp" },
  { id: 725, name: "Стена сплошная 6 м прозрачная с двустворчатой алюминиевой дверью", priceFormatted: "233 200 ₽", priceNumeric: 233200, image: "/wdda.webp" },
  { id: 686, name: "Стена внешняя 6 м белая", priceFormatted: "42 900 ₽", priceNumeric: 42900, image: "/wz.webp" },
  { id: 698, name: "Стена внешняя 6 м белая с одностворчатой ПВХ дверью", priceFormatted: "138 600 ₽", priceNumeric: 138600, image: "/wzd.webp" },
  { id: 726, name: "Стена внешняя 6 м белая с одностворчатой алюминиевой дверью", priceFormatted: "163 900 ₽", priceNumeric: 163900, image: "/wzd.webp" },
  { id: 699, name: "Стена внешняя 6 м белая с двустворчатой ПВХ дверью", priceFormatted: "150 700 ₽", priceNumeric: 150700, image: "/wzdd.webp" },
  { id: 727, name: "Стена внешняя 6 м белая с двустворчатой алюминиевой дверью", priceFormatted: "233 200 ₽", priceNumeric: 233200, image: "/wzdd.webp" },
  { id: 689, name: "Стена внешняя 6 м прозрачная", priceFormatted: "42 900 ₽", priceNumeric: 42900, image: "/wz-a.webp" },
  { id: 700, name: "Стена внешняя 6 м прозрачная с одностворчатой ПВХ дверью", priceFormatted: "138 600 ₽", priceNumeric: 138600, image: "/wzd-a.webp" },
  { id: 728, name: "Стена внешняя 6 м прозрачная с одностворчатой алюминиевой дверью", priceFormatted: "163 900 ₽", priceNumeric: 163900, image: "/wzd-a.webp" },
  { id: 701, name: "Стена внешняя 6 м прозрачная с двустворчатой ПВХ дверью", priceFormatted: "150 700 ₽", priceNumeric: 150700, image: "/wzdd-a.webp" },
  { id: 729, name: "Стена внешняя 6 м прозрачная с двустворчатой алюминиевой дверью", priceFormatted: "233 200 ₽", priceNumeric: 233200, image: "/wzdd-a.webp" },
  { id: 687, name: "Cтена зимняя 6 м белая 2 слоя", priceFormatted: "77 000 ₽", priceNumeric: 77000, image: "/wz.webp" },
  { id: 710, name: "Cтена зимняя 6 м белая 2 слоя с одностворчатой ПВХ дверью", priceFormatted: "172 700 ₽", priceNumeric: 172700, image: "/wzd.webp" },
  { id: 730, name: "Cтена зимняя 6 м белая 2 слоя с одностворчатой алюминиевой дверью", priceFormatted: "198 000 ₽", priceNumeric: 198000, image: "/wzd.webp" },
  { id: 711, name: "Cтена зимняя 6 м белая 2 слоя с двустворчатой ПВХ дверью", priceFormatted: "192 500 ₽", priceNumeric: 192500, image: "/wzdd.webp" },
  { id: 731, name: "Cтена зимняя 6 м белая 2 слоя с двустворчатой алюминиевой дверью", priceFormatted: "275 000 ₽", priceNumeric: 275000, image: "/wzdd.webp" },
  { id: 692, name: "Cтена зимняя 6 м прозрачная 2 слоя", priceFormatted: "77 000 ₽", priceNumeric: 77000, image: "/wz-a.webp" },
  { id: 712, name: "Cтена зимняя 6 м прозрачная 2 слоя с одностворчатой ПВХ дверью", priceFormatted: "172 700 ₽", priceNumeric: 172700, image: "/wzd-a.webp" },
  { id: 732, name: "Cтена зимняя 6 м прозрачная 2 слоя с одностворчатой алюминиевой дверью", priceFormatted: "198 500 ₽", priceNumeric: 198500, image: "/wzd-a.webp" },
  { id: 713, name: "Cтена зимняя 6 м прозрачная 2 слоя с двустворчатой ПВХ дверью", priceFormatted: "192 500 ₽", priceNumeric: 192500, image: "/wzdd-a.webp" },
  { id: 733, name: "Cтена зимняя 6 м прозрачная 2 слоя с двустворчатой алюминиевой дверью", priceFormatted: "275 000 ₽", priceNumeric: 275000, image: "/wzdd-a.webp" },
  { id: 688, name: "Стена зимняя 6 м 2 слоя + утеплитель", priceFormatted: "112 200 ₽", priceNumeric: 112200, image: "/wz.webp" },
  { id: 715, name: "Cтена зимняя 6 м белая 2 слоя + утеплитель с одностворчатой ПВХ дверью", priceFormatted: "207 900 ₽", priceNumeric: 207900, image: "/wzd.webp" },
  { id: 734, name: "Cтена зимняя 6 м белая 2 слоя + утеплитель с одностворчатой алюминиевой дверью", priceFormatted: "233 200 ₽", priceNumeric: 233200, image: "/wzd.webp" },
  { id: 714, name: "Cтена зимняя 6 м белая 2 слоя + утеплитель с двустворчатой ПВХ дверью", priceFormatted: "227 700 ₽", priceNumeric: 227700, image: "/wzdd.webp" },
  { id: 735, name: "Cтена зимняя 6 м белая 2 слоя + утеплитель с двустворчатой алюминиевой дверью", priceFormatted: "310 200 ₽", priceNumeric: 310200, image: "/wzdd.webp" },
  { id: 690, name: "Стеклопакет 6 м", priceFormatted: "207 900 ₽", priceNumeric: 207900, image: "/vz.webp" },
  { id: 702, name: "Стеклопакет 6 м с одностворчатой ПВХ дверью", priceFormatted: "303 600 ₽", priceNumeric: 303600, image: "/vzd.webp" },
  { id: 736, name: "Стеклопакет 6 м с одностворчатой алюминиевой дверью", priceFormatted: "328 900 ₽", priceNumeric: 328900, image: "/vzd.webp" },
  { id: 703, name: "Стеклопакет 6 м с двустворчатой ПВХ дверью", priceFormatted: "323 400 ₽", priceNumeric: 323400, image: "/vzdd.webp" },
  { id: 737, name: "Стеклопакет 6 м с двустворчатой алюминиевой дверью", priceFormatted: "405 900 ₽", priceNumeric: 405900, image: "/vzdd.webp" },
  { id: 738, name: "Герметизация угла 6", priceFormatted: "28 600 ₽", priceNumeric: 28600, image: "/gy.webp" },
  { id: 739, name: "Герметизация угла утепленная 6", priceFormatted: "36 300 ₽", priceNumeric: 36300, image: "/gy.webp" },
  { id: 740, name: "Соединительный водоотлив 6 м", priceFormatted: "8 800 ₽", priceNumeric: 8800, image: "/o.webp" }
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