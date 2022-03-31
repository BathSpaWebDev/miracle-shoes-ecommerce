import React from "react";
import "./Cart.css"

export const Cart = () => {
    return(
        
            <div className="sidebar">
                <h2 className="items">Cart</h2>
                <ul className="items">
                    <li>Items</li>
                    <hr />
                    <li><strong>Total</strong></li>
                </ul>

                <hr/>
    
        <button className="cart-button" onClick={() => alert('Checkout')}>
            Ckeckout
        </button>
    
            </div>  
    
    )
}