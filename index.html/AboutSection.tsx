import { Card } from "./ui/card";

export function AboutSection() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Левая часть - изображение */}
          <div className="relative">
            <Card className="overflow-hidden bg-card border-border/20">
              <img 
                src="https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=600&h=500&fit=crop"
                alt="Процесс создания амигуруми"
                className="w-full h-96 object-cover"
              />
            </Card>
            
            {/* Маленькое изображение в углу */}
            <Card className="absolute -bottom-6 -right-6 overflow-hidden bg-card border-border/20 w-32 h-32">
              <img 
                src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=200&h=200&fit=crop"
                alt="Готовая игрушка"
                className="w-full h-full object-cover"
              />
            </Card>
          </div>
          
          {/* Правая часть - текст */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4" style={{fontFamily: 'serif'}}>
                что это за игра
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Мы очень ценим каждого, кто разделяет нашу страсть к созданию уникальных вязаных друзей.
              </p>
            </div>
            
            <div>
              <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                Амигуруми — это японское искусство вязания крючком маленьких набивных существ и антропоморфных объектов, которое мы освоили и полюбили. 
                Каждая наша игрушка создается по уникальным схемам, с использованием высококачественной пряжи.
              </p>
              
              <p className="text-foreground/60 text-xs">
                Наши мастера имеют более чем 5-летний опыт работы с амигуруми и постоянно совершенствуют свои навыки, 
                изучая новые техники и тренды в мире вязаных игрушек.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}