import React, { useState, createContext, useContext } from 'react';

// Context for cart management
const CartContext = createContext();

// Cart Provider Component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  const addToCart = (plant) => {
    setCart(prev => ({
      ...prev,
      [plant.id]: {
        ...plant,
        quantity: (prev[plant.id]?.quantity || 0) + 1
      }
    }));
  };

  const updateQuantity = (plantId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(plantId);
    } else {
      setCart(prev => ({
        ...prev,
        [plantId]: {
          ...prev[plantId],
          quantity: newQuantity
        }
      }));
    }
  };

  const removeFromCart = (plantId) => {
    setCart(prev => {
      const newCart = { ...prev };
      delete newCart[plantId];
      return newCart;
    });
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalCost = () => {
    return Object.values(cart).reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      updateQuantity,
      removeFromCart,
      getTotalItems,
      getTotalCost
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};