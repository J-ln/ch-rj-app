import React, { useEffect, useState, useContext } from 'react'
import "./CartContainer.scss";
import CartItem from '../CartItem/CartItem';
import CartContext from '../../context/CartContext';


const CartContainer = () => {
    const { products, clearProducts, total, calcTotal } = useContext(CartContext)



    useEffect(() => {
        calcTotal()

    }, [products, total])

    return (
        <div className='CartContainer'>
            <button className='CartClearButton' onClick={clearProducts}>Clear</button>
            <div className='CartTitle'>Your Cart</div>
            {!products.length &&
                <div className='CartEmptyText'>No produtcs added</div>}
            {products.map(item => (
                <CartItem
                    key={item.id}
                    title={item.title}
                    quantity={item.quantity}
                    pictureUrl={item.pictureUrl}
                    price={item.price}
                    id={item.id}
                    stock={item.stock}
                />
            ))}
            <div className='CartPriceContainer'>Sub Total <div className='CartPriceAmount'>${total}</div></div>
            <button className='CartBuyButton'>Check Out</button>
        </div>
    )
}

export default CartContainer