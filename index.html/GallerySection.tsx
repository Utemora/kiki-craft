import { Card } from "./ui/card";
import { Button } from "./ui/button";
import foxImage from "figma:asset/fc01f310be88d11ec8493499601957c3e22e9151.png";
import newsImage from "figma:asset/45d255dac03266053f722c05d4929b504bbf1d2c.png";
import careImage from "figma:asset/45d255dac03266053f722c05d4929b504bbf1d2c.png";
import { Instagram, Send, PinIcon as Pinterest } from "lucide-react";

export function GallerySection() {
  return (
    <section className="relative py-20 bg-light-green">
      {/* Градиентный переход от header'а */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-light-green/90 to-light-green" />
      
      {/* Градиентный переход к следующей секции */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-light-green to-black/20" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Левая часть - мозаичная галерея (3 колонки) */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-6 grid-rows-4 gap-2 h-[600px]">
              {/* 1. Лиса со скидкой - широкий прямоугольник (верхний ряд, левая часть) */}
              <Card className="relative col-span-4 row-span-2 overflow-hidden bg-white/90 border-white/40 shadow-lg group rounded-none">
                <img 
                  src={foxImage}
                  alt="Вязаная лисичка амигуруми"
                  className="w-full h-full object-cover"
                />
                {/* Бейдж со скидкой */}
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Summer Discounts -5%
                </div>
              </Card>
              
              {/* 2. Новостной блок - вертикальный прямоугольник (правая часть, занимает всю высоту) */}
              <Card className="relative col-span-2 row-span-4 overflow-hidden bg-white/90 border-white/40 shadow-lg group cursor-pointer rounded-none">
                <div className="relative h-full">
                  <img 
                    src={newsImage}
                    alt="Как выбрать идеальную амигуруми?"
                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                  />
                  
                  {/* Градиентное затемнение при hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Заголовок статьи - всегда видимый */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <h3 className="text-white font-semibold text-sm leading-tight">
                      Как выбрать идеальную амигуруми?
                    </h3>
                  </div>
                  
                  {/* Полный текст при hover */}
                  <div className="absolute inset-0 p-4 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white font-bold text-lg mb-3">
                      Как выбрать идеальную амигуруми?
                    </h3>
                    <p className="text-white/90 text-xs leading-relaxed mb-3">
                      Рассказываем о том, на что обратить внимание при выборе вязаной игрушки: 
                      качество пряжи, безопасность материалов и уникальность дизайна.
                    </p>
                    <Button className="bg-white/20 text-white border border-white/30 hover:bg-white/30 backdrop-blur-sm text-xs px-3 py-1">
                      Читать статью
                    </Button>
                  </div>
                </div>
              </Card>
              
              {/* 3. Уход за вязаными изделиями - квадрат (нижний ряд, левая часть) */}
              <Card className="relative col-span-2 row-span-2 overflow-hidden bg-white/90 border-white/40 shadow-lg group cursor-pointer rounded-none">
                <img 
                  src={careImage}
                  alt="Правильный уход за вязаными вещами"
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                />
                
                {/* Градиентное затемнение при hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Заголовок - всегда видимый снизу */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-white font-semibold text-sm leading-tight">
                    Уход за вязаными вещами
                  </h3>
                </div>
                
                {/* Дополнительный контент при hover - появляется поверх */}
                <div className="absolute inset-0 p-4 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white font-bold text-base mb-3">
                    Правильный уход за вязаными вещами: инструкция на всю жизнь
                  </h3>
                  <p className="text-white/90 text-xs leading-relaxed mb-3">
                    Берегите свои вязаные изделия с любовью: аккуратная стирка, сушка без деформации и правильное хранение...
                  </p>
                  <Button className="bg-white/20 text-white border border-white/30 hover:bg-white/30 backdrop-blur-sm text-xs px-3 py-1">
                    Читать статью
                  </Button>
                </div>
              </Card>
              
              {/* 4. Горизонтальный прямоугольник (нижний ряд, правая часть) */}
              <Card className="relative col-span-2 row-span-2 overflow-hidden bg-white/90 border-white/40 shadow-lg hover:scale-105 transition-transform cursor-pointer rounded-none">
                <img 
                  src="https://images.unsplash.com/photo-1586769852044-692d6e3703f0?w=400&h=200&fit=crop"
                  alt="Коллекция амигуруми"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 right-3 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-medium">Коллекция амигуруми</p>
                  <p className="text-white/80 text-xs">Разнообразие форм</p>
                </div>
              </Card>
            </div>
          </div>
          
          {/* Правая часть - информация */}
          <div className="lg:col-span-1">
            <Card className="p-6 bg-white/90 backdrop-blur-sm border-white/40 shadow-lg h-full rounded-none">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                О Kiki's Craft
              </h3>
              
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                Наш магазин специализируется на создании уникальных вязаных игрушек амигуруми. 
                Каждая игрушка создается вручную с особой любовью и вниманием к деталям. 
                Мы используем только качественную пряжу и безопасные материалы, 
                что делает наших игрушек идеальными спутниками для детей и взрослых.
              </p>
              
              <p className="text-gray-600 text-xs mb-6">
                Более 3 лет создаем радость своими руками. 
                Каждая игрушка уникальна и неповторима, 
                ведь в неё вложена частичка души мастера.
              </p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="border-gray-300 text-gray-600 hover:bg-gray-50 p-2">
                    <Instagram className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="border-gray-300 text-gray-600 hover:bg-gray-50 p-2">
                    <Pinterest className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="border-gray-300 text-gray-600 hover:bg-gray-50 p-2">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                
                <div className="relative">
                  <div className="absolute -inset-2 bg-white/60 rounded-full blur-sm"></div>
                  <Button 
                    size="sm" 
                    className="relative bg-green-600/90 text-white hover:bg-green-700 rounded-full px-4 py-2 backdrop-blur-sm border border-white/30"
                  >
                    Подробнее
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}