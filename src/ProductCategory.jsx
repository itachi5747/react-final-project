import React from 'react';
import PlantCard from './PlantCard.jsx';

// Product Category Component
const ProductCategory = ({ title, plants }) => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plants.map(plant => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;