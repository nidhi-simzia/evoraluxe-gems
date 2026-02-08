import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Eye, LayoutGrid, Grid3X3, Grid2X2, Search } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import productsData from "@/data/products.json";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

type ViewMode = "default" | "compact" | "minimal";

const ITEMS_PER_PAGE = 20;

const Collections = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<ViewMode>("default");
  const [searchQuery, setSearchQuery] = useState("");
  const { addToCart } = useCart();
  const { formatPrice } = useCurrency();
  
  const { categories, products } = productsData;
  
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      setActiveCategory(categoryParam);
      setCurrentPage(1);
    }
  }, [searchParams]);
  
  const filteredProducts = products.filter(p => {
    const matchesCategory = activeCategory === "all" || p.category === activeCategory;
    const matchesSearch = searchQuery === "" || 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.material.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const getGridClasses = () => {
    switch (viewMode) {
      case "compact":
        return "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5";
      case "minimal":
        return "grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6";
      default:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Browse Our</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Complete Collection
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-4" />
            <p className="text-muted-foreground">
              {/*Showing {filteredProducts.length} exquisite pieces*/}
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search jewelry..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pl-10 border-gold/30 focus:border-gold"
            />
          </div>

          {/* Filters Row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap justify-center gap-2">
              <Button
                variant={activeCategory === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => handleCategoryChange("all")}
                className={activeCategory === "all" 
                  ? "bg-gold hover:bg-gold/90 text-primary-foreground" 
                  : "border-gold/30 hover:bg-gold/10 hover:text-gold"
                }
              >
                All
              </Button>
              {categories.map((cat) => (
                <Button
                  key={cat.id}
                  variant={activeCategory === cat.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleCategoryChange(cat.id)}
                  className={activeCategory === cat.id 
                    ? "bg-gold hover:bg-gold/90 text-primary-foreground" 
                    : "border-gold/30 hover:bg-gold/10 hover:text-gold"
                  }
                >
                  <span className="mr-1">{cat.icon}</span>
                  {cat.name}
                </Button>
              ))}
            </div>

            <ToggleGroup type="single" value={viewMode} onValueChange={(v) => v && setViewMode(v as ViewMode)}>
              <ToggleGroupItem value="default" aria-label="Default view" className="data-[state=on]:bg-gold data-[state=on]:text-primary-foreground">
                <LayoutGrid className="w-4 h-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="compact" aria-label="Compact view" className="data-[state=on]:bg-gold data-[state=on]:text-primary-foreground">
                <Grid2X2 className="w-4 h-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="minimal" aria-label="Minimal view" className="data-[state=on]:bg-gold data-[state=on]:text-primary-foreground">
                <Grid3X3 className="w-4 h-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          {/* Products Grid */}
          <div className={`grid ${getGridClasses()} gap-4 mb-12`}>
            {paginatedProducts.map((product) => (
              <CollectionProductCard 
                key={product.id} 
                product={product} 
                viewMode={viewMode}
                onAddToCart={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image })}
                formatPrice={formatPrice}
              />
            ))}
          </div>

          {paginatedProducts.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
              <p className="text-lg">No products found matching your search.</p>
            </div>
          )}

          {totalPages > 1 && (
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      onClick={() => handlePageChange(page)}
                      isActive={currentPage === page}
                      className="cursor-pointer"
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext 
                    onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </div>
      </main>
      
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

interface CollectionProductCardProps {
  product: {
    id: number;
    name: string;
    category: string;
    price: number;
    priceUSD: number;
    originalPrice: number | null;
    originalPriceUSD: number | null;
    quantity: number;
    material: string;
    image: string;
  };
  viewMode: ViewMode;
  onAddToCart: () => void;
  formatPrice: (priceINR: number, priceUSD?: number) => string;
}

const CollectionProductCard = ({ product, viewMode, onAddToCart, formatPrice }: CollectionProductCardProps) => {
  if (viewMode === "minimal") {
    return (
      <Link to={`/product/${product.id}`}>
        <div className="group relative aspect-square rounded-lg overflow-hidden border border-gold/20 hover:border-gold/50 transition-all">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          {product.originalPrice && (
            <Badge className="absolute top-1 left-1 bg-destructive text-destructive-foreground text-xs px-1 py-0">Sale</Badge>
          )}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
            <Eye className="w-6 h-6 text-white" />
          </div>
        </div>
      </Link>
    );
  }

  if (viewMode === "compact") {
    return (
      <Link to={`/product/${product.id}`}>
        <div className="group relative rounded-lg overflow-hidden border border-gold/20 hover:border-gold/50 transition-all bg-card">
          <div className="aspect-square overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          </div>
          <div className="p-2">
            <p className="text-xs text-foreground line-clamp-1 font-medium">{product.name.split(' ').slice(0, 3).join(' ')}</p>
            <p className="text-sm font-bold text-gold">{formatPrice(product.price, product.priceUSD)}</p>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Card className="group overflow-hidden border-gold/20 bg-card hover:shadow-gold transition-all duration-500 hover:-translate-y-1">
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden aspect-square">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
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
            <span className="text-white flex items-center gap-2 text-sm"><Eye className="w-4 h-4" /> View Details</span>
          </div>
        </div>
      </Link>
      <CardContent className="p-5 space-y-3">
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-widest text-gold font-medium">{product.material}</p>
          <h3 className="font-serif text-lg font-semibold text-foreground leading-tight">{product.name}</h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-gold">{formatPrice(product.price, product.priceUSD)}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">{formatPrice(product.originalPrice, product.originalPriceUSD || undefined)}</span>
          )}
        </div>
        <Button onClick={(e) => { e.preventDefault(); onAddToCart(); }} className="w-full bg-gold hover:bg-gold/90 text-primary-foreground gap-2">
          <ShoppingCart className="w-4 h-4" />Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default Collections;
