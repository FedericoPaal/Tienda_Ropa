import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (productToAdd) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === productToAdd.id);

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === productToAdd.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...productToAdd, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: parseInt(quantity) || 1 }
          : item
      )
    );
  };

  const increaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, (item.quantity || 1) - 1) }
          : item
      );
      return updatedCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, updateQuantity, increaseQuantity, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
