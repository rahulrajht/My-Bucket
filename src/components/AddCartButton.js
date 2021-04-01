import Cart from "../Cart";
import { checkItemInCart } from "../utils/checkItemInCart";
import { useCart } from "../cartContext";
import { useScreen } from "../changeScreen";
import "../styles.css";
export const AddToCartButton = (item) => {
  const { setScreen } = useScreen();
  const { itemsInCart, setItemsInCart } = useCart();

  const handleClick = () => {
    if (checkItemInCart(itemsInCart, item.item.id)) setScreen(<Cart />);
    else {
      setItemsInCart(itemsInCart.concat({ ...item.item, count: 1 }));
    }
  };
  const getButtonText = () => {
    if (item.item.inStock) {
      return checkItemInCart(itemsInCart, item.item.id)
        ? "Go to Cart"
        : "Add to cart";
    }
    return "Out of Stock";
  };
  return (
    <button
      disabled={!item.item.inStock}
      onClick={handleClick}
      className="btn-add"
    >
      {getButtonText()}
    </button>
  );
};
