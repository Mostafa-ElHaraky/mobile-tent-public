import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Согласие на обработку персональных даннных",
  description: "СОГЛАСИЕ НА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ СУБЪЕКТА",
  openGraph: {
  title: "Согласие на обработку персональных даннных",
    description: "СОГЛАСИЕ НА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ СУБЪЕКТА",
  },
};

export default function CookiePolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}