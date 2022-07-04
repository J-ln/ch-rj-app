import React from 'react';
import "./CartItem.scss";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const CartItem = (title, price, pictureUrl, quantity, stock) => {

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
        <div className='CartItemContainer'>
            <div className='CartItemImage'>
                <img src={pictureUrl} alt={title} />
            </div>
            <div className='CartItemInfo'>
                <div className='CartItemName'>{title}</div>
                <div className="CartItemQuantity">
                    <RemoveIcon onClick={DecItem} className="QuantityDec" />
                    {quantity}
                    <AddIcon onClick={IncItem} className="QuantityInc" />
                </div>
                <div className='CartItemPrice'>{price}</div>
            </div>
        </div>
    )
};

export default CartItem;