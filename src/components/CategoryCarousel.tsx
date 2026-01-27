import { 
  Beef, 
  Snowflake, 
  Drumstick, 
  Milk, 
  CircleDot,
  Fish,
  ShoppingBasket
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  icon: LucideIcon;
}

const categories: Category[] = [
  { id: 'frios', name: 'Frios', icon: Snowflake },
  { id: 'congelados', name: 'Congelados', icon: Fish },
  { id: 'empanados', name: 'Empanados', icon: Drumstick },
  { id: 'in-natura', name: 'In Natura', icon: Beef },
  { id: 'margarinas', name: 'Margarinas', icon: Milk },
  { id: 'salsichas', name: 'Salsichas', icon: CircleDot },
];

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
      
      <div className="flex gap-4 px-4 overflow-x-auto hide-scrollbar pb-2">
        {/* All products option */}
        <button
          onClick={() => onSelectCategory(null)}
          className="flex flex-col items-center gap-2 min-w-[64px]"
        >
          <div
            className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${
              selectedCategory === null
                ? 'bg-red-100 text-primary'
                : 'bg-amber-100 text-foreground hover:bg-amber-200'
            }`}
          >
            <ShoppingBasket className="w-5 h-5" strokeWidth={1.5} />
          </div>
          <span className={`text-[11px] font-medium ${
            selectedCategory === null ? 'text-primary' : 'text-muted-foreground'
          }`}>
            Todos
          </span>
        </button>

        {categories.map((category) => {
          const Icon = category.icon;
          const isSelected = selectedCategory === category.id;

          return (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className="flex flex-col items-center gap-2 min-w-[64px]"
            >
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${
                  isSelected
                    ? 'bg-red-100 text-primary'
                    : 'bg-amber-100 text-foreground hover:bg-amber-200'
                }`}
              >
                <Icon className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <span className={`text-[11px] font-medium text-center ${
                isSelected ? 'text-primary' : 'text-muted-foreground'
              }`}>
                {category.name}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
