import React from 'react'
import "./CartContainer.scss";
import { CartContextProvider } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem';


const CartContainer = () => {
    // const [itemList, setItems] = useState([]);

    // useEffect(() => {
    //     const productsInCart = CartContextProvider.getProducts()
    //     setItems(productsInCart)
    // }, [itemList])

    return (
        <CartContextProvider>
            <div className='CartContainer'>
                <div className='CartTitle'>Your Cart</div>
                {/* {itemList.map(item => (
                    <CartItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        pictureUrl={item.pictureUrl}
                        quantity={item.quantity} />
                ))} */}
                <CartItem />
                <div className='CartPrice'>Total: $777</div>
            </div>
        </CartContextProvider>
    )
}

export default CartContainer