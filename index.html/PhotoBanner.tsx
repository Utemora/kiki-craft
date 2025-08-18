interface PhotoBannerProps {
  imageUrl: string;
  height?: string;
  gradientClass?: string;
}

export function PhotoBanner({ 
  imageUrl, 
  height = "h-[200px]", 
  gradientClass = "gradient-quote-photo" 
}: PhotoBannerProps) {
  return (
    <section className={`${height} relative overflow-hidden`}>
      {/* Фоновое изображение */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      
      {/* Градиентный оверлей */}
      <div className={`absolute inset-0 ${gradientClass}`} />
    </section>
  );
}