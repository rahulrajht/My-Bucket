import React, { useRef, useState } from "react";
import "../styles/cart.css";
import { useCart } from "../context/cartContext";
import Price from "./Price";
import Rating from "./Rating";

export default function Cart() {
  const { cartItems, dispatchData } = useCart();
  let count = 0;
  let price = 0;
  let disc = 0;

  function getItemCount(item) {
    count += item.count;
    price += item.price * item.count;
    disc += ((item.price * item.discount) / 100) * item.count;
  }
  function removeItem(items) {
    const id = items._id;
    dispatchData({
      type: "removeCartItem",
      id
    });
  }
  function changeQty({ payload, data }) {
    console.log("item in ", data);
    const id = data._id;
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
      <div className="maindiv-container">
        <div className="cartProducts">
          {cartItems.map((item) => (
            <div className="cartItem" key={item._id}>
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
                <Price
                  count={item.count}
                  price={item.price}
                  discount={item.discount}
                />
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
        {cartItems.forEach(getItemCount)}
        <section className="checkout-container">
          <div className="_35mLK5">
            <span className="_3aPjap">Price details</span>
            <div className="_I_XQO">
              <div className="Ob17DV">
                <div className="_24KATy">
                  <div className="_2npqm0">Price ({count} items)</div>
                </div>
                <span> ₹{price.toFixed(2)}</span>
              </div>

              <div className="Ob17DV">
                <div className="_24KATy">
                  <div className="_2npqm0">Discount</div>
                </div>
                <div className="_1YVZr_">− ₹{disc.toFixed(2)}</div>
              </div>
              <div className="Ob17DV">
                <div className="_24KATy">
                  <div className="_2npqm0">Delivery Charges</div>
                </div>
                <span>
                  <span className="_1YVZr_ _33nGE1">Free</span>
                </span>
              </div>
              <div className="_3LxTgx">
                <div className="Ob17DV">
                  <div className="_24KATy">
                    <div className="_2npqm0">Total Amount</div>
                  </div>
                  <span>
                    <div className="_1dqRvU">
                      <div className="Ob17DV _3X7Jj1">
                        <div className="_24KATy">
                          <div className="_2npqm0"></div>
                        </div>
                        <span> ₹{(price - disc).toFixed(2)}</span>
                      </div>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <button className="btn-add instock">Make Payment</button>
        </section>
      </div>
    );
  }
}
