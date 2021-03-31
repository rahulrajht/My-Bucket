import cart from "./cart.png";
import wish from "./wish.png";
import "./styles.css";
import { useRef } from "react";
import { useScreen } from "./changeScreen";
import Cart from "./Cart";
import { useCart } from "./cartContext";
export default function Nav() {
  const { itemsInCart } = useCart();
  const { setScreen } = useScreen();
  const cartRef = useRef();
  function changeScreen() {
    setScreen(<Cart />);
  }
  return (
    <nav className="navbars">
      <ul>
        <div className="Cart">
          <img onClick={changeScreen} ref={cartRef} src={cart} alt=" " />
          <span className="val"> {itemsInCart.length} </span>
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
