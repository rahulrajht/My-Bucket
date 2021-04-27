import React from "react";
import "../styles/product.css";
import { useCart } from "../context/cartContext";
import Price from "./Price";
import Rating from "./Rating";
import { AddToCartButton } from "./AddCartButton";
import MoveToCart from "./MoveToCart";
import { WishlistButton } from "./WishListButton";
import { Link } from "react-router-dom";
export default function WIshListCart() {
  const { wishList } = useCart();
  if (wishList.length === 0) {
    return (
      <div className="no-items">
        <h3 style={{ margin: "2rem" }}>There Is No Any Items In Wish List.</h3>
        <Link className="link" to="/">
          Go To Home Page{" "}
        </Link>
      </div>
    );
  } else {
    return (
      <div className="main-container">
        <div className="prod">
          {wishList.map((item) => (
            <div className="card card--shadow" key={item.id}>
              <img className="images" src={item.image} alt={item.title} />
              <Rating rt={item.ratings} />
              <div className="item_name"> {item.title} </div>
              <Price
                count={item.count}
                price={item.price}
                discount={item.discount}
              />
              <MoveToCart item={item} />
              <WishlistButton item={item} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
