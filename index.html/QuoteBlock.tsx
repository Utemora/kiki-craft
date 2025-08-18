export function QuoteBlock() {
  return (
    <section className="bg-quote h-[360px] relative overflow-hidden flex items-center">
      {/* Декоративные овалы */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/30 blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-white/20 blur-2xl"></div>
      
      <div className="container-figma relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Крупные кавычки */}
          <div className="text-8xl text-foreground/20 leading-none mb-4">"</div>
          
          {/* Текст цитаты */}
          <p className="text-xl leading-relaxed text-foreground mb-6">
            Амигуруми — это не просто вязание, это способ передать тепло и любовь 
            через каждую петельку. Когда видишь радость в глазах ребенка, 
            держащего твою игрушку, понимаешь — это и есть настоящее счастье.
          </p>
          
          {/* Подпись */}
          <div className="text-lg font-medium text-foreground/80">
            — Алена, основательница Kiki's Craft
          </div>
          
        </div>
      </div>
    </section>
  );
}