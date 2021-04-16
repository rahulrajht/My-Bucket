import { checkItemInCart } from "../utils/checkItemInCart";
import { useCart } from "../context/cartContext";
import wish from "../images/wish.png";
import redwish from "../images/redwish.png";
import "../styles/wishList.css";
import { useState } from "react";

export const WishlistButton = (item) => {
  const { wishList, dispatchData } = useCart();
  const [isTrue, setTrue] = useState(false);
  const handleClick = () => {
    setTrue(!isTrue);
    if (checkItemInCart(wishList, item.item._id)) {
      dispatchData({ type: "removeWishlistItem", id: item.item._id });
    } else {
      dispatchData({ type: "addWishlistItem", items: item.item });
    }
  };
  return (
    <img
      onClick={handleClick}
      className="wishImage"
      src={isTrue ? redwish : wish}
      alt=" "
    />
  );
};
