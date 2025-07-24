import React from 'react';
import { useCart } from './store.jsx';

// Plant Card Component
const PlantCard = ({ plant }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={plant.image}
        alt={plant.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{plant.name}</h3>
        <p className="text-2xl font-bold text-green-600 mb-3">${plant.price}</p>
        <button
          onClick={() => addToCart(plant)}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default PlantCard;