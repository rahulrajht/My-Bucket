import axios from "axios";
import { useEffect, useState } from "react";
import "./styles.css";
import { useUrl } from "./useUrl";
import faker from "faker";
import { AddToCartButton } from "./components/AddCartButton";
import star from "../src/star.png";

export default function Product() {
  const [data, setData] = useState([]);
  const { url } = useUrl();
  useEffect(() => {
    async function getData() {
      const response = await axios.get(url);
      const newData = response.data.map((item) => {
        return {
          ...item,
          inStock: faker.datatype.boolean(),
          fastDelivery: faker.datatype.boolean(),
          ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
          discount: faker.random.arrayElement([25, 50, 70, 0])
        };
      });
      setData(newData);
    }
    getData();
  }, [url]);

  return (
    <>
      <div className="prod">
        {data.map((item) => (
          <div className="card card--shadow" key={item.id}>
            <img className="images" src={item.image} alt={item.title} />
            <div className="card__badges">
              <div className="rating">
                <span className="badge">
                  {item.ratings}{" "}
                  <img className="fa" width="15px" src={star} alt="" />
                </span>
              </div>
            </div>
            <div className="item_name"> {item.title} </div>
            <div className="item_price"> ₹ {item.price}</div>
            <AddToCartButton item={item} />
          </div>
        ))}
      </div>
    </>
  );
}
