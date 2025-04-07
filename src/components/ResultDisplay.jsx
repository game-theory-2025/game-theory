// src/ResultDisplay.jsx
import React from 'react';
import { motion } from 'framer-motion';

function ResultDisplay({ result, sortedPayoffs }) {
  return (
    <div>
      {result && <p>{result}</p>}
      {sortedPayoffs && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <h3>Sorted Payoff Tuples:</h3>
          <ul>
            {sortedPayoffs.map((tuple, index) => (
              <motion.li key={index} initial={{ y: -10 }} animate={{ y: 0 }} transition={{ duration: 0.3 }}>
                ({tuple.u1}, {tuple.u2})
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
}

export default ResultDisplay;