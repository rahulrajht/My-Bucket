import { checkItemInCart } from "../utils/checkItemInCart";
import { useCart } from "../context/cartContext";
import { Link } from "react-router-dom";

import "../styles/addcartbutton.css";
import { useState } from "react";

export const AddToCartButton = (item) => {
  const { cartItems, dispatchData, wishList } = useCart();
  const items = item.item;
  const [link, setLink] = useState("");

  function handleClick() {
    if (checkItemInCart(cartItems, item.item._id)) {
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
      return checkItemInCart(cartItems, item.item._id)
        ? "Go to Cart"
        : "Add to cart";
    }
    return "Out of Stock";
  }
  if (checkItemInCart(wishList, item.item._id)) {
    return (
      <Link to="/cart">
        <button
          disabled={!item.item.inStock}
          onClick={handleClick}
          className={`btn-add ${!item.item.inStock ? "out" : "instock"}`}
        >
          {getButtonText()}
        </button>
      </Link>
    );
  } else
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
