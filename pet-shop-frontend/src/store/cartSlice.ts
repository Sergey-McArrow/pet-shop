import { TProduct, TProductWithQuantity } from '@/types/data'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type TCartState = {
  products: TProductWithQuantity[]
  totalAmount: number
}

const initialState: TCartState = { products: [], totalAmount: 0 }

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<TProduct>) => {
      const newItem = action.payload
      const existingItem = state.products.find((item) => item.id === newItem.id)
      if (!existingItem) {
        state.products.push({ ...newItem, quantity: 1 })
      } else {
        existingItem.quantity += 1
      }

      state.totalAmount += newItem.discont_price || newItem.price
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      const id = action.payload
      const existingItem = state.products.find((item) => item.id === id)
      if (existingItem) {
        state.products = state.products.filter((item) => item.id !== id)
        state.totalAmount -=
          existingItem.discont_price ||
          existingItem.price * existingItem.quantity
      }
    },

    updateQuantity: (
      state,
      action: PayloadAction<{ product: TProduct; quantity: number }>
    ) => {
      const { product, quantity } = action.payload
      const existingItem = state.products.find((item) => item.id === product.id)
      if (existingItem && quantity > 0) {
        const price = existingItem.discont_price || existingItem.price
        state.totalAmount -= price * existingItem.quantity
        existingItem.quantity = quantity
        state.totalAmount += price * existingItem.quantity
      } else {
        state.products.push({ ...product, quantity: 1 })
      }
      state.totalAmount += product.discont_price || product.price
    },
    clearCart: (state) => {
      state.products = []
      state.totalAmount = 0
    },
  },
})

export const { addProduct, removeProduct, clearCart, updateQuantity } =
  cartSlice.actions

export default cartSlice.reducer
