import { promoProducts } from '@/data/products';

interface Story {
  id: string;
  image: string;
  label: string;
}

const stories: Story[] = promoProducts.slice(0, 6).map((product) => ({
  id: product.id,
  image: product.image,
  label: product.isPromo ? 'Oferta' : product.name.split(' ')[0],
}));

// Add some variety to the labels
const storyLabels = ['Super Oferta', 'Leve 3', 'Só Hoje', 'Black Week', 'Combo', 'Imperdível'];

export function StoriesSection() {
  return (
    <section className="py-4">
      <div className="flex gap-4 px-4 overflow-x-auto hide-scrollbar">
        {stories.map((story, index) => (
          <button
            key={story.id}
            className="flex flex-col items-center gap-2 min-w-[72px] group"
          >
            {/* Story ring */}
            <div className="relative">
              <div className="w-[68px] h-[68px] rounded-full p-[3px] bg-gradient-to-tr from-primary via-primary to-secondary">
                <div className="w-full h-full rounded-full bg-card p-[2px]">
                  <div className="w-full h-full rounded-full overflow-hidden bg-muted">
                    <img
                      src={story.image}
                      alt={story.label}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Label */}
            <span className="text-[11px] font-medium text-foreground text-center leading-tight max-w-[72px] truncate">
              {storyLabels[index] || story.label}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
