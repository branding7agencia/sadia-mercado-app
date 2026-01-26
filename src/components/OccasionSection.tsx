import { occasions } from '@/data/products';

export function OccasionSection() {
  return (
    <section className="py-4">
      <div className="px-4 mb-3">
        <h2 className="text-lg font-bold text-foreground">Para qual ocasião?</h2>
        <p className="text-sm text-muted-foreground">Encontre o produto ideal</p>
      </div>

      <div className="grid grid-cols-2 gap-3 px-4 sm:grid-cols-4">
        {occasions.map((occasion) => (
          <button
            key={occasion.id}
            className="bg-card rounded-2xl p-4 shadow-soft hover:shadow-card transition-all active:scale-[0.98] flex flex-col items-center gap-2"
          >
            <span className="text-3xl">{occasion.emoji}</span>
            <span className="text-sm font-medium text-foreground text-center">
              {occasion.name}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
