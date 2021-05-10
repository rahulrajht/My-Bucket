import { checkItemInCart, useCart } from "../index";
import wish from "../images/wish.png";
import redwish from "../images/redwish.png";
import "../styles/wishList.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import { toast } from "react-toastify";

export default function WishlistButton(item) {
  const { wishList, dispatchData } = useCart();
  const [isTrue, setTrue] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const ADD_WISHLIST_ITEM = "addWishlistItem";
  const REMOVE_WISHLIST_ITEM = "removeWishlistItem";
  const isUserLogin = JSON.parse(localStorage.getItem("isUserLogin"));
  const email = JSON.parse(localStorage.getItem("email"));
  const history = useHistory();

  async function handleClick() {
    if (!isUserLogin) history.push("/login");
    setTrue(!isTrue);
    if (isTrue === false) {
      setLoading(true);
      const url = "https://api-1.rahulgupta99.repl.co/wishlist/add-to-wishlist";
      const res = await axios.post(url, { id: item.item._id, email: email });
      if (res.status === 200) {
        toast.info("Product added to wishlist");
        dispatchData({ type: ADD_WISHLIST_ITEM, items: item.item });
      }
    } else {
      const url = "https://api-1.rahulgupta99.repl.co/wishlist/remove-item";
      const res = await axios.post(url, { id: item.item._id, email: email });
      if (res.status === 200) {
        toast.info("Product Removed from  wishlist");
        dispatchData({ type: REMOVE_WISHLIST_ITEM, id: item.item._id });
      }
    }
  }

  return (
    <img
      onClick={handleClick}
      className="wishImage"
      src={isTrue ? redwish : wish}
      alt=" "
    />
  );
}
