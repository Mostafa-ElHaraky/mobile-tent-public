// src/data/hitSalesData.ts

// ---- Types (shared) ----
export type Category = 'Шатры' | 'Ангары';

export type TypeByCategory =
  // ⬇️ Split “Арочные” into two distinct types
  | 'Арочные (Шатры)' | 'Ангары Тип В'
  | 'Пагода'
  | 'Мобильные' | 'Шестигранные' | 'Купольные'
  | 'Глэмпинг' | 'Надувные' | 'Сферические' | 'Ангары Тип Д' | 'Большие шатры' | 'Классический' | 'Круглый' | 'Звезда' | 'Зонт' | 'Свадьбы шатры' | 'Шатры для выставок';

export interface ProductSpecs {
  size: string;
  area: string;
  capacity: string;
  availability: string;
}

export interface ProductPrice {
  original: string;
  discount: string;
  current: string;
}

export interface Product {
  id: string;
  title: string;
  images: string[];
  specs: ProductSpecs;
  price: ProductPrice;
  type: TypeByCategory;
}

// Static image mapping (keep this)
const imgs = {
  // ... keep all your existing image mappings
  base: ['/1.webp','/3.webp','/Образмер.webp'],
  base2: ['/1(1).webp','/2.webp','/Образмер (1).webp'],
  base3: ['/1(2).webp','/3(1).webp','/Образмер.webp'],
  base4: ['/1(3).webp','/3(oct).webp','/4.webp'],
  small: ['/small1.webp','/small2.webp','/small3.webp'],
  pagodaA: ['/pagda1.webp','/pagda2.webp','/pagda3.webp'],
  pagodaB: ['/pagda4.webp','/pagda5.webp','/pagda6.webp'],
  pagodaC: ['/pagda7.webp','/pagda8.webp','/pagda9.webp'],
  pagodaD: ['/pagda5x5,3.webp','/pagda5x5,2.webp','/pagda5x5,1.webp'],
  pagodaE: ['/pagda6x6,3.webp','/pagda6x6,2.webp','/pagda6x6,1.webp'],
  mobA: ['/mobilny1.webp','/mobilny2.webp','/mobilny3.webp'],
  mobB: ['/mobilny4.webp','/mobilny5.webp','/mobilny6.webp'],
  mobC: ['/mobilny7.webp','/mobilny8.webp','/mobilny9.webp'],
  mobD: ['/mobilny4x6,3.webp','/mobilny4x6,2.webp','/mobilny4x6,1.webp'],
  mobE: ['/mobilny3x6,1.webp','/mobilny3x6,2.webp','/mobilny3x6,3.webp'],
  star: ['/nadovne1.webp' , '/nadovne2.webp' , '/nadovne3.webp'],
  hexA: ['/shesteg1.webp','/shesteg2.webp','/shesteg3.webp'],
  hexB: ['/shesteg1.webp','/shesteg2.webp','/shesteg4.webp'],
  hexC: ['/shesteg1.webp','/shesteg2.webp','/shesteg5.webp'],
  domeA: ['/kopal1.webp','/kopal2.webp','/kopal3.webp'],
  domeB: ['/spher26,1.webp','/spher26,2.webp','/spher26,3.webp'],
  domeC: ['/kopal1.webp','/kopal2.webp','/kopal5.webp'],
  glempA: ['/glemping2.webp','/glemping1.webp','/glemping3.webp'],
  membrA: ['/B_10x30_1.webp','/B_10x30_2.webp','/B_10x30_3.webp'],
  membrB: ['/B_15x20_1.webp','/B_15x20_2.webp','/B_15x20_3.webp'],
  membrС: ['/B_15x40_1.webp','/B_15x40_2.webp','/B_15x40_3.webp'],
  membrD: ['/B_20x30_1.webp','/B_20x30_2.webp','/B_20x30_3.webp'],
  membrE: ['/B_20x50_1.webp','/B_20x50_2.webp','/B_20x50_3.webp'],
  membrF: ['/B_25x30_1.webp','/B_25x30_2.webp','/B_25x30_3.webp'],
  membrG: ['/B_25x50_1.webp','/B_25x50_2.webp','/B_25x50_3.webp'],
  membrH: ['/D_15x20_1.webp','/D_15x20_2.webp','/D_15x20_3.webp'],
  membrI: ['/D_20x50_1.webp','/D_20x50_2.webp','/D_20x50_3.webp'],
  membrJ: ['/D_25x45_1.webp','/D_25x45_2.webp','/D_25x45_3.webp'],
  membrK: ['/D_10x30_1.webp','/D_10x30_2.webp','/D_10x30_3.webp'],
  membrL: ['/D_15x40_1.webp','/D_15x40_2.webp','/D_15x40_3.webp'],
  membrM: ['/D_20x30_1.webp','/D_20x30_2.webp','/D_20x30_3.webp'],
  membrN: ['/D_25x30_1.webp','/D_25x30_2.webp','/D_25x30_3.webp'],
  Big1: ['/10x30,1.webp' , '/10x30,2.webp' , '/10x30,4.webp'],
  Classical1: ['/classical1.webp' , '/classical2.webp' , '/classicalnew.webp'],
  Classical2: [ '/10x30,1.webp' , '/10x30,2.webp' , '/10x30,4.webp'],
  Classical3: [ '/15x20,1.webp' , '/15x20,2.webp' , '/15x20,3.webp'],
  Classical4: [ '/15x30,1.webp' , '/15x30,2.webp' , '/15x30,3.webp'],
  Classical5: [ '/15x40,1.webp' , '/15x40,2.webp' , '/15x40,3.webp'],
  Classical6: [ '/20x35,3.webp' , '/20x35,2.webp' , '/20x35,1.webp'],
  Classical7: [ '/20x40,1.webp' , '/20x40,2.webp' , '/20x40,3.webp'],
  Classical8: [ '/25x25,1.webp' , '/25x25,2.webp' , '/20x20,6.webp'],
  Classical9: [ '/25x30,1.webp' , '/25x30,2.webp' , '/25x30,3.webp'],
  Classical10: [ '/25x40,1.webp' , '/25x40,2.webp' , '/25x40,3.webp'],
  Krugly: [ '/krugly3.webp' , '/krugly2.webp' , '/krugly3.webp'],
  Star1: [ '/zvezda.webp' , '/zvezda1.webp' , '/zvezda2.webp'],
  Zont1: [ '/zontmish.webp' , '/zontmish1.webp' , '/zontmish2.webp'],
  Arochny1: [ '/model1.webp' , '/model2.webp' , '/model3.webp'],
  Arochny2: [ '/6x3,1.webp' , '/6x3,2.webp' , '/6x3,3.webp'],
  Arochny3: ['/1(2).webp','/3(1).webp','/8x8.webp'],
  Arochny4: ['/12x12,1.webp','/12x12,2.webp','/shatyor20x20.webp'],
  Arochny5: ['/20x17,1.webp','/20x17,2.webp','/20x17,3.webp'],
  Arochny6: ['/20x20,1.webp','/20x20,2.webp','/20x20,3.webp'],
  Arochny7: ['/module6m1.webp','/module6m2.webp','/module6m3.webp'],
  Arochny8: ['/30x20.webp','/30x20,2.webp','/30x20,3.webp'],
  Arochny9: ['/doparc.webp','/doparc2.webp','/doparc3.webp'],
  Arochny10: ['/cubic.webp','/cubic2.webp','/cubic3.webp'],
  Event1: [ '/events10x20,1.webp' , '/events10x20,2.webp' , '/events10x20,3.webp'],
  Event2: [ '/events10x25,1.webp' , '/events10x25,2.webp' , '/events10x25,3.webp'],
  Event3: [ '/10x30,1.webp' , '/10x30,2.webp' , '/events10x30.webp'],
  Event4: [ '/10x40,1.webp' , '/10x40,2.webp' , '/10x40,3.webp'],
  Event5: [ '/events10x10,1.webp' , '/events10x10,2.webp' , '/events10x10,3.webp'],
  Event6: [ '/events15x15,1.webp' , '/events15x15,2.webp' , '/events15x15,3.webp'],
  Event7: [ '/15x25,1.webp' , '/15x25,2.webp' , '/15x25,3.webp'],
  Event8: [ '/events15x30,1.webp' , '/events15x30,2.webp' , '/events15x30,3.webp'],
  Event9: [ '/events15x40,1.webp' , '/events15x40,2.webp' , '/events15x40,3.webp'],
  Event10: [ '/20x20,4.webp' , '/20x20,5.webp' , '/20x20,6.webp'],
  Event11: [ '/events20x40,1.webp' , '/events20x40,2.webp' , '/events20x40,3.webp'],
};

// Static data as fallback
export const allProducts: Product[] = [
  // ==============================
  // Арочные (Шатры) — min 5 items
  // (retagged your existing “Арочные” шатры items)
  // ==============================
  {
    id: 'arochnyy-shatyor-12h10-94-m2',
    title: 'Арочный шатер гексагональный 12х10м (94м²)',
    images: imgs.base,
    specs: { size: '12х10 м', area: '94 м²', capacity: '62 человек', availability: 'под заказ' },
    price: { original: '986 000 ₽', discount: '0%', current: 'от 986 000 ₽' },
    type: 'Арочные (Шатры)'
  },
  {
    id: 'arochnyy-shatyor-10h10-100-m2',
    title: 'Арочный шатер Дюна 10х10м',
    images: imgs.base2,
    specs: { size: '10х10 м', area: '100 м²', capacity: '66 человек', availability: 'под заказ' },
    price: { original: '657 000 ₽', discount: '0%', current: 'от 657 000 ₽' },
    type: 'Арочные (Шатры)'
  },
  {
    id: 'arochnyy-shatyor-6h6-36-m2',
    title: 'Арочный шатер классический 6х6м',
    images: imgs.base3,
    specs: { size: '6х6 м', area: '36 м²', capacity: '24 человек', availability: 'под заказ' },
    price: { original: '342 000 ₽', discount: '0%', current: 'от 342 000 ₽' },
    type: 'Арочные (Шатры)'
  },
  {
    id: 'arochnyy-shatyor-5h5-25-m2',
    title: 'Арочный шатер классический 5х5м',
    images: imgs.small,
    specs: { size: '5х5 м', area: '25 м²', capacity: '16 человек', availability: 'под заказ' },
    price: { original: '197 000 ₽', discount: '-20%', current: 'от 240 000 ₽' },
    type: 'Арочные (Шатры)'
  },
  {
    id: 'arochnyy-shater-10h5-50-m2',
    title: 'Арочный шатер 10х5 - 50 м²',
    images: imgs.Arochny1,
    specs: { size: '10х5 м', area: '50 м²', capacity: '16 человек', availability: 'под заказ' },
    price: { original: '300 000 ₽', discount: '-20%', current: 'от 240 000 ₽' },
    type: 'Арочные (Шатры)'
  },
  {
    id: 'arochnyy-shatyor-5h5-25-m2v',
    title: 'Арочный шатер классический 5х5м(V)',
    images: imgs.small,
    specs: { size: '5х5 м', area: '25 м²', capacity: '16 человек', availability: 'под заказ' },
    price: { original: '300 000 ₽', discount: '-20%', current: 'от 240 000 ₽' },
    type: 'Арочные (Шатры)'
  },
  {
    id: 'arochnyy-shatyor-6h3-18-m2',
    title: 'Арочный шатёр 6х3 — 18 м²',
    images: imgs.Arochny2,
    specs: { size: '6х3 м', area: '18 м²', capacity: '16 человек', availability: 'под заказ' },
    price: { original: '300 000 ₽', discount: '-20%', current: 'от 240 000 ₽' },
    type: 'Арочные (Шатры)'
  },
  {
    id: 'arochnyy-shatyor-6h5-30-m2',
    title: 'Арочный шатёр 6х5 — 30 м²',
    images: imgs.Arochny2,
    specs: { size: '6х5 м', area: '30 м²', capacity: '16 человек', availability: 'под заказ' },
    price: { original: '300 000 ₽', discount: '-20%', current: 'от 240 000 ₽' },
    type: 'Арочные (Шатры)'
  },
  {
    id: 'arochnyy-shatyor-8h3-24-m2',
    title: 'Арочный шатёр 8х3 — 24 м²',
    images: imgs.Arochny2,
    specs: { size: '8х3 м', area: '24 м²', capacity: '16 человек', availability: 'под заказ' },
    price: { original: '300 000 ₽', discount: '-20%', current: 'от 240 000 ₽' },
    type: 'Арочные (Шатры)'
  },
  {
    id: 'arochnyy-shatyor-8h4-32-m2',
    title: 'Арочный шатёр 8х4 — 32 м²',
    images: imgs.Arochny7,
    specs: { size: '8х4 м', area: '32 м²', capacity: '16 человек', availability: 'под заказ' },
    price: { original: '300 000 ₽', discount: '-20%', current: 'от 240 000 ₽' },
    type: 'Арочные (Шатры)'
  },
  {
    id: 'arochnyy-shatyor-8h8-64-m2',
    title: 'Арочный шатёр 8х8 — 64 м²',
    images: imgs.Arochny3,
    specs: { size: '8х8 м', area: '64 м²', capacity: '16 человек', availability: 'под заказ' },
    price: { original: '300 000 ₽', discount: '-20%', current: 'от 240 000 ₽' },
    type: 'Арочные (Шатры)'
  },
  {
    id: 'arochnyy-shatyor-8h8-64m2v',
    title: 'Арочный шатёр 8х8 — 64 м² V',
    images: imgs.Arochny3,
    specs: { size: '8х8 м', area: '64 м²', capacity: '16 человек', availability: 'под заказ' },
    price: { original: '300 000 ₽', discount: '-20%', current: 'от 240 000 ₽' },
    type: 'Арочные (Шатры)'
  },
  {
    id: 'arochnyy-shatyor-10h3-30-m2',
    title: 'Арочный шатёр 10х3 — 30 м²',
    images: imgs.Arochny2,
    specs: { size: '10х3 м', area: '30 м²', capacity: '16 человек', availability: 'под заказ' },
    price: { original: '300 000 ₽', discount: '-20%', current: 'от 240 000 ₽' },
    type: 'Арочные (Шатры)'
  },
  {
    id: 'arochnyy-shatyor-10h10-100-m2v',
    title: 'Арочный шатёр 10х10 — 100 м² (V) ',
    images: imgs.base2,
    specs: { size: '10х10 м', area: '100 м²', capacity: '16 человек', availability: 'под заказ' },
    price: { original: '300 000 ₽', discount: '-20%', current: 'от 240 000 ₽' },
    type: 'Арочные (Шатры)'
  },
  {
    id: 'arochnyy-shatyor-12h12-144-m2',
    title: 'Арочный шатёр 12х12 — 144 м²',
    images: imgs.Arochny4,
    specs: { size: '12х12 м', area: '144 м²', capacity: '16 человек', availability: 'под заказ' },
    price: { original: '300 000 ₽', discount: '-20%', current: 'от 240 000 ₽' },
    type: 'Арочные (Шатры)'
  },
  {
    id: 'arochnyy-shatyor-15h13-163-m2',
    title: 'Арочный шатёр 15х13 — 163 м²',
    images: imgs.base,
    specs: { size: '15х13 м', area: '163 м²', capacity: '16 человек', availability: 'под заказ' },
    price: { original: '300 000 ₽', discount: '-20%', current: 'от 240 000 ₽' },
    type: 'Арочные (Шатры)'
  },
  {
    id: 'arochnyy-shatyor-16h16-256-m2',
    title: 'Арочный шатёр 16х16 — 256 м²',
    images: imgs.Arochny4,
    specs: { size: '16х16 м', area: '256 м²', capacity: '16 человек', availability: 'под заказ' },
    price: { original: '300 000 ₽', discount: '-20%', current: 'от 240 000 ₽' },
    type: 'Арочные (Шатры)'
  },
  {
    id: 'arochnyy-shatyor-16h16-256-m2-b',
    title: 'Арочный шатёр 16х16 — 256 м² (B)',
    images: imgs.Arochny4,
    specs: { size: '16х16 м', area: '256 м²', capacity: '16 человек', availability: 'под заказ' },
    price: { original: '300 000 ₽', discount: '-20%', current: 'от 240 000 ₽' },
    type: 'Арочные (Шатры)'
  },
  {
    id: 'arochnyy-shatyor-18h15-241-m2',
    title: 'Арочный шатёр 18х15 — 241 м²',
    images: imgs.Arochny5,
    specs: { size: '18х15 м', area: '241 м²', capacity: '16 человек', availability: 'под заказ' },
    price: { original: '300 000 ₽', discount: '-20%', current: 'от 240 000 ₽' },
    type: 'Арочные (Шатры)'
  },
  {
    id: 'arochnyy-shatyor-20h17-260-m2',
    title: 'Арочный шатёр 20х17 — 260 м²',
    images: imgs.base,
    specs: { size: '20х17 м', area: '260 м²', capacity: '16 человек', availability: 'под заказ' },
    price: { original: '300 000 ₽', discount: '-20%', current: 'от 240 000 ₽' },
    type: 'Арочные (Шатры)'
  },
  {
    id: 'arochnyy-shatyor-20h20-400-m2',
    title: 'Арочный шатёр 20х20 — 400 м²',
    images: imgs.Arochny6,
    specs: { size: '20х20 м', area: '400 м²', capacity: '16 человек', availability: 'под заказ' },
    price: { original: '300 000 ₽', discount: '-20%', current: 'от 240 000 ₽' },
    type: 'Арочные (Шатры)'
  },
  {
    id: 'arochnyy-shatyor-21h15-287-m2',
    title: 'Арочный шатёр 21х15 — 287 м²',
    images: imgs.Arochny9,
    specs: { size: '21х15 м', area: '287 м²', capacity: '16 человек', availability: 'под заказ' },
    price: { original: '300 000 ₽', discount: '-20%', current: 'от 240 000 ₽' },
    type: 'Арочные (Шатры)'
  },
  {
    id: 'arochnyy-shatyor-21h16-336-m2',
    title: 'Арочный шатёр 21х16 — 336 м²',
    images: imgs.Arochny10,
    specs: { size: '21х16 м', area: '336 м²', capacity: '16 человек', availability: 'под заказ' },
    price: { original: '300 000 ₽', discount: '-20%', current: 'от 240 000 ₽' },
    type: 'Арочные (Шатры)'
  },
  {
    id: 'arochnyy-shatyor-21x19-m',
    title: 'Арочный шатёр 21x19 м',
    images: imgs.base4,
    specs: { size: '21х19 м', area: '305 м²', capacity: '16 человек', availability: 'под заказ' },
    price: { original: '300 000 ₽', discount: '-20%', current: 'от 240 000 ₽' },
    type: 'Арочные (Шатры)'
  },
  {
    id: 'arochnyy-shatyor-22h20-360-m2',
    title: 'Арочный шатёр 22х20 — 360 м²',
    images: imgs.Arochny5,
    specs: { size: '22х20 м', area: '360 м²', capacity: '16 человек', availability: 'под заказ' },
    price: { original: '300 000 ₽', discount: '-20%', current: 'от 240 000 ₽' },
    type: 'Арочные (Шатры)'
  },
  {
    id: 'arochnyy-shatyor-24h16-384-m2',
    title: 'Арочный шатёр 24х16 — 384 м²',
    images: imgs.Arochny8,
    specs: { size: '24х16 м', area: '384 м²', capacity: '16 человек', availability: 'под заказ' },
    price: { original: '300 000 ₽', discount: '-20%', current: 'от 240 000 ₽' },
    type: 'Арочные (Шатры)'
  },
  {
    id: 'arochnyy-shatyor-25h20-500-m2',
    title: 'Арочный шатёр 25х20 — 500 м²',
    images: imgs.Arochny10,
    specs: { size: '25х20 м', area: '500 м²', capacity: '16 человек', availability: 'под заказ' },
    price: { original: '300 000 ₽', discount: '-20%', current: 'от 240 000 ₽' },
    type: 'Арочные (Шатры)'
  },
  {
    id: 'arochnyy-shatyor-26h24-460-m2',
    title: 'Арочный шатёр 26х24 — 460 м²',
    images: imgs.base4,
    specs: { size: '26х24 м', area: '460 м²', capacity: '16 человек', availability: 'под заказ' },
    price: { original: '300 000 ₽', discount: '-20%', current: 'от 240 000 ₽' },
    type: 'Арочные (Шатры)'
  },
  {
    id: 'arochnyy-shatyor-27h20-460-m2',
    title: 'Арочный шатёр 27х20 — 460 м²',
    images: imgs.Arochny9,
    specs: { size: '27х20 м', area: '460 м²', capacity: '16 человек', availability: 'под заказ' },
    price: { original: '300 000 ₽', discount: '-20%', current: 'от 240 000 ₽' },
    type: 'Арочные (Шатры)'
  },
  {
    id: 'arochnyy-shatyor-30h20-600-m2',
    title: 'Арочный шатёр 30х20 — 600 м²',
    images: imgs.Arochny8,
    specs: { size: '30х20 м', area: '600 м²', capacity: '16 человек', availability: 'под заказ' },
    price: { original: '300 000 ₽', discount: '-20%', current: 'от 240 000 ₽' },
    type: 'Арочные (Шатры)'
  },
  {
    id: 'arochnyy-shatyor-35h35-1225-m2',
    title: 'Арочный шатёр 3,5х3,5 — 12,25 м²',
    images: imgs.small,
    specs: { size: '3,5х3,5 м', area: '12,25 м²', capacity: '16 человек', availability: 'под заказ' },
    price: { original: '300 000 ₽', discount: '-20%', current: 'от 240 000 ₽' },
    type: 'Арочные (Шатры)'
  },
  {
    id: 'arochnyy-shatyor-35h35-1225-m2v',
    title: 'Арочный шатёр 3,5х3,5 — 12,25 м² (V)',
    images: imgs.small,
    specs: { size: '3,5х3,5 м', area: '12,25 м²', capacity: '16 человек', availability: 'под заказ' },
    price: { original: '300 000 ₽', discount: '-20%', current: 'от 240 000 ₽' },
    type: 'Арочные (Шатры)'
  },

  // ================
  // Пагода — 4 items
  // ================
  {
    id: 'shatyor-pagoda-standart-10h10',
    title: 'Пагода шатер 10х10м',
    images: imgs.pagodaA,
    specs: { size: '10х10 м', area: '100 м²', capacity: '66 человек', availability: 'под заказ' },
    price: { original: '230 000 ₽', discount: '-30%', current: 'от 150 000 ₽' },
    type: 'Пагода'
  },
  {
    id: 'shatyor-pagoda-london-3h3',
    title: 'Пагода шатер 3х3м',
    images: imgs.pagodaB,
    specs: { size: '3х3 м', area: '9 м²', capacity: '6 человек', availability: 'под заказ' },
    price: { original: '250 000 ₽', discount: '-25%', current: 'от 180 000 ₽' },
    type: 'Пагода'
  },
  {
    id: 'shatyor-pagoda-london-10h10',
    title: 'Пагода шатер 10х10м Pro',
    images: imgs.pagodaC,
    specs: { size: '10х10 м', area: '100 м²', capacity: '66 человек', availability: 'под заказ' },
    price: { original: '300 000 ₽', discount: '-20%', current: 'от 240 000 ₽' },
    type: 'Пагода'
  },
  {
    id: 'shatyor-pagoda-london-5h5',
    title: 'Пагода шатер 5х5м',
    images: imgs.pagodaB,
    specs: { size: '5х5 м', area: '25 м²', capacity: '18 человек', availability: 'под заказ' },
    price: { original: '190 000 ₽', discount: '-15%', current: 'от 161 500 ₽' },
    type: 'Пагода'
  },
  {
    id: 'shater-pagoda-standart-4h4',
    title: 'Шатер Пагода Стандарт 4х4',
    images: imgs.pagodaB,
    specs: { size: '4х4 м', area: '16 м²', capacity: '18 человек', availability: 'под заказ' },
    price: { original: '190 000 ₽', discount: '-15%', current: 'от 161 500 ₽' },
    type: 'Пагода'
  },
  {
    id: 'shatry-pagoda-s-ostroy-kryshey-london-4h4',
    title: 'Шатры Пагода с острой крышей Лондон 4х4',
    images: imgs.pagodaB,
    specs: { size: '4х4 м', area: '16 м²', capacity: '18 человек', availability: 'под заказ' },
    price: { original: '190 000 ₽', discount: '-15%', current: 'от 161 500 ₽' },
    type: 'Пагода'
  },
  {
    id: 'shatry-pagoda-s-ostroy-kryshey-standart-3h3',
    title: 'Шатры Пагода с острой крышей Стандарт 3х3',
    images: imgs.pagodaB,
    specs: { size: '3х3 м', area: '9 м²', capacity: '18 человек', availability: 'под заказ' },
    price: { original: '190 000 ₽', discount: '-15%', current: 'от 161 500 ₽' },
    type: 'Пагода'
  },
  {
    id: 'shatry-pagoda-s-ostroy-kryshey-standart-5h5',
    title: 'Шатры Пагода с острой крышей Стандарт 5х5',
    images: imgs.pagodaD,
    specs: { size: '5х5 м', area: '25 м²', capacity: '18 человек', availability: 'под заказ' },
    price: { original: '190 000 ₽', discount: '-15%', current: 'от 161 500 ₽' },
    type: 'Пагода'
  },
  {
    id: 'shatyor-pagoda-london-6h6',
    title: 'Шатёр Пагода Лондон 6х6',
    images: imgs.pagodaE,
    specs: { size: '6х6 м', area: '36 м²', capacity: '18 человек', availability: 'под заказ' },
    price: { original: '190 000 ₽', discount: '-15%', current: 'от 161 500 ₽' },
    type: 'Пагода'
  },
  {
    id: 'shatyor-pagoda-standart-6h6',
    title: 'Шатёр Пагода Стандарт 6х6',
    images: imgs.pagodaE,
    specs: { size: '6х6 м', area: '36 м²', capacity: '18 человек', availability: 'под заказ' },
    price: { original: '190 000 ₽', discount: '-15%', current: 'от 161 500 ₽' },
    type: 'Пагода'
  },
  {
    id: 'shatyor-pagoda-standart-8h8',
    title: 'Шатёр Пагода Стандарт 8х8',
    images: imgs.pagodaE,
    specs: { size: '8х8 м', area: '64 м²', capacity: '28 человек', availability: 'под заказ' },
    price: { original: '190 000 ₽', discount: '-15%', current: 'от 161 500 ₽' },
    type: 'Пагода'
  },
  {
    id: 'shatyor-pagoda-london-8h8',
    title: 'Шатёр Пагода Лондон 8х8',
    images: imgs.pagodaA,
    specs: { size: '8х8 м', area: '64 м²', capacity: '18 человек', availability: 'под заказ' },
    price: { original: '190 000 ₽', discount: '-15%', current: 'от 161 500 ₽' },
    type: 'Пагода'
  },


  // =================
  // Мобильные — 4 items
  // =================
  {
    id: 'mobilnyy-shatyor-hard-prof-3h3',
    title: 'Мобильный шатер 3х3м',
    images: imgs.mobA,
    specs: { size: '3х3 м', area: '9 м²', capacity: '6 человек', availability: 'под заказ' },
    price: { original: '230 000 ₽', discount: '-30%', current: 'от 150 000 ₽' },
    type: 'Мобильные'
  },
  {
    id: 'mobilnyy-shatyor-hard-prof-4h8',
    title: 'Мобильный шатер 4х8м',
    images: imgs.mobB,
    specs: { size: '4х8 м', area: '32 м²', capacity: '20 человек', availability: 'под заказ' },
    price: { original: '250 000 ₽', discount: '-25%', current: 'от 180 000 ₽' },
    type: 'Мобильные'
  },
  {
    id: 'mobilnyy-shatyor-hard-prof-4h4',
    title: 'Мобильный шатер 4х4м',
    images: imgs.mobC,
    specs: { size: '4х4 м', area: '16 м²', capacity: '10 человек', availability: 'под заказ' },
    price: { original: '300 000 ₽', discount: '-20%', current: 'от 240 000 ₽' },
    type: 'Мобильные'
  },
  {
    id: 'mobilnye-shatry-transformery-prof-4h4',
    title: 'Мобильные шатры-трансформеры Prof 4х4',
    images: imgs.mobC,
    specs: { size: '4х4 м', area: '16 м²', capacity: '10 человек', availability: 'под заказ' },
    price: { original: '300 000 ₽', discount: '-20%', current: 'от 240 000 ₽' },
    type: 'Мобильные'
  },
  {
    id: 'mobilnye-shatry-transformery-prof-4h6',
    title: 'Мобильные шатры-трансформеры Prof 4х6',
    images: imgs.mobD,
    specs: { size: '4х6 м', area: '24 м²', capacity: '10 человек', availability: 'под заказ' },
    price: { original: '300 000 ₽', discount: '-20%', current: 'от 240 000 ₽' },
    type: 'Мобильные'
  },
  {
    id: 'mobilnye-shatry-transformery-prof-4h8',
    title: 'Мобильные шатры-трансформеры Prof 4х8',
    images: imgs.mobB,
    specs: { size: '4х8 м', area: '32 м²', capacity: '10 человек', availability: 'под заказ' },
    price: { original: '300 000 ₽', discount: '-20%', current: 'от 240 000 ₽' },
    type: 'Мобильные'
  },
  {
    id: 'mobilnyy-shatyor-hard-prof-3h6',
    title: 'Мобильный шатёр Hard Prof 3х6',
    images: imgs.mobE,
    specs: { size: '3х6 м', area: '18 м²', capacity: '10 человек', availability: 'под заказ' },
    price: { original: '300 000 ₽', discount: '-20%', current: 'от 240 000 ₽' },
    type: 'Мобильные'
  },
  {
    id: 'mobilnyy-shatyor-hard-prof-3h45',
    title: 'Мобильный шатёр Hard Prof 3х4.5',
    images: imgs.mobA,
    specs: { size: '3х4,5 м', area: '13,5 м²', capacity: '10 человек', availability: 'под заказ' },
    price: { original: '300 000 ₽', discount: '-20%', current: 'от 240 000 ₽' },
    type: 'Мобильные'
  },
  {
    id: 'mobilnyy-shatyor-hard-prof-4h6',
    title: 'Мобильный шатёр Hard Prof 4х6',
    images: imgs.mobD,
    specs: { size: '4х6 м', area: '24 м²', capacity: '10 человек', availability: 'под заказ' },
    price: { original: '300 000 ₽', discount: '-20%', current: 'от 240 000 ₽' },
    type: 'Мобильные'
  },
  {
    id: 'mobilnyy-shatyor-slim-prof-3h3',
    title: 'Мобильный шатёр Slim Prof 3х3',
    images: imgs.mobA,
    specs: { size: '3х3 м', area: '9 м²', capacity: '6 человек', availability: 'под заказ' },
    price: { original: '230 000 ₽', discount: '-30%', current: 'от 150 000 ₽' },
    type: 'Мобильные'
  },
  {
    id: 'mobilnyy-shatyor-slim-prof-3h6',
    title: 'Мобильный шатёр Slim Prof 3х6',
    images: imgs.mobE,
    specs: { size: '3х6 м', area: '18 м²', capacity: '10 человек', availability: 'под заказ' },
    price: { original: '300 000 ₽', discount: '-20%', current: 'от 240 000 ₽' },
    type: 'Мобильные'
  },
  {
    id: 'mobilnyy-shatyor-slim-prof-3h45',
    title: 'Мобильный шатёр Slim Prof 3х4.5',
    images: imgs.mobA,
    specs: { size: '3х4,5 м', area: '13,5 м²', capacity: '10 человек', availability: 'под заказ' },
    price: { original: '300 000 ₽', discount: '-20%', current: 'от 240 000 ₽' },
    type: 'Мобильные'
  },
  {
    id: 'mobilnyy-shatyor-slim-prof-4h4',
    title: 'Мобильный шатёр Slim Prof 4х4',
    images: imgs.mobC,
    specs: { size: '4х4 м', area: '16 м²', capacity: '10 человек', availability: 'под заказ' },
    price: { original: '300 000 ₽', discount: '-20%', current: 'от 240 000 ₽' },
    type: 'Мобильные'
  },
  {
    id: 'mobilnyy-shatyor-slim-prof-4h6',
    title: 'Мобильный шатёр Slim Prof 4х6',
    images: imgs.mobD,
    specs: { size: '4х6 м', area: '24 м²', capacity: '10 человек', availability: 'под заказ' },
    price: { original: '300 000 ₽', discount: '-20%', current: 'от 240 000 ₽' },
    type: 'Мобильные'
  },
  {
    id: 'mobilnyy-shatyor-slim-prof-4h8',
    title: 'Мобильный шатёр Slim Prof 4х8',
    images: imgs.mobB,
    specs: { size: '4х8 м', area: '32 м²', capacity: '10 человек', availability: 'под заказ' },
    price: { original: '300 000 ₽', discount: '-20%', current: 'от 240 000 ₽' },
    type: 'Мобильные'
  },

  // ======================
  // Шестигранные — 4 items
  // ======================
  {
    id: 'shestigrannyy-shatyor-standart-diametr-10-m',
    title: 'Шестигранный шатер 10х10м',
    images: imgs.hexA,
    specs: { size: '10х10 м', area: '65 м²', capacity: '43 человек', availability: 'под заказ' },
    price: { original: '230 000 ₽', discount: '-30%', current: 'от 150 000 ₽' },
    type: 'Шестигранные'
  },
  {
    id: 'shestigrannyy-shatyor-standart-diametr-8-m',
    title: 'Шестигранный шатёр Стандарт (Диаметр 8 м)',
    images: imgs.hexC,
    specs: { size: '8 м', area: '50 м²', capacity: '15 человек', availability: 'под заказ' },
    price: { original: '300 000 ₽', discount: '-20%', current: 'от 240 000 ₽' },
    type: 'Шестигранные'
  },
  {
    id: 'shestigrannyy-shatyor-standart-diametr-15-m',
    title: 'Шестигранный шатер 15х15м',
    images: imgs.hexB,
    specs: { size: '15х15 м', area: '225 м²', capacity: '140 человек', availability: 'под заказ' },
    price: { original: '250 000 ₽', discount: '-25%', current: 'от 180 000 ₽' },
    type: 'Шестигранные'
  },
  {
    id: 'shestigrannyy-shatyor-standart-diametr-6-m',
    title: 'Шестигранный шатер 6х6м',
    images: imgs.hexC,
    specs: { size: '6х6 м', area: '23 м²', capacity: '15 человек', availability: 'под заказ' },
    price: { original: '300 000 ₽', discount: '-20%', current: 'от 240 000 ₽' },
    type: 'Шестигранные'
  },
  {
    id: 'shestigrannyy-shatyor-standart-diametr-12-m',
    title: 'Шестигранный шатер 12х12м',
    images: imgs.hexA,
    specs: { size: '12х12 м', area: '104 м²', capacity: '70 человек', availability: 'под заказ' },
    price: { original: '320 000 ₽', discount: '-15%', current: 'от 272 000 ₽' },
    type: 'Шестигранные'
  },
  {
    id: 'shestigrannyy-shatyor-london-diametr-6-m',
    title: 'Шестигранный шатёр Лондон (Диаметр 6 м)',
    images: imgs.hexC,
    specs: { size: '6 м', area: '28 м²', capacity: '15 человек', availability: 'под заказ' },
    price: { original: '300 000 ₽', discount: '-20%', current: 'от 240 000 ₽' },
    type: 'Шестигранные'
  },
  {
    id: 'shestigrannyy-shatyor-london-diametr-8-m',
    title: 'Шестигранный шатёр Лондон (Диаметр 8 м)',
    images: imgs.hexC,
    specs: { size: '8 м', area: '50 м²', capacity: '15 человек', availability: 'под заказ' },
    price: { original: '300 000 ₽', discount: '-20%', current: 'от 240 000 ₽' },
    type: 'Шестигранные'
  },
  {
    id: 'shestigrannyy-shatyor-london-diametr-10-m',
    title: 'Шестигранный шатёр Лондон (Диаметр 10 м)',
    images: imgs.hexA,
    specs: { size: '10 м', area: '100 м²', capacity: '43 человек', availability: 'под заказ' },
    price: { original: '230 000 ₽', discount: '-30%', current: 'от 150 000 ₽' },
    type: 'Шестигранные'
  },
  {
    id: 'shestigrannyy-shatyor-london-diametr-12-m',
    title: 'Шестигранный шатёр Лондон (Диаметр 12 м)',
    images: imgs.hexA,
    specs: { size: '12 м', area: '144 м²', capacity: '43 человек', availability: 'под заказ' },
    price: { original: '230 000 ₽', discount: '-30%', current: 'от 150 000 ₽' },
    type: 'Шестигранные'
  },
  {
    id: 'shestigrannyy-shatyor-london-diametr-15-m',
    title: 'Шестигранный шатёр Лондон (Диаметр 15 м)',
    images: imgs.hexA,
    specs: { size: '15 м', area: '176 м²', capacity: '43 человек', availability: 'под заказ' },
    price: { original: '230 000 ₽', discount: '-30%', current: 'от 150 000 ₽' },
    type: 'Шестигранные'
  },
  {
    id: 'shestigrannyy-shatyor-rimini-diametr-6-m',
    title: 'Шестигранный шатёр Римини (Диаметр 6 м)',
    images: imgs.hexC,
    specs: { size: '6 м', area: '28 м²', capacity: '15 человек', availability: 'под заказ' },
    price: { original: '300 000 ₽', discount: '-20%', current: 'от 240 000 ₽' },
    type: 'Шестигранные'
  },
  {
    id: 'shestigrannyy-shatyor-rimini-diametr-8-m',
    title: 'Шестигранный шатёр Римини (Диаметр 8 м)',
    images: imgs.hexC,
    specs: { size: '8 м', area: '50 м²', capacity: '15 человек', availability: 'под заказ' },
    price: { original: '300 000 ₽', discount: '-20%', current: 'от 240 000 ₽' },
    type: 'Шестигранные'
  },
  {
    id: 'shestigrannyy-shatyor-rimini-diametr-10-m',
    title: 'Шестигранный шатёр Римини (Диаметр 10 м)',
    images: imgs.hexA,
    specs: { size: '10 м', area: '100 м²', capacity: '43 человек', availability: 'под заказ' },
    price: { original: '230 000 ₽', discount: '-30%', current: 'от 150 000 ₽' },
    type: 'Шестигранные'
  },
  {
    id: 'shestigrannyy-shatyor-rimini-diametr-12-m',
    title: 'Шестигранный шатёр Римини (Диаметр 12 м)',
    images: imgs.hexA,
    specs: { size: '12 м', area: '144 м²', capacity: '43 человек', availability: 'под заказ' },
    price: { original: '230 000 ₽', discount: '-30%', current: 'от 150 000 ₽' },
    type: 'Шестигранные'
  },
  {
    id: 'shestigrannyy-shatyor-rimini-diametr-15-m',
    title: 'Шестигранный шатёр Римини (Диаметр 15 м)',
    images: imgs.hexA,
    specs: { size: '15 м', area: '176 м²', capacity: '43 человек', availability: 'под заказ' },
    price: { original: '230 000 ₽', discount: '-30%', current: 'от 150 000 ₽' },
    type: 'Шестигранные'
  },

  // ==================
  // Купольные — 4 items
  // ==================
  {
    id: 'kupolnyy-shater-diametr-10-m',
    title: 'Купольный шатер 10х10м',
    images: imgs.domeA,
    specs: { size: '10х10 м', area: '100 м²', capacity: '66 человек', availability: 'под заказ' },
    price: { original: '230 000 ₽', discount: '-30%', current: 'от 150 000 ₽' },
    type: 'Купольные'
  },
  {
    id: 'kupolnyy-shater-diametr-6-m',
    title: 'Купольный шатер 6х6м',
    images: imgs.domeC,
    specs: { size: '6х6 м', area: '36 м²', capacity: '72 человек', availability: 'под заказ' },
    price: { original: '300 000 ₽', discount: '-20%', current: 'от 240 000 ₽' },
    type: 'Купольные'
  },
  {
    id: 'kupolnyy-tent-20-m',
    title: 'Купольный шатер 20м',
    images: imgs.domeC,
    specs: { size: '20 м', area: '400 м²', capacity: '526 человек', availability: 'под заказ' },
    price: { original: '380 000 ₽', discount: '-15%', current: 'от 323 000 ₽' },
    type: 'Купольные'
  },
  // =================
  // Глэмпинг — 4 items
  // =================
  {
    id: 'glemping-diametr-10-m',
    title: 'Глэмпинг шатер 10х10м',
    images: imgs.glempA,
    specs: { size: '10х10 м', area: '79 м²', capacity: '8 человек', availability: 'под заказ' },
    price: { original: '230 000 ₽', discount: '-30%', current: 'от 150 000 ₽' },
    type: 'Глэмпинг'
  },
  {
    id: 'glemping-diametr-6-m',
    title: 'Глэмпинг шатер 6х6м',
    images: imgs.glempA,
    specs: { size: '6х6 м', area: '28 м²', capacity: '4 человек', availability: 'под заказ' },
    price: { original: '250 000 ₽', discount: '-25%', current: 'от 180 000 ₽' },
    type: 'Глэмпинг'
  },
  {
    id: 'glemping-diametr-8-m',
    title: 'Глэмпинг шатер 8х8м',
    images: imgs.glempA,
    specs: { size: '8х8 м', area: '50 м²', capacity: '6 человек', availability: 'под заказ' },
    price: { original: '300 000 ₽', discount: '-20%', current: 'от 240 000 ₽' },
    type: 'Глэмпинг'
  },

  // =================
  // Надувные — 4 items
  // =================
  {
    id: 'naduvnoy-shater-8h8',
    title: 'Надувной шатер 8х8м',
    images: imgs.star,
    specs: { size: '8х8 м', area: '64 м²', capacity: '42 человек', availability: 'под заказ' },
    price: { original: '230 000 ₽', discount: '-30%', current: 'от 150 000 ₽' },
    type: 'Надувные'
  },
  {
    id: 'naduvnoy-shater-10h10',
    title: 'Надувной шатер 10х10м',
    images: imgs.star,
    specs: { size: '10х10 м', area: '100 м²', capacity: '66 человек', availability: 'под заказ' },
    price: { original: '250 000 ₽', discount: '-25%', current: 'от 180 000 ₽' },
    type: 'Надувные'
  },
  {
    id: 'naduvnoy-shater-12h12',
    title: 'Надувной шатер 12х12м',
    images: imgs.star,
    specs: { size: '12х12 м', area: '144 м²', capacity: '96 человек', availability: 'под заказ' },
    price: { original: '300 000 ₽', discount: '-20%', current: 'от 240 000 ₽' },
    type: 'Надувные'
  },
  {
    id: 'naduvnoy-shater-6h6',
    title: 'Надувной шатер 6х6м',
    images: imgs.star,
    specs: { size: '6х6 м', area: '36 м²', capacity: '24 человек', availability: 'под заказ' },
    price: { original: '190 000 ₽', discount: '-12%', current: 'от 167 200 ₽' },
    type: 'Надувные'
  },

  // ====================
  // Сферические — 4 items
  // ====================
  {
    id: 'sfera-shater-diametr-14-m',
    title: 'Сферический шатер Ø14м',
    images: imgs.domeB,
    specs: { size: 'Ø14 м', area: '154 м²', capacity: '100 человек', availability: 'под заказ' },
    price: { original: '1 980 000 ₽', discount: '-10%', current: 'от 1 782 000 ₽' },
    type: 'Сферические'
  },
  {
    id: 'sfera-shater-diametr-8-m',
    title: 'Сферический шатер Ø8м',
    images: imgs.domeB,
    specs: { size: 'Ø8 м', area: '154 м²', capacity: '100 человек', availability: 'под заказ' },
    price: { original: '1 980 000 ₽', discount: '-10%', current: 'от 1 782 000 ₽' },
    type: 'Сферические'
  },
  {
    id: 'sfericheskiy-shatyor-26-m',
    title: 'Сферический шатер Ø26м',
    images: imgs.domeB,
    specs: { size: 'Ø26 м', area: '154 м²', capacity: '100 человек', availability: 'под заказ' },
    price: { original: '1 980 000 ₽', discount: '-10%', current: 'от 1 782 000 ₽' },
    type: 'Сферические'
  },
  {
    id: 'shater-polusfera-35-m',
    title: 'Полусфера шатер Ø35м',
    images: imgs.domeB,
    specs: { size: 'Ø26 м', area: '154 м²', capacity: '100 человек', availability: 'под заказ' },
    price: { original: '1 980 000 ₽', discount: '-10%', current: 'от 1 782 000 ₽' },
    type: 'Сферические'
  },


    // ==================
    // Большие шатры — 4 items
    // ==================
  {
    id: 'bolshoy-shater-10h25',
    title: 'Большой шатер 10х25',
    images: imgs.Big1,
    specs: { size: '10х25 м', area: '250 м²', capacity: '140 человек', availability: 'под заказ' },
    price: { original: '2 400 000 ₽', discount: '-15%', current: 'от 2 040 000 ₽' },
    type: 'Большие шатры'
  },
  {
    id: 'bolshoy-shater-10h35',
    title: 'Большой шатер 10х35',
    images: imgs.Big1,
    specs: { size: '10х35 м', area: '350 м²', capacity: '280 человек', availability: 'под заказ' },
    price: { original: '4 150 000 ₽', discount: '-12%', current: 'от 3 652 000 ₽' },
    type: 'Большие шатры'
  },
  {
    id: 'bolshoy-shater-15h25',
    title: 'Большой шатер 15х25',
    images: imgs.Big1,
    specs: { size: '15х25 м', area: '375 м²', capacity: '100 человек', availability: 'под заказ' },
    price: { original: '1 850 000 ₽', discount: '-10%', current: 'от 1 665 000 ₽' },
    type: 'Большие шатры'
  },
  {
    id: 'bolshoy-shater-15h35',
    title: 'Большой шатер 15х35',
    images: imgs.Big1,
    specs: { size: '15х35 м', area: '525 м²', capacity: '380 человек', availability: 'под заказ' },
    price: { original: '5 900 000 ₽', discount: '-8%', current: 'от 5 428 000 ₽' },
    type: 'Большие шатры'
  },
  {
    id: 'bolshoy-shater-20h20',
    title: 'Большой шатер 20х20',
    images: imgs.Big1,
    specs: { size: '20х20 м', area: '400 м²', capacity: '380 человек', availability: 'под заказ' },
    price: { original: '5 900 000 ₽', discount: '-8%', current: 'от 5 428 000 ₽' },
    type: 'Большие шатры'
  },
  {
    id: 'tent-bolshoy-10h15',
    title: 'Большой шатер 10х15',
    images: imgs.Big1,
    specs: { size: '10х15 м', area: '150 м²', capacity: '380 человек', availability: 'под заказ' },
    price: { original: '5 900 000 ₽', discount: '-8%', current: 'от 5 428 000 ₽' },
    type: 'Большие шатры'
  },
  {
    id: 'tent-bolshoy-20h25',
    title: 'Большой шатер 20х25',
    images: imgs.Big1,
    specs: { size: '20х25 м', area: '500 м²', capacity: '380 человек', availability: 'под заказ' },
    price: { original: '5 900 000 ₽', discount: '-8%', current: 'от 5 428 000 ₽' },
    type: 'Большие шатры'
  },
  {
    id: 'tent-bolshoy-20h30',
    title: 'Большой шатер 20х30',
    images: imgs.Big1,
    specs: { size: '20х30 м', area: '600 м²', capacity: '380 человек', availability: 'под заказ' },
    price: { original: '5 900 000 ₽', discount: '-8%', current: 'от 5 428 000 ₽' },
    type: 'Большие шатры'
  },
  {
    id: 'tent-bolshoy-10h20',
    title: 'Большой шатер 10х20',
    images: imgs.Big1,
    specs: { size: '10х20 м', area: '200 м²', capacity: '380 человек', availability: 'под заказ' },
    price: { original: '5 900 000 ₽', discount: '-8%', current: 'от 5 428 000 ₽' },
    type: 'Большие шатры'
  },
  {
    id: 'tent-bolshoy-25h35',
    title: 'Большой шатер 25х35',
    images: imgs.Big1,
    specs: { size: '25х35 м', area: '875 м²', capacity: '380 человек', availability: 'под заказ' },
    price: { original: '5 900 000 ₽', discount: '-8%', current: 'от 5 428 000 ₽' },
    type: 'Большие шатры'
  },
      // ==================
      // Классический — 4 items
      // ==================
  {
    id: 'klassicheskiy-shatyor-10h10',
    title: 'Классический шатёр 10х10',
    images: imgs.Classical1,
    specs: { size: '10х10 м', area: '100 м²', capacity: '140 человек', availability: 'под заказ' },
    price: { original: '2 400 000 ₽', discount: '-15%', current: 'от 2 040 000 ₽' },
    type: 'Классический'
  },
  {
    id: 'klassicheskiy-shatyor-10h30',
    title: 'Классический шатёр 10х30',
    images: imgs.Classical2,
    specs: { size: '10х30 м', area: '300 м²', capacity: '280 человек', availability: 'под заказ' },
    price: { original: '4 150 000 ₽', discount: '-12%', current: 'от 3 652 000 ₽' },
    type: 'Классический'
  },
  {
    id: 'klassicheskiy-shatyor-10h40',
    title: 'Классический шатёр 10х40',
    images: imgs.Classical2,
    specs: { size: '10х40 м', area: '400 м²', capacity: '100 человек', availability: 'под заказ' },
    price: { original: '1 850 000 ₽', discount: '-10%', current: 'от 1 665 000 ₽' },
    type: 'Классический'
  },
  {
    id: 'klassicheskiy-shatyor-15h15',
    title: 'Классический шатёр 15х15',
    images: imgs.Classical3,
    specs: { size: '15х15 м', area: '225 м²', capacity: '380 человек', availability: 'под заказ' },
    price: { original: '5 900 000 ₽', discount: '-8%', current: 'от 5 428 000 ₽' },
    type: 'Классический'
  },
  {
    id: 'klassicheskiy-shatyor-15h20',
    title: 'Классический шатёр 15х20',
    images: imgs.Classical3,
    specs: { size: '15х20 м', area: '300 м²', capacity: '380 человек', availability: 'под заказ' },
    price: { original: '5 900 000 ₽', discount: '-8%', current: 'от 5 428 000 ₽' },
    type: 'Классический'
  },
  {
    id: 'klassicheskiy-shatyor-15h30',
    title: 'Классический шатёр 15х30',
    images: imgs.Classical4,
    specs: { size: '15х30 м', area: '450 м²', capacity: '380 человек', availability: 'под заказ' },
    price: { original: '5 900 000 ₽', discount: '-8%', current: 'от 5 428 000 ₽' },
    type: 'Классический'
  },
  {
    id: 'klassicheskiy-shatyor-15h40',
    title: 'Классический шатёр 15х40',
    images: imgs.Classical5,
    specs: { size: '15х40 м', area: '600 м²', capacity: '380 человек', availability: 'под заказ' },
    price: { original: '5 900 000 ₽', discount: '-8%', current: 'от 5 428 000 ₽' },
    type: 'Классический'
  },
  {
    id: 'klassicheskiy-shatyor-20h35',
    title: 'Классический шатёр 20х35',
    images: imgs.Classical6,
    specs: { size: '20х35 м', area: '700 м²', capacity: '380 человек', availability: 'под заказ' },
    price: { original: '5 900 000 ₽', discount: '-8%', current: 'от 5 428 000 ₽' },
    type: 'Классический'
  },
  {
    id: 'klassicheskiy-shatyor-20h40',
    title: 'Классический шатёр 20х40',
    images: imgs.Classical7,
    specs: { size: '20х40 м', area: '800 м²', capacity: '380 человек', availability: 'под заказ' },
    price: { original: '5 900 000 ₽', discount: '-8%', current: 'от 5 428 000 ₽' },
    type: 'Классический'
  },  {
    id: 'klassicheskiy-shatyor-25h25',
    title: 'Классический шатёр 25х25',
    images: imgs.Classical8,
    specs: { size: '25х25 м', area: '625 м²', capacity: '380 человек', availability: 'под заказ' },
    price: { original: '5 900 000 ₽', discount: '-8%', current: 'от 5 428 000 ₽' },
    type: 'Классический'
  },  {
    id: 'klassicheskiy-shatyor-25h30',
    title: 'Классический шатёр 25х30',
    images: imgs.Classical9,
    specs: { size: '25х30 м', area: '750 м²', capacity: '380 человек', availability: 'под заказ' },
    price: { original: '5 900 000 ₽', discount: '-8%', current: 'от 5 428 000 ₽' },
    type: 'Классический'
  },  {
    id: 'klassicheskiy-shatyor-25h40',
    title: 'Классический шатёр 25х40',
    images: imgs.Classical10,
    specs: { size: '25х40 м', area: '1000 м²', capacity: '380 человек', availability: 'под заказ' },
    price: { original: '5 900 000 ₽', discount: '-8%', current: 'от 5 428 000 ₽' },
    type: 'Классический'
  },




    // ==================
    // Круглый — 4 items
    // ==================
  {
    id: 'kruglyy-shater-diametr-12-m',
    title: 'Круглый шатер диаметр 12 м',
    images: imgs.Krugly,
    specs: { size: '12 м', area: '12 м²', capacity: '140 человек', availability: 'под заказ' },
    price: { original: '2 400 000 ₽', discount: '-15%', current: 'от 2 040 000 ₽' },
    type: 'Круглый'
  },
  {
    id: 'kruglyy-shater-diametr-30-m',
    title: 'Круглый шатер диаметр 30 м',
    images: imgs.Krugly,
    specs: { size: '30 м', area: '30 м²', capacity: '280 человек', availability: 'под заказ' },
    price: { original: '4 150 000 ₽', discount: '-12%', current: 'от 3 652 000 ₽' },
    type: 'Круглый'
  },





      // ==================
      // Звезда — 4 items
      // ==================
  {
    id: 'shatyor-zvezda-14-h-9',
    title: 'Шатёр Звезда 14 х 9',
    images: imgs.Star1,
    specs: { size: '14 х 9', area: '126 м²', capacity: '140 человек', availability: 'под заказ' },
    price: { original: '2 400 000 ₽', discount: '-15%', current: 'от 2 040 000 ₽' },
    type: 'Звезда'
  },
  {
    id: 'shatyor-zvezda-16-h-10',
    title: 'Шатёр Звезда 16 х 10',
    images: imgs.Star1,
    specs: { size: '16 х 10', area: '160 м²', capacity: '280 человек', availability: 'под заказ' },
    price: { original: '4 150 000 ₽', discount: '-12%', current: 'от 3 652 000 ₽' },
    type: 'Звезда'
  },
  {
    id: 'shatyor-zvezda-19-h-12',
    title: 'Шатёр Звезда 19 х 12',
    images: imgs.Star1,
    specs: { size: '19 х 12', area: '228 м²', capacity: '280 человек', availability: 'под заказ' },
    price: { original: '4 150 000 ₽', discount: '-12%', current: 'от 3 652 000 ₽' },
    type: 'Звезда'
  },
  {
    id: 'shatyor-zvezda-22-h-14',
    title: 'Шатёр Звезда 22 х 14',
    images: imgs.Star1,
    specs: { size: '22 х 14', area: '308 м²', capacity: '280 человек', availability: 'под заказ' },
    price: { original: '4 150 000 ₽', discount: '-12%', current: 'от 3 652 000 ₽' },
    type: 'Звезда'
  },
  {
    id: 'shatyor-zvezda-diametr-6-m',
    title: 'Шатёр Звезда (Диаметр 6 м)',
    images: imgs.Star1,
    specs: { size: '6 х 6', area: '36 м²', capacity: '280 человек', availability: 'под заказ' },
    price: { original: '4 150 000 ₽', discount: '-12%', current: 'от 3 652 000 ₽' },
    type: 'Звезда'
  },
  {
    id: 'shatyor-zvezda-diametr-8-m',
    title: 'Шатёр Звезда (Диаметр 8 м)',
    images: imgs.Star1,
    specs: { size: '8 х 8', area: '64 м²', capacity: '280 человек', availability: 'под заказ' },
    price: { original: '4 150 000 ₽', discount: '-12%', current: 'от 3 652 000 ₽' },
    type: 'Звезда'
  },
  {
    id: 'shatyor-zvezda-diametr-10-m',
    title: 'Шатёр Звезда (Диаметр 10 м)',
    images: imgs.Star1,
    specs: { size: '10 х 10', area: '100 м²', capacity: '280 человек', availability: 'под заказ' },
    price: { original: '4 150 000 ₽', discount: '-12%', current: 'от 3 652 000 ₽' },
    type: 'Звезда'
  },
  {
    id: 'shatyor-zvezda-diametr-12-m',
    title: 'Шатёр Звезда (Диаметр 12 м)',
    images: imgs.Star1,
    specs: { size: '12 х 12', area: '144 м²', capacity: '280 человек', availability: 'под заказ' },
    price: { original: '4 150 000 ₽', discount: '-12%', current: 'от 3 652 000 ₽' },
    type: 'Звезда'
  },
  {
    id: 'shatyor-zvezda-diametr-14-m',
    title: 'Шатёр Звезда (Диаметр 14 м)',
    images: imgs.Star1,
    specs: { size: '14 х 14', area: '196 м²', capacity: '280 человек', availability: 'под заказ' },
    price: { original: '4 150 000 ₽', discount: '-12%', current: 'от 3 652 000 ₽' },
    type: 'Звезда'
  },
  {
    id: 'shatyor-zvezda-diametr-16-m',
    title: 'Шатёр Звезда (Диаметр 16 м)',
    images: imgs.Star1,
    specs: { size: '16 х 16', area: '256 м²', capacity: '280 человек', availability: 'под заказ' },
    price: { original: '4 150 000 ₽', discount: '-12%', current: 'от 3 652 000 ₽' },
    type: 'Звезда'
  },



        // ==================
        // Зонт — 4 items
        // ==================
  {
    id: 'zont-desert-5x5',
    title: 'Зонт Desert 5x5',
    images: imgs.Zont1,
    specs: { size: '5 х 5', area: '25 м²', capacity: '140 человек', availability: 'под заказ' },
    price: { original: '2 400 000 ₽', discount: '-15%', current: 'от 2 040 000 ₽' },
    type: 'Зонт'
  },
  {
    id: 'zont-dlya-kafe-desert-2h2',
    title: 'Зонт для кафе Desert 2х2',
    images: imgs.Zont1,
    specs: { size: '2 х 2', area: '4 м²', capacity: '280 человек', availability: 'под заказ' },
    price: { original: '4 150 000 ₽', discount: '-12%', current: 'от 3 652 000 ₽' },
    type: 'Зонт'
  },
  {
    id: 'zont-dlya-kafe-desert-3h3',
    title: 'Зонт для кафе Desert 3х3',
    images: imgs.Zont1,
    specs: { size: '3 х 3', area: '9 м²', capacity: '280 человек', availability: 'под заказ' },
    price: { original: '4 150 000 ₽', discount: '-12%', current: 'от 3 652 000 ₽' },
    type: 'Зонт'
  },
  {
    id: 'zont-dlya-kafe-premium-side-3h3',
    title: 'Зонт для кафе Premium Side 3х3',
    images: imgs.Zont1,
    specs: { size: '3 х 3', area: '9 м²', capacity: '280 человек', availability: 'под заказ' },
    price: { original: '4 150 000 ₽', discount: '-12%', current: 'от 3 652 000 ₽' },
    type: 'Зонт'
  },
 {
    id: 'zont-dlya-kafe-standart-diametr-2',
    title: 'Зонт для кафе Standart диаметр 2',
    images: imgs.Zont1,
    specs: { size: '2 х 2', area: '4 м²', capacity: '280 человек', availability: 'под заказ' },
    price: { original: '4 150 000 ₽', discount: '-12%', current: 'от 3 652 000 ₽' },
    type: 'Зонт'
  },
  {
    id: 'zont-dlya-kafe-tiger-diametr-4',
    title: 'Зонт для кафе Tiger диаметр 4',
    images: imgs.Zont1,
    specs: { size: '4 х 4', area: '16 м²', capacity: '280 человек', availability: 'под заказ' },
    price: { original: '4 150 000 ₽', discount: '-12%', current: 'от 3 652 000 ₽' },
    type: 'Зонт'
  },
  {
    id: 'zont-premium-2h2',
    title: 'Зонт Premium 2х2',
    images: imgs.Zont1,
    specs: { size: '2 х 2', area: '4 м²', capacity: '280 человек', availability: 'под заказ' },
    price: { original: '4 150 000 ₽', discount: '-12%', current: 'от 3 652 000 ₽' },
    type: 'Зонт'
  },
  {
    id: 'zont-premium-4h4',
    title: 'Зонт Premium 4х4',
    images: imgs.Zont1,
    specs: { size: '4 х 4', area: '16 м²', capacity: '280 человек', availability: 'под заказ' },
    price: { original: '4 150 000 ₽', discount: '-12%', current: 'от 3 652 000 ₽' },
    type: 'Зонт'
  },
  {
    id: 'zont-premium-5h5',
    title: 'Зонт Premium 5х5',
    images: imgs.Zont1,
    specs: { size: '5 х 5', area: '25 м²', capacity: '280 человек', availability: 'под заказ' },
    price: { original: '4 150 000 ₽', discount: '-12%', current: 'от 3 652 000 ₽' },
    type: 'Зонт'
  },
  {
    id: 'zont-premium-side-4h4',
    title: 'Зонт Premium Side 4х4',
    images: imgs.Zont1,
    specs: { size: '4 х 4', area: '16 м²', capacity: '280 человек', availability: 'под заказ' },
    price: { original: '4 150 000 ₽', discount: '-12%', current: 'от 3 652 000 ₽' },
    type: 'Зонт'
  },
  {
    id: 'zont-premium-side-5h5',
    title: 'Зонт Premium Side 5х5',
    images: imgs.Zont1,
    specs: { size: '5 х 5', area: '25 м²', capacity: '280 человек', availability: 'под заказ' },
    price: { original: '4 150 000 ₽', discount: '-12%', current: 'от 3 652 000 ₽' },
    type: 'Зонт'
  },
  {
    id: 'zont-premium-5x5',
    title: 'Зонт Premium 5х5',
    images: imgs.Zont1,
    specs: { size: '5 х 5', area: '25 м²', capacity: '280 человек', availability: 'под заказ' },
    price: { original: '4 150 000 ₽', discount: '-12%', current: 'от 3 652 000 ₽' },
    type: 'Зонт'
  },
  {
    id: 'zont-premium-side-5x5',
    title: 'Зонт Premium side 5х5',
    images: imgs.Zont1,
    specs: { size: '5 х 5', area: '25 м²', capacity: '280 человек', availability: 'под заказ' },
    price: { original: '4 150 000 ₽', discount: '-12%', current: 'от 3 652 000 ₽' },
    type: 'Зонт'
  },
  {
    id: 'zont-quatro-4h4',
    title: 'Зонт Quatro 4х4',
    images: imgs.Zont1,
    specs: { size: '4 х 4', area: '16 м²', capacity: '280 человек', availability: 'под заказ' },
    price: { original: '4 150 000 ₽', discount: '-12%', current: 'от 3 652 000 ₽' },
    type: 'Зонт'
  },
  {
    id: 'zont-quatro-6h6',
    title: 'Зонт Quatro 6х6',
    images: imgs.Zont1,
    specs: { size: '6 х 6', area: '36 м²', capacity: '280 человек', availability: 'под заказ' },
    price: { original: '4 150 000 ₽', discount: '-12%', current: 'от 3 652 000 ₽' },
    type: 'Зонт'
  },
  {
    id: 'zont-quatro-8h8',
    title: 'Зонт Quatro 8х8',
    images: imgs.Zont1,
    specs: { size: '8 х 8', area: '64 м²', capacity: '280 человек', availability: 'под заказ' },
    price: { original: '4 150 000 ₽', discount: '-12%', current: 'от 3 652 000 ₽' },
    type: 'Зонт'
  },
  {
    id: 'zont-quatro-10x10',
    title: 'Зонт Quatro 10x10',
    images: imgs.Zont1,
    specs: { size: '10 х 10', area: '100 м²', capacity: '280 человек', availability: 'под заказ' },
    price: { original: '4 150 000 ₽', discount: '-12%', current: 'от 3 652 000 ₽' },
    type: 'Зонт'
  },
  {
    id: 'zont-side-diametr-2',
    title: 'Зонт Side диаметр 2',
    images: imgs.Zont1,
    specs: { size: '2 х 2', area: '4 м²', capacity: '280 человек', availability: 'под заказ' },
    price: { original: '4 150 000 ₽', discount: '-12%', current: 'от 3 652 000 ₽' },
    type: 'Зонт'
  },
  {
    id: 'zont-side-diametr-3',
    title: 'Зонт Side диаметр 3',
    images: imgs.Zont1,
    specs: { size: '3 х 3', area: '9 м²', capacity: '280 человек', availability: 'под заказ' },
    price: { original: '4 150 000 ₽', discount: '-12%', current: 'от 3 652 000 ₽' },
    type: 'Зонт'
  },
  {
    id: 'zont-side-diametr-4',
    title: 'Зонт Side диаметр 4',
    images: imgs.Zont1,
    specs: { size: '4 х 4', area: '16 м²', capacity: '280 человек', availability: 'под заказ' },
    price: { original: '4 150 000 ₽', discount: '-12%', current: 'от 3 652 000 ₽' },
    type: 'Зонт'
  },
  {
    id: 'zont-side-diametr-5',
    title: 'Зонт Side диаметр ',
    images: imgs.Zont1,
    specs: { size: '5 х 5', area: '25 м²', capacity: '280 человек', availability: 'под заказ' },
    price: { original: '4 150 000 ₽', discount: '-12%', current: 'от 3 652 000 ₽' },
    type: 'Зонт'
  },
  {
    id: 'zont-standart-diametr-3',
    title: 'Зонт Standart диаметр 3',
    images: imgs.Zont1,
    specs: { size: '3 х 3', area: '9 м²', capacity: '280 человек', availability: 'под заказ' },
    price: { original: '4 150 000 ₽', discount: '-12%', current: 'от 3 652 000 ₽' },
    type: 'Зонт'
  },
  {
    id: 'zont-standart-diametr-4',
    title: 'Зонт Standart диаметр 4',
    images: imgs.Zont1,
    specs: { size: '4 х 4', area: '16 м²', capacity: '280 человек', availability: 'под заказ' },
    price: { original: '4 150 000 ₽', discount: '-12%', current: 'от 3 652 000 ₽' },
    type: 'Зонт'
  },
  {
    id: 'zont-standart-diametr-5',
    title: 'Зонт Standart диаметр 5',
    images: imgs.Zont1,
    specs: { size: '5 х 5', area: '25 м²', capacity: '280 человек', availability: 'под заказ' },
    price: { original: '4 150 000 ₽', discount: '-12%', current: 'от 3 652 000 ₽' },
    type: 'Зонт'
  },
  {
    id: 'zont-tiger-diametr-2',
    title: 'Зонт Tiger диаметр 2',
    images: imgs.Zont1,
    specs: { size: '2 х 2', area: '4 м²', capacity: '280 человек', availability: 'под заказ' },
    price: { original: '4 150 000 ₽', discount: '-12%', current: 'от 3 652 000 ₽' },
    type: 'Зонт'
  },
  {
    id: 'zont-tiger-diametr-3',
    title: 'Зонт Tiger диаметр 3',
    images: imgs.Zont1,
    specs: { size: '3 х 3', area: '9 м²', capacity: '280 человек', availability: 'под заказ' },
    price: { original: '4 150 000 ₽', discount: '-12%', current: 'от 3 652 000 ₽' },
    type: 'Зонт'
  },
  {
    id: 'zont-tiger-diametr-5',
    title: 'Зонт Tiger диаметр 5',
    images: imgs.Zont1,
    specs: { size: '5 х 5', area: '25 м²', capacity: '280 человек', availability: 'под заказ' },
    price: { original: '4 150 000 ₽', discount: '-12%', current: 'от 3 652 000 ₽' },
    type: 'Зонт'
  },
  {
    id: 'zont-ulichnyy-dlya-kafe-desert-4h4',
    title: 'Зонт уличный для кафе Desert 4х4',
    images: imgs.Zont1,
    specs: { size: '4 х 4', area: '16 м²', capacity: '280 человек', availability: 'под заказ' },
    price: { original: '4 150 000 ₽', discount: '-12%', current: 'от 3 652 000 ₽' },
    type: 'Зонт'
  },
  {
    id: 'zont-ulichnyy-dlya-kafe-premium-3h3',
    title: 'Зонт уличный для кафе Premium 3х3',
    images: imgs.Zont1,
    specs: { size: '3 х 3', area: '9 м²', capacity: '280 человек', availability: 'под заказ' },
    price: { original: '4 150 000 ₽', discount: '-12%', current: 'от 3 652 000 ₽' },
    type: 'Зонт'
  },
  {
    id: 'zont-ulichnyy-dlya-kafe-premium-side-2h2',
    title: 'Зонт уличный для кафе Premium Side 2х2',
    images: imgs.Zont1,
    specs: { size: '2 х 2', area: '4 м²', capacity: '280 человек', availability: 'под заказ' },
    price: { original: '4 150 000 ₽', discount: '-12%', current: 'от 3 652 000 ₽' },
    type: 'Зонт'
  },


      // ==================
      // Свадьбы шатры — 4 items
      // ==================
  {
    id: 'shatyor-dlya-meropriyatiy-10h20-m',
    title: 'Шатёр для мероприятий 10х20 м',
    images: imgs.Event1,
    specs: { size: '10х20 м', area: '200 м²', capacity: '140 человек', availability: 'под заказ' },
    price: { original: '2 400 000 ₽', discount: '-15%', current: 'от 2 040 000 ₽' },
    type: 'Свадьбы шатры'
  },
  {
    id: 'shatyor-dlya-meropriyatiy-10h25',
    title: 'Шатёр для мероприятий 10х25',
    images: imgs.Event2,
    specs: { size: '10х25 м', area: '250 м²', capacity: '280 человек', availability: 'под заказ' },
    price: { original: '4 150 000 ₽', discount: '-12%', current: 'от 3 652 000 ₽' },
    type: 'Свадьбы шатры'
  },
  {
    id: 'shatyor-dlya-meropriyatiy-10h30',
    title: 'Шатёр для мероприятий 10х30',
    images: imgs.Event3,
    specs: { size: '10х30 м', area: '300 м²', capacity: '100 человек', availability: 'под заказ' },
    price: { original: '1 850 000 ₽', discount: '-10%', current: 'от 1 665 000 ₽' },
    type: 'Свадьбы шатры'
  },
  {
    id: 'shatyor-dlya-meropriyatiy-10h35',
    title: 'Шатёр для мероприятий 10х35',
    images: imgs.Event3,
    specs: { size: '10х35 м', area: '525 м²', capacity: '380 человек', availability: 'под заказ' },
    price: { original: '5 900 000 ₽', discount: '-8%', current: 'от 5 428 000 ₽' },
    type: 'Свадьбы шатры'
  },
  {
    id: 'shatyor-dlya-meropriyatiy-10h40',
    title: 'Шатёр для мероприятий 10х40',
    images: imgs.Event4,
    specs: { size: '10х40 м', area: '400 м²', capacity: '380 человек', availability: 'под заказ' },
    price: { original: '5 900 000 ₽', discount: '-8%', current: 'от 5 428 000 ₽' },
    type: 'Свадьбы шатры'
  },
  {
    id: 'shatyor-dlya-meropriyatiy-10x10-m',
    title: 'Шатёр для мероприятий 10x10 м',
    images: imgs.Event5,
    specs: { size: '10х10 м', area: '100 м²', capacity: '380 человек', availability: 'под заказ' },
    price: { original: '5 900 000 ₽', discount: '-8%', current: 'от 5 428 000 ₽' },
    type: 'Свадьбы шатры'
  },
  {
    id: 'shatyor-dlya-meropriyatiy-10x15-m',
    title: 'Шатёр для мероприятий 10x15 м',
    images: imgs.Event5,
    specs: { size: '10х15 м', area: '150 м²', capacity: '380 человек', availability: 'под заказ' },
    price: { original: '5 900 000 ₽', discount: '-8%', current: 'от 5 428 000 ₽' },
    type: 'Свадьбы шатры'
  },
  {
    id: 'shatyor-dlya-meropriyatiy-15h15',
    title: 'Шатёр для мероприятий 15х15',
    images: imgs.Event6,
    specs: { size: '15х15 м', area: '225 м²', capacity: '380 человек', availability: 'под заказ' },
    price: { original: '5 900 000 ₽', discount: '-8%', current: 'от 5 428 000 ₽' },
    type: 'Свадьбы шатры'
  },
  {
    id: 'shatyor-dlya-meropriyatiy-15h20',
    title: 'Шатёр для мероприятий 15х20',
    images: imgs.Event7,
    specs: { size: '15х20 м', area: '300 м²', capacity: '380 человек', availability: 'под заказ' },
    price: { original: '5 900 000 ₽', discount: '-8%', current: 'от 5 428 000 ₽' },
    type: 'Свадьбы шатры'
  },  
  {
    id: 'shatyor-dlya-meropriyatiy-15h25',
    title: 'Шатёр для мероприятий 15х25',
    images: imgs.Event7,
    specs: { size: '15х25 м', area: '375 м²', capacity: '380 человек', availability: 'под заказ' },
    price: { original: '5 900 000 ₽', discount: '-8%', current: 'от 5 428 000 ₽' },
    type: 'Свадьбы шатры'
  },  
  {
    id: 'shatyor-dlya-meropriyatiy-15h30',
    title: 'Шатёр для мероприятий 15х30',
    images: imgs.Event8,
    specs: { size: '15х30 м', area: '450 м²', capacity: '380 человек', availability: 'под заказ' },
    price: { original: '5 900 000 ₽', discount: '-8%', current: 'от 5 428 000 ₽' },
    type: 'Свадьбы шатры'
  },  
  {
    id: 'shatyor-dlya-meropriyatiy-15h35',
    title: 'Шатёр для мероприятий 15х35',
    images: imgs.Event8,
    specs: { size: '15х35 м', area: '525 м²', capacity: '380 человек', availability: 'под заказ' },
    price: { original: '5 900 000 ₽', discount: '-8%', current: 'от 5 428 000 ₽' },
    type: 'Свадьбы шатры'
  },
  {
    id: 'shatyor-dlya-meropriyatiy-15h40',
    title: 'Шатёр для мероприятий 15х40',
    images: imgs.Event9,
    specs: { size: '15х40 м', area: '600 м²', capacity: '380 человек', availability: 'под заказ' },
    price: { original: '5 900 000 ₽', discount: '-8%', current: 'от 5 428 000 ₽' },
    type: 'Свадьбы шатры'
  },
  {
    id: 'shatyor-dlya-meropriyatiy-20h20',
    title: 'Шатёр для мероприятий 20х20',
    images: imgs.Event10,
    specs: { size: '20х20 м', area: '400 м²', capacity: '380 человек', availability: 'под заказ' },
    price: { original: '5 900 000 ₽', discount: '-8%', current: 'от 5 428 000 ₽' },
    type: 'Свадьбы шатры'
  },
  {
    id: 'shatyor-dlya-meropriyatiy-20h25',
    title: 'Шатёр для мероприятий 20х25',
    images: imgs.Event10,
    specs: { size: '20х25 м', area: '500 м²', capacity: '380 человек', availability: 'под заказ' },
    price: { original: '5 900 000 ₽', discount: '-8%', current: 'от 5 428 000 ₽' },
    type: 'Свадьбы шатры'
  },
  {
    id: 'shatyor-dlya-meropriyatiy-20h30',
    title: 'Шатёр для мероприятий 20х30',
    images: imgs.Event10,
    specs: { size: '20х30 м', area: '600 м²', capacity: '380 человек', availability: 'под заказ' },
    price: { original: '5 900 000 ₽', discount: '-8%', current: 'от 5 428 000 ₽' },
    type: 'Свадьбы шатры'
  },
  {
    id: 'shatyor-dlya-meropriyatiy-20h35',
    title: 'Шатёр для мероприятий 20х35',
    images: imgs.Event10,
    specs: { size: '20х35 м', area: '700 м²', capacity: '380 человек', availability: 'под заказ' },
    price: { original: '5 900 000 ₽', discount: '-8%', current: 'от 5 428 000 ₽' },
    type: 'Свадьбы шатры'
  },
  {
    id: 'shatyor-dlya-meropriyatiy-20h40',
    title: 'Шатёр для мероприятий 20х40',
    images: imgs.Event11,
    specs: { size: '20х40 м', area: '800 м²', capacity: '380 человек', availability: 'под заказ' },
    price: { original: '5 900 000 ₽', discount: '-8%', current: 'от 5 428 000 ₽' },
    type: 'Свадьбы шатры'
  },
  {
    id: 'shatyor-dlya-meropriyatiy-25h25',
    title: 'Шатёр для мероприятий 25х25',
    images: imgs.Event10,
    specs: { size: '25х25 м', area: '625 м²', capacity: '380 человек', availability: 'под заказ' },
    price: { original: '5 900 000 ₽', discount: '-8%', current: 'от 5 428 000 ₽' },
    type: 'Свадьбы шатры'
  },
  {
    id: 'shatyor-dlya-meropriyatiy-25h30',
    title: 'Шатёр для мероприятий 25х30',
    images: imgs.Event10,
    specs: { size: '25х30 м', area: '750 м²', capacity: '380 человек', availability: 'под заказ' },
    price: { original: '5 900 000 ₽', discount: '-8%', current: 'от 5 428 000 ₽' },
    type: 'Свадьбы шатры'
  },
  {
    id: 'shatyor-dlya-meropriyatiy-25h35',
    title: 'Шатёр для мероприятий 25х35',
    images: imgs.Event11,
    specs: { size: '25х35 м', area: '875 м²', capacity: '380 человек', availability: 'под заказ' },
    price: { original: '5 900 000 ₽', discount: '-8%', current: 'от 5 428 000 ₽' },
    type: 'Свадьбы шатры'
  },
  {
    id: 'shatyor-dlya-meropriyatiy-25h40',
    title: 'Шатёр для мероприятий 25х40',
    images: imgs.Event11,
    specs: { size: '25х40 м', area: '1000 м²', capacity: '380 человек', availability: 'под заказ' },
    price: { original: '5 900 000 ₽', discount: '-8%', current: 'от 5 428 000 ₽' },
    type: 'Свадьбы шатры'
  },






































      // ==================
      // Шатры для выставок — 4 items
      // ==================
  {
    id: 'shatyor-dlya-vystavok-10h10',
    title: 'Шатёр для выставок 10х10',
    images: imgs.Event1,
    specs: { size: '10х10 м', area: '100 м²', capacity: '140 человек', availability: 'под заказ' },
    price: { original: '2 400 000 ₽', discount: '-15%', current: 'от 2 040 000 ₽' },
    type: 'Шатры для выставок'
  },
  {
    id: 'shatyor-dlya-vystavok-10h15',
    title: 'Шатёр для выставок 10х15',
    images: imgs.Event2,
    specs: { size: '10х15 м', area: '150 м²', capacity: '280 человек', availability: 'под заказ' },
    price: { original: '4 150 000 ₽', discount: '-12%', current: 'от 3 652 000 ₽' },
    type: 'Шатры для выставок'
  },
  {
    id: 'shatyor-dlya-vystavok-10h20',
    title: 'Шатёр для выставок 10х20',
    images: imgs.Event3,
    specs: { size: '10х20 м', area: '200 м²', capacity: '100 человек', availability: 'под заказ' },
    price: { original: '1 850 000 ₽', discount: '-10%', current: 'от 1 665 000 ₽' },
    type: 'Шатры для выставок'
  },
  {
    id: 'shatyor-dlya-vystavok-10h25',
    title: 'Шатёр для выставок 10х25',
    images: imgs.Event3,
    specs: { size: '10х25 м', area: '250 м²', capacity: '380 человек', availability: 'под заказ' },
    price: { original: '5 900 000 ₽', discount: '-8%', current: 'от 5 428 000 ₽' },
    type: 'Шатры для выставок'
  },
  {
    id: 'shatyor-dlya-vystavok-10h30',
    title: 'Шатёр для выставок 10х30',
    images: imgs.Event4,
    specs: { size: '10х30 м', area: '300 м²', capacity: '380 человек', availability: 'под заказ' },
    price: { original: '5 900 000 ₽', discount: '-8%', current: 'от 5 428 000 ₽' },
    type: 'Шатры для выставок'
  },
  {
    id: 'shatyor-dlya-vystavok-10h35',
    title: 'Шатёр для выставок 10х35',
    images: imgs.Event5,
    specs: { size: '10х35 м', area: '350 м²', capacity: '380 человек', availability: 'под заказ' },
    price: { original: '5 900 000 ₽', discount: '-8%', current: 'от 5 428 000 ₽' },
    type: 'Шатры для выставок'
  },
  {
    id: 'shatyor-dlya-vystavok-10h40',
    title: 'Шатёр для выставок 10х40',
    images: imgs.Event5,
    specs: { size: '10х40 м', area: '400 м²', capacity: '380 человек', availability: 'под заказ' },
    price: { original: '5 900 000 ₽', discount: '-8%', current: 'от 5 428 000 ₽' },
    type: 'Шатры для выставок'
  },
  {
    id: 'shatyor-dlya-vystavok-15h15',
    title: 'Шатёр для выставок 15х15',
    images: imgs.Event6,
    specs: { size: '15х15 м', area: '225 м²', capacity: '380 человек', availability: 'под заказ' },
    price: { original: '5 900 000 ₽', discount: '-8%', current: 'от 5 428 000 ₽' },
    type: 'Шатры для выставок'
  },
  {
    id: 'shatyor-dlya-vystavok-15h20',
    title: 'Шатёр для выставок 15х20',
    images: imgs.Event7,
    specs: { size: '15х20 м', area: '300 м²', capacity: '380 человек', availability: 'под заказ' },
    price: { original: '5 900 000 ₽', discount: '-8%', current: 'от 5 428 000 ₽' },
    type: 'Шатры для выставок'
  },  
  {
    id: 'shatyor-dlya-vystavok-15h25',
    title: 'Шатёр для выставок 15х25',
    images: imgs.Event7,
    specs: { size: '15х25 м', area: '375 м²', capacity: '380 человек', availability: 'под заказ' },
    price: { original: '5 900 000 ₽', discount: '-8%', current: 'от 5 428 000 ₽' },
    type: 'Шатры для выставок'
  },  
  {
    id: 'shatyor-dlya-vystavok-15h30',
    title: 'Шатёр для выставок 15х30',
    images: imgs.Event8,
    specs: { size: '15х30 м', area: '450 м²', capacity: '380 человек', availability: 'под заказ' },
    price: { original: '5 900 000 ₽', discount: '-8%', current: 'от 5 428 000 ₽' },
    type: 'Шатры для выставок'
  },  
  {
    id: 'shatyor-dlya-vystavok-15h35',
    title: 'Шатёр для выставок 15х35',
    images: imgs.Event8,
    specs: { size: '15х35 м', area: '525 м²', capacity: '380 человек', availability: 'под заказ' },
    price: { original: '5 900 000 ₽', discount: '-8%', current: 'от 5 428 000 ₽' },
    type: 'Шатры для выставок'
  },
  {
    id: 'shatyor-dlya-vystavok-15h40',
    title: 'Шатёр для выставок 15х40',
    images: imgs.Event9,
    specs: { size: '15х40 м', area: '600 м²', capacity: '380 человек', availability: 'под заказ' },
    price: { original: '5 900 000 ₽', discount: '-8%', current: 'от 5 428 000 ₽' },
    type: 'Шатры для выставок'
  },
  {
    id: 'shatyor-dlya-vystavok-20h20',
    title: 'Шатёр для выставок 20х20',
    images: imgs.Event10,
    specs: { size: '20х20 м', area: '400 м²', capacity: '380 человек', availability: 'под заказ' },
    price: { original: '5 900 000 ₽', discount: '-8%', current: 'от 5 428 000 ₽' },
    type: 'Шатры для выставок'
  },
  {
    id: 'shatyor-dlya-vystavok-20h25',
    title: 'Шатёр для выставок 20х25',
    images: imgs.Event10,
    specs: { size: '20х25 м', area: '500 м²', capacity: '380 человек', availability: 'под заказ' },
    price: { original: '5 900 000 ₽', discount: '-8%', current: 'от 5 428 000 ₽' },
    type: 'Шатры для выставок'
  },
  {
    id: 'shatyor-dlya-vystavok-20h30',
    title: 'Шатёр для выставок 20х30',
    images: imgs.Event10,
    specs: { size: '20х30 м', area: '600 м²', capacity: '380 человек', availability: 'под заказ' },
    price: { original: '5 900 000 ₽', discount: '-8%', current: 'от 5 428 000 ₽' },
    type: 'Шатры для выставок'
  },
  {
    id: 'shatyor-dlya-vystavok-20h35',
    title: 'Шатёр для выставок 20х35',
    images: imgs.Event10,
    specs: { size: '20х35 м', area: '700 м²', capacity: '380 человек', availability: 'под заказ' },
    price: { original: '5 900 000 ₽', discount: '-8%', current: 'от 5 428 000 ₽' },
    type: 'Шатры для выставок'
  },
  {
    id: 'shatyor-dlya-vystavok-20h40',
    title: 'Шатёр для выставок 20х40',
    images: imgs.Event11,
    specs: { size: '20х40 м', area: '800 м²', capacity: '380 человек', availability: 'под заказ' },
    price: { original: '5 900 000 ₽', discount: '-8%', current: 'от 5 428 000 ₽' },
    type: 'Шатры для выставок'
  },
  {
    id: 'shatyor-dlya-vystavok-25h25',
    title: 'Шатёр для выставок 25х25',
    images: imgs.Event10,
    specs: { size: '25х25 м', area: '625 м²', capacity: '380 человек', availability: 'под заказ' },
    price: { original: '5 900 000 ₽', discount: '-8%', current: 'от 5 428 000 ₽' },
    type: 'Шатры для выставок'
  },
  {
    id: 'shatyor-dlya-vystavok-25h30',
    title: 'Шатёр для выставок 25х30',
    images: imgs.Event10,
    specs: { size: '25х30 м', area: '750 м²', capacity: '380 человек', availability: 'под заказ' },
    price: { original: '5 900 000 ₽', discount: '-8%', current: 'от 5 428 000 ₽' },
    type: 'Шатры для выставок'
  },
  {
    id: 'shatyor-dlya-vystavok-25h35',
    title: 'Шатёр для выставок 25х35',
    images: imgs.Event11,
    specs: { size: '25х35 м', area: '875 м²', capacity: '380 человек', availability: 'под заказ' },
    price: { original: '5 900 000 ₽', discount: '-8%', current: 'от 5 428 000 ₽' },
    type: 'Шатры для выставок'
  },
  {
    id: 'shatyor-dlya-vystavok-25h40',
    title: 'Шатёр для выставок 25х40',
    images: imgs.Event11,
    specs: { size: '25х40 м', area: '1000 м²', capacity: '380 человек', availability: 'под заказ' },
    price: { original: '5 900 000 ₽', discount: '-8%', current: 'от 5 428 000 ₽' },
    type: 'Шатры для выставок'
  },



































  // ==========================
  // Ангары Тип В — 5 items
  // ==========================
   {
    id: 'arochnyy-angar-10h30',
    title: 'Арочный ангар 10х30 (300 м²) тип В',
    images: imgs.membrA,
    specs: { size: '10х30 м', area: '300 м²', capacity: '—', availability: 'под заказ' },
    price: { original: '3 600 000 ₽', discount: '-10%', current: 'от 3 240 000 ₽' },
    type: 'Ангары Тип В'
  },
  {
    id: 'arochnyy-angar-15h20-m',
    title: 'Арочный ангар 15х20 (300 м²) тип В',
    images: imgs.membrB,
    specs: { size: '15х20 м', area: '300 м²', capacity: '—', availability: 'под заказ' },
    price: { original: '3 600 000 ₽', discount: '-10%', current: 'от 3 240 000 ₽' },
    type: 'Ангары Тип В'
  },
  {
    id: 'arochnyy-angar-15h40-m',
    title: 'Арочный ангар 15х40 (600 м²) тип В',
    images: imgs.membrС,
    specs: { size: '15х40 м', area: '600 м²', capacity: '—', availability: 'под заказ' },
    price: { original: '3 600 000 ₽', discount: '-10%', current: 'от 3 240 000 ₽' },
    type: 'Ангары Тип В'
  },
  {
    id: 'arochnyy-angar-20h30-m',
    title: 'Арочный ангар 20х30 (600 м²) тип В',
    images: imgs.membrD,
    specs: { size: '20х30 м', area: '600 м²', capacity: '—', availability: 'под заказ' },
    price: { original: '3 600 000 ₽', discount: '-10%', current: 'от 3 240 000 ₽' },
    type: 'Ангары Тип В'
  },
  {
    id: 'arochnyy-angar-20h50-m',
    title: 'Арочный ангар 20х50 (1000 м²) тип В',
    images: imgs.membrE,
    specs: { size: '20х50 м', area: '1000 м²', capacity: '—', availability: 'под заказ' },
    price: { original: '4 900 000 ₽', discount: '-9%', current: 'от 4 459 000 ₽' },
    type: 'Ангары Тип В'
  },
  {
    id: 'arochnyy-angar-25h30m',
    title: 'Арочный ангар 25х30 (750 м²) тип В',
    images: imgs.membrF,
    specs: { size: '25х30 м', area: '750 м²', capacity: '—', availability: 'под заказ' },
    price: { original: '4 900 000 ₽', discount: '-9%', current: 'от 4 459 000 ₽' },
    type: 'Ангары Тип В'
  },
  {
    id: 'arochnyy-angar-25h50-m',
    title: 'Арочный ангар 25х50 (1250 м²) тип В',
    images: imgs.membrG,
    specs: { size: '25х50 м', area: '1250 м²', capacity: '—', availability: 'под заказ' },
    price: { original: '6 100 000 ₽', discount: '-8%', current: 'от 5 612 000 ₽' },
    type: 'Ангары Тип В'
  },
  {
    id: 'arochnyy-angar-30h40-m',
    title: 'Арочный ангар 30х40 (1200 м²) тип В',
    images: imgs.membrG,
    specs: { size: '30х40 м', area: '1200 м²', capacity: '—', availability: 'под заказ' },
    price: { original: '6 100 000 ₽', discount: '-8%', current: 'от 5 612 000 ₽' },
    type: 'Ангары Тип В'
  },
  {
    id: 'arochnyy-angar-30h50m',
    title: 'Арочный ангар 30х50 (1500 м²) тип В',
    images: imgs.membrG,
    specs: { size: '30х50 м', area: '1500 м²', capacity: '—', availability: 'под заказ' },
    price: { original: '9 900 000 ₽', discount: '-8%', current: 'от 9 108 000 ₽' },
    type: 'Ангары Тип В'
  },
  {
    id: 'arochnyy-angar-40h100-m',
    title: 'Арочный ангар 40х100 (4000 м²) тип В',
    images: imgs.membrG,
    specs: { size: '40х100 м', area: '4000 м²', capacity: '—', availability: 'под заказ' },
    price: { original: '16 500 000 ₽', discount: '-7%', current: 'от 15 345 000 ₽' },
    type: 'Ангары Тип В'
  },

  // =======================
  // Ангары Тип Д (Ангары) — 4
  // =======================
  {
    id: 'karkasnyy-angar-15h20m',
    title: 'Каркасный ангар 15×20м Тип Д',
    images: imgs.membrH,
    specs: { size: '15х20 м', area: '300 м²', capacity: '—', availability: 'под заказ' },
    price: { original: '3 600 000 ₽', discount: '-10%', current: 'от 3 240 000 ₽' },
    type: 'Ангары Тип Д'
  },
  {
    id: 'karkasnyy-angar-20h50m',
    title: 'Каркасный ангар 20×50м Тип Д',
    images: imgs.membrI,
    specs: { size: '20х50 м', area: '1000 м²', capacity: '—', availability: 'под заказ' },
    price: { original: '5 900 000 ₽', discount: '-9%', current: 'от 5 369 000 ₽' },
    type: 'Ангары Тип Д'
  },
  {
    id: 'karkasnyy-angar-25h50m',
    title: 'Каркасный ангар 25×50м Тип Д',
    images: imgs.membrJ,
    specs: { size: '25х50 м', area: '1250 м²', capacity: '—', availability: 'под заказ' },
    price: { original: '8 300 000 ₽', discount: '-8%', current: 'от 7 636 000 ₽' },
    type: 'Ангары Тип Д'
  },
  {
    id: 'karkasnyy-angar-30h40-m',
    title: 'Каркасный ангар 30×40м Тип Д',
    images: imgs.membrJ,
    specs: { size: '30х40 м', area: '1200 м²', capacity: '—', availability: 'под заказ' },
    price: { original: '8 300 000 ₽', discount: '-8%', current: 'от 7 636 000 ₽' },
    type: 'Ангары Тип Д'
  },
  {
    id: 'karkasnyy-angar-40h100-m',
    title: 'Каркасный ангар 40×100м Тип Д',
    images: imgs.membrJ,
    specs: { size: '40х100 м', area: '4000 м²', capacity: '—', availability: 'под заказ' },
    price: { original: '12 900 000 ₽', discount: '-7%', current: 'от 11 997 000 ₽' },
    type: 'Ангары Тип Д'
  },
  {
    id: 'karkasno-tentovyy-angar-10h30m',
    title: 'Каркасный тентовый ангар 10×30м Тип Д',
    images: imgs.membrK,
    specs: { size: '10х30 м', area: '300 м²', capacity: '—', availability: 'под заказ' },
    price: { original: '12 900 000 ₽', discount: '-7%', current: 'от 11 997 000 ₽' },
    type: 'Ангары Тип Д'
  },
  {
    id: 'karkasno-tentovyy-angar-15h40-m',
    title: 'Каркасный тентовый ангар 15×40м Тип Д',
    images: imgs.membrL,
    specs: { size: '15х40 м', area: '600 м²', capacity: '—', availability: 'под заказ' },
    price: { original: '12 900 000 ₽', discount: '-7%', current: 'от 11 997 000 ₽' },
    type: 'Ангары Тип Д'
  },
  {
    id: 'karkasno-tentovyy-angar-20h30m',
    title: 'Каркасный тентовый ангар 20×30м Тип Д',
    images: imgs.membrM,
    specs: { size: '20х30 м', area: '600 м²', capacity: '—', availability: 'под заказ' },
    price: { original: '12 900 000 ₽', discount: '-7%', current: 'от 11 997 000 ₽' },
    type: 'Ангары Тип Д'
  },
  {
    id: 'karkasno-tentovyy-angar-25h30m',
    title: 'Каркасный тентовый ангар 25×30м Тип Д',
    images: imgs.membrN,
    specs: { size: '25х30 м', area: '750 м²', capacity: '—', availability: 'под заказ' },
    price: { original: '12 900 000 ₽', discount: '-7%', current: 'от 11 997 000 ₽' },
    type: 'Ангары Тип Д'
  },
  {
    id: 'karkasno-tentovyy-angar-30h50-m',
    title: 'Каркасный тентовый ангар 30×50м Тип Д',
    images: imgs.membrJ,
    specs: { size: '30х50 м', area: '1500 м²', capacity: '—', availability: 'под заказ' },
    price: { original: '12 900 000 ₽', discount: '-7%', current: 'от 11 997 000 ₽' },
    type: 'Ангары Тип Д'
  },
];

// Helper function to format price
function formatPrice(price: number): string {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}



// Helper to extract specs from title (or store in Bitrix)
function extractSpecsFromTitle(title: string): ProductSpecs {
  // Extract size from title (e.g., "Арочный шатер 10х5 - 50 м²")
  const sizeMatch = title.match(/(\d+)[хx](\d+)/);
  const size = sizeMatch ? `${sizeMatch[1]}х${sizeMatch[2]} м` : '10х5 м';
  
  // Extract area from title
  const areaMatch = title.match(/(\d+)\s*м²/);
  const area = areaMatch ? `${areaMatch[1]} м²` : '50 м²';
  
  // Calculate capacity based on area
  const areaNum = parseInt(areaMatch?.[1] || '50');
  const capacity = Math.floor(areaNum / 1.5) + ' человек';
  
  return {
    size,
    area,
    capacity,
    availability: 'под заказ'
  };
}

// Keep your existing fetchProductsFromBitrix function EXACTLY as is
export async function fetchProductsFromBitrix(): Promise<Product[]> {
  try {
    const response = await fetch('products.php', {
      next: { revalidate: 3600 }
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (!data.success) {
      throw new Error('API returned unsuccessful response');
    }
    
    return data.products.map((apiProduct: any) => {
      const specs = extractSpecsFromTitle(apiProduct.title);
      
      return {
        id: apiProduct.code,
        title: apiProduct.title,
        specs: specs,
        price: {
          original: formatPrice(apiProduct.price.original),
          discount: `${apiProduct.price.discount}%`,
          current: `от ${formatPrice(apiProduct.price.current)} ₽`
        },
        type: apiProduct.type as TypeByCategory
      };
    });
    
  } catch (error) {
    console.error('Failed to fetch products from Bitrix:', error);
    return allProducts;
  }
}

// NEW FUNCTION: Fetch from new_products.php
async function fetchFromNewProducts(): Promise<Product[]> {
  try {
    const response = await fetch('/api/products/new', {
      cache: 'no-store',
      headers: {
        'Accept': 'application/json',
      },
    });
    
    if (!response.ok) {
      console.error(`New products API error: ${response.status}`);
      return [];
    }
    
    const data = await response.json();
    
    if (!data.success) {
      console.error('New products API returned unsuccessful response');
      return [];
    }
    
    if (!data.products || !Array.isArray(data.products)) {
      console.error('No products array in response');
      return [];
    }
    
    console.log(`Fetched ${data.products.length} products from new_products.php`);
    
    return data.products.map((apiProduct: any) => {
      const currentPrice = apiProduct.price?.current || 0;
      const originalPrice = apiProduct.price?.original || currentPrice;
      const discount = apiProduct.price?.discount || 0;
      
      // Use slug for the ID (for the product link)
      const productId = apiProduct.slug || apiProduct.id || apiProduct.code;
      
      // Use specs from API if available
      const specs = {
        size: apiProduct.specs?.size || '—',
        area: apiProduct.specs?.area || '—',
        capacity: apiProduct.specs?.capacity || '—',
        availability: apiProduct.specs?.availability || 'под заказ'
      };
      
      return {
        id: productId,
        title: apiProduct.title,
        images: apiProduct.images && apiProduct.images.length > 0 ? apiProduct.images : ['/mt_logo_purple.png'],
        specs: specs,
        price: {
          original: formatPrice(originalPrice),
          discount: discount > 0 ? `-${discount}%` : '0%',
          current: `от ${formatPrice(currentPrice)} ₽`
        },
        type: apiProduct.type as Product['type']
      };
    });
  } catch (error) {
    console.error('Failed to fetch from new_products.php:', error);
    return [];
  }
}

// NEW MAIN FUNCTION: Combine both sources
export async function getAllProducts(): Promise<Product[]> {
  try {
    // Fetch from both endpoints in parallel
    const [existingProducts, newProducts] = await Promise.all([
      fetchProductsFromBitrix(),
      fetchFromNewProducts()
    ]);
    
    // Combine using Map to avoid duplicates (by id)
    const productMap = new Map<string, Product>();
    
    existingProducts.forEach(product => {
      productMap.set(product.id, product);
    });
    
    newProducts.forEach(product => {
      productMap.set(product.id, product);
    });
    
    const allProducts = Array.from(productMap.values());
    
    console.log(`Total products: ${allProducts.length} (${existingProducts.length} from existing, ${newProducts.length} from new)`);
    
    return allProducts;
  } catch (error) {
    console.error('Failed to get all products:', error);
    return allProducts; // fallback to static data
  }
}

// Keep existing getProducts for backward compatibility
export async function getProducts(): Promise<Product[]> {
  return await fetchProductsFromBitrix();
}

// Export categories and types (these can remain static)
export const allCategories: Category[] = ['Шатры', 'Ангары'];

export const typesByCategory: Record<Category, TypeByCategory[]> = {
  Шатры: [
    'Арочные (Шатры)', 'Пагода', 'Мобильные', 'Шестигранные',
    'Купольные', 'Глэмпинг', 'Надувные', 'Сферические', 'Большие шатры', 'Классический', 'Круглый', 'Звезда', 'Зонт', 'Свадьбы шатры', 'Шатры для выставок'
  ],
  Ангары: ['Ангары Тип В', 'Ангары Тип Д'],
};
