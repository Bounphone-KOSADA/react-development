import React from "react";
import { useCart } from "../contexts/CartContext";
import { useUser } from "../contexts/UserContext";

function ProductItem({ product }) {
  const { addToCart } = useCart();
  const { user } = useUser();

  return (
    <div className="product-item">
      <h3>{product.name}</h3>
      <p>Price: ${product.price.toFixed(2)}</p>
      {user && <button onClick={() => addToCart(product)}>Add to Cart</button>}
    </div>
  );
}

export default ProductItem;
