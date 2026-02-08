import { Link } from "react-router-dom";
import { Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import productsData from "@/data/products.json";

const FeaturedSection = () => {
  const { addToCart } = useCart();
  const { formatPrice } = useCurrency();
  const featuredProducts = productsData.products.filter(p => p.featured).slice(0, 4);

  return (
    <section className="py-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Customer Favorites</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Most Loved Pieces
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-card rounded-2xl overflow-hidden border border-gold/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-4 right-4 z-10 bg-rose-gold/90 text-white p-2 rounded-full">
                <Heart className="w-4 h-4 fill-current" />
              </div>
              <Link to={`/product/${product.id}`}>
                <div className="aspect-square overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
              </Link>
              <div className="p-5">
                <p className="text-xs uppercase tracking-widest text-gold mb-1">{product.material}</p>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2 line-clamp-1">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gold">{formatPrice(product.price, product.priceUSD)}</span>
                  <Button
                    size="sm"
                    className="bg-gold hover:bg-gold/90 text-primary-foreground"
                    onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image })}
                  >
                    Add
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg" className="border-gold/50 hover:bg-gold/10 gap-2">
            <Link to="/collections">
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
