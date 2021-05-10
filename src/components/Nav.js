import "../styles/nav.css";
import { useUrl, useCart } from "../index";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

export default function Nav() {
  const { logout, dispatchData } = useAuth();
  const { wishList, cartItems } = useCart();
  const { setUrl } = useUrl();
  const history = useHistory();
  const user = localStorage.getItem("token");
  const SET_USER = "setUser";
  async function LogOut() {
    try {
      await logout();
      dispatchData({
        type: SET_USER,
        currentUser: null
      });
      history.push("/");
    } catch {
      console.log("Something went wrong.");
    }
  }

  return (
    <nav className="navbars">
      <label className="label" htmlFor="toogle">
        {" "}
        &#9776;{" "}
      </label>
      <input type="checkbox" id="toogle" />
      <label className="label-hide" htmlFor="toogle">
        <div className="side-bar">
          <ul className="side-bar-list-container">
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
      <ul className="list-container">
        <div className="wrapper-container">
          <Link to="/cart" className="cart">
            {" "}
          </Link>
          <span className="span-img">{cartItems.length}</span>
        </div>
        <div className="wrapper-container">
          <Link to="/wishlist" className="wishlist">
            {" "}
          </Link>
          <span className="span-img">{wishList.length}</span>
        </div>

        <div className="wrapper-container">
          <label className=" person" htmlFor="user"></label>
          <input type="checkbox" id="user" />

          <div className={`account-info ${user ? "Login" : "logout"}`}>
            {user ? (
              <div className="user-info nav-btn">
                <p className="user-name">
                  {JSON.parse(localStorage.getItem("name"))}
                </p>

                <p className="user-email">
                  {JSON.parse(localStorage.getItem("email"))}
                </p>

                <button onClick={LogOut}>Sign Out</button>
              </div>
            ) : (
              <Link className="login-btn" to="/login">
                {" "}
                Log In
              </Link>
            )}
          </div>
        </div>
      </ul>
    </nav>
  );
}
