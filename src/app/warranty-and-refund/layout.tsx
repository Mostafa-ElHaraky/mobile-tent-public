import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Гарантия и возврат тентовых конструкций от MOBILE TENT",
  description: "Наша компания дает гарантию на все тентовые конструкции собственного производства: гарантия 5 лет на все наши изделия, 10 лет на прочность ткани, 25 и 50 лет на отсутствие коррозии и ржавчины.",
  openGraph: {
    title: "Гарантия и возврат тентовых конструкций от MOBILE TENT",
  description: "Наша компания дает гарантию на все тентовые конструкции собственного производства: гарантия 5 лет на все наши изделия, 10 лет на прочность ткани, 25 и 50 лет на отсутствие коррозии и ржавчины.",
  },
};

export default function CookiePolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}