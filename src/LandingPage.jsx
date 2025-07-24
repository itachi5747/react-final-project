import React from 'react';
import Header from './Header.jsx';

// Landing Page Component
const LandingPage = ({ onNavigate }) => {
  return (
    <div className="min-h-screen">
      <Header currentPage="landing" onNavigate={onNavigate} />
      
      <div 
        className="min-h-screen bg-cover bg-center bg-fixed flex items-center justify-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920&h=1080&fit=crop")'
        }}
      >
        <div className="text-center text-white p-8 bg-black bg-opacity-40 rounded-lg max-w-2xl mx-4">
          <h1 className="text-5xl font-bold mb-6">Paradise Nursery</h1>
          <p className="text-xl mb-8 leading-relaxed">
            Welcome to Paradise Nursery, where we bring nature's beauty into your home. 
            We specialize in premium houseplants that transform your living space into 
            a green oasis. From easy-care succulents to stunning flowering plants, 
            discover the perfect companions for your indoor garden. Our carefully 
            selected plants are healthy, vibrant, and ready to thrive in your home.
          </p>
          <button
            onClick={() => onNavigate('products')}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors shadow-lg"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;