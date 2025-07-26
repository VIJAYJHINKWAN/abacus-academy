import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-text-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-poppins font-bold text-primary mb-4">
              AbacusLearn
            </h3>
            <p className="text-gray-300 mb-4">
              Empowering students worldwide with interactive abacus learning experiences.
            </p>
            <div className="flex space-x-4">
              <button className="text-gray-300 hover:text-primary transition-colors duration-200" data-testid="link-facebook">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="text-gray-300 hover:text-primary transition-colors duration-200" data-testid="link-twitter">
                <Twitter className="h-5 w-5" />
              </button>
              <button className="text-gray-300 hover:text-primary transition-colors duration-200" data-testid="link-instagram">
                <Instagram className="h-5 w-5" />
              </button>
              <button className="text-gray-300 hover:text-primary transition-colors duration-200" data-testid="link-youtube">
                <Youtube className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="font-poppins font-semibold mb-4">Platform</h4>
            <ul className="space-y-2">
              <li><button className="text-gray-300 hover:text-white transition-colors duration-200 text-left" data-testid="link-simulator">Interactive Simulator</button></li>
              <li><button className="text-gray-300 hover:text-white transition-colors duration-200 text-left" data-testid="link-modules">Learning Modules</button></li>
              <li><button className="text-gray-300 hover:text-white transition-colors duration-200 text-left" data-testid="link-tracking">Progress Tracking</button></li>
              <li><button className="text-gray-300 hover:text-white transition-colors duration-200 text-left" data-testid="link-mobile-app">Mobile App</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-poppins font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><button className="text-gray-300 hover:text-white transition-colors duration-200 text-left" data-testid="link-getting-started">Getting Started</button></li>
              <li><button className="text-gray-300 hover:text-white transition-colors duration-200 text-left" data-testid="link-tutorials">Video Tutorials</button></li>
              <li><button className="text-gray-300 hover:text-white transition-colors duration-200 text-left" data-testid="link-exercises">Practice Exercises</button></li>
              <li><button className="text-gray-300 hover:text-white transition-colors duration-200 text-left" data-testid="link-parent-guide">Parent Guide</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-poppins font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><button className="text-gray-300 hover:text-white transition-colors duration-200 text-left" data-testid="link-help-center">Help Center</button></li>
              <li><button className="text-gray-300 hover:text-white transition-colors duration-200 text-left" data-testid="link-contact">Contact Us</button></li>
              <li><button className="text-gray-300 hover:text-white transition-colors duration-200 text-left" data-testid="link-community">Community</button></li>
              <li><button className="text-gray-300 hover:text-white transition-colors duration-200 text-left" data-testid="link-feedback">Feedback</button></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300">© 2024 AbacusLearn. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button className="text-gray-300 hover:text-white transition-colors duration-200" data-testid="link-privacy">Privacy Policy</button>
            <button className="text-gray-300 hover:text-white transition-colors duration-200" data-testid="link-terms">Terms of Service</button>
            <button className="text-gray-300 hover:text-white transition-colors duration-200" data-testid="link-cookies">Cookie Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
