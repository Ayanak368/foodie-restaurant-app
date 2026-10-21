
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("foodie-cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("foodie-cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(food) {
    setCart((currentCart) => {
      const existingFood = currentCart.find((item) => item.id === food.id);

      if (existingFood) {
        return currentCart.map((item) =>
          item.id === food.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentCart, { ...food, quantity: 1 }];
    });
  }

  function removeFromCart(foodId) {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== foodId)
    );
  }

  function updateQuantity(foodId, quantity) {
    if (quantity < 1) return;

    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === foodId ? { ...item, quantity } : item
      )
    );
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}
