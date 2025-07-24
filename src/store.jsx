import React, { useReducer, createContext, useContext } from 'react';
import { cartReducer, cartActions, cartSelectors } from './cartslice.jsx';

// Context for cart management
const CartContext = createContext();

// Cart Provider Component
export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, {});

  const addToCart = (plant) => {
    dispatch(cartActions.addToCart(plant));
  };

  const updateQuantity = (plantId, newQuantity) => {
    dispatch(cartActions.updateQuantity(plantId, newQuantity));
  };

  const removeFromCart = (plantId) => {
    dispatch(cartActions.removeFromCart(plantId));
  };

  const clearCart = () => {
    dispatch(cartActions.clearCart());
  };

  const getTotalItems = () => {
    return cartSelectors.getTotalItems(cart);
  };

  const getTotalCost = () => {
    return cartSelectors.getTotalCost(cart);
  };

  const getCartItems = () => {
    return cartSelectors.getCartItems(cart);
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart,
      getTotalItems,
      getTotalCost,
      getCartItems
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