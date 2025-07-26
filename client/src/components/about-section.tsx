import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-text-dark mb-6">
              The Power of <span className="text-primary">Abacus Learning</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Abacus learning is more than just math - it's a comprehensive cognitive development program 
              that enhances mental abilities, improves concentration, and builds confidence in problem-solving.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                  <Check className="text-white h-3 w-3" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-dark">Enhanced Memory</h4>
                  <p className="text-gray-600">Strengthens visual and working memory through bead manipulation</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center mt-1">
                  <Check className="text-white h-3 w-3" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-dark">Improved Concentration</h4>
                  <p className="text-gray-600">Develops sustained attention and focus through practice</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                  <Check className="text-white h-3 w-3" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-dark">Faster Calculations</h4>
                  <p className="text-gray-600">Mental math becomes intuitive and lightning-fast</p>
                </div>
              </div>
            </div>
            
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg transform hover:scale-105 transition-all duration-200 px-8 py-4 text-lg"
              data-testid="button-learn-more"
            >
              Learn More About Our Method
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
              alt="Students learning with abacus" 
              className="rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
              data-testid="img-students-learning"
            />
            <img 
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
              alt="Traditional abacus beads" 
              className="rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 mt-8"
              data-testid="img-traditional-abacus"
            />
            <img 
              src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
              alt="Digital learning interface" 
              className="rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 -mt-8"
              data-testid="img-digital-learning"
            />
            <img 
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
              alt="Student celebrating learning success" 
              className="rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
              data-testid="img-student-celebrating"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
