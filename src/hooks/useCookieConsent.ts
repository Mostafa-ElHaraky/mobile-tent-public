'use client';

import { useState, useEffect } from 'react';

export const useCookieConsent = () => {
  const [consent, setConsent] = useState<'accepted' | 'rejected' | null>(null);

  useEffect(() => {
    const savedConsent = localStorage.getItem('cookieConsent') as 'accepted' | 'rejected' | null;
    setConsent(savedConsent);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setConsent('accepted');
    // Initialize analytics/tracking here
    initializeAnalytics();
  };

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setConsent('rejected');
    // Disable non-essential cookies here
    disableAnalytics();
  };

  const initializeAnalytics = () => {
    // Add your analytics initialization code here
    // For example: Google Analytics, Yandex.Metrica, etc.
    console.log('Analytics initialized');
  };

  const disableAnalytics = () => {
    // Add code to disable analytics cookies
    console.log('Analytics disabled');
  };

  return {
    consent,
    acceptCookies,
    rejectCookies,
  };
};