import React from 'react';
import { Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from './store.jsx';

// Cart Item Component
const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md">
      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 object-cover rounded"
      />
      
      <div className="flex-1">
        <h3 className="font-semibold text-lg">{item.name}</h3>
        <p className="text-gray-600">${item.price} each</p>
      </div>
      
      <div className="flex items-center space-x-2">
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="bg-gray-200 hover:bg-gray-300 rounded-full p-1 transition-colors"
        >
          <Minus className="h-4 w-4" />
        </button>
        
        <span className="font-semibold text-lg px-3">{item.quantity}</span>
        
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="bg-gray-200 hover:bg-gray-300 rounded-full p-1 transition-colors"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
      
      <div className="text-right">
        <p className="font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</p>
        <button
          onClick={() => removeFromCart(item.id)}
          className="text-red-500 hover:text-red-700 mt-1 transition-colors"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;