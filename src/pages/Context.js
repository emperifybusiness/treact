// NumberContext.js
import React, { createContext, useState, useContext } from 'react';

const NumberContext = createContext();

export const NumberProvider = ({ children }) => {
  const [number, setNumber] = useState(0);
console.log(number);
  const updateNumber = (index) => {
    setNumber(index);
  };

  return (
    <NumberContext.Provider value={{ number, updateNumber }}>
      {children}
    </NumberContext.Provider>
  );
};

export const useNumber = () => useContext(NumberContext);
