import { useContext, createContext, useReducer } from "react";
import { data, reducer } from "./useReducer";
export const cartContext = createContext();

export function CartProvider({ children }) {
  const [{ filteredData, cartItems, wishlist }, dispatch] = useReducer(
    reducer,
    data
  );

  return (
    <cartContext.Provider
      value={{
        filteredData,
        cartItems,
        wishlist,
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
