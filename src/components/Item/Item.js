import React, { useState, useEffect } from "react";

import "./Item.scss";

const Item = ({ id, title, price, pictureUrl, showItem }) => {
    const [itemid, setId] = useState("");
    useEffect(() => {
        setId(id);
    }, []);
    return (
        <li className="ItemContainer">
            <div className="ItemProductImage">
                {<img src={pictureUrl} alt={title} />}
            </div>
            <div className="ItemProductInfo">
                <h2 className="ItemProductName">{title}</h2>
                <div className="ItemProductPrice">{price}</div>
                <button
                    className="ItemProductOpenBtn"
                    onClick={() => showItem(itemid)}>
                    Open Details
                </button>
            </div>
        </li>
    );
};

export default Item;
