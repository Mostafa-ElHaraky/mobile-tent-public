'use client';

import React from "react";
import { Button } from "../../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  return (
    <>
      {/* === Desktop version === */}
      <section className="hidden md:block relative bottom-[200px]">
        <div className="flex flex-col items-start gap-9 max-w-5xl">
          <h2 className="w-fit font-semibold text-4xl [font-family:'Raleway',Helvetica] leading-tight">
            <span className="text-[#527dc5]">Шатры</span>{" "}
            <span className="text-[#232c42]">Gazebo</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] 
            text-white font-semibold text-lg"
          >
            Купить шатёр Gazebo
          </Button>

          <div className="w-full font-medium text-lg leading-7 text-[#394355] space-y-6">
            <h3 className="font-semibold text-2xl">Почему стоит выбрать шатры Gazebo?</h3>
            <p>
              Собираетесь на отдых в загородный дом, на озеро или к реке? Тогда без шатра Gazebo просто не
              обойтись. Это компактный тент, который защитит и от жары, и от непогоды. Купить его можно на сайте{" "}
              <b>MOBILE TENT</b>, где представлен широкий каталог навесных конструкций на все случаи жизни.
            </p>
            <p>
              Шатры Gazebo популярны не только среди любителей отдыха на природе, но и у владельцев кафе и
              ресторанов. Они идеально подходят для летних площадок, устойчивы к порывам ветра, не выцветают на
              солнце и выдерживают осадки. Такой шатёр станет отличным выбором для семейных посиделок,
              приёма гостей или праздничных банкетов.
            </p>
            <p>
              Купив шатёр Gazebo в Москве, СПб, Кирове или Томске, вы сможете использовать его как в
              полуразобранном, так и в полной комплектации. Крепкие опоры обеспечивают устойчивость, а
              современный материал гарантирует долговечность.
            </p>

            <h3 className="font-semibold text-2xl">Доступность по всей России</h3>
            <p>
              Шатры Gazebo — доступный и недорогой вариант укрытия. Мы доставляем их в любую точку РФ: от
              столицы до Твери и других регионов. Это удобное решение для выездов на природу, дачи или путешествий.
            </p>
            <p>
              Все шатры изготавливаются из современных износостойких материалов на производстве,
              оборудованном по последнему слову техники.
            </p>

            <h3 className="font-semibold text-2xl">Желаете купить шатры Gazebo?</h3>
            <p>
              <b>MOBILE TENT</b> — это крупнейший интернет-магазин навесов, где можно рассмотреть фото шатров,
              ознакомиться с характеристиками и приобрести продукцию высокого качества по разумной цене.
              Онлайн-формат позволяет держать цены доступными и предлагать целый спектр дополнительных услуг.
            </p>
          </div>
        </div>
      </section>

      {/* === Mobile version === */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-center leading-tight">
            Шатры Gazebo
          </h2>

          <Button
            variant="link"
            className="px-6 py-2 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] 
            text-white font-semibold text-sm self-center"
          >
            Купить шатёр
          </Button>

          <div className="font-medium text-sm leading-5 text-[#394355] text-justify space-y-4">
            <p>
              Шатры Gazebo — компактные и удобные конструкции, которые защитят от солнца и дождя. Купить их
              можно на сайте <b>MOBILE TENT</b>.
            </p>
            <p>
              Подходят для отдыха на природе, летних площадок кафе и ресторанов. Устойчивы к ветру,
              долговечны и доступны в Москве, СПб, Кирове, Томске и других городах.
            </p>
            <p>
              <b>MOBILE TENT</b> предлагает фото, описания и выгодные цены на шатры Gazebo с доставкой по всей России.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};