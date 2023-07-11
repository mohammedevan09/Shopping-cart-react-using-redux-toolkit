// import { createSlice } from '@reduxjs/toolkit'

// const initialState = []

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     add(state, action) {
//       state.push(action.payload)
//     },
//     remove(state, action) {
//       return state.filter((item) => item.id !== action.payload)
//     },
//   },
// })

// export const { add, remove } = cartSlice.actions
// export default cartSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

// Retrieve cart data from localStorage if available
const storedCart = localStorage.getItem('cart')
const initialState = storedCart ? JSON.parse(storedCart) : []

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload)
      localStorage.setItem('cart', JSON.stringify(state)) // Store updated cart in localStorage
    },
    remove(state, action) {
      const itemId = action.payload
      const updatedCart = state.filter((item) => item.id !== itemId)
      localStorage.setItem('cart', JSON.stringify(updatedCart))
      return updatedCart // Return the updated cart state
    },
  },
})

export const { add, remove } = cartSlice.actions
export default cartSlice.reducer
