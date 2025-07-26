import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import AbacusSimulator from "@/components/abacus-simulator";
import AboutSection from "@/components/about-section";
import BlogSection from "@/components/blog-section";
import CtaSection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <AbacusSimulator />
      <AboutSection />
      <BlogSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
