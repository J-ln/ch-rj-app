import React, { useState } from "react";

const CartContext = React.createContext();

export const CartContextProvider = ({ children }) => {
    const [products, setProdutcs] = useState([])

    const addProducts = (product, quantity) => {
        const newProduct = { product, quantity }
        setProdutcs(...products, newProduct)
    }

    const removeProduct = (id) => {
        const newProducts = products.filter(product => product.id !== id)
        setProdutcs(newProducts)
    }

    const getProducts = () => {
        return products
    }


    return (
        <CartContext.Provider
            value={{
                products,
                addProducts,
                removeProduct,
                getProducts
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

