import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Eye } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice: number | null;
  quantity: number;
  description: string;
  material: string;
  gemstone: string | null;
  weight: string;
  image: string;
  featured: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <Card className="group overflow-hidden border-gold/20 bg-card hover:shadow-gold transition-all duration-500 hover:-translate-y-1">
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {product.originalPrice && (
            <Badge className="absolute top-3 left-3 bg-destructive text-destructive-foreground">
              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
            </Badge>
          )}
          {product.quantity <= 3 && (
            <Badge variant="outline" className="absolute top-3 right-3 bg-background/90 border-gold text-gold">
              Only {product.quantity} left
            </Badge>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
            <span className="text-white flex items-center gap-2 text-sm">
              <Eye className="w-4 h-4" /> View Details
            </span>
          </div>
        </div>
      </Link>
      
      <CardContent className="p-5 space-y-3">
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-widest text-gold font-medium">{product.material}</p>
          <h3 className="font-serif text-lg font-semibold text-foreground leading-tight">{product.name}</h3>
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
        
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-gold">₹{product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
          )}
        </div>
        
        <Button 
          onClick={handleAddToCart}
          className="w-full bg-gold hover:bg-gold/90 text-primary-foreground gap-2"
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
