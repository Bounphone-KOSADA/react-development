import React, { useState, useEffect } from 'react';
import { useInventory } from '../contexts/InventoryContext';

function Products() {
  const { products } = useInventory();
  const [sortedProducts, setSortedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const sortProducts = () => {
      // Simulate an intensive computation
      console.log('Sorting products...');
      const sorted = [...products].sort((a, b) => a.price - b.price);
      
      // Simulate a delay
      setTimeout(() => {
        if (isMounted) {
          setSortedProducts(sorted);
          setIsLoading(false);
        }
      }, 1000);
    };

    sortProducts();

    return () => {
      isMounted = false;
    };
  }, [products]);

  if (isLoading) {
    return <div>Loading products...</div>;
  }

  return (
    <div>
      <h1>Our Products</h1>
      {sortedProducts.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}

export default Products;