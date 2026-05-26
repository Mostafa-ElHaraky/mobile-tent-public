import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Купить шатры в MOBILE TENT - каркасно-тентовые конструкции недорого по цене производителя",
  description:
    "Купить каркасно-тентовые шатры из ПВХ по ценам компании-производителя MOBILE TENT. Продава и изготовление тентовых конструкций и сооружений в России. Доставка по РФ. Заказывайте по тел 8 800 302 46 31",
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

import CookieConsent from '../components/ui/CookieConsent';
import ProductAssistant from '@/components/ui/ProductAssistant';

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        {/* Preconnect & DNS prefetch hints */}
        <link rel="preconnect" href="https://cloud.roistat.com" />
        <link rel="dns-prefetch" href="https://cloud.roistat.com" />
        <link rel="preconnect" href="https://chat-visitor.ru.envybox.io" />
        <link rel="dns-prefetch" href="https://chat-visitor.ru.envybox.io" />
        <link rel="preconnect" href="https://cms.mobile-tent.ru" />
        <link rel="dns-prefetch" href="https://cms.mobile-tent.ru" />
        <link rel="preconnect" href="https://whitesaas.com" />
        <link rel="dns-prefetch" href="https://whitesaas.com" />
        <link rel="preconnect" href="https://mc.yandex.ru" />
        <link rel="dns-prefetch" href="https://mc.yandex.ru" />
        <link rel="preconnect" href="https://content.saas-support.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://content.saas-support.com" />
        <link rel="preconnect" href="https://saas-support.com" />
        <link rel="dns-prefetch" href="https://saas-support.com" />

        {/* Yandex.Metrika counter */}
        <Script
          id="yandex-metrika"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function (d, w, c) {
                (w[c] = w[c] || []).push(function() {
                  try {
                    w.yaCounter44903767 = new Ya.Metrika({
                      id:44903767, 
                      clickmap:true, 
                      trackLinks:true, 
                      accurateTrackBounce:true, 
                      webvisor:true, 
                      trackHash:true
                    });
                  } catch(e) { }
                });

                var n = d.getElementsByTagName("script")[0], 
                    s = d.createElement("script"),
                    f = function () { n.parentNode.insertBefore(s, n); };
                s.type = "text/javascript"; 
                s.async = true; 
                s.src = "https://mc.yandex.ru/metrika/watch.js";
                
                if (w.opera == "[object Opera]") {
                  d.addEventListener("DOMContentLoaded", f, false);
                } else { 
                  f(); 
                }
              })(document, window, "yandex_metrika_callbacks");
            `
          }}
        />

        {/* Yandex.Metrika goal function */}
        <Script
          id="yandex-metrika-goal"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function metrika(goal){ 
                if(typeof yaCounter44903767 !== 'undefined') {
                  yaCounter44903767.reachGoal(goal); 
                }
              };
              window.metrika = metrika;
            `
          }}
        />

        {/* Roistat Counter */}
        <Script
          id="roistat-counter"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w, d, s, h, id) {
                w.roistatProjectId = id; 
                w.roistatHost = h;
                var p = d.location.protocol == "https:" ? "https://" : "http://";
                var u = /^.*roistat_visit=[^;]+(.*)?$/.test(d.cookie) ? "/dist/module.js" : "/api/site/1.0/"+id+"/init?referrer="+encodeURIComponent(d.location.href);
                var js = d.createElement(s); 
                js.charset="UTF-8"; 
                js.async = 1; 
                js.src = p+h+u; 
                var js2 = d.getElementsByTagName(s)[0]; 
                js2.parentNode.insertBefore(js, js2);
              })(window, document, 'script', 'cloud.roistat.com', '4cbaf6cfdc5a2c374ab0e67f835bda4e');
            `
          }}
        />

        {/* Noindex tag for Yandex.Metrika */}
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/44903767"
              style={{ position: 'absolute', left: '-9999px' }}
              alt=""
            />
          </div>
        </noscript>
      </head>
      <body className="font-raleway antialiased">
        {children}
        <CookieConsent />
        <ProductAssistant />
        
        {/* Optimized asynchronously preloaded Envybox styles */}
        <link
          rel="preload"
          href="https://cdn.envybox.io/widget/cbk.css"
          as="style"
        />
        <link
          id="envybox-css"
          rel="stylesheet"
          href="https://cdn.envybox.io/widget/cbk.css"
          media="print"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var link = document.getElementById('envybox-css');
              if (link) {
                link.onload = function() { this.media = 'all'; };
                if (link.sheet) link.media = 'all';
              }
            `
          }}
        />
        <noscript>
          <link rel="stylesheet" href="https://cdn.envybox.io/widget/cbk.css" />
        </noscript>

        {/* Optimized lazy-loaded Envybox widget */}
        <Script
          src="https://cdn.envybox.io/widget/cbk.js?wcb_code=f4c9ff0a73e97accbc8572ed63a33b30"
          strategy="lazyOnload"
          charSet="UTF-8"
        />
      </body>
    </html>
  );
}