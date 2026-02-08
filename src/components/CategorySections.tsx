import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import productsData from "@/data/products.json";

const categoryImages: Record<string, string> = {
  rings: "/products/ring_cat.JPG",
  necklace: "/products/neck_cat.JPG",
  earrings: "/products/earrings_cat.JPG",
  bracelets: "/products/bracelet_cat.JPG",
  silver_jewels: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
};

const categoryDescriptions: Record<string, string> = {
  rings: "Elegant bands and statement pieces for every occasion",
  necklace: "Stunning pendants and chains that captivate",
  earrings: "From subtle studs to dramatic drops",
  bracelets: "Timeless cuffs and delicate chains",
  silver_jewels: "Premium sterling silver masterpieces",
};

const CategorySections = () => {
  const { categories, products } = productsData;

  return (
    <section id="categories" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Browse By</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Collections
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const productCount = products.filter(p => p.category === category.id).length;
            
            return (
              <Link
                key={category.id}
                to={`/collections?category=${category.id}`}
                className="group relative overflow-hidden rounded-2xl aspect-[4/5] animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Image */}
                <img
                  src={categoryImages[category.id] || categoryImages.rings}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  {/*<span className="text-4xl mb-3">{category.icon}</span>*/}
                  <h3 className="font-serif text-3xl font-bold text-white mb-2">
                    {category.name}
                  </h3>
                  <p className="text-white/70 text-sm mb-4">
                    {categoryDescriptions[category.id] || "Explore our collection"}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gold text-sm">{productCount} pieces</span>
                    <span className="inline-flex items-center gap-2 text-white group-hover:text-gold transition-colors">
                      Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
                
                {/* Hover Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/50 rounded-2xl transition-colors duration-300" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategorySections;
