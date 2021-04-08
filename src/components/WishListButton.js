import { checkItemInCart } from "../utils/checkItemInCart";
import { useCart } from "../context/cartContext";
import wish from "../images/wish.png";
import "../styles/wishList.css";

export const WishlistButton = (item) => {
  const { wishList, dispatchData } = useCart();
  console.log("item id is ", item.item.id);
  const handleClick = () => {
    if (checkItemInCart(wishList, item.item.id)) {
      dispatchData({ type: "removeWishlistItem", id: item.item.id });
    } else {
      dispatchData({ type: "addWishlistItem", items: item.item });
    }
  };
  return <img onClick={handleClick} className="wishImage" src={wish} alt=" " />;
};
