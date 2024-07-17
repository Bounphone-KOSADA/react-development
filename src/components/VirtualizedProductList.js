import React from 'react';
import { FixedSizeList as List } from 'react-window';
import ProductItem from './ProductItem';

function VirtualizedProductList({ products, onAddToCart }) {
  const Row = ({ index, style }) => (
    <div style={style}>
      <ProductItem product={products[index]} onAddToCart={onAddToCart} />
    </div>
  );

  return (
    <List
      height={400}
      itemCount={products.length}
      itemSize={100}
      width={300}
    >
      {Row}
    </List>
  );
}

export default VirtualizedProductList;