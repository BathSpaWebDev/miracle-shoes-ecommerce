import "./Products.css";
import ShoeData from "../../shoes.json";

export const Products = () => {
  return (
    <div>
      {ShoeData.results.map((shoe, i) => (
        <div key={i}>
          <img src={shoe.urls.thumb} alt="shoe pic" />
          <p>{shoe.description}</p>
        </div>
      ))}
    </div>
  );
};
