import { Home, Search, Heart, User, ShoppingBag } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

type NavItem = 'home' | 'search' | 'favorites' | 'cart' | 'profile';

interface BottomNavProps {
  active: NavItem;
  onNavigate: (item: NavItem) => void;
}

export function BottomNav({ active, onNavigate }: BottomNavProps) {
  const { totalItems, setIsOpen } = useCart();

  const navItems = [
    { id: 'home' as NavItem, icon: Home, label: 'Início' },
    { id: 'search' as NavItem, icon: Search, label: 'Buscar' },
    { id: 'favorites' as NavItem, icon: Heart, label: 'Favoritos' },
    { id: 'cart' as NavItem, icon: ShoppingBag, label: 'Carrinho', badge: totalItems },
    { id: 'profile' as NavItem, icon: User, label: 'Perfil' },
  ];

  const handleClick = (item: NavItem) => {
    if (item === 'cart') {
      setIsOpen(true);
    } else {
      onNavigate(item);
    }
  };

  return (
    <nav className="fixed bottom-0 inset-x-0 bg-card border-t border-border safe-area-inset-bottom z-40">
      <div className="flex items-center justify-around h-16 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;

          return (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`flex flex-col items-center justify-center gap-1 flex-1 py-2 transition-all relative ${
                isActive ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              <div className="relative">
                <Icon
                  className={`w-6 h-6 transition-all ${
                    isActive ? 'scale-110' : ''
                  }`}
                  strokeWidth={isActive ? 2.5 : 2}
                />
                {item.badge && item.badge > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
                    {item.badge > 9 ? '9+' : item.badge}
                  </span>
                )}
              </div>
              <span className={`text-[10px] font-medium ${
                isActive ? 'text-primary' : 'text-muted-foreground'
              }`}>
                {item.label}
              </span>
              
              {/* Active indicator */}
              {isActive && (
                <div className="absolute -top-px left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
