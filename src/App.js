// src/App.js
import React from 'react';
import ProductSearch from './components/ProductSearch';
import UserAuth from './components/UserAuth';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { UserProvider } from './contexts/UserContext';
import { CartProvider } from './contexts/CartContext';
import { InventoryProvider } from './contexts/InventoryContext';
import './App.css';

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <InventoryProvider>
          <div className="App">
            <h1>ReactShop</h1>
            <UserAuth />
            <ProductSearch />
            <ProductList />
            <Cart />
          </div>
        </InventoryProvider>
      </CartProvider>
    </UserProvider>
  );
}

export default App;