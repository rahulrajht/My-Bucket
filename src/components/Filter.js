import { useCart } from "../context/cartContext";

export default function Filter() {
  const { filteredData, dispatchData } = useCart();
  return (
    <nav className="filter-nav">
      <label>
        <input
          type="radio"
          name="sort"
          onChange={() => dispatchData({ type: "highToLow", filteredData })}
        ></input>{" "}
        Price - High to Low
      </label>
      <label>
        <input
          type="radio"
          name="sort"
          onChange={() => dispatchData({ type: "lowToHigh", filteredData })}
        ></input>{" "}
        Price - Low to High
      </label>
    </nav>
  );
}
