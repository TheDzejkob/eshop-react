import React from 'react';
import { useCart } from '../modules/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id}>
          <p>{item.name} - ${item.price}</p>
          <button type="button" class="btn btn-warning" onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <button type="button" class="btn btn-danger">Clear Cart</button>
    </div>
  );
};

export default Cart;