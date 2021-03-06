import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import AddShoppingCartSharpIcon from "@material-ui/icons/AddShoppingCartSharp";
import "./ItemCount.scss";
const ItemCount = ({ stock, addToCart }) => {
    let [items, setItems] = useState(0);

    function IncItem() {
        if (items < stock) {
            setItems((items += 1));
        }
    }
    function DecItem() {
        if (items > 0) {
            setItems((items -= 1));
        }
    }
    return (
        <div className="ItemCountContainer">
            <div className="ItemCount">
                <div className="ItemCountText">Add to Cart</div>
                <div className="ItemCounter">
                    <RemoveIcon onClick={DecItem} className="ItemDec" />
                    {items}
                    <AddIcon onClick={IncItem} className="ItemInc" />
                </div>
                <button
                    onClick={() => {
                        addToCart(items);
                    }}
                    className="AddToCartBtn">
                    <AddShoppingCartSharpIcon />
                </button>
            </div>
        </div>
    );
};

export default ItemCount;
