import { Heart, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-dusty-rose text-cloud-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Логотип и описание */}
          <div>
            <h3 className="handwritten text-3xl mb-4">Kiki's Craft</h3>
            <p className="text-cloud-white/80 leading-relaxed mb-4">
              Создаём уютные амигуруми с любовью и заботой. 
              Каждая игрушка — это маленькое чудо, связанное специально для вас.
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <Heart className="w-4 h-4 fill-current" />
              <span className="text-sm">Сделано с любовью в России</span>
            </div>
          </div>
          
          {/* Контакты */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Связаться с нами</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Mail className="w-4 h-4" />
                <span className="text-sm">hello@kikiscraft.ru</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Москва, Россия</span>
              </div>
            </div>
          </div>
          
          {/* Быстрые ссылки */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Меню</h4>
            <div className="space-y-2">
              <a href="#" className="block text-cloud-white/80 hover:text-cloud-white transition-colors text-sm">
                Каталог игрушек
              </a>
              <a href="#" className="block text-cloud-white/80 hover:text-cloud-white transition-colors text-sm">
                О нас
              </a>
              <a href="#" className="block text-cloud-white/80 hover:text-cloud-white transition-colors text-sm">
                Доставка и оплата
              </a>
              <a href="#" className="block text-cloud-white/80 hover:text-cloud-white transition-colors text-sm">
                Контакты
              </a>
            </div>
          </div>
        </div>
        
        {/* Нижняя часть */}
        <div className="border-t border-cloud-white/20 mt-8 pt-8 text-center">
          <p className="text-cloud-white/60 text-sm">
            © 2024 Kiki's Craft. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}