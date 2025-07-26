import { Gamepad2, Brain, TrendingUp } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-text-dark mb-4">
            Why Choose AbacusLearn?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform combines traditional abacus methods with modern technology to create an engaging learning experience
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-2xl text-center hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Gamepad2 className="text-white h-8 w-8" />
            </div>
            <h3 className="text-xl font-poppins font-semibold text-text-dark mb-4">
              Interactive Learning
            </h3>
            <p className="text-gray-600">
              Gamified lessons that make learning abacus fun and engaging for students of all ages
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 p-8 rounded-2xl text-center hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <Brain className="text-white h-8 w-8" />
            </div>
            <h3 className="text-xl font-poppins font-semibold text-text-dark mb-4">
              Cognitive Development
            </h3>
            <p className="text-gray-600">
              Enhance memory, concentration, and mental calculation abilities through structured practice
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-accent/5 to-accent/10 p-8 rounded-2xl text-center hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="text-white h-8 w-8" />
            </div>
            <h3 className="text-xl font-poppins font-semibold text-text-dark mb-4">
              Progress Tracking
            </h3>
            <p className="text-gray-600">
              Monitor learning progress with detailed analytics and personalized feedback
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
