import { Home, Heart, ShoppingCart, Star, Menu } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useNavigate } from 'react-router-dom';

type NavItem = 'home' | 'favorites' | 'cart' | 'brands' | 'menu';

interface BottomNavProps {
  active: NavItem;
  onNavigate: (item: NavItem) => void;
}

export function BottomNav({ active, onNavigate }: BottomNavProps) {
  const { totalItems } = useCart();
  const navigate = useNavigate();

  const navItems = [
    { id: 'home' as NavItem, icon: Home, label: 'Home' },
    { id: 'favorites' as NavItem, icon: Heart, label: 'Favoritos' },
    { id: 'cart' as NavItem, icon: ShoppingCart, label: 'Carrinho', badge: totalItems, isCenter: true },
    { id: 'brands' as NavItem, icon: Star, label: 'Meus Favoritos' },
    { id: 'menu' as NavItem, icon: Menu, label: 'Menu' },
  ];

  const handleClick = (item: NavItem) => {
    if (item === 'cart') {
      navigate('/cart');
    } else {
      onNavigate(item);
    }
  };

  return (
    <nav className="fixed bottom-0 inset-x-0 bg-card border-t border-border safe-area-inset-bottom z-40">
      <div className="flex items-center justify-around h-20 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          const isCenter = item.isCenter;

          if (isCenter) {
            // Center cart button - highlighted
            return (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className="relative -mt-6 flex flex-col items-center"
              >
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-button relative">
                  <Icon className="w-6 h-6 text-primary-foreground" strokeWidth={2} />
                  {item.badge !== undefined && item.badge > 0 && (
                    <span className="absolute -top-1 -right-1 min-w-[20px] h-5 bg-destructive text-destructive-foreground text-[11px] font-bold rounded-full flex items-center justify-center px-1 shadow-sm">
                      {item.badge > 99 ? '99+' : item.badge}
                    </span>
                  )}
                </div>
                <span className="text-[10px] font-medium text-primary mt-1">
                  {item.label}
                </span>
              </button>
            );
          }

          return (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`flex flex-col items-center justify-center gap-1 flex-1 py-2 transition-all ${
                isActive ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              <Icon
                className={`w-5 h-5 transition-all ${isActive ? 'scale-110' : ''}`}
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span className={`text-[10px] font-medium ${
                isActive ? 'text-primary' : 'text-muted-foreground'
              }`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
