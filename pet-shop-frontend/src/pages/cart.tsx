import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { QuantitySwitch } from '@/components/ui/quantitySwitch'
import { SectionTitle } from '@/components/ui/section-title'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { RootState } from '@/store'
import { removeProduct, updateQuantity } from '@/store/cartSlice'
import { SetStateAction, useState } from 'react'

export const Cart = () => {
  const cart = useAppSelector((state: RootState) => state.cartReducer)
  const dispatch = useAppDispatch()
  const baseUrl = import.meta.env.VITE_API_URL
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
    <section className="container mx-auto">
      <SectionTitle
        title="Shopping cart"
        link="/products"
        btnText="Back to store"
      />
      {cart.products.length ? (
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            {cart.products.map((el) => (
              <div
                key={el.id}
                className="rounded-lg flex shadow-lg dark:shadow-slate-900"
              >
                <img
                  src={`${baseUrl}/${el.image}`}
                  alt={el.title}
                  className="w-[200px] h-[180px]"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center gap-2">
                    <p>{el.title}</p>
                    <Button
                      onClick={() => dispatch(removeProduct(el.id))}
                      variant={'outline'}
                    >
                      X
                    </Button>
                  </div>
                  <div className=" flex space-x-4 pt-6">
                    <QuantitySwitch
                      quantity={quantities[el.id]}
                      setQuantity={setQuantity(el.id)}
                    />
                    {el?.discont_price ? (
                      <>
                        <span className="font-semibold text-4xl">
                          ${el.discont_price}
                        </span>
                        <span className="font-medium text-xl text-slate-500 ml-4 line-through">
                          ${el.price}
                        </span>
                      </>
                    ) : (
                      <span className="font-semibold text-4xl">
                        ${el.price}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-slate-400 dark:bg-slate-900 p-8 rounded-lg shadow-lg">
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
        <h3>Cart is empty</h3>
      )}
    </section>
  )
}
