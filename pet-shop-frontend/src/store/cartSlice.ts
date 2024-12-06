import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { TProduct, TProductWithQuantity } from '@/types/data'

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
        state.totalAmount += newItem.discount_price ?? newItem.price
      } else {
        existingItem.quantity += 1
        state.totalAmount += existingItem.discount_price ?? existingItem.price
      }
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      const id = action.payload
      const existingItem = state.products.find((item) => item.id === id)
      if (existingItem) {
        state.totalAmount -=
          (existingItem.discount_price ?? existingItem.price) *
          existingItem.quantity
        state.products = state.products.filter((item) => item.id !== id)
      }
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ product: TProduct; quantity: number }>
    ) => {
      const { product, quantity } = action.payload
      const existingItem = state.products.find((item) => item.id === product.id)

      if (existingItem) {
        const price = existingItem.discount_price ?? existingItem.price
        state.totalAmount -= price * existingItem.quantity // Remove old amount

        if (quantity > 0) {
          existingItem.quantity = quantity
          state.totalAmount += price * quantity // Add new amount
        } else {
          state.products = state.products.filter(
            (item) => item.id !== product.id
          )
        }
      } else if (quantity > 0) {
        const price = product.discount_price ?? product.price
        state.products.push({ ...product, quantity })
        state.totalAmount += price * quantity
      }
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
