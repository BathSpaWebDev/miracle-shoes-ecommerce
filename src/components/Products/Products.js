import "./Products.css";
import ShoeData from "../../shoes.json";

export const Products = () => {
  return (
    <div className="products_container">
      {ShoeData.results.map((shoe) => (
        <div>
          <div key={shoe.id} className="product_card">
            <img src={shoe.urls.thumb} alt="shoe pic" />
            <h2>{shoe.productName}</h2>
            <p>{shoe.alt_description}</p>
            <h3>Price £100</h3>
          </div>
          <a href={shoe.user.portfolio_url}>{shoe.user.name}</a>
        </div>
      ))}
    </div>
  );
};
