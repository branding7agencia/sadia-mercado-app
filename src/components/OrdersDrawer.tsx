import { ClipboardList, Package, ChevronRight } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';

interface OrdersDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const mockOrders = [
  { id: '001', date: '18/02/2026', status: 'Entregue', total: 'R$ 89,90', items: 3 },
  { id: '002', date: '15/02/2026', status: 'Em trânsito', total: 'R$ 134,50', items: 5 },
  { id: '003', date: '10/02/2026', status: 'Entregue', total: 'R$ 56,00', items: 2 },
];

export function OrdersDrawer({ open, onOpenChange }: OrdersDrawerProps) {
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
              <ClipboardList className="w-5 h-5 text-primary" />
              <SheetTitle className="text-xl font-bold text-foreground text-left">Meus Pedidos</SheetTitle>
            </div>
          </SheetHeader>

          {/* Orders list */}
          <div className="flex-1 overflow-y-auto px-4 pb-8">
            {mockOrders.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                  <ClipboardList className="w-8 h-8 text-muted-foreground" />
                </div>
                <p className="text-sm font-semibold text-foreground mb-0.5">Nenhum pedido ainda</p>
                <p className="text-xs text-muted-foreground">Seus pedidos aparecerão aqui</p>
              </div>
            ) : (
              <div className="space-y-2">
                {mockOrders.map((order) => (
                  <button
                    key={order.id}
                    className="w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl bg-card shadow-soft hover:bg-muted/60 active:bg-muted transition-colors duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                      <Package className="w-5 h-5 text-primary" strokeWidth={1.8} />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-foreground">Pedido #{order.id}</span>
                        <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                          order.status === 'Entregue'
                            ? 'bg-success/10 text-success'
                            : 'bg-accent/20 text-accent-foreground'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-xs text-muted-foreground">{order.date}</span>
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="text-xs text-muted-foreground">{order.items} itens</span>
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="text-xs font-semibold text-foreground">{order.total}</span>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
