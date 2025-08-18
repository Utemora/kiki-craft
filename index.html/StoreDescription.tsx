import { Card } from './ui/card';
import { Button } from './ui/button';

export function StoreDescription() {
  const features = [
    { icon: "🧶", text: "Качественная пряжа" },
    { icon: "🚚", text: "Быстрая доставка" },
    { icon: "💝", text: "Упаковка в подарок" },
    { icon: "🎯", text: "Индивидуальные заказы" }
  ];

  const socialLinks = [
    { name: 'Instagram', icon: '📷', href: '#' },
    { name: 'VK', icon: '💬', href: '#' },
    { name: 'Pinterest', icon: '📌', href: '#' }
  ];

  return (
    <div className="space-y-6">
      {/* Основная информация о магазине */}
      <Card className="p-6 rounded-3xl soft-shadow bg-white/90 backdrop-blur-sm">
        <div className="text-center mb-4">
          <span className="inline-block text-3xl mb-3">🐱</span>
          <h4 className="mb-3">О магазине</h4>
        </div>
        
        <p className="text-foreground/80 mb-6 text-sm leading-relaxed">
          Мы создаем уютные вязаные игрушки амигуруми с особой любовью и заботой. 
          Каждая игрушка — это маленький друг, готовый подарить тепло и радость.
        </p>
        
        <div className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3 p-2 bg-white/50 rounded-xl">
              <span className="text-base">{feature.icon}</span>
              <span className="text-sm font-medium">{feature.text}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="rounded-2xl px-6 w-full">
            Узнать больше
          </Button>
        </div>
      </Card>

      {/* Контакты */}
      <Card className="p-6 rounded-3xl soft-shadow bg-white/80 backdrop-blur-sm">
        <div className="text-center">
          <span className="inline-block text-2xl mb-3">📞</span>
          <h5 className="mb-3">Контакты</h5>
          <p className="text-sm text-foreground/70 mb-4">
            +7 (495) 123-45-67<br />
            info@kikiscraft.ru
          </p>
          <p className="text-xs text-foreground/50 mb-4">
            Пн-Пт: 10:00-19:00<br />
            Сб-Вс: 11:00-17:00
          </p>
          
          <div className="flex justify-center gap-2">
            {socialLinks.map((social) => (
              <Button
                key={social.name}
                variant="ghost"
                size="sm"
                className="w-10 h-10 rounded-xl bg-white/50 hover:bg-white/70"
                asChild
              >
                <a href={social.href}>
                  <span className="text-base">{social.icon}</span>
                </a>
              </Button>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}