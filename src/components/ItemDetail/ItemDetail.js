import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.scss";
import { Link } from "react-router-dom";

const ItemDetail = ({ title, price, stock, pictureUrl }) => {
    const [toBuy, setToBuy] = useState(0);

    function addToCart(toAdd) {
        setToBuy(toAdd);
        console.log(toBuy);
    }
    return (
        <div className="ItemContainer">
            <div className="ItemProductImage">
                {<img src={pictureUrl} alt={title} />}
            </div>
            <div className="ItemProductInfo">
                <h2 className="ItemProductName">{title}</h2>
                <div className="ItemProductPrice">{price}</div>
                {toBuy !== 0 && (
                    <button className="CartButton">
                        <Link className="CartLink" to="/cart">
                            Go to Cart
                        </Link>
                    </button>
                )}
            </div>
            {toBuy === 0 && <ItemCount stock={stock} addToCart={addToCart} />}
        </div>
    );
};

export default ItemDetail;
