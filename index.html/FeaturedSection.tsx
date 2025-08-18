import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function FeaturedSection() {
  return (
    <section className="py-16 watercolor-green">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          
          {/* Левая часть - Лидер продаж */}
          <div className="text-center lg:text-left">
            <div className="inline-block p-6 bg-white/60 backdrop-blur-sm rounded-3xl soft-shadow mb-6">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200&h=200&fit=crop"
                alt="Вязаная игрушка - лидер продаж"
                className="w-24 h-24 object-cover rounded-2xl mx-auto"
              />
            </div>
            <h2 className="text-primary mb-2 font-bold">Лидер продаж</h2>
            <p className="text-lg font-medium text-foreground/80">
              Котик Мурзик 🐱
            </p>
            <p className="text-sm text-foreground/60 mt-2">
              Любимец детей и взрослых
            </p>
          </div>

          {/* Средняя часть - О проекте */}
          <div className="text-center">
            <h3 className="mb-4">О чем мой проект</h3>
            <p className="text-foreground/80 leading-relaxed">
              Kiki's Craft — это магазин, где каждая игрушка создается с душой. 
              Мы используем только качественную пряжу и проверенные техники вязания, 
              чтобы каждый амигуруми стал особенным спутником в жизни.
            </p>
          </div>

          {/* Правая часть - Цитата */}
          <Card className="p-8 rounded-3xl soft-shadow bg-white/60 backdrop-blur-sm">
            <div className="text-center">
              <div className="text-6xl text-primary/40 mb-4 leading-none">"</div>
              <p className="text-lg italic text-foreground/80 leading-relaxed mb-4">
                Каждая игрушка — это маленькое чудо, созданное с любовью и заботой. 
                Они не просто украшают дом, а становятся верными друзьями.
              </p>
              <div className="border-t border-border pt-4">
                <p className="text-sm font-medium">Кики, основатель</p>
                <p className="text-xs text-foreground/60">Kiki's Craft</p>
              </div>
            </div>
          </Card>

        </div>
      </div>
    </section>
  );
}