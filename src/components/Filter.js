import { useCart } from "../context/cartContext";
import "../styles/filter.css";
export default function Filter() {
  const { filteredData, dispatchData } = useCart();
  const HIGH_TO_LOW = "highToLow";
  const LOW_TO_HIGH = "lowToHigh";
  return (
    <div className="filter-nav">
      Sort By Price
      <label>
        <input
          type="radio"
          name="sort"
          onChange={() => dispatchData({ type: HIGH_TO_LOW, filteredData })}
        ></input>{" "}
        High to Low
      </label>
      <label>
        <input
          type="radio"
          name="sort"
          onChange={() => dispatchData({ type: LOW_TO_HIGH, filteredData })}
        ></input>{" "}
        Low to High
      </label>
    </div>
  );
}
