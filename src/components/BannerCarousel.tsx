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
    image: 'https://brf.my.salesforce.com/servlet/servlet.ImageServer?id=015U600000CVaYA&oid=00D410000012TJa&lastMod=1770922438000',
    title: '',
    subtitle: '',
    bgColor: 'bg-background',
  },
  {
    id: '2',
    image: 'https://brf.my.salesforce.com/servlet/servlet.ImageServer?id=015U600000CPOQ1&oid=00D410000012TJa&lastMod=1770297798000',
    title: '',
    subtitle: '',
    bgColor: 'bg-background',
  },
  {
    id: '3',
    image: 'https://brf.my.salesforce.com/servlet/servlet.ImageServer?id=015U600000CVKtB&oid=00D410000012TJa&lastMod=1770892927000',
    title: '',
    subtitle: '',
    bgColor: 'bg-background',
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
              className="min-w-full rounded-2xl overflow-hidden"
            >
              <img
                src={banner.image}
                alt={banner.title || `Banner ${banner.id}`}
                className="w-full h-auto object-cover"
              />
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
