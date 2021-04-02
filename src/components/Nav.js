import cart from "../images/cart.png";
import wish from "../images/wish.png";
import "../styles.css";
import { useRef } from "react";
import { useScreen } from "../context/changeScreen";
import Cart from "./Cart";
import { useUrl } from "../context/useUrl";
import { useCart } from "../context/cartContext";
export default function Nav() {
  const { cartItems } = useCart();
  const { setScreen } = useScreen();
  const { setUrl } = useUrl();
  const cartRef = useRef();

  function changeScreen() {
    setScreen(<Cart />);
  }
  return (
    <nav className="navbars">
      <div className="side-bar">
        <ul>
          <li onClick={() => setUrl("https://fakestoreapi.com/products")}>
            {" "}
            All{" "}
          </li>
          <li
            onClick={() =>
              setUrl(
                "https://fakestoreapi.com/products/category/women clothing"
              )
            }
          >
            {" "}
            Women's{" "}
          </li>
          <li
            onClick={() =>
              setUrl("https://fakestoreapi.com/products/category/men clothing")
            }
          >
            {" "}
            Men's{" "}
          </li>
          <li
            onClick={() =>
              setUrl("https://fakestoreapi.com/products/category/electronics")
            }
          >
            {" "}
            Electronics{" "}
          </li>
          <li
            onClick={() =>
              setUrl("https://fakestoreapi.com/products/category/jewelery")
            }
          >
            {" "}
            Jewelery{" "}
          </li>
        </ul>
      </div>
      <ul>
        <div className="Cart">
          <img onClick={changeScreen} ref={cartRef} src={cart} alt=" " />
          <span className="val"> {cartItems.length} </span>
        </div>
        <div>
          <img src={wish} alt=" " />
          <span className="val"> 0 </span>
        </div>
        <div>
          <button> Toggle </button>
        </div>
      </ul>
    </nav>
  );
}
