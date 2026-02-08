import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import productsData from "@/data/products.json";

interface LookBundle {
  id: number;
  name: string;
  description: string;
  image: string;
  productIds: number[];
  bundlePrice?: number;
  bundlePriceUSD?: number;
}

const lookBundles: LookBundle[] = [
  {
    id: 1,
    name: "Aqua Grace Combo",
    description: "Where golden elegance meets sunlit serenity.",
    image: "/products/BRACELET-COMBO.PNG",
    productIds: [8, 18, 38],
    bundlePrice: 750,
    bundlePriceUSD: 15.99
  },
  {
    id: 2,
    name: "Golden Heart Necklace Stack",
    description: "Subtle elegance for your daily style",
    image: "/products/necklack-heart-combo.JPG",
    productIds: [15, 17 ],
    // bundlePriceUSD: 15.99
  },
  {
    id: 3,
    name: "Noir Clover Luxe Combo",
    description: "Bold black accents wrapped in timeless golden elegance.",
    image: "/products/braacelete-combo-black.JPG",
    productIds: [7, 37],
    // bundlePrice: 850,
    // bundlePriceUSD: 11
  }
];

const ShopTheLook = () => {
  const [selectedLook, setSelectedLook] = useState<LookBundle | null>(null);
  const { addToCart } = useCart();
  const { formatPrice, currency } = useCurrency();
  const { products } = productsData;

  const getLookProducts = (productIds: number[]) => {
    return products.filter(p => productIds.includes(p.id));
  };

  const getCalculatedTotal = (productIds: number[]) => {
    const lookProducts = getLookProducts(productIds);
    if (currency === "USD") {
      return lookProducts.reduce((sum, p) => sum + (p.priceUSD || 0), 0);
    }
    return lookProducts.reduce((sum, p) => sum + p.price, 0);
  };

  const getBundleDisplayPrice = (look: LookBundle) => {
    if (currency === "USD" && look.bundlePriceUSD) {
      return formatPrice(look.bundlePrice || 0, look.bundlePriceUSD);
    }
    if (look.bundlePrice) {
      return formatPrice(look.bundlePrice);
    }
    return formatPrice(getCalculatedTotal(look.productIds));
  };

  const hasDiscount = (look: LookBundle) => {
    const calculated = getCalculatedTotal(look.productIds);
    const bundle = currency === "USD" ? (look.bundlePriceUSD || calculated) : (look.bundlePrice || calculated);
    return bundle < calculated;
  };

  const handleAddAllToCart = (look: LookBundle) => {
    const lookProducts = getLookProducts(look.productIds);
    lookProducts.forEach(product => {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image
      });
    });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Curated Sets</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Shop The Look
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Expertly curated jewelry sets to complete your perfect look.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lookBundles.map((look, index) => {
            const lookProducts = getLookProducts(look.productIds);

            return (
              <div
                key={look.id}
                className="group relative rounded-2xl overflow-hidden bg-card border border-gold/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={look.image} alt={look.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    {lookProducts.slice(0, 4).map((product) => (
                      <div key={product.id} className="w-14 h-14 rounded-lg overflow-hidden border-2 border-white/30 bg-white/10 backdrop-blur-sm">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-1">{look.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{look.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-xs text-muted-foreground">{lookProducts.length} pieces</p>
                      <div className="flex items-center gap-2">
                        <p className="text-xl font-bold text-gold">{getBundleDisplayPrice(look)}</p>
                        {hasDiscount(look) && (
                          <p className="text-sm text-muted-foreground line-through">
                            {formatPrice(getCalculatedTotal(look.productIds))}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1 border-gold/30 hover:bg-gold/10" onClick={() => setSelectedLook(look)}>
                      <Eye className="w-4 h-4 mr-2" />View Set
                    </Button>
                    <Button className="flex-1 bg-gold hover:bg-gold/90 text-primary-foreground" onClick={() => handleAddAllToCart(look)}>
                      <ShoppingBag className="w-4 h-4 mr-2" />Add All
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Dialog open={!!selectedLook} onOpenChange={() => setSelectedLook(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedLook && (
            <>
              <DialogHeader>
                <DialogTitle className="font-serif text-2xl">{selectedLook.name}</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 mt-4">
                {getLookProducts(selectedLook.productIds).map((product) => (
                  <div key={product.id} className="flex gap-4 p-4 border border-gold/20 rounded-lg">
                    <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded-lg" />
                    <div className="flex-1">
                      <p className="text-xs uppercase tracking-wider text-gold">{product.material}</p>
                      <h4 className="font-serif font-semibold text-foreground">{product.name}</h4>
                      <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                      <p className="text-lg font-bold text-gold mt-1">{formatPrice(product.price, product.priceUSD)}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button size="sm" variant="outline" className="border-gold/30" asChild>
                        <Link to={`/product/${product.id}`}>View</Link>
                      </Button>
                      <Button size="sm" className="bg-gold hover:bg-gold/90 text-primary-foreground" onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image })}>
                        Add
                      </Button>
                    </div>
                  </div>
                ))}
                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div>
                    <p className="text-sm text-muted-foreground">Bundle price for {getLookProducts(selectedLook.productIds).length} pieces</p>
                    <div className="flex items-center gap-2">
                      <p className="text-2xl font-bold text-gold">{getBundleDisplayPrice(selectedLook)}</p>
                      {hasDiscount(selectedLook) && (
                        <p className="text-base text-muted-foreground line-through">{formatPrice(getCalculatedTotal(selectedLook.productIds))}</p>
                      )}
                    </div>
                  </div>
                  <Button size="lg" className="bg-gold hover:bg-gold/90 text-primary-foreground" onClick={() => { handleAddAllToCart(selectedLook); setSelectedLook(null); }}>
                    <ShoppingBag className="w-4 h-4 mr-2" />Add All to Cart
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ShopTheLook;
