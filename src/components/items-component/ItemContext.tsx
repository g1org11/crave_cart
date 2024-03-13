// ItemContext.tsx
import React, { createContext, useContext, useState } from "react";

interface Item {
  title: string;
  ingredients: string;
  price: string;
  image: File | null;
}

interface ItemContextType {
  items: Item[];
  addItem: (item: Item) => void;
}

const ItemContext = createContext<ItemContextType | undefined>(undefined);

export const useItemContext = () => {
  const context = useContext(ItemContext);
  if (!context) {
    throw new Error("useItemContext must be used within an ItemProvider");
  }
  return context;
};

export const ItemProvider: React.FC = ({ children }) => {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (newItem: Item) => {
    setItems([...items, newItem]);
  };

  return <ItemContext.Provider value={{ items, addItem }}>{children}</ItemContext.Provider>;
};
