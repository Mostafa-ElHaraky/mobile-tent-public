import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Пользовательское соглашение",
  description: "Утверждаю: Директор ООО «ЗТК» Бородин Андрей Александрович редакция № 1 от «07» ноября 2025 года ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ",
  openGraph: {
    title: "Пользовательское соглашение",
    description: "Утверждаю: Директор ООО «ЗТК» Бородин Андрей Александрович редакция № 1 от «07» ноября 2025 года ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ",
  },
};

export default function CookiePolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}