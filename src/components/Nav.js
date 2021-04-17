import "../styles/nav.css";
import { useUrl } from "../context/useUrl";
import { useCart } from "../context/cartContext";
import { Link } from "react-router-dom";
export default function Nav() {
  const { wishList, cartItems } = useCart();

  const { setUrl } = useUrl();

  return (
    <nav className="navbars">
      <label class="label" for="toogle">
        {" "}
        &#9776;{" "}
      </label>
      <input type="checkbox" id="toogle" />
      <div className="side-bar">
        <ul>
          <li
            onClick={() => setUrl("https://api.rahulgupta99.repl.co/products")}
          >
            All
          </li>
          <li
            onClick={() =>
              setUrl(
                "https://api.rahulgupta99.repl.co/products/category/women clothing"
              )
            }
          >
            Women's
          </li>
          <li
            onClick={() =>
              setUrl(
                "https://api.rahulgupta99.repl.co/products/category/men clothing"
              )
            }
          >
            Men's
          </li>
          <li
            onClick={() =>
              setUrl(
                "https://api.rahulgupta99.repl.co/products/category/electronics"
              )
            }
          >
            Electronics
          </li>
          <li
            onClick={() =>
              setUrl(
                "https://api.rahulgupta99.repl.co/products/category/jewelery"
              )
            }
          >
            Jewelery
          </li>
        </ul>
      </div>
      <ul>
        <div style={{ position: "relative", marginLeft: "5px" }}>
          <Link to="/cart" className="cart">
            {" "}
          </Link>
          <span className="span-img">{cartItems.length}</span>
        </div>
        <div style={{ position: "relative", marginLeft: "5px" }}>
          <Link to="/wishlist" className="wishlist">
            {" "}
          </Link>
          <span className="span-img">{wishList.length}</span>
        </div>
      </ul>
    </nav>
  );
}
