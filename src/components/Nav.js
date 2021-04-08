import cart from "../images/cart.png";
import wish from "../images/wish.png";
import "../styles/nav.css";
import { useRef } from "react";
import { useUrl } from "../context/useUrl";
import { useCart } from "../context/cartContext";
import { Link } from "react-router-dom";
export default function Nav() {
  const { wishList, cartItems } = useCart();

  const { setUrl } = useUrl();
  const cartRef = useRef();

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
        <Link to="/cart">
          <div
            style={{
              position: "relative"
            }}
          >
            <img
              style={{
                width: "40px",
                position: "relative"
              }}
              ref={cartRef}
              src={cart}
              alt=" "
            />
            <span
              style={{
                position: "absolute",
                width: "20px",
                top: "-5px",
                right: "-2px",
                backgroundColor: "white",
                borderRadius: "50%",
                fontSize: "1rem",
                padding: "0.25rem"
              }}
            >
              {" "}
              {cartItems.length}{" "}
            </span>
          </div>
        </Link>
        <Link to="/wishlist">
          <div
            style={{
              position: "relative",
              marginLeft: "5px"
            }}
          >
            <img
              style={{
                width: "40px",
                position: "relative"
              }}
              src={wish}
              alt=" "
            />
            <span
              style={{
                position: "absolute",
                width: "20px",
                top: "-5px",
                right: "-2px",
                backgroundColor: "white",
                borderRadius: "50%",
                fontSize: "1rem",
                padding: "0.25rem"
              }}
            >
              {" "}
              {wishList ? wishList.length : 0}{" "}
            </span>
          </div>
        </Link>
        <div>
          <button> Toggle </button>
        </div>
      </ul>
    </nav>
  );
}
