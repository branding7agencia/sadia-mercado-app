import { ProductCard } from './ProductCard';
import { Product } from '@/data/products';

interface ProductSectionProps {
  title: string;
  subtitle?: string;
  products: Product[];
}

export function ProductSection({ title, subtitle, products }: ProductSectionProps) {
  return (
    <section className="py-4">
      <div className="px-4 mb-4">
        <h2 className="text-lg font-bold text-foreground">{title}</h2>
        {subtitle && (
          <p className="text-sm text-muted-foreground mt-0.5">{subtitle}</p>
        )}
      </div>

      <div className="flex gap-3 px-4 overflow-x-auto hide-scrollbar pb-2">
        {products.map((product) => (
          <div key={product.id} className="flex-shrink-0 w-[160px]">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}
