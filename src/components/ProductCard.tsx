import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

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
  const whatsappNumber = "1234567890"; // Replace with actual number
  const message = `Hi! I'm interested in purchasing the "${product.name}" (₹${product.price.toLocaleString()}). Please share more details.`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Card className="group overflow-hidden border-gold/20 bg-card hover:shadow-gold transition-all duration-500 hover:-translate-y-1">
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
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
          asChild
          className="w-full bg-whatsapp hover:bg-whatsapp/90 text-white gap-2"
        >
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-4 h-4" />
            Message to Buy
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
