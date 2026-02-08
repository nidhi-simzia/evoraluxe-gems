import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  review: string;
  image: string;
  productImage: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Usha",
    location: "Ahmedabad",
    rating: 5,
    review: "Absolutely in love with my Evoraluxe silver and anti-tarnish jewellery — premium finish, no dulling, and it still looks brand new after everyday wear.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    productImage: "/products/butterfly_neck.PNG"
  },
  {
    id: 2,
    name: "Ansuya",
    location: "Vadodara",
    rating: 5,
    review: "Bought bracelets and earrings from Evoraluxe and I’m obsessed — elegant, lightweight, and they haven’t lost their shine even with daily wear.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
    productImage: "/products/black_white_bracelet.JPG"
  },
  {
    id: 3,
    name: "Zalak",
    location: "Rajkot",
    rating: 5,
    review: "I loved the packaging, the surprise gift from Evoraluxe was such a sweet touch, and every product is amazing — absolutely perfect for gifting.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80",
    productImage: "/products/tennis_bracelet.PNG"
  },
  {
    id: 4,
    name: "Monica",
    location: "Morbi",
    rating: 5,
    review: "Absolutely loved the rings, earrings, and the broad kada bracelet — stunning designs, premium feel, and perfect statement pieces for any occasion.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    productImage: "/products/kada-1.PNG"
  },
  {
    id: 5,
    name: "Ruchita",
    location: "Vadodara",
    rating: 5,
    review: "I’ve been wearing the everyday bracelet and earrings to office daily for the past 2 months, and the shine is still exactly the same — truly impressive quality.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80",
    productImage: "/products/pink-heart-necklace.PNG"
  }
];

const ReviewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  return (
    <section className="py-8 bg-gradient-to-b from-muted/20 to-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Testimonials</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review) => (
                <div key={review.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-card border border-gold/20 rounded-3xl p-8 md:p-12 shadow-lg">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      {/* Product Image */}
                      <div className="w-48 h-48 rounded-2xl overflow-hidden flex-shrink-0 border-2 border-gold/20">
                        <img
                          src={review.productImage}
                          alt="Purchased product"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Review Content */}
                      <div className="flex-1 text-center md:text-left">
                        <Quote className="w-10 h-10 text-gold/30 mb-4 mx-auto md:mx-0" />
                        
                        {/* Stars */}
                        <div className="flex gap-1 justify-center md:justify-start mb-4">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                          ))}
                        </div>

                        <p className="text-lg text-foreground/90 mb-6 leading-relaxed">
                          "{review.review}"
                        </p>

                        <div className="flex items-center gap-4 justify-center md:justify-start">
                          <div className="w-14 h-14 rounded-full border-2 border-gold/30 bg-gold/10 flex items-center justify-center">
                            <span className="font-serif text-lg font-bold text-gold">
                              {review.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <p className="font-serif text-lg font-semibold text-foreground">{review.name}</p>
                            <p className="text-sm text-muted-foreground">{review.location}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 rounded-full border-gold/30 hover:bg-gold/10 hover:border-gold"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 rounded-full border-gold/30 hover:bg-gold/10 hover:border-gold"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? "w-8 bg-gold" 
                    : "bg-gold/30 hover:bg-gold/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsCarousel;
