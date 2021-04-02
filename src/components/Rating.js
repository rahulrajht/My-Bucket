import star from "../images/star.png";
import "../styles.css";

export default function Rating({ rt }) {
  let color = "";
  if (rt <= 2) {
    color = "badge--red";
  }
  if (rt >= 2 && rt <= 3) color = "badge--yellow";
  if (rt >= 3 && rt <= 5) color = "badge-green";
  return (
    <>
      <div className="card__badges">
        <div className="rating">
          <span className={`badge ${color}`}>
            {rt}
            <img className="fa" width="15px" src={star} alt="" />
          </span>
        </div>
      </div>
    </>
  );
}
