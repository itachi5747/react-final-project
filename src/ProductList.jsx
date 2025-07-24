import React from 'react';
import Header from './Header.jsx';
import ProductCategory from './ProductCategory.jsx';
import { plantsData } from './plantsData.js';

// Products Page Component
const ProductList = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage="products" onNavigate={onNavigate} />
      
      <div className="container mx-auto py-8 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Plant Collection</h1>
          <p className="text-xl text-gray-600">Discover the perfect plants for your home</p>
        </div>

        <ProductCategory title="Succulents" plants={plantsData.succulents} />
        <ProductCategory title="Flowering Plants" plants={plantsData.flowering} />
        <ProductCategory title="Foliage Plants" plants={plantsData.foliage} />
      </div>
    </div>
  );
};

export default ProductList;