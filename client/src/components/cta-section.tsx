import { Button } from "@/components/ui/button";
import { Rocket, Calendar } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
          Ready to Start Your Abacus Journey?
        </h2>
        <p className="text-lg text-white/90 mb-8 leading-relaxed">
          Join thousands of students who have transformed their math skills and cognitive abilities through our interactive platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            className="bg-white text-primary hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg px-8 py-4 text-lg"
            data-testid="button-start-trial"
          >
            <Rocket className="mr-2 h-5 w-5" />
            Start Free Trial
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-200 px-8 py-4 text-lg"
            data-testid="button-schedule-demo"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Schedule Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
