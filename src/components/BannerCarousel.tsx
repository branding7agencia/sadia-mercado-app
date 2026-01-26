import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Banner {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  bgColor: string;
}

const banners: Banner[] = [
  {
    id: '1',
    image: 'https://brfsaprodutosprd.blob.core.windows.net/centralbrf/MKP_SAY_135447.webp',
    title: 'Salsicha Sadia',
    subtitle: 'O sabor que a família ama',
    bgColor: 'bg-gradient-to-r from-primary/10 to-primary/5',
  },
  {
    id: '2',
    image: 'https://brf.my.salesforce.com/servlet/servlet.ImageServer?id=015U600000C63tx&oid=00D410000012TJa',
    title: 'Nuggets Crocantes',
    subtitle: 'Praticidade para o dia a dia',
    bgColor: 'bg-gradient-to-r from-secondary/20 to-secondary/5',
  },
  {
    id: '3',
    image: 'https://brfsaprodutosprd.blob.core.windows.net/centralbrf/MKP_MGL_126540.webp',
    title: 'Margarina Qualy',
    subtitle: 'Sabor e qualidade na mesa',
    bgColor: 'bg-gradient-to-r from-success/10 to-success/5',
  },
];

export function BannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    setCurrentIndex(index);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  };

  return (
    <section className="px-4 py-2">
      <div className="relative overflow-hidden rounded-2xl">
        {/* Banners */}
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {banners.map((banner) => (
            <div
              key={banner.id}
              className={`min-w-full ${banner.bgColor} rounded-2xl p-4 flex items-center gap-4`}
            >
              <div className="flex-1">
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {banner.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {banner.subtitle}
                </p>
                <button className="mt-3 px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-full hover:bg-primary/90 transition-colors">
                  Ver mais
                </button>
              </div>
              <div className="w-24 h-24 flex-shrink-0">
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={goPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-soft hover:bg-card transition-colors"
        >
          <ChevronLeft className="w-4 h-4 text-foreground" />
        </button>
        <button
          onClick={goNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-soft hover:bg-card transition-colors"
        >
          <ChevronRight className="w-4 h-4 text-foreground" />
        </button>

        {/* Dots indicator */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`h-1.5 rounded-full transition-all ${
                index === currentIndex
                  ? 'w-4 bg-primary'
                  : 'w-1.5 bg-foreground/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
