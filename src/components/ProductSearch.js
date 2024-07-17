// src/components/ProductSearch.js
import React, { useState } from 'react';
import { useInventory } from '../contexts/InventoryContext';

function ProductSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const { searchProducts } = useInventory();

  const handleSubmit = (e) => {
    e.preventDefault();
    searchProducts(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for products"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default ProductSearch;