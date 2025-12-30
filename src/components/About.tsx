import { Award, Heart, Shield, Gem } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Gem,
      title: "Finest Materials",
      description: "Only the highest quality gemstones and precious metals"
    },
    {
      icon: Award,
      title: "Expert Craftsmanship",
      description: "Handcrafted by master jewelers with decades of experience"
    },
    {
      icon: Shield,
      title: "Certified Authentic",
      description: "Every piece comes with authentication and certification"
    },
    {
      icon: Heart,
      title: "Lifetime Warranty",
      description: "We stand behind our jewelry with comprehensive coverage"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/50 via-background to-gold/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800" 
                alt="Jewelry craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-gold/30 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gold/10 rounded-full blur-2xl" />
          </div>

          {/* Content */}
          <div>
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">About Us</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              A Legacy of <span className="text-gold">Luxury</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              For over three decades, LuxeGems has been synonymous with exceptional jewelry. 
              Our commitment to quality, innovation, and timeless design has made us a trusted 
              name among discerning collectors worldwide.
            </p>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Each piece in our collection is a testament to the art of fine jewelry making, 
              combining traditional techniques with contemporary aesthetics to create pieces 
              that will be treasured for generations.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="group">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-gold/10 text-gold group-hover:bg-gold group-hover:text-primary-foreground transition-colors">
                      <feature.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
