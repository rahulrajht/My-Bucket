import { checkItemInCart } from "../utils/checkItemInCart";
import { useCart } from "../context/cartContext";

import "../styles/addcartbutton.css";

export default function MoveToCart(item) {
  const { cartItems, dispatchData } = useCart();
  const wishListItem = { data: item.item, id: item.item._id };
  const ADD_CART_ITEM_AND_REMOVE_FROM_WISHLIST =
    "addCartItem&removeWishlistItem";

  function handleClick() {
    if (!checkItemInCart(cartItems, item.item._id)) {
      dispatchData({
        type: ADD_CART_ITEM_AND_REMOVE_FROM_WISHLIST,
        wishListItem
      });
    }
  }

  function getButtonText() {
    if (item.item.inStock) {
      return "Move to cart";
    }
    return "Out Of Stock";
  }
  return (
    <button
      disabled={!item.item.inStock}
      onClick={handleClick}
      className={`btn-add ${!item.item.inStock ? "out" : "instock"}`}
    >
      {getButtonText()}
    </button>
  );
}
