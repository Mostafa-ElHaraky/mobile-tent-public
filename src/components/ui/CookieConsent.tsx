'use client';

import { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
    // Here you can initialize your analytics/tracking scripts
  };

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
    // Here you can disable non-essential cookies
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-gray-700 text-sm">
              Мы используем файлы cookie. Продолжая пользоваться сайтом, вы соглашаетесь с{' '}
              <a 
                href="/files/privacy-policy.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Политикой конфиденциальности
              </a>{' '}
              и{' '}
              <a 
                href="/public/files/cookie-policy.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Политикой использования файлов cookie
              </a>.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={rejectCookies}
              className="px-6 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Не согласен
            </button>
            <button
              onClick={acceptCookies}
              className="px-6 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Согласен
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;