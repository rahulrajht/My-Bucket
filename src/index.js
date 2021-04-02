import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { CartProvider } from "./context/cartContext";
import { ScreenProvider } from "./context/changeScreen";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CartProvider>
      <ScreenProvider>
        <App />
      </ScreenProvider>
    </CartProvider>
  </StrictMode>,
  rootElement
);
