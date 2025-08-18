import { Card } from "./ui/card";
import { Button } from "./ui/button";

export function FavoriteCharacters() {
  const characters = [
    {
      name: "Зайка",
      description: "Милый зайчик в пастельных тонах",
      price: "1,500 ₽",
      experience: "Создан с особой любовью",
      level: "13 см в высоту",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=300&fit=crop",
      details: "Мягкий и уютный зайчик станет отличным другом для сна и игр. Связан из гипоаллергенной пряжи."
    },
    {
      name: "Мишка",
      description: "Классический плюшевый медвежонок",
      price: "1,800 ₽", 
      experience: "Любимец всех детей",
      level: "15 см в высоту",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
      details: "Этот медвежонок обожает объятия и всегда готов выслушать детские секреты."
    },
    {
      name: "Единорог",
      description: "Волшебный единорог с радужной гривой",
      price: "2,200 ₽",
      experience: "Приносит волшебство в дом",
      level: "18 см в высоту",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=300&fit=crop",
      details: "Сказочный единорог с переливающейся гривой исполнит все мечты о волшебстве."
    },
    {
      name: "Котик",
      description: "Пушистый котёнок с бантиком",
      price: "1,600 ₽",
      experience: "Самый популярный персонаж",
      level: "14 см в высоту",
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300&h=300&fit=crop",
      details: "Очаровательный котик с яркими глазками и мягкими лапками для объятий."
    }
  ];

  return (
    <section className="relative py-16 bg-background">
      {/* Градиентный переход от предыдущей секции */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/20 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Заголовок секции */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4 uppercase tracking-wider">
            Мои любимые персонажи
          </h2>
          <p className="text-foreground/70 text-sm">
            Наш топ самых популярных игрушек
          </p>
          
          <div className="mt-6">
            <Button 
              variant="outline" 
              className="border-border/40 text-foreground/80 hover:bg-white/10"
            >
              see more
            </Button>
          </div>
        </div>
        
        {/* Сетка персонажей */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {characters.map((character, index) => (
            <Card key={index} className="bg-card border-border/20 overflow-hidden group hover:scale-105 transition-transform duration-300">
              {/* Изображение */}
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={character.image}
                  alt={character.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Наложение с информацией */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs mb-2">{character.details}</p>
                  </div>
                </div>
              </div>
              
              {/* Информация о персонаже */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-foreground">{character.name}</h3>
                  <div className="text-primary font-bold">{character.price}</div>
                </div>
                
                <p className="text-foreground/70 text-sm mb-3">{character.description}</p>
                
                <div className="space-y-1 text-xs text-foreground/60 mb-4">
                  <div className="flex justify-between">
                    <span>Размер:</span>
                    <span>{character.level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Особенность:</span>
                    <span>{character.experience}</span>
                  </div>
                </div>
                
                <Button 
                  size="sm" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Добавить в корзину
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}