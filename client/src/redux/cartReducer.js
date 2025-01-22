import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: []
}

export const cartrSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state,action) => {
        const product=state.products.find(item=>item.id===action.payload.id)
        !product && state.products.push(action.payload)
    },
    removeFromCart: (state,action) => {
        state.products=state.products.filter(item=>item.id !== action.payload.id)
    },
    resetCart:()=>initialState
  },
})

// Action creators are generated for each case reducer function
export const { addToCart,removeFromCart,resetCart } = cartrSlice.actions

export default cartrSlice.reducer