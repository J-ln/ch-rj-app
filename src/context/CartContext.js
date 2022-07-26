import React, { useState } from "react";

const CartContext = React.createContext();

export const CartContextProvider = ({ children }) => {
    const [products, setProdutcs] = useState([])
    const [total, setTotal] = useState(0);
    const [quantity, setQuantity] = useState(0);

    const addProducts = (pushProduct) => {

        if (isInCart(pushProduct)) {
            addQuantity(pushProduct.id, pushProduct.quantity);
        }
        else {
            setProdutcs([...products, pushProduct])
            refreshCart();

        }
    }

    const removeProduct = (id) => {
        const newProducts = products.filter(product => product.id !== id)
        setProdutcs(newProducts)

        refreshCart();

    }

    const clearProducts = () => {
        setProdutcs([])
        refreshCart()
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
        refreshCart();
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
            let add = (products[i].price * products[i].quantity)
            subTotal += add
        }
        setTotal(subTotal);
    }
    const refreshCart = () => {
        calcQuantity()
        calcTotal()
    }

    const calcQuantity = () => {
        let totalElements = 0;
        for (let i = 0; i < products.length; i++) {
            let elems = products[i].quantity;
            totalElements += elems;
        }
        setQuantity(totalElements);
    }


    return (
        <CartContext.Provider
            value={{
                products,
                addProducts,
                removeProduct,
                clearProducts,
                incQuantity,
                decQuantity,
                total,
                quantity,
                calcTotal,
                calcQuantity
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartContext




