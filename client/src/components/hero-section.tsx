import { Button } from "@/components/ui/button";
import { Play, Video } from "lucide-react";

export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center relative overflow-hidden"
    >
      {/* Floating background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-accent/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-secondary/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-primary/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-poppins font-bold text-text-dark leading-tight mb-6">
              Master <span className="text-primary">Abacus</span> Skills with Interactive Learning
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Join thousands of students learning mental math through our engaging, game-like abacus platform. 
              Build confidence, improve calculation speed, and develop cognitive skills.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-primary text-white hover:bg-primary/90 transform hover:scale-105 transition-all duration-200 shadow-lg px-8 py-4 text-lg"
                data-testid="button-start-learning"
              >
                <Play className="mr-2 h-5 w-5" />
                Start Learning
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-all duration-200 px-8 py-4 text-lg"
                data-testid="button-watch-demo"
              >
                <Video className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center mt-8 space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary" data-testid="stat-students">10K+</div>
                <div className="text-sm text-gray-600">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary" data-testid="stat-success-rate">95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent" data-testid="stat-rating">4.9★</div>
                <div className="text-sm text-gray-600">Rating</div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in" style={{animationDelay: '0.5s'}}>
            <img 
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Interactive learning environment" 
              className="rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-300"
              data-testid="img-hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
