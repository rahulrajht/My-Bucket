import React, { useEffect, useState } from "react";
import "../styles/product.css";
import { useCart, Price, Rating, WishlistButton, MoveToCart } from "../index";
import { Link } from "react-router-dom";
import axios from "axios";
import Spinner from "./Spinner";

export default function WishListCart() {
  const [isLoading, setLoading] = useState(true);
  const { wishList, dispatchData } = useCart();
  const email = JSON.parse(localStorage.getItem("email"));
  console.log(email);
  const url = "https://api-1.rahulgupta99.repl.co/wishlist/getitems/" + email;

  useEffect(() => {
    async function getData() {
      const res = await axios.get(url);
      console.log(res);
      if (res.status === 200) {
        setLoading(false);
        dispatchData({
          type: "setWishlistItems",
          fetchedWishlist: res.data
        });
      }
    }
    getData();
  }, [dispatchData, email, url]);

  if (wishList.length === 0) {
    return isLoading ? (
      <Spinner />
    ) : (
      <div className="no-items">
        <h3>There Is No Any Items In Wish List.</h3>
        <Link className="link" to="/">
          Go To Home Page{" "}
        </Link>
      </div>
    );
  } else {
    return isLoading ? (
      <Spinner />
    ) : (
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
