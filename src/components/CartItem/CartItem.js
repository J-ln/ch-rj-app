import React from 'react';
import "./CartItem.scss";

const CartItem = () => {
    return (
        <div className='CartItemContainer'>
            <div className='CartItemImage'></div>
            <div className='CartItemInfo'>
                <div className='CartItemName'>Prueba</div>
                <div className='CartItemPrice'>$777</div>
            </div>
        </div>
    )
};

export default CartItem;