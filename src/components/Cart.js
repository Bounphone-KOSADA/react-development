import React from 'react';
import { useCart } from '../contexts/CartContext';

function Cart() {
  const { cart, removeFromCart, total } = useCart();

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.map(item => (
        <div key={item.id}>
          <span>{item.name} - ${item.price.toFixed(2)}</span>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <p>Total: ${total.toFixed(2)}</p>
    </div>
  );
}

export default Cart;