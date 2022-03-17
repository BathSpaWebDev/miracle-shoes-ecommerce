import "./ProductPage.css";
import { CgCloseR } from "react-icons/cg";

export const ProductPage = ({ currentShoe, className, setClassName }) => {
  return (
    <div className={className}>
      <div className="product_image_container">
        <img
          className="product_image"
          src={currentShoe.urls.regular}
          alt="shoe pic"
        />
        <a href={currentShoe.user.portfolio_url}>{currentShoe.user.name}</a>
      </div>

      <CgCloseR
        className="x_close"
        onClick={() => setClassName("product_popup_off")}
      />

      <div className="product_details_container">
        <h1>{currentShoe.productName}</h1>
        <p className="single_product_description">{currentShoe.description}</p>
        <p className="prduct_in_stock">
          Only {currentShoe.stock} left in stock
        </p>
        <p>Price: £{currentShoe.price}</p>
        <button>Buy</button>
      </div>
    </div>
  );
};
