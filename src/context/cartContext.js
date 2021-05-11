import { useContext, createContext, useReducer, useState } from "react";
import { data, reducer } from "./useReducer";
export const cartContext = createContext();

export function CartProvider({ children }) {
  const [{ filteredData, cartItems, wishList }, dispatch] = useReducer(
    reducer,
    data
  );
  return (
    <cartContext.Provider
      value={{
        filteredData,
        cartItems,
        wishList,
        dispatchData: dispatch
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export function useCart() {
  return useContext(cartContext);
}
