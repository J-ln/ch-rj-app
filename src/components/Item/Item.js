import React from "react";
import { Link } from "react-router-dom";

import "./Item.scss";

function openDetail() {

}

const Item = ({ id, title, price, pictureUrl }) => {
    return (
        <li className="ItemContainer">
            <div className="ItemProductImage">
                {<img src={pictureUrl} alt={title} />}
            </div>
            <div className="ItemProductInfo">
                <h2 className="ItemProductName">{title}</h2>
                <div className="ItemProductPrice">{price}</div>
                <Link key={id} to={`/item/${id}`}>
                    <button className="ItemProductOpenBtn">Open Details</button>
                </Link>
            </div>
        </li>
    );
};

export default Item;
