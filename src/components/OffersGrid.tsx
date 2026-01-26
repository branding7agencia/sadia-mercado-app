import { Flame } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { promoProducts } from '@/data/products';

export function OffersGrid() {
  if (promoProducts.length === 0) return null;

  return (
    <section className="py-4">
      <div className="px-4 mb-3">
        <div className="flex items-center gap-2 mb-1">
          <Flame className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-bold text-foreground">Ofertas do Dia</h2>
        </div>
        <p className="text-sm text-muted-foreground">Aproveite os melhores preços</p>
      </div>

      <div className="flex gap-3 px-4 overflow-x-auto hide-scrollbar pb-2">
        {promoProducts.map((product) => (
          <div key={product.id} className="flex-shrink-0 w-[160px]">
            <ProductCard product={product} compact />
          </div>
        ))}
      </div>
    </section>
  );
}
