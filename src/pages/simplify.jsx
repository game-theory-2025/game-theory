// src/pages/Simplify.jsx
import { useState } from "react";
import MatrixInput from "../components/MatrixInput";
import { Game } from "../utils/Game";
import { motion, AnimatePresence } from "framer-motion";

export default function Simplify() {
  const [rows, setRows] = useState("");
  const [cols, setCols] = useState("");
  const [matrix1, setMatrix1] = useState([]);
  const [matrix2, setMatrix2] = useState([]);
  const [simplificationSteps, setSimplificationSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isSimple, setIsSimple] = useState(false);

  const handleCalculate = () => {
    const game = new Game(matrix1, matrix2);
    game.simplifyGame();

    setSimplificationSteps(game.simplificationSteps);
    setCurrentStep(0);
    setIsSimple(true);
  };

  const nextStep = () => {
    if (currentStep < simplificationSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="flex flex-col gap-10">
      <h1>Simplify Game</h1>

      <MatrixInput
        rows={rows}
        cols={cols}
        setRows={setRows}
        setCols={setCols}
        setMatrix1={setMatrix1}
        setMatrix2={setMatrix2}
      />

      <button className="w-[150px]" onClick={handleCalculate}>
        Calculate
      </button>

      {isSimple && (
        <div className="flex flex-col gap-4 md:w-1/3">
          <h3 className="font-bold">Step {currentStep + 1} of {simplificationSteps.length}</h3>
          {simplificationSteps[currentStep].action && (
            <p className="text-smitalic">
              Removed {simplificationSteps[currentStep].action.type} {simplificationSteps[currentStep].action.index + 1}
            </p>
          )}
          <AnimatePresence mode="wait">
            <motion.table
              key={currentStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="border-collapse border border-gray-300"
            >
              <tbody>
                {simplificationSteps[currentStep].matrix1.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((value, colIndex) => (
                      <td
                        key={colIndex}
                        className="border border-gray-300 text-center"
                      >
                        {value} , {simplificationSteps[currentStep].matrix2[rowIndex][colIndex]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </motion.table>
          </AnimatePresence>

          <div className="flex gap-4">
            <button
              className="px-4 py-1 border rounded"
              onClick={prevStep}
              disabled={currentStep === 0}
            >
              Prev
            </button>
            <button
              className="px-4 py-1 border rounded"
              onClick={nextStep}
              disabled={currentStep === simplificationSteps.length - 1}
            >
              Next
            </button>
          </div>

          
        </div>
      )}
    </div>
  );
}