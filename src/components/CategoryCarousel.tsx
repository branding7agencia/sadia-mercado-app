import { categories } from '@/data/products';

interface CategoryCarouselProps {
  selectedCategory: string | null;
  onSelectCategory: (id: string | null) => void;
}

export function CategoryCarousel({ selectedCategory, onSelectCategory }: CategoryCarouselProps) {
  return (
    <section className="py-4">
      <div className="px-4 mb-3">
        <h2 className="text-lg font-bold text-foreground">Categorias</h2>
      </div>
      
      <div className="flex gap-3 px-4 overflow-x-auto hide-scrollbar scroll-snap-x pb-2">
        {/* All products option */}
        <button
          onClick={() => onSelectCategory(null)}
          className={`flex flex-col items-center gap-2 min-w-[72px] transition-all ${
            selectedCategory === null ? 'scale-105' : ''
          }`}
        >
          <div
            className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl transition-all shadow-soft ${
              selectedCategory === null
                ? 'bg-primary shadow-button'
                : 'bg-card'
            }`}
          >
            🛒
          </div>
          <span className={`text-xs font-medium ${
            selectedCategory === null ? 'text-primary' : 'text-muted-foreground'
          }`}>
            Todos
          </span>
        </button>

        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={`flex flex-col items-center gap-2 min-w-[72px] scroll-snap-start transition-all ${
              selectedCategory === category.id ? 'scale-105' : ''
            }`}
          >
            <div
              className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl transition-all shadow-soft ${
                selectedCategory === category.id
                  ? 'bg-primary shadow-button'
                  : 'bg-card'
              }`}
            >
              {category.icon}
            </div>
            <span className={`text-xs font-medium text-center ${
              selectedCategory === category.id ? 'text-primary' : 'text-muted-foreground'
            }`}>
              {category.name}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
