'use client';

import React from 'react';
import { Footer } from '../../components/ui/Footer';
import { Header } from '../../components/ui/Header';

export default function CookiePolicy() {
  return (
    <>
      {/* ===== DESKTOP VERSION (>= lg) ===== */}
      <div className="hidden desktop:block">
        <div className="min-h-screen flex flex-col bg-white">
          {/* Header positioned 1080px from top but scrolls normally */}
          <div className="relative top-[1080px] w-full max-w-[1440px] mx-auto z-40">
            <Header />
          </div>
          {/* Main Content Area - Starts below header */}
          <div className="flex-1 w-full bg-[#e8eef8] relative top-[150px] pb-32">
            {/* Background Gradient */}
            <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-[#e8eef8] via-[#e8eef8]/70 to-transparent" />
            
            {/* Cookie Policy Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-8 py-12 bg-white shadow-lg rounded-lg my-8">
              <div className="prose prose-lg max-w-none">
                {/* Your full cookie policy content here */}
                <h1 className="text-2xl font-bold mb-6">Гарантия и возврат</h1>
                
                <p className="mb-4">
                  В «MOBILE TENT» мы гарантируем качество наших шатров. Мы предлагаем надежную гарантию в течение 
                  <strong> 5 лет на все наши изделия</strong>, <strong>10 лет на прочность ткани</strong>, 
                  <strong> 25 и 50 лет на отсутствие коррозии и ржавчины</strong>, а также на прочность сварного шва, 
                  обеспечивая ваше спокойствие на долгие годы. Мы понимаем, что ваш шатер - это инвестиция, и мы хотим 
                  помочь вам защитить его как можно дольше.
                </p>

                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-4">Решение гарантийных вопросов</h2>
                  <p className="mb-4">
                    Однако мы понимаем, что иногда могут возникнуть непредвиденные проблемы. В случае возникновения 
                    гарантийных претензий мы обещаем быстрое и справедливое решение. Наша специальная команда по обслуживанию 
                    клиентов будет работать с вами, чтобы оценить проблему и определить соответствующую компенсацию, которая 
                    может варьироваться от ремонта, замены или даже возврата денег, в зависимости от конкретных обстоятельств.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h2 className="text-xl font-semibold mb-3">Ваше спокойствие - наш приоритет</h2>
                  <p className="mb-0">
                    В «MOBILE TENT» ваше спокойствие является нашим приоритетом. Мы стремимся предоставить не только 
                    высококачественные шатры, но и исключительное послепродажное обслуживание.
                  </p>
                </div>

                {/* Warranty Details Grid */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h3 className="font-semibold text-blue-800 mb-2">Гарантия на изделия</h3>
                    <p className="text-2xl font-bold text-blue-600">5 лет</p>
                    <p className="text-sm text-gray-600 mt-1">на все наши шатры и конструкции</p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-green-800 mb-2">Прочность ткани</h3>
                    <p className="text-2xl font-bold text-green-600">10 лет</p>
                    <p className="text-sm text-gray-600 mt-1">гарантия на материал и покрытие</p>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <h3 className="font-semibold text-orange-800 mb-2">Защита от коррозии</h3>
                    <p className="text-2xl font-bold text-orange-600">25-50 лет</p>
                    <p className="text-sm text-gray-600 mt-1">на отсутствие ржавчины и коррозии</p>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <h3 className="font-semibold text-purple-800 mb-2">Сварные швы</h3>
                    <p className="text-2xl font-bold text-purple-600">25-50 лет</p>
                    <p className="text-sm text-gray-600 mt-1">гарантия на прочность соединений</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer - Will be pushed down by content */}
          <div className="relative z-10 bg-white mt-auto">
            <Footer />
          </div>
        </div>
      </div>

      {/* ===== MOBILE VERSION (< lg) ===== */}
      <div className="block desktop:hidden">
        <div className="min-h-screen flex flex-col bg-white">
          {/* Mobile Header - Fixed at top */}
          <div className="fixed top-0 left-0 right-0 z-40 bg-white shadow-lg border-b border-gray-200">
            <Header />
          </div>
          <div className="h-20"></div>
          <div className="flex-1 w-full bg-[#e8eef8]">
            <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-[#e8eef8] via-[#e8eef8]/70 to-transparent" />
            
            {/* Cookie Policy Content - Mobile */}
            <div className="relative z-10 px-4 py-8 bg-white shadow-lg mx-4 my-4 rounded-lg">
              <div className="prose prose-sm max-w-none">
                <h1 className="text-xl font-bold mb-4">Гарантия и возврат</h1>
                
                <p className="mb-3">
                  В «MOBILE TENT» мы гарантируем качество наших шатров. Мы предлагаем надежную гарантию в течение 
                  <strong> 5 лет на все наши изделия</strong>, <strong>10 лет на прочность ткани</strong>, 
                  <strong> 25 и 50 лет на отсутствие коррозии и ржавчины</strong>, а также на прочность сварного шва, 
                  обеспечивая ваше спокойствие на долгие годы. Мы понимаем, что ваш шатер - это инвестиция, и мы хотим 
                  помочь вам защитить его как можно дольше.
                </p>

                <div className="mb-4">
                  <h2 className="text-lg font-semibold mb-3">Решение гарантийных вопросов</h2>
                  <p className="mb-3">
                    Однако мы понимаем, что иногда могут возникнуть непредвиденные проблемы. В случае возникновения 
                    гарантийных претензий мы обещаем быстрое и справедливое решение. Наша специальная команда по обслуживанию 
                    клиентов будет работать с вами, чтобы оценить проблему и определить соответствующую компенсацию, которая 
                    может варьироваться от ремонта, замены или даже возврата денег, в зависимости от конкретных обстоятельств.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500 mb-4">
                  <h2 className="text-lg font-semibold mb-2">Ваше спокойствие - наш приоритет</h2>
                  <p className="mb-0">
                    В «MOBILE TENT» ваше спокойствие является нашим приоритетом. Мы стремимся предоставить не только 
                    высококачественные шатры, но и исключительное послепродажное обслуживание.
                  </p>
                </div>

                {/* Warranty Details Grid - Mobile */}
                <div className="mt-6 grid grid-cols-1 gap-3">
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                    <h3 className="font-semibold text-blue-800 mb-1 text-sm">Гарантия на изделия</h3>
                    <p className="text-xl font-bold text-blue-600">5 лет</p>
                    <p className="text-xs text-gray-600 mt-1">на все наши шатры и конструкции</p>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-green-800 mb-1 text-sm">Прочность ткани</h3>
                    <p className="text-xl font-bold text-green-600">10 лет</p>
                    <p className="text-xs text-gray-600 mt-1">гарантия на материал и покрытие</p>
                  </div>
                  
                  <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
                    <h3 className="font-semibold text-orange-800 mb-1 text-sm">Защита от коррозии</h3>
                    <p className="text-xl font-bold text-orange-600">25-50 лет</p>
                    <p className="text-xs text-gray-600 mt-1">на отсутствие ржавчины и коррозии</p>
                  </div>
                  
                  <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
                    <h3 className="font-semibold text-purple-800 mb-1 text-sm">Сварные швы</h3>
                    <p className="text-xl font-bold text-purple-600">25-50 лет</p>
                    <p className="text-xs text-gray-600 mt-1">гарантия на прочность соединений</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer */}
          <div className="bg-white mt-auto">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}