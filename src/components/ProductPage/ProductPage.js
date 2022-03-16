import "./ProductPage.css";

export const ProductPage = ({ currentShoe, className, setClassName }) => {
  return (
    <div className={className}>
      <p onClick={() => setClassName("product_popup_off")}>X</p>
      <img
        className="product_image"
        src={currentShoe.urls.regular}
        alt="shoe pic"
      />
      <div>
        <h1>{currentShoe.productName}</h1>
        <p>{currentShoe.description}</p>
        <p>Only 3 left in stock</p>
        <p>Price</p>
        <button>Buy</button>
      </div>
    </div>
  );
};
