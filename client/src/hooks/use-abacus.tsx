import { useState, useCallback } from "react";

export interface Bead {
  id: string;
  value: number;
  isActive: boolean;
  type: 'heaven' | 'earth';
  column: number;
  position: number;
}

export interface AbacusColumn {
  heavenBead: Bead;
  earthBeads: Bead[];
}

export function useAbacus() {
  const [columns, setColumns] = useState<AbacusColumn[]>(() => {
    return Array.from({ length: 5 }, (_, columnIndex) => ({
      heavenBead: {
        id: `heaven-${columnIndex}`,
        value: 5,
        isActive: false,
        type: 'heaven' as const,
        column: columnIndex,
        position: 0,
      },
      earthBeads: Array.from({ length: 4 }, (_, beadIndex) => ({
        id: `earth-${columnIndex}-${beadIndex}`,
        value: 1,
        isActive: false,
        type: 'earth' as const,
        column: columnIndex,
        position: beadIndex,
      })),
    }));
  });

  const [currentValue, setCurrentValue] = useState(0);
  const [currentProblem, setCurrentProblem] = useState("Calculate: 7 + 3");

  const calculateValue = useCallback((cols: AbacusColumn[]) => {
    let total = 0;
    cols.forEach((column, index) => {
      const multiplier = Math.pow(10, cols.length - 1 - index);
      let columnValue = 0;
      
      if (column.heavenBead.isActive) {
        columnValue += column.heavenBead.value;
      }
      
      column.earthBeads.forEach(bead => {
        if (bead.isActive) {
          columnValue += bead.value;
        }
      });
      
      total += columnValue * multiplier;
    });
    return total;
  }, []);

  const toggleBead = useCallback((beadId: string) => {
    setColumns(prevColumns => {
      const newColumns = prevColumns.map(column => ({
        ...column,
        heavenBead: column.heavenBead.id === beadId 
          ? { ...column.heavenBead, isActive: !column.heavenBead.isActive }
          : column.heavenBead,
        earthBeads: column.earthBeads.map(bead => 
          bead.id === beadId 
            ? { ...bead, isActive: !bead.isActive }
            : bead
        ),
      }));

      const newValue = calculateValue(newColumns);
      setCurrentValue(newValue);
      return newColumns;
    });
  }, [calculateValue]);

  const resetAbacus = useCallback(() => {
    setColumns(prevColumns => 
      prevColumns.map(column => ({
        ...column,
        heavenBead: { ...column.heavenBead, isActive: false },
        earthBeads: column.earthBeads.map(bead => ({ ...bead, isActive: false })),
      }))
    );
    setCurrentValue(0);
  }, []);

  const checkAnswer = useCallback(() => {
    // Simple example - in a real app, this would check against the current problem
    const correctAnswer = 10; // This would come from parsing currentProblem
    return currentValue === correctAnswer;
  }, [currentValue]);

  const generateNewProblem = useCallback(() => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCurrentProblem(`Calculate: ${num1} + ${num2}`);
  }, []);

  return {
    columns,
    currentValue,
    currentProblem,
    toggleBead,
    resetAbacus,
    checkAnswer,
    generateNewProblem,
  };
}
