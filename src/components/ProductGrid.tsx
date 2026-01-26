import { ProductCard } from './ProductCard';
import { Product } from '@/data/products';

interface ProductGridProps {
  products: Product[];
  title?: string;
  subtitle?: string;
}

export function ProductGrid({ products, title, subtitle }: ProductGridProps) {
  return (
    <section className="py-4">
      {(title || subtitle) && (
        <div className="px-4 mb-4">
          {title && (
            <h2 className="text-lg font-bold text-foreground">{title}</h2>
          )}
          {subtitle && (
            <p className="text-sm text-muted-foreground mt-0.5">{subtitle}</p>
          )}
        </div>
      )}

      <div className="px-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
