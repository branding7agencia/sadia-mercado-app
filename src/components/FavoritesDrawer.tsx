import { Heart } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';

interface FavoritesDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function FavoritesDrawer({ open, onOpenChange }: FavoritesDrawerProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="rounded-t-3xl p-0 max-h-[85vh] border-t-0">
        <div className="flex flex-col h-full">
          {/* Handle bar */}
          <div className="flex justify-center pt-3 pb-1">
            <div className="w-12 h-1.5 rounded-full bg-muted" />
          </div>

          <SheetHeader className="px-6 pb-4 pt-2">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-primary" />
              <SheetTitle className="text-xl font-bold text-foreground text-left">Meus Favoritos</SheetTitle>
            </div>
          </SheetHeader>

          {/* Favorites list */}
          <div className="flex-1 overflow-y-auto px-4 pb-8">
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-muted-foreground" />
              </div>
              <p className="text-sm font-semibold text-foreground mb-0.5">Nenhum favorito ainda</p>
              <p className="text-xs text-muted-foreground">Adicione produtos aos favoritos e eles aparecerão aqui</p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
