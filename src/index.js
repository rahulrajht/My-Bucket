import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CartProvider } from "./context/cartContext";
import { AuthProvider } from "./context/AuthProvider";

export { useUrl, UrlProvider } from "./context/useUrl";
export { useCart } from "./context/cartContext";
export { default as Price } from "./components/Price";
export { default as Rating } from "./components/Rating";
export { checkItemInCart } from "./utils/checkItemInCart";
export { default as Filter } from "./components/Filter";
export { default as Spinner } from "./components/Spinner";
export { default as AddToCartButton } from "./components/AddCartButton";
export { default as WishlistButton } from "./components/WishListButton";
export { default as MoveToCart } from "./components/MoveToCart";
export { default as Error } from "./components/Error";
export { default as WishListCart } from "./components/WishListCart";
export { default as Product } from "./components/Product";
export { default as Cart } from "./components/Cart";
export { default as Nav } from "./components/Nav";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  </StrictMode>,
  rootElement
);
