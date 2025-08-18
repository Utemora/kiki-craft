import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Heart, ShoppingCart, Star } from "lucide-react";

const toys = [
  {
    id: 1,
    name: "Мишка Тедди",
    price: "2,500 ₽",
    image: "https://images.unsplash.com/photo-1573167510303-5737e2423df0?w=400&h=400&fit=crop",
    description: "Классический плюшевый мишка из мягкой пряжи",
    rating: 5,
    isNew: false
  },
  {
    id: 2,
    name: "Единорог Радуга",
    price: "3,200 ₽",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop",
    description: "Волшебный единорог с разноцветной гривой",
    rating: 5,
    isNew: true
  },
  {
    id: 3,
    name: "Кот Персик",
    price: "2,800 ₽",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=400&fit=crop",
    description: "Уютный котик в персиковых тонах",
    rating: 4,
    isNew: false
  },
  {
    id: 4,
    name: "Зайчик Снежок",
    price: "2,200 ₽",
    image: "https://images.unsplash.com/photo-1585857018516-29a52ed44082?w=400&h=400&fit=crop",
    description: "Нежный белоснежный зайчик",
    rating: 5,
    isNew: false
  },
  {
    id: 5,
    name: "Дракончик Эмеральд",
    price: "3,800 ₽",
    image: "https://images.unsplash.com/photo-1606078842584-0d21e6bb0f24?w=400&h=400&fit=crop",
    description: "Добрый дракончик изумрудного цвета",
    rating: 5,
    isNew: true
  }
];

export function FavoriteToys() {
  return (
    <section className="py-16 bg-powder-blue">
      <div className="max-w-7xl mx-auto px-4">
        {/* Заголовок секции */}
        <div className="text-center mb-12">
          <h2 className="handwritten text-4xl md:text-5xl text-dusty-rose mb-4">
            Наши любимые игрушки
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
            Самые популярные амигуруми, которые уже нашли свой дом и дарят радость детям и взрослым
          </p>
          <Button className="bg-soft-pink hover:bg-dusty-rose text-white px-8 py-3 rounded-full soft-shadow">
            Смотреть все
          </Button>
        </div>
        
        {/* Горизонтальная галерея */}
        <div className="overflow-x-auto pb-4">
          <div className="flex space-x-6 min-w-max">
            {toys.map((toy) => (
              <Card key={toy.id} className="w-80 bg-cloud-white soft-shadow border-0 overflow-hidden group">
                {/* Изображение товара */}
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={toy.image}
                    alt={toy.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Бейджи */}
                  <div className="absolute top-4 left-4 flex flex-col space-y-2">
                    {toy.isNew && (
                      <span className="bg-meadow-green text-white px-3 py-1 rounded-full text-sm font-medium">
                        Новинка
                      </span>
                    )}
                  </div>
                  
                  {/* Кнопка избранного */}
                  <button className="absolute top-4 right-4 w-10 h-10 bg-cloud-white/90 hover:bg-soft-pink rounded-full flex items-center justify-center transition-all duration-300 group">
                    <Heart className="w-5 h-5 text-foreground/60 group-hover:text-white group-hover:fill-current" />
                  </button>
                  
                  {/* Кнопка быстрого просмотра */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button className="bg-cloud-white text-foreground hover:bg-soft-pink hover:text-white rounded-full px-6 py-2">
                      Быстрый просмотр
                    </Button>
                  </div>
                </div>
                
                {/* Информация о товаре */}
                <div className="p-6">
                  {/* Рейтинг */}
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${
                          i < toy.rating 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`} 
                      />
                    ))}
                    <span className="text-sm text-foreground/60 ml-2">({toy.rating}.0)</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-2">{toy.name}</h3>
                  <p className="text-foreground/70 text-sm mb-4 leading-relaxed">
                    {toy.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-soft-pink">{toy.price}</span>
                    <Button className="bg-soft-pink hover:bg-dusty-rose text-white rounded-full px-4 py-2 flex items-center space-x-2">
                      <ShoppingCart className="w-4 h-4" />
                      <span>В корзину</span>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Декоративные элементы */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-soft-pink rounded-full"></div>
            <div className="w-3 h-3 bg-meadow-green rounded-full"></div>
            <div className="w-4 h-4 bg-lavender-mist rounded-full"></div>
            <div className="w-3 h-3 bg-peach-cream rounded-full"></div>
            <div className="w-2 h-2 bg-sage-green rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}