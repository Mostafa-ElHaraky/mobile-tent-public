import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Карта сайта",
  description: "Карта сайта",
  openGraph: {
  title: "Карта сайта",
  description: "Карта сайта",
  },
};

export default function CookiePolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}