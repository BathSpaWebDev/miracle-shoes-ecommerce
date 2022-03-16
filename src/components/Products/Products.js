import "./Products.css";
import ShoeData from "../../shoes.json";
import { useState } from "react";
import { ProductPage } from "../ProductPage/ProductPage";

export const Products = () => {
  const [currentShoe, setCurrentShoe] = useState();
  const [className, setClassName] = useState("product_popup_off");

  return (
    <div className="products_container">
      <ProductPage
        currentShoe={currentShoe}
        className={className}
        setClassName={setClassName}
      />
      {ShoeData.results.map((shoe) => (
        <div key={shoe.id}>
          <div className="product_card">
            <img src={shoe.urls.thumb} alt="shoe pic" />
            <h2>{shoe.productName}</h2>
            <p>{shoe.alt_description}</p>
            <h3>Price £100</h3>
            <button
              onClick={() => {
                setCurrentShoe(shoe);
                setClassName("product_popup_on");
              }}
            >
              View
            </button>
          </div>
          <a href={shoe.user.portfolio_url}>{shoe.user.name}</a>
        </div>
      ))}
    </div>
  );
};
