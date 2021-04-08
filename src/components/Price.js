import "../styles/price.css";

export default function Price({ price, discount }) {
  if (discount !== 0) {
    let finalPrice = price - (price * discount) / 100;
    return (
      <>
        <div className="item_price">
          ₹ {finalPrice.toFixed(2)}{" "}
          <span
            style={{
              textDecoration: "line-through",
              fontSize: "14px",
              color: "gray",
              marginRight: "2px"
            }}
          >
            {" "}
            {price}{" "}
          </span>{" "}
          <span style={{ color: "green" }}> {discount}% off</span>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="item_price">₹ {price.toFixed(2)} </div>
      </>
    );
  }
}
