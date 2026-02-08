import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Phone, Mail, MapPin, MessageCircle, Clock, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const whatsappNumber = "1234567890";
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi! I'd like to know more about your jewelry collection.")}`;

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Chat with us instantly for quick queries and orders.",
    detail: "+91 848 591 8272",
    action: { label: "Chat Now", href: whatsappUrl },
  },
  {
    icon: Mail,
    title: "Email",
    description: "Drop us an email and we'll respond within 24 hours.",
    detail: "support@theevoraluxe.com",
    action: { label: "Send Email", href: "mailto:support@theevoraluxe.com" },
  },
  {
    icon: Phone,
    title: "Phone",
    description: "Call us during business hours for personalized assistance.",
    detail: "+91 848 591 8272",
    action: { label: "Call Us", href: "tel:+918485918272" },
  },
  {
    icon: Instagram,
    title: "Instagram",
    description: "Follow us for latest designs, offers, and styling tips.",
    detail: "@theevoraluxe",
    action: { label: "Follow Us", href: "https://instagram.com/theevoraluxe" },
  },
];

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Get In Touch</p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
            Contact <span className="text-gold">Us</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            We'd love to hear from you! Whether you have a question about our products, 
            need styling advice, or want to place a custom order — reach out anytime.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {contactMethods.map((method) => (
              <div
                key={method.title}
                className="group p-6 bg-card border border-gold/20 rounded-2xl hover:shadow-gold transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gold/10 text-gold group-hover:bg-gold group-hover:text-primary-foreground transition-colors">
                    <method.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-1">{method.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                    <p className="text-gold font-medium mb-3">{method.detail}</p>
                    <Button asChild size="sm" variant="outline" className="border-gold/30 hover:bg-gold/10">
                      <a href={method.action.href} target="_blank" rel="noopener noreferrer">
                        {method.action.label}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-card border border-gold/20 rounded-2xl">
                <Clock className="w-8 h-8 text-gold mx-auto mb-4" />
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Business Hours</h3>
                <p className="text-muted-foreground">Monday – Saturday</p>
                <p className="text-muted-foreground">10:00 AM – 7:00 PM IST</p>
                <p className="text-sm text-muted-foreground mt-2">Sunday: Closed</p>
              </div>
              <div className="p-6 bg-card border border-gold/20 rounded-2xl">
                <MapPin className="w-8 h-8 text-gold mx-auto mb-4" />
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Our Location</h3>
                <p className="text-muted-foreground">Vadodara, Gujarat</p>
                <p className="text-muted-foreground">India</p>
                <p className="text-sm text-muted-foreground mt-2">Shipping Pan-India & International</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default ContactPage;
