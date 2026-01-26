import { useState, useMemo } from 'react';
import { Header } from '@/components/Header';
import { CategoryCarousel } from '@/components/CategoryCarousel';
import { PromoBanner } from '@/components/PromoBanner';
import { ProductGrid } from '@/components/ProductGrid';
import { OccasionSection } from '@/components/OccasionSection';
import { CartSheet } from '@/components/CartSheet';
import { BottomNav } from '@/components/BottomNav';
import { products, promoProducts } from '@/data/products';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activeNav, setActiveNav] = useState<'home' | 'search' | 'favorites' | 'cart' | 'profile'>('home');

  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return products;
    return products.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-background pb-20">
      <Header />

      <main className="space-y-2">
        {/* Promo banner */}
        <PromoBanner />

        {/* Categories */}
        <CategoryCarousel
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* Occasion section */}
        {!selectedCategory && <OccasionSection />}

        {/* Promo products */}
        {!selectedCategory && promoProducts.length > 0 && (
          <ProductGrid
            products={promoProducts}
            title="🔥 Ofertas do Dia"
            subtitle="Aproveite os melhores preços"
          />
        )}

        {/* All/Filtered products */}
        <ProductGrid
          products={filteredProducts}
          title={selectedCategory ? 'Produtos' : 'Todos os Produtos'}
          subtitle={`${filteredProducts.length} produtos encontrados`}
        />
      </main>

      {/* Cart sheet */}
      <CartSheet />

      {/* Bottom navigation */}
      <BottomNav active={activeNav} onNavigate={setActiveNav} />
    </div>
  );
};

export default Index;
