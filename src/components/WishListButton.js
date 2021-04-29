import { checkItemInCart, useCart } from "../index";
import wish from "../images/wish.png";
import redwish from "../images/redwish.png";
import "../styles/wishList.css";
import { useState } from "react";

export default function WishlistButton(item) {
  const { wishList, dispatchData } = useCart();
  const [isTrue, setTrue] = useState(false);

  const ADD_WISHLIST_ITEM = "addWishlistItem";
  const REMOVE_WISHLIST_ITEM = "removeWishlistItem";

  const handleClick = () => {
    setTrue(!isTrue);
    if (checkItemInCart(wishList, item.item._id)) {
      dispatchData({ type: REMOVE_WISHLIST_ITEM, id: item.item._id });
    } else {
      dispatchData({ type: ADD_WISHLIST_ITEM, items: item.item });
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
}
