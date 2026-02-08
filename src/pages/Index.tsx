import Header from "@/components/Header";
import VideoHero from "@/components/VideoHero";
import CategorySections from "@/components/CategorySections";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import FeaturedSection from "@/components/FeaturedSection";
import ShopTheLook from "@/components/ShopTheLook";
import About from "@/components/About";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <VideoHero />
      <CategorySections />
      <ReviewsCarousel />
      <FeaturedSection />
      <ShopTheLook />
      {/*<About />*/}
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
