import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Eye } from "lucide-react";
import { useCart } from "@/context/CartContext";
import productsData from "@/data/products.json";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const ITEMS_PER_PAGE = 12;

const Collections = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const { addToCart } = useCart();
  
  const { categories, products } = productsData;
  
  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(p => p.category === activeCategory);

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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Browse Our</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Complete Collection
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-4" />
            <p className="text-muted-foreground">
              Showing {filteredProducts.length} exquisite pieces
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Button
              variant={activeCategory === "all" ? "default" : "outline"}
              onClick={() => handleCategoryChange("all")}
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
                onClick={() => handleCategoryChange(cat.id)}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {paginatedProducts.map((product) => (
              <Card key={product.id} className="group overflow-hidden border-gold/20 bg-card hover:shadow-gold transition-all duration-500 hover:-translate-y-1">
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
                  
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-gold">₹{product.price.toLocaleString()}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
                    )}
                  </div>
                  
                  <Button 
                    onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image })}
                    className="w-full bg-gold hover:bg-gold/90 text-primary-foreground gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
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

export default Collections;
