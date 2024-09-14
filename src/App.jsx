import React from 'react';
import Calculator from './components/Calculator';
import useCalculator from './hooks/useCalculator';

const App = () => {
  const [history, calculate, setHistory] = useCalculator();

  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-800 justify-center items-center">
      <h1 className="text-white text-2xl text-center font-bold my-4">Scientific Calculator</h1>
      <Calculator calculate={calculate} history={history} setHistory={setHistory} />
    </div>
  );
};

export default App;
