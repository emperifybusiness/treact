// NumberContext.js
import React, { createContext, useState, useContext } from 'react';

const NumberContext = createContext();

export const NumberProvider = ({ children }) => {
  const [number, setNumber] = useState(0);
  const [editID, setEditID] = useState(0);
  const [inventoryEdit, setInventoryEdit] = useState("");
  console.log(number);
  const updateNumber = (index) => {
    setNumber(index);
  };
  const updateNumberEditID = (index) => {
    setEditID(index);
  };
  const InventoryNumberEditID = (id) => {
    console.log("id", id);
    setInventoryEdit(id);
  };

  return (
    <NumberContext.Provider value={{ editID , number, inventoryEdit ,  updateNumber , updateNumberEditID ,  InventoryNumberEditID }}>
      {children}
    </NumberContext.Provider>
  );
};

export const useNumber = () => useContext(NumberContext);
