import { Reviews1 } from "./sections/Reviews1/Reviews1";
import { Reviews2 } from "./sections/Reviews2/Reviews2";
import { Footer } from "../../components/ui/Footer";
import type { Metadata } from "next";
import AnimatedSection from "../../components/ui/AnimatedSection";
import { fetchPageData } from "@/lib/bitrix-content";

// Generate metadata dynamically
export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchPageData('reviews');

  const seoTitle = data.seo?.title || "Отзывы о шатрах и тентовых конструкциях MOBILE TENT";
  const seoDescription = data.seo?.description || "Отзывы наших клиентов о шатрах и тентовых конструкциях собственного производства компании MOBILE TENT.";

  return {
    title: seoTitle,
    description: seoDescription,
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: data.seo?.url || 'https://mobile-tent.ru/reviews',
      siteName: 'MOBILE TENT',
      locale: 'ru_RU',
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: data.seo?.url || 'https://mobile-tent.ru/reviews',
    },
  };
}

export default async function ReviewsPage() {
  const pageData = await fetchPageData('reviews');

  // Your original static data
  const staticReviews = [
    {
      text: "Заказывали арочный шатёр 10×20 м для ярмарки. Монтаж занял один день, конструкция уверенно выдержала порывистый ветер ~18–20 м/с и дождь. Ткань не пахнет на солнце, швы аккуратные, комплектность полная. Подсветка внутри смотрится эффектно — посетители отмечали уют.",
      author: "Максимова Н.В., генеральный директор ООО «СитиМаркет»",
      images: ["/2017-05-19 13-18-44.webp", "/2017-05-19 13-19-02.webp"],
    },
    {
      text: "Используем шатры как сезонные павильоны под кофе-поинты и мерч. Важно было, чтобы быстро ставились и так же быстро снимались. Каркас жёсткий, крепёж продуманный, инструкции ясные — бригада уложилась в сроки. После месяца эксплуатации — никаких провисаний и потертостей.",
      author: "Илья Романов, операционный директор «Event&Go»",
      images: ["/IMG-20170711-WA0006.webp", "/IMG-20170711-WA0007.webp"],
    },
    {
      text: "Нужен был качественный шатёр для спортивного турнира: брендирование, окна, перегородки. Менеджеры помогли с макетами, а производство попало в наш жёсткий дедлайн. На площадке всё подошло без подрезок. Клиент остался доволен, планируем докупить ещё два модуля к осени.",
      author: "Оксана Литвинова, руководитель проектов АНО «СпортГород»",
      images: ["/КШ 20х20.webp", "/КШ 10х10.webp"],
    },
  ];

  const staticLettersReviews = [
    {
      text: "ООО «Агротех-Гарант», в лице директора Евсеева Александра Васильевича, благодарит компанию MOBILE TENT за производство качественных шатров, благодаря которым, мероприятия, проводимые нашей компанией, выглядели более презентабельно и качественно. Надеемся на дальнейшее плодотворное и взаимовыгодное сотрудничество.",
      author: "Директор ООО «Агротех-Гарант»",
      images: ["/litter1.webp"],
    },
    {
      text: "ФГБУ «Пансионат „Солнечный\" МЧС России» выражает благодарность за добросовестное и качественное выполнение работ в установленные сроки, внимательный подход к задачам и высокий профессионализм. Надеемся на дальнейшее плодотворное сотрудничество и желаем успехов и процветания.",
      author: "ФГБУ «Пансионат „Солнечный\" МЧС России»",
      images: ["/bp-2-gigapixel-standard v2-2x.webp"],
    },
    {
      text: "Отдельная благодарность за консультации по выбору фундамента и ветровой нагрузке. Проект сдан в срок, замечаний по качеству нет.",
      author: "ПАО «Гамма Девелопмент»",
      images: ["/04.webp"],
    },
  ];

  const staticOtzovikiReviews = [
    {
      text: "Планировали фестиваль, на котором также задумывались шатры для отдыха гостей. Было трудно найти именно надувные и с символикой нашего мероприятия. Сроки выполнения поджимали. Спасибо огромное MOBILE TENT за сверхсрочное выполнение заказа, праздник удался!",
      author: "Марина",
      images: ["/АШ20х20.webp"],
    },
    {
      text: "Покупали тент-зонт на площадку возле бассейна. Стоит действительно устойчиво и обладает хорошей водоотталкивающим свойством. От солнца и дождя самое оно. Всем довольны, спасибо.",
      author: "Виталий архитектор",
      images: ["/АШ 5х5.webp"],
    },
    {
      text: "Порадовала работа персонала компании. Сервис и продукция на высоте. Будем в дальнейшем обращаться.",
      author: "Алена менеджер",
      images: ["/5х5.webp"],
    },
  ];

  // Merge: use Bitrix data if available, otherwise use static data
  const finalData = {
    seo: {
      h1: pageData.seo?.h1 || "Отзывы клиентов"
    },
    reviews: {
      text: pageData.reviews?.text && pageData.reviews.text.length > 0 
        ? pageData.reviews.text 
        : staticReviews,
      letters: pageData.reviews?.letters && pageData.reviews.letters.length > 0 
        ? pageData.reviews.letters 
        : staticLettersReviews,
      otzoviki: pageData.reviews?.otzoviki && pageData.reviews.otzoviki.length > 0 
        ? pageData.reviews.otzoviki 
        : staticOtzovikiReviews
    }
  };

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <AnimatedSection delay={0.1}>   
        <Reviews1 
          seoH1={finalData.seo.h1} 
          reviewsData={finalData.reviews}
        />
      </AnimatedSection>

      <AnimatedSection delay={0.1}>   
        <Reviews2 />
      </AnimatedSection>

      <Footer />
    </div>
  );
}