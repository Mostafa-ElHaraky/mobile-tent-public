import { Cardtent1 } from "./sections/Cardtent1/Cardtent1";
import { Cardtent2 } from "./sections/Cardtent2/Cardtent2";
import { Footer } from "../../../components/ui/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Пергола Стандарт 4х6 – купить в Москве с доставкой: цена в интернет-магазине Mobile Tent",
  description: "Пергола Стандарт 4х6 – купить в Москве под заказ в компании Mobile Tent. Вы можете выбрать любую комплектацию, размер и цвет изделия, а также заказать его брендирование. Мы используем только качественные и долговечные материалы, а также предлагаем адекватные цены, которые будут дешевле долгосрочный аренды! Гарантия от производителя — 5 лет.",
  // Optional: Add Open Graph tags
  openGraph: {
  title: "Пергола Стандарт 4х6 – купить в Москве с доставкой: цена в интернет-магазине Mobile Tent",
  description: "Пергола Стандарт 4х6 – купить в Москве под заказ в компании Mobile Tent. Вы можете выбрать любую комплектацию, размер и цвет изделия, а также заказать его брендирование. Мы используем только качественные и долговечные материалы, а также предлагаем адекватные цены, которые будут дешевле долгосрочный аренды! Гарантия от производителя — 5 лет.",
  },
};

export default function Arochny_Shatyor_Page() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">

      {/* نسخة العرض على الشاشات الكبيرة */}
      <div className="hidden md:flex flex-col w-full">
        <Cardtent1 />
        <Cardtent2 />
        <Footer />
      </div>

      {/* نسخة العرض على الشاشات الصغيرة (الموبايل) */}
      <div className="flex md:hidden flex-col w-full">
        <Cardtent1 />
        <Cardtent2 />
        <Footer />
      </div>

    </div>
  );
};
