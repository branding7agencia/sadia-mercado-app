import { ArrowLeft, MapPin, ShoppingCart, Plus, Minus, Trash2, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { items, totalPrice, updateQuantity, removeItem, clearCart } = useCart();
  const navigate = useNavigate();

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-primary text-primary-foreground safe-area-inset-top">
        <div className="flex items-center gap-3 px-4 py-3">
          <button onClick={() => navigate(-1)} className="touch-manipulation">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <ShoppingCart className="w-5 h-5" />
          <h1 className="font-bold text-lg flex-1">Meu Carrinho</h1>
          {items.length > 0 && (
            <button
              onClick={clearCart}
              className="touch-manipulation"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Location bar */}
        <div className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/10">
          <MapPin className="w-4 h-4" />
          <span className="text-sm font-medium truncate">
            Rua Exemplo, 123 - Centro, São Paulo
          </span>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 p-4">
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-6">
              <ShoppingCart className="w-12 h-12 text-muted-foreground" />
            </div>
            <p className="text-lg font-semibold text-foreground mb-1">
              Ops! Seu carrinho está vazio
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              Adicione produtos para continuar
            </p>
            <Button onClick={() => navigate('/')} variant="outline" size="lg">
              Explorar produtos
            </Button>
          </div>
        ) : (
          <div className="space-y-3">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 bg-card rounded-xl p-3 shadow-soft"
              >
                <div className="w-20 h-20 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                </div>

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
                    <button
                      className="text-muted-foreground hover:text-destructive touch-manipulation -mt-1 -mr-1 p-1"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    <p className="font-bold text-foreground">
                      {formatPrice(item.price * item.quantity)}
                    </p>

                    <div className="flex items-center gap-2 bg-muted rounded-full p-1">
                      <button
                        className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-card touch-manipulation"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-bold text-sm w-5 text-center">
                        {item.quantity}
                      </span>
                      <button
                        className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-card touch-manipulation"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer - Summary */}
      <footer className="sticky bottom-0 bg-card border-t border-border safe-area-inset-bottom">
        {/* Coupon */}
        <div className="px-4 pt-4 pb-2">
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-foreground">CUPOM DE DESCONTO</span>
          </div>
          <div className="flex gap-2 mt-2">
            <input
              type="text"
              placeholder="Código"
              className="flex-1 h-9 px-3 rounded-lg bg-muted text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <Button size="sm" className="rounded-lg">
              Enviar
            </Button>
          </div>
        </div>

        {/* Totals */}
        <div className="px-4 py-3 space-y-1">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Subtotal</span>
            <span className="text-foreground">{formatPrice(totalPrice)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Descontos</span>
            <span className="text-success font-medium">- {formatPrice(0)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Frete</span>
            <span className="text-muted-foreground">A definir</span>
          </div>
          <div className="flex justify-between text-lg font-bold pt-2 border-t border-border">
            <span className="text-foreground">TOTAL</span>
            <span className="text-primary">{formatPrice(totalPrice)}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="px-4 pb-4 flex gap-3">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => navigate('/')}
          >
            Continuar Comprando
          </Button>
          <Button className="flex-1">
            Finalizar Compra
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Cart;
