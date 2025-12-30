import { Diamond, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const whatsappNumber = "1234567890";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi! I'd like to know more about your jewelry collection.")}`;

  return (
    <footer id="contact" className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a href="/" className="flex items-center gap-2 mb-6">
              <Diamond className="w-8 h-8 text-gold" />
              <span className="font-serif text-2xl font-bold">
                <span className="text-gold">LUXE</span>
                <span className="text-background">GEMS</span>
              </span>
            </a>
            <p className="text-background/70 mb-6">
              Crafting timeless pieces of elegance since 1990. Where luxury meets artistry.
            </p>
            <Button 
              asChild
              className="bg-whatsapp hover:bg-whatsapp/90 text-white gap-2"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" />
                Chat with Us
              </a>
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-gold">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "Collections", "About Us", "Contact"].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(" ", "")}`}
                    className="text-background/70 hover:text-gold transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-gold">Categories</h3>
            <ul className="space-y-3">
              {["Rings", "Necklaces", "Earrings", "Bracelets"].map((cat) => (
                <li key={cat}>
                  <a 
                    href="#collections"
                    className="text-background/70 hover:text-gold transition-colors"
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-gold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold" />
                <span className="text-background/70">+91 123 456 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold" />
                <span className="text-background/70">hello@luxegems.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-background/70">123 Diamond Street, Jewel District, Mumbai 400001</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/20 text-center">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} LuxeGems. All rights reserved. Crafted with ♥ for jewelry lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
