import { Clock, ChefHat } from 'lucide-react';

interface Recipe {
  id: string;
  title: string;
  image: string;
  time: string;
  category: string;
}

const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Hot Dog Gourmet',
    image: 'https://images.unsplash.com/photo-1612392062631-94f17e070e1a?w=400&h=300&fit=crop',
    time: '15 min',
    category: 'Preparos rápidos',
  },
  {
    id: '2',
    title: 'Nuggets com Molho',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop',
    time: '20 min',
    category: 'Preparos rápidos',
  },
  {
    id: '3',
    title: 'Colomba Pascal',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=300&fit=crop',
    time: '45 min',
    category: 'Para a Páscoa',
  },
  {
    id: '4',
    title: 'Sanduíche Natural',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop',
    time: '10 min',
    category: 'Receitas do dia a dia',
  },
  {
    id: '5',
    title: 'Frango Empanado',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&h=300&fit=crop',
    time: '30 min',
    category: 'Receitas do dia a dia',
  },
  {
    id: '6',
    title: 'Torta Salgada',
    image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400&h=300&fit=crop',
    time: '40 min',
    category: 'Para a Páscoa',
  },
];

const categories = ['Preparos rápidos', 'Para a Páscoa', 'Receitas do dia a dia'];

export function RecipesSection() {
  return (
    <section className="py-4">
      <div className="px-4 mb-4">
        <div className="flex items-center gap-2 mb-1">
          <ChefHat className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-bold text-foreground">Receitas</h2>
        </div>
        <p className="text-sm text-muted-foreground">Inspire-se e prepare em casa</p>
      </div>

      {/* Category tabs */}
      <div className="flex gap-2 px-4 mb-4 overflow-x-auto hide-scrollbar">
        {categories.map((category, index) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
              index === 0
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Recipe cards grid */}
      <div className="flex gap-3 px-4 overflow-x-auto hide-scrollbar pb-2">
        {recipes.map((recipe) => (
          <button
            key={recipe.id}
            className="flex-shrink-0 w-[160px] bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all group"
          >
            {/* Image */}
            <div className="relative h-24 overflow-hidden">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-card/90 backdrop-blur-sm px-2 py-1 rounded-full">
                <Clock className="w-3 h-3 text-muted-foreground" />
                <span className="text-[10px] font-medium text-foreground">{recipe.time}</span>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-3">
              <h3 className="text-sm font-semibold text-foreground text-left leading-tight line-clamp-2">
                {recipe.title}
              </h3>
              <p className="text-[10px] text-muted-foreground mt-1 text-left">
                {recipe.category}
              </p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
