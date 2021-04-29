import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/product.css";
import { useUrl } from "../context/useUrl";
import { AddToCartButton } from "./AddCartButton";
import Rating from "./Rating";
import Price from "./Price";
import { useCart } from "../context/cartContext";
import { WishlistButton } from "./WishListButton";
import Filter from "./Filter";
import Spinner from "./Spinner";

export default function Product() {
  const { dispatchData } = useCart();
  const [isLoadingTrue, setLoading] = useState(true);
  const SET_NEW_DATA = "setNewData";
  const { url } = useUrl();
  useEffect(() => {
    async function getData() {
      const response = await axios.get(url);
      setLoading(false);
      const newCartItems = response.data.data;
      dispatchData({
        type: SET_NEW_DATA,
        newCartItems
      });
    }
    getData();
  }, [url, dispatchData]);
  const { filteredData } = useCart();
  return isLoadingTrue ? (
    <Spinner />
  ) : (
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
