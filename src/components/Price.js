import "../styles/price.css";

export default function Price({ price, discount, count }) {
  if (discount !== 0) {
    let finalPrice = price * count - (price * count * discount) / 100;
    return (
      <>
        <div className="item_price">
          ₹ {finalPrice.toFixed(2)}{" "}
          <span className="original-price"> {price} </span>{" "}
          <span className="discount"> {discount}% off</span>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="item_price">₹ {price * count.toFixed(2)} </div>
      </>
    );
  }
}
