import "./Products.css";
import ShoeData from "../../shoes.json";
import { useState } from "react";

export const Products = () => {
  const [CurrentShoe, setCurrentShoe] = useState()
  
  return (
    <div className="products_container">
      {ShoeData.results.map((shoe) => (
        <div>
          <div key={shoe.id} className="product_card">
            <img src={shoe.urls.thumb} alt="shoe pic"/>
            <a className="" href={shoe.user.portfolio_url}>{shoe.user.name}</a>
            <h2>{shoe.productName}</h2>
            <p>{shoe.alt_description}</p>
            <h3>Price £100</h3>
            <button onClick={(e)=> {
              setCurrentShoe(shoe)  
              console.log(e.target)
            }}>view</button>
          </div>
          <ProductPage shoe={shoe} />
        </div>
      ))}
    </div>
  );
};


export const ProductPage = ({shoe}) => {

  return <div className="product_popup_off">
       <img src={shoe.urls.regular} alt="shoe pic"/>
       <div>
            <h1>Prodcut Name</h1>
            <p>Description</p>
            <p>Only 3 left in stock</p>
            <p>Price</p>       
            <button>Buy</button>
       </div>
    </div> 
};
