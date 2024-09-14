import React from 'react';

const Button = ({ value, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-slate-900 text-white hover:bg-slate-800 p-4 text-lg font-bold rounded-md"
    >
      {value}
    </button>
  );
};

export default Button;