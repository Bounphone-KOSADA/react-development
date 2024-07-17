import React from 'react';

function ProductItem({ product, onAddToCart }) {
  console.log(`Rendering ProductItem: ${product.name}`);
  return (
    <div className="product-item">
      <h3>{product.name}</h3>
      <p>Price: ${product.price.toFixed(2)}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default React.memo(ProductItem);