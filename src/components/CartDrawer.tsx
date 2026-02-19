import { useState } from 'react';
import { ShoppingCart, Plus, Minus, Trash2, Ticket, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface CartDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CartDrawer({ open, onOpenChange }: CartDrawerProps) {
  const { items, totalPrice, updateQuantity, removeItem, clearCart } = useCart();
  const navigate = useNavigate();
  const [couponOpen, setCouponOpen] = useState(false);

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="rounded-t-3xl p-0 max-h-[85vh] border-t-0">
        <div className="flex flex-col h-full">
          {/* Handle bar */}
          <div className="flex justify-center pt-3 pb-1">
            <div className="w-12 h-1.5 rounded-full bg-muted" />
          </div>

          <SheetHeader className="px-6 pb-4 pt-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingCart className="w-5 h-5 text-primary" />
                <SheetTitle className="text-xl font-bold text-foreground text-left">Meu Carrinho</SheetTitle>
              </div>
              {items.length > 0 && (
                <button onClick={clearCart} className="text-muted-foreground hover:text-destructive touch-manipulation p-1.5 rounded-full hover:bg-destructive/10 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>
          </SheetHeader>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-4 pb-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                  <ShoppingCart className="w-8 h-8 text-muted-foreground" />
                </div>
                <p className="text-sm font-semibold text-foreground mb-0.5">Seu carrinho está vazio</p>
                <p className="text-xs text-muted-foreground mb-4">Adicione produtos para continuar</p>
                <Button onClick={() => { onOpenChange(false); }} variant="outline" size="sm">
                  Explorar produtos
                </Button>
              </div>
            ) : (
              <div className="space-y-3">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3 bg-card rounded-2xl p-3 shadow-soft animate-fade-in">
                    <div className="w-20 h-20 bg-muted rounded-xl overflow-hidden flex-shrink-0 p-1.5">
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <span className="text-[10px] font-bold uppercase text-primary">{item.brand}</span>
                          <h3 className="font-semibold text-foreground text-sm leading-tight line-clamp-2">{item.name}</h3>
                          <span className="text-[11px] text-muted-foreground">{item.weight}</span>
                        </div>
                        <button className="text-muted-foreground hover:text-destructive touch-manipulation p-1 rounded-full hover:bg-destructive/10 transition-colors" onClick={() => removeItem(item.id)}>
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <p className="font-bold text-foreground text-sm">{formatPrice(item.price * item.quantity)}</p>
                        <div className="flex items-center gap-1.5 bg-primary rounded-full px-1 py-0.5">
                          <button className="w-6 h-6 rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/10 touch-manipulation transition-colors" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-bold text-xs w-4 text-center text-primary-foreground">{item.quantity}</span>
                          <button className="w-6 h-6 rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/10 touch-manipulation transition-colors" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-border bg-card">
              <Collapsible open={couponOpen} onOpenChange={setCouponOpen}>
                <CollapsibleContent className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  <div className="px-4 pt-3 pb-2">
                    <div className="flex items-center gap-2 mb-2">
                      <Ticket className="w-4 h-4 text-primary" />
                      <span className="text-sm font-semibold text-foreground">Cupom de desconto</span>
                    </div>
                    <div className="flex gap-2">
                      <input type="text" placeholder="Digite o código" className="flex-1 h-9 px-3 rounded-lg bg-muted text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20" />
                      <Button size="sm" className="rounded-lg text-xs">Aplicar Cupom</Button>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>

              <div className="px-4 py-3 space-y-1.5">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="text-foreground">{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Frete</span>
                  <span className="text-muted-foreground">A definir</span>
                </div>
                <div className="flex justify-between text-sm items-center">
                  <Collapsible open={couponOpen} onOpenChange={setCouponOpen}>
                    <CollapsibleTrigger asChild>
                      <button className="flex items-center gap-1.5 text-primary text-sm font-medium touch-manipulation transition-colors hover:text-primary/80">
                        <Ticket className="w-3.5 h-3.5" />
                        Inserir cupom
                        <ChevronUp className={`w-3.5 h-3.5 transition-transform duration-200 ${couponOpen ? '' : 'rotate-180'}`} />
                      </button>
                    </CollapsibleTrigger>
                  </Collapsible>
                  <span className="text-success font-medium">- {formatPrice(0)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-2 border-t border-border">
                  <span className="text-foreground">TOTAL</span>
                  <span className="text-primary">{formatPrice(totalPrice)}</span>
                </div>
              </div>

              <div className="px-4 pb-4 flex gap-3">
                <Button variant="outline" className="flex-1" onClick={() => onOpenChange(false)}>Voltar</Button>
                <Button className="flex-1">Concluir Pagamento</Button>
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
