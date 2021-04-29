import "../styles/nav.css";
import { useUrl, useCart } from "../index";
import { Link } from "react-router-dom";

export default function Nav() {
  const { wishList, cartItems } = useCart();
  const { setUrl } = useUrl();

  return (
    <nav className="navbars">
      <label className="label" htmlFor="toogle">
        {" "}
        &#9776;
      </label>{" "}
      <input type="checkbox" id="toogle" />
      <label className="label-hide" htmlFor="toogle">
        <div className="side-bar">
          <ul>
            <li
              onClick={() =>
                setUrl("https://api.rahulgupta99.repl.co/products")
              }
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
      </label>
      <ul>
        <div>
          <Link to="/cart" className="cart">
            {" "}
          </Link>
          <span className="span-img">{cartItems.length}</span>
        </div>
        <div>
          <Link to="/wishlist" className="wishlist">
            {" "}
          </Link>
          <span className="span-img">{wishList.length}</span>
        </div>
      </ul>
    </nav>
  );
}
