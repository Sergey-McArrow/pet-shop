import { SetStateAction, useState } from 'react'

import { CartItem } from '@/components/ui/cartItem'
import { Form } from '@/components/ui/form'
import { SectionTitle } from '@/components/ui/section-title'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { RootState } from '@/store'
import { updateQuantity } from '@/store/cartSlice'

export const Cart = () => {
  const cart = useAppSelector((state: RootState) => state.cartReducer)
  const dispatch = useAppDispatch()
  const quantity = cart.products.reduce((acc, val) => (acc += val.quantity), 0)

  const [quantities, setQuantities] = useState<Record<string, number>>(
    cart.products.reduce(
      (acc, product) => {
        acc[product.id] = product.quantity || 1
        return acc
      },
      {} as Record<string, number>
    )
  )

  const setQuantity = (id: number) => (value: SetStateAction<number>) => {
    const product = cart.products.find((p) => p.id === id)
    if (!product) return
    const newQuantity =
      typeof value === 'function' ? value(quantities[id]) : value
    setQuantities((prev) => ({
      ...prev,
      [id]: newQuantity,
    }))
    dispatch(
      updateQuantity({
        product,
        quantity: newQuantity,
      })
    )
  }

  return (
    <section className="container mx-auto w-11/12 md:w-full">
      <SectionTitle
        title="Shopping cart"
        link="/products"
        btnText="Back to store"
      />
      {cart.products.length ? (
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            {cart.products.map((product) => (
              <CartItem
                key={product.id}
                product={product}
                quantity={quantities[product.id]}
                setQuantity={setQuantity(product.id)}
              />
            ))}
          </div>
          <div className="p-8 rounded-lg shadow-lg dark:shadow-slate-900">
            <h4 className="font-bold text-4xl pb-6">Order details</h4>
            <p className="text-gray-700 font-medium text-4xl">
              {quantity} {quantity === 1 ? 'item' : 'items'}
            </p>
            <div className=" flex justify-between items-baseline">
              <p className="text-gray-700 font-medium text-4xl">Total</p>
              <p className="font-bold text-6xl">${cart.totalAmount}</p>
            </div>
            <Form />
          </div>
        </div>
      ) : (
        <p className="text-center text-2xl">Your cart is empty</p>
      )}
    </section>
  )
}
