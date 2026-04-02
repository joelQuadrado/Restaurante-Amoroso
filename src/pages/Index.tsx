import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Header />
    <HeroSection />
    <AboutSection />
    <GallerySection />
    <LocationSection />
    <Footer />
  </div>
);

export default Index;
