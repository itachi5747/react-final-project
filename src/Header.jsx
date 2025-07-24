import React from 'react';
import { ShoppingCart, Leaf } from 'lucide-react';
import { useCart } from './store.jsx';

// Header Component
const Header = ({ currentPage, onNavigate }) => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <header className="bg-green-700 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Leaf className="h-8 w-8" />
          <h1 className="text-2xl font-bold">Paradise Nursery</h1>
        </div>
        
        <nav className="flex items-center space-x-6">
          {currentPage !== 'landing' && (
            <>
              {currentPage !== 'products' && (
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-green-200 transition-colors"
                >
                  Products
                </button>
              )}
              
              {currentPage !== 'cart' && (
                <button
                  onClick={() => onNavigate('cart')}
                  className="flex items-center space-x-2 hover:text-green-200 transition-colors relative"
                >
                  <ShoppingCart className="h-6 w-6" />
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      {totalItems}
                    </span>
                  )}
                </button>
              )}
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;