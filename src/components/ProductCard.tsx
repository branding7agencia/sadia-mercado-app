import { Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/data/products';
import { useCart } from '@/contexts/CartContext';

interface ProductCardProps {
  product: Product;
  compact?: boolean;
}

export function ProductCard({ product, compact = false }: ProductCardProps) {
  const { items, addItem, updateQuantity } = useCart();
  const cartItem = items.find((item) => item.id === product.id);
  const quantity = cartItem?.quantity || 0;

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  return (
    <div className="bg-card rounded-2xl shadow-card overflow-hidden flex flex-col animate-fade-in">
      {/* Image container */}
      <div className="relative aspect-square bg-muted p-3">
        {product.isPromo && (
          <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-1 rounded-full">
            OFERTA
          </div>
        )}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-3 flex-1 flex flex-col">
        {/* Brand tag */}
        <span className={`text-[10px] font-bold uppercase tracking-wide ${
          product.brand === 'Sadia' ? 'text-primary' : 
          product.brand === 'Perdigão' ? 'text-orange-600' :
          product.brand === 'Qualy' ? 'text-yellow-600' : 'text-muted-foreground'
        }`}>
          {product.brand}
        </span>

        {/* Product name */}
        <h3 className="font-semibold text-foreground text-sm leading-tight mt-1 line-clamp-2">
          {product.name}
        </h3>

        {/* Weight */}
        <span className="text-xs text-muted-foreground mt-1">
          {product.weight}
        </span>

        {/* Price section */}
        <div className="mt-auto pt-3">
          {product.originalPrice && (
            <span className="text-xs text-muted-foreground line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
          <p className="text-lg font-bold text-foreground">
            {formatPrice(product.price)}
          </p>
        </div>

        {/* Add to cart */}
        <div className="mt-3">
          {quantity === 0 ? (
            <Button
              variant="cart"
              className="w-full"
              onClick={() => addItem(product)}
            >
              <Plus className="w-4 h-4" />
              Adicionar
            </Button>
          ) : (
            <div className="flex items-center justify-between bg-primary rounded-full p-1">
              <Button
                variant="ghost"
                size="iconSm"
                className="text-primary-foreground hover:bg-primary-foreground/10 rounded-full"
                onClick={() => updateQuantity(product.id, quantity - 1)}
              >
                <Minus className="w-4 h-4" />
              </Button>
              <span className="text-primary-foreground font-bold">
                {quantity}
              </span>
              <Button
                variant="ghost"
                size="iconSm"
                className="text-primary-foreground hover:bg-primary-foreground/10 rounded-full"
                onClick={() => addItem(product)}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
