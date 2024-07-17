import React from 'react';
import { useParams } from 'react-router-dom';
import { useInventory } from '../contexts/InventoryContext';

function ProductDetail() {
  const { id } = useParams();
  const { products } = useInventory();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price: ${product.price.toFixed(2)}</p>
      <p>In Stock: {product.stock}</p>
    </div>
  );
}

export default ProductDetail;