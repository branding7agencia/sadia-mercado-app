import { Search, MapPin, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import mercatoLogo from '@/assets/mercato-logo-new.png';

export function Header() {
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 z-50 bg-card shadow-soft safe-area-inset-top">
      {/* Location bar */}
      <div className="bg-primary px-4 py-2">
        <div className="flex items-center gap-2 text-primary-foreground">
          <MapPin className="w-4 h-4" />
          <span className="text-sm font-medium truncate">
            Av. José Maria Whitaker, 798 - Planalto Paulista
          </span>
        </div>
      </div>

      {/* Main header */}
      <div className="px-4 py-1.5">
        <div className="flex items-center gap-3">
          {/* Logo - allowed to overflow header slightly */}
          <div className="flex-shrink-0 -my-2">
            <img
              src={mercatoLogo}
              alt="Mercato em Casa"
              className="h-14 w-14 object-contain"
            />
          </div>

          {/* Search bar */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar produtos..."
                className="w-full h-9 pl-10 pr-4 rounded-full bg-muted text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
          </div>

          {/* User icon */}
          <button
            onClick={() => navigate('/profile')}
            className="w-9 h-9 flex-shrink-0 rounded-full border border-muted-foreground flex items-center justify-center"
          >
            <User className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </div>
    </header>
  );
}
