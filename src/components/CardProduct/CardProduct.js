import React from "react";
import "./CardProduct.scss";

const CardProduct = ({ name, price }) => {
    return (
        <div className="CardContainer">
            <div className="CardProductImage"></div>
            <div className="CardProductInfo">
                <h2 className="CardProductName">{name}</h2>
                <div className="CardProductPrice">{price}</div>
            </div>
        </div>
    );
};

export default CardProduct;
