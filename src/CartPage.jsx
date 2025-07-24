import React from 'react';
import { ShoppingCart, ArrowLeft } from 'lucide-react';
import Header from './Header.jsx';
import CartItem from './CartItem.jsx';
import { useCart } from './store.jsx';

// Cart Page Component
const CartPage = ({ onNavigate }) => {
  const { cart, getTotalItems, getTotalCost } = useCart();
  const cartItems = Object.values(cart);
  const totalItems = getTotalItems();
  const totalCost = getTotalCost();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage="cart" onNavigate={onNavigate} />
      
      <div className="container mx-auto py-8 px-4">
        <div className="flex items-center mb-8">
          <button
            onClick={() => onNavigate('products')}
            className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Products</span>
          </button>
        </div>

        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingCart className="h-24 w-24 text-gray-400 mx-auto mb-4" />
            <p className="text-xl text-gray-600 mb-8">Your cart is empty</p>
            <button
              onClick={() => onNavigate('products')}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md h-fit">
              <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
              
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span>Total Items:</span>
                  <span className="font-semibold">{totalItems}</span>
                </div>
                <div className="flex justify-between text-xl font-bold border-t pt-2">
                  <span>Total Cost:</span>
                  <span className="text-green-600">${totalCost.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <button
                  onClick={() => onNavigate('products')}
                  className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-4 rounded-lg transition-colors"
                >
                  Continue Shopping
                </button>
                
                <button
                  onClick={() => alert('Checkout functionality would be implemented here!')}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;