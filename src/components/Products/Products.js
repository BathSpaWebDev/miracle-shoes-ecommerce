import "./Products.css";
import ShoeData from "../../shoes.json";
import { useState } from "react";
import { ProductPage } from "../ProductPage/ProductPage";

export const Products = () => {
  const [currentShoe, setCurrentShoe] = useState(ShoeData.results[0]);
  const [className, setClassName] = useState("product_popup_off");
  const [isVisible, setIsVisible] = useState("visible");

  return (
    <div> 
      
    <div className="products_container">
      
      <ProductPage
        currentShoe={currentShoe}
        className={className}
        setClassName={setClassName}
        setIsVisible={setIsVisible}
      />
      {ShoeData.results.map((shoe) => (
        <div key={shoe.id} className={isVisible}>
          <div className="product_card">
            <div className="image_container">
              <img src={shoe.urls.thumb} alt="shoe pic" />
              <a href={shoe.user.portfolio_url}>{shoe.user.name}</a>
            </div>
            <div>
              <h2 className="product_title">{shoe.productName}</h2>
              <p className="product_description">{shoe.alt_description}</p>
              <h3>Price £{shoe.price}</h3>
            </div>
            <button
              onClick={() => {
                setCurrentShoe(shoe);
                setClassName("product_popup_on");
                setIsVisible("hidden");
              }}
            >
              View
            </button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};
