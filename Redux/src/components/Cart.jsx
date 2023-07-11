import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../store/cartSlice'

const Cart = () => {
  const cartItems = useSelector((state) => state.cart)

  const dispatch = useDispatch()

  const handleRemove = (prodId) => {
    dispatch(remove(prodId))
  }

  return (
    <>
      <h1 className="page">Cart Items</h1>
      <div className="cartWrapper">
        {cartItems.map((item) => (
          <section key={item.id}>
            <div className="image-wrapper">
              <img src={item.image} alt="" className="cart-image" />
            </div>
            <div className="cart-title">{item.title}</div>
            <div
              className={`${
                item.price > 100 ? 'high-price' : 'low-price'
              } cart-price`}
            >
              {item.price}
            </div>
            <div className="remove-wrapper">
              <div
                className="cart-remove"
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  )
}

export default Cart
