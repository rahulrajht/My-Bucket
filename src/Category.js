import React from "react";
import { useUrl } from "./useUrl";
function Category() {
  const { setUrl } = useUrl();
  return (
    <div>
      <section>
        <div className="side-bar">
          <ul>
            <li onClick={() => setUrl("https://fakestoreapi.com/products")}>
              {" "}
              All{" "}
            </li>
            <li
              onClick={() =>
                setUrl(
                  "https://fakestoreapi.com/products/category/women clothing"
                )
              }
            >
              {" "}
              Women's{" "}
            </li>
            <li
              onClick={() =>
                setUrl(
                  "https://fakestoreapi.com/products/category/men clothing"
                )
              }
            >
              {" "}
              Men's{" "}
            </li>
            <li
              onClick={() =>
                setUrl("https://fakestoreapi.com/products/category/electronics")
              }
            >
              {" "}
              Electronics{" "}
            </li>
            <li
              onClick={() =>
                setUrl("https://fakestoreapi.com/products/category/jewelery")
              }
            >
              {" "}
              Jewelery{" "}
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Category;
