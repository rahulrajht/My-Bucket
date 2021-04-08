import React from "react";
import "../styles/cart.css";
import { useCart } from "../context/cartContext";
import Price from "./Price";
import Rating from "./Rating";

export default function Cart() {
  const { cartItems, dispatchData } = useCart();

  function removeItem(items) {
    const id = items.id;
    dispatchData({
      type: "removeCartItem",
      id
    });
  }
  function changeQty({ payload, data }) {
    console.log("item in ", data);
    const id = data.id;
    const items = data;
    switch (payload) {
      case "inc":
        dispatchData({
          type: "incQty",
          id
        });
        break;
      case "dec":
        dispatchData({
          type: "decQty",
          id,
          items
        });
        break;
      default:
        console.log(data);
    }
  }
  if (cartItems.length === 0) {
    return <h3> Cart is Empty</h3>;
  } else {
    return (
      <nav>
        <div className="cartProducts">
          {cartItems.map((item) => (
            <div className="cartItem" key={item.id}>
              <div className="left">
                <img className="images" src={item.image} alt={item.title} />
              </div>
              <div className="right">
                <h4 className="item_name"> {item.title} </h4>
                <Rating rt={item.ratings} />
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
                <Price price={item.price} discount={item.discount} />
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
