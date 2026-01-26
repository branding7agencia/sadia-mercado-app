import { Gift } from 'lucide-react';

export function PromoBanner() {
  return (
    <section className="px-4 py-2">
      <div className="gradient-accent rounded-2xl p-4 shadow-card relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute -right-8 -top-8 w-32 h-32 bg-secondary-foreground/5 rounded-full" />
        <div className="absolute -right-4 bottom-0 w-20 h-20 bg-secondary-foreground/5 rounded-full" />
        
        <div className="relative flex items-center gap-4">
          <div className="w-14 h-14 bg-secondary-foreground/10 rounded-2xl flex items-center justify-center">
            <Gift className="w-7 h-7 text-secondary-foreground" />
          </div>
          
          <div className="flex-1">
            <p className="text-secondary-foreground font-bold text-lg">
              15% OFF na primeira compra!
            </p>
            <p className="text-secondary-foreground/80 text-sm">
              Use o cupom: <span className="font-bold">COMPRA15</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
