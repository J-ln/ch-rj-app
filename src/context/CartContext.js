import React, { useState } from "react";

const CartContext = React.createContext();

export const CartContextProvider = ({ children }) => {
    const [products, setProdutcs] = useState([])

    const addProducts = (pushProduct) => {
        // isInCart(pushProduct) ?
        //     products.find(product => product.id === pushProduct.id,
        //         { quantity: quantity + pushProduct.quanity })
        //     :
        setProdutcs([...products, pushProduct])
        console.log(products)
    }

    const removeProduct = (id) => {
        const newProducts = products.filter(product => product.id !== id)
        setProdutcs(newProducts)
    }

    const getProducts = () => {
        return products
    }

    const clearProducts = () => {
        setProdutcs([])
    }

    // const isInCart = (pushProduct) => {
    //     products.find(product => product.id === pushProduct.id) ?
    //         true : false
    // }
    return (
        <CartContext.Provider
            value={{
                products,
                addProducts,
                removeProduct,
                getProducts,
                clearProducts
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartContext


//Add to cart

//Remove item from cart

//Clear cart

//Is an item in cart

//Inc/desc quantity

//Total price

