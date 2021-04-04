import axios from "axios";
import { useEffect } from "react";
import "../styles.css";
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
      const newCartItems = response.data.map((item) => {
        return {
          ...item,
          count: 1,
          inStock: faker.datatype.boolean(),
          fastDelivery: faker.datatype.boolean(),
          ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
          discount: faker.random.arrayElement([25, 50, 70, 0])
        };
      });
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
          <div className="card card--shadow" key={item.id}>
            <img className="images" src={item.image} alt={item.title} />
            <Rating rt={item.ratings} />
            <div className="item_name"> {item.title} </div>
            <Price price={item.price} discount={item.discount} />
            <AddToCartButton item={item} />
            <WishlistButton item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
