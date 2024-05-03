// NumberContext.js
import React, { createContext, useState, useContext } from 'react';

const NumberContext = createContext();

export const NumberProvider = ({ children }) => {
  const [number, setNumber] = useState(0);
  const [editID, setEditID] = useState(0);
  const [inventoryEdit, setInventoryEdit] = useState("");
  const [galleryPostId, setGalleryPostId] = useState("")
  const [user, setUser] = useState([])

  console.log(number);
  const updateNumber = (index) => {
    setNumber(index);
  };
  const updateNumberEditID = (index) => {
    setEditID(index);
  };
  const updateGalleryPostID = (index) => {
    setGalleryPostId(index);
  };
  const InventoryNumberEditID = (id) => {
    console.log("id", id);
    setInventoryEdit(id);
  };
  const updateUser = (user) => {
    setUser(user);
  }
console.log(user);
  return (
    <NumberContext.Provider value={{ editID, number, user  , galleryPostId , inventoryEdit, updateNumber, updateGalleryPostID,  updateUser , updateNumberEditID, InventoryNumberEditID }}>
      {children}
    </NumberContext.Provider>
  );
};

export const useNumber = () => useContext(NumberContext);
