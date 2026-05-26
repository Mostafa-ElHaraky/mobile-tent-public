'use client';

import React from 'react';
import { Footer } from '../../components/ui/Footer';
import { Header } from '../../components/ui/Header';

export default function CookiePolicy() {
  return (
    <>
      {/* ===== DESKTOP VERSION (>= lg) ===== */}
      <div className="hidden desktop:block">
        <div className="min-h-screen flex flex-col bg-white">
          {/* Header positioned 1080px from top but scrolls normally */}
          <div className="relative top-[1080px] w-full max-w-[1440px] mx-auto z-40">
            <Header />
          </div>
          {/* Main Content Area - Starts below header */}
          <div className="flex-1 w-full bg-[#e8eef8] relative top-[150px] pb-32">
            {/* Background Gradient */}
            <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-[#e8eef8] via-[#e8eef8]/70 to-transparent" />
            
            {/* Cookie Policy Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-8 py-12 bg-white shadow-lg rounded-lg my-8">
              <div className="prose prose-lg max-w-none">
                {/* Your full cookie policy content here */}
                
                <p className="mb-4">
                  Компания Mobile Tent изготавливает шатры и тенты на любой вкус и для любых целей. 
                  Со всем ассортиментом вы можете ознакомиться прямо на сайте — вся продукция разделена 
                  по назначению и по типам исполнения. Но даже если вы не нашли в каталоге подходящий 
                  шатер — не отчаивайтесь! Мы можем претворить в жизнь любую вашу задумку, создав тент 
                  по индивидуальному эскизу.
                </p>

                <p className="mb-6">
                  Для того чтобы разобраться во всем многообразии шатров, тентов и навесов, мы подробнее 
                  расскажем о преимуществах каждого вида.
                </p>

                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-3">Мобильные шатры</h2>
                  <p className="mb-4">
                    Идеально подойдут как для бизнес-встреч, так и для спортивных или семейных мероприятий. 
                    Наиболее удобны в установке и транспортировке.
                  </p>

                  <h2 className="text-xl font-semibold mb-3">Арочные шатры</h2>
                  <p className="mb-4">
                    Обычно устанавливаются для проведения торжеств и праздников, так как отличаются 
                    элегантным внешним видом и станут отличным украшением вашего мероприятия.
                  </p>

                  <h2 className="text-xl font-semibold mb-3">Двускатные шатры</h2>
                  <p className="mb-4">
                    Это большие шатры-павильоны, отличающиеся увеличенной вместительностью. Обычно они 
                    используются для крупных мероприятий на природе.
                  </p>

                  <h2 className="text-xl font-semibold mb-3">Шестигранные и пагода</h2>
                  <p className="mb-4">
                    Станут отличным решением для организации беседки в вашем саду, на дачном участке 
                    или возле загородного дома.
                  </p>
                </div>

                <p className="mb-6">
                  Также мы можем изготовить и установить сферические шатры, ангары и конструкции в виде 
                  звезды, натяжные или мембранные сооружения — они подойдут для любых задач и могут быть 
                  выполнены в индивидуальном дизайне. Знакомьтесь со всеми вариантами в нашем каталоге 
                  и выбирайте тот, который подойдет именно вам!
                </p>

                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-4">Критерии выбора тента</h2>
                  <p className="mb-4">
                    Выбирая тент, также обязательно следует обратить внимание и на другие параметры:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>
                      <strong>форма</strong> (самый распространенный вид — четырехугольный шатер, 
                      но также изготавливаются шести- и даже восьмиугольные модели);
                    </li>
                    <li>
                      <strong>вид стен</strong> (прямые визуально расширяют пространство, а покатые 
                      считаются более устойчивыми к порывам ветра);
                    </li>
                    <li>
                      <strong>материал</strong> (обратите внимание, есть ли в составе водоотталкивающая 
                      пропитка — с ней тент прослужит гораздо дольше).
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-xl font-semibold mb-3">Как заказать шатер?</h2>
                  <p>
                    Чтобы больше узнать о шатрах от Mobile Tent и сделать правильный выбор, консультируйтесь 
                    с нашими специалистами, позвонив по телефону, указанному на сайте. Мы обязательно поможем 
                    подобрать подходящий вариант и подробно расскажем об условиях заказа, доставки и монтажа.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Footer - Will be pushed down by content */}
          <div className="relative z-10 bg-white mt-auto">
            <Footer />
          </div>
        </div>
      </div>

      {/* ===== MOBILE VERSION (< lg) ===== */}
      <div className="block desktop:hidden">
        <div className="min-h-screen flex flex-col bg-white">
          {/* Mobile Header - Fixed at top */}
          <div className="fixed top-0 left-0 right-0 z-40 bg-white shadow-lg border-b border-gray-200">
            <Header />
          </div>
          <div className="h-20"></div>
          <div className="flex-1 w-full bg-[#e8eef8]">
            <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-[#e8eef8] via-[#e8eef8]/70 to-transparent" />
            
            {/* Cookie Policy Content - Mobile */}
            <div className="relative z-10 px-4 py-8 bg-white shadow-lg mx-4 my-4 rounded-lg">
              <div className="prose prose-sm max-w-none">
                {/* SEO-optimized H1 tag - ONLY ONE H1 TAG */}
                <h1 className="text-xl font-bold mb-4 lg:text-2xl lg:mb-6">Виды шатров</h1>
                
                <p className="mb-3">
                  Компания Mobile Tent изготавливает шатры и тенты на любой вкус и для любых целей. 
                  Со всем ассортиментом вы можете ознакомиться прямо на сайте — вся продукция разделена 
                  по назначению и по типам исполнения. Но даже если вы не нашли в каталоге подходящий 
                  шатер — не отчаивайтесь! Мы можем претворить в жизнь любую вашу задумку, создав тент 
                  по индивидуальному эскизу.
                </p>

                <p className="mb-4">
                  Для того чтобы разобраться во всем многообразии шатров, тентов и навесов, мы подробнее 
                  расскажем о преимуществах каждого вида.
                </p>

                <div className="mb-4">
                  <h2 className="text-lg font-semibold mb-2">Мобильные шатры</h2>
                  <p className="mb-3">
                    Идеально подойдут как для бизнес-встреч, так и для спортивных или семейных мероприятий. 
                    Наиболее удобны в установке и транспортировке.
                  </p>

                  <h2 className="text-lg font-semibold mb-2">Арочные шатры</h2>
                  <p className="mb-3">
                    Обычно устанавливаются для проведения торжеств и праздников, так как отличаются 
                    элегантным внешним видом и станут отличным украшением вашего мероприятия.
                  </p>

                  <h2 className="text-lg font-semibold mb-2">Двускатные шатры</h2>
                  <p className="mb-3">
                    Это большие шатры-павильоны, отличающиеся увеличенной вместительностью. Обычно они 
                    используются для крупных мероприятий на природе.
                  </p>

                  <h2 className="text-lg font-semibold mb-2">Шестигранные и пагода</h2>
                  <p className="mb-3">
                    Станут отличным решением для организации беседки в вашем саду, на дачном участке 
                    или возле загородного дома.
                  </p>
                </div>

                <p className="mb-4">
                  Также мы можем изготовить и установить сферические шатры, ангары и конструкции в виде 
                  звезды, натяжные или мембранные сооружения — они подойдут для любых задач и могут быть 
                  выполнены в индивидуальном дизайне. Знакомьтесь со всеми вариантами в нашем каталоге 
                  и выбирайте тот, который подойдет именно вам!
                </p>

                <div className="mb-4">
                  <h2 className="text-lg font-semibold mb-3">Критерии выбора тента</h2>
                  <p className="mb-3">
                    Выбирая тент, также обязательно следует обратить внимание и на другие параметры:
                  </p>
                  <ul className="list-disc pl-5 mb-3 space-y-1">
                    <li>
                      <strong>форма</strong> (самый распространенный вид — четырехугольный шатер, 
                      но также изготавливаются шести- и даже восьмиугольные модели);
                    </li>
                    <li>
                      <strong>вид стен</strong> (прямые визуально расширяют пространство, а покатые 
                      считаются более устойчивыми к порывам ветра);
                    </li>
                    <li>
                      <strong>материал</strong> (обратите внимание, есть ли в составе водоотталкивающая 
                      пропитка — с ней тент прослужит гораздо дольше).
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h2 className="text-lg font-semibold mb-2">Как заказать шатер?</h2>
                  <p>
                    Чтобы больше узнать о шатрах от Mobile Tent и сделать правильный выбор, консультируйтесь 
                    с нашими специалистами, позвонив по телефону, указанному на сайте. Мы обязательно поможем 
                    подобрать подходящий вариант и подробно расскажем об условиях заказа, доставки и монтажа.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Footer */}
          <div className="bg-white mt-auto">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}