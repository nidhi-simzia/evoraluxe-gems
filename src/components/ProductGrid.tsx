import { useState } from "react";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import productsData from "@/data/products.json";

const ProductGrid = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const { categories, products } = productsData;
  
  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="collections" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Our Collections</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Exquisite Jewelry
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Button
            variant={activeCategory === "all" ? "default" : "outline"}
            onClick={() => setActiveCategory("all")}
            className={activeCategory === "all" 
              ? "bg-gold hover:bg-gold/90 text-primary-foreground" 
              : "border-gold/30 hover:bg-gold/10 hover:text-gold"
            }
          >
            All Pieces
          </Button>
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={activeCategory === cat.id ? "default" : "outline"}
              onClick={() => setActiveCategory(cat.id)}
              className={activeCategory === cat.id 
                ? "bg-gold hover:bg-gold/90 text-primary-foreground" 
                : "border-gold/30 hover:bg-gold/10 hover:text-gold"
              }
            >
              <span className="mr-2">{cat.icon}</span>
              {cat.name}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="text-center text-muted-foreground py-12">
            No products found in this category.
          </p>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
