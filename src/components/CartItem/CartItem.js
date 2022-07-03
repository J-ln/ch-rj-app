import React from 'react';
import "./CartItem.scss";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const CartItem = () => {
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
            <div className='CartItemImage'></div>
            <div className='CartItemInfo'>
                <div className='CartItemName'>Prueba</div>
                <div className='CartItemQuantity'>
                    <RemoveIcon onClick={DecItem} className="QuantityDec" />
                    10
                    <AddIcon onClick={IncItem} className="QuantityInc" /></div>
                <div className='CartItemPrice'>Price: $777</div>
            </div>
        </div>
    )
};

export default CartItem;