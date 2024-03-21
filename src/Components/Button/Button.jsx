import React from 'react';

function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className="bg-yellow-400 px-6 py-2 rounded-lg font-sans text-xl text-gray-700 hover:bg-black hover:bg-opacity-25">
      {children}
    </button>
  );
}

export default Button;
