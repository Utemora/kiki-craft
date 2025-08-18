import { Sparkles, Heart, Star } from "lucide-react";

export function ProcessSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-warm-cream via-vanilla-cream to-rose-dust relative overflow-hidden">
      {/* Декоративные элементы фона */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-4 h-4 bg-soft-pink/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-meadow-green/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-5 h-5 bg-lavender-mist/40 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-peach-cream/50 rounded-full animate-pulse delay-700"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        {/* Иконки */}
        <div className="flex justify-center items-center space-x-8 mb-8">
          <div className="w-16 h-16 bg-soft-pink/20 rounded-full flex items-center justify-center">
            <Heart className="w-8 h-8 text-soft-pink" />
          </div>
          <div className="w-20 h-20 bg-meadow-green/20 rounded-full flex items-center justify-center">
            <Sparkles className="w-10 h-10 text-meadow-green" />
          </div>
          <div className="w-16 h-16 bg-lavender-mist/40 rounded-full flex items-center justify-center">
            <Star className="w-8 h-8 text-purple-400" />
          </div>
        </div>
        
        {/* Основной заголовок */}
        <h2 className="handwritten text-5xl md:text-6xl lg:text-7xl text-dusty-rose mb-6 drop-shadow-sm">
          Как мы создаём игрушки
        </h2>
        
        {/* Подзаголовок */}
        <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed mb-8">
          Каждая амигуруми проходит путь от идеи до готовой игрушки, 
          наполняясь любовью и заботой на каждом этапе
        </p>
        
        {/* Декоративная линия */}
        <div className="flex items-center justify-center space-x-4">
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent to-soft-pink rounded-full"></div>
          <div className="w-4 h-4 bg-soft-pink rounded-full"></div>
          <div className="w-8 h-8 bg-meadow-green/30 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-meadow-green rounded-full"></div>
          </div>
          <div className="w-4 h-4 bg-lavender-mist rounded-full"></div>
          <div className="w-24 h-0.5 bg-gradient-to-l from-transparent to-lavender-mist rounded-full"></div>
        </div>
      </div>
      
      {/* Волнистый переход */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1440 120" 
          className="w-full h-20 text-powder-blue fill-current"
          preserveAspectRatio="none"
        >
          <path d="M0,32L48,42.7C96,53,192,75,288,80C384,85,480,75,576,69.3C672,64,768,64,864,58.7C960,53,1056,43,1152,48C1248,53,1344,75,1392,85.3L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"/>
        </svg>
      </div>
    </section>
  );
}