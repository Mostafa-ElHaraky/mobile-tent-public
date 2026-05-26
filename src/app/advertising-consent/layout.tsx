import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Согласие на получение рекламы",
  description: "СОГЛАСИЕ НА ПОЛУЧЕНИЕ РАССЫЛКИ РЕКЛАМНОГО И (ИЛИ) ИНФОРМАЦИОННОГО ХАРАКТЕРА",
  openGraph: {
  title: "Согласие на получение рекламы",
  description: "СОГЛАСИЕ НА ПОЛУЧЕНИЕ РАССЫЛКИ РЕКЛАМНОГО И (ИЛИ) ИНФОРМАЦИОННОГО ХАРАКТЕРА",
  },
};

export default function CookiePolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}