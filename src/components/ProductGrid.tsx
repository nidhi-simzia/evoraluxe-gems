import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import productsData from "@/data/products.json";

const ProductGrid = () => {
  const { products } = productsData;
  
  // Show only first 8 products on home page
  const displayProducts = products.slice(0, 8);

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

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button 
            asChild
            size="lg" 
            className="bg-gold hover:bg-gold/90 text-primary-foreground gap-2"
          >
            <Link to="/collections">
              View All Collections
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
