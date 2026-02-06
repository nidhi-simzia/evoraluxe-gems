import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const VideoHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://videos.pexels.com/video-files/4125026/4125026-uhd_2560_1440_30fps.mp4"
          type="video/mp4"
        />
      </video>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-gold/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 border border-gold/40 mb-8 animate-fade-in backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-sm tracking-widest uppercase text-gold">Crafted with Love</span>
          </div>
          
          {/* Headline */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight animate-fade-in text-white" style={{ animationDelay: "0.2s" }}>
            <span>Where Elegance</span>
            <br />
            <span className="text-gold">Meets Artistry</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Discover handcrafted jewelry that captures life's precious moments. 
            Each piece is a testament to timeless beauty and exceptional craftsmanship.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button 
              size="lg" 
              className="bg-gold hover:bg-gold/90 text-primary-foreground px-8 py-6 text-lg tracking-wide"
              asChild
            >
              <a href="#categories">Explore Collections</a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/50 text-white hover:bg-white/10 px-8 py-6 text-lg tracking-wide backdrop-blur-sm"
              asChild
            >
              <a href="#about">Our Story</a>
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#categories" className="text-gold/80 hover:text-gold transition-colors">
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoHero;
