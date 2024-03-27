import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

import { useAuth } from "../login-signup-components/AuthContext";
interface CartItem {
  quantity: number;
  mainImage: string;
  id: string;
  name: string;
  price: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string) => void;
  increaseQuantity: (itemId: string) => void;
  decreaseQuantity: (itemId: string) => void;
  resetCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  console.log(cartItems);
  const { userData } = useAuth();
  useEffect(() => {
    // Retrieve cart items from localStorage on component mount
    const storedCartItems = localStorage.getItem(`cartItems_${userData?.id}`);
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, [userData]); // Update cart items when user data changes

  useEffect(() => {
    // Store cart items in localStorage whenever cartItems change
    localStorage.setItem(`cartItems_${userData?.id}`, JSON.stringify(cartItems));
  }, [cartItems, userData]); // Update localStorage when cart items or user data change

  const addToCart = (item: CartItem) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      const updatedItems = cartItems.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };
  const resetCart = () => {
    setCartItems([]);
  };

  const removeFromCart = (itemId: string) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const increaseQuantity = (itemId: string) => {
    const updatedItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedItems);
  };

  const decreaseQuantity = (itemId: string) => {
    const updatedItems = cartItems.map((item) =>
      item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItems(updatedItems);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
