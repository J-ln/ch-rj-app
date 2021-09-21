import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ title, price, stock, pictureUrl }) => {
    return (
        <div className="ItemContainer">
            <div className="ItemProductImage">
                {<img src={pictureUrl} alt={title} />}
            </div>
            <div className="ItemProductInfo">
                <h2 className="ItemProductName">{title}</h2>
                <div className="ItemProductPrice">{price}</div>
            </div>
            <ItemCount stock={stock} />
        </div>
    );
};

export default ItemDetail;
