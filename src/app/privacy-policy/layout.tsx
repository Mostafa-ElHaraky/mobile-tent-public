import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Политика обработки персональных данных",
  description: "Утверждаю: Директор ООО «ЗТК» Бородин Андрей Александрович редакция № 1 от «07» ноября 2025 года ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ",
  openGraph: {
    title: "Политика обработки персональных данных",
    description: "Утверждаю: ООО «ЗТК» Директор Бородин Андрей Александрович редакция № 1 от «07» ноября.2025 года ПОЛИТИКА ИСПОЛЬЗОВАНИЯ COOKIE-ФАЙЛОВ",
  },
};

export default function CookiePolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}