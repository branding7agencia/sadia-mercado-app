import { Search } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import mercatoLogo from '@/assets/mercato-logo.png';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-card shadow-soft safe-area-inset-top">
      {/* Main header */}
      <div className="px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          {/* Avatar */}
          <Avatar className="w-10 h-10 ring-2 ring-primary/20">
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" alt="User" />
            <AvatarFallback className="bg-muted text-muted-foreground font-semibold">
              U
            </AvatarFallback>
          </Avatar>

          {/* Logo */}
          <div className="flex-1 flex justify-center">
            <img
              src={mercatoLogo}
              alt="Mercato em Casa"
              className="h-10 object-contain"
            />
          </div>

          {/* Search button */}
          <button className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-muted/80 transition-colors">
            <Search className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </div>
    </header>
  );
}
