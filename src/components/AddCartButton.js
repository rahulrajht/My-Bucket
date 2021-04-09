import Cart from "./Cart";
import { checkItemInCart } from "../utils/checkItemInCart";
import { useCart } from "../context/cartContext";
import { Link } from "react-router-dom";

import "../styles/addcartbutton.css";
import { useState } from "react";
export const AddToCartButton = (item) => {
  const { cartItems, dispatchData } = useCart();
  const items = { ...item.item, count: 1 };
  const [link, setLink] = useState("");
  function handleClick() {
    if (checkItemInCart(cartItems, item.item.id)) {
      setLink("/cart");
    } else {
      setLink("/cart");
      dispatchData({
        type: "addCartItem",
        items
      });
    }
  }

  function getButtonText() {
    if (item.item.inStock) {
      return checkItemInCart(cartItems, item.item.id)
        ? "Go to Cart"
        : "Add to cart";
    }
    return "Out of Stock";
  }
  return (
    <Link to={link}>
      <button
        disabled={!item.item.inStock}
        onClick={handleClick}
        className={`btn-add ${!item.item.inStock ? "out" : "instock"}`}
      >
        {getButtonText()}
      </button>
    </Link>
  );
};
