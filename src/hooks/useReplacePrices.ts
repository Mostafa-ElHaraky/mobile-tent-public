'use client';

import { useEffect } from 'react';

export const useReplacePrices = () => {
  useEffect(() => {
    const replacePriceInElement = (el: Element) => {
      // Skip if already processed
      if (el.hasAttribute('data-price-replaced')) return;
      
      const textNodes = [...el.childNodes].filter(n => n.nodeType === 3);
      if (textNodes.length === 0) return;
      
      const joinedText = textNodes.map(n => n.textContent).join('');
      if (/\d[\d\s\.,]*\s*₽/.test(joinedText)) {
        textNodes.forEach(n => {
          if (n.textContent) n.textContent = "";
        });
        el.appendChild(document.createTextNode('по запросу'));
        el.setAttribute('data-price-replaced', 'true');
      }
    };

    const replaceAllPrices = () => {
      document.querySelectorAll('body *').forEach(replacePriceInElement);
    };

    // Initial replacement
    const timer = setTimeout(replaceAllPrices, 100);

    // Observe for dynamic content changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) { // Element node
            replacePriceInElement(node as Element);
            // Also check children of added nodes
            (node as Element).querySelectorAll('*').forEach(replacePriceInElement);
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);
};