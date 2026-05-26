'use client';

import React from 'react';
import { Footer } from '../../components/ui/Footer';
import { Header } from '../../components/ui/Header';

export default function CookiePolicy() {
  return (
    <>
      {/* ✅ SEO-optimized single H1 tag - visually hidden but accessible */}
      <h1 className="absolute w-[1px] h-[1px] p-0 -m-[1px] overflow-hidden clip-[rect(0,0,0,0)] whitespace-nowrap border-0">
        Сертификаты компании - Наши достижения и признание качества
      </h1>
      
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
                <h2 className="text-2xl font-bold mb-6">Сертификаты компании</h2>
                
                <p className="mb-4">
                  Изучите наши представленные сертификаты и награды, свидетельствующие о нашем высококачественном 
                  обслуживании. Участие в известных выставках демонстрирует наш инновационный подход и преданность отрасли.
                </p>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4">Признание качества и инноваций</h3>
                  <p className="mb-4">
                    Каждый сертификат является свидетельством непрерывного обучения и роста. Кроме того, мы гордимся 
                    качеством наших шатров. Наша компания первая в России, которая входит в реестр МИНПРОМТОРГ, как 
                    производитель собственной продукции.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4">Высокие стандарты и прозрачность</h3>
                  <p className="mb-4">
                    Представленные сертификаты являются доказательством того, что мы придерживаемся самых высоких 
                    стандартов в отрасли. Мы верим в прозрачность и рады поделиться документациями с вами. Этим мы 
                    подчеркиваем наше обещание предоставлять исключительный сервис и превосходную линейку товаров.
                  </p>
                </div>

                {/* Certificates Highlights */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
                    <div className="flex items-start mb-4">
                      <div className="bg-blue-100 p-3 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-blue-800 mb-2">Реестр МИНПРОМТОРГ</h3>
                        <p className="text-gray-700">
                          Первая компания в России, включенная в реестр как производитель собственной продукции
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
                    <div className="flex items-start mb-4">
                      <div className="bg-green-100 p-3 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-green-800 mb-2">Участие в выставках</h3>
                        <p className="text-gray-700">
                          Регулярное участие в известных отраслевых выставках, демонстрирующее инновационный подход
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-200">
                    <div className="flex items-start mb-4">
                      <div className="bg-amber-100 p-3 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-amber-800 mb-2">Сертификаты качества</h3>
                        <p className="text-gray-700">
                          Многочисленные сертификаты, подтверждающие соответствие высочайшим отраслевым стандартам
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200">
                    <div className="flex items-start mb-4">
                      <div className="bg-purple-100 p-3 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-purple-800 mb-2">Непрерывное развитие</h3>
                        <p className="text-gray-700">
                          Постоянное обучение и рост, подтвержденные соответствующими сертификатами и наградами
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="mt-8 bg-gray-50 p-6 rounded-lg text-center">
                  <h3 className="text-lg font-semibold mb-2">Полная прозрачность и доверие</h3>
                  <p className="text-gray-700 mb-0">
                    Мы открыто делимся всей документацией, подтверждающей наш статус и качество продукции. 
                    Ваше доверие - наша главная ценность.
                  </p>
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
                <h2 className="text-xl font-bold mb-4">Сертификаты компании</h2>
                
                <p className="mb-3">
                  Изучите наши представленные сертификаты и награды, свидетельствующие о нашем высококачественном 
                  обслуживании. Участие в известных выставках демонстрирует наш инновационный подход и преданность отрасли.
                </p>

                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-3">Признание качества и инноваций</h3>
                  <p className="mb-3">
                    Каждый сертификат является свидетельством непрерывного обучения и роста. Кроме того, мы гордимся 
                    качеством наших шатров. Наша компания первая в России, которая входит в реестр МИНПРОМТОРГ, как 
                    производитель собственной продукции.
                  </p>
                </div>

                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-3">Высокие стандарты и прозрачность</h3>
                  <p className="mb-3">
                    Представленные сертификаты являются доказательством того, что мы придерживаемся самых высоких 
                    стандартов в отрасли. Мы верим в прозрачность и рады поделиться документациями с вами. Этим мы 
                    подчеркиваем наше обещание предоставлять исключительный сервис и превосходную линейку товаров.
                  </p>
                </div>

                {/* Certificates Highlights - Mobile */}
                <div className="mt-6 grid grid-cols-1 gap-4">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-lg mr-3">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-blue-800 mb-1 text-sm">Реестр МИНПРОМТОРГ</h3>
                        <p className="text-gray-700 text-xs">
                          Первая компания в России, включенная в реестр как производитель собственной продукции
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
                    <div className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-lg mr-3">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-green-800 mb-1 text-sm">Участие в выставках</h3>
                        <p className="text-gray-700 text-xs">
                          Регулярное участие в известных отраслевых выставках
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-lg border border-amber-200">
                    <div className="flex items-start">
                      <div className="bg-amber-100 p-2 rounded-lg mr-3">
                        <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-amber-800 mb-1 text-sm">Сертификаты качества</h3>
                        <p className="text-gray-700 text-xs">
                          Соответствие высочайшим отраслевым стандартам
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-200">
                    <div className="flex items-start">
                      <div className="bg-purple-100 p-2 rounded-lg mr-3">
                        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-purple-800 mb-1 text-sm">Непрерывное развитие</h3>
                        <p className="text-gray-700 text-xs">
                          Постоянное обучение и рост команды
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call to Action - Mobile */}
                <div className="mt-6 bg-gray-50 p-4 rounded-lg text-center">
                  <h3 className="text-base font-semibold mb-2">Полная прозрачность и доверие</h3>
                  <p className="text-gray-700 text-sm mb-0">
                    Мы открыто делимся всей документацией, подтверждающей наш статус и качество продукции. 
                    Ваше доверие - наша главная ценность.
                  </p>
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