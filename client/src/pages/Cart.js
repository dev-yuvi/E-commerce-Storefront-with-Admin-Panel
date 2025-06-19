
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      {cartItems.map((item, index) => (
        <div key={index} className="mb-2 border p-4 flex justify-between">
          <span>{item.name} - ₹{item.price}</span>
          <button onClick={() => removeFromCart(item)} className="text-red-600">Remove</button>
        </div>
      ))}
      <p className="font-semibold mt-4">Total: ₹{total}</p>
      <Link to="/checkout" className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded">Checkout</Link>
    </div>
  );
};

export default Cart;
