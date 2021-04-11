import React from "react";
import "../styles/product.css";
import { useCart } from "../context/cartContext";
import Price from "./Price";
import Rating from "./Rating";
import { AddToCartButton } from "./AddCartButton";
import { WishlistButton } from "./WishListButton";
export default function WIshListCart() {
  const { wishList } = useCart();

  if (wishList.length === 0) {
    return <h3> Wish List is Empty</h3>;
  } else {
    return (
      <>
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
              <AddToCartButton item={item} />
              <WishlistButton item={item} />
            </div>
          ))}
        </div>
      </>
    );
  }
}
