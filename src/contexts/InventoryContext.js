// src/contexts/InventoryContext.js
import React, { createContext, useContext, useState } from 'react';

const InventoryContext = createContext();

export function InventoryProvider({ children }) {
  const [products] = useState([
    { id: 1, name: 'Laptop', price: 999.99, stock: 5 },
    { id: 2, name: 'Smartphone', price: 499.99, stock: 10 },
    { id: 3, name: 'Headphones', price: 99.99, stock: 15 },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const searchProducts = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm)
  );

  return (
    <InventoryContext.Provider value={{ products: filteredProducts, searchProducts }}>
      {children}
    </InventoryContext.Provider>
  );
}

export function useInventory() {
  const context = useContext(InventoryContext);
  if (context === undefined) {
    throw new Error('useInventory must be used within an InventoryProvider');
  }
  return context;
}