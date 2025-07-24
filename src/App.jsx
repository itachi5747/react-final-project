import React, { useState } from 'react';
import { CartProvider } from './store.jsx';
import LandingPage from './LandingPage.jsx';
import ProductList from './ProductList.jsx';
import CartPage from './CartPage.jsx';

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('landing');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onNavigate={handleNavigation} />;
      case 'products':
        return <ProductList onNavigate={handleNavigation} />;
      case 'cart':
        return <CartPage onNavigate={handleNavigation} />;
      default:
        return <LandingPage onNavigate={handleNavigation} />;
    }
  };

  return (
    <CartProvider>
      <div className="App">
        {renderCurrentPage()}
      </div>
    </CartProvider>
  );
};

export default App;