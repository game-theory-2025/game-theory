// MatrixInput.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function MatrixInput({ rows, cols, setRows, setCols, setMatrix1, setMatrix2 }) {
  const [localRows, setLocalRows] = useState(rows);
  const [localCols, setLocalCols] = useState(cols);
  const [localMatrix1, setLocalMatrix1] = useState([]);
  const [localMatrix2, setLocalMatrix2] = useState([]);

  useEffect(() => {
    setLocalRows(rows);
    setLocalCols(cols);
  }, [rows, cols]);

  useEffect(() => {
    if (localRows && localCols) {
      const newMatrix1 = Array(parseInt(localRows)).fill(null).map(() => Array(parseInt(localCols)).fill(0));
      const newMatrix2 = Array(parseInt(localRows)).fill(null).map(() => Array(parseInt(localCols)).fill(0));
      setLocalMatrix1(newMatrix1);
      setLocalMatrix2(newMatrix2);
    }
  }, [localRows, localCols]);

  const handleInputChange = (e, rowIndex, colIndex, matrixNumber) => {
    const value = parseFloat(e.target.value);
    if (matrixNumber === 1) {
      const updatedMatrix = localMatrix1.map((row, rIndex) =>
        rIndex === rowIndex ? row.map((cell, cIndex) => (cIndex === colIndex ? value : cell)) : row
      );
      setLocalMatrix1(updatedMatrix);
    } else {
      const updatedMatrix = localMatrix2.map((row, rIndex) =>
        rIndex === rowIndex ? row.map((cell, cIndex) => (cIndex === colIndex ? value : cell)) : row
      );
      setLocalMatrix2(updatedMatrix);
    }
  };

  const handleDimensionsChange = (e, dimension) => {
    const value = e.target.value;
    if (dimension === 'rows') {
      setRows(value);
      setLocalRows(value);
    } else {
      setCols(value);
      setLocalCols(value);
    }
  };

  useEffect(() => {
    setMatrix1(localMatrix1);
  }, [localMatrix1, setMatrix1]);

  useEffect(() => {
    setMatrix2(localMatrix2);
  }, [localMatrix2, setMatrix2]);

  return (
    <div>
      <div className='flex gap-4 items-center'>
        <label>Rows: </label>
        <input className='w-[3em]' type="number" value={localRows} onChange={(e) => handleDimensionsChange(e, 'rows')} />
        <label>Cols: </label>
        <input className='w-[3em]' type="number" value={localCols} onChange={(e) => handleDimensionsChange(e, 'cols')} />
      </div>

      <div className="grid gap-2 mt-10">
        {localMatrix1.length > 0 && <h2 className='font-bold'>Matrix 1</h2>}
        {localMatrix1.map((row, rowIndex) => (
          <motion.div 
            key={`row1-${rowIndex}`} 
            className="flex gap-2" 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
          >
            {row.map((cell, colIndex) => (
              <input
                className='w-[3em]'
                key={`cell1-${rowIndex}-${colIndex}`}
                type="number"
                value={localMatrix1[rowIndex][colIndex]}
                onChange={(e) => handleInputChange(e, rowIndex, colIndex, 1)}
              />
            ))}
          </motion.div>
        ))}
        
        {localMatrix2.length > 0 && <h2 className='mt-6 font-bold'>Matrix 2</h2>}
        {localMatrix2.map((row, rowIndex) => (
          <motion.div 
            key={`row2-${rowIndex}`} 
            className="flex gap-2" 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
          >
            {row.map((cell, colIndex) => (
              <input
                className='w-[3em]'
                key={`cell2-${rowIndex}-${colIndex}`}
                type="number"
                value={localMatrix2[rowIndex][colIndex]}
                onChange={(e) => handleInputChange(e, rowIndex, colIndex, 2)}
              />
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default MatrixInput;