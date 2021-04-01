import React from "react";
import "./styles.css";
import { useCart } from "./cartContext";

export default function Cart() {
  const { itemsInCart, setItemsInCart } = useCart();
  console.log({ itemsInCart });

  function removeItem(removeItem) {
    setItemsInCart(itemsInCart.filter((e) => e !== removeItem));
  }
  function changeQty({ payload, data }) {
    let value = 0;
    switch (payload) {
      case "inc":
        value = 1;
        break;
      case "dec":
        value = -1;
        break;
      default:
        console.log(value);
    }
    const newItem = itemsInCart.map((i) => {
      if (i.id === data.id) {
        if (i.count === 0) {
          removeItem(data);
        }
        return { ...i, count: i.count + value };
      } else {
        return i;
      }
    });
    setItemsInCart(newItem);
  }
  if (itemsInCart.length === 0) {
    return <h3> Cart is Empty</h3>;
  } else {
    return (
      <nav>
        <div className="cartProducts">
          {itemsInCart.map((item) => (
            <div className="cartItem" key={item.id}>
              <div className="left">
                <img className="images" src={item.image} alt={item.title} />
              </div>
              <div className="right">
                <h4 className="item_name"> {item.title} </h4>
                <div className="flex-row">
                  <span
                    onClick={() => changeQty({ payload: "inc", data: item })}
                    className="btn-size"
                  >
                    {" "}
                    +{" "}
                  </span>
                  <span className="qty"> {item.count} </span>
                  <span
                    onClick={() => changeQty({ payload: "dec", data: item })}
                    className="btn-size"
                  >
                    {" "}
                    -{" "}
                  </span>
                </div>
                <span className="item_price">₹ {item.price}</span>
                <div>
                  <div className="remove_btn"> Save For Later</div>
                  <div onClick={() => removeItem(item)} className="remove_btn">
                    {" "}
                    Remove{" "}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </nav>
    );
  }
}
