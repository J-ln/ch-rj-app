import React, { useState, useEffect, useContext } from 'react'
import "./CartContainer.scss";
import CartItem from '../CartItem/CartItem';
import CartContext from '../../context/CartContext';


const CartContainer = () => {
    const [itemList, setItemList] = useState([])
    const { products, getProducts } = useContext(CartContext)

    useEffect(() => {
        const productsInCart = getProducts()
        console.log(productsInCart)
        setItemList(productsInCart)
    }, [products])

    return (
        <div className='CartContainer'>
            <button className='CartClearButton'>Clear</button>
            <div className='CartTitle'>Your Cart</div>
            {!products.length == 0 &&
                <div className='CartEmptyText'>No produtcs added</div>}
            {products.length && (itemList.map(item => (
                <CartItem
                    key={item.id}
                    title={item.title}
                    price={item.price}
                    pictureUrl={item.pictureUrl}
                    quantity={item.quantity}
                    stock={item.stock} />

            )))}
            <div className='CartPriceContainer'>Sub Total <div className='CartPriceAmount'>$777</div></div>
            <button className='CartBuyButton'>Check Out</button>
        </div>
    )
}

export default CartContainer