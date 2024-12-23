import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import './Calculator.css';



const Calculator = () => {
  const btnAll = ['C', '(', ')', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '00', '.', '=' ];

  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  
  const handleClick = (value) => {
    if (value === '=') {
      try {
        setInput(result); // Use with caution: Avoid eval in production!
      } catch {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prev) => {
        prev += value;
        try {
          setResult(evaluate(prev));  // Use with caution: Avoid eval in production!
        } catch {
          setResult('0');
        }
        return prev;
      });
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input || '0'}</div>
        <div className="result">{result !== input ? result : '0'}</div>
      </div>
      <div className="buttons">
        {btnAll.map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
