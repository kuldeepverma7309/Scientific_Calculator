import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';

const buttons = [
  ['7', '8', '9', 'C'],
  ['4', '5', '6', '%'],
  ['1', '2', '3', '/'],
  ['0', '.', '(', ')'],
  ['+', '-', '*', '='],
  ['sqrt', 'sin', 'cos', 'tan'],
  ['log', '^', 'π', 'clear'],
];

const Calculator = ({ calculate, history, setHistory }) => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === 'C') {
      setInput(''); // Clear input
    } else if (value === '=') {
      const output = calculate(input);
      setInput(output);
    } else if (value === 'π') {
      setInput((prev) => prev + Math.PI);
    } else if (value === 'sqrt') {
      setInput((prev) => prev + '√(');
    }else if(value === "clear"){
      setHistory([]);
      setInput("");
    }
     else {
      setInput((prev) => prev + value);
    }
  };

  return (
    <div className="p-4 max-w-lg w-full h-auto mx-auto bg-gray-100 rounded-lg shadow-lg">
      <Display input={input} history={history} />
      <div className="grid grid-cols-4 gap-2 mt-4">
        {buttons.flat().map((btn, index) => (
          <Button key={index} value={btn} onClick={() => handleClick(btn)} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
