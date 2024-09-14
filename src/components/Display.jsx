import React from 'react';

const Display = ({ input, history }) => {
  return (
    <div className="bg-black text-white p-4 text-right rounded-lg text-xl overflow-y-auto min-h-56 h-48 max-h-64 scrollbar-hide">
      <div className="text-white text-opacity-70 text-sm">
        {history.slice().reverse().map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>

      {/* Show the current input/result at the bottom */}
      <div className="mt-4">{input || '0'}</div>
    </div>
  );
};

export default Display;
