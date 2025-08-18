import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Instagram, Facebook, Mail, Heart } from "lucide-react";

export function GalleryWithAbout() {
  return (
    <section className="py-16 bg-warm-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Мозаичная галерея - 2/3 ширины */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-4 grid-rows-3 gap-4 h-[600px]">
              {/* Большое изображение - 2x2 */}
              <div className="col-span-2 row-span-2 relative overflow-hidden rounded-2xl soft-shadow">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1631554899283-d64b5b7e5e4c?w=800&h=800&fit=crop"
                  alt="Милая вязаная игрушка"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-4 left-4 bg-cloud-white/90 px-3 py-1 rounded-full text-sm font-medium text-foreground">
                  Лисичка Рыжик
                </div>
              </div>
              
              {/* Вертикальное изображение */}
              <div className="col-span-1 row-span-2 relative overflow-hidden rounded-2xl soft-shadow">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop"
                  alt="Мастерица за работой"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-4 left-4 bg-cloud-white/90 px-3 py-1 rounded-full text-sm font-medium text-foreground">
                  В процессе
                </div>
              </div>
              
              {/* Маленькое квадратное изображение */}
              <div className="col-span-1 row-span-1 relative overflow-hidden rounded-2xl soft-shadow">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1486301933608-77725c22f0e9?w=400&h=400&fit=crop"
                  alt="Пряжа разных цветов"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Горизонтальное изображение снизу */}
              <div className="col-span-3 row-span-1 relative overflow-hidden rounded-2xl soft-shadow">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1599933976974-85ea02a9b99e?w=800&h=300&fit=crop"
                  alt="Коллекция готовых игрушек"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-4 left-4 bg-cloud-white/90 px-3 py-1 rounded-full text-sm font-medium text-foreground">
                  Наша коллекция
                </div>
              </div>
              
              {/* Квадратное изображение справа внизу */}
              <div className="col-span-1 row-span-1 relative overflow-hidden rounded-2xl soft-shadow">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1550451062-2638c6ec6c78?w=400&h=400&fit=crop"
                  alt="Крючок и пряжа"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
          
          {/* Блок "О нас" - 1/3 ширины */}
          <div className="lg:col-span-1">
            <Card className="h-full p-8 bg-cloud-white soft-shadow border-0">
              <div className="text-center mb-6">
                <h2 className="handwritten text-4xl text-soft-pink mb-3">О нас</h2>
                <div className="w-12 h-0.5 bg-soft-pink mx-auto rounded-full"></div>
              </div>
              
              <div className="space-y-4 mb-8">
                <p className="text-foreground/80 leading-relaxed">
                  Добро пожаловать в уютный мир Kiki's Craft! Мы создаём удивительные амигуруми — 
                  милых вязаных игрушек, которые дарят радость и тепло в каждый дом.
                </p>
                
                <p className="text-foreground/80 leading-relaxed">
                  Каждая игрушка вяжется вручную с особой любовью и вниманием к деталям. 
                  Мы используем только качественную гипоаллергенную пряжу, безопасную для детей.
                </p>
                
                <div className="flex items-center space-x-2 text-soft-pink">
                  <Heart className="w-5 h-5 fill-current" />
                  <span className="text-sm font-medium">Создано с любовью</span>
                </div>
              </div>
              
              <Button className="w-full bg-soft-pink hover:bg-dusty-rose text-white rounded-full mb-6 soft-shadow">
                Подробнее
              </Button>
              
              {/* Иконки соцсетей */}
              <div className="text-center">
                <p className="text-sm text-foreground/60 mb-4">Следите за нами</p>
                <div className="flex justify-center space-x-4">
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-lavender-mist hover:bg-soft-pink text-foreground hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-lavender-mist hover:bg-soft-pink text-foreground hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-lavender-mist hover:bg-soft-pink text-foreground hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}