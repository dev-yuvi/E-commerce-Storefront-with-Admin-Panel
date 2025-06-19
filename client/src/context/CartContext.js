
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = product => {
    setCartItems(prev => [...prev, product]);
  };

  const removeFromCart = product => {
    setCartItems(prev => prev.filter(item => item._id !== product._id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
