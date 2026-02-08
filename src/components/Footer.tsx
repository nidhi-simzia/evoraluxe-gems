import { Diamond, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/leaf.png";
import {Link} from "react-router-dom";

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
              <Link to="/" className="flex items-center gap-2 group">
                <img
                    src={logo}
                    alt="EvoraLuxe"
                    /* Increased from h-16 to h-20, and adjusted desktop height for better ratio */
                    className="h-20 md:h-32 w-auto transition-transform duration-300 group-hover:scale-105"
                />
                <span className="font-serif text-m md:text-xl font-bold tracking-wide whitespace-nowrap">
                  <span className="text-gold">ÉVORA</span>
                  <span className="text-gold"> LUXE</span>
                </span>
              </Link>
            </a>
            <p className="text-background/70 mb-6">
              Where luxury meets artistry.
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
              {[
                { label: "Home", href: "/" },
                { label: "Collections", href: "/collections" },
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
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
                <span className="text-background/70">+91 848 591 8272</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold" />
                <span className="text-background/70">support@theevoraluxe.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-background/70">Vadodara</span>
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
