import { useState, useMemo } from 'react';
import { Header } from '@/components/Header';
import { StoriesSection } from '@/components/StoriesSection';
import { BannerCarousel } from '@/components/BannerCarousel';
import { CategoryCarousel } from '@/components/CategoryCarousel';
import { OffersGrid } from '@/components/OffersGrid';
import { ProductSection } from '@/components/ProductSection';
import { ProductGrid } from '@/components/ProductGrid';
import { RecipesSection } from '@/components/RecipesSection';
import { CartSheet } from '@/components/CartSheet';
import { BottomNav } from '@/components/BottomNav';
import { products, classicProducts, bestSellerProducts } from '@/data/products';

type NavItem = 'home' | 'favorites' | 'cart' | 'brands' | 'menu';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activeNav, setActiveNav] = useState<NavItem>('home');

  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return products;
    return products.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-background pb-24">
      <Header />

      <main className="space-y-2">
        {/* Stories - product offers */}
        <StoriesSection />

        {/* Banner carousel */}
        <BannerCarousel />

        {/* Categories */}
        <CategoryCarousel
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* Offers grid with horizontal scroll */}
        {!selectedCategory && <OffersGrid />}

        {/* Clássica, prática e irresistível */}
        {!selectedCategory && (
          <ProductSection
            title="Clássica, prática e irresistível"
            subtitle="Produtos icônicos da Sadia"
            products={classicProducts}
          />
        )}

        {/* Mais vendidos */}
        {!selectedCategory && (
          <ProductSection
            title="Mais vendidos"
            subtitle="Os favoritos dos nossos clientes"
            products={bestSellerProducts}
          />
        )}

        {/* Recipes section */}
        {!selectedCategory && <RecipesSection />}

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
