import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/product.css";
import {
  useUrl,
  Rating,
  Price,
  useCart,
  Filter,
  Spinner,
  AddToCartButton,
  WishlistButton
} from "../index";

export default function Product() {
  const { dispatchData } = useCart();
  const [isLoadingTrue, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const SET_NEW_DATA = "setNewData";
  const { url } = useUrl();
  useEffect(() => {
    async function getData() {
      const response = await axios.get(url);
      setLoading(false);
      setProducts(response.data.data);
      // const newCartItems = response.data.data;
      // dispatchData({
      //   type: SET_NEW_DATA,
      //   newCartItems
      // });
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
        {products.map((item) => (
          <div className="card card--shadow" key={item._id}>
            <img className="images" src={item.image} alt={item.title} />
            <Rating rt={item.ratings} />
            <div className="item_name"> {item.title} </div>
            <Price
              count={item.count}
              price={item.price}
              discount={item.discount}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                width: "100%",
                margin: "0 auto"
              }}
            >
              <AddToCartButton item={item} />
              <WishlistButton item={item} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
