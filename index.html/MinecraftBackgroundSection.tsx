import { Card } from "./ui/card";
import minecraftBg from "figma:asset/09fa746630d2e44b8ab0a35524159a9728d6cc08.png";

export function MinecraftBackgroundSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Градиентный переход от предыдущей секции */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent" />
      {/* Фоновое изображение Minecraft */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${minecraftBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />
      
      {/* Градиентное затемнение - левая часть светлее, правая темнее */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/60 to-black/80" />
      
      {/* Дополнительный вертикальный градиент */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
      
      {/* Радиальный градиент для фокуса на центре */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/10 to-black/40" style={{
        background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.2) 70%)"
      }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[60vh]">
          
          {/* Левая часть - описание игры */}
          <div className="text-white">
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-6 minecraft-font text-white drop-shadow-lg">
                что это за игра
              </h2>
              <p className="text-lg text-white/90 leading-relaxed drop-shadow">
                Мы очень ценим каждого, кто разделяет нашу страсть к созданию уникальных вязаных друзей.
              </p>
            </div>
            
            <div className="space-y-4">
              <p className="text-white/80 leading-relaxed drop-shadow">
                Амигуруми — это японское искусство вязания крючком маленьких набивных существ и антропоморфных объектов, 
                которое мы освоили и полюбили. Каждая наша игрушка создается по уникальным схемам, 
                с использованием высококачественной пряжи.
              </p>
              
              <p className="text-white/70 text-sm leading-relaxed drop-shadow">
                Наши мастера имеют более чем 5-летний опыт работы с амигуруми и постоянно совершенствуют свои навыки, 
                изучая новые техники и тренды в мире вязаных игрушек.
              </p>
            </div>
          </div>
          
          {/* Правая часть - цитата на более темном фоне */}
          <div className="relative">
            {/* Дополнительное затемнение для правой части */}
            <div className="absolute inset-0 bg-black/30 rounded-xl" />
            
            <Card className="relative z-10 p-8 bg-black/40 border-white/20 backdrop-blur-sm">
              <div className="text-center">
                {/* Большие кавычки */}
                <div className="text-6xl text-white/30 font-serif mb-4">
                  "
                </div>
                
                <blockquote className="text-xl text-white/95 italic leading-relaxed mb-8 drop-shadow">
                  Las Enderman habían tejido para el resto. 
                  El idioma del Enderman en Minecraft es 
                  casi inaudible, Sin embargo, la mayoría 
                  de las criaturas del Juego pueden entender 
                  las palabras y frases en inglés reproducidas al 
                  revés y los niveles elevados de tono.
                </blockquote>
                
                <footer className="text-sm text-white/70 uppercase tracking-widest drop-shadow">
                  ENDERMAN
                </footer>
              </div>
            </Card>
          </div>
          
        </div>
      </div>
    </section>
  );
}