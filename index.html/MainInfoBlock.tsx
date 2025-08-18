import { Button } from "./ui/button";
import { Instagram, Users, Heart } from "lucide-react";

export function MainInfoBlock() {
  const socialIcons = [
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Users, label: "VK", href: "#" },
    { icon: Heart, label: "Pinterest", href: "#" }
  ];

  return (
    <section className="bg-main-info texture-grain h-[400px] flex items-center">
      <div className="container-figma">
        <div className="grid grid-cols-12 gap-6 items-center">
          
          {/* Текстовый контент - 8 колонок */}
          <div className="col-span-8">
            <h2 className="mb-6">Основная информация</h2>
            <p className="text-lg leading-relaxed mb-4">
              Добро пожаловать в мир уютных амигуруми! В нашем магазине вы найдете 
              вязаные игрушки ручной работы, созданные с любовью и вниманием к деталям. 
              Каждая игрушка уникальна и станет прекрасным подарком или спутником 
              для детей и взрослых.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Мы используем только качественные материалы и проверенные техники 
              вязания амигуруми для создания долговечных и безопасных игрушек.
            </p>
          </div>
          
          {/* Социальные сети и кнопка - 4 колонки */}
          <div className="col-span-4 text-center">
            
            {/* Иконки соцсетей */}
            <div className="flex justify-center gap-4 mb-6">
              {socialIcons.map((social) => (
                <a 
                  key={social.label}
                  href={social.href}
                  className="w-12 h-12 rounded-full bg-button-bg hover:bg-primary/80 transition-colors flex items-center justify-center group"
                >
                  <social.icon className="w-6 h-6 text-button-text group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
            
            <p className="text-sm text-muted-foreground mb-4">
              Следите за новинками в социальных сетях
            </p>
            
            {/* CTA кнопка */}
            <Button 
              size="lg"
              className="bg-button-bg hover:bg-primary/80 text-button-text rounded-2xl px-8 py-3 font-semibold transition-all hover:scale-105 soft-shadow"
            >
              Узнать больше
            </Button>
            
          </div>
          
        </div>
      </div>
    </section>
  );
}