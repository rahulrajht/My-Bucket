import React from "react";
import "../styles/cart.css";
import { useCart } from "../context/cartContext";
import Price from "./Price";
import Rating from "./Rating";
import { Link } from "react-router-dom";

export default function Cart() {
  const REMOVE_CART_ITEM = "removeCartItem";
  const INC_QTY = "incQty";
  const DEC_QTY = "decQty";
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
      type: REMOVE_CART_ITEM,
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
          type: INC_QTY,
          id
        });
        break;
      case "dec":
        dispatchData({
          type: DEC_QTY,
          id,
          items
        });
        break;
      default:
        console.log(data);
    }
  }
  if (cartItems.length === 0) {
    return (
      <div className="no-items">
        <h3 style={{ margin: "2rem" }}>It Seems Your Cart Is Empty.</h3>
        <Link className="link" to="/">
          Go To Home Page{" "}
        </Link>
      </div>
    );
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
          <div className="outer">
            <span className="price-title">Price details</span>
            <div>
              <div className="price-box">
                <div className="size">
                  <div className="count-value">Price ({count} items)</div>
                </div>
                <span> ₹{price.toFixed(2)}</span>
              </div>

              <div className="price-box">
                <div className="size">
                  <div className="count-value">Discount</div>
                </div>
                <div>− ₹{disc.toFixed(2)}</div>
              </div>
              <div className="price-box">
                <div className="size">
                  <div className="count-value">Delivery Charges</div>
                </div>
                <span>
                  <span>Free</span>
                </span>
              </div>
              <div className="border">
                <div className="price-box">
                  <div className="size">
                    <div className="count-value">Total Amount</div>
                  </div>
                  <span>
                    <div>
                      <div className="price-box">
                        <div className="size">
                          <div className="count-value"></div>
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
