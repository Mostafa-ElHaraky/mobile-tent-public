// src/templates/CardProductPage.js
'use client';

import { Cardtent1 } from '../AddCardProduct/sections/Cardtent1/Cardtent1';
import { Cardtent2 } from '../AddCardProduct/sections/Cardtent2/Cardtent2';
import { Footer } from '../components/ui/Footer';
import { useState, useEffect } from 'react';

export default function CardProductPage({ data }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // If no data, show nothing
  if (!data) return null;

  // Extract data from the API response
  const {
    name: pageName,
    meta,
    product,
    priceConfigurations,
    otherSizes,
    content,
    documents,
    videos,
    images,
    mainImage,
    imagePaths,      // 👈 ADD THIS
    mainImagePath,   // 👈 ADD THIS
    threed           // 👈 ADD THIS
  } = data;

  // Prepare specifications array for SizeSelectionSection
  const specifications = [
    { label: "Размер:", value: product?.size || "—" },
    { label: "Площадь:", value: product?.area ? `${product.area} м²` : "—" },
    { label: "Форма:", value: product?.shape || "—" },
    { label: "Вместимость:", value: product?.capacity || "—" },
    { label: "Ширина:", value: product?.width ? `${product.width} м` : "—" },
    { label: "Длина:", value: product?.length ? `${product.length} м` : "—" },
    { label: "Высота входной арки:", value: product?.archHeight ? `${product.archHeight} м` : "—" },
    { label: "Высота в коньке:", value: product?.ridgeHeight ? `${product.ridgeHeight} м` : "—" },
    { label: "В наличии:", value: product?.inStock || "—" },
  ];

  // Default contacts
  const defaultContacts = {
    phone1: "+7 (495) 760-42-20",
    phone2: "+7 (985) 760-42-20",
    email: "info@mobile-tent.ru",
    telegram: "https://t.me/+79770893996?start=14594990928",
    whatsapp: "https://max.ru/u/f9LHodD0cOK_6DAtIeOn3T51Xpzrkg2i4RB2ZEjtVfXOwvURhiW6gtGMLrA",
    office: {
      name: "Офис г. Красногорск",
      address: "Московская область, г. Красногорск, ул. Молодежная. д. 4",
      map_url: "https://yandex.ru/maps/org/grand_tent/130300118530/?ll=37.269340%2C55.834305&z=17",
      hours: "ПН - ПТ с 09:00 - 22:00 МСК",
      appointment: "По предварительной записи"
    },
    production: {
      name: "Производство г. Калуга",
      address: "Калужская область, г. Калуга, ул. Производственная, д. 15",
      map_url: "https://yandex.ru/maps/org/grand_tent/32724517904/?ll=36.261566%2C54.556269&z=17",
      hours: "ПН - СБ с 08:00 - 20:00 МСК",
      appointment: "По договоренности"
    }
  };

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* SEO Title */}
      <h1 className="sr-only">{meta?.h1 || pageName}</h1>

      {/* Desktop version */}
      <div className="hidden md:flex flex-col w-full">
        <Cardtent1
          seoH1={meta?.h1}
          pageName={pageName}
          priceConfigurations={priceConfigurations}
          contacts={defaultContacts}
          imagePaths={imagePaths}        // 👈 PASS THIS
          mainImagePath={mainImagePath}  // 👈 PASS THIS
          threed={threed}                // 👈 PASS THIS
          specs={{
            productCode: data.productCode || data.id,
            size: product?.size,
            area: product?.area,
            shape: product?.shape,
            images: imagePaths || (mainImage ? [mainImage] : []),
            url3d: product?.url3d,
            capacity: product?.capacity,
            width: product?.width,
            length: product?.length,
            archHeight: product?.archHeight,
            ridgeHeight: product?.ridgeHeight,
            inStock: product?.inStock
          }}
        />
        <Cardtent2
          desktopContent={content?.desktop}
          mobileContent={content?.mobile}
          imagePaths={imagePaths}        // 👈 PASS THIS
          mainImagePath={mainImagePath}  // 👈 PASS THIS
          threed={threed}                // 👈 PASS THIS
          specs={{
            productCode: product?.code,
            size: product?.size,
            area: product?.area,
            shape: product?.shape,
            images: imagePaths || (mainImage ? [mainImage] : []),
            url3d: product?.url3d,
            capacity: product?.capacity,
            width: product?.width,
            length: product?.length,
            archHeight: product?.archHeight,
            ridgeHeight: product?.ridgeHeight,
            inStock: product?.inStock
          }}
          otherSizes={otherSizes}
          productType={product?.type}
          contacts={defaultContacts}
        />
        <Footer />
      </div>

      {/* Mobile version */}
      <div className="flex md:hidden flex-col w-full">
        <Cardtent1
          seoH1={meta?.h1}
          pageName={pageName}
          priceConfigurations={priceConfigurations}
          contacts={defaultContacts}
          imagePaths={imagePaths}        // 👈 PASS THIS
          mainImagePath={mainImagePath}  // 👈 PASS THIS
          threed={threed}                // 👈 PASS THIS
          specs={{
            productCode: product?.code,
            size: product?.size,
            area: product?.area,
            shape: product?.shape,
            images: imagePaths || (mainImage ? [mainImage] : []),
            url3d: product?.url3d,
            capacity: product?.capacity,
            width: product?.width,
            length: product?.length,
            archHeight: product?.archHeight,
            ridgeHeight: product?.ridgeHeight,
            inStock: product?.inStock
          }}
        />
        <Cardtent2
          desktopContent={content?.desktop}
          mobileContent={content?.mobile}
          imagePaths={imagePaths}        // 👈 PASS THIS
          mainImagePath={mainImagePath}  // 👈 PASS THIS
          threed={threed}                // 👈 PASS THIS
          specs={{
            productCode: product?.code,
            size: product?.size,
            area: product?.area,
            shape: product?.shape,
            images: imagePaths || (mainImage ? [mainImage] : []),
            url3d: product?.url3d,
            capacity: product?.capacity,
            width: product?.width,
            length: product?.length,
            archHeight: product?.archHeight,
            ridgeHeight: product?.ridgeHeight,
            inStock: product?.inStock
          }}
          otherSizes={otherSizes}
          contacts={defaultContacts}
        />
        <Footer />
      </div>
    </div>
  );
}