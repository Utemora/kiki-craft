import headerImage from "figma:asset/b0b455ca560b28959759d2a2920806e47ad301e9.png";
import { Button } from "./ui/button";
import { ShoppingCart, User, Search, Menu } from "lucide-react";

export function Header() {
  return (
    <header className="relative h-96 overflow-hidden">
      {/* Фоновое изображение с амигуруми */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${headerImage})` }}
      >
        {/* Мягкий оверлей для лучшей читабельности */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white/40" />
      </div>
      
      {/* Навигационная панель */}
      <nav className="relative z-20 flex items-center justify-between px-6 py-4">
        {/* Левая навигация */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-foreground/80 hover:text-foreground hover:bg-cloud-white/20 backdrop-blur-sm">
            <Menu className="w-5 h-5 mr-2" />
            Меню
          </Button>
          <Button variant="ghost" className="text-foreground/80 hover:text-foreground hover:bg-cloud-white/20 backdrop-blur-sm hidden md:flex">
            Каталог
          </Button>
          <Button variant="ghost" className="text-foreground/80 hover:text-foreground hover:bg-cloud-white/20 backdrop-blur-sm hidden md:flex">
            О нас
          </Button>
        </div>
        
        {/* Правая навигация */}
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-foreground hover:bg-cloud-white/20 backdrop-blur-sm">
            <Search className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-foreground hover:bg-cloud-white/20 backdrop-blur-sm">
            <User className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-foreground hover:bg-cloud-white/20 backdrop-blur-sm relative">
            <ShoppingCart className="w-5 h-5" />
            {/* Счетчик товаров в корзине */}
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-soft-pink text-cloud-white text-xs rounded-full flex items-center justify-center">
              2
            </span>
          </Button>
        </div>
      </nav>
      
      {/* Контент хедера */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 pt-8">
        {/* Логотип магазина */}
        <div className="text-center mb-6">
          <h1 className="handwritten text-5xl md:text-6xl lg:text-7xl text-dusty-rose mb-3 drop-shadow-lg">
            Kiki's Craft
          </h1>
          <p className="text-lg md:text-xl font-light text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Уютный мир вязаных игрушек амигуруми, созданных с любовью и заботой
          </p>
        </div>
        
        {/* Декоративные элементы */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-12 h-0.5 bg-soft-pink rounded-full"></div>
          <div className="w-2.5 h-2.5 bg-soft-pink rounded-full animate-pulse"></div>
          <div className="w-12 h-0.5 bg-soft-pink rounded-full"></div>
        </div>
        
        {/* Призыв к действию */}
        <div className="flex items-center space-x-4">
          <Button className="bg-soft-pink hover:bg-dusty-rose text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105 soft-shadow">
            Посмотреть коллекцию
          </Button>
          <Button variant="outline" className="border-soft-pink text-soft-pink hover:bg-soft-pink hover:text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 backdrop-blur-sm bg-cloud-white/20">
            Как заказать
          </Button>
        </div>
      </div>
      
      {/* Волнистый переход к следующей секции */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1440 120" 
          className="w-full h-12 text-warm-cream fill-current"
          preserveAspectRatio="none"
        >
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"/>
        </svg>
      </div>
    </header>
  );
}