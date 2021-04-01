import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useCart } from "./cartContext";
import "./styles.css";
import { useUrl } from "./useUrl";

export default function Product() {
  const [data, setData] = useState([]);
  const { url } = useUrl();
  useEffect(() => {
    async function getData() {
      const response = await axios.get(url);
      console.log(response.data);
      setData(response.data);
    }
    getData();
  }, [url]);

  const { itemsInCart, setItemsInCart } = useCart();
  function addItemsInCart(item) {
    let val = true;
    if (itemsInCart.length === 0) {
      setItemsInCart(itemsInCart.concat({ ...item, count: 1, isInCart: true }));
      return;
    }
    const newItem = itemsInCart.map((i) => {
      if (i.id === item.id) {
        val = false;
        return { ...i };
      } else {
        return i;
      }
    });
    if (val) {
      val = false;
      setItemsInCart(newItem.concat({ ...item, count: 1 }));
    } else {
      setItemsInCart(newItem);
    }
  }

  return (
    <>
      <div className="prod">
        {data.map((item) => (
          <div className="item" key={item.id}>
            <img className="images" src={item.image} alt={item.title} />
            <h4 className="item_name"> {item.title} </h4>
            <div className="item_price"> ₹ {item.price}</div>
            <button
              onClick={() => addItemsInCart(item)}
              className="item_in_stock"
            >
              {" "}
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
