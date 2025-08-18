import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function ToysCatalog() {
  const toys = [
    {
      id: 1,
      name: "Аксолотль Рози",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=300&fit=crop",
      size: "15 см",
      materials: "Хлопок, холлофайбер",
      description: "Милый розовый аксолотль для сна и игр",
      price: "1 890 ₽",
      badge: "Новинка"
    },
    {
      id: 2,
      name: "Котик Мурзик",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
      size: "18 см",
      materials: "Плюшевая пряжа",
      description: "Пушистый котик с вышитыми глазками",
      price: "2 290 ₽",
      badge: "Хит"
    },
    {
      id: 3,
      name: "Зайчик Беля",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=300&fit=crop",
      size: "20 см",
      materials: "Велюр, бисер",
      description: "Нежный зайчик в пастельных тонах",
      price: "2 090 ₽",
      badge: ""
    },
    {
      id: 4,
      name: "Единорог Луна",
      image: "https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=300&h=300&fit=crop",
      size: "22 см",
      materials: "Мохер, пайетки",
      description: "Волшебный единорог с радужной гривой",
      price: "2 790 ₽",
      badge: "Эксклюзив"
    }
  ];

  return (
    <section 
      className="py-20 relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1586769852044-692d6e3703f0?w=1440&h=600&fit=crop')"
      }}
    >
      {/* Полупрозрачный оверлей */}
      <div className="absolute inset-0 bg-white/70" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Заголовок секции */}
        <div className="text-center mb-12">
          <span className="inline-block text-5xl mb-6">🧸</span>
          <h2 className="mb-4">Каталог вязаных игрушек</h2>
          <p className="text-xl text-muted-foreground mb-2">
            Сделано с любовью и душой 🤍
          </p>
        </div>

        {/* Сетка игрушек */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {toys.map((toy) => (
            <Card 
              key={toy.id} 
              className="group cursor-pointer transition-all hover:scale-105 hover:shadow-xl soft-shadow rounded-3xl overflow-hidden border-0 bg-white/80 backdrop-blur-sm"
            >
              <div className="aspect-square relative overflow-hidden">
                {toy.badge && (
                  <Badge className="absolute top-3 right-3 z-10 bg-rose-100 text-rose-800 hover:bg-rose-200">
                    {toy.badge}
                  </Badge>
                )}
                <img 
                  src={toy.image} 
                  alt={toy.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 className="mb-2">{toy.name}</h3>
                <div className="text-sm text-muted-foreground mb-3">
                  <div>{toy.size} • {toy.materials}</div>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {toy.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-lg">{toy.price}</span>
                  <Button size="sm" className="rounded-2xl">В корзину</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Кнопка "Смотреть все" */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="rounded-3xl px-12 py-4 font-medium hover:scale-105 transition-transform soft-shadow"
            asChild
          >
            <a href="#full-catalog">
              Смотреть все игрушки
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}