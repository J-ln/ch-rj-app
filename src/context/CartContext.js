import React, { useState } from "react";

const CartContext = React.createContext();

export const CartContextProvider = ({ children }) => {
    const [products, setProdutcs] = useState([])

    const addProducts = (pushProduct) => {
        console.log(isInCart(pushProduct))
        isInCart(pushProduct) ?
            addQuantity(pushProduct.id, pushProduct.quantity)
            :
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

    const isInCart = (pushProduct) => {
        if (products.find(product => product.id === pushProduct.id) === undefined) {
            return false
        } else {
            return true
        }
    }

    const addQuantity = (id, quantity) => {
        let i = products.findIndex(product => product.id === id)
        products[i].quantity += quantity
        if (products[i].quantity > products[i].stock) {
            products[i].quantity = products[i].stock
        }
    }

    const decQuantity = (id) => {
        let i = products.findIndex(product => product.id === id)
        if (products[i].quantity > 0) {
            products[i].quantity -= 1
        }
        refreshCart()
    }

    const incQuantity = (id) => {
        let i = products.findIndex(product => product.id === id)
        if (products[i].quantity < products[i].stock) {
            products[i].quantity += 1
        }
        refreshCart()
    }

    const calcTotal = () => {
        let subTotal = 0;
        for (let i = 0; i < products.length; i++) {
            let sum = (products[i].price * products[i].quantity)
            subTotal += sum
        }
        return subTotal
    }
    const refreshCart = () => {
        setProdutcs(products)
    }


    return (
        <CartContext.Provider
            value={{
                products,
                addProducts,
                removeProduct,
                getProducts,
                clearProducts,
                incQuantity,
                decQuantity,
                calcTotal
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartContext




