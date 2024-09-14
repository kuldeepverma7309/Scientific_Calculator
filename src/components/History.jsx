// src/components/History.jsx
import React from 'react';
import useCalculator from '../hooks/useCalculator';

const History = () => {
  const [history] = useCalculator();
  console.log("History:", history);

  return (
    <div className="mt-4 p-4 w-full rounded-lg shadow-md">

      <ul className="text-sm text-gray-600">
        {history.map((item, index) => (
          <li key={index} className="mb-1">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default History;
