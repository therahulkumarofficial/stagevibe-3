// src/components/ui/Input.jsx
import React from 'react';

const Input = ({ ...props }) => {
  return (
    <input
      className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      {...props}
    />
  );
};

export default Input;