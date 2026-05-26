'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 text-center">
          Ой, запрошенная страница не найдена
        </h1>
        
        <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
          Мы приносим свои извинения за доставленные неудобства и предлагаем следующие пути решения проблемы:
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Перейти на страницы</h2>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="font-medium text-gray-700 mb-3">Клиентам</h3>
                  <ul className="space-y-2">
                    <li><Link href="/reviews" className="text-blue-600 hover:text-blue-800 hover:underline">Отзывы</Link></li>
                    <li><Link href="/gallery" className="text-blue-600 hover:text-blue-800 hover:underline">Выполненные работы</Link></li>
                    <li><Link href="/faq" className="text-blue-600 hover:text-blue-800 hover:underline">Вопросы и ответы</Link></li>
                    <li><Link href="/contacts" className="text-blue-600 hover:text-blue-800 hover:underline">Контакты</Link></li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium text-gray-700 mb-3">Каталог</h3>
                  <ul className="space-y-2">
                    <li><Link href="/shatry" className="text-blue-600 hover:text-blue-800 hover:underline">Шатры</Link></li>
                    <li><Link href="/shatry-i-navesy/tentovye-angary" className="text-blue-600 hover:text-blue-800 hover:underline">Тентовые ангары</Link></li>
                    <li><Link href="/services" className="text-blue-600 hover:text-blue-800 hover:underline">Оснащение</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Или свяжитесь для консультации и расчета цены
            </h2>
            
            <div className="space-y-4">
              <div>
                <a href="tel:+7 (495) 760-42-20" className="text-2xl font-bold text-blue-600 hover:text-blue-800 block mb-2">
                  +7 (495) 760-42-20
                </a>
                <p className="text-sm text-gray-500">Москва</p>
              </div>
              
              <div>
                <a href="tel:+7 (985) 760-42-20" className="text-2xl font-bold text-blue-600 hover:text-blue-800 block mb-2">
                  +7 (985) 760-42-20
                </a>
                <p className="text-sm text-gray-500">Бесплатно по России</p>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/contacts"
                className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Заказать звонок
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Вернуться на главную
          </Link>
        </div>
      </div>
  );
}
