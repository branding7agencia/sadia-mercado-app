import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

export function CartSheet() {
  const { items, isOpen, setIsOpen, totalPrice, updateQuantity, removeItem, clearCart } = useCart();

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-foreground/40 backdrop-blur-sm z-50 animate-fade-in"
        onClick={() => setIsOpen(false)}
      />

      {/* Sheet */}
      <div className="fixed inset-x-0 bottom-0 z-50 bg-card rounded-t-3xl shadow-elevated animate-slide-up max-h-[85vh] flex flex-col safe-area-inset-bottom">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="font-bold text-foreground">Meu Carrinho</h2>
              <p className="text-sm text-muted-foreground">
                {items.length} {items.length === 1 ? 'item' : 'itens'}
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-4">
                <ShoppingBag className="w-10 h-10 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground font-medium">
                Seu carrinho está vazio
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Adicione produtos para continuar
              </p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 bg-muted/50 rounded-xl p-3"
              >
                {/* Product image */}
                <div className="w-20 h-20 bg-card rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Product info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-bold uppercase text-primary">
                        {item.brand}
                      </span>
                      <h3 className="font-medium text-foreground text-sm leading-tight line-clamp-2">
                        {item.name}
                      </h3>
                      <span className="text-xs text-muted-foreground">
                        {item.weight}
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="iconSm"
                      className="text-muted-foreground hover:text-destructive -mt-1 -mr-1"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    <p className="font-bold text-foreground">
                      {formatPrice(item.price * item.quantity)}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 bg-card rounded-full p-1 shadow-soft">
                      <Button
                        variant="ghost"
                        size="iconSm"
                        className="rounded-full h-7 w-7"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="w-3 h-3" />
                      </Button>
                      <span className="font-bold text-sm w-5 text-center">
                        {item.quantity}
                      </span>
                      <Button
                        variant="ghost"
                        size="iconSm"
                        className="rounded-full h-7 w-7"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-4 border-t border-border space-y-4">
            {/* Totals */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="text-foreground">{formatPrice(totalPrice)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Entrega</span>
                <span className="text-success font-medium">Grátis</span>
              </div>
              <div className="flex justify-between text-lg font-bold pt-2 border-t border-border">
                <span className="text-foreground">Total</span>
                <span className="text-primary">{formatPrice(totalPrice)}</span>
              </div>
            </div>

            {/* Checkout button */}
            <Button className="w-full" size="lg">
              Finalizar Pedido
            </Button>

            <Button
              variant="ghost"
              className="w-full text-muted-foreground"
              onClick={clearCart}
            >
              Limpar carrinho
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
