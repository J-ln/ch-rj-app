import React, { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.scss";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import { CartContextProvider } from "../../context/CartContext";

const ItemDetail = ({ id, title, price, pictureUrl, stock }) => {
    const [toBuy, setToBuy] = useState(false);
    const { addProducts } = useContext(CartContext);

    function addToCart(quantity) {
        const pushProduct = {
            id: id,
            title: title,
            price: price,
            quantity: quantity,
            picture: pictureUrl,
            stock: stock
        }
        addProducts(pushProduct);
        setToBuy(!toBuy)
    }
    return (
        <CartContextProvider>
            <div className="ItemContainer">
                <div className="ItemProductImage">
                    {<img src={pictureUrl} alt={title} />}
                </div>
                <div className="ItemProductInfo">
                    <h2 className="ItemProductName">{title}</h2>
                    <div className="ItemProductPrice">{price}</div>
                    {toBuy && (
                        <button className="CartButton">
                            <Link className="CartLink" to="/cart">
                                Go to Cart
                            </Link>
                        </button>
                    )}
                </div>
                {!toBuy && <ItemCount stock={stock} addToCart={addToCart} />}
            </div>
        </CartContextProvider>
    );
};

export default ItemDetail;
