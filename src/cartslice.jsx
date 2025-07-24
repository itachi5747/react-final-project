// Cart slice - contains all cart-related logic and state management
export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        [action.payload.id]: {
          ...action.payload,
          quantity: (state[action.payload.id]?.quantity || 0) + 1
        }
      };

    case 'UPDATE_QUANTITY':
      if (action.payload.quantity <= 0) {
        const newState = { ...state };
        delete newState[action.payload.plantId];
        return newState;
      }
      return {
        ...state,
        [action.payload.plantId]: {
          ...state[action.payload.plantId],
          quantity: action.payload.quantity
        }
      };

    case 'REMOVE_FROM_CART':
      const newState = { ...state };
      delete newState[action.payload.plantId];
      return newState;

    case 'CLEAR_CART':
      return {};

    default:
      return state;
  }
};

// Action creators
export const cartActions = {
  addToCart: (plant) => ({
    type: 'ADD_TO_CART',
    payload: plant
  }),

  updateQuantity: (plantId, quantity) => ({
    type: 'UPDATE_QUANTITY',
    payload: { plantId, quantity }
  }),

  removeFromCart: (plantId) => ({
    type: 'REMOVE_FROM_CART',
    payload: { plantId }
  }),

  clearCart: () => ({
    type: 'CLEAR_CART'
  })
};

// Cart selectors/helpers
export const cartSelectors = {
  getTotalItems: (cart) => {
    return Object.values(cart).reduce((total, item) => total + item.quantity, 0);
  },

  getTotalCost: (cart) => {
    return Object.values(cart).reduce((total, item) => total + (item.price * item.quantity), 0);
  },

  getCartItems: (cart) => {
    return Object.values(cart);
  },

  getItemCount: (cart, plantId) => {
    return cart[plantId]?.quantity || 0;
  }
};