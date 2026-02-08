import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Award, Heart, Shield, Gem, Sparkles, Users } from "lucide-react";

const values = [
  {
    icon: Gem,
    title: "Premium Quality",
    description: "We source only the finest anti-tarnish and silver-coated materials, ensuring every piece maintains its brilliance through daily wear."
  },
  {
    icon: Award,
    title: "Expert Craftsmanship",
    description: "Each jewel is carefully designed and crafted with attention to detail, blending modern trends with timeless elegance."
  },
  {
    icon: Shield,
    title: "Trusted & Authentic",
    description: "Every product undergoes strict quality checks before reaching you. What you see is exactly what you get."
  },
  {
    icon: Heart,
    title: "Customer First",
    description: "Your satisfaction is our priority. From packaging to delivery, we ensure a delightful experience every time."
  },
  {
    icon: Sparkles,
    title: "Affordable Luxury",
    description: "We believe luxury shouldn't break the bank. Our pieces offer premium feel at prices that make you smile."
  },
  {
    icon: Users,
    title: "Growing Community",
    description: "Thousands of happy customers trust Évora Luxe for their everyday jewelry needs. Join our family today."
  }
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Our Story</p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
            About <span className="text-gold">Évora Luxe</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Born from a passion for elegant, everyday jewelry, Évora Luxe brings you premium anti-tarnish 
            and silver-coated pieces that are designed to shine through every moment of your life.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/products/gem-set.PNG"
                  alt="Évora Luxe jewelry collection"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold/30 rounded-2xl -z-10" />
            </div>

            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Where Luxury Meets <span className="text-gold">Everyday Elegance</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                At Évora Luxe, we believe that beautiful jewelry shouldn't be reserved for special occasions. 
                Our mission is to create stunning, durable pieces that you can wear confidently every single day.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Every piece in our collection is crafted with anti-tarnish technology and premium silver coating, 
                so your jewelry looks as radiant on day 100 as it did on day one. From the office to a night out, 
                our designs transition seamlessly with your lifestyle.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Based in Vadodara, we've grown from a small passion project to a trusted name loved by thousands 
                of women across India and beyond. Each order is packed with love, care, and a little surprise to 
                make your unboxing moment special.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-12 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">What We Stand For</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="group p-6 bg-card border border-gold/20 rounded-2xl hover:shadow-gold transition-all duration-300">
                <div className="p-3 rounded-xl bg-gold/10 text-gold w-fit mb-4 group-hover:bg-gold group-hover:text-primary-foreground transition-colors">
                  <value.icon className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default AboutPage;
