import { useCart } from "../context/cartContext";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import "../styles/addcartbutton.css";
import axios from "axios";
import { toast } from "react-toastify";
import { Spinner } from "react-bootstrap";
import { checkItemInCart } from "../utils/checkItemInCart";

export default function AddToCartButton(item) {
  toast.configure();
  const [isLoading, setLoading] = useState(false);
  const [buttonText, setText] = useState("Add to Cart");
  const { dispatchData, cartItems } = useCart();
  const history = useHistory();
  const isUserLogin = JSON.parse(localStorage.getItem("isUserLogin"));
  const email = JSON.parse(localStorage.getItem("email"));

  async function handleClick() {
    if (!isUserLogin) history.push("/login");
    if (buttonText === "Go to cart") {
      history.push("/cart");
    } else {
      setLoading(true);
      setText(<Spinner animation="border" size="sm" />);
      const url = "https://api-1.rahulgupta99.repl.co/cart/add-to-cart";
      const res = await axios.post(url, { id: item.item._id, email: email });

      if (res.status === 200) {
        toast.success("Item Added to cart");

        dispatchData({
          type: "addCartItem",
          items: res.data
        });
        setLoading(false);
        setText("Go to cart");
      }
    }
  }

  return (
    <button
      disabled={!item.item.inStock}
      onClick={handleClick}
      className={`btn-add ${!item.item.inStock ? "out" : "instock"}`}
    >
      {buttonText}
    </button>
  );
}
