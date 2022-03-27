import "./ProductPage.css";
import { CgCloseR } from "react-icons/cg";

export const ProductPage = ({
  currentShoe,
  className,
  setClassName,
  setIsVisible,
}) => {
  return (
    <dialog className={className}>
      <div className="product_image_container">
        <img
          className="product_image"
          src={currentShoe.urls.regular}
          alt="shoe pic"
        />
        <a className="product_user_url" href={currentShoe.user.portfolio_url}>{currentShoe.user.name}</a>
      </div>

      <CgCloseR
        className="x_close"
        onClick={() => {
          setClassName("product_popup_off");
          setIsVisible("visible");
        }}
      />

      <div className="product_details_container">
        <h1>{currentShoe.productName}</h1>
        <p className="single_product_description">
          {!currentShoe.description
            ? currentShoe.alt_description
            : currentShoe.description}
        </p>
        <div className="price_stock_container">
          <p className="single_product_price">Price: £{currentShoe.price}</p>
          <p className="prduct_in_stock">
            {currentShoe.stock < 5
              ? "Low Stock!"
              : `Only ${currentShoe.stock} left in stock`}
          </p>
        </div>

        <button>Buy Now!</button>
      </div>
    </dialog>
  );
};
