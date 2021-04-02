import { useContext, createContext, useState } from "react";
export const cartContext = createContext();

export function CartProvider({ children }) {
  const [itemsInCart, setItemsInCart] = useState([]);
  return (
    <cartContext.Provider value={{ itemsInCart, setItemsInCart }}>
      {children}
    </cartContext.Provider>
  );
}

export function useCart() {
  return useContext(cartContext);
}
