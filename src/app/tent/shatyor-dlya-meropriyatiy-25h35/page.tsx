import { Cardtent1 } from "./sections/Cardtent1/Cardtent1";
import { Cardtent2 } from "./sections/Cardtent2/Cardtent2";
import { Footer } from "../../../components/ui/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Шатёр для мероприятий 25х35 – купить в Москве с доставкой: цена в интернет-магазине Mobile Tent",
  description: "Шатёр для мероприятий 25х35 – купить в Москве под заказ в компании Mobile Tent. Вы можете выбрать любую комплектацию, размер и цвет изделия, а также заказать его брендирование. Мы используем только качественные и долговечные материалы, а также предлагаем адекватные цены, которые будут дешевле долгосрочный аренды! Гарантия от производителя — 5 лет.",
  // Optional: Add Open Graph tags
  openGraph: {
  title: "Шатёр для мероприятий 25х35 – купить в Москве с доставкой: цена в интернет-магазине Mobile Tent",
  description: "Шатёр для мероприятий 25х35 – купить в Москве под заказ в компании Mobile Tent. Вы можете выбрать любую комплектацию, размер и цвет изделия, а также заказать его брендирование. Мы используем только качественные и долговечные материалы, а также предлагаем адекватные цены, которые будут дешевле долгосрочный аренды! Гарантия от производителя — 5 лет.",
  },
};

export default function Arochny_Shatyor_Page() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
        <h1 className="font-medium text-[#394355] text-2xl [font-family:'Raleway',Helvetica] tracking-[0] leading-tight">
          Шатёр для мероприятий 25х35
        </h1>
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
