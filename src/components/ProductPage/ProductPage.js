import "./ProductPage.css";
import { IoIosCloseCircleOutline } from "react-icons/io";

export const ProductPage = ({ currentShoe, className, setClassName }) => {
  return (
    <div className={className}>
      <img
        className="product_image"
        src={currentShoe.urls.regular}
        alt="shoe pic"
      />

      <IoIosCloseCircleOutline
        className="x_close"
        onClick={() => setClassName("product_popup_off")}
      />

      <div className="product_details_container">
        <h1>{currentShoe.productName}</h1>
        <p>{currentShoe.description}</p>
        <p>Only 3 left in stock</p>
        <p>Price</p>
        <button>Buy</button>
      </div>
    </div>
  );
};
