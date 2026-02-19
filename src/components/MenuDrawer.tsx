import { MapPin, CreditCard, Star, PartyPopper, UtensilsCrossed, Shield, FileText, X, ChevronRight } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';

interface MenuDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const menuItems = [
  { icon: MapPin, label: 'Meus endereços', description: 'Gerencie seus endereços de entrega' },
  { icon: CreditCard, label: 'Formas de pagamento', description: 'Cartões e métodos salvos' },
  { icon: Star, label: 'Marcas', description: 'Explore nossas marcas parceiras' },
  { icon: PartyPopper, label: 'Ocasiões', description: 'Encontre produtos para cada momento' },
  { icon: UtensilsCrossed, label: 'Receitas', description: 'Inspire-se com nossas receitas' },
  { icon: Shield, label: 'Políticas de privacidade', description: 'Como protegemos seus dados' },
  { icon: FileText, label: 'Termos e condições de uso', description: 'Regras e condições do serviço' },
];

export function MenuDrawer({ open, onOpenChange }: MenuDrawerProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="rounded-t-3xl p-0 max-h-[85vh] border-t-0">
        <div className="flex flex-col h-full">
          {/* Handle bar */}
          <div className="flex justify-center pt-3 pb-1">
            <div className="w-12 h-1.5 rounded-full bg-muted" />
          </div>

          <SheetHeader className="px-6 pb-4 pt-2">
            <SheetTitle className="text-xl font-bold text-foreground text-left">Menu</SheetTitle>
          </SheetHeader>

          {/* Menu items */}
          <div className="flex-1 overflow-y-auto px-4 pb-8">
            <div className="space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.label}
                    className="w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl hover:bg-muted/60 active:bg-muted transition-colors duration-200 group"
                    onClick={() => onOpenChange(false)}
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                      <Icon className="w-5 h-5 text-primary" strokeWidth={1.8} />
                    </div>
                    <div className="flex-1 text-left">
                      <span className="text-sm font-semibold text-foreground block">{item.label}</span>
                      <span className="text-xs text-muted-foreground">{item.description}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
