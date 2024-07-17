// src/components/ProductList.js
import React from "react";
import ProductItem from "./ProductItem";
import { useInventory } from "../contexts/InventoryContext";

function ProductList() {
  const { products } = useInventory();

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
