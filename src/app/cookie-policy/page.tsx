import type { Metadata } from "next";
import CookiePolicyContent from './CookiePolicyContent';

export const metadata: Metadata = {
  title: "Политика в отношении cookie-файлов",
  description: "Утверждаю: ООО «ЗТК» Директор Бородин Андрей Александрович редакция № 1 от «07» ноября.2025 года ПОЛИТИКА ИСПОЛЬЗОВАНИЯ COOKIE-ФАЙЛОВ",
  openGraph: {
    title: "Политика в отношении cookie-файлов",
    description: "Утверждаю: ООО «ЗТК» Директор Бородин Андрей Александрович редакция № 1 от «07» ноября.2025 года ПОЛИТИКА ИСПОЛЬЗОВАНИЯ COOKIE-ФАЙЛОВ",
  },
};

export default function CookiePolicyPage() {
  return <CookiePolicyContent />;
}