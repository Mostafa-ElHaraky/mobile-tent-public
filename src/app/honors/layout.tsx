import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Сертификаты на тентовые конструкции компании MOBILE TENT",
  description: "Сертификаты на продукцию и награды компании MOBILE TENT.",
  openGraph: {
    title: "Сертификаты на тентовые конструкции компании MOBILE TENT",
  description: "Сертификаты на продукцию и награды компании MOBILE TENT.",
  },
};

export default function CookiePolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}