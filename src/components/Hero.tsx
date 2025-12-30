import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-gold/5" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920')] bg-cover bg-center opacity-10" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-gold/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-sm tracking-widest uppercase text-gold">Handcrafted Excellence</span>
          </div>
          
          {/* Headline */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <span className="text-foreground">Timeless</span>
            <br />
            <span className="text-gold bg-gradient-to-r from-gold via-rose-gold to-gold bg-clip-text">Elegance</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Discover our exquisite collection of fine jewelry, where every piece tells a story of craftsmanship, 
            luxury, and eternal beauty.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button 
              size="lg" 
              className="bg-gold hover:bg-gold/90 text-primary-foreground px-8 py-6 text-lg tracking-wide"
              asChild
            >
              <a href="#collections">Explore Collection</a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-gold/50 text-foreground hover:bg-gold/10 px-8 py-6 text-lg tracking-wide"
              asChild
            >
              <a href="#about">Our Story</a>
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#collections" className="text-gold/60 hover:text-gold transition-colors">
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
