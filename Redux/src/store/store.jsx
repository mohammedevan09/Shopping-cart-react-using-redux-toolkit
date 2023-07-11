// import { configureStore } from '@reduxjs/toolkit'
// import cartReducer from './cartSlice'
// import productReducer from './productSlice'

// const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//     product: productReducer,
//   },
// })

// export default store

import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import productReducer from './productSlice'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
})

// Subscribe to store changes and update localStorage accordingly
// store.subscribe(() => {
//   const cartState = store.getState().cart
//   // console.log(cartState)
//   // localStorage.setItem('cart', JSON.stringify(cartState))
// })

export default store
