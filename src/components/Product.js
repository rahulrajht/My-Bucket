import axios from "axios";
import { useEffect } from "react";
import "../styles/product.css";
import { useUrl } from "../context/useUrl";
import faker from "faker";
import { AddToCartButton } from "./AddCartButton";
import Rating from "./Rating";
import Price from "./Price";
import { useCart } from "../context/cartContext";
import { WishlistButton } from "./WishListButton";
import Filter from "./Filter";

export default function Product() {
  const { dispatchData } = useCart();
  const { url } = useUrl();
  useEffect(() => {
    async function getData() {
      const response = await axios.get(url);
      const newCartItems = response.data.data;
      dispatchData({
        type: "setNewData",
        newCartItems
      });
    }
    getData();
  }, [url, dispatchData]);
  const { filteredData } = useCart();

  return (
    <div className="main-container">
      <Filter />
      <div className="prod">
        {filteredData.map((item) => (
          <div className="card card--shadow" key={item._id}>
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
    </div>
  );
}
