import React, { useState } from 'react';
import ProductSearch from './components/ProductSearch';
import UserAuth from './components/UserAuth';
import ProductList from './components/ProductList';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [user, setUser] = useState(null);

  const products = [
    { id: 1, name: 'Laptop', price: 999.99 },
    { id: 2, name: 'Smartphone', price: 499.99 },
    { id: 3, name: 'Headphones', price: 99.99 },
  ];

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>ReactShop</h1>
      <UserAuth onLogin={setUser} />
      <ProductSearch onSearch={setSearchTerm} />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;