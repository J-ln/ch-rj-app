import React, { useContext, useEffect } from 'react'
import './CartWidget.scss'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartSharp'
import CartContext from '../../../context/CartContext'

const CartWidget = () => {
  const { quantity, products } = useContext(CartContext);

  useEffect(() => {


  }, [quantity, products])


  return (
    <div className="CartWidget">
      <ShoppingCartIcon className="Icon" />
      <span className="Counter">{quantity}</span>
    </div>
  )
}

export default CartWidget
