import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import ProductCard from "./ProductCard";
import productsData from "@/data/products.json";

const FeaturedProducts = () => {
  const featuredProducts = productsData.products.filter(p => p.featured);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Bestsellers</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Pieces
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our most sought-after creations, handpicked for their exceptional beauty and craftsmanship.
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {featuredProducts.map((product) => (
              <CarouselItem key={product.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 border-gold/30 hover:bg-gold/10 hover:text-gold" />
          <CarouselNext className="hidden md:flex -right-12 border-gold/30 hover:bg-gold/10 hover:text-gold" />
        </Carousel>
      </div>
    </section>
  );
};

export default FeaturedProducts;
