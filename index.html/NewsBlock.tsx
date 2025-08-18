import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

export function NewsBlock() {
  const newsItems = [
    {
      id: 1,
      title: "Новая коллекция весна-лето",
      subtitle: "Яркие амигуруми в пастельных тонах",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop",
      size: "large" // 4 колонки × 320px
    },
    {
      id: 2,
      title: "Мастер-класс по вязанию",
      subtitle: "Изучаем технику амигуруми",
      image: "https://images.unsplash.com/photo-1586769852044-692d6e3703f0?w=300&h=240&fit=crop",
      size: "medium" // 3 колонки × 240px
    },
    {
      id: 3,
      title: "Скидка 20% на котиков",
      subtitle: "Только до конца месяца",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=240&fit=crop",
      size: "medium" // 3 колонки × 240px
    },
    {
      id: 4,
      title: "Летние новинки",
      subtitle: "Морская тематика",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=250&h=180&fit=crop",
      size: "small" // 5 колонок × 180px
    },
    {
      id: 5,
      title: "Индивидуальные заказы",
      subtitle: "Создаем по вашим эскизам",
      image: "https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=250&h=180&fit=crop",
      size: "small" // 5 колонок × 180px
    }
  ];

  return (
    <section className="bg-news min-h-[500px] py-12">
      <div className="container-figma">
        
        {/* Сетка новостей */}
        <div className="grid grid-cols-12 gap-6">
          
          {/* Большая карточка */}
          <Card className="col-span-4 h-[320px] bg-news border-2 border-button-bg rounded-2xl overflow-hidden relative group hover:scale-[1.02] transition-transform soft-shadow">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${newsItems[0].image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="relative z-10 p-6 h-full flex flex-col justify-end">
              <h3 className="text-white mb-2">{newsItems[0].title}</h3>
              <p className="text-white/90">{newsItems[0].subtitle}</p>
            </div>
          </Card>
          
          {/* Средние карточки */}
          <Card className="col-span-3 h-[240px] bg-news border-2 border-button-bg rounded-2xl overflow-hidden relative group hover:scale-[1.02] transition-transform soft-shadow">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${newsItems[1].image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="relative z-10 p-4 h-full flex flex-col justify-end">
              <h3 className="text-white text-xl mb-1">{newsItems[1].title}</h3>
              <p className="text-white/90 text-sm">{newsItems[1].subtitle}</p>
            </div>
          </Card>
          
          <Card className="col-span-3 h-[240px] bg-news border-2 border-button-bg rounded-2xl overflow-hidden relative group hover:scale-[1.02] transition-transform soft-shadow">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${newsItems[2].image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="relative z-10 p-4 h-full flex flex-col justify-end">
              <h3 className="text-white text-xl mb-1">{newsItems[2].title}</h3>
              <p className="text-white/90 text-sm">{newsItems[2].subtitle}</p>
            </div>
          </Card>
          
          {/* Центральная карточка с аватаром */}
          <div className="col-span-2 h-[240px] flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-button-bg flex items-center justify-center relative">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                <span className="text-2xl">👋</span>
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                <p className="text-sm font-medium text-foreground">Привет, я Алена!</p>
              </div>
            </div>
          </div>
          
          {/* Маленькие карточки */}
          <Card className="col-span-5 h-[180px] bg-news border-2 border-button-bg rounded-2xl overflow-hidden relative group hover:scale-[1.02] transition-transform soft-shadow">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${newsItems[3].image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="relative z-10 p-4 h-full flex flex-col justify-end">
              <h3 className="text-white text-lg mb-1">{newsItems[3].title}</h3>
              <p className="text-white/90 text-sm">{newsItems[3].subtitle}</p>
            </div>
          </Card>
          
          <Card className="col-span-5 h-[180px] bg-news border-2 border-button-bg rounded-2xl overflow-hidden relative group hover:scale-[1.02] transition-transform soft-shadow">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${newsItems[4].image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="relative z-10 p-4 h-full flex flex-col justify-end">
              <h3 className="text-white text-lg mb-1">{newsItems[4].title}</h3>
              <p className="text-white/90 text-sm">{newsItems[4].subtitle}</p>
            </div>
          </Card>
          
        </div>
      </div>
    </section>
  );
}