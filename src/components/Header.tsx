import { Search, ShoppingCart, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

export function Header() {
  const { totalItems, setIsOpen } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-card shadow-soft safe-area-inset-top">
      {/* Top bar with location */}
      <div className="bg-primary px-4 py-2">
        <button className="flex items-center gap-2 text-primary-foreground text-sm">
          <MapPin className="w-4 h-4" />
          <span className="font-medium">Entregar em:</span>
          <span className="underline">Adicionar CEP</span>
        </button>
      </div>

      {/* Main header */}
      <div className="px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-button">
              <span className="text-primary-foreground font-bold text-xl">M</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-foreground leading-tight">Mercato</h1>
              <p className="text-xs text-muted-foreground">em Casa</p>
            </div>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar produtos..."
                className="w-full h-11 pl-10 pr-4 bg-muted rounded-xl text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
          </div>

          {/* Cart button */}
          <Button
            variant="icon"
            size="icon"
            className="relative"
            onClick={() => setIsOpen(true)}
          >
            <ShoppingCart className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center animate-scale-in">
                {totalItems}
              </span>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
