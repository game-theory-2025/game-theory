// src/App.jsx
import React, { useState } from 'react';
import MatrixInput from '../components/MatrixInput';
import SortSelection from '../components/SortSelection';
import ResultDisplay from '../components/ResultDisplay';
import { processMatrices } from '../utils/logic';

function Home () {
  const [rows, setRows] = useState('');
  const [cols, setCols] = useState('');
  const [matrix1, setMatrix1] = useState([]);
  const [matrix2, setMatrix2] = useState([]);
  const [sortMethod, setSortMethod] = useState('merge_sort');
  const [result, setResult] = useState(null);
  const [sortedPayoffs, setSortedPayoffs] = useState(null);

  const handleCalculate = () => {
    const [resultText, sortedPayoffsArray] = processMatrices(matrix1, matrix2, sortMethod);
    setResult(resultText);
    setSortedPayoffs(sortedPayoffsArray);
  };

  return (
    <div className='flex flex-col gap-10'>
      <h1>Game Competitiveness Checker</h1>
      <MatrixInput
        rows={rows}
        cols={cols}
        setRows={setRows}
        setCols={setCols}
        setMatrix1={setMatrix1}
        setMatrix2={setMatrix2}
      />
      <SortSelection sortMethod={sortMethod} setSortMethod={setSortMethod} />
      <button className='w-[150px]' onClick={handleCalculate}>Calculate</button>
      <ResultDisplay result={result} sortedPayoffs={sortedPayoffs} />
    </div>
  );
}

export default Home;