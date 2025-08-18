import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export function NewsCollage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const newsItems = [
    {
      title: "Новая коллекция весна-лето",
      description: "Яркие амигуруми в пастельных тонах уже в продаже. Встречайте новых друзей!",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&h=400&fit=crop",
      badge: "Новинка",
      date: "15 марта"
    },
    {
      title: "Мастер-класс по вязанию",
      description: "Изучаем технику амигуруми с нуля. Записывайтесь на бесплатный урок!",
      image: "https://images.unsplash.com/photo-1586769852044-692d6e3703f0?w=600&h=400&fit=crop",
      badge: "Скоро",
      date: "20 марта"
    },
    {
      title: "Скидка 20% на котиков",
      description: "Только до конца месяца все вязаные котики со скидкой 20%!",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      badge: "Акция",
      date: "До 31 марта"
    },
    {
      title: "Индивидуальные заказы",
      description: "Создаем уникальные игрушки по вашим эскизам и пожеланиям",
      image: "https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=600&h=400&fit=crop",
      badge: "Услуга",
      date: "Всегда доступно"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % newsItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  return (
    <div className="space-y-6">
      {/* Главная карточка с каруселью */}
      <Card className="relative overflow-hidden rounded-3xl soft-shadow-lg bg-white/90 backdrop-blur-sm">
        <div className="relative h-80">
          {/* Фоновое изображение */}
          <img 
            src={newsItems[currentSlide].image}
            alt={newsItems[currentSlide].title}
            className="w-full h-full object-cover"
          />
          
          {/* Градиентный оверлей */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          
          {/* Контент */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            {newsItems[currentSlide].badge && (
              <Badge className="mb-3 bg-rose-100 text-rose-800 hover:bg-rose-200">
                {newsItems[currentSlide].badge}
              </Badge>
            )}
            <h3 className="text-xl font-semibold mb-2 text-white">
              {newsItems[currentSlide].title}
            </h3>
            <p className="text-white/90 mb-3 text-sm">
              {newsItems[currentSlide].description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-white/80 text-sm">{newsItems[currentSlide].date}</span>
              <Button size="sm" className="rounded-2xl">
                Подробнее
              </Button>
            </div>
          </div>
          
          {/* Стрелки навигации */}
          <Button
            variant="ghost"
            size="sm"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 rounded-full w-10 h-10 p-0"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 rounded-full w-10 h-10 p-0"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
          
          {/* Индикаторы */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {newsItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide ? 'bg-white' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </Card>

      {/* Три маленькие карточки снизу */}
      <div className="grid grid-cols-3 gap-4">
        {newsItems.slice(1, 4).map((item, index) => (
          <Card 
            key={index + 1} 
            className="group cursor-pointer transition-all hover:scale-105 hover:shadow-lg rounded-2xl overflow-hidden border-0 bg-white/80 backdrop-blur-sm"
            onClick={() => setCurrentSlide(index + 1)}
          >
            <div className="aspect-[4/3] relative overflow-hidden">
              {item.badge && (
                <Badge className="absolute top-2 right-2 z-10 bg-rose-100 text-rose-800 hover:bg-rose-200 text-xs px-2 py-1">
                  {item.badge}
                </Badge>
              )}
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-3">
              <h5 className="font-medium text-sm mb-1 leading-tight">{item.title}</h5>
              <p className="text-xs text-muted-foreground line-clamp-2">{item.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}