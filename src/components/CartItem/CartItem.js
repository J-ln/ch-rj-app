import React, { useEffect, useContext, useState } from 'react';
import "./CartItem.scss";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import DeleteIcon from "@material-ui/icons/Delete"
import CartContext from '../../context/CartContext';



const CartItem = (item) => {
    let [quantity, setQuantity] = useState()
    const { removeProduct, incQuantity, decQuantity } = useContext(CartContext)

    function incQuantityCta() {
        if (quantity < item.stock) {
            incQuantity(item.id)
            setQuantity((quantity += 1));
        }
    }

    function decQuantityCta() {
        if (quantity > 0) {
            decQuantity(item.id)
            setQuantity((quantity -= 1));
        }
    }
    useEffect(() => {
        if (quantity === undefined) {
            setQuantity(item.quantity)
        }
    }, [quantity])


    return (
        <div className='CartItemContainer'>
            <DeleteIcon onClick={() => removeProduct(item.id)} className="CartDeleteButton" />
            <div className='CartItemImage'>
                <img src={item.pictureUrl} alt={item.title} />
            </div>
            <div className='CartItemInfo'>
                <div className='CartItemName'>{item.title}</div>
                <div className="CartItemQuantity">
                    <RemoveIcon onClick={() => decQuantityCta(item.id)} className="QuantityDec" />
                    {quantity}
                    <AddIcon onClick={() => incQuantityCta(item.id)} className="QuantityInc" />
                </div>
                <div className='CartItemPrice'>${item.price}</div>
            </div>
        </div>
    )
};

export default CartItem;