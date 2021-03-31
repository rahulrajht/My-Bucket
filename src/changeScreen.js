import Product from "./Product";
import { useContext, createContext, useState } from "react";
export const changeContext = createContext();

export function ScreenProvider({ children }) {
  const [screen, setScreen] = useState(<Product />);
  return (
    <changeContext.Provider value={{ screen, setScreen }}>
      {children}
    </changeContext.Provider>
  );
}

export function useScreen() {
  return useContext(changeContext);
}
