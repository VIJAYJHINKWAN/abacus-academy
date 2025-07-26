import { Button } from "@/components/ui/button";
import { RotateCcw, Check } from "lucide-react";
import { useAbacus } from "@/hooks/use-abacus";
import { useToast } from "@/hooks/use-toast";

export default function AbacusSimulator() {
  const { 
    columns, 
    currentValue, 
    currentProblem, 
    toggleBead, 
    resetAbacus, 
    checkAnswer, 
    generateNewProblem 
  } = useAbacus();
  
  const { toast } = useToast();

  const handleCheckAnswer = () => {
    const isCorrect = checkAnswer();
    if (isCorrect) {
      toast({
        title: "Correct!",
        description: "Great job! You got the right answer.",
        variant: "default",
      });
      generateNewProblem();
      resetAbacus();
    } else {
      toast({
        title: "Try Again",
        description: "That's not quite right. Keep practicing!",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="simulator" className="py-20 bg-gradient-to-br from-background to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-text-dark mb-4">
            Interactive Abacus Simulator
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Practice with our virtual abacus! Click the beads to perform calculations and see real-time results.
          </p>
        </div>
        
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl mx-auto">
          <div className="abacus-container bg-gradient-to-b from-amber-50 to-amber-100 rounded-2xl p-8 border-4 border-amber-200">
            <div className="abacus-frame bg-amber-800 rounded-lg p-6 shadow-inner">
              <div className="text-center mb-4">
                <h3 className="text-xl font-poppins font-semibold text-amber-900">
                  Virtual Abacus
                </h3>
              </div>
              
              {/* Upper deck (Heaven beads) */}
              <div className="upper-deck mb-4">
                <div className="flex justify-center space-x-8">
                  {columns.map((column, columnIndex) => (
                    <div key={`column-${columnIndex}`} className="column flex flex-col items-center">
                      <div className="rod bg-amber-900 w-2 h-16 rounded-full relative">
                        <button
                          className={`bead heaven-bead w-8 h-4 bg-red-600 rounded-full border-2 border-red-800 cursor-pointer hover:bg-red-500 transition-colors duration-200 absolute -left-3 top-2 ${
                            column.heavenBead.isActive ? 'active' : ''
                          }`}
                          onClick={() => toggleBead(column.heavenBead.id)}
                          data-testid={`bead-heaven-${columnIndex}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Crossbar */}
              <div className="crossbar bg-amber-900 h-2 rounded-full mb-4 shadow-md"></div>
              
              {/* Lower deck (Earth beads) */}
              <div className="lower-deck">
                <div className="flex justify-center space-x-8">
                  {columns.map((column, columnIndex) => (
                    <div key={`earth-column-${columnIndex}`} className="column flex flex-col items-center">
                      <div className="rod bg-amber-900 w-2 h-32 rounded-full relative">
                        {column.earthBeads.map((bead, beadIndex) => (
                          <button
                            key={bead.id}
                            className={`bead earth-bead w-8 h-4 bg-blue-600 rounded-full border-2 border-blue-800 cursor-pointer hover:bg-blue-500 transition-colors duration-200 absolute -left-3 ${
                              bead.isActive ? 'active' : ''
                            }`}
                            style={{ bottom: `${(beadIndex + 1) * 6 + 2}px` }}
                            onClick={() => toggleBead(bead.id)}
                            data-testid={`bead-earth-${columnIndex}-${beadIndex}`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Controls and Display */}
          <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="bg-gradient-to-r from-secondary to-accent text-white px-6 py-3 rounded-xl font-bold text-2xl min-w-32 text-center">
              <span data-testid="display-current-value">{currentValue}</span>
            </div>
            <div className="flex gap-4">
              <Button
                onClick={resetAbacus}
                className="bg-primary text-white hover:bg-primary/90 transition-colors duration-200"
                data-testid="button-reset"
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                Reset
              </Button>
              <Button
                onClick={handleCheckAnswer}
                className="bg-success text-white hover:bg-success/90 transition-colors duration-200"
                data-testid="button-check"
              >
                <Check className="mr-2 h-4 w-4" />
                Check
              </Button>
            </div>
          </div>
          
          {/* Practice Problems */}
          <div className="mt-8 bg-gradient-to-r from-accent/10 to-secondary/10 rounded-xl p-6">
            <h4 className="font-poppins font-semibold text-lg mb-4 text-center">
              Practice Problem
            </h4>
            <div className="text-center text-2xl font-bold text-text-dark" data-testid="text-current-problem">
              {currentProblem}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
