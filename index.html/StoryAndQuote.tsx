import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Quote } from "lucide-react";

export function StoryAndQuote() {
  return (
    <section className="py-16 bg-gentle-gray">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* История мастера */}
          <Card className="p-8 bg-cloud-white soft-shadow border-0">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <div className="relative">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&fit=crop"
                    alt="Мастер за работой"
                    className="w-full h-48 md:h-32 object-cover rounded-2xl soft-shadow"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-soft-pink rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">♥</span>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h3 className="handwritten text-3xl text-dusty-rose mb-4">История мастера</h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Всё начиналось с простого желания создать что-то особенное своими руками. 
                  Анна увлеклась амигуруми пять лет назад, когда искала подарок для племянницы.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Сегодня каждая игрушка — это маленькая история, сотканная из тёплых ниток 
                  и бесконечной любви к своему делу.
                </p>
              </div>
            </div>
          </Card>
          
          {/* Вдохновляющая цитата */}
          <Card className="p-8 bg-lavender-mist soft-shadow border-0 relative overflow-hidden">
            <div className="relative z-10">
              <div className="text-center mb-6">
                <Quote className="w-12 h-12 text-soft-pink mx-auto mb-4 opacity-60" />
              </div>
              
              <blockquote className="text-center">
                <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6 italic">
                  "Каждая петелька — это момент медитации, каждая игрушка — кусочек души. 
                  Амигуруми научили меня находить радость в простых вещах и дарить её другим."
                </p>
                <footer className="text-foreground/60">
                  <p className="handwritten text-xl text-soft-pink">Анна, основатель Kiki's Craft</p>
                </footer>
              </blockquote>
            </div>
            
            {/* Декоративные элементы */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-soft-pink/10 rounded-full"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-meadow-green/10 rounded-full"></div>
            <div className="absolute top-1/2 left-8 w-8 h-8 bg-peach-cream/10 rounded-full"></div>
          </Card>
        </div>
      </div>
    </section>
  );
}