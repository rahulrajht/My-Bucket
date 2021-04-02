import Cart from "./Cart";
import { checkItemInCart } from "../utils/checkItemInCart";
import { useCart } from "../context/cartContext";
import { useScreen } from "../context/changeScreen";
import "../styles.css";
export const AddToCartButton = (item) => {
  const { setScreen } = useScreen();
  const { cartItems, dispatchData } = useCart();
  const items = { ...item.item, count: 1 };

  function handleClick() {
    if (checkItemInCart(cartItems, item.item.id)) setScreen(<Cart />);
    else {
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
    <button
      disabled={!item.item.inStock}
      onClick={handleClick}
      className={`btn-add ${!item.item.inStock ? "out" : "instock"}`}
    >
      {getButtonText()}
    </button>
  );
};
