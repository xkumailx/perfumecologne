"use client";
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(null);

  // Fetch current cart
  async function fetchCart() {
    const res = await fetch("https://perfumencologne.com/wp-json/wc/store/cart", {
      credentials: "include" // 🔑 important for WooCommerce session cookies
    });
    const data = await res.json();
    setCart(data);
  }

  // Add product to cart
  async function addToCart(productId, qty = 1) {
    try {
      const res = await fetch("https://perfumencologne.com/wp-json/wc/store/cart/add-item", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: productId,   // ✅ use the parameter, not product.id
          quantity: qty,
        }),
        credentials: "include", // ✅ keeps WC session
      });

      const data = await res.json();

      if (!res.ok) {
        console.error("Add to cart failed:", data);
        return;
      }

      console.log("Added to cart:", data);
      fetchCart(); // refresh cart
    } catch (err) {
      console.error("Error adding to cart:", err);
    }
  }


  // Update qty
  async function updateCartItem(itemKey, qty) {
    await fetch("https://perfumencologne.com/wp-json/wc/store/cart/update-item", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ key: itemKey, quantity: qty })
    });
    fetchCart();
  }

  // Remove item
  async function removeCartItem(itemKey) {
    await fetch("https://perfumencologne.com/wp-json/wc/store/cart/remove-item", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ key: itemKey })
    });
    fetchCart();
  }

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <CartContext.Provider value={{ cart, addToCart, updateCartItem, removeCartItem }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
