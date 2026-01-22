import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, MessageCircle, ChevronRight, ArrowLeft } from "lucide-react";
import { useCart } from "@/context/CartContext";
import productsData from "@/data/products.json";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  
  const product = productsData.products.find(p => p.id === Number(id));
  
  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 pt-32 text-center">
          <h1 className="text-2xl font-serif">Product not found</h1>
          <Link to="/collections" className="text-gold hover:underline mt-4 inline-block">
            ← Back to Collections
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const whatsappNumber = "8485918272";
  const message = `Hi! I'm interested in purchasing the "${product.name}" (₹${product.price.toLocaleString()}). Please share more details.`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/collections" className="hover:text-gold transition-colors">Collections</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{product.name}</span>
          </nav>

          {/* Back Button */}
          <Link 
            to="/collections" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Collections
          </Link>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {product.originalPrice && (
                <Badge className="absolute top-4 left-4 bg-destructive text-destructive-foreground text-lg px-4 py-1">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </Badge>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <p className="text-gold uppercase tracking-[0.3em] text-sm mb-2">{product.material}</p>
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {product.name}
                </h1>
                <p className="text-lg text-muted-foreground">{product.description}</p>
              </div>

              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-bold text-gold">₹{product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>

              {product.quantity <= 5 && (
                <Badge variant="outline" className="border-gold text-gold">
                  Only {product.quantity} left in stock
                </Badge>
              )}

              {/* Specifications */}
              <div className="border-t border-b border-border py-6 space-y-4">
                <h3 className="font-serif text-lg font-semibold">Specifications</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Material</span>
                    <p className="font-medium">{product.material}</p>
                  </div>
                  {product.gemstone && (
                    <div>
                      <span className="text-muted-foreground">Gemstone</span>
                      <p className="font-medium">{product.gemstone}</p>
                    </div>
                  )}
                  {product.weight && (
                    <div>
                      <span className="text-muted-foreground">Weight</span>
                      <p className="font-medium">{product.weight}</p>
                    </div>
                  )}
                  <div>
                    <span className="text-muted-foreground">Category</span>
                    <p className="font-medium capitalize">{product.category}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleAddToCart}
                  className="flex-1 bg-gold hover:bg-gold/90 text-primary-foreground gap-2 h-14 text-lg"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </Button>
                <Button 
                  asChild
                  className="flex-1 bg-whatsapp hover:bg-whatsapp/90 text-white gap-2 h-14 text-lg"
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    Buy Now via WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default ProductDetail;
