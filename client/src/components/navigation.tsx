import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-poppins font-bold text-primary">
                AbacusLearn
              </h1>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-text-dark hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                data-testid="nav-home"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('simulator')}
                className="text-text-dark hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                data-testid="nav-simulator"
              >
                Simulator
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-text-dark hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                data-testid="nav-about"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('blog')}
                className="text-text-dark hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                data-testid="nav-blog"
              >
                Blog
              </button>
              <Button
                className="bg-primary text-white hover:bg-primary/90 transform hover:scale-105 transition-all duration-200"
                data-testid="button-get-started"
              >
                Get Started
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => scrollToSection('home')}
              className="block text-text-dark hover:text-primary px-3 py-2 rounded-md text-base font-medium w-full text-left"
              data-testid="mobile-nav-home"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('simulator')}
              className="block text-text-dark hover:text-primary px-3 py-2 rounded-md text-base font-medium w-full text-left"
              data-testid="mobile-nav-simulator"
            >
              Simulator
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block text-text-dark hover:text-primary px-3 py-2 rounded-md text-base font-medium w-full text-left"
              data-testid="mobile-nav-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('blog')}
              className="block text-text-dark hover:text-primary px-3 py-2 rounded-md text-base font-medium w-full text-left"
              data-testid="mobile-nav-blog"
            >
              Blog
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
