export function QuoteSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="relative">
          {/* Большие кавычки */}
          <div className="text-6xl text-foreground/20 font-serif absolute -top-8 -left-4">
            "
          </div>
          
          <blockquote className="text-xl text-foreground/90 italic leading-relaxed mb-8 relative z-10">
            Каждая игрушка создана с любовью и может стать лучшим другом. 
            Мы делаем не просто игрушки — мы создаем спутников для жизни, 
            которые будут радовать долгие годы и передаваться от поколения к поколению.
          </blockquote>
          
          <footer className="text-sm text-foreground/70 uppercase tracking-widest">
            МАСТЕР АМИГУРУМИ
          </footer>
        </div>
      </div>
    </section>
  );
}