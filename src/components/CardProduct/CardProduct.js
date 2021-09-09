import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./CardProduct.scss";

const CardProduct = ({ name, price, stock }) => {
    return (
        <div className="CardContainer">
            <div className="CardProductImage"></div>
            <div className="CardProductInfo">
                <h2 className="CardProductName">{name}</h2>
                <div className="CardProductPrice">{price}</div>
            </div>
            <ItemCount stock={stock} />
        </div>
    );
};

export default CardProduct;
