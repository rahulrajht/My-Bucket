import React, { useEffect, useState } from "react";
import "../styles/cart.css";
import { useCart, Price, Rating } from "../index";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Spinner from "./Spinner";

export default function Cart() {
  toast.configure();
  const [isLoading, setLoading] = useState(true);
  const REMOVE_CART_ITEM = "removeCartItem";
  const INC_QTY = "incQty";
  const DEC_QTY = "decQty";
  const email = JSON.parse(localStorage.getItem("email"));
  const { dispatchData, cartItems } = useCart();
  let count = 0;
  let price = 0;
  let disc = 0;

  function getItemCount(item) {
    count += item.count;
    price += item.price * item.count;
    disc += ((item.price * item.discount) / 100) * item.count;
  }
  async function removeItem(items) {
    const url = "https://api-1.rahulgupta99.repl.co/cart/remove-item";

    const res = await axios.post(url, { id: items._id, email: email });
    const id = items._id;
    if (res.status === 200) {
      toast.success("Removed ");
      dispatchData({
        type: REMOVE_CART_ITEM,
        id
      });
    }
  }

  useEffect(() => {
    async function getData() {
      const url = "https://api-1.rahulgupta99.repl.co/cart/getitems/" + email;
      const res = await axios.get(url);
      if (res.status === 200) {
        dispatchData({
          type: "setNewData",
          newCartItems: res.data
        });
      }
      setLoading(false);
    }
    getData();
  }, [email, dispatchData]);

  async function changeQty({ payload, data, value }) {
    const url = "https://api-1.rahulgupta99.repl.co/cart/incQty";
    const id = data._id;
    const items = data;
    const qty = data.count;
    await axios.post(url, { email, id, value, qty });

    switch (payload) {
      case "inc":
        dispatchData({ type: INC_QTY, id });
        break;
      case "dec":
        dispatchData({ type: DEC_QTY, id, items });
        break;
      default:
        console.log("No matches found");
    }
  }

  if (cartItems.length === 0) {
    return isLoading ? (
      <Spinner />
    ) : (
      <div className="no-items">
        <h3>It Seems Your Cart Is Empty.</h3>
        <Link className="link" to="/">
          Go To Home Page{" "}
        </Link>
      </div>
    );
  } else {
    return isLoading ? (
      <Spinner />
    ) : (
      <div className="maindiv-container">
        <div className="cartProducts">
          {cartItems.map((item) => (
            <div className="cartItem" key={item._id}>
              <div className="left-container">
                <img
                  className="cartItem-images"
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div className="right-container">
                <p className="item_name"> {item.title} </p>
                <Rating rt={item.ratings} />
                <div className="flex-row">
                  <span
                    onClick={() =>
                      changeQty({ payload: "inc", data: item, value: 1 })
                    }
                    className="btn-size"
                  >
                    {" "}
                    +{" "}
                  </span>
                  <span className="qty"> {item.count} </span>
                  <span
                    onClick={() =>
                      changeQty({ payload: "dec", data: item, value: -1 })
                    }
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
