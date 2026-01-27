import { Search, MapPin } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import mercatoLogo from '@/assets/mercato-logo.png';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-card shadow-soft safe-area-inset-top">
      {/* Location bar */}
      <div className="bg-primary px-4 py-2">
        <div className="flex items-center gap-2 text-primary-foreground">
          <MapPin className="w-4 h-4" />
          <span className="text-sm font-medium truncate">
            Rua Exemplo, 123 - Centro, São Paulo
          </span>
        </div>
      </div>

      {/* Main header */}
      <div className="px-4 py-3">
        <div className="flex items-center gap-3">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={mercatoLogo}
              alt="Mercato em Casa"
              className="h-10 w-10 object-contain"
            />
          </div>

          {/* Search bar */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar produtos..."
                className="w-full h-10 pl-10 pr-4 rounded-full bg-muted text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
          </div>

          {/* Avatar */}
          <Avatar className="w-10 h-10 flex-shrink-0">
            <AvatarFallback className="bg-primary text-primary-foreground font-semibold text-sm">
              MS
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
