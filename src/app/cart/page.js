"use client";
import { useCart } from "../../context/CartContext";

export default function CartPage() {
  const { cart, updateCartItem, removeCartItem } = useCart();

  if (!cart) return <p>Loading cart...</p>;

  return (
    <div className="container">
      <h1>Your Cart</h1>
      {cart.items.length === 0 && <p>No items in cart.</p>}
      {cart.items.map((item) => (
        <div key={item.key} className="cart-item">
          <p>{item.name} (x{item.quantity})</p>
          <button onClick={() => updateCartItem(item.key, item.quantity + 1)}>+</button>
          <button onClick={() => updateCartItem(item.key, item.quantity - 1)}>-</button>
          <button onClick={() => removeCartItem(item.key)}>Remove</button>
        </div>
      ))}
      <p>Total: {cart.totals.total}</p>
    </div>
  );
}
