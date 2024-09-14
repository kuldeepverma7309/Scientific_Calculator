import React, { useState } from 'react';

const useCalculator = () => {
  const [history, setHistory] = useState([]);
  console.log('Initial history:', history);

  const calculate = (input) => {
    try {
      let parsedInput = input
        .replace('√', 'Math.sqrt')
        .replace('π', Math.PI)
        .replace('^', '**');

      const result = eval(parsedInput);
      setHistory((prev) => {
        const newHistory = [...prev, `${input} = ${result}`];
        console.log('Updated history:', newHistory);
        return newHistory;
      });
      return result.toString();
    } catch (error) {
      console.error('Calculation error:', error);
      return 'Error';
    }
  };

  return [history, calculate, setHistory];
};

export default useCalculator;